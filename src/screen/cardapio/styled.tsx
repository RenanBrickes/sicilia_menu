import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
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

export const ContainerStyled = styled(Container)`
  margin-top: 80px;
  margin-bottom: 150px;
`;

export const ContainerConfirmStyled = styled(Grid)`
  display: grid;
  justify-content: end;
  margin-bottom: 50px;
`;

export const ButtonConfirmStyled = styled(Button)`
  ${({ theme }) => css`
    color: white !important;
    background-color: ${theme.colors.blue} !important;
    cursor: pointer;
    border-radius: 25px !important;
    font-family: ${theme.font.family.text};
    font-size : 14px !important;
    font-weight: bold !important;
    padding: 10px 35px !important;
  `}
`;
