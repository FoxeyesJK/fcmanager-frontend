import React from 'react'
import './admin-match-item.styles.scss';

const AdminMatchItem = (match) => {
  const { home, away } = match;
    
  return (
  <tr className='admin-match-item'>
      <td className='home'>{home}</td>
      <td className='location'>vs</td>
      <td className='away'>{away}</td>
  </tr>
  );
}

export default AdminMatchItem;
