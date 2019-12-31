import React from 'react'
import './admin-match-add-item.styles.scss';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';
import FormDropdown from '../form-dropdown/form-dropdown.component';

export default class AdminMatchAddItem  extends React.Component {
  constructor(props) {
      super(props);
      
      this.state = {
          home: '', 
          away: '', 
      }
  }

  render () {
      return (
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
        <td className=''><CustomIconButton type='add' /></td>
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
      )
  }
}
