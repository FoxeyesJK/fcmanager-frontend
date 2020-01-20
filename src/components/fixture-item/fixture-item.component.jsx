import React from 'react';
import moment from 'moment';

import {
    TableRow,
    TableData
} from './fixture-item.styles.jsx';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';



const FixtureItem = ({match, handleClick, type, id}) => {
    const { time, homeTeamName, homeScore, awayTeamName, awayScore} = match;
    
    return (
    <TableRow onClick={() => handleClick(id, type)} >
        {/* <TableData>{moment(time).format('ddd')}, {moment(time).add(10, 'days').calendar()}</TableData> */}
        <TableData IsCenter>{moment(time).format('LT')}</TableData>
        <TableData>{homeTeamName} vs {awayTeamName}</TableData>
        <TableData>{homeScore} - {awayScore}</TableData>
        <TableData>2020 Spring Championship League</TableData>
    </TableRow>
    );
}

export default FixtureItem;