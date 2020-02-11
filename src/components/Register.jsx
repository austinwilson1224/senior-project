import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

export class Register extends Component {
    state = {
        fname: "",
        lname: "",
        company: "",
        country: "",
        email: "",
        password: ""
    }
    
    handleSubmit = event => {
        event.preventDefault(); //For debugging purposes, remove when we actually have a DB to dump data to.
        console.log(this.state);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <p><TextField name = "fname" hintText='First Name' value = {this.state.fname} onChange={this.handleChange}/></p>
                        <p><TextField name = "lname" hintText='Last Name' value = {this.state.lname} onChange={this.handleChange}/></p>
                        <p><TextField name = "company" hintText='Company Name' value = {this.state.company} onChange={this.handleChange}/></p>
                        <p><TextField name = "country" hintText='Country' value = {this.state.country} onChange={this.handleChange}/></p>
                        <p><TextField name = "email" hintText='Email' value = {this.state.email} onChange={this.handleChange}/></p>
                        <p><TextField hintText='Confirm Email' onChange={this.handleChange} onChange={this.handleChange}/></p>
                        <p>Enter Password</p>
                        <TextField name = "password" hintText='Password' value = {this.state.password} onChange={this.handleChange}/>
                        <br/>
                        <TextField hintText='Confirm Password'/>
                        <br/>
                        <RaisedButton type="submit" label='register'/>
                        <br/>
                        <Link to='/login'>Already have an Account?</Link>
                    </form>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Register