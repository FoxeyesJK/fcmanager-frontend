import React from 'react';

import {
  MemberPreivewContainer,
  TeamContainer,
  MemberItemContainer,
  Team
} from './member-preview.styles';

import MemberItem from '../member-item/member-item.component';

const MemberPreview = ({ name, items, isAdmin }) => {
  return (
    <MemberPreivewContainer>
        <TeamContainer>
          <Team>Red</Team>
        </TeamContainer>
        <MemberItemContainer>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <MemberItem key={item.id} item={item} isAdmin={isAdmin}/>
            ))}
        </MemberItemContainer>
    </MemberPreivewContainer>
  )
}

export default MemberPreview;

