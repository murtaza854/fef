import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { TabPanel } from '../../components'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import Button from 'react-bootstrap/Button'
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
//   };  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'white',
    },
    img: {
        padding: 5
    },
    appBar: {
        backgroundColor: 'white',
        boxShadow: 'none',
        width: 'fit-content',
        position: 'relative',
        margin: 'auto'
    }
  }));



function ScrollableTabsButtonAuto(props) {
    const palletType = "light";
    const darkTheme = createMuiTheme({
        palette: {
        type: palletType,
        primary: {
            main: '#e38454',
        },
        secondary: {
            main: '#e38454',
        },
        // background: {
        //   default: '#ededed',
        // },
        error: {
            main: '#c31200',
        },
        },
        typography: {
        fontFamily: 'Raleway',
        },
    });
    
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const [DATA,SETDATA]=React.useState([
        {image: '/images/background.png', title: ''},
        {image: '/images/background.png', title: ''},
        {image: '/images/background.png', title: ''},
        {image: '/images/background.png', title: ''},
        {image: '/images/background.png', title: ''},
        {image: '/images/background.png', title: ''},
        {image: '/images/background.png', title: ''},
        {image: '/images/background.png', title: ''},
        {image: '/images/background.png', title: ''},
        {image: '/images/background.png', title: ''},
    ]);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const addImages = (event) => {
    SETDATA(oldarray => [...oldarray,{image: '/images/background.png', title: ''}])
  };
    
    return (
        <ThemeProvider theme={darkTheme}>
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            >
            <Tab disableRipple label="Item One" {...a11yProps(0)} />
          <Tab disableRipple label="Item Two" {...a11yProps(1)} />
          <Tab disableRipple label="Item Three" {...a11yProps(2)} />
          <Tab disableRipple label="Item Four" {...a11yProps(3)} />
          <Tab disableRipple label="Item Five" {...a11yProps(4)} />
          <Tab disableRipple label="Item Six" {...a11yProps(5)} />
          <Tab disableRipple label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <ResponsiveMasonry
                columnsCountBreakPoints={{400: 1, 750: 4, 900: 5}}
            >
                <Masonry>
                    {DATA.map((value, index) => (
                        <img
                        className={classes.img}
                        onClick={_ => window.location.pathname = value.path}
                            key={index}
                            src={value.image}
                            style={{width: "100%", display: "block"}}
                            alt={value.title}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            <Button variant="primary" onClick={addImages}>Show more</Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
        </div>
        </ThemeProvider>
    );
}

export default ScrollableTabsButtonAuto;