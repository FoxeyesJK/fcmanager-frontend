import React from 'react';

import {
  MemberItemContainer,
  ImageContainer,
  ContentContainer,
  TextContainer,
  Name,
  ProfileImage, 
  Text
} from './member-item.styles.jsx';

import profile from '../../assets/profile-blank.png';

const MemberItem = ({ item }) => {
  const { name, email, imageUrl } = item;
  return (
    <MemberItemContainer>
        <Name>{name}</Name>
        <ContentContainer>
        <ImageContainer>
        <ProfileImage
            className='image'
            style={{
                backgroundImage: `url('https://www.iottie.com/download/profile-blank.png')`//`url(${imageUrl})`
            }}
        />
        </ImageContainer>
        <TextContainer>
            <Text>Email: jake.kw@iottie.com</Text>
            <Text>phone: 917-832-6720</Text>
            <Text>DOB: 01/27/1992</Text>
            <Text>Since: 01/27/2020</Text>
          </TextContainer>
        </ContentContainer>
    </MemberItemContainer>
  )
}

export default MemberItem;

