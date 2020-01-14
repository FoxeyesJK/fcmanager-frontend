import React from 'react';

import {

} from './dropdown-league-item.styles.jsx';

const DropdownLeagueItem = ({ league: { title } }) => (
    <option value={title}>{title}</option>
)

export default DropdownLeagueItem;