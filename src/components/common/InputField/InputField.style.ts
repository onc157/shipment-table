import styled from 'styled-components'
import { COLOR_GREY } from '../Style'

interface InputFieldStyleI {
    isLink: Boolean
    weight: number
    color: string
    fontSize: number
}

export const InputFieldStyled = styled.input<InputFieldStyleI>`
    border: none;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.weight};
    color: ${(props) => props.color};
    transition: 0.2s;
    &:focus {
        color: ${COLOR_GREY};
        font-size: 0.75rem;
        font-weight: 400;
        font-style: italic;
        outline: none;
    }
    &:hover {
        color: ${COLOR_GREY};
        font-size: 0.75rem;
        font-weight: 400;
        font-style: italic;
        outline: none;
    }
`
