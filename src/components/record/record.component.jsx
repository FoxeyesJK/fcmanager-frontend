import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
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
            <TableRow key={matchRecord.id}>
          <TableIndexData>
            {
              index !== 0 ? matchRecords[index-1].count !== matchRecord.count ? ordinal(index+1) : "" : ordinal(index+1)
            }
            </TableIndexData>
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

