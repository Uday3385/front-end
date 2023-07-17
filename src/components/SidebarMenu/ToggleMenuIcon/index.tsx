import ArrowDownIcon from '@/src/components/Icons/ArrowDown';

type Props = {
    isActive: boolean;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

export default function ToggleMenuIcon({ onClick, isActive }: Props) {
    const style = { display: 'flex', alignItems: 'center', transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' };

    return (
        <span style={style} onClick={onClick} className="toggleMenuIcon">
            <ArrowDownIcon />
        </span>
    );
}
