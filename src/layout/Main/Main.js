import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div className='px-10'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;