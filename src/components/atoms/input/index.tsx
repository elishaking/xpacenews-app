import { HTMLProps } from "react";
import styled from "styled-components";

interface InputProps extends HTMLProps<HTMLInputElement> {}

export const Input = styled.input<InputProps>`
  font-size: 2em;
  font-weight: 500;
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.4em 0;
  /* transition: 0.3s ease-in-out; */
`;
