import styled, { css } from 'styled-components';

import { MainTableColor, SubBackgroundColor } from '../../global.styles';

export const MemberItemContainer = styled.div`
    // background-color: ${SubBackgroundColor};
    // border-radius: 10px;
    //width: 20%;
    //min-width: 220px;
    display: flex;
    flex-direction: column;
    // height: 300px;
    position: relative;

    @media screen and (max-width: 800px) {
        //width: 50%;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: ${SubBackgroundColor};

`;

export const IconContainer = styled.div`
    display: flex;
`;

export const ContentContainer = styled.div`
    width: 100%;
    height: 220px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    
    @media screen and (max-width: 767px) {
        height: 200px;
    }
    
    @media screen and (max-width: 415px) {
        height: 100px;
    }
`;

export const FooterContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 5%;
    text-align: center;
    top: 85%;
    font-size: 20px;

    @media screen and (max-width: 767px) {
        font-size: 16px;
    }

    @media screen and (max-width: 415px) {
        font-size: 10px;
        top: 80%;
    }
`;

export const Name = styled.div`
    padding: 0 10px;
    font-weight: bold;
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    

    &:hover {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`;

export const Text = styled.div`
    padding: 5px;
`;



// export const MemberItemContainer = styled.div`
//     background-color: ${SubBackgroundColor};
//     border-radius: 10px;

//     @media screen and (max-width: 800px) {
//         width: 80vw;
//         height: 15vh;
//         font-size: 10px;
//     }
// `;

// export const NameContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
// `;

// export const IconContainer = styled.div`
//     display: flex;
//     padding: 0 5px;
// `;

// export const ContentContainer = styled.div`
//     display: flex;
//     width: 100%;
//     height: 100%;
//     background-color: #4d1f7a;
//     border-radius: 0 0 10px 10px;
//     padding: 5px;

//     @media screen and (max-width: 800px) {
//         height: 130px;
//     }
// `;

// export const ImageContainer = styled.div`

// `;

// export const TextContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 300px;
//     background-color: ${MainTableColor}
//     margin-left: 5px;
//     border-radius: 0 10px 10px 0;

//     @media screen and (max-width: 800px) {
//         width: 70%;
//         height: 100%;
//     }
// `;

// export const Name = styled.div`
//     padding: 5px 10px;
//     font-weight: bold;
// `;

// export const ProfileImage = styled.img`
//     width: 150px;
//     height: 150px;
//     background-size: cover;
//     border-radius: 10px 0 0 10px;

//     @media screen and (max-width: 800px) {
//         width: 120px;
//         height: 120px;
//     }
// `;

// export const Text = styled.div`
//     padding: 5px;
    
//     @media screen and (max-width: 800px) {
//         padding: 0;
//     }
// `;


