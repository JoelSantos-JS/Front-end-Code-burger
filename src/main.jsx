import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";
import { ToastContainer } from 'react-toastify';
import Globalstyles from "./styles/globalstyles";
import {UserProvider} from './hooks/UserContext'
import AppProvider from "./hooks";
import RoutesF from "./routes/routes";
import { CardProvider } from "./hooks/CardContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <>
 
 <UserProvider>
<CardProvider>
   <RoutesF/>
   </CardProvider>
   </UserProvider>
    <Globalstyles/>
    
    <ToastContainer/>
  

    </>

  
);
