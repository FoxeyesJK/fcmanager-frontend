import React from 'react';
import moment from 'moment';

import './admin-schedule-item.styles.scss';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';



const AdminScheduleItem = (schedule) => {
    const { date, title, location } = schedule;
    
    return (
    <tr className='admin-schedule-item'>
        <td className='date'>{moment(date).format('llll')}</td>
        <td className='title'>{title}</td>
        <td className='location'>{location}</td>
        <td className='location'><CustomIconButton type='edit'/></td>
        <td className='location'><CustomIconButton type='delete'/></td>
    </tr>
    );
}

export default AdminScheduleItem;