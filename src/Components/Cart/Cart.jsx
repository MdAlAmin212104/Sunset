import React, { useEffect, useState } from 'react';
import SingleCart from '../singleCart/SingleCart';
import 'animate.css';

const text = ['The Weekend Break', 'The Package Holiday', 'The Group Tour', 'Long Term Slow Travel'];

const Cart = () => {
      const [cart, setCart] = useState([])
      useEffect(() => {
            fetch('hotel.json')
                  .then(res => res.json())
                  .then(data => setCart(data))
      }, [])


      return (
            <div>
                  <h2 className="text-5xl text-bold text-center my-4 animate__animated animate__heartBeat">Recommended destination</h2>
                  <ul className='text-center md:flex lg:flex justify-around my-8'>
                        {text.map((item, idx) => <li className='text-2xl text-bold' key={idx}>{item}</li>)}
                  </ul>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                        {
                              cart.map((cart) => <SingleCart key={cart.id} cart={cart} />)
                        }
                  </div>

            </div>
      );
};

export default Cart;