(this.webpackJsonpcontrast=this.webpackJsonpcontrast||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),i=a.n(c),l=(a(13),a(2)),s=a(5),o=a.n(s),u=a(8),f=a(6),d=a(0),b=function(e){var t=parseInt(e,16)/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)},j=function(e){var t=function(e){e=(e||"").replace(/(\r\n|\n|\r)/gm,"");var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:b(t[1]),g:b(t[2]),b:b(t[3])}:null}(e=(e||"").replace(" ","").replace(/(\r\n|\n|\r)/gm,""))||{};return.2126*t.r+.7152*t.g+.0722*t.b},x=function(e,t){var a=e.luminance,n=t.luminance;if(a>n){var r=a;a=n,n=r}return 1/((a+.05)/(n+.05))},p=function(e){var t=e.split(": ");return{name:t[0].replace(/(\r\n|\n|\r)/gm,""),value:t[1],luminance:j(t[1])}},h=function(e){var t=e.luminance<.4?"white":"#0d1117";return Object(d.jsx)("div",{style:{backgroundColor:e.value,padding:"10px",borderRadius:"5px",marginRight:"10px",width:"150px",textAlign:"center",color:t},children:e.name})},m=function(e,t){var a="#e3b341",n="#2ea043";return Object(d.jsx)("div",{style:{display:"flex",flexShrink:0,flexGrow:1,flexWrap:"wrap"},children:e.map((function(e){return Object(d.jsxs)("div",{style:{display:"flex",margin:"0.5em",alignItems:"center"},children:[h(e.a),h(e.b),Object(d.jsx)("div",{style:{width:"50px",textAlign:"center",fontFamily:"Monaco",fontSize:"13px",marginRight:"10px",color:e.aaa?n:e.aa?a:"white",fontWeight:e.aa?600:400},children:Math.round(100*e.contrast)/100}),Object(d.jsxs)("button",{style:{backgroundColor:e.a.value,color:e.b.value,padding:"5px",borderRadius:"3px",marginRight:"5px",cursor:"pointer"},onClick:Object(u.a)(o.a.mark((function a(){var n,r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t?e.a.name:e.a.value,r=t?e.b.name:e.b.value,a.next=4,navigator.clipboard.writeText("background-color: ".concat(n,";\ncolor: ").concat(r,";\n"));case 4:case"end":return a.stop()}}),a)}))),children:["COPY ",Object(d.jsx)("i",{className:"fa fa-clipboard"})]}),Object(d.jsx)("div",{style:{width:"20px",textAlign:"center"},children:e.aaa?Object(d.jsx)("i",{className:"fa fa-check",style:{color:n}}):e.aa?Object(d.jsx)("i",{className:"fa fa-exclamation-triangle",style:{color:a}}):Object(d.jsx)("i",{className:"fa fa-times"})})]})}))})},v=function(){var e=n.useState(""),t=Object(l.a)(e,2),a=t[0],r=t[1],c=n.useState([]),i=Object(l.a)(c,2),s=i[0],o=i[1],u=n.useState([]),b=Object(l.a)(u,2),j=b[0],h=b[1],v=n.useState(!1),O=Object(l.a)(v,2),g=O[0],y=O[1],w=n.useState(!1),k=Object(l.a)(w,2),S=k[0],C=k[1],A=n.useState(!1),N=Object(l.a)(A,2),R=N[0],M=N[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{style:{marginBottom:"0.5em"},children:"SCSS Style Variables"}),Object(d.jsx)("p",{children:"Define variables with a colon, separate lines with a semicolon"}),Object(d.jsx)("textarea",{onChange:function(e){return r(e.target.value)},value:a,style:{height:"200px",width:"90%",marginBottom:"0.5em"}}),Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("button",{onClick:function(){var e=function(e){var t,a=1,n=1,r=[],c=Object(f.a)(e);try{for(c.s();!(t=c.n()).done;){for(var i=t.value;a<e.length-1;){var l=e[a],s=x(i,l);r.push({a:i,b:l,contrast:s,aa:s>4.5,aaa:s>7}),a++}a=++n}}catch(o){c.e(o)}finally{c.f()}return r}(function(e){var t,a=[],n=Object(f.a)(e.split(";"));try{for(n.s();!(t=n.n()).done;){var r=t.value;a.push(p(r))}}catch(c){n.e(c)}finally{n.f()}return a}(a));h(e),g&&(e=e.filter((function(e){return e.aa}))),S&&(e=e.filter((function(e){return e.aaa}))),o(e)},children:"Compare"}),Object(d.jsx)("button",{onClick:function(){o(g?j:s.filter((function(e){return e.aa}))),y(!g)},className:g?"selected":"",children:"AA"}),Object(d.jsx)("button",{onClick:function(){o(S?j.filter((function(e){return!g||e.aa})):s.filter((function(e){return e.aaa}))),S||y(!S),C(!S)},className:S?"selected":"",children:"AAA"}),Object(d.jsxs)("button",{onClick:function(){M(!R)},className:R?"selected":"",children:["Copy Variables ",Object(d.jsx)("i",{className:"fas fa-code"})]})]}),s.length>0&&m(s,R)]})};var O=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(v,{})})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9f441fcd.chunk.js.map