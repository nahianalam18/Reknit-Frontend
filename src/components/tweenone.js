import React, { Component } from "react";
import TweenOne from "rc-tween-one";
class Tweenone extends Component {
  animGenerator = type => {
    var animation;
    if (type === "PE") {
      animation = [
        { left: "-40%" },
        { left: "40%" },
        { top: "60px" },
        { scale: 0.7 },
        { scale: 1 },
        { top: 0 },
        { left: "0%" }
      ];
    } else if (type === "TL") {
      animation = [
        { left: "-40%" },
        { left: "40%" },
        { top: "60px" },
        { scale: 0.7 },
        { scale: 1 },
        { top: 0 },
        { left: "0%" }
      ];
    }
    return animation;
  };

  constructor(props) {
    super(props);
    this.moment = null;
  }
  state = {};

  render() {
    return (
      <div>
        <TweenOne
          animation={this.animGenerator(this.props.type)}
          paused={this.props.paused}
          repeat={-1} // demo 演示需要，时间轴循环
          yoyo // demo 演示需要，时间轴循环
          style={{ transform: "scale(1)" }}
          className="code-box-shape"
        >
          <h1 style={{ color: "cyan" }}>{this.props.text}</h1>
        </TweenOne>
      </div>
    );
  }
}

export default Tweenone;
