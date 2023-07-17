export const ENV = 'development';
export const LONG_DASH = '—';
export const DASHBOARD_BASE_PATH = '/dashboard';

export const DATA_TABLE = {
    itemsPerPage: 5,
    sorts: {},
};

export const APP_DIMENSIONS = {
    maxWidth: '1900px',
    header: {
        height: '60px',
        width: '100%',
    },
    sidebar: {
        width: '240px',
        height: 'calc(100vh - 60px)',
    },
};

export const DASHBOARD_SIDEBAR_MENU_DEFAULT_STATE = {
    title: 'Hospital',
    path: '/dashboard/corporate/hospital',
    paths: ['/dashboard', '/dashboard/corporate', '/dashboard/corporate/hospital'],
};

export const NO_CHART_DATA_PROPS = {
    text: 'No Data Available',
    align: 'center',
    verticalAlign: 'middle',
    offsetX: 0,
    offsetY: 0,
    style: {
        color: undefined,
        fontSize: '14px',
        fontFamily: 'Roboto',
    },
};

export const CONTENT_DISPLAY_OPTION = {
    dollarClaims: [
        {
            value: 'Dollar',
            label: 'Dollar',
        },
        {
            value: 'Claims',
            label: 'Claims',
        },
    ],
    accountsDollar: [
        {
            value: 'Accounts',
            label: 'Accounts',
        },
        {
            value: 'Dollar',
            label: 'Dollar',
        },
    ],
};

/**
 * Months
 */
export const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
