import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import { Input } from "./components/molecules/input";

class App extends Component {
  componentDidMount() {
    console.log("getting data");
    axios.get("/api/v1/articles").then((res) => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <Input />
      </div>
    );
  }
}

export default App;
