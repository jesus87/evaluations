/*
* Kendo UI v2014.3.1119 (http://www.telerik.com/kendo-ui)
* Copyright 2014 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
!function(e,define){define(["./kendo.core.min","./kendo.binder.min","./kendo.fx.min"],e)}(function(){return function(e){function t(e){if(!e)return{};var t=e.match(v)||[];return{type:t[1],direction:t[3],reverse:"reverse"===t[5]}}var n=window.kendo,i=n.Observable,r="SCRIPT",o="init",a="show",s="hide",l="transitionStart",c="transitionEnd",d="attach",u="detach",h=/unrecognized expression/,p=i.extend({init:function(e,t){var r=this;t=t||{},i.fn.init.call(r),r.content=e,r.id=n.guid(),r.tagName=t.tagName||"div",r.model=t.model,r._wrap=t.wrap!==!1,this._evalTemplate=t.evalTemplate||!1,r._fragments={},r.bind([o,a,s,l,c],t)},render:function(t){var i=this,r=!i.element;return r&&(i.element=i._createElement()),t&&e(t).append(i.element),r&&(n.bind(i.element,i.model),i.trigger(o)),t&&(i._eachFragment(d),i.trigger(a)),i.element},clone:function(){return new f(this)},triggerBeforeShow:function(){return!0},showStart:function(){this.element.css("display","")},showEnd:function(){},hideStart:function(){},hideEnd:function(){this.hide()},beforeTransition:function(e){this.trigger(l,{type:e})},afterTransition:function(e){this.trigger(c,{type:e})},hide:function(){this._eachFragment(u),this.element.detach(),this.trigger(s)},destroy:function(){var e=this.element;e&&(n.unbind(e),n.destroy(e),e.remove())},fragments:function(t){e.extend(this._fragments,t)},_eachFragment:function(e){for(var t in this._fragments)this._fragments[t][e](this,t)},_createElement:function(){var t,i,o=this,a="<"+o.tagName+" />";try{i=e(document.getElementById(o.content)||o.content),i[0].tagName===r&&(i=i.html())}catch(s){h.test(s.message)&&(i=o.content)}return"string"==typeof i?(i=i.replace(/^\s+|\s+$/g,""),o._evalTemplate&&(i=n.template(i)(o.model||{})),t=e(a).append(i),o._wrap||(t=t.contents())):(t=i,o._wrap&&(t=t.wrapAll(a).parent())),t}}),f=n.Class.extend({init:function(t){e.extend(this,{element:t.element.clone(!0),transition:t.transition,id:t.id}),t.element.parent().append(this.element)},hideStart:e.noop,hideEnd:function(){this.element.remove()},beforeTransition:e.noop,afterTransition:e.noop}),g=p.extend({init:function(e,t){p.fn.init.call(this,e,t),this.containers={}},container:function(e){var t=this.containers[e];return t||(t=this._createContainer(e),this.containers[e]=t),t},showIn:function(e,t,n){this.container(e).show(t,n)},_createContainer:function(e){var t,n=this.render(),i=n.find(e);if(!i.length&&n.is(e)){if(!n.is(e))throw Error("can't find a container with the specified "+e+" selector");i=n}return t=new _(i),t.bind("accepted",function(e){e.view.render(i)}),t}}),m=p.extend({attach:function(e,t){e.element.find(t).replaceWith(this.render())},detach:function(){}}),v=/^(\w+)(:(\w+))?( (\w+))?$/,_=i.extend({init:function(e){i.fn.init.call(this),this.container=e,this.history=[],this.view=null,this.running=!1},after:function(){this.running=!1,this.trigger("complete",{view:this.view}),this.trigger("after")},end:function(){this.view.showEnd(),this.previous.hideEnd(),this.after()},show:function(e,i,r){if(!e.triggerBeforeShow())return this.trigger("after"),!1;r=r||e.id;var o=this,a=e===o.view?e.clone():o.view,s=o.history,l=s[s.length-2]||{},c=l.id===r,d=i||(c?s[s.length-1].transition:e.transition),u=t(d);return o.running&&o.effect.stop(),"none"===d&&(d=null),o.trigger("accepted",{view:e}),o.view=e,o.previous=a,o.running=!0,c?s.pop():s.push({id:r,transition:d}),a?(a.hideStart(),d&&n.effects.enabled?(e.element.addClass("k-fx-hidden"),e.showStart(),c&&!i&&(u.reverse=!u.reverse),o.effect=n.fx(e.element).replace(a.element,u.type).beforeTransition(function(){e.beforeTransition("show"),a.beforeTransition("hide")}).afterTransition(function(){e.afterTransition("show"),a.afterTransition("hide")}).direction(u.direction).setReverse(u.reverse),o.effect.run().then(function(){o.end()})):(e.showStart(),o.end()),!0):(e.showStart(),e.showEnd(),o.after(),!0)}});n.ViewContainer=_,n.Fragment=m,n.Layout=g,n.View=p,n.ViewClone=f}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(e,t){t()});