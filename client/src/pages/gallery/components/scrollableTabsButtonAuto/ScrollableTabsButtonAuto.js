import React from 'react';
import { makeStyles } from '@mui/styles';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Heading1 } from '../../../../components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  img: {
    padding: 5,
    width: 200,
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

  const classes = useStyles();

  // const [DATA] = React.useState([]);
  const DATA = [
    { image: 'DSC_1618-min.JPG', title: '' },
    { image: 'DSC_1625-min.JPG', title: '' },
    { image: 'DSC_1628-min.JPG', title: '' },
    { image: 'DSC_1631-min.JPG', title: '' },
    { image: 'DSC_1647-min.JPG', title: '' },
    { image: 'DSC_1633-min.JPG', title: '' },
    { image: 'DSC_1644-min.JPG', title: '' },
    { image: 'DSC_1495-min.JPG', title: '' },
    { image: 'DSC_1559-min.JPG', title: '' },
    { image: 'DSC_1568-min.JPG', title: '' },
    { image: 'DSC_1603-min.JPG', title: '' },
    { image: 'DSC_1604-min.JPG', title: '' },
    { image: 'DSC_1518-min.JPG', title: '' },
    { image: 'DSC_1623-min.JPG', title: '' },
    { image: 'DSC_1543-min.JPG', title: '' },
    { image: 'DSC_1561-min.JPG', title: '' },
    { image: 'DSC_1609-min.JPG', title: '' },
    { image: 'DSC_1501-min.JPG', title: '' },
  ];

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col lg={10}>
          <Heading1 first="Gallery" color="#4c483f" ></Heading1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={10}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 400: 1, 750: 4, 900: 5 }}
          >
            <Masonry>
              {DATA.map((value, index) => (
                <img
                  className={classes.img}
                  key={index}
                  src={`/images/${value.image}`}
                  // src={"'/images/background.png'"}
                  style={{ width: "100%", display: "block" }}
                  alt={value.title}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Col>
      </Row>
    </Container>
  );
}

export default ScrollableTabsButtonAuto;