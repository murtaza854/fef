import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Toolbar, Tooltip, Typography } from "@mui/material";
import { alpha } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import api from '../../../../api';
import React from "react";

export const TableToolbar = (props) => {
    const { numSelected, handleSearch, searchText, selected, rows, setRows } = props;

    const [disabled, setDisabled] = React.useState(true);
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        if (value !== '') {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [value]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`${api}/shippingRate/action?markActive=${value}&ids=${JSON.stringify(selected)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        const newRows = [];
        if (data.data === 'success') {
            for (let i = 0; i < rows.length; i++) {
                const element = rows[i];
                if (selected.includes(element.id)) {
                    element.active = value;
                }
                newRows.push(element);
            }
            setRows(newRows);
        }
    };

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Shipping Rates
                </Typography>
            )}

            {numSelected > 0 ? (
                <div className="search-bar-toolbar">
                    <FormControl variant="standard" style={{ width: '100%' }}>
                        <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={value}
                            onChange={handleChange}
                            label="active"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={true}>Mark Active</MenuItem>
                            <MenuItem value={false}>Mark Inactive</MenuItem>
                        </Select>
                    </FormControl>
                    <Button disabled={disabled} style={{ marginLeft: '10px' }} type="button" onClick={onSubmit} variant="contained" color="secondary">
                        Submit
                    </Button>
                    {/* <Tooltip title="Delete">
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip> */}
                </div>
            ) : (
                <div className="search-bar-toolbar">
                    <TextField onChange={handleSearch} value={searchText} id="standard-basic" label="Search" variant="standard" />
                    <Link to="/admin/shipping-rate/add">
                        <Tooltip title="Add">
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </div>
            )}
        </Toolbar>
    );
};