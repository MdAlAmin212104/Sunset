import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvider } from '../../Provider/Provider';

const Navbar = () => {

      const {user, logOut} = useContext(AuthProvider)
      
      

      const handleLogOut = () => {
            logOut();
      }


      const links = <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            
            {
                  user && <li><NavLink to='/profile'>Update Profile</NavLink></li>
            }
      </>

      return (
            <div className="navbar bg-base-100">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </div>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {links}
                              </ul>
                        </div>
                        <p className="btn btn-ghost text-xl font-bold"><Link to='/'>Sunset</Link></p>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              {links}
                        </ul>
                  </div>
                  <div className="navbar-end z-50">
                        {
                              user ? <>
                                          <span className='mr-4'></span>
                                          <div className="dropdown dropdown-end group">
                                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar focus:outline-none">
                                                      <div className="w-10 rounded-full">
                                                            <img className='' alt="Tailwind CSS Navbar component" src={ user?.photoURL || "https://lh3.googleusercontent.com/a/ACg8ocKfSrgZFBvoQ6s12ZB8gHSg3E625KGpnaiYthDiKIfNqh1g62wg=s96-c"} />
                                                      </div>
                                                </div>
                                                <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 invisible opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                                                      <li><a>{user?.displayName || 'Name not found'}</a></li>
                                                      <li><a onClick={handleLogOut}>Logout</a></li>
                                                </ul>
                                          </div>
                                    </>
                              :
                                    <Link to='/login' className="btn">Login</Link>
                        }
                  
                  </div>
            </div>
      );
};

export default Navbar;