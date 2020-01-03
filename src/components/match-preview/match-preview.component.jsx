import React from 'react';

import './match-preview.styles.scss';

import MatchItem from '../match-item/match-item.component';

const MatchPreview = ({ title, matches }) => {
  return (
    <div className='match-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {matches
                .filter((match, idx) => idx < 3)
                .map(match => (
                    <MatchItem key={match.id} match={match} />
            ))}
        </div>
    </div>
  )
}

export default MatchPreview;
