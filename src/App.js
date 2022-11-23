import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Protected from "./Route/Protected";
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Public from "./Route/Public";
import Home from "./dashboard/Home";
import About from "./pages/About";

const App = () => {
   
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Protected />}>
                        <Route path="/" element={<Dashboard />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                    </Route>
                    <Route element={<Public />}>
                        <Route path="/login" element={<Login />}></Route>
                    </Route>                         
                        <Route path='*' exact={true} element={<h2>Page Not Found</h2>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;