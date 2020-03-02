import React from 'react';

import {
  MemberPreivewContainer,
  TeamContainer,
  MemberItemContainer,
  Team
} from './member-preview.styles';

import MemberItem from '../member-item/member-item.component';

const MemberPreview = ({ name, items, handleClick }) => {
  return (
    <MemberPreivewContainer>
        <TeamContainer>
          <Team>
          {
            name !== "null" ? name : "Others"
          }
          </Team>
        </TeamContainer>
        <MemberItemContainer>
            {items
                .map(item => (
                    <MemberItem key={item.id} item={item} handleClick={handleClick} />
            ))}
        </MemberItemContainer>
    </MemberPreivewContainer>
  )
}

export default MemberPreview;

