import styled from "styled-components";
import React, { memo, useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
  const { src, name } = props;
  const { userInfo } = useContext(UserContext); //グローバルなstateを参照
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  console.log("***UserIconWithName");
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
