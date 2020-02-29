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
  margin: 0
};

class HomeContent extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={section1Style} className="homeContent">
          <Tweenone text="Quilt For A Cause" type="PE" />
          <Button type="danger">Register</Button>
        </div>

        <div style={{ backgroundColor: "white" }} className="homeContent2">
          <div>
            <Parallax
              animation={[
                { x: 0, opacity: 1, playScale: [0, 0.2] },
                { y: 100, playScale: [0, 0.3] },
                { blur: "10px", playScale: [0, 0.5] }
              ]}
              style={{
                transform: "translateX(-100px)",
                filter: "blur(0px)",
                opacity: 0
              }}
              className="code-box-shape"
            >
              <EventForm></EventForm>
            </Parallax>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeContent;
