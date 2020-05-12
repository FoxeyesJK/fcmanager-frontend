import styled, { css } from 'styled-components';
import { ReactComponent as AssistIcon } from '../../assets/icon-soccershoes.svg';
import { ReactComponent as ScoreIcon } from '../../assets/icon-soccerball-white.svg';

const getRecordIconStyles = props => {
    if (!props.isHomeTeam)
        return ReverseIcons
}

const AdminIconStyles = css`
    height: 24px;
    width: 24px;
    margin:auto;
    margin: auto 5px;

    @media screen and (max-width: 800px) {
        height: 20px;
        width: 20px;
    }
`;

const IconStyles = css`
    margin: 0 5px;
    height: 20px;
    width: 20px;
`;

const ReverseIcons = css`
    flex-direction: row-reverse;
`;

export const RecordDetailItemContainer = styled.div`
    border-bottom: 1px solid #efefef;
`;

export const RecordContainer = styled.div`
    padding: 10px;
`;

export const Player = styled.div`
    display: flex;
    padding: 3px 0;
    ${getRecordIconStyles}
`;

export const PlayerName = styled.div`
    font-size: 14px;
    padding: 0px 5px;

    @media screen and (max-width: 800px) {
        font-size: 12px;
    }
`;


export const StyledAssistIcon = styled(AssistIcon)`
    ${props => props.admin ? AdminIconStyles : IconStyles} 
`;

export const StyledScoreIcon = styled(ScoreIcon)`
    ${props => props.admin ? AdminIconStyles : IconStyles} 
`;
