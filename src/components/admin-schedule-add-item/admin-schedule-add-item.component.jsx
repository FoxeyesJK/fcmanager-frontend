import React from 'react';

import {
    TableRow,
    TableData
} from './admin-schedule-add-item.styles.jsx';

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
            <TableRow>
                <TableData>
                <FormInput 
                name='date' 
                type='time' 
                value={this.state.date} 
                handleChange={this.handleChange} 
                required 
                />
                </TableData>
                <TableData>
                <FormInput
                name='title'
                type='text'
                value={this.state.title}
                handleChange={this.handleChange}
                required
                />
                </TableData>
                <TableData>
                <FormInput
                name='location'
                type='text'
                value={this.state.location}
                handleChange={this.handleChange}
                required
                />
                </TableData>
                <TableData className='location'><CustomIconButton type='save' handleClick={this.addScheduleRow} /></TableData>
            </TableRow>
        )
    }
}
