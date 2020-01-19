/*
* Kendo UI v2014.3.1119 (http://www.telerik.com/kendo-ui)
* Copyright 2014 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
!function(e,define){define(["./kendo.core.min"],e)}(function(){return function(e,t){var n=window.kendo,i=n.caret,r=n.keys,o=n.ui,a=o.Widget,s=".kendoMaskedTextBox",l=e.proxy,c=(n.support.propertyChangeEvent?"propertychange":"input")+s,d="k-state-disabled",h="disabled",u="readonly",f="change",p=a.extend({init:function(t,r){var o,l,c=this;a.fn.init.call(c,t,r),c._rules=e.extend({},c.rules,c.options.rules),t=c.element,o=t[0],c.wrapper=t,c._tokenize(),c._reset(),c.element.addClass("k-textbox").attr("autocomplete","off").on("focus"+s,function(){var e=o.value;e?c._togglePrompt(!0):o.value=c._old=c._emptyMask,c._oldValue=e,c._timeoutId=setTimeout(function(){i(t,0,e?c._maskLength:0)})}).on("focusout"+s,function(){var e=t.val();clearTimeout(c._timeoutId),o.value=c._old="",e!==c._emptyMask&&(o.value=c._old=e),c._change(),c._togglePrompt()}),l=t.is("[disabled]"),l?c.enable(!1):c.readonly(t.is("[readonly]")),c.value(c.options.value||t.val()),n.notify(c)},options:{name:"MaskedTextBox",promptChar:"_",clearPromptChar:!1,culture:"",rules:{},value:"",mask:""},events:[f],rules:{0:/\d/,9:/\d|\s/,"#":/\d|\s|\+|\-/,L:/[a-zA-Z]/,"?":/[a-zA-Z]|\s/,"&":/\S/,C:/./,A:/[a-zA-Z0-9]/,a:/[a-zA-Z0-9]|\s/},setOptions:function(t){var n=this;a.fn.setOptions.call(n,t),n._rules=e.extend({},n.rules,n.options.rules),n._tokenize(),this._unbindInput(),this._bindInput(),n.value(n.element.val())},destroy:function(){var e=this;e.element.off(s),e._form&&e._form.off("reset",e._resetHandler),a.fn.destroy.call(e)},value:function(e){var i=this.element,r=this._emptyMask;return e===t?this.element.val():(null===e&&(e=""),r?(e=this._unmask(e+""),i.val(e?r:""),this._mask(0,this._maskLength,e),e=i.val(),this._oldValue=e,n._activeElement()!==i&&(e===r?i.val(""):this._togglePrompt()),t):(i.val(e),t))},_togglePrompt:function(e){var t=this.element[0],n=t.value;this.options.clearPromptChar&&(n=e?this._oldValue:n.replace(RegExp(this.options.promptChar,"g")," "),t.value=this._old=n)},readonly:function(e){this._editable({readonly:e===t?!0:e,disable:!1})},enable:function(e){this._editable({readonly:!1,disable:!(e=e===t?!0:e)})},_bindInput:function(){var e=this;e._maskLength&&e.element.on("keydown"+s,l(e._keydown,e)).on("keypress"+s,l(e._keypress,e)).on("paste"+s,l(e._paste,e)).on(c,l(e._propertyChange,e))},_unbindInput:function(){this.element.off("keydown"+s).off("keypress"+s).off("paste"+s).off(c)},_editable:function(e){var t=this,n=t.element,i=e.disable,r=e.readonly;t._unbindInput(),r||i?n.attr(h,i).attr(u,r).toggleClass(d,i):(n.removeAttr(h).removeAttr(u).removeClass(d),t._bindInput())},_change:function(){var e=this,t=e.value();t!==e._oldValue&&(e._oldValue=t,e.trigger(f),e.element.trigger(f))},_propertyChange:function(){var e,t,n=this,r=n.element[0],o=r.value;o===n._old||n._pasting||(t=i(r)[0],e=n._unmask(o.substring(t),t),r.value=n._old=o.substring(0,t)+n._emptyMask.substring(t),n._mask(t,t,e),i(r,t))},_paste:function(e){var t=this,n=e.target,r=i(n),o=r[0],a=r[1],s=t._unmask(n.value.substring(a),a);t._pasting=!0,setTimeout(function(){var e=n.value,r=e.substring(o,i(n)[0]);n.value=t._old=e.substring(0,o)+t._emptyMask.substring(o),t._mask(o,o,r),o=i(n)[0],t._mask(o,o,s),i(n,o),t._pasting=!1})},_reset:function(){var t=this,n=t.element,i=n.attr("form"),r=i?e("#"+i):n.closest("form");r[0]&&(t._resetHandler=function(){setTimeout(function(){t.value(n[0].value)})},t._form=r.on("reset",t._resetHandler))},_keydown:function(e){var n,o=e.keyCode,a=this.element[0],s=i(a),l=s[0],c=s[1],d=o===r.BACKSPACE;d||o===r.DELETE?(l===c&&(d?l-=1:c+=1,n=this._find(l,d)),n!==t&&n!==l?(d&&(n+=1),i(a,n)):l>-1&&this._mask(l,c,"",d),e.preventDefault()):o===r.ENTER&&this._change()},_keypress:function(e){var t,n;0===e.which||e.ctrlKey||e.keyCode===r.ENTER||(t=String.fromCharCode(e.which),n=i(this.element),this._mask(n[0],n[1],t),(e.keyCode===r.BACKSPACE||t)&&e.preventDefault())},_find:function(e,t){var n=this.element.val()||this._emptyMask,i=1;for(t===!0&&(i=-1);e>-1||this._maskLength>=e;){if(n.charAt(e)!==this.tokens[e])return e;e+=i}return-1},_mask:function(e,r,o,a){var s,l,c,d,h=this.element[0],u=h.value||this._emptyMask,f=this.options.promptChar,p=0;for(e=this._find(e,a),e>r&&(r=e),l=this._unmask(u.substring(r),r),o=this._unmask(o,e),s=o.length,o&&(l=l.replace(RegExp("^_{0,"+s+"}"),"")),o+=l,u=u.split(""),c=o.charAt(p);this._maskLength>e;)u[e]=c||f,c=o.charAt(++p),d===t&&p>s&&(d=e),e=this._find(e+1);h.value=this._old=u.join(""),n._activeElement()===h&&(d===t&&(d=this._maskLength),i(h,d))},_unmask:function(t,n){var i,r,o,a,s,l,c,d;if(!t)return"";for(t=(t+"").split(""),o=0,a=n||0,s=this.options.promptChar,l=t.length,c=this.tokens.length,d="";c>a&&(i=t[o],r=this.tokens[a],i===r||i===s?(d+=i===s?s:"",o+=1,a+=1):"string"!=typeof r?((r.test&&r.test(i)||e.isFunction(r)&&r(i))&&(d+=i,a+=1),o+=1):a+=1,!(o>=l)););return d},_tokenize:function(){for(var e,t,i,r,o=[],a=0,s=this.options.mask||"",l=s.split(""),c=l.length,d=0,h="",u=this.options.promptChar,f=n.getCulture(this.options.culture).numberFormat,p=this._rules;c>d;d++)if(e=l[d],t=p[e])o[a]=t,h+=u,a+=1;else for("."===e||","===e?e=f[e]:"$"===e?e=f.currency.symbol:"\\"===e&&(d+=1,e=l[d]),e=e.split(""),i=0,r=e.length;r>i;i++)o[a]=e[i],h+=e[i],a+=1;this.tokens=o,this._emptyMask=h,this._maskLength=h.length}});o.plugin(p)}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(e,t){t()});