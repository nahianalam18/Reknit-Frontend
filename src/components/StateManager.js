import React, { Component, createContext } from "react";

export const DataManager = createContext();

class StateManager extends Component {
  state = {
    regist: "0",
  };
  changeRegist = (val) => {
    this.setState({ regist: val });
  };

  render() {
    return (
      <DataManager.Provider
        value={{
          ...this.state,
          changeRegist: this.changeRegist,
        }}
      >
        {this.props.children}
      </DataManager.Provider>
    );
  }
}

export default StateManager;
