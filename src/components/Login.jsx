import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

class Landing extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>


                    {/* 
                    <AppBar className="appBar" title='Fire & Risk Alliance' /> 
                    <br/> 
                     */}


                    <h4>Existing customer</h4>
                    <TextField hintText='email/username'/>
                    <br/>
                    

                    <TextField hintText='password'/>
                    <br/>
                    
                    <RaisedButton label='login'/>
                    <br/><br/>

                    <Link to='/register'>Register new user</Link>
                    {/* <h4>Register new user</h4>


                    <TextField hintText='email'/>
                    <p>password requirements</p>
                    <TextField hintText='password'/>
                    <br/>
                    <TextField hintText='confirm password'/>
                    <br/>
                    <RaisedButton label='register'/> */}
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}





export default Landing

