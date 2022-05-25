import { Tabs } from '../../components/Tabs'
import Header from '../../components/Header/Header'
import React from 'react'
import { clearGToken, getGToken } from '../../utils/storage'
import { Navigate } from 'react-router-dom'
import { useGetUserQuery } from '../../api/UserService'

export const ShipmentTable = () => {
    const { data, isLoading } = useGetUserQuery()

    if (!isLoading && !data) {
        clearGToken()
    }

    if (!getGToken()) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <Header user={{ data, isLoading }} />
            <Tabs />
        </>
    )
}
