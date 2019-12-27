import React from 'react'
import './admin-schedule.styles.scss';

const AdminSchedule = () => (
  <div className='admin-schedule'>
      <h3>Schedule</h3>
      <table className='admin-schedule-table'>
        <tr>
          <th className='title' colspan='1'>Date</th>
          <th className='date' colspan='1'>Time</th>
          <th className='time' colspan='1'>Title</th>
          <th className='location' colspan='2'>Location</th>
          <th className='location' colspan='2'>Icon</th>
        </tr>
        <tr className='match'>
          <td className='date' colspan='1'>02/20/2019(Sat)</td>
          <td className='time' colspan='1'>9:30AM</td>
          <td className='title' colspan='1'>New Jersey FC Team Match</td>
          <td className='location' colspan='2'>Fort Lee, NJ</td>
          <td className='location' colspan='2'>D</td>
        </tr> 
        <tr className='match'>
          <td className='date' colspan='1'>02/20/2019</td>
          <td className='time' colspan='1'>9:30AM</td>
        <td className='title' colspan='1'>New Jersey FC Team Match</td>
          <td className='location' colspan='2'>Fort Lee, NJ</td>
          <td className='location' colspan='2'>D</td>
        </tr>
        <tr className='match'>
          <td className='date' colspan='1'>Thrusday, February 20</td>
          <td className='time' colspan='1'>9:30AM</td>
          <td className='title' colspan='1'>New Jersey FC Team Match</td>
          <td className='location' colspan='2'>Fort Lee, NJ</td>
          <td className='location' colspan='2'>D</td>
        </tr>
        <tr className='match'>
          <td className='date' colspan='1'>Thrusday, February 20</td>
          <td className='time' colspan='1'>9:30AM</td>
          <td className='title' colspan='1'>New Jersey FC Team Match</td>
          <td className='location' colspan='2'>Fort Lee, NJ</td>
          <td className='location' colspan='2'>D</td>
        </tr>
    </table>
  </div>
)

export default AdminSchedule;
