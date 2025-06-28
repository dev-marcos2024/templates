import styled from "@emotion/styled";

interface Props {
  show: boolean;
  type?: "error" | "success";
}

export const AlertBox = styled.div<Props>`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  padding-bottom: 1px;
  background-color: ${(props) =>
    props.type === "error"
      ? '#D1493D'
      : '#2B825C';
  border-radius: 4px;
  transition: transform 0.6s, opacity 0.3s;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: ${(props) => (props.show ? "translatex(0)" : "translatex(20%)")};
  pointer-events: ${(props) => (props.show ? "all" : "none")};
  .icon {
    color: #FFF;
    font-size: 18px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 8px;
  padding: 1rem 1.5rem;
  align-items: center;
`;

export const Title = styled.span`
  color: #FFF;
  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
`;

export const BarraTempo = styled.div<{ w: number }>`
  width: ${(props) => props.w + "%"};
  height: 4px;
  background-color: #fddc47;
  transition: width 0.1s linear;
  border-radius: 0 0 4px 4px;
`;
