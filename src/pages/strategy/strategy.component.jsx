import React from 'react';

import './strategy.styles.scss';
import soccerFieldImg from '../../assets/soccer-field.png';

import MEMBER_DATA from '../member/member.data.js';
import SquadList from '../../components/squad-list/squad-list.component';

class StrategyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: MEMBER_DATA
    }
  }

    render () {
      const {members} = this.state;
      return (
        <div className='strategy-page'>
          <div className='squad-position'>
            <img className='soccer-field-img' src={soccerFieldImg} height='1000' width='700' />
            <div className='squad-position-item'>
            Hello
            </div>
          </div>
          {
              members.map(({ id, ...otherMemberProps }) => (
                <SquadList key={id} {...otherMemberProps} />
              ))
          }
        </div>)
    }
  }

export default StrategyPage;