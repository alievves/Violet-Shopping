import Home from "./Pages/Home/Home"
import Categories from "./Pages/Categories/Categories"
import ProductPage from './Pages/Product-Page/ProductPage'
import Checkout from './Pages/Checkout/Checkout'
import Contact from './Pages/Contact/Contact'


let Routes = [
    {path: "/", element: <Home/>},
    {path: "/categories", element: <Categories/>},
    {path: "/product-page", element: <ProductPage/>},
    {path: "/checkout", element: <Checkout/>},
    {path: "/contact", element: <Contact/>},
]
export default Routes