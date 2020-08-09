import React, { Component } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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

class TechSkills extends Component {
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
              {"Technical Skills"}
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
        {true && (
          <Box width="100%" direction="row" gap="small">
            <Box width="5%" border={{ color: "red", size: "small" }}>
              <CircularProgressbar value={50} text={`${50}%`} />
            </Box>
            <Box width="5%">
              <CircularProgressbar value={50} text={`${50}%`} />
            </Box>
            <Box width="5%">
              <CircularProgressbar value={50} text={`${50}%`} />
            </Box>
            <Box width="5%">
              <CircularProgressbar value={50} text={`${50}%`} />
            </Box>
          </Box>
        )}
      </Box>
    );
  }
}

export default TechSkills;
