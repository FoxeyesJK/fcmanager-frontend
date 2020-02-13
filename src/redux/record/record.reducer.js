import RecordActionTypes from './record.types';
import { addRecord, addRowToRecord } from './record.utils';

const INITIAL_STATE = {
    records: [],
    matchId: 0,
    isFetching: false,
    errorMessage: undefined
};

const recordReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RecordActionTypes.FETCH_RECORDS_START:
        case RecordActionTypes.POST_RECORDS_START:
        case RecordActionTypes.PUT_RECORDS_START:
            return {
                ...state,
                isFetching: true
            }
        case RecordActionTypes.FETCH_RECORDS_SUCCESS:
        case RecordActionTypes.POST_RECORDS_SUCCESS:
        case RecordActionTypes.PUT_RECORDS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                records: action.payload
            }
        case RecordActionTypes.FETCH_RECORDS_FAILURE:
        case RecordActionTypes.POST_RECORDS_FAILURE:
        case RecordActionTypes.PUT_RECORDS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case RecordActionTypes.ADD_RECORD:
            return {
                ...state,
                records: addRecord(state.records, action.payload)
            }
        case RecordActionTypes.ADD_ROW_TO_RECORD:
            return {
                ...state,
                records: addRowToRecord(state.records, action.payload)
            }
        default:
            return state;
    }
}

export default recordReducer;