import{a as d,S as m,i as f}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",p="52501564-22996aafeacde5ce6ab181761";function y(r){const o=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get(`${h}?${o}`).then(n=>n.data.hits)}const a=document.querySelector(".gallery"),g=document.querySelector(".loader"),L=new m(".gallery-item .link",{captionsData:"alt",captionDelay:250});function v(r){const o=r.map(({webformatURL:n,largeImageURL:i,tags:e,likes:t=0,views:s=0,comments:l=0,downloads:u=0})=>`
      <li class="gallery-item">
        <a class="link" href="${i}">
          <img src="${n}" alt="${e}" class="image" width="400">
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
          <p>${u}</p>
        </div>
      </li>
  `).join("");a.innerHTML=o,L.refresh()}function w(){a.innerHTML=""}function $(){g.classList.remove("hide")}function b(){const r=document.querySelector(".loader");r.length<0||r.classList.add("hide")}const c=document.querySelector(".form");c.addEventListener("submit",P);function P(r){r.preventDefault();const{["search-text"]:o}=r.target.elements,n=o.value.trim();n.length&&($(),y(n).then(i=>{if(!i.length)throw new Error("No images found!");v(i)}).catch(i=>{w(),f.error({message:i.message,position:"topRight"})}).finally(()=>{b()}),c.reset())}
//# sourceMappingURL=index.js.map
