'use client';

import CircularLoader from '@/src/components/Loaders/Circular';

export const getDynamicImportProps = () => ({ ssr: false, loading: () => <CircularLoader /> });
