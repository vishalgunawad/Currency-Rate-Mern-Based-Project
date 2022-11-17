import React, { Component } from "react";

export default class alert extends Component {
  render() {
    return (
      this.props.alert && (
        <div
          className={`alert alert-${this.props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{this.props.alert.type}</strong>: {this.props.alert.msg}
        </div>
      )
    );
  }
}
