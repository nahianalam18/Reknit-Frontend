import React, { Component } from "react";
import Dslide from "./dirslide";

class Directors extends Component {
  state = {
    dlist: [
      {
        name: "Nahian Alam",
        role: "CEO & Front End Developer",
        hobby: "Reading",
        key: 0,
        background: "#364D79"
      },
      {
        name: "Sam Thomas",
        role: "CEO & Back End Developer",
        hobby: "PUBG",
        key: 1,
        background: "#6EC39B"
      },
      {
        name: "Alexis Lueckenhoff",
        role: "CEO & Front End Developer",
        hobby: "Making Ice Cream",
        key: 2,
        background: "#6EBDC3"
      },
      {
        name: "Gulnaz Khalibullina",
        role: "CEO & Back End Developer",
        hobby: "Driving from Dallas",
        key: 3,
        background: "#C80AF7"
      },
      {
        name: "Ruben Rodriguez",
        role: "CEO & Back End Developer",
        hobby: "Mocking Jain",
        key: 2,
        background: "#ACF05D"
      }
    ]
  };

  render() {
    return (
      <div>
        <div>
          <Dslide dataarray={this.state.dlist}></Dslide>
        </div>
      </div>
    );
  }
}

export default Directors;
