import { connect } from 'react-redux'
import Selector from './selector.component'
import { AppState } from '../store/store.model'
import {
    SelectorStateProps,
    SelectorDispatchProps,
    DbColumns,
} from '../selector/selector.model'
import { Dispatch } from 'redux'
import { changeSelector, AChangeSelector } from './selector.actions'

const mapStateToProps = (state: AppState): SelectorStateProps => ({
    selector: state.selector.selector,
})

const mapDispatchToProps = (dispatch: Dispatch): SelectorDispatchProps => ({
    changeSelector: (selector: DbColumns): AChangeSelector =>
        dispatch(changeSelector(selector)),
    dispatch,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Selector)
