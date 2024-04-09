import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
      return (
            <div>
                  <Helmet>
                        <title>Sunset || About</title>
                  </Helmet>
                  <h3 className='text-5xl font-bold'>this is About section </h3>
            </div>
      );
};

export default About;