import React, { Component } from "react";
import { Table } from "antd";
import { DataManager } from "./StateManager";

class DisplayTable extends Component {
  static contextType = DataManager;
  state = {
    moneyColumns: [
      {
        title: "Team ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "First Name",
        dataIndex: "fname",
        key: "fname",
      },
      {
        title: "Last name",
        dataIndex: "lname",
        key: "lname",
      },
      {
        title: "Points",
        dataIndex: "amount",
        key: "amount",
      },
    ],
    clothColumns: [
      {
        title: "Team ID",
        dataIndex: "cid",
        key: "cid",
      },
      {
        title: "First Name",
        dataIndex: "cfname",
        key: "fname",
      },
      {
        title: "Last name",
        dataIndex: "clname",
        key: "clname",
      },
      {
        title: "Points",
        dataIndex: "camount",
        key: "camount",
      },
    ],
  };

  makeMoneyTableData = () => {
    let data = this.context.money;
    let finalResult = [];
    for (let i = 0; i < data.length; i++) {
      let result = {
        key: (i + 1).toString(),
        id: data[i][0],
        fname: data[i][1],
        lname: data[i][2],
        amount: data[i][3],
      };
      finalResult.push(result);
    }

    return finalResult;
  };
  makeClothTableData = () => {
    let data = this.context.clothes;
    let finalResult = [];
    for (let i = 0; i < data.length; i++) {
      let result = {
        key: (i + 1).toString(),
        cid: data[i][0],
        cfname: data[i][1],
        clname: data[i][2],
        camount: data[i][3],
      };
      finalResult.push(result);
    }

    return finalResult;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Money Leaderboard</h1>
        <Table
          columns={this.state.moneyColumns}
          dataSource={this.makeMoneyTableData()}
        />
        <h1>Clothes Leaderboard</h1>
        <Table
          columns={this.state.clothColumns}
          dataSource={this.makeClothTableData()}
        ></Table>
      </React.Fragment>
    );
  }
}

export default DisplayTable;
