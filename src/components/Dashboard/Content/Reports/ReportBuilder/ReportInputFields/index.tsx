'use client';

import Box from '@mui/material/Box';

import SelectDateField from '@/src/components/Inputs/SelectDateField';
import SelectField from '@/src/components/Inputs/SelectField';
import TextField from '@/src/components/Inputs/TextField';
import DateField from '@/src/components/Inputs/DateField';
import stylesObj from '@/src/components/Dashboard/Content/Reports/ReportBuilder/styles';

export default function ReportInputFields() {
    const labelProps = {
            style: stylesObj.label,
        },
        containersProps = {
            sx: stylesObj.inputContainer,
        };

    return (
        <Box sx={stylesObj.fieldsWrapper}>
            <div className="fieldsWrapperLeft">
                <TextField
                    containerProps={containersProps}
                    placeholder=""
                    required={false}
                    label="Report Name"
                    labelProps={labelProps}
                />
                <TextField
                    containerProps={containersProps}
                    placeholder=""
                    required={false}
                    label="Report Category"
                    labelProps={labelProps}
                />
                <SelectDateField required={false} labelMinWidth="123px" />
            </div>
            <div className="fieldsWrapperRight">
                <SelectField
                    skipSelectPlaceholder={false}
                    containerProps={containersProps}
                    placeholder="Select"
                    required={false}
                    items={[{ label: 'Select', value: '' }]}
                    label="Hospital"
                    labelProps={labelProps}
                />
                <TextField
                    containerProps={containersProps}
                    labelProps={labelProps}
                    id="reportDescription"
                    label="Report Description"
                    multiline={true}
                    required={false}
                />
            </div>
        </Box>
    );
}
