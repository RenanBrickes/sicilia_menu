import { Grid, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";

export const MenuContainer = () => {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.ContainerMenu>
        <Grid container spacing={3}>
          <Styled.GridMenu item xs={4}>
            <Tooltip title={<Typography fontSize={12}>Menu</Typography>}>
              <Styled.IconDiv onClick={() => navigate("/")}>
                <Styled.Icone>restaurant_menu</Styled.Icone>
              </Styled.IconDiv>
            </Tooltip>
          </Styled.GridMenu>
          <Styled.GridMenu item xs={4}>
            <Tooltip title={<Typography fontSize={12}>Order</Typography>}>
              <Styled.IconDiv onClick={() => navigate("/Order")}>
                <Styled.Icone>menu</Styled.Icone>
              </Styled.IconDiv>
            </Tooltip>
          </Styled.GridMenu>
          <Styled.GridMenu item xs={4}>
            <Tooltip title={<Typography fontSize={12}>Help</Typography>}>
              <Styled.IconDiv onClick={() => navigate("/Help")}>
                <Styled.Icone>question_mark</Styled.Icone>
              </Styled.IconDiv>
            </Tooltip>
          </Styled.GridMenu>
        </Grid>
      </Styled.ContainerMenu>
    </Styled.Container>
  );
};
