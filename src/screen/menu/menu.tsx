import * as Styled from "./styled";
const bg = require("../../assets/bg.jpg") as string;

export const Menu = () => {
  return (
    <>
      <Styled.Image
        alt="Background bg"
        // src='https://img.freepik.com/free-photo/restaurant-blur-background_1385-174.jpg?w=740&t=st=1656965146~exp=1656965746~hmac=fbc2d5098db07ebd697d7648467cb46bc400700f064502e634b4dcf20cc7080c'
        src={bg}
        />
        <Styled.title>Pastas</Styled.title>
    </>
  );
};

export default Menu;
