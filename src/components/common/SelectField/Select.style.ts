import styled from 'styled-components'
import { Select } from '@material-ui/core'
import { COLOR_WHITE } from '../Style'

export const SelectStyled = styled(Select)`
    .MuiSelect-root {
        font-size: 0.875rem;
    }

    .MuiSelect-icon {
        display: none;
    }

    .MuiSelect-select:focus {
        background-color: ${COLOR_WHITE};
    }
`
