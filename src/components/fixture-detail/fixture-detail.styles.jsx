import styled from 'styled-components';

import { TitleColor, SubBackgroundColor } from '../../global.styles';

export const FixtureDetailContainer = styled.div`
    width: 35%;
    background-color: ${SubBackgroundColor};
    margin-left: 40px;
    margin-top: 30px;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin: 0;
    }
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    padding: 5px 5px;
`;