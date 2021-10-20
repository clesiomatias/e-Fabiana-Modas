import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterStyle = styled("footer")`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(4)};
  margin-top: auto;
`;
export const FooterContainer = styled(Container)`
  height: 11vh;
`;
