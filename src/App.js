import React from "react";
import "./app.css";
import Header from "./components/Header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Updating from "./components/Updating";
import Mounting from "./components/Mounting";
import Unmounting from "./components/Unmounting";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/updating" component={Updating} />
            <Route path="/unmounting" component={Unmounting} />
            <Route path="/mounting" component={Mounting} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
