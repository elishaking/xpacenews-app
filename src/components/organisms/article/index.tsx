import React from "react";
import styled from "styled-components";

import { Article as ArticleModel } from "../../../models/article";
import { Text, TextType } from "../../atoms/text";
import { Space } from "../../atoms/space";

interface ArticleProps {
  article: ArticleModel;
}

const Wrapper = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 10px;
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
            <Text type={TextType.BODY} color="#41404d">
              {new Date(parseInt(article.date)).toDateString()}
            </Text>
          </Row>
        </Row>
      </Inner>
    </Wrapper>
  );
};
