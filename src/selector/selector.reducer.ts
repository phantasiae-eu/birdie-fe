import { Reducer } from 'redux'
import {
    SelectorStateReducer,
    defaultSelectorStateReducer,
} from './selector.model'
import {
    AChangeSelectorAccepted,
    CHANGE_SELECTOR_ACCEPTED,
} from './selector.actions'

export const selector: Reducer<
    SelectorStateReducer,
    AChangeSelectorAccepted
> = (
    state: SelectorStateReducer = defaultSelectorStateReducer,
    action: AChangeSelectorAccepted
): SelectorStateReducer => {
    switch (action.type) {
        case CHANGE_SELECTOR_ACCEPTED: {
            return { selector: action.selector }
        }

        default:
            return state
    }
}
