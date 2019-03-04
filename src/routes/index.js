import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Start from "../pages/start/index";
import NewsItem from "../pages/newsItem/index";

export default () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/:newsId" exact component={NewsItem} />
      </Switch>
    </BrowserRouter>
  </div>
);
