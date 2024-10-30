import{a as L,S as v}from"./assets/vendor-Kt0AZ5QJ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const w="34886676-216aa5272081537bbb6585f7b";async function y(s,r){return(await L.get(` https://pixabay.com/api/?key=${w}&q=${s}&image_type=photo$orientation=horizontal$safesearch=true&page=${r}&per_page=40`)).data}const g=document.querySelector(".gallery");function h(s){const r=s.hits.map(e=>`
<div class="photo-card">
<a class="gallery__item"  href="${e.largeImageURL}" >
  <img src="${e.webformatURL}" alt="${e.tags}"  />
  </a>
  <div class="info">
  
  <p class="info-item">Likes
  <b>${e.likes}</b>
</p>
<p class="info-item">Views
  <b>${e.views}</b>
</p>
<p class="info-item">Comments
  <b>${e.comments}</b>
</p>
<p class="info-item">Downloads
  <b>${e.downloads}</b>
</p>
  </div>
</div>`).join("");g.insertAdjacentHTML("beforeend",r),new v(".gallery a").refresh()}function u(){g.innerHTML=""}let i=1,n=15;const b=document.querySelector("#search-form");document.querySelector(".gallery");const d=document.querySelector(".loader"),m=document.querySelector(".load-more");a();let f=b.elements.searchQuery;b.addEventListener("submit",q);m.addEventListener("click",$);async function q(s){s.preventDefault(),a(),u(),i>1&&(i=1,n=15);try{let r=f.value;const e=await y(r,i);if(e.total===0||f.value==="")return p(),iziToast.warning({title:"Alert",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u();h(e),p(),n<e.totalHits&&S(),i+=1,n+=15}catch{u(),iziToast.warning({title:"Alert",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}),a()}}async function $(s){try{let r=f.value;const e=await y(r);if(h(e),i+=1,n+=15,n>=e.totalHits)throw new Error(e.status)}catch{iziToast.warning({title:"Alert",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a()}}function a(){m.classList.add("unvisible-button")}function S(){m.classList.remove("unvisible-button")}function p(){d.style.display=d.style.display==="none"||d.style.display===""?"block":"none"}
//# sourceMappingURL=index.js.map
