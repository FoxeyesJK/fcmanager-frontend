
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


export const updateLocationToMatch = (matches, locationValue) => {

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

    const existingNewMatch = matches.find(m => m.id === 0)

    if (existingNewMatch) {
        return matches.map(match => 
            match.id === 0 
            ? {...match, ...payload }
            : match)
    }
        
    return [...matches, payload];
}

export const addNewMatch = (matches, matchToAdd) => {
    const existingMatch = matches.find(m => m.id === matchToAdd.id)

    if (existingMatch) {
        return matches.map(match =>
            match.id === matchToAdd.id
            ? { ...match, matchToAdd }
        : match
        )
    }

    return [...matches, {...matchToAdd}];
}
