import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { MenuContainer } from "../../components/menu";
import { OrderMenu } from "../../components/orderMenu";
import * as Styled from "./styled";
const bg = require("../../assets/bg.jpg") as string;
export const Order = ({ data }: { data: Orders }) => {
  const [total, setTotal] = useState<number>(0);
  const [request, setRequest] = useState<String>("");

  useEffect(() => {
    data.total.forEach((order) => {
      setTotal(
        (total) => total + (order.amount > 0 ? order.amount : 1) * order.value
      );
    });
    console.log("render");
  }, [data]);

  return (
    <>
      <Styled.Image alt="Background bg" src={bg} />
      <Styled.Title>Order</Styled.Title>
      <Styled.ContainerStyled>
        <Grid container spacing={3}>
          {data.total.map((order, index) => (
            <OrderMenu key={index} data={order} />
          ))}
        </Grid>
        <Styled.GridRequest container>
          <Styled.TypographyRequest>Special request:</Styled.TypographyRequest>
          <Styled.TextFildRequest
            id="outlined-multiline-static"
            value={request}
            multiline
            rows={4}
            inputProps={{ style: { fontSize: 16 } }}
            onChange={(element) => setRequest(element.target.value)}
          />
        </Styled.GridRequest>
        <Styled.TypographyTotal>
          Total : <Styled.TypographyValue>${`${total}`}</Styled.TypographyValue>
        </Styled.TypographyTotal>
      </Styled.ContainerStyled>
      <MenuContainer />
    </>
  );
};

type Orders = {
  total: OrderType[];
};

type OrderType = {
  name: string;
  value: number;
  amount: number;
  image: string;
};
