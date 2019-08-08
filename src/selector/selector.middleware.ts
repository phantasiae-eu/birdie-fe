import { Middleware, Dispatch } from 'redux'
import { AppState } from '../store/store.model'
import {
    AChangeSelector,
    CHANGE_SELECTOR,
    changeSelectorRejected,
    changeSelectorAccepted,
    AChangeSelectorAccepted,
} from './selector.actions'
import axios, { AxiosResponse } from 'axios'

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
                await axios(
                    `http://localhost:3001/census?field=${action.selector}`
                ).then((res: AxiosResponse): [AChangeSelectorAccepted] => {
                    let rows: any[] = []
                    let totNonDisplayed = 0
                    let nonDisplayedCategories = 0
                    res.data.forEach((element: any) => {
                        if (rows.length === 100) {
                            totNonDisplayed++
                        } else {
                            rows.push({
                                category:
                                    element[
                                        action.selector.replace(/%20/g, ' ')
                                    ],
                                count: 1,
                                averageAge: element.age,
                            })
                        }
                    })
                    console.log(res.data)
                    console.log(rows)
                    console.log('totNonDisplayed: ', totNonDisplayed)
                    // {
                    // rows:[{
                    //   category: string
                    //   count: number
                    //   averageAge: number
                    // }]
                    // beyond 100 categories
                    // totNonDisplayed: number
                    // nonDisplayedCategories: number
                    // }

                    return [
                        store.dispatch(changeSelectorAccepted(action.selector)),
                    ]
                })
            } catch (err) {
                store.dispatch(changeSelectorRejected(err))
            }
            break

        default:
            break
    }
    return result
}
