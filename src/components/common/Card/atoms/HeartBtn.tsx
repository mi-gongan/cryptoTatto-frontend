import React, { useState } from "react";
import styled from "styled-components";

import OutlineHeartIcon from "../../../../../public/assets/outline_heart.svg";
import FillHeartIcon from "../../../../../public/assets/fill_heart.svg";

interface IProps {
  isHeart: boolean;
}

function HeartBtn({ isHeart }: IProps) {
  const [isActive, setIsActive] = useState(isHeart);

  return (
    <StyledBtn onClick={() => setIsActive((prev) => !prev)}>
      {isActive ? (
        <FillHeartIcon width="26" />
      ) : (
        <OutlineHeartIcon width="30" />
      )}
    </StyledBtn>
  );
}

export default HeartBtn;

const StyledBtn = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 50px;
  height: 50px;
  padding-top: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;
