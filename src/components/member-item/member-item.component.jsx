import React from 'react';

import {
  MemberItemContainer,
  ImageContainer
} from './member-item.styles.jsx';

import profile from '../../assets/profile-blank.png';

const MemberItem = ({ item }) => {
  const { name, imageUrl } = item;
  return (
    <MemberItemContainer>
        <ImageContainer>
        <div
            className='image'
            style={{
                backgroundImage: profile//`url(${imageUrl})`
            }}
        />
        </ImageContainer>
        <div className='member-text'>
            <span className='name'>{name}</span>
        </div>
    </MemberItemContainer>
  )
}

export default MemberItem;

