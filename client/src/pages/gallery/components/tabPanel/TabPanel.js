import React from 'react';
import './TabPanel.scss';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div 
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
        >
        {value === index && (
        <Box p={3}>
        <Typography>{children}</Typography>
        </Box>
      )}
            
        </div>
    );
}

export default TabPanel;