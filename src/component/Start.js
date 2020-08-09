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
import Card from "././Card";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hamdleResumeonClick = () => {
    // const history = useHistory();
    console.log("I am clicked for navigate to resume link");
  };

  render() {
      console.log("Comping props", this.props)
    return (
      <Box
        background="white"
        pad="medium"
        width="100%"
        // border={{ color: "red", size: "small" }}
        flex="grow"
        alignSelf="center"
        gap="medium"
      >
        <Box>
          <Text size="medium" color="green">
            {"Welcome to the project it just a begning..."}
          </Text>

          <Text size="medium" color="green">
            {"Please Select the module you want to the access."}
          </Text>
        </Box>
        <Box direction="row" gap="small">
          <Box
            width="25%"
            elevation="medium"
            onClick={() => {
              this.hamdleResumeonClick();
            }}
          >
            <Card title="Resume" description="My Resume" />
          </Box>

          <Box width="25%" elevation="medium">
            <Card
              title="Food Ordering"
              description="A sample web app to order food ordering and vie food items"
            ></Card>
          </Box>
          <Box width="25%" elevation="medium">
            <Card
              title="E-commerce"
              description="A web app is a sample copy of amamzon.com"
            ></Card>
          </Box>
          <Box width="25%" elevation="medium">
            <Card
              title="Fashion"
              description="A gallery where ypu find all your required designs"
            ></Card>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Start;
