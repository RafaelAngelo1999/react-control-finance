(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),l=n.n(c),s=(n(14),n(5)),i=n(2),r=n(7),o=(n(15),n(0)),u=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),u=r[0],j=r[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),x=b[0],O=b[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+u,date:new Date(x)};n.date.setHours(n.date.getHours()+3),e.onSaveExpenseData(n),l(""),j(""),O("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){l(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){j(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},j=(n(17),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],l=n[1];return Object(o.jsxs)("div",{className:"new-expense",children:[!c&&Object(o.jsx)("button",{onClick:function(){l(!0)},children:"Add New Expense"}),c&&Object(o.jsx)(u,{onSaveExpenseData:function(t){console.log(t.date.toString());var n=Object(r.a)(Object(r.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),l(!1)},onCancel:function(){l(!1)}})]})}),d=(n(18),function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})}),b=(n(19),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=(n(20),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__month",children:t}),Object(o.jsx)("div",{className:"expense-date__year",children:a}),Object(o.jsx)("div",{className:"expense-date__day",children:n})]})}),O=(n(21),function(e){return console.log(e),Object(o.jsx)("li",{children:Object(o.jsxs)(d,{className:"expense-item",children:[Object(o.jsx)(x,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})}),v=(n(22),function(e){return 0===e.items.length?Object(o.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(o.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(o.jsx)(O,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),h=(n(23),n(9)),m=(n(24),n(25),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),p=function(e){console.log(e.dataPoints);var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(m,{value:e.value,maxValue:n,label:e.label},e.label)}))})},f=(n(26),function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(h.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(o.jsx)(p,{dataPoints:n})}),g=function(e){var t=Object(a.useState)("2020"),n=Object(i.a)(t,2),c=n[0],l=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(o.jsx)("div",{children:Object(o.jsxs)(d,{className:"expenses",children:[Object(o.jsx)(b,{selected:c,onChangeFilter:function(e){l(e)}}),Object(o.jsx)(f,{expenses:s}),Object(o.jsx)(v,{items:s})]})})},_=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],N=function(){var e=Object(a.useState)(_),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{onAddExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(o.jsx)(g,{items:n})]})};l.a.render(Object(o.jsx)(N,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.184171d0.chunk.js.map