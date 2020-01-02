import React from 'react'
import './admin-score-item.styles.scss';

const AdminScoreItem = (score) => {
  const { home, away } = score;
    
  return (
  <tr className='admin-score-item'>
      <td className='home'>{home}</td>
      <td className='location'>vs</td>
      <td className='away'>{away}</td>
  </tr>
  );
}

export default AdminScoreItem;