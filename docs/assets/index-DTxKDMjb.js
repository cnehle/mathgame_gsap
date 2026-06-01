var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=[{name:`star`,question:`Сколько звёздочек ты видишь?`,draw(e,t,n){return`<g transform="translate(${e},${t})">
        <g class="shape-anim" data-delay="${n}">
          <polygon points="0,-26 6,-10 24,-10 10,3 15,22 0,10 -15,22 -10,3 -24,-10 -6,-10"
            fill="#FFD93D" stroke="#c8880a" stroke-width="2.5"/>
          <ellipse cx="-5" cy="-9" rx="6" ry="5" fill="rgba(255,255,255,.4)" transform="rotate(-30,-5,-9)"/>
        </g>
      </g>`}},{name:`apple`,question:`Сколько яблок ты видишь?`,draw(e,t,n){return`<g transform="translate(${e},${t})">
        <g class="shape-anim" data-delay="${n}">
          <ellipse cx="0" cy="5" rx="20" ry="22" fill="#e74c3c" stroke="#922b21" stroke-width="2.5"/>
          <ellipse cx="-6" cy="-1" rx="7" ry="10" fill="rgba(255,255,255,.2)"/>
          <line x1="0" y1="-17" x2="0" y2="-27" stroke="#4a2c0a" stroke-width="3.5" stroke-linecap="round"/>
          <ellipse cx="7" cy="-25" rx="8" ry="6" fill="#27ae60" stroke="#1a6e3c" stroke-width="1.5" transform="rotate(-22,7,-25)"/>
        </g>
      </g>`}},{name:`balloon`,question:`Сколько шариков ты видишь?`,draw(e,t,n){return`<g transform="translate(${e},${t})">
        <g class="shape-anim" data-delay="${n}">
          <ellipse cx="0" cy="-5" rx="18" ry="22" fill="#C3B1E1" stroke="#7d5db5" stroke-width="2.5"/>
          <ellipse cx="-6" cy="-13" rx="6" ry="8" fill="rgba(255,255,255,.28)"/>
          <polygon points="0,17 -5,23 5,23" fill="#7d5db5"/>
          <path d="M0,23 Q6,29 0,37 Q-6,45 0,51" fill="none" stroke="#7d5db5" stroke-width="2"/>
        </g>
      </g>`}},{name:`fish`,question:`Сколько рыбок ты видишь?`,draw(e,t,n){return`<g transform="translate(${e},${t})">
        <g class="shape-anim" data-delay="${n}">
          <ellipse cx="-2" cy="0" rx="22" ry="14" fill="#6BFFB8" stroke="#1a7a56" stroke-width="2.5"/>
          <polygon points="20,0 33,-12 33,12" fill="#6BFFB8" stroke="#1a7a56" stroke-width="2.5"/>
          <circle cx="-12" cy="-4" r="4" fill="#1a7a56"/>
          <circle cx="-12" cy="-4" r="1.8" fill="white"/>
          <path d="M-4,-9 Q4,-14 12,-9" fill="none" stroke="#1a7a56" stroke-width="2"/>
        </g>
      </g>`}},{name:`flower`,question:`Сколько цветочков ты видишь?`,draw(e,t,n){return`<g transform="translate(${e},${t})">
        <g class="shape-anim" data-delay="${n}">
          <ellipse cx="0"   cy="-20" rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2"/>
          <ellipse cx="19"  cy="-6"  rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2" transform="rotate(72,19,-6)"/>
          <ellipse cx="12"  cy="16"  rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2" transform="rotate(144,12,16)"/>
          <ellipse cx="-12" cy="16"  rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2" transform="rotate(216,-12,16)"/>
          <ellipse cx="-19" cy="-6"  rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2" transform="rotate(288,-19,-6)"/>
          <circle cx="0" cy="0" r="12" fill="#FFD93D" stroke="#c8880a" stroke-width="2.5"/>
          <circle cx="-3" cy="-3" r="4" fill="rgba(255,255,255,.45)"/>
        </g>
      </g>`}},{name:`rocket`,question:`Сколько ракет ты видишь?`,draw(e,t,n){return`<g transform="translate(${e},${t})">
        <g class="shape-anim" data-delay="${n}">
          <ellipse cx="0" cy="-10" rx="10" ry="18" fill="#a29bfe" stroke="#6c5ce7" stroke-width="2"/>
          <polygon points="0,-28 -10,-10 10,-10" fill="#6c5ce7"/>
          <rect x="-4" y="-6" width="8" height="10" rx="3" fill="#74b9ff"/>
          <polygon points="-10,8 -18,20 -4,14" fill="#fd79a8"/>
          <polygon points="10,8 18,20 4,14" fill="#fd79a8"/>
          <ellipse cx="0" cy="18" rx="5" ry="8" fill="#fdcb6e" opacity=".9">
            <animate attributeName="ry" values="8;12;8" dur="0.3s" repeatCount="indefinite"/>
          </ellipse>
        </g>
      </g>`}}];function d(){return u[Math.floor(Math.random()*u.length)]}var f=600,p=28,m=50,h=24,g=p*2+h;function _(e,t,n,r=0){let i=t<=3?t:3,a=Math.ceil(t/i),o=a*g+m*2;e.setAttribute(`viewBox`,`0 0 ${f} ${o}`),e.removeAttribute(`width`),e.removeAttribute(`height`);let s=``;for(let e=0;e<t;e++){let o=Math.floor(e/i),c=e%i,l=(f-((o===a-1&&t%i!==0?t%i:i)*g-h))/2+p+c*g,u=m+o*g+p,d=(e*.08).toFixed(2);if(s+=n.draw(l,u,Number(d)),e>=t-r){let t=p-2,n=(e*.08+.35).toFixed(2);s+=`
        <line x1="${l-t}" y1="${u-t}" x2="${l+t}" y2="${u+t}"
          stroke="#FF6B9D" stroke-width="6" stroke-linecap="round"
          style="animation:popIn .3s ${n}s both"/>
        <line x1="${l+t}" y1="${u-t}" x2="${l-t}" y2="${u+t}"
          stroke="#FF6B9D" stroke-width="6" stroke-linecap="round"
          style="animation:popIn .3s ${n}s both"/>`}}e.innerHTML=s}var v={easy:{label:`Easy`,labelRu:`Лёгкий`,maxCount:5,useAddition:!1,useSubtraction:!1,timeLimit:null,drawingMode:!1},medium:{label:`Medium`,labelRu:`Средний`,maxCount:8,useAddition:!0,useSubtraction:!1,timeLimit:90,drawingMode:!1},hard:{label:`Hard`,labelRu:`Сложный`,maxCount:10,useAddition:!0,useSubtraction:!0,timeLimit:60,drawingMode:!1},drawing:{label:`Drawing`,labelRu:`Рисование`,maxCount:9,useAddition:!1,useSubtraction:!1,timeLimit:null,drawingMode:!0}},y=class{svgEl;constructor(e){this.svgEl=e}generate(e,t){let n=v[t];return n.drawingMode||!n.useAddition||e<3?this.makeCount(e,n.maxCount):!n.useSubtraction||e<6?Math.random()<.5?this.makeAdd(e,n.maxCount):this.makeCount(e,n.maxCount):Math.random()<.5?this.makeSub(e,n.maxCount):this.makeAdd(e,n.maxCount)}makeCount(e,t){let n=x(e<3?1:2,Math.min(t,e<3?5:e<6?8:9)),r=d();return _(this.svgEl,n,r),{text:r.question,answer:n}}makeAdd(e,t){let n=Math.min(t,e<6?7:10),r=x(1,Math.floor(n/2)),i=x(1,n-r),a=d();return _(this.svgEl,r+i,a),{text:`${r} + ${i} = ?`,answer:r+i}}makeSub(e,t){let n=x(4,Math.min(t,e<8?8:10)),r=x(1,n-1),i=d();return _(this.svgEl,n,i,r),{text:`${n} − ${r} = ?`,answer:n-r}}};function b(e){let t=[];for(;t.length<3;){let n=x(Math.max(0,e-3),Math.min(10,e+3));n!==e&&!t.includes(n)&&t.push(n)}return S([e,...t])}function x(e,t){return Math.floor(Math.random()*(t-e+1))+e}function S(e){return[...e].sort(()=>Math.random()-.5)}function C(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function w(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var T={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},E={duration:.5,overwrite:!1,delay:0},D,O,k,ee=1e8,A=1/ee,te=Math.PI*2,ne=te/4,re=0,ie=Math.sqrt,ae=Math.cos,oe=Math.sin,se=function(e){return typeof e==`string`},ce=function(e){return typeof e==`function`},le=function(e){return typeof e==`number`},ue=function(e){return e===void 0},de=function(e){return typeof e==`object`},fe=function(e){return e!==!1},pe=function(){return typeof window<`u`},me=function(e){return ce(e)||se(e)},he=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},ge=Array.isArray,_e=/random\([^)]+\)/g,ve=/,\s*/g,ye=/(?:-?\.?\d|\.)+/gi,be=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xe=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Se=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ce=/[+-]=-?[.\d]+/,we=/[^,'"\[\]\s]+/gi,Te=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ee,De,Oe,ke,Ae={},je={},Me,Ne=function(e){return(je=dt(e,Ae))&&jr},Pe=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},Fe=function(e,t){return!t&&console.warn(e)},Ie=function(e,t){return e&&(Ae[e]=t)&&je&&(je[e]=t)||Ae},Le=function(){return 0},Re={suppressEvents:!0,isStart:!0,kill:!1},ze={suppressEvents:!0,kill:!1},Be={suppressEvents:!0},Ve={},He=[],Ue={},We,Ge={},Ke={},qe=30,Je=[],Ye=``,Xe=function(e){var t=e[0],n,r;if(de(t)||ce(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Je.length;r--&&!Je[r].targetTest(t););n=Je[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Vn(e[r],n)))||e.splice(r,1);return e},Ze=function(e){return e._gsap||Xe(Jt(e))[0]._gsap},Qe=function(e,t,n){return(n=e[t])&&ce(n)?e[t]():ue(n)&&e.getAttribute&&e.getAttribute(t)||n},$e=function(e,t){return(e=e.split(`,`)).forEach(t)||e},et=function(e){return Math.round(e*1e5)/1e5||0},tt=function(e){return Math.round(e*1e7)/1e7||0},nt=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},rt=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},it=function(){var e=He.length,t=He.slice(0),n,r;for(Ue={},He.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},at=function(e){return!!(e._initted||e._startAt||e.add)},ot=function(e,t,n,r){He.length&&!O&&it(),e.render(t,n,r||!!(O&&t<0&&at(e))),He.length&&!O&&it()},st=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(we).length<2?t:se(e)?e.trim():e},ct=function(e){return e},lt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ut=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},dt=function(e,t){for(var n in t)e[n]=t[n];return e},ft=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=de(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},pt=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},mt=function(e){var t=e.parent||Ee,n=e.keyframes?ut(ge(e.keyframes)):lt;if(fe(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ht=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},gt=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},_t=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},vt=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},yt=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},bt=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xt=function(e,t,n,r){return e._startAt&&(O?e._startAt.revert(ze):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},St=function e(t){return!t||t._ts&&e(t.parent)},Ct=function(e){return e._repeat?wt(e._tTime,e=e.duration()+e._rDelay)*e:0},wt=function(e,t){var n=Math.floor(e=tt(e/t));return e&&n===e?n-1:n},Tt=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Et=function(e){return e._end=tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||A)||0))},Dt=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=tt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Et(e),n._dirty||yt(n,e)),e},Ot=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Tt(e.rawTime(),t),(!t._dur||Ht(0,t.totalDuration(),n)-t._tTime>A)&&t.render(n,!0)),yt(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-A}},kt=function(e,t,n,r){return t.parent&&vt(t),t._start=tt((le(n)?n:n||e!==Ee?zt(e,n,t):e._time)+t._delay),t._end=tt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),gt(e,t,`_first`,`_last`,e._sort?`_start`:0),Nt(t)||(e._recent=t),r||Ot(e,t),e._ts<0&&Dt(e,e._tTime),e},At=function(e,t){return(Ae.ScrollTrigger||Pe(`scrollTrigger`,t))&&Ae.ScrollTrigger.create(t,e)},jt=function(e,t,n,r,i){if(Xn(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!O&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&We!==Dn.frame)return He.push(e),e._lazy=[i,r],1},Mt=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Nt=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Pt=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&Mt(e)&&!(!e._initted&&Nt(e))||(e._ts<0||e._dp._ts<0)&&!Nt(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=Ht(0,e._tDur,t),l=wt(s,o),e._yoyo&&l&1&&(a=1-a),l!==wt(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||O||r||e._zTime===A||!t&&e._zTime){if(!e._initted&&jt(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?A:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&xt(e,t,n,!0),e._onUpdate&&!n&&fn(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&fn(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&vt(e,1),!n&&!O&&(fn(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},Ft=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},It=function(e,t,n,r){var i=e._repeat,a=tt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:tt(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Dt(e,e._tTime=e._tDur*o),e.parent&&Et(e),n||yt(e.parent,e),e},Lt=function(e){return e instanceof Un?yt(e):It(e,e._dur)},Rt={_start:0,endTime:Le,totalDuration:Le},zt=function e(t,n,r){var i=t.labels,a=t._recent||Rt,o=t.duration()>=ee?a.endTime(!1):t._dur,s,c,l;return se(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(ge(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},Bt=function(e,t,n){var r=le(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=fe(s.vars.inherit)&&s.parent;a.immediateRender=fe(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new rr(t[0],a,t[i+1])},Vt=function(e,t){return e||e===0?t(e):t},Ht=function(e,t,n){return n<e?e:n>t?t:n},Ut=function(e,t){return!se(e)||!(t=Te.exec(e))?``:t[1]},Wt=function(e,t,n){return Vt(n,function(n){return Ht(e,t,n)})},Gt=[].slice,Kt=function(e,t){return e&&de(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&de(e[0]))&&!e.nodeType&&e!==De},qt=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return se(e)&&!t||Kt(e,1)?(r=n).push.apply(r,Jt(e)):n.push(e)})||n},Jt=function(e,t,n){return k&&!t&&k.selector?k.selector(e):se(e)&&!n&&(Oe||!On())?Gt.call((t||ke).querySelectorAll(e),0):ge(e)?qt(e,n):Kt(e)?Gt.call(e,0):e?[e]:[]},Yt=function(e){return e=Jt(e)[0]||Fe(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return Jt(t,n.querySelectorAll?n:n===e?Fe(`Invalid scope`)||ke.createElement(`div`):e)}},Xt=function(e){return e.sort(function(){return .5-Math.random()})},Zt=function(e){if(ce(e))return e;var t=de(e)?e:{each:e},n=In(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return se(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,ee])[1],!S){for(b=-ee;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===ee?0:s?f*u/S-.5:r/S|0,b=0,x=ee,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):ie(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&Xt(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=Ut(t.amount||t.each)||0,n=n&&f<0?Fn(n):n}return f=(p[e]-p.min)/p.max||0,tt(p.b+(n?n(f):f)*p.v)+p.u}},Qt=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=tt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(le(n)?0:Ut(n))}},$t=function(e,t){var n=ge(e),r,i;return!n&&de(e)&&(r=n=e.radius||ee,e.values?(e=Jt(e.values),(i=!le(e[0]))&&(r*=r)):e=Qt(e.increment)),Vt(t,n?ce(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=ee,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||le(t)?s:s+Ut(t)}:Qt(e))},en=function(e,t,n,r){return Vt(ge(e)?!t:n===!0?!!(n=0):!r,function(){return ge(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},tn=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},nn=function(e,t){return function(n){return e(parseFloat(n))+(t||Ut(n))}},rn=function(e,t,n){return ln(e,t,0,1,n)},an=function(e,t,n){return Vt(n,function(n){return e[~~t(n)]})},on=function e(t,n,r){var i=n-t;return ge(t)?an(t,e(0,t.length),n):Vt(r,function(e){return(i+(e-t)%i)%i+t})},sn=function e(t,n,r){var i=n-t,a=i*2;return ge(t)?an(t,e(0,t.length-1),n):Vt(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},cn=function(e){return e.replace(_e,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(ve);return en(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},ln=function(e,t,n,r,i){var a=t-e,o=r-n;return Vt(i,function(t){return n+((t-e)/a*o||0)})},un=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=se(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(ge(t)&&!ge(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=dt(ge(t)?[]:{},t));if(!u){for(c in n)Gn.call(s,t,c,`get`,n[c]);a=function(e){return fr(e,s)||(o?t.p:t)}}}return Vt(r,a)},dn=function(e,t,n){var r=e.labels,i=ee,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},fn=function(e,t,n){var r=e.vars,i=r[t],a=k,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&He.length&&it(),o&&(k=o),l=s?i.apply(c,s):i.call(c),k=a,l},pn=function(e){return vt(e),e.scrollTrigger&&e.scrollTrigger.kill(!!O),e.progress()<1&&fn(e,`onInterrupt`),e},mn,hn=[],gn=function(e){if(e)if(e=!e.name&&e.default||e,pe()||e.headless){var t=e.name,n=ce(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:Le,render:fr,add:Gn,kill:mr,modifier:pr,rawVars:0},a={targetTest:0,get:0,getSetter:cr,aliases:{},register:0};if(On(),e!==r){if(Ge[t])return;lt(r,lt(pt(e,i),a)),dt(r.prototype,dt(i,pt(e,a))),Ge[r.prop=t]=r,e.targetTest&&(Je.push(r),Ve[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}Ie(t,r),e.register&&e.register(jr,r,_r)}else hn.push(e)},_n=255,vn={aqua:[0,_n,_n],lime:[0,_n,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_n],navy:[0,0,128],white:[_n,_n,_n],olive:[128,128,0],yellow:[_n,_n,0],orange:[_n,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_n,0,0],pink:[_n,192,203],cyan:[0,_n,_n],transparent:[_n,_n,_n,0]},yn=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_n+.5|0},bn=function(e,t,n){var r=e?le(e)?[e>>16,e>>8&_n,e&_n]:0:vn.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),vn[e])r=vn[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&_n,r&_n,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&_n,e&_n]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(ye),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=yn(s+1/3,i,a),r[1]=yn(s,i,a),r[2]=yn(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(be),n&&r.length<4&&(r[3]=1),r}else r=e.match(ye)||vn.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/_n,a=r[1]/_n,o=r[2]/_n,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},xn=function(e){var t=[],n=[],r=-1;return e.split(Cn).forEach(function(e){var i=e.match(xe)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Sn=function(e,t,n){var r=``,i=(e+r).match(Cn),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=bn(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=xn(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Cn,`1`).split(xe),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Cn),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Cn=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in vn)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),wn=/hsl[a]?\(/,Tn=function(e){var t=e.join(` `),n;if(Cn.lastIndex=0,Cn.test(t))return n=wn.test(t),e[1]=Sn(e[1],n),e[0]=Sn(e[0],n,xn(e[1])),!0},En,Dn=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){Me&&(!Oe&&pe()&&(De=Oe=window,ke=De.document||{},Ae.gsap=jr,(De.gsapVersions||=[]).push(jr.version),Ne(je||De.GreenSockGlobals||!De.gsap&&De||{}),hn.forEach(gn)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},En=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),En=0,l=Le},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),On(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),On=function(){return!En&&Dn.wake()},kn={},An=/^[\d.\-M][\d.\-,\s]/,jn=/["']/g,Mn=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(jn,``).trim():+c,r=s.substr(o+1).trim();return t},Nn=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Pn=function(e){var t=(e+``).split(`(`),n=kn[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Mn(t[1])]:Nn(e).split(`,`).map(st)):kn._CE&&An.test(e)?kn._CE(``,e):n},Fn=function(e){return function(t){return 1-e(1-t)}},In=function(e,t){return e&&(ce(e)?e:kn[e]||Pn(e))||t},Ln=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return $e(e,function(e){for(var t in kn[e]=Ae[e]=i,kn[a=e.toLowerCase()]=n,i)kn[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=kn[e+`.`+t]=i[t]}),i},Rn=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zn=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/te*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*oe((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Rn(s);return a=te/a,c.config=function(n,r){return e(t,n,r)},c},Bn=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Rn(r);return i.config=function(n){return e(t,n)},i};$e(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Ln(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),kn.Linear.easeNone=kn.none=kn.Linear.easeIn,Ln(`Elastic`,zn(`in`),zn(`out`),zn()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Ln(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Ln(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Ln(`Circ`,function(e){return-(ie(1-e*e)-1)}),Ln(`Sine`,function(e){return e===1?1:-ae(e*ne)+1}),Ln(`Back`,Bn(`in`),Bn(`out`),Bn()),kn.SteppedEase=kn.steps=Ae.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-A;return function(e){return((r*Ht(0,a,e)|0)+i)*n}}},E.ease=kn[`quad.out`],$e(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return Ye+=e+`,`+e+`Params,`});var Vn=function(e,t){this.id=re++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qe,this.set=t?t.getSetter:cr},Hn=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,It(this,+e.duration,1,1),this.data=e.data,k&&(this._ctx=k,k.data.push(this)),En||Dn.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,It(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(On(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Dt(this,e),!n._dp||n.parent||Ot(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&kt(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===A||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),ot(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Ct(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Ct(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?wt(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-A?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Tt(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-A?0:this._rts,this.totalTime(Ht(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),Et(this),bt(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(On(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==A&&(this._tTime-=A)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=tt(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&kt(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(fe(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Tt(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=Be);var t=O;return O=e,at(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),O=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,Lt(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,Lt(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(zt(this,e),fe(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,fe(t)),this._dur||(this._zTime=-A),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-A:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-A,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-A)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=ce(e)?e:ct,a=function(){var e=t.then;t.then=null,n&&n(),ce(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){pn(this)},e}();lt(Hn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-A,_prom:0,_ps:!1,_rts:1});var Un=function(e){w(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=fe(t.sortChildren),Ee&&kt(t.parent||Ee,C(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&At(C(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return Bt(0,arguments,this),this},n.from=function(e,t,n){return Bt(1,arguments,this),this},n.fromTo=function(e,t,n,r){return Bt(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,mt(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new rr(e,t,zt(this,n),1),this},n.call=function(e,t,n){return kt(this,rr.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new rr(e,n,zt(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,mt(n).immediateRender=fe(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,mt(r).immediateRender=fe(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:tt(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==Ee&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=tt(o%f),o===i?(d=this._repeat,c=a):(_=tt(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=wt(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:tt(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&fn(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=Ft(this,tt(r),tt(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(fn(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-A);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||O&&at(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-A:A);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-A)._zTime=c>=r?1:-1,this._ts))return this._start=g,Et(this),this.render(e,t,n);this._onUpdate&&!t&&fn(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&vt(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(fn(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(le(t)||(t=zt(this,t,e)),!(e instanceof Hn)){if(ge(e))return e.forEach(function(e){return n.add(e,t)}),this;if(se(e))return this.addLabel(e,t);if(ce(e))e=rr.delayedCall(0,e);else return this}return this===e?this:kt(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-ee);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof rr?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return se(e)?this.removeLabel(e):ce(e)?this.killTweensOf(e):(e.parent===this&&_t(this,e),e===this._recent&&(this._recent=this._last),yt(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=tt(Dn.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=zt(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=rr.delayedCall(0,t||Le,n);return r.data=`isPause`,this._hasPause=1,kt(this,r,zt(this,e))},n.removePause=function(e){var t=this._first;for(e=zt(this,e);t;)t._start===e&&t.data===`isPause`&&vt(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)Jn!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=Jt(e),i=this._first,a=le(t),o;i;)i instanceof rr?rt(i._targets,r)&&(a?(!Jn||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=zt(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=rr.to(n,lt({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||A,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&It(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,lt({startAt:{time:zt(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),dn(this,zt(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),dn(this,zt(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+A)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=tt(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return yt(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),yt(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=ee,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,kt(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=tt(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;It(n,n===Ee&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(Ee._ts&&(ot(Ee,Tt(e,Ee)),We=Dn.frame),Dn.frame>=qe){qe+=T.autoSleep||120;var t=Ee._first;if((!t||!t._ts)&&T.autoSleep&&Dn._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Dn.sleep()}}},t}(Hn);lt(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var Wn=function(e,t,n,r,i,a,o){var s=new _r(this._pt,e,t,0,1,dr,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=cn(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(Se)||[];u=Se.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?nt(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=Se.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(Ce.test(r)||g)&&(s.e=0),this._pt=s,s},Gn=function(e,t,n,r,i,a,o,s,c,l){ce(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?ce(u)?c?e[t.indexOf(`set`)||!ce(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=ce(u)?c?or:ar:ir,p;if(se(r)&&(~r.indexOf(`random(`)&&(r=cn(r)),r.charAt(1)===`=`&&(p=nt(d,r)+(Ut(d)||0),(p||p===0)&&(r=p))),!l||d!==r||Yn)return!isNaN(d*r)&&r!==``?(p=new _r(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?ur:lr,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&Pe(t,r),Wn.call(this,e,t,d,r,f,s||T.stringFilter,c))},Kn=function(e,t,n,r,i){if(ce(e)&&(e=er(e,i,t,n,r)),!de(e)||e.style&&e.nodeType||ge(e)||he(e))return se(e)?er(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=er(e[o],i,t,n,r);return a},qn=function(e,t,n,r,i,a){var o,s,c,l;if(Ge[e]&&(o=new Ge[e]).init(i,o.rawVars?t[e]:Kn(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new _r(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==mn))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},Jn,Yn,Xn=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!D,b=t.timeline,x=i.easeReverse||d,S,C,w,T,k,te,ne,re,ie,ae,oe,se,ce;if(b&&(!f||!a)&&(a=`none`),t._ease=In(a,E.ease),t._rEase=x&&(In(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(re=g[0]?Ze(g[0]).harness:0,se=re&&i[re.prop],S=pt(i,Ve),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?ze:Re),h._lazy=0),o){if(vt(t._startAt=rr.set(g,lt({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&fe(c),startAt:null,delay:0,onUpdate:l&&function(){return fn(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(O||!s&&!p)&&t._startAt.revert(ze),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=lt({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&fe(c),immediateRender:s,stagger:0,parent:_},S),se&&(w[re.prop]=se),vt(t._startAt=rr.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(O?t._startAt.revert(ze):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,A,A);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&fe(c)||c&&!m,C=0;C<g.length;C++){if(k=g[C],ne=k._gsap||Xe(g)[C]._gsap,t._ptLookup[C]=ae={},Ue[ne.id]&&He.length&&it(),oe=v===g?C:v.indexOf(k),re&&(ie=new re).init(k,se||S,t,oe,v)!==!1&&(t._pt=T=new _r(t._pt,k,ie.name,0,1,ie.render,ie,0,ie.priority),ie._props.forEach(function(e){ae[e]=T}),ie.priority&&(te=1)),!re||se)for(w in S)Ge[w]&&(ie=qn(w,S,t,oe,k,v))?ie.priority&&(te=1):ae[w]=T=Gn.call(t,k,w,`get`,S[w],oe,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(k,t._op[C]),y&&t._pt&&(Jn=t,Ee.killTweensOf(k,ae,t.globalTime(n)),ce=!t.parent,Jn=0),t._pt&&c&&(Ue[ne.id]=1)}te&&gr(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!ce,f&&n<=0&&b.render(ee,!0,!0)},Zn=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return Yn=1,e.vars[t]=`+=0`,Xn(e,o),Yn=0,s?Fe(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&=et(n)+Ut(u.e),u.b&&=l.s+Ut(u.b)},Qn=function(e,t){var n=e[0]?Ze(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=dt({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},$n=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(ge(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},er=function(e,t,n,r,i){return ce(e)?e.call(t,n,r,i):se(e)&&~e.indexOf(`random(`)?cn(e):e},tr=Ye+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,nr={};$e(tr+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return nr[e]=1});var rr=function(e){w(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:mt(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||Ee,g=(ge(t)||he(t)?le(t[0]):`length`in n)?[t]:Jt(t),_,v,y,b,x,S,w,E;if(a._targets=g.length?Xe(g):Fe(`GSAP target `+t+` not found. https://gsap.com`,!T.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||me(s)||me(c)){n=a.vars;var O=n.easeReverse||n.yoyoEase;if(_=a.timeline=new Un({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=C(a),_._start=0,u||me(s)||me(c)){if(b=g.length,w=u&&Zt(u),de(u))for(x in u)~tr.indexOf(x)&&(E||={},E[x]=u[x]);for(v=0;v<b;v++)y=pt(n,nr),y.stagger=0,O&&(y.easeReverse=O),E&&dt(y,E),S=g[v],y.duration=+er(s,C(a),v,S,g),y.delay=(+er(c,C(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,w?w(v,S,g):0),_._ease=kn.none;_.duration()?s=c=0:a.timeline=0}else if(f){mt(lt(_.vars.defaults,{ease:`none`})),_._ease=In(f.ease||n.ease||`none`);var k=0,ee,te,ne;if(ge(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||$n(x,f[x],y,f.easeEach);for(x in y)for(ee=y[x].sort(function(e,t){return e.t-t.t}),k=0,v=0;v<ee.length;v++)te=ee[v],ne={ease:te.e,duration:(te.t-(v?ee[v-1].t:0))/100*s},ne[x]=te.v,_.to(g,ne,k),k+=ne.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!D&&(Jn=C(a),Ee.killTweensOf(g),Jn=0),kt(h,C(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===tt(h._time)&&fe(l)&&St(C(a))&&h.data!==`nested`)&&(a._tTime=-A,a.render(Math.max(0,-c)||0)),m&&At(C(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-A&&!o?i:e<A?0:e,c,l,u,d,f,p,m,h;if(!a)Pt(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=tt(s%d),s===i?(u=this._repeat,c=a):(f=tt(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=wt(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(tt(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(jt(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(fn(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&xt(this,e,t,n),fn(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&fn(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&xt(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&vt(this,1),!t&&!(o&&!r)&&(s||r||p)&&(fn(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){En||Dn.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||Xn(this,a),o=this._ease(a/this._dur),Zn(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Dt(this,0),this.parent||gt(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?pn(this):this.scrollTrigger&&this.scrollTrigger.kill(!!O),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,Jn&&Jn.vars.overwrite!==!0)._first||pn(this),this.parent&&n!==this.timeline.totalDuration()&&It(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?Jt(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&ht(r,i))return t===`all`&&(this._pt=0),pn(this);for(s=this._op=this._op||[],t!==`all`&&(se(t)&&(d={},$e(t,function(e){return d[e]=1}),t=d),t=Qn(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&_t(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&pn(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return Bt(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return Bt(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return Ee.killTweensOf(e,t,n)},t}(Hn);lt(rr.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),$e(`staggerTo,staggerFrom,staggerFromTo`,function(e){rr[e]=function(){var t=new Un,n=Gt.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var ir=function(e,t,n){return e[t]=n},ar=function(e,t,n){return e[t](n)},or=function(e,t,n,r){return e[t](r.fp,n)},sr=function(e,t,n){return e.setAttribute(t,n)},cr=function(e,t){return ce(e[t])?ar:ue(e[t])&&e.setAttribute?sr:ir},lr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ur=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},dr=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},fr=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},pr=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},mr=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?_t(this,t,`_pt`):t.dep||(n=1),t=r;return!n},hr=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},gr=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},_r=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||lr,this.d=o||this,this.set=s||ir,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=hr,this.m=e,this.mt=n,this.tween=t},e}();$e(Ye+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return Ve[e]=1}),Ae.TweenMax=Ae.TweenLite=rr,Ae.TimelineLite=Ae.TimelineMax=Un,Ee=new Un({sortChildren:!1,defaults:E,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),T.stringFilter=Tn;var vr=[],yr={},br=[],xr=0,Sr=0,Cr=function(e){return(yr[e]||br).map(function(e){return e()})},wr=function(){var e=Date.now(),t=[];e-xr>2&&(Cr(`matchMediaInit`),vr.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=De.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Cr(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),xr=e,Cr(`matchMedia`))},Tr=function(){function e(e,t){this.selector=t&&Yt(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Sr++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){ce(e)&&(n=t,t=e,e=ce);var r=this,i=function(){var e=k,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=Yt(n)),k=r,a=t.apply(r,arguments),ce(a)&&r._r.push(a),k=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===ce?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=k;k=null,e(this),k=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof rr&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof Un?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof rr)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=vr.length;r--;)vr[r].id===this.id&&vr.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Er=function(){function e(e){this.contexts=[],this.scope=e,k&&k.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){de(e)||(e={matches:e});var r=new Tr(0,n||this.scope),i=r.conditions={},a,o,s;for(o in k&&!r.selector&&(r.selector=k.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=De.matchMedia(e[o]),a&&(vr.indexOf(r)<0&&vr.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(wr):a.addEventListener(`change`,wr)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Dr={registerPlugin:function(){[...arguments].forEach(function(e){return gn(e)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return Ee.getTweensOf(e,t)},getProperty:function(e,t,n,r){se(e)&&(e=Jt(e)[0]);var i=Ze(e||{}).get,a=n?ct:st;return n===`native`&&(n=``),e&&(t?a((Ge[t]&&Ge[t].get||i)(e,t,n,r)):function(t,n,r){return a((Ge[t]&&Ge[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=Jt(e),e.length>1){var r=e.map(function(e){return jr.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Ge[t],o=Ze(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;mn._pt=0,r.init(e,n?t+n:t,mn,0,[e]),r.render(1,r),mn._pt&&fr(1,mn)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=jr.to(e,lt((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return Ee.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=In(e.ease,E.ease)),ft(E,e||{})},config:function(e){return ft(T,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!Ge[e]&&!Ae[e]&&Fe(t+` effect requires `+e+` plugin.`)}),Ke[t]=function(e,t,r){return n(Jt(e),lt(t||{},i),r)},a&&(Un.prototype[t]=function(e,n,r){return this.add(Ke[t](e,de(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){kn[e]=In(t)},parseEase:function(e,t){return arguments.length?In(e,t):kn},getById:function(e){return Ee.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Un(e),r,i;for(n.smoothChildTiming=fe(e.smoothChildTiming),Ee.remove(n),n._dp=0,n._time=n._tTime=Ee._time,r=Ee._first;r;)i=r._next,(t||!(!r._dur&&r instanceof rr&&r.vars.onComplete===r._targets[0]))&&kt(n,r,r._start-r._delay),r=i;return kt(Ee,n,0),n},context:function(e,t){return e?new Tr(e,t):k},matchMedia:function(e){return new Er(e)},matchMediaRefresh:function(){return vr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||wr()},addEventListener:function(e,t){var n=yr[e]||(yr[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=yr[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:on,wrapYoyo:sn,distribute:Zt,random:en,snap:$t,normalize:rn,getUnit:Ut,clamp:Wt,splitColor:bn,toArray:Jt,selector:Yt,mapRange:ln,pipe:tn,unitize:nn,interpolate:un,shuffle:Xt},install:Ne,effects:Ke,ticker:Dn,updateRoot:Un.updateRoot,plugins:Ge,globalTimeline:Ee,core:{PropTween:_r,globals:Ie,Tween:rr,Timeline:Un,Animation:Hn,getCache:Ze,_removeLinkedListItem:_t,reverting:function(){return O},context:function(e){return e&&k&&(k.data.push(e),e._ctx=k),k},suppressOverwrites:function(e){return D=e}}};$e(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Dr[e]=rr[e]}),Dn.add(Un.updateRoot),mn=Dr.to({},{duration:0});var Or=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},kr=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Or(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Ar=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(se(n)&&(r={},$e(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}kr(e,n)}}}},jr=Dr.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)O?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ar(`roundProps`,Qt),Ar(`modifiers`),Ar(`snap`,$t))||Dr;rr.version=Un.version=jr.version=`3.15.0`,Me=1,pe()&&On(),kn.Power0,kn.Power1,kn.Power2,kn.Power3,kn.Power4,kn.Linear,kn.Quad,kn.Cubic,kn.Quart,kn.Quint,kn.Strong,kn.Elastic,kn.Back,kn.SteppedEase,kn.Bounce,kn.Sine,kn.Expo,kn.Circ;var Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr=function(){return typeof window<`u`},Br={},Vr=180/Math.PI,Hr=Math.PI/180,Ur=Math.atan2,Wr=1e8,Gr=/([A-Z])/g,Kr=/(left|right|width|margin|padding|x)/i,qr=/[\s,\(]\S/,Jr={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},Yr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xr=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zr=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Qr=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$r=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ei=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ti=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},ni=function(e,t,n){return e.style[t]=n},ri=function(e,t,n){return e.style.setProperty(t,n)},ii=function(e,t,n){return e._gsap[t]=n},ai=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},oi=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},si=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},ci=`transform`,li=ci+`Origin`,ui=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in Br&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=Jr[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=ki(i,e)}):this.tfm[t]=o.x?o[t]:ki(i,t),t===li&&(this.tfm.zOrigin=o.zOrigin);else return Jr.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(ci)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(li,n,``)),t=ci}(a||n)&&this.props.push(t,n,a[t])},di=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},fi=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,i,a;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(Gr,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=Rr(),(!i||!i.isStart)&&!n[ci]&&(di(n),r.zOrigin&&n[li]&&(n[li]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},pi=function(e,t){var n={target:e,props:[],revert:fi,save:ui};return e._gsap||jr.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},mi,hi=function(e,t){var n=Nr.createElementNS?Nr.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Nr.createElement(e);return n&&n.style?n:Nr.createElement(e)},gi=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(Gr,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,vi(n)||n,1)||``},_i=`O,Moz,ms,Ms,Webkit`.split(`,`),vi=function(e,t,n){var r=(t||Ir).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(_i[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?_i[i]:``)+e},yi=function(){zr()&&window.document&&(Mr=window,Nr=Mr.document,Pr=Nr.documentElement,Ir=hi(`div`)||{style:{}},hi(`div`),ci=vi(ci),li=ci+`Origin`,Ir.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,mi=!!vi(`perspective`),Rr=jr.core.reverting,Fr=1)},bi=function(e){var t=e.ownerSVGElement,n=hi(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),Pr.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),Pr.removeChild(n),i},xi=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Si=function(e){var t,n;try{t=e.getBBox()}catch{t=bi(e),n=1}return t&&(t.width||t.height)||n||(t=bi(e)),t&&!t.width&&!t.x&&!t.y?{x:+xi(e,[`x`,`cx`,`x1`])||0,y:+xi(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Ci=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Si(e))},wi=function(e,t){if(t){var n=e.style,r;t in Br&&t!==li&&(t=ci),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(Gr,`-$1`).toLowerCase())):n.removeAttribute(t)}},Ti=function(e,t,n,r,i,a){var o=new _r(e._pt,t,n,0,1,a?ti:ei);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Ei={deg:1,rad:1,turn:1},Di={grid:1,flex:1},Oi=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Ir.style,c=Kr.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Ei[i]||Ei[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Ci(t),(p||o===`%`)&&(Br[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],et(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===Nr||!h.appendChild)&&(h=Nr.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Dn.time&&!g.uncache)return et(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:wi(t,n)}else (p||o===`%`)&&!Di[gi(h,`display`)]&&(s.position=gi(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Ir),m=Ir[u],h.removeChild(Ir),s.position=`absolute`;return c&&p&&(g=Ze(h),g.time=Dn.time,g.width=h[u]),et(f?m*a/d:m&&a?d/m*a:0)},ki=function(e,t,n,r){var i;return Fr||yi(),t in Jr&&t!==`transform`&&(t=Jr[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),Br[t]&&t!==`transform`?(i=Vi(e,r),i=t===`transformOrigin`?i.svg?i.origin:Hi(gi(e,li))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=Pi[t]&&Pi[t](e,t,n)||gi(e,t)||Qe(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Oi(e,t,i,n)+n:i},Ai=function(e,t,n,r){if(!n||n===`none`){var i=vi(t,e,1),a=i&&gi(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=gi(e,`borderTopColor`))}var o=new _r(this._pt,e.style,t,0,1,dr),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=gi(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=gi(e,t)||r,m?e.style[t]=m:wi(e,t)),l=[n,r],Tn(l),n=l[0],r=l[1],d=n.match(xe)||[],b=r.match(xe)||[],b.length){for(;u=xe.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=nt(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=xe.lastIndex-v.length,v||(v=v||T.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=Oi(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?ti:ei;return Ce.test(r)&&(o.e=0),this._pt=o,o},ji={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},Mi=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=ji[n]||n,t[1]=ji[r]||r,t.join(` `)},Ni=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],Br[o]&&(s=1,o=o===`transformOrigin`?li:ci),wi(n,o);s&&(wi(n,ci),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,Vi(n,1),a.uncache=1,di(r)))}},Pi={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new _r(e._pt,t,n,0,0,Ni);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Fi=[1,0,0,1,0,0],Ii={},Li=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},Ri=function(e){var t=gi(e,ci);return Li(t)?Fi:t.substr(7).match(be).map(et)},zi=function(e,t){var n=e._gsap||Ze(e),r=e.style,i=Ri(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?Fi:i):(i===Fi&&!e.offsetParent&&e!==Pr&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Pr.appendChild(e)),i=Ri(e),s?r.display=s:wi(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Pr.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},Bi=function(e,t,n,r,i,a){var o=e._gsap,s=i||zi(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==Fi&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Si(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[li]=`0px 0px`,a&&(Ti(a,o,`xOrigin`,c,y),Ti(a,o,`yOrigin`,l,b),Ti(a,o,`xOffset`,u,o.xOffset),Ti(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},Vi=function(e,t){var n=e._gsap||new Vn(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=gi(e,li)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,E,D,O,k,ee,A,te,ne,re,ie,ae,oe,se,ce,le,ue;return n.svg=!!(e.getCTM&&Ci(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[ci]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[ci]===`none`?``:s[ci])),r.scale=r.rotate=r.translate=`none`),S=zi(e,n.svg),n.svg&&(n.uncache?(re=e.getBBox(),c=n.xOrigin-re.x+`px `+(n.yOrigin-re.y)+`px`,ne=``):ne=!t&&e.getAttribute(`data-svg-origin`),Bi(e,ne||c,!!ne||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==Fi&&(D=S[0],O=S[1],k=S[2],ee=S[3],l=A=S[4],u=te=S[5],S.length===6?(f=Math.sqrt(D*D+O*O),p=Math.sqrt(ee*ee+k*k),m=D||O?Ur(O,D)*Vr:0,_=k||ee?Ur(k,ee)*Vr+m:0,_&&(p*=Math.abs(Math.cos(_*Hr))),n.svg&&(l-=b-(b*D+x*k),u-=x-(b*O+x*ee))):(ue=S[6],ce=S[7],ae=S[8],oe=S[9],se=S[10],le=S[11],l=S[12],u=S[13],d=S[14],C=Ur(ue,se),h=C*Vr,C&&(w=Math.cos(-C),E=Math.sin(-C),ne=A*w+ae*E,re=te*w+oe*E,ie=ue*w+se*E,ae=A*-E+ae*w,oe=te*-E+oe*w,se=ue*-E+se*w,le=ce*-E+le*w,A=ne,te=re,ue=ie),C=Ur(-k,se),g=C*Vr,C&&(w=Math.cos(-C),E=Math.sin(-C),ne=D*w-ae*E,re=O*w-oe*E,ie=k*w-se*E,le=ee*E+le*w,D=ne,O=re,k=ie),C=Ur(O,D),m=C*Vr,C&&(w=Math.cos(C),E=Math.sin(C),ne=D*w+O*E,re=A*w+te*E,O=O*w-D*E,te=te*w-A*E,D=ne,A=re),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=et(Math.sqrt(D*D+O*O+k*k)),p=et(Math.sqrt(te*te+ue*ue)),C=Ur(A,te),_=Math.abs(C)>2e-4?C*Vr:0,y=le?1/(le<0?-le:le):0),n.svg&&(ne=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!Li(gi(e,ci)),ne&&e.setAttribute(`transform`,ne))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=et(f),n.scaleY=et(p),n.rotation=et(m)+o,n.rotationX=et(h)+o,n.rotationY=et(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[li]=Hi(c)),n.xOffset=n.yOffset=0,n.force3D=T.force3D,n.renderTransform=n.svg?Yi:mi?Ji:Wi,n.uncache=0,n},Hi=function(e){return(e=e.split(` `))[0]+` `+e[1]},Ui=function(e,t,n){var r=Ut(t);return et(parseFloat(t)+parseFloat(Oi(e,`x`,n+`px`,r)))+r},Wi=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,Ji(e,t)},Gi=`0deg`,Ki=`0px`,qi=`) `,Ji=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==Gi||l!==Gi)){var x=parseFloat(l)*Hr,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*Hr,w=Math.cos(x),a=Ui(_,a,S*w*-v),o=Ui(_,o,-Math.sin(x)*-v),s=Ui(_,s,C*w*-v+v)}h!==Ki&&(y+=`perspective(`+h+qi),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==Ki||o!==Ki||s!==Ki)&&(y+=s!==Ki||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+qi),c!==Gi&&(y+=`rotate(`+c+qi),l!==Gi&&(y+=`rotateY(`+l+qi),u!==Gi&&(y+=`rotateX(`+u+qi),(d!==Gi||f!==Gi)&&(y+=`skew(`+d+`, `+f+qi),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+qi),_.style[ci]=y||`translate(0, 0)`},Yi=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=Hr,c*=Hr,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=Hr,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=et(b),x=et(x),S=et(S),C=et(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Oi(f,`x`,a,`px`),y=Oi(f,`y`,o,`px`)),(p||m||h||g)&&(v=et(v+p-(p*b+m*S)+h),y=et(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=et(v+r/100*w.width),y=et(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[ci]=w)},Xi=function(e,t,n,r,i){var a=360,o=se(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?Vr:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*Wr)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*Wr)%a-~~(s/a)*a)),e._pt=u=new _r(e._pt,t,n,r,s,Xr),u.e=c,u.u=`deg`,e._props.push(n),u},Zi=function(e,t){for(var n in t)e[n]=t[n];return e},Qi=function(e,t,n){var r=Zi({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[ci]=t,o=Vi(n,1),wi(n,ci),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[ci],a[ci]=t,o=Vi(n,1),a[ci]=c),Br)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=Ut(c),p=Ut(l),u=f===p?parseFloat(c):Oi(n,s,c,p),d=parseFloat(l),e._pt=new _r(e._pt,o,s,u,d-u,Yr),e._pt.u=p||0,e._props.push(s));Zi(o,r)};$e(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});Pi[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return ki(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var $i={name:`css`,register:yi,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in Fr||yi(),this.styles=this.styles||pi(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(Ge[m]&&qn(m,t,n,r,e,i)))){if(f=typeof l,p=Pi[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=cn(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Cn.lastIndex=0,Cn.test(c)||(h=Ut(c),g=Ut(l),g?h!==g&&(c=Oi(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],se(c)&&~c.indexOf(`random(`)&&(c=cn(c)),Ut(c+``)||c===`auto`||(c+=T.units[m]||Ut(ki(e,m))||``),(c+``).charAt(1)===`=`&&(c=ki(e,m))):c=ki(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in Jr&&(m===`autoAlpha`&&(d===1&&ki(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),Ti(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=Jr[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in Br,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=gi(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var E=e.style.perspective;e.style.perspective=l,l=gi(e,`perspective`),E?e.style.perspective=E:wi(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Vi(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new _r(this._pt,o,ci,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new _r(this._pt,b,`scaleY`,b.scaleY,(_?nt(b.scaleY,_+u):u)-b.scaleY||0,Yr),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(li,0,o[li]),l=Mi(l),b.svg?Bi(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&Ti(this,b,`zOrigin`,b.zOrigin,g),Ti(this,o,m,Hi(c),Hi(l)));continue}else if(m===`svgOrigin`){Bi(e,l,1,x,0,this);continue}else if(m in Ii){Xi(this,b,m,d,_?nt(d,_+l):l);continue}else if(m===`smoothOrigin`){Ti(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){Qi(this,l,e);continue}}else m in o||(m=vi(m)||m);if(v||(u||u===0)&&(d||d===0)&&!qr.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=Ut(l)||(m in T.units?T.units[m]:h),h!==g&&(d=Oi(e,m,c,g)),this._pt=new _r(this._pt,v?b:o,m,d,(_?nt(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?$r:Yr),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=Qr):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=Zr);else if(m in o)Ai.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){Pe(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&gr(this)},render:function(e,t){if(t.tween._time||!Rr())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ki,aliases:Jr,getSetter:function(e,t,n){var r=Jr[t];return r&&r.indexOf(`,`)<0&&(t=r),t in Br&&t!==li&&(e._gsap.x||ki(e,`x`))?n&&Lr===n?t===`scale`?ai:ii:(Lr=n||{})&&(t===`scale`?oi:si):e.style&&!ue(e.style[t])?ni:~t.indexOf(`-`)?ri:cr(e,t)},core:{_removeProperty:wi,_getMatrix:zi}};jr.utils.checkPrefix=vi,jr.core.getStyleSaver=pi,(function(e,t,n,r){var i=$e(e+`,`+t+`,`+n,function(e){Br[e]=1});$e(t,function(e){T.units[e]=`deg`,Ii[e]=1}),Jr[i[13]]=e+`,`+t,$e(r,function(e){var t=e.split(`:`);Jr[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),$e(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){T.units[e]=`px`}),jr.registerPlugin($i);var ea=jr.registerPlugin($i)||jr;ea.core.Tween;var ta=class{state={x:0,y:0,normX:0,normY:0};listeners=[];targetNormX=0;targetNormY=0;rafId=0;constructor(){window.addEventListener(`mousemove`,this.onMouseMove),this.tick()}onMouseMove=e=>{this.state.x=e.clientX,this.state.y=e.clientY,this.targetNormX=e.clientX/window.innerWidth*2-1,this.targetNormY=e.clientY/window.innerHeight*2-1};tick=()=>{this.state.normX=ea.utils.interpolate(this.state.normX,this.targetNormX,.06),this.state.normY=ea.utils.interpolate(this.state.normY,this.targetNormY,.06),this.listeners.forEach(e=>e(this.state)),this.rafId=requestAnimationFrame(this.tick)};subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}destroy(){window.removeEventListener(`mousemove`,this.onMouseMove),cancelAnimationFrame(this.rafId)}},na=class{setStarsX;setStarsY;setMoonX;setMoonY;cloudSetters=[];unsub=null;constructor(e,t){let n=e.querySelector(`#star-g`),r=e.querySelector(`#moon`),i=Array.from(e.querySelectorAll(`.cloud`));this.setStarsX=ea.quickTo(n,`x`,{duration:.6,ease:`power2.out`}),this.setStarsY=ea.quickTo(n,`y`,{duration:.6,ease:`power2.out`}),this.setMoonX=ea.quickTo(r,`attr.cx`,{duration:.6,ease:`power2.out`}),this.setMoonY=ea.quickTo(r,`attr.cy`,{duration:.6,ease:`power2.out`}),i.forEach(e=>{this.cloudSetters.push({x:ea.quickTo(e,`x`,{duration:.6,ease:`power2.out`}),y:ea.quickTo(e,`y`,{duration:.6,ease:`power2.out`})})}),this.unsub=t.subscribe(({normX:e,normY:t})=>{this.setStarsX(e*12),this.setStarsY(t*8),this.setMoonX(880+e*30),this.setMoonY(72+t*20),this.cloudSetters.forEach((n,r)=>{let i=r%2==0?-18:-12;n.x(e*i),n.y(t*5)})})}destroy(){this.unsub?.()}},ra=class{svg;particles=[];positions=[];maxParticles=12;rafId=0;colors=[`#FFD93D`,`#FF6B9D`,`#6BFFB8`,`#C3B1E1`,`#FF8C69`];currentX=0;currentY=0;constructor(){let e=`http://www.w3.org/2000/svg`;this.svg=document.createElementNS(e,`svg`),this.svg.style.cssText=`position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:999;overflow:visible;`,document.body.appendChild(this.svg);for(let t=0;t<this.maxParticles;t++){let n=document.createElementNS(e,`circle`);n.setAttribute(`r`,String(6-t*.4)),n.setAttribute(`fill`,this.colors[t%this.colors.length]),n.setAttribute(`cx`,`-100`),n.setAttribute(`cy`,`-100`),n.style.opacity=`0`,this.svg.appendChild(n),this.particles.push(n),this.positions.push({x:0,y:0})}window.addEventListener(`mousemove`,this.onMove),this.animate()}onMove=e=>{this.currentX=e.clientX,this.currentY=e.clientY};animate=()=>{this.positions.unshift({x:this.currentX,y:this.currentY}),this.positions.length>this.maxParticles&&this.positions.pop(),this.particles.forEach((e,t)=>{let n=this.positions[t];n&&(e.setAttribute(`cx`,String(n.x)),e.setAttribute(`cy`,String(n.y)),e.style.opacity=String(1-t/this.maxParticles))}),this.rafId=requestAnimationFrame(this.animate)};destroy(){window.removeEventListener(`mousemove`,this.onMove),cancelAnimationFrame(this.rafId),this.svg.remove()}};function ia(e){e.querySelectorAll(`.shape-anim`).forEach(e=>{let t=parseFloat(e.dataset.delay??`0`);ea.set(e,{transformOrigin:`center center`,svgOrigin:e.getBoundingClientRect().left+` `+e.getBoundingClientRect().top}),ea.fromTo(e,{scale:0,rotation:-20,opacity:0,transformOrigin:`center center`},{scale:1,rotation:0,opacity:1,duration:.5,delay:t,ease:`back.out(1.7)`,transformOrigin:`center center`,onComplete:()=>{ea.to(e,{y:-5,duration:1.3,yoyo:!0,repeat:-1,ease:`sine.inOut`,transformOrigin:`center center`})}})})}function aa(e){e.querySelectorAll(`.shape-anim`).forEach(e=>ea.killTweensOf(e))}function oa(e){e.querySelectorAll(`polygon`).forEach((e,t)=>{let n=(e.getAttribute(`transform`)??``).match(/translate\(([^,]+),([^)]+)\)/),r=n?parseFloat(n[1]):0,i=n?parseFloat(n[2]):0,a=Math.random()*Math.PI*2,o=80+Math.random()*60,s=r+Math.cos(a)*o,c=i+Math.sin(a)*o-20;ea.fromTo(e,{attr:{transform:`translate(${r},${i})`},opacity:1},{attr:{transform:`translate(${s},${c})`},opacity:0,duration:.9+Math.random()*.5,delay:t*.04,ease:`power2.out`})})}function sa(e){ea.to(e,{scale:1.12,duration:.5,yoyo:!0,repeat:-1,ease:`sine.inOut`,transformOrigin:`center center`})}function ca(e){ea.fromTo(e,{x:0},{x:0,duration:.5,ease:`power2.inOut`,keyframes:{x:[-8,8,-5,5,0],easeEach:`sine.inOut`}})}function la(e){ea.fromTo(e,{scale:1},{scale:1.08,duration:.2,yoyo:!0,repeat:1,ease:`sine.inOut`,transformOrigin:`center center`})}function ua(e,t){return new Promise(n=>{let r=ea.timeline({onComplete:n});r.to(e,{y:-40,opacity:0,duration:.3,ease:`power2.in`}),r.call(t),r.fromTo(e,{y:40,opacity:0},{y:0,opacity:1,duration:.4,ease:`back.out(1.2)`})})}function da(e,t){ea.to(e,{scale:1.12,y:-4,duration:.18,ease:`back.out(2)`,filter:`drop-shadow(0 8px 16px ${t}88)`})}function fa(e){ea.to(e,{scale:1,y:0,duration:.18,ease:`power2.out`,filter:`drop-shadow(0 0 0 transparent)`})}function pa(e){ea.fromTo(e,{y:-30,opacity:0},{y:0,opacity:1,duration:.7,ease:`back.out(1.7)`})}function ma(e){ea.to(e,{y:-8,rotation:5,duration:1.5,yoyo:!0,repeat:-1,ease:`sine.inOut`,transformOrigin:`center center`})}function ha(e){ea.fromTo(e,{opacity:.35},{opacity:.7,duration:1,yoyo:!0,repeat:-1,ease:`sine.inOut`})}function ga(e){ea.to(e,{y:-14,duration:.6,yoyo:!0,repeat:-1,ease:`sine.inOut`})}var _a=class{container;isAnimating=!1;enabled=!1;onScrollCallback=null;wheelHandler;touchStartY=0;touchHandler;touchEndHandler;constructor(e){this.container=e,this.wheelHandler=e=>{e.deltaY>30&&this.triggerNext()},this.touchHandler=e=>{this.touchStartY=e.touches[0].clientY},this.touchEndHandler=e=>{this.touchStartY-e.changedTouches[0].clientY>40&&this.triggerNext()},window.addEventListener(`wheel`,this.wheelHandler,{passive:!0}),window.addEventListener(`touchstart`,this.touchHandler,{passive:!0}),window.addEventListener(`touchend`,this.touchEndHandler,{passive:!0})}onNext(e){this.onScrollCallback=e}triggerNext(){this.isAnimating||!this.onScrollCallback||this.enabled&&this.onScrollCallback()}async transition(e){this.isAnimating||=(this.isAnimating=!0,await ua(this.container,e),!1)}destroy(){window.removeEventListener(`wheel`,this.wheelHandler),window.removeEventListener(`touchstart`,this.touchHandler),window.removeEventListener(`touchend`,this.touchEndHandler)}};function va(){let e=`http://www.w3.org/2000/svg`,t=document.createElementNS(e,`svg`);t.setAttribute(`viewBox`,`0 0 500 300`),t.style.cssText=`position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:9999;width:min(500px,90vw);height:min(300px,40vh);`;let n=[`#FFD93D`,`#FF6B9D`,`#6BFFB8`,`#C3B1E1`,`#FF8C69`];for(let r=0;r<14;r++){let i=document.createElementNS(e,`polygon`),a=ba(40,380),o=ba(50,160),s=ba(8,18),c=n[r%n.length];i.setAttribute(`points`,`0,${-s} ${s*.3},${-s*.3} ${s},${-s*.3} ${s*.5},${s*.2} ${s*.7},${s*.9} 0,${s*.4} ${-s*.7},${s*.9} ${-s*.5},${s*.2} ${-s},${-s*.3} ${-s*.3},${-s*.3}`),i.setAttribute(`fill`,c),i.setAttribute(`transform`,`translate(${a},${o})`),t.appendChild(i)}document.body.appendChild(t),oa(t),setTimeout(()=>t.remove(),1600)}var ya=class{bar;timerTween=null;onExpire=null;constructor(e){this.bar=e}start(e,t){this.stop(),this.onExpire=t,this.bar.style.display=`block`,this.timerTween=ea.fromTo(this.bar,{width:`100%`,backgroundColor:`#6BFFB8`},{width:`0%`,backgroundColor:`#FF6B9D`,duration:e,ease:`none`,onUpdate:()=>{let e=this.timerTween?.progress()??0;e<.5?this.bar.style.background=`#6BFFB8`:e<.75?this.bar.style.background=`#FFD93D`:this.bar.style.background=`#FF6B9D`},onComplete:()=>{this.onExpire?.()}})}stop(){this.timerTween?.kill(),this.timerTween=null,this.bar.style.width=`100%`}hide(){this.stop(),this.bar.style.display=`none`}};function ba(e,t){return Math.floor(Math.random()*(t-e+1))+e}var xa=[{name:`star`,fill:`#FFD93D`,stroke:`#c8880a`,points:[[50,8],[58,32],[82,32],[63,47],[70,72],[50,57],[30,72],[37,47],[18,32],[42,32],[50,8],[50,8],[50,8],[50,8],[50,8],[50,8]]},{name:`heart`,fill:`#FF6B9D`,stroke:`#8a1040`,points:[[50,80],[30,62],[15,48],[15,33],[25,22],[38,22],[50,35],[62,22],[75,22],[85,33],[85,48],[70,62],[50,80],[50,80],[50,80],[50,80]]},{name:`hexagon`,fill:`#6BFFB8`,stroke:`#1a6a46`,points:[[50,10],[76,25],[76,75],[50,90],[24,75],[24,25],[50,10],[50,10],[50,10],[50,10],[50,10],[50,10],[50,10],[50,10],[50,10],[50,10]]},{name:`flower`,fill:`#FF8C69`,stroke:`#c24d1e`,points:[[50,10],[58,30],[70,22],[70,42],[88,50],[70,58],[70,78],[58,70],[50,90],[42,70],[30,78],[30,58],[12,50],[30,42],[30,22],[42,30]]},{name:`diamond`,fill:`#C3B1E1`,stroke:`#5a3e8a`,points:[[50,8],[70,30],[92,50],[70,70],[50,92],[30,70],[8,50],[30,30],[50,8],[50,8],[50,8],[50,8],[50,8],[50,8],[50,8],[50,8]]},{name:`cloud`,fill:`#a29bfe`,stroke:`#6c5ce7`,points:[[25,60],[18,55],[12,48],[15,40],[22,35],[28,32],[32,28],[40,25],[48,28],[55,25],[62,28],[70,32],[78,38],[82,48],[78,58],[68,62]]}];function Sa(e){return e.map((e,t)=>`${t===0?`M`:`L`}${e[0]},${e[1]}`).join(` `)+` Z`}var Ca=class{pathEl;currentShapeIdx=0;activeTween=null;constructor(e){let t=`http://www.w3.org/2000/svg`,n=document.createElementNS(t,`circle`);n.setAttribute(`cx`,`50`),n.setAttribute(`cy`,`50`),n.setAttribute(`r`,`46`),n.setAttribute(`fill`,`rgba(255,255,255,0.06)`),e.appendChild(n),this.pathEl=document.createElementNS(t,`path`),this.pathEl.setAttribute(`fill`,xa[0].fill),this.pathEl.setAttribute(`stroke`,xa[0].stroke),this.pathEl.setAttribute(`stroke-width`,`2`),this.pathEl.setAttribute(`d`,Sa(xa[0].points)),e.appendChild(this.pathEl)}async morphToRandom(){let e=(this.currentShapeIdx+1+Math.floor(Math.random()*(xa.length-1)))%xa.length;await this.morphTo(e),this.currentShapeIdx=e}morphTo(e){return new Promise(t=>{let n=xa[this.currentShapeIdx],r=xa[e],i={fillR:parseInt(n.fill.slice(1,3),16),fillG:parseInt(n.fill.slice(3,5),16),fillB:parseInt(n.fill.slice(5,7),16),strokeR:parseInt(n.stroke.slice(1,3),16),strokeG:parseInt(n.stroke.slice(3,5),16),strokeB:parseInt(n.stroke.slice(5,7),16)};n.points.forEach((e,t)=>{i[`x${t}`]=e[0],i[`y${t}`]=e[1]});let a={fillR:parseInt(r.fill.slice(1,3),16),fillG:parseInt(r.fill.slice(3,5),16),fillB:parseInt(r.fill.slice(5,7),16),strokeR:parseInt(r.stroke.slice(1,3),16),strokeG:parseInt(r.stroke.slice(3,5),16),strokeB:parseInt(r.stroke.slice(5,7),16)};r.points.forEach((e,t)=>{a[`x${t}`]=e[0],a[`y${t}`]=e[1]}),this.activeTween?.kill(),this.activeTween=ea.to(i,{...a,duration:.6,ease:`power2.inOut`,onUpdate:()=>{let e=[];for(let t=0;t<n.points.length;t++)e.push([i[`x${t}`],i[`y${t}`]]);this.pathEl.setAttribute(`d`,Sa(e));let t=`rgb(${Math.round(i.fillR)},${Math.round(i.fillG)},${Math.round(i.fillB)})`,r=`rgb(${Math.round(i.strokeR)},${Math.round(i.strokeG)},${Math.round(i.strokeB)})`;this.pathEl.setAttribute(`fill`,t),this.pathEl.setAttribute(`stroke`,r)},onComplete:()=>{t()}})})}destroy(){this.activeTween?.kill()}},wa=1e-7,Ta=1e-4,Ea=class{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}},Da=class{refCount(e){return Oa(`refCount`)}incRef(e){return Oa(`incRef`)}timerAvailable(){return!0}time(e){return Oa(`time`)}read(e){return Oa(`read`)}readSync(e){return Oa(`readSync`)}readToGPU(e,t){return Oa(`readToGPU`)}numDataIds(){return Oa(`numDataIds`)}disposeData(e,t){return Oa(`disposeData`)}write(e,t,n){return Oa(`write`)}move(e,t,n,r,i){return Oa(`move`)}createTensorFromGPUData(e,t,n){return Oa(`createTensorFromGPUData`)}memory(){return Oa(`memory`)}floatPrecision(){return Oa(`floatPrecision`)}epsilon(){return this.floatPrecision()===32?wa:Ta}dispose(){return Oa(`dispose`)}};function Oa(e){throw Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function ka(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,Ma(e,t,n)}function Aa(e,t,n){return Math.max(e,Math.min(t,n))}function ja(e){return e%2==0?e:e+1}function Ma(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function Na(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function j(e,t){if(!e)throw Error(typeof t==`string`?t:t())}function Pa(e,t,n=``){j(Ia(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function Fa(e){j(e!=null,()=>`The input to the tensor constructor must be a non-null value.`)}function M(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function Ia(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function La(e){return e%1==0}function Ra(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function za(e){let t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return ka(t),t}function Ba(e,t){return t<=e.length?e:e+` `.repeat(t-e.length)}function Va(e,t=e=>0,n,r){return new Promise((i,a)=>{let o=0,s=()=>{if(e()){i();return}o++;let c=t(o);if(n!=null&&o>=n){a();return}r==null?setTimeout(s,c):r(s,c)};s()})}function Ha(e,t){let n=1,r=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)n*=e[t];else if(e[t]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${t}`);r=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(r===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);let i=e.slice();return i[r]=t/n,i}function Ua(e,t){let n=t.length;return e=e==null?t.map((e,t)=>t):[].concat(e),j(e.every(e=>e>=-n&&e<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),j(e.every(e=>La(e)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?n+e:e)}function Wa(e,t){let n=[],r=[],i=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||i?null:Ua(t,e).sort(),o=0;for(let t=0;t<e.length;++t){if(a!=null){if(a[o]===t&&e[t]!==1)throw Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(a[o]==null||a[o]>t)&&e[t]===1&&(n.push(e[t]),r.push(t)),a[o]<=t&&o++}e[t]!==1&&(n.push(e[t]),r.push(t))}return{newShape:n,keptDims:r}}function Ga(e,t){return Ka(e,t)}function Ka(e,t){let n=null;if(e==null||e===`float32`)n=new Float32Array(t);else if(e===`int32`)n=new Int32Array(t);else if(e===`bool`)n=new Uint8Array(t);else if(e===`string`)n=Array(t);else throw Error(`Unknown data type ${e}`);return n}function qa(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function Ja(e){return e===`bool`||e===`complex64`||e===`float32`||e===`int32`||e===`string`}function Ya(e,t){return!(t===`complex64`||t===`float32`&&e!==`complex64`||t===`int32`&&e!==`float32`&&e!==`complex64`||t===`bool`&&e===`bool`)}function Xa(e){if(e===`float32`||e===`int32`)return 4;if(e===`complex64`)return 8;if(e===`bool`)return 1;throw Error(`Unknown dtype ${e}`)}function Za(e){if(e==null)return 0;let t=0;return e.forEach(e=>t+=e.length),t}function Qa(e){return typeof e==`string`||e instanceof String}function $a(e){return typeof e==`boolean`}function eo(e){return typeof e==`number`}function to(e){return Array.isArray(e)?to(e[0]):e instanceof Float32Array?`float32`:e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?`int32`:eo(e)?`float32`:Qa(e)?`string`:$a(e)?`bool`:`float32`}function no(e){return!!(e&&e.constructor&&e.call&&e.apply)}function ro(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function N(e){let t=e.length;if(t<2)return[];let n=Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function io(e,t,n,r=!1){let i=[];if(t.length===1){let a=t[0]*(r?2:1);for(let t=0;t<a;t++)i[t]=n[e+t]}else{let a=t[0],o=t.slice(1),s=o.reduce((e,t)=>e*t)*(r?2:1);for(let t=0;t<a;t++)i[t]=io(e+t*s,o,n,r)}return i}function ao(e,t,n=!1){if(e.length===0)return t[0];let r=e.reduce((e,t)=>e*t)*(n?2:1);if(r===0)return[];if(r!==t.length)throw Error(`[${e}] does not match the input size ${t.length}${n?` for a complex tensor`:``}.`);return io(0,e,t,n)}function oo(e,t){if(Array.isArray(e))return e;if(t===`float32`)return e instanceof Float32Array?e:new Float32Array(e);if(t===`int32`)return e instanceof Int32Array?e:new Int32Array(e);if(t===`bool`||t===`string`)return Uint8Array.from(new Int32Array(e));throw Error(`Unknown dtype ${t}`)}function so(e,t){let n=co(e,t);for(let e=0;e<n.length;e++)n[e]=1;return n}function co(e,t){if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`)return new Uint8Array(e);throw Error(`Unknown data type ${t}`)}function lo(e,t){let n=e.reduce((e,t)=>e*t,1);if(t==null||t===`float32`)return ao(e,new Float32Array(n));if(t===`int32`)return ao(e,new Int32Array(n));if(t===`bool`)return ao(e,new Uint8Array(n));throw Error(`Unknown data type ${t}`)}function uo(e){e.forEach(t=>{j(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function fo(e,t,n){if(t===0)return 0;if(t===1)return e[0];let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=n[t]*e[t];return r}function po(e,t,n){if(t===0)return[];if(t===1)return[e];let r=Array(t);for(let t=0;t<r.length-1;++t)r[t]=Math.floor(e/n[t]),e-=r[t]*n[t];return r[r.length-1]=e,r}function mo(e){return e&&e.then&&typeof e.then==`function`}var ho=`tfjsflags`,go=class{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=_o,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(P().getBool(`IS_TEST`)||P().getBool(`PROD`)||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){let t=this.urlFlags[e];P().getBool(`IS_TEST`)||P().getBool(`PROD`)||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if(mo(t))throw Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(this.global===void 0||this.global.location===void 0||this.global.location.search===void 0)return;let e=this.getQueryParams(this.global.location.search);ho in e&&e[ho].split(`,`).forEach(e=>{let[t,n]=e.split(`:`);this.urlFlags[t]=yo(t,n)})}};function _o(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...n)=>(vo(t,n[0],n[1]),n.join(`=`))),t}function vo(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||``)}function yo(e,t){let n=t.toLowerCase();return n===`true`||n===`false`?n===`true`:`${+n}`===n?+n:t}function P(){return bo}var bo=null;function xo(e){bo=e}var So;function Co(){if(So==null){let e;if(typeof window<`u`)e=window;else if(typeof global<`u`)e=global;else if(typeof process<`u`)e=process;else if(typeof self<`u`)e=self;else throw Error(`Could not find a global object`);So=e}return So}function wo(){let e=Co();return e._tfGlobals??=new Map,e._tfGlobals}function To(e,t){let n=wo();if(n.has(e))return n.get(e);{let r=t();return n.set(e,r),n.get(e)}}var Eo=`Acos`,Do=`Acosh`,Oo=`AddN`,ko=`ArgMax`,Ao=`ArgMin`,jo=`Asin`,Mo=`Asinh`,No=`Atan`,Po=`Atanh`,Fo=`Atan2`,Io=`AvgPool`,Lo=`AvgPoolGrad`,Ro=`AvgPool3D`,zo=`AvgPool3DGrad`,Bo=`BatchMatMul`,Vo=`BatchToSpaceND`,Ho=`Bincount`,Uo=`BitwiseAnd`,Wo=`BroadcastTo`,Go=`BroadcastArgs`,Ko=`Cast`,qo=`Ceil`,Jo=`ClipByValue`,Yo=`Complex`,Xo=`ComplexAbs`,Zo=`Concat`,Qo=`Conv2D`,$o=`Conv2DBackpropFilter`,es=`Conv2DBackpropInput`,ts=`Conv3D`,ns=`Conv3DBackpropFilterV2`,rs=`Conv3DBackpropInputV2`,is=`Cosh`,as=`Cumprod`,os=`Cumsum`,ss=`CropAndResize`,cs=`DenseBincount`,ls=`DepthToSpace`,us=`DepthwiseConv2dNative`,ds=`DepthwiseConv2dNativeBackpropFilter`,fs=`DepthwiseConv2dNativeBackpropInput`,ps=`Diag`,ms=`Dilation2D`,hs=`Dilation2DBackpropInput`,gs=`Dilation2DBackpropFilter`,_s=`Draw`,vs=`RealDiv`,ys=`Einsum`,bs=`EluGrad`,xs=`Equal`,Ss=`ExpandDims`,Cs=`Expm1`,ws=`Fill`,Ts=`FlipLeftRight`,Es=`Floor`,Ds=`FloorDiv`,Os=`FusedBatchNorm`,ks=`GatherV2`,As=`GatherNd`,js=`Greater`,Ms=`GreaterEqual`,Ns=`Identity`,Ps=`IFFT`,Fs=`Imag`,Is=`IsFinite`,Ls=`IsInf`,Rs=`IsNan`,zs=`LeakyRelu`,Bs=`Less`,Vs=`LessEqual`,Hs=`LinSpace`,Us=`Log1p`,Ws=`LogicalAnd`,Gs=`LogicalNot`,Ks=`LogicalOr`,qs=`LogSoftmax`,Js=`LRNGrad`,Ys=`Maximum`,Xs=`MaxPool`,Zs=`MaxPoolGrad`,Qs=`MaxPool3D`,$s=`MaxPool3DGrad`,ec=`MaxPoolWithArgmax`,tc=`Mean`,nc=`Minimum`,rc=`MirrorPad`,ic=`Multinomial`,ac=`Multiply`,oc=`NotEqual`,sc=`NonMaxSuppressionV3`,cc=`NonMaxSuppressionV4`,lc=`NonMaxSuppressionV5`,uc=`OnesLike`,dc=`OneHot`,fc=`Pack`,pc=`PadV2`,mc=`Prelu`,hc=`Prod`,gc=`RaggedGather`,_c=`RaggedRange`,vc=`RaggedTensorToTensor`,yc=`Range`,bc=`Real`,xc=`Reciprocal`,Sc=`Relu`,Cc=`Reshape`,wc=`ResizeNearestNeighbor`,Tc=`ResizeNearestNeighborGrad`,Ec=`ResizeBilinear`,Dc=`ResizeBilinearGrad`,Oc=`Relu6`,kc=`Reverse`,Ac=`Round`,jc=`Rsqrt`,Mc=`ScatterNd`,Nc=`TensorScatterUpdate`,Pc=`SearchSorted`,Fc=`Select`,Ic=`Selu`,Lc=`Slice`,Rc=`Sinh`,zc=`Sign`,Bc=`Sigmoid`,Vc=`Softplus`,Hc=`Sqrt`,Uc=`SpaceToBatchND`,Wc=`SplitV`,Gc=`Softmax`,Kc=`SparseFillEmptyRows`,qc=`SparseReshape`,Jc=`SparseSegmentMean`,Yc=`SparseSegmentSum`,Xc=`SparseToDense`,Zc=`SquaredDifference`,Qc=`Square`,$c=`StaticRegexReplace`,el=`StridedSlice`,tl=`StringNGrams`,nl=`StringSplit`,rl=`StringToHashBucketFast`,il=`Tanh`,al=`Tile`,ol=`TopK`,sl=`Transform`,cl=`Transpose`,ll=`Unique`,ul=`Unpack`,dl=`UnsortedSegmentSum`,fl=`ZerosLike`,pl=`Step`,ml=`FromPixels`,hl=`RotateWithOffset`,gl=`_FusedMatMul`,_l=`FusedConv2D`,vl=`FusedDepthwiseConv2D`;function yl(...e){P().getBool(`IS_TEST`)||P().getBool(`PROD`)||console.warn(...e)}function bl(...e){P().getBool(`IS_TEST`)||P().getBool(`PROD`)||console.log(...e)}var xl=To(`kernelRegistry`,()=>new Map),Sl=To(`gradRegistry`,()=>new Map);function Cl(e,t){let n=Ol(e,t);return xl.get(n)}function wl(e){return Sl.get(e)}function Tl(e){let t=xl.entries(),n=[];for(;;){let{done:r,value:i}=t.next();if(r)break;let[a,o]=i,[s]=a.split(`_`);s===e&&n.push(o)}return n}function El(e){let{kernelName:t,backendName:n}=e,r=Ol(t,n);xl.has(r)&&yl(`The kernel '${t}' for backend '${n}' is already registered`),xl.set(r,e)}function Dl(e){let{kernelName:t}=e;Sl.has(t)&&P().getBool(`DEBUG`)&&yl(`Overriding the gradient for '${t}'`),Sl.set(t,e)}function Ol(e,t){return`${t}_${e}`}function kl(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}var Al=l(o(((e,t)=>{t.exports=r;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function r(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}r.prototype.__isLong__,Object.defineProperty(r.prototype,`__isLong__`,{value:!0});function i(e){return(e&&e.__isLong__)===!0}r.isLong=i;var a={},o={};function s(e,t){var n,r,i;return t?(e>>>=0,(i=0<=e&&e<256)&&(r=o[e],r)?r:(n=l(e,(e|0)<0?-1:0,!0),i&&(o[e]=n),n)):(e|=0,(i=-128<=e&&e<128)&&(r=a[e],r)?r:(n=l(e,e<0?-1:0,!1),i&&(a[e]=n),n))}r.fromInt=s;function c(e,t){if(isNaN(e))return t?b:y;if(t){if(e<0)return b;if(e>=g)return T}else{if(e<=-_)return E;if(e+1>=_)return w}return e<0?c(-e,t).neg():l(e%h|0,e/h|0,t)}r.fromNumber=c;function l(e,t,n){return new r(e,t,n)}r.fromBits=l;var u=Math.pow;function d(e,t,n){if(e.length===0)throw Error(`empty string`);if(e===`NaN`||e===`Infinity`||e===`+Infinity`||e===`-Infinity`)return y;if(typeof t==`number`?(n=t,t=!1):t=!!t,n||=10,n<2||36<n)throw RangeError(`radix`);var r;if((r=e.indexOf(`-`))>0)throw Error(`interior hyphen`);if(r===0)return d(e.substring(1),t,n).neg();for(var i=c(u(n,8)),a=y,o=0;o<e.length;o+=8){var s=Math.min(8,e.length-o),l=parseInt(e.substring(o,o+s),n);if(s<8){var f=c(u(n,s));a=a.mul(f).add(c(l))}else a=a.mul(i),a=a.add(c(l))}return a.unsigned=t,a}r.fromString=d;function f(e,t){return typeof e==`number`?c(e,t):typeof e==`string`?d(e,t):l(e.low,e.high,typeof t==`boolean`?t:e.unsigned)}r.fromValue=f;var p=65536,m=1<<24,h=p*p,g=h*h,_=g/2,v=s(m),y=s(0);r.ZERO=y;var b=s(0,!0);r.UZERO=b;var x=s(1);r.ONE=x;var S=s(1,!0);r.UONE=S;var C=s(-1);r.NEG_ONE=C;var w=l(-1,2147483647,!1);r.MAX_VALUE=w;var T=l(-1,-1,!0);r.MAX_UNSIGNED_VALUE=T;var E=l(0,-2147483648,!1);r.MIN_VALUE=E;var D=r.prototype;D.toInt=function(){return this.unsigned?this.low>>>0:this.low},D.toNumber=function(){return this.unsigned?(this.high>>>0)*h+(this.low>>>0):this.high*h+(this.low>>>0)},D.toString=function(e){if(e||=10,e<2||36<e)throw RangeError(`radix`);if(this.isZero())return`0`;if(this.isNegative())if(this.eq(E)){var t=c(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}else return`-`+this.neg().toString(e);for(var i=c(u(e,6),this.unsigned),a=this,o=``;;){var s=a.div(i),l=(a.sub(s.mul(i)).toInt()>>>0).toString(e);if(a=s,a.isZero())return l+o;for(;l.length<6;)l=`0`+l;o=``+l+o}},D.getHighBits=function(){return this.high},D.getHighBitsUnsigned=function(){return this.high>>>0},D.getLowBits=function(){return this.low},D.getLowBitsUnsigned=function(){return this.low>>>0},D.getNumBitsAbs=function(){if(this.isNegative())return this.eq(E)?64:this.neg().getNumBitsAbs();for(var e=this.high==0?this.low:this.high,t=31;t>0&&!(e&1<<t);t--);return this.high==0?t+1:t+33},D.isZero=function(){return this.high===0&&this.low===0},D.eqz=D.isZero,D.isNegative=function(){return!this.unsigned&&this.high<0},D.isPositive=function(){return this.unsigned||this.high>=0},D.isOdd=function(){return(this.low&1)==1},D.isEven=function(){return(this.low&1)==0},D.equals=function(e){return i(e)||(e=f(e)),this.unsigned!==e.unsigned&&this.high>>>31==1&&e.high>>>31==1?!1:this.high===e.high&&this.low===e.low},D.eq=D.equals,D.notEquals=function(e){return!this.eq(e)},D.neq=D.notEquals,D.ne=D.notEquals,D.lessThan=function(e){return this.comp(e)<0},D.lt=D.lessThan,D.lessThanOrEqual=function(e){return this.comp(e)<=0},D.lte=D.lessThanOrEqual,D.le=D.lessThanOrEqual,D.greaterThan=function(e){return this.comp(e)>0},D.gt=D.greaterThan,D.greaterThanOrEqual=function(e){return this.comp(e)>=0},D.gte=D.greaterThanOrEqual,D.ge=D.greaterThanOrEqual,D.compare=function(e){if(i(e)||(e=f(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},D.comp=D.compare,D.negate=function(){return!this.unsigned&&this.eq(E)?E:this.not().add(x)},D.neg=D.negate,D.add=function(e){i(e)||(e=f(e));var t=this.high>>>16,n=this.high&65535,r=this.low>>>16,a=this.low&65535,o=e.high>>>16,s=e.high&65535,c=e.low>>>16,u=e.low&65535,d=0,p=0,m=0,h=0;return h+=a+u,m+=h>>>16,h&=65535,m+=r+c,p+=m>>>16,m&=65535,p+=n+s,d+=p>>>16,p&=65535,d+=t+o,d&=65535,l(m<<16|h,d<<16|p,this.unsigned)},D.subtract=function(e){return i(e)||(e=f(e)),this.add(e.neg())},D.sub=D.subtract,D.multiply=function(e){if(this.isZero())return y;if(i(e)||(e=f(e)),n)return l(n.mul(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned);if(e.isZero())return y;if(this.eq(E))return e.isOdd()?E:y;if(e.eq(E))return this.isOdd()?E:y;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(v)&&e.lt(v))return c(this.toNumber()*e.toNumber(),this.unsigned);var t=this.high>>>16,r=this.high&65535,a=this.low>>>16,o=this.low&65535,s=e.high>>>16,u=e.high&65535,d=e.low>>>16,p=e.low&65535,m=0,h=0,g=0,_=0;return _+=o*p,g+=_>>>16,_&=65535,g+=a*p,h+=g>>>16,g&=65535,g+=o*d,h+=g>>>16,g&=65535,h+=r*p,m+=h>>>16,h&=65535,h+=a*d,m+=h>>>16,h&=65535,h+=o*u,m+=h>>>16,h&=65535,m+=t*p+r*d+a*u+o*s,m&=65535,l(g<<16|_,m<<16|h,this.unsigned)},D.mul=D.multiply,D.divide=function(e){if(i(e)||(e=f(e)),e.isZero())throw Error(`division by zero`);if(n)return!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1?this:l((this.unsigned?n.div_u:n.div_s)(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned);if(this.isZero())return this.unsigned?b:y;var t,r,a;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return b;if(e.gt(this.shru(1)))return S;a=b}else{if(this.eq(E))return e.eq(x)||e.eq(C)?E:e.eq(E)?x:(t=this.shr(1).div(e).shl(1),t.eq(y)?e.isNegative()?x:C:(r=this.sub(e.mul(t)),a=t.add(r.div(e)),a));if(e.eq(E))return this.unsigned?b:y;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();a=y}for(r=this;r.gte(e);){t=Math.max(1,Math.floor(r.toNumber()/e.toNumber()));for(var o=Math.ceil(Math.log(t)/Math.LN2),s=o<=48?1:u(2,o-48),d=c(t),p=d.mul(e);p.isNegative()||p.gt(r);)t-=s,d=c(t,this.unsigned),p=d.mul(e);d.isZero()&&(d=x),a=a.add(d),r=r.sub(p)}return a},D.div=D.divide,D.modulo=function(e){return i(e)||(e=f(e)),n?l((this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},D.mod=D.modulo,D.rem=D.modulo,D.not=function(){return l(~this.low,~this.high,this.unsigned)},D.and=function(e){return i(e)||(e=f(e)),l(this.low&e.low,this.high&e.high,this.unsigned)},D.or=function(e){return i(e)||(e=f(e)),l(this.low|e.low,this.high|e.high,this.unsigned)},D.xor=function(e){return i(e)||(e=f(e)),l(this.low^e.low,this.high^e.high,this.unsigned)},D.shiftLeft=function(e){return i(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?l(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):l(0,this.low<<e-32,this.unsigned)},D.shl=D.shiftLeft,D.shiftRight=function(e){return i(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?l(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):l(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},D.shr=D.shiftRight,D.shiftRightUnsigned=function(e){if(i(e)&&(e=e.toInt()),e&=63,e===0)return this;var t=this.high;if(e<32){var n=this.low;return l(n>>>e|t<<32-e,t>>>e,this.unsigned)}else if(e===32)return l(t,0,this.unsigned);else return l(t>>>e-32,0,this.unsigned)},D.shru=D.shiftRightUnsigned,D.shr_u=D.shiftRightUnsigned,D.toSigned=function(){return this.unsigned?l(this.low,this.high,!1):this},D.toUnsigned=function(){return this.unsigned?this:l(this.low,this.high,!0)},D.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},D.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},D.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]},r.fromBytes=function(e,t,n){return n?r.fromBytesLE(e,t):r.fromBytesBE(e,t)},r.fromBytesLE=function(e,t){return new r(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},r.fromBytesBE=function(e,t){return new r(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}}))()),jl=Al.default||Al;function Ml(e){return jl.fromString(e,!0,16)}var Nl=Ml(`c3a5c85c97cb3127`),Pl=Ml(`b492b66fbe98f273`),Fl=Ml(`9ae16a3b2f90404f`);function Il(e){return e.xor(e.shru(47))}function Ll(e,t,n){let r=e.slice(t,t+n);return jl.fromBytes(Array.from(r),!0,!0)}function Rl(e,t){return Ll(e,t,8)}function zl(e,t){return Ll(e,t,4)}function Bl(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function Vl(e,t,n=Ml(`9ddfea08eb382d69`)){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let i=t.xor(r).mul(n);return i=i.xor(i.shru(47)),i=i.mul(n),i}function Hl(e,t,n,r,i,a){i=i.add(e),a=Bl(a.add(i).add(r),21);let o=i;return i=i.add(t),i=i.add(n),a=a.add(Bl(i,44)),[i.add(r),a.add(o)]}function Ul(e,t,n,r){return Hl(Rl(e,t),Rl(e,t+8),Rl(e,t+16),Rl(e,t+24),n,r)}function Wl(e,t=e.length){if(t>=8){let n=Fl.add(t*2),r=Rl(e,0).add(Fl),i=Rl(e,t-8);return Vl(Bl(i,37).mul(n).add(r),Bl(r,25).add(i).mul(n),n)}if(t>=4){let n=Fl.add(t*2);return Vl(zl(e,0).shl(3).add(t),zl(e,t-4),n)}if(t>0){let n=e[0],r=e[t>>1],i=e[t-1],a=n+(r<<8),o=t+(i<<2);return Il(Fl.mul(a).xor(Nl.mul(o))).mul(Fl)}return Fl}function Gl(e,t=e.length){let n=Fl.add(t*2),r=Rl(e,0).mul(Pl),i=Rl(e,8),a=Rl(e,t-8).mul(n),o=Rl(e,t-16).mul(Fl);return Vl(Bl(r.add(i),43).add(Bl(a,30)).add(o),r.add(Bl(i.add(Fl),18)).add(a),n)}function Kl(e,t=e.length){let n=Fl.add(t*2),r=Rl(e,0).mul(Fl),i=Rl(e,8),a=Rl(e,t-8).mul(n),o=Rl(e,t-16).mul(Fl),s=Bl(r.add(i),43).add(Bl(a,30)).add(o),c=Vl(s,r.add(Bl(i.add(Fl),18)).add(a),n),l=Rl(e,16).mul(n),u=Rl(e,24),d=s.add(Rl(e,t-32)).mul(n),f=c.add(Rl(e,t-24)).mul(n);return Vl(Bl(l.add(u),43).add(Bl(d,30)).add(f),l.add(Bl(u.add(r),18)).add(d),n)}function ql(e,t=e.length){let n=jl.fromNumber(81,!0);if(t<=32)return t<=16?Wl(e,t):Gl(e,t);if(t<=64)return Kl(e,t);let r=n,i=n.mul(Pl).add(113),a=Il(i.mul(Fl).add(113)).mul(Fl),o=[jl.UZERO,jl.UZERO],s=[jl.UZERO,jl.UZERO];r=r.mul(Fl).add(Rl(e,0));let c=0,l=(t-1>>6)*64,u=l+(t-1&63)-63;do r=Bl(r.add(i).add(o[0]).add(Rl(e,c+8)),37).mul(Pl),i=Bl(i.add(o[1]).add(Rl(e,c+48)),42).mul(Pl),r=r.xor(s[1]),i=i.add(o[0]).add(Rl(e,c+40)),a=Bl(a.add(s[0]),33).mul(Pl),o=Ul(e,c,o[1].mul(Pl),r.add(s[0])),s=Ul(e,c+32,a.add(s[1]),i.add(Rl(e,c+16))),[a,r]=[r,a],c+=64;while(c!==l);let d=Pl.add(a.and(255).shl(1));return c=u,s[0]=s[0].add(t-1&63),o[0]=o[0].add(s[0]),s[0]=s[0].add(o[0]),r=Bl(r.add(i).add(o[0]).add(Rl(e,c+8)),37).mul(d),i=Bl(i.add(o[1]).add(Rl(e,c+48)),42).mul(d),r=r.xor(s[1].mul(9)),i=i.add(o[0].mul(9).add(Rl(e,c+40))),a=Bl(a.add(s[0]),33).mul(d),o=Ul(e,c,o[1].mul(d),r.add(s[0])),s=Ul(e,c+32,a.add(s[1]),i.add(Rl(e,c+16))),[a,r]=[r,a],Vl(Vl(o[0],s[0],d).add(Il(i).mul(Nl)).add(a),Vl(o[1],s[1],d).add(r),d)}function Jl(e,t){return t===`string`?Ql(e):Xl([e],t)}function Yl(e,t){return e instanceof Float32Array&&t===`float32`||e instanceof Int32Array&&t===`int32`||e instanceof Uint8Array&&t===`bool`}function Xl(e,t){if(t===`string`)throw Error(`Cannot convert a string[] to a TypedArray`);if(Array.isArray(e)&&(e=tu(e)),P().getBool(`DEBUG`)&&qa(e,t),Yl(e,t))return e;if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`){let t=new Uint8Array(e.length);for(let n=0;n<t.length;++n)Math.round(e[n])!==0&&(t[n]=1);return t}else throw Error(`Unknown data type ${t}`)}function Zl(){return P().platform.now()}function Ql(e,t=`utf-8`){return t||=`utf-8`,P().platform.encode(e,t)}function $l(e,t=`utf-8`){return t||=`utf-8`,P().platform.decode(e,t)}function eu(e){return P().platform.isTypedArray==null?kl(e):P().platform.isTypedArray(e)}function tu(e,t=[],n=!1){if(t??=[],typeof e==`boolean`||typeof e==`number`||typeof e==`string`||mo(e)||e==null||eu(e)&&n)t.push(e);else if(Array.isArray(e)||eu(e))for(let r=0;r<e.length;++r)tu(e[r],t,n);else{let r=-1;for(let t of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(t)&&(r=Math.max(r,Number(t)));for(let i=0;i<=r;i++)tu(e[i],t,n)}return t}var nu=class{constructor(e,t){this.backendTimer=e,this.logger=t,t??(this.logger=new iu)}profileKernel(e,t,n){let r,i=()=>{r=n()},a,o=Zl();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(i);else{i();for(let e of r)e.dataSync();a=Promise.resolve({kernelMs:Zl()-o})}if(P().getBool(`CHECK_COMPUTATION_FOR_ERRORS`))for(let t=0;t<r.length;t++){let n=r[t];n.data().then(t=>{ru(t,n.dtype,e)})}return{kernelName:e,outputs:r,inputs:t,timeMs:a.then(e=>e.kernelMs),extraInfo:a.then(e=>e.getExtraProfileInfo==null?``:e.getExtraProfileInfo())}}logKernelProfile(e){let{kernelName:t,outputs:n,timeMs:r,inputs:i,extraInfo:a}=e;n.forEach(e=>{Promise.all([e.data(),r,a]).then(n=>{this.logger.logKernelProfile(t,e,n[0],n[1],i,n[2])})})}};function ru(e,t,n){if(t!==`float32`)return!1;for(let t=0;t<e.length;t++){let r=e[t];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}var iu=class{logKernelProfile(e,t,n,r,i,a){let o=typeof r==`number`?Ba(`${r}ms`,9):r.error,s=Ba(e,25),c=t.rank,l=t.size,u=Ba(t.shape.toString(),14),d=``;for(let e in i){let n=i[e];if(n!=null){let r=n.shape||t.shape,i=r.length;d+=`${e}: ${i}D ${i>0?r:``} `}}console.log(`%c${s}\t%c${o}\t%c${c}D ${u}\t%c${l}\t%c${d}\t%c${a}`,`font-weight:bold`,`color:red`,`color:blue`,`color: orange`,`color: green`,`color: steelblue`)}};function au(e,t,n){let r={},i={};for(let e=0;e<t.length;e++)r[t[e].id]=!0;for(let n=0;n<e.length;n++){let a=e[n],o=a.inputs;for(let e in o){let n=o[e],s=!1;for(let e=0;e<t.length;e++)if(r[n.id]){a.outputs.forEach(e=>r[e.id]=!0),s=!0,i[a.id]=!0;break}if(s)break}}let a={};a[n.id]=!0;let o={};for(let t=e.length-1;t>=0;t--){let n=e[t],r=n.inputs;for(let e=0;e<n.outputs.length;e++)if(a[n.outputs[e].id]){for(let e in r)a[r[e].id]=!0,o[n.id]=!0;break}}let s=[];for(let t=0;t<e.length;t++){let n=e[t];if(i[n.id]&&o[n.id]){let e={};for(let t in n.inputs){let i=n.inputs[t];r[i.id]&&(e[t]=i)}let t=Object.assign({},n);t.inputs=e,t.outputs=n.outputs,s.push(t)}}return s}function ou(e,t,n,r){for(let i=t.length-1;i>=0;i--){let a=t[i],o=[];if(a.outputs.forEach(t=>{let n=e[t.id];n==null?o.push(null):o.push(n)}),a.gradient==null)throw Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);let s=a.gradient(o);for(let t in a.inputs){if(!(t in s))throw Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(s)}.`);let i=n(()=>s[t]());if(i.dtype!==`float32`)throw Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${i.dtype}'`);let o=a.inputs[t];if(!Ia(i.shape,o.shape))throw Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${t}' has shape '${i.shape}', which does not match the shape of the input '${o.shape}'`);if(e[o.id]==null)e[o.id]=i;else{let t=e[o.id];e[o.id]=r(t,i),t.dispose()}}}}var su=20,cu=3,lu=7;function uu(e,t,n,r){let i=N(t),a=du(e,t,n,i),o=t.length,s=mu(e,t,n,i,a),c=[`Tensor`];return r&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${o}`),c.push(`  shape: [${t}]`),c.push(`  values:`)),c.push(s.map(e=>`    `+e).join(`
`)),c.join(`
`)}function du(e,t,n,r){let i=M(t),a=r[r.length-1],o=Array(a).fill(0),s=t.length,c=n===`complex64`?hu(e):e;if(s>1)for(let e=0;e<i/a;e++){let t=e*a;for(let e=0;e<a;e++)o[e]=Math.max(o[e],fu(c[t+e],0,n).length)}return o}function fu(e,t,n){let r;return r=Array.isArray(e)?`${parseFloat(e[0].toFixed(lu))} + ${parseFloat(e[1].toFixed(lu))}j`:Qa(e)?`'${e}'`:n===`bool`?pu(e):parseFloat(e.toFixed(lu)).toString(),Ba(r,t)}function pu(e){return e===0?`false`:`true`}function mu(e,t,n,r,i,a=!0){let o=n===`complex64`?2:1,s=t[0],c=t.length;if(c===0)return n===`complex64`?[fu(hu(e)[0],0,n)]:n===`bool`?[pu(e[0])]:[e[0].toString()];if(c===1){if(s>su){let t=cu*o,r=Array.from(e.slice(0,t)),a=Array.from(e.slice((s-cu)*o,s*o));return n===`complex64`&&(r=hu(r),a=hu(a)),[`[`+r.map((e,t)=>fu(e,i[t],n)).join(`, `)+`, ..., `+a.map((e,t)=>fu(e,i[s-cu+t],n)).join(`, `)+`]`]}return[`[`+(n===`complex64`?hu(e):Array.from(e)).map((e,t)=>fu(e,i[t],n)).join(`, `)+`]`]}let l=t.slice(1),u=r.slice(1),d=r[0]*o,f=[];if(s>su){for(let t=0;t<cu;t++){let r=t*d,a=r+d;f.push(...mu(e.slice(r,a),l,n,u,i,!1))}f.push(`...`);for(let t=s-cu;t<s;t++){let r=t*d,a=r+d;f.push(...mu(e.slice(r,a),l,n,u,i,t===s-1))}}else for(let t=0;t<s;t++){let r=t*d,a=r+d;f.push(...mu(e.slice(r,a),l,n,u,i,t===s-1))}let p=c===2?`,`:``;f[0]=`[`+(s>0?f[0]+p:``);for(let e=1;e<f.length-1;e++)f[e]=` `+f[e]+p;let m=`,
`;for(let e=2;e<c;e++)m+=`
`;return f[f.length-1]=` `+f[f.length-1]+`]`+(a?``:m),f}function hu(e){let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var gu=class{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=M(e),n!=null){let e=n.length;j(e===this.size,()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`)}if(t===`complex64`)throw Error(`complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).`);this.values=n||Ka(t,this.size),this.strides=N(e)}set(e,...t){t.length===0&&(t=[0]),j(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let n=this.locToIndex(t);this.values[n]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(let n of e){if(n<0||n>=this.shape[t]){let t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw Error(t)}t++}let n=e[e.length-1];for(let t=0;t<e.length-1;++t)n+=this.strides[t]*e[t];return this.values[n]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];let t=Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return _u().makeTensor(this.values,this.shape,this.dtype)}},_u=null,vu=null;function yu(e){_u=e}function bu(e){vu=e}var xu=class{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||`float32`,this.size=M(e),this.strides=N(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():`higher`}get rank(){return this.shape.length}async buffer(){let e=await this.data();return vu.buffer(this.shape,this.dtype,e)}bufferSync(){return vu.buffer(this.shape,this.dtype,this.dataSync())}async array(){let e=await this.data();return ao(this.shape,e,this.dtype===`complex64`)}arraySync(){return ao(this.shape,this.dataSync(),this.dtype===`complex64`)}async data(){this.throwIfDisposed();let e=_u().read(this.dataId);if(this.dtype===`string`){let t=await e;try{return t.map(e=>$l(e))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}}return e}dataToGPU(e){return this.throwIfDisposed(),_u().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=_u().readSync(this.dataId);if(this.dtype===`string`)try{return e.map(e=>$l(e))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}return e}async bytes(){this.throwIfDisposed();let e=await _u().read(this.dataId);return this.dtype===`string`?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),_u().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw Error(`Tensor is disposed.`)}print(e=!1){return vu.print(this,e)}clone(){return this.throwIfDisposed(),vu.clone(this)}toString(e=!1){return uu(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),vu.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),_u().makeVariable(this,e,t,n)}};Object.defineProperty(xu,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function F(){return To(`Tensor`,()=>xu)}F();var Su=class extends xu{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Ia(e.shape,this.shape))throw Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);_u().disposeTensor(this),this.dataId=e.dataId,_u().incRef(this,null)}dispose(){_u().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(Su,Symbol.hasInstance,{value:e=>e instanceof xu&&e.assign!=null&&e.assign instanceof Function});var Cu;(function(e){e.R0=`R0`,e.R1=`R1`,e.R2=`R2`,e.R3=`R3`,e.R4=`R4`,e.R5=`R5`,e.R6=`R6`})(Cu||={});var wu;(function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`int32`,e.complex64=`complex64`})(wu||={});var Tu;(function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`bool`,e.complex64=`complex64`})(Tu||={});var Eu;(function(e){e.float32=`float32`,e.int32=`float32`,e.bool=`float32`,e.complex64=`complex64`})(Eu||={});var Du;(function(e){e.float32=`complex64`,e.int32=`complex64`,e.bool=`complex64`,e.complex64=`complex64`})(Du||={});var Ou={float32:Eu,int32:wu,bool:Tu,complex64:Du};function ku(e,t){if(e===`string`||t===`string`){if(e===`string`&&t===`string`)return`string`;throw Error(`Can not upcast ${e} with ${t}`)}return Ou[e][t]}function Au(e){return ku(e,`int32`)}function ju(e){return typeof e==`object`&&!!e&&`texture`in e&&e.texture instanceof WebGLTexture}function Mu(e){return typeof GPUBuffer<`u`&&typeof e==`object`&&!!e&&`buffer`in e&&e.buffer instanceof GPUBuffer}function Nu(e,t){if(e.dtype===t.dtype)return[e,t];let n=ku(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function Pu(e,t){return t.some(t=>t.id===e.id)}function Fu(e){let t=[];return Iu(e,t,new Set),t}function Iu(e,t,n){if(e==null)return;if(e instanceof xu){t.push(e);return}if(!Lu(e))return;let r=e;for(let e in r){let i=r[e];n.has(i)||(n.add(i),Iu(i,t,n))}}function Lu(e){return Array.isArray(e)||typeof e==`object`}function Ru(e){return e.kernelName!=null}var zu=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}},Bu=class e{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new zu}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t];if(await this.initializeBackend(n).success){await this.setBackend(n);return}}throw Error(`Could not initialize any backends, all backend initializations failed.`)}get backend(){if(this.pendingBackendInit!=null)throw Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){let{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(yl(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;let{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new nu(this.backendInstance),!0}setupRegisteredKernels(){Tl(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Tl(e).forEach(t=>{t.disposeFunc!=null&&t.disposeFunc(this.registry[e])})}initializeBackend(e){let t=this.registryFactory[e];if(t==null)throw Error(`Cannot initialize backend ${e}, no registration found.`);try{let n=t.factory();if(n&&!(n instanceof Da)&&typeof n.then==`function`){let t=++this.pendingBackendInitId,r=n.then(n=>t<this.pendingBackendInitId?!1:(this.registry[e]=n,this.pendingBackendInit=null,!0)).catch(n=>t<this.pendingBackendInitId?!1:(this.pendingBackendInit=null,yl(`Initialization of backend ${e} failed`),yl(n.stack||n.message),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[e]=n,{success:!0,asyncInit:!1}}catch(t){return yl(`Initialization of backend ${e} failed`),yl(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw Error(`No backend found in registry.`);return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t],{success:r,asyncInit:i}=this.initializeBackend(n);if(i||r)return{name:n,asyncInit:i}}throw Error(`Could not initialize any backends, all backend initializations failed.`)}moveData(e,t){let n=this.state.tensorInfo.get(t),r=n.backend,i=this.readSync(t),a=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,i,n.shape,n.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n=null;if(t==null){if(typeof e!=`function`)throw Error(`Please provide a function to tidy()`);t=e}else{if(typeof e!=`string`&&!(e instanceof String))throw Error(`When calling with two arguments, the first argument to tidy() must be a string`);if(typeof t!=`function`)throw Error(`When calling with two arguments, the 2nd argument to tidy() must be a function`);n=e}let r;return this.scopedRun(()=>this.startScope(n),()=>this.endScope(r),()=>(r=t(),r instanceof Promise&&console.error(`Cannot return a Promise inside of tidy.`),r))}scopedRun(e,t,n){e();try{let e=n();return t(),e}catch(e){throw t(),e}}nextTensorId(){return e.nextTensorId++}nextVariableId(){return e.nextVariableId++}clone(e){let t=I.runKernel(Ns,{x:e}),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],e=>({x:()=>{let t={x:e};return I.runKernel(Ko,t,{dtype:`float32`})}}),[],{}),t}runKernel(e,t,n){if(this.backendName??this.backend,Cl(e,this.backendName)==null)throw Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool(`IS_TEST`)}checkKernelForMemLeak(e,t,n){let r=this.backend.numDataIds(),i=0;n.forEach(e=>{i+=e.dtype===`complex64`?3:1});let a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-i-a;if(o>0)throw Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[],r=this.isTapeOn(),i=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let o;this.backendName??this.backend;let s,c=Ru(e)?e.kernelName:this.state.activeScope==null?``:this.state.activeScope.name;if(Ru(e)){let{kernelName:t,inputs:i,attrs:a}=e;this.backendName??this.backend;let c=Cl(t,this.backendName);j(c!=null,()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`),o=()=>{let e=this.backend.numDataIds();s=c.kernelFunc({inputs:i,attrs:a,backend:this.backend});let o=Array.isArray(s)?s:[s];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,o);let l=o.map(e=>e.rank==null?this.makeTensorFromTensorInfo(e):e);if(r){let e=this.getTensorsForGradient(t,i,l);n=this.saveTensorsForBackwardMode(e)}return l}}else{let{forwardFunc:t}=e,i=e=>{r&&(n=e.map(e=>this.keep(this.clone(e))))};o=()=>{let e=this.backend.numDataIds();s=this.tidy(()=>t(this.backend,i));let n=Array.isArray(s)?s:[s];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,e,n),n}}let{inputs:l,attrs:u}=e,d=Ru(e)?null:e.backwardsFunc,f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool(`DEBUG`)&&!this.state.profiling?t=o():(f=this.profiler.profileKernel(c,l,()=>o()),this.ENV.getBool(`DEBUG`)&&this.profiler.logKernelProfile(f),t=f.outputs)}),r&&this.addTapeNode(c,l,t,d,n,u),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(l).map(e=>l[e]==null?null:l[e].shape),outputShapes:t.map(e=>e.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(s)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(e=>this.keep(this.clone(e)))}getTensorsForGradient(e,t,n){let r=wl(e);if(r!=null){let e=r.inputsToSave||[],i=r.outputsToSave||[],a;r.saveAllInputs?(j(Array.isArray(t),()=>`saveAllInputs is true, expected inputs to be an array.`),a=Object.keys(t).map(e=>t[e])):a=e.map(e=>t[e]);let o=n.filter((e,t)=>i[t]);return a.concat(o)}return[]}makeTensor(e,t,n,r){if(e==null)throw Error(`Values passed to engine.makeTensor() are null`);n||=`float32`,r||=this.backend;let i=e;n===`string`&&Qa(e[0])&&(i=e.map(e=>Ql(e)));let a=r.write(i,t,n),o=new xu(t,n,a,this.nextTensorId());if(this.trackTensor(o,r),n===`string`){let e=this.state.tensorInfo.get(a),t=Za(i);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,n,r){n||=`float32`;let i={dataId:e,shape:t,dtype:n};return this.makeTensorFromTensorInfo(i,r)}makeTensorFromTensorInfo(e,t){let{dataId:n,shape:r,dtype:i}=e,a=new xu(r,i,n,this.nextTensorId());return this.trackTensor(a,t),a}makeVariable(e,t=!0,n,r){n||=this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.cast(r));let i=new Su(e,t,n,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(e,t){this.state.numTensors++,e.dtype===`string`&&this.state.numStringTensors++;let n=0;e.dtype!==`complex64`&&e.dtype!==`string`&&(n=e.size*Xa(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof Su||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;let t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype===`string`&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!==`complex64`&&e.dtype!==`string`){let t=e.size*Xa(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(let e in this.state.registeredVariables){let t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){let e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons??=[],e.reasons.push(`Memory usage by string tensors is approximate (2 bytes per character)`)),e}async profile(e){this.state.profiling=!0;let t=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(e=>e.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n;for(let e of this.state.activeProfile.kernels)e.kernelTimeMs=await e.kernelTimeMs,e.extraInfo=await e.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,n,r,i,a){let o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:i},s=wl(e);s!=null&&(r=s.gradFunc),r!=null&&(o.gradient=e=>(e=e.map((e,t)=>{if(e==null){let e=n[t],r=co(e.size,e.dtype);return this.makeTensor(r,e.shape,e.dtype)}return e}),r(e.length>1?e:e[0],i,a))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){let t={track:[],name:`unnamed scope`,id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){let t=Fu(e),n=new Set(t.map(e=>e.id));for(let e=0;e<this.state.activeScope.track.length;e++){let t=this.state.activeScope.track[e];!t.kept&&!n.has(t.id)&&t.dispose()}let r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(e=>{!e.kept&&e.scopeId===r.id&&this.track(e)})}gradients(e,t,n,r=!1){if(j(t.length>0,()=>`gradients() received an empty list of xs.`),n!=null&&n.dtype!==`float32`)throw Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy(`forward`,e));j(i instanceof xu,()=>`The result y returned by f() must be a tensor.`);let a=au(this.state.activeTape,t,i);if(!r&&a.length===0&&t.length>0)throw Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.`);return this.tidy(`backward`,()=>{let e={};e[i.id]=n??Vu(i.shape),ou(e,a,e=>this.tidy(e),Uu);let r=t.map(t=>e[t.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(e=>{for(let t of e.saved)t.dispose()}),this.state.activeTape=null),{value:i,grads:r}})}customGrad(e){return j(no(e),()=>`The f passed in customGrad(f) must be a function.`),(...t)=>{j(t.every(e=>e instanceof xu),()=>`The args passed in customGrad(f)(x1, x2,...) must all be tensors`);let n,r={};return t.forEach((e,t)=>{r[t]=e}),this.runKernelFunc({forwardFunc:(r,i)=>(n=e(...t,i),j(n.value instanceof xu,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),j(no(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),backwardsFunc:(e,r)=>{let i=n.gradFunc(e,r),a=Array.isArray(i)?i:[i];j(a.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),j(a.every(e=>e instanceof xu),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let o={};return a.forEach((e,t)=>{o[t]=()=>e}),o},inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){let t=Zl(),n=await this.backend.time(e);return n.wallMs=Zl()-t,n}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new zu;for(let e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};Bu.nextTensorId=0,Bu.nextVariableId=0;function Vu(e){let t=so(M(e),`float32`);return I.makeTensor(t,e,`float32`)}function Hu(){let e=Co();return e._tfengine??=new Bu(new go(e)),xo(e._tfengine.ENV),yu(()=>e._tfengine),e._tfengine}var I=Hu();function Uu(e,t){let n={a:e,b:t};return I.runKernel(`Add`,n)}function Wu(){return typeof navigator<`u`&&navigator!=null}var Gu;function Ku(e){if(Gu!==void 0)return Gu;if(e||Wu()){if(e||=navigator,e.product===`ReactNative`)return!0;let t=e.userAgent||e.vendor||(typeof window<`u`?window.opera:``);if(!t){let t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function qu(){return typeof window<`u`&&window.document!=null||typeof WorkerGlobalScope<`u`}var Ju=P();Ju.registerFlag(`DEBUG`,()=>!1,e=>{e&&console.warn(`Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.`)}),Ju.registerFlag(`IS_BROWSER`,()=>qu()),Ju.registerFlag(`IS_NODE`,()=>typeof process<`u`&&process.versions!==void 0&&process.versions.node!==void 0),Ju.registerFlag(`IS_CHROME`,()=>typeof navigator<`u`&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),Ju.registerFlag(`IS_SAFARI`,()=>typeof navigator<`u`&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),Ju.registerFlag(`PROD`,()=>!1),Ju.registerFlag(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`,()=>Ju.getBool(`DEBUG`)),Ju.registerFlag(`DEPRECATION_WARNINGS_ENABLED`,()=>!0),Ju.registerFlag(`IS_TEST`,()=>!1),Ju.registerFlag(`CHECK_COMPUTATION_FOR_ERRORS`,()=>Ju.getBool(`DEBUG`)),Ju.registerFlag(`WRAP_TO_IMAGEBITMAP`,()=>!1),Ju.registerFlag(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`,()=>!1),Ju.registerFlag(`USE_SETTIMEOUTCUSTOM`,()=>!1);function Yu(e,t){let n=e;if(eu(e))return t===`string`?[]:[e.length];if(ju(e)){let t=e.channels||`RGBA`;return[e.height,e.width*t.length]}else if(Mu(e))return[e.buffer.size/(t==null?4:Xa(t))];if(!Array.isArray(e))return[];let r=[];for(;Array.isArray(n)||eu(n)&&t!==`string`;)r.push(n.length),n=n[0];return Array.isArray(e)&&P().getBool(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`)&&Xu(e,r,[]),r}function Xu(e,t,n){if(n||=[],!Array.isArray(e)&&!eu(e)){j(t.length===0,()=>`Element arr[${n.join(`][`)}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}j(t.length>0,()=>`Element arr[${n.join(`][`)}] should be a primitive, but is an array of ${e.length} elements`),j(e.length===t[0],()=>`Element arr[${n.join(`][`)}] should have ${t[0]} elements, but has ${e.length} elements`);let r=t.slice(1);for(let t=0;t<e.length;++t)Xu(e[t],r,n.concat(t))}function Zu(e,t,n,r){if(e!==`string_or_numeric`){if(e==null)throw Error(`Expected dtype cannot be null.`);if(e!==`numeric`&&e!==t||e===`numeric`&&t===`string`)throw Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function L(e,t,n,r=`numeric`){if(e instanceof F())return Zu(r,e.dtype,t,n),e;let i=to(e);if(i!==`string`&&[`bool`,`int32`,`float32`].indexOf(r)>=0&&(i=r),Zu(r,i,t,n),e==null||!eu(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`){let r=e==null?`null`:e.constructor.name;throw Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}let a=Yu(e,i);!eu(e)&&!Array.isArray(e)&&(e=[e]);let o=i===`string`?tu(e,[],!0):Xl(e,i);return I.makeTensor(o,a,i)}function Qu(e,t,n,r=`numeric`){if(!Array.isArray(e))throw Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((e,i)=>L(e,`${t}[${i}]`,n,r))}var $u=`__op`;function R(e){let t=Object.keys(e);if(t.length!==1)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0],r=e[n];n.endsWith(`_`)&&(n=n.substring(0,n.length-1)),n+=$u;let i=(...e)=>{I.startScope(n);try{let t=r(...e);return mo(t)&&console.error(`Cannot return a Promise inside of tidy.`),I.endScope(t),t}catch(e){throw I.endScope(null),e}};return Object.defineProperty(i,`name`,{value:n,configurable:!0}),i}function ed(e,t){let n=L(e,`real`,`complex`),r=L(t,`imag`,`complex`);Pa(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);let i={real:n,imag:r};return I.runKernel(Yo,i)}var td=R({complex_:ed});function nd(e,t,n,r){if(r==null)r=to(e);else if(r===`complex64`)throw Error(`Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).`);if(Mu(e)||ju(e)){if(r!==`float32`&&r!==`int32`)throw Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return I.backend.createTensorFromGPUData(e,t||n,r)}if(!eu(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`)throw Error(`values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray`);if(t!=null){uo(t);let e=M(t),r=M(n);j(e===r,()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`);for(let e=0;e<n.length;++e){let r=n[e],i=e===n.length-1?r!==M(t.slice(e)):!0;j(n[e]===t[e]||!i,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!eu(e)&&!Array.isArray(e)&&(e=[e]),t||=n,e=r===`string`?tu(e,[],!0):Xl(e,r),I.makeTensor(e,t,r)}function rd(e,t,n){return nd(e,t,Yu(e,n),n)}var id={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8},ad=class e{static join(t){return new e(t).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(e=>eu(e)?e.buffer:e),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let n=0;n<e.length;n++){let r=e[n];n!==e.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);let i=t+r.byteLength;this.shards.push({buffer:r,start:t,end:i}),t=i}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0||(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e))return new ArrayBuffer(0);let n=this.findShardForByte(e);if(n===-1)throw Error(`Could not find start shard for byte ${e}`);let r=t-e,i=new ArrayBuffer(r),a=new Uint8Array(i),o=0;for(let r=n;r<this.shards.length;r++){let n=this.shards[r],i=e+o-n.start,s=o,c=Math.min(t,n.end)-n.start,l=new Uint8Array(n.buffer,i,c-i);if(a.set(l,s),o+=l.length,t<n.end)break}return i}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(t){return e<t.start?-1:+(e>=t.end)}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;let n=od(this.shards,t);return n===-1?-1:(this.previousShardIndex=n,this.previousShardIndex)}};function od(e,t){let n=0,r=e.length;for(;n<=r;){let i=Math.floor((r-n)/2)+n,a=t(e[i]);if(a===0)return i;a<0?r=i:n=i+1}return-1}function sd(){return I}function cd(){return I.memory()}function z(e,t){return I.tidy(e,t)}function ld(e){Fu(e).forEach(e=>e.dispose())}function ud(e){return I.keep(e)}function dd(e,t,n=1){return I.registerBackend(e,t,n)}function fd(){return I.backend}var pd=4;async function md(e,t){let n=[],r=[],i=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);for(let a=0;a<i.length;++a){let o=i[a],s=Array.isArray(e)?e[a].tensor:e[o];if(s.dtype!==`float32`&&s.dtype!==`int32`&&s.dtype!==`bool`&&s.dtype!==`string`&&s.dtype!==`complex64`)throw Error(`Unsupported dtype in weight '${o}': ${s.dtype}`);let c={name:o,shape:s.shape,dtype:s.dtype};if(s.dtype===`string`){let e=new Promise(async e=>{let t=await s.bytes(),n=t.reduce((e,t)=>e+t.length,0)+pd*t.length,r=new Uint8Array(n),i=0;for(let e=0;e<t.length;e++){let n=t[e],a=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(a,i),i+=pd,r.set(n,i),i+=n.length}e(r)});r.push(e)}else r.push(s.data());t!=null&&(c.group=t),n.push(c)}return{data:vd(await Promise.all(r)),specs:n}}function hd(e,t){let n=new ad(e),r={},i=0;for(let e of t){let t=gd(e,(e,t)=>n.slice(i+e,i+t));r[e.name]=_d(e,n.slice(i,i+t)),i+=t}return r}function gd(e,t){let n=M(e.shape),r;if(`quantization`in e)r=id[e.quantization.dtype];else if(e.dtype===`string`){let e=0;for(let r=0;r<n;r++)e+=pd+new Uint32Array(t(e,e+pd))[0];return e}else r=id[e.dtype];return n*r}function _d(e,t){let n=e.name,r=e.dtype,i=e.shape,a=M(i),o,s=0;if(`quantization`in e){let i=e.quantization;if(i.dtype===`uint8`||i.dtype===`uint16`){if(!(`min`in i&&`scale`in i))throw Error(`Weight ${e.name} with quantization ${i.dtype} doesn't have corresponding metadata min and scale.`)}else if(i.dtype===`float16`){if(r!==`float32`)throw Error(`Weight ${e.name} is quantized with ${i.dtype} which only supports weights of type float32 not ${r}.`)}else throw Error(`Weight ${e.name} has unknown quantization dtype ${i.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let c=id[i.dtype],l=i.dtype===`uint8`?new Uint8Array(t):new Uint16Array(t);if(r===`float32`)if(i.dtype===`uint8`||i.dtype===`uint16`){o=new Float32Array(l.length);for(let e=0;e<l.length;e++){let t=l[e];o[e]=t*i.scale+i.min}}else if(i.dtype===`float16`)o=Md()(l);else throw Error(`Unsupported quantization type ${i.dtype} for weight type float32.`);else if(r===`int32`){if(i.dtype!==`uint8`&&i.dtype!==`uint16`)throw Error(`Unsupported quantization type ${i.dtype} for weight type int32.`);o=new Int32Array(l.length);for(let e=0;e<l.length;e++){let t=l[e];o[e]=Math.round(t*i.scale+i.min)}}else throw Error(`Unsupported dtype in weight '${n}': ${r}`);s+=a*c}else if(r===`string`){let n=M(e.shape);o=[];for(let e=0;e<n;e++){let e=new Uint32Array(t.slice(s,s+pd))[0];s+=pd;let n=new Uint8Array(t.slice(s,s+e));o.push(n),s+=e}}else{let e=id[r];if(r===`float32`)o=new Float32Array(t);else if(r===`int32`)o=new Int32Array(t);else if(r===`bool`)o=new Uint8Array(t);else if(r===`complex64`){o=new Float32Array(t);let e=new Float32Array(o.length/2),n=new Float32Array(o.length/2);for(let t=0;t<e.length;t++)e[t]=o[t*2],n[t]=o[t*2+1];let r=rd(e,i,`float32`),a=rd(n,i,`float32`),s=td(r,a);return r.dispose(),a.dispose(),s}else throw Error(`Unsupported dtype in weight '${n}': ${r}`);s+=a*e}return rd(o,i,r)}function vd(e){if(e===null)throw Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0,n=[];e.forEach(e=>{if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)});let r=new Uint8Array(t),i=0;return n.forEach(e=>{r.set(new Uint8Array(e.buffer),i),i+=e.byteLength}),r.buffer}var yd=typeof Buffer<`u`&&(typeof Blob>`u`||typeof atob>`u`||typeof btoa>`u`);function bd(e){return yd?Buffer.byteLength(e,`utf8`):new Blob([e]).size}function xd(e){if(yd)return Buffer.from(e).toString(`base64`);let t=new Uint8Array(e),n=``;for(let e=0,r=t.length;e<r;e++)n+=String.fromCharCode(t[e]);return btoa(n)}function Sd(e){if(yd){let t=Buffer.from(e,`base64`);return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n.set([t.charCodeAt(e)],e);return n.buffer}function Cd(e){return ad.join(e)}function wd(e,t){let n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function Td(e,t,n){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw Error(`modelJSON has weightsManifest but weightSpecs is null`);if(!n)throw Error(`modelJSON has weightsManifest but weightData is null`);r.weightSpecs=t,r.weightData=n}return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(r.initializerSignature=e.initializerSignature),r}async function Ed(e,t){let n,r;return e.weightsManifest!=null&&([n,r]=await t(e.weightsManifest)),Td(e,n,r)}function Dd(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`Expected JSON model topology, received ArrayBuffer.`);return{dateSaved:new Date,modelTopologyType:`JSON`,modelTopologyBytes:e.modelTopology==null?0:bd(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:bd(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:new ad(e.weightData).byteLength}}function Od(e){let t=[];for(let n of e)t.push(...n.weights);return t}function kd(){let e=e=>{let t=e<<13,n=0;for(;!(t&8388608);)n-=8388608,t<<=1;return t&=-8388609,n+=947912704,t|n},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function Ad(){let e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function jd(){let e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function Md(){let e=kd(),t=Ad(),n=jd();return r=>{let i=new ArrayBuffer(4*r.length),a=new Uint32Array(i);for(let i=0;i<r.length;i++){let o=r[i];a[i]=e[n[o>>10]+(o&1023)]+t[o>>10]}return new Float32Array(i)}}var Nd=class e{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return e.instance??=new e,e.instance}static registerSaveRouter(t){e.getInstance().saveRouters.push(t)}static registerLoadRouter(t){e.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return e.getHandlers(t,`save`)}static getLoadHandlers(t,n){return e.getHandlers(t,`load`,n)}static getHandlers(t,n,r){let i=[];return(n===`load`?e.getInstance().loadRouters:e.getInstance().saveRouters).forEach(e=>{let n=e(t,r);n!==null&&i.push(n)}),i}},Pd=e=>Nd.getSaveHandlers(e),Fd=(e,t)=>Nd.getLoadHandlers(e,t),Id=`tensorflowjs`,Ld=1,Rd=`models_store`,zd=`model_info_store`;function Bd(){if(!P().getBool(`IS_BROWSER`))throw Error(`Failed to obtain IndexedDB factory because the current environmentis not a web browser.`);let e=typeof window>`u`?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw Error(`The current browser does not appear to support IndexedDB.`);return t}function Vd(e){let t=e.result;t.createObjectStore(Rd,{keyPath:`modelPath`}),t.createObjectStore(zd,{keyPath:`modelPath`})}var Hd=class{constructor(e){if(this.indexedDB=Bd(),e==null||!e)throw Error(`For IndexedDB, modelPath must not be null, undefined or empty.`);this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((e,n)=>{let r=this.indexedDB.open(Id,Ld);r.onupgradeneeded=()=>Vd(r),r.onsuccess=()=>{let i=r.result;if(t==null){let t=i.transaction(Rd,`readonly`),r=t.objectStore(Rd).get(this.modelPath);r.onsuccess=()=>{if(r.result==null)return i.close(),n(Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(r.result.modelArtifacts)},r.onerror=e=>(i.close(),n(r.error)),t.oncomplete=()=>i.close()}else{t.weightData=ad.join(t.weightData);let r=Dd(t),a=i.transaction(zd,`readwrite`),o=a.objectStore(zd),s;try{s=o.put({modelPath:this.modelPath,modelArtifactsInfo:r})}catch(e){return n(e)}let c;s.onsuccess=()=>{c=i.transaction(Rd,`readwrite`);let s=c.objectStore(Rd),l;try{l=s.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:r})}catch(e){return n(e)}l.onsuccess=()=>e({modelArtifactsInfo:r}),l.onerror=e=>{o=a.objectStore(zd);let t=o.delete(this.modelPath);t.onsuccess=()=>(i.close(),n(l.error)),t.onerror=e=>(i.close(),n(l.error))}},s.onerror=e=>(i.close(),n(s.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}}},r.onerror=e=>n(r.error)})}};Hd.URL_SCHEME=`indexeddb://`;var Ud=e=>P().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(Hd.URL_SCHEME)?Wd(e.slice(Hd.URL_SCHEME.length)):null;Nd.registerSaveRouter(Ud),Nd.registerLoadRouter(Ud);function Wd(e){return new Hd(e)}function Gd(e){return e.startsWith(Hd.URL_SCHEME)?e.slice(Hd.URL_SCHEME.length):e}var Kd=class{constructor(){this.indexedDB=Bd()}async listModels(){return new Promise((e,t)=>{let n=this.indexedDB.open(Id,Ld);n.onupgradeneeded=()=>Vd(n),n.onsuccess=()=>{let r=n.result,i=r.transaction(zd,`readonly`),a=i.objectStore(zd).getAll();a.onsuccess=()=>{let t={};for(let e of a.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},a.onerror=e=>(r.close(),t(a.error)),i.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)})}async removeModel(e){return e=Gd(e),new Promise((t,n)=>{let r=this.indexedDB.open(Id,Ld);r.onupgradeneeded=()=>Vd(r),r.onsuccess=()=>{let i=r.result,a=i.transaction(zd,`readwrite`),o=a.objectStore(zd),s=o.get(e),c;s.onsuccess=()=>{if(s.result==null)return i.close(),n(Error(`Cannot find model with path '${e}' in IndexedDB.`));{let r=o.delete(e),a=()=>{c=i.transaction(Rd,`readwrite`);let r=c.objectStore(Rd).delete(e);r.onsuccess=()=>t(s.result.modelArtifactsInfo),r.onerror=e=>n(s.error)};r.onsuccess=a,r.onerror=e=>(a(),i.close(),n(s.error))}},s.onerror=e=>(i.close(),n(s.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}},r.onerror=e=>n(r.error)})}},qd=`/`,Jd=`tensorflowjs_models`,Yd=`info`,Xd=`model_topology`,Zd=`weight_specs`,Qd=`weight_data`,$d=`model_metadata`;function ef(e){return{info:[Jd,e,Yd].join(qd),topology:[Jd,e,Xd].join(qd),weightSpecs:[Jd,e,Zd].join(qd),weightData:[Jd,e,Qd].join(qd),modelMetadata:[Jd,e,$d].join(qd)}}function tf(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}function nf(e){let t=e.split(qd);if(t.length<3)throw Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(qd)}function rf(e){return e.startsWith(af.URL_SCHEME)?e.slice(af.URL_SCHEME.length):e}var af=class{constructor(e){if(!P().getBool(`IS_BROWSER`)||typeof window>`u`||window.localStorage===void 0)throw Error(`The current environment does not support local storage.`);if(this.LS=window.localStorage,e==null||!e)throw Error(`For local storage, modelPath must not be null, undefined or empty.`);this.modelPath=e,this.keys=ef(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);{let t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=Dd(e),i=ad.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,xd(i));let a={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature==null?void 0:e.signature,userDefinedMetadata:e.userDefinedMetadata==null?void 0:e.userDefinedMetadata,modelInitializer:e.modelInitializer==null?void 0:e.modelInitializer,initializerSignature:e.initializerSignature==null?void 0:e.initializerSignature,trainingConfig:e.trainingConfig==null?void 0:e.trainingConfig};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch{throw tf(this.keys),Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){let e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!==`JSON`)throw Error(`BrowserLocalStorage does not support loading non-JSON model topology yet.`);let t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(n==null)throw Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;let r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;let i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){let e=JSON.parse(i);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,e.signature!=null&&(t.signature=e.signature),e.userDefinedMetadata!=null&&(t.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(t.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(t.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(t.trainingConfig=e.trainingConfig)}let a=this.LS.getItem(this.keys.weightData);if(a==null)throw Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=Sd(a),t}};af.URL_SCHEME=`localstorage://`;var of=e=>P().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(af.URL_SCHEME)?sf(e.slice(af.URL_SCHEME.length)):null;Nd.registerSaveRouter(of),Nd.registerLoadRouter(of);function sf(e){return new af(e)}var cf=class{constructor(){j(P().getBool(`IS_BROWSER`),()=>`Current environment is not a web browser`),j(typeof window>`u`||window.localStorage!==void 0,()=>`Current browser does not appear to support localStorage`),this.LS=window.localStorage}async listModels(){let e={},t=Jd+qd,n=qd+Yd;for(let r=0;r<this.LS.length;++r){let i=this.LS.key(r);if(i.startsWith(t)&&i.endsWith(n)){let t=nf(i);e[t]=JSON.parse(this.LS.getItem(i))}}return e}async removeModel(e){e=rf(e);let t=ef(e);if(this.LS.getItem(t.info)==null)throw Error(`Cannot find model at path '${e}'`);let n=JSON.parse(this.LS.getItem(t.info));return tf(t),n}},lf=`://`,uf=class e{constructor(){this.managers={}}static getInstance(){return e.instance??=new e,e.instance}static registerManager(t,n){j(t!=null,()=>`scheme must not be undefined or null.`),t.endsWith(lf)&&(t=t.slice(0,t.indexOf(lf))),j(t.length>0,()=>`scheme must not be an empty string.`);let r=e.getInstance();j(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){let n=e.getInstance().managers[t];if(n==null)throw Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(e.getInstance().managers)}},df=class{constructor(){this.messageName=`setTimeoutCustom`,this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder??=new TextEncoder,this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>`u`||!P().getBool(`USE_SETTIMEOUTCUSTOM`)){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},`*`)},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener(`message`,e=>{if(e.source===window&&e.data.name===this.messageName){e.stopPropagation();let t=this.functionRefs[e.data.index];t(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return kl(e)}};if(P().get(`IS_BROWSER`)){P().setPlatform(`browser`,new df);try{uf.registerManager(af.URL_SCHEME,new cf)}catch{}try{uf.registerManager(Hd.URL_SCHEME,new Kd)}catch{}}var ff=o(((e,t)=>{t.exports={}})),pf={importFetch:()=>ff()},mf,hf=class{constructor(){this.util=ff(),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return P().global.fetch==null?(mf??=pf.importFetch(),mf(e,t)):P().global.fetch(e,t)}now(){let e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?``:new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}};P().get(`IS_NODE`)&&!P().get(`IS_BROWSER`)&&P().setPlatform(`node`,new hf);function gf(e,t=`float32`,n){return t||=`float32`,uo(e),new gu(e,t,n)}function _f(e,t){let n=L(e,`x`,`cast`);if(!Ja(t))throw Error(`Failed to cast to unknown dtype ${t}`);if(t===`string`&&n.dtype!==`string`||t!==`string`&&n.dtype===`string`)throw Error(`Only strings can be casted to strings`);let r={x:n},i={dtype:t};return I.runKernel(Ko,r,i)}var B=R({cast_:_f});function vf(e){let t={x:L(e,`x`,`clone`,`string_or_numeric`)};return I.runKernel(Ns,t)}var yf=R({clone_:vf});function bf(e,t=!1){console.log(e.toString(t))}Hu(),bu({buffer:gf,cast:B,clone:yf,print:bf});function xf(e,t){let n=L(e,`a`,`add`),r=L(t,`b`,`add`);[n,r]=Nu(n,r);let i={a:n,b:r};return I.runKernel(`Add`,i)}var V=R({add_:xf});function Sf(e,t){let n=L(e,`a`,`floorDiv`),r=L(t,`b`,`floorDiv`);[n,r]=Nu(n,r);let i={a:n,b:r};return I.runKernel(Ds,i)}var Cf=R({floorDiv_:Sf});function wf(e,t){let n=L(e,`a`,`div`),r=L(t,`b`,`div`);if([n,r]=Nu(n,r),n.dtype===`int32`&&r.dtype===`int32`)return Cf(n,r);let i={a:n,b:r};return I.runKernel(vs,i,{})}var H=R({div_:wf});function Tf(e,t){let n=L(e,`a`,`mul`),r=L(t,`b`,`mul`);[n,r]=Nu(n,r);let i={a:n,b:r};return I.runKernel(ac,i)}var U=R({mul_:Tf});function Ef(e){let t=L(e,`x`,`abs`);if(t.dtype===`complex64`){let e={x:t};return I.runKernel(Xo,e)}else{let e={x:t};return I.runKernel(`Abs`,e)}}var Df=R({abs_:Ef});function Of(e){let t={x:L(e,`x`,`acos`)};return I.runKernel(Eo,t)}var kf=R({acos_:Of});function Af(e){let t={x:L(e,`x`,`acosh`)};return I.runKernel(Do,t)}var jf=R({acosh_:Af});function Mf(e,t=null,n=!1){let r={x:L(e,`x`,`all`,`bool`)},i={axis:t,keepDims:n};return I.runKernel(`All`,r,i)}var Nf=R({all_:Mf});function Pf(e,t=null,n=!1){let r={x:L(e,`x`,`any`,`bool`)},i={axis:t,keepDims:n};return I.runKernel(`Any`,r,i)}var Ff=R({any_:Pf});function If(e,t=0){let n={x:L(e,`x`,`argMax`)},r={axis:t};return I.runKernel(ko,n,r)}var Lf=R({argMax_:If});function Rf(e,t=0){let n={x:L(e,`x`,`argMin`)},r={axis:t};return I.runKernel(Ao,n,r)}var zf=R({argMin_:Rf});function Bf(e){let t={x:L(e,`x`,`asin`)};return I.runKernel(jo,t)}var Vf=R({asin_:Bf});function Hf(e){let t={x:L(e,`x`,`asinh`)};return I.runKernel(Mo,t)}var Uf=R({asinh_:Hf});function Wf(e){let t={x:L(e,`x`,`atan`)};return I.runKernel(No,t)}var Gf=R({atan_:Wf});function Kf(e,t){let n=L(e,`a`,`atan2`),r=L(t,`b`,`atan2`);[n,r]=Nu(n,r);let i={a:n,b:r};return I.runKernel(Fo,i)}var qf=R({atan2_:Kf});function Jf(e){let t={x:L(e,`x`,`atanh`)};return I.runKernel(Po,t)}var Yf=R({atanh_:Jf});function Xf(e,t,n,r,i=`NHWC`,a){let o=e[3];return $f(e,[...t,o],n,a,r,null,null,pp(i))}function Zf(e,t,n,r,i,a,o=`channelsLast`){let[s,c]=ip(t),l;if(o===`channelsLast`)l=[s,c,e[3],e[3]];else if(o===`channelsFirst`)l=[s,c,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return $f(e,l,n,r,i,a,!1,o)}function Qf(e,t,n,r,i,a,o=`NDHWC`){let[s,c,l]=ap(t),u,d;if(o===`NDHWC`)d=`channelsLast`,u=[s,c,l,e[4],e[4]];else if(o===`NCDHW`)d=`channelsFirst`,u=[s,c,l,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return ep(e,u,n,r,i,!1,d,a)}function $f(e,t,n,r,i,a,o=!1,s=`channelsLast`){let[c,l,u,d]=[-1,-1,-1,-1];if(s===`channelsLast`)[c,l,u,d]=e;else if(s===`channelsFirst`)[c,d,l,u]=e;else throw Error(`Unknown dataFormat ${s}`);let[f,p,,m]=t,[h,g]=ip(n),[_,v]=ip(r),y=op(f,_),b=op(p,v),{padInfo:x,outHeight:S,outWidth:C}=sp(i,l,u,h,g,y,b,a,s),w=o?m*d:m,T;return s===`channelsFirst`?T=[c,w,S,C]:s===`channelsLast`&&(T=[c,S,C,w]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:u,inChannels:d,outHeight:S,outWidth:C,outChannels:w,padInfo:x,strideHeight:h,strideWidth:g,filterHeight:f,filterWidth:p,effectiveFilterHeight:y,effectiveFilterWidth:b,dilationHeight:_,dilationWidth:v,inShape:e,outShape:T,filterShape:t}}function ep(e,t,n,r,i,a=!1,o=`channelsLast`,s){let[c,l,u,d,f]=[-1,-1,-1,-1,-1];if(o===`channelsLast`)[c,l,u,d,f]=e;else if(o===`channelsFirst`)[c,f,l,u,d]=e;else throw Error(`Unknown dataFormat ${o}`);let[p,m,h,,g]=t,[_,v,y]=ap(n),[b,x,S]=ap(r),C=op(p,b),w=op(m,x),T=op(h,S),{padInfo:E,outDepth:D,outHeight:O,outWidth:k}=cp(i,l,u,d,_,v,y,C,w,T,s),ee=a?g*f:g,A;return o===`channelsFirst`?A=[c,ee,D,O,k]:o===`channelsLast`&&(A=[c,D,O,k,ee]),{batchSize:c,dataFormat:o,inDepth:l,inHeight:u,inWidth:d,inChannels:f,outDepth:D,outHeight:O,outWidth:k,outChannels:ee,padInfo:E,strideDepth:_,strideHeight:v,strideWidth:y,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:C,effectiveFilterHeight:w,effectiveFilterWidth:T,dilationDepth:b,dilationHeight:x,dilationWidth:S,inShape:e,outShape:A,filterShape:t}}function tp(e,t,n,r,i){r??=rp(e,t,n);let a=e[0],o=e[1];return[lp((a-t+2*r)/n+1,i),lp((o-t+2*r)/n+1,i)]}function np(e,t,n,r,i,a){i??=rp(e,t[0],r[0]);let o=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(o[n]=lp((e[n]-t[n]+2*i)/r[n]+1,a));return o}function rp(e,t,n,r=1){let i=op(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)}function ip(e){return typeof e==`number`?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function ap(e){return typeof e==`number`?[e,e,e]:e}function op(e,t){return t<=1?e:e+(e-1)*(t-1)}function sp(e,t,n,r,i,a,o,s,c){let l,u,d;if(typeof e==`number`){l={top:e,bottom:e,left:e,right:e,type:e===0?`VALID`:`NUMBER`};let i=tp([t,n],a,r,e,s);u=i[0],d=i[1]}else if(e===`same`){u=Math.ceil(t/r),d=Math.ceil(n/i);let e=Math.max(0,(u-1)*r+a-t),s=Math.max(0,(d-1)*i+o-n),c=Math.floor(e/2),f=e-c,p=Math.floor(s/2);l={top:c,bottom:f,left:p,right:s-p,type:`SAME`}}else if(e===`valid`)l={top:0,bottom:0,left:0,right:0,type:`VALID`},u=Math.ceil((t-a+1)/r),d=Math.ceil((n-o+1)/i);else if(typeof e==`object`){let f=c===`channelsLast`?e[1][0]:e[2][0],p=c===`channelsLast`?e[1][1]:e[2][1],m=c===`channelsLast`?e[2][0]:e[3][0],h=c===`channelsLast`?e[2][1]:e[3][1];l={top:f,bottom:p,left:m,right:h,type:f===0&&p===0&&m===0&&h===0?`VALID`:`EXPLICIT`},u=lp((t-a+f+p)/r+1,s),d=lp((n-o+m+h)/i+1,s)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:u,outWidth:d}}function cp(e,t,n,r,i,a,o,s,c,l,u){let d,f,p,m;if(e===`valid`&&(e=0),typeof e==`number`){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?`VALID`:`NUMBER`};let h=np([t,n,r,1],[s,c,l],1,[i,a,o],e,u);f=h[0],p=h[1],m=h[2]}else if(e===`same`){f=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/o);let e=(f-1)*i+s-t,u=(p-1)*a+c-n,h=(m-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(u/2),y=u-v,b=Math.floor(h/2);d={top:v,bottom:y,left:b,right:h-b,front:g,back:_,type:`SAME`}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:f,outHeight:p,outWidth:m}}function lp(e,t){if(!t)return Math.trunc(e);switch(t){case`round`:return Math.round(e);case`ceil`:return Math.ceil(e);case`floor`:return Math.floor(e);default:throw Error(`Unknown roundingMode ${t}`)}}function up(e){let[t,n,r]=ip(e);return t===1&&n===1&&r===1}function dp(e,t){return up(e)||up(t)}function fp(e){return ip(e).every(e=>e>0)}function pp(e){if(e===`NHWC`)return`channelsLast`;if(e===`NCHW`)return`channelsFirst`;throw Error(`Unknown dataFormat ${e}`)}function mp(e,t,n){if(n!=null){if(typeof t==`string`)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t==`number`)j(La(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t==`object`)t.forEach(t=>{t.forEach(t=>{j(La(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}function hp(e,t){let n={x:L(e,`x`,`reshape`,`string_or_numeric`)},r={shape:t};return I.runKernel(Cc,n,r)}var W=R({reshape_:hp});function gp(e,t,n,r,i){let a=L(e,`x`,`avgPool`,`float32`);j(dp(n,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`);let o=a,s=!1;a.rank===3&&(s=!0,o=W(a,[1,a.shape[0],a.shape[1],a.shape[2]])),j(o.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`),mp(`avgPool`,r,i);let c={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:i},u=I.runKernel(Io,c,l);return u=B(u,a.dtype),s?W(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var _p=R({avgPool_:gp});function vp(e,t,n,r,i,a=`NDHWC`){let o=L(e,`x`,`avgPool3d`,`float32`),s=o,c=!1;o.rank===4&&(c=!0,s=W(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),j(s.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${s.rank}.`),j(a===`NDHWC`,()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),j(typeof n==`number`&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),mp(`avgPool3d`,r,i);let l={x:s},u={filterSize:t,strides:n,pad:r,dimRoundingMode:i,dataFormat:a},d=I.runKernel(Ro,l,u);return d=B(d,s.dtype),c?W(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var yp=R({avgPool3d_:vp});function bp(e,t=0){j(e.length>=1,()=>`Pass at least one tensor to concat`);let n=Qu(e,`tensors`,`concat`,`string_or_numeric`);if(n[0].dtype===`complex64`&&n.forEach(e=>{if(e.dtype!==`complex64`)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${e.dtype}. `)}),n.length===1)return yf(n[0]);let r=n,i={axis:t};return I.runKernel(Zo,r,i)}var xp=R({concat_:bp});function Sp(e,t,n=!1,r=!1){let i=L(e,`a`,`matMul`),a=L(t,`b`,`matMul`);[i,a]=Nu(i,a);let o={a:i,b:a},s={transposeA:n,transposeB:r};return I.runKernel(Bo,o,s)}var Cp=R({matMul_:Sp});function wp(e){let t={x:L(e,`x`,`sigmoid`,`float32`)};return I.runKernel(Bc,t)}var Tp=R({sigmoid_:wp});function Ep(e,t,n){let r=L(e,`x`,`slice`,`string_or_numeric`);if(r.rank===0)throw Error(`Slicing scalar is not possible`);let i={x:r},a={begin:t,size:n};return I.runKernel(Lc,i,a)}var Dp=R({slice_:Ep});function Op(e){let t={x:L(e,`x`,`tanh`,`float32`)};return I.runKernel(il,t)}var kp=R({tanh_:Op});function Ap(e,t,n){let r=L(e,`x`,`batchToSpaceND`),i=t.reduce((e,t)=>e*t);j(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),j(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),j(r.shape[0]%i===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(` * `)} === ${i}`);let a={x:r},o={blockShape:t,crops:n};return I.runKernel(Vo,a,o)}var jp=R({batchToSpaceND_:Ap});function Mp(e){let t;return t=e.rank===0||e.rank===1?W(e,[1,1,1,e.size]):e.rank===2?W(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?W(e,[1,e.shape[0],e.shape[1],e.shape[2]]):e,t}function Np(e,t,n,r,i,a){a??=.001;let o=L(e,`x`,`batchNorm`),s=L(t,`mean`,`batchNorm`),c=L(n,`variance`,`batchNorm`),l;i!=null&&(l=L(i,`scale`,`batchNorm`));let u;r!=null&&(u=L(r,`offset`,`batchNorm`)),j(s.rank===c.rank,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),j(u==null||s.rank===u.rank,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),j(l==null||s.rank===l.rank,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let d={x:Mp(o),scale:l,offset:u,mean:s,variance:c},f={varianceEpsilon:a};return W(I.runKernel(Os,d,f),o.shape)}var Pp=R({batchNorm_:Np});function Fp(e,t,n,r,i,a){let o=L(e,`x`,`batchNorm`),s=L(t,`mean`,`batchNorm`),c=L(n,`variance`,`batchNorm`),l;i!=null&&(l=L(i,`scale`,`batchNorm`));let u;return r!=null&&(u=L(r,`offset`,`batchNorm`)),j(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),j(s.rank===2||s.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${s.rank}.`),j(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&j(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&j(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),Pp(o,s,c,u,l,a)}var Ip=R({batchNorm2d_:Fp});function Lp(e,t,n,r,i,a){let o=L(e,`x`,`batchNorm`),s=L(t,`mean`,`batchNorm`),c=L(n,`variance`,`batchNorm`),l;i!=null&&(l=L(i,`scale`,`batchNorm`));let u;return r!=null&&(u=L(r,`offset`,`batchNorm`)),j(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),j(s.rank===3||s.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${s.rank}.`),j(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&j(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&j(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),Pp(o,s,c,u,l,a)}var Rp=R({batchNorm3d_:Lp});function zp(e,t,n,r,i,a){let o=L(e,`x`,`batchNorm`),s=L(t,`mean`,`batchNorm`),c=L(n,`variance`,`batchNorm`),l;i!=null&&(l=L(i,`scale`,`batchNorm`));let u;return r!=null&&(u=L(r,`offset`,`batchNorm`)),j(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),j(s.rank===4||s.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${s.rank}.`),j(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&j(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&j(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),Pp(o,s,c,u,l,a)}var Bp=R({batchNorm4d_:zp});function Vp(e,t,n){let r=L(e,`x`,`bincount`),i=L(t,`weights`,`bincount`);j(r.dtype===`int32`,()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),j(n>=0,()=>`size must be non-negative, but got ${n}.`),j(i.size===r.size||i.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${i.shape}.`);let a={x:r,weights:i},o={size:n};return I.runKernel(Ho,a,o)}var Hp=R({bincount_:Vp});function Up(e,t){let n=L(e,`broadcastTo`,`x`),r=n.shape;if(uo(t),t.length<n.rank)throw Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){let e=n.shape.slice();for(;e.length<t.length;)e.unshift(1);n=W(n,e)}let i=n.shape,a=Array.from(t);for(let e=t.length-1;e>=0;e--)if(i[e]===t[e])a[e]=1;else if(n.shape[e]!==1)throw Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(a.map((e,t)=>e>1?t:-1).filter(e=>e>=0).length===0)return yf(n);let o={x:n},s={reps:a};return I.runKernel(al,o,s)}var Wp=R({broadcastTo_:Up});function Gp(e){let t={x:L(e,`x`,`ceil`,`float32`)};return I.runKernel(qo,t)}var Kp=R({ceil_:Gp});function qp(e,t,n){uo(e),n||=to(t);let r={shape:e,value:t,dtype:n};return I.runKernel(ws,{},r)}function Jp(e,t,n){let r=L(e,`x`,`clipByValue`);if(j(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return qp(r.shape,t,r.dtype);let i={x:r},a={clipValueMin:t,clipValueMax:n};return I.runKernel(Jo,i,a)}var Yp=R({clipByValue_:Jp});function Xp(e){return xp(e,0)}var Zp=R({concat1d_:Xp});function Qp(e,t){return xp(e,t)}var $p=R({concat2d_:Qp});function em(e,t){return xp(e,t)}var tm=R({concat3d_:em});function nm(e,t){return xp(e,t)}var rm=R({concat4d_:nm});function im(e,t,n,r,i=`NHWC`,a=[1,1],o){let s=L(e,`x`,`conv2d`,`float32`),c=L(t,`filter`,`conv2d`,`float32`),l=s,u=!1;s.rank===3&&(u=!0,l=W(s,[1,s.shape[0],s.shape[1],s.shape[2]])),j(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),j(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),mp(`conv2d`,r,o);let d=i===`NHWC`?l.shape[3]:l.shape[1];j(d===c.shape[2],()=>`Error in conv2d: depth of input (${d}) must match input depth for filter ${c.shape[2]}.`),j(dp(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),j(fp(a),()=>`Error in conv2D: Dilated rates should be larger than 0.`),j(fp(n),()=>`Error in conv2D: Strides should be larger than 0.`);let f={x:l,filter:c},p={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o},m=I.runKernel(Qo,f,p);return u?W(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var am=R({conv2d_:im});function om(e,t,n,r,i=`NWC`,a=1,o){let s=L(e,`x`,`conv1d`),c=L(t,`filter`,`conv1d`),l=s,u=!1;s.rank===2&&(u=!0,l=W(s,[1,s.shape[0],s.shape[1]])),j(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),j(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),mp(`conv1d`,r,o),j(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),j(dp(n,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`),j(fp(a),()=>`Error in conv1D: Dilated rates should be larger than 0.`),j(fp(n),()=>`Error in conv1D: Stride should be larger than 0.`),j(i===`NWC`,()=>`Error in conv1d: got dataFormat of ${i} but only NWC is currently supported.`);let d=W(c,[1,c.shape[0],c.shape[1],c.shape[2]]),f=am(W(l,[l.shape[0],1,l.shape[1],l.shape[2]]),d,[1,n],r,`NHWC`,[1,a],o);return u?W(f,[f.shape[2],f.shape[3]]):W(f,[f.shape[0],f.shape[2],f.shape[3]])}var sm=R({conv1d_:om});function cm(e,t,n,r,i,a=`NHWC`,o){j(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let s=e,c=t,l=!1;t.rank===3&&(l=!0,c=W(t,[1,t.shape[0],t.shape[1],t.shape[2]]),s=[1,e[0],e[1],e[2]]),j(s.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${s.length}.`),j(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),j(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);let u=a===`NHWC`?s[3]:s[1],d=a===`NHWC`?c.shape[3]:c.shape[1];j(u===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[2]}.`),j(d===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${d}) must match output depth for filter ${n.shape[3]}.`),mp(`conv2dDerInput`,i,o);let f={dy:c,filter:n},p={strides:r,pad:i,dataFormat:a,dimRoundingMode:o,inputShape:s},m=I.runKernel(es,f,p);return l?W(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var lm=R({conv2DBackpropInput_:cm});function um(e,t,n,r,i,a){return lm(n,L(e,`x`,`conv2dTranspose`),L(t,`filter`,`conv2dTranspose`),r,i,`NHWC`,a)}var dm=R({conv2dTranspose_:um});function fm(e,t,n,r,i=`NDHWC`,a=[1,1,1]){let o=L(e,`x`,`conv3d`),s=L(t,`filter`,`conv3d`),c=o,l=!1;o.rank===4&&(l=!0,c=W(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),j(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),j(s.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${s.rank}.`),j(c.shape[4]===s.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${s.shape[3]}.`),j(dp(n,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),j(i===`NDHWC`,()=>`Error in conv3d: got dataFormat of ${i} but only NDHWC is currently supported.`),j(fp(a),()=>`Error in conv3D: Dilated rates should be larger than 0.`),j(fp(n),()=>`Error in conv3D: Strides should be larger than 0.`);let u={x:c,filter:s},d={strides:n,pad:r,dataFormat:i,dilations:a},f=I.runKernel(ts,u,d);return l?W(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var pm=R({conv3d_:fm});function mm(e,t,n,r,i){j(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let a=e,o=t,s=!1;t.rank===4&&(s=!0,o=W(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,e[0],e[1],e[2],e[3]]);let c=a[4],l=o.shape[4];j(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),j(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),j(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),j(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),j(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);let u={dy:o,filter:n},d={pad:i,strides:r,inputShape:a},f=I.runKernel(rs,u,d);return s?W(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var hm=R({conv3DBackpropInput_:mm});function gm(e,t,n,r,i){return hm(n,L(e,`x`,`conv3dTranspose`),L(t,`filter`,`conv3dTranspose`),r,i)}var _m=R({conv3dTranspose_:gm});function vm(e){let t={x:L(e,`x`,`cos`,`float32`)};return I.runKernel(`Cos`,t)}var ym=R({cos_:vm});function bm(e){let t={x:L(e,`x`,`cosh`,`float32`)};return I.runKernel(is,t)}var xm=R({cosh_:bm});function Sm(e,t=0,n=!1,r=!1){let i={x:L(e,`x`,`cumprod`)},a={axis:t,exclusive:n,reverse:r};return I.runKernel(as,i,a)}var Cm=R({cumprod_:Sm});function wm(e,t=0,n=!1,r=!1){let i={x:L(e,`x`,`cumsum`)},a={axis:t,exclusive:n,reverse:r};return I.runKernel(os,i,a)}var Tm=R({cumsum_:wm});function Em(e,t,n,r=!1){let i=L(e,`x`,`denseBincount`),a=L(t,`weights`,`denseBincount`);j(i.dtype===`int32`,()=>`Error in denseBincount: input dtype must be int32, but got ${i.dtype}`),j(i.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${i.rank}.`),j(n>=0,()=>`size must be non-negative, but got ${n}.`),j(a.size===i.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${i.shape}, weights shape: ${a.shape}.`);let o={x:i,weights:a},s={size:n,binaryOutput:r};return I.runKernel(cs,o,s)}var Dm=R({denseBincount_:Em});function Om(e,t,n=`NHWC`){let r=L(e,`x`,`depthToSpace`,`float32`),i=n===`NHWC`?r.shape[1]:r.shape[2],a=n===`NHWC`?r.shape[2]:r.shape[3],o=n===`NHWC`?r.shape[3]:r.shape[1];j(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),j(i*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${i} and ${t}  for depthToSpace with input shape
    ${r.shape}`),j(a*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${t} for depthToSpace with input shape
        ${r.shape}`),j(o%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`);let s={x:r},c={blockSize:t,dataFormat:n};return I.runKernel(ls,s,c)}var km=R({depthToSpace_:Om});function Am(e,t,n,r,i=`NHWC`,a=[1,1],o){let s=L(e,`x`,`depthwiseConv2d`,`float32`),c=L(t,`filter`,`depthwiseConv2d`,`float32`),l=s,u=!1;s.rank===3&&(u=!0,l=W(s,[1,s.shape[0],s.shape[1],s.shape[2]])),j(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),j(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);let d=i===`NHWC`?l.shape[3]:l.shape[1];j(d===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${d}) must match the inChannels dimension in filter ${c.shape[2]}.`),mp(`depthwiseConv2d`,r,o);let f={x:l,filter:c},p={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o},m=I.runKernel(us,f,p);return u?W(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var jm=R({depthwiseConv2d_:Am});function Mm(e,t,n,r,i=[1,1],a=`NHWC`){let o=L(e,`x`,`dilation2d`),s=L(t,`filter`,`dilation2d`);j(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),j(s.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${s.rank}.`),j(a===`NHWC`,()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let c=o,l=!1;o.rank===3&&(c=W(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0),j(c.shape[3]===s.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${c.shape[3]} vs ${s.shape[2]}`);let u={x:c,filter:s},d={strides:n,pad:r,dilations:i},f=I.runKernel(ms,u,d);return l?W(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var Nm=R({dilation2d_:Mm});function Pm(e,t){let n=e.length,r=[];for(let i=0;i<n;i++){let a=n-1-i,o=e[a]||1;(t[t.length-1-i]||1)>1&&o===1&&r.unshift(a)}return r}function Fm(e,t){let n=[];for(let r=0;r<t.length;r++){let i=e[e.length-r-1],a=t.length-r-1,o=t[a];(i==null||i===1&&o>1)&&n.unshift(a)}return n}function Im(e,t){let n=Math.max(e.length,t.length),r=Array(n);for(let i=0;i<n;i++){let a=e[e.length-i-1];a??=1;let o=t[t.length-i-1];if(o??=1,a===1)r[n-i-1]=o;else if(o===1)r[n-i-1]=a;else if(a!==o){let n=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(n)}else r[n-i-1]=a}return r}function Lm(e,t){let n=L(e,`a`,`equal`,`string_or_numeric`),r=L(t,`b`,`equal`,`string_or_numeric`);[n,r]=Nu(n,r),Im(n.shape,r.shape);let i={a:n,b:r};return I.runKernel(xs,i)}var Rm=R({equal_:Lm});function zm(e,t,n){let r=L(t,`a`,`where`),i=L(n,`b`,`where`),a=L(e,`condition`,`where`,`bool`),o=Im(Im(a.shape,r.shape),i.shape),s={condition:Wp(a,o),t:Wp(r,o),e:Wp(i,o)};return I.runKernel(Fc,s)}var Bm=R({where_:zm});function Vm(e){let t={x:L(e,`x`,`zerosLike`)};return I.runKernel(fl,t)}var Hm=R({zerosLike_:Vm});function Um(e,t){let n=L(e,`a`,`div`),r=L(t,`b`,`div`);[n,r]=Nu(n,r);let i=H(n,r),a=Hm(i);return Bm(Rm(r,a),a,i)}var Wm=R({divNoNan_:Um});function Gm(e,t){let n=L(e,`t1`,`dot`),r=L(t,`t2`,`dot`);j((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);let i=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];if(j(i===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${i} and ${a}.`),n.rank===1&&r.rank===1)return W(Cp(W(n,[1,-1]),W(r,[-1,1])),[]);if(n.rank===1&&r.rank===2){let e=Cp(W(n,[1,-1]),W(r,[r.shape[0],r.shape[1]]));return W(e,[e.size])}else if(n.rank===2&&r.rank===1){let e=Cp(n,W(r,[-1,1]));return W(e,[e.size])}else return Cp(n,W(r,[r.shape[0],r.shape[1]]))}var Km=R({dot_:Gm});function qm(e,...t){let n=t.map((e,t)=>L(e,`tensors${t}`,`einsum`)),r={equation:e};return I.runKernel(ys,n,r)}var Jm=R({einsum_:qm});function Ym(e){let t={x:L(e,`x`,`elu`,`float32`)};return I.runKernel(`Elu`,t)}var Xm=R({elu_:Ym});function Zm(e){let t=L(e,`x`,`erf`);j(t.dtype===`int32`||t.dtype===`float32`,()=>"Input dtype must be `int32` or `float32`."),t.dtype===`int32`&&(t=B(t,`float32`));let n={x:t};return I.runKernel(`Erf`,n)}var Qm=R({erf_:Zm});function $m(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function eh(e,t,n){let r=e.length+t.length,i=[],a=0,o=0;for(let s=0;s<r;s++)n.indexOf(s)===-1?i.push(e[a++]):i.push(t[o++]);return i}function th(e,t){let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]}function nh(e,t){return eh(e,t.map(e=>1),t)}function rh(e,t,n){j($m(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function ih(e,t){if($m(e,t))return null;let n=[];for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(e=>n.push(e)),n}function ah(e){return e.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function oh(e,t){let n=[];for(let r=t-e;r<t;++r)n.push(r);return n}function sh(e,t=null,n=!1){let r={x:L(e,`x`,`max`)},i={reductionIndices:t,keepDims:n};return I.runKernel(`Max`,r,i)}var ch=R({max_:sh});function lh(e,t=null,n=!1){let r={x:L(e,`x`,`min`)},i={axis:t,keepDims:n};return I.runKernel(`Min`,r,i)}var uh=R({min_:lh});function dh(e,t){let n=L(e,`base`,`pow`),r=L(t,`exp`,`pow`);[n,r]=Nu(n,r);let i={a:n,b:r};return I.runKernel(`Pow`,i)}var fh=R({pow_:dh});function ph(e,t){if((eu(e)&&t!==`string`||Array.isArray(e))&&t!==`complex64`)throw Error(`Error creating a new Scalar: value must be a primitive (number|boolean|string)`);if(t===`string`&&eu(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return nd(e,[],[],t)}function mh(e){let t={x:L(e,`x`,`sqrt`,`float32`)};return I.runKernel(Hc,t)}var hh=R({sqrt_:mh});function gh(e){let t=L(e,`x`,`square`);return I.runKernel(`Square`,{x:t},{})}var _h=R({square_:gh});function vh(e,t=null,n=!1){let r=L(e,`x`,`sum`);r.dtype===`bool`&&(r=B(r,`int32`));let i={x:r},a={axis:t,keepDims:n};return I.runKernel(`Sum`,i,a)}var G=R({sum_:vh});function yh(e,t=`euclidean`,n=null,r=!1){e=L(e,`x`,`norm`);let i=bh(e,t,n),a=i.shape;if(r){let t=Ua(n,e.shape);a=nh(i.shape,t)}return W(i,a)}function bh(e,t,n=null){if(e.rank===0)return Df(e);if(e.rank!==1&&n===null)return bh(W(e,[-1]),t,n);if(e.rank===1||typeof n==`number`||Array.isArray(n)&&n.length===1){if(t===1)return G(Df(e),n);if(t===1/0)return ch(Df(e),n);if(t===-1/0)return uh(Df(e),n);if(t===`euclidean`||t===2)return hh(G(fh(Df(e),ph(2,`int32`)),n));throw Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return ch(G(Df(e),n[0]),n[1]-1);if(t===1/0)return ch(G(Df(e),n[1]),n[0]);if(t===-1/0)return uh(G(Df(e),n[1]),n[0]);if(t===`fro`||t===`euclidean`)return hh(G(_h(e),n));throw Error(`Error in norm: invalid ord value: ${t}`)}throw Error(`Error in norm: invalid axis: ${n}`)}var xh=R({norm_:yh});function Sh(e,t=null,n=!1){return xh(e,`euclidean`,t,n)}var Ch=R({euclideanNorm_:Sh});function wh(e){let t={x:L(e,`x`,`exp`)};return I.runKernel(`Exp`,t)}var Th=R({exp_:wh});function Eh(e,t=0){let n=L(e,`x`,`expandDims`,`string_or_numeric`);j(t<=n.rank,()=>`Axis must be <= rank of the tensor`);let r={input:n},i={dim:t};return I.runKernel(Ss,r,i)}var Dh=R({expandDims_:Eh});function Oh(e){let t={x:L(e,`x`,`expm1`)};return I.runKernel(Cs,t)}var kh=R({expm1_:Oh});function Ah(e,t){let n=L(e,`x`,`tile`,`string_or_numeric`);j(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);let r={x:n},i={reps:t};return I.runKernel(al,r,i)}var jh=R({tile_:Ah});function Mh(e,t,n,r=`float32`){t??=e;let i=gf([e,t],r),a=e<=t?e:t;for(let e=0;e<a;++e)i.set(1,e,e);let o=W(i.toTensor(),[e,t]);if(n==null)return o;if(n.length===1)return jh(Dh(o,0),[n[0],1,1]);if(n.length===2)return jh(Dh(Dh(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return jh(Dh(Dh(Dh(o,0),0),0),[n[0],n[1],n[2],1,1]);throw Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}var Nh=R({eye_:Mh});function Ph(e){let t={x:L(e,`x`,`floor`,`float32`)};return I.runKernel(Es,t)}var Fh=R({floor_:Ph});function Ih(e,t,n=0,r=0){let i={x:L(e,`x`,`gather`),indices:L(t,`indices`,`gather`,`int32`)},a={axis:n,batchDims:r};return I.runKernel(ks,i,a)}var Lh=R({gather_:Ih});function Rh(e,t){let n=L(e,`a`,`greater`,`string_or_numeric`),r=L(t,`b`,`greater`,`string_or_numeric`);[n,r]=Nu(n,r),Im(n.shape,r.shape);let i={a:n,b:r};return I.runKernel(js,i)}var zh=R({greater_:Rh});function Bh(e,t){let n=L(e,`a`,`greaterEqual`,`string_or_numeric`),r=L(t,`b`,`greaterEqual`,`string_or_numeric`);[n,r]=Nu(n,r),Im(n.shape,r.shape);let i={a:n,b:r};return I.runKernel(Ms,i)}var Vh=R({greaterEqual_:Bh});function Hh(e){let t={input:L(e,`input`,`imag`)};return I.runKernel(Fs,t)}var Uh=R({imag_:Hh});function Wh(e){let t={x:L(e,`x`,`isFinite`)};return I.runKernel(Is,t)}var Gh=R({isFinite_:Wh});function Kh(e){let t={x:L(e,`x`,`isInf`)};return I.runKernel(Ls,t)}var qh=R({isInf_:Kh});function Jh(e){let t={x:L(e,`x`,`isNaN`)};return I.runKernel(Rs,t)}var Yh=R({isNaN_:Jh});function Xh(e,t=.2){let n={x:L(e,`x`,`leakyRelu`)},r={alpha:t};return I.runKernel(zs,n,r)}var Zh=R({leakyRelu_:Xh});function Qh(e,t){let n=L(e,`a`,`less`,`string_or_numeric`),r=L(t,`b`,`less`,`string_or_numeric`);[n,r]=Nu(n,r),Im(n.shape,r.shape);let i={a:n,b:r};return I.runKernel(Bs,i)}var $h=R({less_:Qh});function eg(e,t){let n=L(e,`a`,`lessEqual`,`string_or_numeric`),r=L(t,`b`,`lessEqual`,`string_or_numeric`);[n,r]=Nu(n,r),Im(n.shape,r.shape);let i={a:n,b:r};return I.runKernel(Vs,i)}var tg=R({lessEqual_:eg});function ng(e,t=5,n=1,r=1,i=.5){let a=L(e,`x`,`localResponseNormalization`);j(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),j(La(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let o=a,s=!1;a.rank===3&&(s=!0,o=W(a,[1,a.shape[0],a.shape[1],a.shape[2]]));let c={x:o},l={depthRadius:t,bias:n,alpha:r,beta:i},u=I.runKernel(`LRN`,c,l);return s?W(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var rg=R({localResponseNormalization_:ng});function ig(e){let t={x:L(e,`x`,`log`,`float32`)};return I.runKernel(`Log`,t)}var ag=R({log_:ig});function og(e){let t={x:L(e,`x`,`log1p`)};return I.runKernel(Us,t)}var sg=R({log1p_:og});function cg(e,t){j(no(e),()=>`The f passed in variableGrads(f) must be a function`),j(t==null||Array.isArray(t)&&t.every(e=>e instanceof Su),()=>`The varList passed in variableGrads(f, varList) must be an array of variables`);let n=t!=null;if(!n){t=[];for(let e in I.registeredVariables)t.push(I.registeredVariables[e])}let r=n?t.filter(e=>!e.trainable):null,i=t.length;t=t.filter(e=>e.trainable),j(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${i} variables is trainable.`);let{value:a,grads:o}=I.gradients(e,t,null,!0);j(o.some(e=>e!=null),()=>`Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().`),j(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);let s={};return t.forEach((e,t)=>{o[t]!=null&&(s[e.name]=o[t])}),r?.forEach(e=>s[e.name]=null),{value:a,grads:s}}function lg(e){return I.customGrad(e)}function ug(e){let t={x:L(e,`x`,`neg`)};return I.runKernel(`Neg`,t)}var dg=R({neg_:ug});function fg(e){let t={x:L(e,`x`,`softplus`)};return I.runKernel(Vc,t)}var pg=R({softplus_:fg});function mg(e){let t=L(e,`x`,`logSigmoid`);return lg(e=>({value:dg(pg(dg(e))),gradFunc:t=>U(t,Tp(dg(e)))}))(t)}var hg=R({logSigmoid_:mg});function gg(e,t){let n=L(e,`a`,`sub`),r=L(t,`b`,`sub`);[n,r]=Nu(n,r);let i={a:n,b:r};return I.runKernel(`Sub`,i)}var K=R({sub_:gg});function _g(e,t=-1){let n=L(e,`logits`,`logSoftmax`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return lg((e,n)=>{let r=K(e,ch(e,t,!0)),i=K(B(r,`float32`),ag(G(Th(r),t,!0)));return n([i]),{value:i,gradFunc:(e,n)=>{let[r]=n,i=Th(r);return K(e,U(G(e,t,!0),i))}}})(n)}var vg=R({logSoftmax_:_g});function yg(e,t=null,n=!1){let r=L(e,`x`,`logSumExp`),i=Ua(t,r.shape),a=ch(r,i,!0),o=ag(G(Th(K(r,a)),i)),s=V(W(a,o.shape),o);return n?W(s,nh(s.shape,i)):s}var bg=R({logSumExp_:yg});function xg(e,t){let n=L(e,`a`,`logicalAnd`,`bool`),r=L(t,`b`,`logicalAnd`,`bool`);Im(n.shape,r.shape);let i={a:n,b:r};return I.runKernel(Ws,i)}var Sg=R({logicalAnd_:xg});function Cg(e){let t={x:L(e,`x`,`logicalNot`,`bool`)};return I.runKernel(Gs,t)}var wg=R({logicalNot_:Cg});function Tg(e,t){let n=L(e,`a`,`logicalOr`,`bool`),r=L(t,`b`,`logicalOr`,`bool`);Im(n.shape,r.shape);let i={a:n,b:r};return I.runKernel(Ks,i)}var Eg=R({logicalOr_:Tg});function Dg(e,t){let n=L(e,`a`,`logicalXor`,`bool`),r=L(t,`b`,`logicalXor`,`bool`);return Im(n.shape,r.shape),Sg(Eg(e,t),wg(Sg(e,t)))}var Og=R({logicalXor_:Dg});function kg(e,t,n,r,i){let a=L(e,`x`,`maxPool`),o=a,s=!1;a.rank===3&&(s=!0,o=W(a,[1,a.shape[0],a.shape[1],a.shape[2]])),j(o.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`),j(dp(n,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`),mp(`maxPool`,r,i);let c={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:i},u=I.runKernel(Xs,c,l);return s?W(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var Ag=R({maxPool_:kg});function jg(e,t=[1,1,1],n,r,i,a=`NDHWC`){let o=L(e,`x`,`maxPool3d`),s=o,c=!1;o.rank===4&&(c=!0,s=W(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),j(s.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${s.rank}.`),j(a===`NDHWC`,()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),mp(`maxPool3d`,r,i);let l={x:s},u={filterSize:t,strides:n,pad:r,dimRoundingMode:i,dataFormat:a},d=I.runKernel(Qs,l,u);return c?W(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var Mg=R({maxPool3d_:jg});function Ng(e,t){let n=L(e,`a`,`maximum`),r=L(t,`b`,`maximum`);[n,r]=Nu(n,r),n.dtype===`bool`&&(n=B(n,`int32`),r=B(r,`int32`)),Im(n.shape,r.shape);let i={a:n,b:r};return I.runKernel(Ys,i)}var Pg=R({maximum_:Ng});function Fg(e,t=null,n=!1){let r={x:L(e,`x`,`mean`)},i={axis:t,keepDims:n};return I.runKernel(tc,r,i)}var Ig=R({mean_:Fg});function Lg(e,t=`float32`){if(uo(e),t===`complex64`)return td(Lg(e,`float32`),Lg(e,`float32`));let n=co(M(e),t);return I.makeTensor(n,e,t)}function Rg(e,t=`float32`){if(uo(e),t===`complex64`)return td(Rg(e,`float32`),Lg(e,`float32`));let n=so(M(e),t);return I.makeTensor(n,e,t)}function zg(e,t){let n=L(e,`a`,`minimum`),r=L(t,`b`,`minimum`);[n,r]=Nu(n,r),n.dtype===`bool`&&(n=B(n,`int32`),r=B(r,`int32`)),Im(n.shape,r.shape);let i={a:n,b:r};return I.runKernel(nc,i)}var Bg=R({minimum_:zg});function Vg(e,t,n){j(n===`reflect`||n===`symmetric`,()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);let r=L(e,`x`,`mirrorPad`);if(r.rank===0)throw Error(`mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad`);j(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);let i=+(n===`reflect`);for(let e=0;e<r.rank;e++)j(t[e].length===2,()=>`Invalid number of paddings. Must be length of 2 each.`),j(t[e][0]>=0&&t[e][0]<=r.shape[e]-i&&t[e][1]>=0&&t[e][1]<=r.shape[e]-i,()=>`Padding in dimension ${e} cannot be greater than or equal to ${r.shape[e]-i} or less than 0 for input of shape ${r.shape}`);let a={paddings:t,mode:n},o={x:r};return I.runKernel(rc,o,a)}var Hg=R({mirrorPad_:Vg});function Ug(e,t){let n=L(e,`a`,`mod`),r=L(t,`b`,`mod`);[n,r]=Nu(n,r);let i={a:n,b:r};return I.runKernel(`Mod`,i)}var Wg=R({mod_:Ug});function Gg(e,t=null,n=!1){e=L(e,`x`,`moments`);let r=Ua(t,e.shape),i=Ig(e,r,n),a=i.shape;return n||(a=nh(i.shape,r)),{mean:i,variance:Ig(_h(K(B(e,`float32`),W(i,a))),r,n)}}var Kg=R({moments_:Gg});function qg(e,t){let n=L(e,`a`,`notEqual`,`string_or_numeric`),r=L(t,`b`,`notEqual`,`string_or_numeric`);[n,r]=Nu(n,r),Im(n.shape,r.shape);let i={a:n,b:r};return I.runKernel(oc,i)}var Jg=R({notEqual_:qg});function Yg(e,t,n=1,r=0,i=`int32`){if(t<2)throw Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let a={indices:L(e,`indices`,`oneHot`,`int32`)},o={dtype:i,depth:t,onValue:n,offValue:r};return I.runKernel(dc,a,o)}var Xg=R({oneHot_:Yg});function Zg(e){let t={x:L(e,`x`,`onesLike`)};return I.runKernel(uc,t)}var Qg=R({onesLike_:Zg});function $g(e,t,n=0){let r=L(e,`x`,`pad`);if(r.rank===0)throw Error(`pad(scalar) is not defined. Pass non-scalar to pad`);let i={paddings:t,constantValue:n},a={x:r};return I.runKernel(pc,a,i)}var e_=R({pad_:$g});function t_(e,t,n){let r=L(e,`x`,`spaceToBatchND`);j(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),j(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),j(r.shape.reduce((e,r,i)=>i>0&&i<=t.length?e&&(r+n[i-1][0]+n[i-1][1])%t[i-1]===0:e,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);let i={x:r},a={blockShape:t,paddings:n};return I.runKernel(Uc,i,a)}var n_=R({spaceToBatchND_:t_});function r_(e,t,n,r,i,a,o){i??=[1,1],a??=1,r===0&&(r=`valid`);let s=L(e,`x`,`maxPool`),c=s,l=!1;s.rank===3&&(l=!0,c=W(s,[1,s.shape[0],s.shape[1],s.shape[2]])),j(dp(a,i),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${i}'`);let u=Zf(c.shape,t,a,i,r),d=[u.dilationHeight,u.dilationWidth],f;f=r===`same`?a_([u.filterHeight,u.filterWidth],d):[[0,0],[0,0]];let p=d[0]===1&&d[1]===1,[m,h]=i_([u.inHeight,u.inWidth],d,f),g=p?r:`valid`,_=p?c:n_(c,d,m),v=(n===`avg`?()=>_p(_,t,a,g,o):()=>Ag(_,t,a,g,o))(),y=p?v:jp(v,d,h);return l?W(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function i_(e,t,n){let r=n.map(e=>e[0]),i=n.map(e=>e[1]),a=e.concat(r,i),o=t.map((e,t)=>(e-a[t]%e)%e),s=i.map((e,t)=>e+o[t]);return[t.map((e,t)=>[r[t],s[t]]),t.map((e,t)=>[0,o[t]])]}function a_(e,t){let n=e.map((e,n)=>e+(e-1)*(t[n]-1)).map(e=>e-1),r=n.map(e=>Math.floor(e/2)),i=n.map((e,t)=>e-r[t]);return n.map((e,t)=>[r[t],i[t]])}var o_=R({pool_:r_});function s_(e,t){let n={x:L(e,`x`,`prelu`),alpha:L(t,`alpha`,`prelu`)};return I.runKernel(mc,n)}var c_=R({prelu_:s_});function l_(e,t=null,n=!1){let r=L(e,`x`,`prod`);r.dtype===`bool`&&(r=B(r,`int32`));let i={x:r},a={axis:t,keepDims:n};return I.runKernel(hc,i,a)}var u_=R({prod_:l_}),d_=o(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=o();t.next=function(){var e=2091639*t.s0+t.c*23283064365386963e-26;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=e|0)},t.c=1,t.s0=n(` `),t.s1=n(` `),t.s2=n(` `),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function i(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function a(e,t){var n=new r(e),a=t&&t.state,o=n.next;return o.int32=function(){return n.next()*4294967296|0},o.double=function(){return o()+(o()*2097152|0)*11102230246251565e-32},o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}function o(){var e=4022871197;return function(t){t=String(t);for(var n=0;n<t.length;n++){e+=t.charCodeAt(n);var r=.02519603282416938*e;e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296}return(e>>>0)*23283064365386963e-26}}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.alea=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),f_=o(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=``;t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor128=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),p_=o(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorwow=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),m_=o(((e,t)=>{(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.x,n=t.i,r=e[n],i;return r^=r>>>7,i=r^r<<24,r=e[n+1&7],i^=r^r>>>10,r=e[n+3&7],i^=r^r>>>3,r=e[n+4&7],i^=r^r<<7,r=e[n+7&7],r^=r<<13,i^=r^r<<9,e[n]=i,t.i=n+1&7,i};function n(e,t){var n,r=[];if(t===(t|0))r[0]=t;else for(t=``+t,n=0;n<t.length;++n)r[n&7]=r[n&7]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&r[n]===0;++n);for(n==8?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}n(t,e)}function i(e,t){return t.x=e.x.slice(),t.i=e.i,t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.x&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorshift7=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),h_=o(((e,t)=>{(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.w,n=t.X,r=t.i,i,a;return t.w=e=e+1640531527|0,a=n[r+34&127],i=n[r=r+1&127],a^=a<<13,i^=i<<17,a^=a>>>15,i^=i>>>12,a=n[r]=a^i,t.i=r,a+(e^e>>>16)|0};function n(e,t){var n,r,i,a,o,s=[],c=128;for(t===(t|0)?(r=t,t=null):(t+=`\0`,r=0,c=Math.max(c,t.length)),i=0,a=-32;a<c;++a)t&&(r^=t.charCodeAt((a+32)%t.length)),a===0&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(o=o+1640531527|0,n=s[a&127]^=r+o,i=n==0?i+1:0);for(i>=128&&(s[(t&&t.length||0)&127]=-1),i=127,a=512;a>0;--a)r=s[i+34&127],n=s[i=i+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[i]=r^n;e.w=o,e.X=s,e.i=i}n(t,e)}function i(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.X&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor4096=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),g_=o(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.b,n=t.c,r=t.d,i=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^i,i=i-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^i,t.a=i-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=e|0):n+=e;for(var r=0;r<n.length+20;r++)t.b^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.tychei=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),__=o(((e,t)=>{(function(e,n,r){var i=256,a=6,o=52,s=`random`,c=r.pow(i,a),l=r.pow(2,o),u=l*2,d=i-1,f;function p(e,t,o){var d=[];t=t==1?{entropy:!0}:t||{};var f=_(g(t.entropy?[e,y(n)]:e??v(),3),d),p=new m(d),b=function(){for(var e=p.g(a),t=c,n=0;e<l;)e=(e+n)*i,t*=i,n=p.g(1);for(;e>=u;)e/=2,t/=2,n>>>=1;return(e+n)/t};return b.int32=function(){return p.g(4)|0},b.quick=function(){return p.g(4)/4294967296},b.double=b,_(y(p.S),n),(t.pass||o||function(e,t,n,i){return i&&(i.S&&h(i,p),e.state=function(){return h(p,{})}),n?(r[s]=e,t):e})(b,f,`global`in t?t.global:this==r,t.state)}function m(e){var t,n=e.length,r=this,a=0,o=r.i=r.j=0,s=r.S=[];for(n||(e=[n++]);a<i;)s[a]=a++;for(a=0;a<i;a++)s[a]=s[o=d&o+e[a%n]+(t=s[a])],s[o]=t;(r.g=function(e){for(var t,n=0,a=r.i,o=r.j,s=r.S;e--;)t=s[a=d&a+1],n=n*i+s[d&(s[a]=s[o=d&o+t])+(s[o]=t)];return r.i=a,r.j=o,n})(i)}function h(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function g(e,t){var n=[],r=typeof e,i;if(t&&r==`object`)for(i in e)try{n.push(g(e[i],t-1))}catch{}return n.length?n:r==`string`?e:e+`\0`}function _(e,t){for(var n=e+``,r,i=0;i<n.length;)t[d&i]=d&(r^=t[d&i]*19)+n.charCodeAt(i++);return y(t)}function v(){try{var t;return f&&(t=f.randomBytes)?t=t(i):(t=new Uint8Array(i),(e.crypto||e.msCrypto).getRandomValues(t)),y(t)}catch{var r=e.navigator,a=r&&r.plugins;return[+new Date,e,a,e.screen,y(n)]}}function y(e){return String.fromCharCode.apply(0,e)}if(_(r.random(),n),typeof t==`object`&&t.exports){t.exports=p;try{f=ff()}catch{}}else typeof define==`function`&&define.amd?define(function(){return p}):r[`seed`+s]=p})(typeof self<`u`?self:e,[],Math)})),v_=l(o(((e,t)=>{var n=d_(),r=f_(),i=p_(),a=m_(),o=h_(),s=g_(),c=__();c.alea=n,c.xor128=r,c.xorwow=i,c.xorshift7=a,c.xor4096=o,c.tychei=s,t.exports=c}))()),y_=class{constructor(e,t,n,r,i){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);let a=i||Math.random();this.random=v_.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){let e=this.nextVal;return this.nextVal=NaN,e}let e,t,n=!1;for(;!n;){let r,i,a;do r=2*this.random()-1,i=2*this.random()-1,a=r*r+i*i;while(a>=1||a===0);let o=Math.sqrt(-2*Math.log(a)/a);e=this.mean+this.stdDev*r*o,t=this.mean+this.stdDev*i*o,(!this.truncated||this.isValidTruncated(e))&&(n=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype===`float32`?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}},b_=class{constructor(e=0,t=1,n,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype===`float32`,this.min=e,this.range=t-e,this.dtype=n,r??=Math.random(),typeof r==`number`&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=v_.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}};function x_(e,t=0,n=1,r,i){if(uo(e),r!=null&&r===`bool`)throw Error(`Unsupported data type ${r}`);let a=new y_(t,n,r,!1,i),o=gf(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var S_=R({randomNormal_:x_});function C_(e,t=0,n=1,r=`float32`,i){uo(e);let a=gf(e,r),o=new b_(t,n,null,i);for(let e=0;e<a.values.length;e++)a.values[e]=o.nextValue();return a.toTensor()}var w_=R({randomUniform_:C_});function T_(e,t,n=1,r=`float32`){if(n===0)throw Error(`Cannot have a step of zero`);let i={start:e,stop:t,step:n,dtype:r};return I.runKernel(yc,{},i)}function E_(e){let t={input:L(e,`input`,`real`)};return I.runKernel(bc,t)}var D_=R({real_:E_});function O_(e){let t={x:L(e,`x`,`reciprocal`)};return I.runKernel(xc,t)}var k_=R({reciprocal_:O_});function A_(e){let t={x:L(e,`x`,`relu`)};return I.runKernel(Sc,t)}var j_=R({relu_:A_});function M_(e){let t={x:L(e,`x`,`relu6`)};return I.runKernel(Oc,t)}var N_=R({relu6_:M_});function P_(e,t){let n={x:L(e,`x`,`reverse`)},r={dims:t};return I.runKernel(kc,n,r)}var F_=R({reverse_:P_});function I_(e){let t={x:L(e,`x`,`round`)};return I.runKernel(Ac,t)}var L_=R({round_:I_});function R_(e){let t={x:L(e,`x`,`rsqrt`,`float32`)};return I.runKernel(jc,t)}var z_=R({rsqrt_:R_});function B_(e){let t={x:L(e,`x`,`selu`)};return I.runKernel(Ic,t)}var V_=R({selu_:B_});function H_(e,t,n,r,i,a=[1,1],o=`NHWC`){let s=L(e,`x`,`separableConv2d`),c=L(t,`depthwiseFilter`,`separableConv2d`),l=L(n,`pointwiseFilter`,`separableConv2d`),u=s,d=!1;if(s.rank===3&&(d=!0,u=W(s,[1,s.shape[0],s.shape[1],s.shape[2]])),o===`NCHW`)throw Error(`separableConv2d currently does not support dataFormat NCHW; only NHWC is supported`);j(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),j(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),j(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),j(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),j(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);let f=c.shape[2],p=c.shape[3];j(l.shape[2]===f*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*p}, but got ${l.shape[2]}.`);let m=am(jm(u,c,r,i,o,a),l,1,`valid`,o);return d?W(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var U_=R({separableConv2d_:H_});function W_(e){let t={x:L(e,`x`,`sign`)};return I.runKernel(zc,t)}var G_=R({sign_:W_});function K_(e){let t={x:L(e,`x`,`sin`,`float32`)};return I.runKernel(`Sin`,t)}var q_=R({sin_:K_});function J_(e){let t={x:L(e,`x`,`sinh`)};return I.runKernel(Rc,t)}var Y_=R({sinh_:J_});function X_(e,t,n){let r=L(e,`x`,`slice1d`);return j(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),Dp(r,[t],[n])}var Z_=R({slice1d_:X_});function Q_(e,t,n){let r=L(e,`x`,`slice2d`);return j(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),Dp(r,t,n)}var $_=R({slice2d_:Q_});function ev(e,t,n){let r=L(e,`x`,`slice3d`);return j(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),Dp(r,t,n)}var tv=R({slice3d_:ev});function nv(e,t,n){let r=L(e,`x`,`slice4d`);return j(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),Dp(r,t,n)}var rv=R({slice4d_:nv});function iv(e,t=-1){let n=L(e,`logits`,`softmax`,`float32`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);let r={logits:n},i={dim:t};return I.runKernel(Gc,r,i)}var av=R({softmax_:iv});function ov(e){j(e.dtype===`complex64`,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);let t={input:e};return I.runKernel(`FFT`,t)}var sv=R({fft_:ov});function cv(e){j(e.dtype===`complex64`,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);let t={input:e};return I.runKernel(Ps,t)}var lv=R({ifft_:cv});function uv(e){let t=e.shape[e.shape.length-1],n=e.size/t,r;if(t<=2)r=lv(W(e,[n,t]));else{let i=[n,2*(t-1)],a=W(D_(e),[n,t]),o=W(Uh(e),[n,t]),s=F_(Dp(a,[0,1],[n,t-2]),1),c=U(F_(Dp(o,[0,1],[n,t-2]),1),ph(-1));r=lv(W(td(xp([a,s],1),xp([o,c],1)),[i[0],i[1]]))}if(r=D_(r),e.rank===3&&e.shape[0]!==0){let t=r,n=e.shape[0];r=W(r,[n,r.shape[0]/n,r.shape[1]]),t.dispose()}return r}var dv=R({irfft_:uv});function fv(e,t,n=0){let r={x:L(e,`x`,`split`)},i={numOrSizeSplits:t,axis:n};return I.runKernel(Wc,r,i)}var pv=R({split_:fv});function mv(e,t){j(e.dtype===`float32`,()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1],r=e.size/n,i;if(t!=null&&t<n){let r=e.shape.map(e=>0),a=e.shape.map(e=>e);a[e.shape.length-1]=t,i=Dp(e,r,a),n=t}else if(t!=null&&t>n){let r=e.shape.map(e=>e);r[e.shape.length-1]=t-n,i=xp([e,Lg(r)],e.shape.length-1),n=t}else i=e;let a=Hm(i),o=sv(W(td(i,a),[r,n])),s=Math.floor(n/2)+1,c=D_(o),l=Uh(o),u=pv(c,[s,n-s],c.shape.length-1),d=pv(l,[s,n-s],l.shape.length-1),f=i.shape.slice();return f[i.shape.length-1]=s,W(td(u[0],d[0]),f)}var hv=R({rfft_:mv});function gv(e,t){let n=L(e,`a`,`squaredDifference`),r=L(t,`b`,`squaredDifference`);[n,r]=Nu(n,r),Im(n.shape,r.shape);let i={a:n,b:r};return I.runKernel(Zc,i,{})}var _v=R({squaredDifference_:gv});function vv(e,t){let n=L(e,`x`,`squeeze`,`string_or_numeric`);return W(n,Wa(n.shape,t).newShape)}var yv=R({squeeze_:vv});function bv(e,t=0){let n=Qu(e,`tensors`,`stack`,`string_or_numeric`);j(n.length>=1,()=>`Pass at least one tensor to tf.stack`),n.length>0&&j(t<=n[0].rank,()=>`Axis must be <= rank of the tensor`);let r=n,i={axis:t};return I.runKernel(fc,r,i)}var xv=R({stack_:bv});function Sv(e,t=0){let n={x:L(e,`x`,`step`)},r={alpha:t};return I.runKernel(pl,n,r)}var Cv=R({step_:Sv});function wv(e,t,n,r,i=0,a=0,o=0,s=0,c=0){let l={x:L(e,`x`,`stridedSlice`,`string_or_numeric`)},u={begin:t,end:n,strides:r,beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:c};return I.runKernel(el,l,u)}var Tv=R({stridedSlice_:wv});function Ev(e){let t={x:L(e,`x`,`tan`,`float32`)};return I.runKernel(`Tan`,t)}var Dv=R({tan_:Ev});function Ov(e,t){Fa(e);let n=Yu(e,t);if(n.length!==1)throw Error(`tensor1d() requires values to be a flat/TypedArray`);return nd(e,null,n,t)}function kv(e,t,n){if(Fa(e),t!=null&&t.length!==2)throw Error(`tensor2d() requires shape to have two numbers`);let r=Yu(e,n);if(r.length!==2&&r.length!==1)throw Error(`tensor2d() requires values to be number[][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return nd(e,t,r,n)}function Av(e,t,n){if(Fa(e),t!=null&&t.length!==4)throw Error(`tensor4d() requires shape to have four numbers`);let r=Yu(e,n);if(r.length!==4&&r.length!==1)throw Error(`tensor4d() requires values to be number[][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor4d() requires shape to be provided when `values` are a flat array");return nd(e,t,r,n)}function jv(e,t,n){let r=t.rank>1?t.shape[t.rank-1]:1,i=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${i}.`;if(n.rank<i)throw Error(a+` update.rank < ${i}. `);if(e.length<r+(n.rank-i))throw Error(a+` Output shape length < ${r+(n.rank-i)}`);if(n.rank!==i+e.length-r)throw Error(a+` update.rank != ${i+e.length-r}`);for(let e=0;e<i;++e)if(n.shape[e]!==t.shape[e])throw Error(a+` updates.shape[${e}] (${n.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<n.rank-i;++t)if(n.shape[t+i]!==e[t+r])throw Error(a+` updates.shape[${t+i}] (${n.shape[t+i]}) != shape[${t+i}] (${e[t+i]})`)}function Mv(e,t,n){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!==`int32`)throw Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw Error(`Updates specified for empty output. updates shape: ${e.shape}`)}jv(n,t,e)}function Nv(e,t,n){let r=t.shape.length,i=r>1?t.shape[r-1]:1,a=n.length,o=1;for(let e=i;e<a;++e)o*=n[e];let s=i<1?1:i,c=M(t.shape)/s,l=[...N(n.slice(0,i)),1],u=M(n);return{sliceRank:i,numUpdates:c,sliceSize:o,strides:l,outputSize:u}}function Pv(e,t=1,n=!0){let r=L(e,`x`,`topk`);if(r.rank===0)throw Error(`topk() expects the input to be of rank 1 or higher`);let i=r.shape[r.shape.length-1];if(t<0)throw Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>i)throw Error(`'k' passed to topk() must be <= the last dimension (${i}) but got ${t}`);let a={x:r},o={k:t,sorted:n},[s,c]=I.runKernel(ol,a,o);return{values:s,indices:c}}var Fv=R({topk_:Pv});function Iv(e,t=0,n=1,r,i){if(uo(e),r!=null&&r===`bool`)throw Error(`Unsupported data type $ { dtype }`);let a=new y_(t,n,r,!0,i),o=gf(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var Lv=R({truncatedNormal_:Iv});function Rv(e,t=0){let n=L(e,`x`,`unique`,`string_or_numeric`);j(n.rank>0,()=>`The input tensor must be at least 1D`);let r={x:n},i={axis:t},[a,o]=I.runKernel(ll,r,i);return{values:a,indices:o}}var zv=R({unique_:Rv});function Bv(e,t,n){let r=L(e,`x`,`unsortedSegmentSum`),i=L(t,`segmentIds`,`unsortedSegmentSum`,`int32`);j(La(n),()=>`numSegments must be of dtype int`);let a={x:r,segmentIds:i},o={numSegments:n};return I.runKernel(dl,a,o)}var Vv=R({unsortedSegmentSum_:Bv});function Hv(e,t=0){let n=L(e,`x`,`unstack`,`string_or_numeric`);j(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);let r={value:n},i={axis:t};return I.runKernel(ul,r,i)}var Uv=R({unstack_:Hv});function Wv(e,t=!0,n,r){return I.makeVariable(e,t,n,r)}function Gv(e,t){let n=[];for(let e=0;e<t.length;e++)t[e]&&n.push(e);let r=gf(e,`int32`),i=gf([n.length,e.length],`int32`);for(let t=0;t<n.length;t++){let a=r.indexToLoc(n[t]),o=t*e.length;i.values.set(a,o)}return i.toTensor()}function Kv(e,t,n){let r=L(e,`x`,`transpose`);if(t??=r.shape.map((e,t)=>t).reverse(),j(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(e=>{j(e>=0&&e<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();let i={x:r},a={perm:t};return r.dtype===`complex64`?z(()=>{let e=D_(r),t=Uh(r);return e=I.runKernel(cl,{x:e},a),t=I.runKernel(cl,{x:t},a),n&&(t=dg(t)),td(e,t)}):I.runKernel(cl,i,a)}var qv=R({transpose_:Kv});function Jv(e,t){if(t==null)return e.shape.slice();if(Ia(e.shape,t))return t;if(e.shape.length===t.length){let n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}function Yv(e,t,n,r){let i=L(e,`x`,`dropout`);if(j(i.dtype===`float32`,()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${i.dtype} tensor instead.`),j(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof xu?i.clone():i;let a=Jv(i,n),o=1-t;return U(i,H(Fh(V(w_(a,0,1,`float32`,r),o)),o))}var Xv=R({dropout_:Yv});function Zv(e,t,n,r,i,a=`NHWC`,o){let s=e;e.rank===3&&(s=W(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=W(t,[1,t.shape[0],t.shape[1],t.shape[2]])),j(s.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${s.shape}.`),j(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),j(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);let l=a===`NHWC`?s.shape[3]:s.shape[1],u=a===`NHWC`?c.shape[3]:c.shape[1];j(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),j(u===n[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${n[3]}).`),mp(`conv2dDerFilter`,i,o);let d={x:s,dy:c},f={strides:r,pad:i,dataFormat:a,dimRoundingMode:o,filterShape:n};return I.runKernel($o,d,f)}var Qv=R({conv2DBackpropFilter_:Zv});function $v(e,t,n){if(n==null||n===`linear`)return e;if(n===`relu`)return U(e,Cv(t));throw Error(`Cannot compute gradient for fused activation ${n}.`)}function ey(e,t){let n=t,r=Fm(e.shape,t.shape);return r.length>0&&(n=G(n,r)),W(n,e.shape)}function ty(e,t,n,r){if(t===`linear`)return e;if(t===`relu`)return j_(e);if(t===`elu`)return Xm(e);if(t===`relu6`)return N_(e);if(t===`prelu`)return c_(e,n);if(t===`leakyrelu`)return Zh(e,r);if(t===`sigmoid`)return Tp(e);throw Error(`Unknown fused activation ${t}.`)}var ny=(e,t)=>!(e>0)||t===`linear`;function ry({x:e,filter:t,strides:n,pad:r,dataFormat:i=`NHWC`,dilations:a=[1,1],dimRoundingMode:o,bias:s,activation:c=`linear`,preluActivationWeights:l,leakyreluAlpha:u}){if(c||=`linear`,ny(I.state.gradientDepth,c)===!1){j(i===`NHWC`,()=>`Error in fused conv2d: got dataFormat of ${i} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let d=am(e,t,n,r,i,a,o);return s!=null&&(d=V(d,s)),ty(d,c,l,u)}let d=L(e,`x`,`conv2d`,`float32`),f=L(t,`filter`,`conv2d`,`float32`),p=d,m=!1;d.rank===3&&(m=!0,p=W(d,[1,d.shape[0],d.shape[1],d.shape[2]])),j(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),j(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),mp(`fused conv2d`,r,o);let h=i===`NHWC`?p.shape[3]:p.shape[1];j(f.shape[2]===h,()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${f.shape[2]}.`),j(dp(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let g=$f(p.shape,f.shape,n,a,r,o),_;s!=null&&(_=L(s,`bias`,`fused conv2d`),[_]=Nu(_,d),i===`NHWC`?Im(g.outShape,_.shape):(j(_.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${_.shape.length}.`),j(_.shape.length===0||_.shape[0]===g.outChannels||_.shape[0]===1,()=>`Error in fused conv2d: bias shape (${_.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let v;if(l!=null){let e=l.shape;if(j(e.length<=1||e.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`),e.length===1)j(e[0]===1||e[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${g.outChannels}).`);else if(e.length===3)try{Im(e,g.outShape)}catch{let t=`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(t)}v=L(l,`prelu weights`,`fused conv2d`)}let y=(e,t)=>{j(i===`NHWC`,()=>`Error in gradient of fused conv2D: got dataFormat of ${i} but only NHWC is currently supported.`);let[o,s,l,u]=t,d=$v(e,l,c);j(up(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);let f=[lm(s.shape,d,o,n,r),Qv(s,d,o.shape,n,r)];if(u!=null){let e=ey(u,d);f.push(e)}return f},b={x:p,filter:f,bias:_,preluActivationWeights:v},x={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o,activation:c,leakyreluAlpha:u};return s==null?lg((e,t,n)=>{let r=I.runKernel(_l,b,x);return n([t,e,r]),m&&(r=W(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:y}})(p,f):lg((e,t,n,r)=>{let i=I.runKernel(_l,b,x);return r([t,e,i,n]),m&&(i=W(i,[i.shape[1],i.shape[2],i.shape[3]])),{value:i,gradFunc:y}})(p,f,_)}var iy=R({fusedConv2d_:ry});function ay(e,t,n,r,i,a=[1,1],o){let s=e;e.rank===3&&(s=W(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=W(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={x:s,dy:c},u={strides:r,pad:i,dimRoundingMode:o,dilations:a,filterShape:n};return I.runKernel(ds,l,u)}var oy=R({depthwiseConv2dNativeBackpropFilter_:ay});function sy(e,t,n,r,i,a=[1,1],o){let s=t,c=!1;t.rank===3&&(c=!0,s=W(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={dy:s,filter:n},u={strides:r,pad:i,dimRoundingMode:o,dilations:a,inputShape:e},d=I.runKernel(fs,l,u);return c?W(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var cy=R({depthwiseConv2dNativeBackpropInput_:sy});function ly({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:i,activation:a=`linear`,preluActivationWeights:o,leakyreluAlpha:s=.2}){if(ny(I.state.gradientDepth,a)===!1){let c=Cp(e,t,n,r);return i!=null&&(c=V(c,i)),ty(c,a,o,s)}let c=L(e,`a`,`fused matMul`),l=L(t,`b`,`fused matMul`);[c,l]=Nu(c,l);let u=n?c.shape[c.rank-2]:c.shape[c.rank-1],d=r?l.shape[l.rank-1]:l.shape[l.rank-2],f=n?c.shape[c.rank-1]:c.shape[c.rank-2],p=r?l.shape[l.rank-2]:l.shape[l.rank-1],m=c.shape.slice(0,-2),h=l.shape.slice(0,-2),g=M(m),_=M(h);j(u===d,()=>`Error in fused matMul: inner shapes (${u}) and (${d}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`);let v=Im(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([f,p]),y=n?W(c,[g,u,f]):W(c,[g,f,u]),b=r?W(l,[_,p,d]):W(l,[_,d,p]),x;i!=null&&(x=L(i,`bias`,`fused matMul`),[x]=Nu(x,c),Im(v,x.shape));let S;o!=null&&(S=L(o,`prelu weights`,`fused matMul`));let C=(e,t)=>{let[o,s,c,l]=t,u=$v(W(e,c.shape),c,a),d,f;if(!n&&!r?(d=Cp(u,s,!1,!0),f=Cp(o,u,!0,!1)):!n&&r?(d=Cp(u,s,!1,!1),f=Cp(u,o,!0,!1)):n&&!r?(d=Cp(s,u,!1,!0),f=Cp(o,u,!1,!1)):(d=Cp(s,u,!0,!0),f=Cp(u,o,!0,!0)),i!=null){let e=ey(l,u);return[d,f,e]}else return[d,f]},w={a:y,b,bias:x,preluActivationWeights:S},T={transposeA:n,transposeB:r,activation:a,leakyreluAlpha:s};return i==null?lg((e,t,n)=>{let r=I.runKernel(gl,w,T);return n([e,t,r]),{value:W(r,v),gradFunc:C}})(y,b):lg((e,t,n,r)=>{let i=I.runKernel(gl,w,T);return r([e,t,i,n]),{value:W(i,v),gradFunc:C}})(y,b,x)}var uy=R({fusedMatMul_:ly});function dy(e,t,n,r,i=`bilinear`,a=0){let o=L(e,`image`,`cropAndResize`),s=L(t,`boxes`,`cropAndResize`,`float32`),c=L(n,`boxInd`,`cropAndResize`,`int32`),l=s.shape[0];j(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),j(s.rank===2&&s.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${s.shape}.`),j(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${s.shape}.`),j(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),j(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),j(i===`bilinear`||i===`nearest`,()=>`method must be bilinear or nearest, but was ${i}`);let u={image:o,boxes:s,boxInd:c},d={method:i,extrapolationValue:a,cropSize:r};return I.runKernel(ss,u,d)}var fy=R({cropAndResize_:dy});function py(e){let t=L(e,`image`,`flipLeftRight`,`float32`);j(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);let n={image:t};return I.runKernel(Ts,n,{})}var my=R({flipLeftRight_:py});function hy(e){let t=L(e,`image`,`grayscaleToRGB`),n=t.rank-1,r=t.shape[n];j(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),j(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);let i=Array(t.rank);return i.fill(1,0,n),i[n]=3,jh(t,i)}var gy=R({grayscaleToRGB_:hy});function _y(e){let t=L(e,`image`,`RGBToGrayscale`),n=t.rank-1,r=t.shape[n];j(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),j(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);let i=t.dtype,a=B(t,`float32`),o=Ov([.2989,.587,.114]),s;switch(t.rank){case 2:s=Jm(`ij,j->i`,a,o);break;case 3:s=Jm(`ijk,k->ij`,a,o);break;case 4:s=Jm(`ijkl,l->ijk`,a,o);break;case 5:s=Jm(`ijklm,m->ijkl`,a,o);break;case 6:s=Jm(`ijklmn,n->ijklm`,a,o);break;default:throw Error(`Not a valid tensor rank.`)}return s=Dh(s,-1),B(s,i)}var vy=R({rgbToGrayscale_:_y});function yy(e,t,n=0,r=.5){let i=L(e,`image`,`rotateWithOffset`,`float32`);j(i.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${i.rank}.`);let a={image:i},o={radians:t,fillValue:n,center:r};return I.runKernel(hl,a,o)}var by=R({rotateWithOffset_:yy});function xy(e,t,n,r,i,a){r??=.5,i??=-1/0,a??=0;let o=e.shape[0];return n=Math.min(n,o),j(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),j(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),j(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),j(t.rank===1,()=>`scores must be a 1D tensor`),j(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),j(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a}}function Sy(e,t,n,r=.5,i=-1/0){let a=L(e,`boxes`,`nonMaxSuppression`,`float32`),o=L(t,`scores`,`nonMaxSuppression`,`float32`),s=xy(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;let c={maxOutputSize:n,iouThreshold:r,scoreThreshold:i};return I.runKernel(sc,{boxes:a,scores:o},c)}var Cy=R({nonMaxSuppression_:Sy});function wy(e,t,n){let r=Ty(e,t,n),i=r<0?-(r+1):r;e.splice(i,0,t)}function Ty(e,t,n){return Dy(e,t,n||Ey)}function Ey(e,t){return e>t?1:e<t?-1:0}function Dy(e,t,n){let r=0,i=e.length,a=0,o=!1;for(;r<i;){a=r+(i-r>>>1);let s=n(t,e[a]);s>0?r=a+1:(i=a,o=!s)}return o?r:-r-1}function Oy(e,t,n,r,i){return jy(e,t,n,r,i,0)}function ky(e,t,n,r,i,a){return jy(e,t,n,r,i,0,!1,a,!0)}function Ay(e,t,n,r,i,a){return jy(e,t,n,r,i,a,!0)}function jy(e,t,n,r,i,a,o=!1,s=!1,c=!1){let l=[];for(let e=0;e<t.length;e++)t[e]>i&&l.push({score:t[e],boxIndex:e,suppressBeginIndex:0});l.sort(Py);let u=a>0?-.5/a:0,d=[],f=[];for(;d.length<n&&l.length>0;){let t=l.pop(),{score:n,boxIndex:a,suppressBeginIndex:o}=t;if(n<i)break;let s=!1;for(let n=d.length-1;n>=o;--n){let o=My(e,a,d[n]);if(o>=r){s=!0;break}if(t.score*=Ny(r,u,o),t.score<=i)break}t.suppressBeginIndex=d.length,s||(t.score===n?(d.push(a),f.push(t.score)):t.score>i&&wy(l,t,Py))}let p=d.length,m=n-p;s&&m>0&&(d.push(...Array(m).fill(0)),f.push(...Array(m).fill(0)));let h={selectedIndices:d};return o&&(h.selectedScores=f),c&&(h.validOutputs=p),h}function My(e,t,n){let r=e.subarray(t*4,t*4+4),i=e.subarray(n*4,n*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(i[0],i[2]),u=Math.min(i[1],i[3]),d=Math.max(i[0],i[2]),f=Math.max(i[1],i[3]),p=(s-a)*(c-o),m=(d-l)*(f-u);if(p<=0||m<=0)return 0;let h=Math.max(a,l),g=Math.max(o,u),_=Math.min(s,d),v=Math.min(c,f),y=Math.max(_-h,0)*Math.max(v-g,0);return y/(p+m-y)}function Ny(e,t,n){let r=Math.exp(t*n*n);return n<=e?r:0}function Py(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}async function Fy(e,t,n,r=.5,i=-1/0){let a=L(e,`boxes`,`nonMaxSuppressionAsync`),o=L(t,`scores`,`nonMaxSuppressionAsync`),s=xy(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;let c=await Promise.all([a.data(),o.data()]),l=c[0],u=c[1],{selectedIndices:d}=Oy(l,u,n,r,i);return a!==e&&a.dispose(),o!==t&&o.dispose(),Ov(d,`int32`)}var Iy=Fy;function Ly(e,t,n,r=.5,i=-1/0,a=0){let o=L(e,`boxes`,`nonMaxSuppression`),s=L(t,`scores`,`nonMaxSuppression`),c=xy(o,s,n,r,i,a);n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma;let l={boxes:o,scores:s},u={maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a},d=I.runKernel(lc,l,u);return{selectedIndices:d[0],selectedScores:d[1]}}var Ry=R({nonMaxSuppressionWithScore_:Ly});async function zy(e,t,n,r=.5,i=-1/0,a=0){let o=L(e,`boxes`,`nonMaxSuppressionAsync`),s=L(t,`scores`,`nonMaxSuppressionAsync`),c=xy(o,s,n,r,i,a);n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma;let l=await Promise.all([o.data(),s.data()]),u=l[0],d=l[1],{selectedIndices:f,selectedScores:p}=Ay(u,d,n,r,i,a);return o!==e&&o.dispose(),s!==t&&s.dispose(),{selectedIndices:Ov(f,`int32`),selectedScores:Ov(p)}}var By=zy;function Vy(e,t,n,r=.5,i=-1/0,a=!1){let o=L(e,`boxes`,`nonMaxSuppression`),s=L(t,`scores`,`nonMaxSuppression`),c=xy(o,s,n,r,i,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,f={boxes:o,scores:s},p={maxOutputSize:l,iouThreshold:u,scoreThreshold:d,padToMaxOutputSize:a},m=I.runKernel(cc,f,p);return{selectedIndices:m[0],validOutputs:m[1]}}var Hy=R({nonMaxSuppressionPadded_:Vy});async function Uy(e,t,n,r=.5,i=-1/0,a=!1){let o=L(e,`boxes`,`nonMaxSuppressionAsync`),s=L(t,`scores`,`nonMaxSuppressionAsync`),c=xy(o,s,n,r,i,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,[f,p]=await Promise.all([o.data(),s.data()]),{selectedIndices:m,validOutputs:h}=ky(f,p,l,u,d,a);return o!==e&&o.dispose(),s!==t&&s.dispose(),{selectedIndices:Ov(m,`int32`),validOutputs:ph(h,`int32`)}}var Wy=Uy;function Gy(e,t,n=!1,r=!1){let i=L(e,`images`,`resizeBilinear`);j(i.rank===3||i.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${i.rank}.`),j(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),j(r===!1||n===!1,()=>`Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.`);let a=i,o=!1;i.rank===3&&(o=!0,a=W(i,[1,i.shape[0],i.shape[1],i.shape[2]]));let[]=t,s={images:a},c={alignCorners:n,halfPixelCenters:r,size:t},l=I.runKernel(Ec,s,c);return o?W(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var Ky=R({resizeBilinear_:Gy});function qy(e,t,n=!1,r=!1){let i=L(e,`images`,`resizeNearestNeighbor`);j(i.rank===3||i.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${i.rank}.`),j(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),j(i.dtype===`float32`||i.dtype===`int32`,()=>"`images` must have `int32` or `float32` as dtype"),j(r===!1||n===!1,()=>`Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.`);let a=i,o=!1;i.rank===3&&(o=!0,a=W(i,[1,i.shape[0],i.shape[1],i.shape[2]]));let[]=t,s={images:a},c={alignCorners:n,halfPixelCenters:r,size:t},l=I.runKernel(wc,s,c);return o?W(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var Jy=R({resizeNearestNeighbor_:qy});function Yy(e,t=`binary`,n=!1,r=.5){let i=L(e,`image`,`threshold`),a=i.shape[0]*i.shape[1],o=U(Ov([r]),255),s,c,l,u;if(j(i.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${i.rank}.`),j(i.shape[2]===3||i.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${i.shape[2]}.`),j(i.dtype===`int32`||i.dtype===`float32`,()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${i.dtype}.`),j(t===`otsu`||t===`binary`,()=>`Method must be binary or otsu, but was ${t}`),i.shape[2]===3){[s,c,l]=pv(i,[1,1,1],-1);let e=U(s,.2989),t=U(c,.587),n=U(l,.114);u=V(V(e,t),n)}else u=e;return t===`otsu`&&(o=Xy(Hp(B(L_(u),`int32`),rd([]),256),a)),B(U(n?tg(u,o):zh(u,o),255),`int32`)}function Xy(e,t){let n=Ov([-1]),r=Ov([0]),i=Ov([0]),a,o,s,c,l,u;for(let d=0;d<e.size-1;d++){a=Dp(e,0,d+1),o=Dp(e,d+1),l=H(G(a),t),u=H(G(o),t),s=H(G(U(a,T_(0,a.size))),G(a));let f=qp(o.shape,a.size),p=V(T_(0,o.size),f);c=H(G(U(o,p)),G(o));let m=K(s,c),h=K(s,c);i=U(U(U(l,u),m),h);let g=zh(i,r);r=Bm(g,i,r),n=Bm(g,Ov([d]),n)}return n}var Zy=R({threshold_:Yy});function Qy(e,t,n=`nearest`,r=`constant`,i=0,a){let o=L(e,`image`,`transform`,`float32`),s=L(t,`transforms`,`transform`,`float32`);j(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),j(s.rank===2&&(s.shape[0]===o.shape[0]||s.shape[0]===1)&&s.shape[1]===8,()=>`Error in transform: Input transform should be batch x 8 or 1 x 8`),j(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);let c={image:o,transforms:s},l={interpolation:n,fillMode:r,fillValue:i,outputShape:a};return I.runKernel(sl,c,l)}var $y=R({transform_:Qy});function eb(e,t,n){let r=L(e,`a`,`bandPart`);j(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);let i=r.shape,[a,o]=r.shape.slice(-2),s,c;typeof t==`number`?(j(t%1==0,()=>`bandPart(): numLower must be an integer, got ${t}.`),j(t<=a,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`),s=L(t<0?a:t,`numLower`,`bandPart`)):(j(t.dtype===`int32`,()=>`bandPart(): numLower's dtype must be an int32.`),s=Bm($h(t,0),a,Bg(t,a))),typeof n==`number`?(j(n%1==0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),j(n<=o,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`),c=L(n<0?o:n,`numUpper`,`bandPart`)):(j(n.dtype===`int32`,()=>`bandPart(): numUpper's dtype must be an int32.`),c=Bm($h(n,0),o,Bg(n,o)));let l=K(W(T_(0,a,1,`int32`),[-1,1]),T_(0,o,1,`int32`)),u=Sg(tg(l,s),Vh(l,dg(c))),d=Lg([a,o],r.dtype);return W(xv(Uv(W(r,[-1,a,o])).map(e=>Bm(u,e,d))),i)}var tb=R({bandPart_:eb});function nb(e){let t;if(Array.isArray(e)){t=!1,j(e!=null&&e.length>0,()=>`Gram-Schmidt process: input must not be null, undefined, or empty`);let n=e[0].shape[0];for(let t=1;t<e.length;++t)j(e[t].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${n})`)}else t=!0,e=pv(e,e.shape[0],0).map(e=>yv(e,[0]));j(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);let n=[],r=e;for(let t=0;t<e.length;++t)n.push(I.tidy(()=>{let e=r[t];if(t>0)for(let r=0;r<t;++r){let t=U(G(U(n[r],e)),n[r]);e=K(e,t)}return H(e,xh(e,`euclidean`))}));return t?xv(n,0):n}var rb=R({gramSchmidt_:nb});function ib(e,t=!1){if(j(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return ab(e,t);{let n=Uv(W(e,[e.shape.slice(0,e.shape.length-2).reduce((e,t)=>e*t),e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),r=[],i=[];return n.forEach(e=>{let[n,a]=ab(e,t);r.push(n),i.push(a)}),[W(xv(r,0),e.shape),W(xv(i,0),e.shape)]}}function ab(e,t=!1){return I.tidy(()=>{j(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);let n=e.shape[0],r=e.shape[1],i=Nh(n),a=yf(e),o=kv([[1]],[1,1]),s=yf(o),c=n>=r?r:n;for(let e=0;e<c;++e){let t=a,c=s,l=i;[s,a,i]=I.tidy(()=>{let t=Dp(a,[e,e],[n-e,1]),c=xh(t),l=Dp(a,[e,e],[1,1]),u=Bm(zh(l,0),kv([[-1]]),kv([[1]])),d=K(l,U(u,c)),f=H(t,d);s=f.shape[0]===1?yf(o):xp([o,Dp(f,[1,0],[f.shape[0]-1,f.shape[1]])],0);let p=dg(H(Cp(u,d),c)),m=Dp(a,[e,0],[n-e,r]),h=U(p,s),g=qv(s);if(e===0)a=K(m,Cp(h,Cp(g,m)));else{let t=K(m,Cp(h,Cp(g,m)));a=xp([Dp(a,[0,0],[e,r]),t],0)}let _=qv(h),v=Dp(i,[0,e],[n,i.shape[1]-e]);if(e===0)i=K(v,Cp(Cp(v,s),_));else{let t=K(v,Cp(Cp(v,s),_));i=xp([Dp(i,[0,0],[n,e]),t],1)}return[s,a,i]}),ld([t,c,l])}return!t&&n>r&&(i=Dp(i,[0,0],[n,r]),a=Dp(a,[0,0],[r,r])),[i,a]})}var ob=R({qr_:ib}),sb={flipLeftRight:my,grayscaleToRGB:gy,resizeNearestNeighbor:Jy,resizeBilinear:Ky,rgbToGrayscale:vy,rotateWithOffset:by,cropAndResize:fy,nonMaxSuppression:Cy,nonMaxSuppressionAsync:Iy,nonMaxSuppressionWithScore:Ry,nonMaxSuppressionWithScoreAsync:By,nonMaxSuppressionPadded:Hy,nonMaxSuppressionPaddedAsync:Wy,threshold:Zy,transform:$y},cb={bandPart:tb,gramSchmidt:rb,qr:ob},lb=new Map,ub=new Map,db=class{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}},fb=class e{constructor(){this.classNameMap={}}static getMap(){return e.instance??=new e,e.instance}static register(t){e.getMap().classNameMap[t.className]=[t,t.fromConfig]}};function q(e,t,n){j(e.className!=null,()=>`Class being registered does not have the static className property defined.`),j(typeof e.className==`string`,()=>`className is required to be a string, but got type `+typeof e.className),j(e.className.length>0,()=>`Class being registered has an empty-string as its className, which is disallowed.`),t===void 0&&(t=`Custom`),n===void 0&&(n=e.className);let r=n,i=t+`>`+r;return fb.register(e),lb.set(i,e),ub.set(e,i),e}var pb=class extends db{minimize(e,t=!1,n){let{value:r,grads:i}=this.computeGradients(e,n);if(n!=null){let e=n.map(e=>({name:e.name,tensor:i[e.name]}));this.applyGradients(e)}else this.applyGradients(i);return ld(i),t?r:(r.dispose(),null)}get iterations(){return this.iterations_??=0,this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return cg(e,t)}dispose(){this.iterations_!=null&&ld(this.iterations_)}async saveIterations(){return this.iterations_??=0,{name:`iter`,tensor:ph(this.iterations_,`int32`)}}async getWeights(){throw Error(`getWeights() is not implemented for this optimizer yet.`)}async setWeights(e){throw Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}};Object.defineProperty(pb,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});var mb=class extends pb{static get className(){return`Adadelta`}constructor(e,t,n=null){super(),this.learningRate=e,this.rho=t,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],n??(this.epsilon=I.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=I.registeredVariables[t];this.accumulatedGrads[n]??(this.accumulatedGrads[n]={originalName:`${t}/accum_grad`,variable:z(()=>Hm(r).variable(!1))}),this.accumulatedUpdates[n]??(this.accumulatedUpdates[n]={originalName:`${t}/accum_var`,variable:z(()=>Hm(r).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedGrads[n].variable,o=this.accumulatedUpdates[n].variable;z(()=>{let e=V(U(a,this.rho),U(_h(i),1-this.rho)),t=U(H(hh(V(o,this.epsilon)),hh(V(a,this.epsilon))),i),n=V(U(o,this.rho),U(_h(t),1-this.rho));a.assign(e),o.assign(n);let s=V(U(t,-this.learningRate),r);r.assign(s)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(ld(this.accumulatedGrads.map(e=>e.variable)),ld(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){let e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=e.length/2;this.accumulatedGrads=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedUpdates=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}},hb=class extends pb{static get className(){return`Adagrad`}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=I.registeredVariables[t];this.accumulatedGrads[n]??(this.accumulatedGrads[n]={originalName:`${t}/accumulator`,variable:z(()=>qp(r.shape,this.initialAccumulatorValue).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedGrads[n].variable;z(()=>{let e=V(a,_h(i));a.assign(e);let t=V(U(H(i,hh(V(e,I.backend.epsilon()))),-this.learningRate),r);r.assign(t)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&ld(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulatedGrads=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}},gb=class extends pb{static get className(){return`Adam`}constructor(e,t,n,r=null){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],z(()=>{this.accBeta1=ph(t).variable(),this.accBeta2=ph(n).variable()}),r??(this.epsilon=I.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);z(()=>{let n=K(1,this.accBeta1),r=K(1,this.accBeta2);t.forEach((t,i)=>{let a=I.registeredVariables[t];this.accumulatedFirstMoment[i]??(this.accumulatedFirstMoment[i]={originalName:`${t}/m`,variable:z(()=>Hm(a).variable(!1))}),this.accumulatedSecondMoment[i]??(this.accumulatedSecondMoment[i]={originalName:`${t}/v`,variable:z(()=>Hm(a).variable(!1))});let o=Array.isArray(e)?e[i].tensor:e[t];if(o==null)return;let s=this.accumulatedFirstMoment[i].variable,c=this.accumulatedSecondMoment[i].variable,l=V(U(s,this.beta1),U(o,1-this.beta1)),u=V(U(c,this.beta2),U(_h(o),1-this.beta2)),d=H(l,n),f=H(u,r);s.assign(l),c.assign(u);let p=V(U(H(d,V(hh(f),this.epsilon)),-this.learningRate),a);a.assign(p)}),this.accBeta1.assign(U(this.accBeta1,this.beta1)),this.accBeta2.assign(U(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&ld(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&ld(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),z(()=>{this.accBeta1.assign(fh(this.beta1,this.iterations_+1)),this.accBeta2.assign(fh(this.beta2,this.iterations_+1))});let t=e.length/2;this.accumulatedFirstMoment=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}},_b=class extends pb{static get className(){return`Adamax`}constructor(e,t,n,r=null,i=0){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.decay=i,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],z(()=>{this.iteration=ph(0).variable(),this.accBeta1=ph(t).variable()}),r??(this.epsilon=I.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);z(()=>{let n=K(1,this.accBeta1),r=H(-this.learningRate,V(U(this.iteration,this.decay),1));t.forEach((t,i)=>{let a=I.registeredVariables[t];this.accumulatedFirstMoment[i]??(this.accumulatedFirstMoment[i]={originalName:`${t}/m`,variable:Hm(a).variable(!1)}),this.accumulatedWeightedInfNorm[i]??(this.accumulatedWeightedInfNorm[i]={originalName:`${t}/v`,variable:Hm(a).variable(!1)});let o=Array.isArray(e)?e[i].tensor:e[t];if(o==null)return;let s=this.accumulatedFirstMoment[i].variable,c=this.accumulatedWeightedInfNorm[i].variable,l=V(U(s,this.beta1),U(o,1-this.beta1)),u=Pg(U(c,this.beta2),Df(o));s.assign(l),c.assign(u);let d=V(U(H(r,n),H(l,V(u,this.epsilon))),a);a.assign(d)}),this.iteration.assign(V(this.iteration,1)),this.accBeta1.assign(U(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&ld(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&ld(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw Error(`getWeights() is not implemented for Adamax yet.`)}async setWeights(e){throw Error(`setWeights() is not implemented for Adamax yet.`)}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}},vb=class extends pb{static get className(){return`SGD`}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=Array.isArray(e)?e[n].tensor:e[t];if(r==null)return;let i=I.registeredVariables[t];z(()=>{let e=V(U(this.c,r),i);i.assign(e)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=ud(ph(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw Error(`SGD optimizer does not have settable weights.`)}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}},yb=class extends vb{static get className(){return`Momentum`}constructor(e,t,n=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=n,this.accumulations=[],this.m=ph(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=I.registeredVariables[t];this.accumulations[n]??(this.accumulations[n]={originalName:`${t}/momentum`,variable:z(()=>Hm(r).variable(!1))});let i=this.accumulations[n].variable,a=Array.isArray(e)?e[n].tensor:e[t];a!=null&&z(()=>{let e,t=V(U(this.m,i),a);e=this.useNesterov?V(U(this.c,V(a,U(t,this.m))),r):V(U(this.c,t),r),i.assign(t),r.assign(e)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&ld(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulations=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}},bb=class extends pb{static get className(){return`RMSProp`}constructor(e,t=.9,n=0,r=null,i=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=n,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=i,r??(this.epsilon=I.backend.epsilon()),e==null)throw Error(`learningRate for RMSPropOptimizer must be defined.`)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=I.registeredVariables[t];this.accumulatedMeanSquares[n]??(this.accumulatedMeanSquares[n]={originalName:`${t}/rms`,variable:z(()=>Hm(r).variable(!1))}),this.accumulatedMoments[n]??(this.accumulatedMoments[n]={originalName:`${t}/momentum`,variable:z(()=>Hm(r).variable(!1))}),this.accumulatedMeanGrads[n]==null&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${t}/mg`,variable:z(()=>Hm(r).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedMeanSquares[n].variable,o=this.accumulatedMoments[n].variable;z(()=>{let e=V(U(a,this.decay),U(_h(i),1-this.decay));if(this.centered){let t=this.accumulatedMeanGrads[n].variable,s=V(U(t,this.decay),U(i,1-this.decay)),c=H(U(i,this.learningRate),hh(K(e,V(_h(s),this.epsilon)))),l=V(U(o,this.momentum),c);a.assign(e),t.assign(s),o.assign(l);let u=K(r,l);r.assign(u)}else{let e=V(U(a,this.decay),U(_h(i),1-this.decay)),t=V(U(o,this.momentum),H(U(i,this.learningRate),hh(V(e,this.epsilon))));a.assign(e),o.assign(t);let n=K(r,t);r.assign(n)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&ld(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&ld(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&ld(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=this.centered?e.length/3:e.length/2;this.accumulatedMeanSquares=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedMoments=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}},xb=[mb,hb,gb,_b,yb,bb,vb];function Sb(){for(let e of xb)q(e)}function Cb(e,t,n,r){o(e),n??=0,r??=1,s(n,r);let i=0,a=a=>(a.then(a=>(t(n+ ++i/e.length*(r-n)),a)),a);function o(e){j(e!=null&&Array.isArray(e)&&e.length>0,()=>`promises must be a none empty array`)}function s(e,t){j(e>=0&&e<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${e}`),j(t>=0&&t<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${t}`),j(t>=e,()=>`startFraction must be no more than endFraction, but got startFraction ${e} and endFraction ${t}`)}return Promise.all(e.map(a))}async function wb(e,t){t??={};let n=t.fetchFunc==null?P().platform.fetch:t.fetchFunc,r=e.map(e=>n(e,t.requestInit,{isBinary:!0})),i=(t.onProgress==null?await Promise.all(r):await Cb(r,t.onProgress,0,.5)).map(e=>e.arrayBuffer());return t.onProgress==null?await Promise.all(i):await Cb(i,t.onProgress,.5,1)}function Tb(e,t){var n;let r=t.fetchFunc==null?P().platform.fetch:t.fetchFunc,i=0,a;return(n=t.onProgress)==null||n.call(t,0),new ReadableStream({pull:async n=>{for(var o;i<e.length;){a||=(await r(e[i],t.requestInit,{isBinary:!0})).body.getReader();let{done:s,value:c}=await a.read();if(s){i++,a=void 0,(o=t.onProgress)==null||o.call(t,i/e.length);continue}n.enqueue(c);return}n.close()}})}var Eb=`application/octet-stream`,Db=`application/json`,Ob=class{constructor(e,t){if(this.DEFAULT_METHOD=`POST`,t??={},this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc==null?this.fetch=P().platform.fetch:(j(typeof t.fetchFunc==`function`,()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc),j(e!=null&&e.length>0,()=>`URL path for http must not be null, undefined or empty.`),Array.isArray(e)&&j(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw Error(`requestInit is expected to have no pre-existing body, but has one.`);this.requestInit=t.requestInit||{},this.loadOptions=t}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.`);let t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;let n=wd(e,[{paths:[`./model.weights.bin`],weights:e.weightSpecs}]);if(t.body.append(`model.json`,new Blob([JSON.stringify(n)],{type:Db}),`model.json`),e.weightData!=null){let n=ad.join(e.weightData);t.body.append(`model.weights.bin`,new Blob([n],{type:Eb}),`model.weights.bin`)}let r=await this.fetch(this.path,t);if(r.ok)return{modelArtifactsInfo:Dd(e),responses:[r]};throw Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async loadModelJSON(){let e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let e=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(`.pb`)?e+=` Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.`:e+=` Please make sure the server is serving valid JSON for this request.`,Error(e)}let n=t.modelTopology,r=t.weightsManifest;if(n==null&&r==null)throw Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return t}async load(){return this.loadOptions.streamWeights?this.loadStream():Ed(await this.loadModelJSON(),e=>this.loadWeights(e))}async loadStream(){let e=await this.loadModelJSON(),t=await this.getWeightUrls(e.weightsManifest),n=Od(e.weightsManifest);return Object.assign(Object.assign({},e),{weightSpecs:n,getWeightStream:()=>Tb(t,this.loadOptions)})}async getWeightUrls(e){let[t,n]=kb(Array.isArray(this.path)?this.path[1]:this.path),r=this.weightPathPrefix||t,i=[],a=[];for(let t of e)for(let e of t.paths)this.weightUrlConverter==null?i.push(r+e+n):a.push(this.weightUrlConverter(e));return this.weightUrlConverter&&i.push(...await Promise.all(a)),i}async loadWeights(e){let t=await this.getWeightUrls(e);return[Od(e),await wb(t,this.loadOptions)]}};Ob.URL_SCHEME_REGEX=/^https?:\/\//;function kb(e){let t=e.lastIndexOf(`/`),n=e.lastIndexOf(`?`),r=e.substring(0,t),i=n>t?e.substring(n):``;return[r+`/`,i]}function Ab(e){return e.match(Ob.URL_SCHEME_REGEX)!=null}var jb=(e,t)=>{if(typeof fetch>`u`&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(n=Array.isArray(e)?e.every(e=>Ab(e)):Ab(e),n)return Mb(e,t)}return null};Nd.registerSaveRouter(jb),Nd.registerLoadRouter(jb);function Mb(e,t){return new Ob(e,t)}function Nb(e,t){return Mb(e,t)}function Pb(e,t){let n=e.shape.length,r=t.shape.length;if(n<1)throw Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(t.dtype!==`int32`)throw Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(M(e.shape)===0)throw Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let i=t.shape,a=i[i.length-1],o=1;for(let e=0;e<i.length-1;++e)o*=i[e];let s=e.shape,c=i.slice();c.pop();let l=1;for(let e=a;e<n;++e)l*=s[e],c.push(s[e]);let u=[...N(e.shape).map(e=>e/l),1].slice(0,a);return[c,o,l,u]}var Fb=s({assertParamsValid:()=>Rb,computeFlatOffset:()=>Zb,computeOutShape:()=>Bb,getNormalizedAxes:()=>Wb,isSliceContinous:()=>Xb,maskToAxes:()=>zb,parseSliceParams:()=>Qb,sliceInfo:()=>$b,startForAxis:()=>Jb,startIndicesWithElidedDims:()=>Gb,stopForAxis:()=>Yb,stopIndicesWithElidedDims:()=>Kb,stridesForAxis:()=>qb,stridesWithElidedDims:()=>Vb}),Ib=-2,Lb=-1;function Rb(e,t,n){let r=e.shape.length;j(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),j(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let i=0;i<r;++i)j(t[i]+n[i]<=e.shape[i],()=>`Error in slice${r}D: begin[${i}] + size[${i}] (${t[i]+n[i]}) would overflow input.shape[${i}] (${e.shape[i]})`)}function zb(e){let t=[],n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function Bb(e,t,n){let r=[];for(let i=0;i<e.length;i++)r[i]=Math.ceil((t[i]-e[i])/n[i]);return r}function Vb(e,t,n,r){let i=[...e];for(let e=i.length;e<r.length;e++)i.push(1);for(let e=0;e<n;e++)e===0?i[t]=1:(i.splice(t,0,1),i.pop());return i}function Hb(e,t,n){return n<=e?n:n-(t-1)}function Ub(e,t){let n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function Wb(e,t,n,r,i,a,o,s,c){let l=e.length,u=Array(l),d=Array(l),f=Array(l);if(t.length&&n>0){let c=t[0],l=n+1;u=Gb(o,c,l,r,e),d=Kb(s,c,l,i,e),f=Vb(a,c,l,e)}else for(let t=0;t<l;t++)u[t]=Jb(o,r,a,e,t,c),d[t]=Yb(s,i,a,e,t,c),f[t]=qb(a,t,c);return{begin:u,end:d,strides:f}}function Gb(e,t,n,r,i){let a=[...i],o=Ub(n,t);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=0;else{let o=Hb(t,n,i),s=r[o];e&1<<o&&(s=0),a[i]=s}return a}function Kb(e,t,n,r,i){let a=[...i],o=Ub(n,t);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=2**53-1;else{let o=Hb(t,n,i),s=r[o];e&1<<o&&(s=2**53-1),a[i]=s}for(let e=0;e<a.length;e++){let t=i[e];a[e]<0&&(a[e]+=t),a[e]=Aa(0,a[e],i[e])}return a}function qb(e,t,n){let r=e[t];return(n&1<<t||r==null)&&(r=1),r}function Jb(e,t,n,r,i,a){let o=t[i],s=n[i]||1;(e&1<<i||a&1<<i||o==null)&&(o=s>0?-(2**53-1):2**53-1);let c=r[i];return o<0&&(o+=c),o=Aa(0,o,c-1),o}function Yb(e,t,n,r,i,a){let o=t[i],s=n[i]||1;(e&1<<i||a&1<<i||o==null)&&(o=s>0?2**53-1:-(2**53-1));let c=r[i];return o<0&&(o+=c),o=s>0?Aa(0,o,c):Aa(-1,o,c-1),o}function Xb(e,t,n){let r=n.length;for(let e=0;e<n.length;e++)if(n[e]>1){r=e;break}for(let i=r+1;i<n.length;i++)if(t[i]>0||n[i]!==e[i])return!1;return!0}function Zb(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function Qb(e,t,n){let r,i=e.shape.length;r=typeof t==`number`?[t,...Array(i-1).fill(0)]:t.length<i?t.concat(Array(i-t.length).fill(0)):t.slice(),r.forEach(e=>{j(e!==-1,()=>`slice() does not support negative begin indexing.`)});let a;return a=n==null?Array(i).fill(-1):typeof n==`number`?[n,...Array(i-1).fill(-1)]:n.length<i?n.concat(Array(i-n.length).fill(-1)):n,a=a.map((t,n)=>t>=0?t:(j(t===-1,()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${n}.`),e.shape[n]-r[n])),[r,a]}function $b(e,t,n,r,i,a,o,s,c){let l;if(r==null?(l=Array(t.length),l.fill(1)):l=r,o!=null&&o&o-1)throw Error(`Multiple ellipses in slice is not allowed.`);let u=!1,d={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:l.slice(),beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:c};for(let e=0;e<d.dims;e++)u&&1<<e&s&&d.numAddAxisAfterEllipsis++,1<<e&o&&(u=!0);u||(d.ellipsisMask|=1<<d.dims,d.dims++);let f={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};ex(d,f);let p=!0,m=!0,h=!0,g=[],_=[];for(let t=0;t<e.length;++t){if(f.strides[t]===0)throw Error(`strides[${t}] must be non-zero`);let n=!!(f.shrinkAxisMask&1<<t),r=e[t];if(r===-1){g.push(n?1:-1);continue}let i=[f.beginMask&1<<t,f.endMask&1<<t],a=[f.strides[t]>0?0:-1,f.strides[t]>0?r:r-1];if(n&&f.strides[t]<=0)throw Error(`only stride 1 allowed on non-range indexing.`);h&&=f.strides[t]===1;let o=!!(f.beginMask&1<<t&&f.endMask&1<<t);if(f.beginValid&&f.endValid){if(n){let e=f.begin[t]<0?r+f.begin[t]:f.begin[t];if(f.begin[t]=e,f.end[t]=f.begin[t]+1,e<0||e>=r)throw Error(`slice index ${f.begin[t]} of dimension ${t} out of bounds.`)}else f.begin[t]=tx(f.begin[t],0,f.strides[t],r,i,a),f.end[t]=tx(f.end[t],1,f.strides[t],r,i,a);let e=f.strides[t]===1&&f.begin[t]===0&&f.end[t]===r;p&&=e,m&&=t===0&&f.strides[t]===1||e}else p=p&&f.strides[t]===1&&o,m&&=t===0&&f.strides[t]===1||o;let s,c=!1;if(f.beginValid&&f.endValid?(s=f.end[t]-f.begin[t],c=!0):n?(s=1,c=!0):o&&r>=0&&(s=f.strides[t]<0?-r:r,c=!0),c){let e;e=s===0||s<0!=f.strides[t]<0?0:Math.trunc(s/f.strides[t])+(s%f.strides[t]===0?0:1),g.push(e)}else g.push(-1)}for(let e=0;e<f.finalShapeGatherIndices.length;++e){let t=f.finalShapeGatherIndices[e];t>=0?_.push(g[t]):t===Ib&&_.push(1)}return{finalShapeSparse:_.filter((e,t)=>f.finalShapeGatherIndices[t]!==Ib),finalShape:_,isIdentity:p,sliceDim0:m,isSimpleSlice:h,begin:f.begin,end:f.end,strides:f.strides}}function ex(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=Array(t.dims),t.end=Array(t.dims),t.strides=Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){let i=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<i;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(Ib),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[r]),e.end!=null&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(Lb),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}function tx(e,t,n,r,i,a){if(i[t])return n>0?a[t]:a[t+1&1];{let t=e<0?r+e:e;return t<a[0]?a[0]:t>a[1]?a[1]:t}}var nx=class{static sgd(e){return new vb(e)}static momentum(e,t,n=!1){return new yb(e,t,n)}static rmsprop(e,t=.9,n=0,r=null,i=!1){return new bb(e,t,n,r,i)}static adam(e=.001,t=.9,n=.999,r=null){return new gb(e,t,n,r)}static adadelta(e=.001,t=.95,n=null){return new mb(e,t,n)}static adamax(e=.002,t=.9,n=.999,r=null,i=0){return new _b(e,t,n,r,i)}static adagrad(e,t=.1){return new hb(e,t)}},rx=typeof requestAnimationFrame<`u`?requestAnimationFrame:typeof setImmediate<`u`?setImmediate:e=>e();function ix(){return new Promise(e=>rx(()=>e()))}function ax(e,t){let n=e[0].length;e.forEach((e,t)=>{j(e.length===n,()=>`Error in concat${n}D: rank of tensors[${t}] must be the same as the rank of the rest (${n})`)}),j(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);let r=e[0];e.forEach((e,i)=>{for(let a=0;a<n;a++)j(a===t||e[a]===r[a],()=>`Error in concat${n}D: Shape of tensors[${i}] (${e}) does not match the shape of the rest (${r}) along the non-concatenated axis ${i}.`)})}function ox(e,t){let n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}var sx;(function(e){e[e.FIRST_DIM_SIZE=0]=`FIRST_DIM_SIZE`,e[e.VALUE_ROWIDS=1]=`VALUE_ROWIDS`,e[e.ROW_LENGTHS=2]=`ROW_LENGTHS`,e[e.ROW_SPLITS=3]=`ROW_SPLITS`,e[e.ROW_LIMITS=4]=`ROW_LIMITS`,e[e.ROW_STARTS=5]=`ROW_STARTS`})(sx||={});function cx(e,t,n){let r=[];if(n==null&&t==null)return r;if(t==null)for(;r.length<e+n.length;)r.push(-1);else r=t.slice();if(n==null)return r;if(e+n.length!==r.length)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${r.length}`);for(let i=1;i<n.length;++i){let a=n[i],o=r[r.length-n.length+i],s=r[o];if(a>=0)if(s>=0){if(s!==a)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${i+e}] = ${a} but shape[${i+e}] = ${s}`)}else r[o]=a}return r}function lx(e){let t={FIRST_DIM_SIZE:sx.FIRST_DIM_SIZE,VALUE_ROWIDS:sx.VALUE_ROWIDS,ROW_LENGTHS:sx.ROW_LENGTHS,ROW_SPLITS:sx.ROW_SPLITS,ROW_LIMITS:sx.ROW_LIMITS,ROW_STARTS:sx.ROW_STARTS},n=[];for(let r of e)if(r in t)n.push(t[r]);else break;return n}function ux(e){return e.length===0?0:e[0]===sx.FIRST_DIM_SIZE?e.length-1:e.length}function dx(e,t){if(e==null||t==null)return;let n=e.length,r=t.length;if(n>=r)throw Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let i=0;i<Math.min(n,r-1);++i){let n=e[i],r=t[i+1];if(n>=0&&r>=0&&n!==1&&n!==r)throw Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${i-e.length}] = ${n} but ragged tensor input.flatValues.shape[${i-e.length}] = ${r}`)}}function fx(e){return e<=30?e:ro(e,Math.floor(Math.sqrt(e)))}function px(e,t,n){return[n*(typeof e==`number`?e:e[0]),t*(typeof e==`number`?e:e[1])]}function mx(e,t,n,r=!0){let i=[];if(r)i=i.concat(t.slice(0)),i.push(e[0]/n),i=i.concat(e.slice(1));else{i=i.concat(e[0]);let n=t.length;for(let r=0;r<n;++r)i=i.concat([e[r+1]/t[r],t[r]]);i=i.concat(e.slice(n+1))}return i}function hx(e,t,n=!0){let r=[];if(n){r.push(t);for(let n=t+1;n<e;++n)n<=2*t?(r.push(n),r.push(n-(t+1))):r.push(n)}else{let n=[],i=[];for(let r=1;r<e;++r)r>=t*2+1||r%2==1?i.push(r):n.push(r);r.push(...n),r.push(0),r.push(...i)}return r}function gx(e,t,n,r=!0){let i=[];r?i.push(e[0]/n):i.push(e[0]*n);for(let n=1;n<e.length;++n)n<=t.length?r?i.push(t[n-1]*e[n]):i.push(e[n]/t[n-1]):i.push(e[n]);return i}function _x(e,t){let n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function vx(e,t,n){let r=e.slice(0,1);for(let i=0;i<n;++i)r.push(e[i+1]-t[i][0]-t[i][1]);return r}var yx=1.7580993408473768,bx=1.0507009873554805,xx=.3275911,Sx=.254829592,Cx=-.284496736,wx=1.421413741,Tx=-1.453152027,Ex=1.061405429;function Dx(e,t){if(e.length!==t.length)throw Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let n=new Float32Array(e.length*2);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function Ox(e){let t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function kx(e){let t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=0;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function Ax(e){let t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=2;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function jx(e,t){return{real:e[t*2],imag:e[t*2+1]}}function Mx(e,t,n,r){e[r*2]=t,e[r*2+1]=n}function Nx(e,t){let n=new Float32Array(e/2),r=new Float32Array(e/2);for(let i=0;i<Math.ceil(e/2);i++){let a=(t?2:-2)*Math.PI*(i/e);n[i]=Math.cos(a),r[i]=Math.sin(a)}return{real:n,imag:r}}function Px(e,t,n){let r=(n?2:-2)*Math.PI*(e/t);return{real:Math.cos(r),imag:Math.sin(r)}}var Fx=`->`,Ix=/->/g,Lx=`,`,Rx=`...`;function zx(e,t){e=e.replace(/\s/g,``);let n=(e.length-e.replace(Ix,``).length)/2;if(n<1)throw Error(`Equations without an arrow are not supported.`);if(n>1)throw Error(`Equation must contain exactly one arrow ("${Fx}").`);let[r,i]=e.split(Fx);j(r.indexOf(Rx)===-1,()=>`The ellipsis notation ("${Rx}") is not supported yet.`);let a=r.split(Lx),o=a.length;if(t!==o)throw Error(`Expected ${o} input tensors, received ${t}`);if(o>2)throw Error(`Support for more than 2 input tensors is not implemented yet.`);let s=[];for(let e=0;e<i.length;++e){let t=i[e];if(!a.some(e=>e.indexOf(t)!==-1))throw Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);s.indexOf(t)===-1&&s.push(t)}for(let e=0;e<r.length;++e){let t=r[e];s.indexOf(t)===-1&&t!==Lx&&s.push(t)}let c=Array(a.length);for(let e=0;e<o;++e){if(new Set(a[e].split(``)).size!==a[e].length)throw Error(`Found duplicate axes in input component ${a[e]}. Support for duplicate axes in input is not implemented yet.`);c[e]=[];for(let t=0;t<a[e].length;++t)c[e].push(s.indexOf(a[e][t]))}let l=s.length,u=i.length,d=[];for(let e=u;e<l;++e)d.push(e);return{allDims:s,summedDims:d,idDims:c}}function Bx(e,t){let n=Array(e);n.fill(-1);for(let e=0;e<t.length;++e)n[t[e]]=e;let r=[];for(let t=0;t<e;++t)n[t]===-1&&r.push(t);return n=n.filter(e=>e!==-1),{permutationIndices:n,expandDims:r}}function Vx(e,t,n){let r=Array(e);for(let e=0;e<n.length;++e){let i=n[e].shape;for(let n=0;n<t[e].length;++n)r[t[e][n]]===void 0?r[t[e][n]]=i[n]:j(r[t[e][n]]===i[n],()=>`Expected dimension ${r[t[e][n]]} at axis ${n} of input shaped ${JSON.stringify(i)}, but got dimension ${i[n]}`)}}function Hx(e,t){let n=e,r=[],i=0;e.length===0&&n.push(-1),i=e.length+1;for(let e=0;e<i;++e)r.push([]);let a=[];for(let e=0;e<n.length;++e){let i=n[e],o=Wx(t,i);for(let t of o)a.indexOf(t)===-1&&(r[e].push(t),a.push(t))}return{path:n,steps:r}}function Ux(e){return e.every((e,t)=>e===t)}function Wx(e,t){let n=[];for(let r=0;r<e.length;++r)(e[r].length===0||e[r].indexOf(t)!==-1||t===-1)&&n.push(r);return n}function Gx(e,t,n=0){let r=[];if(typeof t==`number`)j(e.shape[n]%t===0,()=>`Number of splits must evenly divide the axis.`),r=Array(t).fill(e.shape[n]/t);else{j(t.reduce((e,t)=>(t===-1&&(e+=1),e),0)<=1,()=>`There should be only one negative value in split array.`);let i=t.indexOf(-1);if(i!==-1){let r=t.reduce((e,t)=>t>0?e+t:e);t[i]=e.shape[n]-r}j(e.shape[n]===t.reduce((e,t)=>e+t),()=>`The sum of sizes must match the size of the axis dimension.`),r=t}return r}function Kx(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function qx(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function Jx(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}function Yx(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function Xx(e,t){return`size ${e} must be non-negative, not ${t}`}function Zx(){return`reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero`}function Qx(e,t){return`Input to reshape is a SparseTensor with ${M(e)}
  dense values, but the requested shape requires a multiple of ${M(t)}. inputShape=${e} outputShape= ${t}`}function $x(e,t){return`Input to reshape is a tensor with ${M(e)} dense values, but the requested shape has ${M(t)}. inputShape=${e} outputShape=${t}`}function eS(){return`segment ids must be >= 0`}function tS(){return`segment ids are not increasing`}function nS(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function rS(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}var iS=s({collectGatherOpShapeInfo:()=>sS,computeOutShape:()=>oS,segOpComputeOptimalWindowSize:()=>aS});function aS(e,t){let n=!1,r;for(e<=30?(r=e,n=!0):r=ro(e,Math.floor(Math.sqrt(e)));!n;)r>t||r===e?n=!0:r=ro(e,r+1);return r}function oS(e,t,n){let r=[],i=e.length;for(let a=0;a<i;a++)a===t?r.push(n):r.push(e[a]);return r}function sS(e,t,n,r){let i=t.shape.length,a=e.shape.length;if(r!==0&&(r<-i||r>i))throw Error(`Expect batchDims in the range of [-${i}, ${i}], but got ${r}`);if(r<0&&(r+=i),r>a)throw Error(`batchDims (${r}) must be less than rank(x) (
    ${a}).`);if(n<r)throw Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let n=0;n<r;++n)if(e.shape[n]!==t.shape[n])throw Error(`x.shape[${n}]: ${e.shape[n]} should be equal to indices.shape[${n}]: ${t.shape[n]}.`);let o=e.shape[n],s=[],c=1,l=1,u=1;for(let t=0;t<r;++t)s.push(e.shape[t]),c*=e.shape[t];for(let t=r;t<n;t++)s.push(e.shape[t]),l*=e.shape[t];for(let e=r;e<i;e++)s.push(t.shape[e]);for(let t=n+1;t<a;t++)s.push(e.shape[t]),u*=e.shape[t];return{batchSize:c,sliceSize:u,outerSize:l,dimSize:o,outputShape:s}}var cS=s({ERF_A1:()=>Sx,ERF_A2:()=>Cx,ERF_A3:()=>wx,ERF_A4:()=>Tx,ERF_A5:()=>Ex,ERF_P:()=>xx,PARALLELIZE_THRESHOLD:()=>30,RowPartitionType:()=>sx,SELU_SCALE:()=>bx,SELU_SCALEALPHA:()=>yx,applyActivation:()=>ty,assertAndGetBroadcastShape:()=>Im,assertAxesAreInnerMostDims:()=>rh,assertParamsConsistent:()=>ax,assignToTypedArray:()=>Mx,axesAreInnerMostDims:()=>$m,calculateShapes:()=>Nv,checkEinsumDimSizes:()=>Vx,checkPadOnDimRoundingMode:()=>mp,combineLocations:()=>eh,combineRaggedTensorToTensorShapes:()=>cx,complexWithEvenIndex:()=>kx,complexWithOddIndex:()=>Ax,computeConv2DInfo:()=>$f,computeConv3DInfo:()=>ep,computeDefaultPad:()=>rp,computeDilation2DInfo:()=>Xf,computeOptimalWindowSize:()=>fx,computeOutAndReduceShapes:()=>th,computeOutShape:()=>ox,computePool2DInfo:()=>Zf,computePool3DInfo:()=>Qf,convertConv2DDataFormat:()=>pp,decodeEinsumEquation:()=>zx,eitherStridesOrDilationsAreOne:()=>dp,expandShapeToKeepDim:()=>nh,exponent:()=>Px,exponents:()=>Nx,fromStringArrayToUint8:()=>uS,fromUint8ToStringArray:()=>lS,getAxesPermutation:()=>ih,getBroadcastDims:()=>Pm,getComplexWithIndex:()=>jx,getEinsumComputePath:()=>Hx,getEinsumPermutation:()=>Bx,getFusedBiasGradient:()=>ey,getFusedDyActivation:()=>$v,getImageCenter:()=>px,getInnerMostAxes:()=>oh,getPermuted:()=>hx,getRaggedRank:()=>ux,getReductionAxes:()=>Fm,getReshaped:()=>mx,getReshapedPermuted:()=>gx,getRowPartitionTypesHelper:()=>lx,getSliceBeginCoords:()=>_x,getSliceSize:()=>vx,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>Kx,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>qx,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>Jx,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>Zx,getSparseReshapeInputOutputMismatchErrorMessage:()=>$x,getSparseReshapeInputOutputMultipleErrorMessage:()=>Qx,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>Yx,getSparseReshapeNegativeOutputDimErrorMessage:()=>Xx,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>rS,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>eS,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>tS,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>nS,getUndoAxesPermutation:()=>ah,isIdentityPermutation:()=>Ux,log:()=>bl,mergeRealAndImagArrays:()=>Dx,prepareAndValidate:()=>Pb,prepareSplitSize:()=>Gx,segment_util:()=>iS,shouldFuse:()=>ny,slice_util:()=>Fb,splitRealAndImagArrays:()=>Ox,stridesOrDilationsArePositive:()=>fp,tupleValuesAreOne:()=>up,upcastType:()=>ku,validateDefaultValueShape:()=>dx,validateInput:()=>Mv,validateUpdateShape:()=>jv,warn:()=>yl});function lS(e){try{return e.map(e=>$l(e))}catch(e){throw Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function uS(e){return e.map(e=>Ql(e))}Sb();var dS={kernelName:`Abs`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,Cv(B(n,`float32`),-1))}}},fS={kernelName:Eo,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=_h(B(n,`float32`));return dg(H(e,hh(K(ph(1),t))))}}}},pS={kernelName:Do,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>H(e,hh(K(_h(B(n,`float32`)),1)))}}},mS={kernelName:`Add`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Im(n.shape,r.shape);return{a:()=>{let t=e,r=Fm(n.shape,i);return r.length>0&&(t=G(t,r)),W(t,n.shape)},b:()=>{let t=e,n=Fm(r.shape,i);return n.length>0&&(t=G(t,n)),W(t,r.shape)}}}},hS={kernelName:Oo,saveAllInputs:!0,gradFunc:(e,t)=>{let n={};return t.forEach((t,r)=>{n[r]=()=>e.clone()}),n}},gS={kernelName:ko,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>Hm(n)}}},_S={kernelName:Ao,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>Hm(n)}}},vS={kernelName:jo,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>H(e,hh(K(ph(1),_h(B(n,`float32`)))))}}},yS={kernelName:Mo,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>H(e,hh(V(ph(1),_h(B(n,`float32`)))))}}},bS={kernelName:Fo,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Im(n.shape,r.shape);return{a:()=>{let t=U(e,H(r,V(_h(n),_h(r)))),a=Fm(n.shape,i);return a.length>0&&(t=G(t,a)),W(t,n.shape)},b:()=>{let t=dg(U(e,H(n,V(_h(n),_h(r))))),a=Fm(r.shape,i);return a.length>0&&(t=G(t,a)),W(t,r.shape)}}}},xS={kernelName:No,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>H(e,V(_h(B(n,`float32`)),1))}}},SS={kernelName:Po,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>H(e,K(ph(1),_h(B(n,`float32`))))}}};function CS(e,t,n,r,i,a){let o=L(e,`dy`,`avgPool3dGrad`),s=L(t,`input`,`avgPool3dGrad`),c=o,l=s,u=!1;s.rank===4&&(u=!0,c=W(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]]),l=W(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]])),j(c.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),j(l.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${l.rank}.`),mp(`avgPool3dGrad`,i,a);let d={dy:c,input:l},f={filterSize:n,strides:r,pad:i,dimRoundingMode:a},p=I.runKernel(zo,d,f);return u?W(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var wS=R({avgPool3dGrad_:CS}),TS={kernelName:Ro,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{filterSize:i,strides:a,pad:o,dimRoundingMode:s}=n;return{x:()=>wS(e,r,i,a,o,s)}}};function ES(e,t,n,r,i){let a=L(e,`dy`,`avgPoolGrad`),o=L(t,`input`,`avgPoolGrad`);j(o.rank===a.rank,()=>`Rank of input (${o.rank}) does not match rank of dy (${a.rank})`);let s=o,c=a,l=!1;o.rank===3&&(l=!0,s=W(o,[1,o.shape[0],o.shape[1],o.shape[2]]),c=W(a,[1,a.shape[0],a.shape[1],a.shape[2]])),j(c.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${c.rank}.`),j(s.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${s.rank}.`);let u={dy:c,input:s},d={filterSize:n,strides:r,pad:i},f=I.runKernel(Lo,u,d);return l?W(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var DS=R({avgPoolGrad_:ES}),OS={kernelName:Io,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{filterSize:i,strides:a,pad:o}=n;return{x:()=>DS(e,r,i,a,o)}}},kS={kernelName:Bo,inputsToSave:[`a`,`b`],gradFunc:(e,t,n)=>{let[r,i]=t,{transposeA:a,transposeB:o}=n;return!a&&!o?{a:()=>Cp(e,i,!1,!0),b:()=>Cp(r,e,!0,!1)}:!a&&o?{a:()=>Cp(e,i,!1,!1),b:()=>Cp(e,r,!0,!1)}:a&&!o?{a:()=>Cp(i,e,!1,!0),b:()=>Cp(r,e,!1,!1)}:{a:()=>Cp(i,e,!0,!0),b:()=>Cp(e,r,!0,!0)}}},AS={kernelName:Vo,gradFunc:(e,t,n)=>{let{blockShape:r,crops:i}=n;return{x:()=>n_(e,r,i)}}},jS={kernelName:Wo,gradFunc:(e,t,n)=>{let r=n,i=r.inputShape,a=r.shape,o=Array.from(a);for(let e=i.length-1;e>=0;e--)if(i[e]===a[e])o[e]=1;else if(i[e]!==1)throw Error(`broadcastTo(): [${i}] cannot be broadcast to [${a}].`);let s=[];for(let e=0;e<o.length;e++)o[e]>1&&s.push(e);return{x:()=>G(e,s,!0)}}},MS={kernelName:Ko,gradFunc:e=>({x:()=>e.clone()})},NS={kernelName:qo,gradFunc:e=>({x:()=>Hm(e)})},PS={kernelName:Jo,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{clipValueMin:i,clipValueMax:a}=n;return{x:()=>Bm(Sg(Vh(r,i),tg(r,a)),e,Hm(e))}}},FS={kernelName:Xo,inputsToSave:[`x`],gradFunc:dS.gradFunc},IS={kernelName:Zo,saveAllInputs:!0,gradFunc:(e,t,n)=>{let r=t.map(e=>e.shape),{axis:i}=n,a=Ua(i,t[0].shape)[0];return pv(e,r.map(e=>e[a]),a).map(e=>()=>e)}},LS={kernelName:Qo,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,{dilations:a,strides:o,pad:s,dataFormat:c}=n;return j(up(a),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`),{x:()=>lm(r.shape,e,i,o,s,c),filter:()=>Qv(r,e,i.shape,o,s,c)}}},RS={kernelName:es,inputsToSave:[`dy`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,{strides:a,pad:o,dataFormat:s,dimRoundingMode:c}=n;return{dy:()=>am(e,i,a,o,s,1,c),filter:()=>Qv(e,r,i.shape,a,o,s,c)}}};function zS(e,t,n,r,i){let a=e;e.rank===4&&(a=W(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]));let o=t;o.rank===4&&(o=W(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),j(a.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${a.shape}.`),j(o.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${o.shape}.`),j(n.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${n}.`),j(a.shape[4]===n[3],()=>`Error in conv3dDerFilter: depth of input ${a.shape[4]}) must match input depth in filter (${n[3]}.`),j(o.shape[4]===n[4],()=>`Error in conv3dDerFilter: depth of dy (${o.shape[4]}) must match output depth for filter (${n[4]}).`);let s={x:a,dy:o},c={strides:r,pad:i,filterShape:n};return I.runKernel(ns,s,c)}var BS=R({conv3DBackpropFilter_:zS}),VS={kernelName:ts,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let{dilations:r,strides:i,pad:a}=n;j(up(r),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);let[o,s]=t;return{x:()=>hm(o.shape,e,s,i,a),filter:()=>BS(o,e,s.shape,i,a)}}},HS={kernelName:`Cos`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(dg(q_(B(n,`float32`))),e)}}},US={kernelName:is,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(Y_(B(n,`float32`)),e)}}},WS={kernelName:os,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i,exclusive:a,reverse:o}=n;return{x:()=>{let t=ih([i],r.rank),n=Tm(e,i,a,!o);return t!=null&&(n=qv(n,t)),n}}}},GS={kernelName:us,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let{dilations:r,strides:i,pad:a,dimRoundingMode:o}=n,s=r??[1,1];j(up(s),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[c,l]=t;return j(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${c.rank}.`),j(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${l.rank}.`),j(c.shape[3]===l.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${c.shape[3]}) must match the inChannels dimension in filter ${l.shape[2]}.`),j(dp(i,s),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${i} and dilations '${s}'.`),mp(`depthwiseConv2d`,a,o),{x:()=>cy(c.shape,e,l,i,a,s,o),filter:()=>oy(c,e,l.shape,i,a,s,o)}}},KS={kernelName:ms,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,a={x:r,filter:i,dy:e},o={x:r,filter:i,dy:e};return{x:()=>I.runKernel(hs,a,n),filter:()=>I.runKernel(gs,o,n)}}},qS={kernelName:`Elu`,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t,r={dy:e,y:n};return{x:()=>I.runKernel(bs,r)}}},JS={kernelName:`Erf`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t,r=U(Th(dg(_h(n))),2/Math.sqrt(Math.PI));return{x:()=>U(e,r)}}},YS={kernelName:`Exp`,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,n)}}},XS={kernelName:Ss,inputsToSave:[`input`],gradFunc:(e,t)=>{let[n]=t;return{input:()=>W(e,n.shape)}}},ZS={kernelName:Cs,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,Th(n))}}},QS={kernelName:Es,gradFunc:e=>({x:()=>Hm(e)})},$S={kernelName:Ds,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Im(n.shape,r.shape);return{a:()=>{let t=H(e,B(r,`float32`)),a=Fm(n.shape,i);return a.length>0?W(G(t,a),n.shape):t},b:()=>{let t=U(e,B(n,`float32`)),a=Fm(r.shape,i);a.length>0&&(t=W(G(t,a),r.shape));let o=_h(r);return dg(H(t,B(o,`float32`)))}}}},eC={kernelName:Os,inputsToSave:[`x`,`mean`,`variance`,`scale`],gradFunc:(e,t,n)=>{let{varianceEpsilon:r}=n,[i,a,o,s]=t,c=s??ph(1),l=Fm(a.shape,i.shape),u=[];if(a.rank===1){for(let e=0;e<i.shape.length-1;++e)u.push(i.shape[e]);u.push(1)}let d=K(i,a),f=U(e,c),p=z_(V(o,ph(r))),m=U(U(U(p,p),p),ph(-.5));return{x:()=>a.rank===1?W(U(U(e,jh(W(p,[1,1,1,a.shape[0]]),u)),c),i.shape):W(U(U(e,p),c),i.shape),mean:()=>{let e=U(U(p,ph(-1)),f);return a.rank===1&&(e=G(e,l)),W(e,a.shape)},variance:()=>{let e=U(U(m,d),f);return a.rank===1&&(e=G(e,l)),W(e,a.shape)},scale:()=>{let t=U(e,U(d,p));return a.rank===1&&(t=G(t,l)),W(t,a.shape)},offset:()=>{let t=e;return a.rank===1&&(t=G(t,l)),W(t,a.shape)}}}},tC={kernelName:ks,inputsToSave:[`x`,`indices`],gradFunc:(e,t,n)=>{let[r,i]=t,{axis:a,batchDims:o}=n,s=Ua(a,r.shape)[0],c=(e,t,n)=>()=>{let r=e.shape,i=t.size,o=r.slice(0,s),c=o.length,l=r.slice(a,r.length).slice(1),u=l.length,d=nC(0,c),f=nC(c+1,c+1+u),p=W(n,rC([o,[i],l])),m=W(t,[i]),h=rC([[c],d,f]),g=Vv(qv(p,h),m,e.shape[s]),_=ah(h);return g=qv(g,_),g};if(o===1){let t=r.shape[0],n=r.split(t,0);return{x:()=>xv(n.map((t,n)=>c(t,i.slice(n,1),e.slice(n,1))())).reshape(r.shape),indices:()=>i}}else return{x:c(r,i,e),indices:()=>i}}};function nC(e,t){let n=[];for(let r=e;r<t;++r)n.push(r);return n}function rC(e){let t=[];for(let n=0;n<e.length;++n)for(let r=0;r<e[n].length;++r)t.push(e[n][r]);return t}var iC={kernelName:Ms,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>Hm(n),b:()=>Hm(r)}}},aC={kernelName:Ns,gradFunc:e=>({x:()=>B(e,`float32`)})},oC={kernelName:Is,gradFunc:e=>({x:()=>Hm(e)})},sC={kernelName:Ls,gradFunc:e=>({x:()=>Hm(e)})},cC={kernelName:Rs,gradFunc:e=>({x:()=>Hm(e)})},lC={kernelName:zs,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{alpha:i}=n,a=zh(r,0);return{x:()=>Bm(a,e,U(e,i))}}},uC={kernelName:Us,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>H(e,V(n,1))}}},dC={kernelName:`Log`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>H(e,B(n,`float32`))}}},fC={kernelName:qs,inputsToSave:[],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n;return{logits:()=>{let t=Th(r);return K(e,U(G(e,i,!0),t))}}}};function pC(e,t,n,r=5,i=1,a=1,o=.5){let s={x:e,y:t,dy:n},c={depthRadius:r,bias:i,alpha:a,beta:o};return I.runKernel(Js,s,c)}var mC=R({localResponseNormalizationBackprop_:pC}),hC={kernelName:`LRN`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{depthRadius:a,bias:o,alpha:s,beta:c}=n;return{x:()=>mC(r,i,e,a,o,s,c)}}};function gC(e,t,n,r){return t.rank<n.rank&&(t=W(t,nh(t.shape,r))),e.rank<n.rank&&(e=W(e,nh(e.shape,r))),{x:()=>U(e,B(Rm(n,t),e.dtype))}}var _C={kernelName:`Max`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let{reductionIndices:r}=n,i=t[0],a=t[1],o=gC(e,a,i,Ua(r,i.shape));return{x:()=>o.x()}}},vC={kernelName:Ys,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>U(e,B(Vh(n,r),`float32`)),b:()=>U(e,B($h(n,r),`float32`))}}};function yC(e,t,n,r,i,a,o){let s=L(e,`dy`,`maxPool3dGrad`),c=L(t,`input`,`maxPool3dGrad`),l=L(n,`output`,`maxPool3dGrad`),u=s,d=c,f=l,p=!1;c.rank===4&&(p=!0,u=W(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]]),d=W(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]]),f=W(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),j(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),j(d.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${d.rank}.`),j(f.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${f.rank}.`),mp(`maxPool3dGrad`,a,o);let m={dy:u,input:d,output:f},h={filterSize:r,strides:i,pad:a,dimRoundingMode:o},g=I.runKernel($s,m,h);return p?W(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}var bC=R({maxPool3dGrad_:yC}),xC={kernelName:Qs,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=n;return{x:()=>bC(e,r,i,a,o,s,c)}}};function SC(e,t,n,r,i,a,o){let s=L(e,`dy`,`maxPoolGrad`),c=L(t,`input`,`maxPoolGrad`),l=L(n,`output`,`maxPoolGrad`);j(c.rank===s.rank,()=>`Rank of input (${c.rank}) does not match rank of dy (${s.rank})`),j(s.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${s.rank}.`),j(c.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${c.rank}.`),mp(`maxPoolGrad`,a,o);let u={dy:s,input:c,output:l},d={filterSize:r,strides:i,pad:a,dimRoundingMode:o};return I.runKernel(Zs,u,d)}var CC=R({maxPoolGrad_:SC}),wC={kernelName:Xs,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{filterSize:a,strides:o,pad:s}=n;return{x:()=>CC(e,r,i,a,o,s)}}},TC={kernelName:tc,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n,a=Ua(i,r.shape),o=th(r.shape,a)[1],s=M(o);return{x:()=>{let t=r.shape.slice();return a.forEach(e=>{t[e]=1}),H(U(W(e,t),Rg(r.shape,`float32`)),s)}}}},EC={kernelName:`Min`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let{axis:r}=n,[i,a]=t,o=gC(e,a,i,Ua(r,i.shape));return{x:()=>o.x()}}},DC={kernelName:nc,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>U(e,B(tg(n,r),`float32`)),b:()=>U(e,B(zh(n,r),`float32`))}}},OC={kernelName:rc,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let r=t[0],{paddings:i}=n,a=i.map(e=>e[0]);return{x:()=>Dp(e,a,r.shape)}}},kC={kernelName:`Mod`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Im(n.shape,r.shape);return{a:()=>{let t=Fm(n.shape,i);return t.length>0?W(G(e,t),n.shape):e},b:()=>{let t=U(e,dg(Fh(H(n,r)))),a=Fm(r.shape,i);return a.length>0?W(G(t,a),r.shape):t}}}},AC={kernelName:ac,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Im(n.shape,r.shape);return{a:()=>{let t=U(e,B(r,`float32`)),a=Fm(n.shape,i);return a.length>0?W(G(t,a),n.shape):t},b:()=>{let t=U(e,B(n,`float32`)),a=Fm(r.shape,i);return a.length>0?W(G(t,a),r.shape):t}}}},jC={kernelName:`Neg`,gradFunc:e=>({x:()=>dg(e)})},MC={kernelName:dc,inputsToSave:[`indices`],gradFunc:(e,t)=>{let n=t[0];return{indices:()=>Lg(n.shape,`float32`)}}},NC={kernelName:uc,gradFunc:e=>({x:()=>Hm(e)})},PC={kernelName:fc,saveAllInputs:!0,gradFunc:(e,t,n)=>{let{axis:r}=n;return Uv(e,r).map(e=>()=>e)}},FC={kernelName:pc,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let r=t[0],{paddings:i}=n,a=i.map(e=>e[0]);return{x:()=>Dp(e,a,r.shape)}}},IC={kernelName:`Pow`,inputsToSave:[`a`,`b`],outputsToSave:[!0],gradFunc:(e,t)=>{let[n,r,i]=t,a=n,o=r,s=Im(a.shape,o.shape);return{a:()=>{let t=B(o,`float32`),n=U(e,U(t,fh(a,K(t,ph(1))))),r=Fm(a.shape,s);return r.length>0&&(n=G(n,r)),W(n,a.shape)},b:()=>{let t=U(e,U(i,Bm(zh(a,0),ag(a),Hm(a)))),n=Fm(o.shape,s);return n.length>0&&(t=G(t,n)),W(t,o.shape)}}}},LC={kernelName:mc,inputsToSave:[`x`,`alpha`],gradFunc:(e,t)=>{let[n,r]=t,i=zh(n,0);return{x:()=>Bm(i,e,U(e,r)),alpha:()=>{let t=Bm(i,Hm(e),U(e,n)),a=Fm(r.shape,e.shape);return a.length>0&&(t=G(t,a)),W(t,r.shape)}}}};function RC(e,t,n){let r=e.shape.slice();return r[n]=1,U(W(t,r),U(Cm(e,n,!0,!1),Cm(e,n,!0,!0)))}function zC(e,t,n){let r=e.shape.length,i=r-n.length,a=ih(n,r),o=e;a!=null&&(o=qv(e,a));let s=o.shape.slice(),c=s.splice(r-n.length,n.length).reduce((e,t)=>e*t,1);s.push(c);let l=RC(o.reshape(s),t,i);if(l=l.reshape(o.shape),a!=null){let e=ah(a);l=qv(l,e)}return l}var BC={kernelName:hc,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n,a=[];return a=i==null?r.shape.map((e,t)=>t):typeof i==`number`?[i]:i,{x:()=>zC(r,e,a)}}},VC={kernelName:vs,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Im(n.shape,r.shape);return{a:()=>{let t=H(e,B(r,`float32`)),a=Fm(n.shape,i);return a.length>0?W(G(t,a),n.shape):t},b:()=>{let t=U(e,B(n,`float32`)),a=Fm(r.shape,i);a.length>0&&(t=W(G(t,a),r.shape));let o=_h(r);return dg(H(t,B(o,`float32`)))}}}},HC={kernelName:xc,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>H(e,dg(_h(n)))}}},UC={kernelName:Oc,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t,r=U(tg(n,6),Cv(n));return{x:()=>U(e,B(r,`float32`))}}},WC={kernelName:Sc,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,B(Cv(n),`float32`))}}},GC={kernelName:Cc,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>W(e,n.shape)}}},KC={kernelName:Ec,inputsToSave:[`images`],gradFunc:(e,t,n)=>{let[r]=t,i={dy:e,images:r};return{images:()=>I.runKernel(Dc,i,n)}}},qC={kernelName:wc,inputsToSave:[`images`],gradFunc:(e,t,n)=>{let[r]=t,i={dy:e,images:r};return{images:()=>I.runKernel(Tc,i,n)}}},JC={kernelName:kc,gradFunc:(e,t,n)=>{let{dims:r}=n,i=Ua(r,e.shape);return{x:()=>F_(e,i)}}},YC={kernelName:Ac,gradFunc:e=>({x:()=>Hm(e)})},XC={kernelName:jc,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>dg(H(e,U(fh(n,1.5),2)))}}},ZC={kernelName:Fc,inputsToSave:[`condition`],gradFunc:(e,t)=>{let[n]=t;return{condition:()=>B(Hm(n),`float32`),t:()=>U(e,B(n,e.dtype)),e:()=>U(e,B(wg(n),e.dtype))}}},QC={kernelName:Ic,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=zh(n,ph(0)),r=ph(yx);return Bm(t,U(e,ph(bx)),U(U(e,r),Th(B(n,`float32`))))}}}},$C={kernelName:Bc,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,U(n,K(ph(1),n)))}}},ew={kernelName:zc,gradFunc:e=>({x:()=>Hm(e)})},tw={kernelName:`Sin`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(ym(B(n,`float32`)),e)}}},nw={kernelName:Rc,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(xm(B(n,`float32`)),e)}}},rw={kernelName:Lc,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{begin:i,size:a}=n,o=r.shape,[s,c]=Qb(r,i,a),l=[];for(let t=0;t<e.rank;t++)l.push([s[t],o[t]-s[t]-c[t]]);return{x:()=>e_(e,l)}}},iw={kernelName:Gc,outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r]=t,{dim:i}=n,a=U(e,r);return{logits:()=>K(a,U(G(a,[i],!0),r))}}},aw={kernelName:Vc,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,Tp(n))}}},ow={kernelName:Uc,gradFunc:(e,t,n)=>{let{blockShape:r,paddings:i}=n;return{x:()=>jp(e,r,i)}}},sw={kernelName:Wc,gradFunc:(e,t,n)=>{let{axis:r}=n;return{x:()=>xp(e,r)}}},cw={kernelName:Hc,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>H(e,U(hh(B(n,`float32`)),2))}}},lw={kernelName:Qc,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,U(B(n,`float32`),2))}}},uw={kernelName:Zc,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=ph(2);return{a:()=>U(e,U(i,K(n,r))),b:()=>U(e,U(i,K(r,n)))}}},dw={kernelName:pl,gradFunc:e=>({x:()=>Hm(e)})},fw={kernelName:`Sub`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Im(n.shape,r.shape);return{a:()=>{let t=e,r=Fm(n.shape,i);return r.length>0&&(t=G(t,r)),W(t,n.shape)},b:()=>{let t=e,n=Fm(r.shape,i);return n.length>0&&(t=G(t,n)),W(dg(t),r.shape)}}}},pw={kernelName:`Sum`,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,i=r.shape.slice(),{axis:a}=n;Ua(a,r.shape).forEach(e=>{i[e]=1});let o=U(W(e,i),Rg(r.shape,`float32`));return{x:()=>o}}},mw={kernelName:`Tan`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>H(e,_h(ym(n)))}}},hw={kernelName:il,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(K(ph(1),_h(n)),e)}}},gw={kernelName:al,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{reps:i}=n;return{x:()=>{let t=Hm(r);if(r.rank===1)for(let n=0;n<i[0];++n)t=V(t,Dp(e,[n*r.shape[0]],[r.shape[0]]));else if(r.rank===2)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)t=V(t,Dp(e,[n*r.shape[0],a*r.shape[1]],[r.shape[0],r.shape[1]]));else if(r.rank===3)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)for(let o=0;o<i[2];++o)t=V(t,Dp(e,[n*r.shape[0],a*r.shape[1],o*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else if(r.rank===4)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)for(let o=0;o<i[2];++o)for(let s=0;s<i[3];++s)t=V(t,Dp(e,[n*r.shape[0],a*r.shape[1],o*r.shape[2],s*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));else throw Error(`Gradient for tile operation is not implemented for rank-${r.rank} tensors yet.`);return t}}}},_w={kernelName:cl,gradFunc:(e,t,n)=>{let{perm:r}=n,i=ah(r);return{x:()=>qv(e,i)}}},vw={kernelName:ul,gradFunc:(e,t,n)=>{let{axis:r}=n;return{value:()=>xv(e,r)}}},yw={kernelName:dl,inputsToSave:[`segmentIds`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>bw(e,n)}}};function bw(e,t){let n=Lh(e,Pg(t,Hm(t))),r=Vh(t,ph(0,`int32`)),i=n.rank-r.rank;for(let e=0;e<i;++e)r=Dh(r,e+1);r=Sg(r,Rg(n.shape,`bool`));let a=Hm(n);return Bm(r,n,a)}var xw=[dS,fS,pS,mS,hS,gS,_S,vS,yS,bS,xS,SS,TS,OS,kS,AS,jS,MS,NS,PS,FS,IS,RS,LS,VS,HS,US,WS,GS,KS,VC,qS,JS,YS,XS,ZS,$S,QS,eC,tC,iC,aC,oC,sC,cC,lC,uC,dC,fC,hC,_C,_C,vC,xC,wC,TC,EC,DC,OC,kC,AC,jC,MC,NC,PC,FC,FC,IC,LC,BC,HC,UC,WC,GC,KC,qC,JC,YC,XC,ZC,QC,$C,ew,tw,nw,rw,iw,aw,ow,ow,sw,sw,cw,uw,lw,dw,fw,pw,mw,hw,gw,_w,vw,yw,{kernelName:fl,gradFunc:e=>({x:()=>Hm(e)})}];for(let e of xw)Dl(e);F().prototype.abs=function(){return this.throwIfDisposed(),Df(this)},F().prototype.acos=function(){return this.throwIfDisposed(),kf(this)},F().prototype.acosh=function(){return this.throwIfDisposed(),jf(this)},F().prototype.add=function(e){return this.throwIfDisposed(),V(this,e)},F().prototype.all=function(e,t){return this.throwIfDisposed(),Nf(this,e,t)},F().prototype.any=function(e,t){return this.throwIfDisposed(),Ff(this,e,t)},F().prototype.argMax=function(e){return this.throwIfDisposed(),Lf(this,e)},F().prototype.argMin=function(e){return this.throwIfDisposed(),zf(this,e)},F().prototype.asScalar=function(){return this.throwIfDisposed(),j(this.size===1,()=>`The array must have only 1 element.`),W(this,[])},F().prototype.asType=function(e){return this.throwIfDisposed(),B(this,e)},F().prototype.as1D=function(){return this.throwIfDisposed(),W(this,[this.size])},F().prototype.as2D=function(e,t){return this.throwIfDisposed(),W(this,[e,t])},F().prototype.as3D=function(e,t,n){return this.throwIfDisposed(),W(this,[e,t,n])},F().prototype.as4D=function(e,t,n,r){return this.throwIfDisposed(),W(this,[e,t,n,r])},F().prototype.as5D=function(e,t,n,r,i){return this.throwIfDisposed(),W(this,[e,t,n,r,i])},F().prototype.asin=function(){return this.throwIfDisposed(),Vf(this)},F().prototype.asinh=function(){return this.throwIfDisposed(),Uf(this)},F().prototype.atan=function(){return this.throwIfDisposed(),Gf(this)},F().prototype.atan2=function(e){return this.throwIfDisposed(),qf(this,e)},F().prototype.atanh=function(){return this.throwIfDisposed(),Yf(this)},F().prototype.avgPool=function(e,t,n,r){return this.throwIfDisposed(),_p(this,e,t,n,r)},F().prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),jp(this,e,t)},F().prototype.batchNorm=function(e,t,n,r,i){return this.throwIfDisposed(),Pp(this,e,t,n,r,i)},F().prototype.broadcastTo=function(e){return this.throwIfDisposed(),Wp(this,e)},F().prototype.cast=function(e){return this.throwIfDisposed(),B(this,e)},F().prototype.ceil=function(){return this.throwIfDisposed(),Kp(this)},F().prototype.clipByValue=function(e,t){return this.throwIfDisposed(),Yp(this,e,t)},F().prototype.concat=function(e,t){return this.throwIfDisposed(),e instanceof xu&&(e=[e]),xp([this,...e],t)},F().prototype.conv1d=function(e,t,n,r,i,a){return this.throwIfDisposed(),sm(this,e,t,n,r,i,a)},F().prototype.conv2dTranspose=function(e,t,n,r,i){return this.throwIfDisposed(),dm(this,e,t,n,r,i)},F().prototype.conv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),am(this,e,t,n,r,i,a)},F().prototype.cos=function(){return this.throwIfDisposed(),ym(this)},F().prototype.cosh=function(){return this.throwIfDisposed(),xm(this)},F().prototype.cumprod=function(e,t,n){return this.throwIfDisposed(),Cm(this,e,t,n)},F().prototype.cumsum=function(e,t,n){return this.throwIfDisposed(),Tm(this,e,t,n)},F().prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),km(this,e,t)},F().prototype.depthwiseConv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),jm(this,e,t,n,r,i,a)},F().prototype.dilation2d=function(e,t,n,r,i){return this.throwIfDisposed(),Nm(this,e,t,n,r,i)},F().prototype.divNoNan=function(e){return this.throwIfDisposed(),Wm(this,e)},F().prototype.div=function(e){return this.throwIfDisposed(),H(this,e)},F().prototype.dot=function(e){return this.throwIfDisposed(),Km(this,e)},F().prototype.elu=function(){return this.throwIfDisposed(),Xm(this)},F().prototype.equal=function(e){return this.throwIfDisposed(),Rm(this,e)},F().prototype.erf=function(){return this.throwIfDisposed(),Qm(this)},F().prototype.euclideanNorm=function(e,t){return this.throwIfDisposed(),Ch(this,e,t)},F().prototype.exp=function(){return this.throwIfDisposed(),Th(this)},F().prototype.expandDims=function(e){return this.throwIfDisposed(),Dh(this,e)},F().prototype.expm1=function(){return this.throwIfDisposed(),kh(this)},F().prototype.fft=function(){return this.throwIfDisposed(),sv(this)},F().prototype.flatten=function(){return this.throwIfDisposed(),W(this,[this.size])},F().prototype.floor=function(){return this.throwIfDisposed(),Fh(this)},F().prototype.floorDiv=function(e){return this.throwIfDisposed(),Cf(this,e)},F().prototype.gather=function(e,t,n){return this.throwIfDisposed(),Lh(this,e,t,n)},F().prototype.greaterEqual=function(e){return this.throwIfDisposed(),Vh(this,e)},F().prototype.greater=function(e){return this.throwIfDisposed(),zh(this,e)},F().prototype.ifft=function(){return this.throwIfDisposed(),lv(this)},F().prototype.irfft=function(){return this.throwIfDisposed(),dv(this)},F().prototype.isFinite=function(){return this.throwIfDisposed(),Gh(this)},F().prototype.isInf=function(){return this.throwIfDisposed(),qh(this)},F().prototype.isNaN=function(){return this.throwIfDisposed(),Yh(this)},F().prototype.leakyRelu=function(e){return this.throwIfDisposed(),Zh(this,e)},F().prototype.lessEqual=function(e){return this.throwIfDisposed(),tg(this,e)},F().prototype.less=function(e){return this.throwIfDisposed(),$h(this,e)},F().prototype.localResponseNormalization=function(e,t,n,r){return this.throwIfDisposed(),rg(this,e,t,n,r)},F().prototype.logSigmoid=function(){return this.throwIfDisposed(),hg(this)},F().prototype.logSoftmax=function(e){return this.throwIfDisposed(),vg(this,e)},F().prototype.logSumExp=function(e,t){return this.throwIfDisposed(),bg(this,e,t)},F().prototype.log=function(){return this.throwIfDisposed(),ag(this)},F().prototype.log1p=function(){return this.throwIfDisposed(),sg(this)},F().prototype.logicalAnd=function(e){return this.throwIfDisposed(),Sg(this,e)},F().prototype.logicalNot=function(){return this.throwIfDisposed(),wg(this)},F().prototype.logicalOr=function(e){return this.throwIfDisposed(),Eg(this,e)},F().prototype.logicalXor=function(e){return this.throwIfDisposed(),Og(this,e)},F().prototype.matMul=function(e,t,n){return this.throwIfDisposed(),Cp(this,e,t,n)},F().prototype.maxPool=function(e,t,n,r){return this.throwIfDisposed(),Ag(this,e,t,n,r)},F().prototype.max=function(e,t){return this.throwIfDisposed(),ch(this,e,t)},F().prototype.maximum=function(e){return this.throwIfDisposed(),Pg(this,e)},F().prototype.mean=function(e,t){return this.throwIfDisposed(),Ig(this,e,t)},F().prototype.min=function(e,t){return this.throwIfDisposed(),uh(this,e,t)},F().prototype.minimum=function(e){return this.throwIfDisposed(),Bg(this,e)},F().prototype.mirrorPad=function(e,t){return this.throwIfDisposed(),Hg(this,e,t)},F().prototype.mod=function(e){return this.throwIfDisposed(),Wg(this,e)},F().prototype.mul=function(e){return this.throwIfDisposed(),U(this,e)},F().prototype.neg=function(){return this.throwIfDisposed(),dg(this)},F().prototype.norm=function(e,t,n){return this.throwIfDisposed(),xh(this,e,t,n)},F().prototype.notEqual=function(e){return this.throwIfDisposed(),Jg(this,e)},F().prototype.oneHot=function(e,t=1,n=0){return this.throwIfDisposed(),Xg(this,e,t,n)},F().prototype.onesLike=function(){return this.throwIfDisposed(),Qg(this)},F().prototype.pad=function(e,t){return this.throwIfDisposed(),e_(this,e,t)},F().prototype.pool=function(e,t,n,r,i,a){return this.throwIfDisposed(),o_(this,e,t,n,r,i,a)},F().prototype.pow=function(e){return this.throwIfDisposed(),fh(this,e)},F().prototype.prelu=function(e){return this.throwIfDisposed(),c_(this,e)},F().prototype.prod=function(e,t){return this.throwIfDisposed(),u_(this,e,t)},F().prototype.reciprocal=function(){return this.throwIfDisposed(),k_(this)},F().prototype.relu=function(){return this.throwIfDisposed(),j_(this)},F().prototype.relu6=function(){return this.throwIfDisposed(),N_(this)},F().prototype.reshapeAs=function(e){return this.throwIfDisposed(),W(this,e.shape)},F().prototype.reshape=function(e){return this.throwIfDisposed(),W(this,e)},F().prototype.resizeBilinear=function(e,t,n){return this.throwIfDisposed(),Ky(this,e,t,n)},F().prototype.resizeNearestNeighbor=function(e,t,n){return this.throwIfDisposed(),Jy(this,e,t,n)},F().prototype.reverse=function(e){return this.throwIfDisposed(),F_(this,e)},F().prototype.rfft=function(){return this.throwIfDisposed(),hv(this)},F().prototype.round=function(){return this.throwIfDisposed(),L_(this)},F().prototype.rsqrt=function(){return this.throwIfDisposed(),z_(this)},F().prototype.selu=function(){return this.throwIfDisposed(),V_(this)},F().prototype.separableConv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),U_(this,e,t,n,r,i,a)},F().prototype.sigmoid=function(){return this.throwIfDisposed(),Tp(this)},F().prototype.sign=function(){return this.throwIfDisposed(),G_(this)},F().prototype.sin=function(){return this.throwIfDisposed(),q_(this)},F().prototype.sinh=function(){return this.throwIfDisposed(),Y_(this)},F().prototype.slice=function(e,t){return this.throwIfDisposed(),Dp(this,e,t)},F().prototype.softmax=function(e){return this.throwIfDisposed(),av(this,e)},F().prototype.softplus=function(){return this.throwIfDisposed(),pg(this)},F().prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),n_(this,e,t)},F().prototype.split=function(e,t){return this.throwIfDisposed(),pv(this,e,t)},F().prototype.sqrt=function(){return this.throwIfDisposed(),hh(this)},F().prototype.square=function(){return this.throwIfDisposed(),_h(this)},F().prototype.squaredDifference=function(e){return this.throwIfDisposed(),_v(this,e)},F().prototype.squeeze=function(e){return this.throwIfDisposed(),yv(this,e)},F().prototype.stack=function(e,t){return this.throwIfDisposed(),xv(e instanceof xu?[this,e]:[this,...e],t)},F().prototype.step=function(e){return this.throwIfDisposed(),Cv(this,e)},F().prototype.stridedSlice=function(e,t,n,r,i,a,o,s){return this.throwIfDisposed(),Tv(this,e,t,n,r,i,a,o,s)},F().prototype.sub=function(e){return this.throwIfDisposed(),K(this,e)},F().prototype.sum=function(e,t){return this.throwIfDisposed(),G(this,e,t)},F().prototype.tan=function(){return this.throwIfDisposed(),Dv(this)},F().prototype.tanh=function(){return this.throwIfDisposed(),kp(this)},F().prototype.tile=function(e){return this.throwIfDisposed(),jh(this,e)},F().prototype.toBool=function(){return this.throwIfDisposed(),B(this,`bool`)},F().prototype.toFloat=function(){return this.throwIfDisposed(),B(this,`float32`)},F().prototype.toInt=function(){return this.throwIfDisposed(),B(this,`int32`)},F().prototype.topk=function(e,t){return this.throwIfDisposed(),Fv(this,e,t)},F().prototype.transpose=function(e){return this.throwIfDisposed(),qv(this,e)},F().prototype.unique=function(e){return this.throwIfDisposed(),zv(this,e)},F().prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),Vv(this,e,t)},F().prototype.unstack=function(e){return this.throwIfDisposed(),Uv(this,e)},F().prototype.where=function(e,t){return this.throwIfDisposed(),Bm(e,this,t)},F().prototype.zerosLike=function(){return this.throwIfDisposed(),Hm(this)};var Sw=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},Cw=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},J=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},ww=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},Tw=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},Ew=class{constructor(e){this.maxEntries=e||100,this.cache=new Map}get(e){let t;return this.cache.has(e)&&(t=this.cache.get(e),this.cache.delete(e),this.cache.set(e,t)),t}put(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxEntries){let e=this.cache.keys().next().value;this.cache.delete(e)}this.cache.set(e,t)}getMaxEntries(){return this.maxEntries}setMaxEntries(e){if(e<0)throw Error(`The maxEntries of LRU caches must be at least 0, but got ${e}.`);if(this.maxEntries>e)for(let t=0;t<this.maxEntries-e;t++){let e=this.cache.keys().next().value;this.cache.delete(e)}this.maxEntries=e}};function Dw(e,t){if(Array.isArray(e)){let n=[];for(let r=0;r<t;r++)n=n.concat(e);return n}else{let n=Array(t);return n.fill(e),n}}function Ow(e,t){if(!e)throw new Tw(t)}function kw(e,t){let n=0;for(let r of e)r===t&&n++;return n}function Aw(e){return e.length===1?e[0]:e}function jw(e){return Array.isArray(e)?e:[e]}function Mw(e){let t=e.replace(/(.)([A-Z][a-z0-9]+)/g,`$1_$2`).replace(/([a-z])([A-Z])/g,`$1_$2`).toLowerCase();return t[0]===`_`?`private`+t:t}function Nw(e){return e.length<=1||e.indexOf(`_`)===-1?e:e.replace(/[_]+(\w|$)/g,(e,t)=>t.toUpperCase())}var Pw={};function Fw(e){if(e==null)return null;let t={};return t.className=e.getClassName(),t.config=e.getConfig(),t}function Iw(e){if(!(typeof e!=`object`||!e))if(Array.isArray(e))e.forEach(e=>Iw(e));else{let t=Object.keys(e);for(let n of t){let t=e[n];typeof t==`object`&&t&&(!Array.isArray(t)&&t.type===`ndarray`&&typeof t.value==`number`?e[n]=t.value:Iw(t))}}}function Lw(e,t={},n={},r=`object`,i=!1){if(typeof e==`string`){let i=e,a;if(i in n)a=n[i];else if(i in Pw)a=Pw[i];else if(a=t[i],a==null)throw new J(`Unknown ${r}: ${e}. This may be due to one of the following reasons:\n1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return a}else{let a=e;if(a.className==null||a.config==null)throw new J(`${r}: Improper config format: ${JSON.stringify(a)}.\n'className' and 'config' must set.`);let o=a.className,s,c;if(o in n?[s,c]=n[o]:o in Pw?[s,c]=Pw.className:o in t&&([s,c]=t[o]),s==null)throw new J(`Unknown ${r}: ${o}. This may be due to one of the following reasons:\n1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(c!=null){let e={};for(let t of Object.keys(Pw))e[t]=Pw[t];for(let t of Object.keys(n))e[t]=n[t];let t=a.config;t.customObjects=e;let r=Object.assign({},Pw);for(let e of Object.keys(n))Pw[e]=n[e];Iw(a.config);let o=c(s,a.config,n,i);return Pw=Object.assign({},r),o}else{let e=Object.assign({},Pw);for(let e of Object.keys(n))Pw[e]=n[e];let t=new s(a.config);return Pw=Object.assign({},e),t}}}function Rw(e,t){return e<t?-1:+(e>t)}function zw(e,t){return-1*Rw(e,t)}function Bw(e){if(e==null)return e;let t=[];for(let n of e)t.indexOf(n)===-1&&t.push(n);return t}function Vw(e){if(e==null)throw new J(`Invalid value in obj: ${JSON.stringify(e)}`);for(let t in e)if(e.hasOwnProperty(t))return!1;return!0}function Hw(e,t,n){if(n!=null&&e.indexOf(n)<0)throw new J(`${n} is not a valid ${t}.  Valid values are ${e} or null/undefined.`)}function Uw(e,t,n=0,r=1/0){return Ow(n>=0),Ow(r>=n),Array.isArray(e)&&e.length>=n&&e.length<=r&&e.every(e=>typeof e===t)}function Ww(e,t){Array.isArray(e)?(j(e.length>0,()=>`${t} is unexpectedly an empty array.`),e.forEach((e,n)=>Ww(e,`element ${n+1} of ${t}`))):j(Number.isInteger(e)&&e>0,()=>`Expected ${t} to be a positive integer, but got ${Gw(e)}.`)}function Gw(e){return e===null?`null`:Array.isArray(e)?`[`+e.map(e=>Gw(e)).join(`,`)+`]`:typeof e==`string`?`"${e}"`:`${e}`}function Kw(e,t,n){let r=n==null?Zl():n(),i;return(...a)=>{let o=n==null?Zl():n();return o-r<t?i:(r=o,i=e(...a),i)}}function qw(e){return e===`relu`?`relu`:e===`linear`?`linear`:e===`elu`?`elu`:null}var Jw=0;function Yw(){return Jw++}var Xw={};function Zw(e=``){return e in Xw||(Xw[e]=0),Xw[e]+=1,e+Xw[e].toString()}var Qw=[`channelsFirst`,`channelsLast`],$w=[`nearest`,`bilinear`],eT=[`valid`,`same`,`causal`],tT=[`max`,`avg`],nT=[`sum`,`mul`,`concat`,`ave`],rT=new Map;function iT(e){Hw(Qw,`DataFormat`,e)}function aT(e){Hw($w,`InterpolationFormat`,e)}function oT(e){Hw(eT,`PaddingMode`,e)}function sT(e){Hw(tT,`PoolMode`,e)}var cT=[],lT=`/`;function uT(e,t){cT.push(e);try{let e=t();return cT.pop(),e}catch(e){throw cT.pop(),e}}function dT(){return cT.length===0?``:cT.join(lT)+lT}function fT(e){if(!hT(e))throw Error(`Not a valid tensor name: '`+e+`'`);return dT()+e}function pT(e){if(!hT(e))throw Error(`Not a valid tensor name: '`+e+`'`);rT.has(e)||rT.set(e,0);let t=rT.get(e);if(rT.set(e,rT.get(e)+1),t>0){let n=`${e}_${t}`;return rT.set(n,1),n}else return e}var mT=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function hT(e){return!!e.match(mT)}function gT(e){return e===parseInt(e.toString(),10)}function _T(e,t,n){t??=0,n??=e.length;let r=1;for(let i=t;i<n;++i)r*=e[i];return r}function vT(e){if(e.length===0)return NaN;let t=1/0;for(let n=0;n<e.length;n++){let r=e[n];r<t&&(t=r)}return t}function yT(e){if(e.length===0)return NaN;let t=-1/0;for(let n=0;n<e.length;n++){let r=e[n];r>t&&(t=r)}return t}function bT(e,t){if(t<e)throw new J(`end (${t}) < begin (${e}) is forbidden.`);let n=[];for(let r=e;r<t;++r)n.push(r);return n}var xT;function ST(){return xT??=fd().epsilon(),xT}function CT(){return`channelsLast`}function wT(e,t){return B(e,t)}function TT(e,t=-1){let n=e.shape.slice();return t<0&&(t=n.length+t+1),n.splice(t,0,1),W(e,n)}function ET(e,t){return z(()=>{if(e.shape.length!==2)throw new J(`repeat() expects a rank-2 tensor, but received a rank-${e.shape.length} tensor.`);return PT(TT(e,1),[1,t,1])})}function DT(e){return W(e,[_T(e.shape)])}function OT(e){if(e.rank<=1)throw new J(`batchFlatten requires a minimum rank of 2. Got rank: ${e.rank}.`);return W(e,[e.shape[0],_T(e.shape,1)])}function kT(e,t,n){return z(()=>{switch(e.rank){case 1:return Z_(e,t,n);case 2:return $_(e,[t,0],[n,e.shape[1]]);case 3:return tv(e,[t,0,0],[n,e.shape[1],e.shape[2]]);case 4:return rv(e,[t,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3]]);case 5:return Dp(e,[t,0,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3],e.shape[4]]);case 6:return Dp(e,[t,0,0,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3],e.shape[4],e.shape[5]]);default:throw new J(`sliceAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}})}function AT(e,t,n){return z(()=>{switch(e.rank){case 1:return Z_(e,t,n);case 2:return $_(e,[0,t],[e.shape[0],n]);case 3:return tv(e,[0,0,t],[e.shape[0],e.shape[1],n]);case 4:return rv(e,[0,0,0,t],[e.shape[0],e.shape[1],e.shape[2],n]);default:throw new J(`sliceAlongLastAxis() received an unsupported tensor rank: ${e.rank}`)}})}function jT(e,t,n,r){return z(()=>{switch(e.rank){case 1:return Z_(e,t,n);case 2:switch(r){case 1:return kT(e,t,n);case 2:return AT(e,t,n);default:throw new J(`The axis is not within the rank of the tensor ${r}`)}case 3:switch(r){case 1:return kT(e,t,n);case 2:return tv(e,[0,t,0],[e.shape[0],n,e.shape[2]]);case 3:return AT(e,t,n);default:throw new J(`The axis is not within the rank of the tensor ${r}`)}case 4:switch(r){case 1:return kT(e,t,n);case 2:return rv(e,[0,t,0,0],[e.shape[0],n,e.shape[2],e.shape[3]]);case 3:return rv(e,[0,0,t,0],[e.shape[0],e.shape[1],n,e.shape[3]]);case 4:return AT(e,t,n);default:throw new J(`The axis is not within the rank of the tensor ${r}`)}default:throw new J(`sliceAlongLastAxis() received an unsupported tensor rank: ${e.rank}`)}})}function MT(e,t=-1){let n;return t<0&&(n=e[0].rank,t=n===0?0:n),t===e[0].rank&&(t=-1),xp(e,t)}function NT(e,t){switch(e.rank){case 1:return Zp([e,t]);case 2:return $p([e,t],0);case 3:return tm([e,t],0);case 4:return rm([e,t],0);default:throw new J(`concatAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}}function PT(e,t){if(Array.isArray(t)||(t=[t]),e.rank!==t.length)throw new J(`The length of input n (${t.length}) does not match the number of dimensions in input x (${e.rank})`);return jh(e,t)}function FT(e,t=0,n=1,r,i){return S_(e,t,n,r,i)}function IT(e,t,n,r){if(e.rank<2||t.rank<2)throw new ww(`dot requires both inputs to be rank >= 2 but got x shape = ${e.shape} and y shape = ${t.shape}`);if(t.rank>=3&&e.shape.slice(-1)[0]!==t.shape.slice(-2)[0])throw new ww(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${e.shape} and  y shape = ${t.shape}`);if(e.rank===2&&t.rank===2)return uy({a:e,b:t,transposeA:!1,transposeB:!1,bias:r?zT(e.rank,r,CT()):null,activation:n});{let i=e.shape.slice(),a=i.pop();e=W(e,[-1,a]);let o=t.shape.slice(),s=o.pop(),c=o.pop(),l=[...o,s],u=Array.from({length:t.rank},(e,n)=>n===0?t.rank-2:n<=t.rank-2?n-1:n);t=W(qv(t,u),[c,-1]);let d=[...i,...l];return W(uy({a:e,b:t,transposeA:!1,transposeB:!1,bias:r?zT(e.rank,r,CT()):null,activation:n}),d)}}function LT(e,t,n){return z(()=>(t=Array.isArray(t)?Ov(t,`int32`):B(t,`int32`),Lh(e,t,n)))}function RT(e){return U(e,e)}function zT(e,t,n){let r=t.shape;if(t.rank!==1&&t.rank!==e)throw new J(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${e}`);if(e===5){if(n===`channelsFirst`)return r.length===1?W(t,[1,r[0],1,1,1]):W(t,[1,r[3],r[0],r[1],r[2]]);if(n===`channelsLast`)return r.length===1?W(t,[1,1,1,1,r[0]]):W(t,[1].concat(r))}else if(e===4){if(n===`channelsFirst`)return r.length===1?W(t,[1,r[0],1,1]):W(t,[1,r[2],r[0],r[1]]);if(n===`channelsLast`)return r.length===1?W(t,[1,1,1,r[0]]):W(t,[1].concat(r))}else if(e===3){if(n===`channelsFirst`)return r.length===1?W(t,[1,r[0],1]):W(t,[1,r[1],r[0]]);if(n===`channelsLast`)return r.length===1?W(t,[1,1,r[0]]):W(t,[1].concat(r))}else if(e<3)return t;throw new J(`Unsupported input rank by biasAdd: ${t.rank}`)}function BT(e,t,n){return z(()=>(n??=CT(),iT(n),V(e,zT(e.rank,t,n))))}function VT(e,t=1){if(t!==1)throw new ww(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return Xm(e)}function HT(e){return z(()=>H(e,V(Df(e),1)))}function UT(e,t,n,r){return z(()=>Xv(e,t,n,r))}function WT(e){return z(()=>Yp(V(.5,U(.2,e)),0,1))}function GT(e,t,n=!1){return n?e():t()}var KT=[`fanIn`,`fanOut`,`fanAvg`],qT=[`normal`,`uniform`,`truncatedNormal`];function JT(e){Hw(KT,`FanMode`,e)}function YT(e){Hw(qT,`Distribution`,e)}var XT=class extends db{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}},ZT=class extends XT{apply(e,t){return Lg(e,t)}};ZT.className=`Zeros`,q(ZT);var QT=class extends XT{apply(e,t){return Rg(e,t)}};QT.className=`Ones`,q(QT);var $T=class extends XT{constructor(e){if(super(),typeof e!=`object`)throw new J(`Expected argument of type ConstantConfig but got ${e}`);if(e.value===void 0)throw new J(`config must have value set but got ${e}`);this.value=e.value}apply(e,t){return z(()=>U(ph(this.value),Rg(e,t)))}getConfig(){return{value:this.value}}};$T.className=`Constant`,q($T);var eE=class extends XT{constructor(e){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=e.minval||this.DEFAULT_MINVAL,this.maxval=e.maxval||this.DEFAULT_MAXVAL,this.seed=e.seed}apply(e,t){return w_(e,this.minval,this.maxval,t,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}};eE.className=`RandomUniform`,q(eE);var tE=class extends XT{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new ww(`randomNormal does not support dType ${t}.`);return FT(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}};tE.className=`RandomNormal`,q(tE);var nE=class extends XT{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new ww(`truncatedNormal does not support dType ${t}.`);return Lv(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}};nE.className=`TruncatedNormal`,q(nE);var rE=class extends XT{constructor(e){super(),this.gain=e.gain==null?1:e.gain}apply(e,t){return z(()=>{if(e.length!==2||e[0]!==e[1])throw new J(`Identity matrix initializer can only be used for 2D square matrices.`);return U(this.gain,Nh(e[0]))})}getConfig(){return{gain:this.gain}}};rE.className=`Identity`,q(rE);function iE(e,t=`channelsLast`){let n,r;if(iT(t),e.length===2)n=e[0],r=e[1];else if([3,4,5].indexOf(e.length)!==-1){if(t===`channelsFirst`){let t=_T(e,2);n=e[1]*t,r=e[0]*t}else if(t===`channelsLast`){let t=_T(e,0,e.length-2);n=e[e.length-2]*t,r=e[e.length-1]*t}}else{let t=_T(e);n=Math.sqrt(t),r=Math.sqrt(t)}return[n,r]}var aE=class extends XT{constructor(e){if(super(),e.scale<0)throw new J(`scale must be a positive float. Got: ${e.scale}`);this.scale=e.scale==null?1:e.scale,this.mode=e.mode==null?`fanIn`:e.mode,JT(this.mode),this.distribution=e.distribution==null?`normal`:e.distribution,YT(this.distribution),this.seed=e.seed}apply(e,t){let n=iE(e),r=n[0],i=n[1],a=this.scale;if(this.mode===`fanIn`?a/=Math.max(1,r):this.mode===`fanOut`?a/=Math.max(1,i):a/=Math.max(1,(r+i)/2),this.distribution===`normal`){let n=Math.sqrt(a);if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new ww(`${this.getClassName()} does not support dType ${t}.`);return Lv(e,0,n,t,this.seed)}else{let n=Math.sqrt(3*a);return w_(e,-n,n,t,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}};aE.className=`VarianceScaling`,q(aE);var oE=class extends aE{constructor(e){super({scale:1,mode:`fanAvg`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return aE.className}};oE.className=`GlorotUniform`,q(oE);var sE=class extends aE{constructor(e){super({scale:1,mode:`fanAvg`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return aE.className}};sE.className=`GlorotNormal`,q(sE);var cE=class extends aE{constructor(e){super({scale:2,mode:`fanIn`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return aE.className}};cE.className=`HeNormal`,q(cE);var lE=class extends aE{constructor(e){super({scale:2,mode:`fanIn`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return aE.className}};lE.className=`HeUniform`,q(lE);var uE=class extends aE{constructor(e){super({scale:1,mode:`fanIn`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return aE.className}};uE.className=`LeCunNormal`,q(uE);var dE=class extends aE{constructor(e){super({scale:1,mode:`fanIn`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return aE.className}};dE.className=`LeCunUniform`,q(dE);var fE=class extends XT{constructor(e){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=e.gain==null?this.DEFAULT_GAIN:e.gain,this.seed=e.seed}apply(e,t){return z(()=>{if(e.length<2)throw new ww(`Shape must be at least 2D.`);if(t!==`int32`&&t!==`float32`&&t!==void 0)throw TypeError(`Unsupported data type ${t}.`);t=t;let n=M(e.slice(0,-1)),r=e[e.length-1],i=n*r;i>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${i}) elements: Slowness may result.`);let a=FT([Math.max(r,n),Math.min(r,n)],0,1,t,this.seed),o=cb.qr(a,!1),s=o[0],c=o[1].flatten().stridedSlice([0],[Math.min(r,n)*Math.min(r,n)],[Math.min(r,n)+1]);return s=U(s,c.sign()),n<r&&(s=s.transpose()),U(ph(this.gain),s.reshape(e))})}getConfig(){return{gain:this.gain,seed:this.seed}}};fE.className=`Orthogonal`,q(fE);var pE={constant:`Constant`,glorotNormal:`GlorotNormal`,glorotUniform:`GlorotUniform`,heNormal:`HeNormal`,heUniform:`HeUniform`,identity:`Identity`,leCunNormal:`LeCunNormal`,leCunUniform:`LeCunUniform`,ones:`Ones`,orthogonal:`Orthogonal`,randomNormal:`RandomNormal`,randomUniform:`RandomUniform`,truncatedNormal:`TruncatedNormal`,varianceScaling:`VarianceScaling`,zeros:`Zeros`};function mE(e,t={}){return Lw(e,fb.getMap().classNameMap,t,`initializer`)}function hE(e){return Fw(e)}function gE(e){if(typeof e==`string`){let t=e in pE?pE[e]:e;if(t===`GlorotNormal`)return new sE;if(t===`GlorotUniform`)return new oE;if(t===`HeNormal`)return new cE;if(t===`HeUniform`)return new lE;if(t===`LeCunNormal`)return new uE;if(t===`LeCunUniform`)return new dE;{let e={};return e.className=t,e.config={},mE(e)}}else if(e instanceof XT)return e;else return mE(e)}function _E(e){return Array.isArray(e)&&Array.isArray(e[0])}function vE(e){return e.length===0?[]:Array.isArray(e[0])?e:[e]}function Y(e){let t;if(Array.isArray(e)){if(e.length!==1)throw new J(`Expected Tensor length to be 1; got ${e.length}`);t=e[0]}else t=e;return t}function yE(e){if(Array.isArray(e)&&Array.isArray(e[0])){if(e.length===1)return e=e,e[0];throw new J(`Expected exactly 1 Shape; got ${e.length}`)}else return e}function bE(e){let t=0;for(let n of e)n.shape.length===0?t+=1:t+=n.shape.reduce((e,t)=>e*t);return t}var xE=`Variable`,SE=class{constructor(e,t=`float32`,n=xE,r=!0,i=null){this.dtype=t??`float32`,this.shape=e.shape,this.id=Yw(),n??=xE,this.originalName=fT(n),this.name=pT(this.originalName),this.trainable_=r,this.constraint=i,this.val=Wv(e,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(e){return this.assertNotDisposed(),CE(this.val,e),this.val.id!==e.id&&(this.val.assign(e),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(e){this.trainable_=e,this.val.trainable=e}};function CE(e,t){if(e.shape.toString()!==t.shape.toString())throw Error(`Shape mismatch: `+JSON.stringify(e.shape)+` vs. `+JSON.stringify(t.shape))}function wE(e){return e.map(e=>e.read())}function TE(e){e.forEach(e=>{e[0].write(e[1])})}var EE=class{constructor(e){this.dtype=e.dtype,this.shape=e.shape,e.shape==null?this.ndim=e.ndim:this.ndim=e.shape.length,this.maxNDim=e.maxNDim,this.minNDim=e.minNDim,this.axes=e.axes||{}}},DE=class{constructor(e,t,n,r,i,a,o){this.dtype=e,this.shape=t,this.sourceLayer=n,this.inputs=r,this.callArgs=i,this.outputTensorIndex=o,this.id=Yw(),a!=null&&(this.originalName=fT(a),this.name=pT(this.originalName)),this.rank=t.length}},OE=0,kE=class{constructor(e,t){this.callArgs=t,this.id=OE++,this.outboundLayer=e.outboundLayer,this.inboundLayers=e.inboundLayers,this.nodeIndices=e.nodeIndices,this.tensorIndices=e.tensorIndices,this.inputTensors=e.inputTensors,this.outputTensors=e.outputTensors,this.inputMasks=e.inputMasks,this.outputMasks=e.outputMasks,this.inputShapes=e.inputShapes,this.outputShapes=e.outputShapes;for(let t of e.inboundLayers)t?.outboundNodes.push(this);e.outboundLayer.inboundNodes.push(this)}getConfig(){let e=[];for(let t of this.inboundLayers)t==null?e.push(null):e.push(t.name);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:e,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}},AE=0,jE=class extends db{constructor(e={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=AE++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let t=e.name;if(!t){let e=this.getClassName();t=Mw(e)+`_`+Zw(e)}if(this.name=t,this.trainable_=e.trainable==null?!0:e.trainable,e.inputShape!=null||e.batchInputShape!=null){let t;if(e.batchInputShape!=null)t=e.batchInputShape;else if(e.inputShape!=null){let n=null;e.batchSize!=null&&(n=e.batchSize),t=[n].concat(e.inputShape)}this.batchInputShape=t;let n=e.dtype;n??=e.inputDType,n??=`float32`,this.dtype=n}e.weights==null?this.initialWeights=null:this.initialWeights=e.weights,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(e,t){return e.name+`_ib-`+t.toString()}getNodeAtIndex(e,t){if(this.inboundNodes.length===0)throw new Cw(`The layer has never been called and thus has no defined ${t}.`);if(this.inboundNodes.length<=e)throw new J(`Asked to get ${t} at node ${e}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[e]}getInputAt(e){return Aw(this.getNodeAtIndex(e,`input`).inputTensors)}getOutputAt(e){return Aw(this.getNodeAtIndex(e,`output`).outputTensors)}get input(){if(this.inboundNodes.length>1)throw new Sw(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new Sw(`Layer ${this.name} is not connected, no input to return.`);return Aw(this.getNodeAtIndex(0,`input`).inputTensors)}get output(){if(this.inboundNodes.length===0)throw new Sw(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new Sw(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return Aw(this.getNodeAtIndex(0,`output`).outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(e=>e())}get updates(){return this._updates}get built(){return this._built}set built(e){this._built=e}get trainable(){return this.trainable_}set trainable(e){this._trainableWeights.forEach(t=>t.trainable=e),this.trainable_=e}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(e=>e.trainable):[]}set trainableWeights(e){this._trainableWeights=e}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(e=>!e.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(e){this._nonTrainableWeights=e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw Error(`Cannot call the resetStates() method of a non-stateful Layer object.`)}assertInputCompatibility(e){let t=jw(e);if(this.inputSpec==null||this.inputSpec.length===0)return;let n=jw(this.inputSpec);if(t.length!==n.length)throw new J(`Layer ${this.name} expects ${n.length} inputs, but it received ${t.length} input tensors. Input received: ${e}`);for(let e=0;e<t.length;e++){let r=t[e],i=n[e];if(i==null)continue;let a=r.rank;if(i.ndim!=null&&a!==i.ndim)throw new J(`Input ${e} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new J(`Input ${e} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new J(`Input ${e} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&r.dtype!==i.dtype)throw new J(`Input ${e} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${r.dtype}.`);if(i.axes){let t=r.shape;for(let n in i.axes){let r=Number(n),a=i.axes[n],o=r>=0?t[r]:t[t.length+r];if(a!=null&&[a,null].indexOf(o)===-1)throw new J(`Input ${e} is incompatible with layer ${this.name}: expected axis ${r} of input shape to have value ${a} but got shape ${t}.`)}}if(i.shape!=null)for(let t=0;t<i.shape.length;++t){let n=i.shape[t],a=r.shape[t];if(n!=null&&a!=null&&n!==a)throw new J(`Input ${e} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${r.shape}.`)}}}call(e,t){return e}invokeCallHook(e,t){this._callHook!=null&&this._callHook(e,t)}setCallHook(e){this._callHook=e}clearCallHook(){this._callHook=null}apply(e,t){t||={},this.assertNotDisposed();let n=jw(e),r=FE(e),i=IE(e);if(r===i)throw new J(`Arguments to apply() must be all SymbolicTensors or all Tensors`);return uT(this.name,()=>{if(!this.built){this.assertInputCompatibility(e);let t=[];for(let n of jw(e))t.push(n.shape);this.build(Aw(t)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&i&&(this._refCount=1)}if(this.assertInputCompatibility(e),i){let r=this.call(e,t);this.supportsMasking&&this.setMaskMetadata(e,r);let i=jw(r),a=[];for(let e of i)n.indexOf(e)!==-1&&(e=e.clone()),a.push(e);if(r=Aw(a),this.activityRegularizer!=null)throw new ww(`Layer invocation in the presence of activity regularizer(s) is not supported yet.`);return r}else{let n=ME(e),r=this.computeOutputShape(n),i,a=NE(e);if(this.warnOnIncompatibleInputShape(Array.isArray(e)?n[0]:n),i=r!=null&&r.length>0&&Array.isArray(r[0])?r.map((n,r)=>new DE(a,n,this,jw(e),t,this.name,r)):new DE(a,r,this,jw(e),t,this.name),this.addInboundNode(e,i,null,null,n,r,t),this._refCount++,this.activityRegularizer!=null)throw new ww(`Layer invocation in the presence of activity regularizer(s) is not supported yet.`);return i}})}warnOnIncompatibleInputShape(e){if(this.batchInputShape!=null)if(e.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(e)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let t=!1;this.batchInputShape.forEach((n,r)=>{n!=null&&e[r]!=null&&e[r]!==n&&(t=!0)}),t&&console.warn(`The shape of the input tensor (${JSON.stringify(e)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new Sw(`The layer ${this.name} has never been called and thus has no defined output shape.`);let e=[];for(let t of this.inboundNodes){let n=JSON.stringify(t.outputShapes);e.indexOf(n)===-1&&e.push(n)}if(e.length===1){let e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new Sw(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new Cw(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return bE(this.weights)}build(e){this.built=!0}getWeights(e=!1){return wE(e?this.trainableWeights:this.weights)}setWeights(e){z(()=>{let t=this.weights;if(t.length!==e.length)throw new J(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${e.length}, but the layer was expecting ${t.length} weights. Provided weights: ${e}...`);if(t.length===0)return;let n=[],r=wE(t);for(let i=0;i<r.length;++i){let a=r[i],o=t[i],s=e[i];if(!Ia(a.shape,s.shape))throw new J(`Layer weight shape ${a.shape} not compatible with provided weight shape ${s.shape}`);n.push([o,s])}TE(n)})}addWeight(e,t,n,r,i,a,o,s){if(this._addedWeightNames.indexOf(e)!==-1)throw new J(`Duplicate weight name ${e} for layer ${this.name}`);this._addedWeightNames.push(e),n??=`float32`,this.fastWeightInitDuringBuild&&(r=s==null?gE(`zeros`):s());let c=r.apply(t,n),l=new SE(c,n,e,a,o);return c.dispose(),i!=null&&this.addLoss(()=>i.apply(l.read())),a??=!0,a?this._trainableWeights.push(l):this._nonTrainableWeights.push(l),l}setFastWeightInitDuringBuild(e){this.fastWeightInitDuringBuild=e}addLoss(e){e==null||Array.isArray(e)&&e.length===0||(e=jw(e),this._losses!==void 0&&this._losses!==null&&this.losses.push(...e))}computeOutputShape(e){return e}computeMask(e,t){if(!this.supportsMasking){if(t!=null)if(Array.isArray(t))t.forEach(e=>{if(e!=null)throw TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return t}setMaskMetadata(e,t,n){if(!this.supportsMasking)return;let r=this.computeMask(e,n),i=jw(t),a=jw(r);if(i.length!==a.length)throw Error(`${this.name} outputs ${i.length} tensors but ${i.length} masks for those tensors`);for(let e=0;e<i.length;e++)i[e].kerasMask=a[e]}addInboundNode(e,t,n,r,i,a,o=null){let s=jw(e);t=jw(t),n=jw(n),r=jw(r),i=vE(i),a=vE(a);let c=[],l=[],u=[];for(let e of s)c.push(e.sourceLayer),l.push(e.nodeIndex),u.push(e.tensorIndex);new kE({outboundLayer:this,inboundLayers:c,nodeIndices:l,tensorIndices:u,inputTensors:s,outputTensors:t,inputMasks:n,outputMasks:r,inputShapes:i,outputShapes:a},o);for(let e=0;e<t.length;e++)t[e].sourceLayer=this,t[e].nodeIndex=this.inboundNodes.length-1,t[e].tensorIndex=e}getConfig(){let e={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(e.batchInputShape=this.batchInputShape),this.dtype!=null&&(e.dtype=this.dtype),e}disposeWeights(){return this.weights.forEach(e=>e.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let e=0;return--this._refCount===0&&(e=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:e}}};function ME(e){e=jw(e);let t=[];for(let n of e)t.push(n.shape);return Aw(t)}function NE(e){return`float32`}function PE(e,t,n){if((t==null||n!=null&&n>0)&&(t=e.sourceLayer,n=e.nodeIndex),t.inboundNodes.length===0)return[e];{let e=t.inboundNodes[n];if(e.inboundLayers.length===0)return e.inputTensors;{let t=[];for(let n=0;n<e.inboundLayers.length;n++){let r=e.inputTensors[n],i=e.inboundLayers[n],a=e.nodeIndices[n],o=PE(r,i,a);for(let e of o)t.indexOf(e)===-1&&t.push(e)}return t}}}function FE(e){let t=!0;for(let n of jw(e))if(!(n instanceof DE)){t=!1;break}return t}function IE(e){let t=!0;for(let n of jw(e))if(n instanceof DE){t=!1;break}return t}var LE=class extends jE{constructor(e){if(super({dtype:e.dtype,name:e.name==null?Zw(`input`).toString():e.name}),e.batchSize??=null,e.sparse??=!1,this.trainable=!1,this.built=!0,this.sparse=e.sparse,e.inputShape!=null&&e.batchInputShape!=null)throw new J(`Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.`);let t=e.batchInputShape;if(t==null){if(e.inputShape==null)throw new J("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");t=[e.batchSize].concat(e.inputShape)}else if(e.batchSize!=null)throw new J(`Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.`);let n=e.dtype||`float32`;this.batchInputShape=t,this.dtype=n,this.inputSpec=[{shape:t}];let r=new DE(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new kE({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[t],outputShapes:[t]})}apply(e,t){throw new J(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}};LE.className=`InputLayer`,q(LE);function RE(e){if(e.batchShape==null&&e.shape==null)throw Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(e.batchShape!=null&&e.shape!=null)throw new J("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=e.batchShape;e.shape!=null&&t==null&&(t=[null].concat(e.shape));let n=e.dtype;return n??=`float32`,new LE({batchInputShape:t,name:e.name,dtype:n,sparse:e.sparse}).inboundNodes[0].outputTensors[0]}function zE(e,t){if(e.dtype==null||e.dtype===t.dtype)return t;try{return B(t,e.dtype)}catch{throw new J(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${e.name}' (${e.dtype}).`)}}var BE=class e{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof e)for(let e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(let e of t)this.add(e.key,e.value)}}add(e,t,n){if(this.id2Value[e.id]==null)this.id2Value[e.id]=zE(e,t),this.name2Id[e.name]=e.id,n!=null&&(this.id2Mask[e.id]=n);else throw new J(`Duplicate key: name=${e.name}, id=${e.id}`);return this}addFeed(e){this.add(e.key,e.value)}hasKey(e){return this.id2Value[e.id]!=null}names(){return Object.keys(this.name2Id)}getValue(e){if(e instanceof DE){if(this.id2Value[e.id]==null)throw new J(`Nonexistent key: ${e.name}`);return this.id2Value[e.id]}else{let t=this.name2Id[e];if(t==null)throw new J(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Value[t]}}getMask(e){if(e instanceof DE){if(this.id2Value[e.id]==null)throw new J(`Nonexistent key: ${e.name}`);return this.id2Mask[e.id]}else{let t=this.name2Id[e];if(t==null)throw new J(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Mask[t]}}disposeMasks(){this.id2Mask!=null&&ld(this.id2Mask)}},VE=new Ew,HE=new Ew;function UE(e){VE?.setMaxEntries(e),HE?.setMaxEntries(e)}function WE(e,t,n,r){let i=n==null?!1:n.training,a=Array.isArray(e),o=a?e:[e],s=o.map(e=>e.name),c=[],l=t.names();for(let e of s)l.indexOf(e)===-1?c.push(null):c.push(t.getValue(e));r!=null&&(r.maxNumTensors=-1/0,r.minNumTensors=1/0);let u=s.join(`,`)+`|`+t.names().sort().join(`,`),d=VE.get(u),f;if(d==null){let e=GE(o,t);d=e.sorted,f=e.recipientCounts,VE.put(u,d),HE.put(u,f)}f={},i||Object.assign(f,HE.get(u));let p=new BE(t);for(let e=0;e<d.length;++e){if(r!=null){let e=cd().numTensors;e>r.maxNumTensors&&(r.maxNumTensors=e),e<r.minNumTensors&&(r.minNumTensors=e)}let a=d[e],o=a.sourceLayer;if(o instanceof LE)continue;let l=[],u=[],m=[],h=!1;for(let e of a.inputs){let n=p.getValue(e),r=p.getMask(e);l.push(n),u.push(r),r!=null&&(h=!0),i||(f[e.name]--,f[e.name]===0&&!t.hasKey(e)&&s.indexOf(e.name)===-1&&!n.isDisposed&&e.sourceLayer.stateful!==!0&&m.push(n))}h&&(n||={},n.mask=u[0]);let g=jw(o.apply(l,n)),_=null;o.supportsMasking&&(_=o.computeMask(l,u));let v=JE(a),y=Array.isArray(v)?v:[v];for(let e=0;e<y.length;++e){p.hasKey(y[e])||p.add(y[e],g[e],Array.isArray(_)?_[0]:_);let t=s.indexOf(y[e].name);t!==-1&&(c[t]=g[e])}i||ld(m)}return p.disposeMasks(),a?c:c[0]}function GE(e,t){j(e!=null&&e.length>0,()=>`Expected at least one fetch, got none`);let n=[],r={};if(e.length===1){let i=qE(e[0],t);n=i.sorted,r=i.recipientMap}else{let i=new Set;for(let a of e){let{sorted:e,recipientMap:o}=qE(a,t);for(let t of e)i.has(t.name)||(n.push(t),i.add(t.name));for(let e in o)r[e]??(r[e]=new Set),o[e].forEach(t=>r[e].add(t))}}return{sorted:n,recipientCounts:KE(r)}}function KE(e){let t={};for(let n in e)t[n]=e[n].size;return t}function qE(e,t){let n=new Set,r=[],i={};for(let e of t.names())n.add(e);let a=[],o=[];for(a.push(e);a.length>0;){let e=a[a.length-1];if(n.has(e.name)){a.pop();continue}let t=o[o.length-1]===a.length-1;if(e.inputs.length===0||t)a.pop(),r.push(e),n.add(e.name),t&&o.pop();else{o.push(a.length-1);for(let t of e.inputs)i[t.name]??(i[t.name]=new Set),i[t.name].add(e.name),!n.has(t.name)&&a.push(t)}}return{sorted:r,recipientMap:i}}function JE(e){let t;if(e.sourceLayer.inboundNodes.length===1)t=e.sourceLayer.output;else{let n=null;for(let t=0;t<e.sourceLayer.inboundNodes.length;++t)for(let r of e.sourceLayer.inboundNodes[t].outputTensors)if(r.id===e.id){n=t;break}t=e.sourceLayer.getOutputAt(n)}return t}P().registerFlag(`TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES`,()=>100,UE);function YE(e,t){return z(()=>hh(G(U(e,e),t,!0)))}var XE=class extends db{getConfig(){return{}}},ZE=class extends XE{constructor(e){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=e.maxValue==null?this.defaultMaxValue:e.maxValue,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return z(()=>{let t=YE(e,this.axis);return U(e,H(Yp(t,0,this.maxValue),V(ST(),t)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}};ZE.className=`MaxNorm`,q(ZE);var QE=class extends XE{constructor(e){super(),this.defaultAxis=0,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return z(()=>H(e,V(ST(),YE(e,this.axis))))}getConfig(){return{axis:this.axis}}};QE.className=`UnitNorm`,q(QE);var $E=class extends XE{apply(e){return j_(e)}};$E.className=`NonNeg`,q($E);var eD=class extends XE{constructor(e){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=e.minValue==null?this.defaultMinValue:e.minValue,this.maxValue=e.maxValue==null?this.defaultMaxValue:e.maxValue,this.rate=e.rate==null?this.defaultRate:e.rate,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return z(()=>{let t=YE(e,this.axis);return U(e,H(V(U(this.rate,Yp(t,this.minValue,this.maxValue)),U(1-this.rate,t)),V(ST(),t)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}};eD.className=`MinMaxNorm`,q(eD);var tD={maxNorm:`MaxNorm`,minMaxNorm:`MinMaxNorm`,nonNeg:`NonNeg`,unitNorm:`UnitNorm`};function nD(e){return Fw(e)}function rD(e,t={}){return Lw(e,fb.getMap().classNameMap,t,`constraint`)}function iD(e){return e==null?null:typeof e==`string`?rD({className:e in tD?tD[e]:e,config:{}}):e instanceof XE?e:rD(e)}async function aD(e){if(e==null)return;let t=[],n=[],r=[];for(let i in e){let a=e[i];if(typeof a!=`number`){let e=a;t.push(e.data()),n.push(i),r.push(e)}}if(t.length>0){let i=await Promise.all(t);for(let t=0;t<i.length;++t)e[n[t]]=i[t][0];ld(r)}}function oD(e){if(e!=null)for(let t in e){let n=e[t];typeof n!=`number`&&n.dispose()}}var sD;(function(e){e[e.SILENT=0]=`SILENT`,e[e.VERBOSE=1]=`VERBOSE`})(sD||={});var cD=class{constructor(){this.validationData=null}setParams(e){this.params=e}async onEpochBegin(e,t){}async onEpochEnd(e,t){}async onBatchBegin(e,t){}async onBatchEnd(e,t){}async onTrainBegin(e){}async onTrainEnd(e){}setModel(e){}},lD=class{constructor(e,t=10){e??=[],this.callbacks=e,this.queueLength=t}append(e){this.callbacks.push(e)}setParams(e){for(let t of this.callbacks)t.setParams(e)}setModel(e){for(let t of this.callbacks)t.setModel(e)}async onEpochBegin(e,t){t??={};for(let n of this.callbacks)await n.onEpochBegin(e,t)}async onEpochEnd(e,t){t??={};for(let n of this.callbacks)await n.onEpochEnd(e,t)}async onBatchBegin(e,t){t??={};for(let n of this.callbacks)await n.onBatchBegin(e,t)}async onBatchEnd(e,t){t??={};for(let n of this.callbacks)await n.onBatchEnd(e,t)}async onTrainBegin(e){e??={};for(let t of this.callbacks)await t.onTrainBegin(e)}async onTrainEnd(e){e??={};for(let t of this.callbacks)await t.onTrainEnd(e)}},uD=class extends cD{constructor(){super()}async onEpochBegin(e){this.seen=0,this.totals={}}async onBatchEnd(e,t){t??={};let n=t.size==null?0:t.size;this.seen+=n;for(let e in t){let r=t[e];if(typeof r==`number`)this.totals.hasOwnProperty(e)||(this.totals[e]=0),this.totals[e]=this.totals[e]+r*n;else{let t;e in this.totals?t=this.totals[e]:this.totals[e]=0;let i=z(()=>V(this.totals[e],U(r,n)));this.totals[e]=i,t?.dispose()}}}async onEpochEnd(e,t){if(t!=null)for(let e of this.params.metrics)this.totals[e]!=null&&(typeof this.totals[e]==`number`?t[e]=this.totals[e]/this.seen:z(()=>{t[e]=U(H(1,this.seen),this.totals[e]),this.totals[e].dispose(),ud(t[e])}))}},dD=class extends cD{async onTrainBegin(e){this.epoch=[],this.history={}}async onEpochEnd(e,t){t??={},this.epoch.push(e);for(let e in t)this.history[e]??(this.history[e]=[]),this.history[e].push(t[e])}async syncData(){let e=[],t=[],n=[];for(let r in this.history){let i=this.history[r];for(let a=0;a<i.length;++a)if(typeof i[a]!=`number`){let o=i[a];e.push(o.data()),t.push(r),n.push(a)}}let r=await Promise.all(e);for(let e=0;e<r.length;++e)this.history[t[e]][n[e]].dispose(),this.history[t[e]][n[e]]=r[e][0]}},fD=class extends cD{constructor(e,t){if(super(),this.currentEpoch=0,this.nowFunc=e.nowFunc,this.nextFrameFunc=e.nextFrameFunc||ix,this.yieldEvery=t||`auto`,this.yieldEvery===`auto`&&(this.yieldEvery=125),this.yieldEvery===`never`&&e.onYield!=null)throw Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");eo(this.yieldEvery)&&(this.maybeWait=Kw(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=e.onTrainBegin,this.trainEnd=e.onTrainEnd,this.epochBegin=e.onEpochBegin,this.epochEnd=e.onEpochEnd,this.batchBegin=e.onBatchBegin,this.batchEnd=e.onBatchEnd,this.yield=e.onYield}async maybeWait(e,t,n){let r=[];this.yield!=null&&(await aD(n),r.push(this.yield(e,t,n))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(e,t){this.currentEpoch=e,this.epochBegin!=null&&(await aD(t),await this.epochBegin(e,t))}async onEpochEnd(e,t){let n=[];this.epochEnd!=null&&(await aD(t),n.push(this.epochEnd(e,t))),this.yieldEvery===`epoch`&&n.push(this.nextFrameFunc()),await Promise.all(n)}async onBatchBegin(e,t){this.batchBegin!=null&&(await aD(t),await this.batchBegin(e,t))}async onBatchEnd(e,t){let n=[];this.batchEnd!=null&&(await aD(t),n.push(this.batchEnd(e,t))),this.yieldEvery===`batch`?n.push(this.nextFrameFunc()):eo(this.yieldEvery)&&n.push(this.maybeWait(this.currentEpoch,e,t)),await Promise.all(n)}async onTrainBegin(e){this.trainBegin!=null&&(await aD(e),await this.trainBegin(e))}async onTrainEnd(e){this.trainEnd!=null&&(await aD(e),await this.trainEnd(e))}};function pD(e,t){return e??={},e instanceof cD?[e]:Array.isArray(e)&&e[0]instanceof cD?e:jw(e).map(e=>new fD(e,t))}var mD=class e{constructor(){}static registerCallbackConstructor(t,n){j(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),e.checkForDuplicate(n),e.constructors[t]??(e.constructors[t]=[]),e.constructors[t].push(n)}static checkForDuplicate(t){for(let n in e.constructors)e.constructors[+n].forEach(e=>{if(e===t)throw new J(`Duplicate callback constructor.`)})}static clear(){e.constructors={}}static createCallbacks(t){let n=[];for(let r in e.constructors){let i=+r;t>=i&&n.push(...e.constructors[i])}return n.map(e=>new e)}};mD.constructors={};function hD(e,t,n,r,i,a,o,s,c){let l=new dD,u=[new uD,...mD.createCallbacks(t)];e!=null&&u.push(...e),u.push(l);let d=new lD(u);return d.setParams({epochs:n,initialEpoch:r,samples:i,steps:a,batchSize:o,verbose:t,doValidation:s,metrics:c}),{callbackList:d,history:l}}function gD(e,t={},n=!1){return Lw(e,fb.getMap().classNameMap,t,`layer`,n)}function _D(e,t){return z(()=>{e.dtype!==`float32`&&(e=B(e,`float32`));let n=G(RT(e),t,!0),r=hh(Pg(n,qp(n.shape,ST())));return H(e,r)})}function vD(e,t){return z(()=>Ig(RT(K(t,e)),-1))}function yD(e,t){return z(()=>Ig(Df(K(t,e)),-1))}function bD(e,t){return z(()=>U(100,Ig(Df(H(K(e,t),Yp(Df(e),ST(),Number.MAX_VALUE))),-1)))}function xD(e,t){return z(()=>Ig(RT(K(ag(V(1,Yp(t,ST(),Number.MAX_VALUE))),ag(V(1,Yp(e,ST(),Number.MAX_VALUE))))),-1))}function SD(e,t){return z(()=>Ig(RT(Pg(0,K(1,U(e,t)))),-1))}function CD(e,t){return z(()=>Ig(Pg(0,K(1,U(e,t))),-1))}function wD(e,t){return z(()=>{let n=G(U(e,t),-1);return Pg(0,V(1,K(ch(U(K(1,e),t),-1),n)))})}function TD(e,t){return z(()=>{let n=Math.log(2),r=K(t,e);return Ig(K(V(r,pg(U(-2,r))),n),-1)})}function ED(e,t,n=!1){return z(()=>{if(n)t=av(t);else{let e=G(t,t.shape.length-1,!0);t=H(t,e)}return t=Yp(t,ST(),1-ST()),dg(G(U(B(e,`float32`),ag(t)),t.shape.length-1))})}function DD(e,t,n=!1){return z(()=>{let r=B(Fh(DT(e)),`int32`);t=Yp(t,ST(),1-ST());let i=t.shape;return ED(W(Xg(r,i[i.length-1]),i),t,n)})}function OD(e,t){if(!Ia(e.shape,t.shape))throw new J(`logits and labels must have the same shape, but got shapes ${JSON.stringify(e.shape)} and ${JSON.stringify(t.shape)}`);return z(()=>{let n=j_(t),r=dg(Df(t));return V(K(n,U(t,e)),sg(Th(r)))})}function kD(e,t){return z(()=>{let n;return n=Yp(t,ST(),1-ST()),n=ag(H(n,K(1,n))),Ig(OD(e,n),-1)})}function AD(e,t){return z(()=>G(U(e,ag(H(Yp(e,ST(),1),Yp(t,ST(),1)))),-1))}function jD(e,t){return z(()=>Ig(K(t,U(e,ag(V(ST(),t)))),-1))}function MD(e,t){return z(()=>dg(G(U(_D(e,-1),_D(t,-1)),-1)))}var ND={meanSquaredError:vD,meanAbsoluteError:yD,meanAbsolutePercentageError:bD,meanSquaredLogarithmicError:xD,squaredHinge:SD,hinge:CD,categoricalHinge:wD,logcosh:TD,categoricalCrossentropy:ED,sparseCategoricalCrossentropy:DD,binaryCrossentropy:kD,kullbackLeiblerDivergence:AD,poisson:jD,cosineProximity:MD};function PD(e){if(typeof e==`string`){if(e in ND)return ND[e];let t=`Unknown loss ${e}`;throw e.toLowerCase().includes(`softmaxcrossentropy`)&&(t=`Unknown loss ${e}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new J(t)}else return e}function FD(e,t){return z(()=>Ig(Rm(e,wT(zh(t,U(.5,Qg(t))),e.dtype)),-1))}function ID(e,t){return z(()=>wT(Rm(Lf(e,-1),Lf(t,-1)),`float32`))}function LD(e,t){return z(()=>B(G(Sg(Rm(e,1),Rm(t,1))),`float32`))}function RD(e,t){return z(()=>B(G(Sg(Rm(e,0),Rm(t,1))),`float32`))}function zD(e,t){return z(()=>{let n=LD(e,t),r=V(n,RD(e,t));return B(Bm(zh(r,0),H(n,r),0),`float32`)})}function BD(e,t){return kD(e,t)}function VD(e,t){return e.rank===t.rank&&(e=yv(e,[e.rank-1])),t=Lf(t,-1),t.dtype!==e.dtype&&(t=B(t,e.dtype)),B(Rm(e,t),`float32`)}var HD=vD,UD=vD,WD=yD,GD=yD,KD=bD,qD=bD,JD=ED,YD=MD,XD=DD,ZD={binaryAccuracy:FD,categoricalAccuracy:ID,precision:zD,categoricalCrossentropy:JD,sparseCategoricalCrossentropy:XD,mse:HD,MSE:UD,mae:WD,MAE:GD,mape:KD,MAPE:qD,cosine:YD};function QD(e){if(typeof e==`string`&&e in ZD)return ZD[e];if(typeof e!=`string`&&e!=null)return e;throw new J(`Unknown metric ${e}`)}function $D(e){if(Ow(e!==null,`Unknown LossOrMetricFn ${e}`),typeof e==`string`)return e;{let t;for(let n of Object.keys(ND))if(ND[n]===e){t=n;break}if(t!==void 0)return t;for(let n of Object.keys(ZD))if(ZD[n]===e){t=n;break}return t===void 0?e.name:t}}function eO(e){let t={Adagrad:()=>nx.adagrad(.01),Adadelta:()=>nx.adadelta(1,.95,ST()),Adam:()=>nx.adam(.001,.9,.999,ST()),Adamax:()=>nx.adamax(.002,.9,.999,ST(),0),RMSProp:()=>nx.rmsprop(.001,.9,0,ST()),SGD:()=>nx.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,e in t)return t[e]();throw new J(`Unknown Optimizer ${e}`)}var tO=1*1024*1024;function nO(e,t,n=!1){if(typeof e!=`object`||!e||Object.getPrototypeOf(e)!==Object.prototype||!rO(e))throw Error(`User-defined metadata is expected to be a JSON object, but is not.`);if(n){let n=JSON.stringify(e);n.length>1048576&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${n.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${tO}.`)}}function rO(e){if(e===null)return!0;if(typeof e==`object`)if(Object.getPrototypeOf(e)===Object.prototype){let t=Object.keys(e);for(let n of t)if(typeof n!=`string`||!rO(e[n]))return!1;return!0}else if(Array.isArray(e)){for(let t of e)if(!rO(t))return!1;return!0}else return!1;else{let t=typeof e;return t===`string`||t===`number`||t===`boolean`}}function iO(e,t,n,r=console.log){let i=oO(e),a=[`Layer (type)`,`Input Shape`,`Output shape`,`Param #`];i?(t||=90,n||=[.32,.61,.89,1]):(t||=115,n||=[.24,.48,.7,.8,1]),n[n.length-1]<=1&&(n=n.map(e=>Math.floor(t*e)));let o;if(!i){a.push(`Receives inputs`),o=[];for(let t in e.nodesByDepth)o.push(...e.nodesByDepth[t])}r(`_`.repeat(t)),sO(a,n,r),r(`=`.repeat(t));let s=e.layers;for(let e=0;e<s.length;++e)i?cO(s[e],n,r):lO(s[e],n,o,r),r((e===s.length-1?`=`:`_`).repeat(t));e.checkTrainableWeightsConsistency();let c=aO(e),l=bE(e.nonTrainableWeights);r(`Total params: ${c+l}`),r(`Trainable params: ${c}`),r(`Non-trainable params: ${l}`),r(`_`.repeat(t))}function aO(e){let t;return t=e.collectedTrainableWeights==null?bE(e.trainableWeights):bE(e.collectedTrainableWeights),t}function oO(e){let t=!0,n=[],r=[];for(let t in e.nodesByDepth)n.push(e.nodesByDepth[t]);for(let e of n){if(e.length>1||e.length===1&&e[0].inboundLayers.length>1){t=!1;break}r.push(...e)}if(t)for(let n of e.layers){let e=!1;for(let i of n.inboundNodes)if(r.indexOf(i)!==-1)if(e){t=!1;break}else e=!0;if(!t)break}return t}function sO(e,t,n=console.log){let r=``;for(let n=0;n<e.length;++n)n>0&&(r=r.slice(0,r.length-1)+` `),r+=e[n],r=r.slice(0,t[n]),r+=` `.repeat(t[n]-r.length);n(r)}function cO(e,t,n){let r,i;try{i=e.inboundNodes.map(e=>JSON.stringify(e.inputShapes)).join(`,`)}catch{i=`multiple`}try{r=JSON.stringify(e.outputShape)}catch{r=`multiple`}sO([`${e.name} (${e.getClassName()})`,i,r,e.countParams().toString()],t,n)}function lO(e,t,n,r){let i,a;try{a=e.inboundNodes.map(e=>JSON.stringify(e.inputShapes)).join(`,`)}catch{a=`multiple`}try{i=JSON.stringify(e.outputShape)}catch{i=`multiple`}let o=[];for(let t of e.inboundNodes)if(!(n!=null&&n.length>0&&n.indexOf(t)===-1))for(let e=0;e<t.inboundLayers.length;++e){let n=t.inboundLayers[e].name,r=t.nodeIndices[e],i=t.tensorIndices[e];o.push(`${n}[${r}][${i}]`)}let s=e.name,c=e.getClassName(),l=o.length===0?``:o[0];sO([`${s} (${c})`,a,i,e.countParams().toString(),l],t,r);for(let e=1;e<o.length;++e)sO([``,``,``,``,o[e]],t,r)}function uO(e,t,n){return(e===`inboundNodes`||e===`outputLayers`||e===`inputLayers`)&&t===0&&typeof n==`string`}function dO(e,t){if(e===null)return null;if(typeof e==`string`)return Nw(e);if(typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Array){let n=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];uO(t,i,r)?n.push(r):n.push(dO(r,t))}return n}else{let t={};for(let n of Object.keys(e)){let r=e[n];if(n===`name`&&typeof r==`string`)t[n]=r;else{let e=Nw(n);t[e]=dO(r,e)}}return t}}function fO(e,t){if(e==null)return null;if(typeof e==`string`)return Mw(e);if(typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Array){let n=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];uO(t,i,r)?n.push(r):n.push(fO(r,t))}return n}else{let t={};for(let n of Object.keys(e)){let r=e[n],i=Mw(n);(n===`name`||n===`className`)&&typeof r==`string`?t[i]=r:t[i]=fO(r,n)}return t}}var pO=`4.22.0`,mO=e=>{let t=Object.keys(e);if(t.length===0)return!1;let n=t[0].split(`/`);return!isNaN(parseInt(n[n.length-1],10))},hO=class e extends jE{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){let e=this.getClassName().toLowerCase();this.name=Zw(e)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],Bw(this.inputs).length!==this.inputs.length)throw new J(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(e=>e.name)}`);Bw(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(e=>e.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(let e of this.outputs){let t=e.sourceLayer,n=e.nodeIndex,r=e.tensorIndex;this.outputLayers.push(t),this.outputLayersNodeIndices.push(n),this.outputLayersTensorIndices.push(r)}for(let e of this.inputs){let t=e.sourceLayer,n=e.nodeIndex,r=e.tensorIndex;Ow(n===0,`input layer has >1 nodes`),Ow(r===0,`input layer has >1 tensors`),this.inputLayers.push(t),this.inputLayersNodeIndices.push(n),this.inputLayersTensorIndices.push(r)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let e=0;e<this.inputLayers.length;e++){let n=this.inputLayers[e];if(!(n instanceof LE))throw TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${e} (0-based) originates from layer type ${n.getClassName()}.`);this.inputNames.push(n.name),this.feedInputShapes.push(n.batchInputShape),this.feedInputNames.push(n.name)}for(let e of this.outputLayers)this.outputNames.push(e.name);this.internalInputShapes=this.inputs.map(e=>e.shape),this.internalOutputShapes=this.outputs.map(e=>e.shape);let n={},r={},i={},a={},o={},s=[],c=(t,n,r,i,a,l)=>{(i==null||a==null||l==null)&&(i=t.sourceLayer,a=t.nodeIndex,l=t.tensorIndex);let u=i.inboundNodes[a];if(r.indexOf(u)!==-1)throw new Cw(`The tensor ${t.name} at layer "${i.name}" is part of a cycle.`);if(n.indexOf(u)!==-1)return;this.containerNodes.add(e.nodeKey(i,a)),i.id in o||(o[i.id]=Object.keys(o).length),r.indexOf(u)===-1&&r.push(u);let d=u.inboundLayers.length;for(let e=0;e<d;e++){let t=u.inputTensors[e],i=u.inboundLayers[e],a=u.nodeIndices[e],o=u.tensorIndices[e];c(t,n,r,i,a,o)}for(n.push(u);r.indexOf(u)>=0;)r.splice(r.indexOf(u),1);s.push(u)},l=[],u=[];for(let e of this.outputs)c(e,l,u);let d=s.slice().reverse();for(let e of d){r[e.id]=e,e.id in n||(n[e.id]=0);let t=n[e.id],o=i[e.outboundLayer.id]==null?0:i[e.outboundLayer.id];t=Math.max(t,o),i[e.outboundLayer.id]=t,a[e.outboundLayer.id]=e.outboundLayer,n[e.id]=t;for(let i=0;i<e.inboundLayers.length;i++){let a=e.inboundLayers[i],o=e.nodeIndices[i],s=a.inboundNodes[o],c=n[s.id]==null?0:n[s.id];n[s.id]=Math.max(t+1,c),r[s.id]=s}}let f={};for(let e in n){let t=n[e];t in f||(f[t]=[]),f[t].push(r[e])}let p={};for(let e in i){let t=i[e];t in p||(p[t]=[]),p[t].push(a[e])}let m=Object.keys(p).map(e=>parseInt(e,10)).sort(zw);this.layers=[];for(let t of m){let n=p[t];n.sort((e,t)=>{let n=o[e.id],r=o[t.id];return n<r?-1:+(n>r)});for(let t of n)t instanceof e&&this.internalContainerRefs.push(t),this.layers.push(t)}this.layersByDepth=p,m=Object.keys(f).map(e=>parseInt(e,10)).sort(zw);let h=this.inputs.slice(),g=[];for(let e of m)for(let t of f[e]){let e=t.outboundLayer;if(e!=null){for(let n of t.inputTensors)if(h.indexOf(n)===-1)throw new Cw(`Graph disconnected: cannot obtain value for tensor ${n} at layer "${e.name}". The following previous layers were accessed without issue: ${g}`);for(let e of t.outputTensors)h.push(e);g.push(e.name)}}this.nodesByDepth=f;let _=this.layers.map(e=>e.name);for(let e of _){let t=_.filter(t=>t===e).length;if(t!==1)throw new Cw(`The name "${e}" is used ${t} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(_))}this.outboundNodes=[],this.inboundNodes=[],new kE({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(e=>null),outputMasks:this.outputs.map(e=>null),inputShapes:this.inputs.map(e=>e.shape),outputShapes:this.outputs.map(e=>e.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();let e={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(let t of this.layers)e.numDisposedVariables+=t.dispose().numDisposedVariables;for(let t of this.internalContainerRefs)e.numDisposedVariables+=t.dispose().numDisposedVariables}return e.refCountAfterDispose=this._refCount,e}get trainable(){return this.trainable_}set trainable(e){this.layers.forEach(t=>{t._trainableWeights.forEach(t=>t.trainable=e)}),this.trainable_=e}get trainableWeights(){if(this._trainableWeights.length>0)throw new J(`Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.`);if(!this.trainable)return[];let e=[];for(let t of this.layers)e=e.concat(t.trainableWeights);return e}get nonTrainableWeights(){let e=[];for(let t of this.layers)e.push(...t.nonTrainableWeights);if(!this.trainable){let t=[];for(let e of this.layers)t.push(...e.trainableWeights);return t.concat(e)}return e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(e,t=!0){let n={},r=0,i=mO(e);i&&this.parseWeights(e);for(let e of this.layers)for(let[t,a]of e.weights.entries()){let e=i?`${a.name.split(`/`).slice(0,-1).join(`/`)+`/`}${t}`:a.originalName;if(n[e]!=null)throw new J(`Duplicate weight name: ${e}`);n[e]=a,r++}let a=[];for(let r in e){let i=r;if(n[r]==null){let e=r.split(`/`);i=e.slice(0,-2).concat([e[e.length-1]]).join(`/`)}if(n[i]!=null)a.push([n[i],e[r]]);else if(t)throw new J(`Provided weight data has no target variable: ${r}`);delete n[i]}if(t){let e=[];for(let t in n)e.push(t);if(e.length>0)throw new J(`${e.length} of ${r} weights are not set: ${e}`)}TE(a)}parseWeights(e){for(let t in Object.keys(e)){let n=t.split(`/`),r=[`vars`,`layer_checkpoint_dependencies`],i=n.map(e=>e.startsWith(`_`)?e.slice(1):e).filter(e=>!r.includes(e)).join(`/`);i!==t&&(e[i]=e[t],delete e[t])}}updatedConfig(){let e=this.getConfig(),t={};return t.className=this.getClassName(),t.config=e,t.kerasVersion=`tfjs-layers ${pO}`,t.backend=`TensorFlow.js`,t}toJSON(e,t=!0){let n=fO(this.updatedConfig());return t?JSON.stringify(n):n}call(e,t){return z(()=>{e=jw(e);let n=new BE;for(let t=0;t<this.inputs.length;++t)n.add(this.inputs[t],e[t]);return WE(this.outputs,n,t)})}computeMask(e,t){return z(()=>{e=jw(e);let n;return n=t==null?Dw(null,e.length):jw(t),this.runInternalGraph(e,n)[1]})}computeOutputShape(e){let t=vE(e);if(t.length!==this.inputLayers.length)throw new J(`Invalid inputShape argument ${e}: model has ${this.inputLayers.length} tensor inputs.`);let n={};for(let e=0;e<t.length;e++){let r=this.inputLayers[e],i=t[e],a=r.name+`_0_0`;n[a]=i}let r=Object.keys(this.nodesByDepth).map(e=>parseInt(e,10)).sort(zw);if(r.length>1)for(let e of r){let t=this.nodesByDepth[e];for(let e of t){let t=e.outboundLayer;if(this.inputLayers.map(e=>e.id).indexOf(t.id)!==-1)continue;let r=[];for(let t=0;t<e.inboundLayers.length;t++){let i=e.inboundLayers[t],a=e.nodeIndices[t],o=e.tensorIndices[t],s=n[`${i.name}_${a}_${o}`];r.push(s)}let i=vE(t.computeOutputShape(Aw(r))),a=t.inboundNodes.indexOf(e);for(let e=0;e<i.length;e++){let r=`${t.name}_${a}_${e}`;n[r]=i[e]}}}let i=[],a=[];for(let e=0;e<this.outputLayers.length;e++){let t=this.outputLayers[e],n=this.outputLayersNodeIndices[e],r=this.outputLayersTensorIndices[e],i=`${t.name}_${n}_${r}`;a.push(i)}for(let e=0;e<a.length;e++){let t=a[e];Ow(t in n),i.push(n[t])}return Aw(i)}runInternalGraph(e,t){t??=Dw(null,e.length);let n={};for(let r=0;r<this.inputs.length;++r){let i=this.inputs[r],a=e[r],o=t[r];n[i.id]=[a,o]}let r=Object.keys(this.nodesByDepth).map(e=>parseInt(e,10)).sort(zw);for(let e of r){let t=this.nodesByDepth[e];for(let e of t){let t=e.outboundLayer,r=e.inputTensors,i=e.outputTensors,a=[];for(let e of r)e.id in n&&a.push(n[e.id]);if(a.length===r.length){let r={},o,s,c,l;if(e.callArgs!=null&&(r=e.callArgs),a.length===1){let[e,n]=a[0];r.mask??=n,c=jw(t.call(e,r)),l=jw(t.computeMask(e,n)),o=[e],s=[n]}else o=a.map(e=>e[0]),s=a.map(e=>e[1]),r.mask??=s,c=jw(t.call(o,r)),l=jw(t.computeMask(o,s));if(t.activityRegularizer)throw new ww(`LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.`);for(let e=0;e<i.length;++e){let t=i[e],r=c[e],a=l[e];n[t.id]=[r,a]}}}}let i=[],a=[],o=[];for(let e of this.outputs){Ow(e.id in n,`Could not compute output ${e.name} : ${e.id}`);let[t,r]=n[e.id];o.push(t.shape),i.push(t),a.push(r)}return[i,a,o]}buildNodeConversionMap(t){let n={},r;for(let t of this.layers){r=+(t instanceof e);for(let i=0;i<t.inboundNodes.length;i++){let a=e.nodeKey(t,i);this.containerNodes.has(a)&&(n[a]=r,r+=1)}}return n}getLayer(e,t){if(t!=null)return this.findLayer(t);if(e==null)throw new J(`Provide either a layer name or layer index`);if(typeof e==`number`)return this.findLayer(e);for(let t of this.layers)if(t.name===e)return t;throw new J(`No such layer: ${e}`)}findLayer(e){if(this.layers.length<=e)throw new J(`Was asked to retrieve layer at index ${e}, but model only has ${this.layers.length} layer(s).`);return this.layers[e]}calculateLosses(){return z(()=>{let t=[];for(let n of this.layers)for(let r=0;r<n.inboundNodes.length;++r){let i=e.nodeKey(n,r);this.containerNodes.has(i)&&t.push(...n.calculateLosses())}return t})}getConfig(){let t={name:this.name},n=this.buildNodeConversionMap(this.layers),r=[];for(let t of this.layers){let i=t.getClassName(),a=t.getConfig(),o=[];for(let r=0;r<t.inboundNodes.length;r++){let i=t.inboundNodes[r],a=e.nodeKey(t,r),s={};if(this.containerNodes.has(a)){if(i.callArgs)try{JSON.stringify(i.callArgs),s=i.callArgs}catch{console.warn(`Layer ${t.name} was passed non-serializable keyword arguments: ${i.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),s={}}if(i.inboundLayers.length>0){let t=[];for(let r=0;r<i.inboundLayers.length;r++){let a=i.inboundLayers[r],o=i.nodeIndices[r],c=i.tensorIndices[r],l=n[e.nodeKey(a,o)];l??=0,t.push([a.name,l,c,s])}o.push(t)}}}let s={};s.name=t.name,s.className=i,s.config=a,s.inboundNodes=o,r.push(s)}t.layers=r;let i=[];for(let t=0;t<this.inputLayers.length;t++){let r=this.inputLayers[t],a=this.inputLayersNodeIndices[t],o=e.nodeKey(r,a);if(!this.containerNodes.has(o))continue;let s=n[o];s??=0;let c=this.inputLayersTensorIndices[t];i.push([r.name,s,c])}t.inputLayers=i;let a=[];for(let t=0;t<this.outputLayers.length;t++){let r=this.outputLayers[t],i=this.outputLayersNodeIndices[t],o=e.nodeKey(r,i);if(!this.containerNodes.has(o))continue;let s=n[o];s??=0;let c=this.outputLayersTensorIndices[t];a.push([r.name,s,c])}return t.outputLayers=a,t}static fromConfig(e,t,n={},r=!1){let i={},a={};function o(e,t){e.name in a?a[e.name].push(t):a[e.name]=[t]}function s(e,t){let n=[],r;for(let a of t){let s=a[0],c=a[1],l=a[2];if(r=a[3]==null?{}:a[3],!(s in i)){o(e,t);return}let u=i[s];if(u.inboundNodes.length<=c){o(e,t);return}let d=u.inboundNodes[c];n.push(d.outputTensors[l])}n.length>0&&e.apply(Aw(n),r)}function c(e){let n=e.name,a=gD(e,t.customObjects==null?{}:t.customObjects);a.setFastWeightInitDuringBuild(r),i[n]=a,e.inboundNodes.forEach(e=>{if(!(e instanceof Array))throw new J(`Corrupted configuration, expected array for nodeData: ${e}`);o(a,e)})}let l=t.name,u=t.layers;for(let e of u)c(e);for(;!Vw(a);)for(let e of u){let t=i[e.name];if(t.name in a){let e=a[t.name];delete a[t.name];for(let n of e)s(t,n)}}let d=[],f=[],p=t.inputLayers;for(let e of p){let t=e[0],n=e[1],r=e[2];Ow(t in i);let a=i[t].inboundNodes[n].outputTensors;d.push(a[r])}let m=t.outputLayers;for(let e of m){let t=e[0],n=e[1],r=e[2];Ow(t in i);let a=i[t].inboundNodes[n].outputTensors;f.push(a[r])}return new e({inputs:d,outputs:f,name:l})}get stateful(){if(this._stateful)throw new J(`Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.`);for(let e of this.layers)if(e.stateful)return!0;return!1}resetStates(){z(()=>{this.layers.forEach(e=>{e.stateful&&e.resetStates()})})}};function gO(e,t,n){let r=t.length;if(e==null||Array.isArray(e)&&e.length===0)return t.map(e=>null);if(r===1)return Array.isArray(e)&&e.length===1?e:typeof e==`object`&&t[0]in e?[e[t[0]]]:[e];if(Array.isArray(e)){if(e.length!==r)throw Error(`Provided ${n} is an array of ${e.length} element(s), but the model has ${r} outputs. Make sure a set of weights is provided for each model output.`);return e}else if(typeof e==`object`&&Object.keys(e).length>0&&typeof e[Object.keys(e)[0]]==`object`){let n=[];return t.forEach(t=>{t in e?n.push(e[t]):n.push(null)}),n}else throw Error(`The model has multiple (${r}) outputs, so ${n} must be either an array with ${r} elements or an object with ${t} keys. Provided ${n} not understood: ${JSON.stringify(e)}`)}function _O(e,t){return gO(e,t,`classWeight`)}async function vO(e,t,n,r){if(t!=null||r!=null)throw Error(`Support sampleWeight is not implemented yet`);if(n!=null){let t=z(()=>{if(e.shape.length===1)return yf(e);if(e.shape.length===2){if(e.shape[1]>1)return Lf(e,1);if(e.shape[1]===1)return W(e,[e.shape[0]]);throw Error(`Encountered unexpected last-dimension size (${e.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw Error(`Unexpected rank of target (y) tensor (${e.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),r=Array.from(await t.data());ld(t);let i=[];return r.forEach(e=>{if(n[e]==null)throw Error(`classWeight must contain all classes in the training data. The class ${e} exists in the data but not in classWeight`);i.push(n[e])}),Ov(i,`float32`)}else return null}function yO(e,t){return U(e,t)}var bO=32;function xO(e,t){let n,r,i=t;n=i.xs,r=i.ys,j(n!=null&&r!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);let a=SO(`input`,e.inputNames,n),o=SO(`output`,e.outputNames,r),s=a[0].shape[0];j(a.length===e.inputs.length,()=>`LayersModel has ${e.inputs.length} inputs, but the dataset provides ${a.length} inputs.  (Expected input keys: ${JSON.stringify(e.inputNames)})`),j(o.length===e.outputs.length,()=>`LayersModel has ${e.outputs.length} outputs, but the dataset provides ${o.length} outputs.  (Expected output keys: ${JSON.stringify(e.outputNames)})`);for(let t=0;t<a.length;t++)j(a[t].shape[0]===s,()=>`Batch size mismatch: input ${e.inputNames[t]} has ${a[t].shape[0]}; expected  ${s} based on input ${e.inputNames[0]}.`);for(let t=0;t<o.length;t++)j(o[t].shape[0]===s,()=>`Batch size mismatch: output ${e.outputNames[t]} has ${o[t].shape[0]}; expected  ${s} based on input ${e.inputNames[0]}.`);return{xs:a,ys:o}}function SO(e,t,n){if(n instanceof xu)return[n];if(Array.isArray(n))return j(n.length===t.length,()=>`Received an array of ${n.length} Tensors, but expected ${t.length} to match the ${e} keys ${t}.`),n;{let r=[];for(let i of t){if(n[i]==null)throw new J(`The feature data generated by the dataset lacks the required ${e} key '${i}'.`);r.push(n[i])}return r}}function CO(e){if(e.length===3)throw new ww(`Validation with sample weights is not implemented yet.`);return{xs:e[0],ys:e[1]}}async function wO(e,t,n){let r=n.batchesPerEpoch!=null;if(j(e.optimizer!=null,()=>`You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig).`),j(n!=null,()=>`For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call.`),j(n.epochs!=null&&n.epochs>0&&Number.isInteger(n.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${n.epochs}`),j(!r||n.batchesPerEpoch>0&&Number.isInteger(n.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${n.batchesPerEpoch}`),j(n.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),e.isTraining)throw Error(`Cannot start training because another fit() call is ongoing.`);e.isTraining=!0;try{let i=n.validationData!=null,a,o;if(i)if(EO(n.validationData))j(n.validationBatches==null||n.validationBatches>0&&Number.isInteger(n.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${n.validationBatches}`);else{let e=CO(n.validationData);a=e.xs,o=e.ys}let s=e.makeTrainFunction(),c=e.getDedupedMetricsNames(),l;l=i?c.slice().concat(c.map(e=>`val_`+e)):c.slice();let{callbackList:u,history:d}=hD(pD(n.callbacks,n.yieldEvery),n.verbose==null?1:n.verbose,n.epochs,null,null,TO(t,n),null,i,l);u.setModel(e),e.history=d,await u.onTrainBegin(),e.stopTraining_=!1;let f=n.initialEpoch==null?0:n.initialEpoch,p=await t.iterator();for(;f<n.epochs;){let l={};await u.onEpochBegin(f);let d=0,m=0;for(r||(p=await t.iterator());!r||d<n.batchesPerEpoch;){let t=await p.next();if(r&&t.done){console.warn(`You provided \`batchesPerEpoch\` as ${n.batchesPerEpoch}, but your dataset iterator ran out of data after ${d} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${n.batchesPerEpoch*n.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(t.value!=null){let{xs:r,ys:i}=xO(e,t.value),a={};a.batch=m,a.size=r[0].shape[0],await u.onBatchBegin(m,a);let o=[];if(n.classWeight!=null){let t=_O(n.classWeight,e.outputNames);for(let e=0;e<t.length;++e)o.push(await vO(i[e],null,t[e]))}let l=r.concat(i).concat(o),f=s(l);ld(l);for(let e=0;e<c.length;++e){let t=c[e],n=f[e];a[t]=n,ud(n)}await u.onBatchEnd(m,a),oD(a),m++,d++}if(r?d>=n.batchesPerEpoch:t.done){if(i){let t;t=EO(n.validationData)?jw(await e.evaluateDataset(n.validationData,{batches:n.validationBatches})):jw(e.evaluate(a,o,{batchSize:n.validationBatchSize==null?bO:n.validationBatchSize,verbose:0}));for(let n=0;n<e.metricsNames.length;++n)l[`val_${e.metricsNames[n]}`]=t[n]}break}if(e.stopTraining_)break}if(await u.onEpochEnd(f,l),f++,e.stopTraining_)break}return await u.onTrainEnd(),await e.history.syncData(),e.history}finally{e.isTraining=!1}}function TO(e,t){let n=null;return t.batchesPerEpoch==null?Number.isFinite(e.size)&&(n=e.size):n=t.batchesPerEpoch,n}function EO(e){return typeof e.iterator==`function`}function DO(e){return typeof e.next==`function`}async function OO(e,t,n){n||={};let r=n.batches!=null,i=e.testFunction,a=[];if(n.verbose>0)throw new ww(`Verbose mode is not implemented yet.`);j(!r||n.batches>0&&Number.isInteger(n.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(n.batches)}`);let o=DO(t)?t:await t.iterator(),s=0,c=0;for(;!r||c<n.batches;){let t=await o.next();if(a=z(()=>{if(t.value){let{xs:n,ys:r}=xO(e,t.value),o=n.concat(r),l=z(()=>i(o));if(ld(o),c===0)for(let e=0;e<l.length;++e)a.push(ph(0));let u=o[0].shape[0];for(let e=0;e<l.length;++e){let t=l[e],n=a[e];a[e]=z(()=>V(a[e],U(u,t))),c>0&&ld(n)}ld(l),s+=u,++c}return a}),t.done){r&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${n.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let e=0;e<a.length;++e){let t=a[e];a[e]=H(a[e],s),ld(t)}return Aw(a)}function kO(e){j(e>0&&Number.isInteger(e),()=>`batchSize is required to be a positive integer, but got ${e}`)}function AO(e,t,n){return e==null?[null]:Array.isArray(e)?e.map(e=>kT(e,t,n-t)):kT(e,t,n-t)}function jO(e,t){return z(()=>e==null?null:Array.isArray(e)?e.map(e=>jO(e,t)):LT(e,t.dtype===`int32`?t:B(t,`int32`)))}function MO(e,t){let n=[],r=0,i=null;for(;r<e;)i=r+t,i>=e&&(i=e),n.push([r,i]),r=i;return n}function NO(e){let t=[];e instanceof xu&&(e=[e]);for(let n=0;n<e.length;++n){let r=e[n];if(r.rank===1)t.push(TT(r,1));else if(r.rank===0)throw Error(`Expected tensor to be at least 1D, but received a 0D tensor (scalar).`);else t.push(r)}return t}function PO(e,t){if(e==null)return;let n=[];if(t instanceof xu)n.push(t.id);else if(Array.isArray(t))t.forEach(e=>n.push(e.id));else if(t!=null)for(let e in t){let r=t[e];n.push(r.id)}let r=[];if(e instanceof xu)n.indexOf(e.id)===-1&&r.push(e);else if(Array.isArray(e))e.forEach(e=>{n.indexOf(e.id)===-1&&r.push(e)});else if(e!=null)for(let t in e){let i=e[t];n.indexOf(i.id)===-1&&r.push(i)}r.forEach(e=>{e.isDisposed||e.dispose()})}function FO(e){return e instanceof xu}function IO(e){return Array.isArray(e)}function LO(e){return!FO(e)&&!IO(e)}function RO(e,t,n,r=!0,i=``){if(t==null||t.length===0){if(e!=null){let t=!1;if(IO(e)&&e.length>0)t=!0;else if(LO(e)){for(let n in e)if(e.hasOwnProperty(n)){t=!0;break}}else t=!0;if(t)throw new J(`Error when checking model ${i} expected no data, but got ${e}`)}return[]}if(e==null)return t.map(e=>null);let a;if(LO(e)){e=e,a=[];for(let n of t){if(e[n]==null)throw new J(`No data provided for "${n}". Need data for each key in: ${t}`);a.push(e[n])}}else if(IO(e)){if(e=e,e.length!==t.length)throw new J(`Error when checking model ${i}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${e}`);a=e}else{if(e=e,t.length>1)throw new J(`The model ${i} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${e.shape}`);a=[e]}if(a=NO(a),n!=null)for(let e=0;e<t.length;++e){if(n[e]==null)continue;let o=a[e];if(o.shape.length!==n[e].length)throw new J(`Error when checking ${i}: expected ${t[e]} to have ${n[e].length} dimension(s). but got array with shape ${o.shape}`);for(let t=0;t<n[e].length;++t){if(t===0&&!r)continue;let a=o.shape[t],s=n[e][t];if(s!=null&&s>=0&&a!==s)throw new J(`${i} expected a batch of elements where each example has shape [${n[e].slice(1,n[e].length)}] (i.e.,tensor shape [*,${n[e].slice(1,n[e].length)}]) but the ${i} received an input with ${o.shape[0]} examples, each with shape [${o.shape.slice(1,o.shape.length)}] (tensor shape [${o.shape}])`)}}return a}function zO(e,t,n){let r=Bw(e.map(e=>e.shape[0]));r.sort();let i=Bw(t.map(e=>e.shape[0]));if(i.sort(),r.length>1)throw new J(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(e.map(e=>e.shape))}`);if(i.length>1)throw new J(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(e=>e.shape))}`);if(r.length>0&&i.length>0&&!Ia(r,i))throw new J(`Input Tensors should have the same number of samples as target Tensors. Found ${r[0]} input sample(s) and ${i[0]} target sample(s).`)}function BO(e,t,n){let r=[vD,kD,ED];for(let i=0;i<e.length;++i){let a=e[i],o=t[i],s=n[i];if(o!=null){if(o===ED&&a.shape[a.shape.length-1]===1)throw new J(`You are passing a target array of shape ${a.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(r.indexOf(o)!==-1){let e=a.shape.slice(1),t=s.slice(1);for(let n=0;n<e.length;++n){let r=e[n],i=t[n];if(i!=null&&r!==i)throw new J(`A target Tensor with shape ${a.shape} was passed for an output of shape ${s}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function VO(e,t,n,r=!0,i=``){let a;if(Array.isArray(e)){if(e.length!==t.length)throw new J(`Error when checking model ${i}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${e.length} Tensors(s).`);a=e}else{if(t.length>1)throw new J(`The model expects ${t.length} ${i} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(e.shape)}.`);a=[e]}if(n!=null)for(let e=0;e<t.length;++e){if(n[e]==null)continue;let o=a[e];if(o.shape.length!==n[e].length)throw new J(`Error when checking ${i}: expected ${t[e]} to have ${n[e].length} dimension(s), but got array with shape ${JSON.stringify(o.shape)}`);for(let a=0;a<n[e].length;++a){if(a===0&&!r)continue;let s=o.shape[a],c=n[e][a];if(c!=null&&c!==s)throw new J(`Error when checking ${i}: expected ${t[e]} to have shape ${JSON.stringify(n[e])} but got array with shape ${JSON.stringify(o.shape)}.`)}}}function HO(e,t){if(e==null||Array.isArray(e)&&e.length===0)return t.map(e=>[]);let n;if(typeof e==`string`||typeof e==`function`)n=[e];else if(Array.isArray(e)||typeof e==`object`)n=e;else throw TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${e}`);if(Array.isArray(n))return t.map(e=>n);{let e=[];for(let r of t){let t=n.hasOwnProperty(r)?n[r]:[];Array.isArray(t)||(t=[t]),e.push(t)}return e}}var UO=`layers-model`,WO=class extends hO{constructor(e){super(e),this.isTraining=!1}summary(e,t,n=console.log){if(!this.built)throw new J(`This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).`);iO(this,e,t,n)}compile(e){if(e.loss??=[],this.loss=e.loss,typeof e.optimizer==`string`)this.optimizer_=eO(e.optimizer),this.isOptimizerOwned=!0;else{if(!(e.optimizer instanceof pb))throw new J(`User-defined optimizer must be an instance of tf.Optimizer.`);this.optimizer_=e.optimizer,this.isOptimizerOwned=!1}let t=[];if(!Array.isArray(e.loss)&&typeof e.loss!=`string`&&typeof e.loss!=`function`){e.loss=e.loss;for(let t in e.loss)if(this.outputNames.indexOf(t)===-1)throw new J(`Unknown entry in loss dictionary: "${t}". Only expected the following keys: ${this.outputNames}`);for(let n of this.outputNames)e.loss[n]??console.warn(`Output "${n}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${n} during training`),t.push(PD(e.loss[n]))}else if(Array.isArray(e.loss)){if(e.loss.length!==this.outputs.length)throw new J(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${e.loss}.`);t=e.loss.map(e=>PD(e))}else{let n=PD(e.loss);this.outputs.forEach(e=>{t.push(n)})}this.lossFunctions=t,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let e=0;e<this.outputs.length;++e){let t=this.internalOutputShapes[e],n=this.outputNames[e];this.feedOutputNames.push(n),this.feedOutputShapes.push(t),this.feedLossFns.push(this.lossFunctions[e])}let n=[];this.metrics=e.metrics,this.metricsNames=[`loss`],this.metricsTensors=[],uT(`loss`,()=>{for(let e=0;e<this.outputs.length;++e){if(n.indexOf(e)!==-1)continue;let t=this.lossFunctions[e];this.outputs.length>1&&(this.metricsTensors.push([t,e]),this.metricsNames.push(this.outputNames[e]+`_loss`))}});let r=HO(e.metrics,this.outputNames),i=(e,t,n)=>{this.outputNames.length>1&&(t=this.outputNames[e]+`_`+t),this.metricsNames.push(t),this.metricsTensors.push([n,e])};uT(`metric`,()=>{for(let e=0;e<this.outputs.length;++e)n.indexOf(e)===-1&&(t=>{let n,r,a;for(let o of t){if(typeof o==`string`&&[`accuracy`,`acc`,`crossentropy`,`ce`].indexOf(o)!==-1){let t=this.internalOutputShapes[e];t[t.length-1]===1||this.lossFunctions[e]===kD?[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=BD):r=FD:this.lossFunctions[e]===DD?[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=XD):r=VD:[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=JD):r=ID;let i;[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(i=`ce`):i=`acc`,a=r,n=``+i}else a=QD(o),n=``+$D(o);let t;uT(n,()=>{t=a}),i(e,n,t)}})(r[e])}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(e,t,n={}){let r=n.batchSize==null?32:n.batchSize;kO(r);let i=this.standardizeUserDataXY(e,t,!0,r);try{let e=i[0].concat(i[1]);this.makeTestFunction();let t=this.testFunction;return Aw(this.testLoop(t,e,r,n.verbose,n.steps))}finally{PO(i[0],e),PO(i[1],t)}}async evaluateDataset(e,t){return this.makeTestFunction(),OO(this,e,t)}checkNumSamples(e,t,n,r=`steps`){let i;if(n!=null){if(i=null,t!=null)throw new J(`If ${r} is set, batchSize must be null or undefined.Got batchSize = ${t}`)}else if(e!=null)i=Array.isArray(e)?e[0].shape[0]:e.shape[0];else throw new J(`Either the input data should have a defined shape, or ${r} shoud be specified.`);return i}execute(e,t){if(Array.isArray(t)&&t.length===0)throw new J("`outputs` is an empty Array, which is not allowed.");let n=Array.isArray(t),r=n?t:[t],i=this.retrieveSymbolicTensors(r),a=new BE;if(e instanceof xu&&(e=[e]),Array.isArray(e)){if(e.length!==this.inputs.length)throw new J(`The number of inputs provided (${e.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let t=0;t<this.inputs.length;++t)a.add(this.inputs[t],e[t])}else for(let t of this.inputs){let n=e[t.name];if(n==null)throw new J(`No value is provided for the model's input ${t.name}`);a.add(t,n)}let o=WE(i,a);return n?o:o[0]}retrieveSymbolicTensors(e){let t=Dw(null,e.length),n=e.length;for(let r of this.layers){let i=Array.isArray(r.output)?r.output:[r.output],a=i.map(e=>e.name);for(let r=0;r<e.length;++r){let o=a.indexOf(e[r]);if(o!==-1&&(t[r]=i[o],n--),n===0)break}if(n===0)break}if(n>0){let n=[];throw t.forEach((t,r)=>{t??n.push(e[r])}),new J(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(n)}`)}return t}predictLoop(e,t=32,n=!1){return z(()=>{let r=this.checkNumSamples(e);if(n)throw new ww(`Verbose predictLoop() is not implemented yet.`);let i=MO(r,t),a=this.outputs.map(e=>[]);for(let t=0;t<i.length;++t)z(()=>{let n=i[t][0],r=i[t][1],a=AO(e,n,r),o=[];if(Array.isArray(a))for(let e=0;e<a.length;++e)o.push({key:this.inputs[e],value:a[e]});else o.push({key:this.inputs[0],value:a});let s=new BE(o);return WE(this.outputs,s)}).forEach((e,t)=>a[t].push(e));return Aw(a.map(e=>xp(e,0)))})}predict(e,t={}){let n=NO(e);VO(n,this.inputNames,this.feedInputShapes,!1);try{let e=t.batchSize==null?32:t.batchSize;return kO(e),this.predictLoop(n,e)}finally{PO(n,e)}}predictOnBatch(e){VO(e,this.inputNames,this.feedInputShapes,!0);let t=(Array.isArray(e)?e[0]:e).shape[0];return this.predictLoop(e,t)}standardizeUserDataXY(e,t,n=!0,r){if(this.optimizer_==null)throw new Cw(`You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).`);let i=[];for(let e=0;e<this.feedOutputShapes.length;++e){let t=this.feedOutputShapes[e];this.feedLossFns[e]===DD?i.push(t.slice(0,t.length-1).concat([1])):i.push(t)}if(e=RO(e,this.feedInputNames,this.feedInputShapes,!1,`input`),t=RO(t,this.feedOutputNames,i,!1,`target`),zO(e,t,null),BO(t,this.feedLossFns,this.feedOutputShapes),this.stateful&&r!=null&&r>0&&e[0].shape[0]%r!==0)throw new J(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${r}. Found: ${e[0].shape[0]} sample(s).`);return[e,t]}async standardizeUserData(e,t,n,r,i=!0,a){let[o,s]=this.standardizeUserDataXY(e,t,i,a);if(n!=null)throw Error(`sample weight is not supported yet.`);let c=null;if(r!=null){let e=_O(r,this.outputNames);c=[];for(let t=0;t<e.length;++t)c.push(await vO(s[t],null,e[t]))}return[o,s,c]}testLoop(e,t,n,r=0,i){return z(()=>{let a=this.checkNumSamples(t,n,i,`steps`),o=[];if(r>0)throw new ww(`Verbose mode is not implemented yet.`);if(i!=null)throw new ww(`steps mode in testLoop() is not implemented yet`);{let r=MO(a,n),i=Ov(bT(0,a));for(let n=0;n<r.length;++n){let a=r[n][0],s=r[n][1],c=e(jO(t,kT(i,a,s-a)));if(n===0)for(let e=0;e<c.length;++e)o.push(ph(0));for(let e=0;e<c.length;++e){let t=c[e];o[e]=V(o[e],U(s-a,t))}}for(let e=0;e<o.length;++e)o[e]=H(o[e],a)}return o})}getDedupedMetricsNames(){let e=this.metricsNames,t=[];for(let n=0;n<e.length;++n){let r=e[n],i=r;if(kw(e,r)>1){let t=kw(e.slice(0,n),r);i+=`_${t}`}t.push(i)}return t}makeTrainFunction(){return e=>{let t=[],n=e.slice(0,this.inputs.length),r=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=e.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),a=[],o=()=>{let e=[];for(let t=0;t<this.inputs.length;++t)e.push({key:this.inputs[t],value:n[t]});let o=new BE(e),s=WE(this.outputs,o,{training:!0}),c;for(let e=0;e<this.lossFunctions.length;++e){let n=this.lossFunctions[e],a=n(r[e],s[e]);i[e]!=null&&(a=yO(a,i[e]));let o=Ig(a);t.push(o),c=e===0?a:V(c,a)}for(let e=0;e<this.metricsTensors.length;++e){let n;if(this.outputs.length>1&&e<this.outputs.length)n=t[e];else{let t=this.metricsTensors[e][0],i=this.metricsTensors[e][1];n=Ig(t(r[i],s[i]))}ud(n),a.push(n)}return c=Ig(c),this.calculateLosses().forEach(e=>{c=V(c,e)}),c},s=this.collectedTrainableWeights.map(e=>e.read());return[this.optimizer_.minimize(o,!0,s)].concat(a)}}makeTestFunction(){this.testFunction=e=>z(()=>{let t=[],n,r=e.slice(0,this.inputs.length),i=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),a=[];for(let e=0;e<this.inputs.length;++e)a.push({key:this.inputs[e],value:r[e]});let o=new BE(a),s=WE(this.outputs,o);for(let e=0;e<this.lossFunctions.length;++e){let r=this.lossFunctions[e],a=Ig(r(i[e],s[e]));n=e===0?a:V(n,a),t.push(n)}for(let e=0;e<this.metricsTensors.length;++e){let n=this.metricsTensors[e][0],r=this.metricsTensors[e][1],a=Ig(n(i[r],s[r]));t.push(a)}return t})}async fit(e,t,n={}){if(this.isTraining)throw Error(`Cannot start training because another fit() call is ongoing.`);this.isTraining=!0;let r,i,a,o,s,c,l,u,d;try{let f=n.batchSize==null?32:n.batchSize;kO(f);let p=await this.standardizeUserData(e,t,n.sampleWeight,n.classWeight,!1,f);r=p[0],i=p[1],d=p[2];let m=!1,h;if(n.validationData!=null&&n.validationData.length>0){if(m=!0,n.validationData.length===2)s=n.validationData[0],c=n.validationData[1];else if(n.validationData.length===3)throw new ww(`validationData including sample weights is not supported yet.`);else throw new J(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${n.validationData} is invalid.`);let e=await this.standardizeUserData(s,c,null,null,!0,f);l=e[0],u=e[1],h=l.concat(u)}else if(n.validationSplit!=null&&n.validationSplit>0&&n.validationSplit<1){m=!0;let e=Math.floor(r[0].shape[0]*(1-n.validationSplit)),t=r[0].shape[0];l=AO(r,e,t),a=r,r=AO(r,0,e),u=AO(i,e,t),o=i,i=AO(i,0,e),h=l.concat(u)}else n.validationSteps!=null&&(m=!0);let g=r.concat(i).concat(d);this.checkTrainableWeightsConsistency();let _=this.makeTrainFunction(),v=this.getDedupedMetricsNames(),y,b;m?(this.makeTestFunction(),y=this.testFunction,b=v.slice().concat(v.map(e=>`val_`+e))):(y=null,h=[],b=v.slice());let x=pD(n.callbacks,n.yieldEvery);return await this.fitLoop(_,g,v,f,n.epochs,n.verbose,x,y,h,n.shuffle,b,n.initialEpoch,null,null)}finally{this.isTraining=!1,PO(r,e),PO(i,t),PO(a,e),PO(o,t),PO(l,s),PO(u,c),d!=null&&ld(d)}}async fitLoop(e,t,n,r,i,a,o,s,c,l,u,d,f,p){r??=32,i??=1,l??=!0,d??=0;let m=!1;if(s!=null&&c!=null&&(m=!0),p!=null&&(m=!0,f==null))throw new J("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");let h=this.checkNumSamples(t,r,f,`steps_per_epoch`),g;h!=null&&(g=bT(0,h)),a??=1;let{callbackList:_,history:v}=hD(o,a,i,d,h,f,r,m,u);_.setModel(this),this.history=v,await _.onTrainBegin(),this.stopTraining_=!1;for(let a=d;a<i;++a){await _.onEpochBegin(a);let i={};if(f!=null)throw new ww(`stepsPerEpoch mode is not implemented yet.`);{if(l===`batch`)throw new ww(`batch shuffling is not implemneted yet`);l&&ka(g);let a=Ov(g),o=MO(h,r);for(let l=0;l<o.length;++l){let u={};if(await _.onBatchBegin(l,u),z(()=>{let d=o[l][0],f=o[l][1],p=kT(a,d,f-d);u.batch=l,u.size=f-d;let h=e(jO(t,p));for(let e=0;e<n.length;++e){let t=n[e],r=h[e];u[t]=r,ud(r)}if(l===o.length-1&&m){let e=this.testLoop(s,c,r);for(let t=0;t<n.length;++t){let r=n[t],a=e[t];ud(a),i[`val_`+r]=a}}}),await _.onBatchEnd(l,u),oD(u),this.stopTraining_)break}a.dispose()}if(await _.onEpochEnd(a,i),this.stopTraining_)break}return await _.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(e,t){return wO(this,e,t)}async trainOnBatch(e,t){let n=await this.standardizeUserData(e,t),r=n[0],i=n[1],a=this.makeTrainFunction()(r.concat(i)),o=[];for(let e of a){let t=await e.data();o.push(t[0])}return ld(a),PO(n[0],e),PO(n[1],t),Aw(o)}getNamedWeights(e){let t=[],n=e!=null&&e.trainableOnly,r=n?this.trainableWeights:this.weights,i=this.getWeights(n);for(let e=0;e<r.length;++e)n&&!r[e].trainable||t.push({name:r[e].originalName,tensor:i[e]});return t}set stopTraining(e){this.stopTraining_=e}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(e){this.optimizer_!==e&&(this.optimizer_=e,this.isOptimizerOwned=!1)}dispose(){let e=super.dispose();if(e.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){let t=cd().numTensors;this.optimizer_.dispose(),e.numDisposedVariables+=t-cd().numTensors}return e}getLossIdentifiers(){let e;if(typeof this.loss==`string`)e=Mw(this.loss);else if(Array.isArray(this.loss)){for(let e of this.loss)if(typeof e!=`string`)throw Error(`Serialization of non-string loss is not supported.`);e=this.loss.map(e=>Mw(e))}else{let t=Object.keys(this.loss);e={};let n=this.loss;for(let r of t)if(typeof n[r]==`string`)e[r]=Mw(n[r]);else throw Error(`Serialization of non-string loss is not supported.`)}return e}getMetricIdentifiers(){if(typeof this.metrics==`string`||typeof this.metrics==`function`)return[Mw($D(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(e=>Mw($D(e)));{let e={};for(let t in this.metrics)e[t]=Mw($D(this.metrics[t]));return e}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(e){if(e.weighted_metrics!=null)throw Error(`Loading weight_metrics is not supported yet.`);if(e.loss_weights!=null)throw Error(`Loading loss_weights is not supported yet.`);if(e.sample_weight_mode!=null)throw Error(`Loading sample_weight_mode is not supported yet.`);let t=gD(dO(e.optimizer_config)),n;if(typeof e.loss==`string`)n=Nw(e.loss);else if(Array.isArray(e.loss))n=e.loss.map(e=>Nw(e));else if(e.loss!=null){n={};for(let t in e.loss)n[t]=Nw(e.loss[t])}let r;if(Array.isArray(e.metrics))r=e.metrics.map(e=>Nw(e));else if(e.metrics!=null){r={};for(let t in e.metrics)r[t]=Nw(e.metrics[t])}this.compile({loss:n,metrics:r,optimizer:t})}async save(e,t){if(typeof e==`string`){let t=Pd(e);if(t.length===0)throw new J(`Cannot find any save handlers for URL '${e}'`);if(t.length>1)throw new J(`Found more than one (${t.length}) save handlers for URL '${e}'`);e=t[0]}if(e.save==null)throw new J("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");let n=await md(this.getNamedWeights(t)),r={modelTopology:this.toJSON(null,!1),format:UO,generatedBy:`TensorFlow.js tfjs-layers v${pO}`,convertedBy:null};if(t!=null&&t.includeOptimizer&&this.optimizer!=null){r.trainingConfig=this.getTrainingConfig();let{data:e,specs:t}=await md(await this.optimizer.getWeights(),`optimizer`);n.specs.push(...t),n.data=Cd([n.data,e])}return this.userDefinedMetadata!=null&&(nO(this.userDefinedMetadata,this.name,!0),r.userDefinedMetadata=this.userDefinedMetadata),r.weightData=n.data,r.weightSpecs=n.specs,e.save(r)}setUserDefinedMetadata(e){nO(e,this.name),this.userDefinedMetadata=e}getUserDefinedMetadata(){return this.userDefinedMetadata}};WO.className=`Model`,q(WO);var GO=class extends WO{};GO.className=`Functional`,q(GO);async function KO(e,t){if(t??={},typeof e==`string`){let n=Fd(e,t);if(n.length===0)n.push(Nb(e,t));else if(n.length>1)throw new J(`Found more than one (${n.length}) load handlers for URL '${e}'`);e=n[0]}return qO(e,void 0,t)}async function qO(e,t,n){if(n??={},e.load==null)throw new J("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let r=await e.load(),i=r.modelTopology;i.model_config!=null&&(i=i.model_config);let a=n.strict==null?!0:n.strict,o=r.weightData!=null&&r.weightSpecs!=null&&a,s=gD(dO(i),t,o),c=r.trainingConfig;if(c!=null&&s.loadTrainingConfig(c),r.userDefinedMetadata!=null&&s.setUserDefinedMetadata(r.userDefinedMetadata),r.weightData!=null){if(r.weightSpecs==null)throw new J(`LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.`);let{modelWeights:e,optimizerWeights:t}=JO(r.weightData,r.weightSpecs);s.loadWeights(e,a),s.optimizer!=null&&t.length>0&&await s.optimizer.setWeights(t),ld(e),ld(t.map(e=>e.tensor))}return s}function JO(e,t){let n=hd(e,t),r={},i=[];return t.forEach(e=>{e.group===`optimizer`?i.push({name:e.name,tensor:n[e.name]}):r[e.name]=n[e.name]}),{modelWeights:r,optimizerWeights:i}}var YO=class e extends WO{constructor(e){if(super({inputs:[],outputs:[]}),e||={},this.trainable=!0,this.built=!1,this.name=e.name==null?Zw(`sequential_`):e.name,e.layers!=null)for(let t of e.layers)this.add(t)}checkShape(e){if(e.inboundNodes[0].outputTensors[0].shape.some(e=>e<0))throw new J(`Negative dimension size caused by adding layer ${e.name} with input shape [${e.inboundNodes[0].inputTensors[0].shape}]`)}add(t){let n=t instanceof e||t instanceof WO,r;if(n){if(r=t,r.outputs.length!==1)throw new J(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);if(r.inputs.length!==1)throw new J(`All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.`)}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new J("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");let e=RE({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+`_input`});t.apply(e)}if(n)this.outputs=r.outputs,this.inputs=r.inputs;else{if(t.inboundNodes.length!==1)throw new J(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new J(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=PE(this.outputs[0])}this.inboundNodes=[],new kE({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:Dw(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(e=>e.shape),outputShapes:this.outputs[0].shape})}else{let e=t.apply(this.outputs[0]);if(Array.isArray(e))throw TypeError(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);this.checkShape(t),this.outputs=[e],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw TypeError(`There are no layers in the model.`);if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{let e=this.layers.length-1;this.layers[e].outboundNodes=[],this.outputs=[this.layers[e].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(e,t){return this.model??this.build(),this.model.call(e,t)}build(e){if(yE(e),this.inputs.length===0||this.outputs.length===0)throw TypeError(`Sequential model cannot be built: model is empty. Add some layers first.`);this.model=new WO({inputs:this.inputs,outputs:this.outputs[0],name:this.name+`_model`}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(e,t,n=console.log){this.built||this.build(),super.summary(e,t,n)}setWeights(e){this.model??this.build(),this.model.setWeights(e)}evaluate(e,t,n={}){if(!this.built)throw new Cw(`The model needs to be compiled before being used.`);return this.model.evaluate(e,t,n)}async evaluateDataset(e,t){if(!this.built)throw new Cw(`The model needs to be compiled before being used.`);return this.model.evaluateDataset(e,t)}predict(e,t={}){return this.model??this.build(),this.model.predict(e,t)}predictOnBatch(e){return this.model??this.build(),this.model.predictOnBatch(e)}compile(e){this.build(),this.model.compile(e),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(e){this.model.optimizer=e}async fit(e,t,n={}){if(!this.built)throw new Cw(`The model needs to be compiled before being used.`);return this.model.fit(e,t,n)}async fitDataset(e,t){if(!this.built)throw new Cw(`The model needs to be compiled before being used.`);return this.model.fitDataset(e,t)}async trainOnBatch(e,t){return this.model.trainOnBatch(e,t)}static fromConfig(t,n,r={},i=!1){let a,o={};if(n instanceof Array){if(n[0].className==null||n[0].className===`Merge`)throw new J(`Legacy serialization format not supported yet.`);a=n}else j(n.layers!=null,()=>`When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field.`),a=n.layers,delete n.layers,o=n;let s=new t(o);if(!(s instanceof e))throw new ww(`Sequential.fromConfig called on non-Sequential input: ${s}`);for(let e of a){let t=gD(e,void 0,i);i&&t.setFastWeightInitDuringBuild(!0),s.add(t)}return s}set stopTraining(e){if(this.model==null)throw new J(`Cannot set the stopTraining property of a sequential model before it is compiled.`);this.model.stopTraining=e}get stopTraining(){if(this.model==null)throw new J(`Cannot get the stopTraining property of a sequential model before it is compiled.`);return this.model.stopTraining}getConfig(){let e=[];for(let t of this.layers){let n={};n.className=t.getClassName(),n.config=t.getConfig(),e.push(n)}return{name:this.name,layers:e}}};YO.className=`Sequential`,q(YO);function XO(e){return new YO(e)}var ZO=class extends db{getConfig(){return{}}},QO=class extends ZO{apply(e,t=1){return VT(e,t)}};QO.className=`elu`,q(QO);var $O=class extends ZO{apply(e){return V_(e)}};$O.className=`selu`,q($O);var ek=class extends ZO{apply(e){return j_(e)}};ek.className=`relu`,q(ek);var tk=class extends ZO{apply(e){return z(()=>Bg(6,j_(e)))}};tk.className=`relu6`,q(tk);var nk=class extends ZO{apply(e){return e}};nk.className=`linear`,q(nk);var rk=class extends ZO{apply(e){return Tp(e)}};rk.className=`sigmoid`,q(rk);var ik=class extends ZO{apply(e){return WT(e)}};ik.className=`hardSigmoid`,q(ik);var ak=class extends ZO{apply(e){return pg(e)}};ak.className=`softplus`,q(ak);var ok=class extends ZO{apply(e){return HT(e)}};ok.className=`softsign`,q(ok);var sk=class extends ZO{apply(e){return kp(e)}};sk.className=`tanh`,q(sk);var ck=class extends ZO{apply(e,t=-1){return av(e,t)}};ck.className=`softmax`,q(ck);var lk=class extends ZO{apply(e,t=-1){return vg(e,t)}};lk.className=`logSoftmax`,q(lk);var uk=class extends ZO{apply(e){return z(()=>z(()=>U(e,U(.5,V(1,Qm(H(e,Math.sqrt(2))))))))}};uk.className=`gelu`,q(uk);var dk=class extends ZO{apply(e){return z(()=>U(.5,U(e,V(1,kp(U(hh(H(2,Math.PI)),V(e,U(.044715,fh(e,3)))))))))}};dk.className=`gelu_new`,q(dk);var fk=class extends ZO{apply(e){return z(()=>U(e,kp(pg(e))))}};fk.className=`mish`,q(fk);var pk=class extends ZO{apply(e,t=1){return z(()=>U(Tp(U(e,t)),e))}};pk.className=`swish`,q(pk);function mk(e){return e.getClassName()}function hk(e,t={}){return Lw(e,fb.getMap().classNameMap,t,`activation`)}function gk(e){if(e==null){let e={};return e.className=`linear`,e.config={},hk(e)}if(typeof e==`string`){let t={};return t.className=e,t.config={},hk(t)}else if(e instanceof ZO)return e;else return hk(e)}function _k(e){if(e!=null&&typeof e!=`object`)throw Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${e}`)}var vk=class extends db{},yk=class extends vk{constructor(e){super(),_k(e),this.l1=e==null||e.l1==null?.01:e.l1,this.l2=e==null||e.l2==null?.01:e.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(e){return z(()=>{let t=Lg([1]);return this.hasL1&&(t=V(t,G(U(this.l1,Df(e))))),this.hasL2&&(t=V(t,G(U(this.l2,RT(e))))),W(t,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(e,t){return new e({l1:t.l1,l2:t.l2})}};yk.className=`L1L2`,q(yk);var bk={l1l2:`L1L2`};function xk(e){return Fw(e)}function Sk(e,t={}){return Lw(e,fb.getMap().classNameMap,t,`regularizer`)}function Ck(e){return e==null?null:typeof e==`string`?Sk({className:e in bk?bk[e]:e,config:{}}):e instanceof vk?e:Sk(e)}var wk=class extends jE{constructor(e){super(e??{}),this.supportsMasking=!0,e!=null&&(this.maxValue=e.maxValue)}call(e,t){e=Y(e);let n=j_(e);return this.maxValue!=null&&(n=Yp(n,0,this.maxValue)),n}computeOutputShape(e){return e}getConfig(){let e={maxValue:this.maxValue},t=super.getConfig();return Object.assign(e,t),e}};wk.className=`ReLU`,q(wk);var Tk=class extends jE{constructor(e){super(e??{}),this.DEFAULT_ALPHA=.3,e??={},this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){return Zh(Y(e),this.alpha)}computeOutputShape(e){return e}getConfig(){let e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}};Tk.className=`LeakyReLU`,q(Tk);var Ek=class extends jE{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA_INITIALIZER=`zeros`,e??={},this.supportsMasking=!0,this.alphaInitializer=gE(e.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=Ck(e.alphaRegularizer),this.alphaConstraint=iD(e.alphaConstraint),e.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(e.sharedAxes))this.sharedAxes=e.sharedAxes;else if(typeof e.sharedAxes==`number`)this.sharedAxes=[e.sharedAxes];else throw new J(`Expected sharedAxes to be a number or an array of numbers, but got ${e.sharedAxes}`)}build(e){e=yE(e);let t=e.slice(1);if(this.sharedAxes!=null)for(let e of this.sharedAxes)t[e-1]=1;this.alpha=this.addWeight(`alpha`,t,`float32`,this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);let n={};if(this.sharedAxes!=null)for(let t=1;t<e.length;++t)n[t]=e[t];this.inputSpec=[new EE({ndim:e.length,axes:n})],this.built=!0}call(e,t){return e=Y(e),c_(e,this.alpha.read())}getConfig(){let e={alphaInitializer:hE(this.alphaInitializer),alphaRegularizer:xk(this.alphaRegularizer),alphaConstraint:nD(this.alphaConstraint),sharedAxes:this.sharedAxes},t=super.getConfig();return Object.assign(e,t),e}};Ek.className=`PReLU`,q(Ek);var Dk=class extends jE{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA=1,e??={},e.alpha!=null&&e.alpha!==this.DEFAULT_ALPHA)throw new ww(`Non-default alpha value (${e.alpha}) is not supported by the ELU layer yet.`);this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){return Xm(Y(e))}computeOutputShape(e){return e}getConfig(){let e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}};Dk.className=`ELU`,q(Dk);var Ok=class extends jE{constructor(e){super(e??{}),this.DEFAULT_THETA=1,e??={},this.theta=e.theta==null?this.DEFAULT_THETA:e.theta}call(e,t){let n=Y(e);return U(n,B(zh(n,this.theta),`float32`))}computeOutputShape(e){return e}getConfig(){let e={theta:this.theta},t=super.getConfig();return Object.assign(e,t),e}};Ok.className=`ThresholdedReLU`,q(Ok);var kk=class extends jE{constructor(e){super(e??{}),this.DEFAULT_AXIS=1,e??={},this.softmax=new ck().apply,this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis}call(e,t){return z(()=>{let n=Y(e),r=t.mask;if(r!=null){let e=U(K(Rg(n.shape),B(r,n.dtype)),ph(-1e9));n=V(n,e)}return this.axis instanceof Array?this.axis.length>1?Th(K(n,bg(n,this.axis,!0))):this.softmax(n,this.axis[0]):this.softmax(n,this.axis)})}computeOutputShape(e){return e}getConfig(){let e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}};kk.className=`Softmax`,q(kk);function Ak(e,t,n){if(typeof e==`number`)return Dw(e,t);if(e.length!==t)throw new J(`The ${n} argument must be an integer or tuple of ${t} integers. Received: ${e.length} elements.`);for(let r=0;r<t;++r){let i=e[r];if(!gT(i))throw new J(`The ${n} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(e)} including a non-integer number ${i}`)}return e}function jk(e,t,n,r,i=1){if(e==null)return e;let a=t+(t-1)*(i-1),o;return o=n===`same`?e:e-a+1,Math.floor((o+r-1)/r)}function Mk(e,t,n,r){if(e==null)return null;if(r===`valid`)e=e*t+yT([n-t,0]);else if(r===`same`)e*=t;else throw new J(`Unsupport padding mode: ${r}.`);return e}function Nk(e,t){return z(()=>(iT(t),t===`channelsFirst`?qv(e,[0,2,3,1]):e))}function Pk(e,t){return z(()=>(iT(t),t===`channelsFirst`?qv(e,[0,2,3,4,1]):e))}function Fk(e,t,n,r=1,i=`valid`,a,o=1){return z(()=>{if(a??=CT(),iT(a),e.shape.length!==3)throw new J(`The input of a conv1dWithBias operation should be 3, but is ${e.shape.length} instead.`);if(t.shape.length!==3)throw new J(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(n!=null&&n.shape.length!==1)throw new J(`The bias for a conv1dWithBias operation should be 1, but is ${n.shape.length} instead`);if(a===`channelsFirst`&&(e=qv(e,[0,2,1])),i===`causal`)throw new ww(`The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.`);let s=sm(e,t,r,i===`same`?`same`:`valid`,`NWC`,o);return n!=null&&(s=BT(s,n)),s})}function Ik(e,t,n,r=[1,1],i=`valid`,a,o,s=null){return z(()=>{if(a??=CT(),iT(a),e.rank!==3&&e.rank!==4)throw new J(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${e.rank}.`);if(t.rank!==3&&t.rank!==4)throw new J(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${e.rank}.`);let c=Nk(e,a);if(i===`causal`)throw new ww(`The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.`);return c=iy({x:c,filter:t,strides:r,pad:i===`same`?`same`:`valid`,dilations:o,dataFormat:`NHWC`,bias:n,activation:s}),a===`channelsFirst`&&(c=qv(c,[0,3,1,2])),c})}function Lk(e,t,n,r=[1,1,1],i=`valid`,a,o){return z(()=>{if(a??=CT(),iT(a),e.rank!==4&&e.rank!==5)throw new J(`conv3dWithBias expects input to be of rank 4 or 5, but received ${e.rank}.`);if(t.rank!==4&&t.rank!==5)throw new J(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${e.rank}.`);let s=Pk(e,a);if(i===`causal`)throw new ww(`The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.`);return s=pm(s,t,r,i===`same`?`same`:`valid`,`NDHWC`,o),n!=null&&(s=BT(s,n)),a===`channelsFirst`&&(s=qv(s,[0,4,1,2,3])),s})}var Rk=class e extends jE{constructor(t,n){if(super(n),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.verifyArgs(n),this.rank=t,Ww(this.rank,`rank`),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new ww(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=Ak(n.kernelSize,t,`kernelSize`),this.strides=Ak(n.strides==null?1:n.strides,t,`strides`),this.padding=n.padding==null?`valid`:n.padding,oT(this.padding),this.dataFormat=n.dataFormat==null?`channelsLast`:n.dataFormat,iT(this.dataFormat),this.activation=gk(n.activation),this.useBias=n.useBias==null?!0:n.useBias,this.biasInitializer=gE(n.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=iD(n.biasConstraint),this.biasRegularizer=Ck(n.biasRegularizer),this.activityRegularizer=Ck(n.activityRegularizer),this.dilationRate=Ak(n.dilationRate==null?1:n.dilationRate,t,`dilationRate`),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new J(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate==`number`)this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new J(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate==`number`)this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new J(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(e){if(Ow(`kernelSize`in e,`required key 'kernelSize' not in config`),typeof e.kernelSize!=`number`&&!Uw(e.kernelSize,`number`,1,3))throw new J(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(e.kernelSize)}.`)}getConfig(){let e={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:mk(this.activation),useBias:this.useBias,biasInitializer:hE(this.biasInitializer),biasRegularizer:xk(this.biasRegularizer),activityRegularizer:xk(this.activityRegularizer),biasConstraint:nD(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}},zk=class e extends Rk{constructor(t,n){super(t,n),this.kernel=null,e.verifyArgs(n),this.filters=n.filters,Ww(this.filters,`filters`),this.kernelInitializer=gE(n.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=iD(n.kernelConstraint),this.kernelRegularizer=Ck(n.kernelRegularizer)}build(e){e=yE(e);let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new J(`The channel dimension of the input should be defined. Found ${e[t]}`);let n=e[t],r=this.kernelSize.concat([n,this.filters]);this.kernel=this.addWeight(`kernel`,r,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[t]:n}}],this.built=!0}call(e,t){return z(()=>{e=Y(e);let t,n=this.bias==null?null:this.bias.read(),r=qw(this.activation.getClassName());if(r!=null&&this.rank===2)t=Ik(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate,r);else{if(this.rank===1)t=Fk(e,this.kernel.read(),n,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)t=Ik(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)t=Lk(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new ww(`convolutions greater than 3D are not implemented yet.`);this.activation!=null&&(t=this.activation.apply(t))}return t})}computeOutputShape(e){e=yE(e);let t=[],n=this.dataFormat===`channelsLast`?e.slice(1,e.length-1):e.slice(2);for(let e=0;e<n.length;++e){let r=jk(n[e],this.kernelSize[e],this.padding,this.strides[e],typeof this.dilationRate==`number`?this.dilationRate:this.dilationRate[e]);t.push(r)}let r=[e[0]];return this.dataFormat===`channelsLast`?(r=r.concat(t),r.push(this.filters)):(r.push(this.filters),r=r.concat(t)),r}getConfig(){let e={filters:this.filters,kernelInitializer:hE(this.kernelInitializer),kernelRegularizer:xk(this.kernelRegularizer),kernelConstraint:nD(this.kernelConstraint)},t=super.getConfig();return Object.assign(e,t),e}static verifyArgs(e){if(!(`filters`in e)||typeof e.filters!=`number`||e.filters<1)throw new J(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(e.filters)}`)}},Bk=class e extends zk{constructor(t){super(2,t),e.verifyArgs(t)}getConfig(){let e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!Uw(e.kernelSize,`number`,1,2))throw new J(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(e.kernelSize)}.`)}};Bk.className=`Conv2D`,q(Bk);var Vk=class e extends zk{constructor(t){super(3,t),e.verifyArgs(t)}getConfig(){let e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!(Array.isArray(e.kernelSize)&&(e.kernelSize.length===1||e.kernelSize.length===3)))throw new J(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(e.kernelSize)}.`)}};Vk.className=`Conv3D`,q(Vk);var Hk=class extends Bk{constructor(e){if(super(e),this.inputSpec=[new EE({ndim:4})],this.padding!==`same`&&this.padding!==`valid`)throw new J(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=yE(e),e.length!==4)throw new J(`Input should have rank 4; Received input shape: `+JSON.stringify(e));let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new J("The channel dimension of the inputs should be defined. Found `None`.");let n=e[t],r=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight(`kernel`,r,`float32`,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new EE({ndim:4,axes:{[t]:n}})],this.built=!0}call(e,t){return z(()=>{let t=Y(e);if(t.shape.length!==4)throw new J(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${t.shape.length}`);let n=t.shape,r=n[0],i,a;this.dataFormat===`channelsFirst`?(i=2,a=3):(i=1,a=2);let o=n[i],s=n[a],c=this.kernelSize[0],l=this.kernelSize[1],u=this.strides[0],d=this.strides[1],f=[r,Mk(o,u,c,this.padding),Mk(s,d,l,this.padding),this.filters];this.dataFormat!==`channelsLast`&&(t=qv(t,[0,2,3,1]));let p=dm(t,this.kernel.read(),f,this.strides,this.padding);return this.dataFormat!==`channelsLast`&&(p=qv(p,[0,3,1,2])),this.bias!=null&&(p=BT(p,this.bias.read(),this.dataFormat)),this.activation!=null&&(p=this.activation.apply(p)),p})}computeOutputShape(e){e=yE(e);let t=e.slice(),n,r,i;this.dataFormat===`channelsFirst`?(n=1,r=2,i=3):(n=3,r=1,i=2);let a=this.kernelSize[0],o=this.kernelSize[1],s=this.strides[0],c=this.strides[1];return t[n]=this.filters,t[r]=Mk(t[r],s,a,this.padding),t[i]=Mk(t[i],c,o,this.padding),t}getConfig(){let e=super.getConfig();return delete e.dilationRate,e}};Hk.className=`Conv2DTranspose`,q(Hk);var Uk=class extends Vk{constructor(e){if(super(e),this.inputSpec=[new EE({ndim:5})],this.padding!==`same`&&this.padding!==`valid`)throw new J(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=yE(e),e.length!==5)throw new J(`Input should have rank 5; Received input shape: `+JSON.stringify(e));let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new J("The channel dimension of the inputs should be defined. Found `None`.");let n=e[t],r=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight(`kernel`,r,`float32`,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new EE({ndim:5,axes:{[t]:n}})],this.built=!0}call(e,t){return z(()=>{let t=Y(e);if(t.shape.length!==5)throw new J(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${t.shape.length}`);let n=t.shape,r=n[0],i,a,o;this.dataFormat===`channelsFirst`?(o=2,i=3,a=4):(o=1,i=2,a=3);let s=n[o],c=n[i],l=n[a],u=this.kernelSize[0],d=this.kernelSize[1],f=this.kernelSize[2],p=this.strides[0],m=this.strides[1],h=this.strides[2],g=[r,Mk(s,p,u,this.padding),Mk(c,m,d,this.padding),Mk(l,h,f,this.padding),this.filters];this.dataFormat!==`channelsLast`&&(t=qv(t,[0,2,3,4,1]));let _=_m(t,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!==`channelsLast`&&(_=qv(_,[0,4,1,2,3])),this.bias!==null&&(_=BT(_,this.bias.read(),this.dataFormat)),this.activation!==null&&(_=this.activation.apply(_)),_})}computeOutputShape(e){e=yE(e);let t=e.slice(),n,r,i,a;this.dataFormat===`channelsFirst`?(n=1,r=2,i=3,a=4):(n=4,r=1,i=2,a=3);let o=this.kernelSize[0],s=this.kernelSize[1],c=this.kernelSize[2],l=this.strides[0],u=this.strides[1],d=this.strides[2];return t[n]=this.filters,t[r]=Mk(t[r],l,o,this.padding),t[i]=Mk(t[i],u,s,this.padding),t[a]=Mk(t[a],d,c,this.padding),t}getConfig(){let e=super.getConfig();return delete e.dilationRate,e}};Uk.className=`Conv3DTranspose`,q(Uk);var Wk=class extends zk{constructor(e,t){if(super(e,t),this.DEFAULT_DEPTHWISE_INITIALIZER=`glorotUniform`,this.DEFAULT_POINTWISE_INITIALIZER=`glorotUniform`,this.depthwiseKernel=null,this.pointwiseKernel=null,t.filters==null)throw new J("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(t.kernelInitializer!=null||t.kernelRegularizer!=null||t.kernelConstraint!=null)throw new J(`Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.`);if(t.padding!=null&&t.padding!==`same`&&t.padding!==`valid`)throw new J(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(t.padding)}`);this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=gE(t.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=Ck(t.depthwiseRegularizer),this.depthwiseConstraint=iD(t.depthwiseConstraint),this.pointwiseInitializer=gE(t.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=Ck(t.pointwiseRegularizer),this.pointwiseConstraint=iD(t.pointwiseConstraint)}build(e){if(e=yE(e),e.length<this.rank+2)throw new J(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(e)}`);let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null||e[t]<0)throw new J(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(e[t])}`);let n=e[t],r=this.kernelSize.concat([n,this.depthMultiplier]),i=[];for(let e=0;e<this.rank;++e)i.push(1);i.push(n*this.depthMultiplier,this.filters),this.depthwiseKernel=this.addWeight(`depthwise_kernel`,r,`float32`,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight(`pointwise_kernel`,i,`float32`,this.pointwiseInitializer,this.pointwiseRegularizer,!0,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.inputSpec=[new EE({ndim:this.rank+2,axes:{[t]:n}})],this.built=!0}call(e,t){return z(()=>{e=Y(e);let t;if(this.rank===1)throw new ww(`1D separable convolution is not implemented yet.`);return this.rank===2&&(this.dataFormat===`channelsFirst`&&(e=qv(e,[0,2,3,1])),t=U_(e,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,`NHWC`)),this.useBias&&(t=BT(t,this.bias.read(),this.dataFormat)),this.activation!=null&&(t=this.activation.apply(t)),this.dataFormat===`channelsFirst`&&(t=qv(t,[0,3,1,2])),t})}getConfig(){let e=super.getConfig();return delete e.rank,delete e.kernelInitializer,delete e.kernelRegularizer,delete e.kernelConstraint,e.depthwiseInitializer=hE(this.depthwiseInitializer),e.pointwiseInitializer=hE(this.pointwiseInitializer),e.depthwiseRegularizer=xk(this.depthwiseRegularizer),e.pointwiseRegularizer=xk(this.pointwiseRegularizer),e.depthwiseConstraint=nD(this.depthwiseConstraint),e.pointwiseConstraint=nD(this.pointwiseConstraint),e}};Wk.className=`SeparableConv`;var Gk=class extends Wk{constructor(e){super(2,e)}};Gk.className=`SeparableConv2D`,q(Gk);var Kk=class e extends zk{constructor(t){super(1,t),e.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){let e=super.getConfig();return delete e.rank,delete e.dataFormat,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!Uw(e.kernelSize,`number`,1,1))throw new J(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(e.kernelSize)}.`)}};Kk.className=`Conv1D`,q(Kk);var qk=class extends jE{constructor(e){super(e),typeof e.cropping==`number`?this.cropping=[[e.cropping,e.cropping],[e.cropping,e.cropping]]:typeof e.cropping[0]==`number`?this.cropping=[[e.cropping[0],e.cropping[0]],[e.cropping[1],e.cropping[1]]]:this.cropping=e.cropping,this.dataFormat=e.dataFormat===void 0?`channelsLast`:e.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(e){return this.dataFormat===`channelsFirst`?[e[0],e[1],e[2]-this.cropping[0][0]-this.cropping[0][1],e[3]-this.cropping[1][0]-this.cropping[1][1]]:[e[0],e[1]-this.cropping[0][0]-this.cropping[0][1],e[2]-this.cropping[1][0]-this.cropping[1][1],e[3]]}call(e,t){return z(()=>(e=Y(e),this.dataFormat===`channelsLast`?jT(jT(e,this.cropping[0][0],e.shape[1]-this.cropping[0][0]-this.cropping[0][1],2),this.cropping[1][0],e.shape[2]-this.cropping[1][1]-this.cropping[1][0],3):jT(jT(e,this.cropping[0][0],e.shape[2]-this.cropping[0][0]-this.cropping[0][1],3),this.cropping[1][0],e.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)))}getConfig(){let e={cropping:this.cropping,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}};qk.className=`Cropping2D`,q(qk);var Jk=class extends jE{constructor(e){super(e),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=e.size==null?this.DEFAULT_SIZE:e.size,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,iT(this.dataFormat),this.interpolation=e.interpolation==null?`nearest`:e.interpolation,aT(this.interpolation)}computeOutputShape(e){if(this.dataFormat===`channelsFirst`){let t=e[2]==null?null:this.size[0]*e[2],n=e[3]==null?null:this.size[1]*e[3];return[e[0],e[1],t,n]}else{let t=e[1]==null?null:this.size[0]*e[1],n=e[2]==null?null:this.size[1]*e[2];return[e[0],t,n,e[3]]}}call(e,t){return z(()=>{let t=Y(e),n=t.shape;if(this.dataFormat===`channelsFirst`){t=qv(t,[0,2,3,1]);let e=this.size[0]*n[2],r=this.size[1]*n[3];return qv(this.interpolation===`nearest`?sb.resizeNearestNeighbor(t,[e,r]):sb.resizeBilinear(t,[e,r]),[0,3,1,2])}else{let e=this.size[0]*n[1],r=this.size[1]*n[2];return this.interpolation===`nearest`?sb.resizeNearestNeighbor(t,[e,r]):sb.resizeBilinear(t,[e,r])}})}getConfig(){let e={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}};Jk.className=`UpSampling2D`,q(Jk);function Yk(e,t,n=[1,1],r=`valid`,i,a){return z(()=>{i??=CT(),iT(i);let o=Nk(e,i);if(e.rank!==4)throw new J(`Input for depthwiseConv2d is required to be 4-D, but is instead ${e.rank}-D`);if(t.rank!==4)throw new J(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return o=jm(o,t,n,r===`same`?`same`:`valid`,`NHWC`,a),i===`channelsFirst`&&(o=qv(o,[0,3,1,2])),o})}var Xk=class extends Rk{constructor(e){super(2,e),this.depthwiseKernel=null,this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=gE(e.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=iD(e.depthwiseConstraint),this.depthwiseRegularizer=Ck(e.depthwiseRegularizer)}build(e){if(e=yE(e),e.length<4)throw new J(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(e)}.`);let t=this.dataFormat===`channelsFirst`?1:3;if(e[t]==null||e[t]<0)throw new J(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${e[t]}).`);let n=e[t],r=[this.kernelSize[0],this.kernelSize[1],n,this.depthMultiplier];this.depthwiseKernel=this.addWeight(`depthwise_kernel`,r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight(`bias`,[n*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return z(()=>{e=Y(e);let t=Yk(e,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(t=BT(t,this.bias.read(),this.dataFormat)),this.activation!=null&&(t=this.activation.apply(t)),t})}computeOutputShape(e){e=yE(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2],r=this.dataFormat===`channelsFirst`?e[1]*this.depthMultiplier:e[3]*this.depthMultiplier,i=jk(t,this.kernelSize[0],this.padding,this.strides[0]),a=jk(n,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat===`channelsFirst`?[e[0],r,i,a]:[e[0],i,a,r]}getConfig(){let e=super.getConfig();return e.depthMultiplier=this.depthMultiplier,e.depthwiseInitializer=hE(this.depthwiseInitializer),e.depthwiseRegularizer=xk(this.depthwiseRegularizer),e.depthwiseConstraint=nD(this.depthwiseRegularizer),e}};Xk.className=`DepthwiseConv2D`,q(Xk);function Zk(e,t,n,r){if(Array.isArray(e)){if(t!=null||n!=null)throw new J(`When inputs is an array, neither initialState or constants should be provided`);r!=null&&(n=e.slice(e.length-r,e.length),e=e.slice(0,e.length-r)),e.length>1&&(t=e.slice(1,e.length)),e=e[0]}function i(e){return e==null||Array.isArray(e)?e:[e]}return t=i(t),n=i(n),{inputs:e,initialState:t,constants:n}}function Qk(e,t,n,r=!1,i,a,o=!1,s=!1){return z(()=>{let c=t.shape.length;if(c<3)throw new J(`Input should be at least 3D, but is ${c}D.`);let l=[1,0].concat(bT(2,c));if(t=qv(t,l),a!=null)throw new ww(`The rnn() functoin of the deeplearn.js backend does not support constants yet.`);o&&console.warn(`Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend.`),i!=null&&(i=B(B(i,`bool`),`float32`),i.rank===c-1&&(i=Dh(i,-1)),i=qv(i,l)),r&&(t=F_(t,0),i!=null&&(i=F_(i,0)));let u=[],d,f=n,p=t.shape[0],m=Uv(t),h;i!=null&&(h=Uv(i));for(let t=0;t<p;++t){let n=m[t],r=z(()=>e(n,f));if(i==null)d=r[0],f=r[1];else{let e=z(()=>{let e=h[t],n=K(Qg(e),e);return{output:V(U(r[0],e),U(f[0],n)),newStates:f.map((t,i)=>V(U(r[1][i],e),U(t,n)))}});d=e.output,f=e.newStates}s&&u.push(d)}let g;return s&&(g=xv(u,1)),[d,g,f]})}var $k=class e extends jE{constructor(e){super(e);let t;if(e.cell==null)throw new J(`cell property is missing for the constructor of RNN.`);if(t=Array.isArray(e.cell)?new sA({cells:e.cell}):e.cell,t.stateSize==null)throw new J("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=t,this.returnSequences=e.returnSequences==null?!1:e.returnSequences,this.returnState=e.returnState==null?!1:e.returnState,this.goBackwards=e.goBackwards==null?!1:e.goBackwards,this._stateful=e.stateful==null?!1:e.stateful,this.unroll=e.unroll==null?!1:e.unroll,this.supportsMasking=!0,this.inputSpec=[new EE({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){return this.states_==null?bT(0,Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1).map(e=>null):this.states_}setStates(e){this.states_=e}computeOutputShape(e){_E(e)&&(e=e[0]),e=e;let t=this.cell.stateSize;Array.isArray(t)||(t=[t]);let n=t[0],r;if(r=this.returnSequences?[e[0],e[1],n]:[e[0],n],this.returnState){let n=[];for(let r of t)n.push([e[0],r]);return[r].concat(n)}else return r}computeMask(e,t){return z(()=>{Array.isArray(t)&&(t=t[0]);let e=this.returnSequences?t:null;if(this.returnState){let t=this.states.map(e=>null);return[e].concat(t)}else return e})}get states(){if(this.states_==null){let e=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,t=[];for(let n=0;n<e;++n)t.push(null);return t}else return this.states_}set states(e){this.states_=e}build(e){if(this.numConstants!=null)throw new ww(`Constants support is not implemented in RNN yet.`);_E(e)&&(e=e[0]),e=e;let t=this.stateful?e[0]:null,n=e.slice(2);this.inputSpec[0]=new EE({shape:[t,null,...n]});let r=[e[0]].concat(e.slice(2));this.cell.build(r);let i;if(i=Array.isArray(this.cell.stateSize)?this.cell.stateSize:[this.cell.stateSize],this.stateSpec!=null){if(!Ia(this.stateSpec.map(e=>e.shape[e.shape.length-1]),i))throw new J(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=i.map(e=>new EE({shape:[null,e]}));this.stateful&&this.resetStates()}resetStates(e,t=!1){z(()=>{if(!this.stateful)throw new Sw(`Cannot call resetStates() on an RNN Layer that is not stateful.`);let n=this.inputSpec[0].shape[0];if(n==null)throw new J("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(e=>Lg([n,e])):this.states_=[Lg([n,this.cell.stateSize])];else if(e==null)ld(this.states_),this.keptStates!=null&&(ld(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(e=>Lg([n,e])):this.states_[0]=Lg([n,this.cell.stateSize]);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new J(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t===!0?this.keptStates.push(this.states_.slice()):ld(this.states_);for(let t=0;t<this.states_.length;++t){let r=e[t],i=[n,Array.isArray(this.cell.stateSize)?this.cell.stateSize[t]:this.cell.stateSize];if(!Ia(r.shape,i))throw new J(`State ${t} is incompatible with layer ${this.name}: expected shape=${i}, received shape=${r.shape}`);this.states_[t]=r}}this.states_=this.states_.map(e=>ud(e.clone()))})}apply(e,t){let n=t==null?null:t.initialState,r=t==null?null:t.constants;t??={};let i=Zk(e,n,r,this.numConstants);e=i.inputs,n=i.initialState,r=i.constants;let a=[],o=[];if(n!=null){t.initialState=n,a=a.concat(n),this.stateSpec=[];for(let e of n)this.stateSpec.push(new EE({shape:e.shape}));o=o.concat(this.stateSpec)}if(r!=null&&(t.constants=r,a=a.concat(r),this.numConstants=r.length),a[0]instanceof DE){let n=[e].concat(a),r=this.inputSpec.concat(o),i=this.inputSpec;this.inputSpec=r;let s=super.apply(n,t);return this.inputSpec=i,s}else return super.apply(e,t)}call(e,t){return z(()=>{let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;e=Y(e),i??=this.stateful?this.states_:this.getInitialState(e);let a=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(i.length!==a)throw new J(`RNN Layer has ${a} state(s) but was passed ${i.length} initial state(s).`);this.unroll&&console.warn(`Ignoring unroll = true for RNN layer, due to imperative backend.`);let o={training:r},s=Qk((e,t)=>{let n=this.cell.call([e].concat(t),o);return[n[0],n.slice(1)]},e,i,this.goBackwards,n,null,this.unroll,this.returnSequences),c=s[0],l=s[1],u=s[2];this.stateful&&this.resetStates(u,r);let d=this.returnSequences?l:c;return this.returnState?[d].concat(u):d})}getInitialState(e){return z(()=>{let t=Lg(e.shape);return t=G(t,[1,2]),t=TT(t),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(e=>e>1?PT(t,[1,e]):t):this.cell.stateSize>1?[PT(t,[1,this.cell.stateSize])]:[t]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(e)}getConfig(){let t=super.getConfig(),n={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(n.numConstants=this.numConstants);let r=this.cell.getConfig();return this.getClassName()===e.className&&(n.cell={className:this.cell.getClassName(),config:r}),Object.assign(Object.assign(Object.assign({},r),t),n)}static fromConfig(e,t,n={}){let r=t.cell,i=gD(r,n);return new e(Object.assign(t,{cell:i}))}};$k.className=`RNN`,q($k);var eA=class extends jE{},tA=class extends eA{constructor(e){super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,this.units=e.units,Ww(this.units,`units`),this.activation=gk(e.activation==null?this.DEFAULT_ACTIVATION:e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=gE(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=gE(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=gE(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Ck(e.kernelRegularizer),this.recurrentRegularizer=Ck(e.recurrentRegularizer),this.biasRegularizer=Ck(e.biasRegularizer),this.kernelConstraint=iD(e.kernelConstraint),this.recurrentConstraint=iD(e.recurrentConstraint),this.biasConstraint=iD(e.biasConstraint),this.dropout=vT([1,yT([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=vT([1,yT([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=yE(e),this.kernel=this.addWeight(`kernel`,[e[e.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight(`bias`,[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return z(()=>{if(e=e,e.length!==2)throw new J(`SimpleRNNCell expects 2 input Tensors, got ${e.length}.`);let n=e[1];e=e[0];let r=t.training==null?!1:t.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=cA({ones:()=>Qg(e),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=cA({ones:()=>Qg(n),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));let i,a=this.dropoutMask,o=this.recurrentDropoutMask;i=IT(a==null?e:U(e,a),this.kernel.read()),this.bias!=null&&(i=BT(i,this.bias.read())),o!=null&&(n=U(n,o));let s=V(i,IT(n,this.recurrentKernel.read()));return this.activation!=null&&(s=this.activation.apply(s)),[s,s]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:mk(this.activation),useBias:this.useBias,kernelInitializer:hE(this.kernelInitializer),recurrentInitializer:hE(this.recurrentInitializer),biasInitializer:hE(this.biasInitializer),kernelRegularizer:xk(this.kernelRegularizer),recurrentRegularizer:xk(this.recurrentRegularizer),biasRegularizer:xk(this.biasRegularizer),activityRegularizer:xk(this.activityRegularizer),kernelConstraint:nD(this.kernelConstraint),recurrentConstraint:nD(this.recurrentConstraint),biasConstraint:nD(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},e),t)}};tA.className=`SimpleRNNCell`,q(tA);var nA=class extends $k{constructor(e){e.cell=new tA(e),super(e)}call(e,t){return z(()=>{this.cell.dropoutMask!=null&&(ld(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(ld(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return new e(t)}};nA.className=`SimpleRNN`,q(nA);var rA=class extends eA{constructor(e){if(super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_RECURRENT_ACTIVATION=`hardSigmoid`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.resetAfter)throw new J(`GRUCell does not support reset_after parameter set to true.`);this.units=e.units,Ww(this.units,`units`),this.activation=gk(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=gk(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=gE(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=gE(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=gE(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Ck(e.kernelRegularizer),this.recurrentRegularizer=Ck(e.recurrentRegularizer),this.biasRegularizer=Ck(e.biasRegularizer),this.kernelConstraint=iD(e.kernelConstraint),this.recurrentConstraint=iD(e.recurrentConstraint),this.biasConstraint=iD(e.biasConstraint),this.dropout=vT([1,yT([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=vT([1,yT([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=yE(e);let t=e[e.length-1];this.kernel=this.addWeight(`kernel`,[t,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight(`bias`,[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return z(()=>{if(e=e,e.length!==2)throw new J(`GRUCell expects 2 input Tensors (inputs, h, c), got ${e.length}.`);let n=t.training==null?!1:t.training,r=e[1];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=cA({ones:()=>Qg(e),rate:this.dropout,training:n,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=cA({ones:()=>Qg(r),rate:this.recurrentDropout,training:n,count:3,dropoutFunc:this.dropoutFunc}));let i=this.dropoutMask,a=this.recurrentDropoutMask,o,s,c;0<this.dropout&&this.dropout<1&&(e=U(e,i[0]));let l=IT(e,this.kernel.read());this.useBias&&(l=BT(l,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=U(r,a[0]));let u=this.recurrentKernel.read(),[d,f]=pv(u,[2*this.units,this.units],u.rank-1),p=IT(r,d),[m,h,g]=pv(l,3,l.rank-1),[_,v]=pv(p,2,p.rank-1);o=this.recurrentActivation.apply(V(m,_)),s=this.recurrentActivation.apply(V(h,v));let y=IT(U(s,r),f);c=this.activation.apply(V(g,y));let b=V(U(o,r),U(V(1,dg(o)),c));return[b,b]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:mk(this.activation),recurrentActivation:mk(this.recurrentActivation),useBias:this.useBias,kernelInitializer:hE(this.kernelInitializer),recurrentInitializer:hE(this.recurrentInitializer),biasInitializer:hE(this.biasInitializer),kernelRegularizer:xk(this.kernelRegularizer),recurrentRegularizer:xk(this.recurrentRegularizer),biasRegularizer:xk(this.biasRegularizer),activityRegularizer:xk(this.activityRegularizer),kernelConstraint:nD(this.kernelConstraint),recurrentConstraint:nD(this.recurrentConstraint),biasConstraint:nD(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},e),t)}};rA.className=`GRUCell`,q(rA);var iA=class extends $k{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new rA(e),super(e)}call(e,t){return z(()=>{this.cell.dropoutMask!=null&&(ld(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(ld(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}};iA.className=`GRU`,q(iA);var aA=class extends eA{constructor(e){super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_RECURRENT_ACTIVATION=`hardSigmoid`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,this.units=e.units,Ww(this.units,`units`),this.activation=gk(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=gk(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=gE(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=gE(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=gE(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=e.unitForgetBias,this.kernelRegularizer=Ck(e.kernelRegularizer),this.recurrentRegularizer=Ck(e.recurrentRegularizer),this.biasRegularizer=Ck(e.biasRegularizer),this.kernelConstraint=iD(e.kernelConstraint),this.recurrentConstraint=iD(e.recurrentConstraint),this.biasConstraint=iD(e.biasConstraint),this.dropout=vT([1,yT([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=vT([1,yT([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){var t;e=yE(e);let n=e[e.length-1];this.kernel=this.addWeight(`kernel`,[n,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let r;if(this.useBias){if(this.unitForgetBias){let e=this.biasInitializer,n=this.units;r=new(t=class extends XT{apply(t,r){let i=e.apply([n]),a=new QT().apply([n]),o=e.apply([n*2]);return NT(NT(i,a),o)}},t.className=`CustomInit`,t)}else r=this.biasInitializer;this.bias=this.addWeight(`bias`,[this.units*4],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(e,t){return z(()=>{let n=t.training==null?!1:t.training;if(e=e,e.length!==3)throw new J(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let r=e[1],i=e[2];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=cA({ones:()=>Qg(e),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=cA({ones:()=>Qg(r),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let a=this.dropoutMask,o=this.recurrentDropoutMask,s,c,l,u;0<this.dropout&&this.dropout<1&&(e=U(e,a[0]));let d=IT(e,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=U(r,o[0])),d=V(d,IT(r,this.recurrentKernel.read())),this.useBias&&(d=BT(d,this.bias.read()));let[f,p,m,h]=pv(d,4,d.rank-1);s=this.recurrentActivation.apply(f),c=this.recurrentActivation.apply(p),l=V(U(c,i),U(s,this.activation.apply(m))),u=this.recurrentActivation.apply(h);let g=U(u,this.activation.apply(l));return[g,g,l]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:mk(this.activation),recurrentActivation:mk(this.recurrentActivation),useBias:this.useBias,kernelInitializer:hE(this.kernelInitializer),recurrentInitializer:hE(this.recurrentInitializer),biasInitializer:hE(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:xk(this.kernelRegularizer),recurrentRegularizer:xk(this.recurrentRegularizer),biasRegularizer:xk(this.biasRegularizer),activityRegularizer:xk(this.activityRegularizer),kernelConstraint:nD(this.kernelConstraint),recurrentConstraint:nD(this.recurrentConstraint),biasConstraint:nD(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},e),t)}};aA.className=`LSTMCell`,q(aA);var oA=class extends $k{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new aA(e),super(e)}call(e,t){return z(()=>{this.cell.dropoutMask!=null&&(ld(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(ld(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}};oA.className=`LSTM`,q(oA);var sA=class extends eA{constructor(e){super(e),this.cells=e.cells}get stateSize(){let e=[];for(let t of this.cells.slice().reverse())Array.isArray(t.stateSize)?e.push(...t.stateSize):e.push(t.stateSize);return e}call(e,t){return z(()=>{e=e;let n=e.slice(1),r=[];for(let e of this.cells.slice().reverse())Array.isArray(e.stateSize)?r.push(n.splice(0,e.stateSize.length)):r.push(n.splice(0,1));r.reverse();let i=[],a;for(let o=0;o<this.cells.length;++o){let s=this.cells[o];n=r[o],a=o===0?[e[0]].concat(n):[a[0]].concat(n),a=s.call(a,t),i.push(a.slice(1))}n=[];for(let e of i.slice().reverse())n.push(...e);return[a[0]].concat(n)})}build(e){_E(e)&&(e=e[0]),e=e;let t;this.cells.forEach((n,r)=>{uT(`RNNCell_${r}`,()=>{n.build(e),t=Array.isArray(n.stateSize)?n.stateSize[0]:n.stateSize,e=[e[0],t]})}),this.built=!0}getConfig(){let e=super.getConfig(),t={cells:this.cells.map(e=>({className:e.getClassName(),config:e.getConfig()}))};return Object.assign(Object.assign({},e),t)}static fromConfig(e,t,n={}){let r=[];for(let e of t.cells)r.push(gD(e,n));return new e({cells:r})}get trainableWeights(){if(!this.trainable)return[];let e=[];for(let t of this.cells)e.push(...t.trainableWeights);return e}get nonTrainableWeights(){let e=[];for(let t of this.cells)e.push(...t.nonTrainableWeights);if(!this.trainable){let t=[];for(let e of this.cells)t.push(...e.trainableWeights);return t.concat(e)}return e}getWeights(){let e=[];for(let t of this.cells)e.push(...t.weights);return wE(e)}setWeights(e){let t=[];for(let n of this.cells){let r=n.weights.length,i=e.splice(r);for(let e=0;e<n.weights.length;++e)t.push([n.weights[e],i[e]])}TE(t)}};sA.className=`StackedRNNCells`,q(sA);function cA(e){let{ones:t,rate:n,training:r=!1,count:i=1,dropoutFunc:a}=e,o=()=>a==null?UT(t(),n):a(t(),n),s=()=>GT(o,t,r);return!i||i<=1?ud(s().clone()):Array(i).fill(void 0).map(s).map(e=>ud(e.clone()))}var lA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},uA=class extends $k{constructor(e){if(e.unroll)throw new ww(`Unrolling is not possible with convolutional RNNs.`);if(Array.isArray(e.cell))throw new ww(`It is not possible at the moment to stack convolutional cells.`);super(e),this.inputSpec=[new EE({ndim:5})]}call(e,t){return z(()=>{if(this.cell.dropoutMask!=null&&(ld(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(ld(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),t&&t.constants)throw new J(`ConvRNN2D cell does not support constants`);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}computeOutputShape(e){let t=this.computeSingleOutputShape(e);return this.returnSequences||(t=[t[0],...t.slice(2)]),this.returnState&&(t=[t,...[,,].fill([e[0],...t.slice(-3)])]),t}getInitialState(e){return z(()=>{let{stateSize:t}=this.cell,n=e.shape,r=this.computeSingleOutputShape(n),i=Lg([r[0],...r.slice(2)]);return Array.isArray(t)?Array(t.length).fill(i):[i]})}resetStates(e,t=!1){z(()=>{if(!this.stateful)throw new Sw(`Cannot call resetStates() on an RNN Layer that is not stateful.`);let n=this.inputSpec[0].shape,r=this.computeSingleOutputShape(n),i=[r[0],...r.slice(2)];if(n[0]==null)throw new J("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Lg(i)):this.states_=[Lg(i)];else if(e==null)ld(this.states_),this.keptStates!=null&&(ld(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Lg(i)):this.states_[0]=Lg(i);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new J(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t?this.keptStates.push(this.states_.slice()):ld(this.states_);for(let t=0;t<this.states_.length;++t){let n=e[t],r=i;if(!Ia(n.shape,r))throw new J(`State ${t} is incompatible with layer ${this.name}: expected shape=${r}, received shape=${n.shape}`);this.states_[t]=n}}this.states_=this.states_.map(e=>ud(e.clone()))})}computeSingleOutputShape(e){let{dataFormat:t,filters:n,kernelSize:r,padding:i,strides:a,dilationRate:o}=this.cell,s=t===`channelsFirst`,c=e[s?3:2],l=e[s?4:3],u=jk(c,r[0],i,a[0],o[0]),d=jk(l,r[1],i,a[1],o[1]);return[...e.slice(0,2),...s?[n,u,d]:[u,d,n]]}};uA.className=`ConvRNN2D`;var dA=class extends aA{constructor(e){let{filters:t,kernelSize:n,strides:r,padding:i,dataFormat:a,dilationRate:o}=e;super(Object.assign(Object.assign({},e),{units:t})),this.filters=t,Ww(this.filters,`filters`),this.kernelSize=Ak(n,2,`kernelSize`),this.kernelSize.forEach(e=>Ww(e,`kernelSize`)),this.strides=Ak(r||1,2,`strides`),this.strides.forEach(e=>Ww(e,`strides`)),this.padding=i||`valid`,oT(this.padding),this.dataFormat=a||`channelsLast`,iT(this.dataFormat),this.dilationRate=Ak(o||1,2,`dilationRate`),this.dilationRate.forEach(e=>Ww(e,`dilationRate`))}build(e){var t;e=yE(e);let n=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[n]==null)throw new J(`The channel dimension of the input should be defined. Found ${e[n]}`);let r=e[n],i=this.kernelSize.concat([r,this.filters*4]);this.kernel=this.addWeight(`kernel`,i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);let a=this.kernelSize.concat([this.filters,this.filters*4]);if(this.recurrentKernel=this.addWeight(`recurrent_kernel`,a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let e;if(this.unitForgetBias){let n=this.biasInitializer,r=this.filters;e=new(t=class extends XT{apply(e,t){return MT([n.apply([r]),Rg([r]),n.apply([r*2])])}},t.className=`CustomInit`,t)}else e=this.biasInitializer;this.bias=this.addWeight(`bias`,[this.filters*4],null,e,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(e,t){return z(()=>{if(e.length!==3)throw new J(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let n=t.training||!1,r=e[0],i=e[1],a=e[2];0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=cA({ones:()=>Qg(r),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let o=this.dropoutMask,s=(e,t,n)=>!t||!t[n]?e:U(t[n],e),c=s(r,o,0),l=s(r,o,1),u=s(r,o,2),d=s(r,o,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=cA({ones:()=>Qg(i),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let f=this.recurrentDropoutMask,p=s(i,f,0),m=s(i,f,1),h=s(i,f,2),g=s(i,f,3),[_,v,y,b]=pv(this.kernel.read(),4,3),[x,S,C,w]=this.useBias?pv(this.bias.read(),4):[null,null,null,null];c=this.inputConv(c,_,x,this.padding),l=this.inputConv(l,v,S,this.padding),u=this.inputConv(u,y,C,this.padding),d=this.inputConv(d,b,w,this.padding);let[T,E,D,O]=pv(this.recurrentKernel.read(),4,3);p=this.recurrentConv(p,T),m=this.recurrentConv(m,E),h=this.recurrentConv(h,D),g=this.recurrentConv(g,O);let k=this.recurrentActivation.apply(V(c,p)),ee=V(U(this.recurrentActivation.apply(V(l,m)),a),U(k,this.activation.apply(V(u,h)))),A=U(this.recurrentActivation.apply(V(d,g)),this.activation.apply(ee));return[A,A,ee]})}getConfig(){let e=super.getConfig(),{units:t}=e,n=lA(e,[`units`]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},n),r)}inputConv(e,t,n,r){let i=am(e,t,this.strides,r||`valid`,this.dataFormat===`channelsFirst`?`NCHW`:`NHWC`,this.dilationRate);return n?BT(i,n,this.dataFormat):i}recurrentConv(e,t){return am(e,t,1,`same`,this.dataFormat===`channelsFirst`?`NCHW`:`NHWC`)}};dA.className=`ConvLSTM2DCell`,q(dA);var fA=class extends uA{constructor(e){let t=new dA(e);super(Object.assign(Object.assign({},e),{cell:t}))}static fromConfig(e,t){return new e(t)}};fA.className=`ConvLSTM2D`,q(fA);var pA=class extends jE{constructor(e){super(e),this.rate=Math.max(Math.min(e.rate,1),0),this.noiseShape=e.noiseShape,this.seed=e.seed,this.supportsMasking=!0}getNoiseShape(e){if(this.noiseShape==null)return this.noiseShape;let t=e.shape,n=[];for(let e=0;e<this.noiseShape.length;++e)n.push(this.noiseShape[e]==null?t[e]:this.noiseShape[e]);return n}call(e,t){return z(()=>{this.invokeCallHook(e,t);let n=Y(e);if(0<this.rate&&this.rate<1){let e=t.training==null?!1:t.training,r=this.getNoiseShape(n);return GT(()=>UT(n,this.rate,r,this.seed),()=>n,e)}return e})}getConfig(){let e={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},t=super.getConfig();return Object.assign(e,t),e}dispose(){return super.dispose()}};pA.className=`Dropout`,q(pA);var mA=class extends pA{constructor(e){super(e),this.inputSpec=[{ndim:3}]}getNoiseShape(e){let t=e.shape;return[t[0],1,t[2]]}};mA.className=`SpatialDropout1D`,q(mA);var hA=class extends jE{constructor(e){if(super(e),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.batchInputShape==null&&e.inputShape==null&&e.inputDim!=null){let t=null;e.batchSize!=null&&(t=e.batchSize),this.batchInputShape=[t,e.inputDim]}this.units=e.units,Ww(this.units,`units`),this.activation=gk(e.activation),e.useBias!=null&&(this.useBias=e.useBias),this.kernelInitializer=gE(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=gE(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=iD(e.kernelConstraint),this.biasConstraint=iD(e.biasConstraint),this.kernelRegularizer=Ck(e.kernelRegularizer),this.biasRegularizer=Ck(e.biasRegularizer),this.activityRegularizer=Ck(e.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(e){e=yE(e);let t=e[e.length-1];this.kernel??(this.kernel=this.addWeight(`kernel`,[t,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:t}}],this.built=!0}computeOutputShape(e){e=yE(e);let t=e.slice();return t[t.length-1]=this.units,t}call(e,t){return z(()=>{this.invokeCallHook(e,t);let n=Y(e),r=qw(this.activation.getClassName()),i;return r==null?(i=IT(n,this.kernel.read()),this.bias!=null&&(i=BT(i,this.bias.read())),this.activation!=null&&(i=this.activation.apply(i))):i=IT(n,this.kernel.read(),r,this.bias?this.bias.read():null),i})}getConfig(){let e={units:this.units,activation:mk(this.activation),useBias:this.useBias,kernelInitializer:hE(this.kernelInitializer),biasInitializer:hE(this.biasInitializer),kernelRegularizer:xk(this.kernelRegularizer),biasRegularizer:xk(this.biasRegularizer),activityRegularizer:xk(this.activityRegularizer),kernelConstraint:nD(this.kernelConstraint),biasConstraint:nD(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}};hA.className=`Dense`,q(hA);var gA=class extends jE{constructor(e){e||={},super(e),this.inputSpec=[{minNDim:3}],this.dataFormat=e.dataFormat}computeOutputShape(e){e=yE(e);for(let t of e.slice(1))if(t==null)throw new J(`The shape of the input to "Flatten" is not fully defined (got ${e.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[e[0],_T(e,1)]}call(e,t){return z(()=>{this.invokeCallHook(e,t);let n=Y(e);if(this.dataFormat===`channelsFirst`&&n.rank>1){let e=[0];for(let t=2;t<n.rank;++t)e.push(t);e.push(1),n=qv(n,e)}return OT(n)})}getConfig(){let e={};this.dataFormat!=null&&(e.dataFormat=this.dataFormat);let t=super.getConfig();return Object.assign(e,t),e}};gA.className=`Flatten`,q(gA);var _A=class extends jE{constructor(e){super(e),this.supportsMasking=!0,this.activation=gk(e.activation)}call(e,t){return z(()=>{this.invokeCallHook(e,t);let n=Y(e);return this.activation.apply(n)})}getConfig(){let e={activation:mk(this.activation)},t=super.getConfig();return Object.assign(e,t),e}};_A.className=`Activation`,q(_A);var vA=class extends jE{constructor(e){super(e),this.n=e.n,this.inputSpec=[{ndim:2}]}computeOutputShape(e){return[e[0],this.n,e[1]]}call(e,t){return z(()=>(e=Y(e),ET(e,this.n)))}getConfig(){let e={n:this.n},t=super.getConfig();return Object.assign(e,t),e}};vA.className=`RepeatVector`,q(vA);var yA=class extends jE{constructor(e){super(e),this.targetShape=e.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(e){return e<0||e==null}fixUnknownDimension(e,t){let n=`Total size of new array must be unchanged.`,r=t.slice(),i=1,a=null;for(let e=0;e<r.length;++e){let t=r[e];if(this.isUnknown(t))if(a===null)a=e;else throw new J(`Can only specifiy one unknown dimension.`);else i*=t}let o=_T(e);if(a!==null){if(i===0||o%i!==0)throw new J(n);r[a]=o/i}else if(o!==i)throw new J(n);return r}computeOutputShape(e){let t=!1;for(let n=0;n<e.length;++n)if(this.isUnknown(e[n])){t=!0;break}return t?e.slice(0,1).concat(this.targetShape):e.slice(0,1).concat(this.fixUnknownDimension(e.slice(1),this.targetShape))}call(e,t){return z(()=>{this.invokeCallHook(e,t);let n=Y(e),r=n.shape;return W(n,r.slice(0,1).concat(this.fixUnknownDimension(r.slice(1),this.targetShape)))})}getConfig(){let e={targetShape:this.targetShape},t=super.getConfig();return Object.assign(e,t),e}};yA.className=`Reshape`,q(yA);var bA=class extends jE{constructor(e){if(super(e),e.dims==null)throw Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(e.dims))throw Error(`Permute constructor requires \`dims\` to be an Array, but received ${e.dims} instead.`);let t=bT(1,e.dims.length+1);if(!Ia(e.dims.slice().sort(),t))throw Error("Invalid permutation `dims`: "+JSON.stringify(e.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=e.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new EE({ndim:this.dims.length+1})]}computeOutputShape(e){e=yE(e);let t=e.slice();return this.dims.forEach((n,r)=>{t[r+1]=e[n]}),t}call(e,t){return qv(Y(e),this.dimsIncludingBatch)}getConfig(){let e={dims:this.dims},t=super.getConfig();return Object.assign(e,t),e}};bA.className=`Permute`,q(bA);var xA=class extends jE{constructor(e){super(e??{}),this.supportsMasking=!0,e==null?this.maskValue=0:this.maskValue=e.maskValue==null?0:e.maskValue}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={maskValue:this.maskValue};return Object.assign(t,e),t}computeMask(e,t){return Ff(Jg(Y(e),this.maskValue),-1)}call(e,t){return z(()=>{this.invokeCallHook(e,t);let n=Y(e);return U(n,B(Ff(Jg(n,this.maskValue),-1,!0),n.dtype))})}};xA.className=`Masking`,q(xA);var SA=class extends jE{constructor(e){if(super(e),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER=`randomUniform`,e.batchInputShape==null&&e.inputShape==null){let t=null;e.batchSize!=null&&(t=e.batchSize),e.inputLength==null?this.batchInputShape=[t,null]:this.batchInputShape=[t].concat(jw(e.inputLength))}this.inputDim=e.inputDim,Ww(this.inputDim,`inputDim`),this.outputDim=e.outputDim,Ww(this.outputDim,`outputDim`),this.embeddingsInitializer=gE(e.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=Ck(e.embeddingsRegularizer),this.activityRegularizer=Ck(e.activityRegularizer),this.embeddingsConstraint=iD(e.embeddingsConstraint),this.maskZero=e.maskZero,this.supportsMasking=e.maskZero,this.inputLength=e.inputLength}build(e){this.embeddings=this.addWeight(`embeddings`,[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(e){}computeMask(e,t){return z(()=>this.maskZero?(e=Y(e),Jg(e,Hm(e))):null)}computeOutputShape(e){if(e=yE(e),this.inputLength==null)return[...e,this.outputDim];let t=jw(this.inputLength);if(t.length!==e.length-1)throw new J(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);{let n=0;for(let r=0;r<t.length;++r){let i=t[r],a=e[r+1];if(i!=null&&a!=null&&i!==a)throw new J(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);i??(t[n]=a),n++}}return[e[0],...t,this.outputDim]}call(e,t){return z(()=>{this.invokeCallHook(e,t);let n=Y(e);return n.dtype!==`int32`&&(n=wT(n,`int32`)),W(LT(this.embeddings.read(),W(n,[n.size])),yE(this.computeOutputShape(n.shape)))})}getConfig(){let e={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:hE(this.embeddingsInitializer),embeddingsRegularizer:xk(this.embeddingsRegularizer),activityRegularizer:xk(this.activityRegularizer),embeddingsConstraint:nD(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},t=super.getConfig();return Object.assign(e,t),e}};SA.className=`Embedding`,q(SA);var CA=class extends jE{constructor(e){super(e||{}),this.supportsMasking=!0}mergeFunction(e){throw new ww}computeElementwiseOpOutputShape(e,t){if(e==null||t==null)return null;if(e.length<t.length)return this.computeElementwiseOpOutputShape(t,e);if(t.length===0)return e;let n=e.slice(0,e.length-t.length);for(let r=0;r<t.length;++r){let i=e[e.length-t.length+r],a=t[r];if(i==null||a==null||i<0||a<0)n.push(null);else if(i===1)n.push(a);else if(a===1)n.push(i);else{if(i!==a)throw new J(`Operands could not be broadcast together with shapes `+JSON.stringify(e)+` `+JSON.stringify(t));n.push(i)}}return n}build(e){if(Array.isArray(e)&&!Array.isArray(e[0])&&(e=[yE(e)]),e=e,e.length<2)throw new J(`A merge layer should be called on an Array of at least 2 inputs. Got ${e.length} input(s).`);let t=[];for(let n of e)n!=null&&n[0]!==null&&t.push(n[0]);if(t=Bw(t),t.length>1)throw new J(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(e)}.`);let n=e[0]==null?null:e[0].slice(1);for(let t=1;t<e.length;++t){let r=e[t]==null?null:e[t].slice(1);n=this.computeElementwiseOpOutputShape(n,r)}let r=e.map(e=>e.length);e.indexOf(null)===-1&&Bw(r).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(e,t){return z(()=>{if(e=e,this.reshapeRequired){let t=[],n=e.map(e=>e.rank);if(n.indexOf(null)===-1){let r=yT(n);for(let n of e){let e=n.rank;for(let t=0;t<r-e;++t)n=TT(n,1);t.push(n)}return this.mergeFunction(t)}else{let n=!1;for(let r of e){let e=r.rank;if(e==null){let e=r.shape,i=e[0],a=e.slice(1).concat([i]),o=W(r,[i].concat(_T(e.slice(1))));o=qv(o,[1,0]),o=W(o,a),t.push(o),n=!0}else if(e>1){let i=bT(1,e).concat([0]);t.push(qv(r,i)),n=!0}else t.push(r)}let r=this.mergeFunction(t),i=r.rank;if(n){if(i==null){let e=r.shape,t=e[e.length-1],n=[t].concat(e.slice(0,e.length-1));r=W(qv(W(r,[-1,t]),[1,0]),n)}else if(i>1){let e=[i-1].concat(bT(0,i-1));r=qv(r,e)}}return r}}else return this.mergeFunction(e)})}computeOutputShape(e){e=e;let t;t=e[0]==null?null:e[0].slice(1);for(let n=1;n<e.length;++n){let r=e[n]==null?null:e[n].slice(1);t=this.computeElementwiseOpOutputShape(t,r)}let n=[];for(let t of e)t!=null&&t[0]!==null&&n.push(t[0]);return n=Bw(n),t=n.length===1?n.concat(t):[null].concat(t),t}computeMask(e,t){return z(()=>{if(t==null)return null;if(!Array.isArray(t))throw new J("`mask` should be an Array");if(!Array.isArray(e))throw new J("`inputs` should be an Array");if(t.length!==e.length)throw new J(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${e.length} vs ${t.length})`);if(t.every(e=>e==null))return null;t=t.map(e=>e==null?e:Dh(e,0));let n=t[0];for(let e=1;e<t.length-1;++e)n=Sg(n,t[e]);return n})}},wA=class extends CA{constructor(e){super(e)}mergeFunction(e){return z(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=V(t,e[n]);return t})}};wA.className=`Add`,q(wA);var TA=class extends CA{constructor(e){super(e)}mergeFunction(e){return z(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=U(t,e[n]);return t})}};TA.className=`Multiply`,q(TA);var EA=class extends CA{constructor(e){super(e)}mergeFunction(e){return z(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=V(t,e[n]);return U(1/e.length,t)})}};EA.className=`Average`,q(EA);var DA=class extends CA{constructor(e){super(e)}mergeFunction(e){return z(()=>{let t=e[0];for(let n=1;n<e.length;++n)t=Pg(t,e[n]);return t})}};DA.className=`Maximum`,q(DA);var OA=class extends CA{constructor(e){super(e)}mergeFunction(e){return z(()=>{let t=e[0];for(let n=1;n<e.length;++n)t=Bg(t,e[n]);return t})}};OA.className=`Minimum`,q(OA);var kA=class extends CA{constructor(e){super(e),this.DEFAULT_AXIS=-1,e??={},this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){if(!(Array.isArray(e)&&Array.isArray(e[0]))||e.length===1)throw new J("A `Concatenate` layer should be called on a list of at least 2 inputs");e=e;let t=!0;for(let n of e)if(n!=null){t=!1;break}if(t)return;let n=[];for(let t=0;t<e.length;++t){let r=e[t].slice();r.splice(this.axis,1);let i=!1;for(let e of n)if(Ia(e,r)){i=!0;break}i||n.push(r)}if(n.length>1)throw new J("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(e))}mergeFunction(e){return z(()=>MT(e,this.axis))}computeOutputShape(e){if(!(Array.isArray(e)&&Array.isArray(e[0])))throw new J("A `Concatenate` layer should be called on a list of inputs.");let t=e,n=t[0].slice(),r=this.axis<0?n.length+this.axis:this.axis;for(let e of t.slice(1)){if(n[r]==null||e[r]==null){n[r]=null;break}n[r]+=e[r]}return n}computeMask(e,t){if(t==null)return null;if(!Array.isArray(t))throw new J("`mask` should be an array for Concatenate");if(!Array.isArray(e))throw new J("`inputs` should be an array for Concatenate");if(t.length!==e.length)throw new J(`Mismatch in the length of mask (${t.length}) and the legnth of inputs (${e.length})`);return z(()=>{let n=!0;if(t.forEach(e=>{if(e!=null){n=!1;return}}),n)return null;let r=[];for(let n=0;n<e.length;++n)t[n]==null?r.push(B(Qg(e[n]),`bool`)):t[n].rank<e[n].rank?r.push(Dh(t[n],-1)):r.push(t[n]);return Nf(xp(r,this.axis),-1,!1)})}getConfig(){let e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}};kA.className=`Concatenate`,q(kA);function AA(e,t){for(;e<0;)e+=t;return e}function jA(e,t,n){if(e.shape.length>3||t.shape.length>3)throw new ww(`batchDot is not implemented for tensors of 4D or higher rank yet`);if(j(e.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${e.shape.length}`),j(e.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof n==`number`&&(n=[n,n]),e.dtype===`complex64`||t.dtype===`complex64`)throw new ww(`batchDot is not implemented for complex64-type Tensors yet.`);let r=e.shape.length,i=t.shape.length;n??=[r-1,i-2];let a=n;return z(()=>{let n;if(r>i){n=r-i;let e=[];for(let t=0;t<n;++t)e.push(1);t=W(t,t.shape.concat(e))}else if(i>r){n=i-r;let t=[];for(let e=0;e<n;++e)t.push(1);e=W(e,e.shape.concat(t))}else n=0;let o;if(e.shape.length===2&&t.shape.length===2)o=a[0]===a[1]?G(U(e,t),a[0]):G(U(qv(e,[1,0]),t),a[1]);else{let n=a[0]!==e.shape.length-1,r=a[1]===t.shape.length-1;o=Cp(e,t,n,r)}if(n>0){let e;e=r>i?r+i-3:r-1;let t=[];for(let r=e;r<e+n;++r)t.push(r);o=yv(o,t)}return o.shape.length===1&&(o=Dh(o,1)),o})}var MA=class extends CA{constructor(e){super(e),this.axes=e.axes,this.normalize=e.normalize==null?!1:e.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){j(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let t=e[0],n=e[1];if(t.length>3||n.length>3)throw new ww(`Dot layer does not support tensors of 4D or higher rank yet.`);let r=this.interpretAxes(t,n);if(t[r[0]]!==n[r[1]])throw new J(`Dimension incompatibility: ${t[r[0]]} !== ${n[r[1]]}`)}mergeFunction(e){if(e.length!==2)throw new J(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${e.length} input(s).`);let t=e[0],n=e[1],r;return r=Array.isArray(this.axes)?this.axes.map((t,n)=>AA(t,e[n].shape.length)):[AA(this.axes,t.shape.length),AA(this.axes,n.shape.length)],this.normalize&&(t=_D(t,r[0]),n=_D(n,r[1])),jA(t,n,r)}interpretAxes(e,t){let n;return n=Array.isArray(this.axes)?this.axes:[AA(this.axes,e.length),AA(this.axes,t.length)],n}computeOutputShape(e){j(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let t=e[0].slice(),n=e[1].slice();if(t.length>3||n.length>3)throw new ww(`Dot layer does not support tensors of 4D or higher rank yet.`);let r=this.interpretAxes(t,n);t.splice(r[0],1),n.splice(r[1],1),n.splice(0,1);let i=t.concat(n);return i.length===1&&i.push(1),i}computeMask(e,t){return null}getConfig(){let e={axes:this.axes,normalize:this.normalize},t=super.getConfig();return Object.assign(e,t),e}};MA.className=`Dot`,q(MA);var NA=class extends jE{constructor(e){super(e),this.supportsMasking=!0,this.stddev=e.stddev}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={stddev:this.stddev};return Object.assign(t,e),t}call(e,t){return z(()=>{this.invokeCallHook(e,t);let n=Y(e);return GT(()=>V(FT(n.shape,0,this.stddev),n),()=>n,t.training||!1)})}};NA.className=`GaussianNoise`,q(NA);var PA=class extends jE{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return z(()=>{this.invokeCallHook(e,t);let n=Y(e);return this.rate>0&&this.rate<1?GT(()=>{let e=Math.sqrt(this.rate/(1-this.rate));return U(n,FT(n.shape,1,e))},()=>n,t.training||!1):n})}};PA.className=`GaussianDropout`,q(PA);var FA=class extends jE{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate,this.noiseShape=e.noiseShape}_getNoiseShape(e){return this.noiseShape||Y(e).shape}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return z(()=>{if(this.rate<1&&this.rate>0){let n=this._getNoiseShape(e);return GT(()=>{let t=Y(e),r=-1.6732632423543772*1.0507009873554805,i=Vh(w_(n),this.rate);i=wT(i,`float32`);let a=((1-this.rate)*(1+this.rate*r**2))**-.5,o=-a*r*this.rate;return V(U(V(U(t,i),U(V(i,-1),r)),a),o)},()=>Y(e),t.training||!1)}return e})}};FA.className=`AlphaDropout`,q(FA);function IA(e,t,n,r,i,a=.001){let o;if(e.rank===2)o=Ip(e,t,n,r,i,a);else if(e.rank===3)o=Rp(e,t,n,r,i,a);else if(e.rank===4)o=Bp(e,t,n,r,i,a);else throw new ww(`batchNormalization is not implemented for array of rank ${e.rank} yet`);return o}function LA(e,t,n,r,i=.001){return z(()=>{let a=Kg(e,r),o=a.mean,s=a.variance;return[IA(e,o,s,n,t,i),o,s]})}function RA(e,t,n,r,i=.001){return z(()=>{let a=Kg(e,r),o=a.mean,s=a.variance,c=[];for(let t of bT(0,e.rank))r.indexOf(t)===-1?c.push(e.shape[t]):c.push(1);let l=W(o,c),u=W(s,c),d=t==null?null:W(t,c);return[IA(e,l,u,n==null?null:W(n,c),d,i),o,s]})}function zA(e,t,n,r,i=.001){return Ia(r.slice().sort(),bT(0,e.rank-1))?LA(e,t,n,r,i):RA(e,t,n,r,i)}var BA=class extends jE{constructor(e){e??={},super(e),this.supportsMasking=!0,this.axis=e.axis==null?-1:e.axis,this.momentum=e.momentum==null?.99:e.momentum,this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null?!0:e.center,this.scale=e.scale==null?!0:e.scale,this.betaInitializer=gE(e.betaInitializer||`zeros`),this.gammaInitializer=gE(e.gammaInitializer||`ones`),this.movingMeanInitializer=gE(e.movingMeanInitializer||`zeros`),this.movingVarianceInitializer=gE(e.movingVarianceInitializer||`ones`),this.betaConstraint=iD(e.betaConstraint),this.gammaConstraint=iD(e.gammaConstraint),this.betaRegularizer=Ck(e.betaRegularizer),this.gammaRegularizer=Ck(e.gammaRegularizer)}build(e){e=yE(e);let t=this.axis>=0?this.axis:this.axis+e.length,n=e[t];if(n==null)throw new J(`Axis ${t} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(e)}.`);this.inputSpec=[new EE({ndim:e.length,axes:{[t]:n}})];let r=[n];this.scale&&(this.gamma=this.addWeight(`gamma`,r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight(`beta`,r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight(`moving_mean`,r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight(`moving_variance`,r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(e,t){return z(()=>{let n=t.training==null?!1:t.training,r=Y(e),i=r.shape,a=i.length,o=bT(0,a),s=this.axis>=0?this.axis:this.axis+a;o.splice(s,1);let c=Dw(1,a);c[s]=i[s];let l=o.slice();l.sort();let u=!Ia(l,bT(0,a).slice(0,a-1)),d=()=>u?IA(r,W(this.movingMean.read(),c),W(this.movingVariance.read(),c),this.center?W(this.beta.read(),c):null,this.scale?W(this.gamma.read(),c):null,this.epsilon):IA(r,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon);if(!n)return d();let[f,p,m]=zA(r,this.gamma.read(),this.beta.read(),o,this.epsilon),h=(e,t,n)=>{z(()=>{let r=1-n,i=e.read(),a=U(K(i,t),r);e.write(K(i,a))})};return h(this.movingMean,p,this.momentum),h(this.movingVariance,m,this.momentum),f})}getConfig(){let e={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:hE(this.betaInitializer),gammaInitializer:hE(this.gammaInitializer),movingMeanInitializer:hE(this.movingMeanInitializer),movingVarianceInitializer:hE(this.movingVarianceInitializer),betaRegularizer:xk(this.betaRegularizer),gammaRegularizer:xk(this.gammaRegularizer),betaConstraint:nD(this.betaConstraint),gammaConstraint:nD(this.gammaConstraint)},t=super.getConfig();return Object.assign(e,t),e}};BA.className=`BatchNormalization`,q(BA);var VA=class extends jE{constructor(e){if(e??={},super(e),this.axis=e.axis==null?-1:e.axis,typeof this.axis==`number`){if(!Number.isInteger(this.axis))throw Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(let e of this.axis)if(!Number.isInteger(e))throw Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null?!0:e.center,this.scale=e.scale==null?!0:e.scale,this.betaInitializer=gE(e.betaInitializer||`zeros`),this.gammaInitializer=gE(e.gammaInitializer||`ones`),this.betaRegularizer=Ck(e.betaRegularizer),this.gammaRegularizer=Ck(e.gammaRegularizer),this.supportsMasking=!0}build(e){e=yE(e);let t=e.length;typeof this.axis==`number`&&(this.axis=[this.axis]);for(let e=0;e<this.axis.length;++e)this.axis[e]<0&&(this.axis[e]+=t);for(let e of this.axis)if(e<0||e>=t)throw Error(`Invalid axis: ${e}`);if(this.axis.length!==Bw(this.axis).length)throw Error(`Found duplicate axes in: ${this.axis}`);let n=this.axis.map(t=>e[t]);this.scale?this.gamma=this.addWeight(`gamma`,n,`float32`,this.gammaInitializer,this.gammaRegularizer,!0):this.gamma=null,this.center?this.beta=this.addWeight(`beta`,n,`float32`,this.betaInitializer,this.betaRegularizer,!0):this.beta=null,this.built=!0}call(e,t){let n=Y(e),r=n.shape,i=r.length;return z(()=>{let{mean:e,variance:t}=Kg(n,this.axis,!0),a=Dw(1,i);for(let e of this.axis)a[e]=r[e];let o=e=>e!=null&&e.shape.length!==i?W(e,a):e,s=this.scale?o(this.gamma.read()):null,c=this.center?o(this.beta.read()):null,l=[],u=[];for(let e=0;e<i;++e)this.axis.indexOf(e)===-1?(l.push(1),u.push(r[e])):(l.push(r[e]),u.push(1));return e=jh(e,l),t=jh(t,l),s!=null&&(s=jh(s,u)),c!=null&&(c=jh(c,u)),IA(n,e,t,c,s,this.epsilon)})}getConfig(){let e={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:hE(this.betaInitializer),gammaInitializer:hE(this.gammaInitializer),betaRegularizer:xk(this.betaRegularizer),gammaRegularizer:xk(this.gammaRegularizer)},t=super.getConfig();return Object.assign(e,t),e}};VA.className=`LayerNormalization`,q(VA);function HA(e,t,n){return z(()=>{if(e.rank!==4)throw new J(`temporalPadding expects input tensor to be 4-D, but received a ${e.rank}-D tensor.`);if(t??=[[1,1],[1,1]],t.length!==2||t[0].length!==2||t[1].length!==2)throw new J("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(n??=CT(),n!==`channelsLast`&&n!==`channelsFirst`)throw new J(`Unknown data format: ${n}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let r;return r=n===`channelsFirst`?[[0,0],[0,0],t[0],t[1]]:[[0,0],t[0],t[1],[0,0]],e_(e,r)})}var UA=class extends jE{constructor(e){if(e??={},super(e),this.dataFormat=e.dataFormat==null?CT():e.dataFormat,e.padding==null)this.padding=[[1,1],[1,1]];else if(typeof e.padding==`number`)this.padding=[[e.padding,e.padding],[e.padding,e.padding]];else{if(e.padding=e.padding,e.padding.length!==2)throw new J(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${e.padding.length} array.`);let t,n;if(typeof e.padding[0]==`number`)t=[e.padding[0],e.padding[0]],n=[e.padding[1],e.padding[1]];else{if(e.padding=e.padding,e.padding[0].length!==2)throw new J(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${e.padding[0].length} array.`);if(t=e.padding[0],e.padding[1].length!==2)throw new J(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${e.padding[1].length} array.`);n=e.padding[1]}this.padding=[t,n]}this.inputSpec=[new EE({ndim:4})]}computeOutputShape(e){e=yE(e);let t,n;return this.dataFormat===`channelsFirst`?(t=e[2]!=null&&e[2]>=0?e[2]+this.padding[0][0]+this.padding[0][1]:null,n=e[3]!=null&&e[3]>=0?e[3]+this.padding[1][0]+this.padding[1][1]:null,[e[0],e[1],t,n]):(t=e[1]!=null&&e[1]>=0?e[1]+this.padding[0][0]+this.padding[0][1]:null,n=e[2]!=null&&e[2]>=0?e[2]+this.padding[1][0]+this.padding[1][1]:null,[e[0],t,n,e[3]])}call(e,t){return z(()=>HA(Y(e),this.padding,this.dataFormat))}getConfig(){let e={padding:this.padding,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}};UA.className=`ZeroPadding2D`,q(UA);function WA(e,t,n,r,i,a){return z(()=>{iT(i),sT(a),oT(r),n??=[1,1],r??=`valid`,i??=CT(),a??=`max`,e=Nk(e,i);let o,s=r===`same`?`same`:`valid`;return o=a===`max`?Ag(e,t,n,s):_p(e,t,n,s),i===`channelsFirst`&&(o=qv(o,[0,3,1,2])),o})}function GA(e,t,n,r,i,a){return z(()=>{iT(i),sT(a),oT(r),n??=[1,1,1],r??=`valid`,i??=CT(),a??=`max`,e=Pk(e,i);let o,s=r===`same`?`same`:`valid`;return o=a===`max`?Mg(e,t,n,s):yp(e,t,n,s),i===`channelsFirst`&&(o=qv(o,[0,4,1,2,3])),o})}var KA=class extends jE{constructor(e){if(e.poolSize??=2,super(e),typeof e.poolSize==`number`)this.poolSize=[e.poolSize];else if(Array.isArray(e.poolSize)&&e.poolSize.length===1&&typeof e.poolSize[0]==`number`)this.poolSize=e.poolSize;else throw new J(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.poolSize)}`);if(Ww(this.poolSize,`poolSize`),e.strides==null)this.strides=this.poolSize;else if(typeof e.strides==`number`)this.strides=[e.strides];else if(Array.isArray(e.strides)&&e.strides.length===1&&typeof e.strides[0]==`number`)this.strides=e.strides;else throw new J(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.strides)}`);Ww(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,oT(this.padding),this.inputSpec=[new EE({ndim:3})]}computeOutputShape(e){e=yE(e);let t=jk(e[1],this.poolSize[0],this.padding,this.strides[0]);return[e[0],t,e[2]]}call(e,t){return z(()=>(this.invokeCallHook(e,t),e=TT(Y(e),2),yv(this.poolingFunction(Y(e),[this.poolSize[0],1],[this.strides[0],1],this.padding,`channelsLast`),[2])))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides},t=super.getConfig();return Object.assign(e,t),e}},qA=class extends KA{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return iT(i),oT(r),WA(e,t,n,r,i,`max`)}};qA.className=`MaxPooling1D`,q(qA);var JA=class extends KA{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return iT(i),oT(r),WA(e,t,n,r,i,`avg`)}};JA.className=`AveragePooling1D`,q(JA);var YA=class extends jE{constructor(e){if(e.poolSize??=[2,2],super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==2)throw new J(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides];Ww(this.poolSize,`poolSize`),Ww(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,iT(this.dataFormat),oT(this.padding),this.inputSpec=[new EE({ndim:4})]}computeOutputShape(e){e=yE(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2];return t=jk(t,this.poolSize[0],this.padding,this.strides[0]),n=jk(n,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat===`channelsFirst`?[e[0],e[1],t,n]:[e[0],t,n,e[3]]}call(e,t){return z(()=>(this.invokeCallHook(e,t),this.poolingFunction(Y(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},XA=class extends YA{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return iT(i),oT(r),WA(e,t,n,r,i,`max`)}};XA.className=`MaxPooling2D`,q(XA);var ZA=class extends YA{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return iT(i),oT(r),WA(e,t,n,r,i,`avg`)}};ZA.className=`AveragePooling2D`,q(ZA);var QA=class extends jE{constructor(e){if(e.poolSize??=[2,2,2],super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==3)throw new J(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides,e.strides];Ww(this.poolSize,`poolSize`),Ww(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,iT(this.dataFormat),oT(this.padding),this.inputSpec=[new EE({ndim:5})]}computeOutputShape(e){e=yE(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2],r=this.dataFormat===`channelsFirst`?e[4]:e[3];return t=jk(t,this.poolSize[0],this.padding,this.strides[0]),n=jk(n,this.poolSize[1],this.padding,this.strides[1]),r=jk(r,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat===`channelsFirst`?[e[0],e[1],t,n,r]:[e[0],t,n,r,e[4]]}call(e,t){return z(()=>(this.invokeCallHook(e,t),this.poolingFunction(Y(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},$A=class extends QA{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return iT(i),oT(r),GA(e,t,n,r,i,`max`)}};$A.className=`MaxPooling3D`,q($A);var ej=class extends QA{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return iT(i),oT(r),GA(e,t,n,r,i,`avg`)}};ej.className=`AveragePooling3D`,q(ej);var tj=class extends jE{constructor(e){super(e),this.inputSpec=[new EE({ndim:3})]}computeOutputShape(e){return[e[0],e[2]]}call(e,t){throw new ww}},nj=class extends tj{constructor(e){super(e||{})}call(e,t){return z(()=>Ig(Y(e),1))}};nj.className=`GlobalAveragePooling1D`,q(nj);var rj=class extends tj{constructor(e){super(e||{})}call(e,t){return z(()=>ch(Y(e),1))}};rj.className=`GlobalMaxPooling1D`,q(rj);var ij=class extends jE{constructor(e){super(e),this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,iT(this.dataFormat),this.inputSpec=[new EE({ndim:4})]}computeOutputShape(e){return e=e,this.dataFormat===`channelsLast`?[e[0],e[3]]:[e[0],e[1]]}call(e,t){throw new ww}getConfig(){let e={dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},aj=class extends ij{call(e,t){return z(()=>{let t=Y(e);return this.dataFormat===`channelsLast`?Ig(t,[1,2]):Ig(t,[2,3])})}};aj.className=`GlobalAveragePooling2D`,q(aj);var oj=class extends ij{call(e,t){return z(()=>{let t=Y(e);return this.dataFormat===`channelsLast`?ch(t,[1,2]):ch(t,[2,3])})}};oj.className=`GlobalMaxPooling2D`,q(oj);var sj=class extends jE{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return this.layer==null?!1:this.layer.trainable}set trainable(e){this.layer!=null&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){let e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},t=super.getConfig();return Object.assign(e,t),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,t,n={}){let r=t.layer,i=gD(r,n);delete t.layer;let a={layer:i};return Object.assign(a,t),new e(a)}},cj=class extends sj{constructor(e){super(e),this.supportsMasking=!0}build(e){if(e=yE(e),e.length<3)throw new J(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(e)}`);this.inputSpec=[{shape:e}];let t=[e[0]].concat(e.slice(2));this.layer.built||(this.layer.build(t),this.layer.built=!0),super.build(e)}computeOutputShape(e){e=yE(e);let t=[e[0]].concat(e.slice(2)),n=this.layer.computeOutputShape(t),r=e[1];return[n[0],r].concat(n.slice(1))}call(e,t){return z(()=>(e=Y(e),Qk((e,n)=>[Y(this.layer.call(e,t)),[]],e,[],!1,null,null,!1,!0)[1]))}};cj.className=`TimeDistributed`,q(cj);function lj(e){Hw(nT,`BidirectionalMergeMode`,e)}var uj=`concat`,dj=class extends sj{constructor(e){super(e);let t=e.layer.getConfig(),n={};n.className=e.layer.getClassName(),n.config=t,this.forwardLayer=gD(n),t.goBackwards=t.goBackwards!==!0;let r={};if(r.className=e.layer.getClassName(),r.config=t,this.backwardLayer=gD(r),this.forwardLayer.name=`forward_`+this.forwardLayer.name,this.backwardLayer.name=`backward_`+this.backwardLayer.name,this.mergeMode=e.mergeMode===void 0?uj:e.mergeMode,lj(this.mergeMode),e.weights)throw new ww(`weights support is not implemented for Bidirectional layer yet.`);this._stateful=e.layer.stateful,this.returnSequences=e.layer.returnSequences,this.returnState=e.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=e.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(e){this._trainable=e,this.forwardLayer!=null&&(this.forwardLayer.trainable=e),this.backwardLayer!=null&&(this.backwardLayer.trainable=e)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(e){let t=e.length,n=Math.floor(t/2);this.forwardLayer.setWeights(e.slice(0,n)),this.backwardLayer.setWeights(e.slice(n))}computeOutputShape(e){let t=this.forwardLayer.computeOutputShape(e);Array.isArray(t)&&Array.isArray(t[0])||(t=[t]),t=t;let n,r,i;return this.returnState&&(i=t.slice(1)),n=t[0],n=n,this.mergeMode===`concat`?(n[n.length-1]*=2,r=[n]):r=this.mergeMode==null?[n,n.slice()]:[n],this.returnState?this.mergeMode==null?r.concat(i).concat(i.slice()):[n].concat(i,i.slice()):Aw(r)}apply(e,t){let n=t==null?null:t.initialState,r=t==null?null:t.constants;t??={};let i=Zk(e,n,r,this.numConstants);if(e=i.inputs,n=i.initialState,r=i.constants,Array.isArray(e)&&(n=e.slice(1),e=e[0]),(n==null||n.length===0)&&r==null)return super.apply(e,t);let a=[],o=[];if(n!=null){let e=n.length;if(e%2>0)throw new J("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");t.initialState=n,a.push(...n);let r=n.map(e=>new EE({shape:e.shape}));this.forwardLayer.stateSpec=r.slice(0,e/2),this.backwardLayer.stateSpec=r.slice(e/2),o.push(...r)}if(r!=null)throw new ww(`Support for constants in Bidirectional layers is not implemented yet.`);let s=a[0]instanceof DE;for(let e of a)if(e instanceof DE!==s)throw new J(`The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors`);if(s){let n=[e].concat(a),r=this.inputSpec.concat(o),i=this.inputSpec;this.inputSpec=r;let s=super.apply(n,t);return this.inputSpec=i,s}else return super.apply(e,t)}call(e,t){return z(()=>{let n=t.initialState,r,i;if(n==null)r=this.forwardLayer.call(e,t),i=this.backwardLayer.call(e,t);else{let a=n.slice(0,n.length/2),o=n.slice(n.length/2);r=this.forwardLayer.call(e,Object.assign(t,{initialState:a})),i=this.backwardLayer.call(e,Object.assign(t,{initialState:o}))}let a;this.returnState&&(Array.isArray(r)&&(a=r.slice(1).concat(i.slice(1))),r=r[0],i=i[0]),this.returnSequences&&(i=F_(i,1));let o;return this.mergeMode===`concat`?o=MT([r,i]):this.mergeMode===`sum`?o=V(r,i):this.mergeMode===`ave`?o=U(.5,V(r,i)):this.mergeMode===`mul`?o=U(r,i):this.mergeMode??(o=[r,i]),this.returnState?this.mergeMode==null?o.concat(a):[o].concat(a):o})}resetStates(e){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(e){uT(this.forwardLayer.name,()=>{this.forwardLayer.build(e)}),uT(this.backwardLayer.name,()=>{this.backwardLayer.build(e)}),this.built=!0}computeMask(e,t){Array.isArray(t)&&(t=t[0]);let n;if(n=this.returnSequences?this.mergeMode==null?[t,t]:t:this.mergeMode==null?[null,null]:null,this.returnState){let e=this.forwardLayer.states.map(e=>null);return Array.isArray(n)?n.concat(e).concat(e):[n].concat(e,e)}else return n}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(e),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(e)}getConfig(){let e={mergeMode:this.mergeMode},t=super.getConfig();return Object.assign(e,t),e}static fromConfig(e,t){let n=gD(t.layer);if(delete t.layer,t.numConstants!=null)throw new ww(`Deserialization of a Bidirectional layer with numConstants present is not supported yet.`);let r=t;return r.layer=n,new e(r)}};dj.className=`Bidirectional`,q(dj);var fj=class extends jE{constructor(e){super(e),this.scale=e.scale,e.offset?this.offset=e.offset:this.offset=0}getConfig(){let e={scale:this.scale,offset:this.offset},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return z(()=>(e=Y(e),e.dtype!==`float32`&&(e=wT(e,`float32`)),V(U(e,this.scale),this.offset)))}};fj.className=`Rescaling`,q(fj);var{resizeBilinear:pj,cropAndResize:mj}=sb,hj=class extends jE{constructor(e){super(e),this.height=e.height,this.width=e.width}centerCrop(e,t,n,r,i,a,o,s){return z(()=>{let c,l=!1,u=[t/a,n/o,(r+t)/a,(i+n)/o],d=[];e.rank===3?(l=!0,c=xv([e])):c=e;for(let e=0;e<c.shape[0];e++)d.push(u);let f=rd(d,[d.length,4]),p=T_(0,d.length,1,`int32`),m=mj(c,f,p,[r,i],`nearest`);return wT(l?Y(Uv(m)):m,s)})}upsize(e,t,n,r){return z(()=>wT(pj(e,[t,n]),r))}call(e,t){return z(()=>{let t=Y(e),n=t.dtype,r=t.shape,i=r[r.length-3],a=r[r.length-2],o=0;i!==this.height&&(o=Math.floor((i-this.height)/2));let s=0;return a!==this.width&&(s=Math.floor((a-this.width)/2),s===0&&(s=1)),o>=0&&s>=0?this.centerCrop(t,o,s,this.height,this.width,i,a,n):this.upsize(e,this.height,this.width,n)})}getConfig(){let e={height:this.height,width:this.width},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=yE(e);let t=e.length-3,n=e.length-2;return e[t]=this.height,e[n]=this.width,e}};hj.className=`CenterCrop`,q(hj);function gj(e,t,n,r){let i=Y(e);if(i.dtype!==`int32`&&(i=wT(i,`int32`)),t===`int`)return i;let a=i.shape;if(i.rank===0&&(i=Dh(i,-1)),t===`oneHot`&&i.shape[i.shape.length-1]!==1&&(i=Dh(i,-1)),i.rank>2)throw new J(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${a} which would result in output rank ${i.rank}.`);let o=[`multiHot`,`oneHot`].includes(t),s=i,c;if(c=r!==void 0&&t===`count`?Dm(s,r,n,o):Dm(s,[],n,o),t!==`tfIdf`)return c;if(r)return U(c,r);throw new J(`When outputMode is 'tfIdf', weights must be provided.`)}var _j=class extends jE{constructor(e){super(e),this.numTokens=e.numTokens,e.outputMode?this.outputMode=e.outputMode:this.outputMode=`multiHot`}getConfig(){let e={numTokens:this.numTokens,outputMode:this.outputMode},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){return e=yE(e),e==null?[this.numTokens]:this.outputMode===`oneHot`&&e[e.length-1]!==1?(e.push(this.numTokens),e):(e[e.length-1]=this.numTokens,e)}call(e,t){return z(()=>{e=Y(e),e.dtype!==`int32`&&(e=wT(e,`int32`));let n;if(t.countWeights!==void 0){if(this.outputMode!==`count`)throw new J(`countWeights is not used when outputMode !== count.
              Received countWeights=${t.countWeights}`);n=Y(t.countWeights)}let r=ch(e),i=uh(e),a=zh(this.numTokens,r).bufferSync().get(0),o=Vh(i,0).bufferSync().get(0);if(!(a&&o))throw new J(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return gj(e,this.outputMode,this.numTokens,n)})}};_j.className=`CategoryEncoding`,q(_j);var vj=new Set([`bilinear`,`nearest`]),yj=class extends jE{constructor(e){if(super(e),this.height=e.height,this.width=e.width,e.interpolation)if(vj.has(e.interpolation))this.interpolation=e.interpolation;else throw new J(`Invalid interpolation parameter: ${e.interpolation} is not implemented`);else this.interpolation=`bilinear`;this.cropToAspectRatio=!!e.cropToAspectRatio}computeOutputShape(e){e=yE(e);let t=e[2];return[this.height,this.width,t]}getConfig(){let e={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return z(()=>{let t=[this.height,this.width];if(this.interpolation===`bilinear`)return sb.resizeBilinear(e,t,!this.cropToAspectRatio);if(this.interpolation===`nearest`)return sb.resizeNearestNeighbor(e,t,!this.cropToAspectRatio);throw Error(`Interpolation is ${this.interpolation} but only ${[...vj]} are supported`)})}};yj.className=`Resizing`,q(yj);var bj=class{constructor(e){this.seed=e}next(){if(this.seed!==void 0)return this.seed++}};bj.className=`RandomSeed`;var xj=class extends jE{constructor(e){super(e),this.randomGenerator=new bj(e.seed)}getConfig(){let e={seed:this.randomGenerator.seed},t=super.getConfig();return Object.assign(e,t),e}};xj.className=`BaseRandomLayer`;var Sj=new Set([`bilinear`,`nearest`]),Cj=class extends xj{constructor(e){super(e);let{factor:t,interpolation:n=`bilinear`}=e;if(this.factor=t,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new J(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new J(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new J(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(n)if(Sj.has(n))this.interpolation=n;else throw new J(`Invalid interpolation parameter: ${n} is not implemented`)}getConfig(){let e={factor:this.factor,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=yE(e);let t=e[2];return[this.imgHeight,-1,t]}call(e,t){return z(()=>{let t=Y(e);this.imgHeight=t.shape[t.shape.length-3];let n=t.shape[t.shape.length-2];this.widthFactor=w_([1],1+this.widthLower,1+this.widthUpper,`float32`,this.randomGenerator.next());let r=this.widthFactor.dataSync()[0]*n;r=Math.round(r);let i=[this.imgHeight,r];switch(this.interpolation){case`bilinear`:return sb.resizeBilinear(e,i);case`nearest`:return sb.resizeNearestNeighbor(e,i);default:throw Error(`Interpolation is ${this.interpolation}
          but only ${[...Sj]} are supported`)}})}};Cj.className=`RandomWidth`,q(Cj);function wj(e){return new Bk(e)}function Tj(e){return new hA(e)}function Ej(e){return new pA(e)}function Dj(e){return new gA(e)}function Oj(e){return new BA(e)}function kj(e){return new XA(e)}P().registerFlag(`KEEP_INTERMEDIATE_TENSORS`,()=>!1,e=>{e&&console.warn(`Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.`)});var Aj;(function(e){e[e.DT_INVALID=0]=`DT_INVALID`,e[e.DT_FLOAT=1]=`DT_FLOAT`,e[e.DT_DOUBLE=2]=`DT_DOUBLE`,e[e.DT_INT32=3]=`DT_INT32`,e[e.DT_UINT8=4]=`DT_UINT8`,e[e.DT_INT16=5]=`DT_INT16`,e[e.DT_INT8=6]=`DT_INT8`,e[e.DT_STRING=7]=`DT_STRING`,e[e.DT_COMPLEX64=8]=`DT_COMPLEX64`,e[e.DT_INT64=9]=`DT_INT64`,e[e.DT_BOOL=10]=`DT_BOOL`,e[e.DT_QINT8=11]=`DT_QINT8`,e[e.DT_QUINT8=12]=`DT_QUINT8`,e[e.DT_QINT32=13]=`DT_QINT32`,e[e.DT_BFLOAT16=14]=`DT_BFLOAT16`,e[e.DT_QINT16=15]=`DT_QINT16`,e[e.DT_QUINT16=16]=`DT_QUINT16`,e[e.DT_UINT16=17]=`DT_UINT16`,e[e.DT_COMPLEX128=18]=`DT_COMPLEX128`,e[e.DT_HALF=19]=`DT_HALF`,e[e.DT_RESOURCE=20]=`DT_RESOURCE`,e[e.DT_VARIANT=21]=`DT_VARIANT`,e[e.DT_UINT32=22]=`DT_UINT32`,e[e.DT_UINT64=23]=`DT_UINT64`,e[e.DT_FLOAT_REF=101]=`DT_FLOAT_REF`,e[e.DT_DOUBLE_REF=102]=`DT_DOUBLE_REF`,e[e.DT_INT32_REF=103]=`DT_INT32_REF`,e[e.DT_UINT8_REF=104]=`DT_UINT8_REF`,e[e.DT_INT16_REF=105]=`DT_INT16_REF`,e[e.DT_INT8_REF=106]=`DT_INT8_REF`,e[e.DT_STRING_REF=107]=`DT_STRING_REF`,e[e.DT_COMPLEX64_REF=108]=`DT_COMPLEX64_REF`,e[e.DT_INT64_REF=109]=`DT_INT64_REF`,e[e.DT_BOOL_REF=110]=`DT_BOOL_REF`,e[e.DT_QINT8_REF=111]=`DT_QINT8_REF`,e[e.DT_QUINT8_REF=112]=`DT_QUINT8_REF`,e[e.DT_QINT32_REF=113]=`DT_QINT32_REF`,e[e.DT_BFLOAT16_REF=114]=`DT_BFLOAT16_REF`,e[e.DT_QINT16_REF=115]=`DT_QINT16_REF`,e[e.DT_QUINT16_REF=116]=`DT_QUINT16_REF`,e[e.DT_UINT16_REF=117]=`DT_UINT16_REF`,e[e.DT_COMPLEX128_REF=118]=`DT_COMPLEX128_REF`,e[e.DT_HALF_REF=119]=`DT_HALF_REF`,e[e.DT_RESOURCE_REF=120]=`DT_RESOURCE_REF`,e[e.DT_VARIANT_REF=121]=`DT_VARIANT_REF`,e[e.DT_UINT32_REF=122]=`DT_UINT32_REF`,e[e.DT_UINT64_REF=123]=`DT_UINT64_REF`})(Aj||={});var jj;(function(e){(function(e){e[e.LEGACY=0]=`LEGACY`,e[e.V1=1]=`V1`,e[e.V2=2]=`V2`})(e.CheckpointFormatVersion||={})})(jj||={});function Mj(e,t){return Nj(e,t)}function Nj(e,t,n=new Map,r=new Set){if(e==null)return null;if(typeof Blob==`function`&&e instanceof Blob)return e.slice();if(r.has(e))throw Error(`Circular references are not supported.`);if(n.has(e))return n.get(e);let i=t(e);if(i.recurse&&i.value!==null)throw Error(`A deep map function may not return both a value and recurse=true.`);if(!i.recurse)return n.set(e,i.value),i.value;if(Lj(e)){let i=Array.isArray(e)?[]:{};r.add(e);for(let a in e){let o=e[a];i[a]=Nj(o,t,n,r)}return r.delete(e),e.__proto__&&(i.__proto__=e.__proto__),i}else throw Error(`Can't recurse into non-iterable type: ${e}`)}function Pj(e,t=Ij){return Fj(e,t)}function Fj(e,t,n=new Set){let r=e[0];if(n.has(r))throw Error(`Circular references are not supported.`);let i=t(e);if(i.recurse&&i.value!==null)throw Error(`A deep zip function may not return both a value and recurse=true.`);if(!i.recurse)return i.value;if(Lj(r)){let i=Array.isArray(r)?[]:{};n.add(r);for(let a in r)i[a]=Fj(e.map(e=>e[a]),t,n);return n.delete(r),i}else throw Error(`Can't recurse into non-iterable type: ${r}`)}function Ij(e){return e===null?null:Lj(e[0])?{value:null,recurse:!0}:{value:e,recurse:!1}}function Lj(e){let t=!1;if(P().get(`IS_BROWSER`))t=e instanceof TextDecoder;else{let{StringDecoder:n}=ff();t=e instanceof n}return e!=null&&!ArrayBuffer.isView(e)&&(Array.isArray(e)||typeof e==`object`&&!(e instanceof xu)&&!(e instanceof Promise)&&!t)}function Rj(e){return e==null||zj(e)||Array.isArray(e)||typeof e==`object`&&e instanceof xu||eu(e)}function zj(e){return e===null||typeof e!=`object`&&typeof e!=`function`}function Bj(e){return Mj(e,Vj)}function Vj(e){return e instanceof xu?{value:e.clone(),recurse:!1}:Lj(e)?{value:null,recurse:!0}:{value:e,recurse:!1}}var Hj=class{constructor(e){if(this.capacity=e,this.begin=0,this.end=0,e==null)throw RangeError(`Can't create a ring buffer of unknown capacity.`);if(e<1)throw RangeError(`Can't create ring buffer of capacity < 1.`);this.data=Array(e),this.doubledCapacity=2*e}wrap(e){for(;e<0;)e+=this.doubledCapacity;return e%this.doubledCapacity}get(e){if(e<0)throw RangeError(`Can't get item at a negative index.`);return this.data[e%this.capacity]}set(e,t){if(e<0)throw RangeError(`Can't set item at a negative index.`);this.data[e%this.capacity]=t}length(){let e=this.end-this.begin;return e<0&&(e=this.doubledCapacity+e),e}isFull(){return this.length()===this.capacity}isEmpty(){return this.length()===0}push(e){if(this.isFull())throw RangeError(`Ring buffer is full.`);this.set(this.end,e),this.end=this.wrap(this.end+1)}pushAll(e){for(let t of e)this.push(t)}pop(){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);this.end=this.wrap(this.end-1);let e=this.get(this.end);return this.set(this.end,void 0),e}unshift(e){if(this.isFull())throw RangeError(`Ring buffer is full.`);this.begin=this.wrap(this.begin-1),this.set(this.begin,e)}shift(){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);let e=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),e}shuffleExcise(e){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);let t=this.wrap(this.begin+e),n=this.get(t);return this.set(t,this.pop()),n}},Uj=class e extends Hj{constructor(){super(e.INITIAL_CAPACITY)}isFull(){return!1}push(e){super.isFull()&&this.expand(),super.push(e)}unshift(e){super.isFull()&&this.expand(),super.unshift(e)}expand(){let e=this.capacity*2,t=Array(e),n=this.length();for(let e=0;e<n;e++)t[e]=this.get(this.wrap(this.begin+e));this.data=t,this.capacity=e,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=n}};Uj.INITIAL_CAPACITY=32;function Wj(e){return new Jj(e)}function Gj(e){return new Yj(e)}function Kj(e,t){return new oM(e,t)}var qj=class{async toArray(){let e=[],t=await this.next();for(;!t.done;)e.push(t.value),t=await this.next();return e}async toArrayForTest(){let e=this.prefetch(100),t=[],n=await e.next();for(;!n.done;)t.push(n.value),n=await e.next();return t}async resolveFully(){let e=await this.next();for(;!e.done;)e=await this.next()}async resolveWhile(e){let t=await this.next(),n=e(t.value);for(;!t.done&&n;)t=await this.next(),n=e(t.value)}handleErrors(e){return new nM(this,e)}filter(e){return new eM(this,e)}map(e){return new tM(this,e)}mapAsync(e){return new rM(this,e)}serialMapAsync(e){return new rM(this,e).serial()}flatmap(e){return new aM(this,e)}async forEachAsync(e){return this.map(e).resolveFully()}async serialForEach(e){return this.serialMapAsync(e).resolveWhile(e=>e===!0)}rowMajorBatch(e,t=!0){return new $j(this,e,t)}columnMajorBatch(e,t=!0,n=Ij){return this.rowMajorBatch(e,t).map(e=>Pj(e,n))}concatenate(e,t){return new oM(Wj([this,e]),t)}take(e){return e<0||e==null?this:new Qj(this,e)}skip(e){return e<0||e==null?this:new Zj(this,e)}prefetch(e){return new cM(this,e)}shuffle(e,t){return new lM(this,e,t)}serial(){return new Xj(this)}},Jj=class extends qj{constructor(e){super(),this.items=e,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};let e=this.items[this.trav];return this.trav++,{value:Bj(e),done:!1}}},Yj=class extends qj{constructor(e){super(),this.nextFn=e}summary(){return`Function call`}async next(){try{return this.nextFn()}catch(e){throw e.message=`Error thrown while iterating through a dataset: ${e.message}`,e}}},Xj=class extends qj{constructor(e){super(),this.upstream=e,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Serial`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){return this.upstream.next()}},Zj=class extends qj{constructor(e,t){super(),this.upstream=e,this.maxCount=t,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Skip`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.count++<this.maxCount;){let e=await this.upstream.next();if(e.done)return e;ld(e.value)}return this.upstream.next()}},Qj=class extends qj{constructor(e,t){super(),this.upstream=e,this.maxCount=t,this.count=0}summary(){return`${this.upstream.summary()} -> Take`}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}},$j=class extends qj{constructor(e,t,n=!0){super(),this.upstream=e,this.batchSize=t,this.enableSmallLastBatch=n,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> RowMajorBatch`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){let e=[];for(;e.length<this.batchSize;){let t=await this.upstream.next();if(t.done)return this.enableSmallLastBatch&&e.length>0?{value:e,done:!1}:{value:null,done:!0};e.push(t.value)}return{value:e,done:!1}}},eM=class extends qj{constructor(e,t){super(),this.upstream=e,this.predicate=t,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Filter`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;){let e=await this.upstream.next();if(e.done||this.predicate(e.value))return e;ld(e.value)}}},tM=class extends qj{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> Map`}async next(){let e=await this.upstream.next();if(e.done)return{value:null,done:!0};let t=Fu(e.value),n=this.transform(e.value),r=Fu(n);for(let e of t)Pu(e,r)||e.dispose();return{value:n,done:!1}}},nM=class extends qj{constructor(e,t){super(),this.upstream=e,this.handler=t,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> handleErrors`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;)try{return await this.upstream.next()}catch(e){if(!this.handler(e))return{value:null,done:!0}}}},rM=class extends qj{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> AsyncMap`}async next(){let e=await this.upstream.next();if(e.done)return{value:null,done:!0};let t=Fu(e.value),n=await this.transform(e.value),r=Fu(n);for(let e of t)Pu(e,r)||e.dispose();return{value:n,done:!1}}},iM=class extends qj{constructor(){super(),this.outputQueue=new Uj,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.outputQueue.length()===0;)if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}},aM=class extends iM{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> Flatmap`}async pump(){let e=await this.upstream.next();if(e.done)return!1;let t=Fu(e.value),n=this.transform(e.value),r=Fu(n);this.outputQueue.pushAll(n);for(let e of t)Pu(e,r)||e.dispose();return!0}},oM=class extends qj{constructor(e,t){super(),this.baseErrorHandler=t,this.lastRead=null,this.iterator=null,this.moreIterators=e}summary(){return`TODO: fill in upstream of chained summaries -> Chained`}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(e){if(await e,this.iterator==null){let e=await this.moreIterators.next();if(e.done)return{value:null,done:!0};this.iterator=e.value,this.baseErrorHandler!=null&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}let t=await this.iterator.next();return t.done?(this.iterator=null,this.readFromChain(e)):t}},sM;(function(e){e[e.FAIL=0]=`FAIL`,e[e.SHORTEST=1]=`SHORTEST`,e[e.LONGEST=2]=`LONGEST`})(sM||={});var cM=class extends qj{constructor(e,t){super(),this.upstream=e,this.bufferSize=t,this.buffer=new Hj(t)}summary(){return`${this.upstream.summary()} -> Prefetch`}refill(){for(;!this.buffer.isFull();){let e=this.upstream.next();this.buffer.push(e)}}next(){return this.refill(),this.buffer.shift()}},lM=class extends cM{constructor(e,t,n){super(e,t),this.upstream=e,this.windowSize=t,this.upstreamExhausted=!1,this.random=v_.alea(n||Zl().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}randomInt(e){return Math.floor(this.random()*e)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){for(this.upstreamExhausted||this.refill();!this.buffer.isEmpty();){let e=this.chooseIndex(),t=await this.buffer.shuffleExcise(e);if(t.done)this.upstreamExhausted=!0;else return this.refill(),t}return{value:null,done:!0}}},uM=class{constructor(){this.size=null}batch(e,t=!0){let n=this;j(e>0,()=>`batchSize needs to be positive, but it is
      ${e}`);let r;return r=this.size===1/0||this.size==null?this.size:t?Math.ceil(this.size/e):Math.floor(this.size/e),dM(async()=>(await n.iterator()).columnMajorBatch(e,t,fM),r)}concatenate(e){let t=this,n;return n=this.size===1/0||e.size===1/0?1/0:this.size!=null&&e.size!=null?this.size+e.size:null,dM(async()=>(await t.iterator()).concatenate(await e.iterator()),n)}filter(e){let t=this,n;return n=this.size===1/0?1/0:null,dM(async()=>(await t.iterator()).filter(t=>z(()=>e(t))),n)}async forEachAsync(e){return(await this.iterator()).forEachAsync(e)}map(e){let t=this;return dM(async()=>(await t.iterator()).map(t=>z(()=>e(t))),this.size)}mapAsync(e){let t=this;return dM(async()=>(await t.iterator()).mapAsync(e),this.size)}prefetch(e){if(e==null)throw RangeError("`Dataset.prefetch()` requires bufferSize to be specified.");let t=this;return dM(async()=>(await t.iterator()).prefetch(e),this.size)}repeat(e){let t=this,n;return n=this.size!=null&&e>0?this.size*e:e===0?0:this.size!=null&&(e===void 0||e<0)?1/0:null,dM(async()=>Kj(Gj(async()=>({value:await t.iterator(),done:!1})).take(e)),n)}skip(e){let t=this,n;return n=this.size!=null&&e>=0&&this.size>=e?this.size-e:this.size!=null&&(this.size<e||e===void 0||e<0)?0:null,dM(async()=>(await t.iterator()).skip(e),n)}shuffle(e,t,n=!0){if(e==null||e<0)throw this.size==null?RangeError("`Dataset.shuffle()` requires bufferSize to be specified."):RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`);let r=this,i=v_.alea(t||Zl().toString());return dM(async()=>{let t=i.int32();return n&&(t+=i.int32()),(await r.iterator()).shuffle(e,t.toString())},this.size)}take(e){let t=this,n;return n=this.size!=null&&this.size>e?e:this.size!=null&&this.size<=e?this.size:null,dM(async()=>(await t.iterator()).take(e),n)}async toArray(){if(this.size===1/0)throw Error(`Can not convert infinite data stream to array.`);return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw Error(`Can not convert infinite data stream to array.`);return(await this.iterator()).toArrayForTest()}};uM.MAX_BUFFER_SIZE=1e4;function dM(e,t=null){return new class extends uM{constructor(){super(...arguments),this.size=t}async iterator(){return e()}}}function fM(e){if(e===null)return null;let t=e[0];return Rj(t)?{value:pM(e),recurse:!1}:{value:null,recurse:!0}}function pM(e){if(e.length===0)throw Error(`Can't make a batch of zero elements.`);return e[0]instanceof xu?xv(e):rd(e)}function X(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{e!=null&&j(e.dtype!==`complex64`,()=>`${t} does not support complex64 tensors in the CPU backend.`)})}var mM=Gv,hM=class e extends Da{nextDataId(){return e.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new Ea(this,sd())}write(e,t,n){this.firstUse&&(this.firstUse=!1,P().get(`IS_NODE`)&&yl(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));let r={id:this.nextDataId()};return this.data.set(r,{values:e,dtype:n,refCount:1}),r}makeTensorInfo(e,t,n){let r;if(t===`string`&&n!=null&&n.length>0&&Qa(n[0])){let i=n.map(e=>Ql(e));r=this.write(i,e,t)}else r=this.write(n,e,t);return{dataId:r,shape:e,dtype:t}}refCount(e){return this.data.has(e)?this.data.get(e).refCount:0}incRef(e){let t=this.data.get(e);t.refCount++}decRef(e){if(this.data.has(e)){let t=this.data.get(e);t.refCount--}}move(e,t,n,r,i){this.data.set(e,{values:t,dtype:r,refCount:i})}numDataIds(){return this.data.numDataIds()}async read(e){return this.readSync(e)}readSync(e){let{dtype:t,complexTensorInfos:n}=this.data.get(e);return t===`complex64`?Dx(this.readSync(n.real.dataId),this.readSync(n.imag.dataId)):oo(this.data.get(e).values,t)}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype===`string`)try{let n=t.map(e=>$l(e));return gf(e.shape,e.dtype,n)}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return gf(e.shape,e.dtype,t)}makeOutput(e,t,n){return sd().makeTensorFromTensorInfo(this.makeTensorInfo(t,n,e),this)}disposeData(e,t=!1){if(this.data.has(e)){if(this.data.get(e).refCount--,!t&&this.data.get(e).refCount>0)return!1;let{complexTensorInfos:n}=this.data.get(e);n!=null&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(e)}return!0}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}async time(e){let t=Zl();return e(),{kernelMs:Zl()-t}}memory(){return{unreliable:!0,reasons:[`The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less.`]}}where(e){X([e],`where`);let t=this.readSync(e.dataId);return mM(e.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}};hM.nextDataId=0;function gM(e){let t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}var _M={kernelName:`Abs`,backendName:`cpu`,kernelFunc:e=>{let{x:t}=e.inputs,n=e.backend;X(t,`abs`);let r=new Float32Array(M(t.shape)),i=n.data.get(t.dataId).values;return r=gM(i),n.makeOutput(r,t.shape,t.dtype)}};function vM(e){return(t,n,r,i,a)=>{let o=Im(t,n),s=o.length,c=N(o),l=Ga(a,M(o)),u=t.length,d=n.length,f=N(t),p=N(n),m=Pm(t,o),h=Pm(n,o);if(m.length+h.length===0)for(let t=0;t<l.length;++t)l[t]=e(r[t%r.length],i[t%i.length]);else for(let t=0;t<l.length;++t){let n=po(t,s,c),a=n.slice(-u);m.forEach(e=>a[e]=0);let o=fo(a,u,f),g=n.slice(-d);h.forEach(e=>g[e]=0);let _=fo(g,d,p);l[t]=e(r[o],i[_])}return[l,o]}}function yM(e){let{inputs:t,backend:n}=e,{real:r,imag:i}=t,a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,s=n.makeTensorInfo(r.shape,`complex64`),c=n.data.get(s.dataId);return c.complexTensorInfos={real:n.makeTensorInfo(r.shape,`float32`,a),imag:n.makeTensorInfo(i.shape,`float32`,o)},s}var bM={kernelName:Yo,backendName:`cpu`,kernelFunc:yM};function xM(e,t,n=`float32`){if(n===`complex64`)return yM({inputs:{real:xM(e,t,`float32`),imag:xM(e,t,`float32`)},backend:e});let r=co(M(t),n);return e.makeTensorInfo(t,n,r)}function SM(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var CM={kernelName:Ns,backendName:`cpu`,kernelFunc:SM};function wM(e){let{inputs:t,backend:n}=e,{input:r}=t,i=n.data.get(r.dataId).complexTensorInfos.real,a=n.data.get(i.dataId).values;return n.makeTensorInfo(i.shape,i.dtype,a)}var TM={kernelName:bc,backendName:`cpu`,kernelFunc:wM};function EM(e,t,n,r){if(r===`int32`)return[t,`int32`,Int32Array.from(e)];if(r===`bool`){let r=Xl([0],n),[i,a]=vM((e,t)=>e===t?0:1)(t,[],e,r,`bool`);return[a,`bool`,i]}throw Error(`Error in Cast: failed to cast ${n} to ${r}`)}function DM(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dtype:a}=r;if(a===`complex64`){if(i.dtype===`complex64`)return SM({inputs:{x:i},backend:n});let e=xM(n,i.shape,i.dtype),t=DM({inputs:{x:i},backend:n,attrs:{dtype:`float32`}}),r=yM({inputs:{real:t,imag:e},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),r}if(i.dtype===`complex64`){let e=wM({inputs:{input:i},backend:n}),t=DM({inputs:{x:e},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(e),t}if(!Ya(i.dtype,a)){let e=SM({inputs:{x:i},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:a}}let o=n.data.get(i.dataId).values,[s,c,l]=EM(o,i.shape,i.dtype,a);return n.makeTensorInfo(s,c,l)}var OM={kernelName:Ko,backendName:`cpu`,kernelFunc:DM};function kM(e,t,n,r){return n==null?({inputs:n,backend:i})=>{let{a,b:o}=n,s=i;X([a,o],e);let c=s.data.get(a.dataId).values,l=s.data.get(o.dataId).values,u=a.dtype===`string`?lS(c):c,d=a.dtype===`string`?lS(l):l,f=r||a.dtype,[p,m]=t(a.shape,o.shape,u,d,f);return s.makeTensorInfo(m,f,p)}:({inputs:e,backend:i})=>{let{a,b:o}=e,s=i;if(a.dtype===`complex64`||o.dtype===`complex64`){let e=DM({inputs:{x:a},backend:s,attrs:{dtype:`complex64`}}),t=s.data.get(e.dataId),r=t.complexTensorInfos.real,i=t.complexTensorInfos.imag,c=s.data.get(r.dataId).values,l=s.data.get(i.dataId).values,u=DM({inputs:{x:o},backend:s,attrs:{dtype:`complex64`}}),d=s.data.get(u.dataId),f=d.complexTensorInfos.real,p=d.complexTensorInfos.imag,m=s.data.get(f.dataId).values,h=s.data.get(p.dataId).values,[g,_,v]=n(a.shape,o.shape,c,l,m,h),y=s.makeTensorInfo(v,`float32`,g),b=s.makeTensorInfo(v,`float32`,_),x=yM({inputs:{real:y,imag:b},backend:s});return s.disposeIntermediateTensorInfo(e),s.disposeIntermediateTensorInfo(u),s.disposeIntermediateTensorInfo(y),s.disposeIntermediateTensorInfo(b),x}else{let e=s.data.get(a.dataId).values,n=s.data.get(o.dataId).values,i=r||a.dtype,[c,l]=t(a.shape,o.shape,e,n,i);return s.makeTensorInfo(l,i,c)}}}function AM(e){return(t,n,r,i,a,o)=>{let s=Im(t,n),c=M(s),l=s.length,u=N(s),d=Ga(`float32`,c),f=Ga(`float32`,c),p=Pm(t,s),m=Pm(n,s),h=Dx(r,i),g=Dx(a,o),_=t.length,v=N(t),y=n.length,b=N(n);if(p.length+m.length===0)for(let t=0;t<d.length;t++){let n=t%h.length,r=t%g.length,i=e(h[n*2],h[n*2+1],g[r*2],g[r*2+1]);d[t]=i.real,f[t]=i.imag}else for(let t=0;t<d.length;t++){let n=po(t,l,u),r=n.slice(-_);p.forEach(e=>r[e]=0);let i=fo(r,_,v),a=n.slice(-y);m.forEach(e=>a[e]=0);let o=fo(a,y,b),s=e(h[i*2],h[i*2+1],g[o*2],g[o*2+1]);d[t]=s.real,f[t]=s.imag}return[d,f,s]}}var jM=vM(((e,t)=>e+t)),MM=kM(`Add`,jM,AM(((e,t,n,r)=>({real:e+n,imag:t+r})))),NM={kernelName:`Add`,backendName:`cpu`,kernelFunc:MM};function PM(e,t,n,r,i){let a=M(r),o=co(i,n);for(let n=0;n<e.length;n++){let r=e[n];if(r<0)throw Error(`Input x must be non-negative!`);r>=i||(a>0?o[r]+=t[n]:o[r]+=1)}return o}function FM(e,t,n,r=!1){let i=e.shape[0],a=e.shape[1],o=gf([i,n],t.dtype);for(let s=0;s<i;s++)for(let i=0;i<a;i++){let a=e.get(s,i);if(a<0)throw Error(`Input x must be non-negative!`);a>=n||(r?o.set(1,s,a):t.size>0?o.set(o.get(s,a)+t.get(s,i),s,a):o.set(o.get(s,a)+1,s,a))}return o}var IM=vM(((e,t)=>e&t)),LM={kernelName:Uo,backendName:`cpu`,kernelFunc:kM(Uo,IM)};function RM(e){return(t,n,r)=>{let i=Ka(n,t.length);for(let n=0;n<t.length;++n)i[n]=e(t[n],r);return i}}function zM(e,t,n){return BM(e,RM(t),n)}function BM(e,t,n){return({inputs:r,attrs:i,backend:a})=>{let{x:o}=r;X(o,e);let s=a,c=s.data.get(o.dataId).values,l;if(o.dtype===`string`){if(!Array.isArray(c))throw Error(`String tensor's value was not an instance of Array`);l=lS(c)}else l=c;let u=n||o.dtype,d=t(l,u,i);return s.makeTensorInfo(o.shape,u,d)}}var VM=RM(e=>Math.ceil(e)),HM={kernelName:qo,backendName:`cpu`,kernelFunc:BM(qo,VM)};function UM(e,t,n,r){let i=Ka(n,M(t));if(r&&n!==`string`){let t=0;e.forEach(e=>{let n=M(e.shape);i.set(e.vals,t),t+=n})}else{let r=0;e.forEach(e=>{let a=n===`string`?lS(e.vals):e.vals,o=0;for(let n=0;n<e.shape[0];++n){let s=n*t[1]+r;for(let t=0;t<e.shape[1];++t)i[s+t]=a[o++]}r+=e.shape[1]})}return i}var WM=vM((e,t)=>+(e===t)),GM=kM(xs,WM,null,`bool`),KM={kernelName:xs,backendName:`cpu`,kernelFunc:GM},qM=RM(e=>Math.exp(e)),JM=BM(`Exp`,qM,`float32`),YM={kernelName:`Exp`,backendName:`cpu`,kernelFunc:JM},XM=RM(e=>Math.expm1(e)),ZM={kernelName:Cs,backendName:`cpu`,kernelFunc:BM(Cs,XM)},QM=RM(e=>Math.floor(e)),$M={kernelName:Es,backendName:`cpu`,kernelFunc:BM(Es,QM)},eN=vM((e,t)=>Math.floor(e/t)),tN={kernelName:Ds,backendName:`cpu`,kernelFunc:kM(Ds,eN,null,`int32`)};function nN(e,t,n,r,i,a,o,s,c){let l=gf([r,a],n);for(let n=0;n<r;n++){let r=[],u=0;for(let t=0;t<i;t++){let a=e[n*i+t];u+=a*o[t],r.push(a)}if(u<0||u>=c/a)throw Error(`Invalid indices: ${r} does not index into ${s}`);for(let e=0;e<a;e++)l.values[n*a+e]=t.get(...t.indexToLoc(u*a+e))}return l}function rN(e,t,n){let r=gf(n,e.dtype);for(let n=0;n<r.size;++n){let i=r.indexToLoc(n).slice(),a=i[0],o=i[2],s=t.locToIndex([a,o]);i[2]=t.values[s];let c=e.locToIndex(i);0<=c&&c<e.values.length&&(r.values[n]=e.values[c])}return r}var iN=vM((e,t)=>+(e>t)),aN={kernelName:js,backendName:`cpu`,kernelFunc:kM(js,iN,null,`bool`)},oN=vM((e,t)=>+(e>=t)),sN={kernelName:Ms,backendName:`cpu`,kernelFunc:kM(Ms,oN,null,`bool`)},cN=vM((e,t)=>+(e<t)),lN={kernelName:Bs,backendName:`cpu`,kernelFunc:kM(Bs,cN,null,`bool`)},uN=vM((e,t)=>+(e<=t)),dN={kernelName:Vs,backendName:`cpu`,kernelFunc:kM(Vs,uN,null,`bool`)};function fN(e,t,n){let r=(t-e)/(n-1),i=co(n,`float32`);i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+r;return i}var pN=RM(e=>Math.log(e)),mN={kernelName:`Log`,backendName:`cpu`,kernelFunc:BM(`Log`,pN)};function hN(e,t,n,r){let i=Ga(r,M(n));for(let n=0;n<i.length;++n){let r=n*t,a=e[r];for(let n=0;n<t;++n){let t=e[r+n];(Number.isNaN(t)||t>a)&&(a=t)}i[n]=a}return i}var gN=vM(((e,t)=>Math.max(e,t))),_N={kernelName:Ys,backendName:`cpu`,kernelFunc:kM(Ys,gN)},vN=vM(((e,t)=>Math.min(e,t))),yN={kernelName:nc,backendName:`cpu`,kernelFunc:kM(nc,vN)},bN=vM(((e,t)=>e*t)),xN=kM(ac,bN,AM(((e,t,n,r)=>({real:e*n-t*r,imag:e*r+t*n})))),SN={kernelName:ac,backendName:`cpu`,kernelFunc:xN};function CN(e,t,n){return bN([],t,Jl(-1,n),e,n)}function wN(e){let{inputs:t,backend:n}=e,{x:r}=t;X(r,`neg`);let i=n.data.get(r.dataId).values,[a,o]=CN(i,r.shape,r.dtype);return n.makeTensorInfo(o,r.dtype,a)}var TN={kernelName:`Neg`,backendName:`cpu`,kernelFunc:wN},EN=vM(((e,t)=>e===t?0:1)),DN={kernelName:oc,backendName:`cpu`,kernelFunc:kM(oc,EN,null,`bool`)};function ON(e,t,n,r,i){let a=t.length,o=M(t),s=N(t),c=N(i),l=Ga(n,M(i));for(let t=0;t<o;++t){let n=po(t,a,s),i=Array(n.length);for(let e=0;e<i.length;e++)i[e]=n[r[e]];let o=fo(i,a,c);l[o]=e[t]}return l}function kN(e){let{inputs:t,attrs:n,backend:r}=e,{x:i}=t,{perm:a}=n;X(i,`transpose`);let o=i.shape.length,s=Array(o);for(let e=0;e<s.length;e++)s[e]=i.shape[a[e]];let c=r.data.get(i.dataId).values,l=ON(c,i.shape,i.dtype,a,s);return{dataId:r.write(l,s,i.dtype),shape:s,dtype:i.dtype}}var AN={kernelName:cl,backendName:`cpu`,kernelFunc:kN};function jN(e,t,n,r){let[i,a]=th(e,r),o=ku(t,`int32`),s=co(M(i),o),c=M(a);for(let e=0;e<s.length;++e){let t=e*c,r=1;for(let e=0;e<c;++e)r*=n[t+e];s[e]=r}return{outVals:s,outShape:i,outDtype:o}}function MN(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`prod`);let s=i.shape.length,c=Ua(a,i.shape),l=ih(c,s),u=c,d=i,f=[];l!=null&&(d=kN({inputs:{x:i},backend:n,attrs:{perm:l}}),f.push(d),u=oh(u.length,s));let p=n.data.get(d.dataId).values,{outVals:m,outShape:h,outDtype:g}=jN(d.shape,d.dtype,p,u),_=h;return o&&(_=nh(h,c)),f.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(_,g,m)}var NN={kernelName:hc,backendName:`cpu`,kernelFunc:MN};function PN(e,t,n){e.forEach((e,r)=>{if(e<0||e>=n){let i=po(r,t.length,N(t)).join(`,`);throw Error(`indices[${i}] = ${e} is not in [0, ${n})`)}})}function FN(e,t){for(let n=0;n<e.length;++n){let r=e[n],i=n===e.length-1?t:e[n+1].length;if(r.length===0)throw Error(`Ragged splits may not be empty`);if(r[0]<0)throw Error(`Ragged splits must be non-negative`);if(r[r.length-1]>i)throw Error(`Ragged splits must not point past values`);for(let e=1;e<r.length;++e)if(r[e-1]>r[e])throw Error(`Ragged splits must be sorted in ascending order`)}}function IN(e,t,n,r){let i=[],a=0,o=t.length-1+n.length,s=Array(o).fill(null).map(()=>[0]);FN(n,r);let c=1;for(let e=0;e<t.length-1;++e){c*=t[e];let n=t[e+1];for(let t=1;t<c+1;++t)s[e].push(t*n)}for(let r=0;r<e.length;++r){let o=e[r],c=e[r]+1;for(let e=0;e<n.length;++e){let r=n[e],i=e+t.length-1;if(i>=0){let e=s[i],t=e[e.length-1]-r[o];for(let e=o;e<c;++e)s[i].push(r[e+1]+t)}o=r[o],c=r[c]}c!==o&&(i.push([o,c]),a+=c-o)}return{outSplits:s,valueSlices:i,numValues:a}}function LN(e){let t=[];for(let n=0;n<e.length;++n){let r=e[n].length,i=Ka(`int32`,r);t.push(i),e[n].forEach((e,t)=>i[t]=e)}return t}function RN(e,t){let n=e.slice(0,t);for(;n.length<t;)n.push(1);for(let r=t;r<e.length;r++)n[t-1]*=e[r];return n}function zN(e,t,n,r,i,a){let o=RN(t,2)[1],s=RN(a,2)[1],c=0;for(let t of n)for(let n=t[0];n<t[1];++n){for(let t=0;t<r;++t)i[c*s+t]=e[n*o+t];++c}}function BN(e,t,n,r,i){let a=t.slice();a[0]=i;let o=Ka(n,M(a)),s=e.length;return zN(e,t,r,s===0?0:s/t[0],o,a),[o,a]}function VN(e,t,n,r,i,a,o,s){if(e.length===0)throw Error(`paramsNestedSplits must be non empty`);if(t[0].length===0)throw Error(`Split tensors must not be scalars`);if(PN(a,o,t[0][0]-1),r.length===0)throw Error(`params.rank must be nonzero`);let c=r[0],{outSplits:l,valueSlices:u,numValues:d}=IN(a,o,e,c),f=LN(l),p=BN(n,r,i,u,d);return[f,p[0],p[1]]}var HN=2147483647;function UN(e,t,n,r,i,a,o){if(t.length>1)throw Error(`starts must be a scalar or vector`);if(i.length>1)throw Error(`limits must be a scalar or vector`);if(o.length>1)throw Error(`deltas must be a scalar or vector`);let s=t.length===0,c=i.length===0,l=o.length===0,u=[];s||u.push(t[0]),c||u.push(i[0]),l||u.push(o[0]);for(let e=1;e<u.length;++e)if(u[e]!==u[e-1])throw Error(`starts, limits, and deltas must have the same shape`);let d=u.length===0?1:u[0],f=Ka(`int32`,d+1);f[0]=0;for(let t=0;t<d;++t){let n=s?e[0]:e[t],i=c?r[0]:r[t],o=l?a[0]:a[t];if(o===0)throw Error(`Requires delta != 0`);let u;if(o>0&&i<n||o<0&&i>n)u=0;else if(u=Math.ceil(Math.abs((i-n)/o)),u>HN)throw Error(`Requires ((limit - start) / delta) <= ${HN}`);f[t+1]=f[t]+u}let p=f[d],m=Ka(n,p),h=0;for(let t=0;t<d;++t){let n=f[t+1]-f[t],r=s?e[0]:e[t],i=l?a[0]:a[t];for(let e=0;e<n;++e)m[h++]=r,r+=i}return[f,m]}var WN=sx,GN=class e{constructor(e,t,n,r,i,a,o,s,c,l){this.shape=e,this.shapeShape=t,this.values=n,this.valuesShape=r,this.valuesDType=i,this.defaultValue=a,this.defaultValueShape=o,this.rowPartitionValues=s,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=lx(l),this.raggedRank=ux(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===WN.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===WN.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(t){let n=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case WN.VALUE_ROWIDS:return e.getMaxWidthValueRowID(n);case WN.ROW_SPLITS:return e.getMaxWidthRowSplit(n);default:throw Error(`Cannot handle partition type ${WN[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(t===0||t===1)return 0;let n=0;for(let r=0;r<t-1;++r){let t=e[r+1]-e[r];t>n&&(n=t)}return n}static getMaxWidthValueRowID(e){let t=e.length;if(t===0)return 0;let n=0,r=e[0],i=0;for(let a=1;a<t;++a){let t=e[a];t!==r&&(r=t,i=Math.max(a-n,i),n=a)}return Math.max(t-n,i)}tensorShapeFromTensor(e,t,n=!0){if(t.length===0){if(e[0]===-1)return[];throw Error(`The only valid scalar shape tensor is the fully unknown shape specified as -1.`)}return qN(e,n)}calculateOutputSize(e){let t=this.valuesShape,n=this.defaultValueShape;dx(n,t);let r=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=cx(this.raggedRank,r,t);i[0]<0&&(i[0]=e);for(let e=1;e<=this.raggedRank;++e)i[e]<0&&(i[e]=this.getMaxWidth(e));return i}calculateFirstParentOutputIndex(e,t,n){let r=Math.min(e,n),i=[],a=0;for(let e=0;e<r;++e,a+=t)i.push(a);for(let t=r;t<e;++t)i.push(-1);return j(i.length===e,()=>`Final length of result must be equal to firstDimension.`),i}calculateOutputIndexRowSplit(e,t,n,r){let i=e.length,a=[];for(let o=0;o<i-1;++o){let i=e[o+1]-e[o],s=Math.min(r,i),c=t[o];c===-1&&(s=0);for(let e=0;e<s;++e)a.push(c),c+=n;for(let e=0;e<i-s;++e)a.push(-1)}if(i>0&&a.length!==e[i-1])throw Error(`Invalid row split size.`);return a}calculateOutputIndexValueRowID(e,t,n,r){let i=e.length,a=[];if(i===0)return[];let o=0,s=e[0];if(s>=t.length)throw Error(`Got currentValueRowId=${s}, which is not less than ${t.length}`);let c=t[s];a.push(c);for(let l=1;l<i;++l){let i=e[l];if(i===s)c>=0&&(++o,o<r?c+=n:c=-1);else{if(o=0,s=i,i>=t.length)throw Error(`Got nextValueRowId=${i} which is not less than ${t.length}`);c=t[i]}a.push(c)}if(a.length!==e.length)throw Error(`Invalid row ids.`);return a}calculateOutputIndex(e,t,n,r){let i=this.getRowPartitionTensor(e),a=this.getRowPartitionTypeByDimension(e);switch(a){case WN.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(i,t,n,r);case WN.ROW_SPLITS:if(i.length-1>t.length)throw Error(`Row partition size is greater than output size: ${i.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(i,t,n,r);default:throw Error(`Unsupported partition type: ${WN[a]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw Error(`No row_partition_types given.`);let t=this.rowPartitionTypes[0];switch(t){case WN.FIRST_DIM_SIZE:return e[0];case WN.VALUE_ROWIDS:throw Error(`Cannot handle VALUE_ROWIDS in first dimension.`);case WN.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw Error(`Cannot handle type ${WN[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw Error(`Invalid first partition input. Tensor requires at least one element.`);let e=this.getFirstDimensionSize(),t=this.calculateOutputSize(e),n=Array(this.raggedRank+1);n[n.length-1]=1;for(let e=n.length-2;e>=0;--e)n[e]=n[e+1]*t[e+1];let r=qN(t,!1),i=Ka(this.valuesDType,M(r));if(n[0]*t[0]>0){let a=this.calculateFirstParentOutputIndex(e,n[0],t[0]);for(let e=1;e<=this.raggedRank;++e)a=this.calculateOutputIndex(e-1,a,n[e],t[e]);this.setOutput(this.raggedRank,a,i,r)}return[r,i]}setOutput(e,t,n,r){if(n.length===0)return;let i=this.values,a=n,o=r.slice();o=o.slice(e+1);let s=M(o),c=t.length,l=this.defaultValue;if(l.length!==s&&l.length!==1){let e=this.defaultValueShape;z(()=>{l=Wp(W(l,e),o).dataSync()})}let u=0,d=0,f=0;for(let e=0;e<=c;++e){let r=e<c?t[e]:-1;if(r===f){++f;continue}if(d<f){let e=i.subarray(u*s);KN(a.subarray(d*s),e,(f-d)*s)}if(e>=c){let e=n.length;r=Math.floor(e/s)}if(r>f)if(this.defaultValue.length===1)a.subarray(f*s,r*s).fill(this.defaultValue[0]),f=r;else for(;r>f;)KN(a.slice(f*s),l,s),++f;r<0?(u=e+1,d=f):(u=e,d=f,f=d+1)}}};function KN(e,t,n){for(let r=0;r<n;r++)e[r]=t[r]}function qN(e,t){let n=[];for(let r of e){if(r<0){if(!t)throw Error(`Dimension ${r} must be >= 0`);if(r<-1)throw Error(`Dimension ${r} must be >= -1`);r=-1}n.push(r)}return n}function JN(e,t,n,r,i,a,o,s,c,l){return new GN(e,t,n,r,i,a,o,s,c,l).compute()}function YN(e,t,n,r){if(e===t||e<t&&n<0||t<e&&n>1)return co(0,r);let i=co(Math.abs(Math.ceil((t-e)/n)),r);t<e&&n===1&&(n=-1),i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+n;return i}var XN=RM(e=>1/Math.sqrt(e)),ZN={kernelName:jc,backendName:`cpu`,kernelFunc:BM(jc,XN)};function QN(e,t,n,r,i,a,o,s,c,l){let u=[r/i,i],d=e.values,f=t.values;if(r===0)return gf(n,t.dtype);let p=c instanceof gu?c:gf(u,t.dtype);typeof c==`string`||typeof c==`number`?p.values.fill(c):typeof c==`boolean`&&p.values.fill(+c);for(let e=0;e<a;e++){let a=[],c=0;for(let t=0;t<o;t++){let n=d[e*o+t];a.push(n),c+=n*s[t]}if(c<0||c>=r/i)throw Error(`Invalid indices: ${a} does not index into ${n}`);for(let n=0;n<i;n++)l?p.values[c*i+n]+=f[e*i+n]:p.values[c*i+n]=t.rank===0?f[0]:f[e*i+n]}return p}var $N=RM(e=>1/(1+Math.exp(-e))),eP=zM(Bc,e=>1/(1+Math.exp(-e))),tP={kernelName:Bc,backendName:`cpu`,kernelFunc:eP};function nP(e,t,n,r,i){let a=Xb(r,t,n),o=M(n),s=N(r);if(a){let n=Zb(t,s);return i===`string`?e.slice(n,n+o):e.subarray(n,n+o)}let c=gf(r,i,i===`string`?lS(e):e),l=gf(n,i);for(let e=0;e<l.size;++e){let n=l.indexToLoc(e),r=n.map((e,n)=>e+t[n]);l.set(c.get(...r),...n)}return i===`string`?uS(l.values):l.values}function rP(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,size:o}=r;X(i,`slice`);let[s,c]=Qb(i,a,o);Rb(i,s,c);let l=n.data.get(i.dataId).values,u=nP(l,s,c,i.shape,i.dtype);return n.makeTensorInfo(c,i.dtype,u)}var iP={kernelName:Lc,backendName:`cpu`,kernelFunc:rP};function aP(e,t,n,r,i,a,o){let s=t[0],c=a[0],l=Array(c),u=Array(s),d=t[1];if(c===0){if(s!==0)throw Error(Kx(s));let e=Ka(n,0),t=Ka(i,0);return[e,[0,d],t,l,u]}let f=!0,p=0,m=Array(c).fill(0);for(let t=0;t<s;++t){let n=e[t*d];if(n<0)throw Error(qx(t,n));if(n>=c)throw Error(Jx(t,n,c));++m[n],f&&=n>=p,p=n}let h=!0;for(let e=0;e<c;++e){let t=m[e]===0;l[e]=t,h&&=!t,m[e]=Math.max(m[e],1),e>0&&(m[e]+=m[e-1])}if(h&&f){let t=e,n=r;for(let e=0;e<s;++e)u[e]=e;return[t,[s,d],n,l,u]}else{let t=m[c-1],a=Ka(n,t*d),f=Ka(i,t),p=Array(c).fill(0);for(let t=0;t<s;++t){let n=e[t*d],i=p[n],o=(n===0?0:m[n-1])+i;p[n]++;for(let n=0;n<d;++n)a[o*d+n]=e[t*d+n];f[o]=r[t],u[t]=o}for(let e=0;e<c;++e)if(p[e]===0){let t=e===0?0:m[e-1];a[t*d+0]=e;for(let e=1;e<d;++e)a[t*d+e]=0;f[t]=o}return[a,[t,d],f,l,u]}}function oP(e,t,n,r,i){let a=M(r),o=t[0],s=i.length,c=[],l=1,u=-1;for(let e=0;e<s;++e){let t=i[e];if(t===-1){if(u!==-1)throw Error(Yx(u,e));u=e,c.push(1)}else{if(t<0)throw Error(Xx(e,t));l*=t,c.push(t)}}if(u!==-1){if(l<=0)throw Error(Zx());let e=Math.trunc(a/l);if(l*e!==a)throw Error(Qx(r,c));c[u]=e}if(M(c)!==a)throw Error($x(r,c));let d=r.length,f=[];if(d>0){f[d-1]=1;for(let e=d-2;e>=0;--e)f[e]=f[e+1]*r[e+1]}let p=[];if(s>0){p[s-1]=1;for(let e=s-2;e>=0;--e)p[e]=p[e+1]*c[e+1]}let m=Ka(n,o*s);for(let t=0;t<o;++t){let n=0;for(let r=0;r<d;++r)n+=e[t*d+r]*f[r];for(let e=0;e<s;++e)m[t*s+e]=Math.trunc(n/p[e]),n%=p[e]}return[m,[o,s],c]}function sP(e,t,n,r,i,a=!1,o=0){let s=r.length,c=[t[0],e.length/t[0]],l=c[1],u=s>0?i[s-1]+1:0;if(u<0)throw Error(eS());let d=t.slice();d[0]=u;let f=Ka(n,d.reduce((e,t)=>e*t,1));if(s===0)return u>0&&f.fill(o),[f,d];if(u<=0)throw Error(eS());let p=0,m=1,h=0,g=i[p];for(;;){let t=0;if(m<s){if(t=i[m],g===t){++m;continue}if(g>=t)throw Error(tS())}if(g<0||g>=u)throw Error(nS(g,u));g>h&&f.fill(o,h*l,g*l);for(let t=p;t<m;++t){let n=r[t];if(n<0||n>=c[0])throw Error(rS(t,r[t],c[0]));for(let t=0;t<l;t++)f[g*l+t]+=e[n*l+t]}if(a)for(let e=0;e<l;e++)f[g*l+e]/=m-p;if(p=m,++m,h=g+1,g=t,m>s)break}return h<u&&f.fill(o,h*l,u*l),[f,d]}var cP=RM(e=>Math.sqrt(e)),lP={kernelName:Hc,backendName:`cpu`,kernelFunc:zM(Hc,e=>Math.sqrt(e))},uP=vM(((e,t)=>{let n=e-t;return n*n})),dP={kernelName:Zc,backendName:`cpu`,kernelFunc:kM(Zc,uP)},fP=RM((e,t)=>{let{pattern:n,replaceGlobal:r,rewrite:i}=t;return e.replace(new RegExp(n,r?`g`:``),i)}),pP={kernelName:$c,backendName:`cpu`,kernelFunc:BM($c,fP)};function mP(e,t,n,r){let i=gf(e,t.dtype);for(let e=0;e<i.size;e++){let a=i.indexToLoc(e),o=Array(a.length);for(let e=0;e<o.length;e++)o[e]=a[e]*n[e]+r[e];i.set(t.get(...o),...a)}return i}var hP=class{constructor(e,t,n,r,i,a){this.separator=Ql(e),this.nGramWidths=t,this.leftPad=Ql(n),this.rightPad=Ql(r),this.padWidth=i,this.preserveShort=a}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){let n=this.getPadWidth(t);return Math.max(0,e+2*n-t+1)}createNGrams(e,t,n,r,i,a){for(let o=0;o<i;++o){let s=this.getPadWidth(a),c=Math.max(0,s-o),l=Math.max(0,s-(i-(o+1))),u=a-(c+l),d=t+(c>0?0:o-s),f=0;f+=c*this.leftPad.length;for(let t=0;t<u;++t)f+=e[d+t].length;f+=l*this.rightPad.length;let p=c+l+u-1;f+=p*this.separator.length,n[r+o]=new Uint8Array(f);let m=n[r+o],h=0,g=e=>e.forEach(e=>m[h++]=e);for(let e=0;e<c;++e)g(this.leftPad),g(this.separator);for(let t=0;t<u-1;++t)g(e[d+t]),g(this.separator);if(u>0){g(e[d+u-1]);for(let e=0;e<l;++e)g(this.separator),g(this.rightPad)}else{for(let e=0;e<l-1;++e)g(this.rightPad),g(this.separator);g(this.rightPad)}}}compute(e,t){let n=e.length,r=t.length;if(r>0){let e=t[0];if(e!==0)throw Error(`First split value must be 0, got ${e}`);for(let i=1;i<r;++i){let r=t[i]>=e;if(r&&=t[i]<=n,!r)throw Error(`Invalid split value ${t[i]}, must be in [${e}, ${n}]`);e=t[i]}if(e!==n)throw Error(`Last split value must be data size. Expected ${n}, got ${e}`)}let i=r-1,a=Ka(`int32`,r);if(n===0||r===0){let e=Array(n);for(let e=0;e<=i;++e)a[e]=0;return[e,a]}a[0]=0;for(let e=1;e<=i;++e){let n=t[e]-t[e-1],r=0;this.nGramWidths.forEach(e=>{r+=this.getNumNGrams(n,e)}),this.preserveShort&&n>0&&r===0&&(r=1),a[e]=a[e-1]+r}let o=Array(a[i]);for(let n=0;n<i;++n){let r=t[n],i=a[n];if(this.nGramWidths.forEach(a=>{let s=t[n+1]-t[n],c=this.getNumNGrams(s,a);this.createNGrams(e,r,o,i,c,a),i+=c}),this.preserveShort&&i===a[n]){let a=t[n+1]-t[n];if(a===0)continue;let s=a+2*this.padWidth;this.createNGrams(e,r,o,i,1,s)}}return[o,a]}};function gP(e,t,n,r,i,a,o,s){return new hP(n,r,i,a,o,s).compute(e,t)}function _P(e,t,n,r){if(!e.length)return;if(t.length===0){for(let t=0;t<e.length;++t)r.push(e.subarray(t,t+1));return}if(t.length===1){let i=t[0],a=e.indexOf(i);for(;a!==-1;){let t=e.subarray(0,a);(!n||t.length!==0)&&r.push(t),e=e.subarray(a+1),a=e.indexOf(i)}(!n||e.length!==0)&&r.push(e);return}let i=0;for(let a=0;a<e.length+1;a++)if(a===e.length||t.indexOf(e[a])!==-1){let t=e.subarray(i,a);(!n||t.length!==0)&&r.push(t),i=a+1}}function vP(e,t,n){let r=e.length,i=[],a=0,o=0,s=Array(r);for(let c=0;c<r;++c){let r=i.length;_P(e[c],t,n,i);let l=i.length-r;s[c]=l,a+=l,o=Math.max(o,l)}let c=Ka(`int32`,a*2),l=Array(a),u=[r,o],d=0;for(let e=0;e<r;++e)for(let t=0;t<s[e];++t)c[d*2]=e,c[d*2+1]=t,l[d]=i[d],++d;return[c,l,u]}function yP(e,t){let n=Ka(`int32`,e.length);for(let r=0;r<e.length;++r)n[r]=ql(e[r]).modulo(t).getLowBitsUnsigned();return n}var bP=vM(((e,t)=>e-t)),xP=kM(`Sub`,bP,AM(((e,t,n,r)=>({real:e-n,imag:t-r})))),SP={kernelName:`Sub`,backendName:`cpu`,kernelFunc:xP};function CP(e,t){let n=Array(e.rank);for(let r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];let r=gf(n,e.dtype);for(let t=0;t<r.values.length;++t){let n=r.indexToLoc(t),i=Array(e.rank);for(let t=0;t<i.length;t++)i[t]=n[t]%e.shape[t];let a=e.locToIndex(i);r.values[t]=e.values[a]}return r}var wP=(e,t)=>{let n=t.value-e.value;return n===0?e.index-t.index:n};function TP(e,t,n=0,r=e.length-1){for(;r>n;){if(r-n>600){let i=r-n+1,a=t-n+1,o=Math.log(i),s=.5*Math.exp(2*o/3),c=.5*Math.sqrt(o*s*(i-s)/i)*Math.sign(a-i/2);TP(e,t,Math.max(n,Math.floor(t-a*s/i+c)),Math.min(r,Math.floor(t+(i-a)*s/i+c)))}let i=e[t],a=n,o=r;for(Ma(e,n,t),wP(e[r],i)>0&&Ma(e,n,r);a<o;){for(Ma(e,a,o),a++,o--;wP(e[a],i)<0;)a+=1;for(;wP(e[o],i)>0;)--o}wP(e[n],i)===0?Ma(e,n,o):(o+=1,Ma(e,o,r)),o<=t&&(n=o+1),t<=o&&(r=o-1)}}function EP(e,t,n,r,i){let a=t[t.length-1],[o,s]=[e.length/a,a],c=Ga(n,o*r),l=Ga(`int32`,o*r);for(let t=0;t<o;t++){let n=t*s,a=e.subarray(n,n+s),o=Array(a.length);a.forEach((e,t)=>o[t]={value:e,index:t}),r<o.length&&(TP(o,r),o=o.slice(0,r)),i&&o.sort(wP);let u=t*r,d=c.subarray(u,u+r),f=l.subarray(u,u+r);for(let e=0;e<r;e++)d[e]=o[e].value,f[e]=o[e].index}let u=t.slice();return u[u.length-1]=r,[gf(u,n,c),gf(u,`int32`,l)]}function DP(e,t,n,r){let i=Ua(t,n)[0],a=[1,n[0],1];for(let e=0;e<i;e++)a[0]*=n[e];a[1]=n[i];for(let e=i+1;e<n.length;e++)a[2]*=n[e];let o=new Map,s=new Int32Array(n[i]),c=new gu(a,r,e),l=[],u=a[0]===1&&a[2]===1;for(let t=0;t<n[i];t++){let n;if(u)n=e[t].toString();else{let e=[];for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)e.push(c.get(n,t,r));n=e.join(`,`)}let r=o.get(n);if(r!=null)s[t]=r;else{let e=o.size;o.set(n,e),s[t]=e,l.push(t)}}let d=a.slice();d[1]=o.size;let f=new gu(d,r);l.forEach((e,t)=>{for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)f.set(c.get(n,e,r),n,t,r)});let p=n.slice();return p[i]=d[1],{outputValues:f.values,outputShape:p,indices:s}}var OP=s({addImpl:()=>jM,bincountImpl:()=>PM,bincountReduceImpl:()=>FM,bitwiseAndImpl:()=>IM,castImpl:()=>EM,ceilImpl:()=>VM,concatImpl:()=>UM,equalImpl:()=>WM,expImpl:()=>qM,expm1Impl:()=>XM,floorDivImpl:()=>eN,floorImpl:()=>QM,gatherNdImpl:()=>nN,gatherV2Impl:()=>rN,greaterEqualImpl:()=>oN,greaterImpl:()=>iN,lessEqualImpl:()=>uN,lessImpl:()=>cN,linSpaceImpl:()=>fN,logImpl:()=>pN,maxImpl:()=>hN,maximumImpl:()=>gN,minimumImpl:()=>vN,multiplyImpl:()=>bN,negImpl:()=>CN,notEqualImpl:()=>EN,prodImpl:()=>jN,raggedGatherImpl:()=>VN,raggedRangeImpl:()=>UN,raggedTensorToTensorImpl:()=>JN,rangeImpl:()=>YN,rsqrtImpl:()=>XN,scatterImpl:()=>QN,sigmoidImpl:()=>$N,simpleAbsImpl:()=>gM,sliceImpl:()=>nP,sparseFillEmptyRowsImpl:()=>aP,sparseReshapeImpl:()=>oP,sparseSegmentReductionImpl:()=>sP,sqrtImpl:()=>cP,squaredDifferenceImpl:()=>uP,staticRegexReplaceImpl:()=>fP,stridedSliceImpl:()=>mP,stringNGramsImpl:()=>gP,stringSplitImpl:()=>vP,stringToHashBucketFastImpl:()=>yP,subImpl:()=>bP,tileImpl:()=>CP,topKImpl:()=>EP,transposeImpl:()=>ON,uniqueImpl:()=>DP});dd(`cpu`,()=>new hM,1);var kP=zM(`Elu`,e=>e>=0?e:Math.exp(e)-1),AP={kernelName:`Elu`,backendName:`cpu`,kernelFunc:kP};function jP(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{alpha:a}=r;X([i],`leakyRelu`);let o=M(i.shape),s=n.data.get(i.dataId).values,c=Ga(`float32`,o);for(let e=0;e<s.length;e++)c[e]=s[e]<0?a*s[e]:s[e];return n.makeTensorInfo(i.shape,`float32`,c)}var MP={kernelName:zs,backendName:`cpu`,kernelFunc:jP},NP=vM((e,t)=>e<0?t*e:e);function PP(e){let{inputs:t,backend:n}=e,{x:r,alpha:i}=t;X([r,i],`prelu`);let a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,[s,c]=NP(r.shape,i.shape,a,o,`float32`);return n.makeTensorInfo(c,`float32`,s)}var FP={kernelName:mc,backendName:`cpu`,kernelFunc:PP},IP=zM(Sc,e=>Math.max(0,e)),LP={kernelName:Sc,backendName:`cpu`,kernelFunc:IP},RP=zM(Oc,e=>Math.min(Math.max(0,e),6)),zP={kernelName:Oc,backendName:`cpu`,kernelFunc:RP};function BP(e,t,n,r,i){if(n===`linear`)return SM({inputs:{x:t},backend:e});if(n===`relu`)return IP({inputs:{x:t},backend:e});if(n===`elu`)return kP({inputs:{x:t},backend:e});if(n===`relu6`)return RP({inputs:{x:t},backend:e});if(n===`prelu`)return PP({inputs:{x:t,alpha:r},backend:e});if(n===`leakyrelu`)return jP({inputs:{x:t},backend:e,attrs:{alpha:i}});if(n===`sigmoid`)return eP({inputs:{x:t},backend:e});throw Error(`Activation ${n} has not been implemented for the CPU backend.`)}function VP(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{shape:a}=r,o=M(i.shape),s=Ha(a,o),c=M(s);j(o===c,()=>`The new shape (${s}) has ${c} elements and the old shape (${i.shape}) has ${o} elements. The new shape and old shape must have the same number of elements.`),n.incRef(i.dataId);let l=n.data.get(i.dataId);if(l.complexTensorInfos!=null){let e=l.complexTensorInfos.real,t=l.complexTensorInfos.imag;e.shape=s,t.shape=s}return{dataId:i.dataId,shape:s,dtype:i.dtype}}var HP={kernelName:Cc,backendName:`cpu`,kernelFunc:VP};function UP(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a}=t,{transposeA:o,transposeB:s}=r;X([i,a],`matMul`);let c=i.shape.length,l=a.shape.length,u=o?i.shape[c-2]:i.shape[c-1],d=s?a.shape[l-1]:a.shape[l-2],f=o?i.shape[c-1]:i.shape[c-2],p=s?a.shape[l-2]:a.shape[l-1],m=i.shape.slice(0,-2),h=a.shape.slice(0,-2),g=M(m),_=M(h),v=Im(i.shape.slice(0,-2),a.shape.slice(0,-2)).concat([f,p]);j(u===d,()=>`Error in matMul: inner shapes (${u}) and (${d}) of Tensors with shapes ${i.shape} and ${a.shape} and transposeA=${o} and transposeB=${s} must match.`);let y=o?[g,u,f]:[g,f,u],b=s?[_,p,d]:[_,d,p],x=VP({inputs:{x:i},backend:n,attrs:{shape:y}}),S=VP({inputs:{x:a},backend:n,attrs:{shape:b}}),C=o?x.shape[1]:x.shape[2],w=o?x.shape[2]:x.shape[1],T=s?S.shape[1]:S.shape[2],E=Math.max(g,_),D=n.data.get(x.dataId).values,O=n.data.get(S.dataId).values,k=N(x.shape),ee=N(S.shape),[A,te,ne]=o?[k[0],1,k[1]]:[k[0],k[1],1],[re,ie,ae]=s?[1,ee[1],ee[0]]:[ee[1],1,ee[0]],oe=w*T,se=gf([E,w,T],x.dtype),ce=se.values,le=n.blockSize;for(let e=0;e<E;e++){let t=e%g,n=e%_;for(let r=0;r<w;r+=le){let i=Math.min(r+le,w);for(let a=0;a<T;a+=le){let o=Math.min(a+le,T);for(let s=0;s<C;s+=le){let c=Math.min(s+le,C);for(let l=r;l<i;l++)for(let r=a;r<o;r++){let i=0;for(let e=s;e<c;e++){let a=D[t*A+l*te+e*ne],o=O[e*re+r*ie+n*ae];i+=a*o}ce[e*oe+(l*T+r)]+=i}}}}}return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(S),n.makeTensorInfo(v,se.dtype,se.values)}var WP={kernelName:Bo,backendName:`cpu`,kernelFunc:UP};function GP(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a,bias:o,preluActivationWeights:s}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=r,f,p,m,h=[];f=UP({inputs:{a:i,b:a},attrs:{transposeA:c,transposeB:l},backend:n}),o&&(p=MM({inputs:{a:f,b:o},backend:n}),h.push(f),f=p),u&&(m=BP(n,f,u,s,d),h.push(f),f=m);for(let e of h)n.disposeIntermediateTensorInfo(e);return f}var KP={kernelName:gl,backendName:`cpu`,kernelFunc:GP},qP={kernelName:Eo,backendName:`cpu`,kernelFunc:zM(Eo,e=>Math.acos(e))},JP={kernelName:Do,backendName:`cpu`,kernelFunc:zM(Do,e=>Math.acosh(e))};function YP(e){let{inputs:t,backend:n}=e,r=t;X(t,`addN`);let i=r.map(e=>n.data.get(e.dataId).values),a=gf(r[0].shape,r[0].dtype),o=a.values;for(let e=0;e<r.length;e++){let t=i[e];for(let e=0;e<o.length;e++)o[e]+=t[e]}return n.makeTensorInfo(a.shape,a.dtype,a.values)}var XP={kernelName:Oo,backendName:`cpu`,kernelFunc:YP};function ZP(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`all`);let s=Ua(a,i.shape),c=s,l=ih(c,i.shape.length),u=i;l!=null&&(u=kN({inputs:{x:i},backend:n,attrs:{perm:l}}),c=oh(c.length,i.shape.length)),rh(`all`,c,u.shape.length);let[d,f]=th(u.shape,c),p=M(f),m=co(M(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];n&&=r}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=nh(d,s),t=VP({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var QP={kernelName:`All`,backendName:`cpu`,kernelFunc:ZP};function $P(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`any`);let s=Ua(a,i.shape),c=s,l=ih(c,i.shape.length),u=i;l!=null&&(u=kN({inputs:{x:i},backend:n,attrs:{perm:l}}),c=oh(c.length,i.shape.length)),rh(`any`,c,u.shape.length);let[d,f]=th(u.shape,c),p=M(f),m=co(M(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];n||=r}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=nh(d,s),t=VP({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var eF={kernelName:`Any`,backendName:`cpu`,kernelFunc:$P};function tF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r;X(i,`argMax`);let o=Ua(a,i.shape),s=ih(o,i.shape.length),c=i,l=[];s!=null&&(c=kN({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=oh(o.length,c.shape.length)),o=[o[0]],rh(`argMax`,o,c.shape.length);let[u,d]=th(c.shape,o),f=co(M(u),`int32`),p=M(d),m=n.data.get(c.dataId).values;for(let e=0;e<f.length;++e){let t=e*p,n=m[t],r=0;for(let e=0;e<p;++e){let i=m[t+e];i>n&&(n=i,r=e)}f[e]=r}return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(u,`int32`,f)}var nF={kernelName:ko,backendName:`cpu`,kernelFunc:tF};function rF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r;X(i,`argMin`);let o=Ua(a,i.shape),s=ih(o,i.shape.length),c=i,l=[];s!=null&&(c=kN({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=oh(o.length,c.shape.length)),o=[o[0]],rh(`argMin`,o,c.shape.length);let[u,d]=th(c.shape,o),f=co(M(u),`int32`),p=M(d),m=n.data.get(c.dataId).values;for(let e=0;e<f.length;++e){let t=e*p,n=m[t],r=0;for(let e=0;e<p;++e){let i=m[t+e];i<n&&(n=i,r=e)}f[e]=r}return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(u,`int32`,f)}var iF={kernelName:Ao,backendName:`cpu`,kernelFunc:rF},aF={kernelName:jo,backendName:`cpu`,kernelFunc:zM(jo,e=>Math.asin(e))},oF={kernelName:Mo,backendName:`cpu`,kernelFunc:zM(Mo,e=>Math.asinh(e))},sF={kernelName:No,backendName:`cpu`,kernelFunc:zM(No,e=>Math.atan(e))},cF={kernelName:Fo,backendName:`cpu`,kernelFunc:kM(Fo,vM((e,t)=>Math.atan2(e,t)))},lF={kernelName:Po,backendName:`cpu`,kernelFunc:zM(Po,e=>Math.atanh(e))};function uF(e,t,n,r,i,a){let o=i.strideHeight,s=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,u=i.effectiveFilterHeight,d=i.effectiveFilterWidth,f=i.padInfo.top,p=i.padInfo.left,m=a===`max`?-1/0:1/0,h=gf(i.outShape,n),g=h.values,_=i.outShape[1]*i.outShape[2]*i.outShape[3],v=i.outShape[2]*i.outShape[3],y=i.outShape[3];for(let t=0;t<i.batchSize;++t){let n=t*_,h=t*r[0];for(let t=0;t<i.inChannels;++t)for(let _=0;_<i.outHeight;++_){let b=_*o-f,x=Math.max(0,b),S=Math.min(i.inHeight,u+b),C=n+_*v;for(let n=0;n<i.outWidth;++n){let o=n*s-p,u=Math.max(0,o),f=Math.min(i.inWidth,d+o),_=m,v=0,b=0;for(let n=x;n<S;n+=c){let i=h+n*r[1];for(let n=u;n<f;n+=l){let o=e[i+n*r[2]+t];a===`max`&&o>_?_=o:a===`avg`&&(v+=o,b++)}if(isNaN(_))break}let w=C+n*y+t;g[w]=a===`avg`?v/b:_}}}return h}function dF(e,t,n,r,i=!1,a=!1){let o=gf(r.outShape,`int32`),s=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,u=r.dilationWidth,d=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=r.padInfo.top,m=r.padInfo.left,h=gf(t,n,e);for(let e=0;e<r.batchSize;++e)for(let t=0;t<r.inChannels;++t)for(let n=0;n<r.outHeight;++n){let g=n*s-p,_=g;for(;_<0;)_+=l;let v=Math.min(r.inHeight,d+g);for(let s=0;s<r.outWidth;++s){let d=s*c-m,p=d;for(;p<0;)p+=u;let y=Math.min(r.inWidth,f+d),b=-1/0,x=-1;for(let n=_;n<v;n+=l){let o=n-g;for(let s=p;s<y;s+=u){let c=s-d,l=h.get(e,n,s,t);l>b&&(b=l,x=i?a?((e*r.inHeight+n)*r.inWidth+s)*r.inChannels+t:(n*r.inWidth+s)*r.inChannels+t:o*f+c)}}o.set(x,e,n,s,t)}}return o}function fF(e,t,n,r,i,a){let o=i.strideDepth,s=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,u=i.dilationHeight,d=i.dilationWidth,f=i.effectiveFilterDepth,p=i.effectiveFilterHeight,m=i.effectiveFilterWidth,h=i.padInfo.front,g=i.padInfo.top,_=i.padInfo.left,v=a===`max`?-1/0:1/0,y=gf(i.outShape,n),b=y.values,x=i.outShape[1]*i.outShape[2]*i.outShape[3]*i.outShape[4],S=i.outShape[2]*i.outShape[3]*i.outShape[4],C=i.outShape[3]*i.outShape[4],w=i.outShape[4];for(let t=0;t<i.batchSize;++t){let n=t*x,y=t*r[0];for(let t=0;t<i.inChannels;++t)for(let x=0;x<i.outDepth;++x){let T=x*o-h,E=T;for(;E<0;)E+=l;let D=Math.min(i.inDepth,f+T),O=n+x*S;for(let n=0;n<i.outHeight;++n){let o=n*s-g,f=o;for(;f<0;)f+=u;let h=Math.min(i.inHeight,p+o),x=O+n*C;for(let n=0;n<i.outWidth;++n){let o=n*c-_,s=o;for(;s<0;)s+=d;let p=Math.min(i.inWidth,m+o),g=x+n*w,S=v,C=0,T=0;for(let n=E;n<D;n+=l){let i=y+n*r[1];for(let n=f;n<h;n+=u){let o=i+n*r[2];for(let n=s;n<p;n+=d){let i=e[o+n*r[3]+t];if(a===`max`&&i>S?S=i:a===`avg`&&(C+=i,T++),isNaN(S))break}if(isNaN(S))break}if(isNaN(S))break}let O=g+t;b[O]=a===`avg`?C/Math.max(T,1):S}}}}return y}function pF(e,t){let n=gf(t.outShape,`int32`),r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,o=t.dilationDepth,s=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,d=t.effectiveFilterWidth,f=t.padInfo.front,p=t.padInfo.top,m=t.padInfo.left;for(let h=0;h<t.batchSize;++h)for(let g=0;g<t.inChannels;++g)for(let _=0;_<t.outDepth;++_){let v=_*r-f,y=v;for(;y<0;)y+=o;let b=Math.min(t.inDepth,l+v);for(let r=0;r<t.outHeight;++r){let l=r*i-p,f=l;for(;f<0;)f+=s;let x=Math.min(t.inHeight,u+l);for(let i=0;i<t.outWidth;++i){let p=i*a-m,S=p;for(;S<0;)S+=c;let C=Math.min(t.inWidth,d+p),w=-1/0,T=-1;for(let t=y;t<b;t+=o){let n=t-v;for(let r=f;r<x;r+=s){let i=r-l;for(let a=S;a<C;a+=c){let o=a-p,s=e.get(h,t,r,a,g);s>=w&&(w=s,T=n*u*d+i*u+o)}}}n.set(T,h,_,r,i,g)}}}return n}function mF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;X(i,`avgPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;j(dp(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Zf(i.shape,a,o,1,s,c),u;if(l.filterWidth===1&&l.filterHeight===1&&Ia(l.inShape,l.outShape))u=SM({inputs:{x:i},backend:n});else{let e=n.data.get(i.dataId).values,t=N(i.shape),r=uF(e,i.shape,i.dtype,t,l,`avg`);u=n.makeTensorInfo(l.outShape,i.dtype,r.values)}return u}var hF={kernelName:Io,backendName:`cpu`,kernelFunc:mF};function gF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r;X(i,`avgPool3d`);let u=Qf(i.shape,a,o,1,s,c,l),d=n.data.get(i.dataId).values,f=fF(d,i.shape,i.dtype,N(i.shape),u,`avg`);return n.makeTensorInfo(f.shape,`float32`,f.values)}var _F={kernelName:Ro,backendName:`cpu`,kernelFunc:gF};function vF(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,{filterSize:o,strides:s,pad:c,dimRoundingMode:l}=r;X([i,a],`avgPool3DGrad`);let u=Qf(a.shape,o,s,1,c,l),d=u.strideDepth,f=u.strideHeight,p=u.strideWidth,m=u.filterDepth,h=u.filterHeight,g=u.filterWidth,_=u.dilationDepth,v=u.dilationHeight,y=u.dilationWidth,b=u.effectiveFilterDepth,x=u.effectiveFilterHeight,S=u.effectiveFilterWidth,C=b-1-u.padInfo.front,w=S-1-u.padInfo.left,T=x-1-u.padInfo.top,E=gf(a.shape,`float32`),D=1/(m*h*g),O=n.bufferSync(i);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inDepth;++n)for(let r=0;r<u.inHeight;++r)for(let i=0;i<u.inWidth;++i){let a=n-C,o=r-T,s=i-w,c=0;for(let n=0;n<b;n+=_){let r=(a+n)/d;if(!(r<0||r>=u.outDepth||Math.floor(r)!==r))for(let n=0;n<x;n+=v){let i=(o+n)/f;if(!(i<0||i>=u.outHeight||Math.floor(i)!==i))for(let n=0;n<S;n+=y){let a=(s+n)/p;if(a<0||a>=u.outWidth||Math.floor(a)!==a)continue;let o=O.get(e,r,i,a,t);c+=o}}}E.set(c*D,e,n,r,i,t)}return n.makeTensorInfo(E.shape,E.dtype,E.values)}var yF={kernelName:zo,backendName:`cpu`,kernelFunc:vF};function bF(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a;X([i,a],`avgPoolGrad`);let{filterSize:s,strides:c,pad:l}=r,u=Zf(o.shape,s,c,1,l),d=u.strideHeight,f=u.strideWidth,p=u.filterHeight,m=u.filterWidth,h=u.dilationHeight,g=u.dilationWidth,_=u.effectiveFilterHeight,v=u.effectiveFilterWidth,y=v-1-u.padInfo.left,b=_-1-u.padInfo.top,x=gf(o.shape,`float32`),S=1/(p*m),C=n.data.get(i.dataId).values,w=gf(i.shape,`float32`,C);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inHeight;++n)for(let r=0;r<u.inWidth;++r){let i=n-b,a=r-y,o=0;for(let n=0;n<_;n+=h){let r=(i+n)/d;if(!(r<0||r>=u.outHeight||Math.floor(r)!==r))for(let n=0;n<v;n+=g){let i=(a+n)/f;if(i<0||i>=u.outWidth||Math.floor(i)!==i)continue;let s=w.get(e,r,i,t);o+=s}}x.set(o*S,e,n,r,t)}return n.makeTensorInfo(x.shape,x.dtype,x.values)}var xF={kernelName:Lo,backendName:`cpu`,kernelFunc:bF};function SF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,scale:a,offset:o,mean:s,variance:c}=t;j(s.shape.length===c.shape.length,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),j(o==null||s.shape.length===o.shape.length,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),j(a==null||s.shape.length===a.shape.length,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`),X([i,s,c,a,o],`batchNorm`);let{varianceEpsilon:l}=r;l??=.001;let u=n.data.get(i.dataId).values,d=n.data.get(s.dataId).values,f=n.data.get(c.dataId).values,p=a?n.data.get(a.dataId).values:new Float32Array([1]),m=o?n.data.get(o.dataId).values:new Float32Array([0]),h=new Float32Array(u.length),g=m.length,_=p.length,v=f.length,y=d.length,b=0,x=0,S=0,C=0;for(let e=0;e<u.length;++e)h[e]=m[b++]+(u[e]-d[x++])*p[S++]/Math.sqrt(f[C++]+l),b>=g&&(b=0),x>=y&&(x=0),S>=_&&(S=0),C>=v&&(C=0);return n.makeTensorInfo(i.shape,i.dtype,h)}var CF={kernelName:Os,backendName:`cpu`,kernelFunc:SF};function wF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,crops:o}=r;X([i],`batchToSpaceND`);let s=a.reduce((e,t)=>e*t),c=mx(i.shape,a,s),l=hx(c.length,a.length),u=gx(i.shape,a,s),d=_x(o,a.length),f=vx(u,o,a.length),p=VP({inputs:{x:i},backend:n,attrs:{shape:c}}),m=kN({inputs:{x:p},backend:n,attrs:{perm:l}}),h=VP({inputs:{x:m},backend:n,attrs:{shape:u}}),g=rP({inputs:{x:h},backend:n,attrs:{begin:d,size:f}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),g}var TF={kernelName:Vo,backendName:`cpu`,kernelFunc:wF};function EF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o}=r,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,l=PM(s,c,a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,l)}var DF={kernelName:Ho,backendName:`cpu`,kernelFunc:EF};function OF(e){let{inputs:t,backend:n}=e,{s0:r,s1:i}=t,a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,s=Im(Array.from(a),Array.from(o));return n.makeTensorInfo([s.length],`int32`,Int32Array.from(s))}var kF={kernelName:Go,backendName:`cpu`,kernelFunc:OF},AF={kernelName:Jo,backendName:`cpu`,kernelFunc:zM(Jo,(e,t)=>{let n=t;return e>n.clipValueMax?n.clipValueMax:e<n.clipValueMin?n.clipValueMin:e})},jF={kernelName:Xo,backendName:`cpu`,kernelFunc:e=>{let{x:t}=e.inputs,n=e.backend,r=new Float32Array(M(t.shape)),i=n.data.get(t.dataId),a=i.complexTensorInfos.real,o=i.complexTensorInfos.imag,s=n.data.get(a.dataId).values,c=n.data.get(o.dataId).values;for(let e=0;e<s.length;e++){let t=s[e],n=c[e];r[e]=Math.hypot(t,n)}return n.makeOutput(r,t.shape,`float32`)}};function MF(e){let{inputs:t,backend:n}=e,{input:r}=t,i=n.data.get(r.dataId).complexTensorInfos.imag,a=n.data.get(i.dataId).values;return n.makeTensorInfo(i.shape,i.dtype,a)}var NF={kernelName:Fs,backendName:`cpu`,kernelFunc:MF};function PF(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r,a=Ua(i,t[0].shape)[0];ax(t.map(e=>e.shape),a);let o=ox(t.map(e=>e.shape),a);if(M(o)===0)return n.makeTensorInfo(o,t[0].dtype,[]);let s=t.filter(e=>M(e.shape)>0);if(s.length===1)return SM({inputs:{x:s[0]},backend:n});if(s[0].dtype===`complex64`){let e=s.map(e=>wM({inputs:{input:e},backend:n})),t=s.map(e=>MF({inputs:{input:e},backend:n})),r=PF({inputs:e,backend:n,attrs:{axis:a}}),i=PF({inputs:t,backend:n,attrs:{axis:a}}),o=yM({inputs:{real:r,imag:i},backend:n});return e.forEach(e=>n.disposeIntermediateTensorInfo(e)),t.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),o}let c=s.map(e=>{let t=[-1,M(e.shape.slice(a))];return VP({inputs:{x:e},backend:n,attrs:{shape:t}})}),l=c.map(e=>({vals:n.data.get(e.dataId).values,shape:e.shape}));o=ox(c.map(e=>e.shape),1);let u=c[0].shape[0]===1,d=UM(l,o,t[0].dtype,u),f=ox(s.map(e=>e.shape),a),p=n.makeTensorInfo(f,t[0].dtype,d);return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var FF={kernelName:Zo,backendName:`cpu`,kernelFunc:PF};function IF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dataFormat:c,dilations:l,dimRoundingMode:u}=r;X([i,a],`conv2d`);let d=pp(c),f=$f(i.shape,a.shape,o,l,s,u,!1,d),p=f.filterHeight,m=f.filterWidth,h=f.dilationHeight,g=f.dilationWidth,_=f.padInfo.left,v=f.padInfo.top,y=f.dataFormat===`channelsLast`,b=new gu(f.outShape,i.dtype),x=N(i.shape),S=N(a.shape),C=x[0],w=y?x[1]:x[2],T=y?x[2]:1,E=y?1:x[1],D=b.strides[0],O=y?b.strides[1]:b.strides[2],k=y?b.strides[2]:1,ee=y?1:b.strides[1],A=n.data.get(i.dataId).values,te=n.data.get(a.dataId).values,ne=b.values;for(let e=0;e<f.batchSize;++e){let t=e*C,n=e*D;for(let e=0;e<f.outHeight;++e){let r=n+e*O,i=e*f.strideHeight-v;for(let e=0;e<p;++e){let n=i+e*h;if(n<0||n>=f.inHeight)continue;let a=e*S[0],o=t+n*w;for(let e=0;e<f.outWidth;++e){let t=r+e*k,n=e*f.strideWidth-_;for(let e=0;e<m;++e){let r=n+e*g;if(r<0||r>=f.inWidth)continue;let i=a+e*S[1],s=o+r*T,c=i;for(let e=0;e<f.inChannels;++e){let n=A[s+e*E];for(let e=0;e<f.outChannels;++e)ne[t+e*ee]+=n*te[c+e];c+=f.outChannels}}}}}}return n.makeTensorInfo(b.shape,b.dtype,ne)}var LF={kernelName:Qo,backendName:`cpu`,kernelFunc:IF};function RF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,dataFormat:c,dimRoundingMode:l,filterShape:u}=r;X([i,a],`conv2dBackpropFilter`);let d=pp(c),f=$f(i.shape,u,o,1,s,l,!1,d),{strideHeight:p,strideWidth:m,filterHeight:h,filterWidth:g}=f,_=f.dataFormat===`channelsLast`,v=new gu(f.filterShape,`float32`),y=f.padInfo.left,b=f.padInfo.top,x=n.data.get(i.dataId).values,S=n.data.get(a.dataId).values,C=new gu(i.shape,i.dtype,x),w=new gu(a.shape,a.dtype,S);for(let e=0;e<h;++e){let t=Math.max(0,Math.ceil((b-e)/p)),n=Math.min(f.outHeight,(f.inHeight+b-e)/p);for(let r=0;r<g;++r){let i=Math.max(0,Math.ceil((y-r)/m)),a=Math.min(f.outWidth,(f.inWidth+y-r)/m);for(let o=0;o<f.inChannels;++o)for(let s=0;s<f.outChannels;++s){let c=0;for(let l=0;l<f.batchSize;++l)for(let u=t;u<n;++u){let t=e+u*p-b;for(let e=i;e<a;++e){let n=r+e*m-y;_?c+=C.get(l,t,n,o)*w.get(l,u,e,s):c+=C.get(l,o,t,n)*w.get(l,s,u,e)}}v.set(c,e,r,o,s)}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}var zF={kernelName:$o,backendName:`cpu`,kernelFunc:RF};function BF(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{inputShape:o,strides:s,pad:c,dataFormat:l,dimRoundingMode:u}=r;X([i,a],`conv2dBackpropInput`);let d=N(a.shape),f=N(i.shape),p=pp(l),m=$f(o,a.shape,s,1,c,u,!1,p),h=new gu(m.inShape,`float32`),g=h.values,_=n.data.get(i.dataId).values,v=n.data.get(a.dataId).values,[y,b,x]=d,{batchSize:S,filterHeight:C,filterWidth:w,inChannels:T,inHeight:E,inWidth:D,outChannels:O,outHeight:k,outWidth:ee,strideHeight:A,strideWidth:te}=m;p=m.dataFormat;let ne=C-1-m.padInfo.top,re=w-1-m.padInfo.left,ie=p===`channelsLast`,ae=h.strides[0],oe=ie?h.strides[1]:h.strides[2],se=ie?h.strides[2]:1,ce=ie?1:h.strides[1],le=f[0],ue=ie?f[1]:f[2],de=ie?f[2]:1,fe=ie?1:f[1];for(let e=0;e<S;++e)for(let t=0;t<T;++t)for(let n=0;n<E;++n){let r=n-ne,i=Math.max(0,Math.ceil(r/A)),a=Math.min(k,(C+r)/A);for(let o=0;o<D;++o){let s=o-re,c=Math.max(0,Math.ceil(s/te)),l=Math.min(ee,(w+s)/te),u=0;for(let n=i;n<a;++n){let i=n*A-r;for(let r=c;r<l;++r){let a=r*te-s,o=le*e+ue*n+de*r,c=y*(C-1-i)+b*(w-1-a)+x*t;for(let e=0;e<O;++e){let t=_[o+fe*e],n=v[c+e];u+=t*n}}}let d=ae*e+oe*n+se*o+ce*t;g[d]=u}}return n.makeTensorInfo(h.shape,h.dtype,h.values)}var VF={kernelName:es,backendName:`cpu`,kernelFunc:BF};function HF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r;X([i,a],`conv3d`);let l=ep(i.shape,a.shape,o,c,s),{filterDepth:u,filterHeight:d,filterWidth:f,dilationDepth:p,dilationHeight:m,dilationWidth:h,padInfo:g}=l,_=g.front,v=g.left,y=g.top,b=new gu(l.outShape,i.dtype),x=n.data.get(i.dataId).values,S=n.data.get(a.dataId).values,C=b.values,w=N(i.shape),T=N(a.shape);for(let e=0;e<l.batchSize;++e){let t=e*w[0],n=e*b.strides[0];for(let e=0;e<l.outDepth;++e){let r=n+e*b.strides[1],i=e*l.strideDepth-_;for(let e=0;e<u;++e){let n=i+e*p;if(n<0||n>=l.inDepth)continue;let a=e*T[0],o=t+n*w[1];for(let e=0;e<l.outHeight;++e){let t=r+e*b.strides[2],n=e*l.strideHeight-y;for(let e=0;e<d;++e){let r=n+e*m;if(r<0||r>=l.inHeight)continue;let i=a+e*T[1],s=o+r*w[2];for(let e=0;e<l.outWidth;++e){let n=t+e*l.outChannels,r=e*l.strideWidth-v;for(let e=0;e<f;++e){let t=r+e*h;if(t<0||t>=l.inWidth)continue;let a=i+e*T[2],o=s+t*l.inChannels,c=a;for(let e=0;e<l.inChannels;++e){let t=x[o+e];for(let e=0;e<l.outChannels;++e)C[n+e]+=t*S[c+e];c+=l.outChannels}}}}}}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}var UF={kernelName:ts,backendName:`cpu`,kernelFunc:HF};function WF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,filterShape:c}=r;X([i,a],`conv3dBackpropFilterV2`);let l=N(i.shape),u=N(a.shape),d=ep(i.shape,c,o,1,s),f=d.strideDepth,p=d.strideHeight,m=d.strideWidth,h=d.filterDepth,g=d.filterHeight,_=d.filterWidth,v=new gu(d.filterShape,`float32`),y=v.values,[b,x,S,C]=v.strides,w=n.data.get(a.dataId).values,[T,E,D,O]=u,k=n.data.get(i.dataId).values,[ee,A,te,ne]=l,re=d.padInfo.front,ie=d.padInfo.left,ae=d.padInfo.top;for(let e=0;e<h;++e){let t=Math.max(0,Math.ceil((re-e)/f)),n=Math.min(d.outDepth,(d.inDepth+re-e)/f),r=e*b;for(let i=0;i<g;++i){let a=Math.max(0,Math.ceil((ae-i)/p)),o=Math.min(d.outHeight,(d.inHeight+ae-i)/p),s=i*x+r;for(let r=0;r<_;++r){let c=Math.max(0,Math.ceil((ie-r)/m)),l=Math.min(d.outWidth,(d.inWidth+ie-r)/m),u=r*S+s;for(let s=0;s<d.inChannels;++s){let h=s*C+u;for(let u=0;u<d.outChannels;++u){let g=0;for(let h=0;h<d.batchSize;++h){let d=h*ee,_=h*T;for(let h=t;h<n;++h){let t=(e+h*f-re)*A+d,n=h*E+_;for(let e=a;e<o;++e){let a=(i+e*p-ae)*te+t,o=e*D+n;for(let e=c;e<l;++e){let t=(r+e*m-ie)*ne+a,n=e*O+o;g+=k[t+s]*w[n+u]}}}}y[h+u]=g}}}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}var GF={kernelName:ns,backendName:`cpu`,kernelFunc:WF};function KF(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{pad:o,strides:s,inputShape:c}=r;X([i],`conv3dBackpropInputV2`);let l=N(i.shape),u=N(a.shape),d=ep(c,a.shape,s,1,o),f=new gu(d.inShape,`float32`),p=f.values,[m,h,g,_]=f.strides,v=n.data.get(i.dataId).values,[y,b,x,S]=l,C=n.data.get(a.dataId).values,[w,T,E,D]=u,{batchSize:O,filterDepth:k,filterHeight:ee,filterWidth:A,inChannels:te,inDepth:ne,inHeight:re,inWidth:ie,outChannels:ae,outDepth:oe,outHeight:se,outWidth:ce,strideDepth:le,strideHeight:ue,strideWidth:de}=d,fe=k-1-d.padInfo.front,pe=ee-1-d.padInfo.top,me=A-1-d.padInfo.left;for(let e=0;e<O;++e)for(let t=0;t<te;++t)for(let n=0;n<ne;++n){let r=n-fe,i=Math.max(0,Math.ceil(r/le)),a=Math.min(oe,(k+r)/le);for(let o=0;o<re;++o){let s=o-pe,c=Math.max(0,Math.ceil(s/ue)),l=Math.min(se,(ee+s)/ue);for(let u=0;u<ie;++u){let d=u-me,f=Math.max(0,Math.ceil(d/de)),O=Math.min(ce,(A+d)/de),te=0;for(let n=i;n<a;++n){let i=n*le-r;for(let r=c;r<l;++r){let a=r*ue-s;for(let o=f;o<O;++o){let s=o*de-d,c=y*e+b*n+x*r+S*o,l=w*(k-1-i)+T*(ee-1-a)+E*(A-1-s)+D*t;for(let e=0;e<ae;++e){let t=v[c+e],n=C[l+e];te+=t*n}}}}p[m*e+h*n+g*o+_*u+t]=te}}}return n.makeTensorInfo(f.shape,f.dtype,f.values)}var qF={kernelName:rs,backendName:`cpu`,kernelFunc:KF},JF={kernelName:`Cos`,backendName:`cpu`,kernelFunc:zM(`Cos`,e=>Math.cos(e))},YF={kernelName:is,backendName:`cpu`,kernelFunc:zM(is,e=>Math.cosh(e))};function XF(e){let{inputs:t,backend:n,attrs:r}=e,{image:i,boxes:a,boxInd:o}=t,{cropSize:s,method:c,extrapolationValue:l}=r,[u,d,f,p]=i.shape,m=a.shape[0],[h,g]=s,_=gf([m,h,g,p],`float32`),v=n.data.get(a.dataId).values,y=n.data.get(o.dataId).values,b=n.data.get(i.dataId).values,x=N(i.shape),S=N(_.shape);for(let e=0;e<m;e++){let t=e*4,n=v[t],r=v[t+1],i=v[t+2],a=v[t+3],o=y[e];if(o>=u)continue;let s=h>1?(i-n)*(d-1)/(h-1):0,m=g>1?(a-r)*(f-1)/(g-1):0;for(let t=0;t<h;t++){let u=h>1?n*(d-1)+t*s:.5*(n+i)*(d-1);if(u<0||u>d-1){for(let n=0;n<g;n++)for(let r=0;r<p;r++){let i=r+n*S[2]+t*S[1]+e*S[0];_.values[i]=l}continue}if(c===`bilinear`){let n=Math.floor(u),i=Math.ceil(u),s=u-n;for(let c=0;c<g;c++){let u=g>1?r*(f-1)+c*m:.5*(r+a)*(f-1);if(u<0||u>f-1){for(let n=0;n<p;n++){let r=n+c*S[2]+t*S[1]+e*S[0];_.values[r]=l}continue}let d=Math.floor(u),h=Math.ceil(u),v=u-d;for(let r=0;r<p;r++){let a=r+d*x[2]+n*x[1]+o*x[0],l=b[a];a=r+h*x[2]+n*x[1]+o*x[0];let u=b[a];a=r+d*x[2]+i*x[1]+o*x[0];let f=b[a];a=r+h*x[2]+i*x[1]+o*x[0];let p=b[a],m=l+(u-l)*v,g=f+(p-f)*v;a=r+c*S[2]+t*S[1]+e*S[0],_.values[a]=m+(g-m)*s}}}else for(let n=0;n<g;++n){let i=g>1?r*(f-1)+n*m:.5*(r+a)*(f-1);if(i<0||i>f-1){for(let r=0;r<p;r++){let i=r+n*S[2]+t*S[1]+e*S[0];_.values[i]=l}continue}let s=Math.round(i),c=Math.round(u);for(let r=0;r<p;r++){let i=r+s*x[2]+c*x[1]+o*x[0],a=r+n*S[2]+t*S[1]+e*S[0];_.values[a]=b[i]}}}}return n.makeTensorInfo(_.shape,_.dtype,_.values)}var ZF={kernelName:ss,backendName:`cpu`,kernelFunc:XF};function QF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;X(i,`cumprod`);let c=ih([a],i.shape.length),l=i;c!=null&&(l=kN({inputs:{x:i},backend:n,attrs:{perm:c}}));let u=oh(1,i.shape.length)[0];if(u!==l.shape.length-1)throw Error(`backend.cumprod in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);let d=ku(l.dtype,`int32`),f=so(M(l.shape),d),p=n.data.get(l.dataId).values,m=l.shape[l.shape.length-1],h=s?(e,t)=>e+m-t-1:(e,t)=>e+t;for(let e=0;e<p.length;e+=m)for(let t=0;t<m;t++){let n=h(e,t);if(t===0)f[n]=o?1:p[n];else{let r=h(e,t-1);f[n]=o?p[r]*f[r]:p[n]*f[r]}}let g=n.makeTensorInfo(l.shape,d,f);if(c!=null){let e=ah(c),t=kN({inputs:{x:g},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(l),t}return g}var $F={kernelName:as,backendName:`cpu`,kernelFunc:QF};function eI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;X(i,`cumsum`);let c=ih([a],i.shape.length),l=i;c!=null&&(l=kN({inputs:{x:i},backend:n,attrs:{perm:c}}));let u=oh(1,i.shape.length)[0];if(u!==l.shape.length-1)throw Error(`backend.cumsum in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);let d=ku(l.dtype,`int32`),f=co(M(l.shape),d),p=n.data.get(l.dataId).values,m=l.shape[l.shape.length-1],h=s?(e,t)=>e+m-t-1:(e,t)=>e+t;for(let e=0;e<p.length;e+=m)for(let t=0;t<m;t++){let n=h(e,t);if(t===0)f[n]=o?0:p[n];else{let r=h(e,t-1);f[n]=o?p[r]+f[r]:p[n]+f[r]}}let g=n.makeTensorInfo(l.shape,d,f);if(c!=null){let e=ah(c),t=kN({inputs:{x:g},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(l),t}return g}var tI={kernelName:os,backendName:`cpu`,kernelFunc:eI};function nI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o,binaryOutput:s}=r;if(i.shape.length===1){let e=n.data.get(i.dataId).values,t=n.data.get(a.dataId).values,r=PM(e,t,a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,r)}else if(i.shape.length===2){let e=FM(n.bufferSync(i),n.bufferSync(a),o,s);return n.makeTensorInfo(e.shape,a.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var rI={kernelName:cs,backendName:`cpu`,kernelFunc:nI};function iI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockSize:a,dataFormat:o}=r;j(o===`NHWC`,()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${o}`);let s=i.shape[0],c=i.shape[1],l=i.shape[2],u=i.shape[3],d=c*a,f=l*a,p=u/(a*a),m=n.data.get(i.dataId).values,h=new Float32Array(s*d*f*p),g=0;for(let e=0;e<s;++e)for(let t=0;t<d;++t){let n=Math.floor(t/a),r=t%a;for(let t=0;t<f;++t){let i=Math.floor(t/a),o=t%a,s=(r*a+o)*p;for(let t=0;t<p;++t){let r=t+s+u*(i+l*(n+c*e));h[g++]=m[r]}}}return n.makeTensorInfo([s,d,f,p],i.dtype,h)}var aI={kernelName:ls,backendName:`cpu`,kernelFunc:iI};function oI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c,dimRoundingMode:l}=r;X([i,a],`depthwiseConv2DNative`);let u=N(i.shape),d=N(a.shape),f=c;f??=[1,1],j(dp(o,f),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${f}'`);let p=$f(i.shape,a.shape,o,f,s,l,!0),{filterHeight:m,filterWidth:h,dilationHeight:g,dilationWidth:_,padInfo:v}=p,y=v.left,b=v.top,x=p.outChannels/p.inChannels,S=new gu(p.outShape,i.dtype),C=n.data.get(i.dataId).values,w=n.data.get(a.dataId).values,T=S.values;for(let e=0;e<p.batchSize;++e){let t=e*u[0],n=e*S.strides[0];for(let e=0;e<p.outHeight;++e){let r=n+e*S.strides[1],i=e*p.strideHeight-b;for(let e=0;e<m;++e){let n=i+e*g;if(n<0||n>=p.inHeight)continue;let a=e*d[0],o=t+n*u[1];for(let e=0;e<p.outWidth;++e){let t=r+e*S.strides[2],n=e*p.strideWidth-y;for(let e=0;e<h;++e){let r=n+e*_;if(r<0||r>=p.inWidth)continue;let i=a+e*d[1],s=o+r*p.inChannels,c=t,l=i;for(let e=0;e<p.inChannels;++e){let t=C[s+e];for(let e=0;e<x;++e)T[c+e]+=t*w[l+e];c+=x,l+=x}}}}}}return n.makeTensorInfo(S.shape,S.dtype,S.values)}var sI={kernelName:us,backendName:`cpu`,kernelFunc:oI};function cI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,filterShape:u}=r;X([i,a],`depthwiseConv2dNativeBackpropFilter`);let d=$f(i.shape,u,o,s,c,l,!0),{strideHeight:f,strideWidth:p,filterHeight:m,filterWidth:h}=d,g=new gu(d.filterShape,`float32`),_=d.padInfo.left,v=d.padInfo.top,y=d.outChannels/d.inChannels,b=n.data.get(i.dataId).values,x=new gu(i.shape,i.dtype,b),S=n.data.get(a.dataId).values,C=new gu(a.shape,a.dtype,S);for(let e=0;e<m;++e){let t=Math.max(0,Math.ceil((v-e)/f)),n=Math.min(d.outHeight,(d.inHeight+v-e)/f);for(let r=0;r<h;++r){let i=Math.max(0,Math.ceil((_-r)/p)),a=Math.min(d.outWidth,(d.inWidth+_-r)/p);for(let o=0;o<d.outChannels;++o){let s=Math.trunc(o/y),c=o%y,l=0;for(let c=0;c<d.batchSize;++c)for(let u=t;u<n;++u){let t=e+u*f-v;for(let e=i;e<a;++e){let n=r+e*p-_;l+=x.get(c,t,n,s)*C.get(c,u,e,o)}}g.set(l,e,r,s,c)}}}return n.makeTensorInfo(g.shape,g.dtype,g.values)}var lI={kernelName:ds,backendName:`cpu`,kernelFunc:cI};function uI(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,inputShape:u}=r;X([i,a],`depthwiseConv2DNativeBackpropInput`);let d=N(i.shape),f=N(a.shape),p=$f(u,a.shape,o,s,c,l,!0),m=new gu(p.inShape,`float32`),h=m.values,[g,_,v]=m.strides,y=n.data.get(i.dataId).values,[b,x,S]=d,C=n.data.get(a.dataId).values,[w,T,E]=f,{batchSize:D,filterHeight:O,filterWidth:k,inChannels:ee,inHeight:A,inWidth:te,outChannels:ne,outHeight:re,outWidth:ie,strideHeight:ae,strideWidth:oe}=p,se=O-1-p.padInfo.top,ce=k-1-p.padInfo.left,le=ne/ee;for(let e=0;e<D;++e)for(let t=0;t<ee;++t)for(let n=0;n<A;++n){let r=n-se,i=Math.max(0,Math.ceil(r/ae)),a=Math.min(re,(O+r)/ae);for(let o=0;o<te;++o){let s=o-ce,c=Math.max(0,Math.ceil(s/oe)),l=Math.min(ie,(k+s)/oe),u=0;for(let n=i;n<a;++n){let i=n*ae-r;for(let r=c;r<l;++r){let a=r*oe-s,o=b*e+x*n+S*r,c=w*(O-1-i)+T*(k-1-a)+E*t;for(let e=0;e<le;++e){let n=y[o+(t*le+e)],r=C[c+e];u+=n*r}}}h[g*e+_*n+v*o+t]=u}}return n.makeTensorInfo(m.shape,m.dtype,m.values)}var dI={kernelName:fs,backendName:`cpu`,kernelFunc:uI};function fI(e){let{inputs:t,backend:n}=e,{x:r}=t,i=M(r.shape),a=n.data.get(r.dataId).values,o=gf([i,i],r.dtype),s=o.values;for(let e=0;e<a.length;e++)s[e*i+e]=a[e];let c=[...r.shape,...r.shape];return n.makeTensorInfo(c,o.dtype,o.values)}var pI={kernelName:ps,backendName:`cpu`,kernelFunc:fI},mI={kernelName:ms,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i}=e,{strides:a,pad:o,dilations:s}=n,c=t,l=c.data.get(r.dataId).values,u=r.shape.length,d=c.data.get(i.dataId).values,f=i.shape.length,{batchSize:p,inHeight:m,inWidth:h,inChannels:g,outHeight:_,outWidth:v,padInfo:y,strideHeight:b,strideWidth:x,filterHeight:S,filterWidth:C,dilationHeight:w,dilationWidth:T,outShape:E}=Xf(r.shape,i.shape,a,o,`NHWC`,s),D=M(E),O=E.length,k=Ka(r.dtype,D);for(let e=0;e<p;++e)for(let t=0;t<_;++t){let n=t*b-y.top;for(let a=0;a<v;++a){let o=a*x-y.left;for(let s=0;s<g;++s){let c=-(2**53-1);for(let t=0;t<S;++t){let a=n+t*w;if(a>=0&&a<m)for(let n=0;n<C;++n){let p=o+n*T;if(p>=0&&p<h){let o=fo([e,a,p,s],u,N(r.shape)),m=fo([t,n,s],f,N(i.shape)),h=l[o]+d[m];h>c&&(c=h)}}}let p=fo([e,t,a,s],O,N(E));k[p]=c}}}return{dataId:c.write(Xl(k,r.dtype),E,r.dtype),shape:E,dtype:r.dtype}}},hI={kernelName:gs,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i,dy:a}=e,{strides:o,pad:s,dilations:c}=n,l=t,u=ao(r.shape,l.data.get(r.dataId).values),d=ao(i.shape,l.data.get(i.dataId).values),{batchSize:f,inHeight:p,inWidth:m,inChannels:h,outHeight:g,outWidth:_,padInfo:v,strideHeight:y,strideWidth:b,filterHeight:x,filterWidth:S,dilationHeight:C,dilationWidth:w,outShape:T}=Xf(r.shape,i.shape,o,s,`NHWC`,c);j(a.rank===T.length,()=>`Error in ${gs}, dy must have the same rank as output ${T.length}, but got ${a.rank}`);let E=ao(T,l.data.get(a.dataId).values),D=lo(i.shape,i.dtype);for(let e=0;e<f;++e)for(let t=0;t<g;++t){let n=t*y-v.top;for(let r=0;r<_;++r){let i=r*b-v.left;for(let a=0;a<h;++a){let o=-(2**53-1),s=0,c=0;for(let t=0;t<x;++t){let r=n+t*C;if(r>=0&&r<p)for(let n=0;n<S;++n){let l=i+n*w;if(l>=0&&l<m){let i=u[e][r][l][a]+d[t][n][a];i>o&&(o=i,s=t,c=n)}}}D[s][c][a]+=E[e][t][r][a]}}}return{dataId:l.write(Xl(D,r.dtype),i.shape,i.dtype),shape:i.shape,dtype:i.dtype}}},gI={kernelName:hs,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i,dy:a}=e,{strides:o,pad:s,dilations:c}=n,l=t,u=ao(r.shape,l.data.get(r.dataId).values),d=ao(i.shape,l.data.get(i.dataId).values),{batchSize:f,inHeight:p,inWidth:m,inChannels:h,outHeight:g,outWidth:_,padInfo:v,strideHeight:y,strideWidth:b,filterHeight:x,filterWidth:S,dilationHeight:C,dilationWidth:w,outShape:T}=Xf(r.shape,i.shape,o,s,`NHWC`,c);j(a.rank===T.length,()=>`Error in ${hs}, dy must have the same rank as output ${T.length}, but got ${a.rank}`);let E=ao(T,l.data.get(a.dataId).values),D=lo(r.shape,r.dtype);for(let e=0;e<f;++e)for(let t=0;t<g;++t){let n=t*y-v.top;for(let r=0;r<_;++r){let i=r*b-v.left;for(let a=0;a<h;++a){let o=-(2**53-1),s=n<0?0:n,c=i<0?0:i;for(let t=0;t<x;++t){let r=n+t*C;if(r>=0&&r<p)for(let n=0;n<S;++n){let l=i+n*w;if(l>=0&&l<m){let i=u[e][r][l][a]+d[t][n][a];i>o&&(o=i,s=r,c=l)}}}D[e][s][c][a]+=E[e][t][r][a]}}}return{dataId:l.write(Xl(D,r.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};function _I(e){let{inputs:t,backend:n,attrs:r}=e,{image:i}=t,{canvas:a,options:o}=r,{contextOptions:s,imageOptions:c}=o||{},l=c?.alpha||1,u=s?.contextType||`2d`;if(u!==`2d`)throw Error(`Context type ${s.contextType} is not supported by the CPU backend.`);let d=a.getContext(u,s?.contextAttributes||{});if(d==null)throw Error(`Could not get the context with ${u} type.`);let[f,p]=i.shape.slice(0,2),m=i.shape.length===2?1:i.shape[2],h=n.data.get(i.dataId).values,g=i.dtype===`float32`?255:1,_=new Uint8ClampedArray(p*f*4);for(let e=0;e<f*p;++e){let t=[0,0,0,255*l];for(let n=0;n<m;n++){let r=h[e*m+n];if(i.dtype===`float32`){if(r<0||r>1)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${r}.`)}else if(i.dtype===`int32`&&(r<0||r>255))throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${r}.`);m===1?(t[0]=r*g,t[1]=r*g,t[2]=r*g):t[n]=r*g}let n=e*4;_[n+0]=Math.round(t[0]),_[n+1]=Math.round(t[1]),_[n+2]=Math.round(t[2]),_[n+3]=Math.round(t[3])}a.width=p,a.height=f;let v=new ImageData(_,p,f);return d.putImageData(v,0,0),i}var vI={kernelName:_s,backendName:`cpu`,kernelFunc:_I};function yI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`sum`);let s;s=i.dtype===`bool`?DM({inputs:{x:i},backend:n,attrs:{dtype:`int32`}}):SM({inputs:{x:i},backend:n});let c=s.shape.length,l=Ua(a,s.shape),u=ih(l,c),d=l,f=s;u!=null&&(f=kN({inputs:{x:s},backend:n,attrs:{perm:u}}),d=oh(d.length,c)),rh(`sum`,d,f.shape.length);let[p,m]=th(f.shape,d),h=xM(n,p,ku(f.dtype,`int32`)),g=M(m),_=n.data.get(h.dataId).values,v=n.data.get(f.dataId).values;for(let e=0;e<_.length;++e){let t=e*g,n=0;for(let e=0;e<g;++e)n+=v[t+e];_[e]=n}if(o){let e=nh(h.shape,l),t=h;h=VP({inputs:{x:h},backend:n,attrs:{shape:e}}),n.disposeIntermediateTensorInfo(t)}return n.disposeIntermediateTensorInfo(s),u!=null&&n.disposeIntermediateTensorInfo(f),h}var bI={kernelName:`Sum`,backendName:`cpu`,kernelFunc:yI};function xI(e){let{inputs:t,backend:n,attrs:r}=e,{equation:i}=r,a=t,{allDims:o,summedDims:s,idDims:c}=zx(i,a.length);Vx(o.length,c,a);let{path:l,steps:u}=Hx(s,c),d=u.length,f=null,p=o.length,m=[];for(let e=0;e<d;++e){for(let t of u[e]){let{permutationIndices:e,expandDims:r}=Bx(p,c[t]),i;Ux(e)?i=a[t]:(i=kN({inputs:{x:a[t]},backend:n,attrs:{perm:e}}),m.push(i));let o=i.shape.slice();for(let e=0;e<r.length;++e)o.splice(r[e],0,1);Ia(i.shape,o)||(i=VP({inputs:{x:i},backend:n,attrs:{shape:o}}),m.push(i)),f===null?f=i:(f=xN({inputs:{a:i,b:f},backend:n}),m.push(f))}e<d-1&&(l[e]>=0&&(f=yI({inputs:{x:f},backend:n,attrs:{axis:l[e]-(o.length-p),keepDims:!1}}),m.push(f)),p--)}for(let e of m)e!==f&&n.disposeIntermediateTensorInfo(e);return f}var SI={kernelName:ys,backendName:`cpu`,kernelFunc:xI};function CI(e){let{inputs:t,backend:n}=e,{dy:r,y:i}=t;X([r,i],`eluGrad`);let a=new Float32Array(M(i.shape)),o=n.data.get(i.dataId).values,s=n.data.get(r.dataId).values;for(let e=0;e<o.length;++e){let t=o[e];t>=0?a[e]=s[e]:a[e]=s[e]*(t+1)}return n.makeTensorInfo(i.shape,`float32`,a)}var wI={kernelName:bs,backendName:`cpu`,kernelFunc:CI},TI=xx,EI=Sx,DI=Cx,OI=wx,kI=Tx,AI=Ex,jI={kernelName:`Erf`,backendName:`cpu`,kernelFunc:zM(`Erf`,e=>{let t=Math.sign(e),n=Math.abs(e),r=1/(1+TI*n);return t*(1-((((AI*r+kI)*r+OI)*r+DI)*r+EI)*r*Math.exp(-n*n))})};function MI(e){let{inputs:t,backend:n,attrs:r}=e,{input:i}=t,{dim:a}=r,o=i.shape.length,s=i.shape.slice(),c=a;return a<0&&(j(-(o+1)<=a,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),c=o+a+1),s.splice(c,0,1),VP({inputs:{x:i},backend:n,attrs:{shape:s}})}var NI={kernelName:Ss,backendName:`cpu`,kernelFunc:MI},PI=kM(vs,vM((e,t)=>e/t)),FI={kernelName:vs,backendName:`cpu`,kernelFunc:PI};function II(e,t,n){let r=e.shape,i=r[0],a=r[1],o=n.data.get(e.dataId),s=o.complexTensorInfos.real,c=o.complexTensorInfos.imag,l=[i,a],u=M(l),d=Ga(`float32`,u),f=Ga(`float32`,u);for(let e=0;e<i;e++){let r=rP({inputs:{x:s},backend:n,attrs:{begin:[e,0],size:[1,a]}}),i=rP({inputs:{x:c},backend:n,attrs:{begin:[e,0],size:[1,a]}}),o=yM({inputs:{real:r,imag:i},backend:n}),{real:l,imag:u}=LI(o,t,n),p=Dx(l,u);for(let t=0;t<a;t++){let n=jx(p,t);d[e*a+t]=n.real,f[e*a+t]=n.imag}n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(o)}let p=n.makeTensorInfo(l,`float32`,d),m=n.makeTensorInfo(l,`float32`,f),h=yM({inputs:{real:p,imag:m},backend:n});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),h}function LI(e,t,n){let r=M(e.shape),i=n.data.get(e.dataId),a=n.data.get(i.complexTensorInfos.real.dataId).values,o=n.data.get(i.complexTensorInfos.imag.dataId).values;if(RI(r)){let i=zI(a,o,r,t,n),s=[e.shape[0],e.shape[1]];if(t){let e=n.makeTensorInfo(s,`float32`,i.real),t=n.makeTensorInfo(s,`float32`,i.imag),a=n.makeTensorInfo([],`float32`,Jl(r,`float32`)),o=SM({inputs:{x:a},backend:n}),c=FI.kernelFunc({inputs:{a:e,b:a},backend:n}),l=FI.kernelFunc({inputs:{a:t,b:o},backend:n}),u=n.data.get(c.dataId).values,d=n.data.get(l.dataId).values;return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),{real:u,imag:d}}return i}else return Ox(BI(Dx(a,o),r,t))}function RI(e){return(e&e-1)==0}function zI(e,t,n,r,i){if(n===1)return{real:e,imag:t};let a=Dx(e,t),o=n/2,s=kx(a),c=s.real,l=s.imag,u=[c.length],d=i.makeTensorInfo(u,`float32`,c),f=i.makeTensorInfo(u,`float32`,l),p=yM({inputs:{real:d,imag:f},backend:i}),m=Ax(a),h=m.real,g=m.imag,_=[h.length],v=i.makeTensorInfo(_,`float32`,h),y=i.makeTensorInfo(_,`float32`,g),b=yM({inputs:{real:v,imag:y},backend:i}),x=zI(c,l,o,r,i),S=x.real,C=x.imag,w=[S.length],T=i.makeTensorInfo(w,`float32`,S),E=i.makeTensorInfo(w,`float32`,C),D=yM({inputs:{real:T,imag:E},backend:i}),O=zI(h,g,o,r,i),k=O.real,ee=O.imag,A=[k.length],te=i.makeTensorInfo(A,`float32`,k),ne=i.makeTensorInfo(A,`float32`,ee),re=yM({inputs:{real:te,imag:ne},backend:i}),ie=Nx(n,r),ae=[ie.real.length],oe=i.makeTensorInfo(ae,`float32`,ie.real),se=i.makeTensorInfo(ae,`float32`,ie.imag),ce=yM({inputs:{real:oe,imag:se},backend:i}),le=xN({inputs:{a:ce,b:re},backend:i}),ue=MM({inputs:{a:D,b:le},backend:i}),de=xP({inputs:{a:D,b:le},backend:i}),fe=wM({inputs:{input:ue},backend:i}),pe=wM({inputs:{input:de},backend:i}),me=MF({inputs:{input:ue},backend:i}),he=MF({inputs:{input:de},backend:i}),ge=PF({inputs:[fe,pe],backend:i,attrs:{axis:0}}),_e=PF({inputs:[me,he],backend:i,attrs:{axis:0}}),ve=i.data.get(ge.dataId).values,ye=i.data.get(_e.dataId).values;return i.disposeIntermediateTensorInfo(d),i.disposeIntermediateTensorInfo(f),i.disposeIntermediateTensorInfo(p),i.disposeIntermediateTensorInfo(v),i.disposeIntermediateTensorInfo(y),i.disposeIntermediateTensorInfo(b),i.disposeIntermediateTensorInfo(T),i.disposeIntermediateTensorInfo(E),i.disposeIntermediateTensorInfo(D),i.disposeIntermediateTensorInfo(te),i.disposeIntermediateTensorInfo(ne),i.disposeIntermediateTensorInfo(re),i.disposeIntermediateTensorInfo(oe),i.disposeIntermediateTensorInfo(se),i.disposeIntermediateTensorInfo(ce),i.disposeIntermediateTensorInfo(le),i.disposeIntermediateTensorInfo(ue),i.disposeIntermediateTensorInfo(de),i.disposeIntermediateTensorInfo(fe),i.disposeIntermediateTensorInfo(me),i.disposeIntermediateTensorInfo(pe),i.disposeIntermediateTensorInfo(he),i.disposeIntermediateTensorInfo(ge),i.disposeIntermediateTensorInfo(_e),{real:ve,imag:ye}}function BI(e,t,n){let r=new Float32Array(t*2);for(let i=0;i<t;i++){let a=0,o=0;for(let r=0;r<t;r++){let s=Px(i*r,t,n),c=jx(e,r);a+=c.real*s.real-c.imag*s.imag,o+=c.real*s.imag+c.imag*s.real}n&&(a/=t,o/=t),Mx(r,a,o,i)}return r}function VI(e){let{inputs:t,backend:n}=e,{input:r}=t,i=M(r.shape),a=r.shape[r.shape.length-1],o=i/a,s=VP({inputs:{x:r},backend:n,attrs:{shape:[o,a]}}),c=II(s,!1,n),l=VP({inputs:{x:c},backend:n,attrs:{shape:r.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(c),l}var HI={kernelName:`FFT`,backendName:`cpu`,kernelFunc:VI};function UI(e){let{backend:t,attrs:n}=e,{shape:r,value:i,dtype:a}=n,o=a||to(i),s=Ka(o,M(r));return GI(s,i,o),t.makeTensorInfo(r,o,s)}var WI={kernelName:ws,backendName:`cpu`,kernelFunc:UI};function GI(e,t,n){e.fill(t)}var KI={kernelName:Ts,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,i=n,a=Ga(r.dtype,M(r.shape)),[o,s,c,l]=r.shape,u=i.data.get(r.dataId).values;for(let e=0;e<o;e++){let t=e*c*s*l;for(let e=0;e<s;e++){let n=c*l*e;for(let e=0;e<c;e++){let r=e*l;for(let i=0;i<l;i++){let o=Math.round(c-e-1),s=t+n+r+i,d=u[s];if(o>=0&&o<c){let e=o*l;d=u[t+n+e+i]}a[s]=d}}}}return{dataId:i.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};function qI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=IF({inputs:{x:i,filter:a},backend:n,attrs:{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f}});if(o){let e=h;if(u===`NCHW`&&o.shape.length===1&&o.shape[0]!==1){let e=VP({inputs:{x:o},backend:n,attrs:{shape:[o.shape[0],1,1]}});h=MM({inputs:{a:h,b:e},backend:n}),n.disposeIntermediateTensorInfo(e)}else h=MM({inputs:{a:h,b:o},backend:n});n.disposeIntermediateTensorInfo(e)}if(p){let e=h;if(u===`NCHW`&&p===`prelu`&&s.shape.length===1&&s.shape[0]!==1){let e=VP({inputs:{x:s},backend:n,attrs:{shape:[s.shape[0],1,1]}});h=BP(n,h,p,e,m),n.disposeIntermediateTensorInfo(e)}else h=BP(n,h,p,s,m);n.disposeIntermediateTensorInfo(e)}return h}var JI={kernelName:_l,backendName:`cpu`,kernelFunc:qI};function YI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=oI({inputs:{x:i,filter:a},backend:n,attrs:{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f}});if(o){let e=h;h=MM({inputs:{a:h,b:o},backend:n}),n.disposeIntermediateTensorInfo(e)}if(p){let e=h;h=BP(n,h,p,s,m),n.disposeIntermediateTensorInfo(e)}return h}var XI={kernelName:vl,backendName:`cpu`,kernelFunc:YI};function ZI(e){let{inputs:t,backend:n}=e,{params:r,indices:i}=t,a=M(r.shape),o=i.shape,s=o[o.length-1],[c,l,u,d]=Pb(r,i);if(l===0)return n.makeTensorInfo(c,r.dtype,[]);let f=n.data.get(i.dataId).values,p=nN(f,n.bufferSync(r),r.dtype,l,s,u,d,r.shape,a);return n.makeTensorInfo(c,r.dtype,p.values)}var QI={kernelName:As,backendName:`cpu`,kernelFunc:ZI};function $I(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,indices:a}=t,{axis:o,batchDims:s}=r;X([i,a],`gatherV2`);let c=Ua(o,i.shape)[0],l=n.data.get(a.dataId).values,u=i.shape[c];for(let e=0;e<l.length;++e){let t=l[e];j(t<=u-1&&t>=0,()=>`GatherV2: the index value ${t} is not in [0, ${u-1}]`)}let d=s;s??(d=0);let f=M(a.shape),p=sS(i,a,c,d),m=VP({inputs:{x:i},backend:n,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),h=VP({inputs:{x:a},backend:n,attrs:{shape:[p.batchSize,f/p.batchSize]}}),g=[p.batchSize,p.outerSize,f/p.batchSize,p.sliceSize],_=n.bufferSync(h),v=rN(n.bufferSync(m),_,g);return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),n.makeTensorInfo(p.outputShape,v.dtype,v.values)}var eL={kernelName:ks,backendName:`cpu`,kernelFunc:$I};function tL(e){let{inputs:t,backend:n}=e,{input:r}=t,i=M(r.shape),a=r.shape[r.shape.length-1],o=i/a,s=VP({inputs:{x:r},backend:n,attrs:{shape:[o,a]}}),c=II(s,!0,n),l=VP({inputs:{x:c},backend:n,attrs:{shape:r.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(c),l}var nL={kernelName:Ps,backendName:`cpu`,kernelFunc:tL},rL={kernelName:Is,backendName:`cpu`,kernelFunc:zM(Is,e=>+!!Number.isFinite(e),`bool`)},iL={kernelName:Ls,backendName:`cpu`,kernelFunc:zM(Ls,e=>+(Math.abs(e)===1/0),`bool`)},aL={kernelName:Rs,backendName:`cpu`,kernelFunc:zM(Rs,e=>+!!Number.isNaN(e),`bool`)};function oL(e){let{backend:t,attrs:n}=e,{start:r,stop:i,num:a}=n,o=fN(r,i,a);return t.makeTensorInfo([o.length],`float32`,o)}var sL={kernelName:Hs,backendName:`cpu`,kernelFunc:oL},cL={kernelName:Us,backendName:`cpu`,kernelFunc:zM(Us,e=>Math.log1p(e))},lL={kernelName:Ws,backendName:`cpu`,kernelFunc:kM(Ws,vM((e,t)=>e&&t),null,`bool`)},uL={kernelName:Gs,backendName:`cpu`,kernelFunc:zM(Gs,e=>+!e,`bool`)},dL={kernelName:Ks,backendName:`cpu`,kernelFunc:kM(Ks,vM((e,t)=>e||t),null,`bool`)};function fL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{depthRadius:a,bias:o,alpha:s,beta:c}=r;X(i,`LRN`);let l=i.shape[3],u=l-1,d=n.data.get(i.dataId).values,f=M(i.shape),p=new Float32Array(f);function m(e){let t=e%l,n=e-t+Math.max(0,t-a),r=e-t+Math.min(t+a,u),i=0;for(;n<=r;n++){let e=d[n];i+=e*e}return i}for(let e=0;e<f;e++){let t=m(e);p[e]=d[e]*(o+s*t)**+-c}return n.makeTensorInfo(i.shape,i.dtype,p)}var pL={kernelName:`LRN`,backendName:`cpu`,kernelFunc:fL};function mL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,y:a,dy:o}=t,{depthRadius:s,bias:c,alpha:l,beta:u}=r;X(o,`LRNGrad`);let d=M(o.shape),f=o.shape[3],p=n.data.get(o.dataId).values,m=n.data.get(i.dataId).values,h=n.data.get(a.dataId).values,g=new Float32Array(d),_=d;for(let e=0;e<_;e++){let t=e%f,n=e-t+Math.max(0,t-s),r=e-t+Math.min(f,t+s+1),i=0;for(let e=n;e<r;e++)i+=m[e]**2;i=l*i+c;for(let t=n;t<r;t++){let n=-2*l*u*m[t]*h[e]/i;e===t&&(n+=i**+-u),n*=p[e],g[t]+=n}}return n.makeTensorInfo(o.shape,i.dtype,g)}var hL={kernelName:Js,backendName:`cpu`,kernelFunc:mL};function gL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reductionIndices:a,keepDims:o}=r,s=n,c=i.shape,l=c.length,u=Ua(a,c),d=u,f=ih(d,l),p=s.data.get(i.dataId).values;if(f!=null){let e=Array(l);for(let t=0;t<e.length;t++)e[t]=c[f[t]];p=ON(p,c,i.dtype,f,e),d=oh(d.length,l),c=e}X(i,`max`),rh(`max`,d,l);let[m,h]=th(c,d),g=M(h),_=hN(p,g,m,i.dtype),v=s.write(_,m,i.dtype),y=m;return o&&(y=nh(m,u)),{dataId:v,shape:y,dtype:i.dtype}}var _L={kernelName:`Max`,backendName:`cpu`,kernelFunc:gL};function vL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;X(i,`maxPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;j(dp(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Zf(i.shape,a,o,1,s,c),u;if(l.filterWidth===1&&l.filterHeight===1&&Ia(l.inShape,l.outShape))u=SM({inputs:{x:i},backend:n});else{let e=n.data.get(i.dataId).values,t=N(i.shape),r=uF(e,i.shape,i.dtype,t,l,`max`);u=n.makeTensorInfo(l.outShape,i.dtype,r.values)}return u}var yL={kernelName:Xs,backendName:`cpu`,kernelFunc:vL};function bL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r;X(i,`maxPool3d`);let u=Qf(i.shape,a,o,1,s,c,l),d=n.data.get(i.dataId).values,f=fF(d,i.shape,i.dtype,N(i.shape),u,`max`);return n.makeTensorInfo(f.shape,`float32`,f.values)}var xL={kernelName:Qs,backendName:`cpu`,kernelFunc:bL};function SL(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,{filterSize:o,strides:s,pad:c,dimRoundingMode:l}=r;X([i,a],`maxPool3DGrad`);let u=Qf(a.shape,o,s,1,c,l),d=pF(n.bufferSync(a),u),f=u.strideDepth,p=u.strideHeight,m=u.strideWidth,h=u.dilationDepth,g=u.dilationHeight,_=u.dilationWidth,v=u.effectiveFilterDepth,y=u.effectiveFilterHeight,b=u.effectiveFilterWidth,x=v-1-u.padInfo.front,S=b-1-u.padInfo.left,C=y-1-u.padInfo.top,w=gf(a.shape,`float32`),T=n.bufferSync(i);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inDepth;++n)for(let r=0;r<u.inHeight;++r)for(let i=0;i<u.inWidth;++i){let a=n-x,o=r-C,s=i-S,c=0;for(let n=0;n<v;n+=h){let r=(a+n)/f;if(!(r<0||r>=u.outDepth||Math.floor(r)!==r))for(let i=0;i<y;i+=g){let a=(o+i)/p;if(!(a<0||a>=u.outHeight||Math.floor(a)!==a))for(let o=0;o<b;o+=_){let l=(s+o)/m;if(l<0||l>=u.outWidth||Math.floor(l)!==l)continue;let f=+(v*y*b-1-d.get(e,r,a,l,t)===n*y*b+i*b+o);if(f===0)continue;let p=T.get(e,r,a,l,t);c+=p*f}}}w.set(c,e,n,r,i,t)}return n.makeTensorInfo(w.shape,w.dtype,w.values)}var CL={kernelName:$s,backendName:`cpu`,kernelFunc:SL};function wL(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a,output:o}=t,s=a;X([a,o],`maxPoolGrad`);let{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=r,f=Zf(s.shape,c,l,1,u,d),p=n.data.get(s.dataId).values,m=gf(f.outShape,s.dtype,dF(p,s.shape,s.dtype,f).values),h=f.strideHeight,g=f.strideWidth,_=f.dilationHeight,v=f.dilationWidth,y=f.effectiveFilterHeight,b=f.effectiveFilterWidth,x=b-1-f.padInfo.left,S=y-1-f.padInfo.top,C=gf(s.shape,`float32`),w=n.data.get(i.dataId).values,T=gf(i.shape,`float32`,w);for(let e=0;e<f.batchSize;++e)for(let t=0;t<f.inChannels;++t)for(let n=0;n<f.inHeight;++n)for(let r=0;r<f.inWidth;++r){let i=n-S,a=r-x,o=0;for(let n=0;n<y;n+=_){let r=(i+n)/h;if(!(r<0||r>=f.outHeight||Math.floor(r)!==r))for(let i=0;i<b;i+=v){let s=(a+i)/g;if(s<0||s>=f.outWidth||Math.floor(s)!==s)continue;let c=+(y*b-1-m.get(e,r,s,t)===n*b+i);if(c===0)continue;let l=T.get(e,r,s,t);o+=l*c}}C.set(o,e,n,r,t)}return n.makeTensorInfo(C.shape,C.dtype,C.values)}var TL={kernelName:Zs,backendName:`cpu`,kernelFunc:wL};function EL(e,t,n,r,i){let a=uF(e,t,n,N(t),i,`max`),o=dF(e,t,n,i,!0,r);return[a.values,o.values]}var DL={kernelName:ec,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:i,strides:a,pad:o,includeBatchInIndex:s}=t,c=n;X(r,`MaxPoolWithArgmax`);let l=c.data.get(r.dataId).values,u=Zf(r.shape,i,a,[1,1],o),[d,f]=EL(l,r.shape,r.dtype,s,u),p=c.write(d,u.outShape,r.dtype),m=c.write(f,u.outShape,r.dtype);return[{dataId:p,shape:u.outShape,dtype:r.dtype},{dataId:m,shape:u.outShape,dtype:`int32`}]}};function OL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=Ua(a,i.shape),c=th(i.shape,s)[1],l=M(c),u=[],d=n.makeTensorInfo([],`float32`,new Float32Array([l]));u.push(d);let f=DM({inputs:{x:i},backend:n,attrs:{dtype:`float32`}});u.push(f);let p=PI({inputs:{a:f,b:d},backend:n});u.push(p);let m=yI({inputs:{x:p},backend:n,attrs:{axis:a,keepDims:o}});return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}var kL={kernelName:tc,backendName:`cpu`,kernelFunc:OL};function AL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`min`);let s=Ua(a,i.shape),c=s,l=ih(c,i.shape.length),u=i;l!=null&&(u=kN({inputs:{x:i},backend:n,attrs:{perm:l}}),c=oh(c.length,i.shape.length)),rh(`min`,c,u.shape.length);let[d,f]=th(u.shape,c),p=M(f),m=co(M(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];(Number.isNaN(r)||r<n)&&(n=r)}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=nh(d,s),t=VP({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var jL={kernelName:`Min`,backendName:`cpu`,kernelFunc:AL};function ML(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,mode:o}=r;X(i,`mirrorPad`);let s=a.map((e,t)=>e[0]+i.shape[t]+e[1]),c=a.map(e=>e[0]),l=a.map((e,t)=>e[0]+i.shape[t]),u=o===`reflect`?0:1,d=n.data.get(i.dataId).values,f=i.shape.length,p=N(i.shape),m=M(s),h=s.length,g=N(s),_=Ga(i.dtype,m);for(let e=0;e<m;e++){let t=po(e,h,g);for(let e=0;e<h;e++)t[e]<c[e]?t[e]=c[e]*2-t[e]-u:t[e]>=l[e]&&(t[e]=(l[e]-1)*2-t[e]+u);t=t.map((e,t)=>e-c[t]),_[e]=d[fo(t,f,p)]}return{dataId:n.write(_,s,i.dtype),shape:s,dtype:i.dtype}}var NL={kernelName:rc,backendName:`cpu`,kernelFunc:ML},PL={kernelName:`Mod`,backendName:`cpu`,kernelFunc:kM(`Mod`,vM(((e,t)=>{let n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t})))};function FL(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{dim:a}=r,o=i.shape.length,s=a;if(s===-1&&(s=o-1),s!==o-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${o} and dim was ${s}`);let c=Ua([s],i.shape),l=gL({inputs:{x:i},backend:n,attrs:{reductionIndices:c,keepDims:!1}}),u=nh(l.shape,c),d=VP({inputs:{x:l},backend:n,attrs:{shape:u}}),f=xP({inputs:{a:i,b:d},backend:n}),p=JM({inputs:{x:f},backend:n}),m=yI({inputs:{x:p},backend:n,attrs:{axis:c,keepDims:!1}}),h=VP({inputs:{x:m},backend:n,attrs:{shape:u}}),g=PI({inputs:{a:p,b:h},backend:n});return n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),g}var IL={kernelName:Gc,backendName:`cpu`,kernelFunc:FL};function LL(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{numSamples:a,seed:o,normalized:s}=r;X(i,`multinomial`);let c=s?i:FL({inputs:{logits:i},backend:n,attrs:{dim:-1}}),l=c.shape[0],u=c.shape[1],d=n.data.get(c.dataId).values,f=[l,a],p=co(M(f),`int32`);for(let e=0;e<l;++e){let t=e*u,n=new Float32Array(u-1);n[0]=d[t];for(let e=1;e<n.length;++e)n[e]=n[e-1]+d[t+e];let r=v_.alea(o.toString()),i=e*a;for(let e=0;e<a;++e){let t=r();p[i+e]=n.length;for(let r=0;r<n.length;r++)if(t<n[r]){p[i+e]=r;break}}}return s||n.disposeIntermediateTensorInfo(c),n.makeTensorInfo(f,`int32`,p)}var RL={kernelName:ic,backendName:`cpu`,kernelFunc:LL},zL=Oy;function BL(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=r;X(i,`NonMaxSuppression`);let l=n.data.get(i.dataId).values,u=n.data.get(a.dataId).values,{selectedIndices:d}=zL(l,u,o,s,c);return n.makeTensorInfo([d.length],`int32`,new Int32Array(d))}var VL={kernelName:sc,backendName:`cpu`,kernelFunc:BL},HL=ky;function UL(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,padToMaxOutputSize:l}=r;X(i,`NonMaxSuppressionPadded`);let u=n.data.get(i.dataId).values,d=n.data.get(a.dataId).values,{selectedIndices:f,validOutputs:p}=HL(u,d,o,s,c,l);return[n.makeTensorInfo([f.length],`int32`,new Int32Array(f)),n.makeTensorInfo([],`int32`,new Int32Array([p]))]}var WL={kernelName:cc,backendName:`cpu`,kernelFunc:UL},GL=Ay;function KL(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=r;X(i,`NonMaxSuppressionWithScore`);let u=n.data.get(i.dataId).values,d=n.data.get(a.dataId).values,{selectedIndices:f,selectedScores:p}=GL(u,d,o,s,c,l);return[n.makeTensorInfo([f.length],`int32`,new Int32Array(f)),n.makeTensorInfo([p.length],`float32`,new Float32Array(p))]}var qL={kernelName:lc,backendName:`cpu`,kernelFunc:KL};function JL(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i}=t,{dtype:a,depth:o,onValue:s,offValue:c}=r;X(i,`oneHot`);let l=M(i.shape),u=new Float32Array(l*o);u.fill(c);let d=n.data.get(i.dataId).values;for(let e=0;e<l;++e)d[e]>=0&&d[e]<o&&(u[e*o+d[e]]=s);return n.makeTensorInfo([...i.shape,o],a,u)}var YL={kernelName:dc,backendName:`cpu`,kernelFunc:JL};function XL(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`zerosLike is not supported for string tensors`);if(r.dtype===`complex64`){let e=wM({inputs:{input:r},backend:n}),t=XL({inputs:{x:e},backend:n}),i=MF({inputs:{input:r},backend:n}),a=XL({inputs:{x:i},backend:n}),o=yM({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return UI({backend:n,attrs:{shape:r.shape,value:0,dtype:r.dtype}})}var ZL={kernelName:fl,backendName:`cpu`,kernelFunc:XL};function QL(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`onesLike is not supported for string tensors`);if(r.dtype===`complex64`){let e=wM({inputs:{input:r},backend:n}),t=QL({inputs:{x:e},backend:n}),i=MF({inputs:{input:r},backend:n}),a=XL({inputs:{x:i},backend:n}),o=yM({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return UI({backend:n,attrs:{shape:r.shape,value:1,dtype:r.dtype}})}var $L={kernelName:uc,backendName:`cpu`,kernelFunc:QL};function eR(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r;if(t.length===1)return MI({inputs:{input:t[0]},backend:n,attrs:{dim:i}});let a=t[0].shape,o=t[0].dtype;t.forEach(e=>{Pa(a,e.shape,`All tensors passed to stack must have matching shapes`),j(o===e.dtype,()=>`All tensors passed to stack must have matching dtypes`)});let s=[],c=PF({inputs:t.map(e=>{let t=MI({inputs:{input:e},backend:n,attrs:{dim:i}});return s.push(t),t}),backend:n,attrs:{axis:i}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}var tR={kernelName:fc,backendName:`cpu`,kernelFunc:eR};function nR(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,constantValue:o}=r;X(i,`pad`);let s=a.map((e,t)=>e[0]+i.shape[t]+e[1]),c=a.map(e=>e[0]),l=n.data.get(i.dataId).values,u=M(i.shape),d=i.shape.length,f=N(i.shape),p=M(s),m=s.length,h=N(s),g=Ga(i.dtype,p);o!==0&&g.fill(o);for(let e=0;e<u;e++){let t=fo(po(e,d,f).map((e,t)=>e+c[t]),m,h);g[t]=l[e]}return{dataId:n.write(g,s,i.dtype),shape:s,dtype:i.dtype}}var rR={kernelName:pc,backendName:`cpu`,kernelFunc:nR},iR={kernelName:`Pow`,backendName:`cpu`,kernelFunc:kM(`Pow`,vM((e,t)=>e**+t))};function aR(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:i,paramsDenseValues:a,indices:o}=t,{outputRaggedRank:s}=r,c=i.map(e=>n.data.get(e.dataId).values),l=i.map(e=>e.shape),u=n.data.get(a.dataId).values,d=n.data.get(o.dataId).values,[f,p,m]=VN(c,l,u,a.shape,a.dtype,d,o.shape,s),h=f.map(e=>n.makeTensorInfo([e.length],`int32`,e)),g=n.makeTensorInfo(m,a.dtype,p);return h.concat([g])}var oR={kernelName:gc,backendName:`cpu`,kernelFunc:aR};function sR(e){let{inputs:t,backend:n}=e,{starts:r,limits:i,deltas:a}=t,o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=UN(o,r.shape,r.dtype,s,i.shape,c,a.shape);return[n.makeTensorInfo([l.length],`int32`,l),n.makeTensorInfo([u.length],r.dtype,u)]}var cR={kernelName:_c,backendName:`cpu`,kernelFunc:sR};function lR(e){let{inputs:t,backend:n,attrs:r}=e,{shape:i,values:a,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:c}=r,l=n.data.get(i.dataId).values,u=n.data.get(a.dataId).values,d=n.data.get(o.dataId).values,f=s.map(e=>n.data.get(e.dataId).values),p=s.map(e=>e.shape),[m,h]=JN(l,i.shape,u,a.shape,a.dtype,d,o.shape,f,p,c);return n.makeTensorInfo(m,a.dtype,h)}var uR={kernelName:vc,backendName:`cpu`,kernelFunc:lR};function dR(e){let{backend:t,attrs:n}=e,{start:r,stop:i,dtype:a,step:o}=n,s=YN(r,i,o,a);return t.makeTensorInfo([s.length],a,s)}var fR={kernelName:yc,backendName:`cpu`,kernelFunc:dR},pR={kernelName:xc,backendName:`cpu`,kernelFunc:zM(xc,e=>1/e)};function mR(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r;X(i,`resizeBilinear`);let c=N(i.shape),[l,u]=s,[d,f,p,m]=i.shape,h=n.data.get(i.dataId).values,g=new Float32Array(M([d,l,u,m])),_=[a&&l>1?f-1:f,a&&u>1?p-1:p],v=[a&&l>1?l-1:l,a&&u>1?u-1:u],y=0,b=_[0]/v[0],x=_[1]/v[1];for(let e=0;e<d;e++)for(let t=0;t<l;t++){let n;n=o?b*(t+.5)-.5:b*t;let r=Math.max(0,Math.floor(n)),i=n-r,a=Math.min(f-1,Math.ceil(n)),s=e*c[0]+r*c[1],l=e*c[0]+a*c[1];for(let e=0;e<u;e++){let t;t=o?x*(e+.5)-.5:x*e;let n=Math.max(0,Math.floor(t)),r=t-n,a=Math.min(p-1,Math.ceil(t)),u=s+n*c[2],d=l+n*c[2],f=s+a*c[2],_=l+a*c[2];for(let e=0;e<m;e++){let t=h[u+e],n=h[d+e],a=h[f+e],o=h[_+e],s=t+(a-t)*r,c=s+(n+(o-n)*r-s)*i;g[y++]=c}}}return n.makeTensorInfo([d,l,u,m],`float32`,g)}var hR={kernelName:Ec,backendName:`cpu`,kernelFunc:mR};function gR(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r;X([a,i],`resizeBilinearGrad`);let s=N(i.shape),[c,l,u,d]=i.shape,[,f,p]=a.shape,m=new Float32Array(c*l*u*d),h=[o&&f>1?l-1:l,o&&p>1?u-1:u],g=[o&&f>1?f-1:f,o&&p>1?p-1:p],_=h[0]/g[0],v=h[1]/g[1],y=n.data.get(a.dataId).values,b=0;for(let e=0;e<c;e++){let t=e*s[0];for(let e=0;e<f;e++){let n=e*_,r=Math.floor(n),i=Math.min(Math.ceil(n),l-1),a=t+r*s[1],o=t+i*s[1],c=n-r,f=1-c;for(let e=0;e<p;e++){let t=e*v,n=Math.floor(t),r=Math.min(Math.ceil(t),u-1),i=t-n,l=1-i,p=a+n*s[2],h=a+r*s[2],g=o+n*s[2],_=o+r*s[2],x=f*l,S=f*i,C=c*l,w=c*i;for(let e=0;e<d;e++){let t=y[b++];m[p+e]+=t*x,m[h+e]+=t*S,m[g+e]+=t*C,m[_+e]+=t*w}}}}return n.makeTensorInfo([c,u,l,d],`float32`,m)}var _R={kernelName:Dc,backendName:`cpu`,kernelFunc:gR};function vR(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r;X(i,`resizeNearestNeighbor`);let c=N(i.shape),[l,u]=s,[d,f,p,m]=i.shape,h=n.data.get(i.dataId).values,g=new Float32Array(d*l*u*m),_=[a&&l>1?f-1:f,a&&u>1?p-1:p],v=[a&&l>1?l-1:l,a&&u>1?u-1:u],y=_[0]/v[0],b=_[1]/v[1],x=0;for(let e=0;e<d;e++){let t=e*c[0];for(let e=0;e<l;e++){let n=o?y*(e+.5):y*e,r=Math.min(f-1,a?Math.round(n):Math.floor(n));o&&(r=Math.max(0,r));let i=t+r*c[1];for(let e=0;e<u;e++){let t=o?b*(e+.5):b*e,n=Math.min(p-1,a?Math.round(t):Math.floor(t));o&&(n=Math.max(0,n));let r=i+n*c[2];for(let e=0;e<m;e++){let t=h[r+e];g[x++]=t}}}}return n.makeTensorInfo([d,l,u,m],i.dtype,g)}var yR={kernelName:wc,backendName:`cpu`,kernelFunc:vR};function bR(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r;X([a,i],`resizeNearestNeighborGrad`);let s=N(i.shape),c=N(a.shape),[l,u,d,f]=i.shape,[,p,m]=a.shape,h=new Float32Array(l*u*d*f),g=n.data.get(a.dataId).values,_=[o&&p>1?u-1:u,o&&m>1?d-1:d],v=[o&&p>1?p-1:p,o&&m>1?m-1:m],y=_[0]/v[0],b=_[1]/v[1],x=1/y,S=1/b,C=Math.ceil(x)*2+2,w=Math.ceil(S)*2+2;for(let e=0;e<l;e++){let t=e*s[0];for(let e=0;e<u;e++){let n=t+e*s[1],r=Math.floor(e*x),i=Math.floor(r-C/2);for(let r=0;r<d;r++){let a=n+r*s[2],l=Math.floor(r*S),_=Math.floor(l-w/2);for(let n=0;n<f;n++){let s=0;for(let a=0;a<C;a++){let l=a+i;if(l<0||l>=p)continue;let f=t+l*c[1],h=l*y,v=Math.min(u-1,o?Math.round(h):Math.floor(h));if(e===v)for(let e=0;e<w;e++){let t=e+_;if(t<0||t>=m)continue;let i=f+t*c[2],a=t*b,l=Math.min(d-1,o?Math.round(a):Math.floor(a));r===l&&(s+=g[i+n])}}h[a+n]=s}}}}return n.makeTensorInfo(i.shape,i.dtype,h)}var xR={kernelName:Tc,backendName:`cpu`,kernelFunc:bR};function SR(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dims:a}=r;X(i,`reverse`);let o=i.shape.length,s=Ua(a,i.shape);if(o===0)return SM({inputs:{x:i},backend:n});let c=new gu(i.shape,i.dtype),l=n.bufferSync(i);for(let e=0;e<c.size;e++){let t=c.indexToLoc(e),n=t.slice();s.forEach(e=>n[e]=i.shape[e]-1-n[e]),c.set(l.get(...n),...t)}return n.makeTensorInfo(c.shape,c.dtype,c.values)}var CR={kernelName:kc,backendName:`cpu`,kernelFunc:SR},wR={kernelName:hl,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:i,fillValue:a,center:o}=t,s=n,c=Ga(r.dtype,M(r.shape)),[l,u,d,f]=r.shape,[p,m]=px(o,u,d),h=Math.sin(i),g=Math.cos(i),_=s.data.get(r.dataId).values;for(let e=0;e<l;e++){let t=e*d*u*f;for(let e=0;e<u;e++){let n=d*f*e;for(let r=0;r<d;r++){let i=r*f;for(let o=0;o<f;o++){let s=[l,e,r,o],v=s[2],y=s[1],b=(v-p)*g-(y-m)*h,x=(v-p)*h+(y-m)*g;b=Math.round(b+p),x=Math.round(x+m);let S=a;if(typeof a!=`number`&&(S=o===3?255:a[o]),b>=0&&b<d&&x>=0&&x<u){let e=d*f*x,n=b*f;S=_[t+e+n+o]}let C=t+n+i+o;c[C]=S}}}}return{dataId:s.write(c,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},TR={kernelName:Ac,backendName:`cpu`,kernelFunc:zM(Ac,e=>{let t=Math.floor(e);return e-t<.5?Math.floor(e):e-t>.5?Math.ceil(e):t%2==0?t:t+1})};function ER(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i,updates:a}=t,{shape:o}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=Nv(a,i,o),f=QN(n.bufferSync(i),n.bufferSync(a),o,d,l,c,s,u,0,!0);return n.makeTensorInfo(o,f.dtype,f.values)}var DR={kernelName:Mc,backendName:`cpu`,kernelFunc:ER};function OR(e,t){let n=0,r=e.length,i=0;for(;n<r;)i=Math.floor((n+r)/2),e[i]<t?n=i+1:r=i;return r}function kR(e,t){let n=0,r=e.length,i=0;for(;n<r;)i=Math.floor((n+r)/2),e[i]<=t?n=i+1:r=i;return r}function AR(e,t,n,r,i,a){let o=Ka(`int32`,n*i);for(let s=0;s<n;++s){let n=e.slice(s*r,(s+1)*r),c=s*i;for(let e=0;e<i;++e)o[c+e]=a===`left`?OR(n,t[e+c]):kR(n,t[e+c])}return o}function jR(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:i,values:a}=t,{side:o}=r,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,l=AR(s,c,i.shape[0],i.shape[1],a.shape[1],o);return n.makeTensorInfo(a.shape,`int32`,l)}var MR={kernelName:Pc,backendName:`cpu`,kernelFunc:jR};function NR(e){let{inputs:t,backend:n}=e,{condition:r,t:i,e:a}=t;X([r,i,a],`select`);let o=r.shape.length,s=n.data.get(r.dataId).values,c=n.data.get(i.dataId).values,l=n.data.get(a.dataId).values,u=ku(i.dtype,a.dtype),d=co(M(i.shape),u),f=0,p=o===0||o>1||i.shape.length===1?1:M(i.shape.slice(1));for(let e=0;e<s.length;e++)for(let t=0;t<p;t++)s[e]===1?d[f++]=c[e]:d[f++]=l[e];return n.makeTensorInfo(i.shape,u,d)}var PR={kernelName:Fc,backendName:`cpu`,kernelFunc:NR},FR=yx,IR=bx,LR={kernelName:Ic,backendName:`cpu`,kernelFunc:zM(Ic,e=>e>=0?IR*e:FR*(Math.exp(e)-1))},RR={kernelName:zc,backendName:`cpu`,kernelFunc:zM(zc,e=>e<0?-1:+(e>0))},zR={kernelName:`Sin`,backendName:`cpu`,kernelFunc:zM(`Sin`,e=>Math.sin(e))},BR={kernelName:Rc,backendName:`cpu`,kernelFunc:zM(Rc,e=>Math.sinh(e))},VR=Math.log(1.1920928955078125e-7)+2,HR={kernelName:Vc,backendName:`cpu`,kernelFunc:zM(Vc,e=>{let t=e>-VR,n=e<VR,r=Math.exp(e),i;return i=n?r:t?e:Math.log(1+r),i})};function UR(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,paddings:o}=r;X([i],`spaceToBatchND`);let s=M(a),c=[[0,0]];c.push(...o);for(let e=1+a.length;e<i.shape.length;++e)c.push([0,0]);let l=rR.kernelFunc({inputs:{x:i},backend:n,attrs:{paddings:c,constantValue:0}}),u=mx(l.shape,a,s,!1),d=hx(u.length,a.length,!1),f=gx(l.shape,a,s,!1),p=VP({inputs:{x:l},backend:n,attrs:{shape:u}}),m=kN({inputs:{x:p},backend:n,attrs:{perm:d}}),h=VP({inputs:{x:m},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),h}var WR={kernelName:Uc,backendName:`cpu`,kernelFunc:UR};function GR(e){let{inputs:t,backend:n}=e,{indices:r,values:i,denseShape:a,defaultValue:o}=t;if(a.shape.length!==1)throw Error(`Dense shape must be a vector, saw:
        ${a.shape}`);if(r.shape.length!==2)throw Error(`Indices must be a matrix, saw:
        ${r.shape}`);if(i.shape.length!==1)throw Error(`Values must be a vector, saw:
        ${i.shape}`);if(o.shape.length!==0)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=n.data.get(r.dataId).values,c=n.data.get(i.dataId).values,l=n.data.get(a.dataId).values,u=n.data.get(o.dataId).values[0],[d,f,p,m,h]=aP(s,r.shape,r.dtype,c,i.dtype,l,u);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],i.dtype,p),n.makeTensorInfo([m.length],`bool`,new Uint8Array(m.map(e=>Number(e)))),n.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}var KR={kernelName:Kc,backendName:`cpu`,kernelFunc:GR};function qR(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:i,newShape:a}=t;if(r.shape.length!==2)throw Error(`Input indices should be a matrix but received shape
        ${r.shape}`);if(i.shape.length!==1)throw Error(`Input shape should be a vector but received shape
        ${i.shape}`);if(a.shape.length!==1)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let o=Array.from(n.data.get(i.dataId).values),s=n.data.get(r.dataId).values,c=Array.from(n.data.get(a.dataId).values),[l,u,d]=oP(s,r.shape,r.dtype,o,c);return[n.makeTensorInfo(u,r.dtype,l),n.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}var JR={kernelName:qc,backendName:`cpu`,kernelFunc:qR};function YR(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
          ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
          ${a.shape}`);if(i.shape[0]!==a.shape[0])throw Error(`segmentIds and indices should have same size.`);let o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=sP(o,r.shape,r.dtype,s,c,!0);return n.makeTensorInfo(u,r.dtype,l)}var XR={kernelName:Jc,backendName:`cpu`,kernelFunc:YR};function ZR(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
         ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
         ${a.shape}`);if(i.shape[0]!==a.shape[0])throw Error(`segmentIds and indices should have same size.`);let o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=sP(o,r.shape,r.dtype,s,c);return n.makeTensorInfo(u,r.dtype,l)}var QR={kernelName:Yc,backendName:`cpu`,kernelFunc:ZR};function $R(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:i,sparseValues:a,defaultValue:o}=t,{outputShape:s}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:f}=Nv(a,i,s),p=n.bufferSync(i),m;switch(a.dtype){case`bool`:m=QN(p,n.bufferSync(a),s,f,u,l,c,d,!!n.data.get(o.dataId).values[0],!1);break;case`float32`:{let e=n.bufferSync(a),t=n.data.get(o.dataId).values[0];m=QN(p,e,s,f,u,l,c,d,t,!1);break}case`int32`:{let e=n.bufferSync(a),t=n.data.get(o.dataId).values[0];m=QN(p,e,s,f,u,l,c,d,t,!1);break}case`string`:m=QN(p,n.bufferSync(a),s,f,u,l,c,d,$l(n.data.get(o.dataId).values[0]),!1);break;default:throw Error(`Unsupported type ${a.dtype}`)}return n.makeTensorInfo(s,m.dtype,m.values)}var ez={kernelName:Xc,backendName:`cpu`,kernelFunc:$R};function tz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{numOrSizeSplits:a,axis:o}=r,s=Ua(o,i.shape)[0],c=Gx(i,a,s),l=Array(i.shape.length).fill(0),u=i.shape.slice();return c.map(e=>{let t=[...u];t[s]=e;let r=rP({inputs:{x:i},backend:n,attrs:{begin:l,size:t}});return l[s]+=e,r})}var nz={kernelName:Wc,backendName:`cpu`,kernelFunc:tz},rz={kernelName:Qc,backendName:`cpu`,kernelFunc:({inputs:e,backend:t})=>{let{x:n}=e,r=t;X(n,`square`);let i=r.data.get(n.dataId).values,a=new Float32Array(i.length);for(let e=0;e<i.length;++e){let t=i[e];a[e]=t*t}return{dataId:r.write(a,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},iz={kernelName:pl,backendName:`cpu`,kernelFunc:zM(pl,(e,t)=>isNaN(e)?NaN:e>0?1:t.alpha)};function az(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,end:o,strides:s,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:f}=r;X(i,`stridedSlice`);let{finalShapeSparse:p,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:_,begin:v,end:y,strides:b}=$b(i.shape,a,o,s,c,l,u,d,f),x;if(h)x=VP({inputs:{x:i},backend:n,attrs:{shape:m}});else if(g||_){j(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=Bb(v,y,b),t=rP({inputs:{x:i},backend:n,attrs:{begin:v,size:e}});x=VP({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else{let e=mP(p,n.bufferSync(i),b,v);x=n.makeTensorInfo(m,e.dtype,e.values)}return x}var oz={kernelName:el,backendName:`cpu`,kernelFunc:az};function sz(e){let{inputs:t,backend:n,attrs:r}=e,{separator:i,nGramWidths:a,leftPad:o,rightPad:s,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:d}=t,f=n.data.get(u.dataId).values,p=n.data.get(d.dataId).values,[m,h]=gP(f,p,i,a,o,s,c,l);return[n.makeTensorInfo([m.length],`string`,m),n.makeTensorInfo(d.shape,`int32`,h)]}var cz={kernelName:tl,backendName:`cpu`,kernelFunc:sz};function lz(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:i}=r,{input:a,delimiter:o}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(a.shape.length!==1)throw Error(`Input must be a vector, got shape: ${a.shape}`);if(o.shape.length!==0)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let s=n.data.get(a.dataId).values,c=n.data.get(o.dataId).values[0],[l,u,d]=vP(s,c,i),f=u.length;return[n.makeTensorInfo([f,2],`int32`,l),n.makeTensorInfo([f],`string`,u),n.makeTensorInfo([2],`int32`,new Int32Array(d))]}var uz={kernelName:nl,backendName:`cpu`,kernelFunc:lz};function dz(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:i}=r,{input:a}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(i<=0)throw Error(`Number of buckets must be at least 1`);let o=n.data.get(a.dataId).values,s=yP(o,i);return n.makeTensorInfo(a.shape,`int32`,s)}var fz={kernelName:rl,backendName:`cpu`,kernelFunc:dz},pz={kernelName:`Tan`,backendName:`cpu`,kernelFunc:zM(`Tan`,e=>Math.tan(e))},mz={kernelName:il,backendName:`cpu`,kernelFunc:zM(il,e=>Math.tanh(e))};function hz(e){let{inputs:t,backend:n}=e,{tensor:r,indices:i,updates:a}=t,{sliceRank:o,numUpdates:s,sliceSize:c,strides:l,outputSize:u}=Nv(a,i,r.shape),d=n.bufferSync(i),f=n.bufferSync(a),p=n.bufferSync(r),m=QN(d,f,r.shape,u,c,s,o,l,p,!1);return n.makeTensorInfo(r.shape,m.dtype,m.values)}var gz={kernelName:Nc,backendName:`cpu`,kernelFunc:hz};function _z(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reps:a}=r;X(i,`tile`);let o=CP(n.bufferSync(i),a);return n.makeTensorInfo(o.shape,o.dtype,o.values)}var vz={kernelName:al,backendName:`cpu`,kernelFunc:_z};function yz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{k:a,sorted:o}=r;X(i,`topk`);let s=n.data.get(i.dataId).values,[c,l]=EP(s,i.shape,i.dtype,a,o);return[n.makeTensorInfo(c.shape,c.dtype,c.values),n.makeTensorInfo(l.shape,l.dtype,l.values)]}var bz={kernelName:ol,backendName:`cpu`,kernelFunc:yz};function xz(e){let{inputs:t,attrs:n,backend:r}=e,{image:i,transforms:a}=t,{interpolation:o,fillMode:s,fillValue:c,outputShape:l}=n,[u,d,f,p]=i.shape,[m,h]=l??[d,f],g=[u,m,h,p],_=N(i.shape),v=_[0],y=_[1],b=_[2],x=N(g),S=x[0],C=x[1],w=x[2],T=Ga(i.dtype,M(g));T.fill(c);let E=r.data.get(i.dataId).values,D=r.data.get(a.dataId).values;for(let e=0;e<u;++e){let t=a.shape[0]===1?D:D.subarray(e*8,e*8+8);for(let n=0;n<m;++n)for(let r=0;r<h;++r)for(let i=0;i<p;++i){let a,l=t[6]*r+t[7]*n+1;if(l===0)continue;let u=(t[0]*r+t[1]*n+t[2])/l,p=(t[3]*r+t[4]*n+t[5])/l,m=Cz(u,f,s),h=Cz(p,d,s);switch(o){case`nearest`:a=kz(E,d,f,v,y,b,e,h,m,i,c);break;case`bilinear`:a=Az(E,d,f,v,y,b,e,h,m,i,c);break;default:throw Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${o}`)}let g=e*S+n*C+r*w+i;T[g]=a}return r.makeTensorInfo(g,i.dtype,T)}return{dataId:r.write(T,g,i.dtype),shape:i.shape,dtype:i.dtype}}var Sz={kernelName:sl,backendName:`cpu`,kernelFunc:xz};function Cz(e,t,n){switch(n){case`reflect`:return wz(e,t);case`wrap`:return Tz(e,t);case`nearest`:return Dz(e,t);default:return Ez(e,t)}}function wz(e,t){let n=e;if(n<0)if(t<=1)n=0;else{let e=2*t;n<e&&(n=e*Math.trunc(-n/e)+n),n=n<-t?n+e:-n-1}else if(n>t-1)if(t<=1)n=0;else{let e=2*t;n-=e*Math.trunc(n/e),n>=t&&(n=e-n-1)}return Aa(0,n,t-1)}function Tz(e,t){let n=e;if(n<0)if(t<=1)n=0;else{let e=t-1;n+=t*(Math.trunc(-n/e)+1)}else if(n>t-1)if(t<=1)n=0;else{let e=t-1;n-=t*Math.trunc(n/e)}return Aa(0,n,t-1)}function Ez(e,t){return e}function Dz(e,t){return Aa(0,e,t-1)}function Oz(e,t,n,r,i,a,o,s,c,l,u){let d=o*r+s*i+c*a+l;return 0<=s&&s<t&&0<=c&&c<n?e[d]:u}function kz(e,t,n,r,i,a,o,s,c,l,u){return Oz(e,t,n,r,i,a,o,Math.round(s),Math.round(c),l,u)}function Az(e,t,n,r,i,a,o,s,c,l,u){let d=Math.floor(s),f=Math.floor(c),p=d+1,m=f+1,h=(m-c)*Oz(e,t,n,r,i,a,o,d,f,l,u)+(c-f)*Oz(e,t,n,r,i,a,o,d,m,l,u),g=(m-c)*Oz(e,t,n,r,i,a,o,p,f,l,u)+(c-f)*Oz(e,t,n,r,i,a,o,p,m,l,u);return(p-s)*h+(s-d)*g}function jz(e){let{inputs:t,attrs:n,backend:r}=e,{axis:i}=n,{x:a}=t;X(a,`unique`);let o=r.data.get(a.dataId).values,{outputValues:s,outputShape:c,indices:l}=DP(o,i,a.shape,a.dtype);return[r.makeTensorInfo(c,a.dtype,s),r.makeTensorInfo([l.length],`int32`,l)]}var Mz={kernelName:ll,backendName:`cpu`,kernelFunc:jz};function Nz(e){let{inputs:t,backend:n,attrs:r}=e,{value:i}=t,{axis:a}=r;a<0&&(a+=i.shape.length);let o=i.shape.length,s=i.shape[a],c=Array(o-1),l=0;for(let e=0;e<o;e++)e!==a&&(c[l++]=i.shape[e]);let u=Array(o).fill(0),d=i.shape.slice();d[a]=1;let f=Array(s);for(let e=0;e<f.length;e++){u[a]=e;let t=rP({inputs:{x:i},backend:n,attrs:{begin:u,size:d}});f[e]=VP({inputs:{x:t},backend:n,attrs:{shape:c}}),n.disposeIntermediateTensorInfo(t)}return f}var Pz={kernelName:ul,backendName:`cpu`,kernelFunc:Nz};function Fz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,segmentIds:a}=t,{numSegments:o}=r;X(i,`unsortedSegmentSum`);let s=i.shape.length,c=a.shape.length,l=[],u=[],d=s-c,f=a;for(let e=0;e<d;++e){let t=MI({inputs:{input:f},backend:n,attrs:{dim:e+1}});f=t,u.push(t)}for(let e=0;e<o;++e){let t=Jl(e,`int32`),r=n.makeTensorInfo([],`int32`,t),a=GM({inputs:{a:r,b:f},backend:n}),o=DM({inputs:{x:a},backend:n,attrs:{dtype:`float32`}}),s=xN({inputs:{a:o,b:i},backend:n}),c=yI({inputs:{x:s},backend:n,attrs:{axis:0,keepDims:!1}});l.push(c),u.push(r),u.push(a),u.push(o),u.push(s),u.push(c)}let p=eR({inputs:l,backend:n,attrs:{axis:0}});return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var Iz=[KP,_M,qP,JP,NM,XP,QP,eF,nF,iF,aF,oF,sF,cF,lF,hF,_F,yF,xF,WP,CF,TF,DF,LM,kF,OM,HM,AF,bM,jF,FF,LF,zF,VF,UF,GF,qF,JF,YF,ZF,$F,tI,rI,aI,sI,lI,dI,pI,mI,hI,gI,vI,SI,AP,wI,KM,jI,YM,NI,ZM,HI,WI,KI,$M,tN,JI,XI,QI,eL,aN,sN,CM,nL,NF,rL,iL,aL,MP,lN,dN,sL,mN,cL,lL,uL,dL,pL,hL,_L,_N,yL,xL,CL,TL,DL,kL,jL,yN,NL,PL,RL,SN,TN,VL,WL,qL,DN,YL,$L,tR,rR,iR,FP,NN,oR,cR,uR,fR,TM,FI,pR,LP,zP,HP,hR,_R,yR,xR,CR,wR,TR,ZN,DR,MR,PR,LR,tP,RR,zR,BR,iP,IL,HR,WR,KR,JR,XR,QR,ez,nz,lP,rz,dP,pP,iz,oz,cz,uz,fz,SP,bI,pz,mz,gz,vz,bz,Sz,AN,Mz,Pz,{kernelName:dl,backendName:`cpu`,kernelFunc:Fz},ZL];for(let e of Iz)El(e);var Lz={},Rz={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function zz(e,t){Lz[e]=t}function Bz(e,t){if(!(e in Lz)||t!=null){let n=Hz(e,t);if(n!==null)Lz[e]=n;else return console.log(`Could not get context for WebGL version`,e),null}let n=Lz[e];return n==null||n.isContextLost()?(delete Lz[e],Bz(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),Lz[e])}function Vz(e){if(!P().getBool(`IS_SAFARI`)&&typeof OffscreenCanvas<`u`&&e===2)return new OffscreenCanvas(300,150);if(typeof document<`u`)return document.createElement(`canvas`);throw Error(`Cannot create a canvas in this context`)}function Hz(e,t){if(e!==1&&e!==2)throw Error(`Cannot get WebGL rendering context, WebGL is disabled.`);let n=t??Vz(e);return n.addEventListener(`webglcontextlost`,t=>{t.preventDefault(),delete Lz[e]},!1),P().getBool(`SOFTWARE_WEBGL_ENABLED`)&&(Rz.failIfMajorPerformanceCaveat=!1),e===1?n.getContext(`webgl`,Rz)||n.getContext(`experimental-webgl`,Rz):n.getContext(`webgl2`,Rz)}var Uz;(function(e){e[e.DENSE=0]=`DENSE`,e[e.SHARED_BATCH=1]=`SHARED_BATCH`})(Uz||={});var Wz;(function(e){e[e.RENDER=0]=`RENDER`,e[e.UPLOAD=1]=`UPLOAD`,e[e.PIXELS=2]=`PIXELS`,e[e.DOWNLOAD=3]=`DOWNLOAD`})(Wz||={});var Gz;(function(e){e[e.UNPACKED_FLOAT16=0]=`UNPACKED_FLOAT16`,e[e.UNPACKED_FLOAT32=1]=`UNPACKED_FLOAT32`,e[e.PACKED_4X1_UNSIGNED_BYTE=2]=`PACKED_4X1_UNSIGNED_BYTE`,e[e.PACKED_2X2_FLOAT32=3]=`PACKED_2X2_FLOAT32`,e[e.PACKED_2X2_FLOAT16=4]=`PACKED_2X2_FLOAT16`})(Gz||={});function Kz(e,t){return[t,e]}function qz(e,t){return e*t}function Jz(e){let t=M(e);return Ra(Math.ceil(t/4))}function Yz(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function Xz(e,t){let[n,r]=Yz(e,t);return n*r*4}function Zz(e,t){let n=e,r,i,a,o,s,c,l,u,d,f;return P().getNumber(`WEBGL_VERSION`)===2?(r=n.R32F,i=n.R16F,a=n.RGBA16F,o=n.RGBA32F,s=n.RED,l=4,u=1,d=n.HALF_FLOAT,f=n.FLOAT,c=n.RGBA8):(r=e.RGBA,i=e.RGBA,a=e.RGBA,o=n.RGBA,s=e.RGBA,l=4,u=4,d=t==null?null:t.HALF_FLOAT_OES,f=e.FLOAT,c=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:i,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:o,textureFormatFloat:s,downloadTextureFormat:c,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:f}}function Z(e,t){let n=t();return P().getBool(`DEBUG`)&&Qz(e),n}function Qz(e){let t=e.getError();if(t!==e.NO_ERROR)throw Error(`WebGL Error: `+nB(e,t))}var $z=5.96e-8,eB=65504;function tB(e){return!!(P().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)||e===0||$z<Math.abs(e)&&Math.abs(e)<eB)}function nB(e,t){switch(t){case e.NO_ERROR:return`NO_ERROR`;case e.INVALID_ENUM:return`INVALID_ENUM`;case e.INVALID_VALUE:return`INVALID_VALUE`;case e.INVALID_OPERATION:return`INVALID_OPERATION`;case e.INVALID_FRAMEBUFFER_OPERATION:return`INVALID_FRAMEBUFFER_OPERATION`;case e.OUT_OF_MEMORY:return`OUT_OF_MEMORY`;case e.CONTEXT_LOST_WEBGL:return`CONTEXT_LOST_WEBGL`;default:return`Unknown error code ${t}`}}function rB(e,t){return TB(e,()=>e.getExtension(t),`Extension "`+t+`" not supported on this browser.`)}function iB(e,t){let n=TB(e,()=>e.createShader(e.VERTEX_SHADER),`Unable to create vertex WebGLShader.`);if(Z(e,()=>e.shaderSource(n,t)),Z(e,()=>e.compileShader(n)),e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(n)),Error(`Failed to compile vertex shader.`);return n}function aB(e,t){let n=TB(e,()=>e.createShader(e.FRAGMENT_SHADER),`Unable to create fragment WebGLShader.`);if(Z(e,()=>e.shaderSource(n,t)),Z(e,()=>e.compileShader(n)),P().get(`ENGINE_COMPILE_ONLY`))return n;if(e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw sB(t,e.getShaderInfoLog(n)),Error(`Failed to compile fragment shader.`);return n}var oB=/ERROR: [0-9]+:([0-9]+):/g;function sB(e,t){let n=oB.exec(t);if(n==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let r=+n[1],i=e.split(`
`),a=i.length.toString().length+2,o=i.map((e,t)=>Ba((t+1).toString(),a)+e),s=0;for(let e=0;e<o.length;e++)s=Math.max(o[e].length,s);let c=o.slice(0,r-1),l=o.slice(r-1,r),u=o.slice(r);console.log(c.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${Ba(l[0],s)}`,`border:1px solid red; background-color:#e3d2d2; color:#a61717`),console.log(u.join(`
`))}function cB(e){return TB(e,()=>e.createProgram(),`Unable to create WebGLProgram.`)}function lB(e,t){if(Z(e,()=>e.linkProgram(t)),!P().get(`ENGINE_COMPILE_ONLY`)&&e.getProgramParameter(t,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Failed to link vertex and fragment shaders.`)}function uB(e,t){if(Z(e,()=>e.validateProgram(t)),e.getProgramParameter(t,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Shader program validation failed.`)}function dB(e,t){let n=TB(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),Z(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function fB(e,t){let n=TB(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return Z(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n)),Z(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function pB(e){return TB(e,()=>e.createTexture(),`Unable to create WebGLTexture.`)}function mB(e,t){let n=P().getNumber(`WEBGL_MAX_TEXTURE_SIZE`);if(e<=0||t<=0){let n=`[${e}x${t}]`;throw Error(`Requested texture size `+n+` is invalid.`)}if(e>n||t>n){let r=`[${e}x${t}]`,i=`[${n}x${n}]`;throw Error(`Requested texture size `+r+` greater than WebGL maximum on this browser / GPU `+i+`.`)}}function hB(e){return TB(e,()=>e.createFramebuffer(),`Unable to create WebGLFramebuffer.`)}function gB(e,t,n,r,i,a,o){let s=e.getAttribLocation(t,n);return s===-1?!1:(Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),Z(e,()=>e.vertexAttribPointer(s,i,e.FLOAT,!1,a,o)),Z(e,()=>e.enableVertexAttribArray(s)),!0)}function _B(e,t,n){EB(e,n),Z(e,()=>e.activeTexture(e.TEXTURE0+n)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function vB(e,t,n){return TB(e,()=>e.getUniformLocation(t,n),`uniform "`+n+`" not present in program.`)}function yB(e,t,n){return e.getUniformLocation(t,n)}function bB(e,t,n,r){Z(e,()=>_B(e,t,r)),Z(e,()=>e.uniform1i(n,r))}function xB(e,t,n){Z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,n)),Z(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function SB(e,t){Z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),Z(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function CB(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error(`Error binding framebuffer: `+wB(e,t))}function wB(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return`FRAMEBUFFER_INCOMPLETE_DIMENSIONS`;case e.FRAMEBUFFER_UNSUPPORTED:return`FRAMEBUFFER_UNSUPPORTED`;default:return`unknown error ${t}`}}function TB(e,t,n){let r=Z(e,()=>t());if(r==null)throw Error(n);return r}function EB(e,t){let n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n){let e=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw Error(`textureUnit must be in ${e}.`)}}function DB(e,t=2){return M(e.slice(0,e.length-t))}function OB(e){if(e.length===0)throw Error(`Cannot get rows and columns of an empty shape array.`);return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function kB(e){let t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[DB(e),...OB(e)]),t}function AB(e,t=!1){let n=P().getNumber(`WEBGL_MAX_TEXTURE_SIZE`),r=P().getNumber(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`);r===1/0&&P().getBool(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`)&&(r=n/2),t&&(n*=2,r*=2,e=e.map((t,n)=>n>=e.length-2?ja(e[n]):e[n]),e.length===1&&(e=[2,e[0]])),e.length!==2&&(e=Wa(e).newShape);let i=M(e),a=null;e.length<=1&&i<=n?a=[1,i]:e.length===2&&e[0]<=n&&e[1]<=n?a=e:e.length===3&&e[0]*e[1]<=n&&e[2]<=n?a=[e[0]*e[1],e[2]]:e.length===3&&e[0]<=n&&e[1]*e[2]<=n?a=[e[0],e[1]*e[2]]:e.length===4&&e[0]*e[1]*e[2]<=n&&e[3]<=n?a=[e[0]*e[1]*e[2],e[3]]:e.length===4&&e[0]<=n&&e[1]*e[2]*e[3]<=n&&(a=[e[0],e[1]*e[2]*e[3]]);let o=a!=null&&Math.max(...a)>r&&Math.min(...a)<=(t?2:1)&&Math.min(...a)>0;if(a==null||o)if(t){let t=DB(e),n=2,r=2;e.length&&([n,r]=OB(e)),i=n/2*t*(r/2),a=Ra(i).map(e=>e*2)}else a=Ra(i);return a}function jB(e){return e%2==0}function MB(e,t){if(e=e.slice(-2),t=t.slice(-2),Ia(e,t)||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){let n=e[e.length-1],r=t[t.length-1];if(n===r||jB(n)&&jB(r)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&jB(e[0])&&jB(t[0])}var NB,PB;function FB(e){if(NB==null){let t=Bz(e);NB=t.getParameter(t.MAX_TEXTURE_SIZE)}return NB}function IB(e){if(PB==null){let t=Bz(e);PB=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,PB)}function LB(e){if(e===0)return 0;let t,n=Bz(e);return t=RB(n,`EXT_disjoint_timer_query_webgl2`)&&e===2?2:+!!RB(n,`EXT_disjoint_timer_query`),t}function RB(e,t){return e.getExtension(t)!=null}function zB(e){try{if(Bz(e)!=null)return!0}catch(e){return console.log(`Error when getting WebGL context: `,e),!1}return!1}function BB(e){if(e===0)return!1;let t=Bz(e);if(e===1){if(!RB(t,`OES_texture_float`))return!1}else if(!RB(t,`EXT_color_buffer_float`))return!1;return HB(t)}function VB(e){if(e===0)return!1;let t=Bz(e);if(e===1){if(!RB(t,`OES_texture_float`)||!RB(t,`WEBGL_color_buffer_float`))return!1}else{if(RB(t,`EXT_color_buffer_float`))return HB(t);let e=`EXT_color_buffer_half_float`;return RB(t,e)?UB(t,t.getExtension(e)):!1}return HB(t)}function HB(e){let t=Zz(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),i}function UB(e,t){let n=Zz(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(i),a}function WB(e){return e===2?Bz(e).fenceSync!=null:!1}function GB(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{e!=null&&j(e.dtype!==`complex64`,()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}var Q=P();Q.registerFlag(`HAS_WEBGL`,()=>Q.getNumber(`WEBGL_VERSION`)>0),Q.registerFlag(`WEBGL_VERSION`,()=>zB(2)?2:+!!zB(1)),Q.registerFlag(`WEBGL_CHECK_NUMERICAL_PROBLEMS`,()=>!1),Q.registerFlag(`WEBGL_BUFFER_SUPPORTED`,()=>Q.get(`WEBGL_VERSION`)===2),Q.registerFlag(`WEBGL_CPU_FORWARD`,()=>!0),Q.registerFlag(`WEBGL_FORCE_F16_TEXTURES`,()=>!1),Q.registerFlag(`WEBGL_PACK`,()=>Q.getBool(`HAS_WEBGL`)),Q.registerFlag(`WEBGL_PACK_NORMALIZATION`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_CLIP`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_DEPTHWISECONV`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_BINARY_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_UNARY_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_ARRAY_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_IMAGE_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_REDUCE`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_LAZILY_UNPACK`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_CONV_IM2COL`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_CONV2DTRANSPOSE`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_MAX_TEXTURE_SIZE`,()=>FB(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_MAX_TEXTURES_IN_SHADER`,()=>IB(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`,()=>{let e=Q.getNumber(`WEBGL_VERSION`);return e===0?0:LB(e)}),Q.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`,()=>Q.getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0&&!Ku()),Q.registerFlag(`WEBGL_RENDER_FLOAT32_CAPABLE`,()=>BB(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_RENDER_FLOAT32_ENABLED`,()=>Q.getBool(`WEBGL_FORCE_F16_TEXTURES`)?!1:Q.getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)),Q.registerFlag(`WEBGL_DOWNLOAD_FLOAT_ENABLED`,()=>VB(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_FENCE_API_ENABLED`,()=>WB(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_SIZE_UPLOAD_UNIFORM`,()=>Q.getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?4:0),Q.registerFlag(`WEBGL_DELETE_TEXTURE_THRESHOLD`,()=>-1,e=>{if(typeof e!=`number`)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${e}.`);if(e<0&&e!==-1)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)}),Q.registerFlag(`WEBGL_FLUSH_THRESHOLD`,()=>Ku()?1:-1,e=>{if(typeof e!=`number`)throw Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${e}.`);if(e<0&&e!==-1)throw Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)}),Q.registerFlag(`CPU_HANDOFF_SIZE_THRESHOLD`,()=>128),Q.registerFlag(`WEBGL_USE_SHAPES_UNIFORMS`,()=>!1),Q.registerFlag(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`,()=>1e5),Q.registerFlag(`TOPK_K_CPU_HANDOFF_THRESHOLD`,()=>128),Q.registerFlag(`WEBGL_EXP_CONV`,()=>!1),Q.registerFlag(`SOFTWARE_WEBGL_ENABLED`,()=>Q.getBool(`IS_TEST`)),Q.registerFlag(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`,()=>1/0),Q.registerFlag(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`,()=>!1),Q.registerFlag(`WEBGL2_ISNAN_CUSTOM`,()=>!1),Q.registerFlag(`ENGINE_COMPILE_ONLY`,()=>!1);function KB(){let e,t,n,r,i,a,o,s,c,l;return P().getNumber(`WEBGL_VERSION`)===2?(e=`#version 300 es`,t=`in`,n=`out`,r=`in`,i=`texture`,a=`outputColor`,o=`out vec4 outputColor;`,s=P().getBool(`WEBGL2_ISNAN_CUSTOM`)?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:``,c=``,l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e=``,t=`attribute`,n=`varying`,r=`varying`,i=`texture2D`,a=`gl_FragColor`,o=``,s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:i,output:a,defineOutput:o,defineSpecialNaN:s,defineSpecialInf:c,defineRound:l}}function qB(e,t,n=`index`){let r=N(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${t}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${t}`:`index -= ${e[i]} * ${t}`};`).join(``)}function JB(e,t,n=`index`){let r=N(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / outShapeStrides[${i}]`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * outShapeStrides[${i}]`:`index -= ${e[i]} * outShapeStrides[${i}]`};`).join(``)}function YB(e,t){let n=e.length,r=e.map(e=>`${t}[${e}]`),i=Array(n-1);i[n-2]=r[n-1];for(let e=n-3;e>=0;--e)i[e]=`(${i[e+1]} * ${r[e+1]})`;return i}function XB(e,t,n=`index`){let r=YB(e.map((e,t)=>t),t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${r[i]}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${r[i]}`:`index -= ${e[i]} * ${r[i]}`};`).join(``)}function ZB(e){let t=N(e).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function QB(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var $B=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`,{getBroadcastDims:eV}=cS;function tV(e,t,n){let r=[];if(e.forEach(e=>{let t=M(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?r.push(`uniform float ${e.name}${t>1?`[${t}]`:``};`):(r.push(`uniform sampler2D ${e.name};`),r.push(`uniform int offset${e.name};`)),n.enableShapeUniforms){let{uniformShape:t}=UV(n.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:r.push(`uniform int ${e.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${e.name}Shape;`);break;default:break}r.push(`uniform ivec2 ${e.name}TexShape;`)}}),n.enableShapeUniforms){switch(t.logicalShape.length){case 1:r.push(`uniform int outShape;`);break;case 2:r.push(`uniform ivec2 outShape;`),r.push(`uniform int outShapeStrides;`);break;case 3:r.push(`uniform ivec3 outShape;`),r.push(`uniform ivec2 outShapeStrides;`);break;case 4:r.push(`uniform ivec4 outShape;`),r.push(`uniform ivec3 outShapeStrides;`);break;default:break}r.push(`uniform ivec2 outTexShape;`)}n.customUniforms&&n.customUniforms.forEach(e=>{r.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:``};`)});let i=r.join(`
`),a=e.map(e=>iV(e,t,n.packedInputs,n.enableShapeUniforms)).join(`
`),o=t.texShape,s=KB(),c=sV(s),l,u,d=uV(s);return t.isPacked?(l=aV(t.logicalShape,o,n.enableShapeUniforms),u=lV(s)):(l=oV(t.logicalShape,o,n.enableShapeUniforms),u=cV(s)),n.packedInputs&&(d+=mV),[d,c,u,i,l,a,n.userCode].join(`
`)}function nV(e,t=!1){let n=e.shapeInfo.logicalShape;switch(n.length){case 0:return OV(e,t);case 1:return AV(e,t);case 2:return MV(e,t);case 3:return PV(e,t);case 4:return IV(e,t);case 5:return LV(e);case 6:return RV(e);default:throw Error(`${n.length}-D input sampling is not yet supported`)}}function rV(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return DV(e);case 1:return kV(e,t);case 2:return jV(e,t);case 3:return NV(e,t);default:return FV(e,t)}}function iV(e,t,n=!1,r){let i=``;n?i+=rV(e,r):i+=nV(e,r);let a=e.shapeInfo.logicalShape,o=t.logicalShape;return a.length<=o.length&&(n?i+=BV(e,t):i+=VV(e,t)),i}function aV(e,t,n){switch(e.length){case 0:return hV();case 1:return gV(e,t,n);case 2:return wV(e,t,n);case 3:return vV(e,t,n);default:return bV(e,t,n)}}function oV(e,t,n){switch(e.length){case 0:return hV();case 1:return _V(e,t,n);case 2:return TV(e,t,n);case 3:return yV(e,t,n);case 4:return xV(e,t,n);case 5:return SV(e,t);case 6:return CV(e,t);default:throw Error(`${e.length}-D output sampling is not yet supported`)}}function sV(e){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${e.texture2D}(textureSampler, uv).r;
    }
  `}function cV(e){return`
    void setOutput(float val) {
      ${e.output} = vec4(val, 0, 0, 0);
    }
  `}function lV(e){return`
    void setOutput(vec4 val) {
      ${e.output} = val;
    }
  `}function uV(e){return`${e.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${e.varyingFs} vec2 resultUV;
    ${e.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${e.defineSpecialNaN}
    ${e.defineSpecialInf}
    ${e.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${dV}
    ${fV}
    ${pV}
  `}var dV=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,fV=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,pV=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,mV=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function hV(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function gV(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return r[0]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${r[1]}.0);
      }
    `:r[1]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${r[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      return 2 * (resTexRC.x * ${r[1]} + resTexRC.y);
    }
  `}function _V(e,t,n){return t[0]===1?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function vV(e,t,n){if(n)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[2]/2),a=i*Math.ceil(e[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec3(b, r, c);
    }
  `}function yV(e,t,n){if(n)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${JB([`r`,`c`,`d`],e)}
    return ivec3(r, c, d);
  }
`;let r=qB([`r`,`c`,`d`],e);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec3(r, c, d);
    }
  `}function bV(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[e.length-1]/2),a=i*Math.ceil(e[e.length-2]/2),o=a,s=``,c=`b, r, c`;for(let t=2;t<e.length-1;t++)o*=e[e.length-t-1],s=`
      int b${t} = index / ${o};
      index -= b${t} * ${o};
    `+s,c=`b${t}, `+c;return`
    ivec${e.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      ${s}

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec${e.length}(${c});
    }
  `}function xV(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${JB([`r`,`c`,`d`,`d2`],e)}
      return ivec4(r, c, d, d2);
    }
  `;let r=qB([`r`,`c`,`d`,`d2`],e);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec4(r, c, d, d2);
    }
  `}function SV(e,t){let n=qB([`r`,`c`,`d`,`d2`,`d3`],e);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function CV(e,t){let n=qB([`r`,`c`,`d`,`d2`,`d3`,`d4`],e);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function wV(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(Ia(e,t))return n?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));
      }
    `;let i=Math.ceil(e[1]/2);return n?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));

      int index = resTexRC.x * ${r[1]} + resTexRC.y;
      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec2(r, c);
    }
  `}function TV(e,t,n){return Ia(e,t)?n?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:e[1]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:e[0]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:n?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${e[1]};
      int c = index - r * ${e[1]};
      return ivec2(r, c);
    }
  `}function EV(e){return`offset${e}`}function DV(e){let t=e.name;return`
    vec4 ${`get`+t.charAt(0).toUpperCase()+t.slice(1)}() {
      return ${KB().texture2D}(${t}, halfCR);
    }
  `}function OV(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`float ${r}() {return ${n};}`;let[i,a]=e.shapeInfo.texShape;if(i===1&&a===1)return`
      float ${r}() {
        return sampleTexture(${n}, halfCR);
      }
    `;let o=EV(n);if(t)return`
    float ${r}() {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${o});
      return sampleTexture(${n}, uv);
    }
  `;let[s,c]=e.shapeInfo.texShape;return`
    float ${r}() {
      vec2 uv = uvFromFlat(${s}, ${c}, ${o});
      return sampleTexture(${n}, uv);
    }
  `}function kV(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=e.shapeInfo.texShape,a=KB();if(t)return`
    vec4 ${r}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${a.texture2D}(${n}, uv);
    }
  `;let o=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)];return`
    vec4 ${r}(int index) {
      vec2 uv = packedUVfrom1D(
        ${o[0]}, ${o[1]}, index);
      return ${a.texture2D}(${n}, uv);
    }
  `}function AV(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float ${r}(int index) {
        ${zV(e)}
      }
    `;let i=e.shapeInfo.texShape,a=i[0],o=i[1];if(o===1&&a===1)return`
      float ${r}(int index) {
        return sampleTexture(${n}, halfCR);
      }
    `;let s=EV(n);return o===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / ${a}.0);
        return sampleTexture(${n}, uv);
      }
    `:a===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / ${o}.0, 0.5);
        return sampleTexture(${n}, uv);
      }
    `:t?`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${s});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${a}, ${o}, index + ${s});
      return sampleTexture(${n}, uv);
    }
  `}function jV(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=a[0],s=a[1],c=KB();if(a!=null&&Ia(n,a))return t?`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);

        return ${c.texture2D}(${r}, uv);
      }
    `:`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}.0, ${o}.0);

        return ${c.texture2D}(${r}, uv);
      }
    `;if(t)return`
    vec4 ${i}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `;let l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];return`
    vec4 ${i}(int row, int col) {
      vec2 uv = packedUVfrom2D(${Math.ceil(n[1]/2)}, ${l[0]}, ${l[1]}, row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `}function MV(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape;if(a!=null&&Ia(n,a)){if(t)return`
      float ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `;let e=a[0];return`
    float ${i}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${a[1]}.0, ${e}.0);
      return sampleTexture(${r}, uv);
    }
  `}let{newShape:o,keptDims:s}=Wa(n),c=o;if(c.length<n.length)return`
      ${nV(WV(e,c),t)}
      float ${i}(int row, int col) {
        return ${i}(${GV([`row`,`col`],s)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));
        ${zV(e)}
      }
    `;let l=a[0],u=a[1],d=EV(r);return u===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${r}, uv);
    }
  `:l===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${r}, uv);
    }
  `:t?`
      float ${i}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
        return sampleTexture(${r}, uv);
      }
    `:`
  float ${i}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${n[1]} + col + ${d};
    vec2 uv = uvFromFlat(${l}, ${u}, index);
    return sampleTexture(${r}, uv);
  }
`}function NV(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];if(n[0]===1)return`
        ${rV(WV(e,n.slice(1)),t)}
        vec4 ${i}(int b, int row, int col) {
          return ${i}(${GV([`b`,`row`,`col`],[1,2])});
        }
      `;let s=KB();if(t)return`
    vec4 ${i}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `;let c=o[0],l=o[1],u=Math.ceil(n[2]/2);return`
    vec4 ${i}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${l}, ${u*Math.ceil(n[1]/2)}, ${u}, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `}function PV(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[1]*n[2],o=n[2],{newShape:s,keptDims:c}=Wa(n),l=s;if(l.length<n.length)return`
        ${nV(WV(e,l),t)}
        float ${i}(int row, int col, int depth) {
          return ${i}(${GV([`row`,`col`,`depth`],c)});
        }
      `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${a}, ${o}, 1)));
        ${zV(e)}
      }
    `;let u=e.shapeInfo.texShape,d=u[0],f=u[1],p=e.shapeInfo.flatOffset;if(f===a&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        int stride1 = ${r}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
        float ${i}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${o}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${f}.0, ${d}.0);
          return sampleTexture(${r}, uv);
        }
      `;if(f===o&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${f}.0, ${d}.0);
      return sampleTexture(${r}, uv);
    }
  `;let m=EV(r);return t?`
    float ${i}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${r}Shape[1] * ${r}Shape[2];
      int stride1 = ${r}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${m};
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
      return sampleTexture(${r}, uv);
    }
    `:`
      float ${i}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${a} + col * ${o} + depth + ${m};
        vec2 uv = uvFromFlat(${d}, ${f}, index);
        return sampleTexture(${r}, uv);
      }
  `}function FV(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=KB();if(t)return`
    vec4 ${r}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${n}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${i.texture2D}(${n}, uv);
    }
  `;let a=e.shapeInfo.logicalShape,o=a.length,s=e.shapeInfo.texShape,c=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],l=c[0],u=c[1],d=Math.ceil(a[o-1]/2),f=d*Math.ceil(a[o-2]/2),p=`int b, int row, int col`,m=`b * ${f} + (row / 2) * ${d} + (col / 2)`;for(let e=2;e<o-1;e++)p=`int b${e}, `+p,f*=a[o-e-1],m=`b${e} * ${f} + `+m;return`
    vec4 ${r}(${p}) {
      int index = ${m};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${l});
      return ${i.texture2D}(${n}, uv);
    }
  `}function IV(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[3],o=n[2]*a,s=n[1]*o,{newShape:c,keptDims:l}=Wa(n);if(c.length<n.length)return`
      ${nV(WV(e,c),t)}
      float ${i}(int row, int col, int depth, int depth2) {
        return ${i}(${GV([`row`,`col`,`depth`,`depth2`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${s}, ${o}, ${a}, 1)));
        ${zV(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1],m=`int stride2 = ${r}Shape[3];`,h=`int stride1 = ${r}Shape[2] * stride2;`,g=`int stride0 = ${r}Shape[1] * stride1;`;if(p===s&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        ${m}
        ${h}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${o}, ${a}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(p===a&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n[1]*n[2]}, ${n[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;let _=EV(r);return t?`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${m}
      ${h}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${_});
      return sampleTexture(${r}, uv);
    }
  `:`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} +
          depth * ${a} + depth2;
      vec2 uv = uvFromFlat(${f}, ${p}, index + ${_});
      return sampleTexture(${r}, uv);
    }
  `}function LV(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=t[4],a=t[3]*i,o=t[2]*a,s=t[1]*o,{newShape:c,keptDims:l}=Wa(t);if(c.length<t.length)return`
      ${nV(WV(e,c))}
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        return ${r}(${GV([`row`,`col`,`depth`,`depth2`,`depth3`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${s}, ${o}, ${a}, ${i})) +
          depth3;
        ${zV(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1];return p===s&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${o}, ${a}, ${i}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:p===i&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} + depth * ${a} +
          depth2 * ${i} + depth3 + ${EV(n)};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${n}, uv);
    }
  `}function RV(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),{newShape:i,keptDims:a}=Wa(t);if(i.length<t.length)return`
      ${nV(WV(e,i))}
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${r}(${GV([`row`,`col`,`depth`,`depth2`,`depth3`,`depth4`],a)});
      }
    `;let o=t[5],s=t[4]*o,c=t[3]*s,l=t[2]*c,u=t[1]*l;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${l}, ${c}, ${s})) +
          dot(
            vec2(depth3, depth4),
            vec2(${o}, 1)));
        ${zV(e)}
      }
    `;let d=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,p=f[0],m=f[1];return m===u&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${c}, ${s}, ${o})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:m===o&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${l} + depth * ${c} +
          depth2 * ${s} + depth3 * ${o} + depth4 + ${EV(n)};
      vec2 uv = uvFromFlat(${p}, ${m}, index);
      return sampleTexture(${n}, uv);
    }
  `}function zV(e){let t=e.name,n=M(e.shapeInfo.logicalShape);return n<2?`return ${t};`:`
    for (int i = 0; i < ${n}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function BV(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=e.shapeInfo.logicalShape.length,o=t.logicalShape.length,s=eV(e.shapeInfo.logicalShape,t.logicalShape),c=HV(o),l=o-a,u,d=[`x`,`y`,`z`,`w`,`u`,`v`];u=a===0?``:o<2&&s.length>=1?`coords = 0;`:s.map(e=>`coords.${d[e+l]} = 0;`).join(`
`);let f=``;f=o<2&&a>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${d[t+l]}`).join(`, `);let p=`return outputValue;`,m=M(e.shapeInfo.logicalShape)===1,h=M(t.logicalShape)===1;if(a===1&&!m&&!h)p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!h)p=o===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(s.length){let e=a-2,t=a-1;s.indexOf(e)>-1&&s.indexOf(t)>-1?p=`return vec4(outputValue.x);`:s.indexOf(e)>-1?p=`return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);`:s.indexOf(t)>-1&&(p=`return vec4(outputValue.xx, outputValue.zz);`)}return`
    vec4 ${i}() {
      ${c} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${r}(${f});
      ${p}
    }
  `}function VV(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=t.texShape,o=e.shapeInfo.texShape,s=e.shapeInfo.logicalShape.length,c=t.logicalShape.length;if(!e.shapeInfo.isUniform&&s===c&&e.shapeInfo.flatOffset==null&&Ia(o,a))return`
      float ${i}() {
        return sampleTexture(${n}, resultUV);
      }
    `;let l=HV(c),u=eV(e.shapeInfo.logicalShape,t.logicalShape),d=c-s,f,p=[`x`,`y`,`z`,`w`,`u`,`v`];f=s===0?``:c<2&&u.length>=1?`coords = 0;`:u.map(e=>`coords.${p[e+d]} = 0;`).join(`
`);let m=``;return m=c<2&&s>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${p[t+d]}`).join(`, `),`
    float ${i}() {
      ${l} coords = getOutputCoords();
      ${f}
      return get${r}(${m});
    }
  `}function HV(e){if(e<=1)return`int`;if(e===2)return`ivec2`;if(e===3)return`ivec3`;if(e===4)return`ivec4`;if(e===5)return`ivec5`;if(e===6)return`ivec6`;throw Error(`GPU for rank ${e} is not yet supported`)}function UV(e,t,n){let{newShape:r,keptDims:i}=Wa(t),a=t.length,o=e&&a===3&&t[0]===1,s=o?t.slice(1):r,c=!e&&a>1&&!Ia(t,n)&&r.length<a||o;return{useSqueezeShape:c,uniformShape:c?s:t,keptDims:i}}function WV(e,t){let n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function GV(e,t){return t.map(t=>e[t]).join(`, `)}function KV(e,t,n,r){let i=n.map((e,n)=>{let r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:e.isUniform?!1:e.texData.isPacked,flatOffset:null};return e.texData!=null&&e.texData.slice!=null&&e.texData.slice.flatOffset>0&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}}),a=i.map(e=>e.shapeInfo),o={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},s=tV(i,o,t),c=aB(e.gl,s),l=e.createProgram(c);return P().get(`ENGINE_COMPILE_ONLY`)?{program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(e.buildVao(l),Object.assign({program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o},qV(e,t,l)))}function qV(e,t,n){let r=[],i=[],a,o,s,c=null,l=null;l=e.getUniformLocation(n,`NAN`,!1),P().getNumber(`WEBGL_VERSION`)===1&&(c=e.getUniformLocation(n,`INFINITY`,!1));for(let i of t.variableNames){let a={name:i,uniform:e.getUniformLocation(n,i,!1),offset:e.getUniformLocation(n,`offset${i}`,!1)};t.enableShapeUniforms&&(a.shape=e.getUniformLocation(n,`${i}Shape`,!1),a.texShape=e.getUniformLocation(n,`${i}TexShape`,!1)),r.push(a)}if(t.enableShapeUniforms&&(a=e.getUniformLocation(n,`outShape`,!1),s=e.getUniformLocation(n,`outShapeStrides`,!1),o=e.getUniformLocation(n,`outTexShape`,!1)),t.customUniforms)for(let r of t.customUniforms)i.push(e.getUniformLocation(n,r.name,!1));return{variablesLocations:r,customUniformLocations:i,infLoc:c,nanLoc:l,outShapeLocation:a,outShapeStridesLocation:s,outTexShapeLocation:o}}function JV(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((e,n)=>{let r=e.logicalShape,i=t[n],a=i.shape;if(!Ia(r,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${a} must match`);if(e.isUniform&&i.isUniform)return;let o=e.texShape,s=i.isUniform?null:i.texData.texShape;if(!Ia(o,s))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${o} and ${s} must match`)})}function YV(e,t,n,r,i){t.program.enableShapeUniforms||(JV(t.inShapeInfos,n),JV([t.outShapeInfo],[r]));let a=r.texData.texture,o=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(a.texture,o[0],o[1]):e.setOutputMatrixTexture(a.texture,o[0],o[1]),e.setProgram(t.webGLProgram),e.bindVertexArray(t.webGLProgram.vao),P().getNumber(`WEBGL_VERSION`)===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN);for(let r=0;r<n.length;++r){let i=n[r],{uniform:a,offset:o,shape:s,texShape:c}=t.variablesLocations[r];if(s){let{uniformShape:n}=UV(t.program.packedInputs,i.shape,i.texData.texShape);switch(n.length){case 1:e.gl.uniform1iv(s,new Int32Array(n));break;case 2:e.gl.uniform2iv(s,new Int32Array(n));break;case 3:e.gl.uniform3iv(s,new Int32Array(n));break;case 4:e.gl.uniform4iv(s,new Int32Array(n));break;default:break}}if(c&&e.gl.uniform2i(c,i.texData.texShape[0],i.texData.texShape[1]),a!=null){if(i.isUniform){if(M(i.shape)<2)e.gl.uniform1f(a,i.uniformValues[0]);else{let t=i.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(a,t)}continue}i.texData.slice!=null&&o!=null&&e.gl.uniform1i(o,i.texData.slice.flatOffset),e.setInputMatrixTexture(i.texData.texture.texture,a,r)}}let s=t.outShapeLocation;if(s)switch(r.shape.length){case 1:e.gl.uniform1iv(s,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(s,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(s,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(s,new Int32Array(r.shape));break;default:break}if(t.outShapeStridesLocation){let n=N(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(n));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(n));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(n));break;default:break}}if(t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),t.program.customUniforms&&i)for(let n=0;n<t.program.customUniforms.length;++n){let r=t.program.customUniforms[n],a=t.customUniformLocations[n],o=i[n];if(r.type===`float`)e.gl.uniform1fv(a,o);else if(r.type===`vec2`)e.gl.uniform2fv(a,o);else if(r.type===`vec3`)e.gl.uniform3fv(a,o);else if(r.type===`vec4`)e.gl.uniform4fv(a,o);else if(r.type===`int`)e.gl.uniform1iv(a,o);else if(r.type===`ivec2`)e.gl.uniform2iv(a,o);else if(r.type===`ivec3`)e.gl.uniform3iv(a,o);else if(r.type===`ivec4`)e.gl.uniform4iv(a,o);else throw Error(`uniform type ${r.type} is not supported yet.`)}e.executeProgram()}function XV(e,t,n){let r=``;t.concat(n).forEach(t=>{let i=t.texData!=null&&t.texData.slice!=null&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){let a=t.texData.texShape,{useSqueezeShape:o,uniformShape:s,keptDims:c}=UV(e.packedInputs,t.shape,a),l=``,u=``,d=``;if(s.length===1&&e.packedInputs){let e=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];l=`${e[0]>1}_${e[1]>1}`}else if(s.length===2&&!e.packedInputs)u=`${s[0]>1}_${s[1]>1}`;else if(s.length>2&&!e.packedInputs){let e=N(s);d=`${e[0]===a[1]}_${e[e.length-1]===a[1]}`}let f=t.shape.length,p=s.length===2&&Ia(t.shape,a),m=M(t.shape)===1,h=Pm(t.shape,n.shape),g=!e.packedInputs&&f===n.shape.length&&Ia(a,n.texData.texShape),_=e.packedInputs||s.length>2?``:`${a[0]>1}_${a[1]>1}`;r+=`${f}_${g}_${o?c:``}_${s.length}_${m}_${h}_${p}_${l}_${u}_${d}_${_}_${i}`}else{let e=t.isUniform?`uniform`:t.texData.texShape;r+=`${t.shape}_${e}_${i}`}});let i=e.userCode,a=e.constructor.name;return a+=`_`+r+`_`+i+`${P().getNumber(`WEBGL_VERSION`)}`,a}function ZV(e){return P().getBool(`WEBGL_USE_SHAPES_UNIFORMS`)&&e<=4}var QV=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Uz.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=KB();this.outputShape=e,this.enableShapeUniforms=ZV(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?JB([`r`,`c`,`d`],e):qB([`r`,`c`,`d`],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}},$V=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Uz.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=KB();this.outputShape=e,this.enableShapeUniforms=ZV(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?JB([`r`,`c`,`d`],e):qB([`r`,`c`,`d`],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}},eH=class{constructor(e){this.variableNames=[`A`],this.outTexUsage=Wz.DOWNLOAD;let t=KB();this.outputShape=e,this.userCode=`
      ${$B}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}},tH=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Wz.DOWNLOAD;let t=KB();this.outputShape=e,this.userCode=`
      ${$B}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}},nH={R:0,G:1,B:2,A:3},rH=class{constructor(e,t=!1,n=`RGBA`){this.variableNames=[`A`],this.customUniforms=[{name:`texShape`,type:`ivec2`}];let r=KB();this.outputShape=e,this.enableShapeUniforms=ZV(this.outputShape.length);let i=`result`;t&&(i=`floor(result * 255. + 0.5)`);let a=``;for(let e=0;e<n.length;e++){let t=n[e];a+=`
          if(offset == ${e}) {
            result = values[${nH[t]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?QB():ZB(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${n.length});

        flatIndex = idiv(flatIndex, ${n.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${r.texture2D}(A, uv);
          ${a}
        }
        ${r.output} = vec4(${i}, 0., 0., 0.);
      }
    `}},iH=class{constructor(e,t=!1){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let n=KB();this.outputShape=e,this.enableShapeUniforms=ZV(this.outputShape.length);let r=``,i=`result`;t&&(i=`floor(result * 255. + 0.5)`);for(let t=0;t<=1;t++)for(let i=0;i<=1;i++){let a=t*2+i;r+=`
          localCoords = coords;
          if(localCoords[2] + ${i} < ${this.enableShapeUniforms?`outShape[2]`:`${e[2]}`}) {
          localCoords[2] += ${i};
          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?`outShape[1]`:`${e[1]}`}) {
            localCoords[1] += ${t};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${n.texture2D}(A, uv);

            if (offset == 0) {
              result[${a}] = values[0];
            } else if (offset == 1) {
              result[${a}] = values[1];
            } else if (offset == 2) {
              result[${a}] = values[2];
            } else {
              result[${a}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?QB():ZB(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${n.output} = ${i};
        }
    `}};function aH(e){let t=KB();return iB(e,`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function oH(e){return dB(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function sH(e){return fB(e,new Uint16Array([0,1,2,2,1,3]))}function cH(e,t,n,r,i,a){mB(t,n);let o=pB(e),s=e.TEXTURE_2D;return Z(e,()=>e.bindTexture(s,o)),Z(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),Z(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),Z(e,()=>e.texParameteri(s,e.TEXTURE_MIN_FILTER,e.NEAREST)),Z(e,()=>e.texParameteri(s,e.TEXTURE_MAG_FILTER,e.NEAREST)),P().getNumber(`WEBGL_VERSION`)===1?Z(e,()=>e.texImage2D(s,0,r,t,n,0,i,a,null)):Z(e,()=>e.texStorage2D(s,1,r,t,n)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:o,texShape:[n,t]}}function lH(e){return e.internalFormatFloat}function uH(e,t,n,r){let[i,a]=Kz(t,n);return cH(e,i,a,lH(r),r.textureFormatFloat,e.FLOAT)}function dH(e){return e.internalFormatHalfFloat}function fH(e,t,n,r){let[i,a]=Kz(t,n);return cH(e,i,a,dH(r),r.textureFormatFloat,r.textureTypeHalfFloat)}function pH(e){return e.downloadTextureFormat}function mH(e,t,n,r){let[i,a]=Kz(t,n);return cH(e,i,a,pH(r),e.RGBA,e.UNSIGNED_BYTE)}function hH(e){return e.internalFormatPackedFloat}function gH(e,t,n,r){let[i,a]=Yz(t,n);return cH(e,i,a,hH(r),e.RGBA,e.FLOAT)}function _H(e){return e.internalFormatPackedHalfFloat}function vH(e,t,n,r){let[i,a]=Yz(t,n);return cH(e,i,a,_H(r),e.RGBA,r.textureTypeHalfFloat)}function yH(e,t,n){return Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),gB(e,t,`clipSpacePos`,n,3,20,0)&&gB(e,t,`uv`,n,2,20,12)}function bH(e,t,n,r,i,a){Z(e,()=>e.bindTexture(e.TEXTURE_2D,t));let o,s,c;i instanceof Uint8Array?(o=new Uint8Array(n*r*4),s=e.UNSIGNED_BYTE,c=e.RGBA):(o=new Float32Array(n*r*4),s=e.FLOAT,c=a.internalFormatPackedFloat),o.set(i),P().getNumber(`WEBGL_VERSION`)===2?Z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,r,e.RGBA,s,o)):Z(e,()=>e.texImage2D(e.TEXTURE_2D,0,c,n,r,0,e.RGBA,s,o)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function xH(e,t,n){Z(e,()=>e.bindTexture(e.TEXTURE_2D,t)),n.data instanceof Uint8Array?P().getNumber(`WEBGL_VERSION`)===2?Z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,n.data)):Z(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data)):P().getNumber(`WEBGL_VERSION`)===2?Z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n)):Z(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function SH(e,t,n,r){let i=e.createBuffer();Z(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,i));let a=16*t*n;return Z(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)),Z(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0)),Z(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),i}function CH(e,t,n){let r=e,i=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,i),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),i}function wH(e,t,n,r){let[i,a]=Kz(t,n),o=new Uint8Array(qz(t*n,4));return Z(e,()=>e.readPixels(0,0,i,a,r.downloadTextureFormat,e.UNSIGNED_BYTE,o)),new Float32Array(o.buffer)}function TH(e,t,n,r,i,a,o,s){let c=e,l=new Float32Array(Xz(a,o));return c.bindBuffer(c.PIXEL_PACK_BUFFER,t),c.getBufferSubData(c.PIXEL_PACK_BUFFER,0,l),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),l}function EH(e,t,n){let r=new Float32Array(t*n*4);return Z(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,r)),r}var DH=class{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let t=P().getNumber(`WEBGL_VERSION`);if(e==null?this.gl=Bz(t):(this.gl=e,zz(t,e)),e=this.gl,P().getNumber(`WEBGL_VERSION`)===2){let t=e;this.createVertexArray=()=>Z(t,()=>t.createVertexArray()),this.bindVertexArray=e=>Z(t,()=>t.bindVertexArray(e)),this.deleteVertexArray=e=>Z(t,()=>t.deleteVertexArray(e)),this.getVertexArray=()=>Z(t,()=>t.getParameter(t.VERTEX_ARRAY_BINDING))}else if(e!=null){let t=e.getExtension(`OES_vertex_array_object`);if(t==null)throw Error(`All WebGL1 implementations are expected to offer OES_vertex_array_object.`);this.createVertexArray=()=>Z(e,()=>t.createVertexArrayOES()),this.bindVertexArray=n=>Z(e,()=>t.bindVertexArrayOES(n)),this.deleteVertexArray=n=>Z(e,()=>t.deleteVertexArrayOES(n)),this.getVertexArray=()=>Z(e,()=>e.getParameter(t.VERTEX_ARRAY_BINDING_OES))}let n=`WEBGL_color_buffer_float`,r=`EXT_color_buffer_half_float`;if(this.parallelCompilationExtension=this.gl.getExtension(`KHR_parallel_shader_compile`),P().getNumber(`WEBGL_VERSION`)===1){let e=`OES_texture_half_float`;if(this.textureFloatExtension=rB(this.gl,`OES_texture_float`),RB(this.gl,e))this.textureHalfFloatExtension=rB(this.gl,e);else if(P().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`);if(this.colorBufferFloatExtension=this.gl.getExtension(n),RB(this.gl,r))this.colorBufferHalfFloatExtension=rB(this.gl,r);else if(P().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`)}else if(n=`EXT_color_buffer_float`,RB(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else if(RB(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw Error(`GL context does not support color renderable floats`);this.vertexBuffer=oH(this.gl),this.indexBuffer=sH(this.gl),this.framebuffer=hB(this.gl),this.textureConfig=Zz(this.gl,this.textureHalfFloatExtension)}get debug(){return P().getBool(`DEBUG`)}dispose(){if(this.disposed)return;this.program!=null&&console.warn(`Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.`),this.outputTexture!=null&&console.warn(`Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.`);let e=this.gl;Z(e,()=>e.finish()),Z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),Z(e,()=>e.deleteFramebuffer(this.framebuffer)),Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),Z(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),Z(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),uH(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),fH(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),mH(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),xH(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,n,r){this.throwIfDisposed(),bH(this.gl,e,t,n,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),vH(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),gH(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(SB(this.gl,this.framebuffer),this.outputTexture=null),Z(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,()=>wH(this.gl,t,n,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,n,r,i,a){return TH(this.gl,e,t,n,r,i,a,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return CH(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);let r=SH(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if(P().getBool(`WEBGL_FENCE_API_ENABLED`)){let r=e,i=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{let e=r.clientWaitSync(i,0,0);return e===r.ALREADY_SIGNALED||e===r.CONDITION_SATISFIED},t=i}else P().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,P().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,()=>EH(this.gl,t,n))}createProgram(e){this.throwIfDisposed();let t=this.gl;this.vertexShader??=aH(t);let n=cB(t);Z(t,()=>t.attachShader(n,this.vertexShader)),Z(t,()=>t.attachShader(n,e)),lB(t,n);let r=Object.assign(n,{vao:this.createVertexArray()});return this.debug&&uB(t,r),r}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);let t=this.gl;Z(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),yH(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(Z(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&uB(this.gl,this.program),Z(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,n=!0){return this.throwIfDisposed(),n?vB(this.gl,e,t):yB(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),Z(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),bB(this.gl,e,t,n)}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();let[r,i]=Yz(t,n);this.setOutputMatrixTextureDriver(e,r,i)}setOutputMatrixWriteRegion(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,n,r){throw Error(`setOutputPackedMatrixWriteRegion not implemented.`)}debugValidate(){this.program!=null&&uB(this.gl,this.program),CB(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;if(this.debug){let e=this.getVertexArray();console.assert(e===this.program.vao,`VAO changed between setProgram and executeProgram!`),this.debugValidate()}Z(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),Z(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension??=rB(this.gl,P().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2?`EXT_disjoint_timer_query_webgl2`:`EXT_disjoint_timer_query`),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(P().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(P().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await Va(()=>this.disposed||this.isQueryAvailable(e,P().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))),this.getQueryTime(e,P().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))}getQueryTime(e,t){if(t===0)return null;if(t===2){let t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}else{let t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){let t=this.gl,n=this.getQueryTimerExtensionWebGL2(),r=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return this.disjoint??=this.gl.getParameter(n.GPU_DISJOINT_EXT),r&&!this.disjoint}else{let t=this.getQueryTimerExtensionWebGL1(),n=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint??=this.gl.getParameter(t.GPU_DISJOINT_EXT),n&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=OH(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let n;`setTimeoutCustom`in P().platform&&(n=P().platform.setTimeoutCustom.bind(P().platform)),Va(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,n)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),xB(this.gl,e,this.framebuffer),this.debug&&CB(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture==null?SB(this.gl,this.framebuffer):(xB(this.gl,this.outputTexture,this.framebuffer),this.debug&&CB(this.gl))}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();let r=this.gl;xB(r,e,this.framebuffer),this.debug&&CB(r),this.outputTexture=e,Z(r,()=>r.viewport(0,0,t,n)),Z(r,()=>r.scissor(0,0,t,n))}setOutputMatrixWriteRegionDriver(e,t,n,r){this.throwIfDisposed(),Z(this.gl,()=>this.gl.scissor(e,t,n,r))}throwIfDisposed(){if(this.disposed)throw Error(`Attempted to use disposed GPGPUContext.`)}throwIfNoProgram(){if(this.program==null)throw Error(`No GPU program is currently set.`)}};function OH(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var{addImpl:kH,bincountImpl:AH,bincountReduceImpl:jH,bitwiseAndImpl:MH,castImpl:NH,ceilImpl:PH,concatImpl:FH,equalImpl:IH,expImpl:LH,expm1Impl:RH,floorImpl:zH,gatherNdImpl:BH,gatherV2Impl:VH,greaterImpl:HH,greaterEqualImpl:UH,lessImpl:WH,lessEqualImpl:GH,linSpaceImpl:KH,logImpl:qH,maxImpl:JH,maximumImpl:YH,minimumImpl:XH,multiplyImpl:ZH,negImpl:QH,notEqualImpl:$H,prodImpl:eU,raggedGatherImpl:tU,raggedRangeImpl:nU,raggedTensorToTensorImpl:rU,rangeImpl:iU,rsqrtImpl:aU,scatterImpl:oU,sigmoidImpl:sU,simpleAbsImpl:cU,sliceImpl:lU,sparseFillEmptyRowsImpl:uU,sparseReshapeImpl:dU,sparseSegmentReductionImpl:fU,sqrtImpl:pU,staticRegexReplaceImpl:mU,stridedSliceImpl:hU,stringNGramsImpl:gU,stringSplitImpl:_U,stringToHashBucketFastImpl:vU,subImpl:yU,tileImpl:bU,topKImpl:xU,transposeImpl:SU,uniqueImpl:CU}=OP;function wU(e,t){return[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,t).map(t=>`${e}.${t}`)}function TU(e,t){return t===1?[e]:wU(e,t)}function EU(e,t){if(e===1)return`rc`;let n=``;for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=`,`);return n}var DU=class{constructor(e){if(this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=ZV(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let e=TU(`rc`,this.rank),t=HV(this.rank),n=this.getOutOfBoundsCondition(e),r=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${t} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let n=0;n<=1;n++)for(let r=0;r<=1;r++){let i=`${n===0?`r`:`rp1`}, ${r===0?`c`:`cp1`}`;for(let t=2;t<this.rank;t++)i=`${e[e.length-1-t]},`+i;t.push(i)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?`outShape`:this.outputShape[0]}`;let t=``;for(let n=this.rank-2;n<this.rank;n++)t+=`${e[n]} >= ${this.enableShapeUniforms?`outShape[${n}]`:this.outputShape[n]}`,n<this.rank-1&&(t+=`||`);return t}getSetup(e){if(this.rank===1)return``;let t=e.slice(-2),n=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${n};
      bool rEdge = rp1 >= ${r};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?`outShape`:this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}},OU=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec3`}],this.outputShape=e,this.enableShapeUniforms=ZV(this.outputShape.length);let n=``;for(let e=0;e<4;e++){let t=`thisRC = rc;`;e%2==1&&(t+=`thisRC.z += 1;`),e>1&&(t+=`thisRC.y += 1;`),n+=`
        ${t}
        ${e>0?`if(thisRC.y < rows && thisRC.z < cols){`:``}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${e>0?`}`:``}
      `}this.userCode=`
      ${kU(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?QB():ZB(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?`outShape[1]`:e[1]};
        int cols = ${this.enableShapeUniforms?`outShape[2]`:e[2]};

        ${n}

        setOutput(result);
      }
    `}};function kU(e,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?XB([`r`,`c`,`d`],`inputShape`):qB([`r`,`c`,`d`],e)}
      return ivec3(r, c, d);
    }
  `}var AU=class{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,n){let r=FU(t,n),i=IU(e,r,n);i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]);let a=MU(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=a,this.log();let e=this.freeTextures[i].pop();return this.usedTextures[i].push(e),e}let o;return r===Gz.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===Gz.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===Gz.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===Gz.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===Gz.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[i].push(o),this.numUsedTextures++,this._numBytesAllocated+=a,this.log(),o}releaseTexture(e,t,n,r){if(this.freeTextures==null)return;let i=FU(n,r),a=IU(t,i,r);a in this.freeTextures||(this.freeTextures[a]=[]);let o=MU(t,i,this.gpgpu.gl,this.gpgpu.textureConfig,r),s=P().getNumber(`WEBGL_DELETE_TEXTURE_THRESHOLD`);s!==-1&&this._numBytesAllocated>s?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=o):(this.freeTextures[a].push(e),this.numFreeTextures++,this._numBytesFree+=o),this.numUsedTextures--;let c=this.usedTextures[a],l=c&&c.indexOf(e);if(l==null||l<0)throw Error(`Cannot release a texture that was never provided by this texture manager`);c[l]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log(`Free/Used`,`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let e in this.freeTextures)this.freeTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function jU(e,t){let n=e;if(t===n.R32F)return 4;if(t===n.R16F)return 2;if(t===n.RGBA32F||t===e.RGBA)return 16;if(t===n.RGBA16F)return 8;if(t===n.RGBA8)return 4;throw Error(`Unknown internal format ${t}`)}function MU(e,t,n,r,i){let a=NU(t,r),o;if(i){let[t,n]=Yz(e[0],e[1]);o=t*n}else{let[t,n]=Kz(e[0],e[1]);o=t*n}let s=jU(n,a);return o*s}function NU(e,t){switch(e){case Gz.PACKED_2X2_FLOAT32:return hH(t);case Gz.PACKED_2X2_FLOAT16:return _H(t);case Gz.UNPACKED_FLOAT32:return lH(t);case Gz.UNPACKED_FLOAT16:return dH(t);case Gz.PACKED_4X1_UNSIGNED_BYTE:return pH(t);default:throw Error(`Unknown physical texture type ${e}`)}}function PU(e){return P().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?e?Gz.PACKED_2X2_FLOAT32:Gz.UNPACKED_FLOAT32:e?Gz.PACKED_2X2_FLOAT16:Gz.UNPACKED_FLOAT16}function FU(e,t){if(e===Wz.UPLOAD)return Gz.PACKED_2X2_FLOAT32;if(e===Wz.RENDER||e==null)return PU(t);if(e===Wz.DOWNLOAD||e===Wz.PIXELS)return Gz.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type ${e}`)}function IU(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}var LU=class{constructor(e,t){this.variableNames=[`A`],this.outputShape=e,this.enableShapeUniforms=ZV(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},RU=`if (isnan(x)) return x;`,zU=`return x;`,BU=`return abs(x);`,VU=`return (x >= 0.0) ? x : (exp(x) - 1.0);`,HU=RU+`
  return (x < 0.0) ? 0.0 : x;
`,UU=RU+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,WU=`return x;`,GU=`return 1.0 / (1.0 + exp(-1.0 * x));`,KU=`return x;`,qU=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,JU=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,YU=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,XU=`return 1.0 / (1.0 + exp(-1.0 * x));`,ZU=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=ZV(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}},QU=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=ZV(this.outputShape.length);let t=e.length,n=TU(`rc`,t),r=HV(t),i=EU(t,n),a=n.slice(-2),o=t<=1?`rc`:`vec2(${a.join(`,`)})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${i});

        setOutput(getChannel(packedInput, ${o}));
      }
    `}},$U=Gv,eW=1e-7,tW=1e-4,nW={};function rW(e){return e in nW||(nW[e]={}),nW[e]}var iW=P().getNumber(`CPU_HANDOFF_SIZE_THRESHOLD`),aW=600;function oW(){return P().global.screen==null?1024:P().global.screen.height*P().global.screen.width*window.devicePixelRatio*aW/1024/1024}var sW=class e extends Da{nextDataId(){return e.nextDataId++}constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!P().getBool(`HAS_WEBGL`))throw Error(`WebGL is not supported on this device`);let t;e==null?(t=new DH(Bz(P().getNumber(`WEBGL_VERSION`))),this.binaryCache=rW(P().getNumber(`WEBGL_VERSION`)),this.gpgpuCreatedLocally=!0):(t=e instanceof DH?e:new DH(Bz(P().getNumber(`WEBGL_VERSION`),e)),this.binaryCache={},this.gpgpuCreatedLocally=!1),this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new AU(this.gpgpu),this.numMBBeforeWarning=oW(),this.texData=new Ea(this,sd())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,n,r,i,a){let o=this.makeTensorInfo(t,n),s=this.texData.get(o.dataId);s.isPacked=!1,s.texture={texture:e,texShape:[r,i]},s.texShape=[r,i];let c=new rH(kB(t),!1,a),l=this.runWebGLProgram(c,[o],n,[[r,i]]);return l.shape=t,s.texture=null,this.disposeIntermediateTensorInfo(o),l.dataId}write(e,t,n){if((P().getBool(`WEBGL_CHECK_NUMERICAL_PROBLEMS`)||P().getBool(`DEBUG`))&&this.checkNumericalProblems(e),n===`complex64`&&e!=null)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);let r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:Wz.UPLOAD,refCount:1}),r}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){let t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){let t=this.texData.get(e);t.refCount--}}move(e,t,n,r,i){if(P().getBool(`DEBUG`)&&this.checkNumericalProblems(t),r===`complex64`)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);this.texData.set(e,{shape:n,dtype:r,values:t,usage:Wz.UPLOAD,refCount:i})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){let{values:t,dtype:n,complexTensorInfos:r,slice:i,shape:a,isPacked:o}=this.texData.get(e);if(i!=null){let t;t=o?new ZU(a,WU):new LU(a,WU);let r=this.runWebGLProgram(t,[{dataId:e,shape:a,dtype:n}],n),i=this.readSync(r.dataId);return this.disposeIntermediateTensorInfo(r),i}if(t!=null)return this.convertAndCacheOnCPU(e);if(n===`string`)return t;let s=this.activeTimers!=null,c;s&&(c=Zl());let l;return l=n===`complex64`?Dx(this.readSync(r.real.dataId),this.readSync(r.imag.dataId)):this.getValuesFromTexture(e),s&&(this.downloadWaitMs+=Zl()-c),this.convertAndCacheOnCPU(e,l)}async read(e){if(this.pendingRead.has(e)){let t=this.pendingRead.get(e);return new Promise(e=>t.push(e))}let{values:t,shape:n,slice:r,dtype:i,complexTensorInfos:a,isPacked:o}=this.texData.get(e);if(r!=null){let t;t=o?new ZU(n,WU):new LU(n,WU);let r=this.runWebGLProgram(t,[{dataId:e,shape:n,dtype:i}],i),a=this.read(r.dataId);return this.disposeIntermediateTensorInfo(r),a}if(t!=null)return this.convertAndCacheOnCPU(e);if(P().getBool(`DEBUG`)&&!P().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)&&P().getNumber(`WEBGL_VERSION`)===2)throw Error(`tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.`);let s=null,c;if(i!==`complex64`&&P().get(`WEBGL_BUFFER_SUPPORTED`)){c=this.decode(e);let t=this.texData.get(c.dataId);s=this.gpgpu.createBufferFromTexture(t.texture.texture,...Jz(n))}this.pendingRead.set(e,[]),i!==`complex64`&&await this.gpgpu.createAndWaitForFence();let l;if(i===`complex64`){let e=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),t=e[0],n=e[1];l=Dx(t,n)}else if(s==null)l=this.getValuesFromTexture(e);else{let e=M(n);l=this.gpgpu.downloadFloat32MatrixFromBuffer(s,e)}if(c!=null&&this.disposeIntermediateTensorInfo(c),s!=null){let e=this.gpgpu.gl;Z(e,()=>e.deleteBuffer(s))}let u=this.convertAndCacheOnCPU(e,l),d=this.pendingRead.get(e);return this.pendingRead.delete(e),d.forEach(e=>e(u)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&sd().removeDataId(e,this),this.pendingDeletes--),u}readToGPU(e,t={}){let{values:n,shape:r,slice:i,dtype:a,isPacked:o,texture:s}=this.texData.get(e);if(a===`complex64`)throw Error(`Does not support reading texture for complex64 dtype.`);if(i!=null){let n;n=o?new ZU(r,WU):new LU(r,WU);let i=this.runWebGLProgram(n,[{dataId:e,shape:r,dtype:a}],a),s=this.readToGPU(i,t);return this.disposeIntermediateTensorInfo(i),s}if(s==null)throw Error(n==null?`There is no data on GPU or CPU.`:`Data is not on GPU but on CPU.`);let c=this.decode(e,t.customTexShape),l=sd().makeTensorFromTensorInfo(c),u=this.texData.get(c.dataId);return Object.assign({tensorRef:l},u.texture)}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype===`string`)try{let n=t.map(e=>$l(e));return gf(e.shape,e.dtype,n)}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return gf(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){let n=e[t];if(!tB(n))throw P().getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)?Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${n} cannot be represented on this device.`)}}getValuesFromTexture(e){let{shape:t,dtype:n,isPacked:r}=this.texData.get(e),i=M(t);if(P().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)){let n=this.decode(e),r=this.texData.get(n.dataId),a=this.gpgpu.downloadMatrixFromPackedTexture(r.texture.texture,...Jz(t)).subarray(0,i);return this.disposeIntermediateTensorInfo(n),a}let a=P().getBool(`WEBGL_PACK`)&&r===!0,o=a?kB(t):t,s=a?new tH(o):new eH(o),c=this.runWebGLProgram(s,[{shape:o,dtype:n,dataId:e}],`float32`),l=this.texData.get(c.dataId),u=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(l.texture.texture,l.texShape[0],l.texShape[1]).subarray(0,i);return this.disposeIntermediateTensorInfo(c),u}timerAvailable(){return P().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0}time(e){let t=this.activeTimers,n=[],r=!1;this.programTimersStack==null?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e();let i=tu(this.activeTimers.map(e=>e.query)).filter(e=>e!=null),a=tu(this.activeTimers.map(e=>e.name)).filter(e=>e!=null);this.activeTimers=t,r&&(this.programTimersStack=null);let o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(P().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0){let e=await Promise.all(i);o.kernelMs=Na(e),o.getExtraProfileInfo=()=>e.map((e,t)=>({name:a[t],ms:e})).map(e=>`${e.name}: ${e.ms}`).join(`, `)}else o.kernelMs={error:`WebGL query timers are not supported in this environment.`};return this.uploadWaitMs=0,this.downloadWaitMs=0,o})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return P().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?this.gpgpu.beginQuery():{startMs:Zl(),endMs:null}}endTimer(e){return P().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?(this.gpgpu.endQuery(),e):(e.endMs=Zl(),e)}async getQueryTime(e){if(P().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0)return this.gpgpu.waitForQueryAndGetTime(e);let t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);let{complexTensorInfos:n}=this.texData.get(e);return n!=null&&(this.disposeData(n.real.dataId,t),this.disposeData(n.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){let{texture:t,dtype:n,texShape:r,usage:i,isPacked:a,slice:o}=this.texData.get(e),s=o&&o.origDataId||e,c=this.dataRefCount.get(s);c>1?this.dataRefCount.set(s,c-1):(this.dataRefCount.delete(s),t!=null&&(this.numBytesInGPU-=this.computeBytes(r,n),this.textureManager.releaseTexture(t,r,i,a)));let l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=iW){return P().getBool(`WEBGL_CPU_FORWARD`)&&e.every(e=>this.texData.get(e.dataId).texture==null&&M(e.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){yl(`tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead`);let t=e.dataSync();return $U(e.shape,t)}packedUnaryOp(e,t,n){let r=new ZU(e.shape,t),i=this.compileAndRun(r,[e],n);return sd().makeTensorFromTensorInfo(i)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!==`complex64`){let t=cU(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if(P().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,BU,e.dtype);let t=new LU(e.shape,BU),n=this.compileAndRun(t,[e]);return sd().makeTensorFromTensorInfo(n)}makeTensorInfo(e,t,n){let r;if(t===`string`&&n!=null&&n.length>0&&Qa(n[0])){let i=n.map(e=>Ql(e));r=this.write(i,e,t)}else r=this.write(n,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,n){return sd().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,n),this)}unpackTensor(e){let t=new QU(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){let t=new DU(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){let n=[DB(e.shape),...OB(e.shape)],r={dtype:e.dtype,shape:n,dataId:e.dataId},i=new OU([DB(t),...OB(t)],n),a=[n],o=this.runWebGLProgram(i,[r],e.dtype,a,!0);return{dataId:o.dataId,shape:t,dtype:o.dtype}}decode(e,t){let{isPacked:n,shape:r,dtype:i}=this.texData.get(e);t!=null&&j(M(r)<=t[0]*t[1]*4,()=>`customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.`);let a=kB(r),o;o=n?new $V(a):new QV(a);let s=[t??Jz(a)];return{dtype:i,shape:r,dataId:this.runWebGLProgram(o,[{shape:a,dtype:i,dataId:e}],i,s,!0,t).dataId}}runWebGLProgram(e,t,n,r,i=!1,a){let o=this.makeTensorInfo(e.outputShape,n),s=this.texData.get(o.dataId);if(e.packedOutput&&(s.isPacked=!0),e.outPackingScheme===Uz.DENSE&&(s.texShape=(a??Jz(e.outputShape)).map(e=>e*2)),e.outTexUsage!=null&&(s.usage=e.outTexUsage),M(o.shape)===0)return s.values=Ga(o.dtype,0),o;let c=[],l=t.map(t=>{if(t.dtype===`complex64`)throw Error(`GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.`);let n=this.texData.get(t.dataId);if(n.texture==null){if(!e.packedInputs&&M(t.shape)<=P().getNumber(`WEBGL_SIZE_UPLOAD_UNIFORM`))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!n.isPacked!=!!e.packedInputs)t=n.isPacked?this.unpackTensor(t):this.packTensor(t),c.push(t),n=this.texData.get(t.dataId);else if(n.isPacked&&!MB(n.shape,t.shape)){let e=t,r=t.shape;t.shape=n.shape,t=this.packedReshape(t,r),c.push(t),n=this.texData.get(t.dataId),e.shape=r}return{shape:t.shape,texData:n,isUniform:!1}});this.uploadToGPU(o.dataId);let u={shape:o.shape,texData:s,isUniform:!1},d=XV(e,l,u),f=this.getAndSaveBinary(d,()=>KV(this.gpgpu,e,l,u)),p=this.activeTimers!=null,m;p&&(m=this.startTimer()),P().get(`ENGINE_COMPILE_ONLY`)||YV(this.gpgpu,f,l,u,r),c.forEach(e=>this.disposeIntermediateTensorInfo(e)),p&&(m=this.endTimer(m),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(m)}));let h=P().getNumber(`WEBGL_FLUSH_THRESHOLD`);if(h>0){let e=Zl();e-this.lastGlFlushTime>h&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!P().getBool(`WEBGL_LAZILY_UNPACK`)&&s.isPacked&&i===!1){let e=this.unpackTensor(o);return this.disposeIntermediateTensorInfo(o),e}return o}compileAndRun(e,t,n,r,i=!1){return n||=t[0].dtype,this.runWebGLProgram(e,t,n,r,i)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||=(P().getBool(`IS_TEST`)||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<`u`&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),!0)}floatPrecision(){return this.floatPrecisionValue??=z(()=>{if(!P().get(`WEBGL_RENDER_FLOAT32_ENABLED`)){let e=P().getBool(`DEBUG`);P().set(`DEBUG`,!1);let t=this.abs(ph(1e-8)).dataSync()[0];if(P().set(`DEBUG`,e),t>0)return 32}return 16}),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?eW:tW}uploadToGPU(e){let t=this.texData.get(e),{shape:n,dtype:r,values:i,texture:a,usage:o,isPacked:s}=t;if(a!=null)return;let c=this.activeTimers!=null,l;c&&(l=Zl());let u=t.texShape;if(u??(u=AB(n,s),t.texShape=u),i!=null){let e=kB(n),a,o=u[1],d=u[0],f=i instanceof Uint8Array||i instanceof Uint8ClampedArray;(s||!f)&&([o,d]=Yz(u[0],u[1])),a=s?new iH(e,f):new rH(e,f);let p=f?[d,o]:u,m=this.makeTensorInfo(p,r),h=this.texData.get(m.dataId);f?h.usage=Wz.PIXELS:h.usage=Wz.UPLOAD,h.texShape=p,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(m.dataId),o,d,i);let g=[[d,o]],_=this.runWebGLProgram(a,[m],r,g,!0),v=this.texData.get(_.dataId);t.texShape=v.texShape,t.isPacked=v.isPacked,t.usage=v.usage,P().get(`ENGINE_COMPILE_ONLY`)?this.disposeData(_.dataId):(t.texture=v.texture,t.values=null,this.texData.delete(_.dataId)),this.disposeIntermediateTensorInfo(m),c&&(this.uploadWaitMs+=Zl()-l)}else t.texture=this.acquireTexture(u,o,r,s)}convertAndCacheOnCPU(e,t){let n=this.texData.get(e),{dtype:r}=n;return t!=null&&(n.values=cW(t,r)),n.values}acquireTexture(e,t,n,r){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)}computeBytes(e,t){return e[0]*e[1]*Xa(t)}checkCompileCompletion(){for(let[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){let e=[];if(this.gpgpu.parallelCompilationExtension){for(let[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}else{for(let[,t]of Object.entries(this.binaryCache)){let n=new Promise(e=>{try{this.checkCompletion_(t),e(!0)}catch(e){throw e}});e.push(n)}return Promise.all(e)}}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await ix(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(sB(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),Error(`Failed to compile fragment shader.`)):Error(`Failed to link vertex and fragment shaders.`);return!0}getUniformLocations(){for(let e of Object.values(this.binaryCache)){this.gpgpu.buildVao(e.webGLProgram);let{variablesLocations:t,customUniformLocations:n,infLoc:r,nanLoc:i,outShapeLocation:a,outShapeStridesLocation:o,outTexShapeLocation:s}=qV(this.gpgpu,e.program,e.webGLProgram);e.variablesLocations=t,e.customUniformLocations=n,e.infLoc=r,e.nanLoc=i,e.outShapeLocation=a,e.outShapeStridesLocation=o,e.outTexShapeLocation=s}}createTensorFromGPUData(e,t,n){e.channels=e.channels||`RGBA`;let{texture:r,height:i,width:a,channels:o}=e,s=sd().backend;if(!s.gpgpu.gl.isTexture(r))throw Error(`The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.`);let c=s.writeTexture(r,t,n,i,a,o);return sd().makeTensorFromDataId(c,t,n,s)}};sW.nextDataId=0;function cW(e,t){if(t===`float32`||t===`complex64`)return e;if(t===`int32`||t===`bool`){let n=t===`int32`?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<n.length;++t)n[t]=Math.round(e[t]);return n}else throw Error(`Unknown dtype ${t}`)}qu()&&dd(`webgl`,()=>new sW,2);var lW=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,uW=class{constructor(e,t,n){this.variableNames=[`A`,`B`],this.outputShape=Im(t,n),this.enableShapeUniforms=ZV(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}},dW=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`,fW=class{constructor(e,t,n,r=!1){this.variableNames=[`A`,`B`],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Im(t,n);let i=this.outputShape.length;this.enableShapeUniforms=ZV(i);let a=``;if(r)if(i===0||M(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          ${HV(i)} coords = getOutputCoords();
        `,i===1)this.enableShapeUniforms?a+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:a+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let e=TU(`coords`,i);this.enableShapeUniforms?a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= outShape[${i} - 2];
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= outShape[${i} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= ${this.outputShape[i-2]};
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= ${this.outputShape[i-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${a}

        setOutput(result);
      }
    `}};function pW(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var mW={kernelName:Ns,backendName:`webgl`,kernelFunc:pW};function hW(e){let{inputs:t,backend:n}=e,{real:r,imag:i}=t,a=n.makeTensorInfo(r.shape,`complex64`),o=n.texData.get(a.dataId);return o.complexTensorInfos={real:pW({inputs:{x:r},backend:n}),imag:pW({inputs:{x:i},backend:n})},a}var gW={kernelName:Yo,backendName:`webgl`,kernelFunc:hW},_W=`return (a < 0.) ? b * a : a;`,vW=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function yW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{alpha:a}=r,o=n.makeTensorInfo([],`float32`,Jl(a,`float32`)),s=P().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new fW(vW,i.shape,o.shape):new uW(_W,i.shape,o.shape),c=n.runWebGLProgram(s,[i,o],`float32`);return n.disposeIntermediateTensorInfo(o),c}var bW={kernelName:zs,backendName:`webgl`,kernelFunc:yW},xW=`return (a < 0.) ? b * a : a;`,SW=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function CW(e){let{inputs:t,backend:n}=e,{x:r,alpha:i}=t,a=P().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new fW(SW,r.shape,i.shape):new uW(xW,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],`float32`)}var wW={kernelName:mc,backendName:`webgl`,kernelFunc:CW},TW=`if (isnan(x)) return x;`;function EW({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:i,backend:a})=>{let{x:o}=i,s=a,c=r||o.dtype;if(s.shouldExecuteOnCPU([o])&&n!=null){let e=n(s.texData.get(o.dataId).values,c);return s.makeTensorInfo(o.shape,c,e)}let l=P().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)&&t!=null,u;return u=l?new ZU(o.shape,t):new LU(o.shape,e),s.runWebGLProgram(u,[o],c)}}function DW({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:i,dtype:a}){return({inputs:o,backend:s})=>{let{a:c,b:l}=o,u=s;if(r&&c.dtype===`complex64`){let t=u.texData.get(c.dataId),n=u.texData.get(l.dataId),[r,i]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map(t=>{let[n,r]=t,i={dataId:n.dataId,dtype:n.dtype,shape:c.shape},a={dataId:r.dataId,dtype:r.dtype,shape:l.shape},o=new uW(e,c.shape,l.shape);return u.runWebGLProgram(o,[i,a],ku(n.dtype,r.dtype))}),a=hW({inputs:{real:r,imag:i},backend:u});return u.disposeIntermediateTensorInfo(r),u.disposeIntermediateTensorInfo(i),a}let d=a||ku(c.dtype,l.dtype);if((c.dtype===`string`||l.dtype===`string`||u.shouldExecuteOnCPU([c,l]))&&i!=null){let e=u.texData.get(c.dataId).values,t=u.texData.get(l.dataId).values,n=c.dtype===`string`?lS(e):e,r=c.dtype===`string`?lS(t):t,[a,o]=i(c.shape,l.shape,n,r,d),s=u.makeTensorInfo(o,d),f=u.texData.get(s.dataId);return f.values=a,s}let f=P().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)&&t!=null,p;return p=f?new fW(t,c.shape,l.shape,n):new uW(e,c.shape,l.shape),u.runWebGLProgram(p,[c,l],d)}}function OW(e,t=!1){if(e===`linear`)return t?KU:zU;if(e===`relu`)return t?JU:HU;if(e===`elu`)return t?qU:VU;if(e===`relu6`)return t?YU:UU;if(e===`prelu`)return t?SW:xW;if(e===`leakyrelu`)return t?vW:_W;if(e===`sigmoid`)return t?XU:GU;throw Error(`Activation ${e} has not been implemented for the WebGL backend.`)}var kW=class{constructor(e,t,n,r=!1,i=!1,a=!1,o=null,s=!1,c=!1){this.variableNames=[`matrixA`,`matrixB`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.enableShapeUniforms=ZV(this.outputShape.length);let l=r?e[1]:e[2],u=Math.ceil(l/2),d=r?`i * 2, rc.y`:`rc.y, i * 2`,f=i?`rc.z, i * 2`:`i * 2, rc.z`,p=r?[`a.xxyy`,`a.zzww`]:[`a.xxzz`,`a.yyww`],m=i?[`b.xzxz`,`b.ywyw`]:[`b.xyxy`,`b.zwzw`],h=``,g=``;o&&(h=s?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:c?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:`vec4 activation(vec4 x) {
          ${o}
        }`,g=`result = activation(result);`);let _=a?`result += getBiasAtOutCoords();`:``;a&&this.variableNames.push(`bias`),s&&this.variableNames.push(`preluActivationWeights`),c&&this.variableNames.push(`leakyreluAlpha`);let v=`rc.x`,y=`rc.x`;e[0]<t[0]?v=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(y=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${h}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${u}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${v};
        int batchB = ${y};
        for (int i = 0; i < ${u}; i++) {
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${m[0]});
          result += (${p[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${_}

        ${g}

        setOutput(result);
      }
    `}},AW={REAL:`return areal * breal - aimag * bimag;`,IMAG:`return areal * bimag + aimag * breal;`},jW=class{constructor(e,t,n){this.variableNames=[`AReal`,`AImag`,`BReal`,`BImag`],this.outputShape=Im(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}},MW=`return a * b;`;function NW(e){let{inputs:t,backend:n}=e,{a:r,b:i}=t,a=ku(r.dtype,i.dtype);if(r.dtype===`complex64`){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),a=new jW(AW.REAL,r.shape,i.shape),o=new jW(AW.IMAG,r.shape,i.shape),s=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:r.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:i.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:i.shape}],c=n.runWebGLProgram(a,s,`float32`),l=n.runWebGLProgram(o,s,`float32`),u=hW({inputs:{real:c,imag:l},backend:n});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),u}if(n.shouldExecuteOnCPU([r,i])){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),[o,s]=ZH(r.shape,i.shape,e.values,t.values,a),c=n.makeTensorInfo(s,a),l=n.texData.get(c.dataId);return l.values=o,c}let o;return o=P().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new fW(MW,r.shape,i.shape):new uW(MW,r.shape,i.shape),n.runWebGLProgram(o,[r,i],a)}var PW={kernelName:ac,backendName:`webgl`,kernelFunc:NW};function FW(e,t,n){let r=[DB(e.shape),...OB(e.shape)],i={dtype:e.dtype,shape:r,dataId:e.dataId},a=new OU([DB(t),...OB(t)],r),o=[r],s=n.runWebGLProgram(a,[i],e.dtype,o,!0);return{dataId:s.dataId,shape:t,dtype:s.dtype}}function $(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{shape:a}=r,o=n,s=M(i.shape),c=Ha(a,s),l=M(c);j(s===l,()=>`The new shape (${c}) has ${l} elements and the old shape (${i.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`);let u=o.texData.get(i.dataId);return u.isPacked&&!MB(i.shape,c)&&!(u.texture!==null&&MB(u.shape,c))?FW(i,c,o):(o.incRef(i.dataId),{dataId:i.dataId,shape:c,dtype:i.dtype})}var IW={kernelName:Cc,backendName:`webgl`,kernelFunc:$},LW=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=Math.floor(n/4)*4,s=n%4,c=`sumValue += dot(values, ones);`;if(t!=null){let e=1/t;c=`sumValue += dot(values * ${La(e)?e.toPrecision(2):e}, ones);`}let l=``;i%n>0&&(l=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${l}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        float sumValue = 0.0;

        for (int i = 0; i < ${o}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${o};
        if (${s===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${s===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${s===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}},RW=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=`0.0`,s=``;t===`prod`?o=`1.0`:t===`min`?(o=`1.0 / 1e-20`,s=`min`):t===`max`&&(o=`-1.0 / 1e-20`,s=`max`);let c=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`sum`?c=`sumValue`:t===`prod`?c=`prodValue`:t===`all`?c=`allValue`:t===`any`&&(c=`anyValue`);let l=Math.floor(n/4)*4,u=n%4,d=`
      if (${t===`sum`}) {
        sumValue += dot(values, ones);
      } else if (${t===`prod`}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${s}(values, minMaxValue);
        if (${t===`min`} || ${t===`max`}) {
          minMaxValue = ${s}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f=`vec4`;t===`all`?(o=`1.0`,d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f=`bvec4`):t===`any`&&(o=`0.0`,d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f=`bvec4`);let p=``;i%n>0&&(p=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${o};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        vec4 minMaxValue = vec4(${o});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${l}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${l};
        if (${u===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}};function zW(e){let t=[];for(;t.length===0||t[t.length-1].outSize!==1;){let n=t.length?t[t.length-1].outSize:e[1],r=fx(n);t.push({inSize:n,windowSize:r,outSize:Math.ceil(n/r)})}return t}function BW(e,t,n,r){let i=zW(e.shape),a=e;for(let o=0;o<i.length;o++){let{inSize:s,windowSize:c,outSize:l}=i[o],u,d;u=n===`mean`?o===0?new LW({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},s):new LW({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l}):new RW({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},n),d=a,a=r.runWebGLProgram(u,[a],t),d.dataId!==e.dataId&&r.disposeIntermediateTensorInfo(d)}return a}var VW=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;let r=HV(this.rank),i=HW(t);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${i}));
    }
    `}};function HW(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`,`resRC.v`],r=Array(t);for(let t=0;t<e.length;t++)r[e[t]]=n[t];return r.join()}var UW=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0;let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let r=HV(this.rank),i=wU(`rc`,this.rank),a=Array(this.rank);for(let e=0;e<t.length;e++)a[t[e]]=i[e];let o=`vec2(${a.slice(-2).join()})`,s=`++${i[this.rank-1]} < ${n[this.rank-1]}`,c=`getChannel(getA(${a.join()}), ${o})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${s}) {
        result[1] = ${c};
      }
      --${i[this.rank-1]};
      if(++${i[this.rank-2]} < ${n[this.rank-2]}) {
        result[2] = ${c};
        if(${s}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}};function WW(e,t,n){let r=P().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new UW(e.shape,t):new VW(e.shape,t);return n.runWebGLProgram(r,[e],e.dtype)}function GW(e,t,n,r){let i=t,a=e.shape.length,o=Ua(i,e.shape),s=o,c=ih(s,a),l=c!=null,u=e;l&&(u=WW(e,c,r),s=oh(s.length,a)),rh(`sum`,s,a);let[d,f]=th(u.shape,s),p=d;n&&(p=nh(d,o));let m=M(f),h=M(e.shape)/m,g=$({inputs:{x:u},attrs:{shape:[h,m]},backend:r}),_=BW(g,Au(e.dtype),`sum`,r),v=$({inputs:{x:_},attrs:{shape:p},backend:r});return r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(_),l&&r.disposeIntermediateTensorInfo(u),v}function KW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;return GW(i,a,o,n)}var qW={kernelName:`Sum`,backendName:`webgl`,kernelFunc:KW};function JW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{perm:a}=r,o=n,s=i.shape.length,c=Array(s);for(let e=0;e<c.length;e++)c[e]=i.shape[a[e]];let l;if(o.shouldExecuteOnCPU([i])){let e=o.texData.get(i.dataId).values,t=SU(e,i.shape,i.dtype,a,c);l=o.makeTensorInfo(c,i.dtype);let n=o.texData.get(l.dataId);n.values=t}else l=WW(i,a,o);return l}var YW={kernelName:cl,backendName:`webgl`,kernelFunc:JW};function XW({a:e,b:t,transposeA:n,transposeB:r,backend:i,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:s=0,activation:c=null}){let l=e.shape.length,u=t.shape.length,d=n?e.shape[l-2]:e.shape[l-1],f=r?t.shape[u-1]:t.shape[u-2],p=n?e.shape[l-1]:e.shape[l-2],m=r?t.shape[u-2]:t.shape[u-1],h=e.shape.slice(0,-2),g=t.shape.slice(0,-2),_=M(h),v=M(g),y=Im(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,m]);j(d===f,()=>`Error in matMul: inner shapes (${d}) and (${f}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`);let b=n?[_,d,p]:[_,p,d],x=r?[v,m,f]:[v,f,m],S=$({inputs:{x:e},backend:i,attrs:{shape:b}}),C=$({inputs:{x:t},backend:i,attrs:{shape:x}}),w=[S,C],T=Math.max(_,v),E=n?S.shape[1]:S.shape[2],D=a!=null,O=o!=null,k=c===`leakyrelu`,ee=c==null?null:OW(c,!0),A=D||O||k||ee!=null,te;if((p===1||m===1)&&E>1e3&&A===!1){let e=S,t=C;n&&(e=JW({inputs:{x:S},backend:i,attrs:{perm:[0,2,1]}}),w.push(e)),r&&(t=JW({inputs:{x:C},backend:i,attrs:{perm:[0,2,1]}}),w.push(t));let a=m!==1,o=m===1,s=e;a&&(s=$({inputs:{x:e},backend:i,attrs:{shape:[T,E,1]}}),w.push(s));let c=m===1?2:1,l=t;o&&(l=$({inputs:{x:t},backend:i,attrs:{shape:[T,1,E]}}),w.push(l));let u=NW({inputs:{a:s,b:l},backend:i});te=KW({inputs:{x:u},backend:i,attrs:{axis:c,keepDims:!0}}),w.push(u)}else{let c=ku(e.dtype,t.dtype),l=new kW(b,x,[T,p,m],n,r,D,ee,O,k),u=[S,C];if(a!=null&&u.push(a),O&&u.push(o),k){let e=i.makeTensorInfo([],`float32`,Jl(s,`float32`));u.push(e),w.push(e)}te=i.runWebGLProgram(l,u,c)}let ne=$({inputs:{x:te},backend:i,attrs:{shape:y}});w.push(te);for(let e of w)i.disposeIntermediateTensorInfo(e);return ne}function ZW(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a,bias:o,preluActivationWeights:s}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=r;return XW({a:i,b:a,transposeA:c,transposeB:l,backend:n,bias:o,preluActivationWeights:s,leakyreluAlpha:d,activation:u})}var QW={kernelName:gl,backendName:`webgl`,kernelFunc:ZW},$W=`return abs(x);`;function eG(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])&&r.dtype!==`complex64`){let e=cU(n.texData.get(r.dataId).values);return n.makeTensorInfo(r.shape,r.dtype,e)}let i;return i=P().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new ZU(r.shape,$W):new LU(r.shape,$W),n.runWebGLProgram(i,[r],r.dtype)}var tG={kernelName:`Abs`,backendName:`webgl`,kernelFunc:eG},nG={kernelName:Eo,backendName:`webgl`,kernelFunc:EW({opSnippet:RU+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`})},rG={kernelName:Do,backendName:`webgl`,kernelFunc:EW({opSnippet:RU+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`})},iG=`return a + b;`,aG={kernelName:`Add`,backendName:`webgl`,kernelFunc:DW({opSnippet:iG,packedOpSnippet:iG,supportsComplex:!0,cpuKernelImpl:kH})},oG=class{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`float v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}},sG=class{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`vec4 v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}};function cG(e){let{inputs:t,backend:n}=e,r=t;if(r.length===1)return pW({inputs:{x:r[0]},backend:n});if(r.length>P().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`)){let e=Math.floor(r.length/2);return cG({inputs:[cG({inputs:r.slice(0,e),backend:n}),cG({inputs:r.slice(e),backend:n})],backend:n})}let i=r.map(e=>e.dtype).reduce((e,t)=>ku(e,t)),a=r.map(e=>e.shape),o=P().getBool(`WEBGL_PACK`)?new sG(r[0].shape,a):new oG(r[0].shape,a);return n.runWebGLProgram(o,r,i)}var lG={kernelName:Oo,backendName:`webgl`,kernelFunc:cG};function uG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=Ua(a,i.shape),l=c,u=ih(l,s),d=i;u!=null&&(d=JW({inputs:{x:i},backend:n,attrs:{perm:u}}),l=oh(l.length,s)),rh(`all`,l,s);let[f,p]=th(d.shape,l),m=M(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=BW(h,h.dtype,`all`,n),_;if(o){let e=nh(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var dG={kernelName:`All`,backendName:`webgl`,kernelFunc:uG};function fG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=Ua(a,i.shape),l=c,u=ih(l,s),d=i;u!=null&&(d=JW({inputs:{x:i},backend:n,attrs:{perm:u}}),l=oh(l.length,s)),rh(`any`,l,s);let[f,p]=th(d.shape,l),m=M(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=BW(h,h.dtype,`any`,n),_;if(o){let e=nh(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var pG={kernelName:`Any`,backendName:`webgl`,kernelFunc:fG},mG=class{constructor(e,t,n){this.variableNames=[`A`];let{windowSize:r,batchSize:i,outSize:a}=e;n||this.variableNames.push(`bestIndicesA`),this.outputShape=[i,a];let o=t===`max`?`>`:`<`,s=n?`inOffset + i;`:`round(getBestIndicesA(batch, inOffset + i));`;this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${s};
          float candidate = getA(batch, inIdx);
          if (candidate ${o} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}},hG=class{constructor(e,t,n,r){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,j(e.length>2,()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`);let i=e[e.length-1],a=Math.ceil(i/t);this.outputShape=e.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push(`bestIndicesA`);let o=this.outputShape,s=o.length,c=HV(s),l=TU(`coords`,s),u,d;if(a===1){d=s+1;let e=HV(d);u=`
        ${e} sourceLocR = ${e}(${l.join()}, 0);
        ++${l[s-1]};
        ${e} sourceLocG = ${e}(${l.join()}, 0);
        ++${l[s-2]};
        ${e} sourceLocA = ${e}(${l.join()}, 0);
        --${l[s-1]};
        ${e} sourceLocB = ${e}(${l.join()}, 0);
        --${l[s-2]};`}else d=s,u=`
        ${c} sourceLocR = coords;
        ++${l[s-1]};
        ${c} sourceLocG = coords;
        ++${l[s-2]};
        ${c} sourceLocA = coords;
        --${l[s-1]};
        ${c} sourceLocB = coords;
        --${l[s-2]};`;let f=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,d),p=`.`+f[d-1],m=f.map(e=>`int `+e),h=TU(`sourceLocR`,d-1).concat(`inIdx.r`),g=TU(`sourceLocG`,d-1).concat(`inIdx.g`),_=TU(`sourceLocB`,d-1).concat(`inIdx.b`),v=TU(`sourceLocA`,d-1).concat(`inIdx.a`),y=n===`max`?`greaterThan`:`lessThan`,b=r?``:`
          inIdx = round(vec4(getBestIndicesAChannel(${h.join()}),
                             getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${_.join()}),
                             getBestIndicesAChannel(${v.join()})));`,x=`vec4(
            getAChannel(${h.join()}),
            hasNextCol ? getAChannel(${g.join()}) : 0.,
            hasNextRow ? getAChannel(${_.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,S=r?``:`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${S}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${l[s-1]} < ${o[s-1]-1};
        bool hasNextRow = ${l[s-2]} < ${o[s-2]-1};
        ${u}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${x};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${b}
          vec4 candidate = ${x};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function gG(e,t,n,r=null){let i=t.shape[0],a=t.shape[1];r!=null&&(i=r.shape[0],a=r.shape[1]);let o=fx(a),s=new mG({windowSize:o,inSize:a,batchSize:i,outSize:Math.ceil(a/o)},n,r==null),c=[t];r!=null&&c.push(r);let l=e.runWebGLProgram(s,c,`int32`);if(l.shape[1]===1)return l;let u=gG(e,t,n,l);return e.disposeIntermediateTensorInfo(l),u}function _G(e,t,n,r=null){let i=r==null?t.shape:r.shape,a=i[i.length-1],o=new hG(i,fx(a),n,r==null),s=r==null?[t]:[t,r],c=e.runWebGLProgram(o,s,`int32`);if(c.shape.length===t.shape.length){let r=_G(e,t,n,c);return e.disposeIntermediateTensorInfo(c),r}return c}function vG(e,t,n,r){let i=[n];if(rh(`arg`+r.charAt(0).toUpperCase()+r.slice(1),i,t.shape.length),!P().getBool(`WEBGL_PACK_REDUCE`)||t.shape.length<=2){let n=[],a=e.texData.get(t.dataId),o=a!==null&&a.isPacked,s=t;o&&(s=e.unpackTensor(t),n.push(s));let[c,l]=th(s.shape,i),u=M(l),d=$({inputs:{x:s},backend:e,attrs:{shape:[-1,u]}});n.push(d);let f=gG(e,d,r);n.push(f);let p=$({inputs:{x:f},backend:e,attrs:{shape:c}});return n.forEach(t=>e.disposeIntermediateTensorInfo(t)),p}return _G(e,t,r)}function yG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=Ua(a,i.shape),s=ih(o,i.shape.length),c=i,l=[];s!=null&&(c=JW({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=oh(o.length,c.shape.length)),rh(`argMax`,[o[0]],c.shape.length);let u=vG(n,c,o[0],`max`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var bG={kernelName:ko,backendName:`webgl`,kernelFunc:yG};function xG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=Ua(a,i.shape),s=ih(o,i.shape.length),c=i,l=[];s!=null&&(c=JW({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=oh(o.length,c.shape.length)),rh(`argMin`,[o[0]],c.shape.length);let u=vG(n,c,o[0],`min`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var SG={kernelName:Ao,backendName:`webgl`,kernelFunc:xG},CG={kernelName:jo,backendName:`webgl`,kernelFunc:EW({opSnippet:RU+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`})},wG={kernelName:Mo,backendName:`webgl`,kernelFunc:EW({opSnippet:RU+`return log(x + sqrt(x * x + 1.0));`})},TG={kernelName:No,backendName:`webgl`,kernelFunc:EW({opSnippet:RU+`
  return atan(x);
`})},EG={kernelName:Fo,backendName:`webgl`,kernelFunc:DW({opSnippet:lW+`
  return atan(a, b);
`,packedOpSnippet:`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+dW+`
  return result;
`})},DG={kernelName:Po,backendName:`webgl`,kernelFunc:EW({opSnippet:RU+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`})},OG=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideHeight,s=e.strideWidth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterHeight,d=e.effectiveFilterWidth,f=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;let m=t===`avg`,h=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,g=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,_=`0.0`;if(m||(_=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec2 strides = ivec2(${o}, ${s});
        const ivec2 pads = ivec2(${f}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${u};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${l}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?i?h:g:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(v=`avgValue / max(count, 1.0)`);let y=Math.floor(a/4)*4,b=a%4,x=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${s});
      const ivec2 pads = ivec2(${f}, ${p});
      const float initializationValue = ${_};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${_});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${u};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${y}; wC += 4) {
            int xC = xCCorner + wC * ${l};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              getValue(batch, xR, xC + 3 * ${l}, d)
            );

            ${x}
          }

          int xC = xCCorner + ${y};
          if (${b===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              initializationValue
            );

            ${x}
          }
        }
        setOutput(${v});
      }
    `}},kG=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideDepth,s=e.strideHeight,c=e.strideWidth,l=e.dilationDepth,u=e.dilationHeight,d=e.dilationWidth,f=e.effectiveFilterDepth,p=e.effectiveFilterHeight,m=e.effectiveFilterWidth,h=e.padInfo.front,g=e.padInfo.top,_=e.padInfo.left;this.outputShape=e.outShape;let v=t===`avg`,y=`0.0`;if(v||(y=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec3 strides =
            ivec3(${o}, ${s}, ${c});
        const ivec3 pads = ivec3(${h}, ${g}, ${_});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${l}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${u}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${r?i?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(b=`avgValue / max(count, 1.0)`);let x=Math.floor(a/4)*4,S=a%4,C=`
      if (${v}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${o}, ${s}, ${c});
      const ivec3 pads = ivec3(${h}, ${g}, ${_});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${l}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${x}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${C}
            }

            int xC = xCCorner + ${x};
            if (${S===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${C}
            }
          }
        }
        setOutput(${b});
      }
    `}};function AG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;GB(i,`avgPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;j(dp(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Zf(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&Ia(l.inShape,l.outShape))return pW({inputs:{x:i},backend:n});let u=new OG(l,`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var jG={kernelName:Io,backendName:`webgl`,kernelFunc:AG};function MG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r,u=new kG(Qf(i.shape,a,o,[1,1,1],s,c,l),`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var NG={kernelName:Ro,backendName:`webgl`,kernelFunc:MG},PG=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterHeight,c=e.effectiveFilterWidth,l=s-1-e.padInfo.top,u=c-1-e.padInfo.left,d=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(${l}, ${u});
      const float avgMultiplier = float(${d});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
            wR += ${a}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${o}) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}},FG=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterDepth,d=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=u-1-e.padInfo.front,m=d-1-e.padInfo.top,h=f-1-e.padInfo.left,g=1/(t*n*r);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${h});
      const float avgMultiplier = float(${g});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${u};
            wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${i}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${l}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function IG(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=new FG(Qf(o.shape,s,c,[1,1,1],l,u));return n.runWebGLProgram(d,[i],o.dtype)}var LG={kernelName:zo,backendName:`webgl`,kernelFunc:IG};function RG(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a;GB([i,a],`avgPoolGrad`);let{filterSize:s,strides:c,pad:l}=r,u=new PG(Zf(o.shape,s,c,1,l));return n.runWebGLProgram(u,[i],o.dtype)}var zG={kernelName:Lo,backendName:`webgl`,kernelFunc:RG};function BG(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a}=t,{transposeA:o,transposeB:s}=r;return XW({a:i,b:a,transposeA:o,transposeB:s,backend:n})}var VG={kernelName:Bo,backendName:`webgl`,kernelFunc:BG},HG=class{constructor(e,t,n,r,i,a){this.outputShape=[],this.variableNames=[`x`,`mean`,`variance`],Im(e,t),Im(e,n);let o=`0.0`;r!=null&&(Im(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`1.0`;i!=null&&(Im(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${o};
        float scale = ${s};
        float inv = scale * inversesqrt(variance + float(${a}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}},UG=class{constructor(e,t,n,r,i,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=[`x`,`mean`,`variance`],Im(e,t),Im(e,n);let o=`vec4(0.0)`;r!=null&&(Im(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`vec4(1.0)`;i!=null&&(Im(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${o};
        vec4 scale = ${s};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${a}));

        setOutput((x - mean) * inv + offset);
      }
    `}},WG={kernelName:Os,backendName:`webgl`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,mean:i,variance:a,offset:o,scale:s}=e;j(i.shape.length===a.shape.length,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),j(o==null||i.shape.length===o.shape.length,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),j(s==null||i.shape.length===s.shape.length,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let{varianceEpsilon:c}=n;c??=.001;let l=[r,i,a],u=null;o!=null&&(u=o.shape,l.push(o));let d=null;s!=null&&(d=s.shape,l.push(s));let f=P().getBool(`WEBGL_PACK_NORMALIZATION`)?new UG(r.shape,i.shape,a.shape,u,d,c):new HG(r.shape,i.shape,a.shape,u,d,c);return t.runWebGLProgram(f,l,l[0].dtype)}},GG=class{constructor(e){this.variableNames=[`source`],this.outputShape=e,this.rank=e.length;let t=HV(this.rank);this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let n=qG(this.rank),r;r=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${e.map((e,t)=>`sourceLoc.${KG[t]} = start[${t}] + coords.${KG[t]};`).join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${n}));
      }
    `}},KG=[`x`,`y`,`z`,`w`,`u`,`v`];function qG(e){if(e===1)return`sourceLoc`;if(e<=6)return KG.slice(0,e).map(e=>`sourceLoc.`+e).join(`,`);throw Error(`Slicing for rank ${e} is not yet supported`)}var JG=class{constructor(e){this.variableNames=[`source`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let t=HV(this.rank),n=TU(`coords`,this.rank),r=TU(`sourceLoc`,this.rank),i=this.rank===1?`sourceLoc`:`vec2(${r.slice(-2).join()})`,a=`getChannel(getSource(${r.join()}), ${i})`,o=`
      result.x = ${a};
      if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${a};
        --${r[this.rank-1]};
      }
    `,s=this.rank===1?``:`
      --${n[this.rank-1]};
      if (++${n[this.rank-2]} < ${e[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${a};
        if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${a};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((e,t)=>`start[${t}]`).join()});`:e.map((e,t)=>`${r[t]} = ${n[t]} + start[${t}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${o}
        ${s}
        setOutput(result);
      }
    `}};function YG(e,t,n,r){let i=r.texData.get(e.dataId),a=r.makeTensorInfo(n,e.dtype),o=r.texData.get(a.dataId);Object.assign(o,i),o.refCount=1,o.shape=n,o.dtype=e.dtype;let s=Zb(t,N(e.shape));i.slice&&(s+=i.slice.flatOffset),o.slice={flatOffset:s,origDataId:i.slice&&i.slice.origDataId||e.dataId};let c=r.dataRefCount.get(o.slice.origDataId)||1;return r.dataRefCount.set(o.slice.origDataId,c+1),a}function XG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,size:o}=r,[s,c]=Qb(i,a,o);if(Rb(i,s,c),M(c)===0)return n.makeTensorInfo(c,i.dtype,[]);if(n.shouldExecuteOnCPU([i])||i.dtype===`string`){let e=lU(n.texData.get(i.dataId).values,s,c,i.shape,i.dtype);return n.makeTensorInfo(c,i.dtype,e)}let{isPacked:l}=n.texData.get(i.dataId),u=Xb(i.shape,s,c);if(l||!u){let e=P().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new JG(c):new GG(c),t=[s];return n.runWebGLProgram(e,[i],i.dtype,t)}return n.uploadToGPU(i.dataId),YG(i,s,c,n)}var ZG={kernelName:Lc,backendName:`webgl`,kernelFunc:XG},QG={kernelName:Vo,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,crops:o}=r;j(i.shape.length<=4,()=>`batchToSpaceND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=mx(i.shape,a,s),l=hx(c.length,a.length),u=gx(i.shape,a,s),d=_x(o,a.length),f=vx(u,o,a.length),p=[],m=$({inputs:{x:i},backend:n,attrs:{shape:c}}),h=JW({inputs:{x:m},backend:n,attrs:{perm:l}}),g=$({inputs:{x:h},backend:n,attrs:{shape:u}}),_=XG({inputs:{x:g},backend:n,attrs:{begin:d,size:f}});return p.push(m),p.push(h),p.push(g),p.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}};function $G(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o}=r,s=AH(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,s)}var eK={kernelName:Ho,backendName:`webgl`,kernelFunc:$G},tK=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,nK=`
  return float(int(a.r) & int(b.r));
`;function rK(e){let{inputs:t,backend:n}=e,{a:r,b:i}=t,a=P().getBool(`WEBGL_PACK_BINARY_OPERATIONS`),o=P().getNumber(`WEBGL_VERSION`);if(n.shouldExecuteOnCPU([r,i])||o===1){let e=n.texData.get(r.dataId).values,t=n.texData.get(i.dataId).values,[a,o]=MH(r.shape,i.shape,e,t,r.dtype),s=n.makeTensorInfo(o,r.dtype),c=n.texData.get(s.dataId);return c.values=a,s}let s;return s=a?new fW(tK,r.shape,i.shape,!1):new uW(nK,r.shape,i.shape),n.runWebGLProgram(s,[r,i],r.dtype)}var iK={kernelName:Uo,backendName:`webgl`,kernelFunc:rK};function aK(e){let{inputs:t,backend:n}=e,{s0:r,s1:i}=t,a=n.readSync(r.dataId),o=n.readSync(i.dataId),s=Im(Array.from(a),Array.from(o));return n.makeTensorInfo([s.length],`int32`,Int32Array.from(s))}var oK={kernelName:Go,backendName:`webgl`,kernelFunc:aK},sK=DW({opSnippet:`return float(a != b);`,cpuKernelImpl:$H,dtype:`bool`}),cK={kernelName:oc,backendName:`webgl`,kernelFunc:sK};function lK(e){let{inputs:t,backend:n}=e,{input:r}=t;return pW({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.real},backend:n})}var uK={kernelName:bc,backendName:`webgl`,kernelFunc:lK},dK=`return float(int(x));`;function fK(e,t){let n=new LU(e.shape,dK),r=t.runWebGLProgram(n,[e],`int32`);return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}function pK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dtype:a}=r;if(a===`complex64`){if(i.dtype===`complex64`)return pW({inputs:{x:i},backend:n});let e=Lg(i.shape),t=pK({inputs:{x:i},backend:n,attrs:{dtype:`float32`}}),r=hW({inputs:{real:t,imag:e},backend:n});return e.dispose(),n.disposeIntermediateTensorInfo(t),r}if(i.dtype===`complex64`){let e=lK({inputs:{input:i},backend:n}),t=pK({inputs:{x:e},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(e),t}if(!Ya(i.dtype,a)){let e=pW({inputs:{x:i},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:a}}if(n.shouldExecuteOnCPU([i])){let e=n.texData.get(i.dataId).values,[t,r,o]=NH(e,i.shape,i.dtype,a);return n.makeTensorInfo(t,r,o)}if(a===`int32`)return fK(i,n);if(a===`bool`){let e=n.makeTensorInfo([],`bool`,Ga(`bool`,1)),t=sK({inputs:{a:i,b:e},backend:n});return n.disposeIntermediateTensorInfo(e),t}throw Error(`Error in Cast: failed to cast ${i.dtype} to ${a}`)}var mK={kernelName:Ko,backendName:`webgl`,kernelFunc:pK},hK=`return ceil(x);`,gK={kernelName:qo,backendName:`webgl`,kernelFunc:EW({opSnippet:hK,packedOpSnippet:hK,cpuKernelImpl:PH})},_K=class{constructor(e){this.variableNames=[`A`],this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}},vK=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function yK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{clipValueMin:a,clipValueMax:o}=r,s;s=P().getBool(`WEBGL_PACK_CLIP`)?new vK(i.shape):new _K(i.shape);let c=[[a],[o]];return n.runWebGLProgram(s,[i],i.dtype,c)}var bK={kernelName:Jo,backendName:`webgl`,kernelFunc:yK},xK=class{constructor(e){this.variableNames=[`real`,`imag`],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}};function SK(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function CK(e){let{inputs:t,backend:n}=e,{x:r}=t,i=n.texData.get(r.dataId),a=new xK(r.shape),o=[SK(r,i.complexTensorInfos.real),SK(r,i.complexTensorInfos.imag)];return n.runWebGLProgram(a,o,o[0].dtype)}var wK={kernelName:Xo,backendName:`webgl`,kernelFunc:CK},TK=class{constructor(e){this.outputShape=[],this.outputShape=ox(e,1),this.variableNames=e.map((e,t)=>`T${t}`);let t=Array(e.length-1);t[0]=e[0][1];for(let n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];let n=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){let r=t[e-1];n.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${r}));`)}let r=t.length,i=t[t.length-1];n.push(`else setOutput(getT${r}(yR, yC-${i}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${n.join(`
        `)}
      }
    `}},EK=class{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=ox(e,t);let n=this.outputShape,r=n.length,i=HV(r),a=TU(`coords`,r),o=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,r);this.variableNames=e.map((e,t)=>`T${t}`);let s=Array(e.length-1);s[0]=e[0][t];for(let n=1;n<s.length;n++)s[n]=s[n-1]+e[n][t];let c=o[t],l=o.slice(-2),u=o.join(),d=`if (${c} < ${s[0]}) {
        return getChannel(
            getT0(${u}), vec2(${l.join()}));
        }`;for(let e=1;e<s.length;e++){let t=s[e-1];d+=`
        if (${c} < ${s[e]}  && ${c} >= ${s[e-1]}) {
          return getChannel(
            getT${e}(${DK(o,c,t)}),
            vec2(${DK(l,c,t)}));
        }`}let f=s.length,p=s[s.length-1];d+=`
        return getChannel(
          getT${f}(${DK(o,c,p)}),
          vec2(${DK(l,c,p)}));`,this.userCode=`
      float getValue(${o.map(e=>`int `+e)}) {
        ${d}
      }

      void main() {
        ${i} coords = getOutputCoords();
        vec4 result = vec4(getValue(${a}), 0., 0., 0.);

        ${a[r-1]} = ${a[r-1]} + 1;
        if (${a[r-1]} < ${n[r-1]}) {
          result.g = getValue(${a});
        }

        ${a[r-2]} = ${a[r-2]} + 1;
        if (${a[r-2]} < ${n[r-2]}) {
          result.a = getValue(${a});
        }

        ${a[r-1]} = ${a[r-1]} - 1;
        if (${a[r-2]} < ${n[r-2]} &&
            ${a[r-1]} < ${n[r-1]}) {
          result.b = getValue(${a});
        }
        setOutput(result);
      }
    `}};function DK(e,t,n){let r=e.indexOf(t);return e.map((e,t)=>t===r?`${e} - ${n}`:e).join()}function OK(e){let{inputs:t,backend:n}=e,{input:r}=t;return pW({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.imag},backend:n})}var kK={kernelName:Fs,backendName:`webgl`,kernelFunc:OK};function AK(e,t,n){let r=e[0].dtype;if(r===`complex64`){let r=e.map(e=>lK({inputs:{input:e},backend:n})),i=e.map(e=>OK({inputs:{input:e},backend:n})),a=AK(r,t,n),o=AK(i,t,n),s=hW({inputs:{real:a,imag:o},backend:n});return r.forEach(e=>n.disposeIntermediateTensorInfo(e)),i.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),s}let i=n.shouldExecuteOnCPU(e);if(r===`string`&&(i=!0),i){let i=e.map(e=>{let r=[-1,M(e.shape.slice(t))];return $({inputs:{x:e},backend:n,attrs:{shape:r}})}),a=FH(i.map(e=>({vals:n.readSync(e.dataId),shape:e.shape})),ox(i.map(e=>e.shape),1),r,i[0].shape[0]===1),o=ox(e.map(e=>e.shape),t),s=n.makeTensorInfo(o,r,a);return i.forEach(e=>n.disposeIntermediateTensorInfo(e)),s}let a=e.filter(e=>M(e.shape)>0),o=P().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)&&a[0].shape.length>1;if(a.length===1){let t=o?new LU(e[0].shape,WU):new ZU(e[0].shape,WU);return n.runWebGLProgram(t,e,r)}let s=P().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`);if(a.length>s){let e=[];for(let r=0;r<a.length;r+=s){let i=a.slice(r,r+s);e.push(AK(i,t,n))}let r=AK(e,t,n);for(let t of e)n.disposeIntermediateTensorInfo(t);return r}if(o){let e=new EK(a.map(e=>e.shape),t);return n.runWebGLProgram(e,a,r)}let{tensors2D:c,outShape:l}=jK(a,t,n),u=new TK(c.map(e=>e.shape)),d=n.runWebGLProgram(u,c,r);c.forEach(e=>n.disposeIntermediateTensorInfo(e));let f=$({inputs:{x:d},attrs:{shape:l},backend:n});return n.disposeIntermediateTensorInfo(d),f}function jK(e,t,n){let r=ox(e.map(e=>e.shape),t);return{tensors2D:e.map(e=>$({inputs:{x:e},attrs:{shape:[-1,M(e.shape.slice(t))]},backend:n})),outShape:r}}function MK(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r,a=Ua(i,t[0].shape)[0];ax(t.map(e=>e.shape),a);let o=ox(t.map(e=>e.shape),a);if(M(o)===0)return n.makeTensorInfo(o,t[0].dtype,[]);let s=t.filter(e=>M(e.shape)>0);return s.length===1?pW({inputs:{x:s[0]},backend:n}):AK(s,a,n)}var NK={kernelName:Zo,backendName:`webgl`,kernelFunc:MK},PK=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let a=e.padInfo.top,o=e.padInfo.left,s=e.strideHeight,c=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4,h=e.dataFormat===`channelsLast`,g=h?1:2,_=h?2:3,v=h?3:1,y=``,b=``;n&&(y=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,b=`result = activation(result);`);let x=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${s}, ${c});
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${v}];

        ivec2 xRCCorner =
            ivec2(coords[${g}], coords[${_}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${l};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${u};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${h}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${h}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${h}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${h}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${x}
        ${b}
        setOutput(result);
      }
    `}},FK=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.filterDepth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${i}, ${a}, ${o});
      const ivec3 pads = ivec3(${t}, ${n}, ${r});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${u}; wF++) {
          int xF = xFCorner + wF * ${s};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${l};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},IK=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=ZV(this.outputShape.length);let a=e.padInfo.left,o=e.strideWidth,s=e.dilationWidth,c=e.filterHeight,l=e.filterWidth,u=l,d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<l;e++)d+=`
           vec4 xTexelC${e*2};
           int xTexelC${e*2}Ready;
           vec4 xTexelC${e*2+1};
           int xTexelC${e*2+1}Ready;
           vec4 xC${e};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let e=0;e<l;e++)d+=`
           xTexelC${e*2} = vec4(0.0);
           xTexelC${e*2}Ready = 0;
           xTexelC${e*2+1} = vec4(0.0);
           xTexelC${e*2+1}Ready = 0;
           xC${e} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let t=0;t<(u+1)/2;t++){let n=t*2;if(d+=`
           xC = xCCorner + ${n*s};
           `,o===1){if(n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }
               `,s===1&&n>0?d+=`
                 xC${n} = vec4(xTexelC${n-2}.zw, xTexelC${n}.xy);
                 `:d+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${n} = vec4(previous.zw, xTexelC${n}.xy);
                   } else {
                     xC${n} = vec4(0.0, 0.0, xTexelC${n}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xC${n} = xTexelC${n};
                 `,n+1<l)){let e=a%2==0?ja(s):s;s%2==0&&a%2==1||s%2!=0&&a%2!=1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${e};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                     xTexelC${n+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${n+1}.zw = vec2(0.0);
                     }
                     xTexelC${n+1}Ready = 1;
                   }
                   `,s>1?d+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${n+1} = vec4(previous.zw, xTexelC${n+1}.xy);
                     } else {
                      xC${n+1} = vec4(0.0, 0.0, xTexelC${n+1}.xy);
                     }
                     `:d+=`
                     xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.xy);
                     `):e===1?d+=`
                     xC${n+1} = xTexelC${n};
                     `:d+=`
                     xCOffset = xC + ${e};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                       xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${n+1}.zw = vec2(0.0);
                       }
                       xTexelC${n+1}Ready = 1;
                     }

                     xC${n+1} = xTexelC${n+1};
                     `}}else n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.0);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
               `,n+1<l&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${n+1} = vec4(xTexelC${n+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(
                   xTexelC${n}.xy, xTexelC${n+1}.xy);
               `,n+1<l&&(d+=`
                   xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
                 `)));n<l&&(d+=`
             wTexel = getW(r, ${n}, d1, d2);
             dotProd += xC${n}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${n}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,n+1<l&&(d+=`
               wTexel = getW(r, ${n+1}, d1, d2);
               dotProd += xC${n+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${n+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let f=``,p=``;n&&(f=r?`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${n}
         }`:i?`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${n}
         }`:`vec4 activation(vec4 x) {
           ${n}
         }`,p=`result = activation(result);`);let m=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${m}
         ${p}
         setOutput(result);
       }
     `}},LK=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec4`},{name:`pad`,type:`ivec2`},{name:`stride`,type:`ivec2`},{name:`dilation`,type:`ivec2`},{name:`inChannels`,type:`int`},{name:`itemsPerBlockRow`,type:`int`},{name:`outWidth`,type:`int`}],this.outputShape=e,this.enableShapeUniforms=ZV(this.outputShape.length);let{dataFormat:n}=t,r=KB(),i=n===`channelsLast`,a=i?1:2,o=i?2:3,s=this.enableShapeUniforms?`if(blockIndex < outShape[2] && pos < outShape[1]) {`:`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,c=``;for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)c+=`
          blockIndex = rc.z + ${t};
          pos = rc.y + ${e};

          ${s}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${a}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${o}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${i}) {
                  innerDims = vec2(d1, ch);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${r.output} = result;
      }
    `}};function RK(e,t){let n=e.length;return n>=3?t?[...e.slice(0,-3),e[n-3]*e[n-2],e[n-1]]:[...e.slice(0,-3),e[n-3],e[n-2]*e[n-1]]:!t&&n===1&&e[0]>1?[e[0],1]:null}function zK({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let c=e.shape,l=r.texData.get(e.dataId),u=n.inChannels,d=c[0]*c[1]*c[2],f=n.outChannels,p=n.dataFormat===`channelsLast`,m,h=[];if(a!=null){let e=RK(a.shape,p);e!=null&&(a=$({inputs:{x:a},backend:r,attrs:{shape:e}}),h.push(a))}if(i!=null){let e=RK(i.shape,p);e!=null&&(i=$({inputs:{x:i},backend:r,attrs:{shape:e}}),h.push(i))}if(!((d===1||f===1)&&u>1e3)&&l.isPacked&&p&&l.texture!=null&&c[2]%2!=0&&Ia(l.shape.slice(-3),c.slice(-3))){let u=c[0]*c[1]*(c[2]+1),d={dataId:e.dataId,shape:[1,u,n.inChannels],dtype:e.dtype},f=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,j(MB(l.shape,d.shape),()=>`packed reshape ${l.shape} to ${d.shape} isn't free`);let p=$({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});h.push(p);let g=XW({a:d,b:p,backend:r,transposeA:!1,transposeB:!1,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o}),_=r.texData.get(g.dataId);j(_.isPacked,()=>`batchMatMul result is expected to be packed`),l.shape=f,_.shape=n.outShape,m=pW({inputs:{x:g},backend:r}),m.shape=n.outShape,h.push(g)}else{let c=n.outHeight*n.outWidth,l=$({inputs:{x:e},backend:r,attrs:{shape:p?[n.batchSize,c,n.inChannels]:[n.batchSize,n.inChannels,c]}}),u=$({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),d=XW({a:p?l:u,b:p?u:l,transposeA:!p,transposeB:!1,backend:r,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o});m=$({inputs:{x:d},backend:r,attrs:{shape:n.outShape}}),h.push(l),h.push(u),h.push(d)}for(let e of h)r.disposeIntermediateTensorInfo(e);return m}function BK({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let{filterWidth:c,filterHeight:l,inChannels:u,outWidth:d,outHeight:f,dataFormat:p}=n,m=p===`channelsLast`,h=c*l*u,g=f*d,_=[n.batchSize,h,g],v=[];if(a!=null){let e=RK(a.shape,m);e!=null&&(a=$({inputs:{x:a},backend:r,attrs:{shape:e}}),v.push(a))}if(i!=null){let e=RK(i.shape,m);e!=null&&(i=$({inputs:{x:i},backend:r,attrs:{shape:e}}),v.push(i))}let y=$({inputs:{x:t},backend:r,attrs:{shape:[1,h,M(t.shape)/h]}});v.push(y);let b=new LK(_,n),x=[e.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],S=r.runWebGLProgram(b,[e],`float32`,x),C=$({inputs:{x:S},backend:r,attrs:{shape:_}});v.push(S),v.push(C);let w=i!=null,T=a!=null,E=s===`leakyrelu`,D=s?OW(s,!0):null,O=new kW(m?C.shape:y.shape,m?y.shape:C.shape,m?[n.batchSize,g,n.outChannels]:[n.batchSize,n.outChannels,g],!0,!1,w,D,T,E),k=m?[C,y]:[y,C];if(i&&k.push(i),T&&k.push(a),E){let e=r.makeTensorInfo([],`float32`,Jl(o,`float32`));k.push(e),v.push(e)}let ee=r.runWebGLProgram(O,k,`float32`),A=$({inputs:{x:ee},backend:r,attrs:{shape:n.outShape}});v.push(ee);for(let e of v)r.disposeIntermediateTensorInfo(e);return A}function VK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dataFormat:c,dilations:l,dimRoundingMode:u}=r,d=pp(c),f=$f(i.shape,a.shape,o,l,s,u,!1,d),p;if(f.filterHeight===1&&f.filterWidth===1&&f.dilationHeight===1&&f.dilationWidth===1&&f.strideHeight===1&&f.strideWidth===1&&(f.padInfo.type===`SAME`||f.padInfo.type===`VALID`))p=zK({x:i,filter:a,convInfo:f,backend:n});else if(f.strideWidth<=2&&d===`channelsLast`&&P().getBool(`WEBGL_EXP_CONV`)){let e=new IK(f),t=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];p=n.runWebGLProgram(e,[i,a],`float32`,t)}else if(P().getBool(`WEBGL_CONV_IM2COL`))p=BK({x:i,filter:a,convInfo:f,backend:n});else{let e=new PK(f);p=n.runWebGLProgram(e,[i,a],`float32`)}let m=$({inputs:{x:p},backend:n,attrs:{shape:f.outShape}});return n.disposeIntermediateTensorInfo(p),m}var HK={kernelName:Qo,backendName:`webgl`,kernelFunc:VK},UK=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.dataFormat===`channelsLast`;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${a?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}},WK=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dataFormat===`channelsLast`,o=t-1-e.padInfo.top,s=n-1-e.padInfo.left,c=a?1:2,l=a?2:3,u=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${u}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${l}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${a}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},GK=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.padInfo.front,a=e.padInfo.top,o=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${i};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${n} - ${a};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${o};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},KK=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=t-1-e.padInfo.front,c=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${s}, ${c}, ${l});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${i}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${n}; wR++) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${n} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function qK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,dataFormat:c,dimRoundingMode:l,filterShape:u}=r,d=pp(c),f=new UK($f(i.shape,u,o,1,s,l,!1,d));return n.runWebGLProgram(f,[i,a],`float32`)}var JK={kernelName:$o,backendName:`webgl`,kernelFunc:qK},YK=class{constructor(e){this.variableNames=[`dy`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`strides`,type:`vec2`}],this.outputShape=e.inShape,this.enableShapeUniforms=ZV(this.outputShape.length);let t=e.filterHeight,n=e.filterWidth,r=t-1-e.padInfo.top,i=n-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${r}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            int wCPerm = ${n} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}};function XK(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{inputShape:o,strides:s,pad:c,dataFormat:l,dimRoundingMode:u}=r,d=pp(l),f=$f(o,a.shape,s,1,c,u,!1,d);if(P().getBool(`WEBGL_PACK_CONV2DTRANSPOSE`)&&d===`channelsLast`){let e=[[f.strideHeight,f.strideWidth]],t=new YK(f);return n.runWebGLProgram(t,[i,a],`float32`,e)}else{let e=new WK(f);return n.runWebGLProgram(e,[i,a],`float32`)}}var ZK={kernelName:es,backendName:`webgl`,kernelFunc:XK};function QK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=new FK(ep(i.shape,a.shape,o,c,s));return n.runWebGLProgram(l,[i,a],`float32`)}var $K={kernelName:ts,backendName:`webgl`,kernelFunc:QK};function eq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,filterShape:c}=r,l=new GK(ep(i.shape,c,o,1,s));return n.runWebGLProgram(l,[i,a],`float32`)}var tq={kernelName:ns,backendName:`webgl`,kernelFunc:eq};function nq(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{pad:o,strides:s,inputShape:c}=r,l=new KK(ep(c,a.shape,s,1,o));return n.runWebGLProgram(l,[i,a],`float32`)}var rq={kernelName:rs,backendName:`webgl`,kernelFunc:nq},iq={kernelName:`Cos`,backendName:`webgl`,kernelFunc:EW({opSnippet:TW+`
  return cos(x);
`,packedOpSnippet:`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${dW}
  return result;
`})},aq={kernelName:is,backendName:`webgl`,kernelFunc:EW({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`})},oq=class{constructor(e,t,n,r,i){this.variableNames=[`Image`,`Boxes`,`BoxInd`],this.outputShape=[];let[a,o,s,c]=e,[l]=t,[u,d]=n;this.outputShape=[l,u,d,c];let f=+(r===`bilinear`),[p,m]=[`${o-1}.0`,`${s-1}.0`],[h,g,_]=u>1?[`${(o-1)/(u-1)}`,`(y2-y1) * height_ratio`,`y1*${p} + float(y)*(height_scale)`]:[`0.0`,`0.0`,`0.5 * (y1+y2) * ${p}`],[v,y,b]=d>1?[`${(s-1)/(d-1)}`,`(x2-x1) * width_ratio`,`x1*${m} + float(x)*(width_scale)`]:[`0.0`,`0.0`,`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${h});
      const float width_ratio = float(${v});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${a}) {
          return;
        }

        float height_scale = ${g};
        float width_scale = ${y};

        float in_y = ${_};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${i}));
          return;
        }
        float in_x = ${b};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${i}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}},sq={kernelName:ss,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{image:i,boxes:a,boxInd:o}=t,{cropSize:s,method:c,extrapolationValue:l}=r,u=new oq(i.shape,a.shape,s,c,l);return n.runWebGLProgram(u,[i,a,o],`float32`)}},cq;(function(e){e.Prod=`*`,e.Sum=`+`})(cq||={});var lq=class{constructor(e,t,n,r){this.op=e,this.outputShape=t,this.variableNames=[`x`],this.customUniforms=[{name:`index`,type:`float`}];let i=this.outputShape.length,a=this.op===cq.Prod?`1.0`:`0.0`,o=n?a:`getX(${uq(i,`coords`,this.op)})`,s=this.outputShape[this.outputShape.length-1],c=``,l=``;n?(c=r?`end != ${s-1}`:`end != 0`,l=r?`end + 1`:`end - 1`):(c=r?`end + pow2 < ${s}`:`end >= pow2`,l=r?`end + pow2`:`end - pow2`),this.userCode=`
      void main() {
        ${HV(i)} coords = getOutputCoords();
        int end = ${dq(i,`coords`,this.op)};
        float val = ${o};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${l};
          ${dq(i,`coords`,this.op)} = idx;
          val ${this.op}= getX(${uq(i,`coords`,this.op)});
        }
        setOutput(val);
      }
    `}};function uq(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.x, ${t}.y`;if(e===3)return`${t}.x, ${t}.y, ${t}.z`;if(e===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function dq(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.y`;if(e===3)return`${t}.z`;if(e===4)return`${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function fq(e,t,n,r,i,a){let o=t.shape.length,s=ih([r],o),c=t;s!=null&&(c=JW({inputs:{x:t},backend:n,attrs:{perm:s}}));let l=oh(1,o)[0];if(l!==o-1)throw Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);let u=c.shape[l],d=pW({inputs:{x:c},backend:n});for(let t=0;t<=Math.ceil(Math.log2(u))-1;t++){let r=new lq(e,c.shape,!1,a),i=[[t]],o=d;d=n.runWebGLProgram(r,[d],d.dtype,i),n.disposeIntermediateTensorInfo(o)}if(i){let t=new lq(e,c.shape,i,a),r=d;d=n.runWebGLProgram(t,[d],d.dtype),n.disposeIntermediateTensorInfo(r)}if(s!=null){let e=ah(s),t=JW({inputs:{x:d},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(c),t}return d}function pq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return fq(cq.Prod,i,n,a,o,s)}var mq={kernelName:as,backendName:`webgl`,kernelFunc:pq};function hq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return fq(cq.Sum,i,n,a,o,s)}var gq={kernelName:os,backendName:`webgl`,kernelFunc:hq};function _q(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o,binaryOutput:s}=r;if(i.shape.length===1){let e=AH(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,e)}else if(i.shape.length===2){let e=jH(n.bufferSync(i),n.bufferSync(a),o,s);return n.makeTensorInfo(e.shape,a.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var vq={kernelName:cs,backendName:`webgl`,kernelFunc:_q},yq=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat===`NHWC`?`coords[1]`:`coords[2]`}getWidthCoordString(){return this.dataFormat===`NHWC`?`coords[2]`:`coords[3]`}getDepthCoordString(){return this.dataFormat===`NHWC`?`coords[3]`:`coords[1]`}getOutputDepthSize(){return this.dataFormat===`NHWC`?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat===`NHWC`?`getX(b, in_h, in_w, in_d)`:`getX(b, in_d, in_h, in_w)`}};function bq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockSize:a,dataFormat:o}=r,s=i.shape[0],c=o===`NHWC`?i.shape[1]:i.shape[2],l=o===`NHWC`?i.shape[2]:i.shape[3],u=o===`NHWC`?i.shape[3]:i.shape[1],d=c*a,f=l*a,p=u/(a*a),m=new yq(o===`NHWC`?[s,d,f,p]:[s,p,d,f],a,o);return n.runWebGLProgram(m,[i],i.dtype)}var xq={kernelName:ls,backendName:`webgl`,kernelFunc:bq},Sq=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=ZV(this.outputShape.length);let a=e.filterHeight,o=e.filterWidth,s=e.outChannels/e.inChannels,c=``,l=``;n&&(c=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,l=`result = activation(result);`);let u=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${s};
        int q = d2 - d1 * ${s};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${a}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${o}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${u}
        ${l}
        setOutput(result);
      }
    `}},Cq=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=ZV(this.outputShape.length);let a=e.outChannels/e.inChannels,o=e.padInfo.left,s=e.strideWidth,c=e.dilationWidth,l=e.filterHeight,u=e.filterWidth,d=u,f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<u;e++)f+=`
          vec4 xTexelC${e*2};
          int xTexelC${e*2}Ready;
          vec4 xTexelC${e*2+1};
          int xTexelC${e*2+1}Ready;
          vec4 xC${e};`;f+=`
    for (int r = 0; r < ${l}; r++) {
      `;for(let e=0;e<u;e++)f+=`
          xTexelC${e*2} = vec4(0.0);
          xTexelC${e*2}Ready = 0;
          xTexelC${e*2+1} = vec4(0.0);
          xTexelC${e*2+1}Ready = 0;
          xC${e} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let e=0;e<(d+1)/2;e++){let t=e*2;if(f+=`
          xC = xCCorner + ${t*c};
          `,s===1){if(t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }
              `,c===1&&t>0?f+=`
                xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${t} = vec4(previous.zw, xTexelC${t}.xy);
                  } else {
                    xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xC${t} = xTexelC${t};
                `,t+1<u)){let e=o%2==0?ja(c):c;c%2==0&&o%2==1||c%2!=0&&o%2!=1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${e};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                    xTexelC${t+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${t+1}.zw = vec2(0.0);
                    }
                    xTexelC${t+1}Ready = 1;
                  }
                  `,c>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${t+1} = vec4(previous.zw, xTexelC${t+1}.xy);
                    } else {
                     xC${t+1} = vec4(0.0, 0.0, xTexelC${t+1}.xy);
                    }
                    `:f+=`
                    xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);
                    `):e===1?f+=`
                    xC${t+1} = xTexelC${t};
                    `:f+=`
                    xCOffset = xC + ${e};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                      xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${t+1}.zw = vec2(0.0);
                      }
                      xTexelC${t+1}Ready = 1;
                    }

                    xC${t+1} = xTexelC${t+1};
                    `}}else t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.0);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
              `,t+1<u&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(
                  xTexelC${t}.xy, xTexelC${t+1}.xy);
              `,t+1<u&&(f+=`
                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
                `)));t<u&&(f+=`
            wTexel = getW(r, ${t}, d1, q);
            dotProd += xC${t} * vec4(wTexel.xz, wTexel.xz);
          `,t+1<u&&(f+=`
              wTexel = getW(r, ${t+1}, d1, q);
              dotProd += xC${t+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p=``,m=``;n&&(p=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`vec4 activation(vec4 x) {
          ${n}
        }`,m=`result = activation(result);`);let h=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${a};
        int q = d2 - d1 * ${a};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${h}
        ${m}
        setOutput(result);
      }
    `}};function wq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c,dimRoundingMode:l}=r,u=c;u??=[1,1],j(dp(o,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${u}'`);let d=$f(i.shape,a.shape,o,u,s,l,!0),f;f=P().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?new Cq(d):new Sq(d);let p=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(f,[i,a],`float32`,p)}var Tq={kernelName:us,backendName:`webgl`,kernelFunc:wq},Eq=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${a} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}},Dq=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=t-1-e.padInfo.top,o=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${s}; dm++) {
              int d2 = d1 * ${s} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function Oq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,filterShape:u}=r,d=new Eq($f(i.shape,u,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var kq={kernelName:ds,backendName:`webgl`,kernelFunc:Oq};function Aq(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,inputShape:u}=r,d=new Dq($f(u,a.shape,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var jq={kernelName:fs,backendName:`webgl`,kernelFunc:Aq},Mq=class{constructor(e){this.variableNames=[`X`],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function Nq(e){let{inputs:t,backend:n}=e,{x:r}=t,i=[...r.shape,...r.shape],a=M(r.shape),o=$({inputs:{x:r},backend:n,attrs:{shape:[a]}}),s=new Mq(a),c=n.runWebGLProgram(s,[o],o.dtype),l=$({inputs:{x:c},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(c),l}var Pq={kernelName:ps,backendName:`webgl`,kernelFunc:Nq},Fq=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let{inHeight:t,inWidth:n,padInfo:r,strideHeight:i,strideWidth:a,filterHeight:o,filterWidth:s,dilationHeight:c,dilationWidth:l}=e,{top:u,left:d}=r;this.userCode=`
      const ivec2 strides = ivec2(${i}, ${a});
      const ivec2 pads = ivec2(${u}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${o}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${s}; w++) {
              int wIn = wBeg + w * ${l};

              if (wIn >= 0 && wIn < ${n}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}};function Iq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=Xf(i.shape,a.shape,o,s,`NHWC`,c),u,d=new Fq(l);u=n.runWebGLProgram(d,[i,a],`float32`);let f=$({inputs:{x:u},backend:n,attrs:{shape:l.outShape}});return n.disposeIntermediateTensorInfo(u),f}var Lq={kernelName:ms,backendName:`webgl`,kernelFunc:Iq};function Rq(e){let{inputs:t,backend:n,attrs:r}=e,{equation:i}=r,a=t,{allDims:o,summedDims:s,idDims:c}=zx(i,a.length);Vx(o.length,c,a);let{path:l,steps:u}=Hx(s,c),d=u.length,f=null,p=o.length,m=[];for(let e=0;e<d;++e){for(let t of u[e]){let{permutationIndices:e,expandDims:r}=Bx(p,c[t]),i;Ux(e)?i=a[t]:(i=JW({inputs:{x:a[t]},backend:n,attrs:{perm:e}}),m.push(i));let o=i.shape.slice();for(let e=0;e<r.length;++e)o.splice(r[e],0,1);Ia(i.shape,o)||(i=$({inputs:{x:i},backend:n,attrs:{shape:o}}),m.push(i)),f===null?f=i:(f=NW({inputs:{a:i,b:f},backend:n}),m.push(f))}e<d-1&&(l[e]>=0&&(f=KW({inputs:{x:f},backend:n,attrs:{axis:l[e]-(o.length-p),keepDims:!1}}),m.push(f)),p--)}for(let e of m)e!==f&&n.disposeIntermediateTensorInfo(e);return f}var zq={kernelName:ys,backendName:`webgl`,kernelFunc:Rq},Bq={kernelName:`Elu`,backendName:`webgl`,kernelFunc:EW({opSnippet:`return (x >= 0.0) ? x : (exp(x) - 1.0);`,packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`})},Vq=`return (b >= 0.0) ? a : a * (b + 1.0);`,Hq=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,Uq={kernelName:bs,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n}=e,{dy:r,y:i}=t,a=P().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new fW(Hq,r.shape,i.shape):new uW(Vq,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],r.dtype)}},Wq={kernelName:xs,backendName:`webgl`,kernelFunc:DW({opSnippet:`return float(a == b);`,packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:`bool`,cpuKernelImpl:IH})},Gq={kernelName:`Erf`,backendName:`webgl`,kernelFunc:EW({opSnippet:`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${xx};
  float a1 = ${Sx};
  float a2 = ${Cx};
  float a3 = ${wx};
  float a4 = ${Tx};
  float a5 = ${Ex};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`})},Kq=EW({opSnippet:TW+`
  return exp(x);
`,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:LH,dtype:`float32`}),qq={kernelName:`Exp`,backendName:`webgl`,kernelFunc:Kq};function Jq(e){let{inputs:t,attrs:n,backend:r}=e,{dim:i}=n,{input:a}=t,o=a.shape.length,s=a.shape.slice(),c=i;return i<0&&(j(-(o+1)<=i,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),c=o+i+1),s.splice(c,0,1),$({inputs:{x:a},backend:r,attrs:{shape:s}})}var Yq={kernelName:Ss,backendName:`webgl`,kernelFunc:Jq},Xq=`return exp(x) - 1.0;`,Zq={kernelName:Cs,backendName:`webgl`,kernelFunc:EW({opSnippet:Xq,packedOpSnippet:Xq,cpuKernelImpl:RH})},Qq=class{constructor(e,t,n){this.variableNames=[`real`,`imag`];let r=t[1];this.outputShape=t;let i=n?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,a=n?`${r}.0`:`1.0`,o;if(e===`real`)o=`return real * expR - imag * expI;`;else if(e===`imag`)o=`return real * expI + imag * expR;`;else throw Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${i};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${o}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${r});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${r}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${a};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};function $q(e,t,n){let r=n.texData.get(e.dataId),i=M(e.shape),a=e.shape[e.shape.length-1],o=i/a,s=$({inputs:{x:e},backend:n,attrs:{shape:[o,a]}}),c=s.shape,l=new Qq(`real`,c,t),u=new Qq(`imag`,c,t),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:c},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:c}],f=n.runWebGLProgram(l,d,`float32`),p=n.runWebGLProgram(u,d,`float32`),m=hW({inputs:{real:f,imag:p},backend:n});n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p);let h=$({inputs:{x:m},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(m),h}function eJ(e){let{inputs:t,backend:n}=e,{input:r}=t;return $q(r,!1,n)}var tJ={kernelName:`FFT`,backendName:`webgl`,kernelFunc:eJ},nJ=class{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:`value`,type:`float`}],this.variableNames=[`x`],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function rJ(e){let{backend:t,attrs:n}=e,{shape:r,value:i}=n,{dtype:a}=n;if(a||=to(i),a===`string`){let e=Ka(a,M(r));return e.fill(i),t.makeTensorInfo(r,a,e)}else{let e=new nJ(r,i),n=[[i]];return t.runWebGLProgram(e,[],a,n)}}var iJ={kernelName:ws,backendName:`webgl`,kernelFunc:rJ},aJ=class{constructor(e){this.variableNames=[`Image`],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}},oJ={kernelName:Ts,backendName:`webgl`,kernelFunc:({inputs:e,backend:t})=>{let{image:n}=e,r=t,i=new aJ(n.shape);return r.runWebGLProgram(i,[n],n.dtype)}},sJ=`return floor(x);`,cJ={kernelName:Es,backendName:`webgl`,kernelFunc:EW({opSnippet:sJ,packedOpSnippet:sJ,cpuKernelImpl:zH})},lJ={kernelName:Ds,backendName:`webgl`,kernelFunc:DW({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,dtype:`int32`})},uJ=class{constructor(e){this.variableNames=[`A`];let t=KB(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${n}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}},dJ=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0;let t=KB(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${r}.0, ${n}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}},fJ={kernelName:ml,backendName:`webgl`,kernelFunc:hJ},pJ,mJ=P().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);function hJ(e){let{inputs:t,backend:n,attrs:r}=e,{pixels:i}=t,{numChannels:a}=r,o=typeof HTMLVideoElement<`u`&&i instanceof HTMLVideoElement,s=typeof HTMLImageElement<`u`&&i instanceof HTMLImageElement,[c,l]=o?[i.videoWidth,i.videoHeight]:[i.width,i.height],u=[l,c],d=[l,c,a];if(s||o){let e=P().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);(pJ==null||e!==mJ)&&(mJ=e,pJ=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:mJ})),pJ.canvas.width=c,pJ.canvas.height=l,pJ.drawImage(i,0,0,c,l),i=pJ.canvas}let f=n.makeTensorInfo(u,`int32`);n.texData.get(f.dataId).usage=Wz.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(f.dataId),i);let p=P().getBool(`WEBGL_PACK`)?new dJ(d):new uJ(d),m=n.runWebGLProgram(p,[f],`int32`);return n.disposeData(f.dataId),m}function gJ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=pp(u),g=$f(i.shape,a.shape,c,d,l,f,!1,h),_,v=[],y=o!=null,b=s!=null,x=p===`leakyrelu`,S=()=>{let e=[i,a],t=(e,t)=>{if(t===`NCHW`&&e.shape.length===1&&e.shape[0]!==1){let t=$({inputs:{x:e},backend:n,attrs:{shape:[e.shape[0],1,1]}});return v.push(t),t}return e};if(y&&e.push(t(o,u)),b&&e.push(t(s,u)),x){let t=n.makeTensorInfo([],`float32`,Jl(m,`float32`));e.push(t),v.push(t)}return e};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type===`SAME`||g.padInfo.type===`VALID`))_=zK({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else if(g.strideWidth<=2&&h===`channelsLast`&&P().getBool(`WEBGL_EXP_CONV`)){let e=new IK(g,y,p?OW(p,!0):null,b,x),t=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],r=S();_=n.runWebGLProgram(e,r,`float32`,t)}else if(P().getBool(`WEBGL_CONV_IM2COL`))_=BK({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else{let e=new PK(g,y,p?OW(p,!1):null,b,x),t=S();_=n.runWebGLProgram(e,t,`float32`)}let C=$({inputs:{x:_},backend:n,attrs:{shape:g.outShape}});return v.push(_),v.forEach(e=>n.disposeIntermediateTensorInfo(e)),C}var _J={kernelName:_l,backendName:`webgl`,kernelFunc:gJ};function vJ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dilations:u,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=r,m=[],h=u;h??=[1,1],j(dp(c,h),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${h}'`);let g=$f(i.shape,a.shape,c,h,l,d,!0),_=P().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,v=f?OW(f,_):null,y=[i,a],b=o!=null,x=s!=null,S=f===`leakyrelu`;if(b&&y.push(o),x&&y.push(s),S){let e=n.makeTensorInfo([],`float32`,Jl(p,`float32`));y.push(e),m.push(e)}let C;C=_?new Cq(g,b,v,x,S):new Sq(g,b,v,x,S);let w=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],T=n.runWebGLProgram(C,y,`float32`,w);return m.forEach(e=>n.disposeIntermediateTensorInfo(e)),T}var yJ={kernelName:vl,backendName:`webgl`,kernelFunc:vJ},bJ=class{constructor(e,t,n,r){this.sliceDim=e,this.strides=t,this.paramsShape=r,this.variableNames=[`x`,`indices`],this.outputShape=n;let i=HV(n.length),a=`
    int index;`;for(let e=0;e<this.sliceDim;e++)a+=`
          index = round(getIndices(coords[0], ${e}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[e]};
          flattenIndex += index * ${this.strides[e]};`;this.userCode=`
         void main() {
          ${i} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${a}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};function xJ(e){let{inputs:t,backend:n}=e,{params:r,indices:i}=t,a=i.shape,o=a[a.length-1],s=M(r.shape),[c,l,u,d]=Pb(r,i),f=$({inputs:{x:i},backend:n,attrs:{shape:[l,o]}}),p=$({inputs:{x:r},backend:n,attrs:{shape:[M(r.shape)/u,u]}});if(n.shouldExecuteOnCPU([r,i])||r.dtype===`string`){let e=BH(n.readSync(i.dataId),n.bufferSync(r),r.dtype,l,o,u,d,r.shape,s);return n.makeTensorInfo(c,r.dtype,e.values)}let m=new bJ(o,d,[l,u],r.shape),h=n.runWebGLProgram(m,[p,f],p.dtype),g=$({inputs:{x:h},backend:n,attrs:{shape:c}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h),g}var SJ={kernelName:As,backendName:`webgl`,kernelFunc:xJ},CJ=class{constructor(e,t){this.variableNames=[`A`,`indices`],this.outputShape=t,this.rank=t.length;let n=HV(this.rank),r=wJ(e,2);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}};function wJ(e,t){let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],r=[];for(let t=0;t<e.length;t++)t===2?r.push(`index`):r.push(`${n[t]}`);return r.join()}function TJ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,indices:a}=t,{axis:o,batchDims:s}=r,c=Ua(o,i.shape)[0];if(P().get(`DEBUG`)){let e=n.readSync(a.dataId),t=i.shape[c];for(let n=0;n<e.length;++n){let r=e[n];j(r<=t-1&&r>=0,()=>`GatherV2: the index value ${r} is not in [0, ${t-1}]`)}}let l=sS(i,a,c,s),u=M(a.shape),d=[],f=$({inputs:{x:i},backend:n,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),p=$({inputs:{x:a},backend:n,attrs:{shape:[l.batchSize,u/l.batchSize]}});d.push(f),d.push(p);let m=[l.batchSize,l.outerSize,u/l.batchSize,l.sliceSize];if(n.shouldExecuteOnCPU([i,a])||i.dtype===`string`){let e=n.bufferSync(p),t=VH(n.bufferSync(f),e,m);return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(l.outputShape,t.dtype,t.values)}let h=new CJ(f.shape,m),g=n.runWebGLProgram(h,[f,p],f.dtype);d.push(g);let _=$({inputs:{x:g},backend:n,attrs:{shape:l.outputShape}});return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}var EJ={kernelName:ks,backendName:`webgl`,kernelFunc:TJ},DJ={kernelName:js,backendName:`webgl`,kernelFunc:DW({opSnippet:`return float(a > b);`,packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:HH,dtype:`bool`})},OJ={kernelName:Ms,backendName:`webgl`,kernelFunc:DW({opSnippet:`return float(a >= b);`,packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:`bool`,cpuKernelImpl:UH})};function kJ(e){let{inputs:t,backend:n}=e,{input:r}=t;return $q(r,!0,n)}var AJ={kernelName:Ps,backendName:`webgl`,kernelFunc:kJ},jJ={kernelName:Is,backendName:`webgl`,kernelFunc:EW({opSnippet:`return float(!isnan(x) && !isinf(x));`,dtype:`bool`})},MJ={kernelName:Ls,backendName:`webgl`,kernelFunc:EW({opSnippet:`return float(isinf(x));`,dtype:`bool`})},NJ={kernelName:Rs,backendName:`webgl`,kernelFunc:EW({opSnippet:`return float(isnan(x));`,dtype:`bool`})},PJ={kernelName:Bs,backendName:`webgl`,kernelFunc:DW({opSnippet:`return float(a < b);`,packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:WH,dtype:`bool`})},FJ={kernelName:Vs,backendName:`webgl`,kernelFunc:DW({opSnippet:`return float(a <= b);`,packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:GH,dtype:`bool`})};function IJ(e){let{backend:t,attrs:n}=e,{start:r,stop:i,num:a}=n,o=KH(r,i,a);return t.makeTensorInfo([o.length],`float32`,o)}var LJ={kernelName:Hs,backendName:`webgl`,kernelFunc:IJ},RJ={kernelName:`Log`,backendName:`webgl`,kernelFunc:EW({opSnippet:TW+`
  return x < 0.0 ? 0./0. : log(x);
`,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:qH})},zJ={kernelName:Us,backendName:`webgl`,kernelFunc:EW({opSnippet:TW+`
  return log(1.0 + x);
`})},BJ={kernelName:Ws,backendName:`webgl`,kernelFunc:DW({opSnippet:`return float(a >= 1.0 && b >= 1.0);`,packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:`bool`})},VJ={kernelName:Gs,backendName:`webgl`,kernelFunc:EW({opSnippet:`return float(!(x >= 1.0));`})},HJ={kernelName:Ks,backendName:`webgl`,kernelFunc:DW({opSnippet:`return float(a >= 1.0 || b >= 1.0);`,packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:`bool`})},UJ=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[];let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${a}; j <= ${a}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${o}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${s};
        setOutput(val);
      }
    `}},WJ=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${a};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${a}; j <= ${a}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${s};
        setOutput(result);
      }
    `}},GJ={kernelName:`LRN`,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{depthRadius:a,bias:o,alpha:s,beta:c}=r,l=P().getBool(`WEBGL_PACK_NORMALIZATION`)?new WJ(i.shape,a,o,s,c):new UJ(i.shape,a,o,s,c);return n.runWebGLProgram(l,[i],i.dtype)}},KJ=class{constructor(e,t,n,r,i){this.variableNames=[`inputImage`,`outputImage`,`dy`],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=i,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${r}) * norm + float(${n});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${i})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${i});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}},qJ={kernelName:Js,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i,y:a,dy:o}=t,{depthRadius:s,bias:c,alpha:l,beta:u}=r,d=new KJ(i.shape,s,c,l,u);return n.runWebGLProgram(d,[i,a,o],i.dtype)}};function JJ(e,t,n,r){let i=M(t),a=M(e.shape)/i,o=$({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=BW(o,e.dtype,`max`,r),c=$({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}function YJ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reductionIndices:a,keepDims:o}=r,s=i.shape.length,c=Ua(a,i.shape),l=c,u=ih(l,s),d=u!=null,f=n.shouldExecuteOnCPU([i]),p=i;if(d){if(f){let e=n.texData.get(p.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=i.shape[u[e]];let r=SU(e,i.shape,i.dtype,u,t);p=n.makeTensorInfo(t,i.dtype);let a=n.texData.get(p.dataId);a.values=r}else p=WW(i,u,n);l=oh(l.length,s)}rh(`max`,l,s);let[m,h]=th(p.shape,l),g=m;o&&(g=nh(m,c));let _;if(f){let e=n.texData.get(p.dataId).values,t=JH(e,M(h),g,i.dtype);_=n.makeTensorInfo(g,i.dtype);let r=n.texData.get(_.dataId);r.values=t}else _=JJ(p,h,g,n);return d&&n.disposeIntermediateTensorInfo(p),_}var XJ={kernelName:`Max`,backendName:`webgl`,kernelFunc:YJ},ZJ={kernelName:Ys,backendName:`webgl`,kernelFunc:DW({opSnippet:lW+`
  return max(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+dW+`
  return result;
`,cpuKernelImpl:YH})};function QJ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;GB(i,`maxPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;j(dp(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Zf(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&Ia(l.inShape,l.outShape))return pW({inputs:{x:i},backend:n});let u=new OG(l,`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var $J={kernelName:Xs,backendName:`webgl`,kernelFunc:QJ};function eY(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dataFormat:c,dimRoundingMode:l}=r,u=new kG(Qf(i.shape,a,o,[1,1,1],s,l,c),`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var tY={kernelName:Qs,backendName:`webgl`,kernelFunc:eY},nY=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,i=e.effectiveFilterHeight,a=e.effectiveFilterWidth,o=i-1-e.padInfo.top,s=a-1-e.padInfo.left,c=i*a-1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${i};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${a}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${a} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},rY=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.dilationDepth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterDepth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=s-1-e.padInfo.front,d=c-1-e.padInfo.top,f=l-1-e.padInfo.left,p=s*c*l-1;this.userCode=`
      const ivec3 pads = ivec3(${u}, ${d}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${s};
           wD += ${i}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${a}) {
            float dyR = float(dyRCorner + wR) / ${n}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${l};
                wC += ${o}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${l} +
                  wR * ${l} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function iY(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=Qf(o.shape,s,c,[1,1,1],l,u),f=new kG(d,`max`,!0),p=n.runWebGLProgram(f,[o],o.dtype),m=new rY(d),h=n.runWebGLProgram(m,[i,p],o.dtype);return n.disposeIntermediateTensorInfo(p),h}var aY={kernelName:$s,backendName:`webgl`,kernelFunc:iY};function oY(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a,output:o}=t,s=a;GB([a,o],`maxPoolGrad`);let{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=r,f=Zf(s.shape,c,l,1,u,d),p=new OG(f,`max`,!0),m=n.runWebGLProgram(p,[s],s.dtype),h=new nY(f),g=n.runWebGLProgram(h,[i,m],s.dtype);return n.disposeIntermediateTensorInfo(m),g}var sY={kernelName:Zs,backendName:`webgl`,kernelFunc:oY};function cY(e,t,n,r){let i=new OG(n,`max`,!1),a=r.runWebGLProgram(i,[e],`float32`);return i=new OG(n,`max`,!0,!0,t),[a,r.runWebGLProgram(i,[e],`float32`)]}var lY={kernelName:ec,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:i,strides:a,pad:o,includeBatchInIndex:s}=t,c=n;j(r.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`);let l=[1,1];j(dp(a,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);let[u,d]=cY(r,s,Zf(r.shape,i,a,l,o),c);return[u,d]}};function uY(e,t,n,r){let i=M(t),a=M(e.shape)/i,o=$({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=BW(o,`float32`,`mean`,r),c=$({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}var dY={kernelName:tc,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{keepDims:i,axis:a}=t,o=n,s=r.shape.length,c=Ua(a,r.shape),l=c,u=ih(l,s),d=u!=null,f=o.shouldExecuteOnCPU([r]),p=[],m=r;if(d){if(f){let e=o.texData.get(m.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=r.shape[u[e]];let n=SU(e,r.shape,r.dtype,u,t);m=o.makeTensorInfo(t,r.dtype);let i=o.texData.get(m.dataId);i.values=n}else m=WW(r,u,o);p.push(m),l=oh(l.length,s)}rh(`sum`,l,s);let[h,g]=th(m.shape,l),_=h;i&&(_=nh(h,c));let v=uY(m,g,_,o);for(let e of p)o.disposeIntermediateTensorInfo(e);return v}};function fY(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=Ua(a,i.shape),l=c,u=ih(l,s),d=i;u!=null&&(d=JW({inputs:{x:i},backend:n,attrs:{perm:u}}),l=oh(l.length,i.shape.length)),rh(`min`,l,s);let[f,p]=th(d.shape,l),m=M(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=BW(h,h.dtype,`min`,n),_;if(o){let e=nh(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var pY={kernelName:`Min`,backendName:`webgl`,kernelFunc:fY},mY={kernelName:nc,backendName:`webgl`,kernelFunc:DW({opSnippet:lW+`
  return min(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+dW+`
  return result;
`,cpuKernelImpl:XH})},hY=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=HV(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r),c=n===`reflect`?0:1;if(r===1){this.userCode=`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${i} coords = outC - start;
        setOutput(getX(${s}));
      }
    `}},gY=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=HV(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=TU(`rc`,r),c=TU(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=n===`reflect`?0:1,f=``;if(r===1){let e=`
        ${i} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
      `}else{let e=`
        ${i} source = rc;
        ${i} lt = ${i}(lessThan(source, start));
        ${i} gte = ${i}(greaterThanEqual(source, end));
        ${i} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
        rc = outputLoc;
        ${s[r-2]} += 1;
        if(${s[r-2]} < ${this.outputShape[r-2]}) {
          ${e}
          result[2] = getChannel(getX(${c.join()}), ${u});
          ${s[r-1]} += 1;
          if(${l}) {
            ${e}
            result[3] = getChannel(getX(${c.join()}), ${u});
          }
        }
      `}this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}},_Y={kernelName:rc,backendName:`webgl`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r}=e,{paddings:i,mode:a}=n,o=P().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new gY(r.shape,i,a):new hY(r.shape,i,a);return t.runWebGLProgram(o,[r],r.dtype)}},vY={kernelName:`Mod`,backendName:`webgl`,kernelFunc:DW({opSnippet:`if (b == 0.0) return NAN;
  return mod(a, b);`,packedOpSnippet:`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+dW+`
  return result;
`})},yY=class{constructor(e,t,n){this.variableNames=[`probs`],this.customUniforms=[{name:`seed`,type:`float`}],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}},bY=DW({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,checkOutOfBounds:!0}),xY={kernelName:vs,backendName:`webgl`,kernelFunc:bY},SY=`return a - b;`,CY=DW({opSnippet:SY,packedOpSnippet:SY,supportsComplex:!0,cpuKernelImpl:yU}),wY={kernelName:`Sub`,backendName:`webgl`,kernelFunc:CY};function TY(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{dim:a}=r,o=Ua([a],i.shape),s=YJ({inputs:{x:i},backend:n,attrs:{reductionIndices:o,keepDims:!1}}),c=nh(s.shape,o),l=$({inputs:{x:s},backend:n,attrs:{shape:c}}),u=CY({inputs:{a:i,b:l},backend:n}),d=Kq({inputs:{x:u},backend:n}),f=KW({inputs:{x:d},backend:n,attrs:{axis:o,keepDims:!1}}),p=$({inputs:{x:f},backend:n,attrs:{shape:c}}),m=bY({inputs:{a:d,b:p},backend:n});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),m}var EY={kernelName:Gc,backendName:`webgl`,kernelFunc:TY};function DY(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{numSamples:a,seed:o,normalized:s}=r,c=s?i:TY({inputs:{logits:i},backend:n,attrs:{dim:i.shape.length-1}}),l=c.shape[0],u=c.shape[1],d=new yY(l,u,a),f=[[o]],p=n.runWebGLProgram(d,[c],`int32`,f);return s||n.disposeIntermediateTensorInfo(c),p}var OY={kernelName:ic,backendName:`webgl`,kernelFunc:DY},kY=RU+`
  return -x;
`,AY=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function jY(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])){let[e,t]=QH(n.texData.get(r.dataId).values,r.shape,r.dtype);return n.makeTensorInfo(t,r.dtype,e)}let i;return i=P().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new ZU(r.shape,AY):new LU(r.shape,kY),n.runWebGLProgram(i,[r],r.dtype)}var MY={kernelName:`Neg`,backendName:`webgl`,kernelFunc:jY},NY=Oy;function PY(e){yl(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=r,{selectedIndices:l}=NY(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c);return n.makeTensorInfo([l.length],`int32`,new Int32Array(l))}var FY={kernelName:sc,backendName:`webgl`,kernelFunc:PY},IY=ky;function LY(e){yl(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,padToMaxOutputSize:l}=r,{selectedIndices:u,validOutputs:d}=IY(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c,l);return[n.makeTensorInfo([u.length],`int32`,new Int32Array(u)),n.makeTensorInfo([],`int32`,new Int32Array([d]))]}var RY={kernelName:cc,backendName:`webgl`,kernelFunc:LY},zY=Ay;function BY(e){yl(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=r,{selectedIndices:u,selectedScores:d}=zY(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c,l);return[n.makeTensorInfo([u.length],`int32`,new Int32Array(u)),n.makeTensorInfo([d.length],`float32`,new Float32Array(d))]}var VY={kernelName:lc,backendName:`webgl`,kernelFunc:BY},HY=class{constructor(e,t,n,r){this.variableNames=[`indices`],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${n}),
                      float(index == coords.y)));
      }
    `}},UY={kernelName:dc,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{indices:i}=t,{dtype:a,depth:o,onValue:s,offValue:c}=r,l=M(i.shape),u=new HY(l,o,s,c),d=$({inputs:{x:i},backend:n,attrs:{shape:[l]}}),f=n.runWebGLProgram(u,[d],a);n.disposeIntermediateTensorInfo(d);let p=[...i.shape,o],m=$({inputs:{x:f},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo(f),m}};function WY(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`complex64`){let e=lK({inputs:{input:r},backend:n}),t=WY({inputs:{x:e},backend:n}),i=OK({inputs:{input:r},backend:n}),a=WY({inputs:{x:i},backend:n}),o=hW({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return rJ({attrs:{shape:r.shape,dtype:r.dtype,value:r.dtype===`string`?``:0},backend:n})}var GY={kernelName:fl,backendName:`webgl`,kernelFunc:WY};function KY(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`onesLike is not supported under string dtype`);if(r.dtype===`complex64`){let e=lK({inputs:{input:r},backend:n}),t=KY({inputs:{x:e},backend:n}),i=OK({inputs:{input:r},backend:n}),a=WY({inputs:{x:i},backend:n}),o=hW({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return rJ({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:n})}var qY={kernelName:uc,backendName:`webgl`,kernelFunc:KY};function JY(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r;if(t.length===1)return Jq({inputs:{input:t[0]},backend:n,attrs:{dim:i}});let a=t[0].shape,o=t[0].dtype;t.forEach(e=>{Pa(a,e.shape,`All tensors passed to stack must have matching shapes`),j(o===e.dtype,()=>`All tensors passed to stack must have matching dtypes`)});let s=[],c=MK({inputs:t.map(e=>{let t=Jq({inputs:{input:e},backend:n,attrs:{dim:i}});return s.push(t),t}),backend:n,attrs:{axis:i}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}var YY={kernelName:fc,backendName:`webgl`,kernelFunc:JY},XY=class{constructor(e,t,n){this.variableNames=[`x`],this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=HV(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r);if(r===1){this.userCode=`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${i} coords = outC - start;
          setOutput(getX(${s}));
        }
      }
    `}},ZY=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=HV(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=TU(`rc`,r),c=TU(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=[`${i} rc = outputLoc;`,`${s[r-1]} += 1;
       if(${l}) {
      `,r===1?``:`}
       rc = outputLoc;
       ${s[r-2]} += 1;
       if(${s[r-2]} < ${this.outputShape[r-2]}) {`,r===1?``:`  ${s[r-1]} += 1;
         if(${l}) {`],f=r===1?`rc < start || rc >= end`:`any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))`,p=``;for(let e=0,t=r===1?2:4;e<t;e++)p+=`
        ${d[e]}
        if (${f}) {
          result[${e}] = float(value);
        } else {
          ${i} source = rc - start;
          result[${e}] = getChannel(getX(${c.join()}), ${u});
        }
      `;p+=r===1?`} `:`}}`,this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}},QY=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,constantValue:o}=r;if(M(i.shape)===0)return rJ({backend:n,attrs:{shape:a.map((e,t)=>e[0]+i.shape[t]+e[1]),value:o,dtype:i.dtype}});let s=P().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new ZY(i.shape,a,o):new XY(i.shape,a,o),c=[[o]];return n.runWebGLProgram(s,[i],i.dtype,c)},$Y={kernelName:pc,backendName:`webgl`,kernelFunc:QY},eX={kernelName:`Pow`,backendName:`webgl`,kernelFunc:DW({opSnippet:`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,packedOpSnippet:`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+dW+`
  return result;
`})};function tX(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=[],l=Ua(a,i.shape),u=l,d=ih(u,s),f=i;d!=null&&(f=JW({inputs:{x:i},backend:n,attrs:{perm:d}}),u=oh(u.length,s),c.push(f)),rh(`prod`,u,s);let p;if(n.shouldExecuteOnCPU([f])){let e=n.texData.get(f.dataId).values,{outVals:t,outShape:r,outDtype:i}=eU(f.shape,f.dtype,e,u);p=n.makeTensorInfo(r,i,t)}else{let[e,t]=th(f.shape,u),r=M(t),a=$({inputs:{x:f},backend:n,attrs:{shape:[-1,r]}}),o=BW(a,Au(i.dtype),`prod`,n);p=$({inputs:{x:o},backend:n,attrs:{shape:e}}),c.push(a),c.push(o)}if(o){c.push(p);let e=nh(p.shape,l);p=$({inputs:{x:p},backend:n,attrs:{shape:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var nX={kernelName:hc,backendName:`webgl`,kernelFunc:tX};function rX(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:i,paramsDenseValues:a,indices:o}=t,{outputRaggedRank:s}=r,c=i.map(e=>n.readSync(e.dataId)),l=i.map(e=>e.shape),u=n.readSync(a.dataId),d=n.readSync(o.dataId),[f,p,m]=tU(c,l,u,a.shape,a.dtype,d,o.shape,s),h=f.map(e=>n.makeTensorInfo([e.length],`int32`,e)),g=n.makeTensorInfo(m,a.dtype,p);return h.concat([g])}var iX={kernelName:gc,backendName:`webgl`,kernelFunc:rX};function aX(e){let{inputs:t,backend:n}=e,{starts:r,limits:i,deltas:a}=t,o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=nU(o,r.shape,r.dtype,s,i.shape,c,a.shape);return[n.makeTensorInfo([l.length],`int32`,l),n.makeTensorInfo([u.length],r.dtype,u)]}var oX={kernelName:_c,backendName:`webgl`,kernelFunc:aX};function sX(e){let{inputs:t,backend:n,attrs:r}=e,{shape:i,values:a,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:c}=r,l=n.readSync(i.dataId),u=n.readSync(a.dataId),d=n.readSync(o.dataId),f=s.map(e=>n.readSync(e.dataId)),p=s.map(e=>e.shape),[m,h]=rU(l,i.shape,u,a.shape,a.dtype,d,o.shape,f,p,c);return n.makeTensorInfo(m,a.dtype,h)}var cX={kernelName:vc,backendName:`webgl`,kernelFunc:sX},lX=e=>{let{backend:t,attrs:n}=e,{start:r,stop:i,step:a,dtype:o}=n,s=iU(r,i,a,o);return t.makeTensorInfo([s.length],o,s)},uX={kernelName:yc,backendName:`webgl`,kernelFunc:lX},dX={kernelName:xc,backendName:`webgl`,kernelFunc:EW({opSnippet:`return 1.0 / x;`})},fX={kernelName:Sc,backendName:`webgl`,kernelFunc:EW({opSnippet:RU+`
  return (x < 0.0) ? 0.0 : x;
`,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`})},pX={kernelName:Oc,backendName:`webgl`,kernelFunc:EW({opSnippet:RU+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`})},mX=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}},hX=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}};function gX(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=P().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new hX(i.shape,c,l,a,o):new mX(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],`float32`)}var _X={kernelName:Ec,backendName:`webgl`,kernelFunc:gX},vX=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${i-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function yX(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new vX(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var bX={kernelName:Dc,backendName:`webgl`,kernelFunc:yX},xX=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}},SX=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}};function CX(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=P().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new SX(i.shape,c,l,a,o):new xX(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],i.dtype)}var wX={kernelName:wc,backendName:`webgl`,kernelFunc:CX},TX=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float sourceFracRow =
              float(${s[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${s[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${n} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${i}) - 1),
                ${n} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function EX(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new TX(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var DX={kernelName:Tc,backendName:`webgl`,kernelFunc:EX},OX=class{constructor(e,t){this.variableNames=[`x`];let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,n===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let r=n=>t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - coords[${n}] - 1`:`coords[${n}]`,i=e.map((e,t)=>r(t)).join(`,`),a=HV(n);this.userCode=`
      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${i}));
      }
    `}},kX=class{constructor(e,t){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0;let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);this.outputShape=e;let r=TU(`rc`,n),i=`${r[n-1]} + 1 < ${this.outputShape[n-1]}`,a=`${r[n-2]} + 1 < ${this.outputShape[n-2]}`,o=HV(n);n===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${i}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${o} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${s(r.slice())};
          if(${i}){
            result.g = ${c(r.slice())};
          }
          if(${a}) {
            result.b = ${l(r.slice())};
            if(${i}) {
              result.a = ${u(r.slice())};
            }
          }
          setOutput(result);
        }
    `;function s(e){return d(e)}function c(e){return e[n-1]=`(`+e[n-1]+` + 1)`,d(e)}function l(e){return e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function u(e){return e[n-1]=`(`+e[n-1]+` + 1)`,e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function d(t){let n=e.map((e,n)=>f(n,t));return`getChannel(getX(${n.join(`,`)}), vec2(${n.slice(-2).join(`,`)}))`}function f(n,r){return t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - ${r[n]} - 1`:`${r[n]}`}}};function AX(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dims:a}=r,o=i.shape.length,s=Ua(a,i.shape);if(o===0)return pW({inputs:{x:i},backend:n});let c=P().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new kX(i.shape,s):new OX(i.shape,s);return n.runWebGLProgram(c,[i],i.dtype)}var jX={kernelName:kc,backendName:`webgl`,kernelFunc:AX},MX=class{constructor(e,t){this.variableNames=[`Image`],this.outputShape=[],this.customUniforms=[{name:`params`,type:`vec4`}];let n=e[1],r=e[2];this.outputShape=e;let i=``;i=typeof t==`number`?`float outputValue = ${t.toFixed(2)};`:`
        vec3 fill = vec3(${t.join(`,`)});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${i}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${n}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}},NX={kernelName:hl,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:i,fillValue:a,center:o}=t,s=n,c=new MX(r.shape,a),[l,u]=px(o,r.shape[1],r.shape[2]),d=[[l,u,Math.sin(i),Math.cos(i)]];return s.runWebGLProgram(c,[r],r.dtype,d)}},PX={kernelName:Ac,backendName:`webgl`,kernelFunc:EW({opSnippet:`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`})},FX={kernelName:jc,backendName:`webgl`,kernelFunc:EW({opSnippet:`return inversesqrt(x);`,cpuKernelImpl:aU})},IX=class{constructor(e,t,n,r,i,a,o=!0,s=!1){this.variableNames=[`updates`,`indices`,`defaultValue`],this.outputShape=a;let c=HV(i.length),l=HV(a.length),u=``;n===1?u=`i`:n===2&&(u=`i, j`);let d=`getIndices(${u})`,f=``;r===1?f=`i`:r===2&&(f=`i, coords[1]`);let p=`getUpdates(${f})`,m=``;s&&(m=`coords[0], coords[1]`);let h=`getDefaultValue(${m})`,g=t>1?`strides[j]`:`strides`;this.userCode=`
        ${c} strides = ${c}(${i});

        void main() {
          ${l} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${g};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${p};
              found = true;
            }
          }
          setOutput(mix(${h}, sum, float(found)));
        }
      `}},LX=class{constructor(e,t,n,r,i,a,o=!0,s=!1){this.variableNames=[`updates`,`indices`,`defaultValue`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a;let c=HV(i.length),l=HV(a.length),u=``;n===1?u=`i`:n===2&&(u=`i, j`);let d=`getIndices(${u})`,f=``;r===1?f=`i`:r===2&&(f=`i, coords[1]`);let p=`getUpdates(${f})`,m=``;s&&(m=`coords[0], coords[1]`);let h=`getDefaultValue(${m})`,g=t>1?`strides[j]`:`strides`,_=t>1?`strides[j + 1]`:`strides`;this.userCode=`
        ${c} strides = ${c}(${i});

        void main() {
          ${l} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${d});
              flattenedIndex += index.xz * ${g};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${_};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${p};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${h}, sum, found));
        }
      `}};function RX(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i,updates:a}=t,{shape:o}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=Nv(a,i,o),f=[d/l,l];if(d===0)return n.makeTensorInfo(o,i.dtype);let p=$({inputs:{x:i},backend:n,attrs:{shape:[c,s]}}),m=$({inputs:{x:a},backend:n,attrs:{shape:[c,l]}}),h=n.makeTensorInfo([],`float32`,new Float32Array([0])),g;g=P().getBool(`WEBGL_PACK`)?new LX(c,s,p.shape.length,m.shape.length,u,f):new IX(c,s,p.shape.length,m.shape.length,u,f);let _=n.runWebGLProgram(g,[m,p,h],m.dtype),v=$({inputs:{x:_},backend:n,attrs:{shape:o}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(_),n.disposeIntermediateTensorInfo(h),v}var zX={kernelName:Mc,backendName:`webgl`,kernelFunc:RX},BX=class{constructor(e,t,n,r){this.variableNames=[`sortedSequence`,`values`],this.customUniforms=[{name:`numInputs`,type:`int`}],this.outputShape=[e,n];let i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=P().getNumber(`WEBGL_VERSION`)===2?`while (left < right) {`:i,o=r===`left`?`<`:`<=`;this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${o} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}};function VX(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:i,values:a}=t,{side:o}=r,s=new BX(i.shape[0],i.shape[1],a.shape[1],o),c=[[i.shape[1]]];return n.runWebGLProgram(s,[i,a],`int32`,c)}var HX={kernelName:Pc,backendName:`webgl`,kernelFunc:VX},UX=class{constructor(e,t,n){this.variableNames=[`c`,`a`,`b`],this.outputShape=t;let r,i;if(n>4)throw Error(`Where for rank ${n} is not yet supported`);if(n===1)i=`resRC`,r=`resRC`;else{let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],a=[],o=[];for(let r=0;r<t.length;r++)o.push(`${n[r]}`),r<e&&a.push(`${n[r]}`);r=a.join(),i=o.join()}let a=HV(n);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${i}));
        } else {
          setOutput(getB(${i}));
        }
      }
    `}};function WX(e){let{inputs:t,backend:n}=e,{condition:r,t:i,e:a}=t,o=new UX(r.shape.length,i.shape,i.shape.length);return n.runWebGLProgram(o,[r,i,a],ku(i.dtype,a.dtype))}var GX={kernelName:Fc,backendName:`webgl`,kernelFunc:WX},KX={kernelName:Ic,backendName:`webgl`,kernelFunc:EW({opSnippet:`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${yx};
  float scale = ${bx};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`})},qX={kernelName:Bc,backendName:`webgl`,kernelFunc:EW({opSnippet:TW+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:sU})},JX={kernelName:zc,backendName:`webgl`,kernelFunc:EW({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`})},YX={kernelName:`Sin`,backendName:`webgl`,kernelFunc:EW({opSnippet:TW+`
  return sin(x);
`,packedOpSnippet:`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${dW}
  return result;
`})},XX={kernelName:Rc,backendName:`webgl`,kernelFunc:EW({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`})},ZX={kernelName:Vc,backendName:`webgl`,kernelFunc:EW({opSnippet:`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`})},QX={kernelName:Uc,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,paddings:o}=r;j(i.shape.length<=4,()=>`spaceToBatchND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=[[0,0]];c.push(...o);for(let e=1+a.length;e<i.shape.length;++e)c.push([0,0]);let l=[],u=QY({inputs:{x:i},backend:n,attrs:{paddings:c,constantValue:0}}),d=mx(u.shape,a,s,!1),f=hx(d.length,a.length,!1),p=gx(u.shape,a,s,!1),m=$({inputs:{x:u},backend:n,attrs:{shape:d}}),h=JW({inputs:{x:m},backend:n,attrs:{perm:f}}),g=$({inputs:{x:h},backend:n,attrs:{shape:p}});return l.push(u),l.push(m),l.push(h),l.forEach(e=>n.disposeIntermediateTensorInfo(e)),g}};function $X(e){let{inputs:t,backend:n}=e,{indices:r,values:i,denseShape:a,defaultValue:o}=t;if(a.shape.length!==1)throw Error(`Dense shape must be a vector, saw:
         ${a.shape}`);if(r.shape.length!==2)throw Error(`Indices must be a matrix, saw:
         ${r.shape}`);if(i.shape.length!==1)throw Error(`Values must be a vector, saw:
         ${i.shape}`);if(o.shape.length!==0)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=n.readSync(r.dataId),c=n.readSync(i.dataId),l=n.readSync(a.dataId),u=n.readSync(o.dataId)[0],[d,f,p,m,h]=uU(s,r.shape,r.dtype,c,i.dtype,l,u);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],i.dtype,p),n.makeTensorInfo([m.length],`bool`,new Uint8Array(m.map(e=>Number(e)))),n.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}var eZ={kernelName:Kc,backendName:`webgl`,kernelFunc:$X};function tZ(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:i,newShape:a}=t;if(r.shape.length!==2)throw Error(`Input indices should be a matrix but received shape ${r.shape}`);if(i.shape.length!==1)throw Error(`Input shape should be a vector but received shape ${i.shape}`);if(a.shape.length!==1)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let o=Array.from(n.readSync(i.dataId)),s=n.readSync(r.dataId),c=Array.from(n.readSync(a.dataId)),[l,u,d]=dU(s,r.shape,r.dtype,o,c);return[n.makeTensorInfo(u,r.dtype,l),n.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}var nZ={kernelName:qc,backendName:`webgl`,kernelFunc:tZ};function rZ(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
              ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
              ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=fU(o,r.shape,r.dtype,s,c,!0);return n.makeTensorInfo(u,r.dtype,l)}var iZ={kernelName:Jc,backendName:`webgl`,kernelFunc:rZ};function aZ(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
             ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
             ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=fU(o,r.shape,r.dtype,s,c);return n.makeTensorInfo(u,r.dtype,l)}var oZ={kernelName:Yc,backendName:`webgl`,kernelFunc:aZ};function sZ(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:i,sparseValues:a,defaultValue:o}=t,{outputShape:s}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:f}=Nv(a,i,s);if(a.dtype===`string`){let e=oU(n.bufferSync(i),n.bufferSync(a),s,f,u,l,c,d,$l(n.readSync(o.dataId)[0]),!1);return n.makeTensorInfo(s,e.dtype,e.values)}let p=new IX(l,c,i.shape.length,a.shape.length,d,[f,1],!1),m=n.runWebGLProgram(p,[a,i,o],a.dtype),h=$({inputs:{x:m},backend:n,attrs:{shape:s}});return n.disposeIntermediateTensorInfo(m),h}var cZ={kernelName:Xc,backendName:`webgl`,kernelFunc:sZ};function lZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{numOrSizeSplits:a,axis:o}=r,s=Ua(o,i.shape)[0],c=Gx(i,a,s),l=i.shape.length,u=Array(l).fill(0),d=i.shape.slice();return c.map(e=>{let t=[...d];t[s]=e;let r=XG({inputs:{x:i},backend:n,attrs:{begin:u,size:t}});return u[s]+=e,r})}var uZ={kernelName:Wc,backendName:`webgl`,kernelFunc:lZ},dZ=`return sqrt(x);`,fZ={kernelName:Hc,backendName:`webgl`,kernelFunc:EW({opSnippet:dZ,packedOpSnippet:dZ,cpuKernelImpl:pU})},pZ={kernelName:Qc,backendName:`webgl`,kernelFunc:EW({opSnippet:`return x * x;`})},mZ=`return (a - b) * (a - b);`,hZ={kernelName:Zc,backendName:`webgl`,kernelFunc:DW({opSnippet:mZ,packedOpSnippet:mZ})};function gZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;if(i.dtype!==`string`)throw Error(`Input must be of datatype string`);let a=mU(lS(n.readSync(i.dataId)),`string`,r);return n.makeTensorInfo(i.shape,`string`,a)}var _Z={kernelName:$c,backendName:`webgl`,kernelFunc:gZ};function vZ({inputs:e,attrs:t,backend:n}){let{x:r}=e,i=RU+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,a=new LU(r.shape,i);return n.runWebGLProgram(a,[r],r.dtype)}var yZ={kernelName:pl,backendName:`webgl`,kernelFunc:vZ},bZ=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=n;let r=n.length,i=HV(n.length),a=HV(n.length),o=``;if(r===1)o=`coords * strides + begin`;else{let e=0;o=n.map((t,r)=>(e++,n.length===1?`coords * strides[${r}] + begin[${r}]`:`coords[${e-1}] * strides[${r}] + begin[${r}]`)).join(`,`)}this.userCode=`
      ${i} begin = ${i}(${e});
      ${i} strides = ${i}(${t});

      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}};function xZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,end:o,strides:s,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:f}=r,{finalShapeSparse:p,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:_,begin:v,end:y,strides:b}=$b(i.shape,a,o,s,c,l,u,d,f),x;if(h)x=$({inputs:{x:i},backend:n,attrs:{shape:m}});else if(g||_){j(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=Bb(v,y,b),t=XG({inputs:{x:i},backend:n,attrs:{begin:v,size:e}});x=$({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else if(n.shouldExecuteOnCPU([i])){let e=n.readSync(i.dataId),t=hU(p,gf(i.shape,i.dtype,e),b,v);x=n.makeTensorInfo(m,i.dtype,t.values)}else{let e=new bZ(v,b,p);x=n.runWebGLProgram(e,[i],i.dtype)}let S=$({inputs:{x},backend:n,attrs:{shape:m}});return n.disposeIntermediateTensorInfo(x),S}var SZ={kernelName:el,backendName:`webgl`,kernelFunc:xZ};function CZ(e){let{inputs:t,backend:n,attrs:r}=e,{separator:i,nGramWidths:a,leftPad:o,rightPad:s,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:d}=t,[f,p]=gU(n.readSync(u.dataId),n.readSync(d.dataId),i,a,o,s,c,l);return[n.makeTensorInfo([f.length],`string`,f),n.makeTensorInfo(d.shape,`int32`,p)]}var wZ={kernelName:tl,backendName:`webgl`,kernelFunc:CZ};function TZ(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:i}=r,{input:a,delimiter:o}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(a.shape.length!==1)throw Error(`Input must be a vector, got shape: ${a.shape}`);if(o.shape.length!==0)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let s=n.readSync(a.dataId),c=n.readSync(o.dataId)[0],[l,u,d]=_U(s,c,i),f=u.length;return[n.makeTensorInfo([f,2],`int32`,l),n.makeTensorInfo([f],`string`,u),n.makeTensorInfo([2],`int32`,new Int32Array(d))]}var EZ={kernelName:nl,backendName:`webgl`,kernelFunc:TZ};function DZ(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:i}=r,{input:a}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(i<=0)throw Error(`Number of buckets must be at least 1`);let o=vU(n.readSync(a.dataId),i);return n.makeTensorInfo(a.shape,`int32`,o)}var OZ={kernelName:rl,backendName:`webgl`,kernelFunc:DZ},kZ={kernelName:`Tan`,backendName:`webgl`,kernelFunc:EW({opSnippet:`return tan(x);`})},AZ={kernelName:il,backendName:`webgl`,kernelFunc:EW({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`})};function jZ(e){let{inputs:t,backend:n,attrs:r}=e,{tensor:i,indices:a,updates:o}=t,{}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=Nv(o,a,i.shape),f=[d/l,l];if(d===0)return n.makeTensorInfo(i.shape,a.dtype);let p=$({inputs:{x:a},backend:n,attrs:{shape:[c,s]}}),m=$({inputs:{x:o},backend:n,attrs:{shape:[c,l]}}),h=$({inputs:{x:i},backend:n,attrs:{shape:f}}),g=new IX(c,s,p.shape.length,m.shape.length,u,f,!1,!0),_=n.runWebGLProgram(g,[m,p,h],h.dtype),v=$({inputs:{x:_},backend:n,attrs:{shape:i.shape}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(_),v}var MZ={kernelName:Nc,backendName:`webgl`,kernelFunc:jZ},NZ=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;let r=HV(this.rank),i=PZ(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${i}));
      }
    `}};function PZ(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${e[0]})`;let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`],r=[];for(let t=0;t<e.length;t++)r.push(`imod(${n[t]}, ${e[t]})`);return r.join()}function FZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reps:a}=r;if(i.dtype===`string`||i.shape.length>5){let e=n.readSync(i.dataId),t=i.dtype===`string`?e.map(e=>$l(e)):e,r=bU(gf(i.shape,i.dtype,t),a);return n.makeTensorInfo(r.shape,r.dtype,r.values)}let o=new NZ(i.shape,a);return n.runWebGLProgram(o,[i],i.dtype)}var IZ={kernelName:al,backendName:`webgl`,kernelFunc:FZ},LZ=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`negativeInf`,type:`float`},{name:`dir`,type:`int`},{name:`inc`,type:`int`}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}},RZ=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`k`,type:`int`}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}};function zZ(e,t){t!==null&&e.disposeIntermediateTensorInfo(t)}function BZ(e){let t=1;for(;t<e;)t*=2;return t}function VZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{k:a,sorted:o}=r,s=P().getNumber(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`),c=P().getNumber(`TOPK_K_CPU_HANDOFF_THRESHOLD`),l=i.shape,u=l[l.length-1];if(n.shouldExecuteOnCPU([i])||u<s||a>c){let[e,t]=xU(n.readSync(i.dataId),l,i.dtype,a,o);return[n.makeTensorInfo(e.shape,e.dtype,e.values),n.makeTensorInfo(t.shape,t.dtype,t.values)]}if(a===0)return l[l.length-1]=0,[n.makeTensorInfo(l,i.dtype,[]),n.makeTensorInfo(l,`int32`,[])];if(u===1)return[i,rJ({attrs:{shape:l,dtype:`int32`,value:0},backend:n})];let d=n.texData.get(i.dataId),f=d!==null&&d.isPacked,p=f?n.unpackTensor(i):i,m=M(l)/u,h=$({inputs:{x:p},attrs:{shape:[m,u]},backend:n});f&&zZ(n,p);let g=BZ(a),_=BZ(u),v=null,y=()=>v===null?[h,h]:[h,v],b=(e,t,r)=>{let i=y(),a=new LZ(r),o=[[u],[+(v===null)],[-1/0],[e],[t]],s=v;v=n.runWebGLProgram(a,i,`int32`,o),zZ(n,s)};for(let e=1;e<g;e*=2){let t=e*2;for(let n=e;n>=1;n/=2)b(t,n,[m,_])}for(let e=_;e>g;e/=2){let t=y(),r=new RZ([m,e/2]),i=[[u],[+(v===null)],[g]],a=v;v=n.runWebGLProgram(r,t,`int32`,i),zZ(n,a);let o=g/2,s=o*2;for(let e=o;e>=1;e/=2)b(s,e,v.shape)}let x=v;v=XG({inputs:{x:v},backend:n,attrs:{begin:0,size:[m,a]}}),zZ(n,x);let S=TJ({inputs:{x:h,indices:v},backend:n,attrs:{axis:1,batchDims:1}});zZ(n,h);let C=l.slice(0,-1);C.push(a),x=v,v=$({inputs:{x:v},attrs:{shape:C},backend:n}),zZ(n,x);let w=S;return S=$({inputs:{x:S},attrs:{shape:C},backend:n}),zZ(n,w),[S,v]}var HZ={kernelName:ol,backendName:`webgl`,kernelFunc:VZ},UZ=class{constructor(e,t,n,r,i,a){this.variableNames=[`Image`,`Transforms`],this.outputShape=a;let o=n===`nearest`?1:2,s;switch(r){case`constant`:s=1;break;case`reflect`:s=2;break;case`wrap`:s=3;break;case`nearest`:s=4;break;default:s=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${s} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${i});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${i});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${o} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}};function WZ(e){let{inputs:t,backend:n,attrs:r}=e,{image:i,transforms:a}=t,{interpolation:o,fillMode:s,fillValue:c,outputShape:l}=r,[u,d,f,p]=i.shape,[m,h]=l??[d,f],g=new UZ(d,f,o,s,c,[u,m,h,p]);return n.runWebGLProgram(g,[i,a],`float32`)}var GZ={kernelName:sl,backendName:`webgl`,kernelFunc:WZ};function KZ(e){let{inputs:t,attrs:n,backend:r}=e,{axis:i}=n,{x:a}=t;GB(a,`unique`),console.warn(`WARNING: `,`UI might be locked temporarily as data is being downloaded`);let{outputValues:o,outputShape:s,indices:c}=CU(r.readSync(a.dataId),i,a.shape,a.dtype);return[r.makeTensorInfo(s,a.dtype,o),r.makeTensorInfo([c.length],`int32`,c)]}var qZ={kernelName:ll,backendName:`webgl`,kernelFunc:KZ};function JZ(e){let{inputs:t,backend:n,attrs:r}=e,{value:i}=t,{axis:a}=r;a<0&&(a+=i.shape.length);let o=i,s=o.shape.length,c=i.shape[a],l=Array(s-1),u=0;for(let e=0;e<s;e++)e!==a&&(l[u++]=o.shape[e]);let d=[],f=Array(s).fill(0),p=o.shape.slice();p[a]=1;let m=Array(c);for(let e=0;e<m.length;e++){f[a]=e;let t=XG({inputs:{x:o},backend:n,attrs:{begin:f,size:p}});m[e]=$({inputs:{x:t},backend:n,attrs:{shape:l}}),d.push(t)}return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}var YZ={kernelName:ul,backendName:`webgl`,kernelFunc:JZ},XZ=class{constructor(e,t){this.variableNames=[`x`,`segmentIds`];let n=e.windowSize,r=e.batchSize,i=e.inSize,a=e.numSegments,o=a*Math.ceil(i/n);this.outputShape=[r,o];let s=Math.floor(n/4)*4,c=n%4,l=`
        sumValue += dot(values, segFilter);
    `,u=``;i%n>0&&(u=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `);let d=``;i%n>0&&(d=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${d}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${a})) * float(${n}));
        int currentSeg = int(mod(float(outIdx), float(${a})));

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${l}
        }

        int inIdx = inOffset + ${s};
        if (${c===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${l}
        } else if (${c===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${l}
        } else if (${c===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${l}
        }
        setOutput(sumValue);
      }
    `}};function ZZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,segmentIds:a}=t,{numSegments:o}=r,s=i.shape.length,c=[],l=0,u=ih([l],s),d=i;u!=null&&(d=JW({inputs:{x:i},backend:n,attrs:{perm:u}}),c.push(d),l=oh(1,s)[0]);let f=oS(d.shape,l,o),p=M([d.shape[l]]),m=$({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}});c.push(m);let h=Au(i.dtype),g=(e,t,r,i,a)=>{let o=e.shape[0],s=e.shape[1],l=aS(s,a),u=new XZ({windowSize:l,inSize:s,batchSize:o,numSegments:a},t),d=n.compileAndRun(u,[e,r],i);if(c.push(d),d.shape[1]===a)return d;let f=lX({backend:n,attrs:{start:0,stop:a,step:1,dtype:`float32`}}),p=FZ({inputs:{x:f},backend:n,attrs:{reps:[s/l]}});return c.push(f),c.push(p),g(d,t,p,i,a)},_=$({inputs:{x:g(m,`unsortedSegmentSum`,a,h,o)},backend:n,attrs:{shape:f}}),v=_;if(u!=null){c.push(_);let e=ah(u);v=JW({inputs:{x:v},backend:n,attrs:{perm:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),v}var QZ=[QW,tG,nG,rG,aG,lG,dG,pG,bG,SG,CG,wG,TG,EG,DG,jG,NG,LG,zG,VG,WG,QG,eK,iK,oK,mK,gK,bK,gW,wK,NK,HK,JK,ZK,$K,tq,rq,iq,aq,sq,mq,gq,vq,xq,Tq,kq,jq,Pq,Lq,zq,Bq,Uq,Wq,Gq,qq,Yq,Zq,tJ,iJ,oJ,cJ,lJ,fJ,_J,yJ,SJ,EJ,DJ,OJ,mW,AJ,kK,jJ,MJ,NJ,bW,PJ,FJ,LJ,RJ,zJ,BJ,VJ,HJ,GJ,qJ,XJ,ZJ,$J,tY,aY,sY,lY,dY,pY,mY,_Y,vY,OY,PW,MY,FY,RY,VY,cK,UY,qY,YY,$Y,eX,wW,nX,iX,oX,cX,uX,uK,xY,dX,fX,pX,IW,_X,bX,wX,DX,jX,NX,PX,FX,zX,HX,GX,KX,qX,JX,YX,XX,ZG,EY,ZX,QX,eZ,nZ,iZ,oZ,cZ,uZ,fZ,pZ,hZ,_Z,yZ,SZ,wZ,EZ,OZ,wY,qW,kZ,AZ,MZ,IZ,HZ,GZ,YW,qZ,YZ,{kernelName:dl,backendName:`webgl`,kernelFunc:ZZ},GY];for(let e of QZ)El(e);var $Z=784,eQ=10,tQ=65e3,nQ=55e3,rQ=tQ-nQ,iQ=`https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png`,aQ=`https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8`,oQ=class{datasetImages=null;datasetLabels=null;trainIndices=null;testIndices=null;shuffledTrainIndex=0;shuffledTestIndex=0;async load(e){e?.(0);let t=new Image;t.crossOrigin=`anonymous`;let n=new Promise((e,n)=>{t.onload=()=>e(),t.onerror=()=>n(Error(`Failed to load MNIST images`)),t.src=iQ}),r=fetch(aQ),[,i]=await Promise.all([n,r]);e?.(30);let a=document.createElement(`canvas`);a.width=t.width,a.height=t.height;let o=a.getContext(`2d`),s=new ArrayBuffer(tQ*$Z*4),c=5e3;for(let n=0;n<tQ/c;n++){let r=new Float32Array(s,n*$Z*c*4,$Z*c);o.drawImage(t,0,n*c,t.width,c,0,0,t.width,c);let i=o.getImageData(0,0,a.width,c);for(let e=0;e<i.data.length/4;e++)r[e]=i.data[e*4]/255;e?.(30+Math.floor(n/(tQ/c)*50))}this.datasetImages=new Float32Array(s),this.datasetLabels=new Uint8Array(await i.arrayBuffer()),this.trainIndices=za(nQ),this.testIndices=za(rQ),e?.(100)}nextTrainBatch(e){return this.nextBatch(e,[this.datasetImages,this.datasetLabels],()=>(this.shuffledTrainIndex=(this.shuffledTrainIndex+1)%this.trainIndices.length,this.trainIndices[this.shuffledTrainIndex]))}nextTestBatch(e){return this.nextBatch(e,[this.datasetImages,this.datasetLabels],()=>(this.shuffledTestIndex=(this.shuffledTestIndex+1)%this.testIndices.length,this.testIndices[this.shuffledTestIndex]))}nextBatch(e,t,n){let r=new Float32Array(e*$Z),i=new Uint8Array(e*eQ);for(let a=0;a<e;a++){let e=n(),o=t[0].slice(e*$Z,e*$Z+$Z);r.set(o,a*$Z);let s=t[1].slice(e*eQ,e*eQ+eQ);i.set(s,a*eQ)}return{xs:kv(r,[e,$Z]),labels:kv(i,[e,eQ])}}},sQ=`indexeddb://mathgame-mnist-model-v3`,cQ=28,lQ=10,uQ=class{model=null;isReady=!1;async init(e){try{this.model=await KO(`/mathgame_gsap/model/mathgame-mnist.json`),this.isReady=!0,e?.(`Модель загружена`,100),console.log(`✅ Модель загружена из репозитория`);return}catch{console.log(`Готовая модель не найдена, пробуем IndexedDB...`)}try{this.model=await KO(sQ),this.isReady=!0,e?.(`Модель загружена`,100);return}catch{}e?.(`Загружаем датасет MNIST`,0);let t=new oQ;await t.load(t=>e?.(`Загружаем датасет MNIST`,t*.3)),e?.(`Создаём нейросеть`,30),this.model=this.buildModel(),e?.(`Обучение нейросети`,35),await this.train(t,t=>e?.(`Обучение нейросети`,35+t*.6)),e?.(`Сохраняем модель`,95),await this.model.save(sQ),e?.(`Готово!`,100),this.isReady=!0}buildModel(){let e=XO();return e.add(wj({inputShape:[cQ,cQ,1],kernelSize:3,filters:32,padding:`same`,activation:`relu`,kernelInitializer:`heNormal`})),e.add(Oj()),e.add(wj({kernelSize:3,filters:32,padding:`same`,activation:`relu`,kernelInitializer:`heNormal`})),e.add(Oj()),e.add(kj({poolSize:[2,2]})),e.add(Ej({rate:.25})),e.add(wj({kernelSize:3,filters:64,padding:`same`,activation:`relu`,kernelInitializer:`heNormal`})),e.add(Oj()),e.add(wj({kernelSize:3,filters:64,padding:`same`,activation:`relu`,kernelInitializer:`heNormal`})),e.add(Oj()),e.add(kj({poolSize:[2,2]})),e.add(Ej({rate:.25})),e.add(Dj()),e.add(Tj({units:256,activation:`relu`,kernelInitializer:`heNormal`})),e.add(Oj()),e.add(Ej({rate:.5})),e.add(Tj({units:lQ,activation:`softmax`,kernelInitializer:`heNormal`})),e.compile({optimizer:nx.adam(.001),loss:`categoricalCrossentropy`,metrics:[`accuracy`]}),e}async train(e,t){if(!this.model)throw Error(`Model not built`);let n=1e3;for(let n=0;n<800;n++){let r=e.nextTrainBatch(128),i=z(()=>{let e=r.xs.reshape([128,cQ,cQ,1]);return this.augment(e)});await this.model.fit(i,r.labels,{batchSize:128,epochs:1,verbose:0}),i.dispose(),r.xs.dispose(),r.labels.dispose(),t?.((n+1)/800*100),n%5==0&&await new Promise(e=>setTimeout(e,0))}let r=e.nextTestBatch(n),i=r.xs.reshape([n,cQ,cQ,1]),a=(await this.model.evaluate(i,r.labels)[1].data())[0];console.log(`Точность на тестовом наборе: ${(a*100).toFixed(2)}%`),i.dispose(),r.xs.dispose(),r.labels.dispose()}augment(e){return z(()=>{let t=e.shape[0],n=Math.floor(Math.random()*5)-2,r=Math.floor(Math.random()*5)-2,i=e_(e,[[0,0],[2,2],[2,2],[0,0]]).slice([0,2+r,2+n,0],[t,cQ,cQ,1]),a=.85+Math.random()*.3;return i.mul(a).clipByValue(0,1)})}predict(e){if(!this.model||!this.isReady)throw Error(`Recognizer not initialized`);return z(()=>{let t=Av(e,[1,cQ,cQ,1]),n=this.model.predict(t),r=Array.from(n.dataSync()),i=0,a=r[0];for(let e=1;e<r.length;e++)r[e]>a&&(a=r[e],i=e);return{digit:i,score:a,allScores:r}})}ready(){return this.isReady}},dQ=class{canvas;ctx;constructor(){this.canvas=document.createElement(`canvas`),this.canvas.width=28,this.canvas.height=28,this.ctx=this.canvas.getContext(`2d`,{willReadFrequently:!0})}process(e){let t=new XMLSerializer().serializeToString(e),n=new Blob([t],{type:`image/svg+xml;charset=utf-8`}),r=URL.createObjectURL(n),i=this.computeBoundingBox(e);return URL.revokeObjectURL(r),i?this.rasterize(e,i):new Float32Array(784)}computeBoundingBox(e){let t=e.querySelectorAll(`.drawn-path`);if(t.length===0)return null;let n=1/0,r=1/0,i=-1/0,a=-1/0;return t.forEach(e=>{let t=e.getBBox();n=Math.min(n,t.x),r=Math.min(r,t.y),i=Math.max(i,t.x+t.width),a=Math.max(a,t.y+t.height)}),isFinite(n)?{x:n,y:r,w:i-n,h:a-r}:null}rasterize(e,t){let n=20/Math.max(t.w,t.h),r=t.w*n,i=t.h*n,a=(28-r)/2,o=(28-i)/2;this.ctx.fillStyle=`black`,this.ctx.fillRect(0,0,28,28),this.ctx.strokeStyle=`white`,this.ctx.lineWidth=2,this.ctx.lineCap=`round`,this.ctx.lineJoin=`round`,e.querySelectorAll(`.drawn-path`).forEach(e=>{let r=e.getAttribute(`d`)??``;this.drawPathScaled(r,t,n,a,o)});let s=this.ctx.getImageData(0,0,28,28),c=new Float32Array(784);for(let e=0;e<784;e++)c[e]=s.data[e*4]/255;return c}drawPathScaled(e,t,n,r,i){this.ctx.beginPath();let a=(e,a)=>[(e-t.x)*n+r,(a-t.y)*n+i];(e.match(/[ML][^ML]+/g)??[]).forEach(e=>{let t=e[0],n=e.slice(1).trim().split(/[\s,]+/).map(Number),[r,i]=a(n[0],n[1]);t===`M`?this.ctx.moveTo(r,i):this.ctx.lineTo(r,i)}),this.ctx.stroke()}},fQ=class e{static recognizer=null;static preprocessor=null;static async initRecognizer(t){e.recognizer&&e.recognizer.ready()||(e.recognizer=new uQ,e.preprocessor=new dQ,await e.recognizer.init(t))}svg;currentPath=null;points=[];isDrawing=!1;correctAnswer=0;onRecognizedCb=null;container;constructor(e){this.container=e;let t=`http://www.w3.org/2000/svg`;this.svg=document.createElementNS(t,`svg`),this.svg.setAttribute(`viewBox`,`0 0 300 300`),this.svg.setAttribute(`xmlns`,t),this.svg.style.cssText=`width:100%;height:100%;display:block;touch-action:none;user-select:none;`;let n=document.createElementNS(t,`rect`);n.setAttribute(`width`,`300`),n.setAttribute(`height`,`300`),n.setAttribute(`fill`,`#fafaf8`),this.svg.appendChild(n);for(let e=1;e<3;e++){let n=document.createElementNS(t,`line`);n.setAttribute(`x1`,`0`),n.setAttribute(`y1`,String(e*100)),n.setAttribute(`x2`,`300`),n.setAttribute(`y2`,String(e*100)),n.setAttribute(`stroke`,`rgba(0,0,0,0.06)`),n.setAttribute(`stroke-width`,`1`),this.svg.appendChild(n);let r=document.createElementNS(t,`line`);r.setAttribute(`x1`,String(e*100)),r.setAttribute(`y1`,`0`),r.setAttribute(`x2`,String(e*100)),r.setAttribute(`y2`,`300`),r.setAttribute(`stroke`,`rgba(0,0,0,0.06)`),r.setAttribute(`stroke-width`,`1`),this.svg.appendChild(r)}e.appendChild(this.svg),this.bindEvents()}setCorrectAnswer(e){this.correctAnswer=e}onRecognized(e){this.onRecognizedCb=e}recognize(){if(this.points.length<8){this.onRecognizedCb?.({digit:-1,score:0,correct:!1});return}if(!e.recognizer||!e.preprocessor){console.error(`Recognizer not initialized`);return}let t=e.preprocessor.process(this.svg),n=e.recognizer.predict(t);console.log(`Neural prediction:`,n.allScores.map((e,t)=>`${t}:${(e*100).toFixed(1)}%`).join(` `)),console.log(`Best: ${n.digit} (${(n.score*100).toFixed(1)}%)`);let r=n.digit===this.correctAnswer&&n.score>.5;r?this.animateSuccess():this.animateFailure(),setTimeout(()=>{this.onRecognizedCb?.({digit:n.digit,score:n.score,correct:r})},r?400:500)}clear(){this.svg.querySelectorAll(`.drawn-path`).forEach(e=>e.remove()),this.points=[],this.currentPath=null,this.isDrawing=!1,ea.set(this.svg,{x:0,scale:1,clearProps:`all`})}destroy(){this.unbindEvents(),this.container.innerHTML=``}bindEvents(){this.svg.addEventListener(`mousedown`,this.onStart),this.svg.addEventListener(`mousemove`,this.onMove),this.svg.addEventListener(`mouseup`,this.onEnd),this.svg.addEventListener(`mouseleave`,this.onEnd),this.svg.addEventListener(`touchstart`,this.onTouchStart,{passive:!1}),this.svg.addEventListener(`touchmove`,this.onTouchMove,{passive:!1}),this.svg.addEventListener(`touchend`,this.onEnd)}unbindEvents(){this.svg.removeEventListener(`mousedown`,this.onStart),this.svg.removeEventListener(`mousemove`,this.onMove),this.svg.removeEventListener(`mouseup`,this.onEnd),this.svg.removeEventListener(`mouseleave`,this.onEnd),this.svg.removeEventListener(`touchstart`,this.onTouchStart),this.svg.removeEventListener(`touchmove`,this.onTouchMove),this.svg.removeEventListener(`touchend`,this.onEnd)}onStart=e=>{this.isDrawing=!0,this.startStroke(this.svgPoint(e.clientX,e.clientY))};onMove=e=>{this.isDrawing&&this.continueStroke(this.svgPoint(e.clientX,e.clientY))};onTouchStart=e=>{e.preventDefault(),this.isDrawing=!0,this.startStroke(this.svgPoint(e.touches[0].clientX,e.touches[0].clientY))};onTouchMove=e=>{e.preventDefault(),this.isDrawing&&this.continueStroke(this.svgPoint(e.touches[0].clientX,e.touches[0].clientY))};onEnd=()=>{this.isDrawing=!1,this.currentPath=null};startStroke(e){this.points.push(e),this.currentPath=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),this.currentPath.setAttribute(`class`,`drawn-path`),this.currentPath.setAttribute(`fill`,`none`),this.currentPath.setAttribute(`stroke`,`#1a1a2e`),this.currentPath.setAttribute(`stroke-width`,`6`),this.currentPath.setAttribute(`stroke-linecap`,`round`),this.currentPath.setAttribute(`stroke-linejoin`,`round`),this.currentPath.setAttribute(`d`,`M ${e.x} ${e.y}`),this.svg.appendChild(this.currentPath)}continueStroke(e){if(this.points.push(e),!this.currentPath)return;let t=this.currentPath.getAttribute(`d`)??``;this.currentPath.setAttribute(`d`,`${t} L ${e.x} ${e.y}`)}animateSuccess(){this.svg.querySelectorAll(`.drawn-path`).forEach(e=>{e.setAttribute(`stroke`,`#00c853`)}),la(this.svg)}animateFailure(){this.svg.querySelectorAll(`.drawn-path`).forEach(e=>{e.setAttribute(`stroke`,`#e53935`)}),ca(this.svg),setTimeout(()=>{this.points=[],this.svg.querySelectorAll(`.drawn-path`).forEach(e=>e.remove())},500)}svgPoint(e,t){let n=this.svg.getBoundingClientRect();return{x:(e-n.left)*(300/n.width),y:(t-n.top)*(300/n.height)}}},pQ=[`#FFD93D`,`#FF6B9D`,`#FF8C69`,`#C3B1E1`],mQ=[`#8a5c00`,`#8a1040`,`#a03010`,`#5a3e8a`],hQ=[`Правильно!`,`Да!`,`Отлично!`,`Супер!`,`Молодец!`],gQ=[`Почти!`,`Близко!`,`Попробуй ещё!`,`Хорошая попытка!`],_Q=10,vQ=class{menuScreen=yQ(`#menu-screen`);gameScreen=yQ(`#game-screen`);completeScreen=yQ(`#complete-screen`);bgSvg=yQ(`#bg-svg`);objSvg=yQ(`#obj-svg`);morphSvg=yQ(`#morph-svg`);questionCard=yQ(`.card`);qText=yQ(`#q-text`);scoreEl=yQ(`#score-val`);qNumEl=yQ(`#q-num`);feedback=yQ(`#feedback`);nextBtn=yQ(`#next-btn`);answersWrap=yQ(`#answers`);drawWrap=yQ(`#draw-wrap`);drawCheckBtn=yQ(`#draw-check-btn`);drawClearBtn=yQ(`#draw-clear-btn`);finalTxt=yQ(`#final-txt`);timerTrack=yQ(`#timer-track`);timerBar=yQ(`#timer-bar`);mouseTracker=new ta;scrollTransition;timer;questionGen;morpher;drawingPad=null;state={phase:`menu`,score:0,questionIndex:0,totalQuestions:_Q,answered:!1,difficulty:`easy`};currentAnswer=0;morphLoopActive=!1;constructor(){new na(this.bgSvg,this.mouseTracker),new ra,this.scrollTransition=new _a(this.questionCard),this.timer=new ya(this.timerBar),this.questionGen=new y(this.objSvg),this.morpher=new Ca(this.morphSvg),this.buildStars(),pa(yQ(`.title`)),ma(this.morphSvg),ha(yQ(`.scroll-hint`)),this.bindMenuEvents(),this.bindGameEvents(),this.startMenuMorphLoop()}async startMenuMorphLoop(){for(this.morphLoopActive=!0;this.morphLoopActive;)await this.morpher.morphToRandom(),await xQ(1200)}stopMenuMorphLoop(){this.morphLoopActive=!1}bindMenuEvents(){document.querySelectorAll(`.diff-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.diff;this.startGame(t)}),e.addEventListener(`mouseenter`,()=>{ea.to(e,{scale:1.08,rotation:-2,duration:.2,ease:`back.out(2)`})}),e.addEventListener(`mouseleave`,()=>{ea.to(e,{scale:1,rotation:0,duration:.2,ease:`power2.out`})})})}async startGame(e){this.stopMenuMorphLoop(),e===`drawing`&&await this.ensureRecognizerReady(),this.state={phase:`playing`,score:0,questionIndex:0,totalQuestions:_Q,answered:!1,difficulty:e},this.scrollTransition.enabled=!0,this.menuScreen.classList.add(`hidden`),this.gameScreen.classList.remove(`hidden`),this.completeScreen.classList.add(`hidden`),this.loadQuestion()}async ensureRecognizerReady(){let e=yQ(`#loading-overlay`),t=yQ(`#loading-stage`),n=yQ(`#loading-pct`),r=yQ(`#loading-bar`),i=yQ(`.loading-brain`);e.classList.remove(`hidden`);let a=ea.to(i,{scale:1.06,duration:1,yoyo:!0,repeat:-1,ease:`sine.inOut`,transformOrigin:`center center`});await fQ.initRecognizer((e,i)=>{t.textContent=e,n.textContent=`${Math.round(i)}%`,ea.to(r,{width:`${i}%`,duration:.3,ease:`power2.out`})}),await new Promise(e=>setTimeout(e,400)),a.kill(),ea.set(i,{clearProps:`all`}),e.classList.add(`hidden`)}bindGameEvents(){this.nextBtn.addEventListener(`click`,()=>this.advanceQuestion()),this.scrollTransition.onNext(()=>{this.state.answered&&this.advanceQuestion()}),this.drawCheckBtn.addEventListener(`click`,()=>{this.drawingPad?.recognize()}),this.drawClearBtn.addEventListener(`click`,()=>{this.drawingPad?.clear()})}loadQuestion(){this.state.answered=!1,this.feedback.textContent=``,this.feedback.className=`feedback`,this.nextBtn.style.display=`none`,this.answersWrap.innerHTML=``;let e=v[this.state.difficulty],t=this.questionGen.generate(this.state.questionIndex,this.state.difficulty);this.currentAnswer=t.answer,this.qText.textContent=t.text,this.qNumEl.textContent=String(this.state.questionIndex+1),this.scoreEl.textContent=String(this.state.score),e.drawingMode?this.showDrawingMode():(this.showButtonMode(),this.buildAnswerButtons(t.answer)),e.timeLimit?(this.timerTrack.style.display=`block`,this.timer.start(e.timeLimit,()=>this.onTimeUp())):this.timerTrack.style.display=`none`,this.morpher.morphToRandom(),aa(this.objSvg),ia(this.objSvg)}showDrawingMode(){this.answersWrap.style.display=`none`,this.drawWrap.style.display=`flex`,this.drawingPad&&this.drawingPad.destroy();let e=yQ(`#drawing-pad-container`);e.innerHTML=``,this.drawingPad=new fQ(e),this.drawingPad.setCorrectAnswer(this.currentAnswer),this.drawingPad.onRecognized(({digit:e,score:t,correct:n})=>{if(!this.state.answered)if(n)this.state.answered=!0,this.state.score++,this.scoreEl.textContent=String(this.state.score),this.feedback.textContent=hQ[bQ(0,hQ.length-1)],this.feedback.className=`feedback correct`,va(),this.nextBtn.style.display=`inline-block`;else{let n=Math.round(t*100);this.feedback.textContent=e>=0?`Похоже на ${e} (${n}%) — попробуй ещё!`:`Не разобрать — нарисуй чище!`,this.feedback.className=`feedback wrong`}})}showButtonMode(){this.answersWrap.style.display=`flex`,this.drawWrap.style.display=`none`,this.drawingPad&&=(this.drawingPad.destroy(),null)}buildAnswerButtons(e){b(e).forEach((t,n)=>{let r=document.createElement(`button`);r.className=`ans-btn`,r.dataset.v=String(t);let i=pQ[n],a=mQ[n];r.innerHTML=`<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="82" height="82" rx="20" fill="${i}" stroke="${a}" stroke-width="3"/>
        <rect x="10" y="9" width="30" height="14" rx="7" fill="rgba(255,255,255,.32)"/>
        <text x="45" y="56" text-anchor="middle" dominant-baseline="middle"
          font-family="Fredoka One,cursive" font-size="44" fill="${a}">${t}</text>
      </svg>`,r.addEventListener(`mouseenter`,()=>da(r,i)),r.addEventListener(`mouseleave`,()=>fa(r)),r.addEventListener(`click`,()=>this.onAnswer(t,e,r)),this.answersWrap.appendChild(r)})}onAnswer(e,t,n){this.state.answered||(this.state.answered=!0,this.timer.stop(),e===t?(this.state.score++,this.scoreEl.textContent=String(this.state.score),this.feedback.textContent=hQ[bQ(0,hQ.length-1)],this.feedback.className=`feedback correct`,va()):(this.feedback.textContent=gQ[bQ(0,gQ.length-1)],this.feedback.className=`feedback wrong`,this.highlightCorrect(t)),this.nextBtn.style.display=`inline-block`)}onTimeUp(){this.state.answered||(this.state.answered=!0,this.feedback.textContent=`Время вышло!`,this.feedback.className=`feedback wrong`,this.highlightCorrect(this.currentAnswer),this.nextBtn.style.display=`inline-block`)}highlightCorrect(e){document.querySelectorAll(`.ans-btn`).forEach(t=>{if(Number(t.dataset.v)===e){let e=t.querySelector(`rect`),n=t.querySelector(`text`),r=t.querySelector(`svg`);e.setAttribute(`fill`,`#00e676`),e.setAttribute(`stroke`,`#ffffff`),e.setAttribute(`stroke-width`,`5`),n.setAttribute(`fill`,`#004d20`),r.style.filter=`drop-shadow(0 0 10px #00e676) drop-shadow(0 0 20px #00e676)`,sa(r)}})}async advanceQuestion(){if(this.state.questionIndex++,this.state.questionIndex>=_Q){this.showComplete();return}await this.scrollTransition.transition(()=>this.loadQuestion())}showComplete(){this.state.phase=`complete`,this.scrollTransition.enabled=!1,this.timer.hide(),this.showButtonMode(),this.gameScreen.classList.add(`hidden`),this.completeScreen.classList.remove(`hidden`),ga(yQ(`.complete-title`)),this.finalTxt.textContent=`Правильно: ${this.state.score} из ${_Q}!`,yQ(`#restart-btn`).onclick=()=>this.startGame(this.state.difficulty),yQ(`#newgame-btn`).onclick=()=>{this.completeScreen.classList.add(`hidden`),this.menuScreen.classList.remove(`hidden`),this.startMenuMorphLoop()}}buildStars(){let e=`http://www.w3.org/2000/svg`,t=this.bgSvg.querySelector(`#star-g`);for(let n=0;n<90;n++){let n=document.createElementNS(e,`circle`);n.setAttribute(`cx`,String(Math.random()*1e3)),n.setAttribute(`cy`,String(Math.random()*700)),n.setAttribute(`r`,String(Math.random()*2+.4)),n.setAttribute(`fill`,`white`);let r=document.createElementNS(e,`animate`);r.setAttribute(`attributeName`,`opacity`),r.setAttribute(`values`,`1;0.05;1`),r.setAttribute(`dur`,`${(Math.random()*3+1.5).toFixed(1)}s`),r.setAttribute(`begin`,`${(Math.random()*4).toFixed(1)}s`),r.setAttribute(`repeatCount`,`indefinite`),n.appendChild(r),t.appendChild(n)}}};function yQ(e){let t=document.querySelector(e);if(!t)throw Error(`Not found: ${e}`);return t}function bQ(e,t){return Math.floor(Math.random()*(t-e+1))+e}function xQ(e){return new Promise(t=>setTimeout(t,e))}document.addEventListener(`DOMContentLoaded`,()=>{new vQ});