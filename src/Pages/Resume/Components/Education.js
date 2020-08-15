import React, { Component } from "react";

import { Box, Text, Image, Heading } from "grommet";
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

class Education extends Component {
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
    return (
      <Box
        background="black"
        // pad="medium"
        width="100%"
        border={{ color: "white", size: "small" }}
        flex="grow"
        alignSelf="center"
        // gap="medium"
        elevation="medium"
      >
        <Box justify="center">
          <Heading alignSelf="center">{"Education "}</Heading>
        </Box>
        <Box
          // border={{ color: "red", size: "small" }}
          gap="medium"
          direction="row"
          pad="medium"
        >
          <Box
            width="33%"
            background="#66ba80"
            gap="medium"
            elevation="medium"
            pad="small"
          >
            <Box>
              <Text weight="bold" size="medium">
                {"Graduation"}
              </Text>
            </Box>
            <Box>
              <Box direction="row">
                <Box
                  // border={{ color: "red", size: "small" }}
                  pad={{ left: "small" }}
                  justify="start"
                  alignSelf="start"
                >
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"Examination:"}
                  </Text>
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"University:"}
                  </Text>
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"Institute:"}
                  </Text>
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"Year:"}
                  </Text>
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"Percentage:"}
                  </Text>
                </Box>
                <Box
                  // border={{ color: "red", size: "small" }}
                  pad={{ left: "small" }}
                >
                  <Text alignSelf="start"> {"Graduation"}</Text>
                  <Text alignSelf="start"> {"AKTU"}</Text>
                  <Text alignSelf="start"> {"RKGIT"}</Text>
                  <Text alignSelf="start"> {"2019"}</Text>
                  <Text alignSelf="start"> {"78.96 (HONS)"}</Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            width="33%"
            background="#66ba80"
            gap="medium"
            elevation="medium"
            pad="small"
          >
            <Box>
              <Text weight="bold" size="medium">
                {"Intermediate"}
              </Text>
            </Box>
            <Box>
              <Box direction="row">
                <Box
                  // border={{ color: "red", size: "small" }}
                  pad={{ left: "small" }}
                  justify="start"
                  alignSelf="start"
                >
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"Examination:"}
                  </Text>
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"University:"}
                  </Text>
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"Institute:"}
                  </Text>
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"Year:"}
                  </Text>
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"Percentage:"}
                  </Text>
                </Box>
                <Box
                  // border={{ color: "red", size: "small" }}
                  pad={{ left: "small" }}
                >
                  <Text alignSelf="start"> {"Intermediate"}</Text>
                  <Text alignSelf="start"> {"CBSE"}</Text>
                  <Text alignSelf="start"> {"ESS ESS Convent School"}</Text>
                  <Text alignSelf="start"> {"2014"}</Text>
                  <Text alignSelf="start"> {"74.2"}</Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            width="33%"
            background="#66ba80"
            gap="medium"
            elevation="medium"
            pad="small"
          >
            <Box>
              <Text weight="bold" size="medium">
                {"Matriculation"}
              </Text>
            </Box>
            <Box>
              <Box direction="row">
                <Box
                  // border={{ color: "red", size: "small" }}
                  pad={{ left: "small" }}
                  justify="start"
                  alignSelf="start"
                >
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"Examination:"}
                  </Text>
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"University:"}
                  </Text>
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"Institute:"}
                  </Text>
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"Year:"}
                  </Text>
                  <Text
                    alignSelf="start"
                    style={{ textDecoration: "underline" }}
                    weight="bold"
                  >
                    {"Percentage:"}
                  </Text>
                </Box>
                <Box
                  // border={{ color: "red", size: "small" }}
                  pad={{ left: "small" }}
                >
                  <Text alignSelf="start"> {"Matriculation"}</Text>
                  <Text alignSelf="start"> {"ICSE"}</Text>
                  <Text alignSelf="start"> {"St . George’s College"}</Text>
                  <Text alignSelf="start"> {"2012"}</Text>
                  <Text alignSelf="start"> {"82.4"}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Education;
