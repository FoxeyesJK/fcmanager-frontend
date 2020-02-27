import React from 'react';
import axios from 'axios';
import moment from 'moment';
import SimpleBarReact from 'simplebar-react';

import {
  AdminScheduleContainer,
  Title,
  AdminScheduleTable,
  TableRow,
  TableHeader,
  TableBody
} from './schedule.styles.jsx';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';


import SCHEDULE_DATA from '../../pages/league/fixture.data';

import ScheduleAddItem from '../admin-schedule-add-item/admin-schedule-add-item.component';
import ScheduleItem from '../schedule-item/schedule-item.component';

const Schedule = () => {
    return (
        <AdminScheduleContainer>
            <TableRow>
              <TableHeader>DATE</TableHeader>
              <TableHeader>TIME</TableHeader>
              <TableHeader>OPPOSITION</TableHeader>
              <TableHeader>LOCATION</TableHeader>
              <TableHeader>RESULT</TableHeader>
              <TableHeader>COMPETITION</TableHeader>
              <TableHeader><CustomIconButton type='' handleClick={this.addScheduleRow} /></TableHeader>
              <TableHeader><CustomIconButton type='add' handleClick={this.addScheduleRow} /></TableHeader>
            </TableRow>
            <SimpleBarReact style={{ maxHeight: 500 }} onSubmit={this.handleSubmit}>
              <TableBody>
            {
              this.state.count > 0 ? 
              <ScheduleAddItem /> : null
            }
            {
              this.props.matches.map(({ id, match}) => (
                <ScheduleItem id={id} match={match} handleClick={this.handleClick} />
              ))
            }
            </TableBody>
          </SimpleBarReact>
        </AdminScheduleContainer>
    )
  }

export default Schedule;