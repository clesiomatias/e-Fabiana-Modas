import { styled } from "@mui/material/styles";
import { AppBar, List, Menu } from "@mui/material";
import theme from "ui/themes/theme";
import { MenuResp } from "../index";

export const HeaderAppBar = styled(AppBar)`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    .MuiToolbar-root {
      min-height: 75px;
    }
  }
  min-height: 75px;
  height: 10vh;
  box-shadow: 0, 2px, 1px, rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const HeaderLogo = styled("img")`
  ${({ theme }) => theme.breakpoints.up("sm")} {
    max-width: 80px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 60px;
  }
`;

export const NavContainer = styled("div")`
  display: flex;
  gap: 2%;
  justify-content: flex-end;
  width: 90%;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`;
export const ListStyled = styled(List)`
  display: flex;
`;
export const MenuRespStyled = styled("div")`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: none;
  }
`;
