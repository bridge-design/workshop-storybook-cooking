import{j as e,r as k}from"./iframe-vvvxRbio.js";import"./preload-helper-CfTaPvCy.js";const y={home:e.jsx("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),user:e.jsx("path",{d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),search:e.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),heart:e.jsx("path",{d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),star:e.jsx("path",{d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),settings:e.jsx("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),bell:e.jsx("path",{d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),mail:e.jsx("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),check:e.jsx("path",{d:"M5 13l4 4L19 7",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),close:e.jsx("path",{d:"M6 18L18 6M6 6l12 12",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})},i=({name:o,size:r=24,color:t})=>{const n=y[o];return n?e.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",style:t?{color:t}:void 0,children:n}):(console.warn(`Icon "${o}" not found`),null)};i.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"union",raw:"keyof typeof icons",elements:[{name:"literal",value:"home"},{name:"literal",value:"user"},{name:"literal",value:"search"},{name:"literal",value:"heart"},{name:"literal",value:"star"},{name:"literal",value:"settings"},{name:"literal",value:"bell"},{name:"literal",value:"mail"},{name:"literal",value:"check"},{name:"literal",value:"close"}]},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const f="_gallery_toilt_1",g="_item_toilt_7",v="_iconWrapper_toilt_15",j="_copyButton_toilt_33",x="_label_toilt_67",s={gallery:f,item:g,iconWrapper:v,copyButton:j,label:x},d=({name:o,children:r,iconSize:t=24,iconColor:n="#000000"})=>{const[u,c]=k.useState(!1),m=()=>{const h=`<Icon name="${o}" size={${t}} color="${n}" />`;navigator.clipboard.writeText(h),c(!0),setTimeout(()=>c(!1),2e3)};return e.jsxs("div",{className:s.item,children:[e.jsxs("div",{className:s.iconWrapper,children:[r,e.jsx("button",{className:s.copyButton,onClick:m,title:"Copy code",children:u?"✓":"⧉"})]}),e.jsx("span",{className:s.label,children:o})]})},p=({children:o})=>e.jsx("div",{className:s.gallery,children:o});d.__docgenInfo={description:"",methods:[],displayName:"IconItem",props:{name:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},iconSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},iconColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#000000'",computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"IconGallery",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const _={title:"Components/Icon",component:i,tags:["autodocs"]},z={name:"home",size:24,color:"#000000"},a={args:z},L=["home","user","search","heart","star","settings","bell","mail","check","close"],l={render:o=>{const r=o.size||24,t=o.color||"#000000";return e.jsx(p,{children:L.map(n=>e.jsx(d,{name:n,iconSize:r,iconColor:t,children:e.jsx(i,{name:n,size:r,color:t})},n))})},args:{size:32,color:"#000000"},argTypes:{size:{control:{type:"range",min:16,max:64,step:4},description:"Size of all icons in pixels"},color:{control:"color",description:"Color of all icons"}},parameters:{docs:{description:{story:"A gallery showcasing all available icons. Use the controls to adjust size and color. Hover over any icon and click the copy button to copy its code."}}}},b=["Default","AllIcons"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: IconProps) => {
    const iconSize = args.size || 24;
    const iconColor = args.color || '#000000';
    return <IconGallery>
        {iconNames.map(iconName => <IconItem key={iconName} name={iconName} iconSize={iconSize} iconColor={iconColor}>
            <Icon name={iconName} size={iconSize} color={iconColor} />
          </IconItem>)}
      </IconGallery>;
  },
  args: {
    size: 32,
    color: '#000000'
  },
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 16,
        max: 64,
        step: 4
      },
      description: 'Size of all icons in pixels'
    },
    color: {
      control: 'color',
      description: 'Color of all icons'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A gallery showcasing all available icons. Use the controls to adjust size and color. Hover over any icon and click the copy button to copy its code.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};export{l as AllIcons,a as Default,b as __namedExportsOrder,_ as default};
