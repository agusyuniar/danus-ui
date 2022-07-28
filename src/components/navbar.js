import React, { Component } from 'react';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div>
                <nav className="navbar bg-light">
                        <div class="container-fluid">
                    <div className="container-fluid">
                            <a class="navbar-brand" href="/">
                                <img src={require('../asset/img/logo.jpg')} alt="" width="45" height="45" />
                            </a>
                        <a className="navbar-brand" href="/">Navbar</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;