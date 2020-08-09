import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import { Box, Text } from "grommet";
import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Make",
          field: "make",
        },
        {
          headerName: "Model",
          field: "model",
        },
        {
          headerName: "Price",
          field: "price",
        },
      ],
      rowData: [
        {
          make: "Toyota",
          model: "Celica",
          price: 35000,
        },
        {
          make: "Ford",
          model: "Mondeo",
          price: 32000,
        },
        {
          make: "Porsche",
          model: "Boxter",
          price: 72000,
        },
      ],
    };
  }

  render() {
    return (
      <Box
        direction="row"
        border={{ color: "brand", size: "large" }}
        pad="medium"
      >
        <Text>{"Home Page"}</Text>
      </Box>
    );
  }
}

export default Home;
