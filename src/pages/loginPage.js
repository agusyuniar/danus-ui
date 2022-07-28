import { TextField, Button } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginStaff, inputUsername, inputPassword } from "../redux/action";


class LoginPage extends Component {
    state = {}

    onBtnLogin=()=>{
        this.props.loginStaff(this.props.loginForm)
        console.log(this.props.loginForm);
    }
    keyPressAct = (e) => {
        console.log(e.getModifierState('CapsLock'));
        if (e.key == 'Enter') {
            return this.onBtnLogin()
        }

    }
    render() {
        console.log(this.props);
        if(this.props.staff){
            return <div>Sudah Login sebagai {this.props.staff.username}</div>
        }
        return (
            <div className='container m-auto text-center col-4'>
                Login Page
                <div className='border rounded '>
                    <div className='pb-3'>
                        <br />
                        <TextField
                            label="Username"
                            id="filled-size-small"
                            // defaultValue="Small"
                            variant="standard"
                            size="small"
                            onKeyPress={(e) => this.keyPressAct(e)}
                            value={this.props.loginForm.username}
                            onChange={(e)=>this.props.inputUsername(e.target.value)}
                        />
                    </div>
                    <div className='pb-3'>
                        <TextField
                            label="Password"
                            id="filled-size-small"
                            type='password'
                            // defaultValue="Small"
                            variant="standard"
                            size="small"
                            onKeyPress={(e) => this.keyPressAct(e)}
                            onChange={(e)=>this.props.inputPassword(e.target.value)}

                        />
                    </div>
                    <div className='pb-3' >
                    <Button 
                        variant="contained"
                        onClick={this.onBtnLogin}
                    >
                        Contained</Button>
                    </div>
                </div>
            </div>
        );
    }
}

const connectProps = ({staff, loginForm})=>{
    return {staff, loginForm}
}

export default connect (connectProps, {inputPassword,inputUsername, loginStaff}) (LoginPage);