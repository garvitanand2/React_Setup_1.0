import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";


const { Meta } = Card; 

class Main extends Component {
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
      <div className="site-card-wrapper" border = {{color:'red', size:'small'}} >
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={true}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={true}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={true}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
