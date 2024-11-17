(function(){"use strict";var e={3939:function(e,t,a){var o=a(3751),r=a(641);const n={id:"app"};function c(e,t,a,o,c,l){const s=(0,r.g2)("VehicleForm");return(0,r.uX)(),(0,r.CE)("div",n,[(0,r.bF)(s)])}var l=a(33);const s=["value"],d=["disabled"],i=["value"],u=["disabled"],f=["value"];function p(e,t,a,n,c,p){return(0,r.uX)(),(0,r.CE)("div",null,[t[8]||(t[8]=(0,r.Lk)("h1",null,"Select Vehicle",-1)),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.selectedYear=e),onChange:t[1]||(t[1]=(...e)=>p.fetchMakes&&p.fetchMakes(...e))},[t[5]||(t[5]=(0,r.Lk)("option",{disabled:"",value:""},"Select Year",-1)),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(c.years,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,l.v_)(e),9,s)))),128))],544),[[o.u1,c.selectedYear]]),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>c.selectedMake=e),onChange:t[3]||(t[3]=(...e)=>p.fetchModels&&p.fetchModels(...e)),disabled:!c.selectedYear},[t[6]||(t[6]=(0,r.Lk)("option",{disabled:"",value:""},"Select Make",-1)),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(c.makes,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,l.v_)(e),9,i)))),128))],40,d),[[o.u1,c.selectedMake]]),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>c.selectedModel=e),disabled:!c.selectedMake},[t[7]||(t[7]=(0,r.Lk)("option",{disabled:"",value:""},"Select Model",-1)),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(c.models,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,l.v_)(e),9,f)))),128))],8,u),[[o.u1,c.selectedModel]])])}a(1454);var h=a(4335),v={data(){return{years:[],makes:[],models:[],selectedYear:"",selectedMake:"",selectedModel:""}},methods:{async fetchYears(){try{const e=await h.A.get("https://vehicle-dropdown.vercel.app/api/fetchData",{params:{type:"years",token:"5cbe12fb62f4941267d623499a2a4fd5948fd3ef"}}),t=e.data.map((e=>e.year));this.years=t}catch(e){console.error("Error fetching years:",e)}},async fetchMakes(){if(this.selectedYear)try{const e=await h.A.get("https://vehicle-dropdown.vercel.app/api/fetchData",{params:{type:"makes",token:"5cbe12fb62f4941267d623499a2a4fd5948fd3ef",year:this.selectedYear}}),t=e.data.map((e=>e.make));this.makes=t,this.selectedMake="",this.models=[]}catch(e){console.error("Error fetching makes:",e)}},async fetchModels(){if(this.selectedMake)try{const e=await h.A.get("https://vehicle-dropdown.vercel.app/api/fetchData",{params:{type:"models",token:"5cbe12fb62f4941267d623499a2a4fd5948fd3ef",year:this.selectedYear,make:this.selectedMake}}),t=e.data.map((e=>e.model));this.models=t}catch(e){console.error("Error fetching makes:",e)}}},created(){this.fetchYears()}},k=a(6262);const b=(0,k.A)(v,[["render",p],["__scopeId","data-v-8bd34aa4"]]);var m=b,y={name:"App",components:{VehicleForm:m}};const g=(0,k.A)(y,[["render",c]]);var M=g;(0,o.Ef)(M).mount("#app")}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,n){if(!o){var c=1/0;for(i=0;i<e.length;i++){o=e[i][0],r=e[i][1],n=e[i][2];for(var l=!0,s=0;s<o.length;s++)(!1&n||c>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[s])}))?o.splice(s--,1):(l=!1,n<c&&(c=n));if(l){e.splice(i--,1);var d=r();void 0!==d&&(t=d)}}return t}n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[o,r,n]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,n,c=o[0],l=o[1],s=o[2],d=0;if(c.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var i=s(a)}for(t&&t(o);d<c.length;d++)n=c[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(i)},o=self["webpackChunkvehicle_dropdown"]=self["webpackChunkvehicle_dropdown"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(3939)}));o=a.O(o)})();
//# sourceMappingURL=app.e8c99631.js.map