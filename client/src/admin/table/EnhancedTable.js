import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { userDataObj, projectDataObj, imageCategoryObj, imagetDataObj, newsletterObj, donationObj } from '../../db'
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
// import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import CheckIcon from '@material-ui/icons/Check';
import './Table.scss'

import {
  useHistory, useLocation,
} from "react-router-dom";

import { EnhancedTableHead, EnhancedTableToolbar } from '../components'
import { useParams } from 'react-router';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       {numSelected > 0 ? (
//         <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton aria-label="delete">
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton aria-label="filter list">
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

EnhancedTableToolbar.propTypes = {
  selected: PropTypes.array.isRequired,
};

const useStyles = makeStyles((theme) => ({
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginBottom: 15
  },
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  img: {
    width: 200,
    paddingTop: 15,
    paddingBottom: 15
  }
}));

let currentModel = '';
let reload = false;

export default function EnhancedTable(props) {
  const { model } = useParams();
  const location = useLocation();
  const history = useHistory();
  let tableFetch = {};
  if (model === 'users') tableFetch = userDataObj;
  else if (model === 'projects') tableFetch = projectDataObj;
  else if (model === 'image-category') tableFetch = imageCategoryObj;
  else if (model === 'images') tableFetch = imagetDataObj;
  else if (model === 'newsletter') tableFetch = newsletterObj;
  else if (model === 'donations') tableFetch = donationObj;

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(tableFetch['ordering']);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [tableRows, setTableRows] = React.useState([]);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertText, setAlertText] = React.useState('');

  if (model !== currentModel) {
    // console.log(document.getElementById('data'));
    // currentModel = model;
    // reload = false;
    // setTableRows([]);
  }
  history.listen((location, action) => {
    reload = false;
    })

  useEffect(() => {
      try {
        if (location.state.content.data === 'success') {
          if (location.state.length === 1) {
            setAlertText('1 element has been deleted.');
          } else {
            setAlertText(`${location.state.length} elements have been deleted.`);
          }
          setAlertOpen(true);
          setTimeout(() => {
            setAlertOpen(false);
          }, 5000);
        }
      } catch (error) {
        
      }
  }, [location]);

  useEffect(() => {(
    async () => {
      if (!reload) {
        const rows = [];
        const response = await fetch(tableFetch.apiTable, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        });
        const content = await response.json();
        console.log(content);
        content.data.forEach(element => {
          rows.push(tableFetch.createTableData(element));
        });
        reload = true;
        setTableRows(rows);
      }
    })();
  });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = tableRows.map((n) => n[tableFetch['checkboxSelection']]);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, value) => {
    const selectedIndex = selected.indexOf(value);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, value);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (value) => selected.indexOf(value) !== -1;
  return (
    <div id='data' className={classes.root}>
      <div className={classes.alert}>
      <Collapse in={alertOpen}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {alertText}
        </Alert>
      </Collapse>
    </div>

      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          modelName={tableFetch.modelName}
          editAllowed={tableFetch.editAllowed}
          deleteAllowed={tableFetch.deleteAllowed}
          addAllowed={tableFetch.addAllowed}
          selected={selected} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={tableRows.length}
              headCells={tableFetch.headCells}
            />
            <TableBody>
              {stableSort(tableRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row[tableFetch['checkboxSelection']]);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  // const tableRow123 = [
                  //   <TableCell component="th" id={labelId} scope="row" padding="none">
                  //       {row.name}
                  //     </TableCell>,
                  //     <TableCell align="right">{row.calories}</TableCell>,
                  //     <TableCell align="right">{row.fat}</TableCell>,
                  //     <TableCell align="right">{row.carbs}</TableCell>,
                  //     <TableCell align="right">{row.protein}</TableCell>,
                  // ]
                  const tableRow = [];
                  let c = 0;
                  for (const key in row) {
                    let textCenter = '';
                    if (tableFetch.rightAllign.includes(key)) textCenter = 'text-right';
                    if (key === 'id') {
                      tableRow.push(
                        <TableCell style={{display: 'none'}} key={c}>{row[key]}</TableCell>
                      );
                    } else if (key === 'name') {
                      tableRow.push(
                        <TableCell key={c} component="th" id={labelId} scope="row" padding="none">
                          {row[key]}
                        </TableCell>
                      );
                    } else if (key === 'imagePath') {
                      tableRow.push(
                        <TableCell key={c} component="th" id={labelId} scope="row" padding="none">
                          <img className={classes.img} src={row[key]} alt="Preview"></img>
                        </TableCell>
                      );
                    } else if (row[key] === false || row[key] === '') {
                      tableRow.push(
                        <TableCell key={c}><CloseIcon color="secondary" /></TableCell>
                      );
                    } else if (row[key] === true) {
                      tableRow.push(
                        <TableCell key={c}><CheckIcon color="primary" /></TableCell>
                      );
                    } else {
                      tableRow.push(
                        <TableCell className={textCenter} key={c}>{row[key]}</TableCell>
                      );
                    }
                    c += 1;
                  }
                  // if (flag === false) return <div></div>
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row[tableFetch['checkboxSelection']])}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row[tableFetch['checkboxSelection']]}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      {tableRow}
                      {/* {tableRow123.map((value, index) => {
                        console.log(index)
                        return <TableCell key={index}>{value}</TableCell>
                        // return value;
                      })} */}
                      {/* {tableRow123.map(function (i) {
                        return i;
                      })} */}
                      {/* {tableRow123[0]}
                      {tableRow123[1]}
                      {tableRow123[2]}
                      {tableRow123[3]}
                      {tableRow123[4]}
                      {tableRow123[5]} */}
                      {/* <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell> */}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
