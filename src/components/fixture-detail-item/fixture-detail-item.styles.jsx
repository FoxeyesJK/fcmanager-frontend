import styled, { css } from 'styled-components';
import { Dropdown } from 'semantic-ui-react';
import { ReactComponent as AssistIcon } from '../../assets/icon-soccershoes.svg';
import { ReactComponent as ScoreIcon } from '../../assets/icon-football.svg';
import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';

const IconStyles = css`
    height: 16px;
    width: 16px;
`;

export const FixtureDetailItemContainer = styled.div`
    
    padding: ${props => props.isAdmin ? "30px 10px;" : "0px 60px"}

    @media screen and (max-width: 800px) {
        padding: 0px 10px;
    }
`;


export const TeamContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Record = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const HomeRecord = styled.div`
    text-align: left;
`;

export const AwayRecord = styled.div`
    text-align: right;
`;

export const TeamIcon = styled(BlueIcon)`
    width: 70px;
    height: 70px;

    @media screen and (max-width: 1200px) {
        width: 45px;
        height: 45px;
    }

    @media screen and (max-width: 800px) {
        width: 30px;
        height: 30px;
    }
`;

export const IconContainer = styled.div`
    padding: 10px;
`;

export const ScoreContainer = styled.div`
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
    letter-spacing: 10px;
    margin: auto;
`;

export const FixtureContainer = styled.div`
    text-align: center;
`;

export const LeagueContainer = styled.div`
    padding: ${props => props.isAdmin ? "10px 0px;" : "10x"}
    width: 100%;
`;

export const Schedule = styled.div`
    font-weight: bold;
    padding: 3px;
`;

export const LocationContainer = styled.div`
    padding: ${props => props.isAdmin ? "10px 0px;" : "0px 0px 30px 0px"}
`;


export const RecordContainer = styled.div`
    font-size: 12px;
    border-top: 1px solid #efefef;
    margin-top: 0px;
    padding: 5px 0;
`;

export const PlayerContainer = styled.div`
    display:flex;
`;

export const Player = styled.div`
    padding: 0px 2px;
`;

export const DateTimePickerContainer = styled.div`
    width: 240px;
    margin: auto;
`;


export const StyledDropdown = styled(Dropdown)`
    border: 1px solid #C0C0C0;
    transform: skew(-15deg);
    background-color: #3e1964;
    color: #C0C0C0;
    width: 100%;
    height: 30px;
    border-radius: 3px;
    cursor: pointer;
`;

export const StyledAssistIcon = styled(AssistIcon)`
    ${IconStyles}
`;

export const StyledScoreIcon = styled(ScoreIcon)`
    ${IconStyles}
`;
