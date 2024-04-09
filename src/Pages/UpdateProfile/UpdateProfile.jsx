import React, { useContext } from 'react';
import { useForm } from "react-hook-form";

import { AuthProvider } from '../../Provider/Provider';



const UpdateProfile = () => {
      
      const { profileUpdate } = useContext(AuthProvider)


      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
            const { name, photo } = data;
            console.log(name, photo);
            profileUpdate(name, photo)
                  .then((result) => {
                        console.log(result);
                  })
                  .error((error) => {
                        console.error(error.message)
                  })
            
                  
      }


      return (
            <div className='bg-blue-500 p-8'>
                  <div className="w-full py-5 max-w-md space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto">
                        <h1 className="text-2xl font-bold text-center">ProfileUpdate</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered" {...register("name", {required : true})} />
                              </div>
                                    {errors.name && <span className='text-red-700'>This field is required</span>}
                             
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo url" className="input input-bordered" {...register("photo", {required : true})}/>
                              </div>
                              {errors.photo && <span className='text-red-700'>This field is required</span>}
                              
                              <div className="form-control mt-6">
                                    <input type="submit" value="Update" className='btn btn-primary' />
                              </div>
                        </form>
                        
                  </div>
            </div>
      );
};

export default UpdateProfile;