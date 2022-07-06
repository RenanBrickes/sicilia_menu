import { Grid } from "@mui/material";
import { useState } from "react";
import * as Styled from "./styled";

export const MenuOption = ({ data }: { data: Option }) => {
  const [counterItem, setCounterItem] = useState<number>(0);
  const { name, description, value, image } = data;
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
        {counterItem > 0 && <Styled.Counter>{counterItem}</Styled.Counter>}
        <Styled.IconPlus
          onClick={() => setCounterItem((counterItem) => counterItem + 1)}
        >
          add
        </Styled.IconPlus>
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
