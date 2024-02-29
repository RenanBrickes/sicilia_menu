import { CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ContentStyled, OptionStyled, TitleStyled } from "./styled";

export const Option = ({ src, title }: { src: string; title: string }) => {
  let navigate = useNavigate();
  return (
    <OptionStyled onClick={() => navigate(`/${title}`)}>
      <CardMedia component="img" height="140" width="240" image={src} />
      <ContentStyled>
        <TitleStyled>{title}</TitleStyled>
      </ContentStyled>
    </OptionStyled>
  );
};
