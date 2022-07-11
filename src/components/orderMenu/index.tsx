import { Grid } from "@mui/material";
import { useState } from "react";
import * as Styled from "./styled";
export const OrderMenu = ({ data }: { data: Order }) => {
  const [counterItem, setCounterItem] = useState<number>(data.amount);
  return (
    <>
      <Grid item xs={3}>
        <Styled.ImageItem src={data.image} alt="teste" />
      </Grid>
      <Styled.GridContent item xs={6}>
        <Styled.TypographyStley>{data.name}</Styled.TypographyStley>
        <Styled.TypographyStley>${data.value}</Styled.TypographyStley>
      </Styled.GridContent>
      <Styled.GridAction item xs={3}>
        <Styled.GridIcon>
          <Styled.IconPlus
            onClick={() => setCounterItem((counterItem) => counterItem + 1)}
          >
            add
          </Styled.IconPlus>
        </Styled.GridIcon>
        {counterItem > 0 && <Styled.Counter>{counterItem}</Styled.Counter>}
        <Styled.GridIcon>
          <Styled.IconRemove
            onClick={() => setCounterItem((counterItem) => counterItem - 1)}
          >
            remove
          </Styled.IconRemove>
        </Styled.GridIcon>
      </Styled.GridAction>
    </>
  );
};

type Order = {
  name: string;
  value: number;
  amount: number;
  image: string;
};
