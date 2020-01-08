import React from 'react'
import { 
  AdminMatchContainer,
  TitleContainer,
  Title,
  AdminMatchTable,
  TableHeader,
  TableBody,
  MatchDate,
  MatchTitle
}
from './admin-match.styles.jsx';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';

import MatchItem from '../admin-match-item/admin-match-item.component';
import MatchAddItem from '../admin-match-add-item/admin-match-add-item.component';
import MatchDetail from '../admin-match-detail/admin-match-detail.component';

import MATCH_DATA from '../../pages/league/match2.data';

export default class AdminMatch extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    count: 0,
    selectedId: 1,
    matches: MATCH_DATA
  }
}

handleClick = (id) => {

  // const { name, value } = event.target;
  this.setState({ selectedId: id })
}


  render() {
    const { count, selectedId, matches } = this.state;

    return (
      <AdminMatchContainer>
          <TitleContainer>
            <Title>MATCHES</Title>
            <CustomIconButton type='add' handleClick={this.addScheduleRow} />
          </TitleContainer>
          <AdminMatchTable>
            <TableHeader>
              <MatchDate>Sunday 27 October 2019</MatchDate>
              <MatchTitle>Fort Lee, NJ</MatchTitle>
            </TableHeader>
            <TableBody>
            {
              matches
              .filter((id) => id != selectedId)
              .map((match) => (
                <div>
                  {
                    <MatchItem key={match.id} id={match.id} match={match} handleClick={this.handleClick} />
                  }
                </div>
              ))
            }
            </TableBody>
          </AdminMatchTable>
              <MatchDetail id={selectedId} />
      </AdminMatchContainer>
    )
  }
}