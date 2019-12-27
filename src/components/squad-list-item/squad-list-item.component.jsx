import React from 'react';

import './squad-list-item.styles.scss';

const SquadListItem = ({ item }) => {
  const { name, position, age } = item;
  return (
    <tr>
      <td className='name'>{name}</td>
      <td className='ability'>*****</td>
      <td className='position'>{position}</td>
      <td className='age'>{age}</td>
    </tr>
  )
}

export default SquadListItem;


