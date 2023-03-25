var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        fontColor: { control: 'color' },
    }
};
var Template = function (args) { return _jsx(MyLabel, __assign({}, args)); };
export var Basic = Template.bind({});
Basic.args = {
    label: 'No Label',
    size: 'normal',
    color: 'primary',
    allCaps: false,
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    label: 'No Label',
    size: 'normal',
    color: 'primary',
    allCaps: true,
};
export var Secondary = Template.bind({});
Secondary.args = {
    label: 'No Label',
    size: 'normal',
    color: 'secondary',
    allCaps: false,
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    label: 'No Label',
    size: 'normal',
    color: 'tertiary',
    allCaps: true,
};
export var CustomColor = Template.bind({});
Tertiary.args = {
    label: 'No Label',
    size: 'h1',
    color: 'primary',
    fontColor: '#000000',
};
export var CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    label: 'No Label',
    size: 'h1',
    fontColor: '#EEEEEE',
    backgroundColor: '#000000'
};
