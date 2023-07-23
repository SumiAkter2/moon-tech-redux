import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar>
                <Outlet/>
            </Navbar>
        </div>
    );
};

export default Main;