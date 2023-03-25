import './mylabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
    /**
     * Este es el texto que se mostrará en el label.
     */
    label: string;
    /**
     * Este es el tamaño por defecto del label.
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Defina si desea aplicar Capitalizacion en su Label.
     */
    allCaps: boolean;
    /**
     * Defina que color desea aplicar a su Label.
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * Defina que color desea aplicar a su Label
     */
    fontColor?: string;
    /**
    * Defina que color desea aplicar a su Label
    */
    backgroundColor?: string
}


export const MyLabel = ( { 
    label   = 'No Label',
    size    = 'normal',
    allCaps = false,
    color   = 'primary',
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps ) => {

    return (

        <span className={ `label ${ size } text-${ color } ` }  style={{ color: fontColor, backgroundColor }}>
            { allCaps && label.toUpperCase() || label }
        </span>

    )
}
