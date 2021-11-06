import styled from 'styled-components';
import { TableCell} from '@material-ui/core';
import { COLOR_WHITE } from '../common/Style';

export const OrdersStyled = styled.div`
  display: flex;
  width: 100%;
  background-color: ${COLOR_WHITE};
`

export const TableCellStyled = styled(TableCell)`
  &.MuiTableCell-head {
    font-weight: 400;
  }
`

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  
  & input:not(:first-child){
    padding-top: 5px;
  }
`