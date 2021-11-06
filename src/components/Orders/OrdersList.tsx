import {CircularProgress, TableBody, TableCell, TableRow} from '@material-ui/core';
import { Order } from './Order';
import {OrdersInterface} from "../../type/Types";
import {useAppSelector} from "../../app/hooks";

export const OrdersList = ({ orders }: { orders: OrdersInterface }) => {
    const status = useAppSelector(state => state.order.status);

    return (
        <TableBody>
            {status !== 'resolved'
                ? <TableRow>
                    <TableCell>
                        <CircularProgress />
                    </TableCell>
                </TableRow>
                : orders?.map((order, i) => <Order orderData={order} key={i}/>  )}
        </TableBody>
    )
}