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

export const DATE_RANGES = [
    { label: 'Today', value: 'today' },
    { label: 'Previous Day', value: 'previous day' },
    { label: 'This Week', value: 'this week' },
    { label: 'Previous Week', value: 'previous week' },
    { label: 'Current Month', value: 'current month' },
    { label: 'Previous Month', value: 'previous month' },
    { label: 'Current Year', value: 'current year' },
];

export const TIME_RANGES = [
    { label: 'Last Hour', value: 'last hour' },
    { label: 'Last 3 Hours', value: 'last 3 hours' },
    { label: 'Last 6 Hours', value: 'last 6 hours' },
    { label: 'Last 12 Hours', value: 'last 12 hours' },
    { label: 'Last 24 Hours', value: 'last 24 hours' },
];

/**
 * Report Builder
 */
export const REPORT_BUILDER = {
    dragDropContainerClassName: 'dragDropContainer',
    draggedItemClassName: 'dataElementSelected',
};
