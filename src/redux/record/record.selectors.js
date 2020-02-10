import { createSelector } from 'reselect';

const selectRecord = state => state.record;

export const selectRecords = createSelector(
    [selectRecord],
    record => record.records
)

export const selectIsRecordFetching = createSelector(
    [selectRecord],
    record => record.isFetching
)

export const selectIsRecordsLoaded = createSelector(
    [selectRecord],
    record => !!record.records
)