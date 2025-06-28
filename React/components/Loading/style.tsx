import styled from "@emotion/styled";

export const LoadingBox = styled.div`
  background-color: ${(props) => props.theme.COLORS.background};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 1;
`;
export const Label = styled.span`
  color: ${(props) => props.theme.COLORS.textColor400};
  font-size: 14px;
  font-weight: 700;
`;
