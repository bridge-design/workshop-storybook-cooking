import{P as r,j as e}from"./iframe-vvvxRbio.js";import{a as m}from"./tabs-BvdFeniO.js";import"./preload-helper-CfTaPvCy.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,v={title:"Components/Alert",component:m,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["Info","Warning","Success","Danger"],table:{category:r.ACCESSIBILITY}},icon:{control:"boolean",table:{category:r.APPEARANCE}},link:{control:"boolean",table:{category:r.APPEARANCE}},dismissible:{control:"boolean",table:{category:r.APPEARANCE}},text:{control:"text",table:{category:r.CONTENT}},linkLabel:{control:"text",table:{category:r.CONTENT}},onDismiss:{action:"dismissed",table:{category:r.EVENTS}}},tags:["autodocs","beta"]},s={variant:"Info",icon:!0,link:!0,dismissible:!0,text:"Emphasized description.",linkLabel:"Link",onDismiss:f()},g={args:s},a={args:{...s,variant:"Info"}},n={args:{...s,variant:"Warning"}},t={args:{...s,variant:"Success"}},o={args:{...s,variant:"Danger"}},i={args:{...s,icon:!1}},c={args:{...s,link:!1}},l={args:{...s,dismissible:!1}},d={args:{...s,children:e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:["Custom alert message with ",e.jsx("strong",{children:"bold text"}),"."]}),e.jsx("a",{href:"#",onClick:u=>u.preventDefault(),children:"Learn more"})]})}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(m,{variant:"Info",text:"This is an info alert"}),e.jsx(m,{variant:"Warning",text:"This is a warning alert"}),e.jsx(m,{variant:"Success",text:"This is a success alert"}),e.jsx(m,{variant:"Danger",text:"This is a danger alert"})]})},y=["Controls","Info","Warning","Success","Danger","WithoutIcon","WithoutLink","NonDismissible","CustomContent","AllVariants"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...g.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'Info'
  }
}`,...a.parameters?.docs?.source},description:{story:`Info variant is used for informational messages.
Use cases:
- General information
- Tips and hints
- System updates
- Feature announcements`,...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'Warning'
  }
}`,...n.parameters?.docs?.source},description:{story:`Warning variant is used for cautionary messages.
Use cases:
- Important notices
- Upcoming changes
- Action required warnings
- Deprecation notices`,...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'Success'
  }
}`,...t.parameters?.docs?.source},description:{story:`Success variant is used for positive confirmation messages.
Use cases:
- Successful operations
- Completion confirmations
- Achievement notifications
- Positive feedback`,...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'Danger'
  }
}`,...o.parameters?.docs?.source},description:{story:`Danger variant is used for critical error messages.
Use cases:
- Error notifications
- Critical warnings
- System failures
- Security alerts`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    icon: false
  }
}`,...i.parameters?.docs?.source},description:{story:`Alert without icon.
Use cases:
- Minimal design requirements
- Space-constrained layouts
- When icon is redundant`,...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    link: false
  }
}`,...c.parameters?.docs?.source},description:{story:`Alert without link.
Use cases:
- Simple notifications
- When no action is needed
- Standalone messages`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    dismissible: false
  }
}`,...l.parameters?.docs?.source},description:{story:`Non-dismissible alert.
Use cases:
- Critical system messages
- Required acknowledgments
- Persistent notifications`,...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    children: <>
        <span>Custom alert message with <strong>bold text</strong>.</span>
        <a href="#" onClick={e => e.preventDefault()}>Learn more</a>
      </>
  }
}`,...d.parameters?.docs?.source},description:{story:`Alert with custom content using children prop.
When children are provided, text and linkLabel are ignored.`,...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Alert variant="Info" text="This is an info alert" />
      <Alert variant="Warning" text="This is a warning alert" />
      <Alert variant="Success" text="This is a success alert" />
      <Alert variant="Danger" text="This is a danger alert" />
    </div>
}`,...p.parameters?.docs?.source},description:{story:"All alert variants displayed together.",...p.parameters?.docs?.description}}};export{p as AllVariants,g as Controls,d as CustomContent,o as Danger,a as Info,l as NonDismissible,t as Success,n as Warning,i as WithoutIcon,c as WithoutLink,y as __namedExportsOrder,v as default};
