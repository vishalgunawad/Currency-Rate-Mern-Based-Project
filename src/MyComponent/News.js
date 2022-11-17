import Newsitem from "./Newsitem";
import React, { Component } from "react";

export default class News extends Component {
  render() {
    return (
      <div className="row  text-center">
        <h3>BitCoin to Currency Rate</h3>
        {Object.entries(this.props.newsData).map((temp) => {
          return (
            <div className="col-md-4" key={temp[0]}>
              <Newsitem data={temp[1]} />
            </div>
          );
        })}
      </div>
    );
  }
}
