import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Layout from "./components/Layout";
import Login from "./components/Login";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import ErrorPage from "./components/ErrorPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="products"
                        element={
                            <ProtectedRoutes>
                                {/* <h1>HELLO</h1> */}
                                <Products />
                            </ProtectedRoutes>
                        }
                    />
                    <Route
                        path="singleProduct/:id"
                        element={
                            <ProtectedRoutes>
                                <SingleProduct />
                            </ProtectedRoutes>
                        }
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
