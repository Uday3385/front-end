import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const ReportsIcon = ({ width = 21, height = 21, fill = '#BDBDBD', ...props }: SvgIconProps) => {
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
            <g id="Report Builder" clipPath="url(#clip0_642_40651)">
                <path id="Vector" d="M21.0001 4.5H16.6001V12.6H21.0001V4.5Z" fill={fill} />
                <path id="Vector_2" d="M12.6998 7.5H8.2998V12.6H12.6998V7.5Z" fill={fill} />
                <path id="Vector_3" d="M4.4 0H0V12.5H4.4V0Z" fill={fill} />
                <path id="Vector_4" d="M21 16.5996H0V20.9996H21V16.5996Z" fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_642_40651">
                    <rect width={width} height={height} fill="white" />
                </clipPath>
            </defs>
        </SvgIcon>
    );
};
export default ReportsIcon;
