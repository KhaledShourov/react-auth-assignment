import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';
import Contact from "./components/Login/Contact/Contact";
import Blog from "./components/Blog/Blog";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    <p>Name: {loggedInUser.name}</p>
      <Router>
      <Switch>
        <Route path ="/home">
          <Header/>
        </Route>
        <Route path ="/login">
          <Login/>
        </Route>
        <Route path ="/contact">
           <Contact/>
        </Route>
        <Route path ="/blog">
          <Blog/>
        </Route>
          <PrivateRoute PrivateRoute path = "/destination" >
          <Destination/>
        </PrivateRoute>
        <Route exact path ="/">
          <Header/>
        </Route>
        <Route path ="*">
          <NoMatch/>
        </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
