import { Grid } from "@mui/material";
import { Option } from "../option/index";
import * as Styled from "./styled";
export const GridOption = ({ data }: { data: any }) => {
  return (
    <Styled.ContainerGrid>
      <Styled.GridOption container spacing={3}>
        {data.mocks.map((option: Mock, index: number) => (
          <Grid key={index} item xs={4}>
            <Option src={option.src} title={option.title} />
          </Grid>
        ))}
      </Styled.GridOption>
    </Styled.ContainerGrid>
  );
};

type Mock = {
  src: string;
  title: string;
};
