import React, { Component } from "react";
import axios, { Canceler } from "axios";

import "./App.css";
import { Input } from "./components/molecules/input";

let cancel: Canceler;

class App extends Component {
  componentDidMount() {
    console.log("getting data");
    // axios.get("/api/v1/articles").then((res) => {
    //   console.log(res.data);
    // });
  }

  search = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (cancel) cancel();

    const searchQuery = e.target.value;
    console.log(searchQuery);
    axios
      .get(`/api/v1/articles/search/${searchQuery}`, {
        cancelToken: new axios.CancelToken((c) => {
          cancel = c;
        }),
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          return console.log("search: request cancelled");
        }

        console.log("search: something went wrong");
      });
  };

  render() {
    return (
      <div>
        <Input placeholder="Space" onChange={this.search} />
      </div>
    );
  }
}

export default App;
