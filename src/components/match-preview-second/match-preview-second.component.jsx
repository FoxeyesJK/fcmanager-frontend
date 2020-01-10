import React from 'react';
import SimpleBarReact from 'simplebar-react';
import Schedule from '../../components/schedule/schedule.component';

import {
  MatchPreviewContainer,
  Title,
  MatchItemContainer
} from './match-preview-second.styles.jsx';

import MatchItem from '../match-item/match-item.component';

const MatchPreview = ({ title, matches }) => {
  return (
    <MatchPreviewContainer>
        <Title>{title.toUpperCase()}</Title>
        {/* <MatchItemContainer>
          {
          matches
              .filter((match, idx) => idx < 3)
              .map(match => (
                  <MatchItem key={match.id} match={match} />
          ))
          }
          </MatchItemContainer> */}
          <Schedule />
    </MatchPreviewContainer>
  )
}

export default MatchPreview;
