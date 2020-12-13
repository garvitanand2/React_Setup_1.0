import React, { Component } from "react";
import { Box, Layer, Button } from "grommet";
import Form from "./Form";
import { FormClose } from "grommet-icons";
import styled from "styled-components";
const ButtonStyle = styled(Button)`
  top: 403px;
  left: 772px;
  width: 150px;
  height: 50px;
  border: 2px solid #33c088;
  border-radius: 8px;
  opacity: 1;
`;
class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setShow: false,
      item: props.current_buxket || false,
    };
  }
  render() {
    return (
      <Box>
        <Box alignSelf="end">
          <ButtonStyle
            label="Add Bucket"
            primary
            onClick={() => this.setState({ setShow: true })}
          />
        </Box>

        {this.state.setShow && (
          <Layer
            onEsc={() => this.setState({ setShow: false })}
            onClickOutside={() => this.setState({ setShow: false })}
          >
            <Box margin="medium" pad="small">
              <Box alignSelf="end">
                <FormClose
                  color="brand"
                  size="medium"
                  onClick={() => this.setState({ setShow: false })}
                />
              </Box>

              <Form useFulProps={this.props}></Form>
            </Box>
          </Layer>
        )}
      </Box>
    );
  }
}

export default PopUp;
