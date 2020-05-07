import React from "react";
import styled from "styled-components";

import loading from "../../../assets/loading.svg";

const Image = styled.img`
  height: 100%;
`;

export const Loading = () => {
  return <Image src={loading} />;
};
