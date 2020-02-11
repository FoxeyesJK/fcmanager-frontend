import RecordActionTypes from './record.types';

export const fetchRecordsStart = recordsMap => ({
    type: RecordActionTypes.FETCH_RECORDS_START,
    payload: recordsMap
})

export const fetchRecordsSuccess = recordsMap => ({
    type: RecordActionTypes.FETCH_RECORDS_SUCCESS,
    payload: recordsMap
})

export const fetchRecordsFailure = errorMessage => ({
    type: RecordActionTypes.FETCH_RECORDS_FAILURE,
    payload: errorMessage
})

export const postRecordsStart = recordsMap => ({
    type: RecordActionTypes.POST_RECORDS_START,
    payload: recordsMap
})

export const postRecordsSuccess = recordsMap => ({
    type: RecordActionTypes.POST_RECORDS_SUCCESS,
    payload: recordsMap
})

export const postRecordsFailure = errorMessage => ({
    type: RecordActionTypes.POST_RECORDS_FAILURE,
    payload: errorMessage
})

export const putRecordsStart = recordsMap => ({
    type: RecordActionTypes.PUT_RECORDS_START,
    payload: recordsMap
})

export const putRecordsSuccess = recordsMap => ({
    type: RecordActionTypes.PUT_RECORDS_SUCCESS,
    payload: recordsMap
})

export const putRecordsFailure = errorMessage => ({
    type: RecordActionTypes.PUT_RECORDS_FAILURE,
    payload: errorMessage
})

export const addRecord = record => ({
    type: RecordActionTypes.ADD_RECORD,
    payload: record
})

export const updateRecord = record => ({
    type: RecordActionTypes.UPDATE_RECORD,
    payload: record
})

