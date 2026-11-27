import{g as t,j as n,ar as o,as as c}from"./index-CcoKAgNf.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],d=t("pen-line",l);function p(){return i=>{let e=0;const r=a=>{var s;a.type==="heading"&&(a.data||(a.data={}),a.data.hProperties={...a.data.hProperties,id:"heading-"+e++}),(s=a.children)==null||s.forEach(r)};r(i)}}function m({content:i}){return n.jsx("div",{className:"b-markdown",children:n.jsx(o,{remarkPlugins:[c,p],components:{a:({href:e,children:r})=>n.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",onClick:a=>a.stopPropagation(),children:r}),img:({src:e,alt:r})=>n.jsx("img",{src:e,alt:r||"",loading:"lazy"})},children:typeof i=="string"?i:""})})}export{d as P,m as S};
