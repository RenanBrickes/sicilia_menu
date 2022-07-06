import { Grid } from "@mui/material";
import { MenuOption } from "../../components/menuOption";
import * as Styled from "./styled";
const bg = require("../../assets/bg.jpg") as string;

export const Cardapio = ({ data }: { data: Menu }) => {
  return (
    <>
      <Styled.Image alt="Background bg" src={bg} />
      <Styled.Title>{data.name}</Styled.Title>
      <Styled.ContainerStyled>
        <Grid container spacing={3}>
          {data.options.map((option: Option, index: number) => (
            <MenuOption key={index} data={option} />
          ))}
        </Grid>
      </Styled.ContainerStyled>
    </>
  );
};

type Menu = {
  name: string;
  image: string;
  options: Option[];
};

type Option = {
  name: string;
  description: string;
  value: number;
  image: string;
};
