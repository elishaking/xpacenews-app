import React, { Component } from "react";
import styled from "styled-components";
import axios, { Canceler } from "axios";

import "./App.css";
import { Input } from "./components/molecules/input";
import { Article as ArticleModel } from "./models/article";
import { Space } from "./components/atoms/space";
import { Article } from "./components/organisms/article";
import { Row } from "./components/atoms/row";
import { Button } from "./components/atoms/button";

const InputContainer = styled.div`
  background-color: #c40000;
  padding: 3em 0;
`;

const ArticlesContainer = styled.div`
  background-color: #464554;
  padding: 3em 0;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 3em 3em;
  border-radius: 10px;
  background-color: #fff;
`;

let cancel: Canceler;

class App extends Component {
  state = {
    articles: [] as ArticleModel[],
  };

  componentDidMount() {
    console.log("getting data");
    axios.get("/api/v1/articles/search/elon").then((res) => {
      console.log(res.data);
      this.setState({
        articles: res.data.data,
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
        <InputContainer>
          <Inner>
            <Input placeholder="Space" onChange={this.search} />

            <Space width="3em" />

            <Row>
              <Button active={true}>Stories</Button>

              <Space width="1em" dir="horizontal" />

              <Button>Photos</Button>

              <Space width="0" flexGrow={1} dir="horizontal" />
            </Row>
          </Inner>
        </InputContainer>

        <ArticlesContainer>
          <Inner>
            {articles &&
              articles.map((article, idx) => {
                return (
                  <>
                    <Article key={idx} article={article} />
                    <Space width="2.3em" />
                  </>
                );
              })}
          </Inner>
        </ArticlesContainer>
      </div>
    );
  }
}

export default App;
