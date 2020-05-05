import React, { Component } from "react";
import Background from "./seir.jpg";
import axios from "axios";
import Tweenone from "./tweenone";
import DisplayTable from "./table";
import { DataManager } from "./StateManager";

var section1Style = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  opacity: "1.0",
  margin: 0,
};

class HomeContent extends Component {
  static contextType = DataManager;
  state = { money: [[]], cloth: [] };
  getData = async () => {
    const money = await axios.get(this.context.globalServerUrl + "getMoney");
    const cloth = await axios.get(this.context.globalServerUrl + "getCloth");
    this.setState({ money: money.data[1] });
    this.setState({ cloth: cloth.data[1] });
    this.context.addMoneyLeader(money.data[1]);
    this.context.addClothLeader(cloth.data[1]);
  };
  getUserData = () => {
    // Fetch data from database
    this.getData();
    console.log("DATA RETRIEVED");
  };
  componentDidMount() {
    this.getUserData(); // Call getUserData function
  }
  render() {
    return (
      <React.Fragment>
        <div style={section1Style} className="homeContent">
          <Tweenone text="Quilt For A Cause" type="PE" />
        </div>
        <div>
          <DisplayTable></DisplayTable>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeContent;
