import { Grid } from "@mui/material";
import { useState } from "react";
import { MenuContainer } from "../../components/menu";
import { MenuOption } from "../../components/menuOption";
import * as Styled from "./styled";
const bg = require("../../assets/bg.jpg") as string;

export const Cardapio = ({ data }: { data: Menu }) => {
  const [totalItem, setTotalItem] = useState<ItemOrder[]>([]);

  const handleConfirm = () => {
    console.log(totalItem);
  };
  return (
    <>
      <Styled.Image alt="Background bg" src={bg} />
      <Styled.Title>{data.name}</Styled.Title>
      <Styled.ContainerStyled>
        <Grid container spacing={3}>
          {data.options.map((option: Option, index: number) => (
            <MenuOption
              key={index}
              data={option}
              setTotalItem={setTotalItem}
              totalItem={totalItem}
            />
          ))}
        </Grid>
        {totalItem.length > 0 && (
          <Styled.ContainerConfirm>
            <Styled.ButtonConfirm onClick={handleConfirm}>
              Confirm
            </Styled.ButtonConfirm>
          </Styled.ContainerConfirm>
        )}
      </Styled.ContainerStyled>
      <MenuContainer />
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

type ItemOrder = {
  name: string;
  value: number;
};
