(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(t,e,n){"use strict";n.r(e);var a=n(12),i=(n(0),n(168)),r=n(166),o={name:"a8qjxb",styles:"padding:2em;"};e.default=function(){return Object(a.b)(i.a,null,Object(a.b)(r.a,{title:"404: Not found"}),Object(a.b)("div",{css:o},Object(a.b)("h1",null,"404 Not Found"),Object(a.b)("p",null,"You just hit a route that doesn't exist... the sadness.")))}},162:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"g",function(){return o}),n.d(e,"h",function(){return s}),n.d(e,"c",function(){return c}),n.d(e,"b",function(){return l}),n.d(e,"e",function(){return u}),n.d(e,"d",function(){return d}),n.d(e,"f",function(){return p});var a=n(170),i=n.n(a),r=i()("aliceblue"),o=r.saturate(.3).darken(.02),s=o.saturate(.3).darken(.02),c=i()("lavender"),l=i()("#333333"),u=i()("aliceblue"),d=l.darken(.7),p=d},164:function(t,e,n){var a;t.exports=(a=n(165))&&a.default||a},165:function(t,e,n){"use strict";n.r(e);n(65);var a=n(0),i=n.n(a),r=n(5),o=n.n(r),s=n(66),c=function(t){var e=t.location,n=t.pageResources;return n?i.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},166:function(t,e,n){"use strict";var a=n(12),i=n(167),r=(n(0),n(5)),o=n.n(r),s=n(173),c=n.n(s);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.title,s=i.data.site,l=e||s.siteMetadata.description;return Object(a.b)(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},e.a=l},167:function(t){t.exports={data:{site:{siteMetadata:{title:"hanhanhan",description:"home on the web of Hannah Lazarus",author:"hanhanhan"}}}}},168:function(t,e,n){"use strict";n(163),n(42);var a=n(12),i=n(0),r=n.n(i),o=n(5),s=n.n(o),c=n(41),l=n.n(c);n(164),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func;var u=n(162),d=Object(a.a)("display:block;position:relative;z-index:1;-webkit-user-select:none;user-select:none;input{display:block;width:40px;height:32px;position:absolute;top:-7px;left:-5px;cursor:pointer;opacity:0;z-index:2;-webkit-touch-callout:none;}span{display:block;width:33px;height:4px;margin-bottom:5px;position:relative;background:",u.f.toString(),";border-radius:3px;z-index:1;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1),background 0.5s cubic-bezier(0.77,0.2,0.05,1),opacity 0.55s ease;}span:first-child{transform-origin:0% 0%;}span:nth-last-child(2){transform-origin:0% 100%;}input:checked ~ span{opacity:1;transform:rotate(45deg) translate(-2px,-1px);background:#232323;}input:checked ~ span:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(0.2,0.2);}input:checked ~ span:nth-last-child(2){transform:rotate(-45deg) translate(0,-1px);}ul{position:fixed;top:0;right:0;width:100vw;margin:0px;padding:2em 0em 2em 2em;background:",u.e.toString(),";list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0% 0%;transform:translate(200%,0);transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1);@media screen and (min-width:500px){width:auto;padding:2em 6em 2em 2em;}}li{margin:1em;margin-left:2em;font-size:22px;}input:checked ~ ul{transform:none;}"),p=function(t){var e=t.siteTitle;return Object(a.b)("header",{style:{background:u.c.toString()}},Object(a.b)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0 0.5em"}},Object(a.b)("h1",{style:{padding:0,margin:0}},Object(a.b)(l.a,{to:"/",style:{color:u.d.toString(),textDecoration:"none",padding:"0",margin:"0"}},e)),Object(a.b)("nav",{css:d},Object(a.b)("input",{type:"checkbox"}),Object(a.b)("span",null),Object(a.b)("span",null),Object(a.b)("span",null),Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)(l.a,{to:"/"},"Home")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/projects"},"Projects"))))))};p.propTypes={siteTitle:s.a.string},p.defaultProps={siteTitle:"Hannah Lazarus"};var b=p,f=(n(171),n(172),{name:"j7qwjs",styles:"display:flex;flex-direction:column;"}),g={name:"1d704us",styles:"align-self:center;margin:10px;"},h=function(t){var e=t.children;return Object(a.b)("div",{css:Object(a.a)("background-color:",u.a.toString(),";color:",u.b.toString(),";min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;")},Object(a.b)("div",null,Object(a.b)(b,{siteTitle:"hanhanhan"}),Object(a.b)("main",null,e)),Object(a.b)("div",{css:f},Object(a.b)("footer",{css:g},"© ",(new Date).getFullYear())))};h.propTypes={children:s.a.node.isRequired};e.a=h}}]);
//# sourceMappingURL=component---src-pages-404-js-258df4885371f107f229.js.map