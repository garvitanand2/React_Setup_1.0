import React, { Component } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Text, Heading } from "grommet";

class TechSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handledrop = () => {
    this.state.visible
      ? this.setState({ visible: false })
      : this.setState({ visible: true });
  };

  render() {
    return (
      <Box
        background="white"
        width="100%"
        flex="grow"
        alignSelf="center"
        elevation="medium"
      >
        <Box
          pad={{
            left: "medium",
            top: "medium",
            bottom: "medium",
            right: "medium",
          }}
          gap="medium"
          margin={
            {
              //   left: "medium",
              //   top: "medium",
              //   bottom: "medium",
              //   right: "medium",
            }
          }
          align="center"
          background="black"
        >
          <Box justify="center" pad="none" margin="none">
            <Heading alignSelf="center" style={{ textDecoration: "underline" }}>
              {"What I Know ?"}
            </Heading>
          </Box>
          <Box width="100%" direction="row" gap="xlarge">
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={70} text={`${70}%`} />
              <Text color="white" width="bold" size="medium">
                {"C"}
              </Text>
            </Box>
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={65} text={`${65}%`} />
              <Text color="white" width="bold" size="medium">
                {"Java"}
              </Text>
            </Box>
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={75} text={`${75}%`} />
              <Text color="white" width="bold" size="medium">
                {"HTML"}
              </Text>
            </Box>
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={65} text={`${65}%`} />
              <Text color="white" width="bold" size="medium">
                {"CSS"}
              </Text>
            </Box>
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={90} text={`${90}%`} />
              <Text color="white" width="bold" size="medium">
                {"Java Script"}
              </Text>
            </Box>
          </Box>

          <Box width="100%" direction="row" gap="xlarge">
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={85} text={`${85}%`} />
              <Text color="white" width="bold" size="medium">
                {"React Js"}
              </Text>
            </Box>
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={65} text={`${65}%`} />
              <Text color="white" width="bold" size="medium">
                {"Node Js"}
              </Text>
            </Box>
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={62} text={`${62}%`} />
              <Text color="white" width="bold" size="medium">
                {"SQL"}
              </Text>
            </Box>
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={20} text={`${20}%`} />
              <Text color="white" width="bold" size="medium">
                {"Python"}
              </Text>
            </Box>
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={20} text={`${20}%`} />
              <Text color="white" width="bold" size="medium">
                {"Data Science"}
              </Text>
            </Box>
          </Box>

          <Box width="100%" direction="row" gap="xlarge">
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={10} text={`${10}%`} />
              <Text color="white" width="bold" size="medium">
                {"Machine Learning"}
              </Text>
            </Box>
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={40} text={`${40}%`} />
              <Text color="white" width="bold" size="medium">
                {"Postgres"}
              </Text>
            </Box>

            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={40} text={`${40}%`} />
              <Text color="white" width="bold" size="medium">
                {"PHP"}
              </Text>
            </Box>
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={70} text={`${70}%`} />
              <Text color="white" width="bold" size="medium">
                {"Git"}
              </Text>
            </Box>
            <Box width="10%" margin={{ left: "medium", right: "medium" }}>
              <CircularProgressbar value={60} text={`${60}%`} />
              <Text color="white" width="bold" size="medium">
                {"Bit Bucket"}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default TechSkills;
