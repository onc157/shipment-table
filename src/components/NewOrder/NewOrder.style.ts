import styled from 'styled-components'
import { Button, Select, TextField } from '@material-ui/core'
import { COLOR_BLUE, COLOR_WHITE } from '../common'

export const WrapperStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 130px 80px 100px;

    & > .MuiFormControl-root {
        margin: 10px 0;
    }

    & h5 {
        margin-bottom: 20px;
    }
`

export const ItemStyled = styled.div`
    position: relative;
`

export const ItemButtonStyled = styled(Button)`
    &.MuiButton-root {
        position: absolute;
        content: '';
        left: calc(100% + 10px);
        top: 0;
        height: 100%;
        max-height: 56px;
        background-color: ${COLOR_BLUE};

        &:hover {
            background-color: #3e7dd8;
            box-shadow: none;
        }
    }
`

export const SubmitButtonStyled = styled(Button)`
    &.MuiButton-root {
        margin-top: 20px;
        background-color: ${COLOR_BLUE};

        &:hover {
            background-color: #3e7dd8;
            box-shadow: none;
        }
    }
`

export const TextFieldStyled = styled(TextField)`
    width: 360px;
`

export const SelectStyled = styled(Select)`
    margin-top: 10px;

    .MuiSelect-icon {
        display: none;
    }

    .MuiSelect-select:focus {
        background-color: ${COLOR_WHITE};
    }
`
