import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import CustomIcon from '../../components/custom-icon-button/custom-icon-button.component';

import {
  MemberItemContainer,
  HeaderContainer,
  IconContainer,
  ImageContainer,
  ContentContainer,
  FooterContainer,
  Name,
  ProfileImage, 
  Text
} from './member-item.styles.jsx';

import { selectIsAdmin } from '../../redux/user/user.selectors';


const MemberItem = ({ item, handleClick }) => {
  const { id, name, email, imageUrl } = item;
  const isAdmin = useSelector(selectIsAdmin, shallowEqual)
  return (
    <MemberItemContainer>
      <HeaderContainer>
        {isAdmin ? 
          <IconContainer>
            <CustomIcon type='edit' id={id} handleClick={handleClick} />
            <CustomIcon type='delete' id={id} handleClick={handleClick} />
          </IconContainer>
          : null}
      </HeaderContainer>
      <ContentContainer>
      <ProfileImage
          style={{
              backgroundImage: `url('https://www.iottie.com/download/profile-blank.png')`//`url(${imageUrl})`
          }}
      />
      </ContentContainer>
      <FooterContainer>
          <Name>{name}</Name>
      </FooterContainer>
    </MemberItemContainer>
  )
}

export default MemberItem;
