import { createBrowserRouter } from "react-router-dom";
import Home from "../features/Home/Home";
import About from "../features/About/About";
import Contact from "../features/Contact/Contact";
import App from "../App";

export const router =  createBrowserRouter([
    {
        path: "/", 
        element: <App />,
        children: [
            {path: "/home", element: <Home />},
            {path: "/about", element: <About />},
            {path: "/contact", element: <Contact />},
        ]
    },
]);