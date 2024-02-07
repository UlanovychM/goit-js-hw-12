import{S as L,i as f,a as b}from"./assets/vendor-2618a76b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const S=document.querySelector("form"),g=document.querySelector(".gallery"),v=document.querySelector(".loader"),c=document.querySelector(".loadBtn");let u=1,p=15;const w=Math.ceil(500/p),q=new L(".gallery a",{captionsData:"alt",captionDelay:250}),n={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:u,per_page:p};function m(t){const r=t.map(({webformatURL:s,largeImageURL:l,tags:e,likes:o,views:a,comments:y,downloads:h})=>`<li class="gallery-item">
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
    ${o}
    </li>
    <li class="info-item"><p>Views</p>
    ${a}
    </li>
    <li class="info-item">
    <p>Comments</p>
    ${y}
    </li>
    <li class="info-item"><p>Downloads</p>
    ${h}
    </li>
  </ul> 
	
</li>`).join("");g.insertAdjacentHTML("beforeend",r),document.querySelector(".gallery-link").addEventListener("click",s=>{s.preventDefault()}),console.log(document.querySelector(".gallery-item").getBoundingClientRect()),q.refresh()}function k(t){n.q=t.replace(/\\s+/g,"+"),d().then(r=>{g.innerHTML="",i(),c.style.display="block",r.hits.length!==0?m(r.hits):f.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>console.log("Error:",r))}c.addEventListener("click",async()=>{if(i(),n.page>w)return c.style.display="none",f.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});u+=1,n.page=u,console.log(n.page),await d().then(t=>{i(),m(t.hits),window.scrollBy({left:0,top:515,behavior:"smooth"})}).catch(t=>console.log("Error:",t))});S.addEventListener("submit",t=>{t.preventDefault(),t.target.elements.search.value!==""&&(i(),k(t.target.elements.search.value))});async function d(){const t=new URLSearchParams(n);return(await b.get(`https://pixabay.com/api?${t}`)).data}function i(){v.classList.toggle("loader_show")}
//# sourceMappingURL=commonHelpers.js.map
