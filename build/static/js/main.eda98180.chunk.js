(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{47:function(e,t,a){},50:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(17),r=a.n(c),i=(a(47),a(48),a(3)),o=a(4),l=a.n(o),d=a(6),u=a(10),j=(a(50),a(8)),b=a.n(j),m="/users/create",p="/users/login",h="/products/create",O="/products/list-products",x="/uploads/",g="/categories/list",f="/products/delete/",v="/categories/",N="/products/filter-products",y="/cart/add",w="/cart/cart_quantity",C="/cart/increase/",k="/cart/decrease/",S="/order/create",L="/order/create-address",q="/order/get-address",I="/order/create-payment-intent",R=a(5),z=a(1);var F=function(e){for(var t=e.length,a=e.className,s=e.grow,n=e.size,c=[],r=0;r<t;r++)c.push(Object(z.jsx)(R.f,{size:n,grow:s,role:"status",tag:"span",className:a},r));return c};var A=function(e){var t=e.handleSubmitLogin,a=e.userLog,s=e.handleUserLogChange,n=e.handleDisableLogin,c=e.handleRegister,r=e.loading;return Object(z.jsxs)("div",{className:"login-form",children:[Object(z.jsx)("h3",{children:"LOG IN YOUR CREDENTIALS"}),Object(z.jsxs)(R.g,{onSubmit:t,children:[Object(z.jsx)(R.d,{value:a.email,onChange:s,name:"email",className:"mt-3",label:"Email...",id:"email",type:"text"}),Object(z.jsx)(R.d,{value:a.password,onChange:s,name:"password",className:"mt-3 mb-3",label:"Password...",id:"password",type:"password"}),Object(z.jsx)("div",{className:"d-grid gap-2",children:Object(z.jsxs)(R.b,{disabled:n(),type:"submit",color:"primary",children:["log in",r&&Object(z.jsx)(F,{length:4,grow:!0,className:"ms-2",size:"sm"})]})}),Object(z.jsx)("div",{className:"text-helper",children:Object(z.jsxs)("p",{children:["Are you a new user? ",Object(z.jsx)("span",{onClick:c,children:"register"})]})})]})]})};var T=function(e){var t=e.handleSubmit,a=e.errors,s=e.userReg,n=e.handleRegisterChange,c=e.handleLogin,r=e.handleGender,i=e.handleDisableRegister,o=e.loading;return Object(z.jsxs)("div",{className:"registration-form",children:[Object(z.jsx)("h3",{children:"REGISTER YOUR CREDENTIALS"}),Object(z.jsxs)(R.g,{onSubmit:t,children:[Object(z.jsx)(R.d,{className:a.email?"is-invalid mt-3":"mt-3",value:s.email,onChange:n,name:"email",id:"validationCustom01",label:"Email...",required:!0,type:"text"}),a.email&&Object(z.jsx)("span",{style:{color:"red",marginBottom:"5px"},children:a.email}),Object(z.jsx)(R.d,{value:s.password1,onChange:n,className:"mt-3 mb-3",name:"password1",label:"Password...",id:"password",type:"password"}),Object(z.jsx)(R.d,{value:s.password2,onChange:n,name:"password2",className:"mt-3 mb-3",label:"confirm password",id:"password2",type:"password"}),Object(z.jsx)(R.d,{value:s.firstName,onChange:n,name:"firstName",className:"mt-3 mb-3",label:"First Name",id:"firstName",type:"text"}),Object(z.jsx)(R.d,{value:s.lastName,onChange:n,name:"lastName",className:"mt-3 mb-3",label:"Last Name",id:"lastName",type:"text"}),Object(z.jsxs)("div",{className:"mt-3 d-flex justify-content-center align-items-center",children:[Object(z.jsx)(R.e,{name:"inlineRadio",id:"inlineRadio1",value:"Male",label:"Male",onChange:r,inline:!0}),Object(z.jsx)(R.e,{name:"inlineRadio",id:"inlineRadio2",value:"Female",label:"Female",onChange:r,inline:!0})]}),Object(z.jsx)("div",{className:"d-grid gap-2",children:Object(z.jsxs)(R.b,{disabled:i(),type:"submit",color:"success",children:["Register",o&&Object(z.jsx)(F,{className:"ms-4",length:4,size:"sm",grow:!0})]})}),Object(z.jsx)("div",{className:"text-helper",children:Object(z.jsxs)("p",{children:["Are you registered? ",Object(z.jsx)("span",{onClick:c,children:"login"})]})})]})]})},D=a(16),P=function(e){var t=e.history,a=Object(s.useState)({userReg:{email:"",password1:"",password2:"",firstName:"",lastName:""},userLog:{email:"",password:""},loading:!1,errors:{},gender:""}),c=Object(u.a)(a,2),r=c[0],o=c[1],j=function(){var e=Object(d.a)(l.a.mark((function e(a){var s,n,c,d,u,j,p,h,O;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),o(Object(i.a)(Object(i.a)({},r),{},{loading:!0})),s=r.userReg,n=s.email,c=s.firstName,d=s.lastName,u=s.password1,j=s.password2,p={email:n.toLowerCase(),firstName:c,lastName:d,password:u,password2:j,gender:r.gender},e.prev=4,e.next=7,b.a.post(m,p);case 7:return h=e.sent,e.next=10,localStorage.setItem("token",h.data.token);case 10:setTimeout((function(){o(Object(i.a)(Object(i.a)({},r),{},{loading:!1})),t.push("/home",{message:"Your registration has been succesful"})}),3e3),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(4),(O=Object(i.a)({},r.errors)).email=e.t0.response.data.message,o((function(e){return Object(i.a)(Object(i.a)({},e),{},{userReg:{password1:"",password2:""},errors:O,loading:!1})})),console.log(e.t0.response.data);case 19:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,s,n,c,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),o(Object(i.a)(Object(i.a)({},r),{},{loading:!0})),a=r.userLog,s=a.email,n=a.password,c={email:s.toLowerCase(),password:n},e.prev=4,e.next=7,b.a.post(p,c);case 7:d=e.sent,localStorage.setItem("token",d.data.user.token),setTimeout((function(){o(Object(i.a)(Object(i.a)({},r),{},{loading:!1})),window.location.href="/home"}),3e3),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(4),o(Object(i.a)(Object(i.a)({},r),{},{loading:!1})),D.b.error(e.t0.response.data.message),console.log(e.t0.response.data);case 17:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),O=r.userReg,x=r.userLog,g=r.errors,f=r.loading;return Object(z.jsx)(n.a.Fragment,{children:Object(z.jsx)("div",{className:"main-page",children:Object(z.jsxs)("div",{className:"divided-page",children:[Object(z.jsx)("div",{className:"background-page",children:Object(z.jsx)("img",{src:"static/images/account.svg",alt:"my svg"})}),Object(z.jsxs)("div",{className:"account-page",children:[Object(z.jsx)("h5",{children:"My Account Data Page"}),Object(z.jsxs)("div",{className:"text-account",children:[Object(z.jsx)("div",{className:"login-section",children:Object(z.jsx)(A,{handleSubmitLogin:h,userLog:x,handleUserLogChange:function(e){var t=e.target,a=t.name,s=t.value,n=Object(i.a)({},r.userLog);n[a]=s,o((function(e){return Object(i.a)(Object(i.a)({},e),{},{userLog:n})}))},handleDisableLogin:function(){return""===r.userLog.email||""===r.userLog.password||r.loading},handleRegister:function(){var e=document.querySelector(".registration-section"),t=document.querySelector(".login-section");e.classList.add("show"),t.classList.add("close")},loading:f})}),Object(z.jsx)("div",{className:"registration-section",children:Object(z.jsx)(T,{handleSubmit:j,errors:g,handleRegisterChange:function(e){var t=e.target,a=t.name,s=t.value,n=Object(i.a)({},r.userReg);n[a]=s,o((function(e){return Object(i.a)(Object(i.a)({},e),{},{userReg:n})}))},handleLogin:function(){var e=document.querySelector(".registration-section"),t=document.querySelector(".login-section");e.classList.contains("show")&&e.classList.remove("show"),t.classList.remove("close")},handleGender:function(e){o(Object(i.a)(Object(i.a)({},r),{},{gender:e.target.value}))},userReg:O,handleDisableRegister:function(){var e=r.userReg,t=e.firstName,a=e.lastName,s=e.email,n=e.password1,c=e.password2;return""===t||""===a||""===s||""===n||""===c||""===r.gender||r.loading},loading:f})})]})]})]})})})},E=a(7),J=a(39),B=["component"];var U=function(e){var t=e.component,a=Object(J.a)(e,B),s=localStorage.getItem("token");return Object(z.jsx)(E.b,Object(i.a)({render:function(e){return s?Object(z.jsx)(t,Object(i.a)({},e)):Object(z.jsx)(E.a,{to:"/login"})}},a))};var W=Object(E.g)((function(e){var t=e.user,a=e.history;return Object(z.jsxs)("header",{children:[Object(z.jsx)("div",{className:"my-nav",children:Object(z.jsx)("img",{src:"https://images.unsplash.com/photo-1525673812761-4e0d45adc0cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmljZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",alt:"grand"})}),Object(z.jsx)("nav",{className:"my-second-nav",children:Object(z.jsxs)("ul",{children:[Object(z.jsx)("li",{children:"Section stop"}),Object(z.jsx)("li",{children:"Housing"}),Object(z.jsx)("li",{children:"Event"})]})}),Object(z.jsx)("div",{className:"third-nav",children:Object(z.jsxs)("ul",{children:[Object(z.jsxs)("li",{children:["Welcome (",t.firstName,")"]}),t.admin&&Object(z.jsxs)("li",{onClick:function(){return a.push("/create-product")},children:[" ",Object(z.jsx)("i",{className:"fas fa-plus-square"})," Add product"]}),Object(z.jsx)("li",{children:"Profile"}),Object(z.jsx)("li",{children:"Account settings"}),Object(z.jsx)("li",{onClick:function(){localStorage.removeItem("token"),a.push("/login")},children:"Logout"})]})})]})})),$=a(21),_=a(15),M=n.a.createContext(!0);var Y=Object(E.g)((function(e){var t=e.closeButton,a=e.history;return Object(z.jsx)(n.a.Fragment,{children:Object(z.jsx)("div",{className:"container-fluid",children:Object(z.jsx)("div",{className:"d-flex  h-100 justify-content-center align-items-center",children:Object(z.jsx)("div",{className:"card w-45 h-45",children:Object(z.jsxs)("div",{className:"card-body",children:[Object(z.jsx)("div",{onClick:t,className:"position-absolute top-0 end-0 me-3 p-1 pointer",children:Object(z.jsx)("i",{className:"fas fa-times"})}),Object(z.jsx)("p",{className:"text-center text-black-50 py-4",children:Object(z.jsx)("strong",{children:"Item has been added to cart"})}),Object(z.jsxs)("div",{className:"d-grid ",children:[Object(z.jsx)("button",{onClick:function(){return a.push("/cart")},className:"btn btn-success",children:"view cart"}),Object(z.jsx)("br",{}),Object(z.jsx)("button",{className:"btn btn-warning",children:"continue shopping"})]})]})})})})})}));var G=function(e){var t=Object(s.useState)({products:[],loading:!1,filterOption:"",selectedCategory:""}),a=Object(u.a)(t,2),c=a[0],r=a[1],o=n.a.useContext(M),j=o.category,m=o.getUserCart,p=o.quantity,h=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(f+t);case 3:setTimeout((function(){window.location.reload()}),1500),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.response.data);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){w(),m()}),[]);var g,w=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(Object(i.a)(Object(i.a)({},c),{},{loading:!0})),e.prev=1,e.next=4,b.a.get(O);case 4:t=e.sent,a=t.data.products,console.log(a),r(Object(i.a)(Object(i.a)({},c),{},{products:a,loading:!1})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(Object(i.a)(Object(i.a)({},c),{},{loading:!0})),e.prev=1,e.next=4,b.a.get(v+t);case 4:a=e.sent,setTimeout((function(){var e;r(Object(i.a)(Object(i.a)({},c),{},{products:null===(e=a.data)||void 0===e?void 0:e.products,loading:!1}))}),2e3),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,r(Object(i.a)(Object(i.a)({},c),{},{loading:!0})),s={filterValue:a},e.prev=3,e.next=6,b.a.post(N,s);case 6:n=e.sent,setTimeout((function(){r(Object(i.a)(Object(i.a)({},c),{},{loading:!1,products:n.data}))}),2e3),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=e.target.value,a=JSON.parse(t).name,s=JSON.parse(t).slug;r((function(e){return Object(i.a)(Object(i.a)({},e),{},{selectedCategory:a})})),C(s)},L=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.querySelector(".my-center"),s=localStorage.getItem("token"),n={productId:t},e.prev=3,e.next=6,b.a.post(y,n,{headers:{Authorization:"JWT ".concat(s)}});case 6:a.classList.add("open"),m(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return c.loading?Object(z.jsxs)("div",{className:"loading",children:[Object(z.jsx)("h4",{children:"Loading..."}),Object(z.jsx)("div",{className:"spinner-side",children:Object(z.jsx)(F,{className:"me-3",length:4,size:"lg",grow:!0,tag:"span"})})]}):Object(z.jsxs)(n.a.Fragment,{children:[Object(z.jsx)("div",{className:"my-center",children:Object(z.jsx)(Y,{closeButton:function(){var e=document.querySelector(".my-center");e.classList.contains("open")&&e.classList.remove("open")}})}),Object(z.jsxs)("div",{className:"d-flex justify-content-center align-items-center mt-3",children:[Object(z.jsx)(R.b,{onClick:w,size:"sm",type:"button",color:"primary",children:"All products"}),Object(z.jsxs)("select",{onChange:function(e){var t=e.target.value;r(Object(i.a)(Object(i.a)({},c),{},{filterOption:t}))},defaultValue:c.filterOption,className:"form-select my-width ms-3",children:[Object(z.jsx)("option",{value:"",children:"Filter products by"}),Object(z.jsx)("option",{value:"Category",children:"Category"}),Object(z.jsx)("option",{value:"Price",children:"Price"})]}),function(e){if(""!==e)return"Category"===e?Object(z.jsxs)("select",{defaultValue:c.selectedCategory,onChange:S,className:"form-select ms-3 my-width",children:[Object(z.jsx)("option",{value:""}),";",j.map((function(e){return Object(z.jsx)("option",{value:JSON.stringify(e),children:e.name},e.id)}))]}):Object(z.jsxs)("select",{onChange:k,className:"form-select ms-3 my-width",children:[Object(z.jsx)("option",{value:""}),Object(z.jsx)("option",{value:1,children:"less than $50"}),Object(z.jsx)("option",{value:2,children:"between $50 and $200"}),Object(z.jsx)("option",{value:3,children:"greater than $200"})]})}(c.filterOption),Object(z.jsx)("div",{className:"cart-section flex-grow-0 ms-4",children:Object(z.jsxs)(_.b,{to:"/cart",children:[Object(z.jsx)(R.c,{fas:!0,icon:"shopping-cart",size:"2x"}),Object(z.jsx)(R.a,{className:"fs-5",color:"danger",notification:!0,pill:!0,children:p})]})})]}),Object(z.jsx)("hr",{}),Object(z.jsx)("div",{className:"mt-5",children:(g=c.products,(null===g||void 0===g?void 0:g.length)>0?Object(z.jsx)("div",{className:"container-fluid",children:Object(z.jsx)("div",{className:"row m-auto",children:g.map((function(t){return Object(z.jsx)("div",{className:"col-12 col-md-3",children:Object(z.jsxs)("div",{className:"card",children:[Object(z.jsx)("img",{src:x+t.image,className:"card-img-top",alt:"product"}),Object(z.jsx)("div",{className:"card-header",children:Object(z.jsxs)("h4",{className:"text-center",children:[t.name," ",Object(z.jsx)(R.a,{onClick:function(){return C(t.Category.slug)},style:{cursor:"pointer"},className:"ms-4",pill:!0,color:"black",children:t.Category.name})]})}),Object(z.jsxs)("div",{className:"card-body",children:[Object(z.jsx)("p",{className:"card-text",children:(a=t.description,a.substring(0,50)+"...")}),Object(z.jsxs)("p",{className:"float-end text-black-200 bolder-text",children:["$",t.price]}),Object(z.jsx)("br",{}),Object(z.jsxs)("div",{className:"d-grid gap-2",children:[Object(z.jsxs)("button",{onClick:function(){return L(t.id)},className:"btn btn-warning",children:[Object(z.jsx)("i",{style:{fontSize:"15px",marginRight:"10px"},className:"fas fa-shopping-cart"}),"add to cart"]}),e.user.admin&&Object(z.jsxs)("button",{type:"button",onClick:function(){return h(t.slug)},className:"btn btn-danger",children:[Object(z.jsx)("i",{style:{fontSize:"15px",marginRight:"10px"},className:"fas fa-trash-alt"}),"delete product"]})]})]})]})},t.id);var a}))})}):Object(z.jsx)("div",{className:"d-flex w-100 my-height justify-content-center align-items-center",children:Object(z.jsxs)("div",{className:"text-center d-flex flex-column align-items-center justify-content-center",children:[Object(z.jsx)("i",{style:{fontSize:"60px",fontWeight:"bold"},className:"fas fa-code"}),Object(z.jsx)("h5",{children:"You have no products currently to show"})]})}))})]})};var V=function(e){var t=localStorage.getItem("token"),a=Object($.a)(t),c=e.location.state;return setTimeout((function(){c=""}),3e3),Object(s.useEffect)((function(){c&&D.b.success(c.message)}),[c]),Object(z.jsxs)(n.a.Fragment,{children:[Object(z.jsx)(W,{user:a}),Object(z.jsx)(G,{user:a})]})};var X=Object(E.g)((function(e){var t=e.history,a=e.category,c=Object(s.useState)({product:{name:"",description:"",stock:"",price:""},loading:!1,errors:{},productsValue:[""],categoryId:""}),r=Object(u.a)(c,2),o=r[0],j=r[1],m=Object(s.useState)(""),p=Object(u.a)(m,2),O=p[0],x=p[1],g=function(e){var t=e.target,a=t.name,s=t.value,n=Object(i.a)({},o.product);n[a]=s,j(Object(i.a)(Object(i.a)({},o),{},{product:n}))},f=function(){var e=Object(d.a)(l.a.mark((function e(a){var s,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),j(Object(i.a)(Object(i.a)({},o),{},{loading:!0})),s=o.product,""!==o.categoryId){e.next=7;break}return alert("category must be selected"),j(Object(i.a)(Object(i.a)({},o),{},{loading:!1})),e.abrupt("return");case 7:return(n=new FormData).append("name",s.name),n.append("stock",Number(s.stock)),n.append("price",Number(s.price)),n.append("description",s.description),n.append("CategoryId",o.categoryId),n.append("image",O,O.name),e.prev=14,e.next=17,b.a.post(h,n,{headers:{Content_Type:"multipart/form-data"}});case 17:c=e.sent,console.log(c),setTimeout((function(){j(Object(i.a)(Object(i.a)({},o),{},{loading:!1})),t.push("/home",{message:c.data.message})}),3e3),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(14),console.log(e.t0.response.data);case 25:case"end":return e.stop()}}),e,null,[[14,22]])})));return function(t){return e.apply(this,arguments)}}(),v=o.product,N=o.loading,y=o.errors;return Object(z.jsx)(n.a.Fragment,{children:Object(z.jsx)("div",{className:"container w-100 mt-5 text-center d-flex justify-content-center align-items-center",children:Object(z.jsxs)("div",{className:"col-12 col-md-6",children:[Object(z.jsx)("h4",{children:"Create your product"}),Object(z.jsx)("div",{className:"form-input",children:Object(z.jsxs)("form",{onSubmit:f,className:"form-group",children:[Object(z.jsx)(R.d,{onChange:g,name:"name",value:v.name,type:"text",label:"Product Name",required:!0,className:"mt-3"}),Object(z.jsx)(R.d,{onChange:g,name:"price",type:"number",required:!0,value:v.price,label:"Product Price",className:"mt-3"}),Object(z.jsx)(R.d,{onChange:g,name:"stock",type:"number",required:!0,value:v.stock,label:"Product stock",className:"mt-3"}),Object(z.jsx)(R.d,{type:"text",label:"Product description",textarea:!0,value:v.description,name:"description",onChange:g,rows:4,required:!0,className:"mt-3"}),Object(z.jsxs)("select",{onChange:function(e){j(Object(i.a)(Object(i.a)({},o),{},{categoryId:e.target.value}))},className:"form-select mt-3",defaultValue:o.categoryId,children:[Object(z.jsx)("option",{value:"",children:"select category"}),a.map((function(e){return Object(z.jsx)("option",{value:e.id,children:e.name},e.slug)}))]}),Object(z.jsx)("label",{className:"form-label mt-3",htmlFor:"customeFile",children:"Product Image"}),Object(z.jsx)("input",{required:!0,className:"form-control mt-2",type:"file",onChange:function(e){if(void 0!==e.target.files[0]||null===e.target.files[0]){x(e.target.files[0]);var t=e.target.files[0].type,a=["image/jpeg","image/png"].indexOf(t),s=Object(i.a)({},o.errors);-1===a?s.image="Only image extension is allowed":delete s.image,j(Object(i.a)(Object(i.a)({},o),{},{errors:s}))}},id:"customFile"}),(null===y||void 0===y?void 0:y.image)&&Object(z.jsx)("span",{style:{color:"red"},children:y.image}),Object(z.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(z.jsxs)(R.b,{disabled:N,type:"submit",size:"lg",color:"success",children:["Create product",N&&Object(z.jsx)(F,{className:"ms-4",length:4,grow:!0,size:"sm",tag:"span"})]})}),Object(z.jsx)("div",{onClick:function(){return t.replace("/home")},className:"d-grid gap-2 mt-3",children:Object(z.jsxs)(R.b,{type:"button",size:"lg",color:"black",children:[Object(z.jsx)("i",{style:{marginRight:"20px"},className:"fas fa-arrow-left"}),"Go back"]})})]})})]})})})}));var Z=Object(E.g)((function(e){var t=e.history,a=n.a.useContext(M),s=a.userCart,c=a.increaseCart,r=a.decreaseCart;return Object(z.jsx)(n.a.Fragment,{children:s.length>0?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("div",{className:"main-cart-page",children:[Object(z.jsx)("h4",{className:"text-center bolder",children:"Your Shopping Cart"}),Object(z.jsxs)("div",{className:"product-details",children:[Object(z.jsxs)("div",{className:"product-page",children:[Object(z.jsx)("h4",{children:"Product Name"}),s.map((function(e){var t;return Object(z.jsx)(n.a.Fragment,{children:Object(z.jsx)("h5",{children:null===(t=e.product)||void 0===t?void 0:t.name})},e.id)}))]}),Object(z.jsxs)("div",{className:"product-quantity",children:[Object(z.jsx)("h4",{children:"product quantity"}),s.map((function(e){return Object(z.jsx)(n.a.Fragment,{children:Object(z.jsxs)("div",{className:"quantity-product",children:[Object(z.jsx)("div",{className:"my-button",children:Object(z.jsx)("button",{onClick:function(){return r(e.id)},className:"first-button",children:Object(z.jsx)("i",{className:"fas fa-minus"})})}),Object(z.jsx)("h5",{children:e.quantity}),Object(z.jsx)("div",{onClick:function(){return c(e.id)},className:"my-button",children:Object(z.jsx)("button",{className:"first-button",children:Object(z.jsx)("i",{className:"fas fa-plus"})})})]})},e.id)}))]}),Object(z.jsxs)("div",{className:"product-price",children:[Object(z.jsx)("h4",{children:"product price"}),s.map((function(e){var t;return Object(z.jsx)(n.a.Fragment,{children:Object(z.jsxs)("h5",{children:["$",null===(t=e.product)||void 0===t?void 0:t.price]})},e.id)}))]}),Object(z.jsxs)("div",{className:"sub-total",children:[Object(z.jsx)("h4",{children:"Sub Total"}),s.map((function(e){var t;return Object(z.jsx)(n.a.Fragment,{children:Object(z.jsxs)("h4",{className:"text-black",children:["$",(null===(t=e.product)||void 0===t?void 0:t.price)*e.quantity]})},e.id)})),Object(z.jsx)("div",{className:"total-page",children:Object(z.jsx)("h4",{children:function(){var e=0;return s.map((function(t){var a;e+=(null===(a=t.product)||void 0===a?void 0:a.price)*t.quantity})),"$".concat(e)}()})})]})]})]}),Object(z.jsxs)("div",{className:"order-detail",children:[Object(z.jsx)("button",{onClick:function(){return t.push("/home")},className:"btn btn-warning",children:"Continue shopping"}),Object(z.jsx)("button",{onClick:function(){return t.push("/order-page")},className:"btn btn-success",children:"Checkout"})]})," "]}):Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("div",{className:"d-flex vh-100 flex-column justify-content-center align-items-center mx-auto text-center",children:[Object(z.jsx)("i",{style:{fontSize:"30px",marginBottom:"20px"},className:"fas fa-shopping-cart"}),Object(z.jsx)("h4",{className:"mb-4 ",children:"Your shopping cart is empty"}),Object(z.jsx)("button",{onClick:function(){return t.push("/home")},className:"btn btn-warning",children:"continue shopping"})]})})})})),H=a(38),K=a(19);var Q=function(e){var t=Object(K.useStripe)(),a=Object(K.useElements)(),n=Object(s.useState)(!1),c=Object(u.a)(n,2),r=c[0],i=c[1],o=Object(s.useState)(!1),j=Object(u.a)(o,2),b=j[0],m=j[1];Object(s.useEffect)((function(){console.log(window.location);new URLSearchParams(window.location.search).get("payment_intent_client_secret")}),[t]);var p=function(){var e=Object(d.a)(l.a.mark((function e(s){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),t&&a){e.next=3;break}return e.abrupt("return");case 3:return i(!0),e.next=6,t.confirmPayment({elements:a,confirmParams:{return_url:"http://localhost:3000/payment/successful"}});case 6:n=e.sent,"card_error"===(c=n.error).type||"validation_error"===c.type?m(c.message):m("An unexpected error occured."),i(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsx)("div",{children:Object(z.jsxs)("form",{id:"payment-form",onSubmit:p,children:[Object(z.jsx)(K.PaymentElement,{id:"payment-element"}),Object(z.jsx)("button",{disabled:r||!t||!a,id:"submit",children:Object(z.jsx)("span",{id:"button-text",children:r?Object(z.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})}),b&&Object(z.jsx)("div",{id:"payment-message",children:b})]})})},ee=Object(H.a)("pk_test_51JnsD9LTs9CoXxdPAJujbIZugH424v04e1Q1brLNavLcoaLX1Gck02VZhKTnsluNg9XiuBGCOLwIuYxe1cAUznSs00WXwsu3pb");var te=function(e){var t,a,c=e.history,r=Object(s.useState)(""),i=Object(u.a)(r,2),o=i[0],j=i[1],m=n.a.useContext(M),p=m.handleAddressChange,h=m.addressOption,O=m.createOrderItem,x=m.handleAddressSubmit,g=m.address,f=m.userCart,v=m.loading,N=m.getUserAddress;Object(s.useEffect)((function(){O(),N(),y()}),[]);var y=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={total:f},e.prev=1,e.next=4,b.a.post(I,t);case 4:a=e.sent,console.log(a),j(a.data.clientSecret),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),w={clientSecret:o,appearance:{theme:"night"}};return Object(z.jsx)(n.a.Fragment,{children:Object(z.jsxs)("div",{className:"order-page",children:[g&&null!==g?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("div",{className:"card w-75 ",children:[Object(z.jsx)("div",{className:"card-header bg-success text-white",children:Object(z.jsx)("h5",{className:"text-center",children:"Your address detail"})}),Object(z.jsx)("div",{className:"card-body",children:Object(z.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[Object(z.jsxs)("h5",{className:"mt-4",children:["Full Name :"," ",Object(z.jsx)("strong",{children:(null===(t=g.user)||void 0===t?void 0:t.firstName)+" "+(null===(a=g.user)||void 0===a?void 0:a.lastName)})]}),Object(z.jsxs)("h5",{className:"mt-4",children:["Address : ",Object(z.jsx)("strong",{children:g.address})]}),Object(z.jsxs)("h5",{className:"mt-4",children:["City : ",Object(z.jsx)("strong",{children:g.city})]}),Object(z.jsxs)("h5",{className:"mt-4",children:["State : ",Object(z.jsx)("strong",{children:g.state})]}),Object(z.jsxs)("h5",{className:"mt-4",children:["Zip-code : ",Object(z.jsx)("strong",{children:g.zipCode})]}),Object(z.jsxs)("h5",{className:"mt-4",children:["Phone number : ",Object(z.jsx)("strong",{children:g.phoneNumber})]})]})}),Object(z.jsx)("div",{className:"d-grid gap-2 mt-4",children:Object(z.jsxs)("button",{onClick:function(){return c.push("/home")},className:"btn btn-primary",children:[Object(z.jsx)("i",{style:{fontSize:"15px",marginRight:"18px"},className:"fas fa-arrow-left"}),"continue shopping"]})})]}),Object(z.jsx)("div",{className:"border-with"})]}):Object(z.jsxs)("div",{className:"address-page",children:[Object(z.jsx)("h4",{children:"Billing and Shipping Address"}),Object(z.jsx)("div",{className:"form-page",children:Object(z.jsxs)("form",{onSubmit:x,children:[Object(z.jsx)(R.d,{onChange:p,name:"address",value:h.address,className:"mb-3",label:"address",type:"text",required:!0}),Object(z.jsx)(R.d,{onChange:p,name:"city",value:h.city,className:"mb-3",label:"city",type:"text",required:!0}),Object(z.jsx)(R.d,{onChange:p,name:"state",value:h.state,className:"mb-3",label:"state",type:"text",required:!0}),Object(z.jsx)(R.d,{onChange:p,name:"country",value:h.country,className:"mb-3",label:"country",type:"text",required:!0}),Object(z.jsx)(R.d,{onChange:p,name:"zipCode",value:h.zipcode,className:"mb-3",label:"zipcode",type:"text",required:!0}),Object(z.jsx)(R.d,{onChange:p,name:"phoneNumber",value:h.phoneNumber,className:"mb-3",label:"phone number",type:"text",required:!0}),Object(z.jsx)("div",{className:"d-grid",children:Object(z.jsxs)(R.b,{color:"success",size:"lg",children:["add address",v&&Object(z.jsx)(F,{className:"ms-4",length:4,size:"sm",tag:"span",grow:!0})]})})]})})]}),Object(z.jsxs)("div",{className:"order-price-page",children:[Object(z.jsx)("h4",{className:"mb-4",children:"Order Detail"}),Object(z.jsx)("div",{className:"card p-2",children:Object(z.jsxs)("div",{className:"d-flex w-100 flex-column",children:[f.map((function(e){var t,a;return Object(z.jsxs)(n.a.Fragment,{children:[Object(z.jsxs)("div",{className:"d-flex",children:[Object(z.jsx)("div",{className:"me-auto flex-grow-3",children:Object(z.jsxs)("h5",{className:"ms-2",children:[null===(t=e.product)||void 0===t?void 0:t.name,"   ",Object(z.jsxs)("span",{className:"ms-3",children:["x",e.quantity]})]})}),Object(z.jsx)("div",{className:"",children:Object(z.jsxs)("h5",{className:"",children:["$",(null===(a=e.product)||void 0===a?void 0:a.price)*e.quantity]})})]}),Object(z.jsx)("hr",{})]},e.id)})),Object(z.jsxs)("div",{className:"d-flex",children:[Object(z.jsx)("div",{className:"me-auto",children:Object(z.jsx)("h3",{className:"px-2",children:"Shipping"})}),Object(z.jsx)("div",{className:"p-1",children:Object(z.jsx)("h3",{children:10})})]}),Object(z.jsx)("hr",{}),Object(z.jsxs)("div",{className:"d-flex",children:[Object(z.jsx)("div",{className:"me-auto",children:Object(z.jsx)("h3",{className:"px-2",children:"Total"})}),Object(z.jsx)("div",{className:"p-1",children:Object(z.jsxs)("h3",{children:["$",function(){var e=0;return f.map((function(t){var a;return e+=(null===(a=t.product)||void 0===a?void 0:a.price)*t.quantity})),e+10}()]})})]})]})}),Object(z.jsx)("div",{className:"d-grid mt-3",children:Object(z.jsxs)("button",{className:"btn btn-warning",children:[Object(z.jsx)("i",{style:{marginRight:"12px"},className:"fas fa-credit-card"}),"pay your order"]})}),Object(z.jsx)("div",{className:"",children:o&&Object(z.jsx)(K.Elements,{options:w,stripe:ee,children:Object(z.jsx)(Q,{})})})]})]})})};var ae=function(){return localStorage.getItem("token")?Object(z.jsx)(E.a,{to:"/home"}):Object(z.jsx)(E.a,{to:"/login"})};var se=function(e){return Object(z.jsx)("div",{className:"d-flex vh-100 justify-content-center align-items-center",children:Object(z.jsx)("h5",{children:"This is a success page"})})};var ne=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)({quantity:0,userCart:[],address:{},loading:!1,addressOption:{address:"",city:"",state:"",country:"",zipCode:"",phoneNumber:""}}),r=Object(u.a)(c,2),o=r[0],j=r[1],m=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(g);case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.prev=1,j((function(e){return Object(i.a)(Object(i.a)({},e),{},{quantity:o.quantity++})})),e.next=5,b.a.get(C+t,{headers:{Authorization:"JWT ".concat(a)}});case 5:s=e.sent,O(),D.b.success(s.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.prev=1,e.next=4,b.a.get(k+t,{headers:{Authorization:"JWT ".concat(a)}});case 4:s=e.sent,O(),D.b.success(s.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.prev=1,e.next=4,b.a.get(w,{headers:{Authorization:"JWT ".concat(t)}});case 4:a=e.sent,s=a.data,j((function(e){return Object(i.a)(Object(i.a)({},e),{},{quantity:s.quantity,userCart:s.userCart})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.prev=1,e.next=4,b.a.post(S,{},{headers:{Authorization:"JWT ".concat(t)}});case 4:a=e.sent,j((function(e){return Object(i.a)(Object(i.a)({},e),{},{userCart:a.data})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),t.preventDefault(),j((function(e){return Object(i.a)(Object(i.a)({},e),{},{loading:!0})})),e.prev=3,s=Object(i.a)({},o.addressOption),e.next=7,b.a.post(L,s,{headers:{Authorization:"JWT ".concat(a)}});case 7:setTimeout((function(){j((function(e){return Object(i.a)(Object(i.a)({},e),{},{loading:!1})})),v()}),2e3),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.prev=1,e.next=4,b.a.get(q,{headers:{Authorization:"JWT ".concat(t)}});case 4:a=e.sent,j((function(e){return Object(i.a)(Object(i.a)({},e),{},{address:a.data})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){var e=localStorage.getItem("token");if(m(),e){O(),v();var t=Object($.a)(e),a=new Date(1e3*t.exp)-new Date;setTimeout((function(){alert("your session has expired"),localStorage.removeItem("token"),window.location.href="/login"}),a)}}),[]);var N=o.quantity,y=o.userCart,I=o.addressOption,R=o.loading,F=o.address;return Object(z.jsx)(M.Provider,{value:{category:a,quantity:N,userCart:y,loading:R,getUserCart:O,increaseCart:p,decreaseCart:h,handleAddressChange:function(e){var t=e.target,a=t.name,s=t.value,n=Object(i.a)({},o.addressOption);n[a]=s,j((function(e){return Object(i.a)(Object(i.a)({},e),{},{addressOption:n})}))},addressOption:I,createOrderItem:x,handleAddressSubmit:f,getUserAddress:v,address:F},children:Object(z.jsxs)(E.d,{children:[Object(z.jsx)(E.b,{path:"/login",component:P}),Object(z.jsx)(U,{path:"/home",component:V}),Object(z.jsx)(U,{path:"/order-page",component:te}),Object(z.jsx)(U,{path:"/cart",component:Z}),Object(z.jsx)(U,{path:"/create-product",render:function(e){return Object(z.jsx)(X,Object(i.a)(Object(i.a)({},e),{},{category:a}))}}),Object(z.jsx)(U,{path:"/payment/successful",component:se}),Object(z.jsx)(ae,{})]})})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};a(76);r.a.render(Object(z.jsx)(n.a.StrictMode,{children:Object(z.jsxs)(_.a,{children:[Object(z.jsx)(D.a,{autoClose:!1}),Object(z.jsx)(ne,{})]})}),document.getElementById("root")),ce()}},[[77,1,2]]]);
//# sourceMappingURL=main.eda98180.chunk.js.map