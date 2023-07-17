import Image from 'next/image';

export default function ArrowRightAltIcon({ style = {} }: { style?: React.CSSProperties }) {
    return (
        <Image src="/icons/arrow-right.svg" alt="inbox icon" className="appIcon" width={12} height={12} style={style} />
    );
}
