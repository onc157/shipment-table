import * as React from 'react'
import { MenuItem } from '@material-ui/core'
import { useState } from 'react'
import { SelectStyled } from './Select.style'
import { useUpdateOrderMutation } from '../../../api/OrdersService'
import { Loader } from '../Loader'
import { IStatus, IService } from '../../../type/Types'

interface ISelectField {
    dataValue?: string
    _id: string
    name: string
    values: Array<IStatus | IService>
}

export const SelectField = ({ dataValue, _id, name, values }: ISelectField) => {
    const [updateOrder, { isLoading: isUpdating }] = useUpdateOrderMutation()

    const [value, setValue] = useState(dataValue)

    const updateValue = (value: string) => {
        updateOrder({ _id: _id, [name]: value })
    }

    const handleChange = ({
        target,
    }: React.ChangeEvent<{ value: unknown }>) => {
        setValue(target.value as string)
        updateValue(target.value as string)
    }

    return (
        <>
            {isUpdating ? (
                <Loader size={'sm'} />
            ) : (
                <SelectStyled
                    labelId="status-select"
                    id="status-select-id"
                    value={value}
                    label="Status"
                    onChange={handleChange}
                >
                    {values.map((status) => (
                        <MenuItem value={status.value} key={status.value}>
                            {status.name}
                        </MenuItem>
                    ))}
                </SelectStyled>
            )}
        </>
    )
}

export default SelectField
