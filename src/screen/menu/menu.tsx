import * as Styled from "./styled";
const bg = require("../../assets/bg.jpg") as string;

export const Menu = () => {
  return (
    <>
      <Styled.Image
        alt="Background bg"
        src={bg}
        />
        <Styled.Title>Pastas</Styled.Title>
    </>
  );
};

export default Menu;
