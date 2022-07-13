import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";

export const MenuContainer = () => {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.ContainerMenu>
        <Grid container spacing={3}>
          <Styled.GridMenu item xs={4}>
            <Styled.IconDiv onClick={() => navigate("/")}>
              <Styled.Icone>restaurant_menu</Styled.Icone>
            </Styled.IconDiv>
          </Styled.GridMenu>
          <Styled.GridMenu item xs={4}>
            <Styled.IconDiv onClick={() => navigate("/Order")}>
              <Styled.Icone>menu</Styled.Icone>
            </Styled.IconDiv>
          </Styled.GridMenu>
          <Styled.GridMenu item xs={4}>
            <Styled.IconDiv onClick={() => navigate("/Help")}>
              <Styled.Icone>question_mark</Styled.Icone>
            </Styled.IconDiv>
          </Styled.GridMenu>
        </Grid>
      </Styled.ContainerMenu>
    </Styled.Container>
  );
};
