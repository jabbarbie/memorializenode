import{j as e,Y as s}from"./app-CNUJcDPA.js";import{A as r}from"./AuthenticatedLayout-CgQUVBB-.js";/* empty css             */var a;const i=((a=document==null?void 0:document.querySelector('meta[name="csrf-token"]'))==null?void 0:a.getAttribute("content"))??"";function c({auth:o,project:t}){const l=t.data;return console.log(t),e.jsxs(r,{user:o.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:[l.id?"Edit":"Create"," ",l.id," Project"]}),children:[e.jsx(s,{title:"Create Project"}),e.jsxs("div",{id:"home__wrapper",children:[e.jsx("div",{className:"home__header",children:e.jsxs("h3",{children:[e.jsx("a",{href:"/projects",children:"	< "}),l.id?"Edit":"Create"," Project "]})}),e.jsx("div",{className:"home__main_full",children:e.jsxs("div",{className:"home__grid",children:[e.jsxs("form",{className:"home__form",id:"form_create",method:"POST",action:"/projects",children:[e.jsx("input",{type:"hidden",name:"_token",value:i}),e.jsxs("div",{className:"home__form_group",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",name:"name",id:"name",defaultValue:l.name,placeholder:"Name",required:!0,autoFocus:!0})]}),e.jsxs("div",{className:"home__form_group",children:[e.jsx("label",{htmlFor:"short_name",children:"Short Name"}),e.jsx("input",{type:"text",name:"short_name",defaultValue:l.short_name,id:"short_name",placeholder:"Short Name"})]}),e.jsxs("div",{className:"home__form_group",children:[e.jsx("label",{htmlFor:"long_name",children:"Long Name"}),e.jsx("input",{type:"text",name:"long_name",defaultValue:l.long_name,id:"long_name",placeholder:"Short Name"})]}),e.jsxs("div",{className:"home__form_group",children:[e.jsx("label",{htmlFor:"link_database",children:"Database"}),e.jsx("input",{type:"text",name:"link_database",defaultValue:l.link_database,id:"link_database",placeholder:"http://localhost/phpmyadmin/xyz"})]}),e.jsxs("div",{className:"home__form_group",children:[e.jsx("label",{htmlFor:"link_repository",children:"Repo"}),e.jsx("input",{type:"text",name:"link_repository",defaultValue:l.link_repository,id:"link_repository",placeholder:"https://github.com/"})]}),e.jsxs("div",{className:"home__form_group",children:[e.jsx("label",{htmlFor:"website_local_link",children:"Website Local"}),e.jsx("input",{type:"text",name:"website_local_link",defaultValue:l.website_local_link,id:"website_local_link",placeholder:"https://plk.my.id"})]}),e.jsxs("div",{className:"home__form_group",children:[e.jsx("label",{htmlFor:"website_local_port",children:"Port"}),e.jsx("input",{type:"text",name:"website_local_port",defaultValue:l.website_local_port,id:"website_local_port",placeholder:"8000"})]}),e.jsxs("div",{className:"home__form_group",children:[e.jsx("label",{htmlFor:"website_public_link",children:"Website"}),e.jsx("input",{type:"text",name:"website_public_link",defaultValue:l.website_public_link,id:"website_public_link",placeholder:"https://plk.my.id"})]}),e.jsxs("div",{className:"home__form_group",children:[e.jsx("label",{htmlFor:"color",children:"Color"}),e.jsx("input",{type:"text",name:"color",defaultValue:l.color,id:"color",placeholder:"#efefef"})]}),e.jsxs("div",{className:"home__form_group full",children:[e.jsx("label",{htmlFor:"notes",children:"Note"}),e.jsx("textarea",{rows:5,name:"notes",defaultValue:l.notes})]})]}),e.jsx("div",{className:"home__form_footer",children:e.jsx("button",{type:"submit",className:"btn btn-primary",form:"form_create",children:"Save"})})]})})]})]})}export{c as default};
