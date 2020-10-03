import React, { Component } from "react";

import { Box, Text } from "grommet";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";
import SQUARE from "./Components/Square";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hamdleResumeonClick = () => {
    // const history = useHistory();
    console.log("I am clicked for navigate to resume link");
  };

  render() {
    return (
      <Box width="100%" flex="grow" gap="small">
        <Box width="100%" direction="row" gap="small">
          <SQUARE value="1"></SQUARE>
          <SQUARE value="2"></SQUARE>
          <SQUARE value="3"></SQUARE>
        </Box>
        <Box width="100%" direction="row" gap="small">
          <SQUARE value="4"></SQUARE>
          <SQUARE value="5"></SQUARE>
          <SQUARE value="6"></SQUARE>
        </Box>
        <Box width="100%" direction="row" gap="small">
          <SQUARE value="7"></SQUARE>
          <SQUARE value="8"></SQUARE>
          <SQUARE value="9"></SQUARE>
        </Box>
      </Box>
    );
  }
}

export default Game;
