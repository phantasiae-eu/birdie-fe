import { TableData } from './table.model'
import { ActionCreator } from 'redux'

export const TABLE_DATA_ACCEPTED = 'TABLE_DATA_ACCEPTED'

export interface ATableDataAccepted {
    tableData: TableData
    type: typeof TABLE_DATA_ACCEPTED
}

export const tableDataAccepted: ActionCreator<ATableDataAccepted> = (
    tableData: TableData
): ATableDataAccepted => ({
    tableData,
    type: TABLE_DATA_ACCEPTED,
})
