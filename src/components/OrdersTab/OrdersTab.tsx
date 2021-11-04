import React from 'react';
import { Orders } from '../Orders';
import { OrdersTabStyled } from './OrdersTab.style';

interface OrdersTabProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

export const OrdersTab = (props: OrdersTabProps) => {
const { children, value, index, ...other } = props;

return (
    <OrdersTabStyled
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
    >
        {value === index && <Orders />}
    </OrdersTabStyled>
);
};