import React from 'react'
import {
  AdminMatchDetailContainer,
  Title
} from './admin-match-detail.styles.jsx';


import AdminMatchDetailItem from '../admin-match-detail-item/admin-match-detail-item.component';
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
      <AdminMatchDetailContainer>
          <Title>Match Detail</Title>
        {
          matches
          .filter((match, id) => id === this.props.id - 1)
          .map((match) =>  (
            <AdminMatchDetailItem key={match.id} id={match.id} match={match} isEdit />
          ))
      }
      </AdminMatchDetailContainer>
    )
  }
}