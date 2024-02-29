import { Grid, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ContainerMenuStyled, ContainerStyled, GridMenuStyled, IconDivStyled, IconeStyled } from "./styled";

export const MenuContainer = () => {
  const navigate = useNavigate();
  return (
    <ContainerStyled>
      <ContainerMenuStyled>
        <Grid container spacing={3}>
          <GridMenuStyled item xs={4}>
            <Tooltip title={<Typography fontSize={12}>Menu</Typography>}>
              <IconDivStyled onClick={() => navigate("/")}>
                <IconeStyled>restaurant_menu</IconeStyled>
              </IconDivStyled>
            </Tooltip>
          </GridMenuStyled>
          <GridMenuStyled item xs={4}>
            <Tooltip title={<Typography fontSize={12}>Order</Typography>}>
              <IconDivStyled onClick={() => navigate("/Order")}>
                <IconeStyled>menu</IconeStyled>
              </IconDivStyled>
            </Tooltip>
          </GridMenuStyled>
          <GridMenuStyled item xs={4}>
            <Tooltip title={<Typography fontSize={12}>Help</Typography>}>
              <IconDivStyled onClick={() => navigate("/Help")}>
                <IconeStyled>question_mark</IconeStyled>
              </IconDivStyled>
            </Tooltip>
          </GridMenuStyled>
        </Grid>
      </ContainerMenuStyled>
    </ContainerStyled>
  );
};
