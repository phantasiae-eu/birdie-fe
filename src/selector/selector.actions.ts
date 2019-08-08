import { DbColumns } from './selector.model'
import { ActionCreator } from 'redux'

export const CHANGE_SELECTOR = 'CHANGE_SELECTOR'
export const CHANGE_SELECTOR_REJECTED = 'CHANGE_SELECTOR_REJECTED'

export interface AChangeSelector {
    selector: DbColumns
    type: typeof CHANGE_SELECTOR
}

export interface AChangeSelectorRejected {
    err: Error
    type: typeof CHANGE_SELECTOR_REJECTED
}

export const changeSelector: ActionCreator<AChangeSelector> = (
    selector: DbColumns
): AChangeSelector => ({
    selector,
    type: CHANGE_SELECTOR,
})

export const changeSelectorRejected: ActionCreator<AChangeSelectorRejected> = (
    err: Error
): AChangeSelectorRejected => ({
    err,
    type: CHANGE_SELECTOR_REJECTED,
})
