import React from 'react';

import './team-dropdown-item.styles.scss';

const TeamDropdownItem = ({ team: { name } }) => (
    <option value={name}>{name}</option>
)

export default TeamDropdownItem;