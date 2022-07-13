import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuContainer } from "../../components/menu";
import { OrderMenu } from "../../components/orderMenu";
import * as Styled from "./styled";
const bg = require("../../assets/bg.jpg") as string;
export const Order = () => {
  const { state } = useLocation();
  const [total, setTotal] = useState<number>(0);
  const [request, setRequest] = useState<String>("");
  const navigate = useNavigate();

  const data = state as Orders[];

  useEffect(() => {
    if (data !== null) {
      data.forEach((order) => {
        setTotal(
          (total) => total + (order.amount > 0 ? order.amount : 1) * order.value
        );
      });
    }
  }, [data]);

  return (
    <>
      <Styled.Image alt="Background bg" src={bg} />
      <Styled.Title>Order</Styled.Title>
      <Styled.ContainerStyled>
        {data !== null ? (
          <>
            <Grid container spacing={3}>
              {data.map((order, index) => (
                <OrderMenu
                  key={index}
                  data={order}
                  total={total}
                  setTotal={setTotal}
                />
              ))}
            </Grid>
            <Styled.GridRequest container>
              <Styled.TypographyRequest>
                Special request:
              </Styled.TypographyRequest>
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
              Total :
              <Styled.TypographyValue>${`${total}`}</Styled.TypographyValue>
            </Styled.TypographyTotal>
            <Styled.ContainerConfirm>
              <Styled.ButtonConfirm>Confirm</Styled.ButtonConfirm>
            </Styled.ContainerConfirm>
          </>
        ) : (
          <Styled.ContainerAlert>
            <Styled.Alert>
              <Styled.TypographyAlert>
                There are no orders yet. <br /> Enter the menu and place your
                order.
              </Styled.TypographyAlert>
              <Styled.ButtonAlert onClick={() => navigate("/")}>
                Menu
              </Styled.ButtonAlert>
            </Styled.Alert>
          </Styled.ContainerAlert>
        )}
      </Styled.ContainerStyled>
      <MenuContainer />
    </>
  );
};

type Orders = {
  name: string;
  value: number;
  amount: number;
  image: string;
};
