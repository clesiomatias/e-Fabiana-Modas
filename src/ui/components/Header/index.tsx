import React, { useState } from "react";
import { Container, ListItem, Toolbar } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import { MenuResp } from "../index";
import {
  HeaderAppBar,
  HeaderLogo,
  NavContainer,
  ListStyled,
  MenuRespStyled,
} from "./style";

function Header() {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <a href="/" title="Fabiana Modas-HOME">
          <HeaderLogo src={"/logo.png"} />
        </a>
        <NavContainer>
          <ListStyled>
            <ListItem>
              <a href="/Produtos">
                <LocalMallIcon titleAccess="Produtos" />
              </a>
            </ListItem>
            <ListItem>
              <a href="/Login">
                <LoginSharpIcon titleAccess="Login ou Cadastrar" />
              </a>
            </ListItem>
          </ListStyled>
        </NavContainer>
        <MenuRespStyled>
          <MenuResp />
        </MenuRespStyled>
      </Toolbar>
    </HeaderAppBar>
  );
}

export default Header;
