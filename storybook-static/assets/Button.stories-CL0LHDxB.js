import{j as f}from"./jsx-runtime-D_zvdyIk.js";const v=({children:h,onClick:b,variant:x="primary"})=>{const B="px-4 py-2 font-semibold rounded-2xl transition-all duration-300",S={primary:"bg-blue-600 text-white hover:bg-blue-700",secondary:"bg-gray-600 text-white hover:bg-gray-700",outline:"border border-gray-600 text-gray-600 hover:bg-gray-100",danger:"bg-red-600 text-white hover:bg-red-700"};return f.jsx("button",{onClick:b,className:`${B} ${S[x]}`,children:h})};v.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "outline" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}}}};const O={title:"Components/Button",component:v,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","secondary","outline","danger"]}}}},e={args:{children:"Primary Button",variant:"primary"}},r={args:{children:"Secondary Button",variant:"secondary"}},a={args:{children:"Outline Button",variant:"outline"}},n={args:{children:"Danger Button",variant:"danger"}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Secondary Button",
    variant: "secondary"
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    variant: "outline"
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "Danger Button",
    variant: "danger"
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const R=["Primary","Secondary","Outline","Danger"];export{n as Danger,a as Outline,e as Primary,r as Secondary,R as __namedExportsOrder,O as default};
