import { SelectorStateReducer } from '../selector/selector.model'
import { TableStateReducer } from '../table/table.model'

export interface AppState {
    selector: SelectorStateReducer
    table: TableStateReducer
}
