import * as React from 'react';
import {TextFieldStyled} from "./TextField.style";

interface TextFieldI {
    text: string;
    isLink: Boolean;
    weight: number;
    color: string;
    size: number;
}

export const TextField = ({text, isLink, weight, color, size}: TextFieldI) => {
    return (
        <TextFieldStyled isLink={isLink}
                         weight={weight}
                         color={color}
                         size={size}>{text}</TextFieldStyled>
    );
};