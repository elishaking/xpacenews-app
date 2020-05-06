import { HTMLProps } from "react";
import styled from "styled-components";

interface SpaceProps extends HTMLProps<HTMLDivElement> {
  width: string;
  dir?: "vertical" | "horizontal";
}

const height = (props: SpaceProps) => {
  if (!props.dir) return props.width;

  return props.dir === "vertical" ? props.width : 0;
};

export const Space = styled.div<SpaceProps>`
  width: ${(props) => (props.dir === "horizontal" ? props.width : 0)};
  height: ${height};
`;
