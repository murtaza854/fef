import { Toolbar, Typography } from "@mui/material";
import { alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const TableToolbar = (props) => {
    const { numSelected, handleSearch, searchText } = props;

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
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Orders
            </Typography>
            <div className="search-bar-toolbar">
                <TextField onChange={handleSearch} value={searchText} id="standard-basic" label="Search" variant="standard" />
            </div>
        </Toolbar>
    );
};