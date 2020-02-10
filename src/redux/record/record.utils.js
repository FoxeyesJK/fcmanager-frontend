export const addItemToRecord = (recordItems, recordItemToAdd) => {
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

export const updateItemToRecord = (recordItems, recordItemToAdd) => {
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
