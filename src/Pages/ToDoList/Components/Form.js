import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Text, Button } from "grommet";
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
class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setShow: true,
    };
  }
  render() {
    return (
      <Box>
        <Formik
          initialValues={{ name: "", description: "" }}
          onSubmit={(values, { setSubmitting }) => {
            this.setState({ setShow: false });
            this.props.useFulProps.handleAddBucket(values);

            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box>
                <Box gap="small">
                  <Text>{"Bucket Name"}</Text>
                  <Field name="name" placeholder="Bucket Name" />
                  <ErrorMessage name="name" component="div" />
                </Box>
                <Box>
                  <Text>{"Description"}</Text>
                  <Field name="description" placeholder="Bucket Deecription" />
                  <ErrorMessage name="description" component="div" />
                </Box>

                <Box alignSelf="end" margin="small">
                  <ButtonStyle
                    primary
                    type="submit"
                    color="brand"
                    label="Add Bucket"
                    disabled={isSubmitting}
                  ></ButtonStyle>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    );
  }
}

export default Basic;
