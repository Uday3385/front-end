'use client';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import SearchField from '@/src/components/Inputs/SearchField';
import { useTheme } from '@/src/theme';
import SelectField from '@/src/components/Inputs/SelectField';
import AssistCard from '@/src/components/Cards/Assist';
import stylesObj from './styles';
import styles from '@/src/styles/dashboard/content';

export default function Task() {
    const theme = useTheme(),
        contentStyle = styles.content1({ theme, flex: 1, marginRight: '0px' }),
        searchResourcesStyle = { sx: stylesObj.searchResourceWrapper };

    return (
        <div style={styles.root}>
            <div style={contentStyle}>
                <Box sx={stylesObj.assistCardWrapper}>
                    <AssistCard title="Courses" iconUrl="/icons/books.svg" backgroundColor="#3F51B5" />
                    <AssistCard title="Videos" iconUrl="/icons/file-video.svg" backgroundColor="#2196F3" />
                    <AssistCard title="Creatives" iconUrl="/icons/pencil-paintbrush.svg" backgroundColor="#00BCD4" />
                    <AssistCard title="Wallpapers" iconUrl="/icons/image.svg" backgroundColor="#4FC3F7" />
                </Box>

                <SearchField id="searchResources" label="Search Resources" containerProps={searchResourcesStyle} />

                <div style={stylesObj.divider({ theme })}></div>

                <Box sx={stylesObj.filters}>
                    <SelectField
                        name="allCategories"
                        defaultValue="All"
                        label={null}
                        items={[{ label: 'All Categories', value: 'All' }]}
                    />
                    <SelectField
                        name="allTopics"
                        defaultValue="All"
                        label={null}
                        items={[{ label: 'All Topics', value: 'All' }]}
                    />
                    <SelectField
                        name="allStyles"
                        defaultValue="All"
                        label={null}
                        items={[{ label: 'All Styles', value: 'All' }]}
                    />
                </Box>

                <Box sx={stylesObj.searchResult({ theme })}>
                    <Typography className="searchPlaceholder">Search Something...</Typography>
                </Box>
            </div>
        </div>
    );
}
