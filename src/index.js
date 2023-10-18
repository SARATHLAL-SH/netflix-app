import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import { AuthContextProvider } from "./context/context";
import Form from "./Components.jsx/Form/Form";
import Login from "./Components.jsx/Login/Login";
import Signin from "./Components.jsx/Signin/Signin";
import Signup from "./Components.jsx/Sugnup/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
         
        <Route exact path="/home" element={ <App />}/>
      </Routes>
  </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
