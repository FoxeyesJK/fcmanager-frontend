import styled, { css } from 'styled-components';

const TextFontStyles = css`
    color: #FFFFFF;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 20px;
`;

export const LogoContainer = styled.div`
    width: 50px;
    height: 50px;
    margin: auto 0;

    &::before {
        content: "";
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 50%;
        display: block;
        position: absolute;
    }
`;

export const TextContainer = styled.div`
    padding: 5px 10px;
`;

export const Title = styled.div`
    font-size: 16px;
    padding: 0px 10px;
    font-weight: bold;
    ${TextFontStyles}
`;

export const SubTitle = styled.div`
    font-size: 12px;
    padding: 0px 10px;
    width: 300px;

    ${TextFontStyles}

    @media screen and (max-width: 800px) {
        width: 50vw;
    }
`;

export const LogoImg = styled.img`
    width: 100%;
    height: 100%;
    padding: 5px;
    position: relative;
`;