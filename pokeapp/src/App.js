import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: #555;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  box-shadow: 0 12px 9px -1px rgba(0, 0, 0, 0.12);
`;

function App() {
  return (
    <div className="App">
      <Header>POKEHUB</Header>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/pokemon/:id" component={Home} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
