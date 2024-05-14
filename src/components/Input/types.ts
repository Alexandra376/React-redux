import {ChangeEvent} from "react";

export interface InputProps {
    name?: string;
    type?: string;
    placeholder: string;
    label?: string;
    getValue?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    isRowReverse?: boolean;
    isChecked?: boolean;
    error?: string | undefined;
}
