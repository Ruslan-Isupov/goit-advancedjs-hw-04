import{a as v,S as $,i as l}from"./assets/vendor-Rdv7LHNr.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const A="34886676-216aa5272081537bbb6585f7b";async function y(t,o){return(await v.get(` https://pixabay.com/api/?key=${A}&q=${t}&image_type=photo$orientation=horizontal$safesearch=true&page=${o}&per_page=15`)).data}const b=document.querySelector(".gallery");function m(t){const o=t.hits.map(s=>`
<div class="photo-card">
<a class="gallery__item"  href="${s.largeImageURL}" >
  <img src="${s.webformatURL}" alt="${s.tags}"  />
  </a>
  <div class="info">
  
  <p class="info-item">Likes
  <b>${s.likes}</b>
</p>
<p class="info-item">Views
  <b>${s.views}</b>
</p>
<p class="info-item">Comments
  <b>${s.comments}</b>
</p>
<p class="info-item">Downloads
  <b>${s.downloads}</b>
</p>
  </div>
</div>`).join("");b.insertAdjacentHTML("beforeend",o),new $(".gallery a").refresh()}function p(){b.innerHTML=""}let n=1,d=15;const h=document.querySelector("#search-form"),S=document.querySelector(".loader"),g=document.querySelector(".load-more");let c="";class w{constructor(o){this.loader=o}hide(){this.loader.style.display=""}show(){this.loader.style.display="block"}}const a=new w(g),i=new w(S);h.addEventListener("submit",P);async function P(t){if(t.preventDefault(),c=h.elements.searchQuery.value,c===""){l.warning({title:"Alert",message:"You need to put world for searching",position:"topRight"});return}p();try{i.show(),a.hide(),n>1&&(n=1,d=15);const o=await y(c,n);if(o.total===0)return l.warning({title:"Alert",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.hide(),p();m(o),i.hide(),a.show(),g.addEventListener("click",L)}catch(o){p(),l.warning({title:"Alert",message:o.message,position:"topRight"}),i.hide()}finally{h.reset()}}async function L(){i.show(),a.hide(),n+=1,d+=15;try{console.log("btnafter",c,n);const t=await y(c,n);if(t.totalHits<=d){m(t),console.log("totalHits",t.totalHits),a.hide(),i.hide(),l.warning({title:"Alert",message:error.message,position:"topRight"}),d=15,n=1,g.removeEventListener("click",L);return}m(t),i.hide(),a.show()}catch(t){l.warning({title:"Alert",message:t.message,position:"topRight"}),a.hide(),i.hide()}}
//# sourceMappingURL=index.js.map
