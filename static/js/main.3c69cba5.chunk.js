(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={list:"PhoneItem_list__1iik-",item:"PhoneItem_item__3L4Zd",btn:"PhoneItem_btn__17R8Q"}},12:function(e,t,n){e.exports={block:"PhoneList_block__x7O0m",title:"PhoneList_title__30d5T",list:"PhoneList_list__ZfIcf"}},13:function(e,t,n){e.exports={conteiner:"Filter_conteiner__3vEYG",title:"Filter_title__3yLyJ",input:"Filter_input__33bIl"}},25:function(e,t,n){},26:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(9),r=n.n(i),o=(n(25),n(26),n(16)),s=n(6),l=n.n(s),u=n(37),b=n(3),m=n(20),d=n(8),j=n(2),p=Object(d.b)({name:"contacts",initialState:{items:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]},reducers:{addContact:function(e,t){return{items:[].concat(Object(m.a)(e.items),[t.payload])}},removeContact:function(e,t){return{items:e.items.filter((function(e){return e.id!==t.payload}))}}}}),h=Object(d.b)({name:"filtration",initialState:{search:""},reducers:{filterContacts:function(e,t){return{search:t.payload}}}}),O=p.actions,f=O.addContact,_=O.removeContact,x=h.actions.filterContacts,v=Object(j.b)({contacts:p.reducer,filtration:h.reducer}),N=function(e){return e.phoneBook.contacts.items},C=function(e){return e.phoneBook.filtration.search},g=n(4),y=n.n(g),k=n(1);function S(e){var t=e.phone,n=e.title,c=Object(b.b)(),i=Object(b.c)(N),r=Object(a.useState)(""),s=Object(o.a)(r,2),l=s[0],m=s[1],d=Object(a.useState)(""),j=Object(o.a)(d,2),p=j[0],h=j[1],O=function(e){return i.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))};return Object(k.jsxs)("form",{className:y.a.form,onSubmit:function(e){e.preventDefault(),function(e){O(e.name)?alert("".concat(e.name," is alredy in contacts")):c(f(e))}({id:Object(u.a)(),name:l,number:p}),m(""),h("")},children:[Object(k.jsxs)("label",{className:y.a.label,children:[Object(k.jsx)("p",{className:y.a.description,children:n}),Object(k.jsx)("input",{className:y.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:l,onChange:function(e){m(e.target.value)}})]}),Object(k.jsxs)("label",{className:y.a.label,children:[Object(k.jsx)("p",{className:y.a.description,children:t}),Object(k.jsx)("input",{className:y.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:p,onChange:function(e){h(e.target.value)}})]}),Object(k.jsx)("button",{className:y.a.button,type:"submit",children:"add contact"})]})}S.propType={title:l.a.string,phone:l.a.string};var F=S,A=n(11),w=n.n(A);var L=function(e){var t=e.id,n=e.name,a=e.number,c=Object(b.b)();return Object(k.jsxs)("li",{className:w.a.item,children:[Object(k.jsx)("p",{children:n}),": ",Object(k.jsx)("p",{className:w.a.text,children:a}),Object(k.jsx)("button",{className:w.a.button,type:"button",onClick:function(){return c(_(t))},children:"Delete"})]})},I=n(12),P=n.n(I),z=function(e){var t=e.title,n=Object(b.c)(N),a=Object(b.c)(C);return Object(k.jsxs)("section",{className:P.a.block,children:[Object(k.jsx)("h2",{className:P.a.title,children:t}),Object(k.jsx)("ul",{className:P.a.list,children:n.filter((function(e){return e.name.toLowerCase().includes(a)})).map((function(e){var t=e.id,n=e.name,a=e.number;return Object(k.jsx)(L,{id:t,name:n,number:a},t)}))})]})},B=n(13),E=n.n(B);function Z(){var e=Object(b.b)(),t=Object(b.c)(C);return Object(k.jsxs)("div",{className:E.a.conteiner,children:[Object(k.jsx)("h3",{className:E.a.title,children:"Find contacts by name"}),Object(k.jsx)("input",{className:E.a.input,type:"text",name:"filter",value:t,onChange:function(t){e(x(t.target.value))}})]})}Z.propType={value:l.a.string};var J=Z;var T=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("h1",{className:"title",children:"Phonebook"}),Object(k.jsx)(F,{title:"Name",phone:"Number"}),Object(k.jsx)(J,{}),Object(k.jsx)(z,{title:"Contacts"})]})},Y=n(5),q=n(18),D={key:"contacts",storage:n.n(q).a},G=Object(d.a)({reducer:{phoneBook:Object(Y.g)(D,v)},middleware:function(e){return e({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}})}}),M=Object(Y.h)(G),Q=n(19);r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(b.a,{store:G,children:Object(k.jsx)(Q.a,{loading:null,persistor:M,children:Object(k.jsx)(T,{})})})}),document.getElementById("root"))},4:function(e,t,n){e.exports={form:"FormSubmit_form__UAFu_",label:"FormSubmit_label__3eEdz",description:"FormSubmit_description__2I2dc",input:"FormSubmit_input__2QGEB",button:"FormSubmit_button__3YEYo"}}},[[35,1,2]]]);
//# sourceMappingURL=main.3c69cba5.chunk.js.map