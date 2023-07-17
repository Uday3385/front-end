import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function SearchIcon({ width = 17, height = 17, fill = '#9E9E9E', ...props }: SvgIconProps) {
    return (
        <SvgIcon
            {...props}
            width={width}
            height={height}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width, height }}
        >
            <path
                d="M15.875 14.6562L12.0938 10.875C12 10.8125 11.9062 10.75 11.8125 10.75H11.4062C12.375 9.625 13 8.125 13 6.5C13 2.9375 10.0625 0 6.5 0C2.90625 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.5 13C8.125 13 9.59375 12.4062 10.75 11.4375V11.8438C10.75 11.9375 10.7812 12.0312 10.8438 12.125L14.625 15.9062C14.7812 16.0625 15.0312 16.0625 15.1562 15.9062L15.875 15.1875C16.0312 15.0625 16.0312 14.8125 15.875 14.6562ZM6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5Z"
                fill={fill}
            />
        </SvgIcon>
    );
}
