import{P as p,j as e}from"./iframe-vvvxRbio.js";import{B as s}from"./tabs-BvdFeniO.js";import"./preload-helper-CfTaPvCy.js";const u={title:"Components/Badge",component:s,parameters:{layout:"centered"},argTypes:{status:{control:"select",table:{category:p.ACCESSIBILITY}}},tags:["autodocs"]},i={status:"planned"},d={args:i},r={args:{...i,status:"planned"}},a={args:{...i,status:"in progress"}},t={args:{...i,status:"done"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(s,{status:"planned"}),e.jsx(s,{status:"in progress"}),e.jsx(s,{status:"done"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(s,{children:"Q1 2024"}),e.jsx(s,{children:"Sprint 12"}),e.jsx(s,{children:"Version 2.0"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(s,{children:"Feature: Dark Mode"}),e.jsx(s,{children:"Bug Fix #123"}),e.jsx(s,{children:"Deployed"})]})]})},m=["Controls","Planned","InProgress","Done","AllStatuses","CustomText"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    status: 'planned'
  }
}`,...r.parameters?.docs?.source},description:{story:`Planned status badge indicates items that are scheduled or queued.
Use cases:
- Task management systems
- Project planning boards
- Feature roadmaps
- Work item tracking`,...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    status: 'in progress'
  }
}`,...a.parameters?.docs?.source},description:{story:`In progress status badge indicates items currently being worked on.
Use cases:
- Active task indicators
- Work-in-progress items
- Current sprint items
- Ongoing projects`,...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    status: 'done'
  }
}`,...t.parameters?.docs?.source},description:{story:`Done status badge indicates completed items.
Use cases:
- Completed tasks
- Finished features
- Resolved issues
- Delivered milestones`,...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge status="planned" />
      <Badge status="in progress" />
      <Badge status="done" />
    </div>
}`,...n.parameters?.docs?.source},description:{story:`Badge text is automatically derived from the status.
The component displays predefined text based on the status value.`,...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start'
  }}>
      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
        <Badge>Q1 2024</Badge>
        <Badge>Sprint 12</Badge>
        <Badge>Version 2.0</Badge>
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
        <Badge>Feature: Dark Mode</Badge>
        <Badge>Bug Fix #123</Badge>
        <Badge>Deployed</Badge>
      </div>
    </div>
}`,...o.parameters?.docs?.source},description:{story:`Badge component supports custom text through the \`children\` prop.
When children are provided, status is ignored and no status icons are shown.
Use cases:
- Custom status labels
- Task names or identifiers
- Feature tags with specific names
- Any custom badge text`,...o.parameters?.docs?.description}}};export{n as AllStatuses,d as Controls,o as CustomText,t as Done,a as InProgress,r as Planned,m as __namedExportsOrder,u as default};
