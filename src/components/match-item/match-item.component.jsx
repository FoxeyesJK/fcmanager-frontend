import React from 'react';

import {
  MatchItemContainer,
  ScoreContainer,
  TeamContainer,
  RecordContainer,
} from './match-item.styles.jsx';

import { ReactComponent as RedIcon } from '../../assets/icon-red.svg';
import { ReactComponent as YellowIcon } from '../../assets/icon-yellow.svg';
import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';

import { ReactComponent as ScoreIcon } from '../../assets/icon-football.svg';
import { ReactComponent as AssistIcon } from '../../assets/icon-soccershoes.svg';

import TeamDropdown from '../team-dropdown/team-dropdown.component';

const MatchItem = ({ match, isEdit, id }) => {
  const { HomeTeamName, HomeScore, AwayTeamName, AwayScore} = match;
 
  return (
    <MatchItemContainer>
        <ScoreContainer>
          <TeamContainer>
            {
              isEdit ? 
              <TeamDropdown 
              name='home'
              className='home team-name'
              dropdownItems={[
                { value: 'RED', id: 1 },
                { value: 'BLUE', id: 2 },
                { value: 'YELLOW', id: 3}
              ]}
              required
              /> :
              <div><RedIcon className='icon' /><br /><span className='first-team'>{HomeTeamName}</span></div>
            }
          </TeamContainer>
          <div className='final-score'>
            <span className='score'>{HomeScore}</span>
            <span>  -  </span>
            <span className='score'>{AwayScore}</span>
          </div>
          <TeamContainer>
            {
              isEdit ?
              <TeamDropdown 
                className='away team-name'
                name='away'
                dropdownItems={[
                  { value: 'RED', id: 1 },
                  { value: 'BLUE', id: 2 },
                  { value: 'YELLOW', id: 3}
                ]}
                required
              /> :
              <div><YellowIcon className='icon' /><br /><span className='second-team'>{AwayTeamName}</span></div>
            }
          </TeamContainer>
        </ScoreContainer>
        <RecordContainer>
          <div className='player-container'>
            <div className='player'>
            <ScoreIcon className='icon' />
            {
              isEdit ?
              <TeamDropdown 
                name='home'
                className='scorer'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              /> :
              <span className='scorer'>Nathan Jeong</span>
            }
            </div>
            <div className='player'>
            <span>└</span><AssistIcon className='icon' />
            {
              isEdit ?
              <TeamDropdown 
                name='home'
                className='assist'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              /> :
              <span className='assist'>Nathan Jeong</span>
            }
            </div>

          </div>
          <div className='player-container'>
            <div className='player'>
            {
              isEdit ?
              <TeamDropdown 
                name='home'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              /> :
              <span className='scorer'>Nathan Jeong</span>
            }
            <ScoreIcon className='icon' />
            </div>
            <div className='player'>
            {
              isEdit ?
              <TeamDropdown 
                name='home'
                dropdownItems={[
                  { value: 'Nathan Jeong', id: 1 },
                ]}
                required
              /> 
              :
              <span className='assist'>ㄴNathan Jeong</span>
            }
            <AssistIcon className='icon' />
            </div>
          </div>
        </RecordContainer>
    </MatchItemContainer>
  )
}

export default MatchItem;

