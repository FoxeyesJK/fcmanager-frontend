import React from 'react';
import moment from 'moment';

import {
    TableRow,
    TableData
} from './fixture-item.styles.jsx';

const FixtureItem = ({match, handleClick, id, selectedMatchId}) => {
    const { scheduledAt, homeTeamName, homeScore, awayTeamName, awayScore} = match;
    
    return (
    <TableRow onClick={() => handleClick(id, '')} selectedMatchId={selectedMatchId} matchId={match.id}>
        <TableData IsCenter>{moment(scheduledAt).format('LT')}</TableData>
        <TableData>{homeTeamName}</TableData>
        <TableData>{homeScore} - {awayScore}</TableData>
        <TableData>{awayTeamName}</TableData>
    </TableRow>
    );
}

export default FixtureItem;