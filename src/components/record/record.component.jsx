import React from 'react';

import {
  RecordContainer,
  RecordContentContainer,
  IconContainer,
  ScoreIcon,
  Title,
  Table,
  TableRow,
  TableIndexHeader,
  TableTeamHeader,
  TableMemberHeader,
  TableGoalHeader,
  TableIndexData,
  TableTeamData,
  TableMemberData,
  TableGoalData
} from './record.styles.jsx';

import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';
import { ReactComponent as RedIcon } from '../../assets/icon-red.svg';
import { ReactComponent as YellowIcon } from '../../assets/icon-yellow.svg';

const Record = () => {
  return (
    <RecordContainer>
      <IconContainer>
        <ScoreIcon/>
      </IconContainer>
      <RecordContentContainer>
      <Title>TOP SCORERS</Title>
      <Table>
        <TableRow>
          <TableIndexHeader>POS</TableIndexHeader>
          <TableTeamHeader>TEAM</TableTeamHeader>
          <TableMemberHeader>NAME</TableMemberHeader>
          <TableGoalHeader>GOALS</TableGoalHeader>
        </TableRow>
        <TableRow>
          <TableIndexData>1st</TableIndexData>
          <TableTeamData><BlueIcon className='icon' /></TableTeamData>
          <TableMemberData>Nathan Jeong</TableMemberData>
          <TableGoalData>2</TableGoalData>
        </TableRow>
        <TableRow>
        <TableIndexData>2nd</TableIndexData>
          <TableTeamData><BlueIcon className='icon' /></TableTeamData>
          <TableMemberData>Nathan Jeong</TableMemberData>
          <TableGoalData>2</TableGoalData>
        </TableRow>
        <TableRow>
          <TableIndexData>3rd</TableIndexData>
          <TableTeamData><BlueIcon className='icon' /></TableTeamData>
          <TableMemberData>Nathan Jeong</TableMemberData>
          <TableGoalData>2</TableGoalData>
        </TableRow>
      </Table>
      </RecordContentContainer>
   </RecordContainer>
  )
}

export default Record;

