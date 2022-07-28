import axios from "axios";
import { API_URL_1 } from "../../helpers/apiurl";

import{
    LOGIN_USERNAME_CHANGE,
    LOGIN_PASSWORD_CHANGE,
    ON_USER_LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    HIDE_UNHIDE
} from './types';

//-------validasi form
export const inputUsername = (username) =>{
    console.log(username);
    return{
        type: LOGIN_USERNAME_CHANGE,
        payload : username
    }
}

export const inputPassword = (password) =>{
    console.log(password);
    return{
        type: LOGIN_PASSWORD_CHANGE,
        payload : password
    }
}

export const hideUnhide = () => {
    return {
        type: HIDE_UNHIDE
    }
}

//-------login staff
export const loginStaff = (staff) => {
    console.log(staff);
    
    return (dispatch) => {
        dispatch({ type: ON_USER_LOGIN })
        axios.post(API_URL_1+'/staff/login',{
            username:staff.username,
            password:staff.password
        }).then(res=>{
            console.log(res.data);
            localStorage.setItem('ptoken', res.data.token)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data 
                })
        }).catch(err => {
            console.log(err.response )
            if(err.response===undefined){
                return (
                    dispatch({
                        type: LOGIN_FAILED,
                        payload: 'Database offline, silahkan coba beberapa saat lagi'
                    })        
                )
            }
            dispatch({
                type: LOGIN_FAILED,
                payload: err.response.data.message
            })
        })
    }
}