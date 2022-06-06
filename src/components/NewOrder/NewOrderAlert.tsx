import React from 'react'
import { Loader } from '../common'
import { Backdrop } from '@mui/material'

export const NewOrderAlert = () => {
    return (
        <Backdrop
            open
            sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: 2000,
            }}
        >
            <Loader color="primary" />
        </Backdrop>
    )
}
