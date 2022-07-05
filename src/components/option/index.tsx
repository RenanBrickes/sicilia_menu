import { CardMedia } from "@mui/material";
import * as Styled from "./styled";
export const Option = ({ src, title }: { src: string; title: string }) => {
  return (
    <Styled.Option onClick={() => console.log("AQUI")}>
      <CardMedia component="img" height="140" width="240" image={src} />
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Content>
    </Styled.Option>
  );
};
