// 'use client';

import CircularLoader from '@/src/components/Loaders/Circular';

export const getDynamicImportProps = ({centralize}: {centralize?: boolean} = {}) => ({ ssr: false, loading: () => <CircularLoader centralize={centralize} /> });
  