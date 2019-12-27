import React from 'react';

import './standings.styles.scss';

import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';
import { ReactComponent as RedIcon } from '../../assets/icon-red.svg';
import { ReactComponent as YellowIcon } from '../../assets/icon-yellow.svg';

const Standings = () => {
  return (
    <div className='standings'>
      <h3>Standings</h3>
      <table className='standing-table'>
      <tr className='standing-header-row'>
        <th>Team</th>
        <th></th>
        <th>Played</th>
        <th>Won</th>
        <th>Draws</th>
        <th>Lost</th>
        <th>For</th>
        <th>Against</th>
        <th>Difference</th>
        <th>Points</th>
      </tr>
      <tr className='standing-row'>
        <td>1</td>
        <td className='team'><BlueIcon className='icon' /> Blue Team</td>
        <td>6</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>6</td>
        <td>3</td>
        <td className='points'>3</td>
      </tr>
      <tr className='standing-row'>
        <td>2</td>
        <td className='team'><RedIcon className='icon' /> Red Team</td>
        <td>4</td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>5</td>
        <td>2</td>
        <td className='points'>3</td>
      </tr>
      <tr className='standing-row'>
        <td>3</td>
        <td className='team'><YellowIcon className='icon' /> Yellow Team</td>
        <td>4</td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>3</td>
        <td>0</td>
        <td className='points'>3</td>
      </tr>
    </table>
  </div>
  )
}

export default Standings;

