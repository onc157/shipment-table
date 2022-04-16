import { TableBody } from '@material-ui/core'
import { Order } from './Order'
import { IOrders } from '../../type/Types'
import { Loader } from '../common'

export const OrdersList = ({
    orders,
    isLoading,
}: {
    orders: IOrders
    isLoading: boolean
}) => {
    return (
        <TableBody>
            {isLoading ? (
                <Loader />
            ) : (
                orders?.map((order, i) => (
                    <Order orderData={order} key={i} isLoading={isLoading} />
                ))
            )}
        </TableBody>
    )
}
