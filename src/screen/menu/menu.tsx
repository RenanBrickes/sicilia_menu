import * as Styled from "./styled";
const bg = require("../../assets/bg.jpg") as string;
// const optionBruschetta =
//   require("../../assets/options/bruschetta.jpg") as string;

export const Menu = () => {
  return (
    <>
      <Styled.Image alt="Background bg" src={bg} />
      <Styled.Title>Pastas</Styled.Title>
      {/* <Option src={optionBruschetta} title="Appetizers" /> */}
    </>
  );
};

export default Menu;
