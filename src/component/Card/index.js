import React, { Component } from "react";
import { Box, Text, Image  } from "grommet";



class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 

  render() {
    console.log("Coming props are", this.props);
    return (
      <Box
        background="white"
        pad="medium"
        width="100%"
        border={{ color: "black", size: "xsmall" }}
        flex="grow"
        alignSelf="center"
        gap="medium"
      >
        <Box>
          <Box background="#6a6e69" >
            <Text size = "medium" color = "white"> {this.props.title}</Text>
          </Box>
          <Box >
            <Text> {"Sample Image"}</Text>
          </Box>
          <Box background="#9be892" >
            <Text size = "small"> {this.props.description}</Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Card;
