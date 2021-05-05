import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecoundaryButton = (proprs) => {
  const { children } = proprs;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
