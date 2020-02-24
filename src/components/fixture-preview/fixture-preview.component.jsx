import React from 'react';
import moment from 'moment';

import {
  FixturePreviewContainer,
  Title,
  TableBody
} from './fixture-preview.styles.jsx';

import FixtureItem from '../fixture-item/fixture-item.component';

const FixturePreview = ({ scheduledOn, matches, selectedMatchId, handleClick, isAdmin }) => {
  return (
    <FixturePreviewContainer>
      {
        scheduledOn !== 'undefined' ?
        <Title>{moment(scheduledOn).format('ddd')}, {moment(scheduledOn).format('l')}</Title> : <Title>New Fixture</Title>
      }
        <TableBody>
        {
          !!matches ? 
          matches.map(match => (
            <FixtureItem key={match.id} id={match.id} selectedMatchId={selectedMatchId} match={match} handleClick={handleClick} isAdmin={isAdmin}/>
          )) : null
        }
        </TableBody>
    </FixturePreviewContainer>
  )
}

export default FixturePreview;
