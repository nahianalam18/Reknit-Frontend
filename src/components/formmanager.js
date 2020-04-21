import React, { Component } from "react";
import Formpersonal from "./personaldetailsform";
import ClothForm from "./clothform";
import MoneyForm from "./moneyform";
import { Button } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";
import { DataManager } from "./StateManager";

class FormManager extends Component {
  static contextType = DataManager;
  state = {};
  registerAnswer = (value) => {
    this.context.changeRegist(value);
  };
  render() {
    switch (this.context.regist) {
      case 1:
        return (
          <div>
            <h2>Would you like to donate today?</h2>
            <Button
              type="primary"
              onClick={() => {
                this.registerAnswer(3);
              }}
              style={{ margin: "10px" }}
            >
              Yes
            </Button>
            <Button
              type="primary"
              onClick={() => {
                this.registerAnswer(99);
              }}
              style={{ margin: "10px" }}
            >
              No
            </Button>

            <br></br>
            <Button
              onClick={() => {
                this.registerAnswer(this.context.regist - 1);
              }}
              icon={<LeftCircleOutlined />}
              type="primary"
              danger
            ></Button>
          </div>
        );
      case 2:
        return (
          <React.Fragment>
            <div>
              <Formpersonal></Formpersonal>
              <br></br>
              <Button
                onClick={() => {
                  this.registerAnswer(this.context.regist - 2);
                }}
                icon={<LeftCircleOutlined />}
                type="primary"
                danger
              ></Button>
            </div>
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <h2>What would you like to Donate?</h2>
            <Button
              type="primary"
              onClick={() => {
                this.registerAnswer(5);
              }}
              style={{ margin: "10px" }}
            >
              Money
            </Button>
            <Button
              type="primary"
              onClick={() => {
                this.registerAnswer(4);
              }}
              style={{ margin: "10px" }}
            >
              Clothes
            </Button>
            <br></br>
            <Button
              onClick={() => {
                this.registerAnswer(this.context.regist - 2);
              }}
              icon={<LeftCircleOutlined />}
              type="primary"
              danger
            ></Button>
          </React.Fragment>
        );
      case 4:
        return (
          <React.Fragment>
            <ClothForm />
            <br></br>

            <Button
              onClick={() => {
                this.registerAnswer(this.context.regist - 1);
              }}
              icon={<LeftCircleOutlined />}
              type="primary"
              danger
            ></Button>
          </React.Fragment>
        );
      case 5:
        return (
          <React.Fragment>
            <MoneyForm style={{ margin: "50px" }} />
            <br></br>
            <Button
              onClick={() => {
                this.registerAnswer(this.context.regist - 2);
              }}
              icon={<LeftCircleOutlined />}
              type="primary"
              danger
            ></Button>
          </React.Fragment>
        );

      case 99:
        return <h1>Thanks for staying with us!</h1>;
      default:
        return (
          <React.Fragment>
            <div>
              <h2>Have you registered with us?</h2>
              <Button
                type="primary"
                onClick={() => {
                  this.registerAnswer(1);
                }}
                style={{ margin: "10px" }}
              >
                Yes
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  this.registerAnswer(2);
                }}
                style={{ margin: "10px" }}
              >
                No
              </Button>
            </div>
          </React.Fragment>
        );
    }
    // return (
    //   <React.Fragment>
    //     <div>
    //       <h2>Have you registered with us?</h2>
    //       <Button onClick={this.registerAnswerYes}>Yes</Button>
    //       <Button>No</Button>

    //     </div>
    //   </React.Fragment>
    // );
  }
}

export default FormManager;
