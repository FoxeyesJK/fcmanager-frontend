import React from 'react';

import {
   Button
} from './custom-button.styles.jsx';

const CustomButton = ({ children, inverted, handleClick, ...otherProps }) => (
    <Button
       className={`${inverted ? 'inverted' : ''} `} 
       onClick={handleClick}
       {...otherProps}
    >
       {children}
    </Button>
);

export default CustomButton;