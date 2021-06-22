import { FormControl, Input, InputLabel, FormHelperText, Button } from '@material-ui/core';
import { useState,useEffect } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import api from '../api';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

const createProjectTableData = (data) => {
    let { id, name, amountRaised, totalAmount } = data;
    return { id, name, amountRaised, totalAmount };
}
const editObjCheck = (data, value, editObj) => {
    if (editObj) return data.find(obj => obj.name.toLowerCase().trim() === value.toLowerCase().trim() && obj.name !== editObj.name);
    else return data.find(obj => obj.name.toLowerCase().trim() === value.toLowerCase().trim())
}
const projectDataObj = {
    apiTable: `${api}/projects/TableData`,
    deleteApi: [`${api}/projects/getByIds`, `${api}/projects/delete`],
    createTableData : createProjectTableData,
    headCells: [
        // { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
        { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
        { id: 'amountRaised', numeric: true, disablePadding: false, label: 'Amount raised' },
        { id: 'totalAmount ', numeric: true, disablePadding: false, label: 'Total Amount' },
      ],
    ManyChild: '',
    checkboxSelection: 'id',
    editAllowed: true,
    deleteAllowed: true,
    addAllowed: true,
    modelName: 'Projects',
    ordering: 'id',
    rightAllign: ['amountRaised', 'totalAmount'],
    Form: function(id) {
        let history = useHistory();

        let queryID = '';
        if (id != null) queryID = parseInt(id);
        const [editObj, setEditObj] = useState(null);

        const [isDisabled, setCanSubmit] = useState(true);
        const [nameState, setNameState] = useState({name: '', helperText: 'Enter a name Ex. Assembly', error: false});
        const [amountRaisedState, setamountRaisedState] = useState({amountRaised: '', helperText: 'Enter an amount Ex. 10000', error: false});
        const [totalAmountState, settotalAmountState] = useState({totalAmount: '', helperText: 'Enter the total amount Ex. 10000', error: false});
        const [descriptionState, setdescriptionState] = useState({description: '', helperText: 'Enter project description Ex. This is a donation project', error: false});
        const [projectsArray, setprojectsArray] = useState([]);
            
        const [pressedBtn, setPressedBtn] = useState(null);
        // const [state, setState] = useState({name: '', amountRaised: '', totalAmount: ''});

        useEffect(() => {(
            async () => {
                const response = await fetch(`${api}/projects/TableData`, {
                    headers: {'Content-Type': 'application/json'},
                });
                const content = await response.json();
                const obj = content.data.find(o => o.id === queryID);
                setEditObj(obj)
                setprojectsArray(content.data)
            })();
          }, [queryID]);

        useEffect(() => {
            if (editObj) setNameState(prevState => ({ ...prevState, name: editObj.name }));
        }, [editObj]);
        
        useEffect(() => {
            let flag = true;
            if (nameState.name.length === 0) flag = true;
            else if (nameState.error === true) flag = true;
            else if (amountRaisedState.amountRaised.length === 0) flag = true;
            else if (amountRaisedState.error === true) flag = true;
            else if (totalAmountState.totalAmount.length === 0) flag = true;
            else if (totalAmountState.error === true) flag = true;
            else if (descriptionState.description.length === 0) flag = true;
            else if (descriptionState.error === true) flag = true;
            else flag = false;
            setCanSubmit(flag);
        }, [nameState,descriptionState,amountRaisedState,totalAmountState]);

        const nameOnChange = (event) => {
            const { name, value } = event.target;
            setNameState(prevState => ({ ...prevState, [name]: value }));
            const obj = editObjCheck(projectsArray, value, editObj);
            if (obj) setNameState(prevState => ({ ...prevState, helperText: `${obj.name} already exists!`, error: true }));
            else setNameState(prevState => ({ ...prevState, helperText: 'Enter a name Ex. Assembly', error: false }));
        }
        const amountRaisedOnChange = (event) => {
            const { name, value } = event.target;
            setamountRaisedState(prevState => ({ ...prevState, [name]: value }));
            if (value === '') setamountRaisedState(prevState => ({ ...prevState, helperText: 'Amount Raised is required!', error: true }));
            else setamountRaisedState(prevState => ({ ...prevState, helperText: 'Enter an Amount Ex. 40200', error: false }));
        };
        const totalAmountOnChange = (event) => {
            const { name, value } = event.target;
            settotalAmountState(prevState => ({ ...prevState, [name]: value }));
            if (value === '') settotalAmountState(prevState => ({ ...prevState, helperText: 'Total Amount is required!', error: true }));
            else settotalAmountState(prevState => ({ ...prevState, helperText: 'Enter an Amount Ex. 50000', error: false }));
        };
        const descriptionOnChange = (event) => {
            const { name, value } = event.target;
            setdescriptionState(prevState => ({ ...prevState, [name]: value }));
            if (value === '') setdescriptionState(prevState => ({ ...prevState, helperText: 'Description is required!', error: true }));
            else setdescriptionState(prevState => ({ ...prevState, helperText: 'Enter a description Ex. This is a School Meal Project', error: false }));
        };

        const onSubmit = async e => {
            e.preventDefault();
            if (queryID === '') {
                const response = await fetch(`${api}/projects/add`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({name: nameState.name}),
                });
                const content = await response.json();
                console.log(content);
            } else {
                const response = await fetch(`${api}/projects/update`, {
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
                history.push('/admin/projects');
            }
            else {
                setEditObj(null);
                setNameState({name: '', helperText: 'Enter a Project Name Ex. School Meal Program', error: false});
                setNameState({amountRaised: '', helperText: 'Enter an Amount Ex. 40200', error: false});
                setNameState({totalAmount: '', helperText: 'Enter a Total Amount Ex. 50000', error: false});
                queryID='';
                history.push('/admin/projects/add');
            }
        };

        return (<form onSubmit={onSubmit}>
            <fieldset>
                <legend>Details</legend>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="name">
                        <FormControl required>
                            <InputLabel error={nameState.error} color="secondary"  htmlFor="name">Name</InputLabel>
                            <Input
                                color="secondary" 
                                autoComplete="none"
                                value={nameState.name}
                                type="text"
                                id="name"
                                error={nameState.error}
                                name="name"
                                onChange={nameOnChange}
                                aria-describedby="name-helper"
                            />
                            <FormHelperText id="name-helper">{nameState.helperText}</FormHelperText>
                        </FormControl>
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="totalAmount">
                        <FormControl>
                            <InputLabel error={totalAmountState.error} color="secondary"  htmlFor="email">Total Amount</InputLabel>
                            <Input
                                color="secondary"
                                autoComplete="none"
                                value={totalAmountState.totalAmount}
                                id="totalAmount"
                                error={totalAmountState.error}
                                onChange={totalAmountOnChange}
                                name="totalAmount"
                                aria-describedby="totalAmount-helper"
                            />
                            <FormHelperText id="totalAmount-helper">{totalAmountState.helperText}</FormHelperText>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="amountRaised">
                        <FormControl>
                            <InputLabel error={nameState.error} color="secondary"  htmlFor="amountRaised">Raised Amount</InputLabel>
                            <Input
                                color="secondary"
                                autoComplete="none"
                                value={amountRaisedState.amountRaised}
                                id="amountRaised"
                                error={amountRaisedState.error}
                                onChange={amountRaisedOnChange}
                                name="amountRaised"
                                aria-describedby="amountRaised-helper"
                            />
                            <FormHelperText id="amountRaised-helper">{amountRaisedState.helperText}</FormHelperText>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="description">
                        <FormControl>
                            {/* <InputLabel error={nameState.error} color="secondary"  htmlFor="amountRaised">Raised Amount</InputLabel> */}
                            <TextField
                                id="description"
                                color="secondary"
                                autoComplete="none"
                                label="Description"
                                onChange={descriptionOnChange}
                                multiline
                                rows={10}
                                error={descriptionState.error}
                                defaultValue={descriptionState.description}
                                aria-describedby="description-helper" 
                                />
                            <FormHelperText id="description-helper">{descriptionState.helperText}</FormHelperText>
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

export default projectDataObj;