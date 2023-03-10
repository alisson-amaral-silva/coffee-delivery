import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        min-width: auto;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple']};
    }

    body {
        background: ${(props) => props.theme['background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
        min-width: auto;
            margin:0px;
            height:100vh;
            overflow:auto;
    }
    body, input,textarea, button,span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
