import dayjs, { Dayjs, ManipulateType } from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { MONTHS } from './constants';

type DateType = string | Date;

type ManipulateDateType = {
    unitValue: number;
    format: string;
    isISO?: boolean;
    unit?: ManipulateType;
};

dayjs.extend(utc);

export const getDateString = (date: DateType) => {
    const datObj = new Date(date);
    return `${datObj?.getDate()} ${MONTHS[datObj?.getMonth()]} ${datObj?.getFullYear()}`;
};

export const isDateAfterToday = (date: DateType) => new Date(date) > new Date();

export const getIsoDateNow = () => new Date().toISOString();

export const getCurrentDate = (format = 'YYYY-MM-DD') => dayjs().format(format);

export const formatDate = (date: DateType, format = 'YYYY-MM-DD') => dayjs(date).format(format);

export const formatDateTime = (date: DateType, format = 'YYYY-MM-DD HH:mm:ss.ms') => dayjs(date).format(format);

export const getAddedDateFromFormat = ({ unitValue, format, isISO, unit }: ManipulateDateType) => {
    const date = dayjs().add(unitValue, unit);
    if (isISO) return date.toISOString();
    return date.format(format);
};

export const getSubtractedDateFromFormat = ({ format, unit, unitValue, isISO }: ManipulateDateType) => {
    const date = dayjs().subtract(unitValue, unit);
    if (isISO) return date.toISOString();
    return date.format(format);
};
