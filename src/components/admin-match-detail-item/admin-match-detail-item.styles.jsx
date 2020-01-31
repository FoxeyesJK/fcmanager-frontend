import styled, { css } from 'styled-components';
import { ReactComponent as AssistIcon } from '../../assets/icon-soccershoes.svg';
import { ReactComponent as ScoreIcon } from '../../assets/icon-football.svg';

import { MainTableColor } from '../../global.styles';

const IconStyles = css`
    height: 16px;
    width: 16px;
`;

export const AdminMatchDetailItemContainer = styled.div`
    background-color: ${MainTableColor};
    padding: 30px;
    margin: 10px 10px;
`;


export const ScoreContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Team = styled.div`
    display: block;
    width: 150px;
    text-align: center;
`;

export const RecordContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    border-top: 1px solid #efefef;
    margin-top: 0px;
    padding: 5px 0;
`;

export const Player = styled.div`
    display:flex;
`;

export const StyledAssistIcon = styled(AssistIcon)`
    ${IconStyles}
`;

export const StyledScoreIcon = styled(ScoreIcon)`
    ${IconStyles}
`;



// .match-item {
//     width: 600px;
//     height: 200px;
//     background-color: 	#00BFFF;
//     padding: 30px;
//     margin: 20px;

//     .final-score-container {
//         display: flex;
//         justify-content: space-between;

        // .team {
        //     display: block;
        //     width: 100px;
        //     text-align: center;
        //     .icon {
        //         height: 48px;
        //         width: 48px;
        //         display: inline-block;
        //         vertical-align: middle;
        //     }
        // }

//         .final-score {
//             font-size: 32px;
//             margin: auto;
//             font-weight: bold;

//             .score {
//                 padding: 15px;
//             }
//         }
//     }

//     .record {
        // display: flex;
        // justify-content: space-between;
        // font-size: 12px;
        // border-top: 1px solid #efefef;
        // margin: 20px 0;
        // padding: 5px 0;

//         .player-container {
//             .player {
//                 display:flex;
//                 .icon {
//                     height: 13px;
//                     width: 13px;
//                     display: inline-block;
//                     vertical-align: middle;
//                     margin: 0 5px;
//                 }
//             }
//         }
//     }
// }