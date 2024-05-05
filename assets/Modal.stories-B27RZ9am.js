import{r as b}from"./index-uubelm5h.js";import{r as Fe}from"./index-Dei0BBcc.js";var xe={exports:{}},M={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe=b,Te=Symbol.for("react.element"),Le=Symbol.for("react.fragment"),Ne=Object.prototype.hasOwnProperty,Oe=Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qe={key:!0,ref:!0,__self:!0,__source:!0};function ve(t,r,l){var o,s={},c=null,d=null;l!==void 0&&(c=""+l),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(d=r.ref);for(o in r)Ne.call(r,o)&&!qe.hasOwnProperty(o)&&(s[o]=r[o]);if(t&&t.defaultProps)for(o in r=t.defaultProps,r)s[o]===void 0&&(s[o]=r[o]);return{$$typeof:Te,type:t,key:c,ref:d,props:s,_owner:Oe.current}}M.Fragment=Le;M.jsx=ve;M.jsxs=ve;xe.exports=M;var e=xe.exports;const Ie="_dimmed_vgirg_7",$e="_dialog_vgirg_14",De="_drawer_vgirg_30",ke="_drawerTop_vgirg_41",Ve="_drawerRight_vgirg_48",Ue="_drawerBottom_vgirg_55",Ae="_drawerLeft_vgirg_62",a={dimmed:Ie,dialog:$e,drawer:De,drawerTop:ke,drawerRight:Ve,drawerBottom:Ue,drawerLeft:Ae},We=(t,r,l)=>{b.useEffect(()=>{const o=s=>{t.current&&!t.current.contains(s.target)&&l&&r()};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[t,r,l])},ze=(t,r,l)=>{b.useEffect(()=>{const o=s=>{t&&s.key==="Escape"&&l&&r()};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t,r,l])},Ke={dialog:a.dialog,drawer:`${a.drawer} ${a.drawerBottom}`,"drawer-top":`${a.drawer} ${a.drawerTop}`,"drawer-right":`${a.drawer} ${a.drawerRight}`,"drawer-left":`${a.drawer} ${a.drawerLeft}`},je=({open:t,onClose:r,type:l,style:o,closeOnOutsideClick:s=!0,closeOnESCKeydown:c=!1,children:d})=>{const H=b.useRef(null);return We(H,r,s),ze(t,r,c),e.jsx(e.Fragment,{children:t&&Fe.createPortal(e.jsx("div",{className:a.dimmed,style:o==null?void 0:o.dimmed,children:e.jsx("section",{className:Ke[l],ref:H,style:o==null?void 0:o.modal,children:d})}),document.body)})};je.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{closeOnOutsideClick:{defaultValue:{value:"true",computed:!1},required:!1},closeOnESCKeydown:{defaultValue:{value:"false",computed:!1},required:!1}}};const Re=({style:t,children:r})=>e.jsx("section",{style:t,children:r});Re.__docgenInfo={description:"",methods:[],displayName:"ModalContent"};const Ye="_buttonRow_1giu2_1",Je="_buttonRowReverse_1giu2_9",Ze="_buttonColumn_1giu2_18",Ge="_buttonColumnReverse_1giu2_27",u={buttonRow:Ye,buttonRowReverse:Je,buttonColumn:Ze,buttonColumnReverse:Ge},Qe="_modalButton_lt589_3",Xe="_confirmButton_lt589_25",eo="_closeButton_lt589_30",R={modalButton:Qe,confirmButton:Xe,closeButton:eo},be=({style:t,customButton:r,hide:l,text:o,...s})=>e.jsx(e.Fragment,{children:!l&&(r??e.jsx("button",{className:`${R.modalButton} ${R.closeButton}`,...s,style:t,children:o??"취소"}))});be.__docgenInfo={description:"",methods:[],displayName:"CloseButton",props:{text:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},customButton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""}}};const Me=({style:t,customButton:r,hide:l,text:o,...s})=>e.jsx(e.Fragment,{children:!l&&(r??e.jsx("button",{className:`${R.modalButton} ${R.confirmButton}`,...s,style:t,children:o??"확인"}))});Me.__docgenInfo={description:"",methods:[],displayName:"ConfirmButton",props:{text:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},customButton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hide:{required:!1,tsType:{name:"boolean"},description:""}}};const oo={row:u.buttonRow,"row-reverse":u.buttonRowReverse,column:u.buttonColumn,"column-reverse":u.buttonColumnReverse},Se=({buttonPosition:t,closeButton:r,confirmButton:l,style:o})=>{const s=t?oo[t]:u.buttonRow;return e.jsxs("footer",{className:s,style:o,children:[e.jsx(be,{...r}),e.jsx(Me,{...l})]})};Se.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},buttonPosition:{required:!1,tsType:{name:"union",raw:"'row' | 'row-reverse' | 'column' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column'"},{name:"literal",value:"'column-reverse'"}]},description:""},closeButton:{required:!1,tsType:{name:"CloseButtonProps"},description:""},confirmButton:{required:!1,tsType:{name:"ConfirmButtonProps"},description:""}}};const ro="_modalHeader_z09er_3",no="_closeButton_z09er_10",to="_title_z09er_17",S={modalHeader:ro,closeButton:no,title:to},F="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2729_1438)'%3e%3cpath%20d='M19.8167%206.41L18.4067%205L12.8167%2010.59L7.22665%205L5.81665%206.41L11.4067%2012L5.81665%2017.59L7.22665%2019L12.8167%2013.41L18.4067%2019L19.8167%2017.59L14.2267%2012L19.8167%206.41Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2729_1438'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.81665)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",He=({title:t,onClose:r,customCloseIcon:l,hideCloseIcon:o,style:s})=>{const c=d=>{d.currentTarget.src=F};return e.jsxs("header",{className:S.modalHeader,style:s==null?void 0:s.modalHeader,children:[e.jsx("span",{className:S.title,style:s==null?void 0:s.modalTitle,children:t}),!o&&e.jsx("img",{src:l??F,alt:"close",className:S.closeButton,onClick:r,onError:c})]})};He.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ModalHeaderStyle"},description:""},customCloseIcon:{required:!1,tsType:{name:"string"},description:""},hideCloseIcon:{required:!1,tsType:{name:"boolean"},description:""}}};const n=Object.assign(je,{Header:He,Content:Re,Footer:Se});n.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{closeOnOutsideClick:{defaultValue:{value:"true",computed:!1},required:!1},closeOnESCKeydown:{defaultValue:{value:"false",computed:!1},required:!1}}};const ao={title:"Modal",component:n},i={args:{open:!0,children:e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루")}),type:"dialog",onClose:()=>console.log("마루")}},p={args:{open:!0,children:e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루")}),type:"drawer",onClose:()=>console.log("마루")}},m={args:{open:!0,children:e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루")}),type:"drawer-top",onClose:()=>console.log("마루")}},g={args:{open:!0,children:e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루")}),type:"drawer-right",onClose:()=>console.log("마루")}},_={args:{open:!0,children:e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루")}),type:"drawer-left",onClose:()=>console.log("마루")}},C={args:{open:!1,children:e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루")}),type:"dialog",onClose:()=>console.log("마루")}},B={args:{open:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루")}),e.jsx(n.Footer,{closeButton:{hide:!0}})]}),type:"dialog",onClose:()=>console.log("마루")}},h={args:{open:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루")}),e.jsx(n.Footer,{buttonPosition:"row"})]}),type:"dialog",onClose:()=>console.log("마루")}},f={args:{open:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루")}),e.jsx(n.Footer,{buttonPosition:"row-reverse"})]}),type:"dialog",onClose:()=>console.log("마루")}},w={args:{open:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루")}),e.jsx(n.Footer,{buttonPosition:"column"})]}),type:"dialog",onClose:()=>console.log("마루")}},E={args:{open:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루")}),e.jsx(n.Footer,{buttonPosition:"column-reverse"})]}),type:"dialog",onClose:()=>console.log("마루")}},y={args:{open:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루"),hideCloseIcon:!0}),e.jsx(n.Footer,{buttonPosition:"column-reverse"})]}),type:"dialog",onClose:()=>console.log("마루")}},x={args:{open:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루"),customCloseIcon:"https://github.com/jinhokim98/react-payments/blob/step2/src/assets/image/failure.png?raw=true"}),e.jsx(n.Footer,{buttonPosition:"column-reverse"})]}),type:"dialog",onClose:()=>console.log("마루")}},v={args:{open:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루"),customCloseIcon:"이미지"}),e.jsx(n.Footer,{buttonPosition:"column-reverse"})]}),type:"dialog",onClose:()=>console.log("마루")}},j={args:{open:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n.Header,{title:"마루",onClose:()=>console.log("마루")}),e.jsx(n.Content,{children:e.jsx("div",{children:"안녕 마루와 쿠키의 나이스 모달"})}),e.jsx(n.Footer,{buttonPosition:"column-reverse"})]}),type:"dialog",onClose:()=>console.log("마루")}};var P,T,L;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <Modal.Header title="마루" onClose={() => console.log('마루')} />,
    type: 'dialog',
    onClose: () => console.log('마루')
  }
}`,...(L=(T=i.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var N,O,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <Modal.Header title="마루" onClose={() => console.log('마루')} />,
    type: 'drawer',
    onClose: () => console.log('마루')
  }
}`,...(q=(O=p.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var I,$,D;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <Modal.Header title="마루" onClose={() => console.log('마루')} />,
    type: 'drawer-top',
    onClose: () => console.log('마루')
  }
}`,...(D=($=m.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var k,V,U;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <Modal.Header title="마루" onClose={() => console.log('마루')} />,
    type: 'drawer-right',
    onClose: () => console.log('마루')
  }
}`,...(U=(V=g.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var A,W,z;_.parameters={..._.parameters,docs:{...(A=_.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <Modal.Header title="마루" onClose={() => console.log('마루')} />,
    type: 'drawer-left',
    onClose: () => console.log('마루')
  }
}`,...(z=(W=_.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var K,Y,J;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    open: false,
    children: <Modal.Header title="마루" onClose={() => console.log('마루')} />,
    type: 'dialog',
    onClose: () => console.log('마루')
  }
}`,...(J=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Z,G,Q;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} />
        <Modal.Footer closeButton={{
        hide: true
      }} />
      </>,
    type: 'dialog',
    onClose: () => console.log('마루')
  }
}`,...(Q=(G=B.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,ee,oe;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} />
        <Modal.Footer buttonPosition="row" />
      </>,
    type: 'dialog',
    onClose: () => console.log('마루')
  }
}`,...(oe=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,ne,te;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} />
        <Modal.Footer buttonPosition="row-reverse" />
      </>,
    type: 'dialog',
    onClose: () => console.log('마루')
  }
}`,...(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,le,ae;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} />
        <Modal.Footer buttonPosition="column" />
      </>,
    type: 'dialog',
    onClose: () => console.log('마루')
  }
}`,...(ae=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ce,de,ue;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} />
        <Modal.Footer buttonPosition="column-reverse" />
      </>,
    type: 'dialog',
    onClose: () => console.log('마루')
  }
}`,...(ue=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ie,pe,me;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} hideCloseIcon />
        <Modal.Footer buttonPosition="column-reverse" />
      </>,
    type: 'dialog',
    onClose: () => console.log('마루')
  }
}`,...(me=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,_e,Ce;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} customCloseIcon={'https://github.com/jinhokim98/react-payments/blob/step2/src/assets/image/failure.png?raw=true'} />
        <Modal.Footer buttonPosition="column-reverse" />
      </>,
    type: 'dialog',
    onClose: () => console.log('마루')
  }
}`,...(Ce=(_e=x.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var Be,he,fe;v.parameters={...v.parameters,docs:{...(Be=v.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} customCloseIcon={'이미지'} />
        <Modal.Footer buttonPosition="column-reverse" />
      </>,
    type: 'dialog',
    onClose: () => console.log('마루')
  }
}`,...(fe=(he=v.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var we,Ee,ye;j.parameters={...j.parameters,docs:{...(we=j.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <>
        <Modal.Header title="마루" onClose={() => console.log('마루')} />
        <Modal.Content>
          <div>안녕 마루와 쿠키의 나이스 모달</div>
        </Modal.Content>
        <Modal.Footer buttonPosition="column-reverse" />
      </>,
    type: 'dialog',
    onClose: () => console.log('마루')
  }
}`,...(ye=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:ye.source}}};const co=["모달이_열림_Dialog","모달이_열림_Drawer","모달이_열림_DrawerTop","모달이_열림_DrawerRight","모달이_열림_DrawerLeft","모달이_닫힘","모달_버튼_1개","모달_버튼_2개_ROW","모달_버튼_2개_ROW_REVERSE","모달_버튼_2개_COLUMN","모달_버튼_2개_COLUMN_REVERSE","모달_닫기_아이콘_숨김","모달_닫기_아이콘_커스텀","모달_닫기_아이콘_커스텀_오류","모달_컨텐츠"];export{co as __namedExportsOrder,ao as default,y as 모달_닫기_아이콘_숨김,x as 모달_닫기_아이콘_커스텀,v as 모달_닫기_아이콘_커스텀_오류,B as 모달_버튼_1개,w as 모달_버튼_2개_COLUMN,E as 모달_버튼_2개_COLUMN_REVERSE,h as 모달_버튼_2개_ROW,f as 모달_버튼_2개_ROW_REVERSE,j as 모달_컨텐츠,C as 모달이_닫힘,i as 모달이_열림_Dialog,p as 모달이_열림_Drawer,_ as 모달이_열림_DrawerLeft,g as 모달이_열림_DrawerRight,m as 모달이_열림_DrawerTop};
