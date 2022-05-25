import styled from 'styled-components'
import { TableCell } from '@material-ui/core'
import { COLOR_WHITE } from '../common'

export const EmptyTextStyles = styled(TableCell)`
    border-radius: 20px;

    &.MuiTableCell-body {
        padding: 40px;
        font-size: 1.25rem;
        color: ${COLOR_WHITE};
        text-align: center;
        filter: ;
        background: linear-gradient(
            90deg,
            rgba(37, 219, 180, 1) 0%,
            rgba(63, 81, 181, 1) 47%,
            rgba(37, 219, 180, 1) 100%
        );
    }
`
