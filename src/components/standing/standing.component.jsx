import React from 'react';

import {
  StandingContainer,
  Title,
  Table,
  TableRow,
  TableHeader,
  TableData,
  TableTeamHeader,
  TableIndexHeader
} from './standing.styles.jsx';

import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';
import { ReactComponent as RedIcon } from '../../assets/icon-red.svg';
import { ReactComponent as YellowIcon } from '../../assets/icon-yellow.svg';

const Standing = () => {
  return (
    <StandingContainer>
      <Title>Standings</Title>
      <Table>
        <TableRow>
          <TableIndexHeader></TableIndexHeader>
          <TableTeamHeader>Team</TableTeamHeader>
          <TableHeader>Played</TableHeader>
          <TableHeader>Won</TableHeader>
          <TableHeader>Draws</TableHeader>
          <TableHeader>Lost</TableHeader>
          <TableHeader>For</TableHeader>
          <TableHeader>Against</TableHeader>
          <TableHeader>Difference</TableHeader>
          <TableHeader>Points</TableHeader>
        </TableRow>
        <TableRow>
          <TableData>1</TableData>
          <TableData><BlueIcon className='icon' /> Blue Team</TableData>
          <TableData>6</TableData>
          <TableData>2</TableData>
          <TableData>2</TableData>
          <TableData>0</TableData>
          <TableData>0</TableData>
          <TableData>6</TableData>
          <TableData>3</TableData>
          <TableData className='points'>3</TableData>
        </TableRow>
        <TableRow>
          <TableData>2</TableData>
          <TableData className='team'><RedIcon className='icon' /> Red Team</TableData>
          <TableData>4</TableData>
          <TableData>2</TableData>
          <TableData>1</TableData>
          <TableData>1</TableData>
          <TableData>0</TableData>
          <TableData>5</TableData>
          <TableData>2</TableData>
          <TableData className='points'>3</TableData>
        </TableRow>
        <TableRow>
          <TableData>3</TableData>
          <TableData className='team'><YellowIcon className='icon' /> Yellow Team</TableData>
          <TableData>4</TableData>
          <TableData>2</TableData>
          <TableData>1</TableData>
          <TableData>1</TableData>
          <TableData>0</TableData>
          <TableData>3</TableData>
          <TableData>0</TableData>
          <TableData className='points'>3</TableData>
        </TableRow>
      </Table>
   </StandingContainer>
  )
}

export default Standing;

