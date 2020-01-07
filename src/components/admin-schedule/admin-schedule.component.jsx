import React from 'react';
import axios from 'axios';
import moment from 'moment';

import {
  AdminScheduleContainer,
  Title,
  AdminScheduleTable,
  TableRow,
  TableHeader
} from './admin-schedule.styles.jsx';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';


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
      });
  }

  handleClick = (id) => {
    this.setState({})
  }

  addScheduleRow = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    });
  }


  render() {
    const { schedules, count } = this.state;
    return (
        <AdminScheduleContainer>
            <Title>SCHEDULES</Title>
            <form onSubmit={this.handleSubmit}>
              <AdminScheduleTable as='div'>
                <TableRow as='tr' className='table-row'>
                  <TableHeader className='date'>No</TableHeader>
                  <TableHeader className='date'>Date</TableHeader>
                  <TableHeader className='title'>Title</TableHeader>
                  <TableHeader className='location'>Location</TableHeader>
                  <td className='location'><CustomIconButton type='add' handleClick={this.addScheduleRow} /></td>
                </TableRow>
                {
                  this.state.count > 0 ? 
                  <ScheduleAddItem /> : null
                }
                {
                  schedules.map(({ id, ...otherScheduleProps }) => (
                    <ScheduleItem key={id} id={id} {...otherScheduleProps} handleClick={this.handleClick} />
                  ))
                }
            </AdminScheduleTable>
          </form>
        </AdminScheduleContainer>
    )
  }
}

//https://www.youtube.com/watch?v=oQnojIyTXb8