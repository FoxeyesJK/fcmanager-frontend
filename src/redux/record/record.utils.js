export const addRecord = (records, recordToAdd) => {
    console.log('recordRedux')
    console.log(records)
    console.log(recordToAdd)

    if (recordToAdd.id === 0) {
        //add
        return records.map(record => 
            record.tempRecordId === recordToAdd.tempRecordId
            ? { ...record, scoreMemberId: recordToAdd.scoreMemberId, assistMemberId: recordToAdd.assistMemberId }
            : record
        );
    }
    //update

    return records.map(record => 
        record.Id === recordToAdd.Id
        ? { ...record, scoreMemberId: recordToAdd.scoreMemberId, assistMemberId: recordToAdd.assistMemberId }
        : record
    );
}

export const updateRecord = (recordItems, recordItemToAdd) => {
    const existingRecordItem = recordItems.find(
        recordItem => recordItem.id === recordItemToAdd.id
    )

    if (existingRecordItem) {
        return recordItems.map(recordItem => 
            recordItem.id === recordItemToAdd.id
            ? { ...recordItem, quantity: recordItem.quantity + 1 }
            : recordItem
        );
    }
    
    return [...recordItems, { ...recordItemToAdd, quantity: 1}];
}
