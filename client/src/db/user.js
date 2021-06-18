import { FormControl, Input, InputLabel, FormHelperText, Button, InputAdornment, FormControlLabel, IconButton, Select, MenuItem, Checkbox } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import api from '../api';
import { useHistory } from 'react-router-dom';

const createUserTableData = (data) => {
    let { id, name, email, contactNumber, organization, volunteer, role, newsletter, adminApproved } = data;
    return { id, name, email, contactNumber, organization, volunteer, role, newsletter, adminApproved };
}

const objEmailCheck = (data, value) => {
    return data.find(obj => obj.email.toLowerCase().trim() === value.toLowerCase().trim());
}

const userDataObj = {
    apiTable: `${api}/users/TableData`,
    createTableData : createUserTableData,
    headCells: [
        // { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
        { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
        { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
        { id: 'contactNumber', numeric: false, disablePadding: false, label: 'Contact Number' },
        { id: 'organization', numeric: false, disablePadding: false, label: 'Organization' },
        { id: 'volunteer', numeric: false, disablePadding: false, label: 'Volunteer' },
        { id: 'role', numeric: false, disablePadding: false, label: 'Role' },
        { id: 'newsletter', numeric: false, disablePadding: false, label: 'Newsletter' },
        { id: 'adminApproved', numeric: false, disablePadding: false, label: 'Admin Approved' },
      ],
      ManyChild: '',
      checkboxSelection: 'id',
      editAllowed: false,
      deleteAllowed: true,
      addAllowed: true,
      modelName: 'User',
      ordering: 'id',
      rightAllign: [],
    Form: function() {
        let history = useHistory();

        const [nameState, setNameState] = useState({name: '', helperText: 'Enter a name Ex. John Doe', error: false});
        const [emailState, setEmailState] = useState({email: '', helperText: 'Enter an email Ex. john@gmail.com', error: false});
        const [contactNumberState, setContactNumberState] = useState({contactNumber: '', helperText: 'Enter an contact number Ex. +92 123 4567890', error: false});
        const [passwordState, setPasswordState] = useState({password: '', showPassword: false, helperText: 'Enter a password', error: false});
        const [confirmPasswordState, setConfirmPasswordState] = useState({confirmPassowrd: '', showPassword: false, helperText: 'Re-type password', error: false});
        const [organizationState, setOrganizationState] = useState({organization: '', helperText: 'Enter an organization name Ex. Dolmen Mall'});
        const [roleState, setRoleState] = useState({role: '', helperText: 'Please select a role', error: false});
        const [checkboxes, setCheckboxes] = useState({volunteer: false, newsletter: false, adminApproved: false});

        const [usersArray, setUsersArray] = useState([]);
        const [isDisabled, setCanSubmit] = useState(true);
        const [pressedBtn, setPressedBtn] = useState(null);

        useEffect(() => {
            let flag = true;
            if (nameState.error === true) flag = true;
            else if (nameState.name.length === 0) flag = true;
            else if (emailState.error === true) flag = true;
            else if (emailState.email.length === 0) flag = true;
            else if (contactNumberState.error === true) flag = true;
            else if (contactNumberState.contactNumber.length === 0) flag = true;
            else if (passwordState.error === true) flag = true;
            else if (passwordState.password.length === 0) flag = true;
            else if (confirmPasswordState.error === true) flag = true;
            else if (roleState.error === true) flag = true;
            else if (roleState.role.length === 0) flag = true;
            else flag = false;
            setCanSubmit(flag);
        }, [nameState, emailState, contactNumberState, passwordState, confirmPasswordState, roleState]);

        useEffect(() => {(
            async () => {
                const response = await fetch(`${api}/users/TableData`, {
                    headers: {'Content-Type': 'application/json'},
                });
                const content = await response.json();
                // const obj = content.data.find(o => o.id === queryID);
                // setEditObj(obj)
                setUsersArray(content.data)
            })();
        }, []);

        useEffect(() => {(
            () => {
                if (confirmPasswordState.confirmPassowrd !== passwordState.password) setConfirmPasswordState(prevState => ({ ...prevState, helperText: 'Password does not match', error: true }));
                else setConfirmPasswordState(prevState => ({ ...prevState, helperText: 'Re-type password', error: false }));
            })();
        }, [confirmPasswordState.confirmPassowrd, passwordState.password]);

        function changeNameState(event) {
            const { name, value } = event.target;
            setNameState(prevState => ({ ...prevState, [name]: value }));
            if (value === '') setNameState(prevState => ({ ...prevState, helperText: 'Name is required!', error: true }));
            else setNameState(prevState => ({ ...prevState, helperText: 'Enter a name Ex. John Doe', error: false }));
        };
        function changeEmailState(event) {
            const { name, value } = event.target;
            setEmailState(prevState => ({ ...prevState, [name]: value }));
            const obj = objEmailCheck(usersArray, value);
            if (obj) setEmailState(prevState => ({ ...prevState, helperText: `${obj.email} already exists!`, error: true }));
            else if (value === '') setEmailState(prevState => ({ ...prevState, helperText: 'Email is required!', error: true }));
            else setEmailState(prevState => ({ ...prevState, helperText: 'Enter an email Ex. john@gmail.com', error: false }));
        };
        function changeContactNumberState(event) {
            const { name, value } = event.target;
            setContactNumberState(prevState => ({ ...prevState, [name]: value }));
            if (value === '') setContactNumberState(prevState => ({ ...prevState, helperText: 'Contact number is required!', error: true }));
            else setContactNumberState(prevState => ({ ...prevState, helperText: 'Enter an contact number Ex. +92 123 4567890', error: false }));
        };
        function changePasswordState(event) {
            const { name, value } = event.target;
            const passwReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
            setPasswordState(prevState => ({ ...prevState, [name]: value }));
            if (!value.match(passwReg)) setPasswordState(prevState => ({ ...prevState, helperText: 'Password must contain atleast 1 lowercase alhpabetical character, atleast 1 uppercase alhpabetical character, atleast 1 numericical character, 1 special character and must be of atleast 8 characters', error: true }));
            else setPasswordState(prevState => ({ ...prevState, helperText: 'Enter a password', error: false }));
        };
        function changeConfirmPasswordState(event) {
            const { name, value } = event.target;
            setConfirmPasswordState(prevState => ({ ...prevState, [name]: value }));
        };
        function changeOrganizationState(event) {
            const { name, value } = event.target;
            setOrganizationState(prevState => ({ ...prevState, [name]: value }));
        };
        function changeRoleState(event) {
            const { name, value } = event.target;
            setRoleState(prevState => ({ ...prevState, [name]: value }));
            if (value === '') setRoleState(prevState => ({ ...prevState, helperText: 'Role is required!', error: true }));
            else setRoleState(prevState => ({ ...prevState, helperText: 'Please select a role', error: false }));
        };

        const onSubmit = async e => {
            e.preventDefault();
            const response = await fetch(`${api}/users/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: nameState.name, email: emailState.email, contactNumber: contactNumberState.contactNumber, password: passwordState.password, organization: organizationState.organization, role: roleState.role, volunteer: checkboxes.volunteer, newsletter: checkboxes.newsletter, adminApproved: checkboxes.adminApproved}),
            });
            const content = await response.json();
            console.log(content);
            if (pressedBtn === 1) {
                history.push('/admin/users');
            }
            else {
                setNameState({name: '', helperText: 'Enter a name Ex. John Doe', error: false});
                setEmailState({email: '', helperText: 'Enter an email Ex. john@gmail.com', error: false});
                setContactNumberState({contactNumber: '', helperText: 'Enter an contact number Ex. +92 123 4567890', error: false});
                setPasswordState({password: '', showPassword: false, helperText: 'Enter a password', error: false});
                setConfirmPasswordState({confirmPassowrd: '', showPassword: false, helperText: 'Re-type password', error: false});
                setOrganizationState({organization: '', helperText: 'Enter an organization name Ex. Dolmen Mall'});
                setRoleState({role: '', helperText: 'Please select a role', error: false});
                setCheckboxes({volunteer: false, newsletter: false});
                history.push('/admin/users/add');
            }
        };

        const handleClickShowPassword = () => {
            setPasswordState(prevState => ({ ...prevState, showPassword: !passwordState.showPassword }));
        };
        const handleClickShowPassword1 = () => {
            setConfirmPasswordState(prevState => ({ ...prevState, showPassword: !confirmPasswordState.showPassword }));
        };

        const handleVolunteerCheckbox = () => {
            setCheckboxes(prevState => ({ ...prevState, volunteer: !checkboxes.volunteer }));
        };

        const handleNewsletterCheckbox = () => {
            setCheckboxes(prevState => ({ ...prevState, newsletter: !checkboxes.newsletter }));
        };
        const handleAdminApprovedCheckbox = () => {
            setCheckboxes(prevState => ({ ...prevState, adminApproved: !checkboxes.adminApproved }));
        };
    
        const handleMouseDownPassword = (event) => {
            event.preventDefault();
        };

        return (<form onSubmit={onSubmit} autoComplete="off">
            <fieldset>
                <legend>Personal</legend>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="name">
                        <FormControl>
                            <InputLabel error={nameState.error} color="secondary"  htmlFor="name">Name</InputLabel>
                            <Input
                                color="secondary" 
                                autoComplete="none"
                                value={nameState.name}
                                type="text"
                                error={nameState.error}
                                id="name"
                                name="name"
                                onChange={changeNameState}
                                onBlur={changeNameState}
                                aria-describedby="name-helper"
                            />
                            <FormHelperText error={nameState.error} id="name-helper">{nameState.helperText}</FormHelperText>
                        </FormControl>
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="formGridEmail">
                        <FormControl>
                            <InputLabel error={emailState.error} color="secondary"  htmlFor="email">Email</InputLabel>
                            <Input
                                color="secondary"
                                autoComplete="none"
                                error={emailState.error}
                                value={emailState.email}
                                id="email"
                                onChange={changeEmailState}
                                onBlur={changeEmailState}
                                name="email"
                                aria-describedby="email-helper"
                            />
                            <FormHelperText error={emailState.error} id="email-helper">{emailState.helperText}</FormHelperText>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="formGridEmail">
                        <FormControl>
                            <InputLabel color="secondary" error={contactNumberState.error} htmlFor="contactNumber">Contact Number</InputLabel>
                            <Input
                                color="secondary"
                                autoComplete="none"
                                value={contactNumberState.contactNumber}
                                error={contactNumberState.error}
                                id="contactNumber"
                                onChange={changeContactNumberState}
                                onBlur={changeContactNumberState}
                                name="contactNumber"
                                aria-describedby="contactNumber-helper"
                            />
                            <FormHelperText error={contactNumberState.error} id="contactNumber-helper">{contactNumberState.helperText}</FormHelperText>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="password">
                        <FormControl>
                            <InputLabel color="secondary" error={passwordState.error} htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                type={passwordState.showPassword ? 'text' : 'password'}
                                value={passwordState.password}
                                autoComplete="new-password"
                                error={passwordState.error}
                                color="secondary"
                                onChange={changePasswordState}
                                onBlur={changePasswordState}
                                name="password"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {passwordState.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            <FormHelperText error={passwordState.error} id="password-helper">{passwordState.helperText}</FormHelperText>
                        </FormControl>
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="confirmPassowrd">
                        <FormControl>
                            <InputLabel color="secondary" error={confirmPasswordState.error} htmlFor="confirmPassowrd">Confirm Password</InputLabel>
                            <Input
                                id="confirmPassowrd"
                                type={confirmPasswordState.showPassword ? 'text' : 'password'}
                                value={confirmPasswordState.confirmPassowrd}
                                autoComplete="new-password"
                                color="secondary"
                                onChange={changeConfirmPasswordState}
                                onBlur={changeConfirmPasswordState}
                                name="confirmPassowrd"
                                error={confirmPasswordState.error}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword1}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {confirmPasswordState.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            <FormHelperText error={confirmPasswordState.error} id="confirmPassowrd-helper">{confirmPasswordState.helperText}</FormHelperText>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
            </fieldset>
            <fieldset>
                <legend>Other</legend>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="organization">
                        <FormControl>
                            <InputLabel color="secondary" htmlFor="organization">Organization</InputLabel>
                            <Input
                                color="secondary"
                                autoComplete="none"
                                value={organizationState.organization}
                                id="organization"
                                onChange={changeOrganizationState}
                                name="organization"
                                aria-describedby="organization-helper"
                            />
                            <FormHelperText id="organization-helper">{organizationState.helperText}</FormHelperText>
                        </FormControl>
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="role">
                        <FormControl>
                            <InputLabel color="secondary" error={roleState.error} htmlFor="role">Role</InputLabel>
                            <Select
                                labelId="role"
                                id="role"
                                name="role"
                                error={roleState.error}
                                value={roleState.role}
                                onChange={changeRoleState}
                                onBlur={changeRoleState}
                                >
                                <MenuItem value={'Admin'}>Admin</MenuItem>
                                <MenuItem value={'User'}>User</MenuItem>
                            </Select>
                            <FormHelperText error={roleState.error} id="organization-helper">{roleState.helperText}</FormHelperText>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="volunteer">
                        <FormControlLabel
                            control={<Checkbox checked={checkboxes.volunteer} onChange={handleVolunteerCheckbox} name="volunteer" />}
                            label="Volunteer"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="newsletter">
                        <FormControlLabel
                            control={<Checkbox checked={checkboxes.newsletter} onChange={handleNewsletterCheckbox} name="newsletter" />}
                            label="Newsletter"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="adminApproved">
                        <FormControlLabel
                            control={<Checkbox checked={checkboxes.adminApproved} onChange={handleAdminApprovedCheckbox} name="adminApproved" />}
                            label="Admin Approved"
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
            <Button onClick={_ => setPressedBtn(1)} disabled={isDisabled} type="submit" variant="contained" color="primary">
                Save
            </Button>
            <Button onClick={_ => setPressedBtn(2)} disabled={isDisabled} type="submit" variant="contained" color="primary">
                Save and add another
            </Button>
        </form>);
    },
}

export default userDataObj;