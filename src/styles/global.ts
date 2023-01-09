import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple']};
    }

    body {
        background: ${(props) => props.theme['background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
        ${media.lessThan('small')`
            margin:0px;
            width:100vw;
            height:100vh;
            overflow:auto;
        `}
    }
    body, input,textarea, button,span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
