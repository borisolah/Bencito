(this.webpackJsonpbencito=this.webpackJsonpbencito||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),a=c(10),s=c.n(a),r=(c(15),c(6)),o=c.p+"static/media/pizza logo.b6438c19.png",l=c(1);function d(){return Object(l.jsx)("div",{style:{background:"#0D0628",padding:"15px 50px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:Object(l.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(l.jsx)("img",{src:o,alt:"pizzalogo",height:"40px"}),Object(l.jsx)("div",{style:{marginLeft:20,fontSize:30,color:"yellow",fontFamily:"Alata,sans-serif"},children:"Pizza Customization"})]})})}var j=c.p+"static/media/BaseCheese.2c5ba8bb.png",h=c.p+"static/media/PizzaBase.b01ddacc.png",b=c.p+"static/media/Olive.0da28a3b.png",p=c.p+"static/media/Pineapple.33c89c63.png",m=c.p+"static/media/Mushroom.8bb1079b.png",x=c.p+"static/media/Basil.5387fca4.png",u=c.p+"static/media/Tomato.ed6f5243.png",O=c(20),g=c(2);function y(e){var t=e.ingredients,c=e.setIngredients,i=Object(g.f)(),n=function(e,i){console.log(localStorage);var n=JSON.parse(JSON.stringify(t));n[i]=e,c(n),localStorage.setItem("ingredients",JSON.stringify(n))};return Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("div",{style:{border:"2px solid black",flex:1},children:Object(l.jsxs)("div",{style:{maxHeight:500,maxWidth:500,position:"relative"},children:[Object(l.jsx)(O.a.div,{initial:{scale:0},animate:{y:t.cheese?100:-100,opacity:t.cheese?1:0,scale:t.cheese?1:0},transition:{duration:.3},className:"ingredients",children:Object(l.jsx)("img",{src:j,alt:"Cheese",height:"100%",width:"100%"})}),Object(l.jsx)(O.a.div,{initial:{opacity:0},animate:{y:t.olive?100:-100,opacity:t.olive?1:0},transition:{duration:1},className:"ingredients",children:Object(l.jsx)("img",{src:b,alt:"Pizza Base",height:"100%",width:"100%"})}),Object(l.jsx)(O.a.div,{initial:{opacity:0},animate:{y:t.pineapple?100:-100,opacity:t.pineapple?1:0},transition:{duration:1},className:"ingredients",children:Object(l.jsx)("img",{src:p,alt:"Pizza Base",height:"100%",width:"100%"})}),Object(l.jsx)(O.a.div,{initial:{opacity:0},animate:{y:t.mushroom?100:-100,opacity:t.mushroom?1:0},transition:{duration:1},className:"ingredients",children:Object(l.jsx)("img",{src:m,alt:"Pizza Base",height:"100%",width:"100%"})}),Object(l.jsxs)(O.a.div,{inital:{opacity:0},animate:{y:t.basil?100:-100,opacity:t.basil?1:0},transition:{duration:1},className:"ingredients",children:[Object(l.jsx)("img",{src:x,alt:"Pizza Base",height:"100%",width:"100%"})," "]}),Object(l.jsx)(O.a.div,{initial:{opacity:0},animate:{y:t.tomato?100:-100,opacity:t.tomato?1:0},transition:{duration:1},className:"ingredients",children:Object(l.jsx)("img",{src:u,alt:"Tomato",height:"100%",width:"100%"})}),Object(l.jsx)(O.a.div,{transition:{duration:1},className:"",children:Object(l.jsx)("img",{src:h,alt:"Pizza Base",height:"100%",width:"100%"})})," "]})}),Object(l.jsxs)("div",{style:{border:"2px solid black",flex:1},children:[Object(l.jsxs)("label",{className:"container-checkbox",children:["Pineapple",Object(l.jsx)("input",{type:"checkbox",checked:t.pineapple,onChange:function(e){return n(e.currentTarget.checked,"pineapple")}}),Object(l.jsx)("span",{className:"checkmark"})]}),Object(l.jsxs)("label",{className:"container-checkbox",children:["Basil",Object(l.jsx)("input",{type:"checkbox",checked:t.basil,onChange:function(e){return n(e.currentTarget.checked,"basil")}}),Object(l.jsx)("span",{className:"checkmark"})]}),Object(l.jsxs)("label",{className:"container-checkbox",children:["Olive",Object(l.jsx)("input",{type:"checkbox",checked:t.olive,onChange:function(e){return n(e.currentTarget.checked,"olive")}}),Object(l.jsx)("span",{className:"checkmark"})]}),Object(l.jsxs)("label",{className:"container-checkbox",children:["Tomato",Object(l.jsx)("input",{type:"checkbox",checked:t.tomato,onChange:function(e){return n(e.currentTarget.checked,"tomato")}}),Object(l.jsx)("span",{className:"checkmark"})]}),Object(l.jsxs)("label",{className:"container-checkbox",children:["Mushroom",Object(l.jsx)("input",{type:"checkbox",checked:t.mushroom,onChange:function(e){return n(e.currentTarget.checked,"mushroom")}}),Object(l.jsx)("span",{className:"checkmark"})]}),Object(l.jsxs)("label",{className:"container-checkbox",children:["Cheese",Object(l.jsx)("input",{type:"checkbox",checked:t.cheese,onChange:function(e){return n(e.currentTarget.checked,"cheese")}}),Object(l.jsx)("span",{className:"checkmark"})]}),Object(l.jsx)("button",{onClick:function(){return i("/checkout")},className:"proceedToCheckout",children:"Proceed to Checkout"})," "]})]})}var k=c.p+"static/media/PizzaMan.c91aed81.png";function f(e){var t=e.ingredients,c=Object(g.f)(),n=Object(i.useState)(!1),a=Object(r.a)(n,2),s=a[0],o=a[1];return Object(l.jsxs)("div",{style:{padding:50,display:"flex"},children:[Object(l.jsx)("div",{style:{flex:1},children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{style:{fontFamily:"Comfortaa"},children:"My Ingredient"}),0===Object.keys(t).reduce((function(e,c){return e+t[c]?1:0}),0)&&Object(l.jsx)("p",{children:"No ingredients Selected"}),Object.keys(t).map((function(e){return t[e]&&Object(l.jsxs)("p",{children:[e[0].toUpperCase(),e.substr(1)]})})),Object(l.jsx)("button",{className:"proceedToCheckout",onClick:function(){return c("/")},children:"Go Back"}),Object(l.jsx)("button",{onClick:function(){return o(!0)},className:"proceedToCheckout",style:{marginLeft:10},children:"Confirm"})]})}),Object(l.jsx)("div",{style:{flex:1},children:s&&Object(l.jsxs)("div",{style:{textAlign:"center"},children:[Object(l.jsx)("img",{src:k,alt:"pizzaman",height:"300px"}),Object(l.jsx)("div",{style:{fontFamily:"Open Sans Condensed",fontSize:35},children:"We have received your order, Thank you"}),Object(l.jsxs)("div",{style:{fontFamily:"Comfortaa"},children:["Order #",Math.round(1e5*Math.random())]}),Object(l.jsx)("div",{style:{fontFamily:"Indie Flower",fontSize:20},children:"Will be ready in 20-30 min."})]})})]})}var v=c(7);var N=function(){var e=Object(i.useState)({basil:!1,cheese:!1,mushroom:!1,olive:!1,pineapple:!1,tomato:!1}),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){var e=localStorage.getItem("ingredients");e&&n(JSON.parse(e))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{}),Object(l.jsx)(v.a,{children:Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{path:"/checkout",element:Object(l.jsx)(f,{ingredients:c})}),Object(l.jsx)(g.a,{path:"/Bencito",element:Object(l.jsx)(y,{ingredients:c,setIngredients:n})})]})})]})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),z()}},[[17,1,2]]]);
//# sourceMappingURL=main.48bfb5c6.chunk.js.map