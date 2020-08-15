import React, { Component } from "react";

import { Box, Text, Image, List, Heading } from "grommet";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Radial, Briefcase } from "grommet-icons";

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
        border={{ color: "white", size: "small" }}
        flex="grow"
        alignSelf="center"
        // gap="medium"
        elevation="medium"
      >
        <Box justify="center" direction="row" gap="small">
          <Heading alignSelf="center" color="black">
            {"Experience"}
          </Heading>
        </Box>
        <Box gap="medium" pad="medium">
          <Box
            width="100%"
            background="brand"
            gap="medium"
            elevation="large"
            pad="small"
          >
            <Box>
              <Box direction="row" pad={{ bottom: "small" }}>
                <Box width="5%">
                  <Briefcase size="large" color="black"></Briefcase>
                </Box>
                <Box width="95%">
                  <Text weight="bold" size="medium" alignSelf="start">
                    {"Associate Software Developer"}
                  </Text>
               
                    <Text weight="bold" size="small" alignSelf="start">
                      {"Thoughts2Binary Consulting & Solutions"}
                    </Text>
                    <Text size="small" alignSelf="start">
                      {"February 2020 - Present"}
                    </Text>
                 
                </Box>
              </Box>

              <Text weight="bold" size="medium" alignSelf="start">
                {"Key responsibilities :"}
              </Text>
            </Box>
            <Box>
              <Box direction="row">
                <Box
                  // border={{ color: "red", size: "small" }}
                  pad={{ left: "small" }}
                >
                  <Box>
                    <Box direction="row">
                      <Box
                        // border={{ color: "red", size: "small" }}
                        pad={{ left: "small" }}
                        justify="start"
                        alignSelf="start"
                        gap="medium"
                      >
                        <Text>
                          <Radial size="small" color="white"></Radial>{" "}
                          {"JAi MAta Di"}
                        </Text>
                        <Text>
                          <Radial size="small" color="white"></Radial>{" "}
                          {"JAi MAta Di"}
                        </Text>
                        <Text>
                          <Radial size="small" color="white"></Radial>{" "}
                          {"JAi MAta Di"}
                        </Text>
                        <Text>
                          <Radial size="small" color="white"></Radial>{" "}
                          {"JAi MAta Di"}
                        </Text>
                        <Text>
                          <Radial size="small" color="white"></Radial>{" "}
                          {"JAi MAta Di"}
                        </Text>
                        <Text>
                          <Radial size="small" color="white"></Radial>{" "}
                          {"JAi MAta Di"}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            width="100%"
            background="brand"
            gap="medium"
            elevation="large"
            pad="small"
          >
            <Box>
              <Box direction="row" pad={{ bottom: "small" }}>
                <Box width="5%">
                  <Briefcase size="large" color="black"></Briefcase>
                </Box>
                <Box width="95%">
                  <Text weight="bold" size="medium" alignSelf="start">
                    {"Software Engineer Trainee"}
                  </Text>
                  <Text weight="bold" size="small" alignSelf="start">
                    {"RSG Media Systems Pvt. Ltd."}
                  </Text>
                  <Text size="small" alignSelf="start">
                    {"July 2029 - Feb 2020"}
                  </Text>
                </Box>
              </Box>

              <Text weight="bold" size="medium" alignSelf="start">
                {"Key responsibilities :"}
              </Text>
            </Box>
            <Box>
              <Box direction="row">
                <Box
                  // border={{ color: "red", size: "small" }}
                  pad={{ left: "small" }}
                >
                  <Box>
                    <Box direction="row">
                      <Box
                        // border={{ color: "red", size: "small" }}
                        pad={{ left: "small" }}
                        justify="start"
                        alignSelf="start"
                        gap="medium"
                      >
                        <Text>
                          <Radial size="small" color="white"></Radial>{" "}
                          {"JAi MAta Di"}
                        </Text>
                        <Text>
                          <Radial size="small" color="white"></Radial>{" "}
                          {"JAi MAta Di"}
                        </Text>
                        <Text>
                          <Radial size="small" color="white"></Radial>{" "}
                          {"JAi MAta Di"}
                        </Text>
                        <Text>
                          <Radial size="small" color="white"></Radial>{" "}
                          {"JAi MAta Di"}
                        </Text>
                        <Text>
                          <Radial size="small" color="white"></Radial>{" "}
                          {"JAi MAta Di"}
                        </Text>
                        <Text>
                          <Radial size="small" color="white"></Radial>{" "}
                          {"JAi MAta Di"}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Employment;
