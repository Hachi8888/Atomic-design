import React from "react";
import styled from "styled-components";
import { SecoundaryButton } from "../atoms/button/SecoundaryButton";
import { useHistory } from "react-router-dom";

export const Top = () => {
  const history = useHistory();

  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecoundaryButton onClick={onClickAdmin}>管理者ユーザー</SecoundaryButton>
      <br />
      <br />
      <SecoundaryButton onClick={onClickGeneral}>一般ユーザー</SecoundaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
