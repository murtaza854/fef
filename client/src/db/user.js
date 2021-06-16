import { FormControl, Input, InputLabel, FormHelperText, Button, InputAdornment, FormControlLabel, IconButton, Select, MenuItem, Checkbox } from '@material-ui/core';
import { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import api from '../api';

const createUserTableData = (data) => {
    let { name, email, organization, volunteer, role, newsletter } = data;
    return { name, email, organization, volunteer, role, newsletter };
}

const userDataObj = {
    apiTable: `${api}/users/TableData`,
    createTableData : createUserTableData,
    headCells: [
        // { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
        { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
        { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
        { id: 'organization', numeric: false, disablePadding: false, label: 'Organization' },
        { id: 'volunteer', numeric: false, disablePadding: false, label: 'Volunteer' },
        { id: 'role', numeric: false, disablePadding: false, label: 'Role' },
        { id: 'newsletter', numeric: false, disablePadding: false, label: 'Newsletter' },
      ],
    checkboxSelection: 'email',
    ordering: 'name',
    rightAllign: [],
    Form: function() {
        const [state, setState] = useState({name: '', email: '', contactNumber: '', password: '', confirmPassowrd: '', organization: '', role: '', volunteer: false, showPassword: false, newsletter: false});
        const [nameHasError, setNameHasError] = useState(false);

        function changeState(event) {
            const { name, value } = event.target;
            setState(prevState => ({ ...prevState, [name]: value }));
        };
        const onSubmit = e => {
            console.log(state);
            e.preventDefault();
        };

        const handleClickShowPassword = () => {
            setState(prevState => ({ ...prevState, showPassword: !state.showPassword }));
        };

        const handleVolunteerCheckbox = () => {
            setState(prevState => ({ ...prevState, volunteer: !state.volunteer }));
        };

        const handleNewsletterCheckbox = () => {
            setState(prevState => ({ ...prevState, newsletter: !state.newsletter }));
        };
    
        const handleMouseDownPassword = (event) => {
            event.preventDefault();
        };

        return (<form onSubmit={onSubmit}>
            <h2>Add a User</h2>
            <fieldset>
                <legend>Personal</legend>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="name">
                        <FormControl required>
                            <InputLabel color="secondary"  htmlFor="name">Name</InputLabel>
                            <Input
                                color="secondary" 
                                autoComplete="none"
                                onFocus={_ => setNameHasError(true)}
                                value={state.name}
                                type="text"
                                id="name"
                                name="name"
                                onChange={changeState}
                                aria-describedby="name-helper"
                            />
                            <FormHelperText error={nameHasError} id="name-helper">John Doe</FormHelperText>
                        </FormControl>
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="formGridEmail">
                        <FormControl>
                            <InputLabel color="secondary"  htmlFor="email">Email</InputLabel>
                            <Input
                                color="secondary"
                                autoComplete="none"
                                value={state.email}
                                id="email"
                                onChange={changeState}
                                name="email"
                                aria-describedby="email-helper"
                            />
                            <FormHelperText id="email-helper">john@example.com</FormHelperText>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="formGridEmail">
                        <FormControl>
                            <InputLabel color="secondary"  htmlFor="contactNumber">Contact Number</InputLabel>
                            <Input
                                color="secondary"
                                autoComplete="none"
                                value={state.contactNumber}
                                id="contactNumber"
                                onChange={changeState}
                                name="contactNumber"
                                aria-describedby="contactNumber-helper"
                            />
                            <FormHelperText id="contactNumber-helper">john@example.com</FormHelperText>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="password">
                        <FormControl>
                            <InputLabel color="secondary"  htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                type={state.showPassword ? 'text' : 'password'}
                                value={state.password}
                                autoComplete="new-password"
                                onChange={changeState}
                                name="password"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            <FormHelperText error={nameHasError} id="password-helper">John Doe</FormHelperText>
                        </FormControl>
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="confirmPassowrd">
                        <FormControl>
                            <InputLabel color="secondary"  htmlFor="confirmPassowrd">Confirm Password</InputLabel>
                            <Input
                                id="confirmPassowrd"
                                type={state.showPassword ? 'text' : 'password'}
                                value={state.confirmPassowrd}
                                autoComplete="new-password"
                                onChange={changeState}
                                name="confirmPassowrd"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {state.showPassword1 ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            <FormHelperText error={nameHasError} id="confirmPassowrd-helper">John Doe</FormHelperText>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
            </fieldset>
            <fieldset>
                <legend>Other</legend>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="organization">
                        <FormControl>
                            <InputLabel color="secondary"  htmlFor="organization">Organization</InputLabel>
                            <Input
                                color="secondary"
                                autoComplete="none"
                                value={state.organization}
                                id="organization"
                                onChange={changeState}
                                name="organization"
                                aria-describedby="organization-helper"
                            />
                            <FormHelperText id="organization-helper">john@example.com</FormHelperText>
                        </FormControl>
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="role">
                        <FormControl>
                            <InputLabel color="secondary"  htmlFor="role">Role</InputLabel>
                            <Select
                                labelId="role"
                                id="role"
                                name="role"
                                value={state.role}
                                onChange={changeState}
                                >
                                <MenuItem value={'Admin'}>Admin</MenuItem>
                                <MenuItem value={'User'}>User</MenuItem>
                            </Select>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="volunteer">
                        <FormControlLabel
                            control={<Checkbox checked={state.volunteer} onChange={handleVolunteerCheckbox} name="volunteer" />}
                            label="Volunteer"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="newsletter">
                        <FormControlLabel
                            control={<Checkbox checked={state.newsletter} onChange={handleNewsletterCheckbox} name="newsletter" />}
                            label="Newsletter"
                        />
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

export default userDataObj;