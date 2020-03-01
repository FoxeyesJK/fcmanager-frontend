import styled, { css } from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

import { ReactComponent as AssistIcon } from '../../assets/icon-soccershoes.svg';
import { ReactComponent as ScoreIcon } from '../../assets/icon-football.svg';

import { MainTableColor } from '../../global.styles';

const IconStyles = css`
    height: 16px;
    width: 16px;
`;

export const FixtureDetailItemContainer = styled.div`
    padding: ${props => props.isAdmin ? "30px 10px;" : "40px 60px"}

    @media screen and (max-width: 1200px) {
        padding: 0px 0px;
    }

    @media screen and (max-width: 800px) {
        padding: ${props => props.isAdmin ? "10px 10px;" : "20px 60px"}
    }

    @media screen and (max-width: 600px) {
        padding: ${props => props.isAdmin ? "10px 10px;" : "30px 80px"}
    }


    @media screen and (max-width: 450px) {
        padding: ${props => props.isAdmin ? "10px 10px;" : "10px 10px"}
    }
`;

export const FormContainer = styled.form`

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

export const TeamIcon = styled.div`
    background-image: url(${props => props.homeTeamLogoUrl});
    background-size: 70px;
    width: 70px;
    height: 70px;
    outline: none;

    @media screen and (max-width: 1500px) {
        background-size: 45px;
        width: 45px;
        height: 45px;
    }

    @media screen and (max-width: 800px) {
        background-size: 45px;
        width: 45px;
        height: 45px;
    }
`;

export const IconContainer = styled.div`
    padding: 10px;
`;

export const ScoreContainer = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
    letter-spacing: 10px;
    margin: auto;

    @media screen and (max-width: 1600px) {
        font-size: 20px
    }

    @media screen and (max-width: 800px) {
        font-size: 30px
    }

    @media screen and (max-width: 500px) {
        font-size: 16px
    }
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
    width: 45%;
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
    background-color: ${MainTableColor};
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
