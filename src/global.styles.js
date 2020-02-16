import { createGlobalStyle } from 'styled-components';

export const MainTableColor = '#000E2A';
export const SubTableColor = '#E4BF3F';
export const MainBackgroundColor = '#001131';
export const SubBackgroundColor = '#24324E';
export const TitleColor = '#FEDBC4';
export const HoverRowColor = '#24324E';
export const SelectedRowColor = 'rgb(254, 249, 246, 1)';
export const BorderColor = '#C0C0C0'

export const GlobalStyle = createGlobalStyle`
    body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${MainBackgroundColor};
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