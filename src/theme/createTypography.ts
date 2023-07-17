import { secondary } from './colors';

export default function createTypography() {
    return {
        htmlFontSize: 14,
        fontFamily: 'Nunito, Roboto, sans-serif',
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.57,
        },
        button: {
            fontWeight: 600,
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 500,
            lineHeight: 1.66,
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.57,
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.57,
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            lineHeight: 2.5,
            textTransform: 'uppercase',
        },
        h1: {
            color: secondary.main,
            fontFamily: 'Roboto, Nunito, Sans-serif',
            fontWeight: 700,
            fontSize: 24,
            lineHeight: 1.2,
        },
        h2: {
            fontFamily: 'Nunito, Roboto, Sans-serif',
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: 1.2,
        },
        h3: {
            fontFamily: 'Nunito, Roboto, Sans-serif',
            fontWeight: 700,
            fontSize: '2.25rem',
            lineHeight: 1.2,
        },
        h4: {
            fontFamily: 'Nunito, Roboto, Sans-serif',
            fontWeight: 700,
            fontSize: '2rem',
            lineHeight: 1.2,
        },
        h5: {
            fontFamily: 'Nunito, Roboto, Sans-serif',
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: 1.2,
        },
        h6: {
            fontFamily: 'Nunito, Roboto, Sans-serif',
            fontWeight: 700,
            fontSize: '1.125rem',
            lineHeight: 1.2,
        },
    };
}
