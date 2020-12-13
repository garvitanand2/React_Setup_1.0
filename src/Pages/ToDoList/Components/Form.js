import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Text, Layer, Button } from "grommet";
class Basic extends Component {
     constructor(props) {
    console.log('Coming props in main form is ', props)
    super(props);
    this.state = {
      setShow:true
    };
  }
render(){
    return (
      <Box>
        <Formik
          initialValues={{ name: "", description: "" }}
          //   validate={(values) => {
          //     const errors = {};
          //     if (!values.email) {
          //       errors.email = "Required";
          //     } else if (
          //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //     ) {
          //       errors.email = "Invalid email address";
          //     }
          //     return errors;
          //   }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Coming values are", values);
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
                  <Button
                    primary
                    type="submit"
                    color="brand"
                    disabled={isSubmitting}
                  >
                    Add Bucket
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    );
}
};

export default Basic;
