import styled, { css } from "styled-components";
import { Card, CardContent, Typography } from "@mui/material";

export const Option = styled(Card)`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue} !important;
    max-width: 345px;
    height: 250px;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  `}
`;

export const Content = styled(CardContent)`
  margin-top: 50px;
`;

export const Title = styled(Typography)`
  ${({ theme }) => css`
    font-family: ${theme.font.family.text} !important;
    font-size: 20px !important;
    color: white;
    font-weight: bold !important;
    text-align: center;
  `}
`;
