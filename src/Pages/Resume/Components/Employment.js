import React, { Component } from "react";

import { Box, Text, Image } from "grommet";
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

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  hamdleResumeonClick = () => {
    // const history = useHistory();
    console.log("I am clicked for navigate to resume link");
  };

  handledrop = () => {
    this.state.visible
      ? this.setState({ visible: false })
      : this.setState({ visible: true });
  };

  render() {
    console.log("Comping props", this.props);
    return (
      <Box
        background="white"
        // pad="medium"
        width="100%"
        border={{ color: "black", size: "medium" }}
        flex="grow"
        alignSelf="center"
        // gap="medium"
        elevation="medium"
      >
        <Box background="yellow" direction="row">
          <Box width="90%" align="start" pad={{ left: "small" }}>
            <Text color="black" size="medium">
              {"Employment"}
            </Text>
          </Box>
          <Box
            width="10%"
            align="end"
            onClick={() => {
              this.handledrop();
            }}
          >
            <Image
              //   fit="cover"
              src={process.env.PUBLIC_URL + "/Images/new_down.png"}
              fit="contain"
              height="12px"
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Box>
        {this.state.visible && (
          <Box>
            <Text>{"Some Discription"}</Text>
          </Box>
        )}
      </Box>
    );
  }
}

export default Employment;
