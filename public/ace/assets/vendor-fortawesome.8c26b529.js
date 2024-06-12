import"./vendor-others.11f5dab8.js";import{d as Ka,m as P,p as bn,ag as Rt}from"./vendor-@vue.e467cd49.js";function ut(a,t){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),n.push.apply(n,e)}return n}function u(a){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ut(Object(n),!0).forEach(function(e){z(a,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))})}return a}function Aa(a){return Aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Aa(a)}function hn(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function mt(a,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function yn(a,t,n){return t&&mt(a.prototype,t),n&&mt(a,n),Object.defineProperty(a,"prototype",{writable:!1}),a}function z(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}function Za(a,t){return kn(a)||An(a,t)||Ft(a,t)||Cn()}function fa(a){return xn(a)||wn(a)||Ft(a)||zn()}function xn(a){if(Array.isArray(a))return Va(a)}function kn(a){if(Array.isArray(a))return a}function wn(a){if(typeof Symbol!="undefined"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function An(a,t){var n=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var e=[],r=!0,i=!1,o,s;try{for(n=n.call(a);!(r=(o=n.next()).done)&&(e.push(o.value),!(t&&e.length===t));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return e}}function Ft(a,t){if(!!a){if(typeof a=="string")return Va(a,t);var n=Object.prototype.toString.call(a).slice(8,-1);if(n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set")return Array.from(a);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Va(a,t)}}function Va(a,t){(t==null||t>a.length)&&(t=a.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=a[n];return e}function zn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dt=function(){},Qa={},jt={},Dt=null,$t={mark:dt,measure:dt};try{typeof window!="undefined"&&(Qa=window),typeof document!="undefined"&&(jt=document),typeof MutationObserver!="undefined"&&(Dt=MutationObserver),typeof performance!="undefined"&&($t=performance)}catch{}var Mn=Qa.navigator||{},vt=Mn.userAgent,pt=vt===void 0?"":vt,$=Qa,x=jt,gt=Dt,ma=$t;$.document;var F=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Yt=~pt.indexOf("MSIE")||~pt.indexOf("Trident/"),da,va,pa,ga,ba,T="___FONT_AWESOME___",Ra=16,Ut="fa",Bt="svg-inline--fa",G="data-fa-i2svg",Fa="data-fa-pseudo-element",Sn="data-fa-pseudo-element-pending",Ja="data-prefix",at="data-icon",bt="fontawesome-i2svg",Ln="async",On=["HTML","HEAD","STYLE","SCRIPT"],Wt=function(){try{return!1}catch{return!1}}(),y="classic",k="sharp",tt=[y,k];function la(a){return new Proxy(a,{get:function(n,e){return e in n?n[e]:n[y]}})}var ra=la((da={},z(da,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),z(da,k,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),da)),ia=la((va={},z(va,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),z(va,k,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),va)),oa=la((pa={},z(pa,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),z(pa,k,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),pa)),Nn=la((ga={},z(ga,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),z(ga,k,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ga)),Pn=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Gt="fa-layers-text",En=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Hn=la((ba={},z(ba,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),z(ba,k,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ba)),Xt=[1,2,3,4,5,6,7,8,9,10],In=Xt.concat([11,12,13,14,15,16,17,18,19,20]),_n=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sa=new Set;Object.keys(ia[y]).map(sa.add.bind(sa));Object.keys(ia[k]).map(sa.add.bind(sa));var Tn=[].concat(tt,fa(sa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(Xt.map(function(a){return"".concat(a,"x")})).concat(In.map(function(a){return"w-".concat(a)})),ta=$.FontAwesomeConfig||{};function Vn(a){var t=x.querySelector("script["+a+"]");if(t)return t.getAttribute(a)}function Rn(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(x&&typeof x.querySelector=="function"){var Fn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fn.forEach(function(a){var t=Za(a,2),n=t[0],e=t[1],r=Rn(Vn(n));r!=null&&(ta[e]=r)})}var qt={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ut,replacementClass:Bt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ta.familyPrefix&&(ta.cssPrefix=ta.familyPrefix);var Q=u(u({},qt),ta);Q.autoReplaceSvg||(Q.observeMutations=!1);var m={};Object.keys(qt).forEach(function(a){Object.defineProperty(m,a,{enumerable:!0,set:function(n){Q[a]=n,na.forEach(function(e){return e(m)})},get:function(){return Q[a]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){Q.cssPrefix=t,na.forEach(function(n){return n(m)})},get:function(){return Q.cssPrefix}});$.FontAwesomeConfig=m;var na=[];function jn(a){return na.push(a),function(){na.splice(na.indexOf(a),1)}}var D=Ra,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dn(a){if(!(!a||!F)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=a;for(var n=x.head.childNodes,e=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return x.head.insertBefore(t,e),a}}var $n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ca(){for(var a=12,t="";a-- >0;)t+=$n[Math.random()*62|0];return t}function J(a){for(var t=[],n=(a||[]).length>>>0;n--;)t[n]=a[n];return t}function nt(a){return a.classList?J(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Kt(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yn(a){return Object.keys(a||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Kt(a[n]),'" ')},"").trim()}function La(a){return Object.keys(a||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(a[n].trim(),";")},"")}function et(a){return a.size!==_.size||a.x!==_.x||a.y!==_.y||a.rotate!==_.rotate||a.flipX||a.flipY}function Un(a){var t=a.transform,n=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:c,path:l}}function Bn(a){var t=a.transform,n=a.width,e=n===void 0?Ra:n,r=a.height,i=r===void 0?Ra:r,o=a.startCentered,s=o===void 0?!1:o,c="";return s&&Yt?c+="translate(".concat(t.x/D-e/2,"em, ").concat(t.y/D-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/D,"em), calc(-50% + ").concat(t.y/D,"em)) "):c+="translate(".concat(t.x/D,"em, ").concat(t.y/D,"em) "),c+="scale(".concat(t.size/D*(t.flipX?-1:1),", ").concat(t.size/D*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Wn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zt(){var a=Ut,t=Bt,n=m.cssPrefix,e=m.replacementClass,r=Wn;if(n!==a||e!==t){var i=new RegExp("\\.".concat(a,"\\-"),"g"),o=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(e))}return r}var ht=!1;function Ha(){m.autoAddCss&&!ht&&(Dn(Zt()),ht=!0)}var Gn={mixout:function(){return{dom:{css:Zt,insertCss:Ha}}},hooks:function(){return{beforeDOMElementCreation:function(){Ha()},beforeI2svg:function(){Ha()}}}},V=$||{};V[T]||(V[T]={});V[T].styles||(V[T].styles={});V[T].hooks||(V[T].hooks={});V[T].shims||(V[T].shims=[]);var H=V[T],Qt=[],Xn=function a(){x.removeEventListener("DOMContentLoaded",a),za=1,Qt.map(function(t){return t()})},za=!1;F&&(za=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),za||x.addEventListener("DOMContentLoaded",Xn));function qn(a){!F||(za?setTimeout(a,0):Qt.push(a))}function ua(a){var t=a.tag,n=a.attributes,e=n===void 0?{}:n,r=a.children,i=r===void 0?[]:r;return typeof a=="string"?Kt(a):"<".concat(t," ").concat(Yn(e),">").concat(i.map(ua).join(""),"</").concat(t,">")}function yt(a,t,n){if(a&&a[t]&&a[t][n])return{prefix:t,iconName:n,icon:a[t][n]}}var Kn=function(t,n){return function(e,r,i,o){return t.call(n,e,r,i,o)}},Ia=function(t,n,e,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Kn(n,r):n,c,l,f;for(e===void 0?(c=1,f=t[i[0]]):(c=0,f=e);c<o;c++)l=i[c],f=s(f,t[l],l,t);return f};function Zn(a){for(var t=[],n=0,e=a.length;n<e;){var r=a.charCodeAt(n++);if(r>=55296&&r<=56319&&n<e){var i=a.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function ja(a){var t=Zn(a);return t.length===1?t[0].toString(16):null}function Qn(a,t){var n=a.length,e=a.charCodeAt(t),r;return e>=55296&&e<=56319&&n>t+1&&(r=a.charCodeAt(t+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function xt(a){return Object.keys(a).reduce(function(t,n){var e=a[n],r=!!e.icon;return r?t[e.iconName]=e.icon:t[n]=e,t},{})}function Da(a,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=n.skipHooks,r=e===void 0?!1:e,i=xt(t);typeof H.hooks.addPack=="function"&&!r?H.hooks.addPack(a,xt(t)):H.styles[a]=u(u({},H.styles[a]||{}),i),a==="fas"&&Da("fa",t)}var ha,ya,xa,q=H.styles,Jn=H.shims,ae=(ha={},z(ha,y,Object.values(oa[y])),z(ha,k,Object.values(oa[k])),ha),rt=null,Jt={},an={},tn={},nn={},en={},te=(ya={},z(ya,y,Object.keys(ra[y])),z(ya,k,Object.keys(ra[k])),ya);function ne(a){return~Tn.indexOf(a)}function ee(a,t){var n=t.split("-"),e=n[0],r=n.slice(1).join("-");return e===a&&r!==""&&!ne(r)?r:null}var rn=function(){var t=function(i){return Ia(q,function(o,s,c){return o[c]=Ia(s,i,{}),o},{})};Jt=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){r[c.toString(16)]=o})}return r}),an=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){r[c]=o})}return r}),en=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(c){r[c]=o}),r});var n="far"in q||m.autoFetchSvg,e=Ia(Jn,function(r,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:c}),r},{names:{},unicodes:{}});tn=e.names,nn=e.unicodes,rt=Oa(m.styleDefault,{family:m.familyDefault})};jn(function(a){rt=Oa(a.styleDefault,{family:m.familyDefault})});rn();function it(a,t){return(Jt[a]||{})[t]}function re(a,t){return(an[a]||{})[t]}function W(a,t){return(en[a]||{})[t]}function on(a){return tn[a]||{prefix:null,iconName:null}}function ie(a){var t=nn[a],n=it("fas",a);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return rt}var ot=function(){return{prefix:null,iconName:null,rest:[]}};function Oa(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,e=n===void 0?y:n,r=ra[e][a],i=ia[e][a]||ia[e][r],o=a in H.styles?a:null;return i||o||null}var kt=(xa={},z(xa,y,Object.keys(oa[y])),z(xa,k,Object.keys(oa[k])),xa);function Na(a){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,r=e===void 0?!1:e,i=(t={},z(t,y,"".concat(m.cssPrefix,"-").concat(y)),z(t,k,"".concat(m.cssPrefix,"-").concat(k)),t),o=null,s=y;(a.includes(i[y])||a.some(function(l){return kt[y].includes(l)}))&&(s=y),(a.includes(i[k])||a.some(function(l){return kt[k].includes(l)}))&&(s=k);var c=a.reduce(function(l,f){var d=ee(m.cssPrefix,f);if(q[f]?(f=ae[s].includes(f)?Nn[s][f]:f,o=f,l.prefix=f):te[s].indexOf(f)>-1?(o=f,l.prefix=Oa(f,{family:s})):d?l.iconName=d:f!==m.replacementClass&&f!==i[y]&&f!==i[k]&&l.rest.push(f),!r&&l.prefix&&l.iconName){var g=o==="fa"?on(l.iconName):{},b=W(l.prefix,l.iconName);g.prefix&&(o=null),l.iconName=g.iconName||b||l.iconName,l.prefix=g.prefix||l.prefix,l.prefix==="far"&&!q.far&&q.fas&&!m.autoFetchSvg&&(l.prefix="fas")}return l},ot());return(a.includes("fa-brands")||a.includes("fab"))&&(c.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===k&&(q.fass||m.autoFetchSvg)&&(c.prefix="fass",c.iconName=W(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Y()||"fas"),c}var oe=function(){function a(){hn(this,a),this.definitions={}}return yn(a,[{key:"add",value:function(){for(var n=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Da(s,o[s]);var c=oa[y][s];c&&Da(c,o[s]),rn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,c=o.iconName,l=o.icon,f=l[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=l)}),n[s][c]=l}),n}}]),a}(),wt=[],K={},Z={},se=Object.keys(Z);function ce(a,t){var n=t.mixoutsTo;return wt=a,K={},Object.keys(Z).forEach(function(e){se.indexOf(e)===-1&&delete Z[e]}),wt.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Aa(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){K[o]||(K[o]=[]),K[o].push(i[o])})}e.provides&&e.provides(Z)}),n}function $a(a,t){for(var n=arguments.length,e=new Array(n>2?n-2:0),r=2;r<n;r++)e[r-2]=arguments[r];var i=K[a]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(e))}),t}function X(a){for(var t=arguments.length,n=new Array(t>1?t-1:0),e=1;e<t;e++)n[e-1]=arguments[e];var r=K[a]||[];r.forEach(function(i){i.apply(null,n)})}function R(){var a=arguments[0],t=Array.prototype.slice.call(arguments,1);return Z[a]?Z[a].apply(null,t):void 0}function Ya(a){a.prefix==="fa"&&(a.prefix="fas");var t=a.iconName,n=a.prefix||Y();if(!!t)return t=W(n,t)||t,yt(sn.definitions,n,t)||yt(H.styles,n,t)}var sn=new oe,fe=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,X("noAuto")},le={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(X("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,qn(function(){me({autoReplaceSvgRoot:n}),X("watch",t)})}},ue={icon:function(t){if(t===null)return null;if(Aa(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=Oa(t[0]);return{prefix:e,iconName:W(e,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Pn))){var r=Na(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=Y();return{prefix:i,iconName:W(i,t)||t}}}},O={noAuto:fe,config:m,dom:le,parse:ue,library:sn,findIconDefinition:Ya,toHtml:ua},me=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,e=n===void 0?x:n;(Object.keys(H.styles).length>0||m.autoFetchSvg)&&F&&m.autoReplaceSvg&&O.dom.i2svg({node:e})};function Pa(a,t){return Object.defineProperty(a,"abstract",{get:t}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return ua(e)})}}),Object.defineProperty(a,"node",{get:function(){if(!!F){var e=x.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function de(a){var t=a.children,n=a.main,e=a.mask,r=a.attributes,i=a.styles,o=a.transform;if(et(o)&&n.found&&!e.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};r.style=La(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ve(a){var t=a.prefix,n=a.iconName,e=a.children,r=a.attributes,i=a.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}function st(a){var t=a.icons,n=t.main,e=t.mask,r=a.prefix,i=a.iconName,o=a.transform,s=a.symbol,c=a.title,l=a.maskId,f=a.titleId,d=a.extra,g=a.watchable,b=g===void 0?!1:g,C=e.found?e:n,M=C.width,S=C.height,v=r==="fak",p=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(j){return d.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(d.classes).join(" "),h={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(S)})},w=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(M/S*16*.0625,"em")}:{};b&&(h.attributes[G]=""),c&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(f||ca())},children:[c]}),delete h.attributes.title);var A=u(u({},h),{},{prefix:r,iconName:i,main:n,mask:e,maskId:l,transform:o,symbol:s,styles:u(u({},w),d.styles)}),I=e.found&&n.found?R("generateAbstractMask",A)||{children:[],attributes:{}}:R("generateAbstractIcon",A)||{children:[],attributes:{}},N=I.children,Ea=I.attributes;return A.children=N,A.attributes=Ea,s?ve(A):de(A)}function At(a){var t=a.content,n=a.width,e=a.height,r=a.transform,i=a.title,o=a.extra,s=a.watchable,c=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[G]="");var f=u({},o.styles);et(r)&&(f.transform=Bn({transform:r,startCentered:!0,width:n,height:e}),f["-webkit-transform"]=f.transform);var d=La(f);d.length>0&&(l.style=d);var g=[];return g.push({tag:"span",attributes:l,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function pe(a){var t=a.content,n=a.title,e=a.extra,r=u(u(u({},e.attributes),n?{title:n}:{}),{},{class:e.classes.join(" ")}),i=La(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var _a=H.styles;function Ua(a){var t=a[0],n=a[1],e=a.slice(4),r=Za(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ge={found:!1,width:512,height:512};function be(a,t){!Wt&&!m.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(t,'" is missing.'))}function Ba(a,t){var n=t;return t==="fa"&&m.styleDefault!==null&&(t=Y()),new Promise(function(e,r){if(R("missingIconAbstract"),n==="fa"){var i=on(a)||{};a=i.iconName||a,t=i.prefix||t}if(a&&t&&_a[t]&&_a[t][a]){var o=_a[t][a];return e(Ua(o))}be(a,t),e(u(u({},ge),{},{icon:m.showMissingIcons&&a?R("missingIconAbstract")||{}:{}}))})}var zt=function(){},Wa=m.measurePerformance&&ma&&ma.mark&&ma.measure?ma:{mark:zt,measure:zt},aa='FA "6.5.2"',he=function(t){return Wa.mark("".concat(aa," ").concat(t," begins")),function(){return cn(t)}},cn=function(t){Wa.mark("".concat(aa," ").concat(t," ends")),Wa.measure("".concat(aa," ").concat(t),"".concat(aa," ").concat(t," begins"),"".concat(aa," ").concat(t," ends"))},ct={begin:he,end:cn},ka=function(){};function Ct(a){var t=a.getAttribute?a.getAttribute(G):null;return typeof t=="string"}function ye(a){var t=a.getAttribute?a.getAttribute(Ja):null,n=a.getAttribute?a.getAttribute(at):null;return t&&n}function xe(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(m.replacementClass)}function ke(){if(m.autoReplaceSvg===!0)return wa.replace;var a=wa[m.autoReplaceSvg];return a||wa.replace}function we(a){return x.createElementNS("http://www.w3.org/2000/svg",a)}function Ae(a){return x.createElement(a)}function fn(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,e=n===void 0?a.tag==="svg"?we:Ae:n;if(typeof a=="string")return x.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(o){r.setAttribute(o,a.attributes[o])});var i=a.children||[];return i.forEach(function(o){r.appendChild(fn(o,{ceFn:e}))}),r}function ze(a){var t=" ".concat(a.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var wa={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(fn(r),n)}),n.getAttribute(G)===null&&m.keepOriginalSource){var e=x.createComment(ze(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(t){var n=t[0],e=t[1];if(~nt(n).indexOf(m.replacementClass))return wa.replace(t);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,c){return c===m.replacementClass||c.match(r)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return ua(s)}).join(`
`);n.setAttribute(G,""),n.innerHTML=o}};function Mt(a){a()}function ln(a,t){var n=typeof t=="function"?t:ka;if(a.length===0)n();else{var e=Mt;m.mutateApproach===Ln&&(e=$.requestAnimationFrame||Mt),e(function(){var r=ke(),i=ct.begin("mutate");a.map(r),i(),n()})}}var ft=!1;function un(){ft=!0}function Ga(){ft=!1}var Ca=null;function St(a){if(!!gt&&!!m.observeMutations){var t=a.treeCallback,n=t===void 0?ka:t,e=a.nodeCallback,r=e===void 0?ka:e,i=a.pseudoElementsCallback,o=i===void 0?ka:i,s=a.observeMutationsRoot,c=s===void 0?x:s;Ca=new gt(function(l){if(!ft){var f=Y();J(l).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ct(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Ct(d.target)&&~_n.indexOf(d.attributeName))if(d.attributeName==="class"&&ye(d.target)){var g=Na(nt(d.target)),b=g.prefix,C=g.iconName;d.target.setAttribute(Ja,b||f),C&&d.target.setAttribute(at,C)}else xe(d.target)&&r(d.target)})}}),F&&Ca.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ce(){!Ca||Ca.disconnect()}function Me(a){var t=a.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),n}function Se(a){var t=a.getAttribute("data-prefix"),n=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=Na(nt(a));return r.prefix||(r.prefix=Y()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=re(r.prefix,a.innerText)||it(r.prefix,ja(a.innerText))),!r.iconName&&m.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function Le(a){var t=J(a.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(e||ca()):(t["aria-hidden"]="true",t.focusable="false")),t}function Oe(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Lt(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Se(a),e=n.iconName,r=n.prefix,i=n.rest,o=Le(a),s=$a("parseNodeAttributes",{},a),c=t.styleParser?Me(a):[];return u({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var Ne=H.styles;function mn(a){var t=m.autoReplaceSvg==="nest"?Lt(a,{styleParser:!1}):Lt(a);return~t.extra.classes.indexOf(Gt)?R("generateLayersText",a,t):R("generateSvgReplacementMutation",a,t)}var U=new Set;tt.map(function(a){U.add("fa-".concat(a))});Object.keys(ra[y]).map(U.add.bind(U));Object.keys(ra[k]).map(U.add.bind(U));U=fa(U);function Ot(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var n=x.documentElement.classList,e=function(d){return n.add("".concat(bt,"-").concat(d))},r=function(d){return n.remove("".concat(bt,"-").concat(d))},i=m.autoFetchSvg?U:tt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Ne));i.includes("fa")||i.push("fa");var o=[".".concat(Gt,":not([").concat(G,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(a.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var c=ct.begin("onTree"),l=s.reduce(function(f,d){try{var g=mn(d);g&&f.push(g)}catch(b){Wt||b.name==="MissingIcon"&&console.error(b)}return f},[]);return new Promise(function(f,d){Promise.all(l).then(function(g){ln(g,function(){e("active"),e("complete"),r("pending"),typeof t=="function"&&t(),c(),f()})}).catch(function(g){c(),d(g)})})}function Pe(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mn(a).then(function(n){n&&ln([n],t)})}function Ee(a){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:Ya(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Ya(r||{})),a(e,u(u({},n),{},{mask:r}))}}var He=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.transform,r=e===void 0?_:e,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,l=n.maskId,f=l===void 0?null:l,d=n.title,g=d===void 0?null:d,b=n.titleId,C=b===void 0?null:b,M=n.classes,S=M===void 0?[]:M,v=n.attributes,p=v===void 0?{}:v,h=n.styles,w=h===void 0?{}:h;if(!!t){var A=t.prefix,I=t.iconName,N=t.icon;return Pa(u({type:"icon"},t),function(){return X("beforeDOMElementCreation",{iconDefinition:t,params:n}),m.autoA11y&&(g?p["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(C||ca()):(p["aria-hidden"]="true",p.focusable="false")),st({icons:{main:Ua(N),mask:c?Ua(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:I,transform:u(u({},_),r),symbol:o,title:g,maskId:f,titleId:C,extra:{attributes:p,styles:w,classes:S}})})}},Ie={mixout:function(){return{icon:Ee(He)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ot,n.nodeCallback=Pe,n}}},provides:function(t){t.i2svg=function(n){var e=n.node,r=e===void 0?x:e,i=n.callback,o=i===void 0?function(){}:i;return Ot(r,o)},t.generateSvgReplacementMutation=function(n,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,c=e.transform,l=e.symbol,f=e.mask,d=e.maskId,g=e.extra;return new Promise(function(b,C){Promise.all([Ba(r,s),f.iconName?Ba(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var S=Za(M,2),v=S[0],p=S[1];b([n,st({icons:{main:v,mask:p},prefix:s,iconName:r,transform:c,symbol:l,maskId:d,title:i,titleId:o,extra:g,watchable:!0})])}).catch(C)})},t.generateAbstractIcon=function(n){var e=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,c=La(s);c.length>0&&(r.style=c);var l;return et(o)&&(l=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(l||i.icon),{children:e,attributes:r}}}},_e={mixout:function(){return{layer:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Pa({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:n,params:e});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(fa(i)).join(" ")},children:o}]})}}}},Te={mixout:function(){return{counter:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,c=e.attributes,l=c===void 0?{}:c,f=e.styles,d=f===void 0?{}:f;return Pa({type:"counter",content:n},function(){return X("beforeDOMElementCreation",{content:n,params:e}),pe({content:n.toString(),title:i,extra:{attributes:l,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(fa(s))}})})}}}},Ve={mixout:function(){return{text:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?_:r,o=e.title,s=o===void 0?null:o,c=e.classes,l=c===void 0?[]:c,f=e.attributes,d=f===void 0?{}:f,g=e.styles,b=g===void 0?{}:g;return Pa({type:"text",content:n},function(){return X("beforeDOMElementCreation",{content:n,params:e}),At({content:n,transform:u(u({},_),i),title:s,extra:{attributes:d,styles:b,classes:["".concat(m.cssPrefix,"-layers-text")].concat(fa(l))}})})}}},provides:function(t){t.generateLayersText=function(n,e){var r=e.title,i=e.transform,o=e.extra,s=null,c=null;if(Yt){var l=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/l,c=f.height/l}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,At({content:n.innerHTML,width:s,height:c,transform:i,title:r,extra:o,watchable:!0})])}}},Re=new RegExp('"',"ug"),Nt=[1105920,1112319];function Fe(a){var t=a.replace(Re,""),n=Qn(t,0),e=n>=Nt[0]&&n<=Nt[1],r=t.length===2?t[0]===t[1]:!1;return{value:ja(r?t[0]:t),isSecondary:e||r}}function Pt(a,t){var n="".concat(Sn).concat(t.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(n)!==null)return e();var i=J(a.children),o=i.filter(function(N){return N.getAttribute(Fa)===t})[0],s=$.getComputedStyle(a,t),c=s.getPropertyValue("font-family").match(En),l=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!c)return a.removeChild(o),e();if(c&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),g=~["Sharp"].indexOf(c[2])?k:y,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?ia[g][c[2].toLowerCase()]:Hn[g][l],C=Fe(d),M=C.value,S=C.isSecondary,v=c[0].startsWith("FontAwesome"),p=it(b,M),h=p;if(v){var w=ie(M);w.iconName&&w.prefix&&(p=w.iconName,b=w.prefix)}if(p&&!S&&(!o||o.getAttribute(Ja)!==b||o.getAttribute(at)!==h)){a.setAttribute(n,h),o&&a.removeChild(o);var A=Oe(),I=A.extra;I.attributes[Fa]=t,Ba(p,b).then(function(N){var Ea=st(u(u({},A),{},{icons:{main:N,mask:ot()},prefix:b,iconName:h,extra:I,watchable:!0})),j=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?a.insertBefore(j,a.firstChild):a.appendChild(j),j.outerHTML=Ea.map(function(gn){return ua(gn)}).join(`
`),a.removeAttribute(n),e()}).catch(r)}else e()}else e()})}function je(a){return Promise.all([Pt(a,"::before"),Pt(a,"::after")])}function De(a){return a.parentNode!==document.head&&!~On.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Fa)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function Et(a){if(!!F)return new Promise(function(t,n){var e=J(a.querySelectorAll("*")).filter(De).map(je),r=ct.begin("searchPseudoElements");un(),Promise.all(e).then(function(){r(),Ga(),t()}).catch(function(){r(),Ga(),n()})})}var $e={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Et,n}}},provides:function(t){t.pseudoElements2svg=function(n){var e=n.node,r=e===void 0?x:e;m.searchPseudoElements&&Et(r)}}},Ht=!1,Ye={mixout:function(){return{dom:{unwatch:function(){un(),Ht=!0}}}},hooks:function(){return{bootstrap:function(){St($a("mutationObserverCallbacks",{}))},noAuto:function(){Ce()},watch:function(n){var e=n.observeMutationsRoot;Ht?Ga():St($a("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},It=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},n)},Ue={mixout:function(){return{parse:{transform:function(n){return It(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-transform");return r&&(n.transform=It(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var e=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(c," ").concat(l," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:d,path:g};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),b.path)}]}]}}}},Ta={x:0,y:0,width:"100%",height:"100%"};function _t(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||t)&&(a.attributes.fill="black"),a}function Be(a){return a.tag==="g"?a.children:[a]}var We={hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-mask"),i=r?Na(r.split(" ").map(function(o){return o.trim()})):ot();return i.prefix||(i.prefix=Y()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var e=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,l=i.width,f=i.icon,d=o.width,g=o.icon,b=Un({transform:c,containerWidth:d,iconWidth:l}),C={tag:"rect",attributes:u(u({},Ta),{},{fill:"white"})},M=f.children?{children:f.children.map(_t)}:{},S={tag:"g",attributes:u({},b.inner),children:[_t(u({tag:f.tag,attributes:u(u({},f.attributes),b.path)},M))]},v={tag:"g",attributes:u({},b.outer),children:[S]},p="mask-".concat(s||ca()),h="clip-".concat(s||ca()),w={tag:"mask",attributes:u(u({},Ta),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,v]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Be(g)},w]};return e.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},Ta)}),{children:e,attributes:r}}}},Ge={provides:function(t){var n=!1;$.matchMedia&&(n=$.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Xe={hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},qe=[Gn,Ie,_e,Te,Ve,$e,Ye,Ue,We,Ge,Xe];ce(qe,{mixoutsTo:O});O.noAuto;var dn=O.config,gr=O.library;O.dom;var Ma=O.parse;O.findIconDefinition;O.toHtml;var Ke=O.icon;O.layer;var Ze=O.text;O.counter;var br={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]},hr={prefix:"far",iconName:"comment",icon:[512,512,[128489,61669],"f075","M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"]},yr={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},xr={prefix:"far",iconName:"sun",icon:[512,512,[9728],"f185","M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]},kr={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"]},wr={prefix:"far",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"]},Ar={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},zr={prefix:"fas",iconName:"info",icon:[192,512,[],"f129","M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"]},Cr={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},Mr={prefix:"fas",iconName:"compass",icon:[512,512,[129517],"f14e","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Sr={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Lr={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},Or={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},Nr={prefix:"fas",iconName:"wand-magic-sparkles",icon:[576,512,["magic-wand-sparkles"],"e2ca","M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"]},Pr={prefix:"fas",iconName:"location-arrow",icon:[448,512,[],"f124","M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"]},Er={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},Hr={prefix:"fas",iconName:"microphone",icon:[384,512,[],"f130","M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"]},Ir={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"]},_r={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},Tr={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},Vr={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"]},Rr={prefix:"fas",iconName:"question",icon:[320,512,[10067,10068,61736],"3f","M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},Fr={prefix:"fas",iconName:"cube",icon:[512,512,[],"f1b2","M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"]},jr={prefix:"fas",iconName:"wallet",icon:[512,512,[],"f555","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Dr={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},$r={prefix:"fas",iconName:"cubes",icon:[576,512,[],"f1b3","M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5V204.7c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7V413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2V152.6L392 121v89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8L256 323.2v95.9l-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1V354.8L528 323.2v90.7c0 3.2-1.9 6-4.8 7.3z"]},Yr={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Ur={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},Br={prefix:"fas",iconName:"paperclip",icon:[448,512,[128206],"f0c6","M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"]},Wr={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Gr={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},Xr={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},qr={prefix:"fas",iconName:"coins",icon:[512,512,[],"f51e","M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"]},Kr={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"]},Zr={prefix:"fas",iconName:"stop",icon:[384,512,[9209],"f04d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},Qr={prefix:"fas",iconName:"upload",icon:[512,512,[],"f093","M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},Jr={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"]},ai={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},ti={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},ni={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"]},ei={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},ri={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},ii={prefix:"fas",iconName:"store",icon:[576,512,[],"f54e","M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z"]},oi={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},si={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},ci={prefix:"fas",iconName:"percent",icon:[384,512,[62101,62785,"percentage"],"25","M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]},fi={prefix:"fas",iconName:"qrcode",icon:[448,512,[],"f029","M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"]},Qe={prefix:"fas",iconName:"wand-magic",icon:[512,512,["magic"],"f0d0","M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z"]},li=Qe,ui={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},mi={prefix:"fas",iconName:"hashtag",icon:[448,512,[62098],"23","M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"]},di={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},vi={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},pi={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},gi={prefix:"fas",iconName:"mug-saucer",icon:[640,512,["coffee"],"f0f4","M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]};function Tt(a,t){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),n.push.apply(n,e)}return n}function E(a){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tt(Object(n),!0).forEach(function(e){L(a,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):Tt(Object(n)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))})}return a}function Je(a,t){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var e=n.call(a,t||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function ar(a){var t=Je(a,"string");return typeof t=="symbol"?t:t+""}function Sa(a){return Sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Sa(a)}function L(a,t,n){return t=ar(t),t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}function tr(a,t){if(a==null)return{};var n={};for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){if(t.indexOf(e)>=0)continue;n[e]=a[e]}return n}function nr(a,t){if(a==null)return{};var n=tr(a,t),e,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)e=i[r],!(t.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(n[e]=a[e]))}return n}function Xa(a){return er(a)||rr(a)||ir(a)||or()}function er(a){if(Array.isArray(a))return qa(a)}function rr(a){if(typeof Symbol!="undefined"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function ir(a,t){if(!!a){if(typeof a=="string")return qa(a,t);var n=Object.prototype.toString.call(a).slice(8,-1);if(n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set")return Array.from(a);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qa(a,t)}}function qa(a,t){(t==null||t>a.length)&&(t=a.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=a[n];return e}function or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var sr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},vn={exports:{}};(function(a){(function(t){var n=function(v,p,h){if(!l(p)||d(p)||g(p)||b(p)||c(p))return p;var w,A=0,I=0;if(f(p))for(w=[],I=p.length;A<I;A++)w.push(n(v,p[A],h));else{w={};for(var N in p)Object.prototype.hasOwnProperty.call(p,N)&&(w[v(N,h)]=n(v,p[N],h))}return w},e=function(v,p){p=p||{};var h=p.separator||"_",w=p.split||/(?=[A-Z])/;return v.split(w).join(h)},r=function(v){return C(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(p,h){return h?h.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var p=r(v);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(v,p){return e(v,p).toLowerCase()},s=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},g=function(v){return s.call(v)=="[object RegExp]"},b=function(v){return s.call(v)=="[object Boolean]"},C=function(v){return v=v-0,v===v},M=function(v,p){var h=p&&"process"in p?p.process:p;return typeof h!="function"?v:function(w,A){return h(w,v,A)}},S={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,p){return n(M(r,p),v)},decamelizeKeys:function(v,p){return n(M(o,p),v,p)},pascalizeKeys:function(v,p){return n(M(i,p),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};a.exports?a.exports=S:t.humps=S})(sr)})(vn);var cr=vn.exports,fr=["class","style"];function lr(a){return a.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var e=n.indexOf(":"),r=cr.camelize(n.slice(0,e)),i=n.slice(e+1).trim();return t[r]=i,t},{})}function ur(a){return a.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function lt(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var e=(a.children||[]).map(function(c){return lt(c)}),r=Object.keys(a.attributes||{}).reduce(function(c,l){var f=a.attributes[l];switch(l){case"class":c.class=ur(f);break;case"style":c.style=lr(f);break;default:c.attrs[l]=f}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=nr(n,fr);return Rt(a.tag,E(E(E({},t),{},{class:r.class,style:E(E({},r.style),o)},r.attrs),s),e)}var pn=!1;try{pn=!1}catch{}function mr(){if(!pn&&console&&typeof console.error=="function"){var a;(a=console).error.apply(a,arguments)}}function ea(a,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?L({},a,t):{}}function dr(a){var t,n=(t={"fa-spin":a.spin,"fa-pulse":a.pulse,"fa-fw":a.fixedWidth,"fa-border":a.border,"fa-li":a.listItem,"fa-inverse":a.inverse,"fa-flip":a.flip===!0,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both"},L(L(L(L(L(L(L(L(L(L(t,"fa-".concat(a.size),a.size!==null),"fa-rotate-".concat(a.rotation),a.rotation!==null),"fa-pull-".concat(a.pull),a.pull!==null),"fa-swap-opacity",a.swapOpacity),"fa-bounce",a.bounce),"fa-shake",a.shake),"fa-beat",a.beat),"fa-fade",a.fade),"fa-beat-fade",a.beatFade),"fa-flash",a.flash),L(L(t,"fa-spin-pulse",a.spinPulse),"fa-spin-reverse",a.spinReverse));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}function Vt(a){if(a&&Sa(a)==="object"&&a.prefix&&a.iconName&&a.icon)return a;if(Ma.icon)return Ma.icon(a);if(a===null)return null;if(Sa(a)==="object"&&a.prefix&&a.iconName)return a;if(Array.isArray(a)&&a.length===2)return{prefix:a[0],iconName:a[1]};if(typeof a=="string")return{prefix:"fas",iconName:a}}var bi=Ka({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var e=n.attrs,r=P(function(){return Vt(t.icon)}),i=P(function(){return ea("classes",dr(t))}),o=P(function(){return ea("transform",typeof t.transform=="string"?Ma.transform(t.transform):t.transform)}),s=P(function(){return ea("mask",Vt(t.mask))}),c=P(function(){return Ke(r.value,E(E(E(E({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});bn(c,function(f){if(!f)return mr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var l=P(function(){return c.value?lt(c.value.abstract[0],{},e):null});return function(){return l.value}}});Ka({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var e=n.slots,r=dn.familyPrefix,i=P(function(){return["".concat(r,"-layers")].concat(Xa(t.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return Rt("div",{class:i.value},e.default?e.default():[])}}});Ka({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var e=n.attrs,r=dn.familyPrefix,i=P(function(){return ea("classes",[].concat(Xa(t.counter?["".concat(r,"-layers-counter")]:[]),Xa(t.position?["".concat(r,"-layers-").concat(t.position)]:[])))}),o=P(function(){return ea("transform",typeof t.transform=="string"?Ma.transform(t.transform):t.transform)}),s=P(function(){var l=Ze(t.value.toString(),E(E({},o.value),i.value)),f=l.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),c=P(function(){return lt(s.value,{},e)});return function(){return c.value}}});export{ai as $,pi as A,Ur as B,yr as C,Tr as D,wr as E,ni as F,fi as G,hr as H,Lr as I,Dr as J,ti as K,_r as L,Nr as M,gi as N,zr as O,li as P,Yr as Q,oi as R,Wr as S,mi as T,qr as U,Ir as V,jr as W,Xr as X,ci as Y,Vr as Z,$r as _,ii as a,Qe as a0,Ar as a1,bi as a2,si as b,Fr as c,Cr as d,Mr as e,kr as f,Br as g,ri as h,Er as i,Kr as j,Or as k,gr as l,vi as m,Pr as n,br as o,xr as p,ui as q,Jr as r,di as s,Gr as t,Hr as u,Sr as v,ei as w,Qr as x,Rr as y,Zr as z};
