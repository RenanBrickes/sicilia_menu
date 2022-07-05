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
      margin-left:20px;
      font-size: 50px;
      top: 115px;
    }
  `}
`;
