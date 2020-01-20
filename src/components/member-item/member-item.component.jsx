import React from 'react';
import CustomIcon from '../../components/custom-icon-button/custom-icon-button.component';

import {
  MemberItemContainer,
  NameContainer,
  IconContainer,
  ImageContainer,
  ContentContainer,
  TextContainer,
  Name,
  ProfileImage, 
  Text
} from './member-item.styles.jsx';


const MemberItem = ({ item, id, handleClick, isAdmin }) => {
  const { name, email, imageUrl } = item;
  return (
    <MemberItemContainer>
        <NameContainer>
          <Name>{name}</Name>
          {isAdmin ? 
            <IconContainer>
              <CustomIcon type='edit' handleClick={handleClick} />
              <CustomIcon type='delete' handleClick={handleClick} />
            </IconContainer>
            : null}
        </NameContainer>
        <ContentContainer>
        <ImageContainer>
        <ProfileImage
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

