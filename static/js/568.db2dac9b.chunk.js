"use strict";(self.webpackChunktest_assignment=self.webpackChunktest_assignment||[]).push([[568],{2989:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(3433),i=t(1087),a={link:"BackLink_link__GuFxz"},s=t(3329),c=function(e){var n=e.to,t=void 0===n?"/":n,c=e.classNames,o=void 0===c?[]:c,l=e.children,u=[a.link].concat((0,r.Z)(o));return(0,s.jsx)(i.rU,{className:u.join(" "),to:t,children:l})}},3500:function(e,n,t){t.r(n),t.d(n,{default:function(){return he}});var r=t(3433),i=t(9439),a=t(2791),s=t(2989),c=t(1413),o=t(794),l=t(5705),u=t(6727),d=t(9890),h=t(4925),x="Checkbox_label__lJv2R",p="Checkbox_checkbox__2f3Zy",_="Checkbox_icon__T2Q3v",m=t(3329),j=["children"],v=function(e){var n=e.children,t=(0,h.Z)(e,j);return(0,m.jsxs)("label",{className:x,onClick:function(e){return e.target.blur()},children:[(0,m.jsx)("input",(0,c.Z)({className:p,type:"checkbox"},t)),(0,m.jsx)("span",{className:_}),n]})},g=t(1018),f=(t(5262),{range:!0,min:0,max:3e4,defaultValue:[0,3e4],allowCross:!1,step:50,activeDotStyle:{backgroundColor:"yellow"},className:"Range_range__JBM9N",handleStyle:{boxShadow:"none",borderColor:"var(--color-accent)"}}),b=function(e){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(g.Z,(0,c.Z)((0,c.Z)({},f),e))})},N="FilterMenu_modal__IRYlE",k="FilterMenu_box__rRbF2",y="FilterMenu_borderless__5BODr",C="FilterMenu_list__jGGk0",w="FilterMenu_toggle__svloS",Z="FilterMenu_active__oYVDR",F="FilterMenu_radio__xdbft",S="FilterMenu_container__60RVt",M="FilterMenu_input__Q9kcI",B="FilterMenu_invalid__7HJ0I",H="FilterMenu_wrapper__s6voT",L="FilterMenu_submitBtn__LqxWD",I="FilterMenu_closeBtn__aVTst",P=t(7609),R=JSON.parse('[{"id":1,"name":"Anex"},{"id":2,"name":"Bair"},{"id":3,"name":"BabyOno"},{"id":4,"name":"Carrello"},{"id":5,"name":"OK Baby"},{"id":6,"name":"Babyroom"},{"id":7,"name":"ZD"},{"id":8,"name":"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430 \u0421\u043e\u043d\u044f"},{"id":9,"name":"Espiro"}]'),V=t(3760),O={category:"",available:!1,discount:!1,price:[0,3e4],producer:[]},D=function(e){var n=e.closeMenu,t=e.setFilters,r=e.resetCurrentPage,s=(0,a.useState)(!0),c=(0,i.Z)(s,2),o=c[0],h=c[1],x=(0,a.useState)(!0),p=(0,i.Z)(x,2),_=p[0],j=p[1],g=(0,a.useState)(!0),f=(0,i.Z)(g,2),D=f[0],E=f[1],G=(0,d.a)("1350px");(0,d._)(n);var T=(0,l.TA)({initialValues:O,validationSchema:u.Ry({price:u.IX().of(u.Rx())}),onSubmit:function(e){var n=[];Object.entries(e).forEach((function(e){var t=(0,i.Z)(e,2),r=t[0],a=t[1];""===a||!1===a||a.length<1||n.push({name:r,value:a})})),t(n),r()}}),J=function(e){switch(e.target.dataset.section){case"category":h((function(e){return!e}));break;case"price":j((function(e){return!e}));break;case"producer":E((function(e){return!e}));break;default:console.log("There is no such section")}},W=T.handleSubmit,q=T.handleChange,A=T.values,U=T.errors,Y=T.setFieldValue,z=function(e){G?(q(e),W(e)):q(e)};return(0,m.jsxs)("div",{className:N,children:[(0,m.jsxs)("form",{onSubmit:W,noValidate:!0,children:[(0,m.jsxs)("div",{className:k,children:[(0,m.jsxs)("button",{className:"".concat(w," ").concat(o?Z:""),type:"button","data-section":"category",onClick:J,children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f",(0,m.jsx)("svg",{width:"11px",height:"6px",children:(0,m.jsx)("use",{href:P.Z+"#icon-arrow-down"})})]}),o&&(0,m.jsx)("div",{className:C,children:V.map((function(e){var n=e.id,t=e.name;return(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{className:F,type:"radio",name:"category",value:t,checked:A.category===t,onChange:z}),(0,m.jsx)("span",{children:t})]},n)}))})]}),(0,m.jsx)("div",{className:k,children:(0,m.jsx)(v,{name:"available",checked:A.available,onChange:z,children:"\u0412 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456"})}),(0,m.jsx)("div",{className:k,children:(0,m.jsx)(v,{name:"discount",checked:A.discount,onChange:z,children:"\u0417\u0456 \u0437\u043d\u0438\u0436\u043a\u043e\u044e"})}),(0,m.jsxs)("div",{className:k,children:[(0,m.jsxs)("button",{className:"".concat(w," ").concat(_?Z:""),type:"button","data-section":"price",onClick:J,children:["\u0426\u0456\u043d\u0430",(0,m.jsx)("svg",{width:"11px",height:"6px",children:(0,m.jsx)("use",{href:P.Z+"#icon-arrow-down"})})]}),_&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b,{value:A.price,onChange:function(e){return Y("price",e)}}),(0,m.jsxs)("div",{className:S,children:[(0,m.jsx)("input",{className:"".concat(M," ").concat(U.price?B:""),type:"text",value:A.price[0],onChange:function(e){var n=e.target;return Y("price",[n.value,A.price[1]])}}),(0,m.jsx)("span",{children:"-"}),(0,m.jsx)("input",{className:"".concat(M," ").concat(U.price?B:""),type:"text",value:A.price[1],onChange:function(e){var n=e.target;return Y("price",[A.price[0],n.value])}}),(0,m.jsx)("button",{type:"submit",children:(0,m.jsx)("svg",{width:"16px",height:"16px",children:(0,m.jsx)("use",{href:P.Z+"#icon-arrow-right"})})})]})]})]}),(0,m.jsxs)("div",{className:"".concat(k," ").concat(y),children:[(0,m.jsxs)("button",{className:"".concat(w," ").concat(D?Z:""),type:"button","data-section":"producer",onClick:J,children:["\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a",(0,m.jsx)("svg",{width:"11px",height:"6px",children:(0,m.jsx)("use",{href:P.Z+"#icon-arrow-down"})})]}),D&&(0,m.jsx)("div",{className:C,children:R.map((function(e){var n=e.name,t=e.id;return(0,m.jsx)(v,{name:"producer",value:n,checked:A.producer.includes(n),onChange:z,children:n},t)}))})]}),(0,m.jsx)("div",{className:H,children:(0,m.jsx)("button",{className:L,type:"submit",children:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438"})})]}),(0,m.jsx)("button",{className:I,type:"button",onClick:n,children:(0,m.jsx)("svg",{width:"25px",height:"25px",children:(0,m.jsx)("use",{href:P.Z+"#icon-close"})})})]})},E=t(3987),G=(t(4676),t(4432),t(5880),"Filters_swiper__G0QUA"),T="Filters_slide__kGEwl",J="Filters_settings__qL4ei",W="Filters_selection__g-Fds",q="Filters_backdrop__M7osn",A={slidesPerView:"auto",spaceBetween:10,speed:750,breakpoints:{768:{spaceBetween:20}}},U=function(e){var n=e.currentFilters,t=void 0===n?[]:n,r=e.setFilters,s=e.removeFilter,l=e.resetCurrentPage,u=(0,a.useState)(!1),d=(0,i.Z)(u,2),h=d[0],x=d[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(o.tq,(0,c.Z)((0,c.Z)({},A),{},{className:G,children:[(0,m.jsx)(o.o5,{className:T,children:(0,m.jsxs)("button",{className:J,type:"button",onClick:function(){return x(!0)},children:[(0,m.jsx)("svg",{width:"17px",height:"17px",stroke:"black",children:(0,m.jsx)("use",{href:P.Z+"#icon-filter"})}),"\u0424\u0456\u043b\u044c\u0442\u0440"]})}),t.map((function(e,n){return(0,m.jsx)(o.o5,{className:T,children:(0,m.jsxs)("button",{className:W,type:"button",onClick:function(){return s(e)},children:[(0,E.L2)(e),(0,m.jsx)("svg",{width:"15px",height:"15px",stroke:"black",children:(0,m.jsx)("use",{href:P.Z+"#icon-cross"})})]})},n)}))]})),h&&(0,m.jsx)("div",{className:q,children:(0,m.jsx)(D,{setFilters:r,closeMenu:function(){return x(!1)},resetCurrentPage:l})})]})},Y=t(3418),z=t(962),K={list:"ItemList_list__UaOWw",footer:"ItemList_footer__GpatH",pagination:"ItemList_pagination__l9myk",paginationBtn:"ItemList_paginationBtn__2K21F",active:"ItemList_active__9uYqD",arrow:"ItemList_arrow__MxHZn"},Q=t(7459),X=function(e){var n=e.items,t=e.setCurrentPage,r=e.currentPage,s=e.limit,o=(0,a.useState)([]),l=(0,i.Z)(o,2),u=l[0],d=l[1];(0,a.useEffect)((function(){var e=n.slice((r-1)*s,(r-1)*s+s);d(e),window.scrollTo({top:0,behavior:"smooth"})}),[r,n,s]);var h=Math.ceil(n.length/s);return(0,m.jsx)("div",{className:K.wrapper,children:u.length>0?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("ul",{className:K.list,children:u.map((function(e){return(0,m.jsx)("li",{children:(0,m.jsx)(z.Z,(0,c.Z)({},e))},e.id)}))}),(0,m.jsxs)("div",{className:K.footer,children:[h>r&&(0,m.jsx)(Q.Z,{type:"button",onClick:function(){return t((function(e){return e+1}))},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0449\u0435"}),(0,m.jsxs)("ul",{className:K.pagination,children:[(0,m.jsx)("li",{children:(0,m.jsx)("button",{className:"".concat(K.paginationBtn," ").concat(1===r?K.active:""),type:"button",onClick:function(){return t(1)},children:"1"})}),(0,m.jsx)("li",{children:(0,m.jsx)("button",{className:"".concat(K.paginationBtn," ").concat(2===r?K.active:""),type:"button",onClick:function(){return t(2)},children:"2"})}),(0,m.jsx)("li",{children:(0,m.jsx)("button",{className:"".concat(K.paginationBtn," ").concat(3===r?K.active:""),type:"button",onClick:function(){return t(3)},children:"3"})}),(0,m.jsx)("li",{children:(0,m.jsx)("button",{className:"".concat(K.paginationBtn," ").concat(4===r?K.active:""),type:"button",onClick:function(){return t(4)},children:"4"})}),(0,m.jsx)("li",{children:(0,m.jsx)("button",{className:"".concat(K.paginationBtn," ").concat(5===r?K.active:""),type:"button",onClick:function(){return t(5)},children:"5"})}),(0,m.jsx)("li",{children:(0,m.jsx)("button",{className:K.arrow,type:"button",children:(0,m.jsx)("svg",{width:"16px",height:"16px",children:(0,m.jsx)("use",{href:P.Z+"#icon-arrow-right"})})})})]})]})]}):(0,m.jsx)("p",{className:K.info,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439 :("})})},$=t(3585),ee="Sorting_sorting__6zV8w",ne="Sorting_sortingBtn__vLmRb",te="Sorting_active__O4ta+",re="Sorting_options__mW7XL",ie="Sorting_currentSorting__D9WBy",ae=function(e){var n=e.currentSorting,t=e.setCurrentSorting,r=(0,a.useState)(!1),s=(0,i.Z)(r,2),c=s[0],o=s[1],l=function(e){return function(n){var r=n.target;t(e),r.classList.add(ie),o(!1)}},u=function(e){return n===e?ie:""};return(0,m.jsxs)("div",{className:ee,children:[(0,m.jsxs)("button",{className:"".concat(ne," ").concat(c?te:""),type:"button",onClick:function(){return o((function(e){return!e}))},children:[n,(0,m.jsx)("svg",{width:"11px",height:"6px",children:(0,m.jsx)("use",{href:P.Z+"#icon-arrow-down"})})]}),(0,m.jsxs)("ul",{className:re,children:[(0,m.jsx)("li",{children:(0,m.jsx)("button",{className:u($.Hy.default),type:"button",onClick:l($.Hy.default),children:"\u0417\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c"})}),(0,m.jsx)("li",{children:(0,m.jsx)("button",{className:u($.Hy.popular),type:"button",onClick:l($.Hy.popular),children:"\u041f\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0456"})}),(0,m.jsx)("li",{children:(0,m.jsx)("button",{className:u($.Hy.cheap),type:"button",onClick:l($.Hy.cheap),children:"\u0414\u0435\u0448\u0435\u0432\u0448\u0456"})}),(0,m.jsx)("li",{children:(0,m.jsx)("button",{className:u($.Hy.expensive),type:"button",onClick:l($.Hy.expensive),children:"\u0414\u043e\u0440\u043e\u0436\u0447\u0456"})})]})]})},se="Catalog_wrapper__Z2S8K",ce="Catalog_box__P7UHG",oe="Catalog_title__OtzAW",le="Catalog_link__fCM0j",ue="Catalog_content__eYa+J",de=t(3227),he=function(){var e=(0,a.useState)(de),n=(0,i.Z)(e,2),t=n[0],c=n[1],o=(0,a.useState)([]),l=(0,i.Z)(o,2),u=l[0],h=l[1],x=(0,a.useState)(E.Hy.default),p=(0,i.Z)(x,2),_=p[0],j=p[1],v=(0,d.a)("1350px"),g=(0,a.useState)(1),f=(0,i.Z)(g,2),b=f[0],N=f[1];(0,a.useEffect)((function(){var e=(0,E.MI)(de,u);switch(_){case E.Hy.popular:e.sort((function(e,n){return n.rate-e.rate}));break;case E.Hy.cheap:e.sort((function(e,n){return e.price-n.price}));break;case E.Hy.expensive:e.sort((function(e,n){return n.price-e.price}))}c(e)}),[u,_]);var k=function(){return N(1)},y=[];return u.forEach((function(e){var n=e.name,t=e.value;"producer"===n?y.push.apply(y,(0,r.Z)(t.map((function(e){return{name:n,value:e}})))):y.push({name:n,value:t})})),(0,m.jsx)("div",{className:se,children:(0,m.jsxs)(Y.Z,{children:[(0,m.jsx)(s.Z,{classNames:[le],to:"/",children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 >"}),(0,m.jsxs)("div",{className:ce,children:[(0,m.jsx)("h1",{className:oe,children:"\u0414\u0438\u0442\u044f\u0447\u0456 \u043a\u043e\u043b\u044f\u0441\u043a\u0438"}),(0,m.jsx)(ae,{currentSorting:_,setCurrentSorting:j,resetCurrentPage:k})]}),(0,m.jsxs)("div",{className:ue,children:[v?(0,m.jsx)(D,{setFilters:h,resetCurrentPage:k}):(0,m.jsx)(U,{setFilters:h,currentFilters:y,removeFilter:function(e){var n=e.name,t=e.value;h("producer"!==n?function(e){return e.filter((function(e){return e.value!==t}))}:function(e){var n=(0,r.Z)(e),i=n.findIndex((function(e){return"producer"===e.name}));return n[i].value=n[i].value.filter((function(e){return e!==t})),n})},resetCurrentPage:k}),(0,m.jsx)(X,{items:t,setCurrentPage:N,currentPage:b,limit:12})]})]})})}}}]);
//# sourceMappingURL=568.db2dac9b.chunk.js.map