import React, { Component, createContext } from "react";

export const DataManager = createContext();

class StateManager extends Component {
  state = {
    money: [[]],
    clothes: [[]],
    regist: "0",
    globalServerUrl: "http://227a81be.ngrok.io/",
    donationid: "",
    firstname: "",
    lastname: "",
    email: "",
    teamnumber: "",
    dob: "",
    amount: "",
    color: "",
    material: "",
    ufirstname: "",
    ulastname: "",
    uemail: "",
    uteamnumber: "",
    udob: "",
    uamount: "",
    ucolor: "",
    umaterial: "",
    teamNo: true,
    guardianNecessary: true,
  };
  changeDonationId = (val) => {
    this.setState({ donationid: val });
  };
  addMoneyLeader = (val) => {
    this.setState({ money: val });
  };
  addClothLeader = (val) => {
    this.setState({ clothes: val });
  };
  changeTeamNo = (val) => {
    this.setState({ teamNo: val });
  };
  changeGuardianStance = (val) => {
    this.setState({ guardianNecessary: val });
  };
  changeFirstName = (val) => {
    this.setState({ firstname: val });
  };
  changeLastName = (val) => {
    this.setState({ lastname: val });
  };
  changeEmail = (val) => {
    this.setState({ email: val });
  };
  changeDOB = (val) => {
    this.setState({ dob: val });
  };
  changeAmount = (val) => {
    this.setState({ amount: val });
  };
  changeColor = (val) => {
    this.setState({ color: val });
  };
  changeMaterial = (val) => {
    if (val === "1") this.setState({ material: "Wool" });
    else if (val === "2") this.setState({ material: "Silk" });
    else if (val === "3") this.setState({ material: "Cotton" });
    else if (val === "4") this.setState({ material: "Denim" });
    else if (val === "5") this.setState({ material: "Flannel" });
    else this.setState({ material: "Other" });
  };
  changeTeamNumber = (val) => {
    this.setState({ teamnumber: val });
  };
  changeRegist = (val) => {
    this.setState({ regist: val });
  };
  changeUFirstName = (val) => {
    this.setState({ ufirstname: val });
  };
  changeULastName = (val) => {
    this.setState({ ulastname: val });
  };
  changeUEmail = (val) => {
    this.setState({ uemail: val });
  };
  changeUDOB = (val) => {
    this.setState({ udob: val });
  };
  changeUAmount = (val) => {
    this.setState({ uamount: val });
  };
  changeUColor = (val) => {
    this.setState({ ucolor: val });
  };
  changeUMaterial = (val) => {
    if (val === "1") this.setState({ material: "Wool" });
    else if (val === "2") this.setState({ material: "Silk" });
    else if (val === "3") this.setState({ material: "Cotton" });
    else if (val === "4") this.setState({ material: "Denim" });
    else if (val === "5") this.setState({ material: "Flannel" });
    else this.setState({ material: "Other" });
  };
  changeUTeamNumber = (val) => {
    this.setState({ teamnumber: val });
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  resetState = () => {
    // console.log(firebase.name);
    // console.log(firebase.database());
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      teamnumber: "",
      dob: "",
      material: "",
      color: "",
      amount: "",
      ufirstname: "",
      ulastname: "",
      uemail: "",
      uteamnumber: "",
      udob: "",
      umaterial: "",
      ucolor: "",
      uamount: "",
    });
  };

  render() {
    return (
      <DataManager.Provider
        value={{
          ...this.state,
          changeDonationId: this.changeDonationId,
          changeGuardianStance: this.changeGuardianStance,
          addMoneyLeader: this.addMoneyLeader,
          addClothLeader: this.addClothLeader,
          changeRegist: this.changeRegist,
          changeFirstName: this.changeFirstName,
          changeLastName: this.changeLastName,
          changeEmail: this.changeEmail,
          changeAmount: this.changeAmount,
          changeDOB: this.changeDOB,
          changeColor: this.changeColor,
          changeTeamNumber: this.changeTeamNumber,
          changeMaterial: this.changeMaterial,
          changeUFirstName: this.changeUFirstName,
          changeULastName: this.changeULastName,
          changeUEmail: this.changeUEmail,
          changeUAmount: this.changeUAmount,
          changeUDOB: this.changeUDOB,
          changeUColor: this.changeUColor,
          changeUTeamNumber: this.changeUTeamNumber,
          changeUMaterial: this.changeUMaterial,
          handleChange: this.handleChange,
          resetState: this.resetState,
          changeTeamNo: this.changeTeamNo,
        }}
      >
        {this.props.children}
      </DataManager.Provider>
    );
  }
}
export default StateManager;
