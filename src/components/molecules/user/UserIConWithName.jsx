import styled from "styled-components";
import React, { memo } from "react";
import { useRecoilValue } from "recoil"; //更新関数はなく値参照のみなので、useRecoilStateでなくでOK
import { UserState } from "../../../store/UserState";

export const UserIconWithName = memo((props) => {
  const { src, name } = props;
  const userInfo = useRecoilValue(UserState);

  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImage alt={name} src={src} height={160} width={160} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
