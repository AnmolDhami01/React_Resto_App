import React, { Component } from 'react';
import NavaBarMenu from './NavaBarMenu';

class Home extends Component {
    render() {
        return (
            <div className="App-header">
                <NavaBarMenu />
                <h1>Welcome To Home</h1>
            </div>
        );
    }
}

export default Home;