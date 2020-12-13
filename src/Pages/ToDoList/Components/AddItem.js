import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Text, Layer, Button } from "grommet";
import { Down, Github, Search, Edit, FormTrash, Add } from "grommet-icons";
class AddItem extends Component {
  constructor(props) {
    console.log("Coming props in add items  is ", props);
    super(props);
    this.state = {
      setShow: false,
    };
  }
  render() {
    return (
      <Box>
        <Add
          color="brand"
          size="medium"
          onClick={() => this.setState({ setShow: true })}
        />
        {this.state.setShow && (
          <Layer
            onEsc={() => this.setState({ setShow: false })}
            onClickOutside={() => this.setState({ setShow: false })}
          >
            {this.state.setShow && (
              <Box margin="medium" pad="small">
                <Formik
                  initialValues={{
                    item: "",
                    current_bucket: this.props.current_bucket,
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    this.props.handleAddMoreItems(
                      values
                    );
                    this.setState({ setShow: false });
                    setTimeout(() => {
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Box>
                        <Box gap="small">
                          <Text>{"To Do Task"}</Text>
                          <Field name="item" placeholder="Bucket Name" />
                          <ErrorMessage name="item" component="div" />
                        </Box>

                        <Box alignSelf="end" margin="small">
                          <Button
                            primary
                            type="submit"
                            color="brand"
                            disabled={isSubmitting}
                          >
                            Add Item
                          </Button>
                        </Box>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </Box>
            )}{" "}
          </Layer>
        )}{" "}
      </Box>
    );
  }
}

export default AddItem;
