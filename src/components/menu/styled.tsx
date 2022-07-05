import { Grid, Icon } from "@mui/material";
import styled, { css } from "styled-components";

export const ContainerMenu = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
    margin-left: 25px !important;
    margin-right: 25px !important;
    position: relative;
    width: auto;
    height: 80px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  `}
`;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export const GridMenu = styled(Grid)`
  display: grid;
  justify-content: center;
`;

export const IconDiv = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    top: -60px;
    background-color: white;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: 5px solid ${theme.colors.blue};
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    cursor: pointer;
  `}
`;

export const Icone = styled(Icon)`
  font-size: 50px !important;
`;
