import{S as h,i as f,a as L}from"./assets/vendor-2618a76b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const b=document.querySelector("form"),p=document.querySelector(".gallery"),S=document.querySelector(".loader"),n=document.querySelector(".loadBtn");let u=1,v=15;const w=new h(".gallery a",{captionsData:"alt",captionDelay:250}),c={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:u,per_page:v};function d(t){const o=t.map(({webformatURL:s,largeImageURL:l,tags:e,likes:r,views:a,comments:g,downloads:y})=>`<li class="gallery-item">
  <a class="gallery-link" href="${l}">
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
    ${r}
    </li>
    <li class="info-item"><p>Views</p>
    ${a}
    </li>
    <li class="info-item">
    <p>Comments</p>
    ${g}
    </li>
    <li class="info-item"><p>Downloads</p>
    ${y}
    </li>
  </ul> 
	
</li>`).join("");p.insertAdjacentHTML("beforeend",o),document.querySelector(".gallery-link").addEventListener("click",s=>{s.preventDefault()}),w.refresh()}function q(t){c.q=t.replace(/\\s+/g,"+"),m().then(o=>{i(),n.style.display="block",o.hits.length!==0?d(o.hits):(f.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none")}).catch(o=>console.log("Error:",o))}n.addEventListener("click",async()=>{i(),u+=1,c.page=u,await m().then(t=>{if(i(),d(t.hits),t.totalHits<500)return n.style.display="none",f.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});window.scrollBy({left:0,top:515,behavior:"smooth"})}).catch(t=>console.log("Error:",t))});b.addEventListener("submit",t=>{t.preventDefault(),k(),n.style.display="none",t.target.elements.search.value!==""&&(i(),q(t.target.elements.search.value))});async function m(){const t=new URLSearchParams(c);return(await L.get(`https://pixabay.com/api?${t}`)).data}function i(){S.classList.toggle("loader_show")}function k(){p.innerHTML="",c.page=1}
//# sourceMappingURL=commonHelpers.js.map
