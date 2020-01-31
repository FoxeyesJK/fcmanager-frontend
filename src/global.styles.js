import { createGlobalStyle } from 'styled-components';

export const MainTableColor = '#3e1964';
export const SubTableColor = '#321450';
export const MainBackgroundColor = '#361556';
export const SubBackgroundColor = '#2e1249';
export const TitleColor = '#FFFD5E';

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
    // tr:nth-child(odd) {background-color: ${MainTableColor};}

    a {
    text-decoration: none;
    color: black;
    }

    * {
    box-sizing: border-box;
    }
`;