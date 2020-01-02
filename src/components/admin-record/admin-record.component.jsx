import React from 'react'
import './admin-record.styles.scss';

import ScoreItem from '../admin-score-item/admin-score-item.component';

import SCORE_DATA from '../../data/admin-score.data';

export default class AdminScore extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
      scores: SCORE_DATA
    }
  }

    render() {
      const { count, scores } = this.state;
      return (
        (
          <div className='admin-score'>
              <span>G: Nathan Jeong</span>
              <span> - A: Nathan Jeong</span>
          </div>
        )
      )
    }
  }
