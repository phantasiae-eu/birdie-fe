import { DbColumns } from './selector.model'
import { ActionCreator } from 'redux'

export const CHANGE_SELECTOR = 'CHANGE_SELECTOR'

export interface AChangeSelector {
    selector: DbColumns
    type: typeof CHANGE_SELECTOR
}

export const changeSelector: ActionCreator<AChangeSelector> = (
    selector: DbColumns
): AChangeSelector => ({
    selector,
    type: CHANGE_SELECTOR,
})
