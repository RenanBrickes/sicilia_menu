import { Grid, Icon, Typography } from "@mui/material";
import styled, { css } from "styled-components";

export const ImageItem = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 25px;
`;

export const GridContent = styled(Grid)`
  padding-left: 50px;
`;

export const TypographyStley = styled(Typography)`
  ${({ theme }) => css`
    font-family: ${theme.font.family.text} !important;
    font-size: 25px !important;
    font-weight: bold !important;
  `}
`;

export const GridAction = styled(Grid)`
  ${({ theme }) => css`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(3, 100px);
    align-content: center;
  `}
`;

export const Counter = styled.div`
  ${({ theme }) => css`
    text-align: center;
    display: grid;
    align-content: center;
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

export const IconRemove = styled(Icon)`
  ${({ theme }) => css`
    padding: 10px;
    background-color: ${theme.colors.blue};
    border-radius: 50%;
    color: white !important;
    cursor: pointer;
  `}
`;

export const GridIcon = styled.div`
  display: flex;
  justify-content: center;
`;
