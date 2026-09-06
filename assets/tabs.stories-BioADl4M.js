import{j as e}from"./iframe-vvvxRbio.js";import{k as c,l as b,m as t,n as a}from"./tabs-BvdFeniO.js";import"./preload-helper-CfTaPvCy.js";const{expect:n,userEvent:u,within:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/Tabs",component:c,parameters:{layout:"centered"},tags:["autodocs"]},l={render:()=>e.jsxs(c,{defaultValue:"tab1",children:[e.jsxs(b,{children:[e.jsx(t,{value:"tab1",children:"Tab 1"}),e.jsx(t,{value:"tab2",children:"Tab 2"}),e.jsx(t,{value:"tab3",children:"Tab 3"})]}),e.jsx(a,{value:"tab1",children:"Content for Tab 1"}),e.jsx(a,{value:"tab2",children:"Content for Tab 2"}),e.jsx(a,{value:"tab3",children:"Content for Tab 3"})]})},i={render:()=>e.jsxs(c,{defaultValue:"overview",children:[e.jsxs(b,{children:[e.jsx(t,{value:"overview",children:"Overview"}),e.jsx(t,{value:"details",children:"Details"}),e.jsx(t,{value:"settings",children:"Settings"})]}),e.jsx(a,{value:"overview",children:e.jsx("p",{children:"This is the overview content."})}),e.jsx(a,{value:"details",children:e.jsx("p",{children:"This is the details content."})}),e.jsx(a,{value:"settings",children:e.jsx("p",{children:"This is the settings content."})})]})},r={render:()=>e.jsxs(c,{defaultValue:"profile",children:[e.jsxs(b,{children:[e.jsx(t,{value:"profile",children:"Profile"}),e.jsx(t,{value:"account",children:"Account"}),e.jsx(t,{value:"notifications",children:"Notifications"})]}),e.jsx(a,{value:"profile",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Profile Information"}),e.jsx("p",{children:"Manage your profile settings and personal information here."})]})}),e.jsx(a,{value:"account",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Account Settings"}),e.jsx("p",{children:"Update your account preferences and security settings."})]})}),e.jsx(a,{value:"notifications",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Notification Preferences"}),e.jsx("p",{children:"Configure how and when you receive notifications."})]})})]})},o={render:()=>e.jsxs(c,{defaultValue:"tab1",children:[e.jsxs(b,{children:[e.jsx(t,{value:"tab1",children:"Tab 1"}),e.jsx(t,{value:"tab2",children:"Tab 2"}),e.jsx(t,{value:"tab3",children:"Tab 3"})]}),e.jsx(a,{value:"tab1",children:e.jsx("p",{children:"Content for Tab 1"})}),e.jsx(a,{value:"tab2",children:e.jsx("p",{children:"Content for Tab 2"})}),e.jsx(a,{value:"tab3",children:e.jsx("p",{children:"Content for Tab 3"})})]}),play:async({canvasElement:h})=>{const s=p(h),T=s.getByRole("tab",{name:"Tab 1"});await n(T).toHaveAttribute("aria-selected","true"),await n(s.getByText("Content for Tab 1")).toBeInTheDocument();const d=s.getByRole("tab",{name:"Tab 2"});await u.click(d),await n(d).toHaveAttribute("aria-selected","true"),await n(s.getByText("Content for Tab 2")).toBeInTheDocument();const v=s.getByRole("tab",{name:"Tab 3"});await u.click(v),await n(v).toHaveAttribute("aria-selected","true"),await n(s.getByText("Content for Tab 3")).toBeInTheDocument(),await u.click(T),await n(T).toHaveAttribute("aria-selected","true"),await n(s.getByText("Content for Tab 1")).toBeInTheDocument()}},C=["Controls","Default","WithContent","InteractionTest"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p>This is the overview content.</p>
      </TabsContent>
      <TabsContent value="details">
        <p>This is the details content.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p>This is the settings content.</p>
      </TabsContent>
    </Tabs>
}`,...i.parameters?.docs?.source},description:{story:`Basic tabs with multiple tab panels.
Use cases:
- Content organization
- Settings panels
- Multi-section forms
- Tabbed interfaces`,...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div>
          <h3>Profile Information</h3>
          <p>Manage your profile settings and personal information here.</p>
        </div>
      </TabsContent>
      <TabsContent value="account">
        <div>
          <h3>Account Settings</h3>
          <p>Update your account preferences and security settings.</p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div>
          <h3>Notification Preferences</h3>
          <p>Configure how and when you receive notifications.</p>
        </div>
      </TabsContent>
    </Tabs>
}`,...r.parameters?.docs?.source},description:{story:`Tabs with more content in each panel.
Use cases:
- Detailed information display
- Complex tabbed interfaces
- Multi-step workflows`,...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Initially Tab 1 should be selected and its content visible
    const tab1 = canvas.getByRole('tab', {
      name: 'Tab 1'
    });
    await expect(tab1).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText('Content for Tab 1')).toBeInTheDocument();

    // Click Tab 2
    const tab2 = canvas.getByRole('tab', {
      name: 'Tab 2'
    });
    await userEvent.click(tab2);

    // Tab 2 should now be selected and show its content
    await expect(tab2).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText('Content for Tab 2')).toBeInTheDocument();

    // Click Tab 3
    const tab3 = canvas.getByRole('tab', {
      name: 'Tab 3'
    });
    await userEvent.click(tab3);

    // Tab 3 should now be selected and show its content
    await expect(tab3).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText('Content for Tab 3')).toBeInTheDocument();

    // Click back to Tab 1
    await userEvent.click(tab1);

    // Tab 1 should be selected again
    await expect(tab1).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText('Content for Tab 1')).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source},description:{story:`Interactive test that demonstrates tab switching behavior.
This story includes a play function that automatically tests tab interactions.`,...o.parameters?.docs?.description}}};export{l as Controls,i as Default,o as InteractionTest,r as WithContent,C as __namedExportsOrder,m as default};
