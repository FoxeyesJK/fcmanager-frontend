import React from 'react';

import './match-preview.styles.scss';

import MatchItem from '../match-item/match-item.component';

const MatchPreview = ({ date, items }) => {
  return (
    <div className='match-preview'>
        <h1 className='title'>{date.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 3)
                .map(item => (
                    <MatchItem key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
}

export default MatchPreview;
