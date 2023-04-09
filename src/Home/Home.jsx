import React from 'react';
import { Header, NavBar } from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
        </div>
    );
};

export default Home;