import React from 'react'
import './admin-match.styles.scss';

import { ReactComponent as AddIcon } from '../../assets/icon-add-button.svg';

const AdminMatch = () => (
  <div className='admin-match'>
      <h3>Match</h3>
      <table className='admin-match-table'>
        <tr>
          <th className=''>Home</th>
          <th className=''></th>
          <th className=''>Away</th>
        </tr>
        <tr className=''>
          <td className=''>Drop</td>
          <td className=''>  vs  </td>
          <td className=''>Drop</td>
        </tr>
        <tr className=''>
          <td className=''>Drop</td>
          <td className=''>  vs  </td>
          <td className=''>Drop</td>
        </tr>
        <tr className=''>
          <td className=''>Drop</td>
          <td className=''>  vs  </td>
          <td className=''>Drop</td>
        </tr>
        <tr className=''>
          <td className=''>Drop</td>
          <td className=''>  vs  </td>
          <td className=''>Drop</td>
        </tr>
        <tr className=''>
          <td className=''>Drop</td>
          <td className=''>  vs  </td>
          <td className=''>Drop</td>
        </tr>
        <tr className=''>
          <td className=''>Drop</td>
          <td className=''>  vs  </td>
          <td className=''>Drop</td>
        </tr>
        <tr className=''>
          <td className=''></td>
          <td className=''><AddIcon className='icon' /></td>
          <td className=''></td>
        </tr>
      </table>
  </div>
)

export default AdminMatch;
