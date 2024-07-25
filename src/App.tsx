// import {BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import './App.css'
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import Layout from "./Pages/Layout.tsx";
import AccountType from "./Pages/AccountType.tsx";
// import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Pages/Home.tsx";
import GlobalStyle from "./StyledComponents/GlobalStyle.ts";
import CreateAccount from "./Pages/CreateAccount.tsx";
import VerifyAccount from "./Pages/VerifyAccount.tsx";
import CareerStatus from "./Pages/CareerStatus.tsx";

function App() {

  return (
      <>
          <GlobalStyle/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signup" element={<Layout/>}>
                  <Route path="account-type" element={<AccountType/>}/>
                  <Route path="create-account" element={<CreateAccount/>}/>
                  <Route path="verify-account" element={<VerifyAccount/>}/>
              </Route>
              <Route path="/logged-in" element={<Layout/>}>
                  <Route path="select-career-status" element={<CareerStatus/>}/>
              </Route>
          </Routes>
      </>
  )
}

export default App
