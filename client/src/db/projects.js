import { FormControl, Input, InputLabel, FormHelperText, Button } from '@material-ui/core';
import { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import api from '../api';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

const createProjectTableData = (data) => {
    let { name, amountRaised, totalAmount } = data;
    return { name, amountRaised, totalAmount };
}

const projectDataObj = {
    apiTable: `${api}/projects/TableData`,
    createTableData : createProjectTableData,
    headCells: [
        // { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
        { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
        { id: 'amountRaised', numeric: true, disablePadding: false, label: 'Amount raised' },
        { id: 'totalAmount ', numeric: true, disablePadding: false, label: 'Total Amount' },
      ],
    checkboxSelection: 'name',
    ordering: 'name',
    rightAllign: ['amountRaised', 'totalAmount'],
    Form: function() {
        const [state, setState] = useState({name: '', amountRaised: '', totalAmount: ''});

        function changeState(event) {
            const { name, value } = event.target;
            setState(prevState => ({ ...prevState, [name]: value }));
        };
        const onSubmit = e => {
            console.log(state);
            e.preventDefault();
        };

        return (<form onSubmit={onSubmit}>
            <h2>Add a Project</h2>
            <fieldset>
                <legend>Details</legend>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="name">
                        <FormControl required>
                            <InputLabel color="secondary"  htmlFor="name">Name</InputLabel>
                            <Input
                                color="secondary" 
                                autoComplete="none"
                                value={state.name}
                                type="text"
                                id="name"
                                name="name"
                                onChange={changeState}
                                aria-describedby="name-helper"
                            />
                            <FormHelperText id="name-helper">John Doe</FormHelperText>
                        </FormControl>
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="totalAmount">
                        <FormControl>
                            <InputLabel color="secondary"  htmlFor="email">Total Amount</InputLabel>
                            <Input
                                color="secondary"
                                autoComplete="none"
                                value={state.totalAmount}
                                id="totalAmount"
                                onChange={changeState}
                                name="totalAmount"
                                aria-describedby="totalAmount-helper"
                            />
                            <FormHelperText id="totalAmount-helper">john@example.com</FormHelperText>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="amountRaised">
                        <FormControl>
                            <InputLabel color="secondary"  htmlFor="amountRaised">Raised Amount</InputLabel>
                            <Input
                                color="secondary"
                                autoComplete="none"
                                value={state.amountRaised}
                                id="amountRaised"
                                onChange={changeState}
                                name="amountRaised"
                                aria-describedby="amountRaised-helper"
                            />
                            <FormHelperText id="amountRaised-helper">john@example.com</FormHelperText>
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
            <Button type="submit" variant="contained" color="primary">
                Save
            </Button>
            <Button type="submit" variant="contained" color="primary">
                Save and add another
            </Button>
        </form>);
    },
}

export default projectDataObj;