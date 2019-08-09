import { connect } from 'react-redux'
import Table from './table.component'
import { AppState } from '../store/store.model'
import { TableStateProps } from './table.model'

const mapDispatchToProps = (state: AppState): TableStateProps => ({
    table: state.table,
    selector: state.selector.selector,
})

export default connect(
    mapDispatchToProps,
    null
)(Table)
