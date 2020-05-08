import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

import { Article as ArticleModel } from "../../../models/article";
import { Text, TextType } from "../../atoms/text";
import { Row } from "../../atoms/row";
import { Space } from "../../atoms/space";
import { Clock } from "../../atoms/icons";

interface ArticleProps extends ComponentPropsWithoutRef<"div"> {
  article: ArticleModel;
}

const Inner = styled.div`
  width: 70%;
  padding: 1.3em 2.7em;
`;

const ImageWrapper = styled.div`
  width: 30%;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  /* height: 7em; */

  &:hover {
    box-shadow: 0px 15px 20px rgba(65, 64, 77, 0.1);
  }

  @media (max-width: 1100px) {
    ${Inner} {
      width: 60%;
    }

    ${ImageWrapper} {
      width: 40%;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    ${Inner} {
      width: 100%;
    }

    ${ImageWrapper} {
      width: 100%;

      ${Image} {
        border-radius: 10px 10px 0 0;
      }
    }
  }
`;

const TextWrapper = styled.div`
  position: relative;
`;

const TextOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-image: linear-gradient(#fff0, #fffffff2);
`;

export const Article = ({ article, ...rest }: ArticleProps) => {
  return (
    <Wrapper {...rest}>
      <ImageWrapper>
        <Image src={article.imageURL} alt={article.title} />
      </ImageWrapper>
      <Inner>
        <Text type={TextType.TITLE} color="#41404d">
          {article.title}
        </Text>

        <Space width="1em" />

        <TextWrapper>
          <Text
            type={TextType.BODY}
            color="#a0a0a0"
            style={{ height: "10em", overflow: "hidden" }}
          >
            {article.description}
          </Text>

          <TextOverlay />
        </TextWrapper>

        <Space width="1em" />

        <Row>
          <Row>
            <Clock color="#000" />
            <Space width="0.7em" dir="horizontal" />
            <Text type={TextType.BODY} color="#41404d">
              {new Date(parseInt(article.date)).toDateString()}
            </Text>
          </Row>

          <Space width="0" flexGrow={1} dir="horizontal" />

          <Text>Source: {article.source}</Text>
        </Row>
      </Inner>
    </Wrapper>
  );
};
