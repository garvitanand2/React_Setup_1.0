import React, { Component } from "react";
import styled from "styled-components";
import { Box, Text, Button, Select } from "grommet";
import { Down, Github, Search } from "grommet-icons";
import AboutMe from "./Components/Aboutme";

const ButtonStyle = styled(Button)`
  top: 403px;
  left: 772px;
  width: 150px;
  height: 50px;
  border: 2px solid #33c088;
  border-radius: 8px;
  opacity: 1;
`;

class GITHUBFOLLOWERS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userForks: [],
      list_size: "10",
      page: "1",
    };
  }

  handleGetData = () => {
    fetch(
      "https://api.github.com/repos/facebook/react/forks?page=" +
        this.state.page +
        "&per_page=" +
        this.state.list_size,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ userForks: data });
      });
  };

  handleFollow = (props) => {
    const headers = {
      Authorization: "Token a99350b8fb474bf66541345a84ce5deb14907e4c",
    };

    let name = props.split("/");
    fetch("https://api.github.com/user/following/" + name[0], {
      method: "PUT",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  handleUNFollow = (props) => {
     const headers = {
       Authorization: "Token a99350b8fb474bf66541345a84ce5deb14907e4c",
     };

     let name = props.split("/");
     fetch("https://api.github.com/user/following/" + name[0], {
       method: "DELETE",
       headers: headers,
     })
       .then((response) => response.json())
       .then((data) => {
         console.log("Success:", data);
       })
       .catch((error) => {
         console.error("Error:", error);
       });
  };

  componentDidMount() {
    if (localStorage.getItem("size")) {
      localStorage.setItem("size", 10);
      localStorage.setItem("page", 1);
    }
    this.handleGetData();
  }

  render() {
    return (
      <Box width="100%" flex="grow">
        <AboutMe></AboutMe>
        <Box
          width="100%"
          alignSelf="center"
          gap="medium"
          elevation="medium"
          pad="large"
          background="black"
        >
          <Box>
            <Box pad={{ bottom: "medium" }}></Box>
            <Box direction="row" gap="medium">
              <Select
                options={[
                  "10",
                  "20",
                  "30",
                  "40",
                  "50",
                  "60",
                  "70",
                  "80",
                  "90",
                  "100",
                ]}
                value={this.state.list_size}
                dropHeight="large"
                placeholder={"Status"}
                dropAlign={{ right: "left" }}
                onChange={({ option }) => this.setState({ list_size: option })}
              />
              <Select
                options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                value={this.state.page}
                dropHeight="large"
                placeholder={"Status"}
                dropAlign={{ right: "left" }}
                onChange={({ option }) => this.setState({ page: option })}
              />
              <Search
                color="white"
                size="large"
                onClick={() => {
                  this.handleGetData();
                }}
              ></Search>
            </Box>
          </Box>
          {this.state.userForks.map((element) => {
            return (
              <Box width="100%" elevation="large" background="#E5FCFF">
                <Box width="100%" pad="medium">
                  <Box
                    direction="row"
                    width="100%"
                    // border={{ color: "white", size: "small" }}
                  >
                    <Box
                      alignSelf="start"
                      alignContent="center"
                      pad={{ left: "small", top: "small" }}
                      // fill
                      // border={{ color: "white", size: "small" }}
                    >
                      <Github size="large" color="white"></Github>
                    </Box>
                    <Box width="100%" alignSelf="end">
                      <Box
                        alignSelf="end"
                        direction="row"
                        gap="medium"
                        pad={{ left: "large", top: "small", bottom: "medium" }}
                        // border={{ color: "red", size: "medium" }}
                      >
                        <ButtonStyle
                          primary="true"
                          color="#10e65e"
                          label="Follow"
                          onClick={() => {
                            this.handleFollow(element.full_name);
                          }}
                        />
                        <ButtonStyle
                          primary="true"
                          color="#e37f7f"
                          label={
                            <Text size="18px" width="bold">
                              {"Unfollow"}
                            </Text>
                          }
                          onClick={() => {
                            this.handleUNFollow(element.full_name);
                          }}
                        />{" "}
                      </Box>
                    </Box>
                  </Box>
                  <Box direction="row" background="#5fe8d1">
                    <Box width="20%" gap="small" pad="medium">
                      <Text
                        alignSelf="start"
                        width="bold"
                        style={{ textDecoration: "underline" }}
                      >
                        {" "}
                        {"Urer Name:"}
                      </Text>
                      <Text
                        alignSelf="start"
                        width="bold"
                        style={{ textDecoration: "underline" }}
                      >
                        {" "}
                        {"Discription:"}
                      </Text>
                      <Text
                        alignSelf="start"
                        width="bold"
                        style={{ textDecoration: "underline" }}
                      >
                        {"Branch:"}
                      </Text>
                      <Text
                        alignSelf="start"
                        width="bold"
                        style={{ textDecoration: "underline" }}
                      >
                        {" "}
                        {"Created At:"}
                      </Text>
                    </Box>
                    <Box
                      width="70%"
                      gap="small"
                      // border={{ color: "white", size: "small" }}
                      pad="medium"
                    >
                      <Text alignSelf="start" width="bold">
                        {" "}
                        {element.full_name}
                      </Text>
                      <Text alignSelf="start" width="bold">
                        {" "}
                        {element.description}
                      </Text>
                      <Text alignSelf="start" width="bold">
                        {" "}
                        {element.default_branch}
                      </Text>
                      <Text alignSelf="start" width="bold">
                        {" "}
                        {element.created_at}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
          <Box width="100%">
            <Box alignSelf="center">
              <Down
                color="white"
                size="large"
                onClick={() => {
                  // this.setState({list_size : this.state.list_size+5})
                  let size = localStorage.getItem("size");
                  let page = localStorage.getItem("page");
                  this.setState({ list_size: parseInt(size) + 5 });
                  this.setState({ page: parseInt(page) + 1 });
                  localStorage.setItem("size", parseInt(size) + 5);
                  localStorage.setItem("page", parseInt(page) + 1);
                  this.handleGetData();
                }}
              ></Down>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default GITHUBFOLLOWERS;
