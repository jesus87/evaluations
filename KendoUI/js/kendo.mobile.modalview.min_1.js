/*
* Kendo UI v2014.3.1119 (http://www.telerik.com/kendo-ui)
* Copyright 2014 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
!function(e,define){define(["./kendo.mobile.shim.min","./kendo.mobile.view.min"],e)}(function(){return function(e){var t=window.kendo,n=t.mobile.ui,i=n.Shim,r=n.Widget,o="beforeOpen",a="open",s="close",l="init",c='<div class="km-modalview-wrapper" />',d=n.View.extend({init:function(e,t){var n=this;r.fn.init.call(n,e,t),n._id(),n._wrap(),n._shim(),this.options.$angular||(n._layout(),n._scroller(),n._model()),n.element.css("display",""),n.trigger(l)},events:[l,o,a,s],options:{name:"ModalView",modal:!0,width:null,height:null},destroy:function(){r.fn.destroy.call(this),this.shim.destroy()},open:function(t){var n=this;n.target=e(t),n.shim.show(),n._invokeNgController(),n.trigger("show",{view:n})},openFor:function(e){this.trigger(o,{target:e})||(this.open(e),this.trigger(a,{target:e}))},close:function(){this.element.is(":visible")&&!this.trigger(s)&&this.shim.hide()},_wrap:function(){var e,t,n=this,i=n.element,r=n.options;e=i[0].style.width||"auto",t=i[0].style.height||"auto",i.addClass("km-modalview").wrap(c),n.wrapper=i.parent().css({width:r.width||e||300,height:r.height||t||300}).addClass("auto"==t?" km-auto-height":""),i.css({width:"",height:""})},_shim:function(){var e=this;e.shim=new i(e.wrapper,{modal:e.options.modal,position:"center center",align:"center center",effect:"fade:in",className:"km-modalview-root",hide:function(t){e.trigger(s)&&t.preventDefault()}})}});n.plugin(d)}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(e,t){t()});