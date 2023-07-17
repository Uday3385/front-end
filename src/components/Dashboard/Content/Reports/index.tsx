'use client';

import ReportsTable from '@/src/components/Tables/Reports';
import SelectField from '@/src/components/Inputs/SelectField';
import stylesObj from './styles';
import styles from '@/src/styles/dashboard/content';

export default function Reports() {
    const assignReportLabelProps = {
            style: { marginRight: '40px' },
        },
        assignReportField = { maxWidth: '250px' },
        assignReportFieldContainerProps = { sx: { marginBottom: '30px' } };

    return (
        <div style={styles.root}>
            <div style={styles.content1(stylesObj.wrapper)}>
                <SelectField
                    skipSelectPlaceholder={false}
                    containerProps={assignReportFieldContainerProps}
                    placeholder="Select"
                    labelProps={assignReportLabelProps}
                    required={false}
                    label="Assign Report"
                    items={[{ label: 'Select', value: '' }]}
                    sx={assignReportField}
                    id="assignReport"
                />

                <ReportsTable />
            </div>
        </div>
    );
}
