(this.webpackJsonpbencito=this.webpackJsonpbencito||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),a=c(10),s=c.n(a),r=(c(15),c(6)),o=c(1);function l(){return Object(o.jsx)("div",{style:{padding:"10px 50px",background:"black"},children:Object(o.jsx)("div",{style:{color:"white"},children:"Pizza Customization"})})}var d=c.p+"static/media/BaseCheese.2c5ba8bb.png",j=c.p+"static/media/PizzaBase.b01ddacc.png",h=c.p+"static/media/Olive.0da28a3b.png",b=c.p+"static/media/Pineapple.33c89c63.png",p=c.p+"static/media/Mushroom.8bb1079b.png",m=c.p+"static/media/Basil.5387fca4.png",x=c.p+"static/media/Tomato.ed6f5243.png",u=c(20),O=c(2);function g(e){var t=e.ingredients,c=e.setIngredients,i=Object(O.f)(),n=function(e,i){console.log(localStorage);var n=JSON.parse(JSON.stringify(t));n[i]=e,c(n),localStorage.setItem("ingredients",JSON.stringify(n))};return Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsx)("div",{style:{border:"2px solid black",flex:1},children:Object(o.jsxs)("div",{style:{maxHeight:500,maxWidth:500,position:"relative"},children:[Object(o.jsx)(u.a.div,{initial:{scale:0},animate:{y:t.cheese?100:-100,opacity:t.cheese?1:0,scale:t.cheese?1:0},transition:{duration:.3},className:"ingredients",children:Object(o.jsx)("img",{src:d,alt:"Cheese",height:"100%",width:"100%"})}),Object(o.jsx)(u.a.div,{initial:{opacity:0},animate:{y:t.olive?100:-100,opacity:t.olive?1:0},transition:{duration:1},className:"ingredients",children:Object(o.jsx)("img",{src:h,alt:"Pizza Base",height:"100%",width:"100%"})}),Object(o.jsx)(u.a.div,{initial:{opacity:0},animate:{y:t.pineapple?100:-100,opacity:t.pineapple?1:0},transition:{duration:1},className:"ingredients",children:Object(o.jsx)("img",{src:b,alt:"Pizza Base",height:"100%",width:"100%"})}),Object(o.jsx)(u.a.div,{initial:{opacity:0},animate:{y:t.mushroom?100:-100,opacity:t.mushroom?1:0},transition:{duration:1},className:"ingredients",children:Object(o.jsx)("img",{src:p,alt:"Pizza Base",height:"100%",width:"100%"})}),Object(o.jsxs)(u.a.div,{inital:{opacity:0},animate:{y:t.basil?100:-100,opacity:t.basil?1:0},transition:{duration:1},className:"ingredients",children:[Object(o.jsx)("img",{src:m,alt:"Pizza Base",height:"100%",width:"100%"})," "]}),Object(o.jsx)(u.a.div,{initial:{opacity:0},animate:{y:t.tomato?100:-100,opacity:t.tomato?1:0},transition:{duration:1},className:"ingredients",children:Object(o.jsx)("img",{src:x,alt:"Tomato",height:"100%",width:"100%"})}),Object(o.jsx)(u.a.div,{transition:{duration:1},className:"",children:Object(o.jsx)("img",{src:j,alt:"Pizza Base",height:"100%",width:"100%"})})," "]})}),Object(o.jsxs)("div",{style:{border:"2px solid black",flex:1},children:[Object(o.jsxs)("label",{className:"container-checkbox",children:["Pineapple",Object(o.jsx)("input",{type:"checkbox",checked:t.pineapple,onChange:function(e){return n(e.currentTarget.checked,"pineapple")}}),Object(o.jsx)("span",{className:"checkmark"})]}),Object(o.jsxs)("label",{className:"container-checkbox",children:["Basil",Object(o.jsx)("input",{type:"checkbox",checked:t.basil,onChange:function(e){return n(e.currentTarget.checked,"basil")}}),Object(o.jsx)("span",{className:"checkmark"})]}),Object(o.jsxs)("label",{className:"container-checkbox",children:["Olive",Object(o.jsx)("input",{type:"checkbox",checked:t.olive,onChange:function(e){return n(e.currentTarget.checked,"olive")}}),Object(o.jsx)("span",{className:"checkmark"})]}),Object(o.jsxs)("label",{className:"container-checkbox",children:["Tomato",Object(o.jsx)("input",{type:"checkbox",checked:t.tomato,onChange:function(e){return n(e.currentTarget.checked,"tomato")}}),Object(o.jsx)("span",{className:"checkmark"})]}),Object(o.jsxs)("label",{className:"container-checkbox",children:["Mushroom",Object(o.jsx)("input",{type:"checkbox",checked:t.mushroom,onChange:function(e){return n(e.currentTarget.checked,"mushroom")}}),Object(o.jsx)("span",{className:"checkmark"})]}),Object(o.jsxs)("label",{className:"container-checkbox",children:["Cheese",Object(o.jsx)("input",{type:"checkbox",checked:t.cheese,onChange:function(e){return n(e.currentTarget.checked,"cheese")}}),Object(o.jsx)("span",{className:"checkmark"})]}),Object(o.jsx)("button",{onClick:function(){return i("/checkout")},className:"proceedToCheckout",children:"Proceed to Checkout"})," "]})]})}var k=c.p+"static/media/PizzaMan.c91aed81.png";function y(e){var t=e.ingredients,c=Object(O.f)(),n=Object(i.useState)(!1),a=Object(r.a)(n,2),s=a[0],l=a[1];return Object(o.jsxs)("div",{style:{padding:50,display:"flex"},children:[Object(o.jsx)("div",{style:{flex:1},children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{style:{fontFamily:"Comfortaa"},children:"My Ingredient"}),0===Object.keys(t).reduce((function(e,c){return e+t[c]?1:0}),0)&&Object(o.jsx)("p",{children:"No ingredients Selected"}),Object.keys(t).map((function(e){return t[e]&&Object(o.jsxs)("p",{children:[e[0].toUpperCase(),e.substr(1)]})})),Object(o.jsx)("button",{className:"proceedToCheckout",onClick:function(){return c("/")},children:"Go Back"}),Object(o.jsx)("button",{onClick:function(){return l(!0)},className:"proceedToCheckout",style:{marginLeft:10},children:"Confirm"})]})}),Object(o.jsx)("div",{style:{flex:1},children:s&&Object(o.jsxs)("div",{style:{textAlign:"center"},children:[Object(o.jsx)("img",{src:k,alt:"pizzaman",height:"300px"}),Object(o.jsx)("div",{style:{fontFamily:"Open Sans Condensed",fontSize:35},children:"We have received your order, Thank you"}),Object(o.jsxs)("div",{style:{fontFamily:"Comfortaa"},children:["Order #",Math.round(1e5*Math.random())]}),Object(o.jsx)("div",{style:{fontFamily:"Indie Flower",fontSize:20},children:"Will be ready in 20-30 min."})]})})]})}var f=c(7);var v=function(){var e=Object(i.useState)({basil:!1,cheese:!1,mushroom:!1,olive:!1,pineapple:!1,tomato:!1}),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){var e=localStorage.getItem("ingredients");e&&n(JSON.parse(e))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(f.a,{children:Object(o.jsxs)(O.c,{children:[Object(o.jsx)(O.a,{path:"/checkout",element:Object(o.jsx)(y,{ingredients:c})}),Object(o.jsx)(O.a,{path:"/",element:Object(o.jsx)(g,{ingredients:c,setIngredients:n})})]})})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),N()}},[[17,1,2]]]);
//# sourceMappingURL=main.ad2a72ef.chunk.js.map