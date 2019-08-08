import React, { ReactElement } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import Selector from './selector/selector.container'

const App: React.FC = (): ReactElement => {
    return (
        <Provider store={store}>
            <Selector />
        </Provider>
    )
}

export default App
