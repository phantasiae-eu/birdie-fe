import React, { ReactElement } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'

const App: React.FC = (): ReactElement => {
    return (
        <Provider store={store}>
            <div className="App"></div>
        </Provider>
    )
}

export default App
