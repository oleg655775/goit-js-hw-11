import{a as u,S as m,i as f}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",h="52501564-22996aafeacde5ce6ab181761";function y(i){const r=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(`${p}?${r}`).then(o=>o.data.hits)}const c=document.querySelector(".gallery"),g=document.querySelector(".loader"),L=new m(".gallery-item .link",{captionsData:"alt",captionDelay:250});function v(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t=0,views:s=0,comments:l=0,downloads:d=0})=>`
      <li class="gallery-item">
        <a class="link" href="${n}">
          <img src="${o}" alt="${e}" class="image" width="400">
        </a>
        <div class="information like">
          <h4>Likes</h4>
          <p>${t}</p>
        </div>
        <div class="information views">
          <h4>Views</h4>
          <p>${s}</p>
        </div>
        <div class="information comments">
          <h4>Comments</h4>
          <p>${l}</p>
        </div>
        <div class="information downloads">
          <h4>Downloads</h4>
          <p>${d}</p>
        </div>
      </li>
  `).join("");c.innerHTML=r,L.refresh()}function w(){c.innerHTML=""}function S(){g.classList.remove("hide")}function $(){const i=document.querySelector(".loader");i.length<0||i.classList.add("hide")}const a=document.querySelector(".form"),b=a.querySelector('[name="search-text"]');a.addEventListener("submit",P);async function P(i){i.preventDefault();const r=b.value.trim();if(r){S(),w();try{const o=await y(r);if(!o.length)throw new Error("No images found!");v(o)}catch(o){f.error({message:o.message,position:"topRight"})}finally{$(),a.reset()}}}
//# sourceMappingURL=index.js.map
