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
        <TableData>{moment().format('ddd')}, {moment().add(10, 'days').calendar()}</TableData>
        <TableData>{moment().format('LT')}</TableData>
        <TableData>{title}</TableData>
        <TableData>{location}</TableData>
        <TableData><CustomIconButton type='edit' /></TableData>
        <TableData><CustomIconButton type='delete'/></TableData>
    </TableRow>
    );
}

export default AdminScheduleItem;