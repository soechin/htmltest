import{r as O,a as m,o as $,b,c as I,d as s,w as W,v as C,F,e as P,u as U,t as L,f as z}from"./vendor.a08634e2.js";const K=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))v(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const w of c.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&v(w)}).observe(document,{childList:!0,subtree:!0});function p(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function v(o){if(o.ep)return;o.ep=!0;const c=p(o);fetch(o.href,c)}};K();const G={class:"h-100 d-flex"},J=s("div",{class:"h-100 flex-shrink-0 left-div"},null,-1),X={class:"h-100 flex-grow-1 right-div"},Y={class:"h-100 d-flex flex-column"},Z={class:"w-100 flex-grow-1 main-div"},ee={class:"h-100 position-relative"},te={class:"w-100 flex-shrink-0 bottom-div"},ie={class:"d-flex align-items-center"},oe={class:"my-1 flex-grow-1"},se=["value"],ne=["value"],ae=s("option",{value:"0"},"0\xB0",-1),ce=s("option",{value:"1"},"90\xB0",-1),le=s("option",{value:"2"},"180\xB0",-1),re=s("option",{value:"3"},"270\xB0",-1),de=[ae,ce,le,re],he=s("div",{class:"my-1 flex-shrink-0"},[s("button",{class:"mx-1 px-5 btn btn-primary"},"\u62CD\u7167")],-1),ue={setup(N){const d=O([]),p=m(-1),v=O([]),o=m(-1),c=O({}),w=m(1),V=m(null),E=m(null),R=m(document.createElement("canvas")),H=m(0);async function S(){await T(),d.find(n=>!!n.name)||((await navigator.mediaDevices.getUserMedia({video:!0})).getTracks().forEach(e=>{e.stop()}),await T()),d.length>0&&(p.value=0,M())}async function T(){d.length=0;const n=await navigator.mediaDevices.enumerateDevices();for(let t=0;t<n.length;t++){const e=n[t];e.kind=="videoinput"&&d.push({name:e.label,path:e.deviceId})}}async function M(){const n=d[p.value],t=v[o.value];q();const e=V.value,a=await navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:n.path},width:t?{exact:t.width}:void 0,height:t?{exact:t.height}:void 0}});e.srcObject=a,await e.play();const _=a.getVideoTracks();let x=0,g=0,f=0;try{const i=_[0].getCapabilities();x=i.width.max,g=i.height.max}catch(i){console.error(i)}try{f=_[0].getSettings().frameRate}catch(i){console.error(i)}c.width=x,c.height=g,w.value=f>0?f:15,v.length=0,[{width:2592,height:1944},{width:2048,height:1536},{width:1600,height:1200},{width:1280,height:960},{width:1024,height:768},{width:640,height:480},{width:320,height:240},{width:1920,height:1080},{width:1280,height:720}].forEach(i=>{i.width<=x&&i.height<=g&&v.push({width:i.width,height:i.height})});const h=e.videoWidth,u=e.videoHeight;o.value=v.findIndex(i=>i.width==h&&i.height==u||i.width==u&&i.height==h),setTimeout(()=>{A()},0)}function q(){const n=V.value,t=n.srcObject;t&&t.getTracks().forEach(a=>{a.stop()}),n.srcObject=null}function A(){const n=V.value,t=E.value,e=R.value,a=1e3/w.value;let _=performance.now(),x=0;function g(){if(!n.srcObject)return;if(n.getVideoPlaybackQuality){const r=n.getVideoPlaybackQuality().totalVideoFrames;if(r>0&&r<=x){setTimeout(g,1);return}x=r}const f=n.videoWidth,y=n.videoHeight;let h=f,u=y;{const l=H.value;(l==1||l==3)&&(h=y,u=f),(e.width!=h||e.height!=u)&&(e.width=h,e.height=u);const r=e.getContext("2d");r.save(),r.clearRect(0,0,h,u),r.rotate(l*Math.PI/2),l==1?r.translate(0,-y):l==2?r.translate(-f,-y):l==3&&r.translate(-f,0),r.drawImage(n,0,0),r.restore()}const i=t.clientWidth,k=t.clientHeight;(t.width!=i||t.height!=k)&&(t.width=i,t.height=k);const D=Math.min(i/h,k/u),B=h*D,Q=u*D;{const l=t.getContext("2d");l.save(),l.clearRect(0,0,i,k),l.translate((i-B)/2,(k-Q)/2),l.scale(D,D),l.drawImage(e,0,0),l.restore()}const j=performance.now();_=Math.max(_+a,j+1),setTimeout(g,_-j)}g()}return $(()=>{S()}),(n,t)=>(b(),I("div",G,[J,s("div",X,[s("div",Y,[s("div",Z,[s("div",ee,[s("video",{ref:(e,a)=>{a.domVideo=e,V.value=e},class:"d-none",playsinline:""},null,512),s("canvas",{ref:(e,a)=>{a.domCanvas=e,E.value=e},class:"h-100 w-100 position-absolute"},null,512)])]),s("div",te,[s("div",ie,[s("div",oe,[W(s("select",{class:"mx-1","onUpdate:modelValue":t[0]||(t[0]=e=>p.value=e),onChange:t[1]||(t[1]=e=>M())},[(b(!0),I(F,null,P(U(d),(e,a)=>(b(),I("option",{key:a,value:a},L(e.name),9,se))),128))],544),[[C,p.value]]),W(s("select",{class:"mx-1","onUpdate:modelValue":t[2]||(t[2]=e=>o.value=e),onChange:t[3]||(t[3]=e=>M())},[(b(!0),I(F,null,P(U(v),(e,a)=>(b(),I("option",{key:a,value:a},L(e.width)+" x "+L(e.height),9,ne))),128))],544),[[C,o.value]]),W(s("select",{class:"mx-1","onUpdate:modelValue":t[4]||(t[4]=e=>H.value=e)},de,512),[[C,H.value]])]),he])])])])]))}},ve=z(ue);ve.mount("#app");
