import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function ArrowRightIcon({ width = 12, height = 12, fill = '#fff', ...props }: SvgIconProps) {
    return (
        <SvgIcon
            {...props}
            width={width}
            height={height}
            viewBox="0 0 12 12"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            style={{ width, height }}
        >
            <g id="arrow-right">
                <path
                    id="Vector"
                    d="M6 2.5L9.5 6L6 9.5"
                    stroke="transparent"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </SvgIcon>
    );
}
