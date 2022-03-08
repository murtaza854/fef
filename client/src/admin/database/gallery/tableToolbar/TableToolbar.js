import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { alpha } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

export const TableToolbar = (props) => {
    const { numSelected, selected } = props;

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
                    Gallery
                </Typography>
            )}

            {numSelected > 0 ? (
                <>
                    <Link to={`/admin/gallery/delete?selected=${JSON.stringify(selected)}`}>
                        <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </>
            ) : (
                <div className="search-bar-toolbr">
                    {/* <TextField onChange={handleSearch} value={searchText} id="standard-basic" label="Search" variant="standard" /> */}
                    <Link to="/admin/gallery/add">
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