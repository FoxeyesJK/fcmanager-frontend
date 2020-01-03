import React from 'react';
import { Link } from 'react-router-dom';
import './menu.styles.scss';

import { ReactComponent as SquadIcon } from '../../assets/icon-squad.svg';
import { ReactComponent as StrategyIcon } from '../../assets/icon-strategy.svg';
import { ReactComponent as PaymentIcon } from '../../assets/icon-payment.svg';
import { ReactComponent as ReportIcon } from '../../assets/icon-report.svg';

const Menu = ({ match, isSelectedOption }) => {
  console.log('match', match);
  return (
  <div className='menu'>
    <div className='menu-title'>
      <Link className='option' to='/member'>
        <h1>New Jersey FC</h1>
      </Link>
      <span>football club</span>
    </div>
    <div className='options'>
      <Link className={`${isSelectedOption ? 'selected-option' : ''} option`} to='/member'>
        <SquadIcon className='icon' />
        <span>Squad</span>
      </Link>
      <Link className='option' to='/strategy'>
        <StrategyIcon className='icon' />
        <span>Strategy</span>
      </Link>
      <Link className='option' to='/payment'>
        <PaymentIcon className='icon' />
        <span>Payment</span>
      </Link>
      <Link className='option' to='/league'>
        <ReportIcon className='icon' />
        <span>League</span>
      </Link>
      <Link className='option' to='/schedule'>
        <ReportIcon className='icon' />
        <span>Schedule</span>
      </Link>
      <Link className='option' to='/admin-league'>
        <ReportIcon className='icon' />
        <span>Admin-League</span>
      </Link>
      <Link className='option' to='/admin-member'>
        <ReportIcon className='icon' />
        <span>Admin-Member</span>
      </Link>
    </div>
  </div>
  )
};


export default Menu;