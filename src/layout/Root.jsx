import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
      return (
            <div className='container mx-auto'>
                  <Navbar/>
                  <Outlet />
                  <Footer/>
            </div>
      );
};

export default Root;