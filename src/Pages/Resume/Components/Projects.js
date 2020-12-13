import React, { Component } from "react";

import { Box, Text } from "grommet";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

class Project extends Component {
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
        // border={{ color: "black", size: "medium" }}
        flex="grow"
        alignSelf="center"
        // gap="medium"
        elevation="medium"
      >
        <Box>
          <Text>{"Some Discription"}</Text>
        </Box>
      </Box>
    );
  }
}

export default Project;
