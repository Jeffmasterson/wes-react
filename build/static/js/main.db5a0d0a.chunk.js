(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a.n(s),r=a(22),i=a(38),c=a(9),o=a(12),l=a(13),h=a(15),u=a(14);function d(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function p(e){return e[Math.floor(Math.random()*e.length)]}function j(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(p(e),"-").concat(p(e),"-").concat(p(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var f=a(2),b=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).myInput=n.a.createRef(),e.goToStore=function(t){t.preventDefault();var a=e.myInput.current.value;e.props.history.push("/store/".concat(a))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:"store-selector",onSubmit:this.goToStore,children:[Object(f.jsx)("h2",{children:"Please Enter A Store"}),Object(f.jsx)("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:j()}),Object(f.jsx)("button",{type:"submit",children:"Visit Store \u2192"})]})}}]),a}(n.a.Component),m=b,O=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("h2",{children:"Not Found!!"})})},v=a(16),x=function(e){return Object(f.jsxs)("header",{className:"top",children:[Object(f.jsxs)("h1",{children:["Catch",Object(f.jsxs)("span",{className:"ofThe",children:[Object(f.jsx)("span",{className:"of",children:"Of"}),Object(f.jsx)("span",{className:"the",children:"The"})]}),"Day"]}),Object(f.jsx)("h3",{className:"tagline",children:Object(f.jsx)("span",{children:e.tagline})})]})},g=a(62),y=a(63),w=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).renderOrder=function(t){var a=e.props.fishes[t],s=e.props.order[t],n=a&&"available"===a.status,r={classNames:"order",key:t,timeout:{enter:500,exit:500}};return a?n?Object(f.jsx)(g.a,Object(v.a)(Object(v.a)({},r),{},{children:Object(f.jsx)("li",{children:Object(f.jsxs)("span",{children:[Object(f.jsx)(y.a,{component:"span",className:"count",children:Object(f.jsx)(g.a,{classNames:"count",timeout:{enter:500,exit:500},children:Object(f.jsx)("span",{children:s})},s)}),"lbs ",a.name,d(s*a.price),Object(f.jsx)("button",{onClick:function(){return e.props.removeFromOrder(t)},children:"\xd7"})]})},t)})):Object(f.jsx)(g.a,Object(v.a)(Object(v.a)({},r),{},{children:Object(f.jsxs)("li",{children:["Sorry ",a?a.name:"fish"," is no longer available"]},t)})):null},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var s=e.props.fishes[a],n=e.props.order[a];return s&&"available"===s.status?t+n*s.price:t}),0);return Object(f.jsxs)("div",{className:"order-wrap",children:[Object(f.jsx)("h2",{children:"Order"}),Object(f.jsx)(y.a,{component:"ul",className:"order",children:t.map(this.renderOrder)}),Object(f.jsxs)("div",{className:"total",children:["Total:",Object(f.jsx)("strong",{children:d(a)})]})]})}}]),a}(n.a.Component),S=w,k=a(25),F=a.n(k),C=a(30),N=a(27),I=a(24),R=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).nameRef=n.a.createRef(),e.priceRef=n.a.createRef(),e.statusRef=n.a.createRef(),e.descRef=n.a.createRef(),e.imageRef=n.a.createRef(),e.createFish=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addFish(a),t.currentTarget.reset()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:"fish-edit",onSubmit:this.createFish,children:[Object(f.jsx)("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),Object(f.jsx)("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),Object(f.jsxs)("select",{name:"status",ref:this.statusRef,children:[Object(f.jsx)("option",{value:"available",children:"Fresh!"}),Object(f.jsx)("option",{value:"unavailable",children:"Sold Out!"})]}),Object(f.jsx)("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),Object(f.jsx)("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),Object(f.jsx)("button",{type:"submit",children:"+ Add Fish"})]})}}]),a}(n.a.Component),T=R,A=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleChange=function(t){var a=Object(v.a)(Object(v.a)({},e.props.fish),{},{[t.currentTarget.name]:t.currentTarget.value});e.props.updateFish(e.props.index,a)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"fish-edit",children:[Object(f.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fish.name}),Object(f.jsx)("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.fish.price}),Object(f.jsxs)("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.fish.status,children:[Object(f.jsx)("option",{value:"available",children:"Fresh!"}),Object(f.jsx)("option",{value:"unavailable",children:"Sold Out!"})]}),Object(f.jsx)("textarea",{name:"desc",onChange:this.handleChange,value:this.props.fish.desc}),Object(f.jsx)("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fish.image}),Object(f.jsx)("button",{onClick:function(){return e.props.deleteFish(e.props.index)},children:"Remove Fish"})]})}}]),a}(n.a.Component),D=A,L=function(e){return Object(f.jsxs)("nav",{className:"login",children:[Object(f.jsx)("h2",{children:"Inventory Login"}),Object(f.jsx)("p",{children:"Sign in to manage your store's inventory."}),Object(f.jsx)("button",{className:"github",onClick:function(){return e.authenticate("Github")},children:"Log In With GitHub"}),Object(f.jsx)("button",{className:"twitter",onClick:function(){return e.authenticate("Twitter")},children:"Log In With Twitter"}),Object(f.jsx)("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")},children:"Log In With Facebook"})]})},M=a(37),J=a.n(M),P=(a(54),a(55),a(56),I.a.initializeApp({apiKey:"AIzaSyDjpxzrYeO6HS-LaIU0J_iz4qSymCJCSAI",authDomain:"fish-store-1f62c.firebaseapp.com",databaseURL:"https://fish-store-1f62c-default-rtdb.firebaseio.com"})),W=J.a.createClass(P.database()),z=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={uid:null,owner:null},e.authHandler=function(){var t=Object(C.a)(F.a.mark((function t(a){var s;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.fetch(e.props.storeId,{context:Object(N.a)(e)});case 2:if((s=t.sent).owner){t.next=6;break}return t.next=6,W.post("".concat(e.props.storeId,"/owner"),{data:a.user.uid});case 6:e.setState({uid:a.user.uid,owner:s.owner||a.user.uid});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(t){var a=new(I.a.auth["".concat(t,"AuthProvider")]);P.auth().signInWithPopup(a).then(e.authHandler)},e.logout=Object(C.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.auth().signOut();case 2:e.setState({uid:null});case 3:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;I.a.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){var e=this,t=Object(f.jsx)("button",{onClick:this.logout,children:"Log Out!"});return this.state.uid?this.state.uid!==this.state.owner?Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:"Sorry you are not the owner!"}),t]}):Object(f.jsxs)("div",{className:"inventory",children:[Object(f.jsx)("h2",{children:"Inventory"}),t,Object.keys(this.props.fishes).map((function(t){return Object(f.jsx)(D,{index:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish},t)})),Object(f.jsx)(T,{addFish:this.props.addFish}),Object(f.jsx)("button",{onClick:this.props.loadSampleFishes,children:"Load Sample Fishes"})]}):Object(f.jsx)(L,{authenticate:this.authenticate})}}]),a}(n.a.Component),H=z,U={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},q=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.image,s=t.name,n=t.price,r=t.desc,i="available"===t.status;return Object(f.jsxs)("li",{className:"menu-fish",children:[Object(f.jsx)("img",{src:a,alt:s}),Object(f.jsxs)("h3",{className:"fish-name",children:[s,Object(f.jsx)("span",{className:"price",children:d(n)})]}),Object(f.jsx)("p",{children:r}),Object(f.jsx)("button",{disabled:!i,onClick:function(){return e.props.addToOrder(e.props.index)},children:i?"Add To Order":"Sold Out!"})]})}}]),a}(n.a.Component),B=q,E=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={fishes:{},order:{}},e.addFish=function(t){var a=Object(v.a)({},e.state.fishes);a["fish".concat(Date.now())]=t,e.setState({fishes:a})},e.updateFish=function(t,a){var s=Object(v.a)({},e.state.fishes);s[t]=a,e.setState({fishes:s})},e.deleteFish=function(t){var a=Object(v.a)({},e.state.fishes);a[t]=null,e.setState({fishes:a})},e.loadSampleFishes=function(){e.setState({fishes:U})},e.addToOrder=function(t){var a=Object(v.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.removeFromOrder=function(t){var a=Object(v.a)({},e.state.order);delete a[t],e.setState({order:a})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=W.syncState("".concat(e.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){W.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"catch-of-the-day",children:[Object(f.jsxs)("div",{className:"menu",children:[Object(f.jsx)(x,{tagline:"Fresh Seafood Market"}),Object(f.jsx)("ul",{className:"fishes",children:Object.keys(this.state.fishes).map((function(t){return Object(f.jsx)(B,{index:t,details:e.state.fishes[t],addToOrder:e.addToOrder},t)}))})]}),Object(f.jsx)(S,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),Object(f.jsx)(H,{addFish:this.addFish,updateFish:this.updateFish,deleteFish:this.deleteFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,storeId:this.props.match.params.storeId})]})}}]),a}(n.a.Component),G=E,K=function(){return Object(f.jsx)(i.a,{children:Object(f.jsxs)(c.c,{children:[Object(f.jsx)(c.a,{exact:!0,path:"/",component:m}),Object(f.jsx)(c.a,{exact:!0,path:"/store/:storeId",component:G}),Object(f.jsx)(c.a,{component:O})]})})};a(59);Object(r.render)(Object(f.jsx)(K,{}),document.querySelector("#main"))}},[[60,1,2]]]);
//# sourceMappingURL=main.db5a0d0a.chunk.js.map