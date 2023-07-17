import * as React from 'react';
import { InputFieldElement, InputRef } from '@/src/components/Inputs/TextField';

export const useInputFieldRef = (inputRef?: InputRef) => {
    const inputFieldRef = React.useRef<InputFieldElement>();

    React.useEffect(() => {
        if (inputRef) {
            inputRef.current = inputFieldRef.current;
        }
    }, [inputFieldRef, inputRef]);

    return inputFieldRef;
};

export const useInputFieldDefaultValue = ({ value, ref }: { value: unknown; ref: React.MutableRefObject<any> }) => {
    React.useEffect(() => {
        if (value !== undefined && ref.current) {
            ref.current.value = value;
        }
    }, [value]);
};
