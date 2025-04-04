import{S as u,a as d,i as p}from"./assets/vendor-BjRz3xa9.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),l=document.querySelector(".loader");function f(o){const a=o.map(r=>`<li class="gallery-cart">
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
  </li>`).join("");c.innerHTML=a,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function m(){c.innerHTML=""}function h(){l.classList.remove("hidden")}function y(){l.classList.add("hidden")}function g(o){return d(o).then(a=>a.data).catch(a=>null).finally(()=>y())}const L=document.querySelector(".form");document.querySelector("button");const i=document.querySelector("input"),b="49637256-cb46921c72200043e40baf2ce";L.addEventListener("submit",S);function S(o){o.preventDefault();const a=i.value.trim(),r=`https://pixabay.com/api/?${new URLSearchParams({key:b,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;if(!a)return;h(),m(),i.value="",g(r).then(t=>{t.total===0?p.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):f(t.hits)})}
//# sourceMappingURL=index.js.map
