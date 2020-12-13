import React, { Component } from "react";

import { Box } from "grommet";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useHistory,
//   useLocation,
// } from "react-router-dom";

// import { AgGridReact } from "@ag-grid-community/react";
// import { AllCommunityModules } from "@ag-grid-community/all-modules";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";
// import Card from "../../component/Card";
import AboutMe from "./Components/Aboutme";
import Education from "./Components/Education";
import Employment from "./Components/Employment";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Project from "./Components/Projects";
import TeckSkills from "./Components/TechSkills";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hamdleResumeonClick = () => {
    // const history = useHistory();
    console.log("I am clicked for navigate to resume link");
  };

  render() {
    return (
      <Box width="100%" flex="grow">
        <Box width="100%">
          <AboutMe></AboutMe>
          <Education></Education>
          <Employment></Employment>
          <Experience></Experience>
          {false && <Home></Home>}
          <Project></Project>
          <TeckSkills></TeckSkills>
        </Box>
      </Box>
    );
  }
}

export default Resume;
