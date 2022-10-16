import { productsAndCartData } from "../loaders/productsAndCartdata";

const { createBrowserRouter } = require("react-router-dom");
const { default: Cart } = require("../Components/Cart");
const { default: Home } = require("../Components/Home");
const { default: Root } = require("../Components/Root");
const { default: Shop } = require("../Components/Shop");


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        loader:  productsAndCartData,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/shop',
                element:<Shop></Shop>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])

export default router;