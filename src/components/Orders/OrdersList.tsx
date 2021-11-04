import { TableBody } from '@material-ui/core';
import { orders } from '../../utils/orders';
import { Order } from './Order';

export const OrdersList = () => {
    return (
        <TableBody>
            {orders.map((order) => <Order orderData={order} key={order.id}/>  )}
        </TableBody>
    )
}