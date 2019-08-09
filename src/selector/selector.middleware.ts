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
import { Row, DataElement } from './selector.model'
import { TableData } from '../table/table.model'
import { tableDataAccepted, ATableDataAccepted } from '../table/table.actions'

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
                ).then((res: AxiosResponse): [
                    AChangeSelectorAccepted,
                    ATableDataAccepted
                ] => {
                    let rows: Row[] = []
                    let totNonDisplayed = 0
                    let nonDisplayedCategories: string[] = []
                    res.data.forEach((element: DataElement): void => {
                        if (
                            rows.some(
                                (item: Row): boolean =>
                                    item.category ===
                                    element[
                                        action.selector.replace(/%20/g, ' ')
                                    ]
                            )
                        ) {
                            let itemToUpdate: Row | undefined = rows.find(
                                (item: Row): boolean =>
                                    item.category ===
                                    element[
                                        action.selector.replace(/%20/g, ' ')
                                    ]
                            )
                            if (itemToUpdate) {
                                itemToUpdate.count++
                                itemToUpdate.averageAge =
                                    itemToUpdate.averageAge +
                                    (element.age - itemToUpdate.averageAge) /
                                        itemToUpdate.count
                            }
                        } else if (rows.length < 100) {
                            rows.push({
                                count: 1,
                                averageAge: element.age,
                                category: element[
                                    action.selector.replace(/%20/g, ' ')
                                ] as string,
                            })
                        } else {
                            totNonDisplayed++
                            if (
                                !nonDisplayedCategories.some(
                                    (item: string): boolean =>
                                        item ===
                                        element[
                                            action.selector.replace(/%20/g, ' ')
                                        ]
                                )
                            ) {
                                nonDisplayedCategories.push(element[
                                    action.selector.replace(/%20/g, ' ')
                                ] as string)
                            }
                        }
                    })
                    const nonDisplayedCategoriesnumb: number =
                        nonDisplayedCategories.length
                    const tableData: TableData = {
                        rows: rows.map(
                            (item: Row): Row => ({
                                ...item,
                                averageAge: Math.round(item.averageAge),
                            })
                        ),
                        totNonDisplayed,
                        nonDisplayedCategoriesnumb,
                    }

                    return [
                        store.dispatch(changeSelectorAccepted(action.selector)),
                        store.dispatch(tableDataAccepted(tableData)),
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
