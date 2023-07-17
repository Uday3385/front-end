import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const ClinicalIcon = ({ width = 21, height = 21, fill = '#BDBDBD', ...props }: SvgIconProps) => {
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
            <g id="AR Analysis" clipPath="url(#clip0_642_40643)">
                <g id="Group">
                    <path
                        id="Vector"
                        d="M12.4002 10.7C12.4002 10.7 11.3002 11 10.4002 10.6C9.7002 10.4 9.1002 10 8.3002 9.4L8.1002 9.2L6.7002 11.3L7.0002 11.5C8.0002 12.3 9.2002 12.8 10.5002 13V14.6H12.6002V13.1C14.6002 12.8 15.9002 11.5 15.9002 9.8C15.9002 8 14.9002 7 12.6002 6.4C11.8002 6.3 10.6002 5.8 10.6002 5.8C9.7002 5.4 9.7002 5.1 9.7002 4.8C9.7002 4.3 10.0002 4.1 10.4002 4C11.4002 3.7 12.4002 4.1 12.4002 4.1C12.9002 4.3 13.4002 4.5 13.9002 4.9L14.2002 5.1L15.5002 3L15.2002 2.8C14.4002 2.2 13.5002 1.8 12.5002 1.6V0H10.4002V1.7C8.4002 2 7.2002 3.2 7.2002 5C7.2002 7.2 8.7002 8 10.5002 8.4C10.5002 8.4 11.5002 8.6 12.5002 8.9C13.2002 9.2 13.2002 9.5 13.2002 9.8C13.2002 10.3 12.9002 10.6 12.4002 10.7Z"
                        fill={fill}
                    />
                    <path
                        id="Vector_2"
                        d="M20.6 13.0004L15.3 14.1004L17 15.6004C16.8 15.9004 15.8 16.6004 15.8 16.6004C14.5 17.5004 12.9 18.0004 11.3 18.0004C6.8 18.0004 3.2 14.4004 3.2 9.90039C3.2 7.40039 4.3 5.00039 6.3 3.50039L4.3 0.900391C1.6 3.00039 0 6.30039 0 9.80039C0 16.0004 5 21.0004 11.3 21.0004C13.8 21.0004 16.2 20.1004 18.2 18.6004C18.2 18.6004 19.1 17.8004 19.5 17.3004L21.1 18.4004L20.6 13.0004Z"
                        fill={fill}
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_642_40643">
                    <rect width={width} height={height} fill="white" />
                </clipPath>
            </defs>
        </SvgIcon>
    );
};
export default ClinicalIcon;
