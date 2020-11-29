import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthorPage from "./pages/AutorPage/AuthorPage";
import MainPage from "./pages/MainPage/MainPage";



const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/author" component={AuthorPage} />
      </Switch>
    </Router>
  );
};

export default Routes;