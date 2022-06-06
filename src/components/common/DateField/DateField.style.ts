import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const DateFieldStyled = styled(TextField)`
    .MuiFormHelperText-root {
        display: none;
    }

    .MuiInputBase-input {
        font-size: 0.875rem;
        padding: 4px 0 4px;
    }
`
