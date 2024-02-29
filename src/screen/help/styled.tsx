import { Button, Typography } from "@mui/material";
import styled, { css } from "styled-components";

export const ImageStyled = styled.img`
  ${() => css`
    width: 100%;
    height: 250px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    opacity: 0.6;
  `}
`;

export const TitleStyled = styled.h1`
  ${({ theme }) => css`
    margin-left: 80px;
    color: ${theme.colors.darkBlue};
    font-size: 100px;
    font-weight: bold;
    position: absolute;
    top: 30px;

    @media ${theme.media.medium} {
      margin-left: 20px;
      font-size: 50px;
      top: 115px;
    }
  `}
`;
export const AlertStyled = styled.div`
  width: 500px;
  height: 250px;
  background-color: #e4dbdb;
  display: grid;
  justify-content: center;
  justify-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const ContainerAlertStyled = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  margin-top: 50px;
  margin-bottom: 250px;
`;

export const TypographyAlertStyled = styled(Typography)`
  ${({ theme }) => css`
    font-family: ${theme.font.family.text} !important;
    font-size: 25px !important;
    font-weight: bold;
    color: black;
    text-align: center;
    margin-top: 30px !important;
  `}
`;

export const ButtonAlertStyled = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue} !important;
    font-family: ${theme.font.family.text} !important;
    font-size: 16px !important;
    color: white !important;
    margin-bottom: 30px !important;
    width: 250px !important;
    height: 50px !important;
    border-radius: 100px !important;
    cursor: pointer;
  `}
`;
