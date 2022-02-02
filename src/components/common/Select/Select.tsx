import * as React from 'react';
import {TextFieldStyled} from "./Select.style";
import {FormControl, InputLabel, MenuItem, Select as SelectMaterial} from "@material-ui/core";
import {useState} from "react";

interface ISelect {
}

export const Select = () => {
    const [age, setAge] = useState('paid')

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <SelectMaterial
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={'send'}>Отправлено</MenuItem>
                <MenuItem value={'work'}>В работе</MenuItem>
                <MenuItem value={'paid'}>Оплачено</MenuItem>
            </SelectMaterial>
        </FormControl>
    );
};

export default Select;