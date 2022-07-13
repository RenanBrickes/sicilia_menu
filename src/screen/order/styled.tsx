import { Container, TextField, Typography, Grid, Button } from "@mui/material";
import styled, { css } from "styled-components";

export const Image = styled.img`
  ${() => css`
    width: 100%;
    height: 250px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    opacity: 0.6;
  `}
`;

export const Title = styled.h1`
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

export const GridRequest = styled(Grid)`
  margin-top: 25px;
  margin-bottom: 25px;
`;
export const TextFildRequest = styled(TextField)`
  width: 100% !important;
  border-radius: 5px;
  background-color: #ebe6e6 !important;
  font-size: 16px !important;
`;

export const TypographyRequest = styled(Typography)`
  ${({ theme }) => css`
    font-size: 18px !important;
    margin-bottom: 15px !important;
    font-family: ${theme.font.family.text} !important;
    font-weight: bold !important;
  `}
`;

export const TypographyTotal = styled(Typography)`
  ${({ theme }) => css`
    font-size: 18px !important;
    font-family: ${theme.font.family.text} !important;
    font-weight: bold !important;
  `}
`;

export const TypographyValue = styled.span`
  ${({ theme }) => css`
    font-size: 30px !important;
    font-family: ${theme.font.family.text} !important;
    font-weight: bold !important;
    font-weight: bold;
  `}
`;

export const ContainerConfirm = styled(Grid)`
  display: grid;
  justify-content: end;
  margin-bottom: 50px;
`;

export const ButtonConfirm = styled(Button)`
  ${({ theme }) => css`
    color: white !important;
    background-color: ${theme.colors.blue} !important;
    cursor: pointer;
    border-radius: 25px !important;
    font-family: ${theme.font.family.text};
    font-size: 14px !important;
    font-weight: bold !important;
    padding: 10px 35px !important;
  `}
`;

export const Alert = styled.div`
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

export const ContainerAlert = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
`;

export const TypographyAlert = styled(Typography)`
  ${({ theme }) => css`
    font-family: ${theme.font.family.text} !important;
    font-size: 25px !important;
    font-weight: bold;
    color: black;
    text-align: center;
    margin-top: 30px !important;
  `}
`;

export const ButtonAlert = styled(Button)`
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
