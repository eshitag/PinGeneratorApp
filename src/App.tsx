import React from 'react';
import './styles/App.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Component/Home';
import Generator from './Component/Generator';
import Saved from './Component/Saved';
import NavBar from './Component/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/generate" component={Generator}></Route>
            <Route exact path="/saved" component={Saved}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
