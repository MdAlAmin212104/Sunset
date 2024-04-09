import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Cart from '../../Components/Cart/Cart';
import { Helmet } from 'react-helmet-async';

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>Sunset || Home</title>
                  </Helmet>
                  <Banner />
                  <Cart/>
            </div>
      );
};

export default Home;