(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),r=n(12),a=n.n(r),i=(n(19),n(10)),o=n.n(i),u=n(13),j=n(7),l=n(28),h=n(29),b=(n(9),n(21),function(e){return Object(c.jsxs)(l.a,{style:{margin:15,width:"20%",height:"30vh"},children:[Object(c.jsxs)(l.a.Body,{className:"Cbody",children:[Object(c.jsx)(l.a.Title,{children:e.name}),Object(c.jsx)(l.a.Text,{className:"Ctext",children:e.description})]}),Object(c.jsx)(h.a,{href:e.repo_url,target:"_blank",children:"Go to Repo"})]})}),d=function(e){for(var t=e.list,n=[],s=0;s<t.length/5;s++)n.push(t.slice(5*s,5*(s+1)));return Object(c.jsx)("div",{style:{},children:n.map((function(e){return Object(c.jsx)("div",{style:{display:"flex"},children:e.map((function(e,t){return Object(c.jsx)(b,{name:e.name,description:e.description,repo_url:e.html_url},t)}))})}))})},p=n(27),m=(n(22),function(e){var t=e.name,n=Object(s.useState)(),r=Object(j.a)(n,2),a=r[0],i=r[1],l=Object(s.useState)(),b=Object(j.a)(l,2),m=b[0],f=b[1],x=Object(s.useState)(!1),O=Object(j.a)(x,2),v=O[0],y=O[1];return void 0==a&&function(){var e=Object(u.a)(o.a.mark((function e(){var n,c,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/"+t,{method:"GET"});case 2:return n=e.sent,e.next=5,fetch("https://api.github.com/users/"+t+"/repos",{method:"GET"});case 5:return c=e.sent,e.next=8,c.json();case 8:return s=e.sent,e.next=11,n.json();case 11:r=e.sent,i(s),f(r.avatar_url);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),v?Object(c.jsx)(d,{list:a}):Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("div",{className:"ImgDiv",children:Object(c.jsx)(p.a,{className:"mainIMG",src:m})}),Object(c.jsx)("div",{className:"BtnDiv",children:Object(c.jsxs)(h.a,{variant:"primary",className:"btn",onClick:function(){y(!0)},children:["Click To View The Repos of ",t]})})]})});n(25);var f=function(){return Object(c.jsx)(m,{name:"facebook"})};a.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.3ffd4c24.chunk.js.map