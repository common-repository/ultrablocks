(()=>{var e={373:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,l(r)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=a(t,r));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"UU":"ultrablocks/tab"}'),n=window.React,o=window.wp.blockEditor,l=window.ultrablocks,a=e=>(0,n.createElement)(o.InspectorControls,null,(0,n.createElement)("div",{className:"wp-block-ultrablocks-tab--controls"},(0,n.createElement)(l.ContainerContents,null,(0,n.createElement)("div",{className:"ultrablocks--tab-controls"},(0,n.createElement)(l.ControlHeader,{title:"Title"}),(0,n.createElement)("input",{type:"text",value:e.attributes.label,onChange:t=>{return r=t.target.value,void e.setAttributes({label:r});var r}}))))),s=window.wp.element;function c(e,t){const r=Object.keys(t);return!!(e&&r&&r.length>0)&&e===t[r[0]]}var i=r(373),u=r.n(i);const p=window.wp.components;(0,e.registerBlockType)(t.UU,{edit:function(e){const t=(0,l.useBlockPropsWithId)(e),r=(0,o.useInnerBlocksProps)(t);return(0,s.useEffect)((()=>{e.setAttributes({isDefault:c(e.attributes.blockId,e.context["ultrablocks/tabs"])})}),[e]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a,{...e}),(0,n.createElement)("div",{...r,role:"tabpanel",tabIndex:0}))},save:function(e){const t=u()({"ultrablocks--tab-panel--active":e.attributes.isDefault}),r=l.useBlockPropsWithId.save(e,{className:t}),a=o.useInnerBlocksProps.save(r);return(0,n.createElement)("div",{...a,role:"tabpanel"})},icon:{foreground:"#fff",src:()=>(0,n.createElement)(p.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(p.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M1.325 3.325H8.675V7.325H21.675V21.675H1.325V3.325ZM2.675 4.675V20.325H20.325V8.675H7.325V4.675H2.675Z",fill:"currentColor"}),(0,n.createElement)(p.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M18 13.675H5V12.325H18V13.675ZM16 17.175H5V15.825H16V17.175Z",fill:"currentColor"}))}})})()})();