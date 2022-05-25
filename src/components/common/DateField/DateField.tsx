import * as React from 'react'
import { useState } from 'react'
import { useUpdateOrderMutation } from '../../../api/OrdersService'
import { Loader } from '../Loader'
import { FieldsName } from '../../../type/Enums'
import { DateFieldStyled } from './DateField.style'
import moment from 'moment'
import 'moment/locale/ru'
import { DatePicker } from '@material-ui/pickers'
import { ClickAwayListener } from '@mui/material'

moment.locale('ru')

interface IDateField {
    date?: Date
    _id: string
    name: FieldsName
    disabled?: boolean
}

export const DateField = ({
    date,
    _id,
    name,
    disabled = false,
}: IDateField) => {
    const [updateOrder, { isLoading: isUpdating }] = useUpdateOrderMutation()

    const [open, setOpen] = useState(false)
    const [dateValue, setDateValue] = useState<Date | null>(
        date ? new Date(date) : null
    )

    const updateDateHandler = (date: Date | null) => {
        if (date) {
            setDateValue(date)
            handleOpen()
            updateOrder({ _id: _id, [name]: date })
        }
    }

    const handleOpen = () => {
        setOpen((prev) => !prev)
    }

    const handleClickAway = () => {
        setOpen(false)
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div style={{ minWidth: '140px' }}>
                {isUpdating ? (
                    <Loader size={'sm'} />
                ) : (
                    <DatePicker
                        open={open}
                        onOpen={handleOpen}
                        value={dateValue}
                        mask="__.__.____"
                        onChange={(newValue) => updateDateHandler(newValue)}
                        renderInput={(props) => <DateFieldStyled {...props} />}
                        disabled={disabled}
                    />
                )}
            </div>
        </ClickAwayListener>
    )
}
