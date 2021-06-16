import { FormControl, Input, InputLabel, FormHelperText, Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../api';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

const createImageCategoryTableData = (data) => {
    let { id, name } = data;
    return { id, name };
}

const editObjCheck = (data, value, editObj) => {
    if (editObj) return data.find(obj => obj.name.toLowerCase().trim() === value.toLowerCase().trim() && obj.name !== editObj.name);
    else return data.find(obj => obj.name.toLowerCase().trim() === value.toLowerCase().trim())
}

const imageCategoryObj = {
    apiTable: `${api}/image-category/TableData`,
    createTableData : createImageCategoryTableData,
    headCells: [
        { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
        { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
      ],
    checkboxSelection: 'id',
    editAllowed: true,
    modelName: 'Image Category',
    ordering: 'id',
    rightAllign: [],
    Form: function(id) {
        let history = useHistory();

        let queryID = '';
        if (id != null) queryID = parseInt(id);
        const [editObj, setEditObj] = useState(null);

        const [isDisabled, setCanSubmit] = useState(true);

        const [nameState, setNameState] = useState({name: '', helperText: 'Enter a name Ex. Assembly', error: false});
        const [imageCategoriesArray, setImageCategoriesArray] = useState([]);

        const [pressedBtn, setPressedBtn] = useState(null);

        useEffect(() => {(
            async () => {
                const response = await fetch(`${api}/image-category/TableData`, {
                    headers: {'Content-Type': 'application/json'},
                });
                const content = await response.json();
                const obj = content.data.find(o => o.id === queryID);
                setEditObj(obj)
                setImageCategoriesArray(content.data)
            })();
          }, [queryID]);

        useEffect(() => {
            if (editObj) setNameState(prevState => ({ ...prevState, name: editObj.name }));
        }, [editObj]);
        
        useEffect(() => {
            let flag = true;
            if (nameState.name.length === 0) flag = true;
            else if (nameState.error === true) flag = true;
            else flag = false;
            setCanSubmit(flag);
        }, [nameState]);

        const nameOnChange = (event) => {
            const { name, value } = event.target;
            setNameState(prevState => ({ ...prevState, [name]: value }));
            const obj = editObjCheck(imageCategoriesArray, value, editObj);
            if (obj) setNameState(prevState => ({ ...prevState, helperText: `${obj.name} already exists!`, error: true }));
            else setNameState(prevState => ({ ...prevState, helperText: 'Enter a name Ex. Assembly', error: false }));
        }

        const onSubmit = async e => {
            e.preventDefault();
            if (queryID === '') {
                const response = await fetch(`${api}/image-category/add`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({name: nameState.name}),
                });
                const content = await response.json();
                console.log(content);
            } else {
                const response = await fetch(`${api}/image-category/update`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id: queryID, name: nameState.name}),
                });
                const content = await response.json();
                console.log(content);
            }
            if (pressedBtn === 1) {
                history.push('/admin/image-category');
            }
            else {
                setEditObj(null);
                setNameState({name: '', helperText: 'Enter a name Ex. Assembly', error: false});
                queryID='';
                history.push('/admin/image-category/add');
            }
        };

        return (<form onSubmit={onSubmit} autoComplete="off">
            <h2>Add a Image Category</h2>
            <fieldset>
                <legend>Category</legend>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="name">
                        <FormControl required>
                            <InputLabel error={nameState.error} color="secondary" htmlFor="name">Name</InputLabel>
                            <Input
                                color="secondary" 
                                autoComplete="off"
                                value={nameState.name}
                                type="text"
                                id="name"
                                error={nameState.error}
                                name="name"
                                onChange={nameOnChange}
                                aria-describedby="name-helper"
                            />
                            <FormHelperText error={nameState.error} id="name-helper">{nameState.helperText}</FormHelperText>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
            </fieldset>
            <input 
                type="text" 
                autoComplete="on" 
                value="" 
                style={{display: 'none'}} 
                readOnly={true}
                />
            <Button onClick={_ => setPressedBtn(1)} disabled={isDisabled} type="submit" variant="contained" color="primary">
                Save
            </Button>
            <Button onClick={_ => setPressedBtn(2)} disabled={isDisabled} type="submit" variant="contained" color="primary">
                Save and add another
            </Button>
        </form>);
    },
}

export default imageCategoryObj;