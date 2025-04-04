import{S as u,a as p,i as d}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),i=document.querySelector(".loader");function f(a){const o=a.map(r=>`<li class="gallery-cart">
      <a href=${r.largeImageURL}>
      <img class="gallery-image" src=${r.webformatURL} alt=${r.tags}></img>
      <div class="stats">
        <span>Like</span>
        <span>Views</span>
        <span>Comments</span>
        <span>Downloads</span>
        <span>${r.likes}</span>
        <span>${r.views}</span>
        <span>${r.comments}</span>
        <span>${r.downloads}</span>
      </div>
      </a>
  </li>`).join("");l.innerHTML=o,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function m(){l.innerHTML=""}function y(){i.classList.remove("hidden"),console.log(i)}function g(a){return p(a).then(o=>o.data).catch(o=>null).finally(()=>void 0)}const h=document.querySelector(".form");document.querySelector("button");const c=document.querySelector("input"),L="49637256-cb46921c72200043e40baf2ce";h.addEventListener("submit",b);function b(a){a.preventDefault();const o=c.value.trim(),r=`https://pixabay.com/api/?${new URLSearchParams({key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:200})}`;if(!o)return;y(),m(),c.value="",g(r).then(t=>{t.total===0?d.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):f(t.hits)})}
//# sourceMappingURL=index.js.map
