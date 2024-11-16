(function(){"use strict";var e={402:function(e,t,o){var a=o(751),n=o(641);const s={id:"app"};function r(e,t,o,a,r,l){const c=(0,n.g2)("VehicleForm");return(0,n.uX)(),(0,n.CE)("div",s,[(0,n.bF)(c)])}var l=o(33);const c=["value"],d=["disabled"],i=["value"],u=["disabled"],f=["value"];function h(e,t,o,s,r,h){return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",null,"Select Vehicle",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.selectedYear=e),onChange:t[1]||(t[1]=(...e)=>h.fetchMakes&&h.fetchMakes(...e))},[t[5]||(t[5]=(0,n.Lk)("option",{disabled:"",value:""},"Select Year",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.years,(e=>((0,n.uX)(),(0,n.CE)("option",{key:e,value:e},(0,l.v_)(e),9,c)))),128))],544),[[a.u1,r.selectedYear]]),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.selectedMake=e),onChange:t[3]||(t[3]=(...e)=>h.fetchModels&&h.fetchModels(...e)),disabled:!r.selectedYear},[t[6]||(t[6]=(0,n.Lk)("option",{disabled:"",value:""},"Select Make",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.makes,(e=>((0,n.uX)(),(0,n.CE)("option",{key:e,value:e},(0,l.v_)(e),9,i)))),128))],40,d),[[a.u1,r.selectedMake]]),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>r.selectedModel=e),disabled:!r.selectedMake},[t[7]||(t[7]=(0,n.Lk)("option",{disabled:"",value:""},"Select Model",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.models,(e=>((0,n.uX)(),(0,n.CE)("option",{key:e,value:e},(0,l.v_)(e),9,f)))),128))],8,u),[[a.u1,r.selectedModel]])])}var p=o(335);p.A.defaults.baseURL="https://rateengine.ship.cars/v2";var v={data(){return{years:[],makes:[],models:[],selectedYear:"",selectedMake:"",selectedModel:""}},methods:{async fetchYears(){try{const e=await p.A.get("/vehicles/years/",{params:{token:"5cbe12fb62f4941267d623499a2a4fd5948fd3ef"}});console.log(e.data),this.years=e.data.years}catch(e){console.error("Error fetching years:",e),e.response&&(console.log("Response data:",e.response.data),console.log("Response status:",e.response.status),console.log("Response headers:",e.response.headers)),e.request&&console.log("Request data:",e.request)}},async fetchMakes(){if(this.selectedYear)try{const e=await p.A.get(`/api/v2/vehicles/makes/?year=${this.selectedYear}&token=5cbe12fb62f4941267d623499a2a4fd5948fd3ef`);this.makes=e.data.makes,this.selectedMake="",this.models=[]}catch(e){console.error("Error fetching makes:",e)}},async fetchModels(){if(this.selectedMake)try{const e=await p.A.get(`/api/v2/vehicles/models/?year=${this.selectedYear}&make=${this.selectedMake}&token=5cbe12fb62f4941267d623499a2a4fd5948fd3ef`);this.models=e.data.models}catch(e){console.error("Error fetching models:",e)}}},created(){this.fetchYears()}},b=o(262);const k=(0,b.A)(v,[["render",h],["__scopeId","data-v-1006c9ae"]]);var m=k,y={name:"App",components:{VehicleForm:m}};const g=(0,b.A)(y,[["render",r]]);var M=g;(0,a.Ef)(M).mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,s){if(!a){var r=1/0;for(i=0;i<e.length;i++){a=e[i][0],n=e[i][1],s=e[i][2];for(var l=!0,c=0;c<a.length;c++)(!1&s||r>=s)&&Object.keys(o.O).every((function(e){return o.O[e](a[c])}))?a.splice(c--,1):(l=!1,s<r&&(r=s));if(l){e.splice(i--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var i=e.length;i>0&&e[i-1][2]>s;i--)e[i]=e[i-1];e[i]=[a,n,s]}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,s,r=a[0],l=a[1],c=a[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var i=c(o)}for(t&&t(a);d<r.length;d++)s=r[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(i)},a=self["webpackChunkvehicle_dropdown"]=self["webpackChunkvehicle_dropdown"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(402)}));a=o.O(a)})();
//# sourceMappingURL=app.d09d42a3.js.map