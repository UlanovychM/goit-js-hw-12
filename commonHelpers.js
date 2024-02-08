import{S as y,i as u,a as h}from"./assets/vendor-2618a76b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const L=document.querySelector("form"),f=document.querySelector(".gallery"),b=document.querySelector(".loader"),n=document.querySelector(".loadBtn");let S=15;const v=new y(".gallery a",{captionsData:"alt",captionDelay:250}),c={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page,per_page:S};function p(t){const o=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:a,comments:m,downloads:g})=>`<li class="gallery-item">
  <a class="gallery-link" href="${i}">
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
    ${m}
    </li>
    <li class="info-item"><p>Downloads</p>
    ${g}
    </li>
  </ul> 
	
</li>`).join("");f.insertAdjacentHTML("beforeend",o),document.querySelector(".gallery-link").addEventListener("click",s=>{s.preventDefault()}),v.refresh()}function w(t){c.q=t.replace(/\\s+/g,"+"),d().then(o=>{l(),n.style.display="block",o.hits.length!==0?p(o.hits):(u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none")}).catch(o=>console.log("Error:",o))}n.addEventListener("click",async()=>{l(),c.page+=1,await d().then(t=>{if(l(),p(t.hits),t.totalHits<500)return n.style.display="none",u.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});window.scrollBy({left:0,top:515,behavior:"smooth"})}).catch(t=>console.log("Error:",t))});L.addEventListener("submit",t=>{t.preventDefault(),q(),n.style.display="none",t.target.elements.search.value!==""&&(l(),w(t.target.elements.search.value))});async function d(){const t=new URLSearchParams(c);return(await h.get(`https://pixabay.com/api?${t}`)).data}function l(){b.classList.toggle("loader_show")}function q(){f.innerHTML="",c.page=1}
//# sourceMappingURL=commonHelpers.js.map
