import{j as e}from"./iframe-vvvxRbio.js";import{L as t}from"./tabs-BvdFeniO.js";import"./preload-helper-CfTaPvCy.js";const l={title:"Components/Logo",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text",table:{type:{summary:"number | string",detail:'number → px; or CSS length string like "2rem", "50%"'}}},height:{control:"text",table:{type:{summary:"number | string",detail:'number → px; or CSS length string like "2rem", "50%"'}}},variant:{control:"select",options:["default","blank"],table:{type:{summary:"'default' | 'blank'"},defaultValue:{summary:"default"}}}}},o={},n={args:o},a={args:o},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{width:24,height:24}),e.jsx(t,{width:32,height:32}),e.jsx(t,{width:48,height:48}),e.jsx(t,{width:64,height:64})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",background:"var(--ds-color-semantic-background-accent)",padding:"16px",borderRadius:"8px"},children:[e.jsx(t,{variant:"default"}),e.jsx(t,{variant:"blank"})]})},g=["Controls","Default","CustomSize","BlankVariant"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...a.parameters?.docs?.source},description:{story:`Default logo size displays the brand logo at standard size.
Use cases:
- Navigation bars
- Headers
- Brand identity
- Application branding`,...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Logo width={24} height={24} />
      <Logo width={32} height={32} />
      <Logo width={48} height={48} />
      <Logo width={64} height={64} />
    </div>
}`,...r.parameters?.docs?.source},description:{story:`Logo with custom size.
Use cases:
- Different layout contexts
- Responsive designs
- Footer logos
- Mobile navigation`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    background: 'var(--ds-color-semantic-background-accent)',
    padding: '16px',
    borderRadius: '8px'
  }}>
      <Logo variant="default" />
      <Logo variant="blank" />
    </div>
}`,...s.parameters?.docs?.source},description:{story:`Logo with blank variant uses the blank color token.
Use cases:
- Light backgrounds
- Header components with gradient backgrounds
- High contrast contexts`,...s.parameters?.docs?.description}}};export{s as BlankVariant,n as Controls,r as CustomSize,a as Default,g as __namedExportsOrder,l as default};
