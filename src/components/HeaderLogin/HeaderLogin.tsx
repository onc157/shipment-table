import { HeaderLoginStyled, NameStyled } from './HeaderLogin.style'
import { Loader } from '../common'
import { Avatar } from '@mui/material'
import { IUser } from '../../type/Types'

interface IHeaderLogin {
    user: {
        data?: IUser
        isLoading: boolean
    }
}

const HeaderLogin = ({ user }: IHeaderLogin) => {
    return (
        <HeaderLoginStyled>
            {user.isLoading ? (
                <Loader size="sm" color="secondary" />
            ) : (
                <>
                    <NameStyled>{user.data?.name}</NameStyled>
                    <Avatar alt="Сеня" src={user.data?.avatar} />
                </>
            )}
        </HeaderLoginStyled>
    )
}

export default HeaderLogin
