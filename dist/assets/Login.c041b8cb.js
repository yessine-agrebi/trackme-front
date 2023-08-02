import{j as e,u as g,r as h,L as n,F as x}from"./index.5d213138.js";import{L as p,u as k,k as w,M as N}from"./AuthServie.7b91b2e0.js";import{c as y,a as b,u as S,o as j,T as f}from"./object.3d02c563.js";import"./Api.c0f7dd46.js";import"./Icon.964e41b2.js";const F="/assets/page-bg.a1b58b64.png",C="/assets/ck-white.a80f7fec.svg";var m="C:\\Users\\asus\\Desktop\\TrackMe\\trackme-front-v0\\src\\components\\ui\\Checkbox.jsx";const L=({id:i,disabled:r,label:s,value:o,name:c,onChange:t,activeClass:u="ring-black-500  bg-slate-900 dark:bg-slate-700 dark:ring-slate-700 "})=>e("label",{className:`flex items-center ${r?" cursor-not-allowed opacity-50":"cursor-pointer"}`,id:i,children:[e("input",{type:"checkbox",className:"hidden",name:c,checked:o,onChange:t,htmlFor:i,disabled:r},void 0,!1,{fileName:m,lineNumber:19,columnNumber:7},void 0),e("span",{className:`h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded 
        inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150
        ${o?u+" ring-2 ring-offset-2 dark:ring-offset-slate-800 ":"bg-slate-100 dark:bg-slate-600 dark:border-slate-600"}
        `,children:o&&e("img",{src:C,alt:"",className:"h-[10px] w-[10px] block m-auto"},void 0,!1,{fileName:m,lineNumber:39,columnNumber:11},void 0)},void 0,!1,{fileName:m,lineNumber:28,columnNumber:7},void 0),e("span",{className:"text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize",children:s},void 0,!1,{fileName:m,lineNumber:46,columnNumber:7},void 0)]},void 0,!0,{fileName:m,lineNumber:13,columnNumber:5},void 0);var a="C:\\Users\\asus\\Desktop\\TrackMe\\trackme-front-v0\\src\\pages\\common\\login-form.jsx";const D=y({email:b().email("Invalid email").required("Email is Required"),password:b().required("Password is Required")}).required(),I=()=>{const i=g(),{register:r,formState:{errors:s},handleSubmit:o}=S({resolver:j(D),mode:"all"}),c=async v=>{await p(v).then(d=>{localStorage.setItem("userData",JSON.stringify(d.data)),i("/")}).catch(d=>console.log("error",d))},[t,u]=h.exports.useState(!1);return e("form",{onSubmit:o(c),className:"space-y-4 ",children:[e(f,{name:"email",label:"email",type:"email",register:r,error:s.email,className:"h-[48px]"},void 0,!1,{fileName:a,lineNumber:40,columnNumber:7},void 0),e(f,{name:"password",label:"passwrod",type:"password",register:r,error:s.password,className:"h-[48px]"},void 0,!1,{fileName:a,lineNumber:48,columnNumber:7},void 0),e("div",{className:"flex justify-between",children:[e(L,{value:t,onChange:()=>u(!t),label:"Keep me signed in"},void 0,!1,{fileName:a,lineNumber:57,columnNumber:9},void 0),e(n,{to:"/forgot-password",className:"text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium",children:["Forgot Password?"," "]},void 0,!0,{fileName:a,lineNumber:62,columnNumber:9},void 0)]},void 0,!0,{fileName:a,lineNumber:56,columnNumber:7},void 0),e("button",{className:"btn btn-dark block w-full text-center",children:"Sign in"},void 0,!1,{fileName:a,lineNumber:70,columnNumber:7},void 0)]},void 0,!0,{fileName:a,lineNumber:39,columnNumber:5},void 0)};var l="C:\\Users\\asus\\Desktop\\TrackMe\\trackme-front-v0\\src\\pages\\auth\\Login.jsx";const _=()=>{const[i]=k();return e(x,{children:[e(w,{},void 0,!1,{fileName:l,lineNumber:14,columnNumber:7},void 0),e("div",{className:"loginwrapper bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${F})`},children:e("div",{className:"lg-inner-column",children:[e("div",{className:"left-columns lg:w-1/2 lg:block hidden",children:e("div",{className:"logo-box-3",children:e(n,{to:"/",className:"",children:e("img",{src:N,alt:""},void 0,!1,{fileName:l,lineNumber:25,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:24,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:23,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:22,columnNumber:11},void 0),e("div",{className:"lg:w-1/2 w-full flex flex-col items-center justify-center",children:e("div",{className:"auth-box-3",children:[e("div",{className:"mobile-logo text-center mb-6 lg:hidden block",children:e(n,{to:"/",children:e("img",{src:i?N:N,alt:"",className:"mx-auto"},void 0,!1,{fileName:l,lineNumber:33,columnNumber:19},void 0)},void 0,!1,{fileName:l,lineNumber:32,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:31,columnNumber:15},void 0),e("div",{className:"text-center 2xl:mb-10 mb-5",children:[e("h4",{className:"font-medium",children:"Sign In"},void 0,!1,{fileName:l,lineNumber:41,columnNumber:17},void 0),e("div",{className:"text-slate-500 dark:text-slate-400 text-base",children:"Sign in to your account to start using Track Me"},void 0,!1,{fileName:l,lineNumber:42,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:40,columnNumber:15},void 0),e(I,{},void 0,!1,{fileName:l,lineNumber:46,columnNumber:15},void 0),e("div",{className:"mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm text-center",children:["Already registered?",e(n,{to:"/",className:"text-slate-900 dark:text-white font-medium hover:underline",children:"Sign In"},void 0,!1,{fileName:l,lineNumber:50,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:48,columnNumber:15},void 0)]},void 0,!0,{fileName:l,lineNumber:30,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:29,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:21,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:15,columnNumber:7},void 0)]},void 0,!0)};export{_ as default};