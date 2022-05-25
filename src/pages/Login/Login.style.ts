import styled from 'styled-components'
import { Button } from '@material-ui/core'
import {
    COLOR_GREEN,
    COLOR_GREY_BG,
    COLOR_WHITE,
} from '../../components/common'

export const LoginStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${COLOR_GREY_BG};
`

export const LoginFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 60px;
    border-radius: 10px;
    background-color: ${COLOR_WHITE};

    & > :not(:last-child) {
        margin-bottom: 25px;
    }
`

export const ButtonStyled = styled(Button)`
    &.MuiButton-root {
        min-width: 360px;
        background-color: ${COLOR_GREEN};
        color: ${COLOR_WHITE};
        transition: 0.4s;

        &:hover {
            background-color: ${COLOR_GREEN};
            filter: brightness(1.1);
            box-shadow: none;
        }
    }
`
