import { Row, DbColumns } from '../selector/selector.model'
export interface TableData {
    rows: Row[]
    totNonDisplayed: number
    nonDisplayedCategoriesnumb: number
}

export interface TableStateReducer {
    rows: Row[]
    totNonDisplayed: number
    nonDisplayedCategoriesnumb: number
}

export const defaultTable = {
    rows: [],
    totNonDisplayed: 0,
    nonDisplayedCategoriesnumb: 0,
}

export interface TableStateProps {
    table: TableData
    selector: DbColumns | undefined
}
