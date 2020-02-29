import React, { Component } from "react";
import Dslide from "./dirslide";

class Directors extends Component {
  state = {
    dlist: [
      {
        name: "Nahian Alam",
        role: "CEO & Front End Developer",
        hobby: "Always in a battle of with himself",
        key: 0,
        background: "#364D79"
      },
      {
        name: "Sam Thomas",
        role: "CEO & Back End Developer",
        hobby: "PUBG pro player. Has special Yoga techniques and stances",
        key: 1,
        background: "#6EC39B"
      },
      {
        name: "Alexis Lueckenhoff",
        role: "CEO & Front End Developer",
        hobby:
          "Loves making Ice Cream. Does research and is always excited about learning new things.",
        key: 2,
        background: "#6EBDC3"
      },
      {
        name: "Gulnaz Khalibullina",
        role: "CEO & Back End Developer",
        hobby:
          "Curious about new technology, loves being active and visiting the gym often.  Also likes pencil drawing, long walks, traveling, spontaneous road trips, sunset on the beach, spending time with loved ones, and coffee shops. A  professional diver and plans to visit the world’s coolest diving spots. Loves all types of music and would like to attend country music festival. Dreams of having her own online course and visiting each country in the world",
        key: 3,
        background: "#C80AF7"
      },
      {
        name: "Ruben Rodriguez",
        role: "CEO & Back End Developer",
        hobby:
          "Does not know who he is. Still busy discovering himself and so are everyone at Reknit",
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
