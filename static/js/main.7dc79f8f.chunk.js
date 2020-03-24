(this["webpackJsonpmap-project"]=this["webpackJsonpmap-project"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),o=a.n(i),s=(a(15),a(16),a(7)),c=a(3),l=a(4),d=a(8),m=a(5),u=a(9),p=a(6),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).mapRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(p.loadModules)(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer","esri/widgets/Locate","esri/widgets/Track","esri/Graphic","esri/widgets/Search","esri/widgets/Fullscreen","esri/widgets/Home","esri/widgets/Legend"],{css:!0}).then((function(t){var a=Object(s.a)(t,10),n=a[0],r=a[1],i=a[2],o=a[3],c=(a[4],a[5],a[6]),l=a[7],d=a[8],m=a[9],u=new n({basemap:"dark-gray"});e.view=new r({container:e.mapRef.current,map:u,popup:{dockEnabled:!0,dockOptions:{position:"bottom-right",buttonEnabled:!1,breakpoint:!1}},center:[-75.5277,38.9108],zoom:4});var p=new i({url:"https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1",definitionExpression:"Country_Region = 'US'",opacity:.5,color:[0,112,255],outfields:["Province_State","Confirmed","Recovered","Deaths"],popupTemplate:{title:"{Province_State}",content:[{type:"media",mediaInfos:[{type:"column-chart",caption:"{Province_State} has <strong/>{Confirmed}</strong> confirmed cases, <strong>{Recovered}</strong> recovered and <strong>{Deaths}</strong> deaths.",value:{fields:["Confirmed","Recovered","Deaths"],normalizeField:null,tooltipField:"Confirmed cases, recovered, and deaths"}}]}]},labelingInfo:[{symbol:{type:"text",color:"white",haloColor:"black",haloSize:"1px",font:{size:"12px",family:"Noto Sans",style:"italic",weight:"bold"}},labelPlacement:"center-center",labelExpressionInfo:{expression:"$feature.Confirmed"}}],renderer:{type:"simple",symbol:{type:"simple-marker",size:20,color:"#67b7dc",outline:{width:.5,color:"white"}},label:"# of confirmed cases by state",visualVariables:[{type:"size",field:"Confirmed",minDataValue:20,maxDataValue:25e3,minSize:10,maxSize:60}]}}),h=new c({view:e.view});e.view.ui.add(h,"top-right");var f=new l({view:e.view});e.view.ui.add(f,"top-right");var v=new o({view:e.view,useHeadingEnabled:!1,goToOverride:function(e,t){return t.target.scale=1500,e.goTo(t.target)}});e.view.ui.add(v,"top-left");var w=new d({view:e.view});e.view.ui.add(w,"top-left"),u.add(p);var b=new m({view:e.view,layerInfos:[{layer:p,title:"# of cases"}]});e.view.ui.add(b,"bottom-right")}))}},{key:"componentWillUnmount",value:function(){this.view&&(this.view.container=null)}},{key:"render",value:function(){return r.a.createElement("div",{className:"webmap",ref:this.mapRef})}}]),t}(r.a.Component);a(17);var f=function(){return r.a.createElement("div",{id:"contact",className:"footer"},r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("p",null,r.a.createElement("p",null,"Data sources are WHO, US CDC, China NHC, ECDC, and DXY and the map layer can be found ",r.a.createElement("a",{target:"_blank",href:"https://www.arcgis.com/home/item.html?id=c0b356e20b30490c8b8b4c7bb9554e7c"},"here"),"."),r.a.createElement("br",null),r.a.createElement("p",null,"Additional Resources:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"},"John Hopkins University COVID-19 Dashboard")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://who.maps.arcgis.com/apps/opsdashboard/index.html#/c88e37cfc43b4ed3baf977d77e4a0667"},"WHO COVID-19 Dashboard")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://storymaps.arcgis.com/stories/4fdc0d03d3a34aa485de1fb0d2650ee0"},"Coronavirus Story Map"))))))};var v=function(){return r.a.createElement("div",{className:"App has-text-centered"},r.a.createElement("h1",{className:"title"},"Spread of COVID-19 Cases in the United States"),r.a.createElement("h2",{className:"subtitle"},"Click on each circle for more details."),r.a.createElement(h,null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.7dc79f8f.chunk.js.map