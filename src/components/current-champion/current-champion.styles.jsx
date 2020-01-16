import styled, {css}from 'styled-components';
import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';

const IconStyles = css`
    height: 80px;
    width: 80px;
`;

export const CurrentChampionContainer = styled.div`
    text-align: center;
    background-color: #321450;
    width: 300px;
    height: 300px;
    padding: 20px
    flex-grow: 1;
`;

export const Title = styled.div`
    padding: 25px 0;
    font-size: 18px;
`;

export const IconContainer = styled.div`
    padding: 10px;
`;

export const Team = styled.div`
    font-size: 18px;
    padding: 10px;
`;

export const TeamIcon = styled(BlueIcon)`
    ${IconStyles}
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