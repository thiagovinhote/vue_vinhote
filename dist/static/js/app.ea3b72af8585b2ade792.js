webpackJsonp([1],{"+hnJ":function(t,e){},"3+IM":function(t,e){},"6bUW":function(t,e){},"75uG":function(t,e){},"9PR/":function(t,e){},FlXz:function(t,e){},G6YF:function(t,e){},GROS:function(t,e){},IW2z:function(t,e){},M3tE:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=s("MMSg"),i=s.n(a),r=s("JBDY"),o=s.n(r),c=s("7QTg"),l=s.n(c),u=(s("doPI"),s("lW2e"),s("0iLs"),s("6bUW"),s("Dd8w")),d=s.n(u),v=s("NYxO"),m=s("/ocq"),p={props:{size:{type:String},color:{type:String},position:{type:String},title:{type:String,required:!0},subtitle:{type:String,required:!0}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero",class:[t.size,t.color]},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container",class:t.position},[t._t("default"),t._v(" "),s("h1",{staticClass:"title is-4"},[t._v(t._s(t.title))]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))])],2)])])},staticRenderFns:[]};var h=s("VU/8")(p,f,!1,function(t){s("M3tE")},null,null).exports,_={props:{size:{type:String},color:{type:String},position:{type:String}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero",class:[this.size,this.color]},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container",class:this.position},[this._t("default")],2)])])},staticRenderFns:[]};var j=s("VU/8")(_,g,!1,function(t){s("G6YF")},null,null).exports,C={props:{perview:{type:Number,required:!0}},data:function(){return{swiperOption:{slidesPerView:this.perview,loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0}}}},methods:{callback:function(){}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("swiper",{ref:"mySwiper",attrs:{options:this.swiperOption},on:{someSwiperEvent:this.callback}},[this._t("swiper-slide"),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]};var E={components:{Hero:h,Zone:j,Carousel:s("VU/8")(C,b,!1,function(t){s("RB8M")},null,null).exports},mounted:function(){},data:function(){return{}},methods:d()({},Object(v.b)({fetchWork:"FETCH_WORK"})),computed:d()({},Object(v.c)({plataforms:"GET_PLATAFORMS",work:"GET_WORK"}))},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Hero",{attrs:{size:"is-medium",color:"is-dark",title:"Thiago Vinhote Fonseca",subtitle:"Developer",position:"has-text-centered"}},[s("div",{staticClass:"content"},[s("img",{staticClass:"is-circle is-250x250 is-mask-circle",attrs:{src:"static/photo.png"}})])]),t._v(" "),s("Zone",{attrs:{color:"is-lght"}},[s("div",{staticClass:"content"},[s("p",{staticClass:"title is-4 has-text-centered"},[t._v("Resumo")]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("p",{staticClass:"subtitle"},[t._v("Profissional")]),t._v("\n          Sou um desenvolvedor Web e Mobile, sempre pronto para o desenvolvimento de projetos\n          inovadores. Me mantendo atualizado em relação as novas tecnologias que surgem no\n          mercado, para resolver os desafios aplicando a tecnologia que melhor se encaixar.\n        ")]),t._v(" "),s("div",{staticClass:"column is-half"},[s("p",{staticClass:"subtitle"},[t._v("Pessoal")]),t._v("\n          E também, como todo ser humano, gosto de uma boa conversar, compartilhar o conhecimento,\n          ter novos desafios e poder ter os amigos por perto. Descontrair de vez em quando,\n          comer aquela comida boa e tomar uma boa brêja com os 'brothers'.\n        ")])])])]),t._v(" "),s("Zone",{attrs:{color:"is-light"}},[s("div",{staticClass:"columns"},t._l(t.plataforms,function(e,n){return s("div",{key:n,staticClass:"column has-text-centered"},[s("span",{staticClass:"icon is-large"},[s("i",{staticClass:"fas fa-3x",class:e.icon})]),t._v(" "),s("p",{staticClass:"title is-4 is-top-5"},[t._v(t._s(e.title))]),t._v(" "),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(e.description))])])})),t._v(" "),s("div",{staticClass:"column is-offset-8 has-text-centered"},[s("p",{staticClass:"subtitle is-7"},[t._v("Mas não sou fechado a só usar essas tecnologias")])])])],1)},staticRenderFns:[]};var x=s("VU/8")(E,k,!1,function(t){s("+hnJ")},"data-v-cba8ced0",null).exports,y=s("M4fF"),w={mounted:function(){this.fetchWork(!0)},methods:d()({},Object(v.b)({fetchWork:"FETCH_WORK"}),{split:function(){return y.chunk(this.work.results,3)}}),computed:d()({},Object(v.c)({work:"GET_WORK"}),{matrix:function(){return this.split()}})},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-vertical"},t._l(t.matrix,function(e,n){return s("div",{key:n,staticClass:"tile"},t._l(e,function(e,n){return s("div",{key:n,staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child box"},[s("div",{staticClass:"content"},[s("p",{staticClass:"title"},[t._v(t._s(e.name))])]),t._v(" "),s("figure",{staticClass:"image is-square"},[s("img",{attrs:{src:e.image}})]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v(t._s(e.description))])]),t._v(" "),s("a",{staticClass:"tags has-addons",attrs:{href:e.link_store,target:"__blank"}},[s("span",{staticClass:"tag"},[t._v("Loja")]),t._v(" "),s("span",{staticClass:"tag is-info"},[t._v("AppStore")])])])])}))}))])])},staticRenderFns:[]};var O=s("VU/8")(w,R,!1,function(t){s("tR5c")},null,null).exports,F={props:{imagesize:{type:String,default:"is-128x128"},imageurl:{type:String},isimage:{type:Boolean,default:!0}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"media"},[t.isimage?s("figure",{staticClass:"media-left"},[s("p",{staticClass:"image",class:t.imagesize},[s("img",{attrs:{src:t.imageurl}})])]):t._e(),t._v(" "),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("div",[t._t("header"),t._v(" "),s("br"),t._v(" "),t._t("text")],2)]),t._v(" "),t._t("links")],2)])},staticRenderFns:[]};var z=s("VU/8")(F,S,!1,function(t){s("kvPF")},null,null).exports,M={props:{links:{type:Array,required:!0}},methods:{classLink:function(t){switch(t){case"TWITTER":return["fab fa-twitter","has-text-primary"];case"MEDIUM":return["fab fa-medium","has-text-danger"];case"LINKEDIN":return["fab fa-linkedin","has-text-success"];case"GITHUB":return["fab fa-github","has-text-dark"];case"FACEBOOK":return["fab fa-facebook","has-text-info"];case"SITE":return["fas fa-eye","has-text-info"];case"HEROKU":return["fas fa-anchor","has-text-primary"];default:return["fas fa-link"]}}}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},t._l(t.links,function(e,n){return s("a",{key:n,staticClass:"level-item",attrs:{href:e.url,target:"__blank"}},[s("span",{staticClass:"icon is-small"},[s("i",{class:t.classLink(e.type_display)})])])}))])},staticRenderFns:[]};var T={components:{Hero:h,TileGrid:O,MediaObject:z,MediaNav:s("VU/8")(M,P,!1,function(t){s("w0oM")},null,null).exports},mounted:function(){this.fetch(1)},data:function(){return{options:{className:"has-text-info"},pagination:{current:1,perPage:4,order:"is-right",size:"is-small"}}},methods:d()({},Object(v.b)({fetch:"FETCH_PROJECT"}),{changePagination:function(t){this.fetch(t)}}),computed:d()({},Object(v.c)({project:"GET_PROJECT"}))},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Hero",{attrs:{title:"Projetos",subtitle:"Meus projetos",color:"is-danger"}}),t._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-pagination",{attrs:{total:t.project.count,current:t.pagination.current,order:t.pagination.order,size:t.pagination.size,"per-page":t.pagination.perPage},on:{"update:current":function(e){t.$set(t.pagination,"current",e)},change:t.changePagination}})],1)]),t._v(" "),s("div",{staticClass:"columns is-multiline"},t._l(t.project.results,function(e,n){return s("div",{key:n,staticClass:"column is-half"},[s("MediaObject",{attrs:{imagesize:"is-64x64",imageurl:e.image}},[s("span",{attrs:{slot:"header"},slot:"header"},[s("strong",[t._v(t._s(e.name))])]),t._v(" "),s("span",{directives:[{name:"linkified",rawName:"v-linkified:options",value:t.options,expression:"options",arg:"options"}],attrs:{slot:"text"},domProps:{innerHTML:t._s(e.description)},slot:"text"}),t._v(" "),s("MediaNav",{attrs:{slot:"links",links:e.links},slot:"links"})],1)],1)})),t._v(" "),s("h1",{staticClass:"title"},[t._v("Na Loja")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("Esses aqui você pode baixar direto da loja")]),t._v(" "),s("TileGrid")],1)])],1)},staticRenderFns:[]};var I=s("VU/8")(T,N,!1,function(t){s("GROS")},null,null).exports,V={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container"},[this._v("\n  Not Found\n")])},staticRenderFns:[]};var q=s("VU/8")({},V,!1,function(t){s("IW2z")},null,null).exports,L={components:{Hero:h,Zone:j,MediaObject:z},data:function(){return{amigos:[{name:"Fulano"},{name:"Cicrano"},{name:"Beltrano"},{name:"Fulano"},{name:"Cicrano"},{name:"Beltrano"}]}},methods:{getColor:function(t){var e=["is-primary","is-info","is-warning","is-dark","is-danger",""];return e[t%e.length]}},computed:d()({},Object(v.c)({socials:"GET_SOCIAL_NETWORKS"}))},H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Hero",{attrs:{title:"Perfil",subtitle:"Saiba mais detalhes ao meu respeito",color:"is-light"}}),t._v(" "),s("Zone",{attrs:{color:"is-default"}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("h1",{staticClass:"title is-4"},[t._v("Sobre mim")]),t._v(" "),s("div",{staticClass:"content"},[s("p",{staticClass:"subtitle"},[s("ul",[s("li",[t._v("\n                Sou um desenvolvedor web e mobile, sempre se atualizando com as\n                novas tecnologias que surgem no mercado, para resolver os desafios\n                aplicando a tecnologia que melhor se encaixar.\n              ")]),t._v(" "),s("br"),t._v(" "),s("li",[t._v("\n              Experiência de 2 anos na Apple Developer Academy com desenvolvimento\n                especifico para iOS, watchOS e tvOS. Prática com metodologias\n                como: Scrum, MVP e CBL.\n              ")]),t._v(" "),s("br"),t._v(" "),s("li",[t._v("\n                Desenvolvo para web tanto no Back-End implementado API's quanto no\n                Front-End criando aplicações visuais. No mobile, posso desenvolver tanto\n                aplicações com código nativo com Swift(iOS) ou Java(Android) quanto com\n                bibliotecas como o React-Native(JavaScript).\n              ")])])])])]),t._v(" "),s("div",{staticClass:"column is-offset-1 has-text-centered"},[s("div",{staticClass:"content"},[s("img",{staticClass:"is-circle is-mask-circle is-250x250",attrs:{src:"static/photo.png"}})])])])]),t._v(" "),s("Zone",[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-4"},[s("h1",{staticClass:"title"},[t._v("Minhas redes sociais")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("Dá uma olhada")])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"columns is-multiline"},t._l(t.socials,function(e,n){return s("div",{key:n,staticClass:"column is-one-quarter"},[s("a",{staticClass:"button is-medium",class:t.getColor(n),attrs:{href:e.link,target:"__blank"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fab",class:e.icon})]),t._v(" "),s("span",[t._v(t._s(e.name))])])])}))])])]),t._v(" "),s("Zone",{attrs:{color:"is-light",size:"is-medium"}})],1)},staticRenderFns:[]};var U=s("VU/8")(L,H,!1,function(t){s("Vwy2")},null,null).exports,G={props:{close:{type:Boolean,default:!1},color:{type:String,default:"is-primary"}}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notification",class:this.color},[this.close?e("button",{staticClass:"delete"}):this._e(),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var A=s("VU/8")(G,W,!1,function(t){s("FlXz")},null,null).exports,B=s("PJh5"),K=s.n(B),X={props:{title:{type:String,required:!0},color:{type:String,default:"is-primary"}}},J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"timeline-item"},[e("div",{staticClass:"timeline-marker",class:this.color}),this._v(" "),e("div",{staticClass:"timeline-content"},[e("p",{staticClass:"heading"},[this._v(this._s(this.title))]),this._v(" "),this._t("content")],2)])},staticRenderFns:[]},D=s("VU/8")(X,J,!1,null,null,null).exports;K.a.locale("pt-BR");var Y={props:{order:{type:String,default:""},experiences:{type:Array,required:!0}},components:{Item:D},methods:{toData:function(){var t=this,e=this.experiences,s={};y.each(e,function(e){var n=t.getYear(e.get("from_date"));void 0===s[n]&&(s[n]=[]),s[n].push(e)});var n=[];return y.each(s,function(t,e){n.push({type:"header",value:e}),y.each(t,function(t){n.push({type:"item",value:t})})}),n},getYear:function(t){return K()(t).format("YYYY")},toFormat:function(t){return K()(t).format("MMMM - YYYY")}},computed:{data:function(){return this.toData()}}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timeline",class:t.order},t._l(t.experiences,function(e,n){return s("Item",{key:n,attrs:{title:t.toFormat(e.from_date)}},[s("p",{attrs:{slot:"content"},slot:"content"},[s("strong",[t._v(t._s(e.company))]),t._v(" "),s("br"),t._v("\n      "+t._s(e.role)+"\n    ")])])}))},staticRenderFns:[]};var Z={components:{Hero:h,Zone:j,Message:A,MediaObject:z,Timeline:s("VU/8")(Y,$,!1,function(t){s("3+IM")},null,null).exports},mounted:function(){this.fetchExperience(),this.fetchSkill()},methods:d()({},Object(v.b)({fetchExperience:"FETCH_EXPERIENCE",fetchSkill:"FETCH_SKILL"})),computed:d()({},Object(v.c)({experience:"GET_EXPERIENCE",skill:"GET_SKILL"}),{emptyExperience:function(){return y.isEmpty(this.experience)},emptySkill:function(){return y.isEmpty(this.skill)}})},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Hero",{attrs:{color:"is-warning",title:"Experiências",subtitle:"Veja onde já trabalhei e quais são minhas habilidades"}}),t._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"columns"},[t.emptyExperience?t._e():s("div",{staticClass:"column is-5"},[s("h2",{staticClass:"subtitle has-text-centered"},[t._v("Timeline")]),t._v(" "),s("Timeline",{attrs:{order:"is-centered",experiences:t.experience.results}})],1),t._v(" "),t.emptySkill?t._e():s("div",{staticClass:"column"},[s("h2",{staticClass:"subtitle has-text-centered"},[t._v("Competências")]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("Message",{attrs:{color:"is-info"}},[s("p",[t._v("\n                O "),s("strong",[t._v(" conhecimento ")]),t._v(" se torna mais interessante quando\n                ele é "),s("strong",[t._v(" compartilhado ")]),t._v(" com as outras pessoas.\n              ")]),t._v(" "),s("small",[t._v("@vinhote")])])],1),t._v(" "),s("div",{staticClass:"column"},[s("Message",[s("p",[t._v("\n                Todos querem "),s("strong",[t._v(" aprender ")]),t._v(", mas poucos são os que se\n                "),s("strong",[t._v("esforçam")]),t._v(" para estudar e expandir seus\n                "),s("strong",[t._v("horizontes")]),t._v(".\n              ")]),t._v(" "),s("small",[t._v("@vinhote")])])],1)]),t._v(" "),s("div",{staticClass:"columns is-multiline"},t._l(t.skill.results,function(e,n){return s("div",{key:n,staticClass:"column is-half"},[s("MediaObject",{attrs:{imageurl:e.image,imagesize:"is-64x64"}},[s("span",{attrs:{slot:"header"},slot:"header"},[s("strong",[t._v(t._s(e.name))])]),t._v(" "),s("span",{attrs:{slot:"text"},slot:"text"},[t._v("\n                "+t._s(e.description)+"\n              ")])])],1)}))])])]),t._v(" "),s("Zone",{attrs:{color:"is-light",size:"is-medium"}})],1)},staticRenderFns:[]};var tt=s("VU/8")(Z,Q,!1,function(t){s("9PR/")},null,null).exports;n.a.use(m.a);var et=[{path:"/experience",name:"Experience",component:tt,title:"Experiências"},{path:"/projects",name:"Projects",component:I,title:"Projetos"},{path:"/profile",name:"Profile",component:U,title:"Perfil"}],st=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:x,title:"Home"}].concat(et,[{path:"/404",name:"NotFound",component:q},{path:"*",redirect:"/404"}]),nt=new m.a({routes:st,mode:"history",linkActiveClass:"is-active"}),at={data:function(){return{isMenuActive:!1,routes:et.filter(function(t){return"/"!==t.path})}},methods:{clickMenu:function(){this.isMenuActive=!this.isMenuActive}},computed:d()({},Object(v.c)({socialNetworks:"GET_SOCIAL_NETWORKS"}))},it={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar is-dark",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/",exact:""}},[s("img",{attrs:{src:"static/logo.png",alt:"Portifólio logo",width:"112",height:"28"}})]),t._v(" "),s("span",{staticClass:"navbar-burger burger",class:{"is-active":t.isMenuActive},attrs:{"data-target":"navbarMenuHeroA"},on:{click:t.clickMenu}},[s("span"),t._v(" "),s("span"),t._v(" "),s("span")])],1),t._v(" "),s("div",{staticClass:"navbar-menu",class:{"is-active":t.isMenuActive},attrs:{id:"navbarMenuHeroA"}},[s("div",{staticClass:"navbar-start is-hidden-touch"},t._l(t.socialNetworks,function(t,e){return s("a",{key:e,staticClass:"navbar-item",attrs:{href:t.link,target:"__blank"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fab",class:t.icon})])])})),t._v(" "),s("div",{staticClass:"navbar-end"},t._l(t.routes,function(e){return s("router-link",{key:e.path,staticClass:"navbar-item",attrs:{to:e.path},nativeOn:{click:function(e){t.clickMenu(e)}}},[t._v("\n          "+t._s(e.title)+"\n        ")])}))])])])},staticRenderFns:[]};var rt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer hero is-dark"},[e("div",{staticClass:"has-text-centered"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"far fa-copyright"})]),this._v("\n    2018 - Portifólio. All rights reserved\n  ")])])}]};var ot={name:"App",components:{NavBar:s("VU/8")(at,it,!1,function(t){s("75uG")},null,null).exports,Footer:s("VU/8")({},rt,!1,function(t){s("cRQM")},null,null).exports}},ct={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("NavBar"),this._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var lt=s("VU/8")(ot,ct,!1,function(t){s("sCuS")},null,null).exports,ut=s("Xxa5"),dt=s.n(ut),vt=s("exGp"),mt=s.n(vt),pt=s("G1tN"),ft=Object(pt.create)({baseURL:"https://apivinhote.herokuapp.com/api/v1/"}),ht={FETCH_WORK:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return mt()(dt.a.mark(function n(){var a;return dt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ft.get("work/?is_store="+s);case 2:a=e.sent,t.commit("WORK_RECEIVE",a.data);case 4:case"end":return e.stop()}},n,e)}))()},FETCH_PROJECT:function(t,e){var s=this;return mt()(dt.a.mark(function n(){var a;return dt.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,ft.get("projects/?page="+e);case 2:a=s.sent,t.commit("PROJECT_RECEIVE",a.data);case 4:case"end":return s.stop()}},n,s)}))()},FETCH_EXPERIENCE:function(t){var e=this;return mt()(dt.a.mark(function s(){var n;return dt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ft.get("experiences/");case 2:n=e.sent,t.commit("EXPERIENCE_RECEIVE",n.data);case 4:case"end":return e.stop()}},s,e)}))()},FETCH_SKILL:function(t){var e=this;return mt()(dt.a.mark(function s(){var n;return dt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ft.get("skills");case 2:n=e.sent,t.commit("SKILL_RECEIVE",n.data);case 4:case"end":return e.stop()}},s,e)}))()}};n.a.use(v.a);var _t=new v.a.Store({state:{project:{},work:{},experience:{},skill:{},socialNetworks:[{link:"https://www.facebook.com/vinhote.thiago",icon:"fa-facebook",name:"Facebook"},{link:"https://twitter.com/thiago_vinhote",icon:"fa-twitter",name:"Twitter"},{link:"https://www.instagram.com/thiago_vinhote",icon:"fa-instagram",name:"Instagram"},{link:"https://www.linkedin.com/in/thiago-vinhote-14698111a",icon:"fa-linkedin",name:"Linkedin"},{link:"https://github.com/thiagovinhote",icon:"fa-github",name:"Github"},{link:"https://medium.com/@vinhote",icon:"fa-medium",name:"Medium"}],plataforms:[{title:"Mobile",description:"No universo mobile, programo com linguagem nativa e com React-Native",icon:"fa-mobile-alt"},{title:"Front-End",description:"Em web, uso tecnologias como AngularJS, ReactJS e VueJS",icon:"fa-desktop"},{title:"Back-End",description:"Na parte por atrás do panos, Node e Python no back-end",icon:"fa-code"}]},actions:ht,getters:{GET_PROJECT:function(t){return t.project},GET_WORK:function(t){return t.work},GET_EXPERIENCE:function(t){return t.experience},GET_SKILL:function(t){return t.skill},GET_SOCIAL_NETWORKS:function(t){return t.socialNetworks},GET_PLATAFORMS:function(t){return t.plataforms}},modules:{},mutations:{PROJECT_RECEIVE:function(t,e){t.project=e},WORK_RECEIVE:function(t,e){t.work=e},EXPERIENCE_RECEIVE:function(t,e){t.experience=e},SKILL_RECEIVE:function(t,e){t.skill=e}}});n.a.use(i.a),n.a.directive("linkified",o.a),n.a.use(l.a),new n.a({el:"#app",router:nt,store:_t,components:{App:lt},template:"<App/>"})},RB8M:function(t,e){},Vwy2:function(t,e){},cRQM:function(t,e){},doPI:function(t,e){},kvPF:function(t,e){},lW2e:function(t,e){},sCuS:function(t,e){},tR5c:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return s(i(t))}function i(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="uslO"},w0oM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ea3b72af8585b2ade792.js.map