(window["webpackJsonpweather-app-ts"]=window["webpackJsonpweather-app-ts"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(41)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){var a={"./bolt-solid.svg":25,"./cloud-moon-rain-solid.svg":26,"./cloud-moon-solid.svg":27,"./cloud-showers-heavy-solid.svg":28,"./cloud-solid.svg":29,"./cloud-sun-rain-solid.svg":30,"./cloud-sun-solid.svg":31,"./moon-solid.svg":32,"./poo-storm-solid.svg":33,"./smog-solid.svg":34,"./snowflake-solid.svg":35,"./sun-solid.svg":36,"./temperature-high-solid.svg":37,"./temperature-low-solid.svg":38,"./water-solid.svg":39,"./wind-solid.svg":40};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=24},function(e,t,n){e.exports=n.p+"static/media/bolt-solid.42de93f8.svg"},function(e,t,n){e.exports=n.p+"static/media/cloud-moon-rain-solid.605657a2.svg"},function(e,t,n){e.exports=n.p+"static/media/cloud-moon-solid.7c556317.svg"},function(e,t,n){e.exports=n.p+"static/media/cloud-showers-heavy-solid.904783b4.svg"},function(e,t,n){e.exports=n.p+"static/media/cloud-solid.3052c53b.svg"},function(e,t,n){e.exports=n.p+"static/media/cloud-sun-rain-solid.52915221.svg"},function(e,t,n){e.exports=n.p+"static/media/cloud-sun-solid.e4a580d8.svg"},function(e,t,n){e.exports=n.p+"static/media/moon-solid.399b1420.svg"},function(e,t,n){e.exports=n.p+"static/media/poo-storm-solid.eb9ea3c6.svg"},function(e,t,n){e.exports=n.p+"static/media/smog-solid.c791d5cb.svg"},function(e,t,n){e.exports=n.p+"static/media/snowflake-solid.d9f64049.svg"},function(e,t,n){e.exports=n.p+"static/media/sun-solid.aa59b8a4.svg"},function(e,t,n){e.exports=n.p+"static/media/temperature-high-solid.1de813e4.svg"},function(e,t,n){e.exports=n.p+"static/media/temperature-low-solid.dcbbcdd1.svg"},function(e,t,n){e.exports=n.p+"static/media/water-solid.ab90635d.svg"},function(e,t,n){e.exports=n.p+"static/media/wind-solid.b3304a3d.svg"},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(4),s=n.n(o),r=(n(15),n(1)),c=n.n(r),d=n(2),l=n(5),u=n(6),m=n(8),p=n(7),v=n(9),g=(n(17),n(18),n(19),n(20),function(e){return i.a.createElement("form",{onSubmit:e.getWeather,className:"form-inline searchField"},i.a.createElement("input",{className:"form-control mr-2",type:"text",id:"city",placeholder:"City"}),i.a.createElement("input",{className:"form-control mr-2",type:"text",id:"country",placeholder:"Country Code"}),i.a.createElement("button",{id:"get",className:"btn btn-light",type:"submit"},"Search"))}),f=(n(21),function(e){return i.a.createElement("div",{id:"main-info"},i.a.createElement("div",{className:"text-left px-3"},e.temperature&&i.a.createElement("p",{className:"main-key"},"Temperature:"," ",i.a.createElement("span",{className:"main-value"},e.temperature,i.a.createElement("sup",null,"\xb0"),i.a.createElement("span",{className:"unit"},"C"))),e.description&&i.a.createElement("p",{className:"main-key"},"Conditions: ",i.a.createElement("span",{className:"main-value"},e.description))))}),y=(n(22),function(e){return i.a.createElement("div",{id:"cityAndDate",className:"text-center"},i.a.createElement("div",{className:"city"},e.city&&e.country&&i.a.createElement("p",null,e.city,", ",e.country)),i.a.createElement("div",{className:"date"},e.time&&i.a.createElement("p",null,e.time)))}),h=(n(23),function(e){return void 0!==e.icon?i.a.createElement("div",{id:"weather-icon"},i.a.createElement("img",{src:n(24)("./".concat(e.icon,".svg")),alt:e.description,className:"filter-white"})):i.a.createElement("div",{id:"weather-icon"})}),w="4a64ed09d073cdac231c53e1a3b62181",k="DKEKJ5WGOS2H",E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={temperature:void 0,city:void 0,country:void 0,date:void 0,icon:void 0,humidity:void 0,wind:void 0,temp_min:void 0,temp_max:void 0,description:void 0,error:void 0,background:"sky-gradient-11",latitude:void 0,longitude:void 0,time:void 0},n.getWeather=function(){var e=Object(d.a)(c.a.mark(function e(t){var a,i,o,s,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.elements.city.value,i=t.target.elements.country.value,e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(i,"&appid=").concat(w,"&units=metric"));case 5:return o=e.sent,e.next=8,o.json();case 8:if(s=e.sent,!a||!i){e.next=19;break}return console.log(n.state),n.setState({temperature:s.main.temp,city:s.name,country:s.sys.country,date:n.timeConverter(s.dt),icon:n.iconConverter(s.weather[0].icon),humidity:s.main.humidity,wind:s.wind.speed,temp_min:s.main.temp_min,temp_max:s.main.temp_max,description:s.weather[0].description,background:n.backgroundConverter(s.weather[0].icon),latitude:s.coord.lat,longitude:s.coord.lon}),e.next=14,n.getTimeZone();case 14:r=e.sent,console.log(r.formatted),n.setState({time:r.formatted}),e.next=20;break;case 19:n.setState({temperature:void 0,city:void 0,country:void 0,date:void 0,icon:void 0,humidity:void 0,wind:void 0,temp_min:void 0,temp_max:void 0,description:void 0,background:void 0,latitude:void 0,longitude:void 0});case 20:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.getTimeZone=Object(d.a)(c.a.mark(function e(){var t,a,i,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.latitude,a=n.state.longitude,e.next=4,fetch("http://api.timezonedb.com/v2.1/get-time-zone?key=".concat(k,"&format=json&by=position&lat=").concat(t,"&lng=").concat(a));case 4:return i=e.sent,e.next=7,i.json();case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}},e)})),n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"timeConverter",value:function(e){var t=new Date(1e3*e),n=t.getFullYear(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+a+" "+n+" "+t.getHours()+":"+t.getMinutes()}},{key:"iconConverter",value:function(e){return{"01d":"sun-solid","02d":"cloud-sun-solid","03d":"cloud-solid","04d":"cloud-solid","09d":"cloud-sun-rain-solid","10d":"cloud-showers-heavy-solid","11d":"poo-storm-solid","13d":"snowflake-solid","50d":"smog-solid","01n":"moon-solid","02n":"cloud-moon-solid","03n":"cloud-solid","04n":"cloud-solid","09n":"cloud-moon-rain-solid","10n":"cloud-showers-heavy-solid","11n":"poo-storm-solid","13n":"snowflake-solid","50n":"smog-solid"}[e]}},{key:"backgroundConverter",value:function(e){return{"01d":"sky-gradient-11","02d":"sky-gradient-11","03d":"sky-gradient-13","04d":"sky-gradient-14","09d":"sky-gradient-14","10d":"sky-gradient-15","11d":"sky-gradient-15","13d":"sky-gradient-09","50d":"sky-gradient-08","01n":"sky-gradient-05","02n":"sky-gradient-03","03n":"sky-gradient-03","04n":"sky-gradient-03","09n":"sky-gradient-22","10n":"sky-gradient-03","11n":"sky-gradient-21","13n":"sky-gradient-02","50n":"sky-gradient-20"}[e]}},{key:"render",value:function(){return i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"mobile"},i.a.createElement("div",{className:"screen ".concat(this.state.background)},i.a.createElement(g,{getWeather:this.getWeather}),i.a.createElement("div",{className:"weather-display"},i.a.createElement(y,{city:this.state.city,country:this.state.country,time:this.state.time}),i.a.createElement(h,{icon:this.state.icon,description:this.state.description}),i.a.createElement(f,{temperature:this.state.temperature,description:this.state.description}))),i.a.createElement("div",{className:"home"}),i.a.createElement("div",{className:"inner"}),i.a.createElement("ul",{className:"volume"},i.a.createElement("li",null),i.a.createElement("li",null)),i.a.createElement("ul",{className:"silent"},i.a.createElement("li",null)),i.a.createElement("ul",{className:"sleep"},i.a.createElement("li",null)))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.13cd42fc.chunk.js.map