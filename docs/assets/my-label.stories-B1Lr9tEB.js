import{j as S}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const g=({label:o,size:C="normal",allCaps:x=!1,color:v,fontColor:h=""})=>S.jsx("span",{className:`${C} ${v} label`,style:{color:h},children:x?o.toUpperCase():o});g.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:""},fontColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const L={title:"UI/labels/MyLabel",component:g,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Label content"}},a={args:{label:"All caps label",allCaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},l={args:{label:"Custom color label",fontColor:"#5517ac"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Label content"
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,m,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "All caps label",
    allCaps: true
  }
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Secondary label",
    color: "text-secondary"
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,b,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Custom color label",
    fontColor: "#5517ac"
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const A=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,A as __namedExportsOrder,L as default};
