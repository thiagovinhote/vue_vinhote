webpackJsonp([0],{"6bUW":function(t,s){},"6nNo":function(t,s){},"9pyP":function(t,s){},AXer:function(t,s){},FX90:function(t,s){},G6YF:function(t,s){},IW2z:function(t,s){},M3tE:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7+uW"),a=i("/ocq"),n={props:{size:{type:String},color:{type:String},position:{type:String},title:{type:String,required:!0},subtitle:{type:String,required:!0}}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"hero",class:[t.size,t.color]},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container",class:t.position},[t._t("default"),t._v(" "),i("h1",{staticClass:"title is-4"},[t._v(t._s(t.title))]),t._v(" "),i("h2",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))])],2)])])},staticRenderFns:[]};var r=i("VU/8")(n,l,!1,function(t){i("M3tE")},null,null).exports,c={props:{size:{type:String},color:{type:String},position:{type:String}}},o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"hero",class:[this.size,this.color]},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container",class:this.position},[this._t("default")],2)])])},staticRenderFns:[]};var v=i("VU/8")(c,o,!1,function(t){i("G6YF")},null,null).exports,u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"carousel is-3 carousel-animated carousel-animate-slide"},[i("div",{staticClass:"carousel-container"},t._l(t.itens,function(s){return i("div",{staticClass:"carousel-item",class:[s.active?"is-active":""]},[t._m(0,!0)])})),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-3by2"},[s("img",{attrs:{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image"}})])]),this._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[this._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Phasellus nec iaculis mauris. "),s("a",[this._v("@bulmaio")]),this._v(".\n            "),s("a",{attrs:{href:"#"}},[this._v("#css")]),this._v(" "),s("a",{attrs:{href:"#"}},[this._v("#responsive")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"carousel-navigation is-overlay"},[s("div",{staticClass:"carousel-nav-left"},[s("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})]),this._v(" "),s("div",{staticClass:"carousel-nav-right"},[s("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])])}]};var m={components:{Hero:r,Zone:v,Carousel:i("VU/8")({data:function(){return{itens:[{image_url:"https://bulma.io/images/placeholders/480x480.png",active:!0},{image_url:"https://bulma.io/images/placeholders/480x480.png",active:!1},{image_url:"https://bulma.io/images/placeholders/480x480.png",active:!1},{image_url:"https://bulma.io/images/placeholders/480x480.png",active:!1},{image_url:"https://bulma.io/images/placeholders/480x480.png",active:!1},{image_url:"https://bulma.io/images/placeholders/480x480.png",active:!1},{image_url:"https://bulma.io/images/placeholders/480x480.png",active:!1},{image_url:"https://bulma.io/images/placeholders/480x480.png",active:!1},{image_url:"https://bulma.io/images/placeholders/480x480.png",active:!1}]}}},u,!1,function(t){i("hGyu")},null,null).exports},data:function(){return{plataforms:[{title:"Mobile",description:"Progamação com linguagem native e com React-Native",icon:"fa-mobile-alt"},{title:"Front-End",description:"Usando tecnologias como AngularJS, ReactJS e VueJS",icon:"fa-desktop"},{title:"Back-End",description:"Node e Python no lado do back-end",icon:"fa-code"}]}}},d={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("Hero",{attrs:{size:"is-medium",color:"is-dark",title:"Thiago Vinhote Fonseca",subtitle:"Developer",position:"has-text-centered"}},[i("div",{staticClass:"content"},[i("img",{staticClass:"is-circle is-250x250",attrs:{src:"https://scontent.fbsb1-1.fna.fbcdn.net/v/t1.0-9/13095896_933513143414062_1336776631130582505_n.jpg?oh=0e16119681af556b805bdb3b758c3640&oe=5B16B8B4"}})])]),t._v(" "),i("Zone",{attrs:{color:"is-light"}},[i("div",{staticClass:"content"},[i("p",{staticClass:"title is-4 has-text-centered"},[t._v("Sobre mim")]),t._v(" "),i("p",[t._v("Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.")])])]),t._v(" "),i("Zone",{attrs:{color:"is-light"}},[i("div",{staticClass:"columns"},t._l(t.plataforms,function(s){return i("div",{staticClass:"column has-text-centered"},[i("span",{staticClass:"icon is-large"},[i("i",{staticClass:"fas fa-3x",class:s.icon})]),t._v(" "),i("p",{staticClass:"title is-4 is-top-5"},[t._v(t._s(s.title))]),t._v(" "),i("p",{staticClass:"subtitle is-6"},[t._v(t._s(s.description))])])}))]),t._v(" "),i("Zone",{attrs:{color:"is-primary"}},[i("Carousel")],1)],1)},staticRenderFns:[]};var p=i("VU/8")(m,d,!1,function(t){i("FX90")},"data-v-2e8ff9dc",null).exports,_={props:{imagesize:{type:String,default:"is-128x128"}}},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("article",{staticClass:"media"},[s("figure",{staticClass:"media-left"},[s("p",{staticClass:"image",class:this.imagesize},[s("img",{attrs:{src:"https://bulma.io/images/placeholders/128x128.png"}})])]),this._v(" "),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("div",[this._t("header"),this._v(" "),s("br"),this._v(" "),this._t("text")],2)])])])},staticRenderFns:[]};var C=i("VU/8")(_,h,!1,function(t){i("y28A")},null,null).exports,f={components:{Hero:r,MediaObject:C}},g={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("Hero",{attrs:{title:"Projetos",subtitle:"Meus projetos",color:"is-danger"}}),t._v(" "),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"columns is-multiline"},[i("div",{staticClass:"column is-half"},[i("MediaObject",{attrs:{imagesize:"is-64x64"}},[i("span",{attrs:{slot:"header"},slot:"header"},[i("strong",[t._v("John Smith")]),t._v(" "),i("small",[t._v("@johnsmith")]),t._v(" "),i("small",[t._v("31m")])]),t._v(" "),i("span",{attrs:{slot:"text"},slot:"text"},[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.\n            ")])])],1),t._v(" "),i("div",{staticClass:"column is-half"},[i("MediaObject",{attrs:{imagesize:"is-64x64"}},[i("span",{attrs:{slot:"header"},slot:"header"},[i("strong",[t._v("John Smith")]),t._v(" "),i("small",[t._v("@johnsmith")]),t._v(" "),i("small",[t._v("31m")])]),t._v(" "),i("span",{attrs:{slot:"text"},slot:"text"},[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.\n            ")])])],1)]),t._v(" "),i("h1",{staticClass:"title"},[t._v("Na Loja")]),t._v(" "),i("h2",{staticClass:"subtitle"},[t._v("Esses aqui você pode baixar direto da loja")]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"tile is-ancestor"},[i("div",{staticClass:"tile is-vertical is-9"},[i("div",{staticClass:"tile"},[i("div",{staticClass:"tile is-vertical"},[i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box"},[i("p",{staticClass:"title"},[t._v("Five")]),t._v(" "),i("p",{staticClass:"subtitle"},[t._v("Subtitle")]),t._v(" "),i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:"https://bulma.io/images/placeholders/640x480.png"}})])])]),t._v(" "),i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box"},[i("p",{staticClass:"title"},[t._v("Five")]),t._v(" "),i("p",{staticClass:"subtitle"},[t._v("Subtitle")]),t._v(" "),i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:"https://bulma.io/images/placeholders/640x480.png"}})])])])]),t._v(" "),i("div",{staticClass:"tile is-8 is-vertical"},[i("div",{staticClass:"tile"},[i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box"},[i("p",{staticClass:"title"},[t._v("Six")]),t._v(" "),i("p",{staticClass:"subtitle"},[t._v("Subtitle")])])]),t._v(" "),i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box"},[i("p",{staticClass:"title"},[t._v("Seven")]),t._v(" "),i("p",{staticClass:"subtitle"},[t._v("Subtitle")])])])]),t._v(" "),i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box"},[i("p",{staticClass:"title"},[t._v("Eight")]),t._v(" "),i("p",{staticClass:"subtitle"},[t._v("Subtitle")])])])])]),t._v(" "),i("div",{staticClass:"tile"},[i("div",{staticClass:"tile is-8 is-parent"},[i("article",{staticClass:"tile is-child box"},[i("p",{staticClass:"title"},[t._v("Nine")]),t._v(" "),i("p",{staticClass:"subtitle"},[t._v("Subtitle")]),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])]),t._v(" "),i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box"},[i("p",{staticClass:"title"},[t._v("Ten")]),t._v(" "),i("p",{staticClass:"subtitle"},[t._v("Subtitle")]),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])])])]),t._v(" "),i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box"},[i("div",{staticClass:"content"},[i("p",{staticClass:"title"},[t._v("Eleven")]),t._v(" "),i("p",{staticClass:"subtitle"},[t._v("Subtitle")]),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.")]),t._v(" "),i("p",[t._v("Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.")])])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"tile is-ancestor"},[i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box"},[i("p",{staticClass:"title"},[t._v("Twelve")]),t._v(" "),i("p",{staticClass:"subtitle"},[t._v("Subtitle")]),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.")])])])]),t._v(" "),i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box"},[i("p",{staticClass:"title"},[t._v("Fourteen")]),t._v(" "),i("p",{staticClass:"subtitle"},[t._v("Subtitle")]),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.")])])])]),t._v(" "),i("div",{staticClass:"tile is-parent is-6"},[i("article",{staticClass:"tile is-child box"},[i("p",{staticClass:"title"},[t._v("Thirteen")]),t._v(" "),i("p",{staticClass:"subtitle"},[t._v("Subtitle")]),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])])])}]};var b=i("VU/8")(f,g,!1,function(t){i("AXer")},null,null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container"},[this._v("\n  Not Found\n")])},staticRenderFns:[]};var y=i("VU/8")({},x,!1,function(t){i("IW2z")},null,null).exports,E={data:function(){return{amigos:[{name:"Fulano"},{name:"Cicrano"},{name:"Beltrano"},{name:"Fulano"},{name:"Cicrano"},{name:"Beltrano"}]}},components:{Hero:r,Zone:v,MediaObject:C}},M={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("Hero",{attrs:{title:"Perfil",subtitle:"Saiba mais sobre mim",color:"is-info"}}),t._v(" "),i("Zone",{attrs:{color:"is-danger"}},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-half"},[i("h1",{staticClass:"title is-1"},[t._v("Sobre mim")]),t._v(" "),i("h1",{staticClass:"title is-4"},[t._v("Eu sou um desenvolvedor")]),t._v(" "),i("div",{staticClass:"content"},[i("p",{staticClass:"subtitle"},[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.\n          ")]),t._v(" "),i("div",{staticClass:"content"},[i("a",{staticClass:"button is-dark"},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fab fa-github"})]),t._v(" "),i("span",[t._v("GitHub")])]),t._v(" "),i("a",{staticClass:"button is-info"},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fab fa-facebook"})]),t._v(" "),i("span",[t._v("Facebook")])])])])]),t._v(" "),i("div",{staticClass:"column is-offset-1 has-text-centered"},[i("div",{staticClass:"content"},[i("img",{staticClass:"is-mask-circle is-250x250",attrs:{src:"https://scontent.fbsb1-1.fna.fbcdn.net/v/t1.0-9/13095896_933513143414062_1336776631130582505_n.jpg?oh=0e16119681af556b805bdb3b758c3640&oe=5B16B8B4"}})])])])]),t._v(" "),i("Zone",{attrs:{color:"is-dark"}},[i("nav",{staticClass:"level"},[i("div",{staticClass:"level-item has-text-centered"},[i("div",[i("p",{staticClass:"heading"},[t._v("Tweets")]),t._v(" "),i("p",{staticClass:"title"},[t._v("3,456")])])]),t._v(" "),i("div",{staticClass:"level-item has-text-centered"},[i("div",[i("p",{staticClass:"heading"},[t._v("Following")]),t._v(" "),i("p",{staticClass:"title"},[t._v("123")])])]),t._v(" "),i("div",{staticClass:"level-item has-text-centered"},[i("div",[i("p",{staticClass:"heading"},[t._v("Followers")]),t._v(" "),i("p",{staticClass:"title"},[t._v("456K")])])]),t._v(" "),i("div",{staticClass:"level-item has-text-centered"},[i("div",[i("p",{staticClass:"heading"},[t._v("Likes")]),t._v(" "),i("p",{staticClass:"title"},[t._v("789")])])])])]),t._v(" "),i("Zone",{attrs:{color:"is-light"}},[i("h1",{staticClass:"title"},[t._v("Amigos")]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"columns is-multiline is-desktop"},t._l(t.amigos,function(s){return i("div",{staticClass:"column is-one-quarter"},[i("MediaObject",{attrs:{imagesize:"is-64x64"}},[i("h1",{staticClass:"title is-5",attrs:{slot:"header"},slot:"header"},[t._v("\n            "+t._s(s.name)+"\n          ")])])],1)}))])],1)},staticRenderFns:[]};var q=i("VU/8")(E,M,!1,function(t){i("cfNk")},null,null).exports,F={props:{close:{type:Boolean,default:!1}}},S={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"notification is-link"},[this.close?s("button",{staticClass:"delete"}):this._e(),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"timeline is-centered"},[i("header",{staticClass:"timeline-header"},[i("span",{staticClass:"tag is-medium is-primary"},[t._v("Start")])]),t._v(" "),i("div",{staticClass:"timeline-item is-primary"},[i("div",{staticClass:"timeline-marker is-primary"}),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("January 2016")]),t._v(" "),i("p",[t._v("Timeline content - Can include any HTML element")])])]),t._v(" "),i("div",{staticClass:"timeline-item is-warning"},[i("div",{staticClass:"timeline-marker is-warning is-image is-32x32"},[i("img",{attrs:{src:"http://bulma.io/images/placeholders/32x32.png"}})]),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("February 2016")]),t._v(" "),i("p",[t._v("Timeline content - Can include any HTML element")])])]),t._v(" "),i("header",{staticClass:"timeline-header"},[i("span",{staticClass:"tag is-primary"},[t._v("2017")])]),t._v(" "),i("div",{staticClass:"timeline-item is-danger"},[i("div",{staticClass:"timeline-marker is-danger is-icon"},[i("i",{staticClass:"fa fa-flag"})]),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("March 2017")]),t._v(" "),i("p",[t._v("Timeline content - Can include any HTML element")])])]),t._v(" "),i("div",{staticClass:"timeline-item is-warning"},[i("div",{staticClass:"timeline-marker is-warning is-image is-32x32"},[i("img",{attrs:{src:"http://bulma.io/images/placeholders/32x32.png"}})]),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("February 2016")]),t._v(" "),i("p",[t._v("Timeline content - Can include any HTML element")])])]),t._v(" "),i("header",{staticClass:"timeline-header"},[i("span",{staticClass:"tag is-primary"},[t._v("2017")])]),t._v(" "),i("div",{staticClass:"timeline-item is-danger"},[i("div",{staticClass:"timeline-marker is-danger is-icon"},[i("i",{staticClass:"fa fa-flag"})]),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("March 2017")]),t._v(" "),i("p",[t._v("Timeline content - Can include any HTML element")])])]),t._v(" "),i("div",{staticClass:"timeline-item is-warning"},[i("div",{staticClass:"timeline-marker is-warning is-image is-32x32"},[i("img",{attrs:{src:"http://bulma.io/images/placeholders/32x32.png"}})]),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("February 2016")]),t._v(" "),i("p",[t._v("Timeline content - Can include any HTML element")])])]),t._v(" "),i("header",{staticClass:"timeline-header"},[i("span",{staticClass:"tag is-primary"},[t._v("2017")])]),t._v(" "),i("div",{staticClass:"timeline-item is-danger"},[i("div",{staticClass:"timeline-marker is-danger is-icon"},[i("i",{staticClass:"fa fa-flag"})]),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("March 2017")]),t._v(" "),i("p",[t._v("Timeline content - Can include any HTML element")])])]),t._v(" "),i("header",{staticClass:"timeline-header"},[i("span",{staticClass:"tag is-medium is-primary"},[t._v("End")])])])}]};var P={components:{Hero:r,Message:i("VU/8")(F,S,!1,function(t){i("6nNo")},null,null).exports,MediaObject:C,Timeline:i("VU/8")({},k,!1,function(t){i("b7wk")},null,null).exports}},L={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("Hero",{attrs:{color:"is-warning",title:"Experiências",subtitle:"Timeline"}}),t._v(" "),i("section",{staticClass:"section"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-6"},[i("Timeline")],1),t._v(" "),i("div",{staticClass:"column"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[i("Message",[t._v("\n              Primar lorem ipsum dolor sit amet, consectetur\n              adipiscing elit lorem ipsum dolor. "),i("strong",[t._v("Pellentesque risus mi")]),t._v(", tempus quis placerat ut, porta nec nulla.\n            ")])],1),t._v(" "),i("div",{staticClass:"column"},[i("Message",[t._v("\n              Primar lorem ipsum dolor sit amet, consectetur\n              adipiscing elit lorem ipsum dolor. "),i("strong",[t._v("Pellentesque risus mi")]),t._v(", tempus quis placerat ut, porta nec nulla.\n            ")])],1)]),t._v(" "),i("MediaObject",{attrs:{imagesize:"is-64x64"}},[i("span",{attrs:{slot:"header"},slot:"header"},[i("strong",[t._v("John Smith")]),t._v(" "),i("small",[t._v("@johnsmith")]),t._v(" "),i("small",[t._v("31m")])]),t._v(" "),i("span",{attrs:{slot:"text"},slot:"text"},[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.\n          ")])]),t._v(" "),i("MediaObject",{attrs:{imagesize:"is-64x64"}},[i("span",{attrs:{slot:"header"},slot:"header"},[i("strong",[t._v("John Smith")]),t._v(" "),i("small",[t._v("@johnsmith")]),t._v(" "),i("small",[t._v("31m")])]),t._v(" "),i("span",{attrs:{slot:"text"},slot:"text"},[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.\n          ")])])],1)])])],1)},staticRenderFns:[]};var j=i("VU/8")(P,L,!1,function(t){i("ygZb")},null,null).exports;e.a.use(a.a);var H=[{path:"/experience",name:"Experience",component:j,title:"Experiências"},{path:"/projects",name:"Projects",component:b,title:"Projetos"},{path:"/profile",name:"Profile",component:q,title:"Perfil"}],T=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:p,title:"Home"}].concat(H,[{path:"/404",name:"NotFound",component:y},{path:"*",redirect:"/404"}]),$=new a.a({routes:T,mode:"history",linkActiveClass:"is-active"}),w={data:function(){return{routes:H.filter(function(t){return"/"!==t.path})}}},V={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("nav",{staticClass:"navbar is-dark"},[i("div",{staticClass:"container"},[i("div",{staticClass:"navbar-brand"},[i("router-link",{staticClass:"navbar-item",attrs:{to:"/",exact:""}},[i("img",{attrs:{src:"static/logo.png",alt:"Portifólio logo",width:"112",height:"28"}})]),t._v(" "),t._m(0)],1),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"navbar-menu",attrs:{id:"navbarMenuHeroA"}},[i("div",{staticClass:"navbar-end"},t._l(t.routes,function(s){return i("router-link",{key:s.path,staticClass:"navbar-item",attrs:{to:s.path}},[t._v("\n          "+t._s(s.title)+"\n        ")])}))])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarMenuHeroA"}},[s("span"),this._v(" "),s("span"),this._v(" "),s("span")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"navbar-start"},[s("a",{staticClass:"navbar-item"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fab fa-facebook"})])]),this._v(" "),s("a",{staticClass:"navbar-item"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fab fa-twitter"})])])])}]};var R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("footer",{staticClass:"footer hero is-dark"},[i("div",{staticClass:"container"},[i("div",{staticClass:"content"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-three-quarters"},[i("p",{staticClass:"title"},[t._v("Portifólio")]),t._v(" "),i("p",{staticClass:"subtitle is-6"},[t._v("Lorem ipsum")])]),t._v(" "),i("div",{staticClass:"column"},[i("p",[t._v("Redes sociais")]),t._v(" "),i("span",{staticClass:"icon is-medium"},[i("i",{staticClass:"fab fa-github fa-2x"})]),t._v(" "),i("span",{staticClass:"icon is-medium"},[i("i",{staticClass:"fab fa-facebook fa-2x"})]),t._v(" "),i("span",{staticClass:"icon is-medium"},[i("i",{staticClass:"fab fa-twitter fa-2x"})])])])]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"content has-text-centered"},[i("span",{staticClass:"icon"},[i("i",{staticClass:"far fa-copyright"})]),t._v("\n      2018 - Portifólio. All rights reserved\n    ")])])])}]};var U={name:"App",components:{NavBar:i("VU/8")(w,V,!1,function(t){i("lXIi")},null,null).exports,Footer:i("VU/8")({},R,!1,function(t){i("xFNe")},null,null).exports}},z={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("NavBar"),this._v(" "),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1),this._v(" "),s("Footer")],1)},staticRenderFns:[]};var N=i("VU/8")(U,z,!1,function(t){i("9pyP")},null,null).exports,A=i("MMSg"),B=i.n(A);i("doPI"),i("lW2e"),i("0iLs"),i("6bUW");e.a.use(B.a),new e.a({el:"#app",router:$,components:{App:N},template:"<App/>"})},b7wk:function(t,s){},cfNk:function(t,s){},doPI:function(t,s){},hGyu:function(t,s){},lW2e:function(t,s){},lXIi:function(t,s){},xFNe:function(t,s){},y28A:function(t,s){},ygZb:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.95f14b06bc0d57a80ebc.js.map