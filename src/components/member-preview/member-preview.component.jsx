import React from 'react';

import './member-preview.styles.scss';

import MemberItem from '../member-item/member-item.component';

const MemberPreview = ({ title, items }) => {
  return (
    <div className='member-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <MemberItem key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
}

export default MemberPreview;

