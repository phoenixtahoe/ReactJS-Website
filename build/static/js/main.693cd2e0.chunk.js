(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){e.exports=n.p+"static/media/Phoenix.581e2973.svg"},23:function(e,t,n){e.exports=n(42)},29:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){e.exports=n.p+"static/media/Gang.f8686184.svg"},42:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(13),i=n.n(o),l=(n(18),n(8)),c=n(9),s=n(11),m=n(10),u=n(12),d=(n(15),n(29),n(4)),h=n(7),p=n.n(h),f=n(20),g=n.n(f),v=(n(34),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"svgRender",value:function(){var e=p()(this.svgDiv);p.a.load(g.a,function(t){e&&e.append(t);for(var n=["#e9edef","#EE7752","#E73C7E","#23A6D5","#23D5AB"],a=p.a.selectAll(".letter"),r=new d.d({repeat:0,yoyo:!0}),o=0;o<a.length;++o){var i=a[o];r.set(i.node,{rotation:180-360*Math.random(),x:20,y:-200},0);var l=d.e.to(i.node,.6,{rotation:0,x:0,y:0,ease:d.a.easeOut});r.add(l,.5+o/5);for(var c=i.selectAll("*"),s=0;s<c.length;++s){for(var m=0;m<n.length;++m){var u=c[s].clone();u.attr({stroke:n[m]});var h=.1+o/5+(n.length-m/1)/10;l=d.e.fromTo(u.node,1,{drawSVG:"0%"},{drawSVG:"100%",ease:d.b.easeInOut});r.add(l,h)}i.prepend(c[s]),d.e.set(c[s].node,{x:-3,y:-3});l=d.e.fromTo(c[s].node,1,{drawSVG:"0%"},{drawSVG:"100%",ease:d.b.easeInOut});r.add(l,h)}}})}},{key:"componentDidMount",value:function(){this.svgRender()}},{key:"componentDidUpdate",value:function(){this.svgRender()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(t){return e.svgDiv=t}})}}]),t}(a.Component)),w=(n(36),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Homepage"},r.a.createElement("div",{className:"head-wrap"},r.a.createElement(v,null),r.a.createElement("img",{className:"bird-wrapper",src:n(38)})),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"aboutme"},r.a.createElement("h3",null,r.a.createElement("strong",null,"About me!")),r.a.createElement("img",{className:"img-fluid img-thumbnail rounded-circle",style:{margin:"2%"},src:"https://media.licdn.com/dms/image/C5603AQHgfTPSnfUwkQ/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=-dUV9LJP6szroSWQSagFMlKLGLdFm7MZCBWSGLNhQII"}),r.a.createElement("ul",null,"Hi, my name is Phoenix! I am currently enrolled at a coding university called 42."),r.a.createElement("ul",null,"I\u2019m studying to become a software engineer. We mainly use C, but I've become skilled at React and JS. Frontend Design has become second nature to me, and I'm proud to say I won a hackathon for Google with a couple of other students at my school! I have a lot of enthusiasm and potential, and I\u2019m eager to tackle any opportunity!"))),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"projects"},r.a.createElement("h2",null,r.a.createElement("strong",null,"Portfolio!")),r.a.createElement("ul",null,"My Github is mostly filled with projects that are mostly written in C, but I learn something new everyday! Im always commiting and posting new projects to my Github!")),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Fractol!")),r.a.createElement("ul",null,"Second project of the Graphic Branch of 42. Fractol is a project aimed at exploring fractals, mathematical sets that exhibit a repeating pattern displayed at every scale"),r.a.createElement("img",{className:"img-fluid img-thumbnail",src:"https://raw.githubusercontent.com/pbondoer/42-fractol/master/screens/screen.png"}),r.a.createElement("p",null,r.a.createElement("strong",null,"FDF!")),r.a.createElement("ul",null,"First project of the Graphic Branch of 42. FDF is a simple 3D height-map renderer. You can rotate models, color is defined by relative height in the map."),r.a.createElement("img",{className:"img-fluid img-thumbnail",src:"https://raw.githubusercontent.com/pbondoer/42-FdF/master/screens/screen.png"}),r.a.createElement("p",null,r.a.createElement("strong",null,"Wolf3d!")),r.a.createElement("ul",null,"Third project of the Graphic Branch of 42. A Wolfeinstein-like renderer made in C using minilibX, with textures, and basic map files."),r.a.createElement("img",{className:"img-fluid img-thumbnail",src:"https://raw.githubusercontent.com/pbondoer/42-wolf3d/master/screens/screen3.png"}))),r.a.createElement("div",{className:"contactme"},r.a.createElement("a",{href:"https://linkedin.com"},r.a.createElement("i",{className:"fa-2x fab fa-linkedin"},r.a.createElement("span",null,"Linkedin"))),r.a.createElement("a",{href:"https://www.github.com/phoenixtahoe"},r.a.createElement("i",{className:"fa-2x fab fa-github"},r.a.createElement("span",null,"Github")))))}}]),t}(a.Component)),E=n(43),b=n(44),y=n(45),k=(n(19),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).myTween=new d.c({paused:!0}),n.myElements=[],n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.myTween.staggerTo(this.myElements,.5,{y:0,autoAlpha:1},.1)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-Wrap"},r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement(y.a,{path:"/",exact:!0,component:w})))))}}]),t}(a.Component)),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");j?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):N(e)})}}()}},[[23,2,1]]]);
//# sourceMappingURL=main.693cd2e0.chunk.js.map