import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Error from "../Components/Error/Error";



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
                  }
                  
                  
            ]
      },
]);