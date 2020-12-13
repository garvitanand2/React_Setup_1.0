import React from "react";
import "./App.css";
import MainPage from "./component/Main";
import Resume from "./Pages/Resume";
import GITHUB from "./Pages/github_followers";
import ToDOList from "./Pages/ToDoList";
import { Box, Text, Clock } from "grommet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" width="100%" flex="grow">
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/login"}>
            <MainPage />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/resume"}>
            <Resume />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/github"}>
            <GITHUB />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/home"}>
            <ToDOList />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/todolist"}>
            <ToDOList />
          </Route>
          <Route path="/">
            <ToDOList />
          </Route>
        </Switch>

        <Box direction="row">
          <Box width="90%" align="end">
            <Text weight="bold" size="small">
              {"Created By: Garvit Anand | All rights reserved."}
            </Text>
          </Box>
          <Box width="10%" align="end">
            <Clock type="digital" />
          </Box>
        </Box>
      </div>
    </Router>
  );
}

export default App;
