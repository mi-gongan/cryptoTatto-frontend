import React, { Children } from "react";
import styled from "styled-components";

interface ButtonPropsType {
  active: string;
  children: React.ReactNode;
}

function CustomButton({ active, children }: ButtonPropsType) {
  return (
    <Wrap color={active}>
      <div className="content">{children}</div>
    </Wrap>
  );
}

export default CustomButton;

const Wrap = styled.button`
  display: flex;
  padding: 0 36px;
  height: 50px;
  align-items: center;
  border-radius: 30px;
  background: ${(props) =>
    props.color === "true"
      ? "linear-gradient(92.39deg, #d13750 9%, #ae2b9e 88.89%)"
      : "none"};
  border: ${(props) =>
    props.color === "true" ? "1px solid transparent" : "1px solid #ae2b9e"};
`;
