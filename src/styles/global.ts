import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: Arial;
        text-decoration: none;
        list-style: none;
    }

    body {
        background-color: rgb(245, 245, 245);
    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content center;
        align-items: center;
        padding-top: 40px;
    }
`;
