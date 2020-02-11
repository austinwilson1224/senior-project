/**
 * 
 * Feel free to change any of this I was just messing around and trying to get a link to the login page set up -- AW
 * This page is set up as the default route for '/' if you look in App.js at the routes...
 */
import React, { Component } from 'react'

export class Homepage extends Component {
    render() {
        return (
            <div>
                <form action="/login">
                    <input type="submit" value="Login" />
                </form>


                {/* 
                <form action="/register">
                    <input type="submit" value="Register" />
                </form> 
                <p>I love designing homepages becuase i have nothing better to do </p>
                <button>login to nothing...</button>    
                */}
            </div>
        )
    }
}

export default Homepage
