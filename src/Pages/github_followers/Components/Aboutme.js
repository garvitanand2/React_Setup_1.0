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

  handleMediumClick = () => {
    window.open("https://medium.com/@garvitanand11", "_self");
  };
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
          <Box justify="center" pad="none" margin="none">
            <Heading alignSelf="center" style={{ textDecoration: "underline" }}>
              {"About Me"}
            </Heading>
          </Box>
          <Box pad={{ left: "medium" }}>
            <Heading textAlign="start" level={3}>
              {"Objective:-"}
            </Heading>
          </Box>
          <Box
            width="100%"
            alignSelf="start"
            pad={{ bottom: "medium", left: "medium" }}
            //   border={{ color: "red", size: "small" }}
          >
            <Text size="large" alignSelf="start">
              {
                "You are currently viewing a sample project made by #Garvit Anand, which is a basic application to get the user who had forked the facebook/react repo and you can follow or unfollow user, the user you follow will be followed by github profile garvitanand2, to view the followes click on the github image above this is highly customisable, contact to get added more features."
              }
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default AboutMe;
