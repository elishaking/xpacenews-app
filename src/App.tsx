import React, { Component } from "react";
import axios, { Canceler } from "axios";

import "./App.css";
import { Input } from "./components/molecules/input";
import { Article as ArticleModel } from "./models/article";
import { Space } from "./components/atoms/space";
import { Article } from "./components/organisms/article";

let cancel: Canceler;

class App extends Component {
  state = {
    articles: [] as ArticleModel[],
  };

  componentDidMount() {
    console.log("getting data");
    axios.get("/api/v1/articles/10").then((res) => {
      console.log(res.data);
      this.setState({
        articles: [res.data.data],
      });
    });
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
        this.setState({
          articles: res.data.data,
        });
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          return console.log("search: request cancelled");
        }

        console.log("search: something went wrong");
      });
  };

  render() {
    const { articles } = this.state;

    return (
      <div>
        <Input placeholder="Space" onChange={this.search} />
        <Space width="3em" />
        {articles &&
          articles.map((article, idx) => {
            return <Article key={idx} article={article} />;
          })}
      </div>
    );
  }
}

export default App;
