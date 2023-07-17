'use client';

import createTypography from '@/src/theme/createTypography';
import ChatIconButton from '@/src/components/Buttons/ChatIconButton';
import { useRouter } from '@/src/hooks/useNavigation';
import * as constants from '@/src/utils/constants';
import VerticalLine from '@/src/components/Line/VerticalLine';
import UserButton from '@/src/components/Buttons/UserButton';
import styles from './styles.module.css';
import Logo from '@/src/components/Icons/Logo';

export default function Header() {
    const navigate = useRouter(),
        typography = createTypography(),
        verticalLineStyle = { margin: '0px 10px 0px 13px' };

    const handleClick = async () => {
        navigate(constants.DASHBOARD_SIDEBAR_MENU_DEFAULT_STATE.path);
    };

    return (
        <div className={styles.appHeader}>
            <div className={styles.appHeaderWrapper}>
                <div className={styles.appTitle}>
                    <h1 color="secondary" className={styles.appTitleText} style={typography.h1} onClick={handleClick}>
                        <Logo />
                        {/* Clinisys */}
                    </h1>
                </div>
                <div className={styles.appHeaderButtons}>
                    <ChatIconButton notificationCount={9} />
                    <VerticalLine style={verticalLineStyle} />
                    <UserButton style={{ marginRight: '-10px' }} />
                </div>
            </div>
        </div>
    );
}
