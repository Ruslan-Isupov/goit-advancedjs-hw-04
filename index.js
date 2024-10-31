import{a as $,S,i as c}from"./assets/vendor-Rdv7LHNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const A="34886676-216aa5272081537bbb6585f7b";async function y(e,t){return(await $.get(` https://pixabay.com/api/?key=${A}&q=${e}&image_type=photo$orientation=horizontal$safesearch=true&page=${t}&per_page=15`)).data}const w=document.querySelector(".gallery");function p(e){const t=e.hits.map(s=>`
<li class="photo-card">
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
</li>`).join("");w.insertAdjacentHTML("beforeend",t),new S(".gallery a").refresh()}function f(){w.innerHTML=""}let a=1,l=15;const m=document.querySelector("#search-form"),q=document.querySelector(".loader"),g=document.querySelector(".load-more");let d="";class b{constructor(t){this.loader=t}hide(){this.loader.style.display=""}show(){this.loader.style.display="block"}}function L(){const e=document.querySelector(".photo-card");if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}const n=new b(g),i=new b(q);m.addEventListener("submit",P);async function P(e){if(e.preventDefault(),d=m.elements.searchQuery.value,d===""){c.warning({title:"Alert",message:"You need to put world for searching",position:"topRight"});return}f();try{i.show(),n.hide(),a>1&&(a=1,l=15);const t=await y(d,a);if(t.total===0)return c.warning({title:"Alert",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.hide(),f();p(t),L(),i.hide(),n.show(),g.addEventListener("click",v)}catch(t){f(),c.warning({title:"Alert",message:t.message,position:"topRight"}),i.hide()}finally{m.reset()}}async function v(){i.show(),n.hide(),a+=1,l+=15;try{const e=await y(d,a);if(e.totalHits<=l){p(e),n.hide(),i.hide(),c.warning({title:"Alert",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l=15,a=1,g.removeEventListener("click",v);return}p(e),L(),i.hide(),n.show()}catch(e){c.warning({title:"Alert",message:e.message,position:"topRight"}),n.hide(),i.hide()}}
//# sourceMappingURL=index.js.map
