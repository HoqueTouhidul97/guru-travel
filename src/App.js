import React, { createContext, useState } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
export const userContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({
    name:'',
    password:'',
    email:'',
    error:'',
    success:true,
    formValid:true
  });
  const [locationInfo,setLocationInfo] = useState(0);
  return (
    <userContext.Provider value ={{loggedUser:[loggedInUser,setLoggedInUser],location:[locationInfo,setLocationInfo]}}>
    <Router>
      <Switch>
        <Route>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
