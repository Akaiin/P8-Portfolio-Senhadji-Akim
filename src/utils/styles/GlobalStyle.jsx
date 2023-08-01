import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body{
        display: flex;
        flex-direction: column;
        margin: auto;
    }
    ul{
        list-style-type: none;
    }

`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle
