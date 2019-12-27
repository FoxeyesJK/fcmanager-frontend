import React from 'react'
import './admin-schedule.styles.scss';
import { ReactComponent as DeleteIcon } from '../../assets/icon-delete-button.svg';
import { ReactComponent as EditIcon } from '../../assets/icon-edit-button.svg';

const AdminSchedule = () => (
  <div className='admin-schedule'>
      <h3>Schedule</h3>
      <button>Add Schedule</button>
      <table className='admin-schedule-table'>
        <tr>
          <th className='title'>Date</th>
          <th className='date'>Time</th>
          <th className='time'>Title</th>
          <th className='location'>Location</th>
          <th className='location'></th>
          <th className='location'></th>
        </tr>
        <tr className='match'>
          <td className='date'>02/20/2019(Sat)</td>
          <td className='time'>9:30AM</td>
          <td className='title'>New Jersey FC Team Match</td>
          <td className='location'>Fort Lee, NJ</td>
          <td className='location'><EditIcon className='icon' /></td>
          <td className='location'><DeleteIcon className='icon' /></td>
        </tr> 
        <tr className='match'>
          <td className='date'>02/20/2019(Sat)</td>
          <td className='time'>9:30AM</td>
          <td className='title'>New Jersey FC Team Match</td>
          <td className='location'>Fort Lee, NJ</td>
          <td className='location'><EditIcon className='icon' /></td>
          <td className='location'><DeleteIcon className='icon' /></td>
        </tr>
        <tr className='match'>
          <td className='date'>02/20/2019(Sat)</td>
          <td className='time'>9:30AM</td>
          <td className='title'>New Jersey FC Team Match</td>
          <td className='location'>Fort Lee, NJ</td>
          <td className='location'><EditIcon className='icon' /></td>
          <td className='location'><DeleteIcon className='icon' /></td>
        </tr>
        <tr className='match'>
          <td className='date'>02/20/2019(Sat)</td>
          <td className='time'>9:30AM</td>
          <td className='title'>New Jersey FC Team Match</td>
          <td className='location'>Fort Lee, NJ</td>
          <td className='location'><EditIcon className='icon' /></td>
          <td className='location'><DeleteIcon className='icon' /></td>
        </tr>
    </table>
  </div>
)

export default AdminSchedule;
