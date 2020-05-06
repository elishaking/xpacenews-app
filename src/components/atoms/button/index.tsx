import { HTMLProps } from "react";
import styled from "styled-components";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  active?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: 1em;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => (props.active ? "#000" : "#ccc")};
  transition: 0.3s ease-in-out;

  &:hover {
    color: #000;
  }
`;
