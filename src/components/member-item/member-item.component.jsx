import React from 'react';

import './member-item.styles.scss';

import profile from '../../assets/profile-blank.png';

const MemberItem = ({ item }) => {
  const { name, imageUrl } = item;
  return (
    <div className='member-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='member-text'>
            <span className='name'>{name}</span>
        </div>
    </div>
  )
}

export default MemberItem;

