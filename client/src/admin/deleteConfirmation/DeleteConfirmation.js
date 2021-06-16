import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Typography, Divider, makeStyles, ListItem, List, ListItemText, Button } from '@material-ui/core';
import { Col, Container, Row } from 'react-bootstrap';
import api from '../../api';


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

function DeleteConfirmation(props) {
    const location = useLocation();
    let history = useHistory();
    const { model } = useParams();
    const classes = useStyles();

    const [modelName, setModelName] = useState('');
    const [selected, setSelected] = useState([]);
    const [length, setLength] = useState(0);
    const [text, setText] = useState('element');
    const [text1, setText1] = useState('The element is listed below:');
    const [items, setItems] = useState([]);

    useEffect(() => {(
        async () => {
            const selected = location.state.selected;
            setModelName(location.state.modelName);
            setLength(selected.length);
            setSelected(selected)
            let query = selected.join(',');
            if (query !== '') query = `?id=${query}`;
            const response = await fetch(`${api}/image-category/getByIds${query}`, {
                headers: {'Content-Type': 'application/json'},
            });
            const content = await response.json();
            setItems(content.data);
        })();
    }, [location]);

    useEffect(() => {
        if (length > 1) {
            setText('elements');
            setText1('All the elements are listed below:')
        }
    }, [length]);

    const deleteConfirmed = async e => {
        const response = await fetch(`${api}/image-category/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ids: selected}),
        });
        const content = await response.json();
        history.push({
            pathname: `/admin/${model}`,
            state: {content: content, length: length}
        });
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Typography className={classes.title} variant="h3">
                        Confirm Deletion
                        <Divider />
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Typography>
                        Are you sure you want to delete <b className={classes.highlight}>{length} {text}</b> of {modelName}?
                    </Typography>
                </Col>
            </Row>
            <Row className={classes.marginTopAll}>
                <Col>
                    <Typography>
                        {text1}
                    </Typography>
                </Col>
            </Row>
            <Row className={classes.marginTopAll}>
                <Col className={classes.demo}>
                    <List>
                        {items.map((value, index) => {
                        return <ListItem key={index}>
                                    <ListItemText
                                        primary={`- ${value.name}`}
                                    />
                                </ListItem>
                        })}
                    </List>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button onClick={deleteConfirmed} type="submit" variant="contained" className={classes.delete}>
                    Delete
                </Button>
                <Button onClick={_ => history.push(`/admin/${model}`)} type="submit" variant="contained" color="secondary">
                    Cancel
                </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default DeleteConfirmation;