import React, { Component } from "react";

import { Box, Text } from "grommet";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: "X",
      chance: 0,
    };
  }

  hamdleResumeonClick = () => {
    // const history = useHistory();
    console.log("I am clicked for navigate to resume link");
  };

  handleSquareClick = () => {
    console.log("Your square clicked with props", this.props.value);
  };
  // this.props.value
  render() {
    return (
      <Box width="10%" justify="between" alignSelf="center">
        <Box
          border={{ color: "red", size: "medium" }}
          elevation="medium"
          onClick={this.handleSquareClick}
          pad="medium"
        >
          <Text>{this.props.value}</Text>
        </Box>
      </Box>
    );
  }
}

export default Square;
