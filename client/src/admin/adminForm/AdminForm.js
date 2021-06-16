import React from 'react';
// import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { Container, Col, Row } from 'react-bootstrap';
import { userDataObj, projectDataObj, imagetDataObj, imageCategoryObj } from '../../db';
import { useParams } from 'react-router';
import './AdminForm.scss'

function AdminForm(props) {
    const { model, id } = useParams();
    let formFetch = {};
    if (model === 'users') formFetch = userDataObj;
    if (model === 'projects') formFetch = projectDataObj;
    if (model === 'images') formFetch = imagetDataObj;
    if (model === 'image-category') formFetch = imageCategoryObj;

    return (
        <Container fluid className='adminForm'>
            <Row>
                <Col>{formFetch.Form(id)}</Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default AdminForm;