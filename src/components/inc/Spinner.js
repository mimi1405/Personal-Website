import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="preloader-wrapper">
          <div
            style={{ color: "#0aa200", height: "6rem", width: "6rem" }}
            class="spinner-border"
            role="status"
          ></div>
        </div>
      </div>
    );
  }
}
