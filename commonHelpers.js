import{S as L,i as f,a as S}from"./assets/vendor-2618a76b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const b=document.querySelector("form"),p=document.querySelector(".gallery"),v=document.querySelector(".loader"),i=document.querySelector(".loadBtn");let c=1,g=15;const w=Math.ceil(500/g),q=new L(".gallery a",{captionsData:"alt",captionDelay:250}),a={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:c,per_page:g};function m(t){const r=t.map(({webformatURL:n,largeImageURL:l,tags:e,likes:o,views:s,comments:y,downloads:h})=>`<li class="gallery-item">
  <a class="gallery-link" href="${l}">
    <img
      class="gallery-image"
      src="${n}"
      data-source=""
      alt="${e}"
    />
		
  </a>
  <ul class="image-info">
    <li class="info-item">
    <p>Likes</p>
    ${o}
    </li>
    <li class="info-item"><p>Views</p>
    ${s}
    </li>
    <li class="info-item">
    <p>Comments</p>
    ${y}
    </li>
    <li class="info-item"><p>Downloads</p>
    ${h}
    </li>
  </ul> 
	
</li>`).join("");p.insertAdjacentHTML("beforeend",r),document.querySelector(".gallery-link").addEventListener("click",n=>{n.preventDefault()}),console.log(document.querySelector(".gallery-item").getBoundingClientRect()),q.refresh()}function k(t){a.q=t.replace(/\\s+/g,"+"),d().then(r=>{u(),i.style.display="block",r.hits.length!==0?m(r.hits):f.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>console.log("Error:",r))}i.addEventListener("click",async()=>{if(u(),a.page>w)return i.style.display="none",f.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});c+=1,a.page=c,console.log(a.page),await d().then(t=>{u(),m(t.hits),window.scrollBy({left:0,top:515,behavior:"smooth"})}).catch(t=>console.log("Error:",t))});b.addEventListener("submit",t=>{t.preventDefault(),$(),i.style.display="none",t.target.elements.search.value!==""&&(u(),k(t.target.elements.search.value))});async function d(){const t=new URLSearchParams(a);return(await S.get(`https://pixabay.com/api?${t}`)).data}function u(){v.classList.toggle("loader_show")}function $(){p.innerHTML="",c=1}
//# sourceMappingURL=commonHelpers.js.map
