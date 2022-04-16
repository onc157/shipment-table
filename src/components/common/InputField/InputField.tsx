import * as React from 'react'
import { useState } from 'react'
import { InputFieldStyled } from '.'
import { useUpdateOrderMutation } from '../../../api/OrdersService'
import { FieldsName } from '../../../type/Enums'
import { Loader } from '../Loader'

interface InputFieldI {
    name: FieldsName
    text?: string | number
    placeholder?: string
    isLink: Boolean
    weight: number
    color: string
    fontSize: number
    _id: string
}

export const InputField = (props: InputFieldI) => {
    const { name, text, _id } = props

    const [value, setValue] = useState(text || '')

    const [updateOrder, { isLoading: isUpdating }] = useUpdateOrderMutation()

    const inputHandler = ({ target }: { target: HTMLInputElement }) => {
        setValue(target.value)
    }

    const updateHandler = ({ target }: { target: HTMLInputElement }) => {
        if (!target.value) {
            setValue(`${text}`)
        } else {
            updateOrder({ id: _id, [name]: target.value })
        }
    }

    return (
        <>
            {isUpdating ? (
                <Loader size={'sm'} />
            ) : (
                <InputFieldStyled
                    value={value}
                    onChange={inputHandler}
                    onBlur={updateHandler}
                    {...props}
                />
            )}
        </>
    )
}
