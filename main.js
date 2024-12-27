const div=document.querySelector(`.div`)

div.innerHTML=taomlar.map(a=>{
   return `
   <div class="box">
    <div class="left">
    <img src="${a.rasm}" alt="${a.name}">
    </div>
    <div class="rigt">
        <div class="namePrice">
            <span class="name">${a.nom}</span>
            <span class="price">${a.narx} so'm</span>
        </div>
        <p class="text">${a.matn}</p>
        <button class="btn">${a.tur}</button>
    </div>
</div>
   `
}).join(``)

const l1=document.querySelector(`.l1`)
const l2=document.querySelector(`.l2`)
const l3=document.querySelector(`.l3`)
const l4=document.querySelector(`.l4`)
const l5=document.querySelector(`.l5`)

l1.addEventListener(`click`,()=>{
   div.innerHTML=taomlar.map(a=>{
      return `
      <div class="box">
       <div class="left">
       <img src="${a.rasm}" alt="${a.name}">
       </div>
       <div class="rigt">
           <div class="namePrice">
               <span class="name">${a.nom}</span>
               <span class="price">${a.narx} so'm</span>
           </div>
           <p class="text">${a.matn}</p>
           <button class="btn">${a.tur}</button>
       </div>
   </div>
      `
   }).join(``)
})
l2.addEventListener(`click`,()=>{
   div.innerHTML=taomlar.filter(l=>{
      return l.tur===`nonushta`
   }).map(a=>{
      return `
      <div class="box">
       <div class="left">
       <img src="${a.rasm}" alt="${a.name}">
       </div>
       <div class="rigt">
           <div class="namePrice">
               <span class="name">${a.nom}</span>
               <span class="price">${a.narx} so'm</span>
           </div>
           <p class="text">${a.matn}</p>
           <button class="btn">${a.tur}</button>
       </div>
   </div>
      `
   }).join(``)
})

l3.addEventListener(`click`,()=>{
   div.innerHTML=taomlar.filter(l=>{
      return l.tur===`tushlik`
   }).map(a=>{
      return `
      <div class="box">
       <div class="left">
       <img src="${a.rasm}" alt="${a.name}">
       </div>
       <div class="rigt">
           <div class="namePrice">
               <span class="name">${a.nom}</span>
               <span class="price">${a.narx} so'm</span>
           </div>
           <p class="text">${a.matn}</p>
           <button class="btn">${a.tur}</button>
       </div>
   </div>
      `
   }).join(``)
})

l4.addEventListener(`click`,()=>{
   div.innerHTML=taomlar.filter(l=>{
      return l.tur===`kechki ovqat`
   }).map(a=>{
      return `
      <div class="box">
       <div class="left">
       <img src="${a.rasm}" alt="${a.name}">
       </div>
       <div class="rigt">
           <div class="namePrice">
               <span class="name">${a.nom}</span>
               <span class="price">${a.narx} so'm</span>
           </div>
           <p class="text">${a.matn}</p>
           <button class="btn">${a.tur}</button>
       </div>
   </div>
      `
   }).join(``)
})
l5.addEventListener(`click`,()=>{
   div.innerHTML=taomlar.filter(l=>{
      return l.tur===`salat`
   }).map(a=>{
      return `
      <div class="box">
       <div class="left">
       <img src="${a.rasm}" alt="${a.name}">
       </div>
       <div class="rigt">
           <div class="namePrice">
               <span class="name">${a.nom}</span>
               <span class="price">${a.narx} so'm</span>
           </div>
           <p class="text">${a.matn}</p>
           <button class="btn">${a.tur}</button>
       </div>
   </div>
      `
   }).join(``)
})