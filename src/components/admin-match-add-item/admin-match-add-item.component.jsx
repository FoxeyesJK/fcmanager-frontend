import React from 'react'
import './admin-match-add-item.styles.scss';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';
import FormDropdown from '../team-dropdown/team-dropdown.component';

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
        <div className='admin-match-item'>
        <div className=''>
          <FormDropdown 
            name='home'
            dropdownItems={[
              { value: 'RED', id: 1 },
              { value: 'BLUE', id: 2 },
              { value: 'YELLOW', id: 3}
            ]}
            required
          />
          <FormDropdown 
            name='home'
            dropdownItems={[
              { value: 'Nathan Jeong', id: 1 },
            ]}
            required
          />
          <FormDropdown 
            name='home'
            dropdownItems={[
              { value: 'Nathan Jeong', id: 1 },
            ]}
            required
          />
        </div>
        <div className=''><CustomIconButton type='add' /></div>
        <div className=''>
          <FormDropdown 
            name='home'
            dropdownItems={[
              { value: 'RED', id: 1 },
              { value: 'BLUE', id: 2 },
              { value: 'YELLOW', id: 3}
            ]}
            required
          />
          <FormDropdown 
            name='home'
            dropdownItems={[
              { value: 'Nathan Jeong', id: 1 },
            ]}
            required
          />
          <FormDropdown 
            name='home'
            dropdownItems={[
              { value: 'Nathan Jeong', id: 1 },
            ]}
            required
          />
        </div>
      </div>
      )
  }
}