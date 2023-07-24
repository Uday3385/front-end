// 'use client';

import CircularProgress, { circularProgressClasses, CircularProgressProps } from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type Props = CircularProgressProps & {
    centralize?: boolean;
};

export default function CircularLoader({ centralize, ...props }: Props) {
    const style = centralize
        ? {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
          }
        : { with: '100%' };

    return (
        <div style={style}>
            <Box sx={{ position: 'relative' }}>
                <CircularProgress
                    variant="determinate"
                    sx={{
                        color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                    }}
                    size={40}
                    thickness={4}
                    {...props}
                    value={100}
                />
                <CircularProgress
                    variant="indeterminate"
                    disableShrink
                    sx={{
                        color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                        },
                    }}
                    size={40}
                    thickness={4}
                    {...props}
                />
            </Box>
        </div>
    );
}
