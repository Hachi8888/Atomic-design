import React from "react";
import styled from "styled-components";
import { SecoundaryButton } from "../atoms/button/SecoundaryButton";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil"; //更新関数のみ使用するのを明示的に示せる（再レンダリングも考慮されている）
import { UserState } from "../../store/UserState";

export const Top = () => {
  const history = useHistory();
  const setUserInfo = useSetRecoilState(UserState);

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
