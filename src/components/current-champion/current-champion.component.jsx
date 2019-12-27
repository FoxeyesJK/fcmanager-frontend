import React from 'react';

import './current-champion.styles.scss';

import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';

const CurrentChampion = () => {
  return (
    <div className='current-champion'>
      <h3>Current Champion</h3>
      <BlueIcon className='icon' />
      <div className="team">
        <span>Blue</span>
      </div>
    </div>
  )
}

export default CurrentChampion;