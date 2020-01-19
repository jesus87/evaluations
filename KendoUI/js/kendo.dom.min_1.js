/*
* Kendo UI v2014.3.1119 (http://www.telerik.com/kendo-ui)
* Copyright 2014 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
!function(e,define){define(["./kendo.core.min"],e)}(function(){return function(e){function t(){this.node=null}function n(e,t,n){this.nodeName=e,this.attr=t||{},this.cssText=null,this.children=n||[]}function i(e){this.nodeValue=e}function o(e){this.html=e}function r(e){return new o(e)}function a(e,t,i){return new n(e,t,i)}function s(e){return new i(e)}function l(e){this.root=e,this.children=[]}t.prototype={remove:function(){this.node.parentNode.removeChild(this.node)}},n.prototype=new t,n.prototype.render=function(e,t){var n,i,o,r,a,s,l,c,h=this.children,d=h.length;if(t&&t.nodeName===this.nodeName){if(n=t.node,o=t.children,Math.abs(o.length-d)>2)return void this.render({appendChild:function(n){e.replaceChild(n,t.node)}},null);for(i=0;d>i;i++)h[i].render(n,o[i]);for(i=d,d=o.length;d>i;i++)o[i].remove()}else{for(t&&(t.remove(),t=null),n=document.createElement(this.nodeName),i=0;d>i;i++)h[i].render(n,null);e.appendChild(n)}r=this.attr;for(a in r)if(!t||r[a]!==t.attr[a])if(void 0!==n[a])if("style"!==a)n[a]=r[a];else{s="",l=r[a];for(c in l)s+=c,s+=":",s+=l[c],s+=";";t&&t.cssText===s||(n.style.cssText=s),this.cssText=s}else n.setAttribute(a,r[a]);if(t)for(a in t.attr)void 0===r[a]&&(void 0!==n[a]?"style"===a?n.style.cssText="":"className"===a?n[a]="":n.removeAttribute(a):n.removeAttribute(a));this.node=n},i.prototype=new t,i.prototype.nodeName="#text",i.prototype.render=function(e,t){var n;t&&t.nodeName===this.nodeName?(n=t.node,this.nodeValue!==t.nodeValue&&(n.nodeValue=this.nodeValue)):(t&&t.remove(),n=document.createTextNode(this.nodeValue),e.appendChild(n)),this.node=n},o.prototype={nodeName:"#html",remove:function(){for(var e=0;this.nodes.length>e;e++)this.nodes[e].parentNode.removeChild(this.nodes[e])},render:function(e,t){var n,i;if(t&&t.nodeName===this.nodeName&&t.html===this.html)this.nodes=t.nodes.slice(0);else for(t&&t.remove(),n=e.lastChild,e.insertAdjacentHTML("beforeend",this.html),this.nodes=[],i=n?n.nextSibling:e.firstChild;i;i=i.nextSibling)this.nodes.push(i)}},l.prototype={html:r,element:a,text:s,render:function(e){var t,n,i=this.children;for(t=0,n=e.length;n>t;t++)e[t].render(this.root,i[t]);for(t=n;i.length>t;t++)i[t].remove();this.children=e}},e.dom={html:r,text:s,element:a,Tree:l}}(window.kendo),window.kendo},"function"==typeof define&&define.amd?define:function(e,t){t()});