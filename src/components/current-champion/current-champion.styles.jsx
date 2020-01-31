import styled, {css}from 'styled-components';

import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';
import { ReactComponent as ChampIcon } from '../../assets/icon-champion.svg';

import { TitleColor, SubTableColor } from '../../global.styles';

const IconStyles = css`
    height: 80px;
    width: 80px;
`;

export const CurrentChampionContainer = styled.div`
    background-color: ${SubTableColor};
    min-width: 300px;
    min-height: 300px;
    padding: 10px
    flex-grow: 1;

    @media screen and (max-width: 800px) {
        padding: 0; 
    }
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    padding-bottom: 30px;
`;

export const IconContainer = styled.div`
    padding: 20px;
    text-align: center;
`;

export const TitleContainer = styled.div`
    display: flex;
`;

export const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0px 0;
`;

export const Team = styled.div`
    font-size: 18px;
    text-align: center;
    padding-left: 5px;
`;

export const TeamIcon = styled(BlueIcon)`
    ${IconStyles}
`;

export const ChampionIcon = styled(ChampIcon)`
    height: 20px;
    width: 20px;
`;


// .current-champion {
//     width: 250px;
//     height: 250px;
//     background-color: #00BFFF;
//     padding: 30px;
//     margin: 20px;
//     text-align: center;

//     h3 {
//         padding: 10px;
//     }

//     .icon {
//         width: 80px;
//         height: 80px;
//         display: inline-block;
//         vertical-align: middle;
//     }

//     .team {
//         font-weight: bold;
//         font-size: 20px;
//         padding: 15px;
//     }
// }