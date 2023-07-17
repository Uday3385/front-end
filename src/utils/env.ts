import * as constants from './constants';

const env = process.env.NODE_ENV || constants.ENV;

export const isProdEnv = () => env === 'production';

export const logMessage = (label: string, ...messages: any[]) => {
    if (!isProdEnv) return;
    console.log(label, ...messages);
};

export const logError = (...errors: any[]) => {
    if (!isProdEnv()) return;

    for (const error of errors) {
        console.error ? console.error(error) : console.log(error);
    }
};
