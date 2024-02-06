import{S as p,i as m,a as d}from"./assets/vendor-2618a76b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g=document.querySelector("form"),i=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=document.querySelector(".loadBtn");let h=1,b=15;const L=new p(".gallery a",{captionsData:"alt",captionDelay:250}),l={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:h,per_page:b};function S(a){const o=a.map(({webformatURL:s,largeImageURL:r,tags:e,likes:t,views:n,comments:u,downloads:f})=>`<li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${s}"
      data-source=""
      alt="${e}"
    />
		
  </a>
  <ul class="image-info">
    <li class="info-item">
    <p>Likes</p>
    ${t}
    </li>
    <li class="info-item"><p>Views</p>
    ${n}
    </li>
    <li class="info-item">
    <p>Comments</p>
    ${u}
    </li>
    <li class="info-item"><p>Downloads</p>
    ${f}
    </li>
  </ul> 
	
</li>`).join("");i.insertAdjacentHTML("afterbegin",o),document.querySelector(".gallery-link").addEventListener("click",s=>{s.preventDefault()}),L.refresh()}function q(a){l.q=a.replace(/\\s+/g,"+");const o=new URLSearchParams(l);(async()=>(await d.get(`https://pixabay.com/api?${o}`)).data)().then(r=>{c.style.display="none",i.innerHTML="",y.style.display="block",r.hits.length!==0?S(r.hits):m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>console.log("Error:",r))}g.addEventListener("submit",a=>{a.preventDefault(),a.target.elements.search.value!==""&&(c.style.display="inline-block",q(a.target.elements.search.value))});
//# sourceMappingURL=commonHelpers.js.map
