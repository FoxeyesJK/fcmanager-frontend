import React from 'react';

import {
  StandingContainer,
  Title,
  Table,
  TableRow,
  TableHeader,
  TableData,
  TableTeamData,
  TableTeamHeader,
  TableIndexHeader,
  TableIndexData
} from './standing.styles.jsx';

import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';
import { ReactComponent as RedIcon } from '../../assets/icon-red.svg';
import { ReactComponent as YellowIcon } from '../../assets/icon-yellow.svg';

const Standing = () => {
  return (
    <StandingContainer>
      <Title>STANDINGS</Title>
      <Table>
        <TableRow>
          <TableIndexHeader>POS</TableIndexHeader>
          <TableTeamHeader>TEAM</TableTeamHeader>
          <TableHeader>PLD</TableHeader>
          <TableHeader>WON</TableHeader>
          <TableHeader>DRN</TableHeader>
          <TableHeader>LST</TableHeader>
          <TableHeader>FOR</TableHeader>
          <TableHeader>AG</TableHeader>
          <TableHeader>GD</TableHeader>
          <TableHeader>PTS</TableHeader>
        </TableRow>
        <TableRow>
          <TableIndexData>1st</TableIndexData>
          <TableTeamData><BlueIcon className='icon' /> Blue Team</TableTeamData>
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
          <TableIndexData>2nd</TableIndexData>
          <TableTeamData><RedIcon className='icon' /> Red Team</TableTeamData>
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
          <TableIndexData>3rd</TableIndexData>
          <TableTeamData><YellowIcon className='icon' /> Yellow Team</TableTeamData>
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

