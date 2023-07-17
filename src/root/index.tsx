'use client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';

import GlobalDataRefProvider from '@/src/hooks/useGlobalDataRef';
import { PageRouteProgress } from '@/src/hooks/usePageRouteProgress';
import ThemeProvider from '@/src/theme';
import { store } from '@/src/redux/store';

// type MetadataProps = {
//     params: { id: string };
//     searchParams: { [key: string]: string | string[] | undefined };
// };

// export function generateMetadata({ params, searchParams }: MetadataProps): Metadata {
//     return {
//         title: 'Clinisys - Dashboard',
//     };
// }

export default function App({ children }: { children: React.ReactNode }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider>
                <CssBaseline />
                <Provider store={store}>
                    <GlobalDataRefProvider>
                        <PageRouteProgress />
                        {children}
                    </GlobalDataRefProvider>
                </Provider>
            </ThemeProvider>
        </LocalizationProvider>
    );
}
