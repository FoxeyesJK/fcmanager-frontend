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
    
    // this.state = {
    //   selectedId: 0
    // }
    this.state = {
      selectedId: 0
    }
  }

// handleClick = event => {

//   this.setState({ isEditClicked: true });
// }
handleClick = (id) => {

  // const { name, value } = event.target;
  console.log(id);
  this.setState({
    selectedId: id
  })
}

  render () {
    //const { isEditClicked } = this.state;
    const { selectedId } = this.state;
    
  return (
    <div className='admin-match-item'>

                 {selectedId}
                 {selectedId == 1 ? <div>hi</div> : <div>no</div>}
          <div className='column'>
            <span className='home'>{this.props.home}</span>
            <AdminRecord />
          </div>
          <div className='column'>
            <span className='score'>1</span>
            <span className=''>vs</span>
            <span className='score'>1</span>
          </div>
          <div className='column'>
            <span className='away'>{this.props.away}</span>

            <AdminRecord />
          </div>
          <CustomIconButton type='edit' id={this.props.id} handleClick={this.handleClick} />
    </div>
  );
  }
}

export default AdminMatchItem;