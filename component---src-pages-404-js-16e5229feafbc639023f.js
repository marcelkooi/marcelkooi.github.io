(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"query",function(){return T});var r=t(0),a=t.n(r),i=(t(163),t(166),t(167)),l=t.n(i),o=t(198),u=t.n(o),c=t(187),s=t.n(c),d=t(188),f=t.n(d),m=t(189),v=t.n(m),h=t(178),p=t.n(h),b=t(190),g=t.n(b),y=t(191),j=t.n(y),O=t(192),_=t.n(O),x=t(160),z=t.n(x),w=t(161);n.default=function(e){var n=e.data,t=n.notFound.html,r=n.footerLinks.html,i=n.copyright.html,o=z.a.headerTitle,c=z.a.headerSubTitle,d=z.a.siteUrl,m=z.a.siteTitle,h=z.a.siteDescription,b=z.a.siteLanguage;return a.a.createElement(g.a,null,a.a.createElement(v.a,null,a.a.createElement(s.a,{title:o,subTitle:c}),a.a.createElement(j.a,{items:w.a})),a.a.createElement(l.a,null,a.a.createElement(p.a,{title:"NOT FOUND"}),a.a.createElement(u.a,{html:t})),a.a.createElement(f.a,{links:r,copyright:i}),a.a.createElement(_.a,{url:d,language:b,title:m,description:h}))};var T="4034979193"},160:function(e,n){var t="Marcel Kooi",r={siteTitle:""+t,siteTitlePostfix:" - "+t,siteDescription:""+t,siteImage:"preview.jpg",siteLanguage:"en",headerTitle:""+t,headerSubTitle:"",siteUrl:"https://marcelkooi.com"};e.exports=r},161:function(e,n,t){"use strict";n.a=[{label:"Home",to:"/"},{label:"Blog",to:"/blog"},{label:"About",to:"/about"}]},163:function(e,n,t){"use strict";function r(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n  :root {\n    --textColor: #555;\n    --lightTextColor: #888;\n    --superLightTextColor: #aaa;\n    --fontFamily: "Open Sans", sans-serif;\n\n    --linkColor: #a00;\n    --hoverLinkColor: #d00;\n\n    --scrollBarThumb: #eaeaea;\n    --scrollBarTrack: #f9f9f9;\n    --scrollBarWidth: 10px;\n  }\n']);return r=function(){return e},e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t(164);var a=(0,t(80).injectGlobal)(r());n.default=a},164:function(e,n,t){},166:function(e,n,t){"use strict";function r(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  html {\n    box-sizing: border-box;\n    font-family: var(--fontFamily);\n    font-size: 16px;\n    color: #666;\n  }\n\n  *,\n  *:after,\n  *:before {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n  }\n\n  p {\n    color: var(--textColor);\n  }\n\n  h1 {\n    font-size: 2.4em;\n  }\n\n  h2 {\n    font-size: 1.8em;\n  }\n\n  ul {\n    list-style-position: inside;\n  }\n\n  a {\n    color: var(--linkColor);\n    transition: .3s;\n  }\n\n  @media (hover: hover)  {\n    a:hover {\n      color: var(--hoverLinkColor);\n    }\n  }\n\n  *::-webkit-scrollbar {\n    width: var(--scrollBarWidth);\n  }\n  *::-webkit-scrollbar-track {\n    background: var(--scrollBarTrack);\n  }\n  *::-webkit-scrollbar-thumb {\n    background-color: var(--scrollBarThumb);\n  }\n\n"]);return r=function(){return e},e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=(0,t(80).injectGlobal)(r());n.default=a},167:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(2)),i=t(80),l=o(t(168));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var n=e.children,t=e.themeStyle,a=void 0===t?l.default:t,o=e.customStyle,u=void 0===o?"":o;return r.default.createElement("article",{className:(0,i.cx)(a,u)},n)};u.propTypes={children:a.default.node.isRequired,themeStyle:a.default.string,customStyle:a.default.string};var c=u;n.default=c},168:function(e,n,t){"use strict";function r(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  max-width: 600px;\n  margin: 0 auto 30px;\n"]);return r=function(){return e},e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=(0,t(80).css)(r());n.default=a},178:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(2)),i=t(80),l=o(t(179));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var n=e.title,t=e.children,a=e.themeStyle,o=void 0===a?l.default:a,u=e.customStyle,c=void 0===u?"":u;return r.default.createElement("header",{className:(0,i.cx)(o,c)},n?r.default.createElement("h1",null,n):t)};u.propTypes={title:a.default.string,children:a.default.node,themeStyle:a.default.string,customStyle:a.default.string};var c=u;n.default=c},179:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r,a=t(80);function i(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  h1 {\n    letter-spacing: -0.03em;\n    margin-bottom: 1em;\n    line-height: 1.1;\n\n    ",";\n  }\n"]);return i=function(){return e},e}var l=(0,((r=t(171))&&r.__esModule?r:{default:r}).default)([768,1024].map(function(e){return"@media (min-width: ".concat(e,"px)")})),o=(0,a.css)(i(),l({fontSize:["2em","2.4em","2.8em"]}));n.default=o},198:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(2)),i=t(80),l=o(t(199));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var n=e.html,t=e.children,a=e.themeStyle,o=void 0===a?l.default:a,u=e.customStyle,c=void 0===u?"":u;return r.default.createElement(r.default.Fragment,null,n?r.default.createElement("div",{className:(0,i.cx)(o,c),dangerouslySetInnerHTML:{__html:n}}):r.default.createElement("div",{className:"".concat(o)},t))};u.propTypes={html:a.default.string,themeStyle:a.default.string,customStyle:a.default.string};var c=u;n.default=c},199:function(e,n,t){"use strict";function r(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  margin-bottom: 50px;\n  min-height: 40vh;\n\n  & .gatsby-resp-image-wrapper {\n    margin: 2em 0;\n  }\n\n  p {\n    line-height: 1.6;\n    margin: 0 0 1.5em;\n    font-size: 1.1em;\n  }\n\n  ul {\n    margin: 0 0 1.5em;\n    list-style-position: inside;\n  }\n\n  li {\n    margin: 0.8em 0;\n    font-size: 1.1em;\n    line-height: 1.3;\n    padding-left: 5px;\n  }\n\n  h2,\n  h3 {\n    line-height: 1.2;\n    margin: 1.5em 0 0.8em;\n    letter-spacing: -0.01em;\n  }\n\n  h2 {\n    font-size: 2em;\n  }\n\n  h3 {\n    font-size: 1.6em;\n  }\n\n  pre {\n    margin: 0 0 1.5em;\n  }\n\n  blockquote {\n    padding-left: 20px;\n    border-left: 5px solid #ddd;\n    font-style: italic;\n  }\n"]);return r=function(){return e},e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=(0,t(80).css)(r());n.default=a}}]);
//# sourceMappingURL=component---src-pages-404-js-16e5229feafbc639023f.js.map