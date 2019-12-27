import React from 'react';

import './match-item.styles.scss';

import { ReactComponent as RedIcon } from '../../assets/icon-red.svg';
import { ReactComponent as YellowIcon } from '../../assets/icon-yellow.svg';
import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';

import { ReactComponent as ScoreIcon } from '../../assets/icon-football.svg';
import { ReactComponent as AssistIcon } from '../../assets/icon-soccershoes.svg';

const MatchItem = ({ item }) => {
  const { FirstTeam, FirstTeamFinalScore, FirstTeamScore, FirstTeamAssist, SecondTeam, SecondTeamFinalScore, SecondTeamScore, SecondTeamAssist } = item;
 
  return (
    <div className='match-item'>
        <div className='final-score-container'>
          <div className='team'>
            <RedIcon className='icon' />
            <span className='first-team'>{FirstTeam}</span>
          </div>
          <div className='final-score'>
            <span className='score'>{FirstTeamFinalScore}</span>
            <span>  -  </span>
            <span className='score'>{SecondTeamFinalScore}</span>
          </div>
          <div className='team'>
            <YellowIcon className='icon' />
            <span className='second-team'>{SecondTeam}</span>
          </div>
        </div>
        <div  className='record'>
          <div className='player'>
            <ScoreIcon className='icon' /><span className='scorer'>{FirstTeamScore}</span><br />
            <span>└</span><AssistIcon className='icon' /><span className='assist'>{FirstTeamAssist}</span>
          </div>
          <div className='player'>
            <span className='scorer'>{SecondTeamScore}</span><ScoreIcon className='icon' /><br />
            <span className='assist'>ㄴ{SecondTeamAssist}</span><AssistIcon className='icon' />
          </div>
        </div>
    </div>
  )
}

export default MatchItem;

