import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Text, Layer, Button } from "grommet";
import {Edit, FormClose } from "grommet-icons";
import styled from "styled-components";
const ButtonStyle = styled(Button)`
  top: 403px;
  left: 772px;
  width: 200px;
  height: 35px;
  border: 2px solid #33c088;
  border-radius: 8px;
  opacity: 1;
`;
class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setShow: false,
    };
  }
  render() {
    return (
      <Box>
        <Edit
          color="brand"
          size="medium"
          onClick={() => this.setState({ setShow: true })}
        />
        {this.state.setShow && (
          <Box margin="small" width="50%">
            <Layer
              // width="50%"
              onEsc={() => this.setState({ setShow: false })}
              onClickOutside={() => this.setState({ setShow: false })}
            >
              {this.state.setShow && (
                <Box margin="medium" pad="small">
                  <Box
                    alignSelf="end"
                    margin={{ bottom: "xsmall", top: "xsmall" }}
                  >
                    <FormClose
                      color="brand"
                      size="medium"
                      onClick={() => this.setState({ setShow: false })}
                    />
                  </Box>

                  <Formik
                    initialValues={{
                      item: this.props.data || "",
                      current_bucket: this.props.current_bucket,
                      bucket_id : this.props.bucket_id
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      this.props.handleAddMoreItems(values);
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
                           <Text weight = "bold">{"Edit"}</Text> 
                            <Field name="item" placeholder="Update" />
                            <ErrorMessage name="item" component="div" />
                          </Box>

                          <Box alignSelf="end" margin="small">
                            <ButtonStyle
                              primary
                              type="submit"
                              color="brand"
                              disabled={isSubmitting}
                              label={"Save"}
                              size="small"
                            ></ButtonStyle>
                          </Box>
                        </Box>
                      </Form>
                    )}
                  </Formik>
                </Box>
              )}{" "}
            </Layer>
          </Box>
        )}
      </Box>
    );
  }
}

export default EditItem;
