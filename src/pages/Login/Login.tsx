import { LoginStyled, LoginFormStyled, ButtonStyled } from './Login.style'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getGToken, setGToken } from '../../utils/storage'

export const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [isAuthorizing, setAuthorizing] = useState(false)

    const locToken = new URLSearchParams(location.search).get('token')

    useEffect(() => {
        if (locToken || getGToken()) {
            setAuthorizing(true)
        }
    }, [setAuthorizing, locToken])

    useEffect(() => {
        if (getGToken() && isAuthorizing) {
            setTimeout(() => {
                navigate('/', { replace: true })
            }, 1500)
        }
    }, [navigate, isAuthorizing])

    useEffect(() => {
        if (locToken && !getGToken()) {
            setGToken(locToken)
            setAuthorizing(true)
        }
    }, [setAuthorizing, locToken])

    const loginGoogle = () => {
        window.location.href = 'https://onc157.ru/auth/google'
    }

    return (
        <LoginStyled>
            <LoginFormStyled>
                <Typography variant="h5" gutterBottom>
                    Вход
                </Typography>
                {isAuthorizing ? (
                    <Typography>УСПЕШНАЯ АВТОРИЗАЦИЯ!</Typography>
                ) : (
                    <ButtonStyled fullWidth onClick={loginGoogle}>
                        Войти через google
                    </ButtonStyled>
                )}
            </LoginFormStyled>
        </LoginStyled>
    )
}
