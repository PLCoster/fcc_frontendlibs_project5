(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4792)}])},4792:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var r=t(5893),s=t(9008),i=t(7294),o=t(682),a=t(4184),c=t.n(a),l=t(6792);const u=i.forwardRef((({bsPrefix:e,className:n,as:t="div",...s},i)=>{const o=(0,l.vE)(e,"row"),a=(0,l.pi)(),u=`${o}-cols`,h=[];return a.forEach((e=>{const n=s[e];let t;delete s[e],null!=n&&"object"===typeof n?({cols:t}=n):t=n;const r="xs"!==e?`-${e}`:"";null!=t&&h.push(`${u}${r}-${t}`)})),(0,r.jsx)(t,{ref:i,...s,className:c()(n,o,...h)})}));u.displayName="Row";var h=u;const m=i.forwardRef(((e,n)=>{const[{className:t,...s},{as:i="div",bsPrefix:o,spans:a}]=function({as:e,bsPrefix:n,className:t,...r}){n=(0,l.vE)(n,"col");const s=(0,l.pi)(),i=[],o=[];return s.forEach((e=>{const t=r[e];let s,a,c;delete r[e],"object"===typeof t&&null!=t?({span:s,offset:a,order:c}=t):s=t;const l="xs"!==e?`-${e}`:"";s&&i.push(!0===s?`${n}${l}`:`${n}${l}-${s}`),null!=c&&o.push(`order${l}-${c}`),null!=a&&o.push(`offset${l}-${a}`)})),[{...r,className:c()(t,...i,...o)},{as:e,bsPrefix:n,spans:i}]}(e);return(0,r.jsx)(i,{...s,ref:n,className:c()(t,!a.length&&o)})}));m.displayName="Col";var d=m,f=t(5005);var x=function(e){var n=e.timerSeconds,t=e.timerPhase,i=e.timerRunning;return(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"".concat(n," ").concat(t,"  - Pomo-do-it")}),(0,r.jsx)("link",{rel:"icon",href:"/favicons"+("Session"===t?i?"/session-running.ico":"/session-paused.ico":i?"/break-running.ico":"/break-paused.ico")})]})},p=t(7208),j=t.n(p),S=t(7159),y=t.n(S);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function k(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,s,i=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(c){a=!0,s=c}finally{try{o||null==t.return||t.return()}finally{if(a)throw s}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(e){var n=e.timerPhase,t=e.history,s=e.handleClearHistoryClick,o=(0,i.useState)(!1),a=o[0],c=o[1],l=(0,i.useMemo)((function(){return t.reduce((function(e,n){var t=k(e,2),r=t[0],s=t[1],i=k(n,2),o=i[0],a=i[1];return"Session"===o?r+=a:s+=a,[r,s]}),[0,0])}),[t]),u=l[0],m=l[1],x=(0,i.useMemo)((function(){return t.map((function(e,n){var t,s=k(e,4),i=s[0],o=s[1],a=s[2],c=s[3];return(0,r.jsxs)(h,{className:"".concat(j().historyItem," ").concat("Session"===i?y().onSessionFont:y().onBreakFont," m-1 text-start"),children:[(0,r.jsx)(d,{xs:2,children:(0,r.jsxs)("div",{className:"".concat(j().historyItemTitle," d-flex flex-column justify-content-center"),children:[" ",(0,r.jsx)("h6",{children:i})]})}),(0,r.jsx)(d,{xs:4,children:(0,r.jsxs)("div",{className:"d-flex flex-column align-items-start",children:[(0,r.jsxs)("p",{className:"m-1 small",children:["Start:"," ",new Date(a).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]}),(0,r.jsxs)("p",{className:"m-1 small",children:["End:"," ",new Date(c).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})}),(0,r.jsx)(d,{xs:6,children:(0,r.jsxs)("div",{className:"d-flex align items-center flex-column",children:[(0,r.jsxs)("p",{className:"m-1 small",children:["Actual Duration: ",(t=c-a,Math.floor(t/6e4))," ","min(s)"]}),(0,r.jsxs)("p",{className:"m-1 small",children:["Timed Duration: ",Math.floor(o/60)," min(s)"]})]})})]},n)}))}),[t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Session History:"}),(0,r.jsxs)(h,{children:[(0,r.jsx)(d,{children:(0,r.jsxs)("h6",{children:["Session Time: ",Math.floor(u/60)," min(s)"]})}),(0,r.jsx)(d,{children:(0,r.jsxs)("h6",{children:["Break Time: ",Math.floor(m/60)," min(s)"]})})]}),(0,r.jsxs)(h,{className:"justify-content-center mt-2",children:[(0,r.jsx)(d,{xs:"auto",children:(0,r.jsxs)(f.Z,{id:"display_detailed_history",className:"".concat(y().timerButton," ").concat("Session"===n?y().onSessionFont:y().onBreakFont," btn-sm"),title:"".concat(a?"Hide ":"Display "," Detailed History"),onClick:function(){return c(!a)},onMouseLeave:function(e){e.target.blur()},children:[a?"Hide ":"Show "," Details"]})}),(0,r.jsx)(d,{xs:"auto",children:(0,r.jsx)(f.Z,{id:"clear_history",className:"".concat(y().timerButton," ").concat("Session"===n?y().onSessionFont:y().onBreakFont," btn-sm"),title:"Clear Session History",onClick:function(){return s()},onMouseLeave:function(e){e.target.blur()},children:"Clear History"})})]}),a?(0,r.jsx)("div",{className:"".concat(j().detailedHistoryContainer," d-flex flex-column align-items-center mt-3 mb-3"),children:x.length?x.reverse():"No History Yet!"}):null]})},b=t(8915),v=t.n(b);function N(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function C(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return N(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(){var e=(0,i.useState)(5),n=e[0],t=e[1],s=(0,i.useState)(25),a=s[0],c=s[1],l=(0,i.useState)(!1),u=l[0],m=l[1],p=(0,i.useState)(1500),j=p[0],S=p[1],g=(0,i.useRef)(1500),k=(0,i.useState)(null),b=k[0],N=k[1],w=(0,i.useState)("Session"),B=w[0],T=w[1],L=(0,i.useState)(!1),P=L[0],A=L[1],F=(0,i.useState)(!0),M=F[0],D=F[1],$=(0,i.useRef)(),E=(0,i.useRef)(),H=(0,i.useState)(!1),I=H[0],R=H[1],Z=(0,i.useRef)(0),O=(0,i.useRef)(null),Q=(0,i.useState)([]),z=Q[0],U=Q[1],X=function(e,r){var s=("Session"===r?a:n)+e;if(s>0&&s<61&&(("Session"===r?c:t)(s),!u&&B===r)){var i=60*s;S(i),g.current=i}},q=function(){O.current||(O.current=Date.now());var e=Date.now()+1e3,n=null,t=function(){g.current-=1,Z.current+=1,g.current>=0?(S(g.current),e+=1e3,n=setTimeout(t,e-Date.now()),N(n)):A(!0)};n=setTimeout(t,e-Date.now()),N(n)};(0,i.useEffect)((function(){if(P){u&&(Y(E),R(!0)),clearTimeout(b),O.current&&U(C(z).concat([[B,Z.current-1,O.current,Date.now()]]));var e="Session"===B?"Break":"Session";T(e),g.current=60*("Session"===e?a:n),Z.current=0,O.current=null,S(g.current),u&&M?q():m(!1),A(!1)}}),[P]);var J=function(e){return"".concat(Math.floor(e/60).toString().padStart(2,"0"),":").concat((e%60).toString().padStart(2,"0"))},Y=function(e){e.current.currentTime=0,e.current.play()};return(0,r.jsxs)(o.Z,{className:"".concat(v().appContainer," ").concat("Session"===B?v().onSession:v().onBreak),fluid:!0,children:[(0,r.jsx)(x,{timerSeconds:J(j),timerPhase:B,timerRunning:u}),(0,r.jsx)(h,{className:"justify-content-center",children:(0,r.jsx)(d,{xs:"auto",children:(0,r.jsxs)(o.Z,{className:v().timerContainer,children:[(0,r.jsx)("h1",{className:"display-6",children:"Pomo-do-it"}),(0,r.jsx)("hr",{}),(0,r.jsxs)(h,{className:"justify-content-center",children:[(0,r.jsx)(d,{xs:"auto",children:(0,r.jsxs)("h5",{id:"session-label",className:v().phaseLengthContainer,children:["Session Length:","  ",(0,r.jsx)(f.Z,{id:"session-decrement",title:"Decrement Session Length",onClick:function(){return X(-1,"Session")},onMouseLeave:function(e){e.target.blur()},className:v().phaseLengthButton,children:(0,r.jsx)("i",{className:"bi bi-arrow-down-circle-fill"})}),(0,r.jsx)("span",{id:"session-length",title:"Current Session Length",children:a}),(0,r.jsx)(f.Z,{id:"session-increment",title:"Increment Session Length",onClick:function(){return X(1,"Session")},onMouseLeave:function(e){e.target.blur()},className:v().phaseLengthButton,children:(0,r.jsx)("i",{className:"bi bi-arrow-up-circle-fill"})})]})}),(0,r.jsx)(d,{xs:"auto",children:(0,r.jsxs)("h5",{id:"break-label",className:v().phaseLengthContainer,children:["Break Length:","  ",(0,r.jsx)(f.Z,{id:"break-decrement",className:v().phaseLengthButton,title:"Decrement Break Length",onClick:function(e){X(-1,"Break")},onMouseLeave:function(e){e.target.blur()},children:(0,r.jsx)("i",{className:"bi bi-arrow-down-circle-fill"})}),(0,r.jsx)("span",{id:"break-length",title:"Current Break Length",children:n}),(0,r.jsx)(f.Z,{id:"break-increment",className:v().phaseLengthButton,title:"Increment Break Length",onClick:function(){X(1,"Break")},onMouseLeave:function(e){e.target.blur()},children:(0,r.jsx)("i",{className:"bi bi-arrow-up-circle-fill"})})]})})]}),(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsxs)("div",{className:"form-check form-switch",children:[(0,r.jsx)("input",{id:"auto-start-switch",className:"".concat(v().autoSwitch," form-check-input"),title:"Toggle whether or not to start next phase automatically",type:"checkbox",checked:M,onChange:function(){return D(!M)},onMouseLeave:function(e){e.target.blur()}}),(0,r.jsx)("label",{htmlFor:"auto-start-switch",children:"Auto-Start next phase when current phase ends"})]})}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:v().timerClockContainer,children:[(0,r.jsx)("h3",{id:"timer-label",children:"".concat(B," : ").concat(u?"Running":"Paused")}),(0,r.jsx)("h5",{children:" ".concat("Session"===B?"Time to focus!":"Time to relax!")}),(0,r.jsx)("h2",{id:"time-left",title:"Time Left in this Phase",className:"display-1",children:J(j)}),(0,r.jsxs)(h,{className:"justify-content-center",children:[(0,r.jsx)(d,{xs:"auto",children:(0,r.jsx)(f.Z,{id:"start_stop",className:"".concat(y().timerButton," ").concat("Session"===B?y().onSessionFont:y().onBreakFont),title:u?"Pause Current Timer":"Start Timer",onClick:function(){!function(){var e=!u;e?q():clearTimeout(b),m(e)}(),Y($)},onMouseLeave:function(e){e.target.blur()},children:u?"Pause":"Start"})}),(0,r.jsx)(d,{xs:"auto",children:(0,r.jsx)(f.Z,{id:"skip_phase",className:"".concat(y().timerButton," ").concat("Session"===B?y().onSessionFont:y().onBreakFont),title:"Session"===B?"Skip to Break":"Skip Break",onClick:function(){A(!0)},onMouseLeave:function(e){e.target.blur()},children:"Session"===B?"Skip to Break":"Skip Break"})}),(0,r.jsx)(d,{xs:"auto",children:(0,r.jsx)(f.Z,{id:"reset",className:"".concat(y().timerButton," ").concat("Session"===B?y().onSessionFont:y().onBreakFont),title:"Reset Timer to Initial Settings",onClick:function(){t(5),c(25),S(1500),g.current=1500,Z.current=0,O.current=null,clearTimeout(b),m(!1),T("Session"),A(!1),E.current.pause(),E.current.currentTime=0},onMouseLeave:function(e){e.target.blur()},children:"Reset"})})]})]}),(0,r.jsx)("hr",{}),(0,r.jsx)(_,{timerPhase:B,history:z,handleClearHistoryClick:function(){U([])}})]})})}),(0,r.jsx)("audio",{id:"click",ref:$,src:"/audio/fingersnap.mp3",title:"Timer Start/Stop Click Audio"}),(0,r.jsx)("audio",{id:"beep",ref:E,src:"/audio/watch_alarm.mp3",title:"Timer Phase End Beep Audio",onEnded:function(e){R(!1)},"data-playing":I})]})};function B(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("meta",{name:"description",content:"Pomodoro Timer App"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]}),(0,r.jsx)(w,{})]})}},7208:function(e){e.exports={detailedHistoryContainer:"HistoryDisplay_detailedHistoryContainer___FalC",historyItem:"HistoryDisplay_historyItem__xsmxq",historyItemTitle:"HistoryDisplay_historyItemTitle__QLAll"}},8915:function(e){e.exports={appContainer:"Timer_appContainer__l8Riz",onSession:"Timer_onSession__Zfbhm",onBreak:"Timer_onBreak__nQ_Qn",timerContainer:"Timer_timerContainer__4PhtQ",phaseLengthContainer:"Timer_phaseLengthContainer__hlQvc",phaseLengthButton:"Timer_phaseLengthButton__okkR1",autoSwitch:"Timer_autoSwitch__1APCN",timerClockContainer:"Timer_timerClockContainer__JcfEv"}},7159:function(e){e.exports={onSessionFont:"TimerButtons_onSessionFont__1DgCf",onBreakFont:"TimerButtons_onBreakFont__MwnP9",timerButton:"TimerButtons_timerButton__jDw1a"}},9008:function(e,n,t){e.exports=t(3121)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);