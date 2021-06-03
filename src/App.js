import logo from './logo.svg';
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

function App() {
  return (
    <Router>
     
     <Switch>
       <Route path ="/home">
       <Header/>
       </Route>
       <Route path ="/login">
       <Login/>
       </Route>
         <Route path ="/team/:idTeam">
         
       </Route>
       <Route exact path ="/">
        <Header/>
       </Route>
       <Route path ="*">
        <NoMatch/>
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
