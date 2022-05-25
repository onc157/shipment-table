import React from 'react'
import './App.scss'
import { ShipmentTable } from './pages/ShipmentTable'
import { Login } from './pages/Login'
import MomentAdapter from '@material-ui/pickers/adapter/moment'
import { LocalizationProvider } from '@material-ui/pickers'
import moment from 'moment'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
            <LocalizationProvider
                dateLibInstance={moment}
                dateAdapter={MomentAdapter}
                locale="ru"
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ShipmentTable />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </LocalizationProvider>
        </>
    )
}

export default App
