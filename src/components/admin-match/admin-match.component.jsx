import React from 'react'
import './admin-match.styles.scss';

const AdminMatch = () => (
  <div className='admin-match'>
      <h3>Match</h3>
      <table className='admin-match-table'>
        <tr>
          <th className='title'>Home</th>
          <th className='date'></th>
          <th className='time'>Away</th>
        </tr>
        <tr className=''>
          <td className='date'>02/20/2019(Sat)</td>
          <td className='time'>9:30AM</td>
          <td className='title'>New Jersey FC Team Match</td>
        </tr>
      </table>
  </div>
)

export default AdminMatch;
