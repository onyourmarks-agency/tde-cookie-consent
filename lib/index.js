var Z=Object.create;var f=Object.defineProperty;var F=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var K=Object.getPrototypeOf,ee=Object.prototype.hasOwnProperty;var te=(e,t)=>{for(var o in t)f(e,o,{get:t[o],enumerable:!0})},E=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of X(t))!ee.call(e,c)&&c!==o&&f(e,c,{get:()=>t[c],enumerable:!(n=F(t,c))||n.enumerable});return e};var oe=(e,t,o)=>(o=e!=null?Z(K(e)):{},E(t||!e||!e.__esModule?f(o,"default",{value:e,enumerable:!0}):o,e)),ne=e=>E(f({},"__esModule",{value:!0}),e);var ge={};te(ge,{default:()=>ue});module.exports=ne(ge);var w={cookieName:"tdecc",exceptionUrls:[],explanationAnchors:[],language:"nl",manageable:!0,style:"bar",renderSelector:"[data-tdecc-render]",version:"1.0"};var j={splash:{title:"Mogen we even je aandacht?",desc:"Om een persoonlijke ervaring te bieden en onze website te verbeteren, plaatsen wij cookies.",buttons:{manage:"Beheer cookies",accept:"Ik accepteer cookies"}},manage:{title:"Cookie instellingen",desc:`Wij laten je graag een goede website zien, afgestemd op jouw voorkeuren.
        Wil je dit ook? Zet dan de onderstaande onderdelen op 'Aan'.
        Hiermee geef je ons toestemming om je door middel van het gebruik van cookies en andere technieken een persoonlijke ervaring te bieden.`,switches:{on:"Aan",off:"Uit"},buttons:{all:"Overal toestemming voor geven",save:"Keuze opslaan"},error:"Je hebt nog niet op alle vragen antwoord gegeven. Geef hierboven jouw voorkeur aan.",footer:"Je keuze is altijd te wijzigen via onze cookie instellingen."},notification:{title:"Accepteer (meer) cookies om deze content te zien",desc:`Deze content is niet zichtbaar omdat er met een externe data ingeladen wordt waarmee cookies geplaatst kunnen worden.
        Je hebt ons nog geen toestemming gegeven om deze cookies te mogen plaatsen.`,button:"Wijzig cookievoorkeuren"}};var z={splash:{title:"May we have your attention?",desc:"We place cookies to provide a personalized experience and improve our website.",buttons:{manage:"Manage cookies",accept:"I accept cookies"}},manage:{title:"Cookie settings",desc:`We are happy to show you a good website, tailored to your preferences.
         Do you want this too? Then set the items below to 'On'.
         By doing this, you give us permission to provide you with a personalized experience through the use of cookies and other techniques.`,switches:{on:"On",off:"Off"},buttons:{all:"Accept all",save:"Save choice"},error:"You have not answered all questions yet. Please indicate your preference above.",footer:"Your choice can always be changed in our cookie settings."},notification:{title:"Accept (more) cookies to view this content",desc:`This content is not visible because an external data is loaded with which cookies can be placed.
          You have not yet given us permission to place these cookies.`,button:"Change cookie preferences"}};var ce={nl:j,en:z},M=ce;function x(e,...t){if(e===null||typeof e!="object")throw new TypeError("Cannot convert undefined or null to object");return t.forEach(o=>{o===null||typeof o=="object"||Object.keys(o).forEach(n=>{typeof e[n]=="object"&&e[n]!==null&&typeof o[n]=="object"&&o[n]!==null?e[n]=x(e[n],o[n]):e[n]=o[n]})}),e}var A=e=>{let t=typeof e=="object"&&Object.keys(e).length?e:{};return x({},w,t)},L=()=>{let e=window.tdeCookieConsentContent,t=typeof e=="object"&&Object.keys(e).length?e:{};return x({},M,t)},r=()=>{try{return JSON.parse(JSON.stringify(window.tdecc.config)),window.tdecc.config}catch{return w}};var _=e=>{let t=e.replace(/([.*+?^$(){}|[\]/\\])/g,"\\$1"),o=document.cookie.match(RegExp(`(?:^|;\\s*)${t}=([^;]*)`));return o?o[1]:null},D=(e,t,o,n,c,h)=>{let $={[e]:t,"Max-Age":o||null,Path:c||"/",Domain:n||null,Secure:"",SameSite:h||"Lax"};document.cookie=Object.keys($).map(g=>{let y=$[g];return y===null?"":`${g}${y?`=${y}`:""}`}).filter(g=>g!=="").join("; ")},O=(e,t,o)=>{document.cookie=`${e}=${t?`;path=${t}`:""}${o?`;domain=${o}`:""};expires=${new Date(0).toUTCString()}`};var a=()=>({wrapper:document.querySelector("[data-tdeccoverlay]"),close:document.querySelector("[data-tdeccoverlay-close-popup]"),manage:document.querySelector("[data-tdeccoverlay-show-manage]"),saveAll:document.querySelectorAll("[data-tdeccoverlay-save-all]"),save:document.querySelector("[data-tdeccoverlay-save]"),errorMessage:document.querySelector("[data-tdeccoverlay-error]"),optionsAll:document.querySelectorAll('[data-tdeccoverlay] input[name^="cookie-accept"]'),optionsChoosen:document.querySelectorAll('[data-tdeccoverlay] input[name^="cookie-accept"]:checked'),sectionStart:document.querySelector("[data-tdeccoverlay-section-start]"),sectionManage:document.querySelector("[data-tdeccoverlay-section-manage]")}),v=(e=void 0)=>{let t=e?.renderSelector||"[data-tdecc-render]";return{elements:document.querySelectorAll(`${t}:not([data-tdecc-rendered])`),manage:document.querySelectorAll('[href$="#manage-cookies"]')}};var l=()=>{let e=_(r().cookieName)||!1;return e?JSON.parse(e):null},p=()=>l()?.accepted||null,b=e=>{if(!e||!e.length)return!1;let t=p();if(!t)return!1;let o=typeof e=="string"?e.split(""):e;for(let n=0;n<o.length;n+=1)if(o[n].indexOf("cookie-accept-")===-1&&(o[n]=`cookie-accept-${o[n]}`),t.indexOf(o[n])===-1)return!1;return!0};var i=e=>{throw new Error(`TDE Cookieconsent: ${e||"An error has occurred"}`)};var H=(e=void 0,t=void 0)=>`<svg width="${e||24}" height="${t||24}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill-rule="nonzero">
      <path d="M20.586.586l2.828 2.828-20 20-2.828-2.828z"/>
      <path d="M3.414.586L.586 3.414l20 20 2.828-2.828z"/>
    </g>
  </svg>`;var N=(e=void 0,t=void 0)=>`<svg width="${e||25}" height="${t||19}" viewBox="0 0 25 19" xmlns="http://www.w3.org/2000/svg">
    <g fill-rule="nonzero">
      <path d="M22 8v3H.5V8z"/>
      <path d="M13.17 3.08L15.253.92l8.91 8.58-8.91 8.58-2.081-2.16 6.666-6.42z"/>
    </g>
  </svg>`;var P=e=>{if(!e.length)return"";let t="";for(let o=0;o<e.length;o+=1)t+=`<li>
      <a href="${e[o].href}">
        ${N(20,12)}
        <span>${e[o].title}</span>
      </a>
    </li>`;return`<ul class="tdecc__links">${t}</ul>`};var re=(e,t)=>{let o="";for(let n=0;n<e.length;n+=1){let c=n+1;o+=`<div class="tdecc__manage__option">
        <div class="tdecc__manage__option__content">
          <h4 class="tdecc__manage__option__content__title">${e[n].title}</h4>
          <p class="tdecc__manage__option__content__desc">${e[n].desc}</p>
        </div>
        <div class="tdecc__manage__option__radios">
          <input id="tdecc-option-${c}-on" type="radio" name="cookie-accept-${e[n].key}" value="1">
          <input id="tdecc-option-${c}-off" type="radio" name="cookie-accept-${e[n].key}" value="0">
          
          <div class="tdecc__manage__option__radios__labels">
            <label for="tdecc-option-${c}-on">${t.switches.on}</label>
            <label for="tdecc-option-${c}-off">${t.switches.off}</label>
          </div>
        </div>
      </div>`}return`<div class="tdecc__manage__options">${o}</div>`},I=(e,t)=>t?.manageable?typeof e!="object"||!Object.keys(e)?(i("Content not found"),""):t?.consentOptions.length?`<div class="tdecc__manage" data-tdeccoverlay-section-manage>
    <h2 class="tdecc__manage__title">${e.title}</h2>
    <p class="tdecc__manage__desc">${e.desc}</p>
    ${re(t.consentOptions,e)}
    <div class="tdecc__manage__error" data-tdeccoverlay-error>${e.error}</div>
    <div class="tdecc__manage__buttons">
      <button type="button" class="tdecc__button" data-tdeccoverlay-save-all>
        <span>${e.buttons.all}</span>
      </button>
      <button type="button" class="tdecc__button tdecc__button--ghost" data-tdeccoverlay-save>
        <span>${e.buttons.save}</span>
      </button>
    </div>
    <div class="tdecc__manage__footer">${e.footer}</div>
  </div>`:(i("No concentoptions are given"),""):"";var q=(e,t)=>typeof e!="object"||!Object.keys(e)?(i("Given content is not valid"),""):`<div class="tdecc__start" data-tdeccoverlay-section-start>
    <h2 class="tdecc__start__title">${e?.title}</h2>
    <p class="tdecc__start__desc">${e?.desc}</p>

    <div class="tdecc__start__choices">
      ${t.manageable?`
        <button type="button" class="tdecc__button tdecc__button--ghost" data-tdeccoverlay-show-manage>
          <span>${e?.buttons?.manage}</span>
        </button>
      `:""}

      <button type="button" class="tdecc__button" data-tdeccoverlay-save-all>
        <span>${e?.buttons?.accept}</span>
      </button>
    </div>
  </div>`;var ie=()=>{let{content:e}=window.tdecc,{config:t}=window.tdecc;return!e||!e?(i("Content and config not found"),""):`
    <div class="tdecc-content" data-tdeccoverlay data-tdeccoverlay-style-${t.style}>
        <a href="#close" class="tdecc-content__close" data-tdeccoverlay-close-popup>
            ${H()}
        </a>
        ${q(e?.splash,t)}
        ${I(e?.manage,t)}
        ${P(t?.explanationAnchors)}
    </div>`},W=ie;var ae=()=>{switch(r().style){case"popup":return"popup";default:return"bar"}},d=()=>{document.body.className=document.body.className.replace(/\bshow-tdecc-overlay--popup|show-tdecc-overlay--bar|show-tdecc-overlay--closeable|show-tdecc-overlay\b/g,"")},s=(e=void 0)=>{(e||r().exceptionUrls.find(t=>t===window.location.pathname))&&(document.body.className+=` show-tdecc-overlay show-tdecc-overlay--${ae()}`),e&&(document.body.className+=" show-tdecc-overlay--closeable")},J=()=>{let e=document.createElement("div");e.className="tdecc",e.innerHTML=W(),document.body.appendChild(e)},Q=()=>{let e=p(),{wrapper:t}=a();if(!t||!t||!e.length)return;t.querySelectorAll('input[type="radio"]').forEach(n=>{n.value==="0"&&(n.checked=!0)});for(let n=0;n<e.length;n+=1)t.querySelectorAll(`input[name="${e[n]}"][value="1"]`).forEach(h=>{h.checked=!0})},m=()=>{let e=a();e.wrapper&&r().manageable&&(e.sectionStart&&(e.sectionStart.style.display="none"),e.sectionManage&&(e.sectionManage.style.display="block"))};var u=()=>{document.dispatchEvent(new Event("tdecc-changed"))},B=()=>{let{wrapper:e}=a();e&&e.querySelectorAll('input[type="radio"][value="1"]').forEach(t=>{t.checked=!0})},k=(e,t)=>{!e||!t||(D(r().cookieName,JSON.stringify({accepted:e,info:t}),365),window.tdecc.cookies={accepted:e,info:t})},C=()=>{let e=a(),t=["cookie-accept-essential"],o={v:r().version,accepted:l()?.info?.accepted||new Date().toISOString(),updated:new Date().toISOString()};if(e.optionsAll.length/2!==e.optionsChoosen.length){e.errorMessage.style.display="block";return}e.optionsChoosen.forEach(n=>{n.value==="1"&&t.push(n.name)}),k(t,o),u(),d()};var G=()=>{let e=a();e.save&&e.save.addEventListener("click",t=>{t.preventDefault(),C()}),e.saveAll&&e.saveAll.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),B(),C()})}),e.close&&e.close.addEventListener("click",t=>{t.preventDefault(),d()}),e.manage&&e.manage.addEventListener("click",t=>{t.preventDefault(),m()})},T=()=>{let e=v();e.manage&&e.manage.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),s(!0),m()})})};var U=oe(require("postscribe"));var R=()=>{let{content:e}=window.tdecc;return e?`
    <div class="tdecc__notification">
        <h3 class="tdecc__notification__title">${e.notification.title}</h3>
        <p class="tdecc__notification__desc">${e.notification.desc}</p>
        <button class="tdecc__notification__button" onclick="window.tdecc.show();">
            <span>${e.notification.button}</span>
        </button>
    </div>`:(i("Content not found"),"")};var de=()=>Date.now().toString(36)+Math.random().toString(36).substr(2),se=e=>{if(e.dataset.tdeccIdentifier)return;let t=de(),o=R();if(!o)return;let n=document.createElement("div");n.dataset.tdeccIdentifier=t,n.className="tdecc-notification",n.innerHTML=o,e.after(n),e.dataset.tdeccIdentifier=t},le=e=>{let t=e.dataset.tdeccIdentifier;if(!t)return;let o=document.querySelector(`.tdecc-notification[data-tdecc-identifier="${t}"]`);o&&(o.outerHTML="")},pe=()=>{let e=r();v(e).elements.forEach(t=>{if(!t.dataset.tdeccPermissions)return;let o=t.dataset.tdeccPermissions;if(o=o.replace(/\s+/g,""),!b(o.split(","))){t.hasAttribute("data-tdecc-show-notification")&&(se(t),delete t.dataset.tdeccShowNotification);return}le(t);let n=document.createElement("textarea");n.innerHTML=t.innerHTML,(0,U.default)(t.parentElement,n.value),t.dataset.tdeccRendered="1"})},Y=pe;var S=()=>{O(r().cookieName)},V=()=>{let e=l(),t=r(),o=!0;if((!e.info||!e.info.v||e.info.v!==t.version)&&(o=!1),e.accepted||(o=!1),t.exceptionUrls.find(n=>n===window.location.pathname)&&(o=!0),o){window.tdecc.cookies=e,u(),k(e.accepted,e.info);return}S()};window.tdecc=window.tdecc||{};window.tdecc.initialized=!1;window.tdecc.accepted=[];window.tdecc.info={};window.tdecc.content={};var me=()=>({getAllPermissions(){return p()},checkPermission(e){return b(e)},show(){s(!0),m()},hide(){d()},update(){T(),u()},init(e){if(window.tdecc.initialized)return;let t=A(e),o=L(),n=_(t.cookieName)||!1;if(window.tdecc.config=t,window.tdecc.content=o[t.language],window.tdecc.getAllPermissions=this.getAllPermissions,window.tdecc.checkPermission=this.checkPermission,window.tdecc.show=this.show,window.tdecc.hide=this.hide,window.tdecc.update=this.update,document.addEventListener("tdecc-changed",()=>{Y()}),J(),n)try{V(),Q()}catch{S(),s()}else s();G(),T(),window.tdecc.initialized=!0}}),ue=me();