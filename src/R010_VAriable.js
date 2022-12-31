import React, { Component } from "react";

class R010_VAriable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var varName = "react";
    console.log("varName1 : " + varName);
    var varName = "200";
    console.log("varName2 : " + varName);

    let letName = "react";
    console.log("letName1 : " + letName);
    // let letName = "200";
    // Cannot redeclare block-scoped variable 'letName'.
    letName = "200";
    console.log("letName2 : " + letName);

    const constName = "react";
    console.log("constName1 : " + constName);
    //constName = "200"; // Uncaught TypeError: Assignment to constant variable.
    console.log("constName2: " + constName);
  }

  render() {
    return <h2>[THIS IS Variable]</h2>;
  }
}

export default R010_VAriable;
