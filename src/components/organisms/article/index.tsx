import React from "react";
import styled from "styled-components";

import { Article as ArticleModel } from "../../../models/article";
import { Text, TextType } from "../../atoms/text";
import { Space } from "../../atoms/space";
import { Clock } from "../../atoms/icons";

interface ArticleProps {
  article: ArticleModel;
}

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 15px 20px rgba(65, 64, 77, 0.1);
  }
`;

const Inner = styled.div`
  flex: 3;
  padding: 1.3em 2.7em;
`;

const Image = styled.img`
  object-fit: cover;
  flex: 1.3;
  border-radius: 10px 0 0 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Article = ({ article }: ArticleProps) => {
  return (
    <Wrapper>
      <Image src={article.imageURL} alt={article.title} />
      <Inner>
        <Text type={TextType.TITLE} color="#41404d">
          {article.title}
        </Text>

        <Space width="1em" />

        <Text type={TextType.BODY} color="#a0a0a0">
          {article.description}
        </Text>

        <Space width="1em" />

        <Row>
          <Row>
            <Clock color="#000" />
            <Space width="0.7em" dir="horizontal" />
            <Text type={TextType.BODY} color="#41404d">
              {new Date(parseInt(article.date)).toDateString()}
            </Text>
          </Row>
        </Row>
      </Inner>
    </Wrapper>
  );
};
