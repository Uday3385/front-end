import DragDropDirectionArrows from '../DragDropDirectionArrows';
import SelectField from '@/src/components/Inputs/SelectField';
import DropRegion from '../DropRegion';
import stylesObj from '@/src/components/Dashboard/Content/Reports/ReportBuilder/styles';

export default function RuleReportBuilderDropContainer() {
    const labelProps = {
            style: stylesObj.label,
        },
        containersProps = {
            sx: {
                margin: '20px 0px 0px 0px',
            },
        },
        logicFieldContainersProps = {
            sx: {
                margin: '10px 0px 0px 0px',
            },
        },
        inputStyle = { height: '31px !important' };

    return (
        <>
            <div className="reportPrompts reportPromptsValue">
                <DragDropDirectionArrows contextType="reportPrompts" multiple={false} title="" />

                <div className="dropBoxRapper">
                    <DropRegion contextType="reportPrompts" title="Report Prompts New Value" multiple={false} />

                    <SelectField
                        skipSelectPlaceholder={false}
                        containerProps={containersProps}
                        placeholder="Select"
                        required={false}
                        items={[{ label: 'Select', value: '' }]}
                        label="Select ipsum"
                        labelProps={labelProps}
                        sx={inputStyle}
                    />
                    <SelectField
                        skipSelectPlaceholder={false}
                        containerProps={logicFieldContainersProps}
                        placeholder="Select"
                        required={false}
                        items={[
                            { label: 'Select', value: '' },
                            { label: 'AND', value: 'AND' },
                            { label: 'OR', value: 'OR' },
                        ]}
                        label="Logic"
                        labelProps={labelProps}
                        sx={inputStyle}
                    />
                </div>
            </div>

            <div className="reportColumns reportPromptsValue">
                <DragDropDirectionArrows contextType="columns" multiple={false} title="" />

                <div className="dropBoxRapper">
                    <DropRegion contextType="columns" title="" multiple={false} />

                    <SelectField
                        skipSelectPlaceholder={false}
                        containerProps={containersProps}
                        placeholder="Select"
                        required={false}
                        items={[{ label: 'Select', value: '' }]}
                        label="Select ipsum"
                        labelProps={labelProps}
                        sx={inputStyle}
                    />
                </div>
            </div>
        </>
    );
}
