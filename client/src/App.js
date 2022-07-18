import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Landingpage from "./components/LandingPage";
import Home from "./components/Home";
import RazaCreate from "./components/RazaCreate";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
    <Switch>
        <Route exact path = "/" component = {Landingpage}/>
        <Route exact path = "/home" component = {Home}/>
        <Route path= "/home/:id" component = {Detail}/>
        <Route path = "/temperaments" component = {RazaCreate}/>
      </Switch>
      {/* <h6>Henry Dogs</h6> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
