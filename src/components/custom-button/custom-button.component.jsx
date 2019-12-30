import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, ...otherProps }) => (
    <button 
       className={`${inverted ? 'inverted' : ''} `} 
       {...otherProps}
    >
       {children}
    </button>
);

export default CustomButton;

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