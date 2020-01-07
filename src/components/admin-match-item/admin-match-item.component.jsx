import React from 'react'
import {
  AdminMatchData,
  TableHomeColumn,
  TableAwayColumn,
  TableScoreColumn,
  TableData
} from './admin-match-item.styles.jsx';

import AdminRecord from '../admin-record/admin-record.component';
import CustomIconButton from '../custom-icon-button/custom-icon-button.component';

// const AdminMatchItem = ({id, handleClick, home, away}) => {
//   //const { home, away } = match;
    
//   return (
//     <div className='admin-match-item'>
//           <div className='column'>
//             <span className='home'>{home}</span>
//             <AdminRecord />
//           </div>
//           <div className='column'>
//             <span className='score'>1</span>
//             <span className=''>vs</span>
//             <span className='score'>1</span>
//           </div>
//           <div className='column'>
//             <span className='away'>{away}</span>
//             <AdminRecord />
//           </div>
//           <CustomIconButton type='edit' id={id} handleClick={handleClick} />
//     </div>
//   );
// }

// export default AdminMatchItem;


class AdminMatchItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedId: 0
    }
  }

// handleClick = event => {

//   this.setState({ isEditClicked: true });
// }

  render () {
    const { selectedId } = this.state;
    const { match } = this.props;


  return (
    <AdminMatchData onClick={() => this.props.handleClick(this.props.id)}>
      <TableHomeColumn>
        <TableData>{match.HomeTeamName}</TableData>
      </TableHomeColumn>
      <TableScoreColumn>
        <TableData>{match.HomeScore}</TableData>
      </TableScoreColumn>
      <TableScoreColumn>
        <TableData>{match.AwayScore}</TableData>
      </TableScoreColumn>
      <TableAwayColumn>
        <TableData>{match.AwayTeamName}</TableData>
      </TableAwayColumn>
    </AdminMatchData>
  );
  }
}

export default AdminMatchItem;