import styled, { css } from 'styled-components';
import { ReactComponent as AssistIcon } from '../../assets/icon-soccershoes.svg';
import { ReactComponent as ScoreIcon } from '../../assets/icon-football.svg';

const IconStyles = css`
    height: 16px;
    width: 16px;
`;

export const RecordPreviewContainer = styled.form`
    border-top: 1px solid #efefef;
    font-size: 12px;
    margin-top: 20px;
    padding: 5px 0;
    width:100%;
`;

export const TeamRecordContainer = styled.div`
    display: flex;
    width:100%;
`;

export const HomeTeamRecord = styled.div`
    width: 50%;
    margin: 0;
    text-align: left;
`;

export const AwayTeamRecord = styled.div`
    width: 50%;
    margin: 0;
    text-align: right;
`;




export const Record = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PlayerContainer = styled.div`
    width: 45%;
    display:flex;
`;

export const Player = styled.div`
    padding: 0px 2px;
`;

export const ButtonContainer = styled.div`

`;

export const AddButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SaveButtonContainer = styled.div`
    width: 100%;
`


export const StyledAssistIcon = styled(AssistIcon)`
    ${IconStyles}
`;

export const StyledScoreIcon = styled(ScoreIcon)`
    ${IconStyles}
`;
