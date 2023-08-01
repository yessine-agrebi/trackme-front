import{r as o,u as v,j as e}from"./index.5d213138.js";import{B as n}from"./Button.ae2eea75.js";import{C as d}from"./Card.d2984708.js";import{I as b}from"./Icon.964e41b2.js";import{g as h,d as p}from"./UserService.a365a797.js";import"./index.b0acfd76.js";import"./Api.c0f7dd46.js";var i="C:\\Users\\asus\\Desktop\\TrackMe\\trackme-front-v0\\src\\pages\\users\\ListOfUser.jsx";const D=()=>{const[m,a]=o.exports.useState([]),[s,t]=o.exports.useState(!1),u=v();o.exports.useEffect(()=>{h().then(l=>{a(l)}).catch(l=>{console.log(l)})},[s]);const c=()=>{t(!s)},N=async l=>{if(window.confirm("Are you sure you want to delete this user?"))try{await p(l),a(r=>r.filter(f=>f._id!==l)),c(),alert("User deleted successfully!")}catch(r){console.log(r),alert("An error occurred while deleting the user.")}};return e("div",{className:"container",children:[e(d,{children:e(n,{text:"success",className:"btn-outline-success m-1",onClick:()=>u("/addusers"),children:"Ajouter un client"},void 0,!1,{fileName:i,lineNumber:43,columnNumber:7},void 0)},void 0,!1,{fileName:i,lineNumber:42,columnNumber:7},void 0),e(d,{title:"Table Head",children:e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:e("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:e("tr",{children:[e("th",{children:"Nom"},void 0,!1,{fileName:i,lineNumber:52,columnNumber:15},void 0),e("th",{children:"Email"},void 0,!1,{fileName:i,lineNumber:53,columnNumber:15},void 0),e("th",{children:"Phone"},void 0,!1,{fileName:i,lineNumber:54,columnNumber:15},void 0),e("th",{children:"Action"},void 0,!1,{fileName:i,lineNumber:55,columnNumber:15},void 0)]},void 0,!0,{fileName:i,lineNumber:51,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:50,columnNumber:17},void 0),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700 text-center",children:m&&m.map(l=>e("tr",{children:[e("td",{children:l.name},void 0,!1,{fileName:i,lineNumber:61,columnNumber:17},void 0),e("td",{children:l.email},void 0,!1,{fileName:i,lineNumber:62,columnNumber:17},void 0),e("td",{children:l.phone},void 0,!1,{fileName:i,lineNumber:63,columnNumber:17},void 0),e("td",{children:e(n,{className:"text-nowrap px-1",onClick:()=>N(l._id),outline:!0,children:e(b,{icon:"heroicons:archive-box-x-mark"},void 0,!1,{fileName:i,lineNumber:67,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:65,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:64,columnNumber:17},void 0)]},l._id,!0,{fileName:i,lineNumber:60,columnNumber:15},void 0))},void 0,!1,{fileName:i,lineNumber:58,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:49,columnNumber:15},void 0)},void 0,!1,{fileName:i,lineNumber:48,columnNumber:13},void 0)},void 0,!1,{fileName:i,lineNumber:47,columnNumber:11},void 0)},void 0,!1,{fileName:i,lineNumber:46,columnNumber:9},void 0)},void 0,!1,{fileName:i,lineNumber:45,columnNumber:7},void 0)]},void 0,!0,{fileName:i,lineNumber:41,columnNumber:5},void 0)};export{D as default};
