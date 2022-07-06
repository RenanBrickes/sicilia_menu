import { Grid, Icon, Typography } from "@mui/material";
import styled, { css } from "styled-components";

export const TypographyTitle = styled(Typography)`
  ${({ theme }) => css`
    font-size: 25px !important;
    font-weight: 900 !important;
    font-family: ${theme.font.family.text} !important;
  `}
`;

export const TypographyDescription = styled(Typography)`
  ${({ theme }) => css`
    font-size: 20px !important;
    font-family: ${theme.font.family.text} !important;
  `}
`;

export const TypographyValue = styled(Typography)`
  ${({ theme }) => css`
    font-size: 25px !important;
    font-weight: 900 !important;
    font-family: ${theme.font.family.text} !important;
    text-align: right;
  `}
`;

export const GridAddItem = styled(Grid)`
  display: grid;
  grid-template-columns: 50px 50px;
  justify-content: center;
  align-content: center;
`;

export const Counter = styled.div`
  ${({ theme }) => css`
    text-align: center;
    display: grid;
    align-content: center;
    margin-right: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  `}
`;

export const IconPlus = styled(Icon)`
  ${({ theme }) => css`
    padding: 10px;
    background-color: ${theme.colors.blue};
    border-radius: 50%;
    color: white !important;
    cursor: pointer;
  `}
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 25px;
`;
