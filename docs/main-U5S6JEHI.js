var lS=Object.defineProperty,uS=Object.defineProperties;var dS=Object.getOwnPropertyDescriptors;var Bg=Object.getOwnPropertySymbols;var fS=Object.prototype.hasOwnProperty,hS=Object.prototype.propertyIsEnumerable;var Vg=(n,e,t)=>e in n?lS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ye=(n,e)=>{for(var t in e||={})fS.call(e,t)&&Vg(n,t,e[t]);if(Bg)for(var t of Bg(e))hS.call(e,t)&&Vg(n,t,e[t]);return n},Et=(n,e)=>uS(n,dS(e));var Qa=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var Ku=null;var Zu=1,Hg=Symbol("SIGNAL");function mt(n){let e=Ku;return Ku=n,e}function zg(){return Ku}var Ju={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function pS(n){if(!(id(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Zu)){if(!n.producerMustRecompute(n)&&!ed(n)){n.dirty=!1,n.lastCleanEpoch=Zu;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Zu}}function Qu(n){return n&&(n.nextProducerIndex=0),mt(n)}function Gg(n,e){if(mt(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(id(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)nd(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function ed(n){rd(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(pS(t),i!==t.version))return!0}return!1}function td(n){if(rd(n),id(n))for(let e=0;e<n.producerNode.length;e++)nd(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function nd(n,e){if(mS(n),n.liveConsumerNode.length===1&&gS(n))for(let i=0;i<n.producerNode.length;i++)nd(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];rd(r),r.producerIndexOfThis[i]=e}}function id(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function rd(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function mS(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function gS(n){return n.producerNode!==void 0}function vS(){throw new Error}var yS=vS;function jg(n){yS=n}function Oe(n){return typeof n=="function"}function ls(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ec=ls(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Fo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var It=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Oe(i))try{i()}catch(s){e=s instanceof ec?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Wg(s)}catch(o){e=e??[],o instanceof ec?e=[...e,...o.errors]:e.push(o)}}if(e)throw new ec(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Wg(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Fo(t,e)}remove(e){let{_finalizers:t}=this;t&&Fo(t,e),e instanceof n&&e._removeParent(this)}};It.EMPTY=(()=>{let n=new It;return n.closed=!0,n})();var sd=It.EMPTY;function tc(n){return n instanceof It||n&&"closed"in n&&Oe(n.remove)&&Oe(n.add)&&Oe(n.unsubscribe)}function Wg(n){Oe(n)?n():n.unsubscribe()}var Hn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var us={setTimeout(n,e,...t){let{delegate:i}=us;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=us;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function nc(n){us.setTimeout(()=>{let{onUnhandledError:e}=Hn;if(e)e(n);else throw n})}function Uo(){}var $g=od("C",void 0,void 0);function qg(n){return od("E",void 0,n)}function Xg(n){return od("N",n,void 0)}function od(n,e,t){return{kind:n,value:e,error:t}}var Mr=null;function ds(n){if(Hn.useDeprecatedSynchronousErrorHandling){let e=!Mr;if(e&&(Mr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Mr;if(Mr=null,t)throw i}}else n()}function Yg(n){Hn.useDeprecatedSynchronousErrorHandling&&Mr&&(Mr.errorThrown=!0,Mr.error=n)}var Sr=class extends It{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,tc(e)&&e.add(this)):this.destination=MS}static create(e,t,i){return new fs(e,t,i)}next(e){this.isStopped?cd(Xg(e),this):this._next(e)}error(e){this.isStopped?cd(qg(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?cd($g,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},_S=Function.prototype.bind;function ad(n,e){return _S.call(n,e)}var ld=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){ic(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){ic(i)}else ic(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){ic(t)}}},fs=class extends Sr{constructor(e,t,i){super();let r;if(Oe(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Hn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&ad(e.next,s),error:e.error&&ad(e.error,s),complete:e.complete&&ad(e.complete,s)}):r=e}this.destination=new ld(r)}};function ic(n){Hn.useDeprecatedSynchronousErrorHandling?Yg(n):nc(n)}function xS(n){throw n}function cd(n,e){let{onStoppedNotification:t}=Hn;t&&us.setTimeout(()=>t(n,e))}var MS={closed:!0,next:Uo,error:xS,complete:Uo};var hs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function gn(n){return n}function ud(...n){return dd(n)}function dd(n){return n.length===0?gn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var _t=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=wS(t)?t:new fs(t,i,r);return ds(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Zg(i),new i((r,s)=>{let o=new fs({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[hs](){return this}pipe(...t){return dd(t)(this)}toPromise(t){return t=Zg(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Zg(n){var e;return(e=n??Hn.Promise)!==null&&e!==void 0?e:Promise}function SS(n){return n&&Oe(n.next)&&Oe(n.error)&&Oe(n.complete)}function wS(n){return n&&n instanceof Sr||SS(n)&&tc(n)}function fd(n){return Oe(n?.lift)}function Qe(n){return e=>{if(fd(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function et(n,e,t,i,r){return new hd(n,e,t,i,r)}var hd=class extends Sr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function ps(){return Qe((n,e)=>{let t=null;n._refCount++;let i=et(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var ms=class extends _t{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,fd(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new It;let t=this.getSubject();e.add(this.source.subscribe(et(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=It.EMPTY)}return e}refCount(){return ps()(this)}};var Kg=ls(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var nn=(()=>{class n extends _t{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new rc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Kg}next(t){ds(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){ds(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){ds(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?sd:(this.currentObservers=null,s.push(t),new It(()=>{this.currentObservers=null,Fo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new _t;return t.source=this,t}}return n.create=(e,t)=>new rc(e,t),n})(),rc=class extends nn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:sd}};var jt=class extends nn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var vn=new _t(n=>n.complete());function Jg(n){return n&&Oe(n.schedule)}function Qg(n){return n[n.length-1]}function ev(n){return Oe(Qg(n))?n.pop():void 0}function Wi(n){return Jg(Qg(n))?n.pop():void 0}function nv(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function tv(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function wr(n){return this instanceof wr?(this.v=n,this):new wr(n)}function iv(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(v){return new Promise(function(p,m){s.push([h,v,p,m])>1||c(h,v)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(v){f(s[0][3],v)}}function l(h){h.value instanceof wr?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function rv(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof tv=="function"?tv(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var sc=n=>n&&typeof n.length=="number"&&typeof n!="function";function oc(n){return Oe(n?.then)}function ac(n){return Oe(n[hs])}function cc(n){return Symbol.asyncIterator&&Oe(n?.[Symbol.asyncIterator])}function lc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function bS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var uc=bS();function dc(n){return Oe(n?.[uc])}function fc(n){return iv(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield wr(t.read());if(r)return yield wr(void 0);yield yield wr(i)}}finally{t.releaseLock()}})}function hc(n){return Oe(n?.getReader)}function Bt(n){if(n instanceof _t)return n;if(n!=null){if(ac(n))return ES(n);if(sc(n))return TS(n);if(oc(n))return AS(n);if(cc(n))return sv(n);if(dc(n))return CS(n);if(hc(n))return DS(n)}throw lc(n)}function ES(n){return new _t(e=>{let t=n[hs]();if(Oe(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function TS(n){return new _t(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function AS(n){return new _t(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,nc)})}function CS(n){return new _t(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function sv(n){return new _t(e=>{IS(n,e).catch(t=>e.error(t))})}function DS(n){return sv(fc(n))}function IS(n,e){var t,i,r,s;return nv(this,void 0,void 0,function*(){try{for(t=rv(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function ln(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function pc(n,e=0){return Qe((t,i)=>{t.subscribe(et(i,r=>ln(i,n,()=>i.next(r),e),()=>ln(i,n,()=>i.complete(),e),r=>ln(i,n,()=>i.error(r),e)))})}function mc(n,e=0){return Qe((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function ov(n,e){return Bt(n).pipe(mc(e),pc(e))}function av(n,e){return Bt(n).pipe(mc(e),pc(e))}function cv(n,e){return new _t(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function lv(n,e){return new _t(t=>{let i;return ln(t,e,()=>{i=n[uc](),ln(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Oe(i?.return)&&i.return()})}function gc(n,e){if(!n)throw new Error("Iterable cannot be null");return new _t(t=>{ln(t,e,()=>{let i=n[Symbol.asyncIterator]();ln(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function uv(n,e){return gc(fc(n),e)}function dv(n,e){if(n!=null){if(ac(n))return ov(n,e);if(sc(n))return cv(n,e);if(oc(n))return av(n,e);if(cc(n))return gc(n,e);if(dc(n))return lv(n,e);if(hc(n))return uv(n,e)}throw lc(n)}function Pt(n,e){return e?dv(n,e):Bt(n)}function Be(...n){let e=Wi(n);return Pt(n,e)}function gs(n,e){let t=Oe(n)?n:()=>n,i=r=>r.error(t());return new _t(e?r=>e.schedule(i,0,r):i)}function pd(n){return!!n&&(n instanceof _t||Oe(n.lift)&&Oe(n.subscribe))}var vi=ls(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Ye(n,e){return Qe((t,i)=>{let r=0;t.subscribe(et(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:RS}=Array;function NS(n,e){return RS(e)?n(...e):n(e)}function fv(n){return Ye(e=>NS(n,e))}var{isArray:PS}=Array,{getPrototypeOf:LS,prototype:OS,keys:FS}=Object;function hv(n){if(n.length===1){let e=n[0];if(PS(e))return{args:e,keys:null};if(US(e)){let t=FS(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function US(n){return n&&typeof n=="object"&&LS(n)===OS}function pv(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function vc(...n){let e=Wi(n),t=ev(n),{args:i,keys:r}=hv(n);if(i.length===0)return Pt([],e);let s=new _t(kS(i,e,r?o=>pv(r,o):gn));return t?s.pipe(fv(t)):s}function kS(n,e,t=gn){return i=>{mv(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)mv(e,()=>{let l=Pt(n[c],e),u=!1;l.subscribe(et(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function mv(n,e,t){n?ln(t,n,e):e()}function gv(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let p=!1;Bt(t(v,u++)).subscribe(et(e,m=>{r?.(m),s?h(m):e.next(m)},()=>{p=!0},void 0,()=>{if(p)try{for(l--;c.length&&l<i;){let m=c.shift();o?ln(e,o,()=>g(m)):g(m)}f()}catch(m){e.error(m)}}))};return n.subscribe(et(e,h,()=>{d=!0,f()})),()=>{a?.()}}function Lt(n,e,t=1/0){return Oe(e)?Lt((i,r)=>Ye((s,o)=>e(i,s,r,o))(Bt(n(i,r))),t):(typeof e=="number"&&(t=e),Qe((i,r)=>gv(i,r,n,t)))}function md(n=1/0){return Lt(gn,n)}function vv(){return md(1)}function vs(...n){return vv()(Pt(n,Wi(n)))}function yc(n){return new _t(e=>{Bt(n()).subscribe(e)})}function zn(n,e){return Qe((t,i)=>{let r=0;t.subscribe(et(i,s=>n.call(e,s,r++)&&i.next(s)))})}function $i(n){return Qe((e,t)=>{let i=null,r=!1,s;i=e.subscribe(et(t,void 0,void 0,o=>{s=Bt(n(o,$i(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function yv(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(et(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function ys(n,e){return Oe(e)?Lt(n,e,1):Lt(n,1)}function qi(n){return Qe((e,t)=>{let i=!1;e.subscribe(et(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function yi(n){return n<=0?()=>vn:Qe((e,t)=>{let i=0;e.subscribe(et(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function gd(n){return Ye(()=>n)}function _c(n=BS){return Qe((e,t)=>{let i=!1;e.subscribe(et(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function BS(){return new vi}function ko(n){return Qe((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function ri(n,e){let t=arguments.length>=2;return i=>i.pipe(n?zn((r,s)=>n(r,s,i)):gn,yi(1),t?qi(e):_c(()=>new vi))}function _s(n){return n<=0?()=>vn:Qe((e,t)=>{let i=[];e.subscribe(et(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function vd(n,e){let t=arguments.length>=2;return i=>i.pipe(n?zn((r,s)=>n(r,s,i)):gn,_s(1),t?qi(e):_c(()=>new vi))}function yd(n,e){return Qe(yv(n,e,arguments.length>=2,!0))}function _d(...n){let e=Wi(n);return Qe((t,i)=>{(e?vs(n,t,e):vs(n,t)).subscribe(i)})}function Gn(n,e){return Qe((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(et(i,c=>{r?.unsubscribe();let l=0,u=s++;Bt(n(c,u)).subscribe(r=et(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function xd(n){return Qe((e,t)=>{Bt(n).subscribe(et(t,()=>t.complete(),Uo)),!t.closed&&e.subscribe(t)})}function Wt(n,e,t){let i=Oe(n)||e||t?{next:n,error:e,complete:t}:n;return i?Qe((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(et(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):gn}var De=class extends Error{constructor(e,t){super(xf(e,t)),this.code=e}};function xf(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function Mf(n){return{toString:n}.toString()}function xt(n){for(let e in n)if(n[e]===xt)return e;throw Error("Could not find renamed property on target object.")}function yn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(yn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function _v(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var VS=xt({__forward_ref__:xt});function Qv(n){return n.__forward_ref__=Qv,n.toString=function(){return yn(this())},n}function rn(n){return ey(n)?n():n}function ey(n){return typeof n=="function"&&n.hasOwnProperty(VS)&&n.__forward_ref__===Qv}function Fe(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Wc(n){return xv(n,ny)||xv(n,iy)}function ty(n){return Wc(n)!==null}function xv(n,e){return n.hasOwnProperty(e)?n[e]:null}function HS(n){let e=n&&(n[ny]||n[iy]);return e||null}function Mv(n){return n&&(n.hasOwnProperty(Sv)||n.hasOwnProperty(zS))?n[Sv]:null}var ny=xt({\u0275prov:xt}),Sv=xt({\u0275inj:xt}),iy=xt({ngInjectableDef:xt}),zS=xt({ngInjectorDef:xt}),Ge=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Fe({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function ry(n){return n&&!!n.\u0275providers}var GS=xt({\u0275cmp:xt}),jS=xt({\u0275dir:xt}),WS=xt({\u0275pipe:xt}),$S=xt({\u0275mod:xt}),Ac=xt({\u0275fac:xt}),Ho=xt({__NG_ELEMENT_ID__:xt}),wv=xt({__NG_ENV_ID__:xt});function qS(n){return typeof n=="string"?n:n==null?"":String(n)}function XS(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():qS(n)}function YS(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new De(-200,n)}function Sf(n,e){throw new De(-201,!1)}var $e=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}($e||{}),Rd;function sy(){return Rd}function An(n){let e=Rd;return Rd=n,e}function oy(n,e,t){let i=Wc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&$e.Optional)return null;if(e!==void 0)return e;Sf(n,"Injector")}var ZS={},zo=ZS,KS="__NG_DI_FLAG__",Cc="ngTempTokenPath",JS="ngTokenPath",QS=/\n/gm,ew="\u0275",bv="__source",ws;function tw(){return ws}function Xi(n){let e=ws;return ws=n,e}function nw(n,e=$e.Default){if(ws===void 0)throw new De(-203,!1);return ws===null?oy(n,void 0,e):ws.get(n,e&$e.Optional?null:void 0,e)}function Ze(n,e=$e.Default){return(sy()||nw)(rn(n),e)}function ie(n,e=$e.Default){return Ze(n,$c(e))}function $c(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Nd(n){let e=[];for(let t=0;t<n.length;t++){let i=rn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new De(900,!1);let r,s=$e.Default;for(let o=0;o<i.length;o++){let a=i[o],c=iw(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Ze(r,s))}else e.push(Ze(i))}return e}function iw(n){return n[KS]}function rw(n,e,t,i){let r=n[Cc];throw e[bv]&&r.unshift(e[bv]),n.message=sw(`
`+n.message,r,t,i),n[JS]=r,n[Cc]=null,n}function sw(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==ew?n.slice(2):n;let r=yn(e);if(Array.isArray(e))r=e.map(yn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):yn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(QS,`
  `)}`}function Es(n,e){let t=n.hasOwnProperty(Ac);return t?n[Ac]:null}function ow(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function aw(n){return n.flat(Number.POSITIVE_INFINITY)}function wf(n,e){n.forEach(t=>Array.isArray(t)?wf(t,e):e(t))}function ay(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Dc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var Go={},Ts=[],As=new Ge(""),cy=new Ge("",-1),ly=new Ge(""),Ic=class{get(e,t=zo){if(t===zo){let i=new Error(`NullInjectorError: No provider for ${yn(e)}!`);throw i.name="NullInjectorError",i}return t}},uy=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(uy||{}),oi=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(oi||{}),Ki=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Ki||{});function cw(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function Pd(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];uw(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function lw(n){return n===3||n===4||n===6}function uw(n){return n.charCodeAt(0)===64}function bf(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Ev(n,t,r,null,e[++i]):Ev(n,t,r,null,null))}}return n}function Ev(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var dy="ng-template";function dw(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&cw(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Ef(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Ef(n){return n.type===4&&n.value!==dy}function fw(n,e,t){let i=n.type===4&&!t?dy:n.value;return e===i}function hw(n,e,t){let i=4,r=n.attrs,s=r!==null?gw(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!jn(i)&&!jn(c))return!1;if(o&&jn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!fw(n,c,t)||c===""&&e.length===1){if(jn(i))return!1;o=!0}}else if(i&8){if(r===null||!dw(n,r,c,t)){if(jn(i))return!1;o=!0}}else{let l=e[++a],u=pw(c,r,Ef(n),t);if(u===-1){if(jn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(jn(i))return!1;o=!0}}}}return jn(i)||o}function jn(n){return(n&1)===0}function pw(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return vw(e,n)}function mw(n,e,t=!1){for(let i=0;i<e.length;i++)if(hw(n,e[i],t))return!0;return!1}function gw(n){for(let e=0;e<n.length;e++){let t=n[e];if(lw(t))return e}return n.length}function vw(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Tv(n,e){return n?":not("+e.trim()+")":e}function yw(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!jn(o)&&(e+=Tv(s,r),r=""),i=o,s=s||!jn(i);t++}return r!==""&&(e+=Tv(s,r)),e}function _w(n){return n.map(yw).join(",")}function xw(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!jn(r))break;r=s}i++}return{attrs:e,classes:t}}function tr(n){return Mf(()=>{let e=gy(n),t=Et(ye({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===uy.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||oi.Emulated,styles:n.styles||Ts,_:null,schemas:n.schemas||null,tView:null,id:""});vy(t);let i=n.dependencies;return t.directiveDefs=Cv(i,!1),t.pipeDefs=Cv(i,!0),t.id=ww(t),t})}function Mw(n){return Tr(n)||fy(n)}function Sw(n){return n!==null}function Av(n,e){if(n==null)return Go;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Ki.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Ki.None?[i,a]:i,e[s]=o):t[s]=i}return t}function Tf(n){return Mf(()=>{let e=gy(n);return vy(e),e})}function Tr(n){return n[GS]||null}function fy(n){return n[jS]||null}function hy(n){return n[WS]||null}function py(n){let e=Tr(n)||fy(n)||hy(n);return e!==null?e.standalone:!1}function my(n,e){let t=n[$S]||null;if(!t&&e===!0)throw new Error(`Type ${yn(n)} does not have '\u0275mod' property.`);return t}function gy(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||Go,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||Ts,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Av(n.inputs,e),outputs:Av(n.outputs),debugInfo:null}}function vy(n){n.features?.forEach(e=>e(n))}function Cv(n,e){if(!n)return null;let t=e?hy:Mw;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(Sw)}function ww(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function qc(n){return{\u0275providers:n}}function bw(...n){return{\u0275providers:yy(!0,n),\u0275fromNgModule:!0}}function yy(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return wf(e,o=>{let a=o;Ld(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&_y(r,s),t}function _y(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Af(r,s=>{e(s,i)})}}function Ld(n,e,t,i){if(n=rn(n),!n)return!1;let r=null,s=Mv(n),o=!s&&Tr(n);if(!s&&!o){let c=n.ngModule;if(s=Mv(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Ld(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{wf(s.imports,u=>{Ld(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&_y(l,e)}if(!a){let l=Es(r)||(()=>new r);e({provide:r,useFactory:l,deps:Ts},r),e({provide:ly,useValue:r,multi:!0},r),e({provide:As,useValue:()=>Ze(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Af(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Af(n,e){for(let t of n)ry(t)&&(t=t.\u0275providers),Array.isArray(t)?Af(t,e):e(t)}var Ew=xt({provide:String,useValue:xt});function xy(n){return n!==null&&typeof n=="object"&&Ew in n}function Tw(n){return!!(n&&n.useExisting)}function Aw(n){return!!(n&&n.useFactory)}function Cs(n){return typeof n=="function"}function Cw(n){return!!n.useClass}var Xc=new Ge(""),Mc={},Dw={},Md;function Cf(){return Md===void 0&&(Md=new Ic),Md}var Dn=class{},jo=class extends Dn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Fd(e,o=>this.processProvider(o)),this.records.set(cy,xs(void 0,this)),r.has("environment")&&this.records.set(Dn,xs(void 0,this));let s=this.records.get(Xc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(ly,Ts,$e.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=mt(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),mt(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Xi(this),i=An(void 0),r;try{return e()}finally{Xi(t),An(i)}}get(e,t=zo,i=$e.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(wv))return e[wv](this);i=$c(i);let r,s=Xi(this),o=An(void 0);try{if(!(i&$e.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=Lw(e)&&Wc(e);l&&this.injectableDefInScope(l)?c=xs(Od(e),Mc):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&$e.Self?Cf():this.parent;return t=i&$e.Optional&&t===zo?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Cc]=a[Cc]||[]).unshift(yn(e)),s)throw a;return rw(a,e,"R3InjectorError",this.source)}else throw a}finally{An(o),Xi(s)}}resolveInjectorInitializers(){let e=mt(null),t=Xi(this),i=An(void 0),r;try{let s=this.get(As,Ts,$e.Self);for(let o of s)o()}finally{Xi(t),An(i),mt(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(yn(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new De(205,!1)}processProvider(e){e=rn(e);let t=Cs(e)?e:rn(e&&e.provide),i=Rw(e);if(!Cs(e)&&e.multi===!0){let r=this.records.get(t);r||(r=xs(void 0,Mc,!0),r.factory=()=>Nd(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=mt(null);try{return t.value===Mc&&(t.value=Dw,t.value=t.factory()),typeof t.value=="object"&&t.value&&Pw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{mt(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=rn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Od(n){let e=Wc(n),t=e!==null?e.factory:Es(n);if(t!==null)return t;if(n instanceof Ge)throw new De(204,!1);if(n instanceof Function)return Iw(n);throw new De(204,!1)}function Iw(n){if(n.length>0)throw new De(204,!1);let t=HS(n);return t!==null?()=>t.factory(n):()=>new n}function Rw(n){if(xy(n))return xs(void 0,n.useValue);{let e=My(n);return xs(e,Mc)}}function My(n,e,t){let i;if(Cs(n)){let r=rn(n);return Es(r)||Od(r)}else if(xy(n))i=()=>rn(n.useValue);else if(Aw(n))i=()=>n.useFactory(...Nd(n.deps||[]));else if(Tw(n))i=()=>Ze(rn(n.useExisting));else{let r=rn(n&&(n.useClass||n.provide));if(Nw(n))i=()=>new r(...Nd(n.deps));else return Es(r)||Od(r)}return i}function xs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function Nw(n){return!!n.deps}function Pw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function Lw(n){return typeof n=="function"||typeof n=="object"&&n instanceof Ge}function Fd(n,e){for(let t of n)Array.isArray(t)?Fd(t,e):t&&ry(t)?Fd(t.\u0275providers,e):e(t)}function Si(n,e){n instanceof jo&&n.assertNotDestroyed();let t,i=Xi(n),r=An(void 0);try{return e()}finally{Xi(i),An(r)}}function Ow(){return sy()!==void 0||tw()!=null}function Fw(n){return typeof n=="function"}var wi=0,ze=1,Le=2,Yt=3,Wn=4,$n=5,Rc=6,Ud=7,Ji=8,Ds=9,_i=10,ai=11,Wo=12,Dv=13,Yo=14,ci=15,Ar=16,Ms=17,xi=18,Yc=19,Sy=20,Zi=21,Sd=22,Cn=23,Cr=25,wy=1;var Dr=7,Nc=8,Is=9,_n=10,Pc=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(Pc||{});function br(n){return Array.isArray(n)&&typeof n[wy]=="object"}function bi(n){return Array.isArray(n)&&n[wy]===!0}function by(n){return(n.flags&4)!==0}function Df(n){return n.componentOffset>-1}function Uw(n){return(n.flags&1)===1}function Os(n){return!!n.template}function kd(n){return(n[Le]&512)!==0}var Bd=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Ey(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function Zc(){return Ty}function Ty(n){return n.type.prototype.ngOnChanges&&(n.setInput=Bw),kw}Zc.ngInherit=!0;function kw(){let n=Cy(this),e=n?.current;if(e){let t=n.previous;if(t===Go)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function Bw(n,e,t,i,r){let s=this.declaredInputs[i],o=Cy(n)||Vw(n,{previous:Go,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Bd(l&&l.currentValue,t,c===Go),Ey(n,e,r,t)}var Ay="__ngSimpleChanges__";function Cy(n){return n[Ay]||null}function Vw(n,e){return n[Ay]=e}var Iv=null;var Yi=function(n,e,t){Iv?.(n,e,t)},Hw="svg",zw="math";function Qi(n){for(;Array.isArray(n);)n=n[wi];return n}function Ei(n,e){return Qi(e[n.index])}function Gw(n,e){return n.data[e]}function Zo(n,e){let t=e[n];return br(t)?t:t[wi]}function jw(n){return(n[Le]&4)===4}function If(n){return(n[Le]&128)===128}function Ww(n){return bi(n[Yt])}function Rv(n,e){return e==null?null:n[e]}function Dy(n){n[Ms]=0}function Iy(n){n[Le]&1024||(n[Le]|=1024,If(n)&&Jc(n))}function Kc(n){return!!(n[Le]&9216||n[Cn]?.dirty)}function Vd(n){n[_i].changeDetectionScheduler?.notify(8),n[Le]&64&&(n[Le]|=1024),Kc(n)&&Jc(n)}function Jc(n){n[_i].changeDetectionScheduler?.notify(0);let e=Ir(n);for(;e!==null&&!(e[Le]&8192||(e[Le]|=8192,!If(e)));)e=Ir(e)}function Ry(n,e){if((n[Le]&256)===256)throw new De(911,!1);n[Zi]===null&&(n[Zi]=[]),n[Zi].push(e)}function $w(n,e){if(n[Zi]===null)return;let t=n[Zi].indexOf(e);t!==-1&&n[Zi].splice(t,1)}function Ir(n){let e=n[Yt];return bi(e)?e[Yt]:e}var gt={lFrame:Vy(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Ny=!1;function qw(){return gt.lFrame.elementDepthCount}function Xw(){gt.lFrame.elementDepthCount++}function Yw(){gt.lFrame.elementDepthCount--}function Py(){return gt.bindingsEnabled}function Zw(){return gt.skipHydrationRootTNode!==null}function Kw(n){return gt.skipHydrationRootTNode===n}function Jw(){gt.skipHydrationRootTNode=null}function Zt(){return gt.lFrame.lView}function Fr(){return gt.lFrame.tView}function qn(){let n=Ly();for(;n!==null&&n.type===64;)n=n.parent;return n}function Ly(){return gt.lFrame.currentTNode}function Qw(){let n=gt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Qc(n,e){let t=gt.lFrame;t.currentTNode=n,t.isParent=e}function Oy(){return gt.lFrame.isParent}function eb(){gt.lFrame.isParent=!1}function Fy(){return Ny}function Nv(n){Ny=n}function tb(n){return gt.lFrame.bindingIndex=n}function nb(){return gt.lFrame.inI18n}function ib(n,e){let t=gt.lFrame;t.bindingIndex=t.bindingRootIndex=n,Hd(e)}function rb(){return gt.lFrame.currentDirectiveIndex}function Hd(n){gt.lFrame.currentDirectiveIndex=n}function Uy(){return gt.lFrame.currentQueryIndex}function Rf(n){gt.lFrame.currentQueryIndex=n}function sb(n){let e=n[ze];return e.type===2?e.declTNode:e.type===1?n[$n]:null}function ky(n,e,t){if(t&$e.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&$e.Host);)if(r=sb(s),r===null||(s=s[Yo],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=gt.lFrame=By();return i.currentTNode=e,i.lView=n,!0}function Nf(n){let e=By(),t=n[ze];gt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function By(){let n=gt.lFrame,e=n===null?null:n.child;return e===null?Vy(n):e}function Vy(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Hy(){let n=gt.lFrame;return gt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var zy=Hy;function Pf(){let n=Hy();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function ob(){return gt.lFrame.selectedIndex}function Rr(n){gt.lFrame.selectedIndex=n}function ab(){return gt.lFrame.currentNamespace}var Gy=!0;function jy(){return Gy}function Wy(n){Gy=n}function cb(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Ty(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function $y(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Sc(n,e,t){qy(n,e,3,t)}function wc(n,e,t,i){(n[Le]&3)===t&&qy(n,e,t,i)}function wd(n,e){let t=n[Le];(t&3)===e&&(t&=16383,t+=1,n[Le]=t)}function qy(n,e,t,i){let r=i!==void 0?n[Ms]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Ms]+=65536),(a<s||s==-1)&&(lb(n,t,e,c),n[Ms]=(n[Ms]&4294901760)+c+2),c++}function Pv(n,e){Yi(4,n,e);let t=mt(null);try{e.call(n)}finally{mt(t),Yi(5,n,e)}}function lb(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Le]>>14<n[Ms]>>16&&(n[Le]&3)===e&&(n[Le]+=16384,Pv(a,s)):Pv(a,s)}var bs=-1,Nr=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function ub(n){return n instanceof Nr}function db(n){return(n.flags&8)!==0}function fb(n){return(n.flags&16)!==0}var bd={},zd=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=$c(i);let r=this.injector.get(e,bd,i);return r!==bd||t===bd?r:this.parentInjector.get(e,t,i)}};function Xy(n){return n!==bs}function Lc(n){return n&32767}function hb(n){return n>>16}function Oc(n,e){let t=hb(n),i=e;for(;t>0;)i=i[Yo],t--;return i}var Gd=!0;function Lv(n){let e=Gd;return Gd=n,e}var pb=256,Yy=pb-1,Zy=5,mb=0,si={};function gb(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Ho)&&(i=t[Ho]),i==null&&(i=t[Ho]=mb++);let r=i&Yy,s=1<<r;e.data[n+(r>>Zy)]|=s}function Fc(n,e){let t=Ky(n,e);if(t!==-1)return t;let i=e[ze];i.firstCreatePass&&(n.injectorIndex=e.length,Ed(i.data,n),Ed(e,null),Ed(i.blueprint,null));let r=Lf(n,e),s=n.injectorIndex;if(Xy(r)){let o=Lc(r),a=Oc(r,e),c=a[ze].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Ed(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Ky(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Lf(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=n_(r),i===null)return bs;if(t++,r=r[Yo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return bs}function jd(n,e,t){gb(n,e,t)}function Jy(n,e,t){if(t&$e.Optional||n!==void 0)return n;Sf(e,"NodeInjector")}function Qy(n,e,t,i){if(t&$e.Optional&&i===void 0&&(i=null),!(t&($e.Self|$e.Host))){let r=n[Ds],s=An(void 0);try{return r?r.get(e,i,t&$e.Optional):oy(e,i,t&$e.Optional)}finally{An(s)}}return Jy(i,e,t)}function e_(n,e,t,i=$e.Default,r){if(n!==null){if(e[Le]&2048&&!(i&$e.Self)){let o=xb(n,e,t,i,si);if(o!==si)return o}let s=t_(n,e,t,i,si);if(s!==si)return s}return Qy(e,t,i,r)}function t_(n,e,t,i,r){let s=yb(t);if(typeof s=="function"){if(!ky(e,n,i))return i&$e.Host?Jy(r,t,i):Qy(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&$e.Optional))Sf(t);else return o}finally{zy()}}else if(typeof s=="number"){let o=null,a=Ky(n,e),c=bs,l=i&$e.Host?e[ci][$n]:null;for((a===-1||i&$e.SkipSelf)&&(c=a===-1?Lf(n,e):e[a+8],c===bs||!Fv(i,!1)?a=-1:(o=e[ze],a=Lc(c),e=Oc(c,e)));a!==-1;){let u=e[ze];if(Ov(s,a,u.data)){let d=vb(a,e,t,o,i,l);if(d!==si)return d}c=e[a+8],c!==bs&&Fv(i,e[ze].data[a+8]===l)&&Ov(s,a,e)?(o=u,a=Lc(c),e=Oc(c,e)):a=-1}}return r}function vb(n,e,t,i,r,s){let o=e[ze],a=o.data[n+8],c=i==null?Df(a)&&Gd:i!=o&&(a.type&3)!==0,l=r&$e.Host&&s===a,u=bc(a,o,t,c,l);return u!==null?Pr(e,o,u,a):si}function bc(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&Os(h)&&h.type===t)return c}return null}function Pr(n,e,t,i){let r=n[t],s=e.data;if(ub(r)){let o=r;o.resolving&&YS(XS(s[t]));let a=Lv(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?An(o.injectImpl):null,u=ky(n,i,$e.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&cb(t,s[t],e)}finally{l!==null&&An(l),Lv(a),o.resolving=!1,zy()}}return r}function yb(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Ho)?n[Ho]:void 0;return typeof e=="number"?e>=0?e&Yy:_b:e}function Ov(n,e,t){let i=1<<n;return!!(t[e+(n>>Zy)]&i)}function Fv(n,e){return!(n&$e.Self)&&!(n&$e.Host&&e)}var Er=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return e_(this._tNode,this._lView,e,$c(i),t)}};function _b(){return new Er(qn(),Zt())}function Of(n){return Mf(()=>{let e=n.prototype.constructor,t=e[Ac]||Wd(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Ac]||Wd(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Wd(n){return ey(n)?()=>{let e=Wd(rn(n));return e&&e()}:Es(n)}function xb(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Le]&2048&&!(o[Le]&512);){let a=t_(s,o,t,i|$e.Self,si);if(a!==si)return a;let c=s.parent;if(!c){let l=o[Sy];if(l){let u=l.get(t,si,i);if(u!==si)return u}c=n_(o),o=o[Yo]}s=c}return r}function n_(n){let e=n[ze],t=e.type;return t===2?e.declTNode:t===1?n[$n]:null}function Uv(n,e=null,t=null,i){let r=i_(n,e,t,i);return r.resolveInjectorInitializers(),r}function i_(n,e=null,t=null,i,r=new Set){let s=[t||Ts,bw(n)];return i=i||(typeof n=="object"?void 0:yn(n)),new jo(s,e||Cf(),i||null,r)}var Lr=class n{static{this.THROW_IF_NOT_FOUND=zo}static{this.NULL=new Ic}static create(e,t){if(Array.isArray(e))return Uv({name:""},t,e,"");{let i=e.name??"";return Uv({name:i},e.parent,e.providers,i)}}static{this.\u0275prov=Fe({token:n,providedIn:"any",factory:()=>Ze(cy)})}static{this.__NG_ELEMENT_ID__=-1}};var Mb=new Ge("");Mb.__NG_ELEMENT_ID__=n=>{let e=qn();if(e===null)throw new De(204,!1);if(e.type&2)return e.value;if(n&$e.Optional)return null;throw new De(204,!1)};var Sb="ngOriginalError";function Td(n){return n[Sb]}var r_=!0,s_=(()=>{class n{static{this.__NG_ELEMENT_ID__=wb}static{this.__NG_ENV_ID__=t=>t}}return n})(),$d=class extends s_{constructor(e){super(),this._lView=e}onDestroy(e){return Ry(this._lView,e),()=>$w(this._lView,e)}};function wb(){return new $d(Zt())}var Fs=(()=>{class n{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new jt(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static{this.\u0275prov=Fe({token:n,providedIn:"root",factory:()=>new n})}}return n})();var qd=class extends nn{constructor(e=!1){super(),this.destroyRef=void 0,this.pendingTasks=void 0,this.__isAsync=e,Ow()&&(this.destroyRef=ie(s_,{optional:!0})??void 0,this.pendingTasks=ie(Fs,{optional:!0})??void 0)}emit(e){let t=mt(null);try{super.next(e)}finally{mt(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof It&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},Xt=qd;function Uc(...n){}function o_(n){let e,t;function i(){n=Uc;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function kv(n){return queueMicrotask(()=>n()),()=>{n=Uc}}var Ff="isAngularZone",kc=Ff+"_ID",bb=0,Rt=class n{constructor(e){this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Xt(!1),this.onMicrotaskEmpty=new Xt(!1),this.onStable=new Xt(!1),this.onError=new Xt(!1);let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=r_}=e;if(typeof Zone>"u")throw new De(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,Ab(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Ff)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new De(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new De(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,Eb,Uc,Uc);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},Eb={};function Uf(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function Tb(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){o_(()=>{n.callbackScheduled=!1,Xd(n),n.isCheckStableRunning=!0,Uf(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Xd(n)}function Ab(n){let e=()=>{Tb(n)},t=bb++;n._inner=n._inner.fork({name:"angular",properties:{[Ff]:!0,[kc]:t,[kc+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(Cb(c))return i.invokeTask(s,o,a,c);try{return Bv(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Vv(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return Bv(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!Db(c)&&e(),Vv(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Xd(n),Uf(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Xd(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Bv(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Vv(n){n._nesting--,Uf(n)}var Yd=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Xt,this.onMicrotaskEmpty=new Xt,this.onStable=new Xt,this.onError=new Xt}run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function Cb(n){return a_(n,"__ignore_ng_zone__")}function Db(n){return a_(n,"__scheduler_tick__")}function a_(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Mi=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&Td(e);for(;t&&Td(t);)t=Td(t);return t||null}},Ib=new Ge("",{providedIn:"root",factory:()=>{let n=ie(Rt),e=ie(Mi);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function Rb(){return Us(qn(),Zt())}function Us(n,e){return new Ur(Ei(n,e))}var Ur=(()=>{class n{constructor(t){this.nativeElement=t}static{this.__NG_ELEMENT_ID__=Rb}}return n})();function Nb(n){return n instanceof Ur?n.nativeElement:n}function Pb(){return this._results[Symbol.iterator]()}var Zd=class n{get changes(){return this._changes??=new Xt}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=Pb)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=aw(e);(this._changesDetected=!ow(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function c_(n){return(n.flags&128)===128}var l_=new Map,Lb=0;function Ob(){return Lb++}function Fb(n){l_.set(n[Yc],n)}function Kd(n){l_.delete(n[Yc])}var Hv="__ngContext__";function Rs(n,e){br(e)?(n[Hv]=e[Yc],Fb(e)):n[Hv]=e}function u_(n){return f_(n[Wo])}function d_(n){return f_(n[Wn])}function f_(n){for(;n!==null&&!bi(n);)n=n[Wn];return n}var Jd;function h_(n){Jd=n}function Ub(){if(Jd!==void 0)return Jd;if(typeof document<"u")return document;throw new De(210,!1)}var kf=new Ge("",{providedIn:"root",factory:()=>kb}),kb="ng",Bf=new Ge(""),ks=new Ge("",{providedIn:"platform",factory:()=>"unknown"});var Vf=new Ge("",{providedIn:"root",factory:()=>Ub().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Bb="h",Vb="b";var Hb=()=>null;function Hf(n,e,t=!1){return Hb(n,e,t)}var p_=!1,zb=new Ge("",{providedIn:"root",factory:()=>p_});function m_(n){return n instanceof Function?n():n}var kr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(kr||{}),Gb;function zf(n,e){return Gb(n,e)}function Ss(n,e,t,i,r){if(i!=null){let s,o=!1;bi(i)?s=i:br(i)&&(o=!0,i=i[wi]);let a=Qi(i);n===0&&t!==null?r==null?x_(e,t,a):Bc(e,t,a,r||null,!0):n===1&&t!==null?Bc(e,t,a,r||null,!0):n===2?iE(e,a,o):n===3&&e.destroyNode(a),s!=null&&sE(e,n,s,t,r)}}function jb(n,e){return n.createText(e)}function g_(n,e,t){return n.createElement(e,t)}function Wb(n,e){v_(n,e),e[wi]=null,e[$n]=null}function $b(n,e,t,i,r,s){i[wi]=r,i[$n]=e,el(n,i,t,1,r,s)}function v_(n,e){e[_i].changeDetectionScheduler?.notify(9),el(n,e,e[ai],2,null,null)}function qb(n){let e=n[Wo];if(!e)return Ad(n[ze],n);for(;e;){let t=null;if(br(e))t=e[Wo];else{let i=e[_n];i&&(t=i)}if(!t){for(;e&&!e[Wn]&&e!==n;)br(e)&&Ad(e[ze],e),e=e[Yt];e===null&&(e=n),br(e)&&Ad(e[ze],e),t=e&&e[Wn]}e=t}}function Xb(n,e,t,i){let r=_n+i,s=t.length;i>0&&(t[r-1][Wn]=e),i<s-_n?(e[Wn]=t[r],ay(t,_n+i,e)):(t.push(e),e[Wn]=null),e[Yt]=t;let o=e[Ar];o!==null&&t!==o&&y_(o,e);let a=e[xi];a!==null&&a.insertView(n),Vd(e),e[Le]|=128}function y_(n,e){let t=n[Is],i=e[Yt];if(br(i))n[Le]|=Pc.HasTransplantedViews;else{let r=i[Yt][ci];e[ci]!==r&&(n[Le]|=Pc.HasTransplantedViews)}t===null?n[Is]=[e]:t.push(e)}function Gf(n,e){let t=n[Is],i=t.indexOf(e);t.splice(i,1)}function Qd(n,e){if(n.length<=_n)return;let t=_n+e,i=n[t];if(i){let r=i[Ar];r!==null&&r!==n&&Gf(r,i),e>0&&(n[t-1][Wn]=i[Wn]);let s=Dc(n,_n+e);Wb(i[ze],i);let o=s[xi];o!==null&&o.detachView(s[ze]),i[Yt]=null,i[Wn]=null,i[Le]&=-129}return i}function __(n,e){if(!(e[Le]&256)){let t=e[ai];t.destroyNode&&el(n,e,t,3,null,null),qb(e)}}function Ad(n,e){if(e[Le]&256)return;let t=mt(null);try{e[Le]&=-129,e[Le]|=256,e[Cn]&&td(e[Cn]),Zb(n,e),Yb(n,e),e[ze].type===1&&e[ai].destroy();let i=e[Ar];if(i!==null&&bi(e[Yt])){i!==e[Yt]&&Gf(i,e);let r=e[xi];r!==null&&r.detachView(n)}Kd(e)}finally{mt(t)}}function Yb(n,e){let t=n.cleanup,i=e[Ud];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[Ud]=null);let r=e[Zi];if(r!==null){e[Zi]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function Zb(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Nr)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Yi(4,a,c);try{c.call(a)}finally{Yi(5,a,c)}}else{Yi(4,r,s);try{s.call(r)}finally{Yi(5,r,s)}}}}}function Kb(n,e,t){return Jb(n,e.parent,t)}function Jb(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[wi];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===oi.None||s===oi.Emulated)return null}return Ei(i,t)}}function Bc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function x_(n,e,t){n.appendChild(e,t)}function zv(n,e,t,i,r){i!==null?Bc(n,e,t,i,r):x_(n,e,t)}function M_(n,e){return n.parentNode(e)}function Qb(n,e){return n.nextSibling(e)}function eE(n,e,t){return nE(n,e,t)}function tE(n,e,t){return n.type&40?Ei(n,t):null}var nE=tE,Gv;function S_(n,e,t,i){let r=Kb(n,i,e),s=e[ai],o=i.parent||e[$n],a=eE(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)zv(s,r,t[c],a,!1);else zv(s,r,t,a,!1);Gv!==void 0&&Gv(s,i,e,t,r)}function Bo(n,e){if(e!==null){let t=e.type;if(t&3)return Ei(e,n);if(t&4)return ef(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Bo(n,i);{let r=n[e.index];return bi(r)?ef(-1,r):Qi(r)}}else{if(t&128)return Bo(n,e.next);if(t&32)return zf(e,n)()||Qi(n[e.index]);{let i=w_(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Ir(n[ci]);return Bo(r,i)}else return Bo(n,e.next)}}}return null}function w_(n,e){if(e!==null){let i=n[ci][$n],r=e.projection;return i.projection[r]}return null}function ef(n,e){let t=_n+n+1;if(t<e.length){let i=e[t],r=i[ze].firstChild;if(r!==null)return Bo(i,r)}return e[Dr]}function iE(n,e,t){n.removeChild(null,e,t)}function jf(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Rs(Qi(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)jf(n,e,t.child,i,r,s,!1),Ss(e,n,r,a,s);else if(c&32){let l=zf(t,i),u;for(;u=l();)Ss(e,n,r,u,s);Ss(e,n,r,a,s)}else c&16?rE(n,e,i,t,r,s):Ss(e,n,r,a,s);t=o?t.projectionNext:t.next}}function el(n,e,t,i,r,s){jf(t,i,n.firstChild,e,r,s,!1)}function rE(n,e,t,i,r,s){let o=t[ci],c=o[$n].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Ss(e,n,r,u,s)}else{let l=c,u=o[Yt];c_(i)&&(l.flags|=128),jf(n,e,l,u,r,s,!0)}}function sE(n,e,t,i,r){let s=t[Dr],o=Qi(t);s!==o&&Ss(e,n,i,s,r);for(let a=_n;a<t.length;a++){let c=t[a];el(c[ze],c,n,e,i,s)}}function oE(n,e,t){n.setAttribute(e,"style",t)}function b_(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function E_(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Pd(n,e,i),r!==null&&b_(n,e,r),s!==null&&oE(n,e,s)}var T_={};function aE(n,e,t,i){if(!i)if((e[Le]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Sc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&wc(e,s,0,t)}Rr(t)}function Br(n,e=$e.Default){let t=Zt();if(t===null)return Ze(n,e);let i=qn();return e_(i,t,rn(n),e)}function A_(n,e,t,i,r,s){let o=mt(null);try{let a=null;r&Ki.SignalBased&&(a=e[i][Hg]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Ki.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):Ey(e,a,i,s)}finally{mt(o)}}function cE(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Rr(~r);else{let s=r,o=t[++i],a=t[++i];ib(o,s);let c=e[s];a(2,c)}}}finally{Rr(-1)}}function tl(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[wi]=r,d[Le]=i|4|128|8|64,(l!==null||n&&n[Le]&2048)&&(d[Le]|=2048),Dy(d),d[Yt]=d[Yo]=n,d[Ji]=t,d[_i]=o||n&&n[_i],d[ai]=a||n&&n[ai],d[Ds]=c||n&&n[Ds]||null,d[$n]=s,d[Yc]=Ob(),d[Rc]=u,d[Sy]=l,d[ci]=e.type==2?n[ci]:d,d}function Wf(n,e,t,i,r){let s=n.data[e];if(s===null)s=lE(n,e,t,i,r),nb()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Qw();s.injectorIndex=o===null?-1:o.injectorIndex}return Qc(s,!0),s}function lE(n,e,t,i,r){let s=Ly(),o=Oy(),a=o?s:s&&s.parent,c=n.data[e]=vE(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function C_(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function D_(n,e,t,i,r){let s=ob(),o=i&2;try{Rr(-1),o&&e.length>Cr&&aE(n,e,Cr,!1),Yi(o?2:0,r),t(i,r)}finally{Rr(s),Yi(o?3:1,r)}}function I_(n,e,t){if(by(e)){let i=mt(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{mt(i)}}}function uE(n,e,t){Py()&&(SE(n,e,t,Ei(t,e)),(t.flags&64)===64&&L_(n,e,t))}function dE(n,e,t=Ei){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function R_(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=N_(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function N_(n,e,t,i,r,s,o,a,c,l,u){let d=Cr+i,f=d+r,h=fE(d,f),g=typeof l=="function"?l():l;return h[ze]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function fE(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:T_);return t}function hE(n,e,t,i){let s=i.get(zb,p_)||t===oi.ShadowDom,o=n.selectRootElement(e,s);return pE(o),o}function pE(n){mE(n)}var mE=()=>null;function gE(n,e,t,i){let r=PE(e);r.push(t),n.firstCreatePass&&LE(n).push(i,r.length-1)}function vE(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return Zw()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function jv(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Ki.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Wv(i,t,l,a,c):Wv(i,t,l,a)}return i}function Wv(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function yE(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,h=f?f.inputs:null,g=f?f.outputs:null;c=jv(0,d.inputs,u,c,h),l=jv(1,d.outputs,u,l,g);let v=c!==null&&o!==null&&!Ef(e)?RE(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function _E(n,e,t,i){if(Py()){let r=i===null?null:{"":-1},s=bE(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&P_(n,e,t,o,r,a),r&&EE(t,i,r)}t.mergedAttrs=bf(t.mergedAttrs,t.attrs)}function P_(n,e,t,i,r,s){for(let l=0;l<i.length;l++)jd(Fc(t,e),n,i[l].type);AE(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=C_(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=bf(t.mergedAttrs,u.hostAttrs),CE(n,t,e,c,u),TE(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}yE(n,t,s)}function xE(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;ME(o)!=a&&o.push(a),o.push(t,i,s)}}function ME(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function SE(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;Df(t)&&DE(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Fc(t,e),Rs(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=Pr(e,n,a,t);if(Rs(l,e),o!==null&&IE(e,a-r,l,c,t,o),Os(c)){let u=Zo(t.index,e);u[Ji]=Pr(e,n,a,t)}}}function L_(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=rb();try{Rr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Hd(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&wE(c,l)}}finally{Rr(-1),Hd(o)}}function wE(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function bE(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(mw(e,o.selectors,!1))if(i||(i=[]),Os(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;tf(n,e,c)}else i.unshift(o),tf(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function tf(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function EE(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new De(-301,!1);i.push(e[r],s)}}}function TE(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Os(e)&&(t[""]=n)}}function AE(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function CE(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Es(r.type,!0)),o=new Nr(s,Os(r),Br);n.blueprint[i]=o,t[i]=o,xE(n,e,i,C_(n,t,r.hostVars,T_),r)}function DE(n,e,t){let i=Ei(e,n),r=R_(t),s=n[_i].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=$f(n,tl(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function IE(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];A_(i,t,c,l,u,d)}}function RE(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function NE(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function O_(n,e){let t=n.contentQueries;if(t!==null){let i=mt(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Rf(s),a.contentQueries(2,e[o],o)}}}finally{mt(i)}}}function $f(n,e){return n[Wo]?n[Dv][Wn]=e:n[Wo]=e,n[Dv]=e,e}function nf(n,e,t){Rf(0);let i=mt(null);try{e(n,t)}finally{mt(i)}}function PE(n){return n[Ud]??=[]}function LE(n){return n.cleanup??=[]}function OE(n,e){let t=n[Ds],i=t?t.get(Mi,null):null;i&&i.handleError(e)}function F_(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];A_(u,l,i,a,c,r)}}function FE(n,e){let t=Zo(e,n),i=t[ze];UE(i,t);let r=t[wi];r!==null&&t[Rc]===null&&(t[Rc]=Hf(r,t[Ds])),qf(i,t,t[Ji])}function UE(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function qf(n,e,t){Nf(e);try{let i=n.viewQuery;i!==null&&nf(1,i,t);let r=n.template;r!==null&&D_(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[xi]?.finishViewCreation(n),n.staticContentQueries&&O_(n,e),n.staticViewQueries&&nf(2,n.viewQuery,t);let s=n.components;s!==null&&kE(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Le]&=-5,Pf()}}function kE(n,e){for(let t=0;t<e.length;t++)FE(n,e[t])}function BE(n,e,t,i){let r=mt(null);try{let s=e.tView,a=n[Le]&4096?4096:16,c=tl(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Ar]=l;let u=n[xi];return u!==null&&(c[xi]=u.createEmbeddedView(s)),qf(s,c,t),c}finally{mt(r)}}function $v(n,e){return!e||e.firstChild===null||c_(n)}function VE(n,e,t,i=!0){let r=e[ze];if(Xb(r,e,n,t),i){let o=ef(t,n),a=e[ai],c=M_(a,n[Dr]);c!==null&&$b(r,n[$n],a,e,c,o)}let s=e[Rc];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Vc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Qi(s)),bi(s)&&HE(s,i);let o=t.type;if(o&8)Vc(n,e,t.child,i);else if(o&32){let a=zf(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=w_(e,t);if(Array.isArray(a))i.push(...a);else{let c=Ir(e[ci]);Vc(c[ze],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function HE(n,e){for(let t=_n;t<n.length;t++){let i=n[t],r=i[ze].firstChild;r!==null&&Vc(i[ze],i,r,e)}n[Dr]!==n[wi]&&e.push(n[Dr])}var U_=[];function zE(n){return n[Cn]??GE(n)}function GE(n){let e=U_.pop()??Object.create(WE);return e.lView=n,e}function jE(n){n.lView[Cn]!==n&&(n.lView=null,U_.push(n))}var WE=Et(ye({},Ju),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{Jc(n.lView)},consumerOnSignalRead(){this.lView[Cn]=this}});function $E(n){let e=n[Cn]??Object.create(qE);return e.lView=n,e}var qE=Et(ye({},Ju),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{let e=Ir(n.lView);for(;e&&!k_(e[ze]);)e=Ir(e);e&&Iy(e)},consumerOnSignalRead(){this.lView[Cn]=this}});function k_(n){return n.type!==2}var XE=100;function B_(n,e=!0,t=0){let i=n[_i],r=i.rendererFactory,s=!1;s||r.begin?.();try{YE(n,t)}catch(o){throw e&&OE(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function YE(n,e){let t=Fy();try{Nv(!0),rf(n,e);let i=0;for(;Kc(n);){if(i===XE)throw new De(103,!1);i++,rf(n,1)}}finally{Nv(t)}}function ZE(n,e,t,i){let r=e[Le];if((r&256)===256)return;let s=!1,o=!1;!s&&e[_i].inlineEffectRunner?.flush(),Nf(e);let a=!0,c=null,l=null;s||(k_(n)?(l=zE(e),c=Qu(l)):zg()===null?(a=!1,l=$E(e),c=Qu(l)):e[Cn]&&(td(e[Cn]),e[Cn]=null));try{Dy(e),tb(n.bindingStartIndex),t!==null&&D_(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&Sc(e,h,null)}else{let h=n.preOrderHooks;h!==null&&wc(e,h,0,null),wd(e,0)}if(o||KE(e),V_(e,0),n.contentQueries!==null&&O_(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&Sc(e,h)}else{let h=n.contentHooks;h!==null&&wc(e,h,1),wd(e,1)}cE(n,e);let d=n.components;d!==null&&z_(e,d,0);let f=n.viewQuery;if(f!==null&&nf(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&Sc(e,h)}else{let h=n.viewHooks;h!==null&&wc(e,h,2),wd(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Sd]){for(let h of e[Sd])h();e[Sd]=null}s||(e[Le]&=-73)}catch(u){throw s||Jc(e),u}finally{l!==null&&(Gg(l,c),a&&jE(l)),Pf()}}function V_(n,e){for(let t=u_(n);t!==null;t=d_(t))for(let i=_n;i<t.length;i++){let r=t[i];H_(r,e)}}function KE(n){for(let e=u_(n);e!==null;e=d_(e)){if(!(e[Le]&Pc.HasTransplantedViews))continue;let t=e[Is];for(let i=0;i<t.length;i++){let r=t[i];Iy(r)}}}function JE(n,e,t){let i=Zo(e,n);H_(i,t)}function H_(n,e){If(n)&&rf(n,e)}function rf(n,e){let i=n[ze],r=n[Le],s=n[Cn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&ed(s)),o||=!1,s&&(s.dirty=!1),n[Le]&=-9217,o)ZE(i,n,i.template,n[Ji]);else if(r&8192){V_(n,1);let a=i.components;a!==null&&z_(n,a,1)}}function z_(n,e,t){for(let i=0;i<e.length;i++)JE(n,e[i],t)}function G_(n,e){let t=Fy()?64:1088;for(n[_i].changeDetectionScheduler?.notify(e);n;){n[Le]|=t;let i=Ir(n);if(kd(n)&&!i)return n;n=i}return null}var Or=class{get rootNodes(){let e=this._lView,t=e[ze];return Vc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Ji]}set context(e){this._lView[Ji]=e}get destroyed(){return(this._lView[Le]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Yt];if(bi(e)){let t=e[Nc],i=t?t.indexOf(this):-1;i>-1&&(Qd(e,i),Dc(t,i))}this._attachedToViewContainer=!1}__(this._lView[ze],this._lView)}onDestroy(e){Ry(this._lView,e)}markForCheck(){G_(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Le]&=-129}reattach(){Vd(this._lView),this._lView[Le]|=128}detectChanges(){this._lView[Le]|=1024,B_(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new De(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=kd(this._lView),t=this._lView[Ar];t!==null&&!e&&Gf(t,this._lView),v_(this._lView[ze],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new De(902,!1);this._appRef=e;let t=kd(this._lView),i=this._lView[Ar];i!==null&&!t&&y_(i,this._lView),Vd(this._lView)}},$o=(()=>{class n{static{this.__NG_ELEMENT_ID__=tT}}return n})(),QE=$o,eT=class extends QE{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=BE(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new Or(r)}};function tT(){return Xf(qn(),Zt())}function Xf(n,e){return n.type&4?new eT(e,n,Us(n,e)):null}var H3=new RegExp(`^(\\d+)*(${Vb}|${Bb})*(.*)`);var nT=()=>null;function qv(n,e){return nT(n,e)}var Ns=class{},nl=new Ge("",{providedIn:"root",factory:()=>!1});var j_=new Ge(""),W_=new Ge(""),sf=class{},Hc=class{};function iT(n){let e=Error(`No component factory found for ${yn(n)}.`);return e[rT]=n,e}var rT="ngComponent";var of=class{resolveComponentFactory(e){throw iT(e)}},Ps=class{static{this.NULL=new of}},Ls=class{};var sT=(()=>{class n{static{this.\u0275prov=Fe({token:n,providedIn:"root",factory:()=>null})}}return n})();function af(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=_v(r,a);else if(s==2){let c=a,l=e[++o];i=_v(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var zc=class extends Ps{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Tr(e);return new qo(t,this.ngModule)}};function Xv(n,e){let t=[];for(let i in n){if(!n.hasOwnProperty(i))continue;let r=n[i];if(r===void 0)continue;let s=Array.isArray(r),o=s?r[0]:r,a=s?r[1]:Ki.None;e?t.push({propName:o,templateName:i,isSignal:(a&Ki.SignalBased)!==0}):t.push({propName:o,templateName:i})}return t}function oT(n){let e=n.toLowerCase();return e==="svg"?Hw:e==="math"?zw:null}var qo=class extends Hc{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Xv(e.inputs,!0);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Xv(this.componentDef.outputs,!1)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=_w(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=mt(null);try{r=r||this.ngModule;let o=r instanceof Dn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new zd(e,o):e,c=a.get(Ls,null);if(c===null)throw new De(407,!1);let l=a.get(sT,null),u=a.get(Ns,null),d={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,changeDetectionScheduler:u},f=c.createRenderer(null,this.componentDef),h=this.componentDef.selectors[0][0]||"div",g=i?hE(f,i,this.componentDef.encapsulation,a):g_(f,h,oT(h)),v=512;this.componentDef.signals?v|=4096:this.componentDef.onPush||(v|=16);let p=null;g!==null&&(p=Hf(g,a,!0));let m=N_(0,null,null,1,0,null,null,null,null,null,null),w=tl(null,m,null,v,null,null,d,f,a,null,p);Nf(w);let M,b,P=null;try{let A=this.componentDef,T,L=null;A.findHostDirectiveDefs?(T=[],L=new Map,A.findHostDirectiveDefs(A,T,L),T.push(A)):T=[A];let K=aT(w,g);P=cT(K,g,A,T,w,d,f),b=Gw(m,Cr),g&&dT(f,A,g,i),t!==void 0&&fT(b,this.ngContentSelectors,t),M=uT(P,A,T,L,w,[hT]),qf(m,w,null)}catch(A){throw P!==null&&Kd(P),Kd(w),A}finally{Pf()}return new cf(this.componentType,M,Us(b,w),w,b)}finally{mt(s)}}},cf=class extends sf{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new Or(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;F_(s[ze],s,r,e,t),this.previousInputValues.set(e,t);let o=Zo(this._tNode.index,s);G_(o,1)}}get injector(){return new Er(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function aT(n,e){let t=n[ze],i=Cr;return n[i]=e,Wf(t,i,2,"#host",null)}function cT(n,e,t,i,r,s,o){let a=r[ze];lT(i,n,e,o);let c=null;e!==null&&(c=Hf(e,r[Ds]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=tl(r,R_(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&tf(a,n,i.length-1),$f(r,d),r[n.index]=d}function lT(n,e,t,i){for(let r of n)e.mergedAttrs=bf(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(af(e,e.mergedAttrs,!0),t!==null&&E_(i,t,e))}function uT(n,e,t,i,r,s){let o=qn(),a=r[ze],c=Ei(o,r);P_(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,f=Pr(r,a,d,o);Rs(f,r)}L_(a,r,o),c&&Rs(c,r);let l=Pr(r,a,o.directiveStart+o.componentOffset,o);if(n[Ji]=r[Ji]=l,s!==null)for(let u of s)u(l,e);return I_(a,o,r),l}function dT(n,e,t,i){if(i)Pd(n,t,["ng-version","18.2.7"]);else{let{attrs:r,classes:s}=xw(e.selectors[0]);r&&Pd(n,t,r),s&&s.length>0&&b_(n,t,s.join(" "))}}function fT(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function hT(){let n=qn();$y(Zt()[ze],n)}var Bs=(()=>{class n{static{this.__NG_ELEMENT_ID__=pT}}return n})();function pT(){let n=qn();return q_(n,Zt())}var mT=Bs,$_=class extends mT{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Us(this._hostTNode,this._hostLView)}get injector(){return new Er(this._hostTNode,this._hostLView)}get parentInjector(){let e=Lf(this._hostTNode,this._hostLView);if(Xy(e)){let t=Oc(e,this._hostLView),i=Lc(e),r=t[ze].data[i+8];return new Er(r,t)}else return new Er(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Yv(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-_n}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=qv(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,$v(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!Fw(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new qo(Tr(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(o?l:this.parentInjector).get(Dn,null);v&&(s=v)}let u=Tr(c.componentType??{}),d=qv(this._lContainer,u?.id??null),f=d?.firstChild??null,h=c.create(l,r,f,s);return this.insertImpl(h.hostView,a,$v(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(Ww(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Yt],l=new $_(c,c[$n],c[Yt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return VE(o,r,s,i),e.attachToViewContainerRef(),ay(Cd(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Yv(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Qd(this._lContainer,t);i&&(Dc(Cd(this._lContainer),t),__(i[ze],i))}detach(e){let t=this._adjustIndex(e,-1),i=Qd(this._lContainer,t);return i&&Dc(Cd(this._lContainer),t)!=null?new Or(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Yv(n){return n[Nc]}function Cd(n){return n[Nc]||(n[Nc]=[])}function q_(n,e){let t,i=e[n.index];return bi(i)?t=i:(t=NE(i,e,null,n),e[n.index]=t,$f(e,t)),vT(t,e,n,i),new $_(t,n,e)}function gT(n,e){let t=n[ai],i=t.createComment(""),r=Ei(e,n),s=M_(t,r);return Bc(t,s,i,Qb(t,r),!1),i}var vT=yT;function yT(n,e,t,i){if(n[Dr])return;let r;t.type&8?r=Qi(i):r=gT(e,t),n[Dr]=r}var lf=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},uf=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Yf(e,t).matches!==null&&this.queries[t].setDirty()}},df=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=TT(e):this.predicate=e}},ff=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},hf=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,_T(t,s)),this.matchTNodeWithReadOption(e,t,bc(t,e,s,!1,!1))}else i===$o?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,bc(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Ur||r===Bs||r===$o&&t.type&4)this.addMatch(t.index,-2);else{let s=bc(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function _T(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function xT(n,e){return n.type&11?Us(n,e):n.type&4?Xf(n,e):null}function MT(n,e,t,i){return t===-1?xT(e,n):t===-2?ST(n,e,i):Pr(n,n[ze],t,e)}function ST(n,e,t){if(t===Ur)return Us(e,n);if(t===$o)return Xf(e,n);if(t===Bs)return q_(e,n)}function X_(n,e,t,i){let r=e[xi].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(MT(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function pf(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=X_(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=_n;d<u.length;d++){let f=u[d];f[Ar]===f[Yt]&&pf(f[ze],f,l,i)}if(u[Is]!==null){let d=u[Is];for(let f=0;f<d.length;f++){let h=d[f];pf(h[ze],h,l,i)}}}}}return i}function wT(n,e){return n[xi].queries[e].queryList}function bT(n,e,t){let i=new Zd((t&4)===4);return gE(n,e,i,i.destroy),(e[xi]??=new uf).queries.push(new lf(i))-1}function ET(n,e,t){let i=Fr();return i.firstCreatePass&&(AT(i,new df(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),bT(i,Zt(),e)}function TT(n){return n.split(",").map(e=>e.trim())}function AT(n,e,t){n.queries===null&&(n.queries=new ff),n.queries.track(new hf(e,t))}function Yf(n,e){return n.queries.getByIndex(e)}function CT(n,e){let t=n[ze],i=Yf(t,e);return i.crossesNgTemplate?pf(t,n,e,[]):X_(t,n,i,e)}var Zv=new Set;function Zf(n){Zv.has(n)||(Zv.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var er=class{},Xo=class{};var mf=class extends er{constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new zc(this);let s=my(e);this._bootstrapComponents=m_(s.bootstrap),this._r3Injector=i_(e,t,[{provide:er,useValue:this},{provide:Ps,useValue:this.componentFactoryResolver},...i],yn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},gf=class extends Xo{constructor(e){super(),this.moduleType=e}create(e){return new mf(this.moduleType,e,[])}};var Gc=class extends er{constructor(e){super(),this.componentFactoryResolver=new zc(this),this.instance=null;let t=new jo([...e.providers,{provide:er,useValue:this},{provide:Ps,useValue:this.componentFactoryResolver}],e.parent||Cf(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Kf(n,e,t=null){return new Gc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}function DT(n){return(n.flags&32)===32}var Vo=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(Vo||{}),IT=(()=>{class n{constructor(){this.impl=null}execute(){this.impl?.execute()}static{this.\u0275prov=Fe({token:n,providedIn:"root",factory:()=>new n})}}return n})(),Kv=class n{constructor(){this.ngZone=ie(Rt),this.scheduler=ie(Ns),this.errorHandler=ie(Mi,{optional:!0}),this.sequences=new Set,this.deferredRegistrations=new Set,this.executing=!1}static{this.PHASES=[Vo.EarlyRead,Vo.Write,Vo.MixedReadWrite,Vo.Read]}execute(){this.executing=!0;for(let e of n.PHASES)for(let t of this.sequences)if(!(t.erroredOrDestroyed||!t.hooks[e]))try{t.pipelinedValue=this.ngZone.runOutsideAngular(()=>t.hooks[e](t.pipelinedValue))}catch(i){t.erroredOrDestroyed=!0,this.errorHandler?.handleError(i)}this.executing=!1;for(let e of this.sequences)e.afterRun(),e.once&&this.sequences.delete(e);for(let e of this.deferredRegistrations)this.sequences.add(e);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear()}register(e){this.executing?this.deferredRegistrations.add(e):(this.sequences.add(e),this.scheduler.notify(6))}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}static{this.\u0275prov=Fe({token:n,providedIn:"root",factory:()=>new n})}};function Jv(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";F_(n,t,s[o],o,i)}function RT(n,e,t,i,r,s){let o=e.consts,a=Rv(o,r),c=Wf(e,n,2,i,a);return _E(e,t,c,Rv(o,s)),c.attrs!==null&&af(c,c.attrs,!1),c.mergedAttrs!==null&&af(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Se(n,e,t,i){let r=Zt(),s=Fr(),o=Cr+n,a=r[ai],c=s.firstCreatePass?RT(o,s,r,e,t,i):s.data[o],l=NT(s,r,c,a,e,n);r[o]=l;let u=Uw(c);return Qc(c,!0),E_(a,l,c),!DT(c)&&jy()&&S_(s,r,l,c),qw()===0&&Rs(l,r),Xw(),u&&(uE(s,r,c),I_(s,c,r)),i!==null&&dE(r,c),Se}function be(){let n=qn();Oy()?eb():(n=n.parent,Qc(n,!1));let e=n;Kw(e)&&Jw(),Yw();let t=Fr();return t.firstCreatePass&&($y(t,n),by(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&db(e)&&Jv(t,e,Zt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&fb(e)&&Jv(t,e,Zt(),e.stylesWithoutHost,!1),be}function Xn(n,e,t,i){return Se(n,e,t,i),be(),Xn}var NT=(n,e,t,i,r,s)=>(Wy(!0),g_(i,r,ab()));var jc="en-US";var PT=jc;function LT(n){typeof n=="string"&&(PT=n.toLowerCase().replace(/_/g,"-"))}function Y_(n,e,t){ET(n,e,t)}function Jf(n){let e=Zt(),t=Fr(),i=Uy();Rf(i+1);let r=Yf(t,i);if(n.dirty&&jw(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=CT(e,i);n.reset(s,Nb),n.notifyOnChanges()}return!0}return!1}function Qf(){return wT(Zt(),Uy())}function we(n,e=""){let t=Zt(),i=Fr(),r=n+Cr,s=i.firstCreatePass?Wf(i,r,1,e,null):i.data[r],o=OT(i,t,s,e,n);t[r]=o,jy()&&S_(i,t,o,s),Qc(s,!1)}var OT=(n,e,t,i,r)=>(Wy(!0),jb(e[ai],i));function FT(n,e,t){let i=Fr();if(i.firstCreatePass){let r=Os(n);vf(t,i.data,i.blueprint,r,!0),vf(e,i.data,i.blueprint,r,!1)}}function vf(n,e,t,i,r){if(n=rn(n),Array.isArray(n))for(let s=0;s<n.length;s++)vf(n[s],e,t,i,r);else{let s=Fr(),o=Zt(),a=qn(),c=Cs(n)?n:rn(n.provide),l=My(n),u=a.providerIndexes&1048575,d=a.directiveStart,f=a.providerIndexes>>20;if(Cs(n)||!n.multi){let h=new Nr(l,r,Br),g=Id(c,e,r?u:u+f,d);g===-1?(jd(Fc(a,o),s,c),Dd(s,n,e.length),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(h),o.push(h)):(t[g]=h,o[g]=h)}else{let h=Id(c,e,u+f,d),g=Id(c,e,u,u+f),v=h>=0&&t[h],p=g>=0&&t[g];if(r&&!p||!r&&!v){jd(Fc(a,o),s,c);let m=BT(r?kT:UT,t.length,r,i,l);!r&&p&&(t[g].providerFactory=m),Dd(s,n,e.length,0),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(m),o.push(m)}else{let m=Z_(t[r?g:h],l,!r&&i);Dd(s,n,h>-1?h:g,m)}!r&&i&&p&&t[g].componentProviders++}}}function Dd(n,e,t,i){let r=Cs(e),s=Cw(e);if(r||s){let c=(s?rn(e.useClass):e).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){let u=l.indexOf(t);u===-1?l.push(t,[i,c]):l[u+1].push(i,c)}else l.push(t,c)}}}function Z_(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function Id(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function UT(n,e,t,i){return yf(this.multi,[])}function kT(n,e,t,i){let r=this.multi,s;if(this.providerFactory){let o=this.providerFactory.componentProviders,a=Pr(t,t[ze],this.providerFactory.index,i);s=a.slice(0,o),yf(r,s);for(let c=o;c<a.length;c++)s.push(a[c])}else s=[],yf(r,s);return s}function yf(n,e){for(let t=0;t<n.length;t++){let i=n[t];e.push(i())}return e}function BT(n,e,t,i,r){let s=new Nr(n,t,Br);return s.multi=[],s.index=e,s.componentProviders=0,Z_(s,r,i&&!t),s}function K_(n,e=[]){return t=>{t.providersResolver=(i,r)=>FT(i,r?r(n):n,e)}}var VT=(()=>{class n{constructor(t){this._injector=t,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=yy(!1,t.type),r=i.length>0?Kf([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static{this.\u0275prov=Fe({token:n,providedIn:"environment",factory:()=>new n(Ze(Dn))})}}return n})();function nr(n){Zf("NgStandalone"),n.getStandaloneInjector=e=>e.get(VT).getOrCreateStandaloneInjector(n)}var il=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"platform"})}}return n})();var J_=new Ge("");function Ko(n){return!!n&&typeof n.then=="function"}function Q_(n){return!!n&&typeof n.subscribe=="function"}var e0=new Ge(""),t0=(()=>{class n{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i}),this.appInits=ie(e0,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=r();if(Ko(s))t.push(s);else if(Q_(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),eh=new Ge("");function HT(){jg(()=>{throw new De(600,!1)})}function zT(n){return n.isBoundToModule}var GT=10;function jT(n,e,t){try{let i=t();return Ko(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Vr=(()=>{class n{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=ie(Ib),this.afterRenderManager=ie(IT),this.zonelessEnabled=ie(nl),this.dirtyFlags=0,this.deferredDirtyFlags=0,this.externalTestViews=new Set,this.beforeRender=new nn,this.afterTick=new nn,this.componentTypes=[],this.components=[],this.isStable=ie(Fs).hasPendingTasks.pipe(Ye(t=>!t)),this._injector=ie(Dn)}get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}get injector(){return this._injector}bootstrap(t,i){let r=t instanceof Hc;if(!this._injector.get(t0).done){let f=!r&&py(t),h=!1;throw new De(405,h)}let o;r?o=t:o=this._injector.get(Ps).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=zT(o)?void 0:this._injector.get(er),c=i||o.selector,l=o.create(Lr.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(J_,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),Ec(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){if(this._runningTick)throw new De(101,!1);let t=mt(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,mt(t),this.afterTick.next()}}synchronize(){let t=null;this._injector.destroyed||(t=this._injector.get(Ls,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let i=0;for(;this.dirtyFlags!==0&&i++<GT;)this.synchronizeOnce(t)}synchronizeOnce(t){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8,this.beforeRender.next(i);for(let{_lView:r,notifyErrorHandler:s}of this._views)WT(r,s,i,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&7)return}else t?.begin?.(),t?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Kc(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Ec(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t);let i=this._injector.get(eh,[]);[...this._bootstrapListeners,...i].forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Ec(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new De(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Ec(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function WT(n,e,t,i){if(!t&&!Kc(n))return;B_(n,e,t&&!i?0:1)}var _f=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},th=(()=>{class n{compileModuleSync(t){return new gf(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=my(t),s=m_(r.declarations).reduce((o,a)=>{let c=Tr(a);return c&&o.push(new qo(c)),o},[]);return new _f(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var $T=(()=>{class n{constructor(){this.zone=ie(Rt),this.changeDetectionScheduler=ie(Ns),this.applicationRef=ie(Vr)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),qT=new Ge("",{factory:()=>!1});function n0({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Rt(Et(ye({},r0()),{scheduleInRootZone:t})),[{provide:Rt,useFactory:n},{provide:As,multi:!0,useFactory:()=>{let i=ie($T,{optional:!0});return()=>i.initialize()}},{provide:As,multi:!0,useFactory:()=>{let i=ie(XT);return()=>{i.initialize()}}},e===!0?{provide:j_,useValue:!0}:[],{provide:W_,useValue:t??r_}]}function i0(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=n0({ngZoneFactory:()=>{let r=r0(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&Zf("NgZone_CoalesceEvent"),new Rt(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return qc([{provide:qT,useValue:!0},{provide:nl,useValue:!1},i])}function r0(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var XT=(()=>{class n{constructor(){this.subscription=new It,this.initialized=!1,this.zone=ie(Rt),this.pendingTasks=ie(Fs)}initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Rt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Rt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var YT=(()=>{class n{constructor(){this.appRef=ie(Vr),this.taskService=ie(Fs),this.ngZone=ie(Rt),this.zonelessEnabled=ie(nl),this.disableScheduling=ie(j_,{optional:!0})??!1,this.zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run,this.schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}],this.subscriptions=new It,this.angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(kc):null,this.scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ie(W_,{optional:!0})??!1),this.cancelScheduledCallback=null,this.useMicrotaskScheduler=!1,this.runningTick=!1,this.pendingRenderTaskId=null,this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Yd||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 7:{this.appRef.deferredDirtyFlags|=8;break}case 9:case 8:case 6:case 10:default:this.appRef.dirtyFlags|=8}if(!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?kv:o_;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.disableScheduling||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(kc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,kv(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function ZT(){return typeof $localize<"u"&&$localize.locale||jc}var nh=new Ge("",{providedIn:"root",factory:()=>ie(nh,$e.Optional|$e.SkipSelf)||ZT()});var s0=new Ge("");function xc(n){return!!n.platformInjector}function KT(n){let e=xc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Rt);return t.run(()=>{xc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Mi,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),xc(n)){let s=()=>e.destroy(),o=n.platformInjector.get(s0);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else n.moduleRef.onDestroy(()=>{Ec(n.allPlatformModules,n.moduleRef),r.unsubscribe()});return jT(i,t,()=>{let s=e.get(t0);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(nh,jc);if(LT(o||jc),xc(n)){let a=e.get(Vr);return n.rootComponent!==void 0&&a.bootstrap(n.rootComponent),a}else return JT(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function JT(n,e){let t=n.injector.get(Vr);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new De(-403,!1);e.push(n)}var Tc=null;function QT(n=[],e){return Lr.create({name:e,providers:[{provide:Xc,useValue:"platform"},{provide:s0,useValue:new Set([()=>Tc=null])},...n]})}function eA(n=[]){if(Tc)return Tc;let e=QT(n);return Tc=e,HT(),tA(e),e}function tA(n){n.get(Bf,null)?.forEach(t=>t())}var Jo=(()=>{class n{static{this.__NG_ELEMENT_ID__=nA}}return n})();function nA(n){return iA(qn(),Zt(),(n&16)===16)}function iA(n,e,t){if(Df(n)&&!t){let i=Zo(n.index,e);return new Or(i,i)}else if(n.type&175){let i=e[ci];return new Or(i,e)}return null}function o0(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=eA(i),s=[n0({}),{provide:Ns,useExisting:YT},...t||[]],o=new Gc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return KT({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}}var h0=null;function Hs(){return h0}function p0(n){h0??=n}var rl=class{};var In=new Ge(""),m0=(()=>{class n{historyGo(t){throw new Error("")}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:()=>ie(cA),providedIn:"platform"})}}return n})();var cA=(()=>{class n extends m0{constructor(){super(),this._doc=ie(In),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Hs().getBaseHref(this._doc)}onPopState(t){let i=Hs().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Hs().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:()=>new n,providedIn:"platform"})}}return n})();function g0(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function a0(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function Hr(n){return n&&n[0]!=="?"?"?"+n:n}var ol=(()=>{class n{historyGo(t){throw new Error("")}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:()=>ie(v0),providedIn:"root"})}}return n})(),lA=new Ge(""),v0=(()=>{class n extends ol{constructor(t,i){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??ie(In).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return g0(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Hr(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Hr(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Hr(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static{this.\u0275fac=function(i){return new(i||n)(Ze(m0),Ze(lA,8))}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Qo=(()=>{class n{constructor(t){this._subject=new Xt,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=fA(a0(c0(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Hr(i))}normalize(t){return n.stripTrailingSlash(dA(this._basePath,c0(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Hr(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Hr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i,complete:r})}static{this.normalizeQueryParams=Hr}static{this.joinWithSlash=g0}static{this.stripTrailingSlash=a0}static{this.\u0275fac=function(i){return new(i||n)(Ze(ol))}}static{this.\u0275prov=Fe({token:n,factory:()=>uA(),providedIn:"root"})}}return n})();function uA(){return new Qo(Ze(ol))}function dA(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function c0(n){return n.replace(/\/index.html$/,"")}function fA(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function y0(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var _0="browser",hA="server";function ih(n){return n===hA}var sl=class{};var oh=class extends rl{constructor(){super(...arguments),this.supportsDOMEvents=!0}},ah=class n extends oh{static makeCurrent(){p0(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=mA();return t==null?null:gA(t)}resetBaseElement(){ea=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return y0(document.cookie,e)}},ea=null;function mA(){return ea=ea||document.querySelector("base"),ea?ea.getAttribute("href"):null}function gA(n){return new URL(n,document.baseURI).pathname}var vA=(()=>{class n{build(){return new XMLHttpRequest}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac})}}return n})(),ch=new Ge(""),w0=(()=>{class n{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new De(5101,!1);return this._eventNameToPlugin.set(t,i),i}static{this.\u0275fac=function(i){return new(i||n)(Ze(ch),Ze(Rt))}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac})}}return n})(),al=class{constructor(e){this._doc=e}},rh="ng-app-id",b0=(()=>{class n{constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=ih(s),this.resetHostNodes()}addStyles(t){for(let i of t)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(t){for(let i of t)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(i=>i.remove()),t.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let i of this.getAllStyles())this.addStyleToHost(t,i)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let i of this.hostNodes)this.addStyleToHost(i,t)}onStyleRemoved(t){let i=this.styleRef;i.get(t)?.elements?.forEach(r=>r.remove()),i.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${rh}="${this.appId}"]`);if(t?.length){let i=new Map;return t.forEach(r=>{r.textContent!=null&&i.set(r.textContent,r)}),i}return null}changeUsageCount(t,i){let r=this.styleRef;if(r.has(t)){let s=r.get(t);return s.usage+=i,s.usage}return r.set(t,{usage:i,elements:[]}),i}getStyleElement(t,i){let r=this.styleNodesInDOM,s=r?.get(i);if(s?.parentNode===t)return r.delete(i),s.removeAttribute(rh),s;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=i,this.platformIsServer&&o.setAttribute(rh,this.appId),t.appendChild(o),o}}addStyleToHost(t,i){let r=this.getStyleElement(t,i),s=this.styleRef,o=s.get(i)?.elements;o?o.push(r):s.set(i,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(i){return new(i||n)(Ze(In),Ze(kf),Ze(Vf,8),Ze(ks))}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac})}}return n})(),sh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},uh=/%COMP%/g,E0="%COMP%",yA=`_nghost-${E0}`,_A=`_ngcontent-${E0}`,xA=!0,MA=new Ge("",{providedIn:"root",factory:()=>xA});function SA(n){return _A.replace(uh,n)}function wA(n){return yA.replace(uh,n)}function T0(n,e){return e.map(t=>t.replace(uh,n))}var x0=(()=>{class n{constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=ih(a),this.defaultRenderer=new ta(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===oi.ShadowDom&&(i=Et(ye({},i),{encapsulation:oi.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof cl?r.applyToHost(t):r instanceof na&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(i.encapsulation){case oi.Emulated:s=new cl(c,l,i,this.appId,u,o,a,d);break;case oi.ShadowDom:return new lh(c,l,t,i,o,a,this.nonce,d);default:s=new na(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(i){return new(i||n)(Ze(w0),Ze(b0),Ze(kf),Ze(MA),Ze(In),Ze(ks),Ze(Rt),Ze(Vf))}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac})}}return n})(),ta=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(sh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(M0(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(M0(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new De(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=sh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=sh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(kr.DashCase|kr.Important)?e.style.setProperty(t,i,r&kr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&kr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Hs().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function M0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var lh=class extends ta{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=T0(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},na=class extends ta{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?T0(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},cl=class extends na{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=SA(l),this.hostAttr=wA(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},bA=(()=>{class n extends al{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static{this.\u0275fac=function(i){return new(i||n)(Ze(In))}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac})}}return n})(),S0=["alt","control","meta","shift"],EA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},TA={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},AA=(()=>{class n extends al{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Hs().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),S0.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=EA[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),S0.forEach(o=>{if(o!==r){let a=TA[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(i){return new(i||n)(Ze(In))}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac})}}return n})();function A0(n,e){return o0(ye({rootComponent:n},CA(e)))}function CA(n){return{appProviders:[...PA,...n?.providers??[]],platformProviders:NA}}function DA(){ah.makeCurrent()}function IA(){return new Mi}function RA(){return h_(document),document}var NA=[{provide:ks,useValue:_0},{provide:Bf,useValue:DA,multi:!0},{provide:In,useFactory:RA,deps:[]}];var PA=[{provide:Xc,useValue:"root"},{provide:Mi,useFactory:IA,deps:[]},{provide:ch,useClass:bA,multi:!0,deps:[In,Rt,ks]},{provide:ch,useClass:AA,multi:!0,deps:[In]},x0,b0,w0,{provide:Ls,useExisting:x0},{provide:sl,useClass:vA,deps:[]},[]];var C0=(()=>{class n{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static{this.\u0275fac=function(i){return new(i||n)(Ze(In))}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Ve="primary",_a=Symbol("RouteTitle"),mh=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function qs(n){return new mh(n)}function OA(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function FA(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!li(n[t],e[t]))return!1;return!0}function li(n,e){let t=n?gh(n):void 0,i=e?gh(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!F0(n[r],e[r]))return!1;return!0}function gh(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function F0(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function U0(n){return n.length>0?n[n.length-1]:null}function ir(n){return pd(n)?n:Ko(n)?Pt(Promise.resolve(n)):Be(n)}var UA={exact:B0,subset:V0},k0={exact:kA,subset:BA,ignored:()=>!0};function D0(n,e,t){return UA[t.paths](n.root,e.root,t.matrixParams)&&k0[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function kA(n,e){return li(n,e)}function B0(n,e,t){if(!Gr(n.segments,e.segments)||!dl(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!B0(n.children[i],e.children[i],t))return!1;return!0}function BA(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>F0(n[t],e[t]))}function V0(n,e,t){return H0(n,e,e.segments,t)}function H0(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Gr(r,t)||e.hasChildren()||!dl(r,t,i))}else if(n.segments.length===t.length){if(!Gr(n.segments,t)||!dl(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!V0(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Gr(n.segments,r)||!dl(n.segments,r,i)||!n.children[Ve]?!1:H0(n.children[Ve],e,s,i)}}function dl(n,e,t){return e.every((i,r)=>k0[t](n[r].parameters,i.parameters))}var Ai=class{constructor(e=new ft([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=qs(this.queryParams),this._queryParamMap}toString(){return zA.serialize(this)}},ft=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return fl(this)}},zr=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=qs(this.parameters),this._parameterMap}toString(){return G0(this)}};function VA(n,e){return Gr(n,e)&&n.every((t,i)=>li(t.parameters,e[i].parameters))}function Gr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function HA(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ve&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ve&&(t=t.concat(e(r,i)))}),t}var zh=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:()=>new la,providedIn:"root"})}}return n})(),la=class{parse(e){let t=new yh(e);return new Ai(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${ia(e.root,!0)}`,i=WA(e.queryParams),r=typeof e.fragment=="string"?`#${GA(e.fragment)}`:"";return`${t}${i}${r}`}},zA=new la;function fl(n){return n.segments.map(e=>G0(e)).join("/")}function ia(n,e){if(!n.hasChildren())return fl(n);if(e){let t=n.children[Ve]?ia(n.children[Ve],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Ve&&i.push(`${r}:${ia(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=HA(n,(i,r)=>r===Ve?[ia(n.children[Ve],!1)]:[`${r}:${ia(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ve]!=null?`${fl(n)}/${t[0]}`:`${fl(n)}/(${t.join("//")})`}}function z0(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ll(n){return z0(n).replace(/%3B/gi,";")}function GA(n){return encodeURI(n)}function vh(n){return z0(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function hl(n){return decodeURIComponent(n)}function I0(n){return hl(n.replace(/\+/g,"%20"))}function G0(n){return`${vh(n.path)}${jA(n.parameters)}`}function jA(n){return Object.entries(n).map(([e,t])=>`;${vh(e)}=${vh(t)}`).join("")}function WA(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${ll(t)}=${ll(r)}`).join("&"):`${ll(t)}=${ll(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var $A=/^[^\/()?;#]+/;function dh(n){let e=n.match($A);return e?e[0]:""}var qA=/^[^\/()?;=#]+/;function XA(n){let e=n.match(qA);return e?e[0]:""}var YA=/^[^=?&#]+/;function ZA(n){let e=n.match(YA);return e?e[0]:""}var KA=/^[^&#]+/;function JA(n){let e=n.match(KA);return e?e[0]:""}var yh=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ft([],{}):new ft([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Ve]=new ft(e,t)),i}parseSegment(){let e=dh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new De(4009,!1);return this.capture(e),new zr(hl(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=XA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=dh(this.remaining);r&&(i=r,this.capture(i))}e[hl(t)]=hl(i)}parseQueryParam(e){let t=ZA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=JA(this.remaining);o&&(i=o,this.capture(i))}let r=I0(t),s=I0(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=dh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new De(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ve);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Ve]:new ft([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new De(4011,!1)}};function j0(n){return n.segments.length>0?new ft([],{[Ve]:n}):n}function W0(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=W0(r);if(i===Ve&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ft(n.segments,e);return QA(t)}function QA(n){if(n.numberOfChildren===1&&n.children[Ve]){let e=n.children[Ve];return new ft(n.segments.concat(e.segments),e.children)}return n}function ua(n){return n instanceof Ai}function eC(n,e,t=null,i=null){let r=$0(n);return q0(r,e,t,i)}function $0(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ft(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=j0(i);return e??r}function q0(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return fh(r,r,r,t,i);let s=tC(e);if(s.toRoot())return fh(r,r,new ft([],{}),t,i);let o=nC(s,r,n),a=o.processChildren?oa(o.segmentGroup,o.index,s.commands):Y0(o.segmentGroup,o.index,s.commands);return fh(r,o.segmentGroup,a,t,i)}function pl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function da(n){return typeof n=="object"&&n!=null&&n.outlets}function fh(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=X0(n,e,t);let a=j0(W0(o));return new Ai(a,s,r)}function X0(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=X0(s,e,t)}),new ft(n.segments,i)}var ml=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&pl(i[0]))throw new De(4003,!1);let r=i.find(da);if(r&&r!==U0(i))throw new De(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function tC(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new ml(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new ml(t,e,i)}var js=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function nC(n,e,t){if(n.isAbsolute)return new js(e,!0,0);if(!t)return new js(e,!1,NaN);if(t.parent===null)return new js(t,!0,0);let i=pl(n.commands[0])?0:1,r=t.segments.length-1+i;return iC(t,r,n.numberOfDoubleDots)}function iC(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new De(4005,!1);r=i.segments.length}return new js(i,!1,r-s)}function rC(n){return da(n[0])?n[0].outlets:{[Ve]:n}}function Y0(n,e,t){if(n??=new ft([],{}),n.segments.length===0&&n.hasChildren())return oa(n,e,t);let i=sC(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ft(n.segments.slice(0,i.pathIndex),{});return s.children[Ve]=new ft(n.segments.slice(i.pathIndex),n.children),oa(s,0,r)}else return i.match&&r.length===0?new ft(n.segments,{}):i.match&&!n.hasChildren()?_h(n,e,t):i.match?oa(n,0,r):_h(n,e,t)}function oa(n,e,t){if(t.length===0)return new ft(n.segments,{});{let i=rC(t),r={};if(Object.keys(i).some(s=>s!==Ve)&&n.children[Ve]&&n.numberOfChildren===1&&n.children[Ve].segments.length===0){let s=oa(n.children[Ve],e,t);return new ft(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Y0(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ft(n.segments,r)}}function sC(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(da(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!N0(c,l,o))return s;i+=2}else{if(!N0(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function _h(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(da(s)){let c=oC(s.outlets);return new ft(i,c)}if(r===0&&pl(t[0])){let c=n.segments[e];i.push(new zr(c.path,R0(t[0]))),r++;continue}let o=da(s)?s.outlets[Ve]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&pl(a)?(i.push(new zr(o,R0(a))),r+=2):(i.push(new zr(o,{})),r++)}return new ft(i,{})}function oC(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=_h(new ft([],{}),0,i))}),e}function R0(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function N0(n,e,t){return n==t.path&&li(e,t.parameters)}var aa="imperative",$t=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}($t||{}),Rn=class{constructor(e,t){this.id=e,this.url=t}},fa=class extends Rn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=$t.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},jr=class extends Rn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=$t.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Mn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(Mn||{}),xh=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(xh||{}),Ti=class extends Rn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=$t.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Wr=class extends Rn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=$t.NavigationSkipped}},ha=class extends Rn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=$t.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},gl=class extends Rn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=$t.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mh=class extends Rn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=$t.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Sh=class extends Rn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=$t.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},wh=class extends Rn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=$t.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},bh=class extends Rn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=$t.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Eh=class{constructor(e){this.route=e,this.type=$t.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Th=class{constructor(e){this.route=e,this.type=$t.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ah=class{constructor(e){this.snapshot=e,this.type=$t.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ch=class{constructor(e){this.snapshot=e,this.type=$t.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Dh=class{constructor(e){this.snapshot=e,this.type=$t.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ih=class{constructor(e){this.snapshot=e,this.type=$t.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var pa=class{},Xs=class{constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function aC(n,e){return n.providers&&!n._injector&&(n._injector=Kf(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Yn(n){return n.outlet||Ve}function cC(n,e){let t=n.filter(i=>Yn(i)===e);return t.push(...n.filter(i=>Yn(i)!==e)),t}function xa(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Rh=class{get injector(){return xa(this.route?.snapshot)??this.rootInjector}set injector(e){}constructor(e){this.rootInjector=e,this.outlet=null,this.route=null,this.children=new wl(this.rootInjector),this.attachRef=null}},wl=(()=>{class n{constructor(t){this.rootInjector=t,this.contexts=new Map}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new Rh(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static{this.\u0275fac=function(i){return new(i||n)(Ze(Dn))}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),vl=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Nh(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Nh(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Ph(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Ph(e,this._root).map(t=>t.value)}};function Nh(n,e){if(n===e.value)return e;for(let t of e.children){let i=Nh(n,t);if(i)return i}return null}function Ph(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Ph(n,t);if(i.length)return i.unshift(e),i}return[]}var xn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Gs(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var yl=class extends vl{constructor(e,t){super(e),this.snapshot=t,Gh(this,e)}toString(){return this.snapshot.toString()}};function Z0(n){let e=lC(n),t=new jt([new zr("",{})]),i=new jt({}),r=new jt({}),s=new jt({}),o=new jt(""),a=new Ys(t,i,s,o,r,Ve,n,e.root);return a.snapshot=e.root,new yl(new xn(a,[]),e)}function lC(n){let e={},t={},i={},r="",s=new Ws([],e,i,r,t,Ve,n,null,{});return new xl("",new xn(s,[]))}var Ys=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Ye(l=>l[_a]))??Be(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ye(e=>qs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ye(e=>qs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function _l(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:ye(ye({},e.params),n.params),data:ye(ye({},e.data),n.data),resolve:ye(ye(ye(ye({},n.data),e.data),r?.data),n._resolvedData)}:i={params:ye({},n.params),data:ye({},n.data),resolve:ye(ye({},n.data),n._resolvedData??{})},r&&J0(r)&&(i.resolve[_a]=r.title),i}var Ws=class{get title(){return this.data?.[_a]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=qs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=qs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},xl=class extends vl{constructor(e,t){super(t),this.url=e,Gh(this,t)}toString(){return K0(this._root)}};function Gh(n,e){e.value._routerState=n,e.children.forEach(t=>Gh(n,t))}function K0(n){let e=n.children.length>0?` { ${n.children.map(K0).join(", ")} } `:"";return`${n.value}${e}`}function hh(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,li(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),li(e.params,t.params)||n.paramsSubject.next(t.params),FA(e.url,t.url)||n.urlSubject.next(t.url),li(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Lh(n,e){let t=li(n.params,e.params)&&VA(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Lh(n.parent,e.parent))}function J0(n){return typeof n.title=="string"||n.title===null}var uC=(()=>{class n{constructor(){this.activated=null,this._activatedRoute=null,this.name=Ve,this.activateEvents=new Xt,this.deactivateEvents=new Xt,this.attachEvents=new Xt,this.detachEvents=new Xt,this.parentContexts=ie(wl),this.location=ie(Bs),this.changeDetector=ie(Jo),this.inputBinder=ie(jh,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new De(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new De(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new De(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new De(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Oh(t,a,r.injector);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=Tf({type:n,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Zc]})}}return n})(),Oh=class n{__ngOutletInjector(e){return new n(this.route,this.childContexts,e)}constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===Ys?this.route:e===wl?this.childContexts:this.parent.get(e,t)}},jh=new Ge("");function dC(n,e,t){let i=ma(n,e._root,t?t._root:void 0);return new yl(i,e)}function ma(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=fC(n,e,t);return new xn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>ma(n,a)),o}}let i=hC(e.value),r=e.children.map(s=>ma(n,s));return new xn(i,r)}}function fC(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return ma(n,i,r);return ma(n,i)})}function hC(n){return new Ys(new jt(n.url),new jt(n.params),new jt(n.queryParams),new jt(n.fragment),new jt(n.data),n.outlet,n.component,n)}var ga=class{constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},Q0="ngNavigationCancelingError";function Ml(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=ua(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=ex(!1,Mn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function ex(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[Q0]=!0,t.cancellationCode=e,t}function pC(n){return tx(n)&&ua(n.url)}function tx(n){return!!n&&n[Q0]}var mC=(n,e,t,i)=>Ye(r=>(new Fh(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Fh=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),hh(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Gs(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Gs(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Gs(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Gs(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Ih(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Ch(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(hh(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),hh(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Sl=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},$s=class{constructor(e,t){this.component=e,this.route=t}};function gC(n,e,t){let i=n._root,r=e?e._root:null;return ra(i,r,t,[i.value])}function vC(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Ks(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!ty(n)?n:e.get(n):i}function ra(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Gs(e);return n.children.forEach(o=>{yC(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>ca(a,t.getContext(o),r)),r}function yC(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=_C(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Sl(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?ra(n,e,a?a.children:null,i,r):ra(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new $s(a.outlet.component,o))}else o&&ca(e,a,r),r.canActivateChecks.push(new Sl(i)),s.component?ra(n,null,a?a.children:null,i,r):ra(n,null,t,i,r);return r}function _C(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Gr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Gr(n.url,e.url)||!li(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Lh(n,e)||!li(n.queryParams,e.queryParams);case"paramsChange":default:return!Lh(n,e)}}function ca(n,e,t){let i=Gs(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?ca(o,e.children.getContext(s),t):ca(o,null,t):ca(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new $s(e.outlet.component,r)):t.canDeactivateChecks.push(new $s(null,r)):t.canDeactivateChecks.push(new $s(null,r))}function Ma(n){return typeof n=="function"}function xC(n){return typeof n=="boolean"}function MC(n){return n&&Ma(n.canLoad)}function SC(n){return n&&Ma(n.canActivate)}function wC(n){return n&&Ma(n.canActivateChild)}function bC(n){return n&&Ma(n.canDeactivate)}function EC(n){return n&&Ma(n.canMatch)}function nx(n){return n instanceof vi||n?.name==="EmptyError"}var ul=Symbol("INITIAL_VALUE");function Zs(){return Gn(n=>vc(n.map(e=>e.pipe(yi(1),_d(ul)))).pipe(Ye(e=>{for(let t of e)if(t!==!0){if(t===ul)return ul;if(t===!1||TC(t))return t}return!0}),zn(e=>e!==ul),yi(1)))}function TC(n){return ua(n)||n instanceof ga}function AC(n,e){return Lt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Be(Et(ye({},t),{guardsResult:!0})):CC(o,i,r,n).pipe(Lt(a=>a&&xC(a)?DC(i,s,n,e):Be(a)),Ye(a=>Et(ye({},t),{guardsResult:a})))})}function CC(n,e,t,i){return Pt(n).pipe(Lt(r=>LC(r.component,r.route,t,e,i)),ri(r=>r!==!0,!0))}function DC(n,e,t,i){return Pt(e).pipe(ys(r=>vs(RC(r.route.parent,i),IC(r.route,i),PC(n,r.path,t),NC(n,r.route,t))),ri(r=>r!==!0,!0))}function IC(n,e){return n!==null&&e&&e(new Dh(n)),Be(!0)}function RC(n,e){return n!==null&&e&&e(new Ah(n)),Be(!0)}function NC(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Be(!0);let r=i.map(s=>yc(()=>{let o=xa(e)??t,a=Ks(s,o),c=SC(a)?a.canActivate(e,n):Si(o,()=>a(e,n));return ir(c).pipe(ri())}));return Be(r).pipe(Zs())}function PC(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>vC(o)).filter(o=>o!==null).map(o=>yc(()=>{let a=o.guards.map(c=>{let l=xa(o.node)??t,u=Ks(c,l),d=wC(u)?u.canActivateChild(i,n):Si(l,()=>u(i,n));return ir(d).pipe(ri())});return Be(a).pipe(Zs())}));return Be(s).pipe(Zs())}function LC(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Be(!0);let o=s.map(a=>{let c=xa(e)??r,l=Ks(a,c),u=bC(l)?l.canDeactivate(n,e,t,i):Si(c,()=>l(n,e,t,i));return ir(u).pipe(ri())});return Be(o).pipe(Zs())}function OC(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Be(!0);let s=r.map(o=>{let a=Ks(o,n),c=MC(a)?a.canLoad(e,t):Si(n,()=>a(e,t));return ir(c)});return Be(s).pipe(Zs(),ix(i))}function ix(n){return ud(Wt(e=>{if(typeof e!="boolean")throw Ml(n,e)}),Ye(e=>e===!0))}function FC(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Be(!0);let s=r.map(o=>{let a=Ks(o,n),c=EC(a)?a.canMatch(e,t):Si(n,()=>a(e,t));return ir(c)});return Be(s).pipe(Zs(),ix(i))}var va=class{constructor(e){this.segmentGroup=e||null}},ya=class extends Error{constructor(e){super(),this.urlTree=e}};function zs(n){return gs(new va(n))}function UC(n){return gs(new De(4e3,!1))}function kC(n){return gs(ex(!1,Mn.GuardRejected))}var Uh=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Be(i);if(r.numberOfChildren>1||!r.children[Ve])return UC(`${e.redirectTo}`);r=r.children[Ve]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:h,data:g,title:v}=r,p=Si(s,()=>a({params:h,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:v}));if(p instanceof Ai)throw new ya(p);t=p}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new ya(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Ai(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ft(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new De(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},kh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function BC(n,e,t,i,r){let s=rx(n,e,t);return s.matched?(i=aC(e,i),FC(i,e,t,r).pipe(Ye(o=>o===!0?s:ye({},kh)))):Be(s)}function rx(n,e,t){if(e.path==="**")return VC(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?ye({},kh):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||OA)(t,n,e);if(!r)return ye({},kh);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?ye(ye({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function VC(n){return{matched:!0,parameters:n.length>0?U0(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function P0(n,e,t,i){return t.length>0&&GC(n,t,i)?{segmentGroup:new ft(e,zC(i,new ft(t,n.children))),slicedSegments:[]}:t.length===0&&jC(n,t,i)?{segmentGroup:new ft(n.segments,HC(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ft(n.segments,n.children),slicedSegments:t}}function HC(n,e,t,i){let r={};for(let s of t)if(bl(n,e,s)&&!i[Yn(s)]){let o=new ft([],{});r[Yn(s)]=o}return ye(ye({},i),r)}function zC(n,e){let t={};t[Ve]=e;for(let i of n)if(i.path===""&&Yn(i)!==Ve){let r=new ft([],{});t[Yn(i)]=r}return t}function GC(n,e,t){return t.some(i=>bl(n,e,i)&&Yn(i)!==Ve)}function jC(n,e,t){return t.some(i=>bl(n,e,i))}function bl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function WC(n,e,t){return e.length===0&&!n.children[t]}var Bh=class{};function $C(n,e,t,i,r,s,o="emptyOnly"){return new Vh(n,e,t,i,r,o,s).recognize()}var qC=31,Vh=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Uh(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new De(4002,`'${e.segmentGroup}'`)}recognize(){let e=P0(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Ye(({children:t,rootSnapshot:i})=>{let r=new xn(i,t),s=new xl("",r),o=eC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Ws([],Object.freeze({}),Object.freeze(ye({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ve,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Ve,t).pipe(Ye(i=>({children:i,rootSnapshot:t})),$i(i=>{if(i instanceof ya)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof va?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(Ye(o=>o instanceof xn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Pt(s).pipe(ys(o=>{let a=i.children[o],c=cC(t,o);return this.processSegmentGroup(e,c,a,o,r)}),yd((o,a)=>(o.push(...a),o)),qi(null),vd(),Lt(o=>{if(o===null)return zs(i);let a=sx(o);return XC(a),Be(a)}))}processSegment(e,t,i,r,s,o,a){return Pt(t).pipe(ys(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe($i(l=>{if(l instanceof va)return Be(null);throw l}))),ri(c=>!!c),$i(c=>{if(nx(c))return WC(i,r,s)?Be(new Bh):zs(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return Yn(i)!==o&&(o===Ve||!bl(r,s,i))?zs(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):zs(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=rx(t,r,s);if(!c)return zs(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>qC&&(this.allowRedirects=!1));let h=new Ws(s,l,Object.freeze(ye({},this.urlTree.queryParams)),this.urlTree.fragment,L0(r),Yn(r),r.component??r._loadedComponent??null,r,O0(r)),g=_l(h,a,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let v=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e);return this.applyRedirects.lineralizeSegments(r,v).pipe(Lt(p=>this.processSegment(e,i,t,p.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=BC(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Gn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Gn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=new Ws(f,d,Object.freeze(ye({},this.urlTree.queryParams)),this.urlTree.fragment,L0(i),Yn(i),i.component??i._loadedComponent??null,i,O0(i)),v=_l(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(v.params),g.data=Object.freeze(v.data);let{segmentGroup:p,slicedSegments:m}=P0(t,f,h,l);if(m.length===0&&p.hasChildren())return this.processChildren(u,l,p,g).pipe(Ye(M=>new xn(g,M)));if(l.length===0&&m.length===0)return Be(new xn(g,[]));let w=Yn(i)===s;return this.processSegment(u,l,p,m,w?Ve:s,!0,g).pipe(Ye(M=>new xn(g,M instanceof xn?[M]:[])))}))):zs(t)))}getChildConfig(e,t,i){return t.children?Be({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Be({routes:t._loadedRoutes,injector:t._loadedInjector}):OC(e,t,i,this.urlSerializer).pipe(Lt(r=>r?this.configLoader.loadChildren(e,t).pipe(Wt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):kC(t))):Be({routes:[],injector:e})}};function XC(n){n.sort((e,t)=>e.value.outlet===Ve?-1:t.value.outlet===Ve?1:e.value.outlet.localeCompare(t.value.outlet))}function YC(n){let e=n.value.routeConfig;return e&&e.path===""}function sx(n){let e=[],t=new Set;for(let i of n){if(!YC(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=sx(i.children);e.push(new xn(i.value,r))}return e.filter(i=>!t.has(i))}function L0(n){return n.data||{}}function O0(n){return n.resolve||{}}function ZC(n,e,t,i,r,s){return Lt(o=>$C(n,e,t,i,o.extractedUrl,r,s).pipe(Ye(({state:a,tree:c})=>Et(ye({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function KC(n,e){return Lt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Be(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of ox(c))o.add(l);let a=0;return Pt(o).pipe(ys(c=>s.has(c)?JC(c,i,n,e):(c.data=_l(c,c.parent,n).resolve,Be(void 0))),Wt(()=>a++),_s(1),Lt(c=>a===o.size?Be(t):vn))})}function ox(n){let e=n.children.map(t=>ox(t)).flat();return[n,...e]}function JC(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!J0(r)&&(s[_a]=r.title),QC(s,n,e,i).pipe(Ye(o=>(n._resolvedData=o,n.data=_l(n,n.parent,t).resolve,null)))}function QC(n,e,t,i){let r=gh(n);if(r.length===0)return Be({});let s={};return Pt(r).pipe(Lt(o=>eD(n[o],e,t,i).pipe(ri(),Wt(a=>{if(a instanceof ga)throw Ml(new la,a);s[o]=a}))),_s(1),gd(s),$i(o=>nx(o)?vn:gs(o)))}function eD(n,e,t,i){let r=xa(e)??i,s=Ks(n,r),o=s.resolve?s.resolve(e,t):Si(r,()=>s(e,t));return ir(o)}function ph(n){return Gn(e=>{let t=n(e);return t?Pt(t).pipe(Ye(()=>e)):Be(e)})}var ax=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Ve);return i}getResolvedTitleForRoute(t){return t.data[_a]}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:()=>ie(tD),providedIn:"root"})}}return n})(),tD=(()=>{class n extends ax{constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static{this.\u0275fac=function(i){return new(i||n)(Ze(C0))}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Wh=new Ge("",{providedIn:"root",factory:()=>({})}),nD=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=tr({type:n,selectors:[["ng-component"]],standalone:!0,features:[nr],decls:1,vars:0,template:function(i,r){i&1&&Xn(0,"router-outlet")},dependencies:[uC],encapsulation:2})}}return n})();function $h(n){let e=n.children&&n.children.map($h),t=e?Et(ye({},n),{children:e}):ye({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ve&&(t.component=nD),t}var qh=new Ge(""),iD=(()=>{class n{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=ie(th)}loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Be(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=ir(t.loadComponent()).pipe(Ye(cx),Wt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),ko(()=>{this.componentLoaders.delete(t)})),r=new ms(i,()=>new nn).pipe(ps());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Be({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=rD(i,this.compiler,t,this.onLoadEndListener).pipe(ko(()=>{this.childrenLoaders.delete(i)})),o=new ms(s,()=>new nn).pipe(ps());return this.childrenLoaders.set(i,o),o}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function rD(n,e,t,i){return ir(n.loadChildren()).pipe(Ye(cx),Lt(r=>r instanceof Xo||Array.isArray(r)?Be(r):Pt(e.compileModuleAsync(r))),Ye(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(qh,[],{optional:!0,self:!0}).flat()),{routes:o.map($h),injector:s}}))}function sD(n){return n&&typeof n=="object"&&"default"in n}function cx(n){return sD(n)?n.default:n}var Xh=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:()=>ie(oD),providedIn:"root"})}}return n})(),oD=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),aD=new Ge("");var cD=new Ge(""),lD=(()=>{class n{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new nn,this.transitionAbortSubject=new nn,this.configLoader=ie(iD),this.environmentInjector=ie(Dn),this.urlSerializer=ie(zh),this.rootContexts=ie(wl),this.location=ie(Qo),this.inputBindingEnabled=ie(jh,{optional:!0})!==null,this.titleStrategy=ie(ax),this.options=ie(Wh,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=ie(Xh),this.createViewTransition=ie(aD,{optional:!0}),this.navigationErrorHandler=ie(cD,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Be(void 0),this.rootComponentType=null;let t=r=>this.events.next(new Eh(r)),i=r=>this.events.next(new Th(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(Et(ye(ye({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new jt({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:aa,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(zn(s=>s.id!==0),Ye(s=>Et(ye({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Gn(s=>{let o=!1,a=!1;return Be(s).pipe(Gn(c=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",Mn.SupersededByNewNavigation),vn;this.currentTransition=s,this.currentNavigation={id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:this.lastSuccessfulNavigation?Et(ye({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload"){let d="";return this.events.next(new Wr(c.id,this.urlSerializer.serialize(c.rawUrl),d,xh.IgnoredSameUrlNavigation)),c.resolve(!1),vn}if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return Be(c).pipe(Gn(d=>{let f=this.transitions?.getValue();return this.events.next(new fa(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions?.getValue()?vn:Promise.resolve(d)}),ZC(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Wt(d=>{s.targetSnapshot=d.targetSnapshot,s.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=Et(ye({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let f=new gl(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:d,extractedUrl:f,source:h,restoredState:g,extras:v}=c,p=new fa(d,this.urlSerializer.serialize(f),h,g);this.events.next(p);let m=Z0(this.rootComponentType).snapshot;return this.currentTransition=s=Et(ye({},c),{targetSnapshot:m,urlAfterRedirects:f,extras:Et(ye({},v),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,Be(s)}else{let d="";return this.events.next(new Wr(c.id,this.urlSerializer.serialize(c.extractedUrl),d,xh.IgnoredByUrlHandlingStrategy)),c.resolve(!1),vn}}),Wt(c=>{let l=new Mh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),Ye(c=>(this.currentTransition=s=Et(ye({},c),{guards:gC(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),s)),AC(this.environmentInjector,c=>this.events.next(c)),Wt(c=>{if(s.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw Ml(this.urlSerializer,c.guardsResult);let l=new Sh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);this.events.next(l)}),zn(c=>c.guardsResult?!0:(this.cancelNavigationTransition(c,"",Mn.GuardRejected),!1)),ph(c=>{if(c.guards.canActivateChecks.length)return Be(c).pipe(Wt(l=>{let u=new wh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Gn(l=>{let u=!1;return Be(l).pipe(KC(this.paramsInheritanceStrategy,this.environmentInjector),Wt({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(l,"",Mn.NoDataFromResolver)}}))}),Wt(l=>{let u=new bh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}))}),ph(c=>{let l=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(Wt(f=>{u.component=f}),Ye(()=>{})));for(let f of u.children)d.push(...l(f));return d};return vc(l(c.targetSnapshot.root)).pipe(qi(null),yi(1))}),ph(()=>this.afterPreactivation()),Gn(()=>{let{currentSnapshot:c,targetSnapshot:l}=s,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?Pt(u).pipe(Ye(()=>s)):Be(s)}),Ye(c=>{let l=dC(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=s=Et(ye({},c),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,s}),Wt(()=>{this.events.next(new pa)}),mC(this.rootContexts,t.routeReuseStrategy,c=>this.events.next(c),this.inputBindingEnabled),yi(1),Wt({next:c=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new jr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)},complete:()=>{o=!0}}),xd(this.transitionAbortSubject.pipe(Wt(c=>{throw c}))),ko(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",Mn.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),$i(c=>{if(a=!0,tx(c))this.events.next(new Ti(s.id,this.urlSerializer.serialize(s.extractedUrl),c.message,c.cancellationCode)),pC(c)?this.events.next(new Xs(c.url,c.navigationBehaviorOptions)):s.resolve(!1);else{let l=new ha(s.id,this.urlSerializer.serialize(s.extractedUrl),c,s.targetSnapshot??void 0);try{let u=Si(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof ga){let{message:d,cancellationCode:f}=Ml(this.urlSerializer,u);this.events.next(new Ti(s.id,this.urlSerializer.serialize(s.extractedUrl),d,f)),this.events.next(new Xs(u.redirectTo,u.navigationBehaviorOptions))}else{this.events.next(l);let d=t.errorHandler(c);s.resolve(!!d)}}catch(u){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(u)}}return vn}))}))}cancelNavigationTransition(t,i,r){let s=new Ti(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function uD(n){return n!==aa}var dD=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:()=>ie(fD),providedIn:"root"})}}return n})(),Hh=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},fD=(()=>{class n extends Hh{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Of(n)))(r||n)}})()}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),lx=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:()=>ie(hD),providedIn:"root"})}}return n})(),hD=(()=>{class n extends lx{constructor(){super(...arguments),this.location=ie(Qo),this.urlSerializer=ie(zh),this.options=ie(Wh,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=ie(Xh),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Ai,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Z0(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof fa)this.stateMemento=this.createStateMemento();else if(t instanceof Wr)this.rawUrlTree=i.initialUrl;else if(t instanceof gl){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof pa?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof Ti&&(t.code===Mn.GuardRejected||t.code===Mn.NoDataFromResolver)?this.restoreHistory(i):t instanceof ha?this.restoreHistory(i,!0):t instanceof jr&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof Ai?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=ye(ye({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=ye(ye({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Of(n)))(r||n)}})()}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),sa=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(sa||{});function pD(n,e){n.events.pipe(zn(t=>t instanceof jr||t instanceof Ti||t instanceof ha||t instanceof Wr),Ye(t=>t instanceof jr||t instanceof Wr?sa.COMPLETE:(t instanceof Ti?t.code===Mn.Redirect||t.code===Mn.SupersededByNewNavigation:!1)?sa.REDIRECTING:sa.FAILED),zn(t=>t!==sa.REDIRECTING),yi(1)).subscribe(()=>{e()})}function mD(n){throw n}var gD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},vD={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},ux=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=ie(il),this.stateManager=ie(lx),this.options=ie(Wh,{optional:!0})||{},this.pendingTasks=ie(Fs),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=ie(lD),this.urlSerializer=ie(zh),this.location=ie(Qo),this.urlHandlingStrategy=ie(Xh),this._events=new nn,this.errorHandler=this.options.errorHandler||mD,this.navigated=!1,this.routeReuseStrategy=ie(dD),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=ie(qh,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!ie(jh,{optional:!0}),this.eventsSubscription=new It,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof Ti&&i.code!==Mn.Redirect&&i.code!==Mn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof jr)this.navigated=!0;else if(i instanceof Xs){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=ye({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||uD(r.source)},o);this.scheduleNavigation(a,aa,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}_D(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),aa,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=ye({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map($h),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=ye(ye({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=$0(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return q0(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=ua(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,aa,null,i)}navigate(t,i={skipLocationChange:!1}){return yD(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=ye({},gD):i===!1?r=ye({},vD):r=i,ua(t))return D0(this.currentUrlTree,t,r);let s=this.parseUrl(t);return D0(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return pD(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function yD(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new De(4008,!1)}function _D(n){return!(n instanceof pa)&&!(n instanceof Xs)}var xD=new Ge("");function dx(n,...e){return qc([{provide:qh,multi:!0,useValue:n},[],{provide:Ys,useFactory:MD,deps:[ux]},{provide:eh,multi:!0,useFactory:SD},e.map(t=>t.\u0275providers)])}function MD(n){return n.routerState.root}function SD(){let n=ie(Lr);return e=>{let t=n.get(Vr);if(e!==t.components[0])return;let i=n.get(ux),r=n.get(wD);n.get(bD)===1&&i.initialNavigation(),n.get(ED,null,$e.Optional)?.setUpPreloading(),n.get(xD,null,$e.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var wD=new Ge("",{factory:()=>new nn}),bD=new Ge("",{providedIn:"root",factory:()=>1});var ED=new Ge("");var fx=[];var hx={providers:[i0({eventCoalescing:!0}),dx(fx)]};var Vm="169";var TD=0,px=1,AD=2;var IM=1,CD=2,Li=3,hi=0,dn=1,Qn=2,fr=0,go=1,mx=2,gx=3,vx=4,DD=5,Qr=100,ID=101,RD=102,ND=103,PD=104,LD=200,OD=201,FD=202,UD=203,Cp=204,Dp=205,kD=206,BD=207,VD=208,HD=209,zD=210,GD=211,jD=212,WD=213,$D=214,Ip=0,Rp=1,Np=2,xo=3,Pp=4,Lp=5,Op=6,Fp=7,RM=0,qD=1,XD=2,hr=0,YD=1,ZD=2,KD=3,JD=4,QD=5,eI=6,tI=7,yx="attached",nI="detached",_x=300,Mo=301,So=302,Up=303,kp=304,Uu=306,ns=1e3,Fi=1001,Fa=1002,tn=1003,Hm=1004;var po=1005;var un=1006,Na=1007;var di=1008;var ki=1009,NM=1010,PM=1011,Ua=1012,zm=1013,is=1014,ti=1015,Xa=1016,Gm=1017,jm=1018,wo=1020,LM=35902,OM=1021,FM=1022,Pn=1023,UM=1024,kM=1025,vo=1026,bo=1027,Wm=1028,$m=1029,BM=1030,qm=1031;var Xm=1033,Jl=33776,Ql=33777,eu=33778,tu=33779,Bp=35840,Vp=35841,Hp=35842,zp=35843,Gp=36196,jp=37492,Wp=37496,$p=37808,qp=37809,Xp=37810,Yp=37811,Zp=37812,Kp=37813,Jp=37814,Qp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,nu=36492,om=36494,am=36495,VM=36283,cm=36284,lm=36285,um=36286;var Eo=2300,To=2301,Yh=2302,xx=2400,Mx=2401,Sx=2402,iI=2500;var HM=0,ku=1,Ya=2,rI=3200,sI=3201;var Ym=0,oI=1,ur="",Qt="srgb",zt="srgb-linear",Zm="display-p3",Bu="display-p3-linear",ru="linear",bt="srgb",su="rec709",ou="p3";var Js=7680;var wx=519,aI=512,cI=513,lI=514,zM=515,uI=516,dI=517,fI=518,hI=519,dm=35044;var bx="300 es",Ui=2e3,au=2001,pr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ex=1234567,Pa=Math.PI/180,Ao=180/Math.PI;function ni(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function en(n,e,t){return Math.max(e,Math.min(t,n))}function Km(n,e){return(n%e+e)%e}function pI(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function mI(n,e,t){return n!==e?(t-n)/(e-n):0}function La(n,e,t){return(1-t)*n+t*e}function gI(n,e,t,i){return La(n,e,1-Math.exp(-t*i))}function vI(n,e=1){return e-Math.abs(Km(n,e*2)-e)}function yI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _I(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function xI(n,e){return n+Math.floor(Math.random()*(e-n+1))}function MI(n,e){return n+Math.random()*(e-n)}function SI(n){return n*(.5-Math.random())}function wI(n){n!==void 0&&(Ex=n);let e=Ex+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bI(n){return n*Pa}function EI(n){return n*Ao}function TI(n){return(n&n-1)===0&&n!==0}function AI(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function CI(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function DI(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var GM={DEG2RAD:Pa,RAD2DEG:Ao,generateUUID:ni,clamp:en,euclideanModulo:Km,mapLinear:pI,inverseLerp:mI,lerp:La,damp:gI,pingpong:vI,smoothstep:yI,smootherstep:_I,randInt:xI,randFloat:MI,randFloatSpread:SI,seededRandom:wI,degToRad:bI,radToDeg:EI,isPowerOfTwo:TI,ceilPowerOfTwo:AI,floorPowerOfTwo:CI,setQuaternionFromProperEuler:DI,normalize:vt,denormalize:ei},Xe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=r[0],p=r[3],m=r[6],w=r[1],M=r[4],b=r[7],P=r[2],A=r[5],T=r[8];return s[0]=o*v+a*w+c*P,s[3]=o*p+a*M+c*A,s[6]=o*m+a*b+c*T,s[1]=l*v+u*w+d*P,s[4]=l*p+u*M+d*A,s[7]=l*m+u*b+d*T,s[2]=f*v+h*w+g*P,s[5]=f*p+h*M+g*A,s[8]=f*m+h*b+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zh.makeScale(e,t)),this}rotate(e){return this.premultiply(Zh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zh=new We;function jM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function II(){let n=ka("canvas");return n.style.display="block",n}var Tx={};function iu(n){n in Tx||(Tx[n]=!0,console.warn(n))}function RI(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function NI(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function PI(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ax=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cx=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sa={[zt]:{transfer:ru,primaries:su,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Qt]:{transfer:bt,primaries:su,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Bu]:{transfer:ru,primaries:ou,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Cx),fromReference:n=>n.applyMatrix3(Ax)},[Zm]:{transfer:bt,primaries:ou,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Cx),fromReference:n=>n.applyMatrix3(Ax).convertLinearToSRGB()}},LI=new Set([zt,Bu]),rt={enabled:!0,_workingColorSpace:zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!LI.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Sa[e].toReference,r=Sa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Sa[n].primaries},getTransfer:function(n){return n===ur?ru:Sa[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Sa[e].luminanceCoefficients)}};function yo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Kh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qs,fm=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=ka("canvas")),Qs.width=e.width,Qs.height=e.height;let i=Qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ka("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yo(t[i]/255)*255):t[i]=yo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},OI=0,cu=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OI++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jh(r[o].image)):s.push(Jh(r[o]))}else s=Jh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Jh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var FI=0,kn=(()=>{class n extends pr{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Fi,s=Fi,o=un,a=di,c=Pn,l=ki,u=n.DEFAULT_ANISOTROPY,d=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FI++}),this.uuid=ni(),this.name="",this.source=new cu(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_x)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=_x,n.DEFAULT_ANISOTROPY=1,n})(),lt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,b=(h+1)/2,P=(m+1)/2,A=(u+f)/4,T=(d+v)/4,L=(g+p)/4;return M>b&&M>P?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=A/i,s=T/i):b>P?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=L/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-v)/w,this.z=(f-u)/w,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hm=class extends pr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new kn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new cu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bi=class extends hm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},lu=class extends kn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pm=class extends kn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ii=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==h||u!==g){let p=1-a,m=c*f+l*h+u*g+d*v,w=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let P=Math.sqrt(M),A=Math.atan2(P,m*w);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}let b=a*w;if(c=c*p+f*b,l=l*p+h*b,u=u*p+g*b,d=d*p+v*b,p===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=P,l*=P,u*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qh.copy(this).projectOnVector(e),this.sub(Qh)}reflect(e){return this.sub(Qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qh=new R,Dx=new ii,On=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(s,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),El.copy(i.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),Tl.subVectors(this.max,wa),eo.subVectors(e.a,wa),to.subVectors(e.b,wa),no.subVectors(e.c,wa),rr.subVectors(to,eo),sr.subVectors(no,to),$r.subVectors(eo,no);let t=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-$r.z,$r.y,rr.z,0,-rr.x,sr.z,0,-sr.x,$r.z,0,-$r.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-$r.y,$r.x,0];return!ep(t,eo,to,no,Tl)||(t=[1,0,0,0,1,0,0,0,1],!ep(t,eo,to,no,Tl))?!1:(Al.crossVectors(rr,sr),t=[Al.x,Al.y,Al.z],ep(t,eo,to,no,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ci=[new R,new R,new R,new R,new R,new R,new R,new R],Zn=new R,El=new On,eo=new R,to=new R,no=new R,rr=new R,sr=new R,$r=new R,wa=new R,Tl=new R,Al=new R,qr=new R;function ep(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qr.fromArray(n,s);let a=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),c=e.dot(qr),l=t.dot(qr),u=i.dot(qr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var UI=new On,ba=new R,tp=new R,bn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):UI.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);let t=ba.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ba,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(tp)),this.expandByPoint(ba.copy(e.center).sub(tp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new R,np=new R,Cl=new R,or=new R,ip=new R,Dl=new R,rp=new R,Co=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){np.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),or.copy(this.origin).sub(np);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Cl),a=or.dot(this.direction),c=-or.dot(Cl),l=or.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(np).addScaledVector(Cl,f),h}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,r,s){ip.subVectors(t,e),Dl.subVectors(i,e),rp.crossVectors(ip,Dl);let o=this.direction.dot(rp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,e);let c=a*this.direction.dot(Dl.crossVectors(or,Dl));if(c<0)return null;let l=a*this.direction.dot(ip.cross(or));if(l<0||c+l>o)return null;let u=-a*or.dot(rp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,p)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/io.setFromMatrixColumn(e,0).length(),s=1/io.setFromMatrixColumn(e,1).length(),o=1/io.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f+v*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kI,e,BI)}lookAt(e,t,i){let r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),ar.crossVectors(i,Sn),ar.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),ar.crossVectors(i,Sn)),ar.normalize(),Il.crossVectors(Sn,ar),r[0]=ar.x,r[4]=Il.x,r[8]=Sn.x,r[1]=ar.y,r[5]=Il.y,r[9]=Sn.y,r[2]=ar.z,r[6]=Il.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],p=i[10],m=i[14],w=i[3],M=i[7],b=i[11],P=i[15],A=r[0],T=r[4],L=r[8],K=r[12],y=r[1],S=r[5],z=r[9],B=r[13],$=r[2],Y=r[6],H=r[10],X=r[14],V=r[3],ce=r[7],le=r[11],ve=r[15];return s[0]=o*A+a*y+c*$+l*V,s[4]=o*T+a*S+c*Y+l*ce,s[8]=o*L+a*z+c*H+l*le,s[12]=o*K+a*B+c*X+l*ve,s[1]=u*A+d*y+f*$+h*V,s[5]=u*T+d*S+f*Y+h*ce,s[9]=u*L+d*z+f*H+h*le,s[13]=u*K+d*B+f*X+h*ve,s[2]=g*A+v*y+p*$+m*V,s[6]=g*T+v*S+p*Y+m*ce,s[10]=g*L+v*z+p*H+m*le,s[14]=g*K+v*B+p*X+m*ve,s[3]=w*A+M*y+b*$+P*V,s[7]=w*T+M*S+b*Y+P*ce,s[11]=w*L+M*z+b*H+P*le,s[15]=w*K+M*B+b*X+P*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+v*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+p*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+m*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],p=e[14],m=e[15],w=d*p*l-v*f*l+v*c*h-a*p*h-d*c*m+a*f*m,M=g*f*l-u*p*l-g*c*h+o*p*h+u*c*m-o*f*m,b=u*v*l-g*d*l+g*a*h-o*v*h-u*a*m+o*d*m,P=g*d*c-u*v*c-g*a*f+o*v*f+u*a*p-o*d*p,A=t*w+i*M+r*b+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=w*T,e[1]=(v*f*s-d*p*s-v*r*h+i*p*h+d*r*m-i*f*m)*T,e[2]=(a*p*s-v*c*s+v*r*l-i*p*l-a*r*m+i*c*m)*T,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*T,e[4]=M*T,e[5]=(u*p*s-g*f*s+g*r*h-t*p*h-u*r*m+t*f*m)*T,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*m-t*c*m)*T,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*T,e[8]=b*T,e[9]=(g*d*s-u*v*s-g*i*h+t*v*h+u*i*m-t*d*m)*T,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*m+t*a*m)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*T,e[12]=P*T,e[13]=(u*v*r-g*d*r+g*i*f-t*v*f-u*i*p+t*d*p)*T,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*p-t*a*p)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,v=o*u,p=o*d,m=a*d,w=c*l,M=c*u,b=c*d,P=i.x,A=i.y,T=i.z;return r[0]=(1-(v+m))*P,r[1]=(h+b)*P,r[2]=(g-M)*P,r[3]=0,r[4]=(h-b)*A,r[5]=(1-(f+m))*A,r[6]=(p+w)*A,r[7]=0,r[8]=(g+M)*T,r[9]=(p-w)*T,r[10]=(1-(f+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=io.set(r[0],r[1],r[2]).length(),o=io.set(r[4],r[5],r[6]).length(),a=io.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);let l=1/s,u=1/o,d=1/a;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,t.setFromRotationMatrix(Kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ui){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===Ui)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===au)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ui){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u,g,v;if(a===Ui)g=(o+s)*d,v=-2*d;else if(a===au)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},io=new R,Kn=new He,kI=new R(0,0,0),BI=new R(1,1,1),ar=new R,Il=new R,Sn=new R,Ix=new He,Rx=new ii,rs=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Ix.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ix,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Rx.setFromEuler(this),this.setFromQuaternion(Rx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),uu=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},VI=0,Nx=new R,ro=new ii,Ii=new He,Rl=new R,Ea=new R,HI=new R,zI=new ii,Px=new R(1,0,0),Lx=new R(0,1,0),Ox=new R(0,0,1),Fx={type:"added"},GI={type:"removed"},so={type:"childadded",child:null},sp={type:"childremoved",child:null},qt=(()=>{class n extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VI++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new R,i=new rs,r=new ii,s=new R(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new We}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ro.setFromAxisAngle(t,i),this.quaternion.multiply(ro),this}rotateOnWorldAxis(t,i){return ro.setFromAxisAngle(t,i),this.quaternion.premultiply(ro),this}rotateX(t){return this.rotateOnAxis(Px,t)}rotateY(t){return this.rotateOnAxis(Lx,t)}rotateZ(t){return this.rotateOnAxis(Ox,t)}translateOnAxis(t,i){return Nx.copy(t).applyQuaternion(this.quaternion),this.position.add(Nx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Px,t)}translateY(t){return this.translateOnAxis(Lx,t)}translateZ(t){return this.translateOnAxis(Ox,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Rl.copy(t):Rl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Ea,Rl,this.up):Ii.lookAt(Rl,Ea,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),ro.setFromRotationMatrix(Ii),this.quaternion.premultiply(ro.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fx),so.child=t,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(GI),sp.child=t,this.dispatchEvent(sp),sp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fx),so.child=t,this.dispatchEvent(so),so.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,t,HI),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,zI,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new R(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Jn=new R,Ri=new R,op=new R,Ni=new R,oo=new R,ao=new R,Ux=new R,ap=new R,cp=new R,lp=new R,up=new lt,dp=new lt,fp=new lt,es=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jn.subVectors(e,t),r.cross(Jn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jn.subVectors(r,t),Ri.subVectors(i,t),op.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(Ri),c=Jn.dot(op),l=Ri.dot(Ri),u=Ri.dot(op),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return up.setScalar(0),dp.setScalar(0),fp.setScalar(0),up.fromBufferAttribute(e,t),dp.fromBufferAttribute(e,i),fp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(up,s.x),o.addScaledVector(dp,s.y),o.addScaledVector(fp,s.z),o}static isFrontFacing(e,t,i,r){return Jn.subVectors(i,t),Ri.subVectors(e,t),Jn.cross(Ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Jn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;oo.subVectors(r,i),ao.subVectors(s,i),ap.subVectors(e,i);let c=oo.dot(ap),l=ao.dot(ap);if(c<=0&&l<=0)return t.copy(i);cp.subVectors(e,r);let u=oo.dot(cp),d=ao.dot(cp);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(oo,o);lp.subVectors(e,s);let h=oo.dot(lp),g=ao.dot(lp);if(g>=0&&h<=g)return t.copy(s);let v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ao,a);let p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return Ux.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(Ux,a);let m=1/(p+v+f);return o=v*m,a=f*m,t.copy(i).addScaledVector(oo,o).addScaledVector(ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},WM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function hp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ee=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=Km(e,1),t=en(t,0,1),i=en(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=hp(o,s,e+1/3),this.g=hp(o,s,e),this.b=hp(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){let i=WM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}copyLinearToSRGB(e){return this.r=Kh(e.r),this.g=Kh(e.g),this.b=Kh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return rt.fromWorkingColorSpace(Jt.copy(this),e),Math.round(en(Jt.r*255,0,255))*65536+Math.round(en(Jt.g*255,0,255))*256+Math.round(en(Jt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Jt.copy(this),t);let i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Qt){rt.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,i=Jt.g,r=Jt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(Nl);let i=La(cr.h,Nl.h,t),r=La(cr.s,Nl.s,t),s=La(cr.l,Nl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Ee;Ee.NAMES=WM;var jI=0,fn=class extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jI++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=go,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cp,this.blendDst=Dp,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cp&&(i.blendSrc=this.blendSrc),this.blendDst!==Dp&&(i.blendDst=this.blendDst),this.blendEquation!==Qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},pi=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=RM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new R,Pl=new Xe,Ft=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dm,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dm&&(e.usage=this.usage),e}};var du=class extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var fu=class extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ln=class extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},WI=0,Nn=new He,pp=new qt,co=new R,wn=new On,Ta=new On,Vt=new R,Fn=class n extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WI++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jM(e)?fu:du)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return pp.lookAt(e),pp.updateMatrix(),this.applyMatrix4(pp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(wn.min,Ta.min),wn.expandByPoint(Vt),Vt.addVectors(wn.max,Ta.max),wn.expandByPoint(Vt)):(wn.expandByPoint(Ta.min),wn.expandByPoint(Ta.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Vt.fromBufferAttribute(a,l),c&&(co.fromBufferAttribute(e,l),Vt.add(co)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new R,c[L]=new R;let l=new R,u=new R,d=new R,f=new Xe,h=new Xe,g=new Xe,v=new R,p=new R;function m(L,K,y){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,K),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,L),h.fromBufferAttribute(s,K),g.fromBufferAttribute(s,y),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let S=1/(h.x*g.y-g.x*h.y);isFinite(S)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(S),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(S),a[L].add(v),a[K].add(v),a[y].add(v),c[L].add(p),c[K].add(p),c[y].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,K=w.length;L<K;++L){let y=w[L],S=y.start,z=y.count;for(let B=S,$=S+z;B<$;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new R,b=new R,P=new R,A=new R;function T(L){P.fromBufferAttribute(r,L),A.copy(P);let K=a[L];M.copy(K),M.sub(P.multiplyScalar(P.dot(K))).normalize(),b.crossVectors(A,K);let S=b.dot(c[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,S)}for(let L=0,K=w.length;L<K;++L){let y=w[L],S=y.start,z=y.count;for(let B=S,$=S+z;B<$;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,u=new R,d=new R;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let m=0;m<u;m++)f[g++]=l[h++]}return new Ft(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kx=new He,Xr=new Co,Ll=new bn,Bx=new R,Ol=new R,Fl=new R,Ul=new R,mp=new R,kl=new R,Vx=new R,Bl=new R,Ht=class extends qt{constructor(e=new Fn,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){kl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(mp.fromBufferAttribute(d,e),o?kl.addScaledVector(mp,u):kl.addScaledVector(mp.sub(t),u))}t.add(kl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(s),Xr.copy(e.ray).recast(e.near),!(Ll.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Ll,Bx)===null||Xr.origin.distanceToSquared(Bx)>(e.far-e.near)**2))&&(kx.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(kx),!(i.boundingBox!==null&&Xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let p=f[g],m=o[p.materialIndex],w=Math.max(p.start,h.start),M=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let b=w,P=M;b<P;b+=3){let A=a.getX(b),T=a.getX(b+1),L=a.getX(b+2);r=Vl(this,m,e,i,l,u,d,A,T,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let p=g,m=v;p<m;p+=3){let w=a.getX(p),M=a.getX(p+1),b=a.getX(p+2);r=Vl(this,o,e,i,l,u,d,w,M,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let p=f[g],m=o[p.materialIndex],w=Math.max(p.start,h.start),M=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let b=w,P=M;b<P;b+=3){let A=b,T=b+1,L=b+2;r=Vl(this,m,e,i,l,u,d,A,T,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let p=g,m=v;p<m;p+=3){let w=p,M=p+1,b=p+2;r=Vl(this,o,e,i,l,u,d,w,M,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function $I(n,e,t,i,r,s,o,a){let c;if(e.side===dn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===hi,a),c===null)return null;Bl.copy(a),Bl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Bl);return l<t.near||l>t.far?null:{distance:l,point:Bl.clone(),object:n}}function Vl(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Ol),n.getVertexPosition(c,Fl),n.getVertexPosition(l,Ul);let u=$I(n,e,t,i,Ol,Fl,Ul,Vx);if(u){let d=new R;es.getBarycoord(Vx,Ol,Fl,Ul,d),r&&(u.uv=es.getInterpolatedAttribute(r,a,c,l,d,new Xe)),s&&(u.uv1=es.getInterpolatedAttribute(s,a,c,l,d,new Xe)),o&&(u.normal=es.getInterpolatedAttribute(o,a,c,l,d,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new R,materialIndex:0};es.getNormal(Ol,Fl,Ul,f.normal),u.face=f,u.barycoord=d}return u}var ss=class n extends Fn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ln(l,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(d,2));function g(v,p,m,w,M,b,P,A,T,L,K){let y=b/T,S=P/L,z=b/2,B=P/2,$=A/2,Y=T+1,H=L+1,X=0,V=0,ce=new R;for(let le=0;le<H;le++){let ve=le*S-B;for(let at=0;at<Y;at++){let ht=at*y-z;ce[v]=ht*w,ce[p]=ve*M,ce[m]=$,l.push(ce.x,ce.y,ce.z),ce[v]=0,ce[p]=0,ce[m]=A>0?1:-1,u.push(ce.x,ce.y,ce.z),d.push(at/T),d.push(1-le/L),X+=1}}for(let le=0;le<L;le++)for(let ve=0;ve<T;ve++){let at=f+ve+Y*le,ht=f+ve+Y*(le+1),G=f+(ve+1)+Y*(le+1),J=f+(ve+1)+Y*le;c.push(at,ht,J),c.push(ht,G,J),V+=6}a.addGroup(h,V,K),h+=V,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Do(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){let e={};for(let t=0;t<n.length;t++){let i=Do(n[t]);for(let r in i)e[r]=i[r]}return e}function qI(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $M(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var XI={clone:Do,merge:on},YI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mi=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YI,this.fragmentShader=ZI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=qI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},hu=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},lr=new R,Hx=new Xe,zx=new Xe,Ot=class extends hu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,Hx,zx),t.subVectors(zx,Hx)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lo=-90,uo=1,mm=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ot(lo,uo,e,t);r.layers=this.layers,this.add(r);let s=new Ot(lo,uo,e,t);s.layers=this.layers,this.add(s);let o=new Ot(lo,uo,e,t);o.layers=this.layers,this.add(o);let a=new Ot(lo,uo,e,t);a.layers=this.layers,this.add(a);let c=new Ot(lo,uo,e,t);c.layers=this.layers,this.add(c);let l=new Ot(lo,uo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===au)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},pu=class extends kn{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Mo,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gm=class extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ss(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:Do(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:fr});s.uniforms.tEquirect.value=t;let o=new Ht(r,s),a=t.minFilter;return t.minFilter===di&&(t.minFilter=un),new mm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},gp=new R,KI=new R,JI=new We,Oi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=gp.subVectors(i,t).cross(KI.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(gp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||JI.getNormalMatrix(e),r=this.coplanarPoint(gp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yr=new bn,Hl=new R,Ba=class{constructor(e=new Oi,t=new Oi,i=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],v=r[10],p=r[11],m=r[12],w=r[13],M=r[14],b=r[15];if(i[0].setComponents(c-s,f-l,p-h,b-m).normalize(),i[1].setComponents(c+s,f+l,p+h,b+m).normalize(),i[2].setComponents(c+o,f+u,p+g,b+w).normalize(),i[3].setComponents(c-o,f-u,p-g,b-w).normalize(),i[4].setComponents(c-a,f-d,p-v,b-M).normalize(),t===Ui)i[5].setComponents(c+a,f+d,p+v,b+M).normalize();else if(t===au)i[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Hl.x=r.normal.x>0?e.max.x:e.min.x,Hl.y=r.normal.y>0?e.max.y:e.min.y,Hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function QI(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let v=d[h];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var mu=class n extends Fn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],v=[],p=[];for(let m=0;m<u;m++){let w=m*f-o;for(let M=0;M<l;M++){let b=M*d-s;g.push(b,-w,0),v.push(0,0,1),p.push(M/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){let M=w+l*m,b=w+l*(m+1),P=w+1+l*(m+1),A=w+1+l*m;h.push(M,b,A),h.push(b,P,A)}this.setIndex(h),this.setAttribute("position",new Ln(g,3)),this.setAttribute("normal",new Ln(v,3)),this.setAttribute("uv",new Ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},eR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_R=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ER=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IR="gl_FragColor = linearToOutputTexel( gl_FragColor );",RR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,PR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$R=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,l1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,g1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,w1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,D1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,F1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,k1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,H1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,G1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_N=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:eR,alphahash_pars_fragment:tR,alphamap_fragment:nR,alphamap_pars_fragment:iR,alphatest_fragment:rR,alphatest_pars_fragment:sR,aomap_fragment:oR,aomap_pars_fragment:aR,batching_pars_vertex:cR,batching_vertex:lR,begin_vertex:uR,beginnormal_vertex:dR,bsdfs:fR,iridescence_fragment:hR,bumpmap_pars_fragment:pR,clipping_planes_fragment:mR,clipping_planes_pars_fragment:gR,clipping_planes_pars_vertex:vR,clipping_planes_vertex:yR,color_fragment:_R,color_pars_fragment:xR,color_pars_vertex:MR,color_vertex:SR,common:wR,cube_uv_reflection_fragment:bR,defaultnormal_vertex:ER,displacementmap_pars_vertex:TR,displacementmap_vertex:AR,emissivemap_fragment:CR,emissivemap_pars_fragment:DR,colorspace_fragment:IR,colorspace_pars_fragment:RR,envmap_fragment:NR,envmap_common_pars_fragment:PR,envmap_pars_fragment:LR,envmap_pars_vertex:OR,envmap_physical_pars_fragment:$R,envmap_vertex:FR,fog_vertex:UR,fog_pars_vertex:kR,fog_fragment:BR,fog_pars_fragment:VR,gradientmap_pars_fragment:HR,lightmap_pars_fragment:zR,lights_lambert_fragment:GR,lights_lambert_pars_fragment:jR,lights_pars_begin:WR,lights_toon_fragment:qR,lights_toon_pars_fragment:XR,lights_phong_fragment:YR,lights_phong_pars_fragment:ZR,lights_physical_fragment:KR,lights_physical_pars_fragment:JR,lights_fragment_begin:QR,lights_fragment_maps:e1,lights_fragment_end:t1,logdepthbuf_fragment:n1,logdepthbuf_pars_fragment:i1,logdepthbuf_pars_vertex:r1,logdepthbuf_vertex:s1,map_fragment:o1,map_pars_fragment:a1,map_particle_fragment:c1,map_particle_pars_fragment:l1,metalnessmap_fragment:u1,metalnessmap_pars_fragment:d1,morphinstance_vertex:f1,morphcolor_vertex:h1,morphnormal_vertex:p1,morphtarget_pars_vertex:m1,morphtarget_vertex:g1,normal_fragment_begin:v1,normal_fragment_maps:y1,normal_pars_fragment:_1,normal_pars_vertex:x1,normal_vertex:M1,normalmap_pars_fragment:S1,clearcoat_normal_fragment_begin:w1,clearcoat_normal_fragment_maps:b1,clearcoat_pars_fragment:E1,iridescence_pars_fragment:T1,opaque_fragment:A1,packing:C1,premultiplied_alpha_fragment:D1,project_vertex:I1,dithering_fragment:R1,dithering_pars_fragment:N1,roughnessmap_fragment:P1,roughnessmap_pars_fragment:L1,shadowmap_pars_fragment:O1,shadowmap_pars_vertex:F1,shadowmap_vertex:U1,shadowmask_pars_fragment:k1,skinbase_vertex:B1,skinning_pars_vertex:V1,skinning_vertex:H1,skinnormal_vertex:z1,specularmap_fragment:G1,specularmap_pars_fragment:j1,tonemapping_fragment:W1,tonemapping_pars_fragment:$1,transmission_fragment:q1,transmission_pars_fragment:X1,uv_pars_fragment:Y1,uv_pars_vertex:Z1,uv_vertex:K1,worldpos_vertex:J1,background_vert:Q1,background_frag:eN,backgroundCube_vert:tN,backgroundCube_frag:nN,cube_vert:iN,cube_frag:rN,depth_vert:sN,depth_frag:oN,distanceRGBA_vert:aN,distanceRGBA_frag:cN,equirect_vert:lN,equirect_frag:uN,linedashed_vert:dN,linedashed_frag:fN,meshbasic_vert:hN,meshbasic_frag:pN,meshlambert_vert:mN,meshlambert_frag:gN,meshmatcap_vert:vN,meshmatcap_frag:yN,meshnormal_vert:_N,meshnormal_frag:xN,meshphong_vert:MN,meshphong_frag:SN,meshphysical_vert:wN,meshphysical_frag:bN,meshtoon_vert:EN,meshtoon_frag:TN,points_vert:AN,points_frag:CN,shadow_vert:DN,shadow_frag:IN,sprite_vert:RN,sprite_frag:NN},te={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ui={basic:{uniforms:on([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:on([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ee(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:on([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:on([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:on([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ee(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:on([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:on([te.points,te.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:on([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:on([te.common,te.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:on([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:on([te.sprite,te.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:on([te.common,te.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:on([te.lights,te.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ui.physical={uniforms:on([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var zl={r:0,b:0,g:0},Zr=new rs,PN=new He;function LN(n,e,t,i,r,s,o){let a=new Ee(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function v(w){let M=!1,b=g(w);b===null?m(a,c):b&&b.isColor&&(m(b,1),M=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,M){let b=g(M);b&&(b.isCubeTexture||b.mapping===Uu)?(u===void 0&&(u=new Ht(new ss(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Do(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Zr.copy(M.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(PN.makeRotationFromEuler(Zr)),u.material.toneMapped=rt.getTransfer(b.colorSpace)!==bt,(d!==b||f!==b.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=b,f=b.version,h=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ht(new mu(2,2),new mi({name:"BackgroundMaterial",uniforms:Do(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=rt.getTransfer(b.colorSpace)!==bt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,h=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,M){w.getRGB(zl,$M(n)),i.buffers.color.setClear(zl.r,zl.g,zl.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(a,c)},render:v,addToRenderList:p}}function ON(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(y,S,z,B,$){let Y=!1,H=d(B,z,S);s!==H&&(s=H,l(s.object)),Y=h(y,B,z,$),Y&&g(y,B,z,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,b(y,S,z,B),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,S,z){let B=z.wireframe===!0,$=i[y.id];$===void 0&&($={},i[y.id]=$);let Y=$[S.id];Y===void 0&&(Y={},$[S.id]=Y);let H=Y[B];return H===void 0&&(H=f(c()),Y[B]=H),H}function f(y){let S=[],z=[],B=[];for(let $=0;$<t;$++)S[$]=0,z[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:z,attributeDivisors:B,object:y,attributes:{},index:null}}function h(y,S,z,B){let $=s.attributes,Y=S.attributes,H=0,X=z.getAttributes();for(let V in X)if(X[V].location>=0){let le=$[V],ve=Y[V];if(ve===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(y,S,z,B){let $={},Y=S.attributes,H=0,X=z.getAttributes();for(let V in X)if(X[V].location>=0){let le=Y[V];le===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(le=y.instanceColor));let ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),$[V]=ve,H++}s.attributes=$,s.attributesNum=H,s.index=B}function v(){let y=s.newAttributes;for(let S=0,z=y.length;S<z;S++)y[S]=0}function p(y){m(y,0)}function m(y,S){let z=s.newAttributes,B=s.enabledAttributes,$=s.attributeDivisors;z[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),$[y]!==S&&(n.vertexAttribDivisor(y,S),$[y]=S)}function w(){let y=s.newAttributes,S=s.enabledAttributes;for(let z=0,B=S.length;z<B;z++)S[z]!==y[z]&&(n.disableVertexAttribArray(z),S[z]=0)}function M(y,S,z,B,$,Y,H){H===!0?n.vertexAttribIPointer(y,S,z,$,Y):n.vertexAttribPointer(y,S,z,B,$,Y)}function b(y,S,z,B){v();let $=B.attributes,Y=z.getAttributes(),H=S.defaultAttributeValues;for(let X in Y){let V=Y[X];if(V.location>=0){let ce=$[X];if(ce===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){let le=ce.normalized,ve=ce.itemSize,at=e.get(ce);if(at===void 0)continue;let ht=at.buffer,G=at.type,J=at.bytesPerElement,me=G===n.INT||G===n.UNSIGNED_INT||ce.gpuType===zm;if(ce.isInterleavedBufferAttribute){let ue=ce.data,Ue=ue.stride,Ae=ce.offset;if(ue.isInstancedInterleavedBuffer){for(let tt=0;tt<V.locationSize;tt++)m(V.location+tt,ue.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let tt=0;tt<V.locationSize;tt++)p(V.location+tt);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let tt=0;tt<V.locationSize;tt++)M(V.location+tt,ve/V.locationSize,G,le,Ue*J,(Ae+ve/V.locationSize*tt)*J,me)}else{if(ce.isInstancedBufferAttribute){for(let ue=0;ue<V.locationSize;ue++)m(V.location+ue,ce.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<V.locationSize;ue++)p(V.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let ue=0;ue<V.locationSize;ue++)M(V.location+ue,ve/V.locationSize,G,le,ve*J,ve/V.locationSize*ue*J,me)}}else if(H!==void 0){let le=H[X];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(V.location,le);break;case 3:n.vertexAttrib3fv(V.location,le);break;case 4:n.vertexAttrib4fv(V.location,le);break;default:n.vertexAttrib1fv(V.location,le)}}}}w()}function P(){L();for(let y in i){let S=i[y];for(let z in S){let B=S[z];for(let $ in B)u(B[$].object),delete B[$];delete S[z]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;let S=i[y.id];for(let z in S){let B=S[z];for(let $ in B)u(B[$].object),delete B[$];delete S[z]}delete i[y.id]}function T(y){for(let S in i){let z=i[S];if(z[y.id]===void 0)continue;let B=z[y.id];for(let $ in B)u(B[$].object),delete B[$];delete z[y.id]}}function L(){K(),o=!0,s!==r&&(s=r,l(s.object))}function K(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:K,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function FN(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<f.length;v++)t.update(g,i,f[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function UN(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Pn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let L=T===Xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ki&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ti&&!L)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:P,maxSamples:A}}function kN(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Oi,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{let w=s?0:i,M=w*4,b=m.clippingState||null;c.value=b,b=u(g,f,M,h);for(let P=0;P!==M;++P)b[P]=t[P];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let m=h+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,b=h;M!==v;++M,b+=4)o.copy(d[M]).applyMatrix4(w,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function BN(n){let e=new WeakMap;function t(o,a){return a===Up?o.mapping=Mo:a===kp&&(o.mapping=So),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Up||a===kp)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new gm(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Io=class extends hu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mo=4,Gx=[.125,.215,.35,.446,.526,.582],ts=20,vp=new Io,jx=new Ee,yp=null,_p=0,xp=0,Mp=!1,Jr=(1+Math.sqrt(5))/2,fo=1/Jr,Wx=[new R(-Jr,fo,0),new R(Jr,fo,0),new R(-fo,0,Jr),new R(fo,0,Jr),new R(0,Jr,-fo),new R(0,Jr,fo),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],gu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){yp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),Mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yp,_p,xp),this._renderer.xr.enabled=Mp,e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mo||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),Mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Xa,format:Pn,colorSpace:zt,depthBuffer:!1},r=$x(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$x(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VN(s)),this._blurMaterial=HN(s,e,t)}return r}_compileMaterial(e){let t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,vp)}_sceneToCubeUV(e,t,i,r){let a=new Ot(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(jx),u.toneMapping=hr,u.autoClear=!1;let h=new pi({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new Ht(new ss,h),v=!1,p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,v=!0):(h.color.copy(jx),v=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):w===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let M=this._cubeSize;Gl(r,w*M,m>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Mo||e.mapping===So;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qx());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Gl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,vp)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wx[(r-s-1)%Wx.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ht(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ts-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):ts;p>ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ts}`);let m=[],w=0;for(let T=0;T<ts;++T){let L=T/v,K=Math.exp(-L*L/2);m.push(K),T===0?w+=K:T<p&&(w+=2*K)}for(let T=0;T<m.length;T++)m[T]=m[T]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let b=this._sizeLods[r],P=3*b*(r>M-mo?r-M+mo:0),A=4*(this._cubeSize-b);Gl(t,P,A,3*b,2*b),c.setRenderTarget(t),c.render(d,vp)}};function VN(n){let e=[],t=[],i=[],r=n,s=n-mo+1+Gx.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-mo?c=Gx[o-n+mo-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,p=2,m=1,w=new Float32Array(v*g*h),M=new Float32Array(p*g*h),b=new Float32Array(m*g*h);for(let A=0;A<h;A++){let T=A%3*2/3-1,L=A>2?0:-1,K=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];w.set(K,v*g*A),M.set(f,p*g*A);let y=[A,A,A,A,A,A];b.set(y,m*g*A)}let P=new Fn;P.setAttribute("position",new Ft(w,v)),P.setAttribute("uv",new Ft(M,p)),P.setAttribute("faceIndex",new Ft(b,m)),e.push(P),r>mo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $x(n,e,t){let i=new Bi(n,e,t);return i.texture.mapping=Uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function HN(n,e,t){let i=new Float32Array(ts),r=new R(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function qx(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Xx(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Jm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zN(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Up||c===kp,u=c===Mo||c===So;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new gu(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new gu(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function GN(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&iu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jN(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let h=d.morphAttributes;for(let g in h){let v=h[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],n.ARRAY_BUFFER)}}function l(d){let f=[],h=d.index,g=d.attributes.position,v=0;if(h!==null){let w=h.array;v=h.version;for(let M=0,b=w.length;M<b;M+=3){let P=w[M+0],A=w[M+1],T=w[M+2];f.push(P,A,A,T,T,P)}}else if(g!==void 0){let w=g.array;v=g.version;for(let M=0,b=w.length/3-1;M<b;M+=3){let P=M+0,A=M+1,T=M+2;f.push(P,A,A,T,T,P)}}else return;let p=new(jM(f)?fu:du)(f,1);p.version=v;let m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function WN(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];t.update(p,i,1)}function d(f,h,g,v){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/o,h[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,v,0,g);let m=0;for(let w=0;w<g;w++)m+=h[w];for(let w=0;w<v.length;w++)t.update(m,i,v[w])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $N(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function qN(n,e,t){let i=new WeakMap,r=new lt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let y=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var h=y;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;g===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let P=a.attributes.position.count*b,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let T=new Float32Array(P*A*4*d),L=new lu(T,P,A,d);L.type=ti,L.needsUpdate=!0;let K=b*4;for(let S=0;S<d;S++){let z=m[S],B=w[S],$=M[S],Y=P*A*4*S;for(let H=0;H<z.count;H++){let X=H*K;g===!0&&(r.fromBufferAttribute(z,H),T[Y+X+0]=r.x,T[Y+X+1]=r.y,T[Y+X+2]=r.z,T[Y+X+3]=0),v===!0&&(r.fromBufferAttribute(B,H),T[Y+X+4]=r.x,T[Y+X+5]=r.y,T[Y+X+6]=r.z,T[Y+X+7]=0),p===!0&&(r.fromBufferAttribute($,H),T[Y+X+8]=r.x,T[Y+X+9]=r.y,T[Y+X+10]=r.z,T[Y+X+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new Xe(P,A)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function XN(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var vu=class extends kn{constructor(e,t,i,r,s,o,a,c,l,u=vo){if(u!==vo&&u!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vo&&(i=is),i===void 0&&u===bo&&(i=wo),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},XM=new kn,Yx=new vu(1,1),YM=new lu,ZM=new pm,KM=new pu,Zx=[],Kx=[],Jx=new Float32Array(16),Qx=new Float32Array(9),eM=new Float32Array(4);function Po(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Zx[r];if(s===void 0&&(s=new Float32Array(r),Zx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vu(n,e){let t=Kx[e];t===void 0&&(t=new Int32Array(e),Kx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function YN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ZN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function KN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function JN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function QN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,i))return;eM.set(i),n.uniformMatrix2fv(this.addr,!1,eM),kt(t,i)}}function eP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,i))return;Qx.set(i),n.uniformMatrix3fv(this.addr,!1,Qx),kt(t,i)}}function tP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,i))return;Jx.set(i),n.uniformMatrix4fv(this.addr,!1,Jx),kt(t,i)}}function nP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function rP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function sP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function oP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function aP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function cP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function lP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function uP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Yx.compareFunction=zM,s=Yx):s=XM,t.setTexture2D(e||s,r)}function dP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ZM,r)}function fP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||KM,r)}function hP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||YM,r)}function pP(n){switch(n){case 5126:return YN;case 35664:return ZN;case 35665:return KN;case 35666:return JN;case 35674:return QN;case 35675:return eP;case 35676:return tP;case 5124:case 35670:return nP;case 35667:case 35671:return iP;case 35668:case 35672:return rP;case 35669:case 35673:return sP;case 5125:return oP;case 36294:return aP;case 36295:return cP;case 36296:return lP;case 35678:case 36198:case 36298:case 36306:case 35682:return uP;case 35679:case 36299:case 36307:return dP;case 35680:case 36300:case 36308:case 36293:return fP;case 36289:case 36303:case 36311:case 36292:return hP}}function mP(n,e){n.uniform1fv(this.addr,e)}function gP(n,e){let t=Po(e,this.size,2);n.uniform2fv(this.addr,t)}function vP(n,e){let t=Po(e,this.size,3);n.uniform3fv(this.addr,t)}function yP(n,e){let t=Po(e,this.size,4);n.uniform4fv(this.addr,t)}function _P(n,e){let t=Po(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xP(n,e){let t=Po(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function MP(n,e){let t=Po(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function SP(n,e){n.uniform1iv(this.addr,e)}function wP(n,e){n.uniform2iv(this.addr,e)}function bP(n,e){n.uniform3iv(this.addr,e)}function EP(n,e){n.uniform4iv(this.addr,e)}function TP(n,e){n.uniform1uiv(this.addr,e)}function AP(n,e){n.uniform2uiv(this.addr,e)}function CP(n,e){n.uniform3uiv(this.addr,e)}function DP(n,e){n.uniform4uiv(this.addr,e)}function IP(n,e,t){let i=this.cache,r=e.length,s=Vu(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||XM,s[o])}function RP(n,e,t){let i=this.cache,r=e.length,s=Vu(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ZM,s[o])}function NP(n,e,t){let i=this.cache,r=e.length,s=Vu(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||KM,s[o])}function PP(n,e,t){let i=this.cache,r=e.length,s=Vu(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||YM,s[o])}function LP(n){switch(n){case 5126:return mP;case 35664:return gP;case 35665:return vP;case 35666:return yP;case 35674:return _P;case 35675:return xP;case 35676:return MP;case 5124:case 35670:return SP;case 35667:case 35671:return wP;case 35668:case 35672:return bP;case 35669:case 35673:return EP;case 5125:return TP;case 36294:return AP;case 36295:return CP;case 36296:return DP;case 35678:case 36198:case 36298:case 36306:case 35682:return IP;case 35679:case 36299:case 36307:return RP;case 35680:case 36300:case 36308:case 36293:return NP;case 36289:case 36303:case 36311:case 36292:return PP}}var vm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pP(t.type)}},ym=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LP(t.type)}},_m=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Sp=/(\w+)(\])?(\[|\.)?/g;function tM(n,e){n.seq.push(e),n.map[e.id]=e}function OP(n,e,t){let i=n.name,r=i.length;for(Sp.lastIndex=0;;){let s=Sp.exec(i),o=Sp.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){tM(t,l===void 0?new vm(a,n,e):new ym(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new _m(a),tM(t,d)),t=d}}}var _o=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);OP(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function nM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var FP=37297,UP=0;function kP(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function BP(n){let e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n),i;switch(e===t?i="":e===ou&&t===su?i="LinearDisplayP3ToLinearSRGB":e===su&&t===ou&&(i="LinearSRGBToLinearDisplayP3"),n){case zt:case Bu:return[i,"LinearTransferOETF"];case Qt:case Zm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function iM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kP(n.getShaderSource(e),o)}else return r}function VP(n,e){let t=BP(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function HP(n,e){let t;switch(e){case YD:t="Linear";break;case ZD:t="Reinhard";break;case KD:t="Cineon";break;case JD:t="ACESFilmic";break;case eI:t="AgX";break;case tI:t="Neutral";break;case QD:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jl=new R;function zP(){rt.getLuminanceCoefficients(jl);let n=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function jP(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function WP(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ra(n){return n!==""}function rM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $P=/^[ \t]*#include +<([\w\d./]+)>/gm;function xm(n){return n.replace($P,XP)}var qP=new Map;function XP(n,e){let t=je[e];if(t===void 0){let i=qP.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xm(t)}var YP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oM(n){return n.replace(YP,ZP)}function ZP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function aM(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===IM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===CD?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function JP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mo:case So:e="ENVMAP_TYPE_CUBE";break;case Uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function eL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case RM:e="ENVMAP_BLENDING_MULTIPLY";break;case qD:e="ENVMAP_BLENDING_MIX";break;case XD:e="ENVMAP_BLENDING_ADD";break}return e}function tL(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nL(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=KP(t),l=JP(t),u=QP(t),d=eL(t),f=tL(t),h=GP(t),g=jP(s),v=r.createProgram(),p,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),m.length>0&&(m+=`
`)):(p=[aM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),m=[aM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?je.tonemapping_pars_fragment:"",t.toneMapping!==hr?HP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,VP("linearToOutputTexel",t.outputColorSpace),zP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=xm(o),o=rM(o,t),o=sM(o,t),a=xm(a),a=rM(a,t),a=sM(a,t),o=oM(o),a=oM(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===bx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=w+p+o,b=w+m+a,P=nM(r,r.VERTEX_SHADER,M),A=nM(r,r.FRAGMENT_SHADER,b);r.attachShader(v,P),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(S){if(n.debug.checkShaderErrors){let z=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(P).trim(),$=r.getShaderInfoLog(A).trim(),Y=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,P,A);else{let X=iM(r,P,"vertex"),V=iM(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+z+`
`+X+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||$==="")&&(H=!1);H&&(S.diagnostics={runnable:Y,programLog:z,vertexShader:{log:B,prefix:p},fragmentShader:{log:$,prefix:m}})}r.deleteShader(P),r.deleteShader(A),L=new _o(r,v),K=WP(r,v)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let K;this.getAttributes=function(){return K===void 0&&T(this),K};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,FP)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UP++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=A,this}var iL=0,Mm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Sm(e),t.set(e,i)),i}},Sm=class{constructor(e){this.id=iL++,this.code=e,this.usedTimes=0}};function rL(n,e,t,i,r,s,o){let a=new uu,c=new Mm,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,h=r.vertexTextures,g=r.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,S,z,B,$){let Y=B.fog,H=$.geometry,X=y.isMeshStandardMaterial?B.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),ce=V&&V.mapping===Uu?V.image.height:null,le=v[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let ve=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=ve!==void 0?ve.length:0,ht=0;H.morphAttributes.position!==void 0&&(ht=1),H.morphAttributes.normal!==void 0&&(ht=2),H.morphAttributes.color!==void 0&&(ht=3);let G,J,me,ue;if(le){let cn=ui[le];G=cn.vertexShader,J=cn.fragmentShader}else G=y.vertexShader,J=y.fragmentShader,c.update(y),me=c.getVertexShaderID(y),ue=c.getFragmentShaderID(y);let Ue=n.getRenderTarget(),Ae=$.isInstancedMesh===!0,tt=$.isBatchedMesh===!0,yt=!!y.map,nt=!!y.matcap,C=!!V,hn=!!y.aoMap,Ke=!!y.lightMap,st=!!y.bumpMap,Ie=!!y.normalMap,St=!!y.displacementMap,Pe=!!y.emissiveMap,E=!!y.metalnessMap,_=!!y.roughnessMap,O=y.anisotropy>0,W=y.clearcoat>0,Z=y.dispersion>0,j=y.iridescence>0,_e=y.sheen>0,ne=y.transmission>0,de=O&&!!y.anisotropyMap,ot=W&&!!y.clearcoatMap,Q=W&&!!y.clearcoatNormalMap,fe=W&&!!y.clearcoatRoughnessMap,Re=j&&!!y.iridescenceMap,Ne=j&&!!y.iridescenceThicknessMap,he=_e&&!!y.sheenColorMap,Je=_e&&!!y.sheenRoughnessMap,ke=!!y.specularMap,Mt=!!y.specularColorMap,D=!!y.specularIntensityMap,oe=ne&&!!y.transmissionMap,k=ne&&!!y.thicknessMap,q=!!y.gradientMap,re=!!y.alphaMap,ae=y.alphaTest>0,it=!!y.alphaHash,Dt=!!y.extensions,an=hr;y.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(an=n.toneMapping);let ct={shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:J,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:tt,batchingColor:tt&&$._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&$.instanceColor!==null,instancingMorph:Ae&&$.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Ue===null?n.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:zt,alphaToCoverage:!!y.alphaToCoverage,map:yt,matcap:nt,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:ce,aoMap:hn,lightMap:Ke,bumpMap:st,normalMap:Ie,displacementMap:h&&St,emissiveMap:Pe,normalMapObjectSpace:Ie&&y.normalMapType===oI,normalMapTangentSpace:Ie&&y.normalMapType===Ym,metalnessMap:E,roughnessMap:_,anisotropy:O,anisotropyMap:de,clearcoat:W,clearcoatMap:ot,clearcoatNormalMap:Q,clearcoatRoughnessMap:fe,dispersion:Z,iridescence:j,iridescenceMap:Re,iridescenceThicknessMap:Ne,sheen:_e,sheenColorMap:he,sheenRoughnessMap:Je,specularMap:ke,specularColorMap:Mt,specularIntensityMap:D,transmission:ne,transmissionMap:oe,thicknessMap:k,gradientMap:q,opaque:y.transparent===!1&&y.blending===go&&y.alphaToCoverage===!1,alphaMap:re,alphaTest:ae,alphaHash:it,combine:y.combine,mapUv:yt&&p(y.map.channel),aoMapUv:hn&&p(y.aoMap.channel),lightMapUv:Ke&&p(y.lightMap.channel),bumpMapUv:st&&p(y.bumpMap.channel),normalMapUv:Ie&&p(y.normalMap.channel),displacementMapUv:St&&p(y.displacementMap.channel),emissiveMapUv:Pe&&p(y.emissiveMap.channel),metalnessMapUv:E&&p(y.metalnessMap.channel),roughnessMapUv:_&&p(y.roughnessMap.channel),anisotropyMapUv:de&&p(y.anisotropyMap.channel),clearcoatMapUv:ot&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:Q&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Je&&p(y.sheenRoughnessMap.channel),specularMapUv:ke&&p(y.specularMap.channel),specularColorMapUv:Mt&&p(y.specularColorMap.channel),specularIntensityMapUv:D&&p(y.specularIntensityMap.channel),transmissionMapUv:oe&&p(y.transmissionMap.channel),thicknessMapUv:k&&p(y.thicknessMap.channel),alphaMapUv:re&&p(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ie||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!H.attributes.uv&&(yt||re),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:ht,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:an,decodeVideoTexture:yt&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qn,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Dt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&y.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function w(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let z in y.defines)S.push(z),S.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(M(S,y),b(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function M(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){let S=v[y.type],z;if(S){let B=ui[S];z=XI.clone(B.uniforms)}else z=y.uniforms;return z}function A(y,S){let z;for(let B=0,$=u.length;B<$;B++){let Y=u[B];if(Y.cacheKey===S){z=Y,++z.usedTimes;break}}return z===void 0&&(z=new nL(n,S,y,s),u.push(z)),z}function T(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function L(y){c.remove(y)}function K(){c.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:P,acquireProgram:A,releaseProgram:T,releaseShaderCache:L,programs:u,dispose:K}}function sL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function oL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,v,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=p),e++,m}function a(d,f,h,g,v,p){let m=o(d,f,h,g,v,p);h.transmission>0?i.push(m):h.transparent===!0?r.push(m):t.push(m)}function c(d,f,h,g,v,p){let m=o(d,f,h,g,v,p);h.transmission>0?i.unshift(m):h.transparent===!0?r.unshift(m):t.unshift(m)}function l(d,f){t.length>1&&t.sort(d||oL),i.length>1&&i.sort(f||cM),r.length>1&&r.sort(f||cM)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function aL(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new lM,n.set(i,[o])):r>=s.length?(o=new lM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ee};break;case"SpotLight":t={position:new R,direction:new R,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function lL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var uL=0;function dL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fL(n){let e=new cL,t=lL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);let r=new R,s=new He,o=new He;function a(l){let u=0,d=0,f=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let h=0,g=0,v=0,p=0,m=0,w=0,M=0,b=0,P=0,A=0,T=0;l.sort(dL);for(let K=0,y=l.length;K<y;K++){let S=l[K],z=S.color,B=S.intensity,$=S.distance,Y=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=z.r*B,d+=z.g*B,f+=z.b*B;else if(S.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(S.sh.coefficients[H],B);T++}else if(S.isDirectionalLight){let H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let X=S.shadow,V=t.get(S);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=Y,i.directionalShadowMatrix[h]=S.shadow.matrix,w++}i.directional[h]=H,h++}else if(S.isSpotLight){let H=e.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(z).multiplyScalar(B),H.distance=$,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,i.spot[v]=H;let X=S.shadow;if(S.map&&(i.spotLightMap[P]=S.map,P++,X.updateMatrices(S),S.castShadow&&A++),i.spotLightMatrix[v]=X.matrix,S.castShadow){let V=t.get(S);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=Y,b++}v++}else if(S.isRectAreaLight){let H=e.get(S);H.color.copy(z).multiplyScalar(B),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=H,p++}else if(S.isPointLight){let H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){let X=S.shadow,V=t.get(S);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=S.shadow.matrix,M++}i.point[g]=H,g++}else if(S.isHemisphereLight){let H=e.get(S);H.skyColor.copy(S.color).multiplyScalar(B),H.groundColor.copy(S.groundColor).multiplyScalar(B),i.hemi[m]=H,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==h||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==w||L.numPointShadows!==M||L.numSpotShadows!==b||L.numSpotMaps!==P||L.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,L.directionalLength=h,L.pointLength=g,L.spotLength=v,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=w,L.numPointShadows=M,L.numSpotShadows=b,L.numSpotMaps=P,L.numLightProbes=T,i.version=uL++)}function c(l,u){let d=0,f=0,h=0,g=0,v=0,p=u.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){let M=l[m];if(M.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),d++}else if(M.isSpotLight){let b=i.spot[h];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),h++}else if(M.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let b=i.hemi[v];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:i}}function uM(n){let e=new fL(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function hL(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new uM(n),e.set(r,[a])):s>=o.length?(a=new uM(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var wm=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rI,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bm=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},pL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gL(n,e,t){let i=new Ba,r=new Xe,s=new Xe,o=new lt,a=new wm({depthPacking:sI}),c=new bm,l={},u=t.maxTextureSize,d={[hi]:dn,[dn]:hi,[Qn]:Qn},f=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:pL,fragmentShader:mL}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Fn;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ht(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=IM;let m=this.type;this.render=function(A,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let K=n.getRenderTarget(),y=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),z=n.state;z.setBlending(fr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let B=m!==Li&&this.type===Li,$=m===Li&&this.type!==Li;for(let Y=0,H=A.length;Y<H;Y++){let X=A[Y],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let ce=V.getFrameExtents();if(r.multiply(ce),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,V.mapSize.y=s.y)),V.map===null||B===!0||$===!0){let ve=this.type!==Li?{minFilter:tn,magFilter:tn}:{};V.map!==null&&V.map.dispose(),V.map=new Bi(r.x,r.y,ve),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let le=V.getViewportCount();for(let ve=0;ve<le;ve++){let at=V.getViewport(ve);o.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),z.viewport(o),V.updateMatrices(X,ve),i=V.getFrustum(),b(T,L,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Li&&w(V,L),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(K,y,S)};function w(A,T){let L=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,L,f,v,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,L,h,v,null)}function M(A,T,L,K){let y=null,S=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)y=S;else if(y=L.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let z=y.uuid,B=T.uuid,$=l[z];$===void 0&&($={},l[z]=$);let Y=$[B];Y===void 0&&(Y=y.clone(),$[B]=Y,T.addEventListener("dispose",P)),y=Y}if(y.visible=T.visible,y.wireframe=T.wireframe,K===Li?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=n.properties.get(y);z.light=L}return y}function b(A,T,L,K,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Li)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let B=e.update(A),$=A.material;if(Array.isArray($)){let Y=B.groups;for(let H=0,X=Y.length;H<X;H++){let V=Y[H],ce=$[V.materialIndex];if(ce&&ce.visible){let le=M(A,ce,K,y);A.onBeforeShadow(n,A,T,L,B,le,V),n.renderBufferDirect(L,null,B,le,A,V),A.onAfterShadow(n,A,T,L,B,le,V)}}}else if($.visible){let Y=M(A,$,K,y);A.onBeforeShadow(n,A,T,L,B,Y,null),n.renderBufferDirect(L,null,B,Y,A,null),A.onAfterShadow(n,A,T,L,B,Y,null)}}let z=A.children;for(let B=0,$=z.length;B<$;B++)b(z[B],T,L,K,y)}function P(A){A.target.removeEventListener("dispose",P);for(let L in l){let K=l[L],y=A.target.uuid;y in K&&(K[y].dispose(),delete K[y])}}}var vL={[Ip]:Rp,[Np]:Op,[Pp]:Fp,[xo]:Lp,[Rp]:Ip,[Op]:Np,[Fp]:Pp,[Lp]:xo};function yL(n){function e(){let D=!1,oe=new lt,k=null,q=new lt(0,0,0,0);return{setMask:function(re){k!==re&&!D&&(n.colorMask(re,re,re,re),k=re)},setLocked:function(re){D=re},setClear:function(re,ae,it,Dt,an){an===!0&&(re*=Dt,ae*=Dt,it*=Dt),oe.set(re,ae,it,Dt),q.equals(oe)===!1&&(n.clearColor(re,ae,it,Dt),q.copy(oe))},reset:function(){D=!1,k=null,q.set(-1,0,0,0)}}}function t(){let D=!1,oe=!1,k=null,q=null,re=null;return{setReversed:function(ae){oe=ae},setTest:function(ae){ae?me(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(ae){k!==ae&&!D&&(n.depthMask(ae),k=ae)},setFunc:function(ae){if(oe&&(ae=vL[ae]),q!==ae){switch(ae){case Ip:n.depthFunc(n.NEVER);break;case Rp:n.depthFunc(n.ALWAYS);break;case Np:n.depthFunc(n.LESS);break;case xo:n.depthFunc(n.LEQUAL);break;case Pp:n.depthFunc(n.EQUAL);break;case Lp:n.depthFunc(n.GEQUAL);break;case Op:n.depthFunc(n.GREATER);break;case Fp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=ae}},setLocked:function(ae){D=ae},setClear:function(ae){re!==ae&&(n.clearDepth(ae),re=ae)},reset:function(){D=!1,k=null,q=null,re=null}}}function i(){let D=!1,oe=null,k=null,q=null,re=null,ae=null,it=null,Dt=null,an=null;return{setTest:function(ct){D||(ct?me(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(ct){oe!==ct&&!D&&(n.stencilMask(ct),oe=ct)},setFunc:function(ct,cn,gi){(k!==ct||q!==cn||re!==gi)&&(n.stencilFunc(ct,cn,gi),k=ct,q=cn,re=gi)},setOp:function(ct,cn,gi){(ae!==ct||it!==cn||Dt!==gi)&&(n.stencilOp(ct,cn,gi),ae=ct,it=cn,Dt=gi)},setLocked:function(ct){D=ct},setClear:function(ct){an!==ct&&(n.clearStencil(ct),an=ct)},reset:function(){D=!1,oe=null,k=null,q=null,re=null,ae=null,it=null,Dt=null,an=null}}}let r=new e,s=new t,o=new i,a=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],h=null,g=!1,v=null,p=null,m=null,w=null,M=null,b=null,P=null,A=new Ee(0,0,0),T=0,L=!1,K=null,y=null,S=null,z=null,B=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,H=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=H>=1):X.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=H>=2);let V=null,ce={},le=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),at=new lt().fromArray(le),ht=new lt().fromArray(ve);function G(D,oe,k,q){let re=new Uint8Array(4),ae=n.createTexture();n.bindTexture(D,ae),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<k;it++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(oe+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return ae}let J={};J[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(n.DEPTH_TEST),s.setFunc(xo),Ke(!1),st(px),me(n.CULL_FACE),C(fr);function me(D){l[D]!==!0&&(n.enable(D),l[D]=!0)}function ue(D){l[D]!==!1&&(n.disable(D),l[D]=!1)}function Ue(D,oe){return u[D]!==oe?(n.bindFramebuffer(D,oe),u[D]=oe,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=oe),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ae(D,oe){let k=f,q=!1;if(D){k=d.get(oe),k===void 0&&(k=[],d.set(oe,k));let re=D.textures;if(k.length!==re.length||k[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,it=re.length;ae<it;ae++)k[ae]=n.COLOR_ATTACHMENT0+ae;k.length=re.length,q=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,q=!0);q&&n.drawBuffers(k)}function tt(D){return h!==D?(n.useProgram(D),h=D,!0):!1}let yt={[Qr]:n.FUNC_ADD,[ID]:n.FUNC_SUBTRACT,[RD]:n.FUNC_REVERSE_SUBTRACT};yt[ND]=n.MIN,yt[PD]=n.MAX;let nt={[LD]:n.ZERO,[OD]:n.ONE,[FD]:n.SRC_COLOR,[Cp]:n.SRC_ALPHA,[zD]:n.SRC_ALPHA_SATURATE,[VD]:n.DST_COLOR,[kD]:n.DST_ALPHA,[UD]:n.ONE_MINUS_SRC_COLOR,[Dp]:n.ONE_MINUS_SRC_ALPHA,[HD]:n.ONE_MINUS_DST_COLOR,[BD]:n.ONE_MINUS_DST_ALPHA,[GD]:n.CONSTANT_COLOR,[jD]:n.ONE_MINUS_CONSTANT_COLOR,[WD]:n.CONSTANT_ALPHA,[$D]:n.ONE_MINUS_CONSTANT_ALPHA};function C(D,oe,k,q,re,ae,it,Dt,an,ct){if(D===fr){g===!0&&(ue(n.BLEND),g=!1);return}if(g===!1&&(me(n.BLEND),g=!0),D!==DD){if(D!==v||ct!==L){if((p!==Qr||M!==Qr)&&(n.blendEquation(n.FUNC_ADD),p=Qr,M=Qr),ct)switch(D){case go:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mx:n.blendFunc(n.ONE,n.ONE);break;case gx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vx:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case go:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mx:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vx:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,w=null,b=null,P=null,A.set(0,0,0),T=0,v=D,L=ct}return}re=re||oe,ae=ae||k,it=it||q,(oe!==p||re!==M)&&(n.blendEquationSeparate(yt[oe],yt[re]),p=oe,M=re),(k!==m||q!==w||ae!==b||it!==P)&&(n.blendFuncSeparate(nt[k],nt[q],nt[ae],nt[it]),m=k,w=q,b=ae,P=it),(Dt.equals(A)===!1||an!==T)&&(n.blendColor(Dt.r,Dt.g,Dt.b,an),A.copy(Dt),T=an),v=D,L=!1}function hn(D,oe){D.side===Qn?ue(n.CULL_FACE):me(n.CULL_FACE);let k=D.side===dn;oe&&(k=!k),Ke(k),D.blending===go&&D.transparent===!1?C(fr):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);let q=D.stencilWrite;o.setTest(q),q&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),St(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(D){K!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),K=D)}function st(D){D!==TD?(me(n.CULL_FACE),D!==y&&(D===px?n.cullFace(n.BACK):D===AD?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),y=D}function Ie(D){D!==S&&(Y&&n.lineWidth(D),S=D)}function St(D,oe,k){D?(me(n.POLYGON_OFFSET_FILL),(z!==oe||B!==k)&&(n.polygonOffset(oe,k),z=oe,B=k)):ue(n.POLYGON_OFFSET_FILL)}function Pe(D){D?me(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function E(D){D===void 0&&(D=n.TEXTURE0+$-1),V!==D&&(n.activeTexture(D),V=D)}function _(D,oe,k){k===void 0&&(V===null?k=n.TEXTURE0+$-1:k=V);let q=ce[k];q===void 0&&(q={type:void 0,texture:void 0},ce[k]=q),(q.type!==D||q.texture!==oe)&&(V!==k&&(n.activeTexture(k),V=k),n.bindTexture(D,oe||J[D]),q.type=D,q.texture=oe)}function O(){let D=ce[V];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(D){at.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),at.copy(D))}function he(D){ht.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ht.copy(D))}function Je(D,oe){let k=c.get(oe);k===void 0&&(k=new WeakMap,c.set(oe,k));let q=k.get(D);q===void 0&&(q=n.getUniformBlockIndex(oe,D.name),k.set(D,q))}function ke(D,oe){let q=c.get(oe).get(D);a.get(oe)!==q&&(n.uniformBlockBinding(oe,q,D.__bindingPointIndex),a.set(oe,q))}function Mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},V=null,ce={},u={},d=new WeakMap,f=[],h=null,g=!1,v=null,p=null,m=null,w=null,M=null,b=null,P=null,A=new Ee(0,0,0),T=0,L=!1,K=null,y=null,S=null,z=null,B=null,at.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:ue,bindFramebuffer:Ue,drawBuffers:Ae,useProgram:tt,setBlending:C,setMaterial:hn,setFlipSided:Ke,setCullFace:st,setLineWidth:Ie,setPolygonOffset:St,setScissorTest:Pe,activeTexture:E,bindTexture:_,unbindTexture:O,compressedTexImage2D:W,compressedTexImage3D:Z,texImage2D:fe,texImage3D:Re,updateUBOMapping:Je,uniformBlockBinding:ke,texStorage2D:ot,texStorage3D:Q,texSubImage2D:j,texSubImage3D:_e,compressedTexSubImage2D:ne,compressedTexSubImage3D:de,scissor:Ne,viewport:he,reset:Mt}}function dM(n,e,t,i){let r=_L(i);switch(t){case OM:return n*e;case UM:return n*e;case kM:return n*e*2;case Wm:return n*e/r.components*r.byteLength;case $m:return n*e/r.components*r.byteLength;case BM:return n*e*2/r.components*r.byteLength;case qm:return n*e*2/r.components*r.byteLength;case FM:return n*e*3/r.components*r.byteLength;case Pn:return n*e*4/r.components*r.byteLength;case Xm:return n*e*4/r.components*r.byteLength;case Jl:case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vp:case zp:return Math.max(n,16)*Math.max(e,8)/4;case Bp:case Hp:return Math.max(n,8)*Math.max(e,8)/2;case Gp:case jp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $p:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case em:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case im:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nu:case om:case am:return Math.ceil(n/4)*Math.ceil(e/4)*16;case VM:case cm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lm:case um:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _L(n){switch(n){case ki:case NM:return{byteLength:1,components:1};case Ua:case PM:case Xa:return{byteLength:2,components:1};case Gm:case jm:return{byteLength:2,components:4};case is:case zm:case ti:return{byteLength:4,components:1};case LM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xL(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return h?new OffscreenCanvas(E,_):ka("canvas")}function v(E,_,O){let W=1,Z=Pe(E);if((Z.width>O||Z.height>O)&&(W=O/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let j=Math.floor(W*Z.width),_e=Math.floor(W*Z.height);d===void 0&&(d=g(j,_e));let ne=_?g(j,_e):d;return ne.width=j,ne.height=_e,ne.getContext("2d").drawImage(E,0,0,j,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+_e+")."),ne}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==tn&&E.minFilter!==un}function m(E){n.generateMipmap(E)}function w(E,_,O,W,Z=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=_;if(_===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),_===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RG8UI),O===n.UNSIGNED_SHORT&&(j=n.RG16UI),O===n.UNSIGNED_INT&&(j=n.RG32UI),O===n.BYTE&&(j=n.RG8I),O===n.SHORT&&(j=n.RG16I),O===n.INT&&(j=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGB8UI),O===n.UNSIGNED_SHORT&&(j=n.RGB16UI),O===n.UNSIGNED_INT&&(j=n.RGB32UI),O===n.BYTE&&(j=n.RGB8I),O===n.SHORT&&(j=n.RGB16I),O===n.INT&&(j=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),O===n.UNSIGNED_INT&&(j=n.RGBA32UI),O===n.BYTE&&(j=n.RGBA8I),O===n.SHORT&&(j=n.RGBA16I),O===n.INT&&(j=n.RGBA32I)),_===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),_===n.RGBA){let _e=Z?ru:rt.getTransfer(W);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=_e===bt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(E,_){let O;return E?_===null||_===is||_===wo?O=n.DEPTH24_STENCIL8:_===ti?O=n.DEPTH32F_STENCIL8:_===Ua&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===is||_===wo?O=n.DEPTH_COMPONENT24:_===ti?O=n.DEPTH_COMPONENT32F:_===Ua&&(O=n.DEPTH_COMPONENT16),O}function b(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==tn&&E.minFilter!==un?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function P(E){let _=E.target;_.removeEventListener("dispose",P),T(_),_.isVideoTexture&&u.delete(_)}function A(E){let _=E.target;_.removeEventListener("dispose",A),K(_)}function T(E){let _=i.get(E);if(_.__webglInit===void 0)return;let O=E.source,W=f.get(O);if(W){let Z=W[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(E),Object.keys(W).length===0&&f.delete(O)}i.remove(E)}function L(E){let _=i.get(E);n.deleteTexture(_.__webglTexture);let O=E.source,W=f.get(O);delete W[_.__cacheKey],o.memory.textures--}function K(E){let _=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Z=0;Z<_.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)n.deleteFramebuffer(_.__webglFramebuffer[W]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=E.textures;for(let W=0,Z=O.length;W<Z;W++){let j=i.get(O[W]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(O[W])}i.remove(E)}let y=0;function S(){y=0}function z(){let E=y;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),y+=1,E}function B(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function $(E,_){let O=i.get(E);if(E.isVideoTexture&&Ie(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let W=E.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(O,E,_);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function Y(E,_){let O=i.get(E);if(E.version>0&&O.__version!==E.version){ht(O,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function H(E,_){let O=i.get(E);if(E.version>0&&O.__version!==E.version){ht(O,E,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function X(E,_){let O=i.get(E);if(E.version>0&&O.__version!==E.version){G(O,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}let V={[ns]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[Fa]:n.MIRRORED_REPEAT},ce={[tn]:n.NEAREST,[Hm]:n.NEAREST_MIPMAP_NEAREST,[po]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Na]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},le={[aI]:n.NEVER,[hI]:n.ALWAYS,[cI]:n.LESS,[zM]:n.LEQUAL,[lI]:n.EQUAL,[fI]:n.GEQUAL,[uI]:n.GREATER,[dI]:n.NOTEQUAL};function ve(E,_){if(_.type===ti&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===un||_.magFilter===Na||_.magFilter===po||_.magFilter===di||_.minFilter===un||_.minFilter===Na||_.minFilter===po||_.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,V[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,V[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,V[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ce[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,le[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===tn||_.minFilter!==po&&_.minFilter!==di||_.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function at(E,_){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",P));let W=_.source,Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));let j=B(_);if(j!==E.__cacheKey){Z[j]===void 0&&(Z[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[j].usedTimes++;let _e=Z[E.__cacheKey];_e!==void 0&&(Z[E.__cacheKey].usedTimes--,_e.usedTimes===0&&L(_)),E.__cacheKey=j,E.__webglTexture=Z[j].texture}return O}function ht(E,_,O){let W=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=n.TEXTURE_3D);let Z=at(E,_),j=_.source;t.bindTexture(W,E.__webglTexture,n.TEXTURE0+O);let _e=i.get(j);if(j.version!==_e.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);let ne=rt.getPrimaries(rt.workingColorSpace),de=_.colorSpace===ur?null:rt.getPrimaries(_.colorSpace),ot=_.colorSpace===ur||ne===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Q=v(_.image,!1,r.maxTextureSize);Q=St(_,Q);let fe=s.convert(_.format,_.colorSpace),Re=s.convert(_.type),Ne=w(_.internalFormat,fe,Re,_.colorSpace,_.isVideoTexture);ve(W,_);let he,Je=_.mipmaps,ke=_.isVideoTexture!==!0,Mt=_e.__version===void 0||Z===!0,D=j.dataReady,oe=b(_,Q);if(_.isDepthTexture)Ne=M(_.format===bo,_.type),Mt&&(ke?t.texStorage2D(n.TEXTURE_2D,1,Ne,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ne,Q.width,Q.height,0,fe,Re,null));else if(_.isDataTexture)if(Je.length>0){ke&&Mt&&t.texStorage2D(n.TEXTURE_2D,oe,Ne,Je[0].width,Je[0].height);for(let k=0,q=Je.length;k<q;k++)he=Je[k],ke?D&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,he.width,he.height,fe,Re,he.data):t.texImage2D(n.TEXTURE_2D,k,Ne,he.width,he.height,0,fe,Re,he.data);_.generateMipmaps=!1}else ke?(Mt&&t.texStorage2D(n.TEXTURE_2D,oe,Ne,Q.width,Q.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,fe,Re,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,Q.width,Q.height,0,fe,Re,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ke&&Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Ne,Je[0].width,Je[0].height,Q.depth);for(let k=0,q=Je.length;k<q;k++)if(he=Je[k],_.format!==Pn)if(fe!==null)if(ke){if(D)if(_.layerUpdates.size>0){let re=dM(he.width,he.height,_.format,_.type);for(let ae of _.layerUpdates){let it=he.data.subarray(ae*re/he.data.BYTES_PER_ELEMENT,(ae+1)*re/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,ae,he.width,he.height,1,fe,it,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,he.width,he.height,Q.depth,fe,he.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,Ne,he.width,he.height,Q.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,he.width,he.height,Q.depth,fe,Re,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,k,Ne,he.width,he.height,Q.depth,0,fe,Re,he.data)}else{ke&&Mt&&t.texStorage2D(n.TEXTURE_2D,oe,Ne,Je[0].width,Je[0].height);for(let k=0,q=Je.length;k<q;k++)he=Je[k],_.format!==Pn?fe!==null?ke?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(n.TEXTURE_2D,k,Ne,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?D&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,he.width,he.height,fe,Re,he.data):t.texImage2D(n.TEXTURE_2D,k,Ne,he.width,he.height,0,fe,Re,he.data)}else if(_.isDataArrayTexture)if(ke){if(Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Ne,Q.width,Q.height,Q.depth),D)if(_.layerUpdates.size>0){let k=dM(Q.width,Q.height,_.format,_.type);for(let q of _.layerUpdates){let re=Q.data.subarray(q*k/Q.data.BYTES_PER_ELEMENT,(q+1)*k/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,fe,Re,re)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,Re,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,Q.width,Q.height,Q.depth,0,fe,Re,Q.data);else if(_.isData3DTexture)ke?(Mt&&t.texStorage3D(n.TEXTURE_3D,oe,Ne,Q.width,Q.height,Q.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,Re,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,Q.width,Q.height,Q.depth,0,fe,Re,Q.data);else if(_.isFramebufferTexture){if(Mt)if(ke)t.texStorage2D(n.TEXTURE_2D,oe,Ne,Q.width,Q.height);else{let k=Q.width,q=Q.height;for(let re=0;re<oe;re++)t.texImage2D(n.TEXTURE_2D,re,Ne,k,q,0,fe,Re,null),k>>=1,q>>=1}}else if(Je.length>0){if(ke&&Mt){let k=Pe(Je[0]);t.texStorage2D(n.TEXTURE_2D,oe,Ne,k.width,k.height)}for(let k=0,q=Je.length;k<q;k++)he=Je[k],ke?D&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,fe,Re,he):t.texImage2D(n.TEXTURE_2D,k,Ne,fe,Re,he);_.generateMipmaps=!1}else if(ke){if(Mt){let k=Pe(Q);t.texStorage2D(n.TEXTURE_2D,oe,Ne,k.width,k.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Re,Q)}else t.texImage2D(n.TEXTURE_2D,0,Ne,fe,Re,Q);p(_)&&m(W),_e.__version=j.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function G(E,_,O){if(_.image.length!==6)return;let W=at(E,_),Z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+O);let j=i.get(Z);if(Z.version!==j.__version||W===!0){t.activeTexture(n.TEXTURE0+O);let _e=rt.getPrimaries(rt.workingColorSpace),ne=_.colorSpace===ur?null:rt.getPrimaries(_.colorSpace),de=_.colorSpace===ur||_e===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let ot=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let q=0;q<6;q++)!ot&&!Q?fe[q]=v(_.image[q],!0,r.maxCubemapSize):fe[q]=Q?_.image[q].image:_.image[q],fe[q]=St(_,fe[q]);let Re=fe[0],Ne=s.convert(_.format,_.colorSpace),he=s.convert(_.type),Je=w(_.internalFormat,Ne,he,_.colorSpace),ke=_.isVideoTexture!==!0,Mt=j.__version===void 0||W===!0,D=Z.dataReady,oe=b(_,Re);ve(n.TEXTURE_CUBE_MAP,_);let k;if(ot){ke&&Mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,Je,Re.width,Re.height);for(let q=0;q<6;q++){k=fe[q].mipmaps;for(let re=0;re<k.length;re++){let ae=k[re];_.format!==Pn?Ne!==null?ke?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,ae.width,ae.height,Ne,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,Je,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,ae.width,ae.height,Ne,he,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,Je,ae.width,ae.height,0,Ne,he,ae.data)}}}else{if(k=_.mipmaps,ke&&Mt){k.length>0&&oe++;let q=Pe(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,Je,q.width,q.height)}for(let q=0;q<6;q++)if(Q){ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,fe[q].width,fe[q].height,Ne,he,fe[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Je,fe[q].width,fe[q].height,0,Ne,he,fe[q].data);for(let re=0;re<k.length;re++){let it=k[re].image[q].image;ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,it.width,it.height,Ne,he,it.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,Je,it.width,it.height,0,Ne,he,it.data)}}else{ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ne,he,fe[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Je,Ne,he,fe[q]);for(let re=0;re<k.length;re++){let ae=k[re];ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,Ne,he,ae.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,Je,Ne,he,ae.image[q])}}}p(_)&&m(n.TEXTURE_CUBE_MAP),j.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function J(E,_,O,W,Z,j){let _e=s.convert(O.format,O.colorSpace),ne=s.convert(O.type),de=w(O.internalFormat,_e,ne,O.colorSpace);if(!i.get(_).__hasExternalTextures){let Q=Math.max(1,_.width>>j),fe=Math.max(1,_.height>>j);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,de,Q,fe,_.depth,0,_e,ne,null):t.texImage2D(Z,j,de,Q,fe,0,_e,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),st(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,i.get(O).__webglTexture,0,Ke(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,i.get(O).__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(E,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){let W=_.depthTexture,Z=W&&W.isDepthTexture?W.type:null,j=M(_.stencilBuffer,Z),_e=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=Ke(_);st(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,j,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,j,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,E)}else{let W=_.textures;for(let Z=0;Z<W.length;Z++){let j=W[Z],_e=s.convert(j.format,j.colorSpace),ne=s.convert(j.type),de=w(j.internalFormat,_e,ne,j.colorSpace),ot=Ke(_);O&&st(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,de,_.width,_.height):st(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,de,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,de,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);let W=i.get(_.depthTexture).__webglTexture,Z=Ke(_);if(_.depthTexture.format===vo)st(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(_.depthTexture.format===bo)st(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ue(E){let _=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let W=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=W}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ue(_.__webglFramebuffer,E)}else if(O){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=n.createRenderbuffer(),me(_.__webglDepthbuffer[W],E,!1);else{let Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),me(_.__webglDepthbuffer,E,!1);else{let W=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(E,_,O){let W=i.get(E);_!==void 0&&J(W.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ue(E)}function tt(E){let _=E.texture,O=i.get(E),W=i.get(_);E.addEventListener("dispose",A);let Z=E.textures,j=E.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=_.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let de=0;de<_.mipmaps.length;de++)O.__webglFramebuffer[ne][de]=n.createFramebuffer()}else O.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)O.__webglFramebuffer[ne]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ne=0,de=Z.length;ne<de;ne++){let ot=i.get(Z[ne]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&st(E)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ne=0;ne<Z.length;ne++){let de=Z[ne];O.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);let ot=s.convert(de.format,de.colorSpace),Q=s.convert(de.type),fe=w(de.internalFormat,ot,Q,de.colorSpace,E.isXRRenderTarget===!0),Re=Ke(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,fe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,O.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),me(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ve(n.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)J(O.__webglFramebuffer[ne][de],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de);else J(O.__webglFramebuffer[ne],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(_)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ne=0,de=Z.length;ne<de;ne++){let ot=Z[ne],Q=i.get(ot);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),ve(n.TEXTURE_2D,ot),J(O.__webglFramebuffer,E,ot,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,0),p(ot)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,W.__webglTexture),ve(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)J(O.__webglFramebuffer[de],E,_,n.COLOR_ATTACHMENT0,ne,de);else J(O.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,ne,0);p(_)&&m(ne),t.unbindTexture()}E.depthBuffer&&Ue(E)}function yt(E){let _=E.textures;for(let O=0,W=_.length;O<W;O++){let Z=_[O];if(p(Z)){let j=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(Z).__webglTexture;t.bindTexture(j,_e),m(j),t.unbindTexture()}}}let nt=[],C=[];function hn(E){if(E.samples>0){if(st(E)===!1){let _=E.textures,O=E.width,W=E.height,Z=n.COLOR_BUFFER_BIT,j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(E),ne=_.length>1;if(ne)for(let de=0;de<_.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let de=0;de<_.length;de++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);let ot=i.get(_[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,O,W,0,0,O,W,Z,n.NEAREST),c===!0&&(nt.length=0,C.length=0,nt.push(n.COLOR_ATTACHMENT0+de),E.depthBuffer&&E.resolveDepthBuffer===!1&&(nt.push(j),C.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let de=0;de<_.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);let ot=i.get(_[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,ot,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Ke(E){return Math.min(r.maxSamples,E.samples)}function st(E){let _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ie(E){let _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function St(E,_){let O=E.colorSpace,W=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==zt&&O!==ur&&(rt.getTransfer(O)===bt?(W!==Pn||Z!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function Pe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=S,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=X,this.rebindTextures=Ae,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=J,this.useMultisampledRTT=st}function ML(n,e){function t(i,r=ur){let s,o=rt.getTransfer(r);if(i===ki)return n.UNSIGNED_BYTE;if(i===Gm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===LM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===NM)return n.BYTE;if(i===PM)return n.SHORT;if(i===Ua)return n.UNSIGNED_SHORT;if(i===zm)return n.INT;if(i===is)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===Xa)return n.HALF_FLOAT;if(i===OM)return n.ALPHA;if(i===FM)return n.RGB;if(i===Pn)return n.RGBA;if(i===UM)return n.LUMINANCE;if(i===kM)return n.LUMINANCE_ALPHA;if(i===vo)return n.DEPTH_COMPONENT;if(i===bo)return n.DEPTH_STENCIL;if(i===Wm)return n.RED;if(i===$m)return n.RED_INTEGER;if(i===BM)return n.RG;if(i===qm)return n.RG_INTEGER;if(i===Xm)return n.RGBA_INTEGER;if(i===Jl||i===Ql||i===eu||i===tu)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ql)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bp||i===Vp||i===Hp||i===zp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gp||i===jp||i===Wp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gp||i===jp)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wp)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$p||i===qp||i===Xp||i===Yp||i===Zp||i===Kp||i===Jp||i===Qp||i===em||i===tm||i===nm||i===im||i===rm||i===sm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$p)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qp)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xp)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yp)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zp)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kp)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jp)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qp)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===em)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===im)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nu||i===om||i===am)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===nu)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===om)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===am)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===VM||i===cm||i===lm||i===um)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===um)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Em=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},fi=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},SL={type:"move"},Oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SL)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},wL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Tm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new kn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mi({vertexShader:wL,fragmentShader:bL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new mu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Am=class extends pr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,v=new Tm,p=t.getContextAttributes(),m=null,w=null,M=[],b=[],P=new Xe,A=null,T=new Ot;T.layers.enable(1),T.viewport=new lt;let L=new Ot;L.layers.enable(2),L.viewport=new lt;let K=[T,L],y=new Em;y.layers.enable(1),y.layers.enable(2);let S=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=M[G];return J===void 0&&(J=new Oa,M[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=M[G];return J===void 0&&(J=new Oa,M[G]=J),J.getGripSpace()},this.getHand=function(G){let J=M[G];return J===void 0&&(J=new Oa,M[G]=J),J.getHandSpace()};function B(G){let J=b.indexOf(G.inputSource);if(J===-1)return;let me=M[J];me!==void 0&&(me.update(G.inputSource,G.frame,l||o),me.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Y);for(let G=0;G<M.length;G++){let J=b[G];J!==null&&(b[G]=null,M[G].disconnect(J))}S=null,z=null,v.reset(),e.setRenderTarget(m),h=null,f=null,d=null,r=null,w=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(G){return Qa(this,null,function*(){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){let J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new Bi(h.framebufferWidth,h.framebufferHeight,{format:Pn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,me=null,ue=null;p.depth&&(ue=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=p.stencil?bo:vo,me=p.stencil?wo:is);let Ue={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Bi(f.textureWidth,f.textureHeight,{format:Pn,type:ki,depthTexture:new vu(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),ht.setContext(r),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(G){for(let J=0;J<G.removed.length;J++){let me=G.removed[J],ue=b.indexOf(me);ue>=0&&(b[ue]=null,M[ue].disconnect(me))}for(let J=0;J<G.added.length;J++){let me=G.added[J],ue=b.indexOf(me);if(ue===-1){for(let Ae=0;Ae<M.length;Ae++)if(Ae>=b.length){b.push(me),ue=Ae;break}else if(b[Ae]===null){b[Ae]=me,ue=Ae;break}if(ue===-1)break}let Ue=M[ue];Ue&&Ue.connect(me)}}let H=new R,X=new R;function V(G,J,me){H.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(me.matrixWorld);let ue=H.distanceTo(X),Ue=J.projectionMatrix.elements,Ae=me.projectionMatrix.elements,tt=Ue[14]/(Ue[10]-1),yt=Ue[14]/(Ue[10]+1),nt=(Ue[9]+1)/Ue[5],C=(Ue[9]-1)/Ue[5],hn=(Ue[8]-1)/Ue[0],Ke=(Ae[8]+1)/Ae[0],st=tt*hn,Ie=tt*Ke,St=ue/(-hn+Ke),Pe=St*-hn;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Pe),G.translateZ(St),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ue[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let E=tt+St,_=yt+St,O=st-Pe,W=Ie+(ue-Pe),Z=nt*yt/_*E,j=C*yt/_*E;G.projectionMatrix.makePerspective(O,W,Z,j,E,_),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ce(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let J=G.near,me=G.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(me=v.depthFar)),y.near=L.near=T.near=J,y.far=L.far=T.far=me,(S!==y.near||z!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,z=y.far);let ue=G.parent,Ue=y.cameras;ce(y,ue);for(let Ae=0;Ae<Ue.length;Ae++)ce(Ue[Ae],ue);Ue.length===2?V(y,T,L):y.projectionMatrix.copy(T.projectionMatrix),le(G,y,ue)};function le(G,J,me){me===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(me.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ao*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ve=null;function at(G,J){if(u=J.getViewerPose(l||o),g=J,u!==null){let me=u.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let ue=!1;me.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let Ae=0;Ae<me.length;Ae++){let tt=me[Ae],yt=null;if(h!==null)yt=h.getViewport(tt);else{let C=d.getViewSubImage(f,tt);yt=C.viewport,Ae===0&&(e.setRenderTargetTextures(w,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(w))}let nt=K[Ae];nt===void 0&&(nt=new Ot,nt.layers.enable(Ae),nt.viewport=new lt,K[Ae]=nt),nt.matrix.fromArray(tt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(tt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(yt.x,yt.y,yt.width,yt.height),Ae===0&&(y.matrix.copy(nt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(nt)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){let Ae=d.getDepthInformation(me[0]);Ae&&Ae.isValid&&Ae.texture&&v.init(e,Ae,r.renderState)}}for(let me=0;me<M.length;me++){let ue=b[me],Ue=M[me];ue!==null&&Ue!==void 0&&Ue.update(ue,J,l||o)}ve&&ve(G,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let ht=new qM;ht.setAnimationLoop(at),this.setAnimationLoop=function(G){ve=G},this.dispose=function(){}}},Kr=new rs,EL=new He;function TL(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,$M(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,w,M,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,w,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let w=e.get(m),M=w.envMap,b=w.envMapRotation;M&&(p.envMap.value=M,Kr.copy(b),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),p.envMapRotation.value.setFromMatrix4(EL.makeRotationFromEuler(Kr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,w,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let w=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AL(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){let b=M.program;i.uniformBlockBinding(w,b)}function l(w,M){let b=r[w.id];b===void 0&&(g(w),b=u(w),r[w.id]=b,w.addEventListener("dispose",p));let P=M.program;i.updateUBOMapping(w,P);let A=e.render.frame;s[w.id]!==A&&(f(w),s[w.id]=A)}function u(w){let M=d();w.__bindingPointIndex=M;let b=n.createBuffer(),P=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let M=r[w.id],b=w.uniforms,P=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,T=b.length;A<T;A++){let L=Array.isArray(b[A])?b[A]:[b[A]];for(let K=0,y=L.length;K<y;K++){let S=L[K];if(h(S,A,K,P)===!0){let z=S.__offset,B=Array.isArray(S.value)?S.value:[S.value],$=0;for(let Y=0;Y<B.length;Y++){let H=B[Y],X=v(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,z+$,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,$),$+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,M,b,P){let A=w.value,T=M+"_"+b;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{let L=P[T];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return P[T]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(w){let M=w.uniforms,b=0,P=16;for(let T=0,L=M.length;T<L;T++){let K=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,S=K.length;y<S;y++){let z=K[y],B=Array.isArray(z.value)?z.value:[z.value];for(let $=0,Y=B.length;$<Y;$++){let H=B[$],X=v(H),V=b%P,ce=V%X.boundary,le=V+ce;b+=ce,le!==0&&P-le<X.storage&&(b+=P-le),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=X.storage}}}let A=b%P;return A>0&&(b+=P-A),w.__size=b,w.__cache={},this}function v(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function p(w){let M=w.target;M.removeEventListener("dispose",p);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(let w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}var yu=class{constructor(e={}){let{canvas:t=II(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let h=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=hr,this.toneMappingExposure=1;let M=this,b=!1,P=0,A=0,T=null,L=-1,K=null,y=new lt,S=new lt,z=null,B=new Ee(0),$=0,Y=t.width,H=t.height,X=1,V=null,ce=null,le=new lt(0,0,Y,H),ve=new lt(0,0,Y,H),at=!1,ht=new Ba,G=!1,J=!1,me=new He,ue=new He,Ue=new R,Ae=new lt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function nt(){return T===null?X:1}let C=i;function hn(x,I){return t.getContext(x,I)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vm}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",ae,!1),C===null){let I="webgl2";if(C=hn(I,x),C===null)throw hn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ke,st,Ie,St,Pe,E,_,O,W,Z,j,_e,ne,de,ot,Q,fe,Re,Ne,he,Je,ke,Mt,D;function oe(){Ke=new GN(C),Ke.init(),ke=new ML(C,Ke),st=new UN(C,Ke,e,ke),Ie=new yL(C),st.reverseDepthBuffer&&Ie.buffers.depth.setReversed(!0),St=new $N(C),Pe=new sL,E=new xL(C,Ke,Ie,Pe,st,ke,St),_=new BN(M),O=new zN(M),W=new QI(C),Mt=new ON(C,W),Z=new jN(C,W,St,Mt),j=new XN(C,Z,W,St),Ne=new qN(C,st,E),Q=new kN(Pe),_e=new rL(M,_,O,Ke,st,Mt,Q),ne=new TL(M,Pe),de=new aL,ot=new hL(Ke),Re=new LN(M,_,O,Ie,j,f,c),fe=new gL(M,j,st),D=new AL(C,St,st,Ie),he=new FN(C,Ke,St),Je=new WN(C,Ke,St),St.programs=_e.programs,M.capabilities=st,M.extensions=Ke,M.properties=Pe,M.renderLists=de,M.shadowMap=fe,M.state=Ie,M.info=St}oe();let k=new Am(M,C);this.xr=k,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let x=Ke.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ke.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(x){x!==void 0&&(X=x,this.setSize(Y,H,!1))},this.getSize=function(x){return x.set(Y,H)},this.setSize=function(x,I,F=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,H=I,t.width=Math.floor(x*X),t.height=Math.floor(I*X),F===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(Y*X,H*X).floor()},this.setDrawingBufferSize=function(x,I,F){Y=x,H=I,X=F,t.width=Math.floor(x*F),t.height=Math.floor(I*F),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(y)},this.getViewport=function(x){return x.copy(le)},this.setViewport=function(x,I,F,U){x.isVector4?le.set(x.x,x.y,x.z,x.w):le.set(x,I,F,U),Ie.viewport(y.copy(le).multiplyScalar(X).round())},this.getScissor=function(x){return x.copy(ve)},this.setScissor=function(x,I,F,U){x.isVector4?ve.set(x.x,x.y,x.z,x.w):ve.set(x,I,F,U),Ie.scissor(S.copy(ve).multiplyScalar(X).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(x){Ie.setScissorTest(at=x)},this.setOpaqueSort=function(x){V=x},this.setTransparentSort=function(x){ce=x},this.getClearColor=function(x){return x.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(x=!0,I=!0,F=!0){let U=0;if(x){let N=!1;if(T!==null){let ee=T.texture.format;N=ee===Xm||ee===qm||ee===$m}if(N){let ee=T.texture.type,se=ee===ki||ee===is||ee===Ua||ee===wo||ee===Gm||ee===jm,pe=Re.getClearColor(),ge=Re.getClearAlpha(),Te=pe.r,Ce=pe.g,xe=pe.b;se?(h[0]=Te,h[1]=Ce,h[2]=xe,h[3]=ge,C.clearBufferuiv(C.COLOR,0,h)):(g[0]=Te,g[1]=Ce,g[2]=xe,g[3]=ge,C.clearBufferiv(C.COLOR,0,g))}else U|=C.COLOR_BUFFER_BIT}I&&(U|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(U|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),de.dispose(),ot.dispose(),Pe.dispose(),_.dispose(),O.dispose(),j.dispose(),Mt.dispose(),D.dispose(),_e.dispose(),k.dispose(),k.removeEventListener("sessionstart",Rg),k.removeEventListener("sessionend",Ng),xr.stop()};function q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let x=St.autoReset,I=fe.enabled,F=fe.autoUpdate,U=fe.needsUpdate,N=fe.type;oe(),St.autoReset=x,fe.enabled=I,fe.autoUpdate=F,fe.needsUpdate=U,fe.type=N}function ae(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function it(x){let I=x.target;I.removeEventListener("dispose",it),Dt(I)}function Dt(x){an(x),Pe.remove(x)}function an(x){let I=Pe.get(x).programs;I!==void 0&&(I.forEach(function(F){_e.releaseProgram(F)}),x.isShaderMaterial&&_e.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,F,U,N,ee){I===null&&(I=tt);let se=N.isMesh&&N.matrixWorld.determinant()<0,pe=sS(x,I,F,U,N);Ie.setMaterial(U,se);let ge=F.index,Te=1;if(U.wireframe===!0){if(ge=Z.getWireframeAttribute(F),ge===void 0)return;Te=2}let Ce=F.drawRange,xe=F.attributes.position,pt=Ce.start*Te,wt=(Ce.start+Ce.count)*Te;ee!==null&&(pt=Math.max(pt,ee.start*Te),wt=Math.min(wt,(ee.start+ee.count)*Te)),ge!==null?(pt=Math.max(pt,0),wt=Math.min(wt,ge.count)):xe!=null&&(pt=Math.max(pt,0),wt=Math.min(wt,xe.count));let At=wt-pt;if(At<0||At===1/0)return;Mt.setup(N,U,pe,F,ge);let pn,ut=he;if(ge!==null&&(pn=W.get(ge),ut=Je,ut.setIndex(pn)),N.isMesh)U.wireframe===!0?(Ie.setLineWidth(U.wireframeLinewidth*nt()),ut.setMode(C.LINES)):ut.setMode(C.TRIANGLES);else if(N.isLine){let Me=U.linewidth;Me===void 0&&(Me=1),Ie.setLineWidth(Me*nt()),N.isLineSegments?ut.setMode(C.LINES):N.isLineLoop?ut.setMode(C.LINE_LOOP):ut.setMode(C.LINE_STRIP)}else N.isPoints?ut.setMode(C.POINTS):N.isSprite&&ut.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ut.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ut.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Me=N._multiDrawStarts,Gt=N._multiDrawCounts,dt=N._multiDrawCount,Vn=ge?W.get(ge).bytesPerElement:1,cs=Pe.get(U).currentProgram.getUniforms();for(let mn=0;mn<dt;mn++)cs.setValue(C,"_gl_DrawID",mn),ut.render(Me[mn]/Vn,Gt[mn])}else if(N.isInstancedMesh)ut.renderInstances(pt,At,N.count);else if(F.isInstancedBufferGeometry){let Me=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Gt=Math.min(F.instanceCount,Me);ut.renderInstances(pt,At,Gt)}else ut.render(pt,At)};function ct(x,I,F){x.transparent===!0&&x.side===Qn&&x.forceSinglePass===!1?(x.side=dn,x.needsUpdate=!0,Ja(x,I,F),x.side=hi,x.needsUpdate=!0,Ja(x,I,F),x.side=Qn):Ja(x,I,F)}this.compile=function(x,I,F=null){F===null&&(F=x),p=ot.get(F),p.init(I),w.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==F&&x.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let U=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ee=N.material;if(ee)if(Array.isArray(ee))for(let se=0;se<ee.length;se++){let pe=ee[se];ct(pe,F,N),U.add(pe)}else ct(ee,F,N),U.add(ee)}),w.pop(),p=null,U},this.compileAsync=function(x,I,F=null){let U=this.compile(x,I,F);return new Promise(N=>{function ee(){if(U.forEach(function(se){Pe.get(se).currentProgram.isReady()&&U.delete(se)}),U.size===0){N(x);return}setTimeout(ee,10)}Ke.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let cn=null;function gi(x){cn&&cn(x)}function Rg(){xr.stop()}function Ng(){xr.start()}let xr=new qM;xr.setAnimationLoop(gi),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(x){cn=x,k.setAnimationLoop(x),x===null?xr.stop():xr.start()},k.addEventListener("sessionstart",Rg),k.addEventListener("sessionend",Ng),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(I),I=k.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,I,T),p=ot.get(x,w.length),p.init(I),w.push(p),ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ht.setFromProjectionMatrix(ue),J=this.localClippingEnabled,G=Q.init(this.clippingPlanes,J),v=de.get(x,m.length),v.init(),m.push(v),k.enabled===!0&&k.isPresenting===!0){let ee=M.xr.getDepthSensingMesh();ee!==null&&$u(ee,I,-1/0,M.sortObjects)}$u(x,I,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(V,ce),yt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,yt&&Re.addToRenderList(v,x),this.info.render.frame++,G===!0&&Q.beginShadows();let F=p.state.shadowsArray;fe.render(F,x,I),G===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let U=v.opaque,N=v.transmissive;if(p.setupLights(),I.isArrayCamera){let ee=I.cameras;if(N.length>0)for(let se=0,pe=ee.length;se<pe;se++){let ge=ee[se];Lg(U,N,x,ge)}yt&&Re.render(x);for(let se=0,pe=ee.length;se<pe;se++){let ge=ee[se];Pg(v,x,ge,ge.viewport)}}else N.length>0&&Lg(U,N,x,I),yt&&Re.render(x),Pg(v,x,I);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),x.isScene===!0&&x.onAfterRender(M,x,I),Mt.resetDefaultState(),L=-1,K=null,w.pop(),w.length>0?(p=w[w.length-1],G===!0&&Q.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function $u(x,I,F,U){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ht.intersectsSprite(x)){U&&Ae.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ue);let se=j.update(x),pe=x.material;pe.visible&&v.push(x,se,pe,F,Ae.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ht.intersectsObject(x))){let se=j.update(x),pe=x.material;if(U&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ae.copy(x.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Ae.copy(se.boundingSphere.center)),Ae.applyMatrix4(x.matrixWorld).applyMatrix4(ue)),Array.isArray(pe)){let ge=se.groups;for(let Te=0,Ce=ge.length;Te<Ce;Te++){let xe=ge[Te],pt=pe[xe.materialIndex];pt&&pt.visible&&v.push(x,se,pt,F,Ae.z,xe)}}else pe.visible&&v.push(x,se,pe,F,Ae.z,null)}}let ee=x.children;for(let se=0,pe=ee.length;se<pe;se++)$u(ee[se],I,F,U)}function Pg(x,I,F,U){let N=x.opaque,ee=x.transmissive,se=x.transparent;p.setupLightsView(F),G===!0&&Q.setGlobalState(M.clippingPlanes,F),U&&Ie.viewport(y.copy(U)),N.length>0&&Ka(N,I,F),ee.length>0&&Ka(ee,I,F),se.length>0&&Ka(se,I,F),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Lg(x,I,F,U){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[U.id]===void 0&&(p.state.transmissionRenderTarget[U.id]=new Bi(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Xa:ki,minFilter:di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));let ee=p.state.transmissionRenderTarget[U.id],se=U.viewport||y;ee.setSize(se.z,se.w);let pe=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(B),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),yt&&Re.render(F);let ge=M.toneMapping;M.toneMapping=hr;let Te=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),p.setupLightsView(U),G===!0&&Q.setGlobalState(M.clippingPlanes,U),Ka(x,F,U),E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let xe=0,pt=I.length;xe<pt;xe++){let wt=I[xe],At=wt.object,pn=wt.geometry,ut=wt.material,Me=wt.group;if(ut.side===Qn&&At.layers.test(U.layers)){let Gt=ut.side;ut.side=dn,ut.needsUpdate=!0,Og(At,F,U,pn,ut,Me),ut.side=Gt,ut.needsUpdate=!0,Ce=!0}}Ce===!0&&(E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee))}M.setRenderTarget(pe),M.setClearColor(B,$),Te!==void 0&&(U.viewport=Te),M.toneMapping=ge}function Ka(x,I,F){let U=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ee=x.length;N<ee;N++){let se=x[N],pe=se.object,ge=se.geometry,Te=U===null?se.material:U,Ce=se.group;pe.layers.test(F.layers)&&Og(pe,I,F,ge,Te,Ce)}}function Og(x,I,F,U,N,ee){x.onBeforeRender(M,I,F,U,N,ee),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(M,I,F,U,x,ee),N.transparent===!0&&N.side===Qn&&N.forceSinglePass===!1?(N.side=dn,N.needsUpdate=!0,M.renderBufferDirect(F,I,U,N,x,ee),N.side=hi,N.needsUpdate=!0,M.renderBufferDirect(F,I,U,N,x,ee),N.side=Qn):M.renderBufferDirect(F,I,U,N,x,ee),x.onAfterRender(M,I,F,U,N,ee)}function Ja(x,I,F){I.isScene!==!0&&(I=tt);let U=Pe.get(x),N=p.state.lights,ee=p.state.shadowsArray,se=N.state.version,pe=_e.getParameters(x,N.state,ee,I,F),ge=_e.getProgramCacheKey(pe),Te=U.programs;U.environment=x.isMeshStandardMaterial?I.environment:null,U.fog=I.fog,U.envMap=(x.isMeshStandardMaterial?O:_).get(x.envMap||U.environment),U.envMapRotation=U.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Te===void 0&&(x.addEventListener("dispose",it),Te=new Map,U.programs=Te);let Ce=Te.get(ge);if(Ce!==void 0){if(U.currentProgram===Ce&&U.lightsStateVersion===se)return Ug(x,pe),Ce}else pe.uniforms=_e.getUniforms(x),x.onBeforeCompile(pe,M),Ce=_e.acquireProgram(pe,ge),Te.set(ge,Ce),U.uniforms=pe.uniforms;let xe=U.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=Q.uniform),Ug(x,pe),U.needsLights=aS(x),U.lightsStateVersion=se,U.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),U.currentProgram=Ce,U.uniformsList=null,Ce}function Fg(x){if(x.uniformsList===null){let I=x.currentProgram.getUniforms();x.uniformsList=_o.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Ug(x,I){let F=Pe.get(x);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function sS(x,I,F,U,N){I.isScene!==!0&&(I=tt),E.resetTextureUnits();let ee=I.fog,se=U.isMeshStandardMaterial?I.environment:null,pe=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:zt,ge=(U.isMeshStandardMaterial?O:_).get(U.envMap||se),Te=U.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ce=!!F.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),xe=!!F.morphAttributes.position,pt=!!F.morphAttributes.normal,wt=!!F.morphAttributes.color,At=hr;U.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(At=M.toneMapping);let pn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ut=pn!==void 0?pn.length:0,Me=Pe.get(U),Gt=p.state.lights;if(G===!0&&(J===!0||x!==K)){let Tn=x===K&&U.id===L;Q.setState(U,x,Tn)}let dt=!1;U.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Gt.state.version||Me.outputColorSpace!==pe||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==ge||U.fog===!0&&Me.fog!==ee||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Q.numPlanes||Me.numIntersection!==Q.numIntersection)||Me.vertexAlphas!==Te||Me.vertexTangents!==Ce||Me.morphTargets!==xe||Me.morphNormals!==pt||Me.morphColors!==wt||Me.toneMapping!==At||Me.morphTargetsCount!==ut)&&(dt=!0):(dt=!0,Me.__version=U.version);let Vn=Me.currentProgram;dt===!0&&(Vn=Ja(U,I,N));let cs=!1,mn=!1,qu=!1,Ct=Vn.getUniforms(),ji=Me.uniforms;if(Ie.useProgram(Vn.program)&&(cs=!0,mn=!0,qu=!0),U.id!==L&&(L=U.id,mn=!0),cs||K!==x){st.reverseDepthBuffer?(me.copy(x.projectionMatrix),NI(me),PI(me),Ct.setValue(C,"projectionMatrix",me)):Ct.setValue(C,"projectionMatrix",x.projectionMatrix),Ct.setValue(C,"viewMatrix",x.matrixWorldInverse);let Tn=Ct.map.cameraPosition;Tn!==void 0&&Tn.setValue(C,Ue.setFromMatrixPosition(x.matrixWorld)),st.logarithmicDepthBuffer&&Ct.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ct.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),K!==x&&(K=x,mn=!0,qu=!0)}if(N.isSkinnedMesh){Ct.setOptional(C,N,"bindMatrix"),Ct.setOptional(C,N,"bindMatrixInverse");let Tn=N.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ct.setValue(C,"boneTexture",Tn.boneTexture,E))}N.isBatchedMesh&&(Ct.setOptional(C,N,"batchingTexture"),Ct.setValue(C,"batchingTexture",N._matricesTexture,E),Ct.setOptional(C,N,"batchingIdTexture"),Ct.setValue(C,"batchingIdTexture",N._indirectTexture,E),Ct.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&Ct.setValue(C,"batchingColorTexture",N._colorsTexture,E));let Xu=F.morphAttributes;if((Xu.position!==void 0||Xu.normal!==void 0||Xu.color!==void 0)&&Ne.update(N,F,Vn),(mn||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,Ct.setValue(C,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(ji.envMap.value=ge,ji.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&I.environment!==null&&(ji.envMapIntensity.value=I.environmentIntensity),mn&&(Ct.setValue(C,"toneMappingExposure",M.toneMappingExposure),Me.needsLights&&oS(ji,qu),ee&&U.fog===!0&&ne.refreshFogUniforms(ji,ee),ne.refreshMaterialUniforms(ji,U,X,H,p.state.transmissionRenderTarget[x.id]),_o.upload(C,Fg(Me),ji,E)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(_o.upload(C,Fg(Me),ji,E),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ct.setValue(C,"center",N.center),Ct.setValue(C,"modelViewMatrix",N.modelViewMatrix),Ct.setValue(C,"normalMatrix",N.normalMatrix),Ct.setValue(C,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let Tn=U.uniformsGroups;for(let Yu=0,cS=Tn.length;Yu<cS;Yu++){let kg=Tn[Yu];D.update(kg,Vn),D.bind(kg,Vn)}}return Vn}function oS(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function aS(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(x,I,F){Pe.get(x.texture).__webglTexture=I,Pe.get(x.depthTexture).__webglTexture=F;let U=Pe.get(x);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=F===void 0,U.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,I){let F=Pe.get(x);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,F=0){T=x,P=I,A=F;let U=!0,N=null,ee=!1,se=!1;if(x){let ge=Pe.get(x);if(ge.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(C.FRAMEBUFFER,null),U=!1;else if(ge.__webglFramebuffer===void 0)E.setupRenderTarget(x);else if(ge.__hasExternalTextures)E.rebindTextures(x,Pe.get(x.texture).__webglTexture,Pe.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let xe=x.depthTexture;if(ge.__boundDepthTexture!==xe){if(xe!==null&&Pe.has(xe)&&(x.width!==xe.image.width||x.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(x)}}let Te=x.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(se=!0);let Ce=Pe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?N=Ce[I][F]:N=Ce[I],ee=!0):x.samples>0&&E.useMultisampledRTT(x)===!1?N=Pe.get(x).__webglMultisampledFramebuffer:Array.isArray(Ce)?N=Ce[F]:N=Ce,y.copy(x.viewport),S.copy(x.scissor),z=x.scissorTest}else y.copy(le).multiplyScalar(X).floor(),S.copy(ve).multiplyScalar(X).floor(),z=at;if(Ie.bindFramebuffer(C.FRAMEBUFFER,N)&&U&&Ie.drawBuffers(x,N),Ie.viewport(y),Ie.scissor(S),Ie.setScissorTest(z),ee){let ge=Pe.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,F)}else if(se){let ge=Pe.get(x.texture),Te=I||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.__webglTexture,F||0,Te)}L=-1},this.readRenderTargetPixels=function(x,I,F,U,N,ee,se){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&se!==void 0&&(pe=pe[se]),pe){Ie.bindFramebuffer(C.FRAMEBUFFER,pe);try{let ge=x.texture,Te=ge.format,Ce=ge.type;if(!st.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-U&&F>=0&&F<=x.height-N&&C.readPixels(I,F,U,N,ke.convert(Te),ke.convert(Ce),ee)}finally{let ge=T!==null?Pe.get(T).__webglFramebuffer:null;Ie.bindFramebuffer(C.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=function(x,I,F,U,N,ee,se){return Qa(this,null,function*(){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&se!==void 0&&(pe=pe[se]),pe){let ge=x.texture,Te=ge.format,Ce=ge.type;if(!st.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=x.width-U&&F>=0&&F<=x.height-N){Ie.bindFramebuffer(C.FRAMEBUFFER,pe);let xe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,xe),C.bufferData(C.PIXEL_PACK_BUFFER,ee.byteLength,C.STREAM_READ),C.readPixels(I,F,U,N,ke.convert(Te),ke.convert(Ce),0);let pt=T!==null?Pe.get(T).__webglFramebuffer:null;Ie.bindFramebuffer(C.FRAMEBUFFER,pt);let wt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),yield RI(C,wt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,xe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ee),C.deleteBuffer(xe),C.deleteSync(wt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(x,I=null,F=0){x.isTexture!==!0&&(iu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,x=arguments[1]);let U=Math.pow(2,-F),N=Math.floor(x.image.width*U),ee=Math.floor(x.image.height*U),se=I!==null?I.x:0,pe=I!==null?I.y:0;E.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,se,pe,N,ee),Ie.unbindTexture()},this.copyTextureToTexture=function(x,I,F=null,U=null,N=0){x.isTexture!==!0&&(iu("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,x=arguments[1],I=arguments[2],N=arguments[3]||0,F=null);let ee,se,pe,ge,Te,Ce;F!==null?(ee=F.max.x-F.min.x,se=F.max.y-F.min.y,pe=F.min.x,ge=F.min.y):(ee=x.image.width,se=x.image.height,pe=0,ge=0),U!==null?(Te=U.x,Ce=U.y):(Te=0,Ce=0);let xe=ke.convert(I.format),pt=ke.convert(I.type);E.setTexture2D(I,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);let wt=C.getParameter(C.UNPACK_ROW_LENGTH),At=C.getParameter(C.UNPACK_IMAGE_HEIGHT),pn=C.getParameter(C.UNPACK_SKIP_PIXELS),ut=C.getParameter(C.UNPACK_SKIP_ROWS),Me=C.getParameter(C.UNPACK_SKIP_IMAGES),Gt=x.isCompressedTexture?x.mipmaps[N]:x.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Gt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Gt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,ge),x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Te,Ce,ee,se,xe,pt,Gt.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Te,Ce,Gt.width,Gt.height,xe,Gt.data):C.texSubImage2D(C.TEXTURE_2D,N,Te,Ce,ee,se,xe,pt,Gt),C.pixelStorei(C.UNPACK_ROW_LENGTH,wt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,At),C.pixelStorei(C.UNPACK_SKIP_PIXELS,pn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ut),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Me),N===0&&I.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(x,I,F=null,U=null,N=0){x.isTexture!==!0&&(iu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,U=arguments[1]||null,x=arguments[2],I=arguments[3],N=arguments[4]||0);let ee,se,pe,ge,Te,Ce,xe,pt,wt,At=x.isCompressedTexture?x.mipmaps[N]:x.image;F!==null?(ee=F.max.x-F.min.x,se=F.max.y-F.min.y,pe=F.max.z-F.min.z,ge=F.min.x,Te=F.min.y,Ce=F.min.z):(ee=At.width,se=At.height,pe=At.depth,ge=0,Te=0,Ce=0),U!==null?(xe=U.x,pt=U.y,wt=U.z):(xe=0,pt=0,wt=0);let pn=ke.convert(I.format),ut=ke.convert(I.type),Me;if(I.isData3DTexture)E.setTexture3D(I,0),Me=C.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)E.setTexture2DArray(I,0),Me=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);let Gt=C.getParameter(C.UNPACK_ROW_LENGTH),dt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Vn=C.getParameter(C.UNPACK_SKIP_PIXELS),cs=C.getParameter(C.UNPACK_SKIP_ROWS),mn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,At.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,At.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,Te),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ce),x.isDataTexture||x.isData3DTexture?C.texSubImage3D(Me,N,xe,pt,wt,ee,se,pe,pn,ut,At.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Me,N,xe,pt,wt,ee,se,pe,pn,At.data):C.texSubImage3D(Me,N,xe,pt,wt,ee,se,pe,pn,ut,At),C.pixelStorei(C.UNPACK_ROW_LENGTH,Gt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Vn),C.pixelStorei(C.UNPACK_SKIP_ROWS,cs),C.pixelStorei(C.UNPACK_SKIP_IMAGES,mn),N===0&&I.generateMipmaps&&C.generateMipmap(Me),Ie.unbindTexture()},this.initRenderTarget=function(x){Pe.get(x).__webglFramebuffer===void 0&&E.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),Ie.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,Ie.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Zm?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===Bu?"display-p3":"srgb"}};var _u=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Va=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dm,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new R,Ha=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var fM=new R,hM=new lt,pM=new lt,CL=new R,mM=new He,Wl=new R,wp=new bn,gM=new He,bp=new Co,xu=class extends Ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yx,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Wl),this.boundingBox.expandByPoint(Wl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Wl),this.boundingSphere.expandByPoint(Wl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wp.copy(this.boundingSphere),wp.applyMatrix4(r),e.ray.intersectsSphere(wp)!==!1&&(gM.copy(r).invert(),bp.copy(e.ray).applyMatrix4(gM),!(this.boundingBox!==null&&bp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yx?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nI?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;hM.fromBufferAttribute(r.attributes.skinIndex,e),pM.fromBufferAttribute(r.attributes.skinWeight,e),fM.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=pM.getComponent(s);if(o!==0){let a=hM.getComponent(s);mM.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(CL.copy(fM).applyMatrix4(mM),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},za=class extends qt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Mu=class extends kn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=tn,u=tn,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vM=new He,DL=new He,Su=class n{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new He;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:DL;vM.multiplyMatrices(a,t[s]),vM.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Mu(t,e,e,Pn,ti);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new za),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},os=class extends Ft{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ho=new He,yM=new He,$l=[],_M=new On,IL=new He,Aa=new Ht,Ca=new bn,wu=class extends Ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new os(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,IL)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ho),_M.copy(e.boundingBox).applyMatrix4(ho),this.boundingBox.union(_M)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ho),Ca.copy(e.boundingSphere).applyMatrix4(ho),this.boundingSphere.union(Ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(i),e.ray.intersectsSphere(Ca)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ho),yM.multiplyMatrices(i,ho),Aa.matrixWorld=yM,Aa.raycast(e,$l);for(let o=0,a=$l.length;o<a;o++){let c=$l[o];c.instanceId=s,c.object=this,t.push(c)}$l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Mu(new Float32Array(r*this.count),r,this.count,Wm,ti));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ga=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bu=new R,Eu=new R,xM=new He,Da=new Co,ql=new bn,Ep=new R,MM=new R,Ro=class extends qt{constructor(e=new Fn,t=new Ga){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)bu.fromBufferAttribute(t,r-1),Eu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=bu.distanceTo(Eu);e.setAttribute("lineDistance",new Ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(r),ql.radius+=s,e.ray.intersectsSphere(ql)===!1)return;xM.copy(r).invert(),Da.copy(e.ray).applyMatrix4(xM);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=h,p=g-1;v<p;v+=l){let m=u.getX(v),w=u.getX(v+1),M=Xl(this,e,Da,c,m,w);M&&t.push(M)}if(this.isLineLoop){let v=u.getX(g-1),p=u.getX(h),m=Xl(this,e,Da,c,v,p);m&&t.push(m)}}else{let h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=h,p=g-1;v<p;v+=l){let m=Xl(this,e,Da,c,v,v+1);m&&t.push(m)}if(this.isLineLoop){let v=Xl(this,e,Da,c,g-1,h);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Xl(n,e,t,i,r,s){let o=n.geometry.attributes.position;if(bu.fromBufferAttribute(o,r),Eu.fromBufferAttribute(o,s),t.distanceSqToSegment(bu,Eu,Ep,MM)>i)return;Ep.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ep);if(!(c<e.near||c>e.far))return{distance:c,point:MM.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}var SM=new R,wM=new R,Tu=class extends Ro{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)SM.fromBufferAttribute(t,r),wM.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+SM.distanceTo(wM);e.setAttribute("lineDistance",new Ln(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Au=class extends Ro{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ja=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bM=new He,Cm=new Co,Yl=new bn,Zl=new R,Cu=class extends qt{constructor(e=new Fn,t=new ja){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(r),Yl.radius+=s,e.ray.intersectsSphere(Yl)===!1)return;bM.copy(r).invert(),Cm.copy(e.ray).applyMatrix4(bM);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,v=h;g<v;g++){let p=l.getX(g);Zl.fromBufferAttribute(d,p),EM(Zl,p,c,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,v=h;g<v;g++)Zl.fromBufferAttribute(d,g),EM(Zl,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function EM(n,e,t,i,r,s,o){let a=Cm.distanceSqToPoint(n);if(a<t){let c=new R;Cm.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var No=class extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ym,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},En=class extends No{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Du=class extends fn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ym,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Kl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function RL(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function NL(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function TM(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r}function JM(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}var mr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dm=class extends mr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xx,endingEnd:xx}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mx:s=e,a=2*t-i;break;case Sx:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Mx:o=e,c=2*i-t;break;case Sx:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),v=g*g,p=v*g,m=-f*p+2*f*v-f*g,w=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*g+1,M=(-1-h)*p+(1.5+h)*v+.5*g,b=h*p-h*v;for(let P=0;P!==a;++P)s[P]=m*o[u+P]+w*o[l+P]+M*o[c+P]+b*o[d+P];return s}},Im=class extends mr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},Rm=class extends mr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Un=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kl(t,this.TimeBufferType),this.values=Kl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Kl(e.times,Array),values:Kl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Rm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Im(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case To:t=this.InterpolantFactoryMethodLinear;break;case Yh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return Yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&RL(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Yh,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=To;var gr=class extends Un{constructor(e,t,i){super(e,t,i)}};gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=Eo;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Iu=class extends Un{};Iu.prototype.ValueTypeName="color";var Vi=class extends Un{};Vi.prototype.ValueTypeName="number";var Nm=class extends mr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)ii.slerpFlat(s,0,o,l-a,o,l,c);return s}},Hi=class extends Un{InterpolantFactoryMethodLinear(e){return new Nm(this.times,this.values,this.getValueSize(),e)}};Hi.prototype.ValueTypeName="quaternion";Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var vr=class extends Un{constructor(e,t,i){super(e,t,i)}};vr.prototype.ValueTypeName="string";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=Eo;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Un{};zi.prototype.ValueTypeName="vector";var Ru=class{constructor(e="",t=-1,i=[],r=iI){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(LL(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Un.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let u=NL(c);c=TM(c,1,u),l=TM(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Vi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(s);if(u&&u.length>1){let d=u[1],f=r[d];f||(r[d]=f=[]),f.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(d,f,h,g,v){if(h.length!==0){let p=[],m=[];JM(h,p,m,g),p.length!==0&&v.push(new d(f,p,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let d=0;d<l.length;d++){let f=l[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let h={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)h[f[g].morphTargets[v]]=-1;for(let v in h){let p=[],m=[];for(let w=0;w!==f[g].morphTargets.length;++w){let M=f[g];p.push(M.time),m.push(M.morphTarget===v?1:0)}r.push(new Vi(".morphTargetInfluence["+v+"]",p,m))}c=h.length*o}else{let h=".bones["+t[d].name+"]";i(zi,h+".position",f,"pos",r),i(Hi,h+".quaternion",f,"rot",r),i(zi,h+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function PL(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vi;case"vector":case"vector2":case"vector3":case"vector4":return zi;case"color":return Iu;case"quaternion":return Hi;case"bool":case"boolean":return gr;case"string":return vr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function LL(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=PL(n.type);if(n.times===void 0){let t=[],i=[];JM(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var dr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Pm=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let h=l[d],g=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}},OL=new Pm,Lo=(()=>{class n{constructor(t){this.manager=t!==void 0?t:OL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),Pi={},Lm=class extends Error{constructor(e,t){super(e),this.response=t}},Wa=class extends Lo{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=dr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:i,onError:r});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Pi[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0,v=0,p=new ReadableStream({start(m){w();function w(){d.read().then(({done:M,value:b})=>{if(M)m.close();else{v+=b.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:h});for(let A=0,T=u.length;A<T;A++){let L=u[A];L.onProgress&&L.onProgress(P)}m.enqueue(b),w()}},M=>{m.error(M)})}}});return new Response(p)}else throw new Lm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{dr.add(e,l);let u=Pi[e];delete Pi[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onLoad&&h.onLoad(l)}}).catch(l=>{let u=Pi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Pi[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Om=class extends Lo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=dr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=ka("img");function c(){u(),dr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Nu=class extends Lo{constructor(e){super(e)}load(e,t,i,r){let s=new kn,o=new Om(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},$a=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Tp=new He,AM=new R,CM=new R,qa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;AM.setFromMatrixPosition(e.matrixWorld),t.position.copy(AM),CM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(CM),t.updateMatrixWorld(),Tp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fm=class extends qa{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Ao*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Pu=class extends $a{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Fm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},DM=new He,Ia=new R,Ap=new R,Um=class extends qa{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ia.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ia),Ap.copy(i.position),Ap.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ap),i.updateMatrixWorld(),r.makeTranslation(-Ia.x,-Ia.y,-Ia.z),DM.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(DM)}},Lu=class extends $a{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Um}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},km=class extends qa{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ou=class extends $a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new km}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var yr=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fu=class extends Lo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=dr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return dr.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),dr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});dr.add(e,c),s.manager.itemStart(e)}};var Qm="\\[\\]\\.:\\/",FL=new RegExp("["+Qm+"]","g"),eg="[^"+Qm+"]",UL="[^"+Qm.replace("\\.","")+"]",kL=/((?:WC+[\/:])*)/.source.replace("WC",eg),BL=/(WCOD+)?/.source.replace("WCOD",UL),VL=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eg),HL=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eg),zL=new RegExp("^"+kL+BL+VL+HL+"$"),GL=["material","materials","bones","map"],Bm=class{constructor(e,t,i){let r=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(FL,"")}static parseTrackName(t){let i=zL.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);GL.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Bm,n})();Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DV=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vm);var Hu=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=tr({type:n,selectors:[["app-header"]],standalone:!0,features:[nr],decls:18,vars:0,consts:[[1,"header-content"],[1,"nav-links"],["href","#","target","_blank",1,"nav-button"],["href","https://nedeljkovicm.itch.io/","target","_blank",1,"nav-button"]],template:function(t,i){t&1&&(Se(0,"header")(1,"div",0)(2,"h1"),we(3,"MY RESUME"),be(),Se(4,"nav")(5,"ul",1)(6,"li")(7,"a",2),we(8,"About"),be()(),Se(9,"li")(10,"a",3),we(11,"Projects"),be()(),Se(12,"li")(13,"a",2),we(14,"Contact"),be()(),Se(15,"li")(16,"a",2),we(17,"Download CV"),be()()()()()())},styles:["header[_ngcontent-%COMP%]{background-color:#292929;padding:20px;box-shadow:0 2px 4px #00000080}.header-content[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%]{font-size:2.5em;color:#e0e0e0;text-shadow:1px 2px 0 #c40c0c,2px 5px 0 #c40c0c,3px 6px 0 #7f07b3,4px 7px 0 #7f07b3}nav[_ngcontent-%COMP%]{margin-top:20px}.nav-links[_ngcontent-%COMP%]{list-style-type:none;padding:0;display:flex;justify-content:center}.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 10px}.nav-button[_ngcontent-%COMP%]{background-color:#1c1c1c;color:#ffb347;border:none;padding:10px 20px;cursor:pointer;font-size:1em;border-radius:5px}.nav-button[_ngcontent-%COMP%]:hover{background-color:#444;color:#ffa07a}"]})};var zu=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=tr({type:n,selectors:[["app-footer"]],standalone:!0,features:[nr],decls:3,vars:0,template:function(t,i){t&1&&(Se(0,"footer")(1,"p"),we(2,"\xA9 2024 Mladen Nedeljkovic. All rights reserved."),be()())},styles:["footer[_ngcontent-%COMP%]{background-color:#292929;color:#e0e0e0;text-align:center;padding:20px;position:relative;bottom:0;width:100%}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:1em}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ffb347;text-decoration:none}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ffa07a;text-decoration:underline}"]})};function tg(n,e){if(e===HM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ya||e===ku){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,r=[];if(e===Ya)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Gu=class extends Lo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cg(t)}),this.register(function(t){return new lg(t)}),this.register(function(t){return new yg(t)}),this.register(function(t){return new _g(t)}),this.register(function(t){return new xg(t)}),this.register(function(t){return new dg(t)}),this.register(function(t){return new fg(t)}),this.register(function(t){return new hg(t)}),this.register(function(t){return new pg(t)}),this.register(function(t){return new ag(t)}),this.register(function(t){return new mg(t)}),this.register(function(t){return new ug(t)}),this.register(function(t){return new vg(t)}),this.register(function(t){return new gg(t)}),this.register(function(t){return new sg(t)}),this.register(function(t){return new Mg(t)}),this.register(function(t){return new Sg(t)})}load(e,t,i,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=yr.extractUrlBase(e);o=yr.resolveURL(l,this.path)}else o=yr.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Wa(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s,o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===rS){try{o[qe.KHR_BINARY_GLTF]=new wg(e)}catch(d){r&&r(d);return}s=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ig(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let d=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(d){case qe.KHR_MATERIALS_UNLIT:o[d]=new og;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[d]=new bg(s,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[d]=new Eg;break;case qe.KHR_MESH_QUANTIZATION:o[d]=new Tg;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}};function WL(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},sg=class{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new Ee(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],zt);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ou(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Lu(u),l.distance=d;break;case"spot":l=new Pu(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Gi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},og=class{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return pi}extendParams(e,t,i){let r=[];e.color=new Ee(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Qt))}return Promise.all(r)}},ag=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},cg=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:En}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(s)}},lg=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:En}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},ug=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:En}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},dg=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:En}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Qt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},fg=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:En}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},hg=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:En}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(a[0],a[1],a[2],zt),Promise.all(s)}},pg=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:En}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},mg=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:En}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(a[0],a[1],a[2],zt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Qt)),Promise.all(s)}},gg=class{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:En}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}},vg=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:En}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},yg=class{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},_g=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},xg=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Mg=class{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(h){return h.buffer}):o.ready.then(function(){let h=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(h),u,d,f,r.mode,r.filter),h})})}else return null}},Sg=class{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let l of r.primitives)if(l.mode!==Bn.TRIANGLES&&l.mode!==Bn.TRIANGLE_STRIP&&l.mode!==Bn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),d=u.isGroup?u.children:[u],f=l[0].count,h=[];for(let g of d){let v=new He,p=new R,m=new ii,w=new R(1,1,1),M=new wu(g.geometry,g.material,f);for(let b=0;b<f;b++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,b),c.SCALE&&w.fromBufferAttribute(c.SCALE,b),M.setMatrixAt(b,v.compose(p,m,w));for(let b in c)if(b==="_COLOR_0"){let P=c[b];M.instanceColor=new os(P.array,P.itemSize,P.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);qt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),h.push(M)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}},rS="glTF",Za=12,eS={JSON:1313821514,BIN:5130562},wg=class{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Za),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rS)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Za,s=new DataView(e,Za),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===eS.JSON){let l=new Uint8Array(e,Za+o,a);this.content=i.decode(l)}else if(c===eS.BIN){let l=Za+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},bg=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let d=Cg[u]||u.toLowerCase();a[d]=o[u]}for(let u in e.attributes){let d=Cg[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],h=Oo[f.componentType];l[d]=h.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,f){r.decodeDracoFile(u,function(h){for(let g in h.attributes){let v=h.attributes[g],p=c[g];p!==void 0&&(v.normalized=p)}d(h)},a,l,zt,f)})})}},Eg=class{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Tg=class{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}},ju=class extends mr{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,d=(i-t)/u,f=d*d,h=f*d,g=e*l,v=g-l,p=-2*h+3*f,m=h-f,w=1-p,M=m-f+d;for(let b=0;b!==a;b++){let P=o[v+b+a],A=o[v+b+c]*u,T=o[g+b+a],L=o[g+b]*u;s[b]=w*P+M*A+p*T+m*L}return s}},$L=new ii,Ag=class extends ju{interpolate_(e,t,i,r){let s=super.interpolate_(e,t,i,r);return $L.fromArray(s).normalize().toArray(s),s}},Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Oo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tS={9728:tn,9729:un,9984:Hm,9985:Na,9986:po,9987:di},nS={33071:Fi,33648:Fa,10497:ns},ng={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cg={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_r={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qL={CUBICSPLINE:void 0,LINEAR:To,STEP:Eo},ig={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function XL(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new No({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hi})),n.DefaultMaterial}function as(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Gi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function YL(n,e,t){let i=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let d=e[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let d=e[l];if(i){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(r){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(s){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],d=l[1],f=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function ZL(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KL(n){let e,t=n.extensions&&n.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rg(t.attributes):e=n.indices+":"+rg(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+rg(n.targets[i]);return e}function rg(n){let e="",t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Dg(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JL(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var QL=new He,Ig=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new WL,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new Nu(this.options.manager):this.textureLoader=new Fu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return as(s,a,r),Gi(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())s(u,a.children[l])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){i.load(yr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=ng[r.type],a=Oo[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new Ft(l,o,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=ng[r.type],l=Oo[r.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,f=r.byteOffset||0,h=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,v,p;if(h&&h!==d){let m=Math.floor(f/h),w="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,M=t.cache.get(w);M||(v=new l(a,m*h,r.count*h/u),M=new Va(v,h/u),t.cache.add(w,M)),p=new Ha(M,c,f%h/u,g)}else a===null?v=new l(r.count*c):v=new l(a,f,r.count*c),p=new Ft(v,c,g);if(r.sparse!==void 0){let m=ng.SCALAR,w=Oo[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,b=r.sparse.values.byteOffset||0,P=new w(o[1],M,r.sparse.count*m),A=new l(o[2],b,r.sparse.count*c);a!==null&&(p=new Ft(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,L=P.length;T<L;T++){let K=P[T];if(p.setX(K,A[T*c]),c>=2&&p.setY(K,A[T*c+1]),c>=3&&p.setZ(K,A[T*c+2]),c>=4&&p.setW(K,A[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=tS[f.magFilter]||un,u.minFilter=tS[f.minFilter]||di,u.wrapS=nS[f.wrapS]||ns,u.wrapT=nS[f.wrapT]||ns,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=r.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(d){return new Promise(function(f,h){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){let p=new kn(v);p.needsUpdate=!0,f(p)}),t.load(yr.resolveURL(d,s.path),g,void 0,h)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),Gi(d,o),d.userData.mimeType=o.mimeType||JL(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){let s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[qe.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new ja,fn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new Ga,fn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return No}loadMaterial(e){let t=this,i=this.json,r=this.extensions,s=i.materials[e],o,a={},c=s.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){let d=r[qe.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,s,t))}else{let d=s.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],zt),a.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Qt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Qn);let u=s.alphaMode||ig.OPAQUE;if(u===ig.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ig.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==pi&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Xe(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==pi&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==pi){let d=s.emissiveFactor;a.emissive=new Ee().setRGB(d[0],d[1],d[2],zt)}return s.emissiveTexture!==void 0&&o!==pi&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Qt)),Promise.all(l).then(function(){let d=new o(a);return s.name&&(d.name=s.name),Gi(d,s),t.associations.set(d,{materials:e}),s.extensions&&as(r,d,s),d})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return iS(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=KL(l),d=r[u];if(d)o.push(d.promise);else{let f;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=iS(new Fn,l,t),r[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?XL(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let h=0,g=u.length;h<g;h++){let v=u[h],p=o[h],m,w=l[h];if(p.mode===Bn.TRIANGLES||p.mode===Bn.TRIANGLE_STRIP||p.mode===Bn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new xu(v,w):new Ht(v,w),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Bn.TRIANGLE_STRIP?m.geometry=tg(m.geometry,ku):p.mode===Bn.TRIANGLE_FAN&&(m.geometry=tg(m.geometry,Ya));else if(p.mode===Bn.LINES)m=new Tu(v,w);else if(p.mode===Bn.LINE_STRIP)m=new Ro(v,w);else if(p.mode===Bn.LINE_LOOP)m=new Au(v,w);else if(p.mode===Bn.POINTS)m=new Cu(v,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&ZL(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Gi(m,s),p.extensions&&as(r,m,p),t.assignFinalMaterial(m),d.push(m)}for(let h=0,g=d.length;h<g;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return s.extensions&&as(r,d[0],s),d[0];let f=new fi;s.extensions&&as(r,f,s),t.associations.set(f,{meshes:e});for(let h=0,g=d.length;h<g;h++)f.add(d[h]);return f})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ot(GM.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Io(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Gi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let d=o[l];if(d){a.push(d);let f=new He;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Su(a,c)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){let h=r.channels[d],g=r.samplers[h.sampler],v=h.target,p=v.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,w=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",w)),l.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){let f=d[0],h=d[1],g=d[2],v=d[3],p=d[4],m=[];for(let w=0,M=f.length;w<M;w++){let b=f[w],P=h[w],A=g[w],T=v[w],L=p[w];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let K=i._createAnimationTracks(b,P,A,T,L);if(K)for(let y=0;y<K.length;y++)m.push(K[y])}return new Ru(s,void 0,m)})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){let o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));let c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let u=l[0],d=l[1],f=l[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,QL)});for(let h=0,g=d.length;h<g;h++)u.add(d[h]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new za:l.length>1?u=new fi:l.length===1?u=l[0]:u=new qt,u!==l[0])for(let d=0,f=l.length;d<f;d++)u.add(l[d]);if(s.name&&(u.userData.name=s.name,u.name=o),Gi(u,s),s.extensions&&as(i,u,s),s.matrix!==void 0){let d=new He;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,s=new fi;i.name&&(s.name=r.createUniqueName(i.name)),Gi(s,i),i.extensions&&as(t,s,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,d=c.length;u<d;u++)s.add(c[u]);let l=u=>{let d=new Map;for(let[f,h]of r.associations)(f instanceof fn||f instanceof kn)&&d.set(f,h);return u.traverse(f=>{let h=r.associations.get(f);h!=null&&d.set(f,h)}),d};return r.associations=l(s),s})}_createAnimationTracks(e,t,i,r,s){let o=[],a=e.name?e.name:e.uuid,c=[];_r[s.path]===_r.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(_r[s.path]){case _r.weights:l=Vi;break;case _r.rotation:l=Hi;break;case _r.position:case _r.scale:l=zi;break;default:switch(i.itemSize){case 1:l=Vi;break;case 2:case 3:default:l=zi;break}break}let u=r.interpolation!==void 0?qL[r.interpolation]:To,d=this._getArrayFromAccessor(i);for(let f=0,h=c.length;f<h;f++){let g=new l(c[f]+"."+_r[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Dg(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof Hi?Ag:ju;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function eO(n,e,t){let i=e.attributes,r=new On;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){let u=Dg(Oo[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new R,c=new R;for(let l=0,u=s.length;l<u;l++){let d=s[l];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],h=f.min,g=f.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),f.normalized){let v=Dg(Oo[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;let o=new bn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function iS(n,e,t){let i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=Cg[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return rt.workingColorSpace!==zt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),Gi(n,e),eO(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?YL(n,e.targets,t):n})}var tO=["canvasContainer"],Wu=class n{constructor(e){this.window=e}title="3Dmodel";canvasContainer;ngAfterViewInit(){let e=this.canvasContainer.nativeElement.clientWidth,t=this.canvasContainer.nativeElement.clientHeight,i=new Ot(50,e/t,.01,10);i.position.z=1;let r=new _u,s=new ss(.2,.2,.2),o=new Du,a=new Ht(s,o);r.add(a);let c=new Gu,l=new yu({antialias:!0});l.setSize(e,t),l.setAnimationLoop(u),l.setClearColor(1842204,1),r.background=new Ee(1842204),this.canvasContainer.nativeElement.appendChild(l.domElement);function u(d){a.rotation.x=d/2e4,a.rotation.y=d/1e4,l.render(r,i)}}static \u0275fac=function(t){return new(t||n)(Br(Window))};static \u0275cmp=tr({type:n,selectors:[["app-root"]],viewQuery:function(t,i){if(t&1&&Y_(tO,7),t&2){let r;Jf(r=Qf())&&(i.canvasContainer=r.first)}},standalone:!0,features:[K_([{provide:Window,useValue:window}]),nr],decls:101,vars:0,consts:[["canvasContainer",""],[1,"container"],["id","canvasContainer"],[1,"text-input"],[1,"cv-container"],["id","header"],[1,"stuff"],["href","tel:+381659253997"],["href","mailto:nedeljkovicmladen997@gmail.com"],[1,"head"],["href","https://www.linkedin.com/in/mladen-nedeljkovic-a67433b0/"],["href","https://github.com/Djomlatoir"],["href","https://nedeljkovicm.itch.io/"],["id","footer"],["id","name"],["type","text","placeholder","Unesite tekst ovde..."]],template:function(t,i){t&1&&(Xn(0,"app-header"),Se(1,"div",1),Xn(2,"div",2,0),Se(4,"div",3)(5,"div",4),Xn(6,"div",5),Se(7,"div",6)(8,"h1"),we(9,"Mladen Nedeljkovi\u0107"),be(),Se(10,"a",7),we(11,"+381 65 925 3997"),be(),Xn(12,"br"),Se(13,"a",8),we(14,"nedeljkovicmladen997@gmail.com"),be(),Xn(15,"hr"),Se(16,"p",9),we(17,"About Me"),be(),Se(18,"p"),we(19," I am a creative and skilled designer with a strong background in "),Se(20,"b"),we(21,"3D modeling"),be(),we(22," and "),Se(23,"b"),we(24,"digital design"),be(),we(25,". My experience includes using tools like "),Se(26,"b"),we(27,"Blender"),be(),we(28," and "),Se(29,"b"),we(30,"GIMP"),be(),we(31," to create engaging visuals and detailed assets. With a flair for combining functionality and aesthetics, I am dedicated to developing immersive and intuitive design experiences in various game engines. "),be(),Se(32,"p",9),we(33,"Interests"),be(),Se(34,"ul")(35,"li"),we(36,"Game Development & Design"),be(),Se(37,"li"),we(38,"3D Modeling and Animation"),be(),Se(39,"li"),we(40,"Digital Art & Graphic Design"),be(),Se(41,"li"),we(42,"Exploring New Game Engines"),be(),Se(43,"li"),we(44,"Strategy Games and Creative Challenges"),be()(),Se(45,"p",9),we(46,"Skills"),be(),Se(47,"ul")(48,"li"),we(49,"Game Design Engines: Unity, Unreal Engine, UEFN, Roblox Engine"),be(),Se(50,"li"),we(51,"3D Modeling and Animation: Blender"),be(),Se(52,"li"),we(53,"Digital Art and Graphics: GIMP, Adobe Photoshop"),be(),Se(54,"li"),we(55,"Scripting: C#, Lua (for game development)"),be()(),Se(56,"p",9),we(57,"Education"),be(),Se(58,"ul")(59,"li"),we(60,"Electrical Engineering Student, Serbia"),be(),Se(61,"li"),we(62,"Various Online Courses: Game Design, 3D Modeling"),be()(),Se(63,"p",9),we(64,"Experience"),be(),Se(65,"ul")(66,"li"),we(67,"Game Jam Participant \u2013 Designed games and environments in Unity"),be(),Se(68,"li"),we(69,"3D Modeler \u2013 Created custom models for personal projects and game prototypes"),be(),Se(70,"li"),we(71,"Portfolio Projects on Itch.io: Prototypes showcasing my design and modeling work"),be()(),Se(72,"p",9),we(73,"Extracurricular Activities"),be(),Se(74,"ul")(75,"li"),we(76,"Designing and participating in Game Jams"),be(),Se(77,"li"),we(78,"Creating assets and characters in Blender"),be(),Se(79,"li"),we(80,"Exploring new techniques in digital art and animation"),be()(),Se(81,"p",9),we(82,"Links"),be(),Se(83,"ul")(84,"li"),we(85,"LinkedIn: "),Se(86,"a",10),we(87,"linkedin.com/mladen-nedeljkovic"),be()(),Se(88,"li"),we(89,"GitHub: "),Se(90,"a",11),we(91,"github.com/Djomlatoir"),be()(),Se(92,"li"),we(93,"ItchIO: "),Se(94,"a",12),we(95,"nedeljkovicm.itch.io/"),be()()()(),Se(96,"div",13)(97,"h2",14),we(98,"Mladen Nedeljkovi\u0107"),be()()(),Xn(99,"input",15),be()(),Xn(100,"app-footer"))},dependencies:[Hu,zu],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;overflow:hidden;font-family:Arial,sans-serif;background-color:#1c1c1c}.container[_ngcontent-%COMP%]{display:flex;width:100vw;height:100vh}#canvasContainer[_ngcontent-%COMP%]{width:100%;height:100%}.text-input[_ngcontent-%COMP%]{width:50%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:20px;background-color:#292929;overflow-y:auto;box-shadow:0 4px 12px #0003}#header[_ngcontent-%COMP%]{font-size:2.5em;margin-bottom:20px;text-align:center;color:#e0e0e0;text-shadow:1px 2px 0 #c40c0c,2px 5px 0 #c40c0c,3px 6px 0 #7f07b3,4px 7px 0 #7f07b3}.stuff[_ngcontent-%COMP%]{width:100%;color:#d3d3d3}.head[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], p.head[_ngcontent-%COMP%]{font-weight:700;margin-top:15px;font-size:1.2em;color:#e0e0e0;text-shadow:1px 2px 0 #c40c0c}ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0;color:#ccc}a[_ngcontent-%COMP%]{color:#ffb347;font-weight:700;text-decoration:none}a[_ngcontent-%COMP%]:hover{color:#ffa07a;text-decoration:underline}#footer[_ngcontent-%COMP%]{margin-top:auto;text-align:center;color:#888}input[type=text][_ngcontent-%COMP%]{margin-top:20px;padding:10px;border:1px solid #444444;border-radius:5px;width:100%;font-size:1em;background-color:#333;color:#e0e0e0}"]})};A0(Wu,hx).catch(n=>console.error(n));
