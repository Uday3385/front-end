import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const InternalAuditIcon = ({ width = 21, height = 21, fill = '#BDBDBD', ...props }: SvgIconProps) => {
    return (
        <SvgIcon
            {...props}
            width={width}
            height={height}
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width, height }}
        >
            <g id="Denials">
                <path
                    id="Union"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.3 0L14.5 14.5L0 13.3L6.6 6.6L13.3 0ZM19.5 12.3L20.2 20.2L12.3 19.5L15.9 15.9L19.5 12.3Z"
                    fill={fill}
                />
            </g>
        </SvgIcon>
    );
};
export default InternalAuditIcon;
