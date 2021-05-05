import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (proprs) => {
  const { children } = proprs;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
