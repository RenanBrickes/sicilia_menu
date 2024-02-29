import { Grid } from "@mui/material";
import { Option } from "../option/index";
import { GridOptionStyled, ContainerGridStyled } from "./styled";
import { Mock } from "./types";
export const GridOption = ({ data }: { data: any }) => {
  return (
    <ContainerGridStyled>
      <GridOptionStyled container spacing={3}>
        {data.mocks.map((option: Mock, index: number) => (
          <Grid key={index} item xs={4}>
            <Option src={option.src} title={option.title} />
          </Grid>
        ))}
      </GridOptionStyled>
    </ContainerGridStyled>
  );
};


