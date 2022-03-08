import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableToolbar } from "../tableToolbar/TableToolbar";
import { TableHeadCustom } from '../tableHead/TableHeadCustom';
import { stableSort } from '../../stabalizedSort';
import { getComparator } from '../../comparator';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Col, Row } from 'react-bootstrap';
import { TableHead } from '@mui/material';


export default function OrderTable(props) {

    const {
        rows,
        filteredRows,
        setFilteredRows,
        tableOrder,
        searchField
    } = props;

    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState(tableOrder);
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [searchText, setSearchText] = React.useState('');
    const [open, setOpen] = React.useState([].fill(false, 0, rows.length));

    React.useEffect(() => {
        if (rows.length > 0) {
            setFilteredRows(rows.filter(row => {
                return row[searchField].toLowerCase().includes(searchText.toLowerCase());
            }));
        }
    }, [searchText, rows, setFilteredRows, searchField]);

    const handleSearch = event => {
        setSearchText(event.target.value);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = filteredRows.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableToolbar selected={selected} handleSearch={handleSearch} searchText={searchText} numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <TableHeadCustom
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={filteredRows.length}
                        />
                        {/* <TableBody> */}
                        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                   filteredRows.slice().sort(getComparator(order, orderBy)) */}
                        {filteredRows.length > 0 && stableSort(filteredRows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableBody key={row.id}>
                                        <TableRow
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                            // padding="none"
                                            >
                                                {row.orderNumber}
                                            </TableCell>
                                            <TableCell>{row.orderDate}</TableCell>
                                            <TableCell>{row.orderStatusDisplay}</TableCell>
                                            <TableCell>{row.amountTotal}</TableCell>
                                            <TableCell>
                                                <IconButton
                                                    aria-label="expand row"
                                                    size="small"
                                                    onClick={() => {
                                                        const openArray = [...open];
                                                        openArray[index] = !openArray[index];
                                                        setOpen(openArray);
                                                    }}
                                                >
                                                    {open[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                                                <Collapse in={open[index]} timeout="auto" unmountOnExit>
                                                    <Box sx={{ margin: 1 }}>
                                                        <Typography variant="h5" gutterBottom component="div">
                                                            Order Details
                                                        </Typography>
                                                        <Row>
                                                            <Table size="small" aria-label="purchases">
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell>Name</TableCell>
                                                                        <TableCell>Product Code</TableCell>
                                                                        <TableCell align="right">Unit Price</TableCell>
                                                                        <TableCell align="right">Quantity</TableCell>
                                                                        <TableCell align="right">Total price</TableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    {
                                                                        row.items.map((item) => (
                                                                            <TableRow key={item.orderItemId}>
                                                                                <TableCell component="th" scope="row">
                                                                                    {item.name}
                                                                                </TableCell>
                                                                                <TableCell>{item.sku}</TableCell>
                                                                                <TableCell align="right">$ {item.unitPrice}</TableCell>
                                                                                <TableCell align="right">{item.quantity}</TableCell>
                                                                                <TableCell align="right">$ {item.unitPrice * item.quantity}</TableCell>
                                                                            </TableRow>
                                                                        ))
                                                                    }
                                                                </TableBody>
                                                            </Table>
                                                        </Row>
                                                        <Row className="margin-global-top-1">
                                                            <Typography variant="h5" gutterBottom component="div">
                                                                Shipping Address
                                                            </Typography>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Typography variant="body2" gutterBottom>
                                                                    {row.shipTo.name}
                                                                </Typography>
                                                                <Typography variant="body2" gutterBottom>
                                                                    {row.shipTo.phone}
                                                                </Typography>
                                                                <Typography variant="body2" gutterBottom>
                                                                    {row.shipTo.street1}
                                                                </Typography>
                                                                <Typography variant="body2" gutterBottom>
                                                                    {row.shipTo.street2}
                                                                </Typography>
                                                                <Typography variant="body2" gutterBottom>
                                                                    {row.shipTo.city}, {row.shipTo.state} {row.shipTo.postalCode}
                                                                </Typography>
                                                                <Typography variant="body2" gutterBottom>
                                                                    {row.shipTo.country}
                                                                </Typography>
                                                            </Col>
                                                        </Row>
                                                    </Box>
                                                </Collapse>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                        {/* </TableBody> */}
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}