import React from 'react';

import {
  StandingContainer,
  Title,
  Table,
  TableRow,
  TableHeader,
  TableData,
  TeamIcon,
  TableTeamData,
  TableTeamText,
  TableTeamHeader,
  TableIndexHeader,
  TableIndexData
} from './standing.styles.jsx';


const Standing = () => {
  return (
    <StandingContainer>
      <Title>STANDINGS</Title>
      <Table>
        <TableRow>
          <TableIndexHeader>POS</TableIndexHeader>
          <TableTeamHeader>TEAM</TableTeamHeader>
          <TableHeader>MP</TableHeader>
          <TableHeader>W</TableHeader>
          <TableHeader>D</TableHeader>
          <TableHeader>L</TableHeader>
          <TableHeader>GF</TableHeader>
          <TableHeader>GA</TableHeader>
          <TableHeader>GD</TableHeader>
          <TableHeader>PTS</TableHeader>
        </TableRow>
        <TableRow>
          <TableIndexData>1st</TableIndexData>
          <TableTeamData><TeamIcon /><TableTeamText>Blue Team</TableTeamText></TableTeamData>
          <TableData>6</TableData>
          <TableData>2</TableData>
          <TableData>2</TableData>
          <TableData>0</TableData>
          <TableData>0</TableData>
          <TableData>6</TableData>
          <TableData>3</TableData>
          <TableData>3</TableData>
        </TableRow>
        <TableRow>
          <TableIndexData>2nd</TableIndexData>
          <TableTeamData><TeamIcon /><TableTeamText>Red Team</TableTeamText></TableTeamData>
          <TableData>4</TableData>
          <TableData>2</TableData>
          <TableData>1</TableData>
          <TableData>1</TableData>
          <TableData>0</TableData>
          <TableData>5</TableData>
          <TableData>2</TableData>
          <TableData>3</TableData>
        </TableRow>
        <TableRow>
          <TableIndexData>3rd</TableIndexData>
          <TableTeamData><TeamIcon /><TableTeamText>Yellow Team</TableTeamText></TableTeamData>
          <TableData>4</TableData>
          <TableData>2</TableData>
          <TableData>1</TableData>
          <TableData>1</TableData>
          <TableData>0</TableData>
          <TableData>3</TableData>
          <TableData>0</TableData>
          <TableData>3</TableData>
        </TableRow>
      </Table>
   </StandingContainer>
  )
}

export default Standing;

