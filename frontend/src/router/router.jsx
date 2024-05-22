import Admin from "../Admin";
import Post from "../Admin/components/Post";
import Layout from "../Layout";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import Wishlist from "../Pages/Wishlist";

export const routes=[
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path: "/",
                element: <Home/>,

            },
            {
                path: "/wishlist",
                element: <Wishlist/>,
            },
            {
                path: "/detail/:id",
                element: <Detail/>,
            }


        ]
    },
    {
        path:"/admin",
        element: <Admin/>
    },
    {
        path:"/post",
        element: <Post/>
    }

]