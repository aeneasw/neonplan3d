var fe=globalThis,me=fe.ShadowRoot&&(fe.ShadyCSS===void 0||fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,we=Symbol(),Ie=new WeakMap,ee=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==we)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(me&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ie.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ie.set(t,e))}return e}toString(){return this.cssText}},Be=s=>new ee(typeof s=="string"?s:s+"",void 0,we),K=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((n,i,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new ee(t,s,we)},Fe=(s,e)=>{if(me)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=fe.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,s.appendChild(n)}},ke=me?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Be(t)})(s):s;var{is:ut,defineProperty:ft,getOwnPropertyDescriptor:mt,getOwnPropertyNames:gt,getOwnPropertySymbols:bt,getPrototypeOf:vt}=Object,ge=globalThis,Ve=ge.trustedTypes,yt=Ve?Ve.emptyScript:"",$t=ge.reactiveElementPolyfillSupport,te=(s,e)=>s,Se={toAttribute(s,e){switch(e){case Boolean:s=s?yt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Je=(s,e)=>!ut(s,e),We={attribute:!0,type:String,converter:Se,reflect:!1,useDefault:!1,hasChanged:Je};Symbol.metadata??=Symbol("metadata"),ge.litPropertyMetadata??=new WeakMap;var R=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=We){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&ft(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:o}=mt(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){let d=i?.call(this);o?.call(this,r),this.requestUpdate(e,d,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??We}static _$Ei(){if(this.hasOwnProperty(te("elementProperties")))return;let e=vt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(te("properties"))){let t=this.properties,n=[...gt(t),...bt(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(ke(i))}else e!==void 0&&t.push(ke(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:Se).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=n.getPropertyOptions(i),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Se;this._$Em=i;let d=r.fromAttribute(t,o.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(e,t,n,i=!1,o){if(e!==void 0){let r=this.constructor;if(i===!1&&(o=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??Je)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:o},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,o]of n){let{wrapped:r}=o,d=this[i];r!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,o,d)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[te("elementProperties")]=new Map,R[te("finalized")]=new Map,$t?.({ReactiveElement:R}),(ge.reactiveElementVersions??=[]).push("2.1.2");var Ce=globalThis,qe=s=>s,be=Ce.trustedTypes,Ke=be?be.createPolicy("lit-html",{createHTML:s=>s}):void 0,et="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,tt="?"+O,_t=`<${tt}>`,B=document,ne=()=>B.createComment(""),ie=s=>s===null||typeof s!="object"&&typeof s!="function",He=Array.isArray,xt=s=>He(s)||typeof s?.[Symbol.iterator]=="function",Ae=`[ 	
\f\r]`,se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ge=/-->/g,Xe=/>/g,j=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ye=/'/g,Ze=/"/g,st=/^(?:script|style|textarea|title)$/i,Re=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),$=Re(1),Dt=Re(2),zt=Re(3),F=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Qe=new WeakMap,I=B.createTreeWalker(B,129);function nt(s,e){if(!He(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ke!==void 0?Ke.createHTML(e):e}var wt=(s,e)=>{let t=s.length-1,n=[],i,o=e===2?"<svg>":e===3?"<math>":"",r=se;for(let d=0;d<t;d++){let p=s[d],a,h,u=-1,g=0;for(;g<p.length&&(r.lastIndex=g,h=r.exec(p),h!==null);)g=r.lastIndex,r===se?h[1]==="!--"?r=Ge:h[1]!==void 0?r=Xe:h[2]!==void 0?(st.test(h[2])&&(i=RegExp("</"+h[2],"g")),r=j):h[3]!==void 0&&(r=j):r===j?h[0]===">"?(r=i??se,u=-1):h[1]===void 0?u=-2:(u=r.lastIndex-h[2].length,a=h[1],r=h[3]===void 0?j:h[3]==='"'?Ze:Ye):r===Ze||r===Ye?r=j:r===Ge||r===Xe?r=se:(r=j,i=void 0);let l=r===j&&s[d+1].startsWith("/>")?" ":"";o+=r===se?p+_t:u>=0?(n.push(a),p.slice(0,u)+et+p.slice(u)+O+l):p+O+(u===-2?d:l)}return[nt(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},oe=class s{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,r=0,d=e.length-1,p=this.parts,[a,h]=wt(e,t);if(this.el=s.createElement(a,n),I.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=I.nextNode())!==null&&p.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(et)){let g=h[r++],l=i.getAttribute(u).split(O),y=/([.?@])?(.*)/.exec(g);p.push({type:1,index:o,name:y[2],strings:l,ctor:y[1]==="."?Ee:y[1]==="?"?Me:y[1]==="@"?Te:X}),i.removeAttribute(u)}else u.startsWith(O)&&(p.push({type:6,index:o}),i.removeAttribute(u));if(st.test(i.tagName)){let u=i.textContent.split(O),g=u.length-1;if(g>0){i.textContent=be?be.emptyScript:"";for(let l=0;l<g;l++)i.append(u[l],ne()),I.nextNode(),p.push({type:2,index:++o});i.append(u[g],ne())}}}else if(i.nodeType===8)if(i.data===tt)p.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(O,u+1))!==-1;)p.push({type:7,index:o}),u+=O.length-1}o++}}static createElement(e,t){let n=B.createElement("template");return n.innerHTML=e,n}};function G(s,e,t=s,n){if(e===F)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,o=ie(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=G(s,i._$AS(s,e.values),i,n)),e}var Pe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??B).importNode(t,!0);I.currentNode=i;let o=I.nextNode(),r=0,d=0,p=n[0];for(;p!==void 0;){if(r===p.index){let a;p.type===2?a=new re(o,o.nextSibling,this,e):p.type===1?a=new p.ctor(o,p.name,p.strings,this,e):p.type===6&&(a=new Ne(o,this,e)),this._$AV.push(a),p=n[++d]}r!==p?.index&&(o=I.nextNode(),r++)}return I.currentNode=B,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},re=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),ie(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==F&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.T(B.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=oe.createElement(nt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new Pe(i,this),r=o.u(this.options);o.p(t),this.T(r),this._$AH=o}}_$AC(e){let t=Qe.get(e.strings);return t===void 0&&Qe.set(e.strings,t=new oe(e)),t}k(e){He(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let o of e)i===t.length?t.push(n=new s(this.O(ne()),this.O(ne()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=qe(e).nextSibling;qe(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},X=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,i){let o=this.strings,r=!1;if(o===void 0)e=G(this,e,t,0),r=!ie(e)||e!==this._$AH&&e!==F,r&&(this._$AH=e);else{let d=e,p,a;for(e=o[0],p=0;p<o.length-1;p++)a=G(this,d[n+p],t,p),a===F&&(a=this._$AH[p]),r||=!ie(a)||a!==this._$AH[p],a===v?e=v:e!==v&&(e+=(a??"")+o[p+1]),this._$AH[p]=a}r&&!i&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ee=class extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Me=class extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},Te=class extends X{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??v)===F)return;let n=this._$AH,i=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==v&&(n===v||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ne=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}};var kt=Ce.litHtmlPolyfillSupport;kt?.(oe,re),(Ce.litHtmlVersions??=[]).push("3.3.3");var it=(s,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let o=t?.renderBefore??null;n._$litPart$=i=new re(e.insertBefore(ne(),o),o,void 0,t??{})}return i._$AI(s),i};var Oe=globalThis,D=class extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=it(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};D._$litElement$=!0,D.finalized=!0,Oe.litElementHydrateSupport?.({LitElement:D});var St=Oe.litElementPolyfillSupport;St?.({LitElement:D});(Oe.litElementVersions??=[]).push("4.2.2");async function ot(s,e){return s.callWS({type:"neonplan3d/packs/import",pack:e})}async function rt(s,e){await s.callWS({type:"neonplan3d/packs/remove",pack_id:e})}var at=K`
  :host {
    --fp3d-bg: #070b14;
    --fp3d-bg2: #0d1424;
    --fp3d-chrome: rgba(14, 21, 38, 0.86);
    --fp3d-chrome-solid: #0f1729;
    --fp3d-line: rgba(120, 170, 255, 0.16);
    --fp3d-text: #e6eefc;
    --fp3d-muted: #8a9bb8;
    --fp3d-accent: #37e0ff;
    --fp3d-accent-text: #041018;
    --fp3d-soft: #5b7cff;
    --fp3d-warm: #ffb547;
    --fp3d-danger: #ff6b8b;
    --fp3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
`,lt=K`
  .fp3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--fp3d-chrome);
    box-shadow: var(--fp3d-shadow);
  }
  .fp3d-seg button,
  .fp3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--fp3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .fp3d-seg button[aria-pressed="true"],
  .fp3d-chip[aria-pressed="true"] {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
  }
  .fp3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .fp3d-chip {
    background: var(--fp3d-chrome);
    color: var(--fp3d-text);
    box-shadow: var(--fp3d-shadow);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--fp3d-accent);
    outline-offset: 2px;
  }
  .fp3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--fp3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--fp3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .fp3d-btn:hover {
    border-color: var(--fp3d-accent);
  }
  .fp3d-btn.fp3d-danger {
    color: var(--fp3d-danger);
  }
  .fp3d-btn.fp3d-primary {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
    border-color: transparent;
  }
  .fp3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-field input,
  .fp3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .fp3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--fp3d-accent);
  }
  /* a colour picker shows its colour as a full swatch, not a line inside the text field's padding */
  .fp3d-field input[type="color"] {
    padding: 3px;
    height: 36px;
    width: 100%;
    cursor: pointer;
  }
  .fp3d-field select option,
  select option {
    /* the opened list keeps the dark look (else light text on the browser's white list) */
    background: var(--fp3d-chrome-solid);
    color: var(--fp3d-text);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var ce={yaw:-.65,pitch:.42,zoom:1},ct={body:"#8a95ab",fabric:"#5d6f93",cushion:"#8193b8",wood:"#a5764a",white:"#e6e8ee",metal:"#a3acb8",dark:"#2c323d",glass:"#a9d6f5",plant:"#4f9a5a",pot:"#b86a4b",accent:"#00c8e0"};function At(s){let e=s.replace("#","");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}var ae=(s,e)=>[s[0]-e[0],s[1]-e[1],s[2]-e[2]],le=(s,e)=>s[0]*e[0]+s[1]*e[1]+s[2]*e[2],De=(s,e)=>[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]],ve=s=>{let e=Math.hypot(s[0],s[1],s[2]);return[s[0]/e,s[1]/e,s[2]/e]};function ze(s,e){let[t,n,i]=e,o=[],r=0,d=(a,h,u,g,l,y)=>o.push({v:[a,h,u],col:g,g:l,top:y}),p=(a,h,u,g,l)=>{let y=r++;d(a,h,u,l,y,!1),d(a,u,g,l,y,!1)};for(let a of s){let h=a.glow?[255,214,120]:At(ct[a.color]??(a.color?.startsWith("#")?a.color:ct.body)),u=a.y*i,g=Math.min(i,(a.y+a.h)*i),l=a.x*t,y=a.z*n,T=(a.rot??0)*Math.PI/180,N=Math.cos(T),C=Math.sin(T),P=(_,c)=>[l+(_-l)*N-(c-y)*C,y+(_-l)*C+(c-y)*N],V=(_,c,b,m)=>{let x=_.map(([S,k])=>[S,b,k]),w=c.map(([S,k])=>[S,m,k]),f=r++,E=r++;for(let S=1;S<_.length-1;S++)d(w[0],w[S],w[S+1],h,f,!0),d(x[0],x[S+1],x[S],h,E,!1);return{B:x,T:w}};if(a.shape==="cyl"&&(a.axis==="x"||a.axis==="z")){let _=a.axis==="x",c=_?a.w*t:a.d*n,b=Math.min(_?a.d*n:a.w*t,g-u)/2,m=(u+g)/2,x=16,w=(k,U)=>{let H=U/x*Math.PI*2,A=Math.cos(H)*b,M=m+Math.sin(H)*b;return _?[l+k,M,y+A]:[l+A,M,y+k]},f=r++,E=r++,S=r++;for(let k=0;k<x;k++){let U=w(-c/2,k),H=w(-c/2,k+1),A=w(c/2,k),M=w(c/2,k+1);d(U,A,M,h,f,!1),d(U,M,H,h,f,!1),d(w(-c/2,0),H,U,h,E,!1),d(w(c/2,0),A,M,h,S,!1)}continue}if(a.shape==="cyl"){let _=Math.min(a.w*t,a.d*n)/2,c=20,b=Array.from({length:c},(f,E)=>[l+Math.cos(E/c*2*Math.PI)*_,y+Math.sin(E/c*2*Math.PI)*_]),{B:m,T:x}=V(b,b,u,g),w=r++;for(let f=0;f<c;f++){let E=(f+1)%c;d(m[f],x[f],x[E],h,w,!1),d(m[f],x[E],m[E],h,w,!1)}continue}let W=(a.x-a.w/2)*t,Y=(a.x+a.w/2)*t,de=(a.z-a.d/2)*n,Z=(a.z+a.d/2)*n,Q=[P(W,de),P(Y,de),P(Y,Z),P(W,Z)],J=Q;if(a.shape==="loft"){let _=a.tx??a.x,c=a.tz??a.z,b=a.tw??a.w,m=a.td??a.d;J=[P((_-b/2)*t,(c-m/2)*n),P((_+b/2)*t,(c-m/2)*n),P((_+b/2)*t,(c+m/2)*n),P((_-b/2)*t,(c+m/2)*n)]}let{B:pe,T:L}=V(Q,J,u,g);for(let _=0;_<4;_++){let c=(_+1)%4;p(pe[_],pe[c],L[c],L[_],h)}}return o}function Le(s,e,t,n,i={}){let o=Math.min(2,window.devicePixelRatio||1),r=Math.max(1,Math.round(s.clientWidth*o))||s.width,d=Math.max(1,Math.round(s.clientHeight*o))||s.height;(s.width!==r||s.height!==d)&&(s.width=r,s.height=d);let p=s.getContext("2d");if(!p)return;let a=p.createImageData(r,d),h=a.data,u=new Float32Array(r*d).fill(1/0),g=new Int32Array(r*d).fill(-1),[l,y,T]=t,N=Math.max(.05,Math.hypot(l,y,T)/2),C=[0,T/2,0],P=N*3.1*n.zoom,V=[C[0]+Math.sin(n.yaw)*Math.cos(n.pitch)*P,C[1]+Math.sin(n.pitch)*P,C[2]+Math.cos(n.yaw)*Math.cos(n.pitch)*P],W=ve(ae(C,V)),Y=ve(De(W,[0,1,0])),de=De(Y,W),Z=Math.min(r,d)/2/Math.tan(22*Math.PI/180),Q=c=>{let b=ae(c,V),m=le(b,W);return[r/2+le(b,Y)*Z/m,d/2-le(b,de)*Z/m,m]},J=i.bg??[15,23,41];for(let c=0;c<r*d;c++)h[c*4]=J[0],h[c*4+1]=J[1],h[c*4+2]=J[2],h[c*4+3]=255;let pe=ve([.45,.85,.6]),L=c=>{let b=ve(De(ae(c.v[1],c.v[0]),ae(c.v[2],c.v[0])));if(!Number.isFinite(b[0]))return;let m=le(b,ae(V,c.v[0]))<0?[-b[0],-b[1],-b[2]]:b,x=.48+.52*Math.max(0,le(m,pe));c.top&&(x=Math.min(1.12,x*1.1));let w=c.flat?c.col:c.col.map(A=>Math.min(255,Math.round(A*x))),f=c.v.map(Q);if(f.some(A=>A[2]<=.01))return;let E=Math.max(0,Math.floor(Math.min(f[0][0],f[1][0],f[2][0]))),S=Math.min(r-1,Math.ceil(Math.max(f[0][0],f[1][0],f[2][0]))),k=Math.max(0,Math.floor(Math.min(f[0][1],f[1][1],f[2][1]))),U=Math.min(d-1,Math.ceil(Math.max(f[0][1],f[1][1],f[2][1]))),H=(f[1][0]-f[0][0])*(f[2][1]-f[0][1])-(f[2][0]-f[0][0])*(f[1][1]-f[0][1]);if(!(Math.abs(H)<1e-9))for(let A=k;A<=U;A++)for(let M=E;M<=S;M++){let he=M+.5,ue=A+.5,$e=((f[1][0]-he)*(f[2][1]-ue)-(f[2][0]-he)*(f[1][1]-ue))/H,_e=((f[2][0]-he)*(f[0][1]-ue)-(f[0][0]-he)*(f[2][1]-ue))/H,je=1-$e-_e;if($e<-1e-6||_e<-1e-6||je<-1e-6)continue;let xe=1/($e/f[0][2]+_e/f[1][2]+je/f[2][2]),q=A*r+M;xe<u[q]-1e-4*xe&&(u[q]=xe,g[q]=c.g,h[q*4]=w[0],h[q*4+1]=w[1],h[q*4+2]=w[2])}},_=i.accent??[55,224,255];if(i.floor!==!1){let c=Math.max(l,y)*.75+.1,b=i.floorCol??[27,38,62],m=[[-c,-.001,-c],[c,-.001,-c],[c,-.001,c],[-c,-.001,c]];L({v:[m[0],m[1],m[2]],col:b,g:-2,flat:!0}),L({v:[m[0],m[2],m[3]],col:b,g:-2,flat:!0});let x=Math.max(.06,Math.min(l,.4)*.25),w=y/2+.05;L({v:[[-x,0,w],[x,0,w],[0,0,w+x*1.1]],col:_,g:-3,flat:!0})}for(let c of e)L(c);for(let c=1;c<d-1;c++)for(let b=1;b<r-1;b++){let m=c*r+b,x=g[m];x<0||(g[m+1]!==x||g[m-1]!==x||g[m+r]!==x||g[m-r]!==x)&&(h[m*4]*=.5,h[m*4+1]*=.5,h[m*4+2]*=.55)}if(p.putImageData(a,0,0),i.label&&i.floor!==!1){let c=Q([0,0,y/2+.05+Math.max(.06,Math.min(l,.4)*.25)*1.6]);p.font=`${12*o}px var(--fp3d-font, sans-serif)`,p.fillStyle=`rgb(${_.join(",")})`,p.textAlign="center",p.fillText(i.label,c[0],c[1]+12*o)}}var Pt={\u00E4:"ae",\u00F6:"oe",\u00FC:"ue",\u00DF:"ss"};function dt(s){return String(s).toLowerCase().replace(/[äöüß]/g,e=>Pt[e]).replace(/[^a-z0-9_-]+/g,"_").replace(/_+/g,"_").replace(/^[_-]+|[_-]+$/g,"").slice(0,32).replace(/[_-]+$/,"")}function pt(s,e){let t=String(s||"").replace(/[_-]+/g," ").trim();return t?t[0].toUpperCase()+t.slice(1):e}var z="neonplan3d/own_furniture",Et="/api/neonplan3d/own_furniture/upload",ht=8*1024*1024,Mt=".glb,.gltf,.bin,.obj,.mtl,.stl,.json,.fp3dpack",Ue={de:{title:"Eigene M\xF6bel",intro:"M\xF6bel aus Blender, Rhino & Co.: Modell hochladen, Vorschau drehen, Name und Art w\xE4hlen \u2013 NeonPlan baut es aus Quadern, Zylindern und schr\xE4gen Quadern nach (h\xF6chstens 60 Teile).",key_ok:"Schl\xFCssel aktiv",key_off:"Schl\xFCssel inaktiv",key_hint:"Dein eigener Schl\xFCssel signiert nur deine eigenen M\xF6bel \u2013 keine Pro-Funktionen.",inactive:"Der eigene Schl\xFCssel ist nicht aktiv \u2013 neue M\xF6bel lassen sich nicht \xFCbernehmen.",reason:{unsupported:"Diese NeonPlan-Version pr\xFCft Packs anders als erwartet.",not_restricted:"NeonPlan beschr\xE4nkt Studio-Schl\xFCssel nicht mehr wie erwartet \u2013 aus Sicherheitsgr\xFCnden bleibt der Schl\xFCssel aus.",self_test_failed:"Der Selbsttest ist fehlgeschlagen."},drop:"Modell hierher ziehen",or:"oder",choose:"Dateien w\xE4hlen",formats:"GLB \xB7 glTF (+ .bin) \xB7 OBJ (+ .mtl) \xB7 STL \xB7 Pack-JSON",formats_hint:"Mehrere Objekte im Modell werden einzeln zu Teilen \u2013 am besten exportierst du M\xF6bel mit getrennten Objekten (Beine, Platte, Schublade \u2026).",uploading:"Lade hoch \u2026",reading:"Lese das Modell \u2026",converting:"Rechne um \u2026",parts:s=>`${s} ${s===1?"Teil":"Teile"}`,objects:s=>`aus ${s} ${s===1?"Objekt":"Objekten"}`,size:"B \xD7 T \xD7 H",front:"vorne",drag:"Ziehen zum Drehen \xB7 Mausrad zum Zoomen",shape_title:"Form",detail:"Detailgrad",detail_hint:"Teile h\xF6chstens",unit:"Einheit",auto:"Automatisch",up:"Oben ist",turn:"Drehen",turn_hint:"Die Vorderseite geh\xF6rt nach vorne \u2013 mit dem R\xFCcken stellt NeonPlan M\xF6bel an die Wand.",edges:"Kanten",edges_opts:{false:"keine",faint:"zart",true:"normal",glow:"leuchtend"},item_title:"M\xF6bel",name:"Name",kind:"Art",kind_none:"\u2013 ohne \u2013",rooms:"R\xE4ume",mount:"Steht",mount_opts:{floor:"auf dem Boden",surface:"auf einem M\xF6bel",wall:"an der Wand",ceiling:"an der Decke"},wall_y:"Unterkante (m)",light:"Leuchte",light_none:"keine Leuchte",electric:"Elektrisch (Schalter/Leistung verkn\xFCpfbar)",surface:"Oberseite tr\xE4gt andere M\xF6bel",replace:s=>`Vorhandenes \u201E${s}\u201C ersetzen (M\xF6bel im Plan \xFCbernehmen die neue Form)`,save:"In NeonPlan \xFCbernehmen",saving:"\xDCbernehme \u2026",discard:"Verwerfen",edit_note:"Bearbeiten \xE4ndert Name und Eigenschaften. F\xFCr eine neue Form das Modell neu hochladen.",saved:s=>`\u201E${s}\u201C ist \xFCbernommen \u2013 du findest es im Editor unter M\xF6bel.`,json_title:"M\xF6bel aus JSON",json_all:"Alle \xFCbernehmen",library:"Deine M\xF6bel",library_empty:"Noch keine eigenen M\xF6bel.",edit:"Bearbeiten",remove:"Entfernen",remove_q:s=>`\u201E${s}\u201C entfernen? Steht es im Plan, bleibt dort ein einfacher Kasten.`,removed:s=>`\u201E${s}\u201C entfernt.`,reimport:"Neu einspielen",reimported:"Alle eigenen M\xF6bel neu eingespielt.",download:"Als .fp3dpack sichern",close:"Schlie\xDFen",notes:{unit_guessed:s=>`Einheit gesch\xE4tzt: ${s.unit} \u2013 unten \xE4nderbar`,bodies_found:s=>`${s.count} getrennte K\xF6rper erkannt`,decomposed:s=>`${s.count} ${s.count===1?"Objekt":"Objekte"} in Quader zerlegt`,dropped_small:s=>`${s.count} kleine Teile weggelassen \u2013 Detailgrad erh\xF6hen`,coarse:s=>`${s.count} ${s.count===1?"Objekt":"Objekte"} nur grob \u2013 Detailgrad erh\xF6hen`,texture_colours:s=>`${s.count}\xD7 nur Textur: Farbe unbekannt, Standardfarbe`},errors:{unsupported_format:s=>["fbx","blend","3dm","dae","usdz","step","3mf","ply"].includes(s)?`.${s} kann ich nicht lesen. Bitte als GLB/glTF exportieren (Blender: Datei \u2192 Exportieren \u2192 glTF 2.0; Rhino: Speichern unter \u2192 glTF) \u2013 OBJ und STL gehen auch.`:"Unbekanntes Dateiformat. M\xF6glich sind GLB, glTF, OBJ, STL und Pack-JSON.",compressed:()=>"Das Modell ist komprimiert (Draco/Meshopt). Bitte beim Export die Kompression ausschalten.",missing_file:s=>`Zum Modell geh\xF6rt noch \u201E${s}\u201C \u2013 bitte zusammen mit dem Modell ausw\xE4hlen.`,too_many_triangles:s=>`Das Modell hat ${s} Dreiecke \u2013 zu viele. Bitte vereinfachen (Blender: Decimate).`,broken_file:s=>`Die Datei l\xE4sst sich nicht lesen${s?` (${s})`:""}.`,no_triangles:()=>"Im Modell sind keine Fl\xE4chen.",too_large:s=>`Das Modell ist ${s} gro\xDF (NeonPlan: h\xF6chstens 10 m). Stimmt die Einheit?`,too_small:s=>`Das Modell ist nur ${s} gro\xDF. Stimmt die Einheit?`,gltf_version:()=>"Nur glTF 2.0 wird unterst\xFCtzt.",no_items:s=>`In ${s} stehen keine M\xF6bel.`,invalid:s=>`NeonPlan lehnt das M\xF6bel ab: ${s}`,full:()=>"H\xF6chstens 200 eigene M\xF6bel.",no_upload:()=>"Der Upload ist abgelaufen \u2013 bitte noch einmal hochladen.",upload:s=>`Hochladen fehlgeschlagen: ${s}`,bad_signature:()=>"NeonPlan hat die Signatur abgelehnt \u2013 Home Assistant neu starten.",unknown_publisher:()=>"NeonPlan kennt den Schl\xFCssel nicht \u2013 Home Assistant neu starten.",unknown_command:()=>"Home Assistant l\xE4uft noch mit der alten NeonPlan-Version \u2013 bitte neu starten.",not_loaded:()=>"NeonPlan 3D ist nicht eingerichtet.",numpy_missing:()=>"Diesem Home Assistant fehlt das Python-Paket numpy, das Modelle liest. Pack-JSON geht trotzdem."},kinds:{sofa:"Sofas",seating:"Sitzm\xF6bel",table:"Tische",storage:"Schr\xE4nke & Regale",bed:"Betten",kitchen:"K\xFCche",appliance:"Ger\xE4te",bath:"Bad",lamp:"Leuchten",media:"Medien",office:"B\xFCro",tech:"Technik",heating:"Heizung & Klima",energy:"Energie",household:"Haushalt",deco:"Deko",plant:"Pflanzen",outdoor:"Au\xDFen",kids:"Kinder",sport:"Sport",pets:"Haustiere",vehicle:"Fahrzeuge",stairs:"Treppen",architecture:"Architektur"},rooms_opts:{living:"Wohnzimmer",dining:"Esszimmer",kitchen:"K\xFCche",bedroom:"Schlafzimmer",kids:"Kinderzimmer",bath:"Bad",office:"B\xFCro",hall:"Flur",utility:"Hauswirtschaft",garage:"Garage",garden:"Garten",hobby:"Hobby"},lights:{ceiling:"Deckenleuchte",downlight:"Einbauspot",spot:"Spot",panel:"LED-Panel",pendant:"Pendelleuchte",floor:"Stehlampe",uplight:"Deckenfluter",table:"Tischlampe",wall:"Wandleuchte",strip:"LED-Streifen",bollard:"Wegleuchte",garden:"Garten-Spot"}},en:{title:"Own furniture",intro:"Furniture from Blender, Rhino and co.: upload a model, turn the preview, pick a name and a kind \u2013 NeonPlan rebuilds it from boxes, cylinders and sloped boxes (60 parts at most).",key_ok:"Key active",key_off:"Key inactive",key_hint:"Your own key signs your own furniture only \u2013 no Pro features.",inactive:"The own key is not active \u2013 new furniture cannot be imported.",reason:{unsupported:"This NeonPlan version checks packs differently than expected.",not_restricted:"NeonPlan no longer limits studio keys as expected \u2013 for safety the key stays off.",self_test_failed:"The self-test failed."},drop:"Drop a model here",or:"or",choose:"Choose files",formats:"GLB \xB7 glTF (+ .bin) \xB7 OBJ (+ .mtl) \xB7 STL \xB7 pack JSON",formats_hint:"Every object of the model becomes a part of its own \u2013 export furniture with separate objects (legs, top, drawer \u2026).",uploading:"Uploading \u2026",reading:"Reading the model \u2026",converting:"Converting \u2026",parts:s=>`${s} ${s===1?"part":"parts"}`,objects:s=>`from ${s} ${s===1?"object":"objects"}`,size:"W \xD7 D \xD7 H",front:"front",drag:"Drag to turn \xB7 wheel to zoom",shape_title:"Shape",detail:"Detail",detail_hint:"parts at most",unit:"Unit",auto:"Automatic",up:"Up is",turn:"Turn",turn_hint:"The front belongs to the front \u2013 NeonPlan puts furniture with its back to the wall.",edges:"Edges",edges_opts:{false:"none",faint:"faint",true:"normal",glow:"glowing"},item_title:"Furniture",name:"Name",kind:"Kind",kind_none:"\u2013 none \u2013",rooms:"Rooms",mount:"Stands",mount_opts:{floor:"on the floor",surface:"on furniture",wall:"on the wall",ceiling:"on the ceiling"},wall_y:"Bottom (m)",light:"Lamp",light_none:"no lamp",electric:"Electric (switch/power can be linked)",surface:"Its top carries other furniture",replace:s=>`Replace the existing \u201C${s}\u201D (furniture in the plan takes the new shape)`,save:"Import into NeonPlan",saving:"Importing \u2026",discard:"Discard",edit_note:"Editing changes name and properties. For a new shape, upload the model again.",saved:s=>`\u201C${s}\u201D is imported \u2013 you find it in the editor under Furniture.`,json_title:"Furniture from JSON",json_all:"Import all",library:"Your furniture",library_empty:"No own furniture yet.",edit:"Edit",remove:"Remove",remove_q:s=>`Remove \u201C${s}\u201D? In the plan it stays as a plain box.`,removed:s=>`\u201C${s}\u201D removed.`,reimport:"Import again",reimported:"All own furniture imported again.",download:"Save as .fp3dpack",close:"Close",notes:{unit_guessed:s=>`Unit guessed: ${s.unit} \u2013 change it below`,bodies_found:s=>`${s.count} separate bodies found`,decomposed:s=>`${s.count} ${s.count===1?"object":"objects"} split into boxes`,dropped_small:s=>`${s.count} small parts left out \u2013 raise the detail`,coarse:s=>`${s.count} ${s.count===1?"object":"objects"} only coarse \u2013 raise the detail`,texture_colours:s=>`${s.count}\xD7 texture only: colour unknown, default colour`},errors:{unsupported_format:s=>s?`.${s} cannot be read. Please export as GLB/glTF (Blender: File \u2192 Export \u2192 glTF 2.0; Rhino: Save As \u2192 glTF) \u2013 OBJ and STL work too.`:"Unknown file format. GLB, glTF, OBJ, STL and pack JSON work.",compressed:()=>"The model is compressed (Draco/Meshopt). Please turn compression off when exporting.",missing_file:s=>`The model needs \u201C${s}\u201D too \u2013 please choose it together with the model.`,too_many_triangles:s=>`The model has ${s} triangles \u2013 too many. Please simplify it (Blender: Decimate).`,broken_file:s=>`The file cannot be read${s?` (${s})`:""}.`,no_triangles:()=>"The model has no faces.",too_large:s=>`The model is ${s} (NeonPlan: 10 m at most). Is the unit right?`,too_small:s=>`The model is only ${s}. Is the unit right?`,gltf_version:()=>"Only glTF 2.0 is supported.",no_items:s=>`${s} holds no furniture.`,invalid:s=>`NeonPlan refuses the furniture: ${s}`,full:()=>"200 own pieces of furniture at most.",no_upload:()=>"The upload expired \u2013 please upload again.",upload:s=>`Upload failed: ${s}`,bad_signature:()=>"NeonPlan refused the signature \u2013 restart Home Assistant.",unknown_publisher:()=>"NeonPlan does not know the key \u2013 restart Home Assistant.",unknown_command:()=>"Home Assistant still runs the old NeonPlan version \u2013 please restart it.",not_loaded:()=>"NeonPlan 3D is not set up.",numpy_missing:()=>"This Home Assistant lacks the Python package numpy, which reads models. Pack JSON still works."},kinds:{sofa:"Sofas",seating:"Seating",table:"Tables",storage:"Storage",bed:"Beds",kitchen:"Kitchen",appliance:"Appliances",bath:"Bath",lamp:"Lamps",media:"Media",office:"Office",tech:"Tech",heating:"Heating & climate",energy:"Energy",household:"Household",deco:"Decoration",plant:"Plants",outdoor:"Outdoor",kids:"Kids",sport:"Sport",pets:"Pets",vehicle:"Vehicles",stairs:"Stairs",architecture:"Architecture"},rooms_opts:{living:"Living room",dining:"Dining room",kitchen:"Kitchen",bedroom:"Bedroom",kids:"Kids' room",bath:"Bathroom",office:"Office",hall:"Hall",utility:"Utility",garage:"Garage",garden:"Garden",hobby:"Hobby"},lights:{ceiling:"Ceiling lamp",downlight:"Downlight",spot:"Spot",panel:"LED panel",pendant:"Pendant",floor:"Floor lamp",uplight:"Uplight",table:"Table lamp",wall:"Wall lamp",strip:"LED strip",bollard:"Path light",garden:"Garden spot"}}};function Tt(){if(window.crypto?.randomUUID)return window.crypto.randomUUID();let s=new Uint8Array(16);return window.crypto.getRandomValues(s),Array.from(s,e=>e.toString(16).padStart(2,"0")).join("")}function Nt(s,e){return{name:s,group:e.glow?"lamp":e.screen?"media":"",room:[],mount:"floor",wall_y:1,light:e.glow?e.size[2]>1.2?"floor":"table":"",electric:e.screen,surface:!1}}var ye=class extends D{static properties={hass:{attribute:!1},_state:{state:!0},_busy:{state:!0},_message:{state:!0},_draft:{state:!0},_json:{state:!0},_over:{state:!0}};view={...ce};convertTimer;started=!1;tris=null;drawn={result:null,items:null};constructor(){super(),this._state=null,this._busy="",this._message=null,this._draft=null,this._json=null,this._over=!1}get t(){return(this.hass?.language??navigator.language).startsWith("de")?Ue.de:Ue.en}willUpdate(e){e.has("hass")&&this.hass&&!this.started&&(this.started=!0,this.loadState())}updated(){let e=this._draft;e&&this.drawn.result!==e.result&&this.drawPreview(),e||(this.drawn.result=null);let t=this._state?.items??null;t&&this.drawn.items!==t&&(this.drawn.items=t,this.shadowRoot?.querySelectorAll("canvas[data-thumb]").forEach(n=>{let i=t[Number(n.dataset.thumb)];i&&Le(n,ze(i.parts,i.size),i.size,{...ce,zoom:.85},{floor:!1})}))}async ws(e){if(!this.hass)throw{code:"not_loaded"};return this.hass.callWS(e)}async loadState(){try{this._state=await this.ws({type:`${z}/state`})}catch(e){let t=e;this._state={active:!1,error:t.code??"not_loaded",detail:t.message??"",key_id:"",pack_id:"",items:[]}}}errorText(e){let t=e??{},n=t.code??"unknown",i=t.detail??t.message??"",o=this.t.errors[n];return o?o(i):`${n}${i&&i!==n?`: ${i}`:""}`}say(e,t){this._message={ok:e,text:t}}itemName(e){let t=e?.name;return t&&typeof t=="object"?t[this.t===Ue.de?"de":"en"]||Object.values(t)[0]||"":t||e?.id||""}existing(e){let t=dt(e);return this._state?.items.find(n=>n.id===t)}async upload(e){let t=[...e??[]];if(!t.length||!this.hass||this._busy)return;let n=this.hass;this._message=null,this._json=null;let i=Tt(),o=t.reduce((d,p)=>d+p.size,0)||1,r=0;try{for(let p of t)for(let a=0;a<Math.max(p.size,1);a+=ht){this._busy=`${this.t.uploading} ${Math.round(r/o*100)} %`;let h=p.slice(a,a+ht),u=`${Et}?session=${encodeURIComponent(i)}&file=${encodeURIComponent(p.name)}&offset=${a}`,g={method:"POST",body:h,headers:{"Content-Type":"application/octet-stream"}},l=n.fetchWithAuth?await n.fetchWithAuth(u,g):await fetch(u,{...g,headers:{"Content-Type":"application/octet-stream",Authorization:`Bearer ${n.auth?.data.access_token??""}`}});if(!l.ok){let y=`${l.status}`;try{y=(await l.json()).message||y}catch{}throw{code:l.status===404?"unknown_command":"upload",detail:y}}if(r+=h.size,p.size===0)break}this._busy=this.t.reading;let d=await this.ws({type:`${z}/process`,session:i,options:{}});d.kind==="json"?(this._json=d.items,this._draft=null):(this._draft={session:i,options:{max_parts:40,units:"auto",up:"auto",turn:0,edges:"faint"},result:d.result,objects:d.objects,fields:Nt(pt(d.name,this.t.item_title),d.result),replaceChecked:!1,converting:!1},this.view={...ce}),this._busy=""}catch(d){this._busy="",this.say(!1,this.errorText(d))}}reconvert(){let e=this._draft;!e?.session||!e.options||(this.requestUpdate(),clearTimeout(this.convertTimer),this.convertTimer=setTimeout(async()=>{e.converting=!0,this.requestUpdate();try{let t=await this.ws({type:`${z}/convert`,session:e.session,options:e.options});this._draft===e&&(e.result=t.result)}catch(t){this.say(!1,this.errorText(t))}e.converting=!1,this.requestUpdate()},250))}async importOwnPack(e){if(this.hass){if(e.pack)await ot(this.hass,e.pack);else try{await rt(this.hass,e.pack_id)}catch(t){if(t.code!=="not_found")throw t}this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}}async save(){let e=this._draft;if(!e||this._busy)return;let t=e.fields,n={name:t.name.trim()||this.t.item_title,size:e.result.size,parts:e.result.parts,room:t.room,mount:t.mount};t.group&&(n.group=t.group),t.mount==="wall"&&(n.wall_y=Number(t.wall_y)||0),t.light&&(n.light=t.light),t.electric&&(n.electric=!0),t.surface&&(n.surface=!0);let i=e.editing??(e.replaceChecked?this.existing(String(n.name))?.id:null);this._busy=this.t.saving;try{let o=await this.ws({type:`${z}/save`,item:n,replace:i??null});await this.importOwnPack(o),this._draft=null,await this.loadState(),this.say(!0,this.t.saved(String(n.name)))}catch(o){this.say(!1,this.errorText(o))}this._busy=""}async saveJson(){let e=(this._json??[]).filter(t=>!t.problem);if(!(!e.length||this._busy)){this._busy=this.t.saving;try{let t=null;for(let n of e)t=await this.ws({type:`${z}/save`,item:n.item});t&&await this.importOwnPack(t),this._json=null,await this.loadState(),this.say(!0,this.t.saved(e.map(n=>this.itemName(n.item)).join(", ")))}catch(t){this.say(!1,this.errorText(t))}this._busy=""}}async removeItem(e){let t=this.itemName(e);if(!(this._busy||!confirm(this.t.remove_q(t)))){this._busy="\u2026";try{await this.importOwnPack(await this.ws({type:`${z}/remove`,item_id:e.id})),this._draft?.editing===e.id&&(this._draft=null),await this.loadState(),this.say(!0,this.t.removed(t))}catch(n){this.say(!1,this.errorText(n))}this._busy=""}}async reimport(){try{await this.importOwnPack(await this.ws({type:`${z}/pack`})),this.say(!0,this.t.reimported)}catch(e){this.say(!1,this.errorText(e))}}async download(){try{let e=await this.ws({type:`${z}/pack`});if(!e.pack)return;let t=document.createElement("a");t.href=URL.createObjectURL(new Blob([e.pack],{type:"application/json"})),t.download="eigene-moebel.fp3dpack",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),2e3)}catch(e){this.say(!1,this.errorText(e))}}editItem(e){this._json=null,this._message=null,this._draft={editing:e.id,result:{size:e.size,parts:e.parts,notes:[],glow:!1,screen:!1},fields:{name:this.itemName(e),group:e.group??"",room:e.room??[],mount:e.mount??"floor",wall_y:e.wall_y??1,light:e.light??"",electric:!!e.electric,surface:!!e.surface},replaceChecked:!1,converting:!1},this.view={...ce},this.updateComplete.then(()=>this.shadowRoot?.querySelector(".fp3d-of-editor")?.scrollIntoView({behavior:"smooth"}))}drawPreview(){let e=this.shadowRoot?.querySelector("#preview"),t=this._draft;!e||!t||(this.tris?.of!==t.result&&(this.tris={of:t.result,tris:ze(t.result.parts,t.result.size)}),this.drawn.result=t.result,Le(e,this.tris.tris,t.result.size,this.view,{label:this.t.front}))}dragStart(e){let t=e.currentTarget,n={x:e.clientX,y:e.clientY,yaw:this.view.yaw,pitch:this.view.pitch};t.setPointerCapture(e.pointerId);let i=r=>{this.view.yaw=n.yaw-(r.clientX-n.x)*.01,this.view.pitch=Math.max(-.2,Math.min(1.45,n.pitch+(r.clientY-n.y)*.01)),this.drawPreview()},o=()=>{t.removeEventListener("pointermove",i),t.removeEventListener("pointerup",o),t.removeEventListener("pointercancel",o)};t.addEventListener("pointermove",i),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o)}wheel(e){e.preventDefault(),this.view.zoom=Math.max(.4,Math.min(3,this.view.zoom*(e.deltaY>0?1.1:.9))),this.drawPreview()}render(){let e=this.t,t=this._state;return $`<div class="fp3d-of">
      <header class="fp3d-of-head">
        <h2>${e.title}</h2>
        ${t?$`<span class="fp3d-of-pill ${t.active?"":"fp3d-of-off"}" title=${`${e.key_hint} ${t.key_id}`}>${t.active?"\u25CF":"\u25CB"} ${t.active?e.key_ok:e.key_off}</span>`:v}
        <p class="fp3d-sub">${e.intro}</p>
      </header>
      ${t&&!t.active?$`<section class="fp3d-ext-card fp3d-of-warn">
            <b>${e.inactive}</b>
            <div>${e.reason[t.error??""]??this.errorText({code:t.error??"",detail:""})}</div>
            ${t.detail?$`<code>${t.detail}</code>`:v}
          </section>`:v}
      ${this._message?$`<section class="fp3d-ext-card fp3d-of-msg ${this._message.ok?"fp3d-of-ok":"fp3d-of-bad"}">
            ${this._message.text}
            <button class="fp3d-of-x" title=${e.close} aria-label=${e.close} @click=${()=>this._message=null}>×</button>
          </section>`:v}
      <div class="fp3d-of-grid">
        <div>${this._draft?this.renderDraft(this._draft):this._json?this.renderJson(this._json):this.renderDrop()}</div>
        <div>${this.renderLibrary()}</div>
      </div>
    </div>`}renderDrop(){let e=this.t,t=n=>{n.preventDefault(),this._over=!1,this.upload(n.dataTransfer?.files)};return $`<section
      class="fp3d-ext-card fp3d-of-drop ${this._over?"fp3d-of-over":""}"
      @dragover=${n=>(n.preventDefault(),this._over=!0)}
      @dragleave=${()=>this._over=!1}
      @drop=${t}
    >
      <div class="fp3d-of-big">📦</div>
      ${this._busy?$`<div>${this._busy}</div>
            <div class="fp3d-of-bar"><div></div></div>`:$`<div class="fp3d-of-drop-title">${e.drop}</div>
            <div class="fp3d-sub">${e.or}</div>
            <label class="fp3d-btn fp3d-primary">
              <input type="file" multiple accept=${Mt} hidden @change=${n=>{this.upload(n.target.files)}} />
              ${e.choose}
            </label>
            <div class="fp3d-of-formats">${e.formats}</div>
            <div class="fp3d-sub fp3d-of-small">${e.formats_hint}</div>`}
    </section>`}renderDraft(e){let t=this.t,n=e.result,i=e.fields,o=e.options,r=this.hass?.language??"de",d=l=>l.toLocaleString(r,{minimumFractionDigits:2,maximumFractionDigits:2}),p=e.editing?void 0:this.existing(i.name),a=l=>{e.fields={...i,...l},this.requestUpdate()},h=l=>{e.options&&(e.options={...e.options,...l},this.reconvert())},u=(l,y,T)=>$`<select @change=${N=>T(N.target.value)}>
        ${y.map(([N,C])=>$`<option value=${N} ?selected=${N===l}>${C}</option>`)}
      </select>`,g=n.notes.map(l=>t.notes[l.code]).filter(Boolean);return $`<section class="fp3d-ext-card fp3d-of-editor">
      <div class="fp3d-of-preview-wrap">
        <canvas id="preview" class="fp3d-of-preview" @pointerdown=${this.dragStart} @wheel=${this.wheel}></canvas>
        ${e.converting||this._busy?$`<div class="fp3d-of-overlay">${this._busy||t.converting}</div>`:v}
      </div>
      <div class="fp3d-of-info">
        <b>${t.parts(n.parts.length)}</b> · ${d(n.size[0])} × ${d(n.size[1])} × ${d(n.size[2])} m <span class="fp3d-sub">(${t.size})</span>
        ${e.objects?$`<span class="fp3d-sub"> · ${t.objects(e.objects)}</span>`:v}
      </div>
      <div class="fp3d-sub fp3d-of-small fp3d-of-center">${t.drag}</div>
      ${g.length?$`<div class="fp3d-of-chips fp3d-of-center">${n.notes.map(l=>t.notes[l.code]?$`<span class="fp3d-of-note">${t.notes[l.code](l)}</span>`:v)}</div>`:v}

      ${o?$`<h3>${t.shape_title}</h3>
            <label class="fp3d-field">
              <span>${t.detail}: <b>${o.max_parts}</b> ${t.detail_hint}</span>
              <input type="range" min="1" max="60" .value=${String(o.max_parts)} @input=${l=>h({max_parts:Number(l.target.value)})} />
            </label>
            <div class="fp3d-of-row">
              <label class="fp3d-field"
                >${t.unit}
                ${u(o.units,[["auto",`${t.auto}${o.units==="auto"&&n.unit?` (${n.unit})`:""}`],["m","m"],["cm","cm"],["mm","mm"],["in","inch"]],l=>h({units:l}))}
              </label>
              <label class="fp3d-field"
                >${t.up}
                ${u(o.up,[["auto",`${t.auto}${o.up==="auto"&&n.up?` (${n.up.toUpperCase()})`:""}`],["y","Y"],["z","Z"]],l=>h({up:l}))}
              </label>
              <label class="fp3d-field"
                >${t.edges}
                ${u(String(o.edges),Object.entries(t.edges_opts),l=>h({edges:l==="true"?!0:l==="false"?!1:l}))}
              </label>
              <div class="fp3d-field">
                <span>${t.turn}</span>
                <button class="fp3d-btn" title=${t.turn_hint} @click=${()=>h({turn:(o.turn+90)%360})}>↻ 90°</button>
              </div>
            </div>`:$`<p class="fp3d-sub fp3d-of-small">${t.edit_note}</p>`}

      <h3>${t.item_title}</h3>
      <div class="fp3d-of-row">
        <label class="fp3d-field fp3d-of-grow">${t.name}<input type="text" maxlength="80" .value=${i.name} @input=${l=>a({name:l.target.value})} /></label>
        <label class="fp3d-field">${t.kind}${u(i.group,[["",t.kind_none],...Object.entries(t.kinds)],l=>a({group:l}))}</label>
      </div>
      <div class="fp3d-field">
        ${t.rooms}
        <div class="fp3d-of-chips">
          ${Object.entries(t.rooms_opts).map(([l,y])=>$`<button class="fp3d-chip" aria-pressed=${i.room.includes(l)} @click=${()=>a({room:i.room.includes(l)?i.room.filter(T=>T!==l):[...i.room,l]})}>${y}</button>`)}
        </div>
      </div>
      <div class="fp3d-of-row">
        <label class="fp3d-field">${t.mount}${u(i.mount,Object.entries(t.mount_opts),l=>a({mount:l}))}</label>
        ${i.mount==="wall"?$`<label class="fp3d-field"
              >${t.wall_y}<input type="number" min="0" max="3" step="0.05" .value=${String(i.wall_y)} @input=${l=>a({wall_y:Number(l.target.value)})}
            /></label>`:v}
        <label class="fp3d-field">${t.light}${u(i.light,[["",t.light_none],...Object.entries(t.lights)],l=>a({light:l,group:l&&!i.group?"lamp":i.group}))}</label>
      </div>
      <label class="fp3d-of-check"><input type="checkbox" .checked=${i.electric} @change=${l=>a({electric:l.target.checked})} /> ${t.electric}</label>
      <label class="fp3d-of-check"><input type="checkbox" .checked=${i.surface} @change=${l=>a({surface:l.target.checked})} /> ${t.surface}</label>
      ${p?$`<label class="fp3d-of-check fp3d-of-replace"
            ><input type="checkbox" .checked=${e.replaceChecked} @change=${l=>(e.replaceChecked=l.target.checked,this.requestUpdate())} />
            ${t.replace(this.itemName(p))}</label
          >`:v}
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this._draft=null}>${t.discard}</button>
        <button class="fp3d-btn fp3d-primary" ?disabled=${!this._state?.active||!!this._busy||e.converting} @click=${()=>{this.save()}}>${this._busy||t.save}</button>
      </div>
    </section>`}renderJson(e){let t=this.t;return $`<section class="fp3d-ext-card">
      <h3>${t.json_title}</h3>
      ${e.map(n=>$`<div class="fp3d-of-lib-row">
          <div class="fp3d-of-grow">
            <b>${this.itemName(n.item)}</b>
            ${n.problem?$`<div class="fp3d-of-bad fp3d-of-small">${t.errors.invalid(n.problem)}</div>`:$`<div class="fp3d-sub fp3d-of-small">${t.parts((n.item.parts??[]).length)}</div>`}
          </div>
        </div>`)}
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this._json=null}>${t.discard}</button>
        <button class="fp3d-btn fp3d-primary" ?disabled=${!this._state?.active||!!this._busy||!e.some(n=>!n.problem)} @click=${()=>{this.saveJson()}}>
          ${this._busy||t.json_all}
        </button>
      </div>
    </section>`}renderLibrary(){let e=this.t,t=this._state?.items??[],n=this.hass?.language??"de",i=r=>r.toLocaleString(n,{minimumFractionDigits:2,maximumFractionDigits:2}),o=!!this._state?.active;return $`<section class="fp3d-ext-card">
      <h3>${e.library} <span class="fp3d-sub">(${t.length})</span></h3>
      ${t.length?t.map((r,d)=>$`<div class="fp3d-of-lib-row">
              <canvas class="fp3d-of-thumb" data-thumb=${d}></canvas>
              <div class="fp3d-of-grow">
                <b>${this.itemName(r)}</b>
                <div class="fp3d-sub fp3d-of-small">${i(r.size[0])} × ${i(r.size[1])} × ${i(r.size[2])} m · ${e.parts(r.parts.length)}${r.group?` \xB7 ${e.kinds[r.group]??r.group}`:""}</div>
              </div>
              <button class="fp3d-of-icon" title=${e.edit} aria-label=${e.edit} @click=${()=>this.editItem(r)}>✎</button>
              <button class="fp3d-of-icon" title=${e.remove} aria-label=${e.remove} ?disabled=${!o} @click=${()=>{this.removeItem(r)}}>🗑</button>
            </div>`):$`<p class="fp3d-sub">${e.library_empty}</p>`}
      ${t.length?$`<div class="fp3d-actions fp3d-of-left">
            <button class="fp3d-btn" ?disabled=${!o} @click=${()=>{this.reimport()}}>${e.reimport}</button>
            <button class="fp3d-btn" ?disabled=${!o} @click=${()=>{this.download()}}>${e.download}</button>
          </div>`:v}
    </section>`}static styles=[at,lt,K`
      :host {
        display: block;
        overflow: auto;
      }
      .fp3d-of {
        max-width: 1240px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .fp3d-of-head {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 14px;
      }
      .fp3d-of-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .fp3d-of-head p {
        flex-basis: 100%;
        margin: 0;
      }
      .fp3d-sub {
        color: var(--fp3d-muted);
      }
      .fp3d-of-pill {
        font-size: 12px;
        padding: 3px 10px;
        border-radius: 999px;
        color: #34d399;
        background: color-mix(in srgb, #34d399 14%, transparent);
      }
      .fp3d-of-pill.fp3d-of-off {
        color: var(--fp3d-danger);
        background: color-mix(in srgb, var(--fp3d-danger) 14%, transparent);
      }
      .fp3d-of-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 340px;
        gap: 16px;
        align-items: start;
      }
      @media (max-width: 900px) {
        .fp3d-of-grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }
      .fp3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      .fp3d-ext-card h3 {
        margin: 16px 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-soft);
      }
      .fp3d-ext-card > h3:first-child {
        margin-top: 0;
      }
      .fp3d-of-warn {
        border-color: var(--fp3d-warm);
      }
      .fp3d-of-warn code {
        display: block;
        margin-top: 6px;
        font-size: 12px;
        opacity: 0.7;
      }
      .fp3d-of-msg {
        position: relative;
        padding-right: 40px;
      }
      .fp3d-of-ok {
        border-color: #34d399;
      }
      .fp3d-of-bad {
        color: var(--fp3d-danger);
      }
      .fp3d-of-msg.fp3d-of-bad {
        color: inherit;
        border-color: var(--fp3d-danger);
      }
      .fp3d-of-x {
        position: absolute;
        right: 8px;
        top: 6px;
        background: none;
        border: 0;
        font-size: 20px;
        color: inherit;
        cursor: pointer;
      }
      .fp3d-of-small {
        font-size: 12px;
      }
      .fp3d-of-center {
        text-align: center;
        justify-content: center;
      }
      .fp3d-of-drop {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-align: center;
        min-height: 320px;
        border: 2px dashed var(--fp3d-line);
        transition:
          border-color 0.15s,
          background 0.15s;
      }
      .fp3d-of-over {
        border-color: var(--fp3d-accent);
        background: color-mix(in srgb, var(--fp3d-accent) 8%, var(--fp3d-chrome));
      }
      .fp3d-of-big {
        font-size: 48px;
      }
      .fp3d-of-drop-title {
        font-size: 18px;
      }
      .fp3d-of-formats {
        font-size: 13px;
        font-weight: 600;
        margin-top: 6px;
      }
      .fp3d-of-drop .fp3d-of-small {
        max-width: 440px;
      }
      .fp3d-of-bar {
        width: 220px;
        height: 4px;
        border-radius: 2px;
        background: var(--fp3d-line);
        overflow: hidden;
      }
      .fp3d-of-bar div {
        width: 40%;
        height: 100%;
        background: var(--fp3d-accent);
        animation: fp3d-of-slide 1.1s ease-in-out infinite;
      }
      @keyframes fp3d-of-slide {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(250%);
        }
      }
      .fp3d-of-preview-wrap {
        position: relative;
      }
      .fp3d-of-preview {
        width: 100%;
        height: 360px;
        display: block;
        border-radius: 10px;
        cursor: grab;
        touch-action: none;
      }
      .fp3d-of-preview:active {
        cursor: grabbing;
      }
      @media (max-width: 600px) {
        .fp3d-of-preview {
          height: 260px;
        }
      }
      .fp3d-of-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: color-mix(in srgb, var(--fp3d-chrome-solid) 60%, transparent);
        border-radius: 10px;
      }
      .fp3d-of-info {
        margin-top: 8px;
        text-align: center;
      }
      .fp3d-of-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-of-note {
        font-size: 12px;
        padding: 3px 10px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--fp3d-warm) 14%, transparent);
        color: var(--fp3d-warm);
      }
      .fp3d-of-row {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: flex-end;
        margin: 10px 0;
      }
      .fp3d-of-row .fp3d-field {
        min-width: 130px;
      }
      .fp3d-of-grow {
        flex: 1;
        min-width: 0;
      }
      .fp3d-field b {
        color: var(--fp3d-text);
      }
      .fp3d-of-check {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 8px 0;
      }
      .fp3d-of-check input {
        accent-color: var(--fp3d-accent);
        width: 18px;
        height: 18px;
      }
      .fp3d-of-replace {
        color: var(--fp3d-warm);
      }
      .fp3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: flex-end;
        margin-top: 16px;
      }
      .fp3d-actions.fp3d-of-left {
        justify-content: flex-start;
      }
      .fp3d-btn:disabled {
        opacity: 0.45;
        cursor: default;
      }
      label.fp3d-btn {
        display: inline-flex;
        align-items: center;
      }
      .fp3d-of-lib-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 0;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-of-lib-row:first-of-type {
        border-top: 0;
      }
      .fp3d-of-lib-row b {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-of-thumb {
        width: 64px;
        height: 48px;
        flex: none;
        border-radius: 8px;
      }
      .fp3d-of-icon {
        flex: none;
        width: 36px;
        height: 36px;
        border: 0;
        border-radius: 50%;
        background: none;
        color: var(--fp3d-muted);
        font-size: 16px;
        cursor: pointer;
      }
      .fp3d-of-icon:hover {
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
      }
      .fp3d-of-icon:disabled {
        opacity: 0.4;
        cursor: default;
      }
    `]};customElements.get("fp3d-own-furniture")||customElements.define("fp3d-own-furniture",ye);export{ye as OwnFurniture};
