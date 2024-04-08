import React from 'react';
import { Link } from 'react-router-dom';

const SingleCart = ({ cart }) => {
      const {id, image, title, description, features, distance, duration, price} = cart;
      return (
            <div className="card bg-base-100 shadow-xl">
                  <figure><img src={image} alt="Shoes" /></figure>
                  <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div className='flex justify-between font-semibold'>
                              <h2>{ distance }</h2>
                              <h2>{ duration }</h2>
                        </div>

                        <div className='flex justify-between font-bold'>
                              <ul className='flex gap-4'>
                                    {
                                          features.map((item, idx) => <li key={idx}>{item}</li>)
                                    }
                              </ul>
                              <h3>{price}</h3>
                        </div>

                        <div className="card-actions justify-end">
                              <button className="btn btn-primary"><Link to={`/card/${id}`} >View Details</Link></button>
                        </div>
                  </div>
            </div>
      );
};

export default SingleCart;