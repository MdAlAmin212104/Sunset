import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
      return (
            <div>
                  <Helmet>
                        <title>Sunset || Blog</title>
                  </Helmet>
                  <h1 className='text-4xl font-bold text-center my-8'>this is blog section</h1>
            </div>
      );
};

export default Blog;