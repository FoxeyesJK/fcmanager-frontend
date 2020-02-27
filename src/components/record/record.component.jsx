import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import ordinal from 'ordinal';

import { selectMatchRecords } from '../../redux/league/league.selectors';

import {
  RecordContainer,
  RecordContentContainer,
  IconContainer,
  TeamIcon,
  ScoreIcon,
  AssistIcon,
  Title,
  Table,
  TableHead,
  TableBody,
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

const Record = ({ type }) => {
  const matchRecords = useSelector(selectMatchRecords, shallowEqual)

  return (
    <RecordContainer>
      <IconContainer>
        {type === 'score' ? <ScoreIcon /> : <AssistIcon />}
      </IconContainer>
      <RecordContentContainer>
      <Title>{type === 'score' ? 'TOP SCORERS' : 'TOP ASSISTS'}</Title>
      <Table>
        <TableHead>
        <TableRow>
          <TableIndexHeader>POS</TableIndexHeader>
          <TableTeamHeader>TEAM</TableTeamHeader>
          <TableMemberHeader>NAME</TableMemberHeader>
          <TableGoalHeader>GOALS</TableGoalHeader>
        </TableRow>
        </TableHead>
        <TableBody>
          {
            matchRecords
            .filter(matchRecord => matchRecord.type === type)
            .map((matchRecord, index) => 
            <TableRow>
          <TableIndexData>{ordinal(index+1)}</TableIndexData>
          <TableTeamData><TeamIcon teamLogoUrl={matchRecord.teamLogoUrl} /></TableTeamData>
          <TableMemberData>{matchRecord.memberName}</TableMemberData>
          <TableGoalData>{matchRecord.count}</TableGoalData>
          </TableRow>)
          }
          </TableBody>
      </Table>
      </RecordContentContainer>
   </RecordContainer>
  )
}

export default Record;

