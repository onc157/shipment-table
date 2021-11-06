import { Button, SearchField } from '../common';
import { COLOR_BLUE } from '../common/Style';
import React from 'react';
import { ControlsStyled } from './Controls.style';

const Controls = () => {

    return (
        <ControlsStyled>
            <SearchField/>
            <Button bgcolor={COLOR_BLUE} >+ Новый заказ</Button>
        </ControlsStyled>
    );
};

export default Controls;