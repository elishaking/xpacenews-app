import { HTMLProps, ReactNode } from "react";
import styled from "styled-components";

export enum TextType {
  HEADER = "header",
  TITLE = "title",
  BODY = "body",
}

interface TextProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  type?: TextType;
  color?: string;
  responsive?: boolean;
}

const fontSize = ({ type }: TextProps) => {
  if (type === TextType.HEADER) return "3em";
  if (type === TextType.TITLE) return "2em";
  if (type === TextType.BODY) return "1em";
  return "1em";
};

const fontWeight = ({ type }: TextProps) => {
  if (type === TextType.HEADER) return "600";
  if (type === TextType.TITLE) return "500";
  if (type === TextType.BODY) return "normal";
  return "normal";
};

export const Text = styled.text<TextProps>`
  display: block;
  font-size: ${fontSize};
  font-weight: ${(props) => props.fontWeight || fontWeight};
  color: ${(props) => props.color || "#000"};

  @media (max-width: 760px) {
    font-size: ${(props) => (props.responsive ? "150%" : fontSize)};
  }
`;
