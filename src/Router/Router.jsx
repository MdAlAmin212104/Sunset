import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Error from "../Components/Error/Error";
import SingleInfo from "../Pages/SingleInfo/SingleInfo";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Servicess/Servicess";
import Blog from "../Pages/Blog/Blog";



export const router = createBrowserRouter([
      {
            path: "/",
            element: <Root />,
            errorElement: <Error/>,
            children: [
                  {
                        path: '/',  
                        element: <Home/>  
                  },
                  {
                        path: '/about',
                        element: <About/>  
                  },
                  {
                        path: '/contact',
                        element: <Contact/>
                  },
                  {
                        path: '/card/:id',
                        element: <SingleInfo />,
                        loader: () => fetch('/hotel.json')
                  },
                  {
                        path: '/login',
                        element: <Login/>
                  },
                  {
                        path: '/register',
                        element: <Register/>
                  },
                  {
                        path: '/services',
                        element: <Services/>
                  },
                  {
                        path: '/blog',
                        element: <Blog/>
                  }
                  
            ]
      },
]);