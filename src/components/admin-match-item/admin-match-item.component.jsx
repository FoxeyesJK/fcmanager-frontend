import React from 'react'
import './admin-match-item.styles.scss';

import AdminRecord from '../admin-record/admin-record.component';
import CustomIconButton from '../custom-icon-button/custom-icon-button.component';

const AdminMatchItem = ({id, handleClick, home, away}) => {
  //const { home, away } = match;
    
  return (
    <div className='admin-match-item'>
          <div className='column'>
            <span className='home'>{home}</span>
            <AdminRecord />
          </div>
          <div className='column'>
            <span className='score'>1</span>
            <span className=''>vs</span>
            <span className='score'>1</span>
          </div>
          <div className='column'>
            <span className='away'>{away}</span>
            <AdminRecord />
          </div>
          <CustomIconButton type='edit' id={id} handleClick={handleClick} />
    </div>
  );
}

export default AdminMatchItem;


// class AdminMatchItem extends React.Component {
//   constructor(props) {
//     super(props);
    

//     this.state = {

//     }
// }

// // handleClick = event => {

// //   this.setState({ isEditClicked: true });
// // }

// // handleClick = event => {
// //   const { isEditClicked } = event.target;

// //   this.setState({ 
// //     [isEditClicked]: true //dynamically setting value
// //   });
// // }

//   render () {
//     //const { isEditClicked } = this.state;
// console.log(this.state);
//   return (
//     <div className='admin-match-item'>
//           <div className='column'>
//             <span className='home'>{this.props.home}</span>
//             <AdminRecord />
//           </div>
//           <div className='column'>
//             <span className='score'>1</span>
//             <span className=''>vs</span>
//             <span className='score'>1</span>
//           </div>
//           <div className='column'>
//             <span className='away'>{this.props.away}</span>
//             <AdminRecord />
//           </div>
//           <CustomIconButton type='edit' handleClick={this.handleClick} />
//     </div>
//   );
//   }
// }

// export default AdminMatchItem;