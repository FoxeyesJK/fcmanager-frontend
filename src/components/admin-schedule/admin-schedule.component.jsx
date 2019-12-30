import React from 'react';
import axios from 'axios';
import moment from 'moment';

import './admin-schedule.styles.scss';
import { ReactComponent as DeleteIcon } from '../../assets/icon-delete-button.svg';
import { ReactComponent as EditIcon } from '../../assets/icon-edit-button.svg';
import { ReactComponent as AddIcon } from '../../assets/icon-add-button.svg';
import { ReactComponent as SaveIcon } from '../../assets/icon-save-button.svg';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import SCHEDULE_DATA from '../../pages/schedule/schedule.data';

import ScheduleAddItem from '../admin-schedule-add-item/admin-schedule-add-item.component';
import ScheduleItem from '../admin-schedule-item/admin-schedule-item.component';

export default class AdminSchedule extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
      schedules: SCHEDULE_DATA
    }
  }
  // state = {
  //   persons: [],
  // };
  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
  //     console.log(res);
  //     this.setState({ persons: res.data });
  //   })
  // }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ 
      [name]: value //dynamically setting value
    });
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

  addScheduleRow = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    });
  }


  render() {
    const { schedules, count } = this.state;
    console.log(count);
    return (
        <div className='admin-schedule'>
            {/* <ul>
              { this.state.persons.map(person => <li>{person.name}</li>)}
            </ul> */}
            <h3>Schedule</h3>
            <form onSubmit={this.handleSubmit}>
              <table className='admin-schedule-table'>
                <tr className='table-row'>
                    <th className='date'>Date</th>
                    <th className='title'>Title</th>
                    <th className='location'>Location</th>
                    <th className='location'></th>
                    <th className='icontr'><button className='button-icon' onClick={this.addScheduleRow}><AddIcon className='icon' /></button></th>
                </tr>
                {
                  this.state.count > 0 ? 
                  <ScheduleAddItem /> : null
                }
                {
                  schedules.map(({ id, ...otherScheduleProps }) => (
                    <ScheduleItem key={id} {...otherScheduleProps} />
                  ))
                }
            </table>
          </form>
        </div>
    )
  }
}

//https://www.youtube.com/watch?v=oQnojIyTXb8