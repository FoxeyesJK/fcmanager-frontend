import React from 'react'
import './admin-match-item.styles.scss';

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
    <div className='admin-match-item' onClick={() => this.props.handleClick(this.props.id)}>
          <div className='column'>
            <span className='home'>{match.HomeTeamName}</span>
          </div>
          <div className='column'>
            <span className='score'>{match.HomeScore}</span>
            <span className=''>vs</span>
            <span className='score'>{match.AwayScore}</span>
          </div>
          <div className='column'>
            <span className='away'>{match.AwayTeamName}</span>
          </div>
    </div>
  );
  }
}

export default AdminMatchItem;