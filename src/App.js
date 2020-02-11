/**
 * 
 * The homepage component will load for '/'
 * Login page will load for '/login' need to connect the two -- Austin
 * 
 * some colors from the FRS logo tan: '#E2D5B7', red: '#B53033', dark red: '#551515'
 * 
 * 
 * 
 */


import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Login from './components/Login'
import Homepage from './components/Homepage'
import Developers from './components/Developers/Developers'
import Test from './components/Test'
import Header from './components/Header'
import Register from './components/Register'
import './App.css';



function App() {
  return (
    <div className="App">
      <div className="container">

        <Router>
          
            <Header/>
            <Switch>
              <Route path='/' exact component={Homepage}/>
              <Route path='/login' component={Login}/>
              <Route path='/developers' component={Developers}/>
              <Route path='/test' component={Test}/>
              <Route path='/register' component={Register}/>
            </Switch>
           
        </Router>
      </div>
    </div>
  );
}

export default App;
