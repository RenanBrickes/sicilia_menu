import { GridOption } from "../../components/gridOption";
import * as Styled from "./styled";
import { MenuContainer } from "../../components/menu";
const bg = require("../../assets/bg.jpg") as string;
const mocksOption = require("../../mocks/optionsMocks") as Mock[];

export const Menu = () => {
  return (
    <>
      <Styled.Image alt="Background bg" src={bg} />
      <Styled.Title>Pastas</Styled.Title>
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
