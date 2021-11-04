import { HeaderWrapper, HeaderTitle, HeaderDescription } from './Header.style';
import React from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';

const Header = () => {
    return (
        <HeaderWrapper position="static">
            <HeaderTitle>Учет заказов</HeaderTitle>
            <HeaderDescription>3200 позиций</HeaderDescription>
            <HeaderLogin/>
        </HeaderWrapper>
    );
};

export default Header;