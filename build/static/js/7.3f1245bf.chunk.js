(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[7],{102:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(53),l=a(50),c=a(11),o=a(0),r=a.n(o),s=a(84),m=a.n(s),i=a(4),u=(a(102),a(18)),p=a(51);t.default=function(){var e=Object(o.useState)({}),t=Object(c.a)(e,2),a=t[0],s=t[1],f=Object(o.useState)(""),d=Object(c.a)(f,2),E=d[0],h=d[1],b=Object(o.useState)(!1),v=Object(c.a)(b,2),g=v[0],y=v[1];Object(o.useEffect)((function(){document.title="Contact"}));var w=[{icon:r.a.createElement(i.e,{size:40}),header:"mail me",content:"98tuannguyen@gmail.com"},{icon:r.a.createElement(i.n,{size:40}),header:"call me",content:"0976 649 000"}],N=[{icon:r.a.createElement(i.g,null),title:"Facebook",href:"https://www.facebook.com/"},{icon:r.a.createElement(i.p,null),title:"Twitter",href:"https://twitter.com/"},{icon:r.a.createElement(i.l,null),title:"Instagram",href:"https://www.instagram.com//"},{icon:r.a.createElement(i.i,null),title:"Github",href:"https://github.com/"}],j=function(e){e.preventDefault(),s(Object(l.a)(Object(l.a)({},a),{},Object(n.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"Contact container"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement(u.a,{header:{bg:"contact",main:"get in",sub:"touch"}})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"title"},"don't be shy !"),r.a.createElement("p",{className:"contact-p"},"Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."),r.a.createElement("div",null,w.map((function(e){return r.a.createElement("div",{className:"info",key:e.header},e.icon,r.a.createElement("div",{className:"main"},r.a.createElement("div",null,e.header),r.a.createElement("div",null,e.content)))}))),r.a.createElement("ul",{className:"socials"},N.map((function(e){return r.a.createElement("li",{key:e.title},r.a.createElement("a",{target:"blank",href:e.href,title:e.title},e.icon))})))),r.a.createElement("div",{className:"col-lg-8 mb-5"},r.a.createElement("form",{className:"contact-form row",onSubmit:function(e){e.preventDefault(),y(!0),m.a.post("https://dvbt-porfolio.herokuapp.com/api/form",a).then((function(e){s({}),h("The message has been sent successfully!"),y(!1)})).catch((function(e){h("The message has been sent unsuccessfully!")}))}},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("input",{value:a.name||"",required:!0,autoComplete:"off",onChange:j,placeholder:"your name",name:"name",type:"text"})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("input",{value:a.email||"",required:!0,autoComplete:"off",onChange:j,placeholder:"your email",name:"email",type:"email"})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("input",{value:a.subject||"",required:!0,autoComplete:"off",onChange:j,placeholder:"your subject",name:"subject",type:"text"})),r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("textarea",{value:a.message||"",required:!0,autoComplete:"off",onChange:j,placeholder:"your message",name:"message",type:"text"})),r.a.createElement("div",{className:"col-12 mb-3",style:{color:"The message has been sent successfully!"===E?"#155724":"#721c24",display:E?"block":"none"}},E),r.a.createElement("div",{className:"col-lg-12 align-items-center d-flex"},g?r.a.createElement("div",{class:"spinner-border",role:"status",style:{color:"var(--main-color)"}},r.a.createElement("span",{class:"sr-only"},"Loading...")):r.a.createElement(p.a,{type:"button",title:"send message",icon:r.a.createElement(i.m,null)}))))))}},51:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(8);a(52);t.a=function(e){var t=e.type,a=e.title,n=e.icon,o=e.url;return l.a.createElement("div",{className:"Button"},function(){switch(t){case"button":return l.a.createElement("button",{type:"submit"},l.a.createElement("p",null,a),n);case"download":return l.a.createElement("a",{href:o,download:!0},l.a.createElement("p",null,a),n);default:return l.a.createElement(c.b,{to:o||""},l.a.createElement("p",null,a),n)}}())}},52:function(e,t,a){}}]);
//# sourceMappingURL=7.3f1245bf.chunk.js.map