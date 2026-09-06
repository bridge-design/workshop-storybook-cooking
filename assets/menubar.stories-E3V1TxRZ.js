import{j as e}from"./iframe-vvvxRbio.js";import{M as s,e as r}from"./tabs-BvdFeniO.js";import"./preload-helper-CfTaPvCy.js";const d={title:"Components/Menubar",component:s,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{variant:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"New"}),e.jsx(r,{active:!0,children:"Open"}),e.jsx(r,{children:"Save"})]})}},n={render:()=>e.jsxs(s,{children:[e.jsx(r,{children:"File"}),e.jsx(r,{active:!0,children:"Edit"}),e.jsx(r,{children:"View"}),e.jsx(r,{children:"Help"})]})},a={render:()=>e.jsxs("div",{style:{backgroundColor:"var(--ds-color-global-neutral-950)",color:"#ffffff",padding:"2rem",borderRadius:"var(--ds-radii-concept-m)"},children:[e.jsxs(s,{variant:"transparent",children:[e.jsx(r,{children:"File"}),e.jsx(r,{active:!0,children:"Edit"}),e.jsx(r,{children:"View"}),e.jsx(r,{children:"Help"})]}),e.jsxs("p",{style:{marginTop:"1rem",color:"#ffffff"},children:["This is text in the container. The menubar inherits the white color from its parent."," ",e.jsx("a",{href:"#",style:{color:"#ffffff",textDecoration:"underline"},children:"This is a link"})," ","with white color."]})]})},l=["Controls","Default","Transparent"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <>
        <MenubarItem>New</MenubarItem>
        <MenubarItem active>Open</MenubarItem>
        <MenubarItem>Save</MenubarItem>
      </>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Menubar>
      <MenubarItem>File</MenubarItem>
      <MenubarItem active>Edit</MenubarItem>
      <MenubarItem>View</MenubarItem>
      <MenubarItem>Help</MenubarItem>
    </Menubar>
}`,...n.parameters?.docs?.source},description:{story:`Basic menubar with items.
Use cases:
- Application navigation
- Menu systems
- Toolbar menus`,...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: 'var(--ds-color-global-neutral-950)',
    color: '#ffffff',
    padding: '2rem',
    borderRadius: 'var(--ds-radii-concept-m)'
  }}>
      <Menubar variant="transparent">
        <MenubarItem>File</MenubarItem>
        <MenubarItem active>Edit</MenubarItem>
        <MenubarItem>View</MenubarItem>
        <MenubarItem>Help</MenubarItem>
      </Menubar>
      <p style={{
      marginTop: '1rem',
      color: '#ffffff'
    }}>
        This is text in the container. The menubar inherits the white color from its parent.{' '}
        <a href="#" style={{
        color: '#ffffff',
        textDecoration: 'underline'
      }}>
          This is a link
        </a>
        {' '}with white color.
      </p>
    </div>
}`,...a.parameters?.docs?.source},description:{story:`Transparent menubar variant with no border and transparent background.
Font color is inherited from parent component.
Use cases:
- Overlay navigation
- Dark themed interfaces
- Hero sections with navigation`,...a.parameters?.docs?.description}}};export{t as Controls,n as Default,a as Transparent,l as __namedExportsOrder,d as default};
