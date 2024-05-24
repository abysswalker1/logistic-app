import React, {FC} from 'react';
import {DateType} from '../../../../types';

interface Props {
    values: DateType;
}

const Date: FC<Props> = ({values}) => {
    const {day, month, year} = values;
    const dateToString = (value: number) => {
        const stringValue = value + '.';
        return stringValue.length < 3 ? '0' + stringValue : stringValue;
    };

    return (
        <span>
            {dateToString(day)}
            {dateToString(month)}
            {year}
        </span>
    );
};

export default Date;
