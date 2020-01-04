import React from 'react'
import './admin-match-detail.styles.scss';


import MatchItem from '../match-item/match-item.component';
import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';

import MATCH_DATA from '../../pages/league/match2.data';


export default class AdminMatchDetail extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    count: 0,
    selectedId: 0,
    matches: MATCH_DATA
  }
}

// handleClick = (id) => {

//   // const { name, value } = event.target;
//   console.log(id);
//   this.setState({ selectedId: id })
// }
  render() {
    const { matches } = this.state;
    return (
      <div className='admin-match-detail'>
        {
          matches
          .filter((match, id) => id === this.props.id - 1)
          .map((match) =>  (
            <MatchItem key={match.id} id={match.id} match={match} isEdit />
          ))
      }
      </div>
    )
  }
}