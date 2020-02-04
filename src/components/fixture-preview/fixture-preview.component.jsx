import React from 'react';
import moment from 'moment';

import {
  FixturePreviewContainer,
  Title,
  TableBody
} from './fixture-preview.styles.jsx';

import FixtureItem from '../fixture-item/fixture-item.component';

const FixturePreview = ({ ScheduledOn, matches, type, handleClick }) => {
  return (
    <FixturePreviewContainer>
      <Title>{moment(ScheduledOn).format('ddd')}, {moment(ScheduledOn).add(10, 'days').calendar()}</Title>
      {/* <MatchItemContainer>
        {
        matches
            .filter((match, idx) => idx < 3)
            .map(match => (
                <MatchItem key={match.id} match={match} />
        ))
        }
        </MatchItemContainer> */}
        <TableBody>
        {
          !!matches ? 
          matches.map(match => (
            <FixtureItem key={match.id} id={match.id} match={match} type={type} handleClick={handleClick}/>
          )) : null
        }
        </TableBody>
    </FixturePreviewContainer>
  )
}

export default FixturePreview;
