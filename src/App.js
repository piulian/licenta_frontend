import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import Dashboard from "./modules/dashboard/dashboard.component";
import Login from "./modules/login/login.component";
import Map from "./components/Map";
import Test1 from './components/TestModal';


class App extends Component {

  render() {
    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
          </header>
          <Map/>
          <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/login' component={Login}/>
              <Route path='/dashboard' component={Dashboard}/>
              {/* <Route path='/map' component={Map}/> */}
          </Switch>

      </div>


    );
  }
}

export default App;
