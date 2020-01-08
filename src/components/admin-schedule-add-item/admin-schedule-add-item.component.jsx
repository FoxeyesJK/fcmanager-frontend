import React from 'react';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import 'react-widgets/dist/css/react-widgets.css';
import {
    TableRow,
    TableData
} from './admin-schedule-add-item.styles.jsx';

import FormInput from '../form-input/form-input.component';
import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';

Moment.locale('en')
momentLocalizer();

export default class AdminScheduleAddItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            date: '', 
            title: '', 
            location: '',date: new Date(),
        }
    }
    
    onChange = date => this.setState({ date })

    render () {
        return (
            <TableRow>
                <TableData>
                <DateTimePicker
                    defaultValue={new Date()}
                />

                {/* <FormInput 
                name='date' 
                type='time' 
                value={this.state.date} 
                handleChange={this.handleChange} 
                required 
                /> */}
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
                <TableData></TableData>
                <TableData className='location'><CustomIconButton type='save' handleClick={this.addScheduleRow} /></TableData>
            </TableRow>
        )
    }
}
