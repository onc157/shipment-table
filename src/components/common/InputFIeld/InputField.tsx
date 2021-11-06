import * as React from 'react';
import {InputFieldStyled} from "./InputField.style";
import {useAppDispatch} from "../../../app/hooks";
import {useState} from "react";
import {updateOrder} from "../../../store/slices/orderSlice";

interface InputFieldI {
    name?: any;
    text: string | undefined;
    placeholder?: string;
    isLink: Boolean;
    weight: number;
    color: string;
    size: number;
}

export const InputField = ({name, text, placeholder, isLink, weight, color, size}: InputFieldI) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState(text)

    const inputHandler = ({ target }:{ target: HTMLInputElement }) => {
        setValue(target.value)
    }

    const updateHandler = ({ target }:{ target: HTMLInputElement }) => {
        const payload = {
            id: '612c0eb10ab5a9065e844a5a', // TODO: HARDCODE
            [name]: target.value
        }

        dispatch(updateOrder(payload))
    }

    return (
        <InputFieldStyled value={value}
                          onChange={inputHandler}
                          onBlur={updateHandler}
                          isLink={isLink}
                          placeholder={placeholder}
                          weight={weight}
                          color={color}
                          size={size} />
    );
};