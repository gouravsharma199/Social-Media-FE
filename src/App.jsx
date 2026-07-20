import NavBar from "./NavBar";
import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login"
import Body from "./Body";
import appStore from "./utils/appStore";
import {provider} from "react-redux";




function App() {
  return (
  <>
    <provider store={appStore}>
      <BrowserRouter basename = "/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/profile" element={<Profile/>} ></Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </provider>
    
  </>
    
  );
}

export default App;