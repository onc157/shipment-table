import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import { Main } from './components/Main'
import MomentAdapter from '@material-ui/pickers/adapter/moment'
import { LocalizationProvider } from '@material-ui/pickers'
import moment from 'moment'

function App() {
    return (
        <>
            <LocalizationProvider
                dateLibInstance={moment}
                dateAdapter={MomentAdapter}
                locale="ru"
            >
                <Header />
                <Main />
            </LocalizationProvider>
        </>
    )
}

export default App
