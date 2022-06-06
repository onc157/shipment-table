import styled from 'styled-components'

interface TextFieldStyleI {
    isLink: Boolean
    weight: number
    color: string
    fontSize: string
}

export const TextFieldStyled = styled.span<TextFieldStyleI>`
    margin-bottom: 30px;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.weight};
    color: ${(props) => props.color};
`
