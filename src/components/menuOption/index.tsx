import { Grid } from "@mui/material";
import React, { useState } from "react";
import * as Styled from "./styled";

export const MenuOption = ({
  data,
  setTotalItem,
  totalItem,
}: {
  data: Option;
  setTotalItem: React.Dispatch<React.SetStateAction<ItemOrder[]>>;
  totalItem: ItemOrder[];
}) => {
  const { name, description, value, image } = data;
  const [counter, setCounter] = useState<number>(0);

  const handleCounter = () => {
    setCounter((value) => value + 1);
    setTotalItem([...totalItem, { name: name, value: value }]);
  };

  return (
    <>
      <Grid item xs={3}>
        <Styled.ImageItem src={image} alt="teste" />
      </Grid>
      <Grid item xs={7}>
        <Styled.TypographyTitle>{name}</Styled.TypographyTitle>
        <Styled.TypographyDescription>
          {description}
        </Styled.TypographyDescription>
        <Styled.TypographyValue>${value}</Styled.TypographyValue>
      </Grid>
      <Styled.GridAddItem item xs={2}>
        {counter > 0 && <Styled.Counter>{counter}</Styled.Counter>}
        <Styled.IconPlus onClick={handleCounter}>add</Styled.IconPlus>
      </Styled.GridAddItem>
    </>
  );
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
