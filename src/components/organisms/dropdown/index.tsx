import React, { Component } from "react";
import styled from "styled-components";
import { Row } from "../../atoms/row";
import { Filter } from "../../atoms/icons";
import { Space } from "../../atoms/space";
import { Text, TextType } from "../../atoms/text";

interface ContentsProps {
  showContents: boolean;
}

interface DropdownProps {
  outterClicked: number;
}

const Contents = styled.div<ContentsProps>`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  padding: 1em 0;
  border-radius: 10px;
  box-shadow: 0px 15px 20px rgba(65, 64, 77, 0.3);
  transition: 0.3s ease-in-out;
  transform: scale(${(props) => (props.showContents ? 1 : 0)});
  transform-origin: top right;
`;

const Wrapper = styled.div<ContentsProps>`
  position: relative;

  ${Contents} {
    p{
      cursor: pointer;
      margin: 0;
      font-weight: bold;
      color: #ccc;
      padding: 1em 2em;
      transition: 0.3s ease-in-out;
    }

    p:hover{
      color: #c40000;
      background-color: #F5F5F5;
    }
  }

  ${Row} {
    cursor: pointer;
    /* visibility: ${(props) => (props.showContents ? "hidden" : "visible")}; */
    display: ${(props) => (props.showContents ? "none" : "flex")};

    * {
      transition: 0.3s ease-in-out;
    }
  }

  ${Row}:hover {
    text {
      color: #000;
    }

    svg path {
      fill: #000;
    }
  }
`;

export class Dropdown extends Component<DropdownProps> {
  state = {
    showFilters: false,
  };

  prevClicked = 0;

  toggleFilters = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    this.setState({ showFilters: true });
  };

  render() {
    let { showFilters } = this.state;
    const { outterClicked } = this.props;

    if (outterClicked !== this.prevClicked) {
      this.prevClicked = outterClicked;
      showFilters = false;
    }

    return (
      <Wrapper showContents={showFilters}>
        <Row onClick={this.toggleFilters}>
          <Text type={TextType.BODY} fontWeight={600} color="#9E9E9E">
            Date
          </Text>
          <Space width="0.7em" dir="horizontal" />
          <Filter fontSize="0.9em" />
        </Row>
        <Contents showContents={showFilters}>
          <p>Date</p>
          <p>Name</p>
        </Contents>
      </Wrapper>
    );
  }
}
