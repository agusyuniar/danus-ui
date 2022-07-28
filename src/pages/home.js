import React, { Component } from 'react';
import Navbar from '../components/navbar';
import LoginPage from './loginPage';

class Homepage extends Component {
    state = {  } 
    render() { 
        return (<div>
            <Navbar/>
            Home
            <LoginPage/>
        </div>);
    }
}
 
export default Homepage;