import { useState } from "react";
import { MenuContainer } from "../../components/menu";
import * as Styled from "./styled";
const bg = require("../../assets/bg.jpg") as string;
export const Help = () => {
  const [callWaiter, setCallWaiter] = useState<boolean>(false);
  const handleCallWaiter = () => {
    setCallWaiter(true);
  };
  return (
    <>
      <Styled.Image alt="Background bg" src={bg} />
      <Styled.Title>Help</Styled.Title>
      <Styled.ContainerAlert>
        <Styled.Alert>
          {!callWaiter ? (
            <>
              <Styled.TypographyAlert>
                If you need help or are <br />
                having trouble placing <br />
                your order, call a waiter.
              </Styled.TypographyAlert>
              <Styled.ButtonAlert onClick={handleCallWaiter}>
                Call waiter
              </Styled.ButtonAlert>
            </>
          ) : (
            <>
              <Styled.TypographyAlert>
                The waiter is <br />
                on his way!
              </Styled.TypographyAlert>
            </>
          )}
        </Styled.Alert>
      </Styled.ContainerAlert>
      <MenuContainer />
    </>
  );
};
