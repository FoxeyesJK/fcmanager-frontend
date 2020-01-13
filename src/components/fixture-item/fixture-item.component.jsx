import React from 'react';
import moment from 'moment';

import {
    TableRow,
    TableData
} from './fixture-item.styles.jsx';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';



const FixtureItem = ({match, handleClick, id}) => {
    const { time, HomeTeamName, HomeScore, AwayTeamName, AwayScore} = match;
    
    return (
    <TableRow onClick={() => handleClick(id)} >
        {/* <TableData>{moment(time).format('ddd')}, {moment(time).add(10, 'days').calendar()}</TableData> */}
        <TableData IsCenter>{moment(time).format('LT')}</TableData>
        <TableData>{HomeTeamName} vs {AwayTeamName}</TableData>
        <TableData>{HomeScore} - {AwayScore}</TableData>
        <TableData>2020 Spring Championship League</TableData>
    </TableRow>
    );
}

export default FixtureItem;