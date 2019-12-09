import { createGlobalStyle } from 'styled-components';

const styles = createGlobalStyle`
    html, body, #root{ 
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #root{
        background: linear-gradient(180deg, rgba(193, 239, 146, 0.81) 0%, rgba(213, 236, 190, 0.81) 100%);
    }

    * {
        overflow: auto;
        box-sizing: border-box;
        outline: none;
    }
`

export default styles;