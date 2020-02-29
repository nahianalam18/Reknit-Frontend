import React, { Component } from "react";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";
const BgElement = Element.BgElement;

class Dslide extends Component {
  imgArray = [
    "/nahian.jfif",
    "/sammy.jpg",
    "/IMG_6005.HEIC",
    "/IMG_5999.HEIC",
    "ruben.jpg"
  ];
  state = {
    array: this.props.dataarray
  };

  render() {
    var index = 0;
    return (
      <BannerAnim prefixCls="banner-user" style={{ minHeight: "90vh" }}>
        {this.state.array.map(ar => {
          return (
            <Element prefixCls="banner-user-elem" key={this.state.array.key}>
              <BgElement
                key="bg"
                className="bg"
                style={{
                  // background: "#364D79"
                  background: ar.background
                }}
              />
              <TweenOne
                className="banner-user-title"
                animation={{ y: 30, opacity: 0, type: "from" }}
                style={{ alignItems: "flex-start", top: "0" }}
              >
                {ar.name}
              </TweenOne>
              <TweenOne
                className="banner-user-text"
                animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
                style={{ width: "100%", top: "0" }}
              >
                <div>
                  {ar.role} <br />
                  {ar.hobby}
                  <br />
                  <img
                    className="photo"
                    src={this.imgArray[index++]}
                    alt="profilepicture"
                  />
                  <br />
                </div>
              </TweenOne>
            </Element>
          );
        })}
      </BannerAnim>
    );
  }
}

export default Dslide;
