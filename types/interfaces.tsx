import {Calculators} from "./enums";

export interface ControlledNumberInputProps {
    onChange: (value: number, type: Calculators) => void;
    type: Calculators;
    value?: number;
}