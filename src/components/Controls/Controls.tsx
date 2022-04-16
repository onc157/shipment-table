import { SearchField } from '../common'
import React from 'react'
import { ControlsStyled } from './Controls.style'
import { NewOrder } from '../NewOrder/NewOrder'

const Controls = () => {
    return (
        <ControlsStyled>
            <SearchField />
            <NewOrder />
        </ControlsStyled>
    )
}

export default Controls
