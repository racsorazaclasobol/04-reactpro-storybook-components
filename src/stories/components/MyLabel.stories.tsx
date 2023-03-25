import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";


export default { 
    title:'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        fontColor: { control: 'color' },
    }
} as ComponentMeta< typeof MyLabel >

const Template: ComponentStory< typeof MyLabel > = ( args ) => <MyLabel { ...args }/>

export const Basic      = Template.bind({});
Basic.args = {
    label: 'No Label',
    size: 'normal',
    color: 'primary',
    allCaps: false,
}

export const AllCaps    = Template.bind({});
AllCaps.args = {
    label: 'No Label',
    size: 'normal',
    color: 'primary',
    allCaps: true,
}

export const Secondary  = Template.bind({});
Secondary.args = { 
    label: 'No Label',
    size: 'normal',
    color: 'secondary',
    allCaps: false,
}

export const Tertiary  = Template.bind({});
Tertiary.args = { 
    label: 'No Label',
    size: 'normal',
    color: 'tertiary',
    allCaps: true,
}

export const CustomColor  = Template.bind({});
Tertiary.args = { 
    label: 'No Label',
    size: 'h1',
    color: 'primary',
    fontColor: '#000000',
}

export const CustomBackgroundColor  = Template.bind({});
CustomBackgroundColor.args = { 
    label: 'No Label',
    size: 'h1',
    fontColor: '#EEEEEE',
    backgroundColor:'#000000'
}