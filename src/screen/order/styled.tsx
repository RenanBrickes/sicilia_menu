import { Container, TextField, Typography, Grid } from "@mui/material";
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
