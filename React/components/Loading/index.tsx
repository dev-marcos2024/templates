import { RingLoader } from "react-spinners";
import { Container, Label, LoadingBox } from "./style";
import { useTheme } from "@emotion/react";

export const Loading = () => {
  const theme = useTheme();

  return (
    <LoadingBox>
      <Container>
        <RingLoader color={theme.COLORS.primary} />
        <Label>Por favor aguarde...</Label>
      </Container>
    </LoadingBox>
  );
};
