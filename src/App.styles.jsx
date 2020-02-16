import styled from 'styled-components';

import { MainBackgroundColor } from './global.styles';

export const AppContainer= styled.div`

`;

export const BodyContainer= styled.div`
    padding: 15px;

    @media screen and (max-width: 800px) {
        padding: 5px 0;
    }
`;

export const Body = styled.div`
    padding: 0 0px;
    width: 80%;
    float: right;
    background-color: ${MainBackgroundColor};

    @media screen and (max-width: 800px) {
        width: 85vw;
    }
`;