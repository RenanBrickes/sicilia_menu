import { Grid } from "@mui/material";
import { CounterStyled, GridActionStyled, GridContentStyled, GridIconStyled, IconPlusStyled, IconRemoveStyled, ImageItemStyled, TypographyStyled } from "./styled";
import { OrderMenuInterface } from "./types";
import { useOrderMenu } from "./hook";
export const OrderMenu = ({
  data,
  total,
  setTotal,
}: OrderMenuInterface) => {

  const { counterItem, showItem, handleAddTotal, handleRemoveTotal } = useOrderMenu({ data, total, setTotal });

  return (
    <>
      {showItem && (
        <>
          <Grid item xs={3}>
            <ImageItemStyled src={data.image} alt={`Imagem de ${data.name}`} />
          </Grid>
          <GridContentStyled item xs={6}>
            <TypographyStyled>{data.name}</TypographyStyled>
            <TypographyStyled>${data.value}</TypographyStyled>
          </GridContentStyled>
          <GridActionStyled item xs={3}>
            <GridIconStyled>
              <IconPlusStyled onClick={handleAddTotal}>add</IconPlusStyled>
            </GridIconStyled>
            {counterItem > 0 && <CounterStyled>{counterItem}</CounterStyled>}
            <GridIconStyled>
              <IconRemoveStyled onClick={handleRemoveTotal}>
                remove
              </IconRemoveStyled>
            </GridIconStyled>
          </GridActionStyled>
        </>
      )}
    </>
  );
};
