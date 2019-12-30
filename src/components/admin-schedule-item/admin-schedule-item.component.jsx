import React from 'react';
import moment from 'moment';

import './admin-schedule-item.styles.scss';

import { ReactComponent as DeleteIcon } from '../../assets/icon-delete-button.svg';
import { ReactComponent as EditIcon } from '../../assets/icon-edit-button.svg';

const AdminScheduleItem = (schedule) => {
    const { date, title, location } = schedule;
    
    return (
    <tr className='admin-schedule-item'>
        <td className='date'>{moment(date).format('llll')}</td>
        <td className='title'>{title}</td>
        <td className='location'>{location}</td>
        <td className='location'><EditIcon className='icon' /></td>
                  <td className='location'><DeleteIcon className='icon' /></td>
    </tr>
    );
}

export default AdminScheduleItem;