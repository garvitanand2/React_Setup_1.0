import React, { Component } from "react";

import { Box, Text, Heading } from "grommet";

import { Radial, Briefcase } from "grommet-icons";

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
          <Heading
            alignSelf="center"
            color="black"
            style={{ textDecoration: "underline" }}
          >
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
                        <Text alignSelf="start">
                          <Radial size="small" color="white"></Radial>
                          {
                            " Responsible for handling multiple projects at the same time."
                          }
                        </Text>
                        <Text alignSelf="start">
                          <Radial size="small" color="white"></Radial>
                          {
                            " Responsible for building the UI using React Js & Redux as provide by the UX team for webapp."
                          }
                        </Text>
                        <Text alignSelf="start">
                          <Radial size="small" color="white"></Radial>
                          {
                            " Responsible for integrating the REST API end points provided by the backend teams."
                          }
                        </Text>
                        <Text alignSelf="start">
                          <Radial size="small" color="white"></Radial>
                          {
                            " Responsible for collloaborate with infra team to deploy the complete frontend ."
                          }
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
                    {"July 2019 - Feb 2020"}
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
                        <Text alignSelf="start">
                          <Radial size="small" color="white"></Radial>
                          {" Works on developing Rights Logic version 4.0"}
                        </Text>
                        <Text alignSelf="start">
                          <Radial size="small" color="white"></Radial>
                          {
                            " Developing screen as per BA requirements using React Js."
                          }
                        </Text>
                        <Text alignSelf="start">
                          <Radial size="small" color="white"></Radial>
                          {
                            " Responsible for writting API in Node Js and integrating the same."
                          }
                        </Text>
                        <Text alignSelf="start">
                          <Radial size="small" color="white"></Radial>
                          {
                            " Responsible for writing queries so that admin page can be controlled from Database."
                          }
                        </Text>
                        <Text alignSelf="start">
                          <Radial size="small" color="white"></Radial>
                          {
                            " Writing script for data tranfer from Oracle to Postgres."
                          }
                        </Text>

                        <Text alignSelf="start">
                          <Radial size="small" color="white"></Radial>{" "}
                          {" POC {Postgres}"}
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
                    {"Web Developer Intern"}
                  </Text>
                  <Text weight="bold" size="small" alignSelf="start">
                    {"Kivi Technologies Private Limited"}
                  </Text>
                  <Text size="small" alignSelf="start">
                    {"June 2018 - July 2018"}
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
                        <Text alignSelf="start">
                          <Radial size="small" color="white"></Radial>{" "}
                          {
                            "Worked on Web User Interface design and its development"
                          }
                        </Text>
                        <Text alignSelf="start">
                          <Radial size="small" color="white"></Radial>{" "}
                          {
                            "Contributed in designing a Responsive product  KiviHealth of Kivi Technologies Pvt Ltd   "
                          }
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
