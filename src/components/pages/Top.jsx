import React, { useContext } from "react";
import styled from "styled-components";
import { SecoundaryButton } from "../atoms/button/SecoundaryButton";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

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
