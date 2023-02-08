import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: rgb(6, 252, 153);
  border-color: rgb(6, 252, 153);
  color: white;
`;

export function BlueButton(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
