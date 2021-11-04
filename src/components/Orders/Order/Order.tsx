import { TableCell, TableRow } from '@material-ui/core';
import { OrderInterface } from '../../../type/orders';
import { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
      border: 1px solid grey;
      caret-color: transparent;
      &:focus {
        //border: 2px solid rgb(118, 118, 118);
        outline: none;
      }
      
      &:hover {
        
      }
    `

interface StyledInputProps {
    isEditable: Boolean
}

export const Order = ({ orderData }: {orderData: OrderInterface}) => {

    const [value, setValue] = useState('');

    const toggle = true;

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        setValue(newValue)
    }


    return (
        <TableRow>
            <TableCell>
                <StyledInput type="text"
                             value={value}
                             onChange={toggle ? (e) => inputHandler(e) : () => (console.log(123))}
                            />
            </TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
            <TableCell>5</TableCell>
            <TableCell>6</TableCell>
            <TableCell>7</TableCell>
            <TableCell>8</TableCell>
            <TableCell>9</TableCell>
        </TableRow>
    )
}