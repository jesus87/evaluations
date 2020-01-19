/*
* Kendo UI v2014.3.1119 (http://www.telerik.com/kendo-ui)
* Copyright 2014 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
!function(e,define){define(["./kendo.core.min"],e)}(function(){return function(e,t){function n(r,s){var l,c,d,u,h,p,f,g,m=[],v=r.logic||"and",_=r.filters;for(l=0,c=_.length;c>l;l++)r=_[l],d=r.field,f=r.value,p=r.operator,r.filters?r=n(r,s):(g=r.ignoreCase,d=d.replace(/\./g,"/"),r=o[p],s&&(r=a[p]),r&&f!==t&&(u=e.type(f),"string"===u?(h="'{1}'",f=f.replace(/'/g,"''"),g===!0&&(d="tolower("+d+")")):h="date"===u?s?"{1:yyyy-MM-ddTHH:mm:ss+00:00}":"datetime'{1:yyyy-MM-ddTHH:mm:ss}'":"{1}",r.length>3?"substringof"!==r?h="{0}({2},"+h+")":(h="{0}("+h+",{2})","doesnotcontain"===p&&(s?(h="{0}({2},'{1}') eq -1",r="indexof"):h+=" eq false")):h="{2} {0} "+h,r=i.format(h,r,f,d))),m.push(r);return r=m.join(" "+v+" "),m.length>1&&(r="("+r+")"),r}var i=window.kendo,r=e.extend,o={eq:"eq",neq:"ne",gt:"gt",gte:"ge",lt:"lt",lte:"le",contains:"substringof",doesnotcontain:"substringof",endswith:"endswith",startswith:"startswith"},a=r({},o,{contains:"contains"}),s={pageSize:e.noop,page:e.noop,filter:function(e,t,i){t&&(e.$filter=n(t,i))},sort:function(t,n){var i=e.map(n,function(e){var t=e.field.replace(/\./g,"/");return"desc"===e.dir&&(t+=" desc"),t}).join(",");i&&(t.$orderby=i)},skip:function(e,t){t&&(e.$skip=t)},take:function(e,t){t&&(e.$top=t)}},l={read:{dataType:"jsonp"}};r(!0,i.data,{schemas:{odata:{type:"json",data:function(e){return e.d.results||[e.d]},total:"d.__count"}},transports:{odata:{read:{cache:!0,dataType:"jsonp",jsonp:"$callback"},update:{cache:!0,dataType:"json",contentType:"application/json",type:"PUT"},create:{cache:!0,dataType:"json",contentType:"application/json",type:"POST"},destroy:{cache:!0,dataType:"json",type:"DELETE"},parameterMap:function(e,t,n){var r,o,a,c;if(e=e||{},t=t||"read",c=(this.options||l)[t],c=c?c.dataType:"json","read"===t){r={$inlinecount:"allpages"},"json"!=c&&(r.$format="json");for(a in e)s[a]?s[a](r,e[a],n):r[a]=e[a]}else{if("json"!==c)throw Error("Only json dataType can be used for "+t+" operation.");if("destroy"!==t){for(a in e)o=e[a],"number"==typeof o&&(e[a]=o+"");r=i.stringify(e)}}return r}}}}),r(!0,i.data,{schemas:{"odata-v4":{type:"json",data:function(e){return e.value?e.value:(delete e["odata.metadata"],[e])},total:function(e){return e["@odata.count"]}}},transports:{"odata-v4":{read:{cache:!0,dataType:"json"},update:{cache:!0,dataType:"json",contentType:"application/json;IEEE754Compatible=true",type:"PUT"},create:{cache:!0,dataType:"json",contentType:"application/json;IEEE754Compatible=true",type:"POST"},destroy:{cache:!0,dataType:"json",type:"DELETE"},parameterMap:function(e,t){var n=i.data.transports.odata.parameterMap(e,t,!0);return"read"==t&&(n.$count=!0,delete n.$inlinecount),n}}}})}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(e,t){t()});