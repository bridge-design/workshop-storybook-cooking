import{j as e}from"./iframe-vvvxRbio.js";import{T as c,f as T,g as a,h as n,i as t,j as l}from"./tabs-BvdFeniO.js";import"./preload-helper-CfTaPvCy.js";const p={title:"Components/Table",component:c,parameters:{layout:"padded"},tags:["autodocs"]},i={headers:["Name","Status","Role","Email"],rows:[["John Doe","Active","Developer","john@example.com"],["Jane Smith","Active","Designer","jane@example.com"],["Bob Johnson","Inactive","Manager","bob@example.com"]]},d={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(a,{children:i.headers.map((o,b)=>e.jsx(n,{children:o},b))})}),e.jsx(t,{children:i.rows.map((o,b)=>e.jsx(a,{children:o.map((h,x)=>e.jsx(l,{children:h},x))},b))})]})}},r={render:()=>e.jsxs(c,{children:[e.jsx(T,{children:e.jsxs(a,{children:[e.jsx(n,{children:"Product"}),e.jsx(n,{children:"Price"}),e.jsx(n,{children:"Stock"})]})}),e.jsxs(t,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Widget A"}),e.jsx(l,{children:"$29.99"}),e.jsx(l,{children:"150"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Widget B"}),e.jsx(l,{children:"$39.99"}),e.jsx(l,{children:"75"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Widget C"}),e.jsx(l,{children:"$49.99"}),e.jsx(l,{children:"200"})]})]})]})},s={render:()=>e.jsxs(c,{children:[e.jsx(T,{children:e.jsxs(a,{children:[e.jsx(n,{children:"ID"}),e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Created"})]})}),e.jsxs(t,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"#001"}),e.jsx(l,{children:"Project Alpha"}),e.jsx(l,{children:"Active"}),e.jsx(l,{children:"2024-01-15"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"#002"}),e.jsx(l,{children:"Project Beta"}),e.jsx(l,{children:"Completed"}),e.jsx(l,{children:"2024-02-20"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"#003"}),e.jsx(l,{children:"Project Gamma"}),e.jsx(l,{children:"Planning"}),e.jsx(l,{children:"2024-03-10"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"#004"}),e.jsx(l,{children:"Project Delta"}),e.jsx(l,{children:"Active"}),e.jsx(l,{children:"2024-03-25"})]})]})]})},w=["Controls","Default","MultipleRows"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            {defaultTableData.headers.map((header, index) => <TableHead key={index}>{header}</TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {defaultTableData.rows.map((row, rowIndex) => <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => <TableCell key={cellIndex}>{cell}</TableCell>)}
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell>150</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell>$39.99</TableCell>
          <TableCell>75</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget C</TableCell>
          <TableCell>$49.99</TableCell>
          <TableCell>200</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...r.parameters?.docs?.source},description:{story:`Basic table with header and body sections.
Use cases:
- Data display
- User lists
- Product catalogs
- Reports and dashboards`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>#001</TableCell>
          <TableCell>Project Alpha</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>2024-01-15</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>#002</TableCell>
          <TableCell>Project Beta</TableCell>
          <TableCell>Completed</TableCell>
          <TableCell>2024-02-20</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>#003</TableCell>
          <TableCell>Project Gamma</TableCell>
          <TableCell>Planning</TableCell>
          <TableCell>2024-03-10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>#004</TableCell>
          <TableCell>Project Delta</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>2024-03-25</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...s.parameters?.docs?.source},description:{story:`Table with multiple columns and rows.
Use cases:
- Complex data sets
- Detailed reports
- Comparison tables`,...s.parameters?.docs?.description}}};export{d as Controls,r as Default,s as MultipleRows,w as __namedExportsOrder,p as default};
