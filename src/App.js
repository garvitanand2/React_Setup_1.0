import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./component/home.js";
import MainPage from "./component/Main";
import Home from "./component/Page2";
import StartPage from "./component/Start";
import Resume from "./Pages/Resume";
import GITHUB from "./Pages/github_followers";
import TIKTAKTOE_GAME from "./Pages/Zero_Cross";
import { Box, Text, Clock, Heading } from "grommet";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

function App() {
  const history = useHistory();
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
            <Home />
          </Route>
          <Route path="/">
            {/*<StartPage />*/}
            {/* <GITHUB /> */}
            <TIKTAKTOE_GAME/>
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
