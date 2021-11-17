import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import App from './App'

const store = configureStore()

const jsx = (
    <BrowserRouter>
        <Provider store={store} >
            <App />
        </Provider>
    </BrowserRouter>
)

ReactDOM.render( jsx, document.getElementById('root') )