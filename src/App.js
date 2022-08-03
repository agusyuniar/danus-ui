
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, IndexRouteProps } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/home';
import ProfilStaff from './pages/profileStaff';
import { connect } from 'react-redux';
import { KeepLogin } from "./redux/action";
import RegisterStaff from './pages/registerPage';

class App extends Component {

  componentDidMount(){
    var token = localStorage.getItem('ptoken')
    console.log(token)
    this.props.KeepLogin(token)
  }

  render() { 
    return (
      <BrowserRouter>
        <Routes>
        {/* <IndexRoute component = {Homepage} /> */}
          <Route path='/' element={<Homepage/>} />
          <Route path='/StProfile' element={<ProfilStaff/>}/>
          <Route path='/register' element={<RegisterStaff/>}/>
        </Routes>        
      </BrowserRouter>
    );
  }
}

const sambungin = ({ staff }) => {
  return { staff }
}

export default connect(sambungin, {KeepLogin}) ( App);
