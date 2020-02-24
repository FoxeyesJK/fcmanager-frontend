export const addRecord = (records, recordToAdd) => {

    if (recordToAdd.id === 0) {
    
        //add
        return records.map(record => 
            record.id === 0 && record.tempRecordId === recordToAdd.tempRecordId
            ? { ...record, scoreMemberId: recordToAdd.scoreMemberId, assistMemberId: recordToAdd.assistMemberId }
            : record
        );
    }

    return records.map(record => 
        record.id === recordToAdd.id
        ? { ...record, scoreMemberId: recordToAdd.scoreMemberId, assistMemberId: recordToAdd.assistMemberId }
        : record
    );
}


export const addRowToRecord = (records, recordToAdd) => {
    return [...records, { ...recordToAdd}]
}

