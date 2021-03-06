import React, { Component } from "react";

import { Box, Text, Heading } from "grommet";

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
      <Box background="white" width="100%" alignSelf="center">
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
              {"Wonder Bucket's"}
            </Heading>
          </Box>

          <Box
            width="100%"
            alignSelf="start"
            pad={{ bottom: "medium", left: "medium" }}
            //   border={{ color: "red", size: "small" }}
          >
            <Text size="large" alignSelf="centre">
              {
                "Manage your to do items, drop the items here and we will take care of rest."
              }
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default AboutMe;
