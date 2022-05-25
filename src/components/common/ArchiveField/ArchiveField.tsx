import * as React from 'react'
import { IconButton } from '@material-ui/core'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined'
import { FieldsName } from '../../../type/Enums'
import { useUpdateOrderMutation } from '../../../api/OrdersService'
import { Loader } from '../Loader'

interface IArchiveField {
    _id: string
    name: FieldsName
}

export const ArchiveField = ({ _id, name }: IArchiveField) => {
    const [updateOrder, { isLoading: isUpdating }] = useUpdateOrderMutation()

    const archiveHandler = () => {
        updateOrder({ _id: _id, [name]: true })
    }

    return (
        <>
            {isUpdating ? (
                <Loader size={'sm'} />
            ) : (
                <IconButton color="primary" onClick={archiveHandler}>
                    <ArchiveOutlinedIcon />
                </IconButton>
            )}
        </>
    )
}
