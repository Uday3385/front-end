import styles from './styles.module.css';

export default function VerticalLine({ style }: { style?: React.CSSProperties }) {
    return <div style={style} className={styles.verticalLine}></div>;
}
