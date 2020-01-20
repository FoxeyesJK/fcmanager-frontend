import styled, { css } from 'styled-components';

export const MemberItemContainer = styled.div`
    width: 340px;
    height: 160px;
    background-color: #2e1249;
    border-radius: 10px;
`;

export const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #4d1f7a;
    border-radius: 0 0 10px 10px;
    padding: 5px;
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
`;

export const Text = styled.div`
    padding: 5px 5px;
`;


