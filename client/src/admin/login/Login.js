import React, { Component } from 'react';
import fefLogo from '../../assets/logo.png'
import './Login.scss'
import { Col, Container, Row } from 'react-bootstrap';
import { Card, IconButton, CardContent, Button, CardMedia, InputAdornment, InputLabel , Input, FormControl } from '@material-ui/core';
import { Email, Visibility, VisibilityOff, Lock } from '@material-ui/icons';

class Login extends Component {
    constructor(props) {
        super(props);
        document.title = this.props.title;
        this.state = {
            showPassword: false,
            password: "",
        };
    }
    handleChange = (prop) => (event) => {
        // setValues({ ...values, [prop]: event.target.value });
        this.setState({ password:  event.target.value})
      };

    handleClickShowPassword = () => {
        // setValues({ ...values, showPassword: !values.showPassword });
        this.setState({ showPassword: !this.state.showPassword })
    };
    handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    render() {
        return (
            <Container fluid className="admin-login-container">
                <Row>
                    <Col className="admin-login-card">
                        <Card>
                            <CardMedia
                                className="login-logo"
                                component="img"
                                image= {fefLogo}
                                title="FEF"
                            />
                            <CardContent>
                                <form noValidate>
                                    <FormControl>
                                        <InputLabel htmlFor="email-admin">Email</InputLabel>
                                        <Input
                                            autoComplete="new-password"
                                            autoFocus
                                            type="email"
                                            id="email-admin"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Email/>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                        <Input
                                            autoComplete="new-password"
                                            id="standard-adornment-password"
                                            type={this.state.showPassword ? 'text' : 'password'}
                                            value={this.state.password}
                                            onChange={this.handleChange('password')}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Lock/>
                                                </InputAdornment>
                                            }
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                                onMouseDown={this.handleMouseDownPassword}
                                                >
                                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <Button variant="contained" color="primary" className="admin-login-button">
                                        Login
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;
