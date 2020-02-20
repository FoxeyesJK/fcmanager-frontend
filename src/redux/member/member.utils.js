export const addNewMember = (members, memberToAdd) => {
    const existingMember = members.find(m => m.id === memberToAdd.id)

    if (existingMember) {
        return members.map(member =>
            member.id === memberToAdd.id
            ? { ...member, memberToAdd }
        : member
        )
    }

    return [...members, {...memberToAdd}];
}

export const updateMember = (members, payload) => {
    const existingMember = members.find(m => m.id === payload.id)
    
    if (existingMember) {
        return members.map(member =>
            member.id === payload.id
            ? { ...member, payload }
            : member
            )
        }

    const existingNewMember = members.find(m => m.id === 0)

    if (existingNewMember) {
        console.log('in')
        return members.map(member => 
            member.id === 0 
            ? {...member, ...payload }
            : member)
    }
        
    return [...members, payload];
}