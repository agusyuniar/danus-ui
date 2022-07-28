import { 
    LOGIN_USERNAME_CHANGE,
    LOGIN_PASSWORD_CHANGE,
    ON_USER_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    HIDE_UNHIDE
 } from "../action/types";

 const INITIAL_STATE = {
    username:'',
    password:'',
    hidePassword: true,
    loading: false,
    error: ''
 }

 export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN_USERNAME_CHANGE:
            return { ...state, username: action.payload }
        case LOGIN_PASSWORD_CHANGE:
            return { ...state, password: action.payload }
        case HIDE_UNHIDE:
            return {...state, hidePassword: !state.hidePassword}
        case ON_USER_LOGIN :
            return { ...state, loading: true, error: '' }
        case LOGIN_FAILED :
            return { ...state, loading: false, error: action.payload }
        case LOGIN_SUCCESS :
            return INITIAL_STATE //kembalikan isi textbox dll ke initial state
        default :
            return state
    }
 }