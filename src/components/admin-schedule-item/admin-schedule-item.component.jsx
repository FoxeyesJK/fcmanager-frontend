import React from 'react';
import moment from 'moment';

import './admin-schedule-item.styles.scss';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';



const AdminScheduleItem = ({date, title, location, id, handleClick}) => {
    //const { date, title, location, id } = schedule;
    
    return (
    <tr className='admin-schedule-item' onClick={() => handleClick(id)}>
        <div>{id}</div>
        <td className='date'>{moment(date).format('llll')}</td>
        <td className='title'>{title}</td>
        <td className='location'>{location}</td>
        <td className='location'><CustomIconButton type='delete'/></td>
    </tr>
    );
}

export default AdminScheduleItem;