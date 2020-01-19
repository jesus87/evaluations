/*
* Kendo UI v2014.3.1119 (http://www.telerik.com/kendo-ui)
* Copyright 2014 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
!function(e,define){define(["./kendo.data.min","./kendo.popup.min"],e)}(function(){return function(e,t){function n(t,i){var r,o=!1;return t.filters&&(r=e.grep(t.filters,function(e){return o=n(e,i),e.filters?e.filters.length:e.field!=i}),o||t.filters.length===r.length||(o=!0),t.filters=r),o}var i=window.kendo,r=i.ui,o=r.Widget,a=i.keys,s=i.support,l=i.htmlEncode,c=i._activeElement,d="id",h="li",u="change",f="k-state-focused",p="k-state-hover",g="k-loading",m="open",v="close",_="select",w="selected",y="progress",b="requestEnd",x="width",k=e.extend,C=e.proxy,S=s.browser,T=S.msie&&9>S.version,D=/"/g,A={ComboBox:"DropDownList",DropDownList:"ComboBox"},P=i.ui.DataBoundWidget.extend({init:function(t,n){var i,r=this,a=r.ns;o.fn.init.call(r,t,n),t=r.element,r._isSelect=t.is(_),r._template(),r.ul=e('<ul unselectable="on" class="k-list k-reset"/>').css({overflow:s.kineticScrollNeeded?"":"auto"}).on("mouseenter"+a,h,function(){e(this).addClass(p)}).on("mouseleave"+a,h,function(){e(this).removeClass(p)}).on("click"+a,h,C(r._click,r)).attr({tabIndex:-1,role:"listbox","aria-hidden":!0}),r.list=e("<div class='k-list-container'/>").append(r.ul).on("mousedown"+a,C(r._listMousedown,r)),i=t.attr(d),i&&(r.list.attr(d,i+"-list"),r.ul.attr(d,i+"_listbox"),r._optionID=i+"_option_selected"),r._header(),r._accessors(),r._initValue()},options:{valuePrimitive:!1,headerTemplate:""},setOptions:function(e){o.fn.setOptions.call(this,e),e&&e.enable!==t&&(e.enabled=e.enable)},focus:function(){this._focused.focus()},readonly:function(e){this._editable({readonly:e===t?!0:e,disable:!1})},enable:function(e){this._editable({readonly:!1,disable:!(e=e===t?!0:e)})},_listMousedown:function(e){this.filterInput&&this.filterInput[0]===e.target||e.preventDefault()},_filterSource:function(e,t){var i=this,r=i.options,o=i.dataSource,a=k({},o.filter()||{}),s=n(a,r.dataTextField);(e||s)&&i.trigger("filtering",{filter:e})||(e&&(a=a.filters||[],a.push(e)),t?o.read(a):o.filter(a))},_header:function(){var t,n=this,i=n.options.headerTemplate;e.isFunction(i)&&(i=i({})),i&&(n.list.prepend(i),t=n.ul.prev(),n.header=t[0]?t:null,n.header&&n.angular("compile",function(){return{elements:n.header}}))},_initValue:function(){var e=this,t=e.options.value;null!==t?e.element.val(t):(t=e._accessor(),e.options.value=t),e._old=t},_ignoreCase:function(){var e,t=this,n=t.dataSource.reader.model;n&&n.fields&&(e=n.fields[t.options.dataTextField],e&&e.type&&"string"!==e.type&&(t.options.ignoreCase=!1))},items:function(){return this.ul[0].children},current:function(e){var n=this,i=n._focused.add(n.filterInput),r=n._optionID;return e===t?n._current:(n._current&&(n._current.removeClass(f).removeAttr("aria-selected").removeAttr(d),i.removeAttr("aria-activedescendant")),e&&(e.addClass(f),n._scroll(e),r&&(e.attr("id",r),i.attr("aria-activedescendant",r))),n._current=e,t)},destroy:function(){var e=this,t=e.ns;o.fn.destroy.call(e),e._unbindDataSource(),e.ul.off(t),e.list.off(t),e._touchScroller&&e._touchScroller.destroy(),e.popup.destroy(),e._form&&e._form.off("reset",e._resetHandler)},dataItem:function(n){var i=this;return n===t?n=i.selectedIndex:"number"!=typeof n&&(n=e(i.items()).index(n)),i._data()[n]},_accessors:function(){var e=this,t=e.element,n=e.options,r=i.getter,o=t.attr(i.attr("text-field")),a=t.attr(i.attr("value-field"));!n.dataTextField&&o&&(n.dataTextField=o),!n.dataValueField&&a&&(n.dataValueField=a),e._text=r(n.dataTextField),e._value=r(n.dataValueField)},_aria:function(e){var n=this,i=n.options,r=n._focused.add(n.filterInput);i.suggest!==t&&r.attr("aria-autocomplete",i.suggest?"both":"list"),e=e?e+" "+n.ul[0].id:n.ul[0].id,r.attr("aria-owns",e),n.ul.attr("aria-live",i.filter&&"none"!==i.filter?"polite":"off")},_blur:function(){var e=this;e._change(),e.close()},_change:function(){var e,n=this,i=n.selectedIndex,r=n.options.value,o=n.value();n._isSelect&&!n._bound&&r&&(o=r),o!==n._old?e=!0:i!==t&&i!==n._oldIndex&&(e=!0),e&&(n._old=o,n._oldIndex=i,n.element.trigger(u),n.trigger(u))},_click:function(t){t.isDefaultPrevented()||this._accept(e(t.currentTarget))},_data:function(){return this.dataSource.view()},_enable:function(){var e=this,n=e.options,i=e.element.is("[disabled]");n.enable!==t&&(n.enabled=n.enable),!n.enabled||i?e.enable(!1):e.readonly(e.element.is("[readonly]"))},_focus:function(e){var n=this,i=!0;return n.popup.visible()&&e&&n.trigger(_,{item:e})?(n.close(),t):(n._select(e),n._triggerCascade(i),n._blur(),t)},_index:function(e){var t,n,i=this,r=i._data();for(t=0,n=r.length;n>t;t++)if(i._dataValue(r[t])==e)return t;return-1},_dataValue:function(e){var n=this._value(e);return n===t&&(n=this._text(e)),n},_height:function(e){if(e){var t,n,i=this,r=i.list,o=i.options.height,a=i.popup.visible();n=r.add(r.parent(".k-animation-container")).show(),o=i.ul[0].scrollHeight>o?o:"auto",n.height(o),"auto"!==o&&(t=i.ul[0].offsetTop,t&&(o=r.height()-t)),i.ul.height(o),a||n.hide()}},_adjustListWidth:function(){var e,t,n=this.list,i=n[0].style.width,r=this.wrapper;if(n.data(x)||!i)return e=window.getComputedStyle?window.getComputedStyle(r[0],null):0,t=e?parseFloat(e.width):r.outerWidth(),e&&S.msie&&(t+=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth)),i="border-box"!==n.css("box-sizing")?t-(n.outerWidth()-n.width()):t,n.css({fontFamily:r.css("font-family"),width:i}).data(x,i),!0},_openHandler:function(e){this._adjustListWidth(),this.trigger(m)?e.preventDefault():(this._focused.attr("aria-expanded",!0),this.ul.attr("aria-hidden",!1))},_closeHandler:function(e){this.trigger(v)?e.preventDefault():(this._focused.attr("aria-expanded",!1),this.ul.attr("aria-hidden",!0))},_firstOpen:function(){this._height(this._data().length)},_popup:function(){var e=this;e.popup=new r.Popup(e.list,k({},e.options.popup,{anchor:e.wrapper,open:C(e._openHandler,e),close:C(e._closeHandler,e),animation:e.options.animation,isRtl:s.isRtl(e.wrapper)})),e.popup.one(m,C(e._firstOpen,e)),e._touchScroller=i.touchScroller(e.popup.element)},_makeUnselectable:function(){T&&this.list.find("*").not(".k-textbox").attr("unselectable","on")},_toggleHover:function(t){e(t.currentTarget).toggleClass(p,"mouseenter"===t.type)},_toggle:function(e,n){var i=this,r=s.touch&&s.MSPointers&&s.pointers;e=e!==t?e:!i.popup.visible(),n||r||i._focused[0]===c()||i._focused.focus(),i[e?m:v]()},_scroll:function(e){if(e){e[0]&&(e=e[0]);var t,n,i=this.ul[0],r=e.offsetTop,o=e.offsetHeight,a=i.scrollTop,s=i.clientHeight,l=r+o,c=this._touchScroller;c?(t=c.dimensions.y,t.enabled&&r>t.size&&(r=r-t.size+o+4,c.scrollTo(0,-r))):(n=this.header?this.header.outerHeight():0,n+=this.filterInput?this.filterInput.outerHeight():0,i.scrollTop=a>r?r-n:l>a+s?l-s-n:a)}},_template:function(){var e=this,t=e.options,n=t.template,r=t.dataSource;e._isSelect&&e.element[0].length&&(r||(t.dataTextField=t.dataTextField||"text",t.dataValueField=t.dataValueField||"value")),n?(n=i.template(n),e.template=function(e){return'<li tabindex="-1" role="option" unselectable="on" class="k-item">'+n(e)+"</li>"}):e.template=i.template('<li tabindex="-1" role="option" unselectable="on" class="k-item">${'+i.expr(t.dataTextField,"data")+"}</li>",{useWithBlock:!1})},_triggerCascade:function(e){var t=this,n=t.value();(!t._bound&&n||t._old!==n)&&t.trigger("cascade",{userTriggered:e})},_unbindDataSource:function(){var e=this;e.dataSource.unbind(u,e._refreshHandler).unbind(y,e._progressHandler).unbind(b,e._requestEndHandler).unbind("error",e._errorHandler)}});k(P,{inArray:function(e,t){var n,i,r=t.children;if(!e||e.parentNode!==t)return-1;for(n=0,i=r.length;i>n;n++)if(e===r[n])return n;return-1}}),i.ui.List=P,r.Select=P.extend({init:function(e,t){P.fn.init.call(this,e,t),this._initial=this.element.val()},setDataSource:function(e){this.options.dataSource=e,this._dataSource(),this._bound=!1,this.options.autoBind&&this.dataSource.fetch()},close:function(){this.popup.close()},select:function(e){var n=this;return e===t?n.selectedIndex:(n._select(e),n._triggerCascade(),n._old=n._accessor(),n._oldIndex=n.selectedIndex,t)},search:function(e){var t,n,i,r,o,a;e="string"==typeof e?e:this.text(),t=this,n=e.length,i=t.options,r=i.ignoreCase,o=i.filter,a=i.dataTextField,clearTimeout(t._typing),(!n||n>=i.minLength)&&(t._state="filter","none"===o?t._filter(e):(t._open=!0,t._filterSource({value:r?e.toLowerCase():e,field:a,operator:o,ignoreCase:r})))},_accessor:function(e,n){var i,r=this.element[0],o=this._isSelect,a=r.selectedIndex;return e===t?(o?a>-1&&(i=r.options[a],i&&(e=i.value)):e=r.value,e):(o?(a>-1&&r.options[a].removeAttribute(w),r.selectedIndex=n,i=r.options[n],i&&i.setAttribute(w,w)):r.value=e,t)},_hideBusy:function(){var e=this;clearTimeout(e._busy),e._arrow.removeClass(g),e._focused.attr("aria-busy",!1),e._busy=null},_showBusy:function(){var e=this;e._request=!0,e._busy||(e._busy=setTimeout(function(){e._arrow&&(e._focused.attr("aria-busy",!0),e._arrow.addClass(g))},100))},_requestEnd:function(){this._request=!1},_dataSource:function(){var t,n=this,r=n.element,o=n.options,a=o.dataSource||{};a=e.isArray(a)?{data:a}:a,n._isSelect&&(t=r[0].selectedIndex,t>-1&&(o.index=t),a.select=r,a.fields=[{field:o.dataTextField},{field:o.dataValueField}]),n.dataSource&&n._refreshHandler?n._unbindDataSource():(n._refreshHandler=C(n.refresh,n),n._progressHandler=C(n._showBusy,n),n._requestEndHandler=C(n._requestEnd,n),n._errorHandler=C(n._hideBusy,n)),n.dataSource=i.data.DataSource.create(a).bind(u,n._refreshHandler).bind(y,n._progressHandler).bind(b,n._requestEndHandler).bind("error",n._errorHandler)},_get:function(t){var n,i,r=this,o=r._data();if("function"==typeof t)for(n=0,i=o.length;i>n;n++)if(t(o[n])){t=n;break}if("number"==typeof t){if(0>t)return e();t=e(r.ul[0].children[t])}return t&&t.nodeType&&(t=e(t)),t},_move:function(e){var t,n,i=this,r=e.keyCode,o=i.ul[0],s=i.popup.visible()?"_select":"_accept",l=i._current,c=r===a.DOWN;if(r===a.UP||c){if(e.altKey)i.toggle(c);else{if(t=o.firstChild,!t&&!i._accessor()&&"filter"!==i._state)return i._fetch||(i.dataSource.one(u,function(){i._move(e),i._fetch=!1}),i._fetch=!0,i._filterSource()),e.preventDefault(),!0;c?(!l||-1===i.selectedIndex&&!i.value()&&l[0]===t?l=t:(l=l[0].nextSibling,l||t!==o.lastChild||(l=t)),i[s](l)):(l=l?l[0].previousSibling:o.lastChild,l||t!==o.lastChild||(l=t),i[s](l))}e.preventDefault(),n=!0}else r===a.ENTER||r===a.TAB?(i.popup.visible()&&e.preventDefault(),i.popup.visible()||l&&l.hasClass("k-state-selected")||(l=null),i._accept(l,r),n=!0):r===a.ESC&&(i.popup.visible()&&e.preventDefault(),i.close(),n=!0);return n},_selectItem:function(){var e,n,i=this,r=i._bound===t,o=i.options;e=i._isSelect&&!i._initial&&!o.value&&o.index&&!i._bound,e||(n=i._selectedValue||r&&o.value||i._accessor()),n?i.value(n):r&&i.select(o.index)},_fetchItems:function(e){var n=this,i=n.ul[0].firstChild;return n._request?!0:n._bound||n._fetch||i?t:n.options.cascadeFrom?!i:(n.dataSource.one(u,function(){n._old=t,n.value(e),n._fetch=!1}),n._fetch=!0,n.dataSource.fetch(),!0)},_options:function(e,n){var i,r,o,a,s=this,c=s.element,d=e.length,h="",u=0;for(n&&(u=1,h=n);d>u;u++)i="<option",r=e[u],o=s._text(r),a=s._value(r),a!==t&&(a+="",-1!==a.indexOf('"')&&(a=a.replace(D,"&quot;")),i+=' value="'+a+'"'),i+=">",o!==t&&(i+=l(o)),i+="</option>",h+=i;c.html(h)},_reset:function(){var t=this,n=t.element,i=n.attr("form"),r=i?e("#"+i):n.closest("form");r[0]&&(t._resetHandler=function(){setTimeout(function(){t.value(t._initial)})},t._form=r.on("reset",t._resetHandler))},_cascade:function(){var t,i,r,o,a,s=this,l=s.options,c=l.cascadeFrom;if(c){if(s._selectedValue=l.value||s._accessor(),i=e("#"+c),t=i.data("kendo"+l.name),t||(t=i.data("kendo"+A[l.name])),!t)return;l.autoBind=!1,o=l.cascadeFromField||t.options.dataValueField,a=function(){s.dataSource.unbind(u,a);var e=s._selectedValue||s.value();s._userTriggered?s._clearSelection(t,!0):e?(s.value(e),s.dataSource.view()[0]&&-1!==s.selectedIndex||s._clearSelection(t,!0)):s.select(l.index),s.enable(),s._triggerCascade(s._userTriggered),s._userTriggered=!1},r=function(){var e,i,r,l=t.dataItem(),c=l?t._value(l):null;c||0===c?(e=s.dataSource.filter()||{},n(e,o),i=e.filters||[],i.push({field:o,operator:"eq",value:c}),r=function(){s.unbind("dataBound",r),a.apply(s,arguments)},s.first("dataBound",r),s.dataSource.filter(i)):(s.enable(!1),s._clearSelection(t),s._triggerCascade(s._userTriggered),s._userTriggered=!1)},t.first("cascade",function(e){s._userTriggered=e.userTriggered,r()}),t._bound?r():t.value()||s.enable(!1)}}})}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(e,t){t()});