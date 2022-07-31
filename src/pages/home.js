import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navbar';
import LoginPage from './loginPage';

class Homepage extends Component {
    state = {}
    render() {
        console.log(this.props.user);
        // return (
            // <div>
            //     <Navbar />
            //     Home
            //     <LoginPage />
            // </div>
            // )
        if (!localStorage.getItem('ptoken')) {
            return (
                <div>
                    <Navbar />
                    Home
                    <LoginPage />
                </div>)
        } else {
            console.log(this.props.user);
            return (
                <div>
                    {this.props.user.username}
                    Logout
                </div>
            )
        }
    }
}
const sambungin = ({ user }) => {
    return { user }
}
export default connect(sambungin)(Homepage);