import RecordActionTypes from './record.types';

export const fetchRecordsStart = records => ({
    type: RecordActionTypes.FETCH_RECORDS_START,
    payload: records
})

export const fetchRecordsSuccess = records => ({
    type: RecordActionTypes.FETCH_RECORDS_SUCCESS,
    payload: records
})

export const fetchRecordsFailure = errorMessage => ({
    type: RecordActionTypes.FETCH_RECORDS_FAILURE,
    payload: errorMessage
})

export const postRecordsStart = recordsMap => ({
    type: RecordActionTypes.POST_RECORDS_START,
    payload: recordsMap
})

export const postRecordsSuccess = ({ records, matchId }) => ({
    type: RecordActionTypes.POST_RECORDS_SUCCESS,
    payload: records, matchId
})

export const postRecordsFailure = errorMessage => ({
    type: RecordActionTypes.POST_RECORDS_FAILURE,
    payload: errorMessage
})

export const putRecordsStart = recordsMap => ({
    type: RecordActionTypes.PUT_RECORDS_START,
    payload: recordsMap
})

export const putRecordsSuccess = records => ({
    type: RecordActionTypes.PUT_RECORDS_SUCCESS,
    payload: records
})

export const putRecordsFailure = errorMessage => ({
    type: RecordActionTypes.PUT_RECORDS_FAILURE,
    payload: errorMessage
})

export const addRecord = record => ({
    type: RecordActionTypes.ADD_RECORD,
    payload: record
})

export const addRowToRecord = record => ({
    type: RecordActionTypes.ADD_ROW_TO_RECORD,
    payload: record
})

export const toggleRecordHidden = hidden => ({
    type: RecordActionTypes.TOGGLE_RECORD_HIDDEN,
    hidden: hidden
})

