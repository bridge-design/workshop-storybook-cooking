import{P as n}from"./iframe-vvvxRbio.js";import{c as i}from"./tabs-BvdFeniO.js";import"./preload-helper-CfTaPvCy.js";const m={title:"Components/Button",component:i,parameters:{layout:"centered"},argTypes:{type:{table:{category:n.ACCESSIBILITY}}},tags:["autodocs","deprecated"]},a={children:"Button"},o={args:a},e={args:{...a,type:"button"}},s={args:{...a,type:"submit",children:"Submit"}},r={args:{...a,type:"reset",children:"Reset"}},t={args:{...a,disabled:!0,children:"Disabled Button"}},p=["Controls","Default","Submit","Reset","Disabled"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'button'
  }
}`,...e.parameters?.docs?.source},description:{story:`Standard button type is used for general actions.
Use cases:
- General UI actions
- Navigation triggers
- Modal actions`,...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'submit',
    children: 'Submit'
  }
}`,...s.parameters?.docs?.source},description:{story:`Submit button type is used for form submissions.
Use cases:
- Form submit actions
- Data submission
- Form wizards`,...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'reset',
    children: 'Reset'
  }
}`,...r.parameters?.docs?.source},description:{story:`Reset button type is used to reset form fields.
Use cases:
- Form reset actions
- Clearing form data`,...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    children: 'Disabled Button'
  }
}`,...t.parameters?.docs?.source},description:{story:`Disabled button state is used when an action is not available.
Use cases:
- Form validation (disable submit until form is valid)
- Loading states
- Permission-based actions
- Temporarily unavailable features`,...t.parameters?.docs?.description}}};export{o as Controls,e as Default,t as Disabled,r as Reset,s as Submit,p as __namedExportsOrder,m as default};
