import * as React from 'react'
import { TextFieldStyled } from './TextField.style'

interface TextFieldInterface {
    text: string
    isLink: Boolean
    weight: number
    color: string
    fontSize: string
}

export const TextField = (props: TextFieldInterface) => {
    const { text } = props

    return <TextFieldStyled {...props}>{text}</TextFieldStyled>
}
