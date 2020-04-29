import styled from 'styled-components';

import { TitleColor } from '../../global.styles';

export const MemberPage = styled.div`
    width: 100%;
    padding: 0 40px;

    @media screen and (max-width: 800px) {
        padding: 0 10px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
`;  

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    padding: 5px 3px;
`;  

export const MemberUpsertContainer = styled.div`

`;  

export const MemberListContainer = styled.div`
    width: 100%;
`;  

export const MemberContainer = styled.div`
    display: flex;

    @media screen and (max-width: 800px) {
        display: block;
    }
`;  
