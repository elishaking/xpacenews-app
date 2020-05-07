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
    storiesActive: true,
  };

  componentDidMount() {
    console.log("getting data");
    axios.get("/api/v1/articles/").then((res) => {
      // console.log(res.data);
      this.setState({
        articles: res.data.data,
      });
    });
  }

  search = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (cancel) cancel();

    const searchQuery = e.target.value;
    // console.log(searchQuery);
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

  openArticle = (idx: number) => {
    const article = this.state.articles[idx];
    axios.put(`/api/v1/articles/${article.id}`, article);
    window.open(article.url, "_blank");
  };

  toggleStories = (val: boolean) => {
    const { storiesActive } = this.state;
    if (storiesActive && !val) this.setState({ storiesActive: false });
    else if (!storiesActive && val) this.setState({ storiesActive: true });
  };

  render() {
    const { articles, storiesActive } = this.state;

    return (
      <div>
        <InputContainer>
          <Inner>
            <Input placeholder="Space" onChange={this.search} />

            <Space width="3em" />

            <Row>
              <Button
                active={storiesActive}
                onClick={() => this.toggleStories(true)}
              >
                Stories
              </Button>

              <Space width="1em" dir="horizontal" />

              <Button
                active={!storiesActive}
                onClick={() => this.toggleStories(false)}
              >
                Top Stories
              </Button>

              <Space width="0" flexGrow={1} dir="horizontal" />
            </Row>
          </Inner>
        </InputContainer>

        <ArticlesContainer>
          <Inner>
            {articles &&
              articles.map((article, idx) => {
                return (
                  <div key={idx}>
                    <Article
                      article={article}
                      onClick={(e) => this.openArticle(idx)}
                    />
                    <Space width="2.3em" />
                  </div>
                );
              })}
          </Inner>
        </ArticlesContainer>
      </div>
    );
  }
}

export default App;
