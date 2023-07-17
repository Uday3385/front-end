'use client';

import * as React from 'react';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';

import PlainCard, { type PlainCardType } from '@/src/components/Cards/Plain';
import type { SizeType } from '@/src/types';

interface DataStatisticsType extends Omit<PlainCardType, 'children'> {
    content: React.ReactNode;
    size?: SizeType;
}

export default function DataStatistics({
    style = {},
    data,
    size,
}: {
    data: DataStatisticsType[];
    size?: SizeType;
    style?: SxProps;
}) {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 0);
    }, []);

    const rootStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: '5px 0px 0px 0px',

        '& .plainCard': {
            marginBottom: '20px',
        },

        '& div.plainCard:not(div.plainCard:last-child)': {
            marginRight: '20px',
            marginBottom: '20px',
        },

        ...style,
    };

    const renderStats = data.map((stat) => {
        const props = {
            size,
            ...stat,
            content: undefined,
        };

        return (
            <PlainCard key={stat.title} {...props} title={stat.title} loading={loading}>
                {stat.content}
            </PlainCard>
        );
    });

    return <Box sx={rootStyle as SxProps}>{renderStats}</Box>;
}
