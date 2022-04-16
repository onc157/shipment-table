import { TableCell, TableRow } from '@material-ui/core'
import { IOrder } from '../../../type/Types'
import { InputFields } from '../index'
import { SelectField } from '../../common/SelectField'
import { FieldsConfig } from '../../../utils/FieldsConfig'
import {
    ArchiveField,
    DateField,
    InputField,
    Loader,
    TextField,
} from '../../common'

export const Order = ({
    orderData,
    isLoading,
}: {
    orderData: IOrder
    isLoading: boolean
}) => {
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <TableRow>
                    <TableCell>
                        <TextField text={orderData.id} {...FieldsConfig.id} />
                    </TableCell>
                    <TableCell>
                        <InputField
                            text={orderData.customer}
                            _id={orderData._id}
                            {...FieldsConfig.customer}
                        />
                    </TableCell>
                    <TableCell>
                        <InputField
                            text={orderData.item}
                            _id={orderData._id}
                            {...FieldsConfig.item}
                        />
                    </TableCell>
                    <TableCell>
                        <SelectField
                            dataValue={orderData.status}
                            _id={orderData._id}
                            {...FieldsConfig.status}
                        />
                    </TableCell>
                    <TableCell>
                        <DateField
                            date={orderData.orderDate}
                            _id={orderData._id}
                            {...FieldsConfig.orderDate}
                        />
                        <DateField
                            date={orderData.shipmentDate}
                            _id={orderData._id}
                            {...FieldsConfig.shipmentDate}
                        />
                    </TableCell>
                    <TableCell>
                        <InputFields>
                            <SelectField
                                dataValue={orderData.shop?.name}
                                _id={orderData._id}
                                {...FieldsConfig.serviceName}
                            />
                            <InputField
                                text={orderData.shop?.orderNumber}
                                _id={orderData._id}
                                {...FieldsConfig.serviceOrderNumber}
                            />
                        </InputFields>
                    </TableCell>
                    <TableCell>
                        <InputField
                            _id={orderData._id}
                            text={orderData.weight}
                            {...FieldsConfig.weight}
                        />
                    </TableCell>
                    <TableCell>
                        <InputField
                            _id={orderData._id}
                            text={orderData.tracking}
                            {...FieldsConfig.tracking}
                        />
                    </TableCell>
                    <TableCell>
                        <ArchiveField
                            _id={orderData._id}
                            {...FieldsConfig.isArchive}
                        />
                    </TableCell>
                </TableRow>
            )}
        </>
    )
}
