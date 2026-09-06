import{j as e}from"./iframe-vvvxRbio.js";import{T as o,f as c,g as i,h as s,i as T,j as t,B as r}from"./tabs-BvdFeniO.js";import{p}from"./list-of-pages.data-DdXSDPbe.js";import"./preload-helper-CfTaPvCy.js";const j={title:"Patterns/List of Pages",parameters:{layout:"padded"}},n={render:()=>{const d=a=>{const l=a.toLowerCase();return l==="done"?e.jsx(r,{status:"done"}):l.includes("process")?e.jsx(r,{status:"in progress"}):e.jsx(r,{status:"planned"})};return e.jsxs(o,{children:[e.jsx(c,{children:e.jsxs(i,{children:[e.jsx(s,{children:"Header"}),e.jsx(s,{children:"Section Type"}),e.jsx(s,{children:"Status"}),e.jsx(s,{children:"Target"}),e.jsx(s,{children:"Limit"}),e.jsx(s,{children:"Reviewer"})]})}),e.jsx(T,{children:p.pages.map(a=>e.jsxs(i,{children:[e.jsx(t,{children:a.header}),e.jsx(t,{children:a.sectionType}),e.jsx(t,{children:d(a.status)}),e.jsx(t,{children:a.target}),e.jsx(t,{children:a.limit}),e.jsx(t,{children:a.reviewer||"Assign reviewer"})]},a.id))})]})}},x=["Default"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const getStatusBadge = (status: string) => {
      const statusLower = status.toLowerCase();
      if (statusLower === 'done') {
        return <Badge status="done" />;
      } else if (statusLower.includes('process')) {
        return <Badge status="in progress" />;
      }
      return <Badge status="planned" />;
    };
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
            <TableHead>Section Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Target</TableHead>
            <TableHead>Limit</TableHead>
            <TableHead>Reviewer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(pagesData.pages as Page[]).map(page => <TableRow key={page.id}>
              <TableCell>{page.header}</TableCell>
              <TableCell>{page.sectionType}</TableCell>
              <TableCell>{getStatusBadge(page.status)}</TableCell>
              <TableCell>{page.target}</TableCell>
              <TableCell>{page.limit}</TableCell>
              <TableCell>{page.reviewer || 'Assign reviewer'}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...n.parameters?.docs?.source},description:{story:`List of pages pattern displays a table with page information including
header, section type, status, target/limit counts, and reviewer assignment.

Use cases:
- Document management systems
- Proposal page tracking
- Content review workflows
- Project documentation`,...n.parameters?.docs?.description}}};export{n as Default,x as __namedExportsOrder,j as default};
