import { CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";

export const Option = ({ src, title }: { src: string; title: string }) => {
  let navigate = useNavigate();
  return (
    <Styled.Option onClick={() => navigate(`/${title}`)}>
      <CardMedia component="img" height="140" width="240" image={src} />
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Content>
    </Styled.Option>
  );
};
