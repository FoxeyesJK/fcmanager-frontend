import React from 'react';
import moment from 'moment';

import CustomIcon from '../../components/custom-icon-button/custom-icon-button.component';

import {
    TableRow,
    TableData,
} from './fixture-item.styles.jsx';

const FixtureItem = ({match, handleClick, selectedMatchId, isAdmin }) => {
    const { id, scheduledAt, homeTeamName, homeScore, awayTeamName, awayScore} = match;
    
    return (
    <TableRow onClick={() => handleClick(id, '')} selectedMatchId={selectedMatchId} matchId={match.id}>
        <TableData IsCenter>{moment(scheduledAt).format('LT')}</TableData>
        <TableData>{homeTeamName}</TableData>
        <TableData>{homeScore} - {awayScore}</TableData>
        <TableData>{awayTeamName}</TableData>
        <TableData>
        {
            isAdmin ? 
                selectedMatchId === id ? 
                    <CustomIcon type='delete-blue' id={id} handleClick={handleClick} /> : 
                    <CustomIcon type='delete' id={id} handleClick={handleClick} /> 
            : null
        }
        </TableData>
    </TableRow>
    );
}

export default FixtureItem;