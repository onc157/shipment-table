import { TableCell, TableRow } from '@material-ui/core';
import { OrderInterface } from '../../../type/Types';
import { COLOR_BLACK, COLOR_GREY } from "../../common/Style";
import { TextField } from "../../common/TextField";
import { InputField } from "../../common/InputFIeld";
import { InputFields } from '../index'

export const Order = ({ orderData }: {orderData: OrderInterface}) => {

    console.log(orderData)

    return (
        <TableRow>
            <TableCell>
                <TextField text={orderData.id} isLink={false} weight={400} color={COLOR_BLACK} size={0.875} />
            </TableCell>
            <TableCell>
                <InputField name="weight" text={orderData.customer} isLink={false} weight={600} color={COLOR_BLACK} size={0.875} />
            </TableCell>
            <TableCell>
                <InputField text={orderData.item} isLink={false} weight={400} color={COLOR_GREY} size={0.875} />
            </TableCell>
            <TableCell>
                <InputField text="Select!!!!" isLink={false} weight={400} color={COLOR_GREY} size={0.875} />
            </TableCell>
            <TableCell>2 Date Picker</TableCell>
            <TableCell>
                <InputFields>
                    <InputField text={orderData.shop?.name} isLink={false} weight={600} color={COLOR_BLACK} size={0.875} />
                    <InputField text={orderData.shop?.orderNumber} isLink={false} weight={400} color={COLOR_GREY} size={0.875} />
                </InputFields>
            </TableCell>
            <TableCell>
                <InputField text={orderData.weight} isLink={false} weight={400} color={COLOR_BLACK} size={0.875} />
            </TableCell>
            <TableCell>8</TableCell>
            <TableCell>9</TableCell>
        </TableRow>
    )
}