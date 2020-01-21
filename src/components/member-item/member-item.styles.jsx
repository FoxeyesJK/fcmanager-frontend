import styled, { css } from 'styled-components';

export const MemberItemContainer = styled.div`
    background-color: #2e1249;
    border-radius: 10px;

    @media screen and (max-width: 800px) {
        width: 80vw;
        height: 15vh;
        font-size: 10px;
    }
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const IconContainer = styled.div`
    display: flex;
    padding: 0 5px;
`;

export const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #4d1f7a;
    border-radius: 0 0 10px 10px;
    padding: 5px;

    @media screen and (max-width: 800px) {
        height: 130px;
    }
`;

export const ImageContainer = styled.div`

`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: #3e1964
    margin-left: 5px;
    border-radius: 0 10px 10px 0;

    @media screen and (max-width: 800px) {
        width: 70%;
        height: 100%;
    }
`;

export const Name = styled.div`
    padding: 5px 10px;
    font-weight: bold;
`;

export const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    background-size: cover;
    border-radius: 10px 0 0 10px;

    @media screen and (max-width: 800px) {
        width: 120px;
        height: 120px;
    }
`;

export const Text = styled.div`
    padding: 5px;
    
    @media screen and (max-width: 800px) {
        padding: 0;
    }
`;


