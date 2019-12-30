import React from 'react';

import './custom-icon-button.styles.scss';

const CustomIconButton = ({ children, inverted, ...otherProps }) => (
    <button 
       className={`${inverted ? 'inverted' : ''} `} 
       {...otherProps}
    >
       {children}
    </button>
);

export default CustomIconButton;

/*
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button 
       className={`${inverted ? 'inverted' : ''} 
       ${isGoogleSignIn ? 'google-sign-in': ''
       } custom-button`} 
       {...otherProps}
    >
       {children}
    </button>
);

*/