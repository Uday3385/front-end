import Typography from '@mui/material/Typography';

import RadioButton, { type RadioButtonOptions } from '@/src/components/Inputs/RadioButton';
import type { RadioButtonType } from '@/src/components/Inputs/RadioButton';
import * as constants from '@/src/utils/constants';
import { useTheme } from '@/src/theme';
import styles from '@/src/styles/dashboard/content';

type Section = {
    radioButton?: Omit<RadioButtonType, 'name' | 'options'> & { name?: string; options?: RadioButtonOptions };
    content: React.ReactNode;
    style?: React.CSSProperties;
    title: React.ReactNode;
};

type Props = {
    section1: Section;
    section2?: Section;
};

export default function DashboardContentSection({ section1, section2 }: Props) {
    const theme = useTheme(),
        fullWidthStyle = !section2 ? { flex: 1, marginRight: '0px' } : {},
        section1Styles = styles.section1({ theme, ...fullWidthStyle, style: section1.style || {} }),
        section2Styles = section2 ? styles.section2({ theme, style: section2.style || {} }) : {};

    const radioButtonOptions = constants.CONTENT_DISPLAY_OPTION.dollarClaims;

    return (
        <div style={styles.root}>
            <div style={section1Styles}>
                <Typography component="div" style={styles.headerSectionTitle({ theme })}>
                    <span style={styles.sectionTitle}>{section1.title}</span>
                    {section1.radioButton ? (
                        <RadioButton
                            {...section1.radioButton}
                            name={section1.radioButton.name || 'contentRadioBtn'}
                            defaultValue={section1.radioButton.defaultValue || 'Claims'}
                            options={section1.radioButton.options || radioButtonOptions}
                        />
                    ) : null}
                </Typography>

                {section1.content}
            </div>

            {section2 ? (
                <div style={section2Styles}>
                    <Typography component="div" style={styles.headerSectionTitle({ theme })}>
                        <span style={styles.sectionTitle}>{section2.title}</span>
                        {section2.radioButton ? (
                            <RadioButton
                                {...section2.radioButton}
                                name={section2.radioButton.name || 'contentRadioBtn'}
                                defaultValue={section2.radioButton.defaultValue || 'Claims'}
                                options={section2.radioButton.options || radioButtonOptions}
                            />
                        ) : null}
                    </Typography>

                    {section2.content}
                </div>
            ) : null}
        </div>
    );
}
