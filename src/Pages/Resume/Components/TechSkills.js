import React, { Component } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Text, Image } from "grommet";

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
        <Box background="yellow" direction="row">
          <Box width="90%" align="start" pad="small">
            <Text color="black" size="large">
              {"Technical Skills"}
            </Text>
          </Box>
          <Box
            width="10%"
            align="end"
            pad="small"
            onClick={() => {
              this.handledrop();
            }}
          >
            <Image
              src={process.env.PUBLIC_URL + "/Images/new_down.png"}
              fit="contain"
              height="12px"
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Box>
        {this.state.visible && (
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
            <Box width="100%" direction="row" gap="xlarge">
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"C"}</Text>
              </Box>
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"Java"}</Text>
              </Box>
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"HTML"}</Text>
              </Box>
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"CSS"}</Text>
              </Box>
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"Java Script"}</Text>
              </Box>
            </Box>

            <Box width="100%" direction="row" gap="xlarge">
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"React Js"}</Text>
              </Box>
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"Node Js"}</Text>
              </Box>
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"SQL"}</Text>
              </Box>
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"Python"}</Text>
              </Box>
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"Data Science"}</Text>
              </Box>
            </Box>

            <Box width="100%" direction="row" gap="xlarge">
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"Machine Learning"}</Text>
              </Box>
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"Postgres"}</Text>
              </Box>
              <Box width="10%" margin={{ left: "medium", right: "medium" }}>
                <CircularProgressbar value={50} text={`${50}%`} />
                <Text color="white">{"CSS"}</Text>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    );
  }
}

export default TechSkills;
