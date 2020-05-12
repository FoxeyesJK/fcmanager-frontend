import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import { selectStandings } from '../../redux/league/league.selectors';
import ordinal from 'ordinal';

import {
  StandingContainer,
  Title,
  Table,
  TableHead,
  TableBody,
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
  const standings = useSelector(selectStandings, shallowEqual)

  return (
    <StandingContainer>
      <Title>STANDINGS</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableIndexHeader>POS</TableIndexHeader>
            <TableTeamHeader>TEAM</TableTeamHeader>
            <TableHeader>MP</TableHeader>
            <TableHeader>W</TableHeader>
            <TableHeader>D</TableHeader>
            <TableHeader>L</TableHeader>
            <TableHeader isMobileOff>GF</TableHeader>
            <TableHeader isMobileOff>GA</TableHeader>
            <TableHeader>GD</TableHeader>
            <TableHeader>PTS</TableHeader>
          </TableRow>
          </TableHead>
          <TableBody>
          {
              standings.map((standing, index) =>
              <TableRow key={index}>
                <TableIndexData>
                  {
                    index !== 0 ? standings[index-1].points !== standing.points ? ordinal(index+1) : "" : ordinal(index+1)
                  }
                  </TableIndexData>
                <TableTeamData><TeamIcon teamLogoUrl={standing.teamLogoUrl}/><TableTeamText>{standing.teamName}</TableTeamText></TableTeamData>
                <TableData>{standing.played}</TableData>
                <TableData>{standing.won}</TableData>
                <TableData>{standing.drawn}</TableData>
                <TableData>{standing.lost}</TableData>
                <TableData isMobileOff>{standing.goalFor}</TableData>
                <TableData isMobileOff>{standing.goalAgainst}</TableData>
                <TableData>{standing.goalDifference}</TableData>
                <TableData>{standing.points}</TableData>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
   </StandingContainer>
  )
}

export default Standing;

