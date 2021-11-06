import { TableHead, TableRow } from '@material-ui/core';
import { headCells } from '../../utils';
import { TableCellStyled } from './Orders.style';

export const OrdersTitles = () => {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((elem, i) =>
                    <TableCellStyled key={i + elem.name}>
                        {elem.name}
                    </TableCellStyled>
                )}
            </TableRow>
        </TableHead>
    )
}