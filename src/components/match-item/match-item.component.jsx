import React from 'react';

import './match-item.styles.scss';

import { ReactComponent as RedIcon } from '../../assets/icon-red.svg';
import { ReactComponent as YellowIcon } from '../../assets/icon-yellow.svg';
import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';

import { ReactComponent as ScoreIcon } from '../../assets/icon-football.svg';
import { ReactComponent as AssistIcon } from '../../assets/icon-soccershoes.svg';

import FormDropdown from '../form-dropdown/form-dropdown.component';

const MatchItem = ({ match, isEdit }) => {
  const { HomeTeamName, HomeScore, AwayTeamName, AwayScore} = match;
 
  return (
    <div className='match-item'>
        <div className='final-score-container'>
          <div className='team'>
            {
              isEdit ? 
              <FormDropdown 
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
          </div>
          <div className='final-score'>
            <span className='score'>{HomeScore}</span>
            <span>  -  </span>
            <span className='score'>{AwayScore}</span>
          </div>
          <div className='team'>
            {
              isEdit ?
              <FormDropdown 
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
          </div>
        </div>
        <div  className='record'>
          <div className='player-container'>
            <div className='player'>
            <ScoreIcon className='icon' />
            {
              isEdit ?
              <FormDropdown 
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
              <FormDropdown 
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
              <FormDropdown 
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
              <FormDropdown 
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
        </div>
    </div>
  )
}

export default MatchItem;

