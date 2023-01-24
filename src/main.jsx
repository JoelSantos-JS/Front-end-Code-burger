import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ToastContainer } from 'react-toastify';
import Globalstyles from "./styles/globalstyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

 
    <App />
    <Globalstyles/>
    <ToastContainer/>
    </BrowserRouter>

);
