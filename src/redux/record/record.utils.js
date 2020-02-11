export const addRecord = (records, recordToAdd) => {
    console.log('recordRedux')
    console.log(records)
    console.log(recordToAdd)

    //records 없을때 예외처리
    if (recordToAdd.id === 0) {
        console.log('add')
        console.log(records.find(record => record.tempRecordId === recordToAdd.tempRecordId))
        //add
        return records.map(record => 
            record.tempRecordId === recordToAdd.tempRecordId
            ? { ...record, scoreMemberId: recordToAdd.scoreMemberId, assistMemberId: recordToAdd.assistMemberId }
            : [...records, {...recordToAdd}]
            //push but instead of push
        );
    }
    //update

    return records.map(record => 
        record.Id === recordToAdd.Id
        ? { ...record, scoreMemberId: recordToAdd.scoreMemberId, assistMemberId: recordToAdd.assistMemberId }
        : record
    );
}

export const addRowToRecord = (records, recordToAdd) => {
    console.log('addRowToRecord')
    return [...records, {...recordToAdd}]
}

