import{r,j as e,i as x,a as h}from"./index-BtdSjDVU.js";const s="/Desafio-Maeztra-Dev/assets/vitrine-Faux-Suede-red-3xCu9Fky.webp",c="/Desafio-Maeztra-Dev/assets/ruched-rose-print-mini-skirt-red-CZDJM15D.webp",D=[{id:1,name:"Faux Suede Mini Skirt",price:500,description:"A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",image:s,colors:["#deab71f4","#995c17","#6497D3","#3C3B79"]},{id:2,name:"Ruched Rose Print Mini Skirt",price:320,description:"A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",image:c,colors:["#1C1A19","#D84E4B","#CFC9B0","#EAE9E5"]},{id:3,name:"Faux Suede Mini Skirt",price:500,description:"A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",image:s,colors:["#DEsC71","#D37164","#6497D3","#3C3B79"]},{id:4,name:"Ruched Rose Print Mini Skirt",price:320,description:"A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",image:c,colors:["#1C1A19","#D84E4B","#CFC9B0","#EAE9E5"]},{id:5,name:"Faux Suede Mini Skirt",price:500,description:"A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",image:s,colors:["#DEAf71","#DEAC71","#6497D3","#3C3B79"]},{id:5,name:"Faux Suede Mini Skirt",price:500,description:"A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",image:s,colors:["#DEAf71","#DEAC71","#6497D3","#3C3B79"]},{id:5,name:"Faux Suede Mini Skirt",price:500,description:"A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",image:s,colors:["#DEAf71","#DEAC71","#6497D3","#3C3B79"]},{id:5,name:"Faux Suede Mini Skirt",price:500,description:"A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",image:s,colors:["#DEAf71","#DEAC71","#6497D3","#3C3B79"]}];function k(){const[n,o]=r.useState([]),i=r.useRef(null);r.useEffect(()=>{o(D)},[]);const l=t=>{t.preventDefault(),i.current&&(i.current.scrollLeft-=i.current.offsetWidth)},u=t=>{t.preventDefault(),i.current&&(i.current.scrollLeft+=i.current.offsetWidth)};return!n||!n.length?null:e.jsx("section",{className:"w-full h-[100vh] mt-[80px] flex  items-center justify-center",children:e.jsxs("div",{className:"h-full container relative flex flex-col justify-center",children:[e.jsx("div",{children:e.jsx("h2",{className:"Titillium-Bold text-[32px] text-center mb-[24px]",children:"As Mais Pedidas"})}),e.jsxs("div",{className:"carousel h-full px-[38px] overflow-hidden",ref:i,children:[n.map(t=>{const{id:d,name:a,price:m,description:f,image:p}=t;return e.jsxs("div",{className:"item overflow-hidden",children:[e.jsx("div",{className:"image",children:e.jsx("img",{src:p,alt:a})}),e.jsxs("div",{className:"info",children:[e.jsx("span",{className:"name",children:a}),e.jsx("span",{className:"description",children:f}),e.jsxs("span",{className:"price",children:["U$ ",m]})]})]},d)}),e.jsxs("div",{className:"mt-auto mb-auto",children:[e.jsx("button",{className:"absolute left-5 top-1/2 transform -translate-y-1/2",onClick:l,children:e.jsx("img",{className:"w-[20px]",src:x,alt:"Scroll Left"})}),e.jsx("button",{className:"absolute right-5 top-1/2 transform -translate-y-1/2",onClick:u,children:e.jsx("img",{className:"w-[20px]",src:h,alt:"Scroll Right"})})]})]})]})})}export{k as default};
