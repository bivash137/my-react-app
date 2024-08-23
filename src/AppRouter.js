import { Routes, Route } from "react-router-dom"
import Demo from "./Demo"
import ErrorPage from "./containers/ErrorPage"
import PrivateRoute from "./containers/PrivateRoute"
import ProductDetail from "./containers/ProductDetail"
import Cart from "./containers/cart";
import Login from "./containers/Login";
import { lazy, Suspense } from "react"

const LazyProductList = lazy(()=> import("./containers/ProductList"));

function AppRouter() {
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Demo />} />
            <Route path="/product" element={<LazyProductList />} />
            <Route path="/detail/:pid" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route 
                path="/checkout"
                element={
                    <PrivateRoute>
                        <Checkout/>
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </Suspense>
}

export default AppRouter;