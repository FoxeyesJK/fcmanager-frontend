import React from 'react';

import './admin-schedule-add-item.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';

export default class AdminScheduleAddItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            date: '', 
            title: '', 
            location: ''
        }
    }

    render () {
        return (
            <tr className='admin-schedule-add-item'>
                <td className='date'>
                <FormInput 
                name='date' 
                type='datetime-local' 
                value={this.state.date} 
                handleChange={this.handleChange} 
                required 
                />
                </td>
                <td className='title'>
                <FormInput
                name='title'
                type='text'
                value={this.state.title}
                handleChange={this.handleChange}
                required
                />
                </td>
                <td className='location'>
                <FormInput
                name='location'
                type='text'
                value={this.state.location}
                handleChange={this.handleChange}
                required
                />
                </td>
                <td className='location'></td>
                <td className='location'><CustomIconButton type='save' handleClick={this.addScheduleRow} /></td>
            </tr>
        )
    }
}
