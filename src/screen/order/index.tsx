import { Grid } from "@mui/material";
import { MenuContainer } from "../../components/menu";
import { OrderMenu } from "../../components/orderMenu";
import { AlertStyled, ButtonAlertStyled, ButtonConfirmStyled, ContainerAlertStyled, ContainerConfirmStyled, ContainerStyled, GridRequestStyled, ImageStyled, TextFildRequestStyled, TitleStyled, TypographyAlertStyled, TypographyRequestStyled, TypographyTotalStyled, TypographyValueStyled } from "./styled";
import { useOrder } from "./hook";
const bg = require("../../assets/bg.jpg") as string;
export const Order = () => {

  const { total, request, data, setTotal, setRequest, navigate } = useOrder();

  return (
    <>
      <ImageStyled alt="Background bg" src={bg} />
      <TitleStyled>Order</TitleStyled>
      <ContainerStyled>
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
            <GridRequestStyled container>
              <TypographyRequestStyled>
                Special request:
              </TypographyRequestStyled>
              <TextFildRequestStyled
                id="outlined-multiline-static"
                value={request}
                multiline
                rows={4}
                inputProps={{ style: { fontSize: 16 } }}
                onChange={(element) => setRequest(element.target.value)}
              />
            </GridRequestStyled>
            <TypographyTotalStyled>
              Total :
              <TypographyValueStyled>${`${total}`}</TypographyValueStyled>
            </TypographyTotalStyled>
            <ContainerConfirmStyled>
              <ButtonConfirmStyled>Confirm</ButtonConfirmStyled>
            </ContainerConfirmStyled>
          </>
        ) : (
          <ContainerAlertStyled>
            <AlertStyled>
              <TypographyAlertStyled>
                There are no orders yet. <br /> Enter the menu and place your
                order.
              </TypographyAlertStyled>
              <ButtonAlertStyled onClick={() => navigate("/")}>
                Menu
              </ButtonAlertStyled>
            </AlertStyled>
          </ContainerAlertStyled>
        )}
      </ContainerStyled>
      <MenuContainer />
    </>
  );
};


