(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(3)),o=c.n(i),d=c(0),r=function(e){var t=e.todos,c=e.setTodo,s=e.selectedTodo;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(d.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":s===e}),children:[Object(d.jsx)("td",{className:"is-vcentered",children:t}),Object(d.jsx)("td",{className:"is-vcentered",children:n&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:o()({"has-text-danger":!n,"has-text-success":n}),children:a})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:o()("far",{"fa-eye":s!==e},{"fa-eye-slash":s===e})})})})})]},t)}))})]})},j=function(e){var t=e.filterTodos,c=Object(l.useState)(""),s=Object(n.a)(c,2),a=s[0],i=s[1],o=Object(l.useState)("all"),r=Object(n.a)(o,2),j=r[0],b=r[1];Object(l.useEffect)((function(){t(j,a)}),[a,j]);var h=function(e){var t=e.target,c=t.value,s=t.localName;"input"===s&&i(c),"select"===s&&b(c)};return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",onChange:h,value:j,children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:h}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),a.trim().length>0?Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){i("")}})}):""]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var h,u=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.todo,c=e.setTodo,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],o=a[1];return Object(l.useEffect)((function(){var e;t&&(e=t.userId,b("/users/".concat(e))).then((function(e){o(e)}))}),[t]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),i?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===t||void 0===t?void 0:t.id]}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(null)}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(null===i||void 0===i?void 0:i.email),children:null===i||void 0===i?void 0:i.name})]})]})]}):Object(d.jsx)(u,{})]})})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(h||(h={}));var O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),i=Object(n.a)(a,2),o=i[0],O=i[1],x=Object(l.useState)(c),f=Object(n.a)(x,2),v=f[0],p=f[1],N=Object(l.useState)(c[0]),y=Object(n.a)(N,2),g=y[0],k=y[1];Object(l.useEffect)((function(){b("/todos").then((function(e){s(e),p(e),O(!0)}))}),[]);var T=function(e){k(e)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(j,{filterTodos:function(e,t){p(c.filter((function(t){switch(e){case h.All:return!0;case h.Active:return!1===t.completed;case h.Completed:return!0===t.completed;default:return!0}})).filter((function(e){return e.title.toLowerCase().includes(t.toLocaleLowerCase())})))}})}),Object(d.jsx)("div",{className:"block",children:o?Object(d.jsx)(r,{todos:v,setTodo:T,selectedTodo:g}):Object(d.jsx)(u,{})})]})})}),g&&Object(d.jsx)(m,{todo:g,setTodo:T})]})};a.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7630dea0.chunk.js.map