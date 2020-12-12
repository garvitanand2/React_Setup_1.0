import React, { Component } from "react";
import styled from "styled-components";
import { Box, Text, Button, Select } from "grommet";
import { Down, Github, Search, Edit, FormTrash,Add } from "grommet-icons";
import AboutMe from "./Components/Aboutme";
import Form from './Components/PopUp'
import Data from "../../Data/ToDoApp/toDoApp"

const ButtonStyle = styled(Button)`
  top: 403px;
  left: 772px;
  width: 150px;
  height: 50px;
  border: 2px solid #33c088;
  border-radius: 8px;
  opacity: 1;
`;

class TODOITEM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userForks: [],
      bucket_list:Data.bucket_list,
      list_size: "10",
      page: "1",
      formVisibility:true,
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

  handleAddMoreItems = (props) => {
    console.log("Add more items")
    const headers = {
      Authorization: localStorage.getItem("token"),
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

  handleDeleteBucket = (props) => {
    console.log("I am deleting bucket", props)
     let data = this.state.bucket_list;
     data.forEach((ele) => {
       console.log("Coming ele is ", ele)
       if(ele.id === props){
         ele.status = false

       }
      //  ele.items.forEach((item) => {
      //   //  if (item.id === item_id) {
      //   //    console.log("I am in i", item);
      //   //    item.status = false;
      //   //  }
      //  });
     });
     this.setState({ bucket_list: data });
    // const headers = {
    //   Authorization: localStorage.getItem("token"),
    // };

    // let name = props.split("/");
    // fetch("https://api.github.com/user/following/" + name[0], {
    //   method: "DELETE",
    //   headers: headers,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  handleAddBucket = () => {
    console.log("Data is", Data);
    console.log("I am handling add bucket");
  };

  handleDeleteItem = (bucket , item_id) =>{
    let data = this.state.bucket_list;
    data.forEach((ele) => {
      ele.items.forEach((item) => {
        if (item.id === item_id) {
          console.log("I am in i", item)
          item.status = false;
        }
      });
    });
    this.setState({ bucket_list : data});
  }

  componentDidMount() {
    console.log("State is ", this.state)
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
              <Button
                primary="true"
                label="Add Bucket"
                alignSelf="end"
                onClick={() => {
                  this.handleAddBucket();
                }}
              />
            </Box>
          </Box>
          <Form></Form>
          {this.state.bucket_list.map((element) => {
            return (
              <Box width="100%" elevation="large" background="#E5FCFF">
                {element.status && (
                  <Box width="100%" pad="medium">
                    <Box
                      direction="row"
                      width="100%"
                      // border={{ color: "white", size: "small" }}
                    >
                      <Box width="100%" alignSelf="end">
                        <Box
                          alignSelf="end"
                          direction="row"
                          gap="medium"
                          pad={{
                            left: "large",
                            top: "small",
                            bottom: "medium",
                          }}
                          // border={{ color: "red", size: "medium" }}
                        >
                          <Add
                            size="large"
                            color="brand"
                            onClick={() => {
                              this.handleAddMoreItems(element.id);
                            }}
                          />
                          <FormTrash
                            size="large"
                            color="brand"
                            onClick={() => {
                              this.handleDeleteBucket(element.id);
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box background="#5fe8d1">
                      <Box
                        margin={{ left: "medium", top: "small", top: "small" }}
                      >
                        <Box gap="small" direction="row" margin="small">
                          <Text
                            alignSelf="start"
                            width="bold"
                            size="large"
                            color="black"
                            style={{ textDecoration: "underline" }}
                          >
                            {" "}
                            {"Bucket name:"}
                          </Text>
                          <Text alignSelf="start" width="bold" size="large">
                            {" "}
                            {element.name}
                          </Text>
                        </Box>
                        <Box gap="small" direction="row" margin="small">
                          <Text
                            alignSelf="start"
                            width="bold"
                            size="large"
                            color="black"
                            style={{ textDecoration: "underline" }}
                          >
                            {" "}
                            {"Discription:"}
                          </Text>
                          <Text alignSelf="start" width="bold" size="large">
                            {" "}
                            {element.desc}
                          </Text>
                        </Box>
                        <Box gap="small" direction="row" margin="small">
                          <Text
                            alignSelf="start"
                            width="bold"
                            size="large"
                            color="black"
                            style={{ textDecoration: "underline" }}
                          >
                            {"Total Items:"}
                          </Text>
                          <Text alignSelf="start" width="bold" size="large">
                            {" "}
                            {this.state.bucket_list.length}
                          </Text>
                        </Box>
                      </Box>
                      <Box
                        width="70%"
                        gap="small"
                        // border={{ color: "white", size: "small" }}
                        pad="medium"
                      >
                        {true && (
                          <Box>
                            {" "}
                            {element.items.map((item, index) => {
                              return (
                                <Box
                                  width="100%"
                                  elevation="large"
                                  background="#E5FCFF"
                                >
                                  {item.status && (
                                    <Box width="100%" pad="medium">
                                      <Box background="#5fe8d1">
                                        <Box
                                          width="70%"
                                          gap="small"
                                          // border={{ color: "white", size: "small" }}
                                          pad="medium"
                                          direction="row"
                                        >
                                          <Text
                                            alignSelf="start"
                                            width="bold"
                                            size="large"
                                          >
                                            {" "}
                                            {index + 1}
                                          </Text>
                                          <Text
                                            alignSelf="start"
                                            width="bold"
                                            size="large"
                                          >
                                            {" "}
                                            {item.data}
                                          </Text>
                                          <Edit
                                            color="brand"
                                            size="medium"
                                            onClick={() => {
                                              this.handleDeleteItem(
                                                element.id,
                                                item.id
                                              );
                                            }}
                                          ></Edit>
                                          <FormTrash
                                            color="brand"
                                            size="medium"
                                            onClick={() => {
                                              this.handleDeleteItem(
                                                element.id,
                                                item.id
                                              );
                                            }}
                                          ></FormTrash>
                                        </Box>
                                      </Box>
                                    </Box>
                                  )}{" "}
                                </Box>
                              );
                            })}
                          </Box>
                        )}{" "}
                      </Box>
                    </Box>
                  </Box>
                )}{" "}
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
                  // let page = localStorage.getItem("page");
                  this.setState({ list_size: parseInt(size) + 5 });
                  // this.setState({ page: parseInt(page) + 1 });
                  localStorage.setItem("size", parseInt(size) + 5);
                  // localStorage.setItem("page", parseInt(page) + 1);
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

export default TODOITEM;