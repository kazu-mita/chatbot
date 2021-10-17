import React from "react";
import defaultDataset from "./data";
import './assets/styles/style.css'

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          answer: [],
          chats: [],
          currentId: "init",
          dataset: defaultDataset,
          open: false
      }
  }
  render() {
    return (
      <div>
        <section className="c-section">
            <div className="c-box">
              {this.state.currentId}
            </div>
        </section>
      </div>
    );
  }
}
