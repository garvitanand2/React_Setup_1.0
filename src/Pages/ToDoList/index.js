import React, { Component } from "react";
import { Box, Text } from "grommet";
import { FormTrash, StatusGood } from "grommet-icons";
import AboutMe from "./Components/Aboutme";
import Form from "./Components/PopUp";
import Data from "../../Data/ToDoApp/toDoApp";
import AddItemPopUp from "./Components/AddItem";
import EditItem from "./Components/EditItem";

class TODOITEM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userForks: [],
      bucket_list: Data.bucket_list,
      list_size: "10",
      page: "1",
      formVisibility: true,
      current_bucket: 0,
    };
  }

  handleAddMoreItems = (props) => {
    let cb = props.current_bucket;
    let data = this.state.bucket_list;
    let temp_item = {
      id: Math.floor(Math.random() * 10000),
      data: props.item,
      status: true,
      StatusGood: true,
    };
    data[cb].items.push(temp_item);
    this.setState({ bucket_list: data });
    localStorage.setItem("bucket_list", JSON.stringify(this.state.bucket_list));
  };

  handleDeleteBucket = (props) => {
    let data = this.state.bucket_list;
    data.forEach((ele) => {
      if (ele.id === props) {
        ele.status = false;
      }
    });
    this.setState({ bucket_list: data });
    localStorage.setItem("bucket_list", JSON.stringify(this.state.bucket_list));
  };

  handleAddBucket = (props) => {
    let data = this.state.bucket_list;
    let temp_bucket = {
      id: Math.floor(Math.random() * 10000),
      name: props.name,
      desc: props.description,
      status: true,
      items: [],
    };
    data.push(temp_bucket);
    this.setState({ bucket_list: data });
    localStorage.setItem("bucket_list", JSON.stringify(this.state.bucket_list));
  };

  handleDeleteItem = (bucket, item_id) => {
    let data = this.state.bucket_list;
    data.forEach((ele) => {
      ele.items.forEach((item) => {
        if (item.id === item_id) {
          item.status = false;
        }
      });
    });
    this.setState({ bucket_list: data });
    localStorage.setItem("bucket_list", JSON.stringify(this.state.bucket_list));
  };

  handleMarkComplete = (bucket, item_id) => {
    let data = this.state.bucket_list;
    data.forEach((ele) => {
      ele.items.forEach((item) => {
        if (item.id === item_id) {
          item.StatusGood = !item.StatusGood;
        }
      });
    });
    this.setState({ bucket_list: data });
    localStorage.setItem("bucket_list", JSON.stringify(this.state.bucket_list));
  };

  handleEditItem = (props) => {
    let temp_data = this.state.bucket_list;
    temp_data[props.bucket_id].items[props.current_bucket].data = props.item;
    this.setState({ bucket_list: temp_data });
    localStorage.setItem("bucket_list", JSON.stringify(this.state.bucket_list));
  };

  componentDidMount() {
    if (localStorage.getItem("bucket_list")) {
      this.setState({
        bucket_list: JSON.parse(localStorage.getItem("bucket_list")),
      });
    } else {
      localStorage.setItem("bucket_list", JSON.stringify(Data.bucket_list));
    }
  }

  render() {
    return (
      <Box width="100%" flex="grow">
        <AboutMe></AboutMe>
        <Box
          width="100%"
          gap="medium"
          flex="grow"
          pad="small"
          background="white"
        >
          <Form
            handleAddBucket={this.handleAddBucket}
            handleAddMoreItems={this.handleAddMoreItems}
            current_buxket={this.state.current_buxket}
          ></Form>
          {this.state.bucket_list.map((element, index) => {
            return (
              <Box width="100%" elevation="large" background="#1A74ED">
                {element.status && (
                  <Box width="100%" pad={{ top: "small" }}>
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
                            // left: "large",
                            top: "xsmall",
                            bottom: "small",
                            right: "small",
                          }}
                        >
                          <AddItemPopUp
                            current_bucket={index}
                            handleAddMoreItems={this.handleAddMoreItems}
                          />
                          <FormTrash
                            size="medium"
                            color="white"
                            onClick={() => {
                              this.handleDeleteBucket(element.id);
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box background="white">
                      <Box
                        margin={{ left: "medium", top: "xsmall" }}
                        gap="none"
                      >
                        <Box gap="small" direction="row" margin="xsmall">
                          <Text
                            alignSelf="start"
                            size="medium"
                            color="black"
                            weight="bold"
                            style={{ textDecoration: "underline" }}
                          >
                            {" Bucket name:"}
                          </Text>
                          <Text alignSelf="start" color="brand" size="medium">
                            {element.name}
                          </Text>
                        </Box>
                        <Box gap="small" direction="row" margin="xsmall">
                          <Text
                            alignSelf="start"
                            size="medium"
                            color="black"
                            weight="bold"
                            style={{ textDecoration: "underline" }}
                          >
                            {"Discription:"}
                          </Text>
                          <Text
                            alignSelf="start"
                            width="bold"
                            size="medium"
                            color="brand"
                          >
                            {element.desc}
                          </Text>
                        </Box>
                        {true && (
                          <Box gap="small" direction="row" margin="xsmall">
                            <Text
                              alignSelf="start"
                              width="bold"
                              size="medium"
                              color="black"
                              weight="bold"
                              style={{ textDecoration: "underline" }}
                            >
                              {"Total Items:"}
                            </Text>
                            <Text
                              alignSelf="start"
                              color="brand"
                              width="bold"
                              size="medium"
                            >
                              {" "}
                              {this.state.bucket_list[index].items.length}
                            </Text>
                          </Box>
                        )}
                      </Box>
                      <Box direction="row">
                        <Box width="100%" gap="small" pad="medium">
                          {true && (
                            <Box>
                              {" "}
                              {element.items.map((item, index) => {
                                return (
                                  <Box
                                    width="100%"
                                    elevation="small"
                                    background="#E5FCFF"
                                    // border={{ color: "red", size: "medium" }}
                                  >
                                    {item.status && (
                                      <Box width="100%" pad="xsmall">
                                        <Box background="white" direction="row">
                                          <Box
                                            width="100%"
                                            gap="xsmall"
                                            pad="xsmall"
                                            direction="row"
                                          >
                                            <Box direction="row" gap="small">
                                              <Text
                                                alignSelf="start"
                                                width="bold"
                                                size="medium"
                                              >
                                                {index + 1}
                                              </Text>
                                              <Text
                                                alignSelf="start"
                                                width="bold"
                                                size="medium"
                                              >
                                                {" "}
                                                {item.data}
                                              </Text>
                                            </Box>
                                          </Box>
                                          <Box
                                            margin="small"
                                            direction="row"
                                            align="center"
                                            gap="medium"
                                          >
                                            <EditItem
                                              current_bucket={index}
                                              bucket_id={element.id}
                                              data={item.data}
                                              handleAddMoreItems={
                                                this.handleEditItem
                                              }
                                            />
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
                                            <StatusGood
                                              color={
                                                item.StatusGood
                                                  ? "brand"
                                                  : "green"
                                              }
                                              size="medium"
                                              onClick={() => {
                                                this.handleMarkComplete(
                                                  element.id,
                                                  item.id
                                                );
                                              }}
                                            ></StatusGood>
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
                      </Box>{" "}
                    </Box>
                  </Box>
                )}{" "}
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  }
}

export default TODOITEM;
