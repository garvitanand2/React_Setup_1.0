import React, { Component } from "react";
import { Box, Text, Layer, Button } from "grommet";

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setShow:true
    };
  }

  render() {
    return (
      <Box>
        <Button label="show" onClick={() => this.setState({ setShow: true })} />
        {this.state.setShow && (
          <Layer
            onEsc={() => this.setState({ setShow: false })}
            onClickOutside={() => this.setState({ setShow: false })}
          >
            <Button
              label="close"
              onClick={() => this.setState({ setShow: false })}
            />
            <Text>{"Sample form is here"}</Text>
          </Layer>
        )}
      </Box>
    );
  }
}

export default PopUp;
