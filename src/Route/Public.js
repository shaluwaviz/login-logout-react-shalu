import { Navigate, Outlet } from 'react-router-dom';

const Public = () => {
    const token= localStorage.getItem("token");    
    // let auth = {'token':token}
  
    return(
        // Netive Java Script Condition
        //  <>
        //     if (token) {
        //         <Navigate to="/"/>
        //     } else{
        //         <Outlet/>
        //     }
        //  </>

        // ES6 Condition

         token ?  <Navigate to="/" /> : <Outlet /> 
    )
}
export default Public;







