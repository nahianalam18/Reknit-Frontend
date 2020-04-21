import React, { Component } from "react";
import Background from "./seir.jpg";
import { Parallax } from "rc-scroll-anim";
import EventForm from "./eventform";

import { Button } from "antd";
import Tweenone from "./tweenone";
var section1Style = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  opacity: "1.0",
  margin: 0,
};

class HomeContent extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={section1Style} className="homeContent">
          <Tweenone text="Quilt For A Cause" type="PE" />
          {/* <Button type="danger">Register</Button> */}
        </div>
      </React.Fragment>
    );
  }
}

export default HomeContent;
