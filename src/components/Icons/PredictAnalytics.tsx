import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const PredictAnalyticsIcon = ({ width = 21, height = 21, fill = '#BDBDBD', ...props }: SvgIconProps) => {
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
            <g id="Predictive Analytics" clipPath="url(#clip0_642_40660)">
                <g id="Group">
                    <path
                        id="Vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.5 0C4.2 0.5 0 5 0 10.5C0 13.8 1.5 16.8 3.9 18.7L9.5 10.2V0Z"
                        fill={fill}
                    />
                    <path
                        id="Vector_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.6001 19.8004C7.1001 20.6004 8.7001 21.0004 10.5001 21.0004C14.1001 21.0004 17.3001 19.2004 19.1001 16.5004L10.8001 11.9004L5.6001 19.8004Z"
                        fill={fill}
                    />
                    <path
                        id="Vector_3"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5 0V9.9L20.1 14.7C20.7 13.4 21 12 21 10.5C21 5 16.8 0.5 11.5 0Z"
                        fill={fill}
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_642_40660">
                    <rect width={width} height={width} fill="white" />
                </clipPath>
            </defs>
        </SvgIcon>
    );
};
export default PredictAnalyticsIcon;
