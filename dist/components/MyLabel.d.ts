/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es el texto que se mostrará en el label
     */
    label: string;
    /**
     * Este es el tamaño por defecto del label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Defina si desea aplicar Capitalizacion en su Label
     */
    allCaps: boolean;
    /**
     * Defina que color desea aplicar a su Label
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * Defina que color desea aplicar a su Label
     */
    fontColor?: string;
    /**
    * Defina que color desea aplicar a su Label
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
