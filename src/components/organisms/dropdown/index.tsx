import React from "react";
import styled from "styled-components";
import { Row } from "../../atoms/row";

const Wrapper = styled.div`
  position: relative;

  text {
    visibility: hidden;
  }

  div {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    padding: 1em 2em;
    border-radius: 10px;
    box-shadow: 0px 15px 20px rgba(65, 64, 77, 0.3);
    transition: 0.3s ease-in-out;
    transform: scale(0);
  }
`;

// const Selected = styled.div``;

export const Dropdown = () => {
  return (
    <Wrapper>
      <Row>
        <text>Date</text>
      </Row>
      <div>
        <p>Date</p>
        <p>Name</p>
      </div>
    </Wrapper>
  );
};
