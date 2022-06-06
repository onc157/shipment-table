import { SyntheticEvent } from 'react'
import { Alert, Snackbar as MuiSnackbar } from '@mui/material'

interface ISnackbar {
    isOpen: boolean
    onClose: () => void
}

export const Snackbar = ({ isOpen, onClose }: ISnackbar) => {
    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        onClose()
    }

    return (
        <>
            <MuiSnackbar
                open={isOpen}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success">
                    Заказ успешно создан!
                </Alert>
            </MuiSnackbar>
        </>
    )
}
