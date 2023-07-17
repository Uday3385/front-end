import { useRouter as useNextRouter, usePathname } from 'next/navigation';
import { useStartLoadingBar } from '@/src/hooks/usePageRouteProgress';

export const useRouter = () => {
    const router = useNextRouter(),
        pathName = usePathname(),
        startLoadingBar = useStartLoadingBar();

    return (path: string) => {
        if (pathName === path) return;

        startLoadingBar();
        router.push(path);
    };
};
