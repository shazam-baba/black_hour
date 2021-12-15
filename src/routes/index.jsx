import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";

import { Homepage, Page404, News, Updates, Download, About} from "pages";
import { NavBar, Footer } from "containers";
import { baseColor } from "styles/base";


export default function App() {
  return (
    <Router>
        <MainWrapper>
          <NavBar />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home">
              <Homepage />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path="/updates">
              <Updates />
            </Route>
            <Route exact path="/download">
              <Download />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
          <Footer />
        </MainWrapper>
    </Router>
  );
}

const MainWrapper = styled.div``;
