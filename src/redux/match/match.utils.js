export const updateHomeTeamToMatch = (matches, selectedMatchId, homeTeamId) => {
    const existingMatch = matches.find(m => m.id === selectedMatchId)
    if (existingMatch) {
        return matches.map(match =>
            match.id === selectedMatchId
            ? { ...match, homeTeamId: homeTeamId }
        : match
        )
    }

    return matches;
}

export const updateAwayTeamToMatch = (matches, selectedMatchId, awayTeamId) => {
    const existingMatch = matches.find(m => m.id === selectedMatchId)
    if (existingMatch) {
        return matches.map(match =>
            match.id === selectedMatchId
            ? { ...match, awayTeamId: awayTeamId }
        : match
        )
    }

    return matches;
}

export const updateMatch = (matches, payload) => {
    const existingMatch = matches.find(m => m.id === payload.id)

    if (existingMatch) {
        return matches.map(match =>
            match.id === payload.id
            ? { ...match, payload }
        : match
        )
    }

    return matches;
}





//     if (recordToAdd.id === 0) {
//         console.log('add')
    
//         //add
//         return records.map(record => 
//             record.id === 0 && record.tempRecordId === recordToAdd.tempRecordId
//             ? { ...record, scoreMemberId: recordToAdd.scoreMemberId, assistMemberId: recordToAdd.assistMemberId }
//             : record
//         );
//     }

//     console.log('update')
//     return records.map(record => 
//         record.id === recordToAdd.id
//         ? { ...record, scoreMemberId: recordToAdd.scoreMemberId, assistMemberId: recordToAdd.assistMemberId }
//         : record
//     );
// }