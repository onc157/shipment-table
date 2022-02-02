import * as React from 'react';
import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru'

export const DateField = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} locale={ru}/>
    );
};