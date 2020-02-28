import React, { Component } from "react";

import { Tabs } from "antd";
import HomeContent from "./homecontent";
import Directors from "./directors";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class TopTab extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <Tabs className="TabsC" onChange={callback} type="card">
            <TabPane tab="Home" key="1">
              <HomeContent />
            </TabPane>
            <TabPane tab="Events" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane className="TabsC" tab="About Us" key="3">
              <Directors></Directors>
            </TabPane>
          </Tabs>
        </div>
      </React.Fragment>
    );
  }
}

export default TopTab;
