import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Catagory from "../components/pages/Catagory/Catagory/Catagory";
import Home from "../components/pages/Home/Home/Home";
import News from "../components/pages/News/News/News";
import Footer from "../components/pages/Share/Footer";

export const routes = createBrowserRouter([
{
path: '/',
element: <Main></Main>,
children:[
{
    path:'/',
    element: <Home></Home>
},

{
    path:'/catagory:id',
    element: <Catagory></Catagory>
},
{
    path:'/news:id',
    element: <News></News>
},
]
}
])