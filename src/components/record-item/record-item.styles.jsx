import styled, { css } from 'styled-components';
import { Dropdown } from 'semantic-ui-react';
import { ReactComponent as AssistIcon } from '../../assets/icon-soccershoes.svg';
import { ReactComponent as ScoreIcon } from '../../assets/icon-soccerball-white.svg';
import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';

import { MainTableColor } from '../../global.styles';

const getRecordIconStyles = props => {
    if (!props.isHomeTeam)
        return ReverseIcons
}

const AdminIconStyles = css`
    height: 24px;
    width: 24px;
    margin:auto;
`;

const IconStyles = css`
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
`;


export const StyledAssistIcon = styled(AssistIcon)`
    ${props => props.isRecordEditable ? AdminIconStyles : IconStyles} 
`;

export const StyledScoreIcon = styled(ScoreIcon)`
    ${props => props.isRecordEditable ? AdminIconStyles : IconStyles} 
`;
