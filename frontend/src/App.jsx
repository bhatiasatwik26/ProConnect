// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn"
import Dashboard from "./components/Dashboard"
import { Provider } from "react-redux";
import {AppStore,persistor} from "../utils/Appstore";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={AppStore}>
      <PersistGate loading={null} persistor={persistor}>
          <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={< Dashboard/>} />  
          </Routes>
        </Router>
      </PersistGate>
    </Provider>

  )
}

export default App