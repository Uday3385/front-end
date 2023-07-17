import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const PatientFinancialServicesIcon = ({ width = 20.2, height = 23.2, fill = '#BDBDBD', ...props }: SvgIconProps) => {
    return (
        <SvgIcon
            {...props}
            width={width}
            height={height}
            viewBox="0 0 20.2 23.2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width, height }}
        >
            <g id="CCR">
                <path
                    id="Union"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.3 0.7L20.2 0L19.5 7.9L15.9 4.3L12.3 0.7ZM0 7L14.5 5.7L13.3 20.2L6.6 13.6L0 7Z"
                    fill={fill}
                />
            </g>
        </SvgIcon>
    );
};
export default PatientFinancialServicesIcon;
