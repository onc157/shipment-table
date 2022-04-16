import { OrdersList, OrdersStyled, OrdersTitles } from './'
import { Table, TableContainer } from '@material-ui/core'
import { useGetAllOrdersQuery } from '../../api/OrdersService'

export const Orders = () => {
    const { data: orders, isLoading } = useGetAllOrdersQuery()

    return (
        <OrdersStyled>
            <TableContainer>
                <Table>
                    <OrdersTitles />
                    <OrdersList orders={orders} isLoading={isLoading} />
                </Table>
            </TableContainer>
        </OrdersStyled>
    )
}
