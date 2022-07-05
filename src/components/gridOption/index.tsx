import { Container, Grid } from "@mui/material";
import { Option } from "../option/index";
import * as Styled from "./styled";
export const GridOption = ({ data }: { data: any }) => {
  return (
    <Container>
      <Styled.GridOption container spacing={3}>
        {data.mocks.map((option: Mock, index: number) => (
          <Grid key={index} item xs={4}>
            <Option src={option.src} title={option.title} />
          </Grid>
        ))}
      </Styled.GridOption>
    </Container>
  );
};

type Mock = {
  src: string;
  title: string;
};
