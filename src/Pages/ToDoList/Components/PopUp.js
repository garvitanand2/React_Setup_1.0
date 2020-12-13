import React, { Component } from "react";
import { Box, Text, Layer, Button } from "grommet";
import Form from './Form'
import { Down, Github, Search, Edit, FormTrash, Add, FormClose } from "grommet-icons";
import AddItem from './AddItem';
class PopUp extends Component {
  
  constructor(props) {
    console.log("Coming props in popup is ", props.current_buxket);
    super(props);
    this.state = {
      setShow: false,
      item: props.current_buxket || false,
    };
  }
  render() {
    return (
      <Box>
        <Button
          label="Add Bucket"
          primary
          onClick={() => this.setState({ setShow: true })}
        />
        {this.state.setShow && (
          <Layer
            onEsc={() => this.setState({ setShow: false })}
            onClickOutside={() => this.setState({ setShow: false })}
          >
            <Box margin="medium" pad="small">
              <FormClose
                color="brand"
                size="large"
                onClick={() => this.setState({ setShow: false })}
              />

              <Form useFulProps={this.props}></Form>
            </Box>
          </Layer>
        )}
      </Box>
    );
  }
}

export default PopUp;
