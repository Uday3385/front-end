import Image from 'next/image';

export default function ArrowDownIcon({ style = {} }: { style?: React.CSSProperties }) {
    return (
        <Image src="/icons/arrow-down.svg" alt="inbox icon" className="appLogo" width={8} height={16} style={style} />
    );
}
