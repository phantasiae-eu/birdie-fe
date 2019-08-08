import { Middleware, Dispatch } from 'redux'
import { AppState } from '../store/store.model'
import {
    AChangeSelector,
    CHANGE_SELECTOR,
    changeSelectorRejected,
} from './selector.actions'

export const selectorMiddleware: Middleware<{}, AppState> = (
    store
): ((
    next: Dispatch<AChangeSelector>
) => (action: AChangeSelector) => Promise<AChangeSelector>) => (
    next: Dispatch<AChangeSelector>
): ((action: AChangeSelector) => Promise<AChangeSelector>) => async (
    action: AChangeSelector
): Promise<AChangeSelector> => {
    const result = next(action)
    switch (action.type) {
        case CHANGE_SELECTOR:
            try {
            } catch (err) {
                store.dispatch(changeSelectorRejected(err))
            }
            break

        default:
            break
    }
    return result
}
