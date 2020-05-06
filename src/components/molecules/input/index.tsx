import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

import { Input as InputAtom } from "../../atoms/input";
import { Search } from "../../atoms/icons";

interface InputProps extends ComponentPropsWithoutRef<"input"> {}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    padding-right: 0.3em;
    right: 0;
  }

  ${InputAtom} {
    width: 100%;
  }

  ${InputAtom}:focus {
    border-width: 2px;
    border-color: #757575;
  }

  ${InputAtom}:focus + svg path {
    fill: #757575;
    font-size: 1.2em;
  }
`;

export function Input(props: InputProps) {
  return (
    <Wrapper>
      <InputAtom {...props} />
      <Search />
    </Wrapper>
  );
}
