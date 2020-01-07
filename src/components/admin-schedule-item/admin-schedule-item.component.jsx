import React from 'react';
import moment from 'moment';

import {
    TableRow,
    TableData
} from './admin-schedule-item.styles.jsx';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';



const AdminScheduleItem = ({date, title, location, id, handleClick}) => {
    //const { date, title, location, id } = schedule;
    
    return (
    <TableRow onClick={() => handleClick(id)}>
        <div>{id}</div>
        <TableData className='date'>{moment(date).format('llll')}</TableData>
        <TableData className='title'>{title}</TableData>
        <TableData className='location'>{location}</TableData>
        <TableData className='location'><CustomIconButton type='delete'/></TableData>
    </TableRow>
    );
}

export default AdminScheduleItem;