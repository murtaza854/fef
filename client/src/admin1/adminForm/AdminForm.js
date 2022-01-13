import React from 'react';
import { Divider, Typography, makeStyles } from '@material-ui/core';
import { Container, Col, Row } from 'react-bootstrap';
import { userDataObj, projectDataObj, imagetDataObj, imageCategoryObj } from '../../db';
import { useParams } from 'react-router';
import './AdminForm.scss';

const useStyles = makeStyles((theme) => ({
    title: {
        flex: '1 1 100%',
        marginBottom: 10
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
        marginBottom: 15
      },
    highlight: {
        color: '#c31200'
    },
    marginTopAll: {
        marginTop: 15
    },
    delete: {
        backgroundColor: '#c31200',
        color: 'white',
        marginRight: 15,
        '&:hover': {
            background: 'black',
         },
      }
}));

function AdminForm(props) {
    const { model, id } = useParams();
    const classes = useStyles();

    let formFetch = {};
    if (model === 'users') formFetch = userDataObj;
    if (model === 'projects') formFetch = projectDataObj;
    if (model === 'images') formFetch = imagetDataObj;
    if (model === 'image-category') formFetch = imageCategoryObj;

    return (
        <Container fluid className='adminForm'>
            <Row>
                <Col>
                <Typography className={classes.title} variant="h3">
                    {formFetch.modelName}
                <Divider />
                </Typography>
                </Col>
            </Row>
            <Row>
                <Col>{formFetch.Form(id)}</Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default AdminForm;