import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../../Provider/Provider';


const Register = () => {
      const [showPassword, setShowPassword] = useState(false);


      const { createUserInEmail } = useContext(AuthProvider)

      const handlePassword = () => {
            setShowPassword(!showPassword);
      }
      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
            const { password, email } = data;
            const regex = /^(?=(.*[A-Z]){2})(?=(.*[a-z]){2}).{6,}$/
            if (!regex.test(password)) {
                  toast.warning('Your password must be at least 6 characters and minimum 2 uppercase letters and 2 lowercase letters');
                  return;
            }
            
            createUserInEmail(email, password)
                  .then(() => toast.success("Congratulation you success to Register!"))
                  .catch(errors => toast.warn(errors.message))
      }

      

      return (
            <div className='bg-blue-500 p-8'>
                  <div className="w-full py-5 max-w-md space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto">
                  <h1 className="text-2xl font-bold text-center">Register</h1>
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
                                    <span className="label-text">Email</span>
                              </label>
                              <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                        </div>
                              {errors.email && <span className='text-red-700'>This field is required</span>}
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Photo URL</span>
                              </label>
                              <input type="text" placeholder="Photo url" className="input input-bordered" />
                              
                        </div>
                        <div className="form-control relative">
                              <label className="label">
                                    <span className="label-text">Password</span>
                                          </label>
                              <input type={ showPassword ? 'text': 'password'} placeholder="password" className="input input-bordered" {...register("password", { required: true })}  />
                                    {     (showPassword) ?
                                          <FaEyeSlash onClick={handlePassword} className='absolute top-14 right-4' /> :
                                          <IoMdEye onClick={handlePassword} className='absolute top-14 right-4' />
                                    }
                                          
                        
                        </div>
                              {errors.password && <span className='text-red-700'>This field is required</span>}
                        <div className="form-control mt-6">
                              <input type="submit" value="Register" className='btn btn-primary' />
                        </div>
                  </form>
                  
                  <p className="text-xs text-center sm:px-6 text-gray-600">Don't have an account?
                        <Link to='/login' rel="noopener noreferrer" className="underline text-green-900 text-[16px]">Login</Link>
                        </p>
                        <ToastContainer />
            </div>
            </div>
      );
};

export default Register;