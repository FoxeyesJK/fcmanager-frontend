export const addRecord = (records, recordToAdd) => {
    console.log('recordRedux')
    console.log(records)
    console.log(recordToAdd)

    if (recordToAdd.id === 0) {
        console.log('add')
    
        //add
        return records.map(record => 
            record.id === 0 && record.tempRecordId === recordToAdd.tempRecordId
            ? { ...record, scoreMemberId: recordToAdd.scoreMemberId, assistMemberId: recordToAdd.assistMemberId }
            : record
        );
    }

    console.log('update')
    return records.map(record => 
        record.id === recordToAdd.id
        ? { ...record, scoreMemberId: recordToAdd.scoreMemberId, assistMemberId: recordToAdd.assistMemberId }
        : record
    );
}


export const addRowToRecord = (records, recordToAdd) => {
    console.log('addRowToRecord')
    return [...records, { ...recordToAdd}]
}

