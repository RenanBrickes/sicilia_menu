import { Grid } from "@mui/material";
import { useState } from "react";
import * as Styled from "./styled";
export const OrderMenu = ({
  data,
  total,
  setTotal,
}: {
  data: Order;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [counterItem, setCounterItem] = useState<number>(data.amount);
  const [showItem, setShowItem] = useState<boolean>(true);

  const handleAddTotal = () => {
    setCounterItem((counterItem) => counterItem + 1);
    setTotal(
      (total) => total + (data.amount > 0 ? data.amount : 1) * data.value
    );
  };

  const handleRemoveTotal = () => {
    const itemRemove = counterItem - 1;
    setCounterItem(itemRemove);
    setTotal(
      (total) => total - (data.amount > 0 ? data.amount : 1) * data.value
    );
    if (itemRemove === 0) setShowItem(false);
  };

  return (
    <>
      {showItem && (
        <>
          <Grid item xs={3}>
            <Styled.ImageItem src={data.image} alt={`Imagem de ${data.name}`} />
          </Grid>
          <Styled.GridContent item xs={6}>
            <Styled.TypographyStley>{data.name}</Styled.TypographyStley>
            <Styled.TypographyStley>${data.value}</Styled.TypographyStley>
          </Styled.GridContent>
          <Styled.GridAction item xs={3}>
            <Styled.GridIcon>
              <Styled.IconPlus onClick={handleAddTotal}>add</Styled.IconPlus>
            </Styled.GridIcon>
            {counterItem > 0 && <Styled.Counter>{counterItem}</Styled.Counter>}
            <Styled.GridIcon>
              <Styled.IconRemove onClick={handleRemoveTotal}>
                remove
              </Styled.IconRemove>
            </Styled.GridIcon>
          </Styled.GridAction>
        </>
      )}
    </>
  );
};

type Order = {
  name: string;
  value: number;
  amount: number;
  image: string;
};
