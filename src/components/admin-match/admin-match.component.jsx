import React from 'react'
import './admin-match.styles.scss';

import { ReactComponent as AddIcon } from '../../assets/icon-add-button.svg';

import FormDropdown from '../form-dropdown/form-dropdown.component';

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
          <td className=''>
            <FormDropdown 
              name='home'
              dropdownItems={[
                { value: 'RED', id: 1 },
                { value: 'BLUE', id: 2 },
                { value: 'YELLOW', id: 3}
              ]}
              required
            />
          </td>
          <td className=''><AddIcon className='icon' /></td>
          <td className=''>
            <FormDropdown 
              name='home'
              dropdownItems={[
                { value: 'RED', id: 1 },
                { value: 'BLUE', id: 2 },
                { value: 'YELLOW', id: 3}
              ]}
              required
            />
          </td>
        </tr>
      </table>
  </div>
)

export default AdminMatch;
