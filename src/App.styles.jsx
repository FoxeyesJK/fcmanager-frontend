import styled from 'styled-components';

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
    width: 75%;
    float: right;
    background-color: #361556;

    @media screen and (max-width: 800px) {
        width: 85vw;
    }
`;