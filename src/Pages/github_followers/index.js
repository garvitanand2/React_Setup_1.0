import React, { Component } from "react";

import { Box, Text, Button } from "grommet";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";
import Card from "../../component/Card";
import AboutMe from "./Components/Aboutme";
import Education from "./Components/Education";
import Employment from "./Components/Employment";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Project from "./Components/Projects";
import TeckSkills from "./Components/TechSkills";

class GITHUBFOLLOWERS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userForks: [],
    };
  }

  handleGetData = () => {
    console.log("I am called for grtting the data");
    // https://api.github.com/repos/<user>/<repository>/forks
    //"https://api.github.com/users/garvitanand2/repos";
    fetch(
      "https://api.github.com/repos/facebook/react/forks?page=1&per_page=5",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ userForks: data });
        // data.forEach(element => {
        //   console.log("Full name ", element.full_name)

        // });
      });
  };

  handleFollow = (props) => {
    let username = "garvitanand2";
    let password = "Garvit@1234gh";
    const headers = {
      Authorization: "Token a99350b8fb474bf66541345a84ce5deb14907e4c",
    };

    let name = props.split("/");
    console.log("Name array is", name);
    console.log("Name is", name[0]);
    ///user/following/:username
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

  render() {
    return (
      <Box width="100%" flex="grow">
        <Box width="100%">
          <Button
            primary="true"
            label="GET DATA"
            onClick={() => {
              this.handleGetData();
            }}
          />
          {/* <AboutMe></AboutMe>
          <Education></Education>
          <Employment></Employment>
          <Experience></Experience>
          {false && <Home></Home>}
          <Project></Project>
        <TeckSkills></TeckSkills> */}
          {this.state.userForks.map((element) => {
            return (
              <Box width="100%" borer={{ color: "red", size: "small" }}>
                <Box width="20%" border={{ color: "brand", size: "medium" }}>
                  <Text>{element.full_name}</Text>
                  <Button
                    primary="true"
                    label="Follow"
                    onClick={() => {
                      this.handleFollow(element.full_name);
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  }
}

export default GITHUBFOLLOWERS;
