
import { MenuContainer } from "../../components/menu";
import { UseHelp } from "./hook";
import { AlertStyled, ButtonAlertStyled, ContainerAlertStyled, ImageStyled, TitleStyled, TypographyAlertStyled } from "./styled";
const bg = require("../../assets/bg.jpg") as string;
export const Help = () => {
  const { callWaiter, handleCallWaiter } = UseHelp();
  return (
    <>
      <ImageStyled alt="Background bg" src={bg} />
      <TitleStyled>Help</TitleStyled>
      <ContainerAlertStyled>
        <AlertStyled>
          {!callWaiter ? (
            <>
              <TypographyAlertStyled>
                If you need help or are <br />
                having trouble placing <br />
                your order, call a waiter.
              </TypographyAlertStyled>
              <ButtonAlertStyled onClick={handleCallWaiter}>
                Call waiter
              </ButtonAlertStyled>
            </>
          ) : (
            <>
              <TypographyAlertStyled>
                The waiter is <br />
                on his way!
              </TypographyAlertStyled>
            </>
          )}
        </AlertStyled>
      </ContainerAlertStyled>
      <MenuContainer />
    </>
  );
};
