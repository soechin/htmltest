import{r as W,a as p,o as z,b,c as I,d as n,w as C,v as L,F as U,e as N,u as S,t as T,f as K}from"./vendor.a08634e2.js";const G=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const _ of c.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&u(_)}).observe(document,{childList:!0,subtree:!0});function w(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(o){if(o.ep)return;o.ep=!0;const c=w(o);fetch(o.href,c)}};G();const J={class:"h-100 d-flex"},X=n("div",{class:"h-100 flex-shrink-0 left-div"},null,-1),Y={class:"h-100 flex-grow-1 right-div"},Z={class:"h-100 d-flex flex-column"},ee={class:"w-100 flex-grow-1 main-div"},te={class:"h-100 position-relative"},ie={class:"w-100 flex-shrink-0 bottom-div"},se={class:"d-flex align-items-center"},oe={class:"my-1 flex-grow-1"},ne=["value"],ae=["value"],ce=n("option",{value:"0"},"0\xB0",-1),le=n("option",{value:"1"},"90\xB0",-1),re=n("option",{value:"2"},"180\xB0",-1),de=n("option",{value:"3"},"270\xB0",-1),he=[ce,le,re,de],ue=n("div",{class:"my-1 flex-shrink-0"},[n("button",{class:"mx-1 px-5 btn btn-primary"},"\u62CD\u7167")],-1),ve={setup($){const d=W([]),w=p(-1),u=W([]),o=p(-1),c=W({}),_=p(1),E=p(0),V=p(null),j=p(null),M=p(0);async function q(){await F(),d.find(a=>!!a.name)||((await navigator.mediaDevices.getUserMedia({video:!0})).getTracks().forEach(e=>{e.stop()}),await F()),d.length>0&&(w.value=0,O())}async function F(){d.length=0;const a=await navigator.mediaDevices.enumerateDevices();for(let t=0;t<a.length;t++){const e=a[t];e.kind=="videoinput"&&d.push({name:e.label,path:e.deviceId})}}async function O(){const a=d[w.value],t=u[o.value];A();const e=V.value,s=await navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:a.path},width:t?{exact:t.width}:void 0,height:t?{exact:t.height}:void 0}});e.srcObject=s,await e.play();const D=s.getVideoTracks();let f=0,x=0,g=0;try{const i=D[0].getCapabilities();f=i.width.max,x=i.height.max}catch(i){console.error(i)}try{g=D[0].getSettings().frameRate}catch(i){console.error(i)}c.width=f,c.height=x,_.value=g>0?g:15,u.length=0,[{width:2592,height:1944},{width:2048,height:1536},{width:1600,height:1200},{width:1280,height:960},{width:1024,height:768},{width:640,height:480},{width:320,height:240},{width:1920,height:1080},{width:1280,height:720}].forEach(i=>{i.width<=f&&i.height<=x&&u.push({width:i.width,height:i.height})});const m=e.videoWidth,h=e.videoHeight;o.value=u.findIndex(i=>i.width==m&&i.height==h||i.width==h&&i.height==m);const v=++E.value;setTimeout(()=>B(v),1)}function A(){const a=V.value,t=a.srcObject;t&&t.getTracks().forEach(s=>{s.stop()}),a.srcObject=null}function B(a){const t=V.value,e=j.value,s=document.createElement("canvas"),D=1e3/_.value;let f=performance.now(),x=0;alert(`thread ${a} started`);function g(){if(a!=E.value||!t.srcObject){alert(`thread ${a} terminated`);return}if(t.getVideoPlaybackQuality){const r=t.getVideoPlaybackQuality().totalVideoFrames;if(r>0&&r<=x){setTimeout(g,1);return}x=r}const y=t.videoWidth,m=t.videoHeight;let h=y,v=m;{const l=M.value;(l==1||l==3)&&(h=m,v=y),(s.width!=h||s.height!=v)&&(s.width=h,s.height=v);const r=s.getContext("2d");r.save(),r.clearRect(0,0,h,v),r.rotate(l*Math.PI/2),l==1?r.translate(0,-m):l==2?r.translate(-y,-m):l==3&&r.translate(-y,0),r.drawImage(t,0,0),r.restore()}const i=e.clientWidth,k=e.clientHeight;(e.width!=i||e.height!=k)&&(e.width=i,e.height=k);const H=Math.min(i/h,k/v),R=h*H,Q=v*H;{const l=e.getContext("2d");l.save(),l.clearRect(0,0,i,k),l.translate((i-R)/2,(k-Q)/2),l.scale(H,H),l.drawImage(s,0,0),l.restore()}const P=performance.now();f=Math.max(f+D,P+1),setTimeout(g,f-P)}setTimeout(g,1)}return z(()=>{q()}),(a,t)=>(b(),I("div",J,[X,n("div",Y,[n("div",Z,[n("div",ee,[n("div",te,[n("video",{ref:(e,s)=>{s.domVideo=e,V.value=e},class:"d-none",playsinline:""},null,512),n("canvas",{ref:(e,s)=>{s.domCanvas=e,j.value=e},class:"h-100 w-100 position-absolute"},null,512)])]),n("div",ie,[n("div",se,[n("div",oe,[C(n("select",{class:"mx-1","onUpdate:modelValue":t[0]||(t[0]=e=>w.value=e),onChange:t[1]||(t[1]=e=>O())},[(b(!0),I(U,null,N(S(d),(e,s)=>(b(),I("option",{key:s,value:s},T(e.name),9,ne))),128))],544),[[L,w.value]]),C(n("select",{class:"mx-1","onUpdate:modelValue":t[2]||(t[2]=e=>o.value=e),onChange:t[3]||(t[3]=e=>O())},[(b(!0),I(U,null,N(S(u),(e,s)=>(b(),I("option",{key:s,value:s},T(e.width)+" x "+T(e.height),9,ae))),128))],544),[[L,o.value]]),C(n("select",{class:"mx-1","onUpdate:modelValue":t[4]||(t[4]=e=>M.value=e)},he,512),[[L,M.value]])]),ue])])])])]))}},fe=K(ve);fe.mount("#app");
