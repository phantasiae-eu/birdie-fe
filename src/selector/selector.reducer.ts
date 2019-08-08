import { Reducer } from 'redux'
import {
    SelectorStateReducer,
    defaultSelectorStateReducer,
} from './selector.model'
import { AChangeSelector, CHANGE_SELECTOR } from './selector.actions'

export const selector: Reducer<SelectorStateReducer, AChangeSelector> = (
    state: SelectorStateReducer = defaultSelectorStateReducer,
    action: AChangeSelector
): SelectorStateReducer => {
    switch (action.type) {
        case CHANGE_SELECTOR: {
            return { selector: action.selector }
        }

        default:
            return state
    }
}
