import React from 'react';

import {
  Title,
  FixtureDetailContainer
} from './fixture-detail.styles.jsx';

import FixtureDetailItem from '../fixture-detail-item/fixture-detail-item.component';

export default class FixtureDetail extends React.Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    return (
        <FixtureDetailContainer>
          <div>{this.props.id}</div>
            <Title>{this.props.title}</Title>
            {
              this.props.matches
              .filter((match, id) => id === this.props.id - 1)
              .map((match) =>  (
                <FixtureDetailItem key={match.id} id={match.id} match={match} />
              ))
            }
        </FixtureDetailContainer>
    )
  }
}