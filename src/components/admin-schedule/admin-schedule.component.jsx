import React from 'react';
import axios from 'axios';
import './admin-schedule.styles.scss';
import { ReactComponent as DeleteIcon } from '../../assets/icon-delete-button.svg';
import { ReactComponent as EditIcon } from '../../assets/icon-edit-button.svg';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

export default class AdminSchedule extends React.Component {
  // state = {
  //   persons: [],
  // };
  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
  //     console.log(res);
  //     this.setState({ persons: res.data });
  //   })
  // }
  state = {
    date: '',
    title: '',
    location: ''
  }

  handleChange = event => {
    this.setState({ date: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const schedule = {
      date: this.state.date,
      title: this.state.title,
      location: this.state.location
    }

    axios.post(`https://jsonplaceholder.typicode.com/schedules`, { schedule })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }


  render() {
    return (
        <div className='admin-schedule'>
            {/* <ul>
              { this.state.persons.map(person => <li>{person.name}</li>)}
            </ul> */}
            <h3>Schedule</h3>
            <form onSubmit={this.handleSubmit}>
              <FormInput 
                name='Date' 
                type='date' 
                value={this.state.date} 
                handleChange={this.handleChange} 
                label='Date'
                required 
              />
              <FormInput
                name='title'
                type='text'
                value={this.state.title}
                handleChange={this.handleChange}
                label='title'
                required
              />
              <FormInput
                name='location'
                type='text'
                value={this.state.location}
                handleChange={this.handleChange}
                label='location'
                required
              />
              <div className='buttons'>
                  <CustomButton type='submit'> Add Schedule </CustomButton>
              </div>
            </form>
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
  }
}

//https://www.youtube.com/watch?v=oQnojIyTXb8