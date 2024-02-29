import { Grid } from "@mui/material";
import React from "react";
import { CounterStyled, GridAddItemStyled, IconPlusStyled, ImageItemStyled, TypographyDescriptionStyled, TypographyTitleStyled, TypographyValueStyled } from "./styled";
import { MenuOptionInterface } from "./types";
import { UseMenuOption } from "./hook";

export const MenuOption = ({
  data,
  setTotalItem,
  totalItem,
}: MenuOptionInterface) => {

  const { name, description, value, image, counter, handleCounter } = UseMenuOption({ data, totalItem, setTotalItem });

  return (
    <>
      <Grid item xs={3}>
        <ImageItemStyled src={image} alt={`Imagem de ${name}`} />
      </Grid>
      <Grid item xs={7}>
        <TypographyTitleStyled>{name}</TypographyTitleStyled>
        <TypographyDescriptionStyled>
          {description}
        </TypographyDescriptionStyled>
        <TypographyValueStyled>${value}</TypographyValueStyled>
      </Grid>
      <GridAddItemStyled item xs={2}>
        {counter > 0 && <CounterStyled>{counter}</CounterStyled>}
        <IconPlusStyled onClick={handleCounter}>add</IconPlusStyled>
      </GridAddItemStyled>
    </>
  );
};
