import React from 'react';

import {

} from './dropdown-team-item.styles.jsx';

const DropdownTeamItem = ({ team: { name } }) => (
    <option value={name}>{name}</option>
)

export default DropdownTeamItem;