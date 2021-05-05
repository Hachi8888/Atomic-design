import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecoundaryButton = (proprs) => {
  const { children, onClick } = proprs;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
