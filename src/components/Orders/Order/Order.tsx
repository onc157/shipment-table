import { TableCell, TableRow } from '@material-ui/core';
import { IOrder } from '../../../type/Types';
import { COLOR_BLACK, COLOR_GREY } from "../../common/Style";
import { TextField } from "../../common/TextField";
import { InputField } from "../../common/InputFIeld";
import { InputFields } from '../index'
import {FieldsName} from "../../../type/Enums";
import {Select} from "../../common/Select";
import {DateField} from "../../common/DateField";
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';

export const Order = ({ orderData }: {orderData: IOrder}) => {

    console.log(orderData)

    return (
        <TableRow>
            <TableCell>
                <TextField text={orderData.id} isLink={false} weight={400} color={COLOR_BLACK} size={0.875} />
            </TableCell>
            <TableCell>
                <InputField name={FieldsName.CUSTOMER} text={orderData.customer} isLink={false} weight={600} color={COLOR_BLACK} size={0.875} />
            </TableCell>
            <TableCell>
                <InputField text={orderData.item} isLink={false} weight={400} color={COLOR_GREY} size={0.875} />
            </TableCell>
            <TableCell>
                <Select />
            </TableCell>
            <TableCell>
                <DateField />
                <DateField />
            </TableCell>
            <TableCell>
                <InputFields>
                    <Select />
                    <InputField text={orderData.item} isLink={false} weight={400} color={COLOR_GREY} size={0.875} />
                    {/*<InputField text={orderData.shop?.name} isLink={false} weight={600} color={COLOR_BLACK} size={0.875} />*/}
                    {/*<InputField text={orderData.shop?.orderNumber} isLink={false} weight={400} color={COLOR_GREY} size={0.875} />*/}
                </InputFields>
            </TableCell>
            <TableCell>
                {/*<InputField name={FieldsName.WEIGHT} text={orderData.weight} isLink={false} weight={400} color={COLOR_BLACK} size={0.875} />*/}
                <InputField text={orderData.item} isLink={false} weight={400} color={COLOR_GREY} size={0.875} />
            </TableCell>
            <TableCell>
                <InputField text={orderData.item} isLink={false} weight={400} color={COLOR_GREY} size={0.875} />
            </TableCell>
            <TableCell>
                <ArchiveOutlinedIcon />
            </TableCell>
        </TableRow>
    )
}