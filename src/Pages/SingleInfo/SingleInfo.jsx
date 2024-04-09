import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const SingleInfo = () => {
      const cart = useLoaderData();
      //console.log(cart);
      const { id } = useParams();

      const singleCart = cart.find(item => item.id == id)
      console.log(singleCart);

      const { image, title, description, features, distance, duration, price } = singleCart;

      return (
            <div className="card bg-base-100 shadow-xl my-8">
                  <figure className=''><img src={image} alt="Album" className='w-[3703px]'/></figure>
                  <div className="card-body">
                        <h2 className="card-title text-4xl font-bold">{title}</h2>
                        <p>{description}</p>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est vitae atque necessitatibus non veritatis reiciendis perspiciatis fuga odio eum accusantium numquam praesentium temporibus culpa doloribus dolorum officia, voluptatibus, distinctio adipisci. Porro consectetur omnis quo tenetur, ea mollitia tempore sequi id hic eum enim impedit, voluptatum maxime veritatis aperiam itaque earum!</p>

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

                  <div className="card-actions justify-end mt-8">
                        <button className="btn btn-primary"><Link to='/'>Go to Home</Link></button>
                  </div>
                  </div>
            </div>
      );
};

export default SingleInfo;