import React from 'react';

import {

} from './dropdown-league-item.styles.jsx';

const DropdownLeagueItem = ({ team: { name } }) => (
    <option value={name}>{name}</option>
)

export default DropdownLeagueItem;