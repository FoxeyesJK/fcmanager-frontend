import styled from 'styled-components';

export const MemberPreivewContainer = styled.div`
    padding: 20px;
    height: 100%;
    width: 100%;
`;

export const TeamContainer = styled.div`
    display: flex;
    padding: 5px 3px;   
`;


export const MemberItemContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: 30px;
    
    @media screen and (max-width: 767px) {
            grid-template-columns: repeat(2, minmax(100px, 1fr));
            grid-gap: 10px;
        }
`;


export const Team = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: red;
`;
