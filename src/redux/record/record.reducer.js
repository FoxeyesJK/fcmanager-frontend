import RecordActionTypes from './record.types';
import { addItemToRecord, updateItemToRecord } from './record.utils';

const INITIAL_STATE = {
    records: [],
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
        case RecordActionTypes.ADD_RECORDS:
            return {
                ...state,
                recordItems: addItemToRecord(state.recordItems, action.payload)
            }
        case RecordActionTypes.UPDATE_RECORDS:
            return {
                ...state,
                recordItems: updateItemToRecord(state.recordItems, action.payload)
            }
        default:
            return state;
    }
}

export default recordReducer;