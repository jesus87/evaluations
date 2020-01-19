/*
* Kendo UI v2014.3.1119 (http://www.telerik.com/kendo-ui)
* Copyright 2014 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
!function(e,define){define(["./kendo.mobile.popover.min","./kendo.mobile.shim.min"],e)}(function(){return function(e){var t=window.kendo,n=t.support,i=t.mobile.ui,r=i.Shim,o=i.Popup,a=i.Widget,s="open",l="close",c="command",d="li>a",h="actionsheetContext",u='<div class="km-actionsheet-wrapper" />',f=t.template('<li class="km-actionsheet-cancel"><a href="\\#">#:cancel#</a></li>'),p=a.extend({init:function(s,l){var c,h,p,g=this,m=n.mobileOS;a.fn.init.call(g,s,l),l=g.options,p=l.type,s=g.element,h="auto"===p?m&&m.tablet:"tablet"===p,c=h?o:r,l.cancelTemplate&&(f=t.template(l.cancelTemplate)),s.addClass("km-actionsheet").append(f({cancel:g.options.cancel})).wrap(u).on("up",d,"_click").on("click",d,t.preventDefault),g.view().bind("destroy",function(){g.destroy()}),g.wrapper=s.parent().addClass(p?" km-actionsheet-"+p:""),g.shim=new c(g.wrapper,e.extend({modal:m.ios&&7>m.majorVersion,className:"km-actionsheet-root"},g.options.popup)),g._closeProxy=e.proxy(g,"_close"),g.shim.bind("hide",g._closeProxy),h&&t.onResize(g._closeProxy),t.notify(g,i)},events:[s,l,c],options:{name:"ActionSheet",cancel:"Cancel",type:"auto",popup:{height:"auto"}},open:function(t,n){var i=this;i.target=e(t),i.context=n,i.shim.show(t)},close:function(){this.context=this.target=null,this.shim.hide()},openFor:function(e){var t=this,n=e.data(h);t.open(e,n),t.trigger(s,{target:e,context:n})},destroy:function(){a.fn.destroy.call(this),t.unbindResize(this._closeProxy),this.shim.destroy()},_click:function(n){var i,r,o,a;n.isDefaultPrevented()||(i=e(n.currentTarget),r=i.data("action"),r&&(o={target:this.target,context:this.context},a=this.options.$angular,a?this.element.injector().get("$parse")(r)(a[0])(o):t.getter(r)(window)(o)),this.trigger(c,{target:this.target,context:this.context,currentTarget:i}),n.preventDefault(),this._close())},_close:function(e){this.trigger(l)?e.preventDefault():this.close()}});i.plugin(p)}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(e,t){t()});