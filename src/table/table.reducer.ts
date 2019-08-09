import { Reducer } from 'redux'
import { ATableDataAccepted, TABLE_DATA_ACCEPTED } from './table.actions'
import { TableStateReducer, defaultTable } from './table.model'

export const table: Reducer<TableStateReducer, ATableDataAccepted> = (
    state: TableStateReducer = defaultTable,
    action: ATableDataAccepted
): TableStateReducer => {
    switch (action.type) {
        case TABLE_DATA_ACCEPTED: {
            return action.tableData
        }

        default:
            return state
    }
}
