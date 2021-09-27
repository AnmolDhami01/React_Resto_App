import React from 'react';
import NavaBarMenu from './NavaBarMenu';
import {
    Redirect
} from 'react-router-dom'

const Logout = () => {
    localStorage.clear();
    return <Redirect to="/login" />
};

export default Logout;