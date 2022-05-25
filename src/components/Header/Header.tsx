import { HeaderWrapper, HeaderTitle, HeaderDescription } from './Header.style'
import React from 'react'
import HeaderLogin from '../HeaderLogin/HeaderLogin'
import { IUser } from '../../type/Types'

interface IHeader {
    user: {
        data?: IUser
        isLoading: boolean
    }
}

const Header = ({ user }: IHeader) => {
    return (
        <HeaderWrapper position="static">
            <HeaderTitle>KROTOV.PRO</HeaderTitle>
            <HeaderDescription>Shipment Table</HeaderDescription>
            <HeaderLogin user={user} />
        </HeaderWrapper>
    )
}

export default Header
