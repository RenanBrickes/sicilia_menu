import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
        scroll-behavior : smooth;
        margin : 0;
        padding : 0;
    }
    body {
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
        font-family: ${(props) => `${props.theme.font.family.text}`}
    }
    h1, h2, h3 {
        font-family: ${(props) => `${props.theme.font.family.title}`}
    }
`;