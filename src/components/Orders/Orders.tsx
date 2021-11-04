import { OrdersList, OrdersStyled, OrdersTitles } from './';
import { Table, TableContainer } from '@material-ui/core';

export const Orders = () => {

    return (
        <OrdersStyled>
            <TableContainer>
                <Table>
                    <OrdersTitles />
                    <OrdersList />
                </Table>
            </TableContainer>
        </OrdersStyled>
    )
}