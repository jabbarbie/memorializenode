import{j as e,Y as a}from"./app-CNUJcDPA.js";import{A as t}from"./AuthenticatedLayout-CgQUVBB-.js";/* empty css             */function n(l){return/^(https?:\/\/[^\s]+)/.test(l)?`<a href="${l}" target="_blank">${l}</a>`:l||""}function _({auth:l,project:i}){const s=i.data;return e.jsxs(t,{user:l.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:["Project ",s.name]}),otherMenu:e.jsx("li",{children:e.jsx("a",{href:`/projects/${s.id}/edit`,children:"Edit"})}),children:[e.jsx(a,{title:s.name}),e.jsxs("div",{id:"home__wrapper",children:[e.jsx("div",{className:"home__header",children:e.jsx("h3",{children:e.jsxs("a",{href:"/projects",children:["	< ",s.name]})})}),e.jsxs("div",{className:"home__main_with_aside",children:[e.jsxs("aside",{children:[e.jsxs("div",{className:"box__form_inline",children:[e.jsx("label",{children:"Short Name"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n(s.short_name)}})]}),e.jsxs("div",{className:"box__form_inline",children:[e.jsx("label",{children:"Long Name"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n(s.long_name)}})]}),e.jsxs("div",{className:"box__form_inline",children:[e.jsx("label",{children:"Database"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n(s.link_database)}})]}),e.jsxs("div",{className:"box__form_inline",children:[e.jsx("label",{children:"Repository"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n(s.link_repository)}})]}),e.jsxs("div",{className:"box__form_inline",children:[e.jsx("label",{children:"Website Local Link"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n(s.website_local_link)}})]}),e.jsxs("div",{className:"box__form_inline",children:[e.jsx("label",{children:"Website Local Port"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n(s.website_local_port)}})]}),e.jsxs("div",{className:"box__form_inline",children:[e.jsx("label",{children:"Website Public Link"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n(s.website_public_link)}})]}),e.jsxs("div",{className:"box__form_inline",children:[e.jsx("label",{children:"Notes"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n(s.notes)}})]})]}),e.jsxs("main",{children:[e.jsxs("section",{children:[e.jsx("div",{className:"section__header",children:e.jsx("h3",{className:"text-scrum",children:"Scrum"})}),e.jsx("div",{className:"section__main"})]}),e.jsxs("section",{children:[e.jsx("div",{className:"section__header",children:e.jsx("h3",{className:"text-notulen",children:"Notulen"})}),e.jsx("div",{className:"section__main",children:s.notulens&&s.notulens.map(r=>e.jsxs("div",{children:[r.date_meeting,r.date_meeting]}))})]})]})]})]})]})}export{_ as default};
