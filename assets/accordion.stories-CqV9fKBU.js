import{j as e,R as g}from"./iframe-vvvxRbio.js";import{A as n}from"./tabs-BvdFeniO.js";import"./preload-helper-CfTaPvCy.js";const A={title:"Components/Accordion",component:n,parameters:{layout:"padded"},tags:["autodocs"]},l={children:e.jsxs(e.Fragment,{children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsxs(n.Trigger,{children:["What is an accordion?",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"An accordion is a vertically stacked set of interactive sections that allow users to expand and collapse content panels."})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsxs(n.Trigger,{children:["How does it work?",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"Click on a header to expand or collapse its content panel. Only one item can be expanded at a time by default."})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsxs(n.Trigger,{children:["Is it accessible?",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"Yes! The accordion supports full keyboard navigation and screen reader announcements."})]})]})},d={args:l},t={args:{...l,children:e.jsxs(e.Fragment,{children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsxs(n.Trigger,{children:["First Item",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"This is the content for the first accordion item. It can contain any React elements, text, or components."})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsxs(n.Trigger,{children:["Second Item",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"This is the content for the second accordion item. You can include complex nested structures here."})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsxs(n.Trigger,{children:["Third Item",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"This is the content for the third accordion item. The accordion provides smooth animations when expanding and collapsing."})]})]})}},o={render:()=>{const[m,h]=g.useState("item-1");return e.jsxs(n,{value:m,onValueChange:h,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsxs(n.Trigger,{children:["First Item (Controlled)",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"This accordion is controlled. The expanded state is managed by React state."})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsxs(n.Trigger,{children:["Second Item (Controlled)",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"You can programmatically change which item is expanded by updating the value prop."})]})]})}},i={args:{type:"multiple",defaultValue:["item-1","item-2"],children:e.jsxs(e.Fragment,{children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsxs(n.Trigger,{children:["First Item",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"With multiple mode enabled, multiple items can be expanded at the same time."})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsxs(n.Trigger,{children:["Second Item",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"This item is also expanded by default. Both items can remain open simultaneously."})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsxs(n.Trigger,{children:["Third Item",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"You can expand this item without collapsing the others."})]})]})}},r={args:{collapsible:!0,defaultValue:"item-1",children:e.jsxs(e.Fragment,{children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsxs(n.Trigger,{children:["First Item",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"With collapsible enabled, you can click this item again to collapse it, leaving no items expanded."})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsxs(n.Trigger,{children:["Second Item",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"This allows for a more flexible user experience where users can hide all content if needed."})]})]})}},c={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsxs(n.Trigger,{children:["Enabled Item",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"This item can be toggled normally."})]}),e.jsxs(n.Item,{value:"item-2",disabled:!0,children:[e.jsxs(n.Trigger,{children:["Disabled Item",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"This item is disabled and cannot be expanded or collapsed."})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsxs(n.Trigger,{children:["Another Enabled Item",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:"This item can also be toggled normally."})]})]})}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"Item without Indicator"}),e.jsx(n.Content,{children:"This accordion item doesn't have an indicator icon. The state is still clearly communicated through the content visibility."})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"Another Item"}),e.jsx(n.Content,{children:"The accordion still functions perfectly without the visual indicator."})]})]})}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsxs(n.Trigger,{children:["Product Information",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:e.jsxs("div",{children:[e.jsx("h3",{style:{marginTop:0,marginBottom:"0.5rem"},children:"Product Details"}),e.jsx("p",{style:{marginBottom:"0.5rem"},children:"This accordion panel can contain complex nested content including headings, paragraphs, lists, and other components."}),e.jsxs("ul",{style:{marginTop:"0.5rem",paddingLeft:"1.5rem"},children:[e.jsx("li",{children:"Feature one"}),e.jsx("li",{children:"Feature two"}),e.jsx("li",{children:"Feature three"})]})]})})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsxs(n.Trigger,{children:["Specifications",e.jsx(n.Indicator,{})]}),e.jsx(n.Content,{children:e.jsxs("div",{children:[e.jsx("h3",{style:{marginTop:0,marginBottom:"0.5rem"},children:"Technical Specs"}),e.jsxs("dl",{style:{margin:0},children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"Dimensions:"}),e.jsx("dd",{style:{marginLeft:"1rem",marginBottom:"0.5rem"},children:"10 x 5 x 3 inches"}),e.jsx("dt",{style:{fontWeight:"bold"},children:"Weight:"}),e.jsx("dd",{style:{marginLeft:"1rem"},children:"2.5 lbs"})]})]})})]})]})}},I=["Controls","Default","Controlled","Multiple","Collapsible","WithDisabledItem","WithoutIndicator","WithComplexContent"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    children: <>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            First Item
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            This is the content for the first accordion item. It can contain any React elements, text, or components.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>
            Second Item
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            This is the content for the second accordion item. You can include complex nested structures here.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>
            Third Item
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            This is the content for the third accordion item. The accordion provides smooth animations when expanding and collapsing.
          </Accordion.Content>
        </Accordion.Item>
      </>
  }
}`,...t.parameters?.docs?.source},description:{story:`Basic accordion with multiple items.
Use cases:
- FAQ sections
- Settings panels
- Content organization
- Progressive disclosure`,...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string>('item-1');
    return <Accordion value={value} onValueChange={setValue}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            First Item (Controlled)
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            This accordion is controlled. The expanded state is managed by React state.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>
            Second Item (Controlled)
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            You can programmatically change which item is expanded by updating the value prop.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>;
  }
}`,...o.parameters?.docs?.source},description:{story:`Controlled accordion where the expanded state is managed externally.
Use cases:
- When you need to sync accordion state with other UI elements
- When you need to programmatically control which items are open
- When integrating with form state management`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    defaultValue: ['item-1', 'item-2'],
    children: <>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            First Item
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            With multiple mode enabled, multiple items can be expanded at the same time.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>
            Second Item
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            This item is also expanded by default. Both items can remain open simultaneously.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>
            Third Item
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            You can expand this item without collapsing the others.
          </Accordion.Content>
        </Accordion.Item>
      </>
  }
}`,...i.parameters?.docs?.source},description:{story:`Accordion with multiple items expanded simultaneously.
Use cases:
- When users need to compare content across multiple sections
- When all sections should be independently expandable
- Settings panels where multiple options need to be visible`,...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    defaultValue: 'item-1',
    children: <>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            First Item
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            With collapsible enabled, you can click this item again to collapse it, leaving no items expanded.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>
            Second Item
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            This allows for a more flexible user experience where users can hide all content if needed.
          </Accordion.Content>
        </Accordion.Item>
      </>
  }
}`,...r.parameters?.docs?.source},description:{story:`Accordion with collapsible behavior - allows the currently expanded item to be collapsed.
Use cases:
- When you want to allow users to collapse all items
- When the accordion state should be completely user-controlled
- FAQ sections where all questions can be collapsed`,...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            Enabled Item
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            This item can be toggled normally.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2" disabled>
          <Accordion.Trigger>
            Disabled Item
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            This item is disabled and cannot be expanded or collapsed.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>
            Another Enabled Item
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            This item can also be toggled normally.
          </Accordion.Content>
        </Accordion.Item>
      </>
  }
}`,...c.parameters?.docs?.source},description:{story:`Accordion with disabled items that cannot be expanded or collapsed.
Use cases:
- When certain sections are not yet available
- When content is conditionally accessible
- When you need to show unavailable options`,...c.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            Item without Indicator
          </Accordion.Trigger>
          <Accordion.Content>
            This accordion item doesn't have an indicator icon. The state is still clearly communicated through the content visibility.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>
            Another Item
          </Accordion.Trigger>
          <Accordion.Content>
            The accordion still functions perfectly without the visual indicator.
          </Accordion.Content>
        </Accordion.Item>
      </>
  }
}`,...s.parameters?.docs?.source},description:{story:`Accordion without indicator icons for a minimal design.
Use cases:
- Minimal design requirements
- When the expand/collapse state is clear from context
- Space-constrained layouts`,...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            Product Information
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            <div>
              <h3 style={{
              marginTop: 0,
              marginBottom: '0.5rem'
            }}>Product Details</h3>
              <p style={{
              marginBottom: '0.5rem'
            }}>
                This accordion panel can contain complex nested content including headings, paragraphs, lists, and other components.
              </p>
              <ul style={{
              marginTop: '0.5rem',
              paddingLeft: '1.5rem'
            }}>
                <li>Feature one</li>
                <li>Feature two</li>
                <li>Feature three</li>
              </ul>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>
            Specifications
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            <div>
              <h3 style={{
              marginTop: 0,
              marginBottom: '0.5rem'
            }}>Technical Specs</h3>
              <dl style={{
              margin: 0
            }}>
                <dt style={{
                fontWeight: 'bold'
              }}>Dimensions:</dt>
                <dd style={{
                marginLeft: '1rem',
                marginBottom: '0.5rem'
              }}>10 x 5 x 3 inches</dd>
                <dt style={{
                fontWeight: 'bold'
              }}>Weight:</dt>
                <dd style={{
                marginLeft: '1rem'
              }}>2.5 lbs</dd>
              </dl>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </>
  }
}`,...a.parameters?.docs?.source},description:{story:`Accordion with complex nested content in the panels.
Use cases:
- Rich content display
- Forms within accordion panels
- Lists and structured data
- Multi-element layouts`,...a.parameters?.docs?.description}}};export{r as Collapsible,o as Controlled,d as Controls,t as Default,i as Multiple,a as WithComplexContent,c as WithDisabledItem,s as WithoutIndicator,I as __namedExportsOrder,A as default};
