import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import SignIn from "./Pages/Login/SignIn";
import SignUp from "./Pages/Login/SignUp";
import Home from "./Pages/Home/Home";
import Favorite from "./Pages/Favorites/Favorites";

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/favorite" component={Favorite}/>
    </Switch>
  </BrowserRouter>
);
