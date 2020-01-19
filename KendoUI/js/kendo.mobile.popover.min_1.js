/*
* Kendo UI v2014.3.1119 (http://www.telerik.com/kendo-ui)
* Copyright 2014 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
!function(e,define){define(["./kendo.popup.min","./kendo.mobile.pane.min"],e)}(function(){return function(e){var t=window.kendo,n=t.mobile,i=n.ui,r="hide",o="open",a="close",s='<div class="km-popup-wrapper" />',l='<div class="km-popup-arrow" />',c='<div class="km-popup-overlay" />',d="km-up km-down km-left km-right",u=i.Widget,h={down:{origin:"bottom center",position:"top center"},up:{origin:"top center",position:"bottom center"},left:{origin:"center left",position:"center right",collision:"fit flip"},right:{origin:"center right",position:"center left",collision:"fit flip"}},f={animation:{open:{effects:"fade:in",duration:0},close:{effects:"fade:out",duration:400}}},p={horizontal:{offset:"top",size:"height"},vertical:{offset:"left",size:"width"}},g={up:"down",down:"up",left:"right",right:"left"},m=u.extend({init:function(n,i){var o,a,d=this,g=n.closest(".km-modalview-wrapper"),m=n.closest(".km-root").children(".km-pane").first(),v=g[0]?g:m;i.viewport?m=i.viewport:m[0]||(m=window),i.container?v=i.container:v[0]||(v=document.body),o={viewport:m,copyAnchorStyles:!1,autosize:!0,open:function(){d.overlay.show()},activate:e.proxy(d._activate,d),deactivate:function(){d.overlay.hide(),d._apiCall||d.trigger(r),d._apiCall=!1}},u.fn.init.call(d,n,i),n=d.element,i=d.options,n.wrap(s).addClass("km-popup").show(),a=d.options.direction.match(/left|right/)?"horizontal":"vertical",d.dimensions=p[a],d.wrapper=n.parent().css({width:i.width,height:i.height}).addClass("km-popup-wrapper km-"+i.direction).hide(),d.arrow=e(l).prependTo(d.wrapper).hide(),d.overlay=e(c).appendTo(v).hide(),o.appendTo=d.overlay,i.className&&d.overlay.addClass(i.className),d.popup=new t.ui.Popup(d.wrapper,e.extend(!0,o,f,h[i.direction]))},options:{name:"Popup",width:240,height:"",direction:"down",container:null,viewport:null},events:[r],show:function(t){this.popup.options.anchor=e(t),this.popup.open()},hide:function(){this._apiCall=!0,this.popup.close()},destroy:function(){u.fn.destroy.call(this),this.popup.destroy(),this.overlay.remove()},target:function(){return this.popup.options.anchor},_activate:function(){var t=this,n=t.options.direction,i=t.dimensions,r=i.offset,o=t.popup,a=o.options.anchor,s=e(a).offset(),l=e(o.element).offset(),c=o.flipped?g[n]:n,u=2*t.arrow[i.size](),h=t.element[i.size]()-t.arrow[i.size](),f=e(a)[i.size](),p=s[r]-l[r]+f/2;u>p&&(p=u),p>h&&(p=h),t.wrapper.removeClass(d).addClass("km-"+c),t.arrow.css(r,p).show()}}),v=u.extend({init:function(n,r){var o,s=this;s.initialOpen=!1,u.fn.init.call(s,n,r),o=e.extend({className:"km-popover-root",hide:function(){s.trigger(a)}},this.options.popup),s.popup=new m(s.element,o),s.popup.overlay.on("move",function(e){e.target==s.popup.overlay[0]&&e.preventDefault()}),s.pane=new i.Pane(s.element,e.extend(this.options.pane,{$angular:this.options.$angular})),s.pane.navigateToInitial(),t.notify(s,i)},options:{name:"PopOver",popup:{},pane:{}},events:[o,a],open:function(e){this.popup.show(e),this.initialOpen?this.pane.view()._invokeNgController():(this.pane.navigate(""),this.popup.popup._position(),this.initialOpen=!0)},openFor:function(e){this.open(e),this.trigger(o,{target:this.popup.target()})},close:function(){this.popup.hide()},destroy:function(){u.fn.destroy.call(this),this.pane.destroy(),this.popup.destroy(),t.destroy(this.element)}});i.plugin(m),i.plugin(v)}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(e,t){t()});