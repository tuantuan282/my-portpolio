(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[8],{108:function(e,t,a){"use strict";a.r(t);var c=a(11),n=a(0),r=a.n(n),l=a(4),o=(a(82),a(18)),i=(a(83),function(e){var t=e.project,a=e.active,c=[{icon:r.a.createElement(l.h,null),key:"project",value:t.detail?t.detail.type:""},{icon:r.a.createElement(l.q,null),key:"client",value:t.detail?t.detail.client:""},{icon:r.a.createElement(l.b,null),key:"technologies",value:t.detail?t.detail.technology:""},{icon:r.a.createElement(l.f,null),key:"preview",value:t.detail?t.detail.preview:""}];return r.a.createElement("div",{className:"ProjectDetail ".concat(a?"active":"")},r.a.createElement("div",{className:"overlay"}),r.a.createElement("h1",null,t.title||"lorem ipsum"),r.a.createElement("div",{className:"row m-0 detail"},c.map((function(e){return r.a.createElement("div",{className:"content-wrapper col-6 mb-3",key:e.key},e.icon,r.a.createElement("span",{className:"key"},e.key),": ","preview"===e.key?r.a.createElement("a",{target:"_blank",href:e.value,rel:"noopener noreferrer"},"Link"):r.a.createElement("span",{className:"value"},e.value||"lorem ipsum"))}))),r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{src:t.image,alt:""})))}),s=[{image:"/images/HappyKids.PNG",title:"Kids Fashion Store",detail:{type:"Website",client:"Self Project",technology:"HTML5, CSS3, EJS, Express, MongoDB",preview:"http://happykids.herokuapp.com/"}}];t.default=function(){var e=Object(n.useRef)(s.map((function(){return Object(n.createRef)()}))),t=Object(n.useState)(""),a=Object(c.a)(t,2),u=a[0],m=a[1],f=Object(n.useState)(-1),p=Object(c.a)(f,2),d=p[0],v=p[1],b=Object(n.useState)(-1),E=Object(c.a)(b,2),k=E[0],y=E[1],h=Object(n.useState)(""),j=Object(c.a)(h,2),g=j[0],w=j[1],N=Object(n.useState)({}),O=Object(c.a)(N,2),S=O[0],M=O[1],P=Object(n.useState)(!1),x=Object(c.a)(P,2),C=x[0],L=x[1];Object(n.useEffect)((function(){document.title="Project"}));var H=function(e,t,a){var c=function(e,t){var a=t.current.offsetWidth,c=t.current.offsetHeight,n=e.pageX-t.current.offsetLeft-a/2*(a>c?c/a:1),r=e.pageY-t.current.offsetTop-c/2*(c>a?a/c:1);return n=r<0?n>100&&n<260?90:n:n>70&&n<260?50:n,Math.round(Math.atan2(r,n)/1.57079633+5)%4}(e,t);if("out"===a)switch(c){case 0:w(a+"-top");break;case 1:w(a+"-right");break;case 2:w(a+"-bottom");break;default:w(a+"-left")}switch(c){case 0:m(a+"-top");break;case 1:m(a+"-right");break;case 2:m(a+"-bottom");break;default:m(a+"-left")}},J=function(e,t){return function(a){v(t),H(a,e,"in")}},D=function(e,t){return function(a){y(t),H(a,e,"out")}},K=function(){L(!C),document.body.style.overflow="unset"};return r.a.createElement("div",{className:"Portfolio container"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement(o.a,{header:{bg:"works",main:"my",sub:"portfolio"}})),r.a.createElement("div",{className:"row projects"},s.map((function(t,a){return r.a.createElement("div",{key:a,className:"col-md-12 col-xl-4 col-lg-6",ref:e.current[a]},r.a.createElement("div",{onMouseEnter:J(e.current[a],a),onMouseLeave:D(e.current[a],a),className:a===d?u+" img-wrapper":a===k?g+" img-wrapper":"img-wrapper"},r.a.createElement("img",{src:t.image,alt:""}),r.a.createElement("div",{className:"overlay",onClick:function(){return function(e){M(e),L(!C),document.body.style.overflow="hidden"}(t)}},r.a.createElement("p",null,t.title||"some text"))))}))),r.a.createElement("div",{onClick:K,className:"modal-overlay ".concat(C?"overlay-active":"")}),r.a.createElement(i,{project:S,active:C}),r.a.createElement("div",{className:"esc-btn ".concat(C?"esc-btn-active":""),onClick:K},r.a.createElement(l.o,{size:40})))}},82:function(e,t,a){},83:function(e,t,a){}}]);
//# sourceMappingURL=8.919c860c.chunk.js.map