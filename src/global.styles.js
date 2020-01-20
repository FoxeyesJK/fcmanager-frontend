import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
    font-family: 'Open Sans', sans-serif;
    background-color: #361556;
    }

    div {
    color:white;
    }

    a {
    color: white;
    }

    .option {
    color: white;
    }

    h1 {
    color: white;
    }

    h3 {
    color: white;
    }

    table {
    border-collapse: collapse;
    }

    th {
    color: white;
    }

    td {
    color: white;
    }

    .icon {
    width: 14px;
    height: 14px;
    }

    // tr:nth-child(even) {background-color: #2e1452;}
    // tr:nth-child(odd) {background-color: #3e1964;}

    a {
    text-decoration: none;
    color: black;
    }

    * {
    box-sizing: border-box;
    }
`;