import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Protected from "./Route/Protected";
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Public from "./Route/Public";

const App = () => {
   
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Protected />}>
                        <Route path="/" element={<Dashboard />}></Route>
                    </Route>
                    <Route element={<Public />}>
                        <Route path="/login" element={<Login />}></Route>
                    </Route>                         
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;