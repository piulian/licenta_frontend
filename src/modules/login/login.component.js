import React from 'react';
import {withRouter} from "react-router-dom";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
//import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControlFeedback from "react-bootstrap/es/FormControlFeedback";
//import FormControl from "@material-ui/core/es/FormControl/FormControl";
import axios from 'axios';

class Login extends React.Component{
/*
    goToDashboardPage = () => {
        const {history} = this.props;
        history.push('/dashboard');
        history.goBack();
    };
*/

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

    }

    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        console.log(event.target.id)
        this.setState({
            [event.target.id]:event.target.value
        });
    }

    handleSubmit = event => {
        const {username, password} = this.state;
        const {history} = this.props;

        history.push('/dashboard');
        event.preventDefault();
        const body = {
            username,
            password
        };

        axios.post("http://localhost:8080/users", body)
            .then((response) => {
                console.log(response);
            })
    }

    render() {
        return (
            <div className="Login">
             /*   Login Page
                <Button onClick={this.goToDashboardPage}>
                    Login
                </Button>
                */
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                           // value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            id="password"
                        />
                    </FormGroup>
                    <Button block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                    >Login</Button>

                </form>

            </div>
        );
    }
}

export default withRouter(Login);