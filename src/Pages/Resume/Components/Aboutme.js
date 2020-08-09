import React, { Component } from "react";

import { Box, Text, Image, Carousel, Heading } from "grommet";
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
import { LinkedinOption } from "grommet-icons";
import { StackOverflow } from "grommet-icons";
import { Twitter } from "grommet-icons";
import { Github } from "grommet-icons";
import { Medium } from "grommet-icons";


class AboutMe extends Component {
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

  handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/garvitanand2/", "_self");
  };

  handleStackClick = () => {
    window.open(
      "https://stackoverflow.com/users/7703785/garvit-anand",
      "_self"
    );
  };

  handleGitClick = () => {
    window.open("https://github.com/garvitanand2", "_self");
  };

  handleTwitterClick = () => {
    window.open(" https://twitter.com/AnandGarvit", "_self");
  };

  handleMediumClick = () =>{
       window.open("https://medium.com/@garvitanand11", "_self");
  }
  render() {
    return (
      <Box
        background="white"
        // pad="medium"
        width="100%"
        // border={{ color: "black", size: "medium" }}
        flex="grow"
        alignSelf="center"
        // gap="medium"
        elevation="medium"
      >
        <Box background="yellow" direction="row">
          <Box width="90%" align="start" pad={{ left: "small" }}>
            <Text color="black" size="medium">
              {"About Me"}
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
          <Box background="black">
            <Box
              width="100%"
              direction="row"
              gap="medium"
              pad="medium"
              justify="end"
            >
              <LinkedinOption
                color="white"
                onClick={() => {
                  this.handleLinkedInClick();
                }}
              ></LinkedinOption>
              <StackOverflow
                onClick={() => {
                  this.handleStackClick();
                }}
              ></StackOverflow>
              <Twitter
                onClick={() => {
                  this.handleTwitterClick();
                }}
              ></Twitter>
              <Github
                onClick={() => {
                  this.handleGitClick();
                }}
              ></Github>
              <Medium
                onClick={() => {
                  this.handleMediumClick();
                }}
              ></Medium>
            </Box>
            <Heading>{"About Me"}</Heading>
            <Box pad={{ left: "medium" }}>
              <Heading textAlign="start" level={3}>
                {"Objective"}
              </Heading>
            </Box>
            <Box
              width="100%"
              alignSelf="start"
              //   border={{ color: "red", size: "small" }}
            >
              <Text size="medium">
                {
                  "To obtain an opportunity to work in competitive environment, that will enable me to contribute my academic skills and experience towards the growth of the organization and also leverages the scope of learning from the peer members"
                }
              </Text>
            </Box>
          </Box>
        )}
      </Box>
    );
  }
}

export default AboutMe;
