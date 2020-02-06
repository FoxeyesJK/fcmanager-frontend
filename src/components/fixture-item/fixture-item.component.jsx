import React from 'react';
import moment from 'moment';

import {
    TableRow,
    TableData
} from './fixture-item.styles.jsx';

const FixtureItem = ({match, handleClick, type, id}) => {
    const { scheduledAt, homeTeamName, homeScore, awayTeamName, awayScore} = match;
    
    return (
    <TableRow onClick={() => handleClick(id, type)} >
        <TableData IsCenter>{moment(scheduledAt).format('LT')}</TableData>
        <TableData>{homeTeamName} vs {awayTeamName}</TableData>
        <TableData>{homeScore} - {awayScore}</TableData>
        <TableData>2020 Spring</TableData>
    </TableRow>
    );
}

export default FixtureItem;