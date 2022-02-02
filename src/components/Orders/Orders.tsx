import { OrdersList, OrdersStyled, OrdersTitles } from './';
import { Table, TableContainer} from '@material-ui/core';
import {useEffect} from "react";
import {useAppDispatch} from "../../app/hooks";
// import {getAllOrders, ordersSelector} from "../../store/slices/orderSlice";
import {useGetAllOrdersQuery} from "../../api/OrdersService";

export const Orders = () => {
    // const orders = useSelector(ordersSelector)
    const {data: orders, status} = useGetAllOrdersQuery();
    // const abb = useGetAllOrdersQuery();
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(getAllOrders())
    // }, [dispatch])

    console.log('orders', orders, status)
    return (
        <OrdersStyled>
            <TableContainer>
                <Table>
                    <OrdersTitles />
                    {orders && <OrdersList orders={orders} status={status}/>}
                </Table>
            </TableContainer>
        </OrdersStyled>
    )
}