import React from 'react'
import Selector from '../selector.component'
import renderer from 'react-test-renderer'
import { CHANGE_SELECTOR, AChangeSelector } from '../selector.actions'
import { DbColumns } from '../selector.model'
import store from '../../store/store'
describe('selector.component', (): void => {
    it('renders without crashing', (): void => {
        const tree = renderer
            .create(
                <Selector
                    dispatch={store.dispatch}
                    selector={undefined}
                    changeSelector={(): AChangeSelector => ({
                        selector: DbColumns.birthCountry,
                        type: CHANGE_SELECTOR,
                    })}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})

export default undefined
