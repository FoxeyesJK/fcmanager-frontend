import React from 'react';

import {
  MemberPreivewContainer,
  MemberItemContainer,
  Team
} from './member-preview.styles';

import MemberItem from '../member-item/member-item.component';

const MemberPreview = ({ name, items }) => {
  return (
    <MemberPreivewContainer>
        <Team>{name.toUpperCase()}</Team>
        <MemberItemContainer>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <MemberItem key={item.id} item={item} />
            ))}
        </MemberItemContainer>
    </MemberPreivewContainer>
  )
}

export default MemberPreview;

