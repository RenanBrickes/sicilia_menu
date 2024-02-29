import { GridOption } from "../../components/gridOption";
import { ImageStyled, TitleStyled } from "./styled";
import { MenuContainer } from "../../components/menu";
const bg = require("../../assets/bg.jpg") as string;
const mocksOption = require("../../mocks/optionsMocks") as Mock[];

export const Menu = () => {
  return (
    <>
      <ImageStyled alt="Background bg" src={bg} />
      <TitleStyled>Pastas</TitleStyled>
      <GridOption data={mocksOption} />
      <MenuContainer />
    </>
  );
};

type Mock = {
  src: string;
  title: string;
};

export default Menu;
