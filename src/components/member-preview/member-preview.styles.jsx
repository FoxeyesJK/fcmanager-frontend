import styled, { css } from 'styled-components';

export const MemberPreivewContainer = styled.div`
    padding: 20px;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 800px) {
        padding: 20px 5px;
        width: 20vw;
        height: 200px;
    }
`;

export const TeamContainer = styled.div`
    display: flex;
    padding: 5px 3px;   
`;


export const MemberItemContainer = styled.div`
`;


export const Team = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: red;
`;
