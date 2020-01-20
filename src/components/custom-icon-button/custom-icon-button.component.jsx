import React from 'react';

import {
   CustomIconButtonContainer,
   Button
} from './custom-icon-button.styles.jsx';

import { ReactComponent as AddIcon } from '../../assets/icon-add-button.svg';
import { ReactComponent as SaveIcon } from '../../assets/icon-save-button.svg';
import { ReactComponent as EditIcon } from '../../assets/icon-edit-button.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icon-delete-button.svg';
import { ReactComponent as ErrorIcon } from '../../assets/icon-error-button.svg';

//Need refactoring
const CustomIconButton = ({ type, id, handleClick }) => (
   <CustomIconButtonContainer>
      <Button className='button-icon' onClick={() => handleClick(id, type)}>
         {
            type == 'add' ? <AddIcon className='icon' /> :
            type == 'save' ? <SaveIcon className='icon'/> :
            type == 'edit' ? <EditIcon className='icon' /> :
            type == 'delete' ? <DeleteIcon className='icon' /> : 
            <ErrorIcon className='icon' /> 
         }
      </Button>
   </CustomIconButtonContainer>
)

export default CustomIconButton;

/*
const CustomIconButton = ({ children, type, addIcon }) => (
    <button className='button-icon'>
          <div>{type}</div>
       {((type) => {
          console.log('type');
          switch (type) {
            case 'add':
               return <AddIcon className='icon' />;
            case 'save':
               return <SaveIcon className='icon'/>; 
            case 'edit':
               return <EditIcon className='icon' />;
            case 'delete':
               return <DeleteIcon className='icon' />;
            default:
               return <DeleteIcon className='icon' />;
          }
       })}
    </button>


*/