import React from 'react';

import {

} from './dropdown-location-item.styles.jsx';

const DropdownLocationItem = ({ team: { name } }) => (
    <option value={name}>{name}</option>
)

export default DropdownLocationItem;