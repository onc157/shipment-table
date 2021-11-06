import { OrdersList, OrdersStyled, OrdersTitles } from './';
import { Table, TableContainer} from '@material-ui/core';
import {useEffect} from "react";
import {useAppDispatch} from "../../app/hooks";
import {getAllOrders, ordersSelector} from "../../store/slices/orderSlice";
import {useSelector} from "react-redux";
export const Orders = () => {
    const orders = useSelector(ordersSelector)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch])

    console.log('orders', orders)
    return (
        <OrdersStyled>
            <TableContainer>
                <Table>
                    <OrdersTitles />
                    <OrdersList orders={orders}/>
                </Table>
            </TableContainer>
        </OrdersStyled>
    )
}