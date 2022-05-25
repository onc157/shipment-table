import { TableBody, TableRow } from '@material-ui/core'
import { Order } from './Order'
import { IOrders } from '../../type/Types'
import { Loader } from '../common'
import { EmptyTextStyles } from './OrdersList.style'

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
            ) : !orders?.length ? (
                <TableRow>
                    <EmptyTextStyles colSpan={9}>
                        Не бойся! Создай свой первый заказа! Это ведь так
                        просто!
                    </EmptyTextStyles>
                </TableRow>
            ) : (
                orders?.map((order, i) => (
                    <Order orderData={order} key={i} isLoading={isLoading} />
                ))
            )}
        </TableBody>
    )
}
