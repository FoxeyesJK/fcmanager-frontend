import React from 'react'
import {
  TableRow,
  Team
} from './admin-match-add-item.styles.jsx';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';
import FormDropdown from '../dropdown-team/dropdown-team.component';

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
        <TableRow>
        <Team>
          <FormDropdown 
            name='home'
            dropdownItems={[
              { value: 'RED', id: 1 },
              { value: 'BLUE', id: 2 },
              { value: 'YELLOW', id: 3}
            ]}
            required
          />
        </Team>
        <Team>
          <FormDropdown 
            name='home'
            dropdownItems={[
              { value: 'RED', id: 1 },
              { value: 'BLUE', id: 2 },
              { value: 'YELLOW', id: 3}
            ]}
            required
          />
        </Team>
      </TableRow>
      )
  }
}