import { Grid } from "@mui/material";
import * as Styled from "./styled";

export const MenuContainer = () => {
  return (
    <Styled.Container>
      <Styled.ContainerMenu>
        <Grid container spacing={3}>
          <Styled.GridMenu item xs={4}>
            <Styled.IconDiv>
              <Styled.Icone>restaurant_menu</Styled.Icone>
            </Styled.IconDiv>
          </Styled.GridMenu>
          <Styled.GridMenu item xs={4}>
            <Styled.IconDiv>
              <Styled.Icone>menu</Styled.Icone>
            </Styled.IconDiv>
          </Styled.GridMenu>
          <Styled.GridMenu item xs={4}>
            <Styled.IconDiv>
              <Styled.Icone>question_mark</Styled.Icone>
            </Styled.IconDiv>
          </Styled.GridMenu>
        </Grid>
      </Styled.ContainerMenu>
    </Styled.Container>
  );
};
