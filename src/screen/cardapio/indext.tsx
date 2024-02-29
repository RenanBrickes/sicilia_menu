import { Grid } from "@mui/material";
import { MenuContainer } from "../../components/menu";
import { MenuOption } from "../../components/menuOption";
import { ButtonConfirmStyled, ContainerConfirmStyled, ContainerStyled, ImageStyled, TitleStyled } from "./styled";
import { Menu, Option } from "./types";
import { UseCardapio } from "./hook";
const bg = require("../../assets/bg.jpg") as string;

export const Cardapio = ({ data }: { data: Menu }) => {
  const { handleConfirm, setTotalItem, totalItem } = UseCardapio();
  return (
    <>
      <ImageStyled alt="Background bg" src={bg} />
      <TitleStyled>{data.name}</TitleStyled>
      <ContainerStyled>
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
          <ContainerConfirmStyled>
            <ButtonConfirmStyled onClick={handleConfirm}>
              Confirm
            </ButtonConfirmStyled>
          </ContainerConfirmStyled>
        )}
      </ContainerStyled>
      <MenuContainer />
    </>
  );
};