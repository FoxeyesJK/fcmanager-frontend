import React from 'react';

import './form-dropdown-item.styles.scss';

const FormDropdownItem = ({ item: { value } }) => (
    <option value={value}>{value}</option>
)

export default FormDropdownItem;