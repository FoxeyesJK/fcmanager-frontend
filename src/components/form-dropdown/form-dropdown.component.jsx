import React from 'react';

import './form-dropdown.styles.scss';

import FormDropdownItem from '../form-dropdown-item/form-dropdown-item.component';

const FormDropdown = ({ dropdownItems }) => (
    <div className='form-dropdown'>
        <div className='form-dropdown-items'>
            <select>
            {
                dropdownItems.length ? (
                dropdownItems.map(dropdownItem => (
                    <FormDropdownItem key={dropdownItem.id} item={dropdownItem} />
                ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )
            }
            </select>
        </div>
    </div>

)

export default FormDropdown;
