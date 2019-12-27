import React from 'react';

import './squad-list.styles.scss';

import SquadListItem from '../../components/squad-list-item/squad-list-item.component';

const SquadList = ({ items }) => {
  return (
      <table className='squad-list'>
        <tr>
          <th>Player</th>
          <th>Ability</th>
          <th>Position</th>
          <th>Age</th>
        </tr>
        {items
          .map(item => (
            <SquadListItem key={item.id} item={item}/>
          ))}
      </table>
  )
}

export default SquadList;

