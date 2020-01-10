import React from 'react';

import {
  MatchPreviewContainer,
  Title,
  MatchItemContainer
} from './match-preview.styles.jsx';

import MatchItem from '../match-item/match-item.component';

const MatchPreview = ({ title, matches }) => {
  return (
    <MatchPreviewContainer>
        <Title>{title.toUpperCase()}</Title>
        <MatchItemContainer>
          {
          matches
              .filter((match, idx) => idx < 3)
              .map(match => (
                  <MatchItem key={match.id} match={match} />
          ))
          }
          </MatchItemContainer>
    </MatchPreviewContainer>
  )
}

export default MatchPreview;
