'use client';

import { Fragment } from 'react';

import { useIsSidebarMenuItemActive } from '@/src/hooks/useSidebarMenu';
import PatientFinancialServicesIcon from '@/src/components/Icons/PatientFinancialServices';
import type { MenuItemType } from '@/src/types';
import PredictAnalyticsIcon from '@/src/components/Icons/PredictAnalytics';
import InternalAuditIcon from '@/src/components/Icons/InternalAudit';
import SidebarButton from '@/src/components/SidebarMenu/SidebarButton';
import ClinicalIcon from '@/src/components/Icons/Clinical';
import ReportsIcon from '@/src/components/Icons/Reports';
import HomeIcon from '@/src/components/Icons/Home';
import SubMenu from '@/src/components/SidebarMenu/SubMenu';
import AiqIcon from '@/src/components/Icons/Aiq';

export const menuItems: MenuItemType[] = [
    {
        icon: HomeIcon,
        path: '/dashboard',
        title: 'Dashboard',
        pathAlias: '/dashboard/corporate/hospital',
        subMenu: [
            {
                path: '/dashboard/corporate',
                title: 'Corporate',
                paths: ['/dashboard', '/dashboard/corporate'],
                pathAlias: '/dashboard/corporate/hospital',
                subMenu: [
                    {
                        path: '/dashboard/corporate/hospital',
                        title: 'Hospital',
                        paths: ['/dashboard', '/dashboard/corporate', '/dashboard/corporate/hospital'],
                    },
                    {
                        path: '/dashboard/corporate/service-line',
                        title: 'Service Line',
                        paths: ['/dashboard', '/dashboard/corporate', '/dashboard/corporate/service-line'],
                    },
                ],
            },
            {
                path: '/dashboard/division',
                title: 'Division',
                paths: ['/dashboard', '/dashboard/division'],
            },
            {
                path: '/dashboard/region',
                title: 'Region',
                paths: ['/dashboard', '/dashboard/region'],
                navigationIndicator: {
                    title: 'Region View',
                },
            },
            {
                path: '/dashboard/local',
                paths: ['/dashboard', '/dashboard/local'],
                title: 'Local',
                showLineConnector: false,
            },
        ],
    },
    {
        icon: PatientFinancialServicesIcon,
        path: '/dashboard/patient-financial-service',
        title: 'Patient Financial Service',
    },
    {
        icon: InternalAuditIcon,
        path: '/dashboard/internal-audit',
        title: 'Internal Audit',
    },
    {
        icon: ClinicalIcon,
        path: '/dashboard/clinical',
        title: 'Clinical',
        pathAlias: '/dashboard/clinical/review',
        subMenu: [
            {
                path: '/dashboard/clinical/review',
                title: 'Review',
                paths: ['/dashboard/clinical', '/dashboard/clinical/review'],
            },
            {
                path: '/dashboard/clinical/task',
                title: 'Task',
                paths: ['/dashboard/clinical', '/dashboard/clinical/task'],
            },
            {
                path: '/dashboard/clinical/assist',
                title: 'Assist',
                paths: ['/dashboard/clinical', '/dashboard/clinical/assist'],
            },
        ],
    },
    {
        icon: ClinicalIcon,
        path: '/dashboard/revenue',
        title: 'Revenue',
        pathAlias: '/dashboard/revenue/review',
        subMenu: [
            {
                path: '/dashboard/revenue/review',
                title: 'Review',
                paths: ['/dashboard/revenue', '/dashboard/revenue/review'],
            },
            {
                path: '/dashboard/revenue/task',
                title: 'Task',
                paths: ['/dashboard/revenue', '/dashboard/revenue/task'],
            },
            {
                path: '/dashboard/revenue/assist',
                title: 'Assist',
                paths: ['/dashboard/revenue', '/dashboard/revenue/assist'],
            },
        ],
    },
    {
        icon: ReportsIcon,
        path: '/dashboard/reports',
        title: 'Reports',
        pathAlias: '/dashboard/reports/view-reports',
        subMenu: [
            {
                isHidden: false,
                path: '/dashboard/reports/view-reports',
                title: 'View Reports',
                paths: ['/dashboard/reports'],
            },
            {
                path: '/dashboard/reports/report-builder',
                title: 'Report Builder',
                paths: ['/dashboard/reports', '/dashboard/reports/report-builder'],
            },
            {
                path: '/dashboard/reports/rule-report-builder',
                title: 'Rule Report Builder',
                paths: ['/dashboard/reports', '/dashboard/reports/rule-report-builder'],
            },
        ],
    },
    {
        icon: PredictAnalyticsIcon,
        path: '/dashboard/predictive-analytics',
        title: 'Predict.Analytics',
    },
    {
        icon: AiqIcon,
        path: '/dashboard/aiq',
        title: 'AIQ',
    },
];

export default function RenderMenuItems() {
    const isMenuActive = useIsSidebarMenuItemActive();

    return menuItems.map((item, index) => {
        const isActive = isMenuActive(item);

        return (
            <Fragment key={item.title}>
                <SidebarButton index={index} menuItem={item} isActive={isActive} />
                <SubMenu items={item.subMenu} expand={isActive} />
            </Fragment>
        );
    });
}
