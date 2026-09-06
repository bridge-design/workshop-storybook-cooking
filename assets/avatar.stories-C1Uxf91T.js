import{P as o}from"./iframe-vvvxRbio.js";import{b as n}from"./tabs-BvdFeniO.js";import"./preload-helper-CfTaPvCy.js";const d={title:"Components/Avatar",component:n,parameters:{layout:"centered"},argTypes:{alt:{table:{category:o.ACCESSIBILITY}}},tags:["autodocs"]},t={src:"https://i.pravatar.cc/150",alt:"User Avatar"},a={args:t},e={args:{...t,size:"small"}},s={args:{...t,size:"medium"}},r={args:{...t,size:"large"}},l=["Controls","Small","Medium","Large"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: 'small'
  }
}`,...e.parameters?.docs?.source},description:{story:`Small avatar size is ideal for compact UI elements where space is limited.
Use cases:
- User mentions in comments or chat messages
- Inline user tags in text content
- Activity logs or notification lists
- Compact user lists or tables`,...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: 'medium'
  }
}`,...s.parameters?.docs?.source},description:{story:`Medium avatar size is the default and most commonly used size.
Use cases:
- Standard user profiles in lists
- Navigation bars and headers
- Comment sections and forums
- Social media feeds
- Team member directories`,...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: 'large'
  }
}`,...r.parameters?.docs?.source},description:{story:`Large avatar size provides maximum visibility for user profiles.
Use cases:
- User profile pages and detailed views
- Account settings and preferences
- Contact cards and detailed user information
- Featured user displays or hero sections
- Authentication and welcome screens`,...r.parameters?.docs?.description}}};export{a as Controls,r as Large,s as Medium,e as Small,l as __namedExportsOrder,d as default};
