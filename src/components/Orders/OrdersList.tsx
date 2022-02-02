import {CircularProgress, TableBody, TableCell, TableRow} from '@material-ui/core';
import { Order } from './Order';
import {IOrders} from "../../type/Types";
import {useAppSelector} from "../../app/hooks";

export const OrdersList = ({ orders, status }: { orders: IOrders, status: string }) => {
    // const status = useAppSelector(state => state.order.status);

    return (
        <TableBody>
            {status !== 'fulfilled'
                ? <TableRow>
                    <TableCell>
                        <CircularProgress />
                    </TableCell>
                </TableRow>
                : orders?.map((order, i) => <Order orderData={order} key={i}/>  )}
        </TableBody>
    )
}