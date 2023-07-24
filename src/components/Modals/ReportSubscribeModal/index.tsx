'use client';

import * as React from 'react';

import DialogContent from '@mui/material/DialogContent';

import { useEditModalAction, useSetEditModalAction } from '@/src/hooks/useModal';
import BootstrapModal, { BootstrapModalActions } from '@/src/components/Modals/BootstrapModal';
import ConfirmEditActionButton from '@/src/components/Modals/EditActionModal/ConfirmEditActionButton';
import CancelEditActionButton from '@/src/components/Modals/EditActionModal/CancelEditActionButton';
import EditModalTitle from '@/src/components/Modals/EditActionModal/EditModalTitle';
import SelectDateField from '@/src/components/Inputs/SelectDateField';
import SelectTimeField from '@/src/components/Inputs/SelectTimeField';
import { useTheme } from '@/src/theme';
import RadioButton from '@/src/components/Inputs/RadioButton';
import stylesProps from './styles';

export type ElementRef = HTMLElement | null;

export default function ReportSubscribeModal() {
    const { name, open = false, onConfirm, title = 'Subscribe To This Report' } = useEditModalAction(),
        [loading, setLoading] = React.useState(false),
        setEditModalAction = useSetEditModalAction(),
        theme = useTheme(),
        stylesObj = stylesProps({ theme }),
        isOpen = open && name === 'ReportSubscribeModal';

    const handleEditAction = async () => {
        if (onConfirm) {
            setLoading(() => true);
            await onConfirm();
            setLoading(false);
            setEditModalAction({ open: false });
        }
    };

    const content = (
        <>
            <SelectDateField marginBottom="20px" labelMinWidth="180px" labelWeight={700} label="Date of Recurrence" />
            <SelectTimeField marginBottom="20px" labelMinWidth="180px" labelWeight={700} label="Time Of Recurrence" />

            <RadioButton
                required={true}
                formLabel={{ id: 'occurrence', label: 'Occurrence', props: { style: stylesObj.inputLabel } }}
                name="occurrence"
                options={[
                    { label: 'Daily', value: 'daily' },
                    { label: 'Weekly', value: 'weekly' },
                    { label: 'Monthly', value: 'monthly' },
                    { label: 'Yearly', value: 'yearly' },
                ]}
            />

            <RadioButton
                style={{ marginTop: '30px' }}
                isCheckbox={true}
                required={true}
                formLabel={{
                    props: { style: stylesObj.inputLabel },
                    label: 'Select Report',
                    id: 'selectReport',
                }}
                name="selectReport"
                options={[
                    { label: 'All Reports', value: 'all' },
                    { label: 'Field Time', value: 'fieldTime' },
                    { label: 'Field Date', value: 'fieldDate' },
                    { label: 'Field Month', value: 'fieldMonth' },
                    { label: 'Field Lorem', value: 'fieldLorem' },
                    { label: 'Field Lorem Flyer', value: 'fieldLoremFlyer' },
                    { label: 'Field Myth', value: 'fieldMyth' },
                    { label: 'Field Lythio', value: 'fieldLythio' },
                    { label: 'Field Ipsium', value: 'fieldIpsium' },
                ]}
            />
        </>
    );

    return (
        <BootstrapModal open={isOpen} sx={stylesObj.modalStyle} keepMounted={true}>
            <EditModalTitle title={title} />
            <DialogContent className="editDataModalContent">{content}</DialogContent>

            <BootstrapModalActions>
                <CancelEditActionButton loading={loading} />

                <ConfirmEditActionButton
                    titleUpdating="Subscribing..."
                    onConfirm={handleEditAction}
                    loading={loading}
                    title="Subscribe"
                />
            </BootstrapModalActions>
        </BootstrapModal>
    );
}
