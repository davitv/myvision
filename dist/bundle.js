!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=fabric},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);function i(e){e.forEachObject(e=>{e.selectable=!0}),e.defaultCursor="default",e.hoverCursor="move"}function a(e,t){const n=document.getElementById("labelNamePopUp");n.style.display="block";const o=document.getElementById("canvas-wrapper").getBoundingClientRect(),r=o.top,i=o.left;n.style.top=`${t+r}px`,n.style.left=`${e+i}px`}function s(){document.getElementById("labelNamePopUp").style.display="none"}const l={};function c(e,t,n){const o=n.getPointer(t.e);return{radius:3,fill:"#ffffff",stroke:"#333333",strokeWidth:.5,left:o.x,top:o.y,selectable:!0,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",shapeName:"tempCircle",circleId:e,objectCaching:!1}}l.newPolygon={stroke:"rgba(255,0,0)",strokeWidth:1.75,fill:"rgba(237, 237, 237, 0.01)",perPixelTargetFind:!0,hasBorders:!1,hasControls:!1,shapeName:"polygon",selectable:!1},l.newTempPolygon={stroke:"#333333",strokeWidth:.8,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1},l.newFinalPolygon={perPixelTargetFind:!0,hasBorders:!1,hasControls:!1,shapeName:"polygonGrp",selectable:!0,subTargetCheck:!0},l.newLine={strokeWidth:1.1,fill:"#999999",stroke:"#999999",class:"line",originX:"center",originY:"center",selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1},l.firstCircle={fill:"red",shapeName:"firstCircle"},l.newCircle=c;const u={inProgress:!1};let d=null,g=[],f=null;function h(e,t,n){d=e,g=n,f=t,u.inProgress=!0}function m(){f.remove(d),u.inProgress=!1}function p(){const e=document.getElementById("label-title").value;s();const t=new r.a.Text(e,function(e){return{fontSize:10,fill:"yellow",left:e.left,top:e.top,width:e.width,height:e.height}}(d));if("polygon"===d.shapeName){g.forEach(e=>{e.visible=!1,e.stroke=null,e.fill="blue",e.shapeName="point"});const e=new r.a.Group([d,t,...g],l.newFinalPolygon);f.add(e)}else if("bndBoxTemp"===d.shapeName){const e=new r.a.Group([d,t],function(e){return{left:e.left,top:e.top,width:e.width,height:e.height,stroke:"rgba(255,0,0)",strokeWidth:2,fill:"rgba(255,0,0,0.1)",shapeName:"bndBox"}}(d));f.add(e)}m()}function b(e){e.discardActiveObject(),e.renderAll(),e.forEachObject(e=>{e.selectable=!1}),e.defaultCursor="crosshair",e.hoverCursor="crosshair"}let w=null,y=!1,v=!1;const x={};function C(e){(w=e).backgroundImage&&(y=!0,b(w),w.discardActiveObject()),e.on("mouse:down",()=>{!function(){if(y){v=!0;const e=w.getPointer(w.e);x.origX=e.x,x.origY=e.y,x.rect=new r.a.Rect(function(e,t){return{left:e.origX,top:e.origY,width:t.x-e.origX,height:t.y-e.origY,stroke:"rgba(255,0,0)",strokeWidth:2,fill:"rgba(255,0,0,0)",shapeName:"bndBoxTemp"}}(x,e)),w.add(x.rect)}}()}),e.on("mouse:move",e=>{!function(e){if(!v)return;const t=w.getPointer(e.e);x.origX>t.x&&x.rect.set({left:Math.abs(t.x)}),x.origY>t.y&&x.rect.set({top:Math.abs(t.y)}),x.rect.set({width:Math.abs(x.origX-t.x)}),x.rect.set({height:Math.abs(x.origY-t.y)}),w.renderAll()}(e)}),e.on("mouse:up",e=>{!function(e){if(v){y=!1,v=!1,x.rect.setCoords(),x.rect.selectable=!1,i(w);const t=w.getPointer(e.e);h(x.rect,w),a(t.x,t.y)}}(e)})}let P,j,_,k,N,A,B,E,O=null,L=[],W=[],I=!0,T=null,M=!1,U=0;function X(){W.forEach(e=>{O.remove(e)}),O.remove(M).remove(T)}function $(){L[0]&&(L.forEach(e=>{O.remove(e)}),X(),L=[],W=[],M=null,T=null,U=0)}function H(e){e.target&&e.target.shapeName&&"firstCircle"===e.target.shapeName&&function(e){const t=[];L.forEach(e=>{t.push({x:e.left,y:e.top}),O.remove(e)}),X();const n=new r.a.Polygon(t,l.newPolygon);O.add(n),T=null,M=null,I=!1;const o=O.getPointer(e.e);h(n,O,L),a(o.x,o.y),i(O)}(e),I&&function(e){const t=O.getPointer(e.e),n=new r.a.Circle(l.newCircle(U,e,O));U+=1,0===L.length&&n.set(l.firstCircle);let o=[t.x,t.y,t.x,t.y];const i=new r.a.Line(o,l.newLine);if(M){(o=M.get("points")).push({x:t.x,y:t.y});const e=new r.a.Polygon(o,l.newTempPolygon);O.remove(M),O.add(e),M=e,O.renderAll()}else{const e=[{x:t.x,y:t.y}],n=new r.a.Polygon(e,l.newTempPolygon);M=n,O.add(n)}T=i,L.push(n),W.push(i),O.add(n),O.selection=!1}(e)}function R(e){O=e,I=!0,$(),O.discardActiveObject(),b(O),e.on("mouse:down",e=>{(!e.target||e.target&&"tempCircle"!==e.target.shapeName)&&H(e)}),e.on("object:moving",e=>{!function(e){M.points[e.target.circleId]={x:e.target.getCenterPoint().x,y:e.target.getCenterPoint().y}}(e)}),e.on("mouse:move",e=>{!function(e){if(T&&"line"===T.class){const t=O.getPointer(e.e);T.set({x2:t.x,y2:t.y});const n=M.get("points");n[L.length]={x:t.x,y:t.y},M.set({points:n}),O.renderAll()}O.renderAll()}(e)}),e.on("mouse:over",t=>{t.target&&t.target.selectable?e.hoverCursor="move":e.hoverCursor="crosshair"})}function S(){_&&(_.forEach(e=>{e.set("visible",!1)}),k.renderAll())}let Y=!1,G=null;function F(e){e.on("mouse:down",t=>{if(t.target&&t.target.aCoords&&console.log(t.target.aCoords),window.result2=t.target,t.target||function(){const e=new r.a.Group([P,j,..._]);P.calcTransformMatrix()[4],e.set("top",N),e.set("left",A),k.add(e),k.remove(P),k.remove(j),_.forEach(e=>{k.remove(e)}),console.log(e)}(),!Y&&t.target&&"polygonGrp"===t.target.shapeName){const n=t.target.getObjects();n.forEach(t=>{"polygon"===t.shapeName&&(window.result=t),e.add(t)}),e.renderAll(),e.remove(t.target),G=n[0],function(e,t,n,o){N=n,A=o,k=e,P=t[0],j=t[1],(_=t.slice(2,t.length)).forEach(e=>{e.set("visible",!0)}),e.renderAll()}(e,n,t.target.top,t.target.left),Y=!0}}),e.on("object:moving",e=>{e.target&&"polygon"===e.target.shapeName&&S(e.target.top),e.target&&"point"===e.target.shapeName&&function(e,t){const n=k.getPointer(e.e),o=e.target;t.points[o.circleId]={x:n.x,y:n.y},B=t.points,E=n.x,E=n.x}(e,G)}),e.on("mouse:over",t=>{t.target&&t.target._objects&&(t.target._objects[0].set("fill","rgba(255,0,0,0.2)"),e.renderAll())}),e.on("mouse:out",t=>{t.target&&t.target._objects&&("bndBox"===t.target.shapeName?t.target._objects[0].set("fill","rgba(255,0,0,0"):"polygonGrp"===t.target.shapeName&&t.target._objects[0].set("fill","rgba(255,0,0,0.01)"),e.renderAll())})}function z(e){e.__eventListeners&&(e.__eventListeners["mouse:down"]=[],e.__eventListeners["mouse:over"]=[],e.__eventListeners["mouse:out"]=[],e.__eventListeners["mouse:move"]=[],e.__eventListeners["mouse:up"]=[],e.__eventListeners["object:moving"]=[])}let D=null,q=!1;function J(){z(D),C(D),q=!1}function K(){z(D),R(D),q=!1}function Q(){D.remove(D.getActiveObject())}function V(){q||(z(D),i(D),F(D),q=!0)}const Z={uploaded:!1,name:null},ee={};let te=null;function ne(e,t){t?function(e,t){te.setWidth(t.width),te.setHeight(t.height),r.a.Image.fromURL(e.src,e=>{te.setBackgroundImage(e,te.renderAll.bind(te),{scaleX:te.width/e.width,scaleY:te.height/e.height})})}(e,t):function(e){te.setWidth(e.width),te.setHeight(e.height),te.setBackgroundColor({source:e.src},()=>{te.renderAll()})}(e)}function oe(e){const t={},n=ee.maximumCanvasWidth/e.width;return t.width=ee.maximumCanvasWidth,t.height=e.height*n,t}function re(){Z.uploaded=!0;const e=this;if(ee.maximumCanvasHeight<e.height){let t=function(e){const t={},n=ee.maximumCanvasHeight/e.height;return t.height=ee.maximumCanvasHeight,t.width=e.width*n,t}(e);ee.maximumCanvasWidth<t.width&&(t=oe(t)),ne(e,t)}else if(ee.maximumCanvasWidth<e.width){ne(e,oe(e))}else ne(e)}function ie(e){const t=new Image;t.src=e.target.result,t.onload=re}function ae(e){te=e,ee.maximumCanvasHeight=window.innerHeight-54,ee.maximumCanvasWidth=window.innerWidth-110}function se(e){return function e(t){let n="";return Object.keys(t).forEach(o=>{"object"==typeof t[o]?n+=`<${o}>${e(t[o])}</${o}>`:n+=`<${o}>${t[o]}</${o}>`}),n}(e)}let le=null;function ce(e){const t=document.createElement("a"),n=new Blob([e],{type:"text/plain"});return t.setAttribute("href",window.URL.createObjectURL(n)),t.setAttribute("download",`${new RegExp("^([^.]+)").exec(Z.name)[0]}.xml`),t.dataset.downloadurl=["text/plain",t.download,t.href].join(":"),t.draggable=!0,t.classList.add("dragout"),t}function ue(){if(le.backgroundImage){!function(e){ce(e).click()}(se(function(e,t){const n={};return n.annotations=function(e,t){return{folder:"Unknown",filename:t.name,path:"Unknown",source:{database:"Unknown"},size:{width:e.getWidth(),height:e.getHeight(),depth:1},segmented:0}}(e,t),n.annotations.object=function(e){let t={};return e.forEachObject(e=>{const n=e._objects[0],o=e._objects[1].text;t={name:o,pose:"Unspecified",truncated:1,difficult:0,bndbox:{xmin:n.left,ymin:n.top,xmax:n.left+n.width,ymax:n.top+n.height}}}),t}(e),n}(le,Z)))}}function de(){p(),V()}function ge(){$(),u.inProgress&&(s(),m(),u.inProgress=!1),S()}function fe(e){ge(),e&&e()}function he(e){ge(),function(e){if(e.files&&e.files[0]){const t=new FileReader;Z.name=e.files[0].name,t.onload=ie,t.readAsDataURL(e.files[0])}}(e)}!function(){const e=new r.a.Canvas("c",{selection:!1});r.a.Object.prototype.transparentCorners=!1,D=e,ae(e),function(e){le=e}(e)}(),function(){window.createNewBndBox=fe.bind(this,J),window.createNewPolygon=fe.bind(this,K),window.removeShape=fe.bind(this,Q),window.downloadXML=fe.bind(this,ue),window.cancel=fe.bind(this,V),window.uploadImage=he,window.labelShape=de}()}]);