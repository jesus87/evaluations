/*
* Kendo UI v2014.3.1119 (http://www.telerik.com/kendo-ui)
* Copyright 2014 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
!function(t,define){define(["./kendo.autocomplete.min","./kendo.datepicker.min","./kendo.numerictextbox.min","./kendo.combobox.min","./kendo.dropdownlist.min"],t)}(function(){return function(t,e){function n(e,i){var o,r,a=[];if(t.isPlainObject(e))if(e.hasOwnProperty("filters"))a=e.filters;else if(e.field==i)return e;for(t.isArray(e)&&(a=e),o=0;a.length>o;o++)if(r=n(a[o],i))return r}function i(e,n){e.filters&&(e.filters=t.grep(e.filters,function(t){return i(t,n),t.filters?t.filters.length:t.field!=n}))}function o(t,e){var n=r.getter(e,!0);return function(e){for(var i,o,r=t(e),a=[],s=0,l={};r.length>s;)i=r[s++],o=n(i),l.hasOwnProperty(o)||(a.push(i),l[o]=!0);return a}}var r=window.kendo,a=r.ui,s=r.data.DataSource,l=a.Widget,c="change",h="boolean",d="enums",u="string",f="Is equal to",p="Is not equal to",g=t.proxy,m=l.extend({init:function(n,i){var o,a,s,f,p,m,v,_,w,y;n=t(n).addClass("k-filtercell"),o=this.wrapper=t("<span/>").appendTo(n),a=this,m=a.operators=i.operators||{},v=a.input=t("<input/>").attr(r.attr("bind"),"value: value").appendTo(o),l.fn.init.call(a,n[0],i),i=a.options,s=a.dataSource=i.dataSource,a.model=s.reader.model,p=i.type=u,_=r.getter("reader.model.fields",!0)(s)||{},w=_[i.field],w&&w.type&&(p=i.type=w.type),i.values&&(i.type=p=d),m=m[p]||i.operators[p],a._parse=function(t){return t+""},a.model&&a.model.fields&&(y=a.model.fields[i.field],y&&y.parse&&(a._parse=g(y.parse,y))),a.viewModel=f=r.observable({operator:i.operator,value:null,operatorVisible:function(){var t=this.get("value");return null!==t&&t!==e&&"undefined"!=t}}),f.bind(c,g(a.updateDsFilter,a)),p==u&&a.initSuggestDataSource(i),null!==i.inputWidth&&v.width(i.inputWidth),a._setInputType(i,p),p!=h&&i.showOperators!==!1?a._createOperatorDropDown(m):o.addClass("k-operator-hidden"),a._createClearIcon(),r.bind(this.wrapper,f),p==u&&(i.template||a.setAutoCompleteSource()),p==d&&a.setComboBoxSource(a.options.values),a._refreshUI(),a._refreshHandler=g(a._refreshUI,a),a.dataSource.bind(c,a._refreshHandler)},_setInputType:function(e,n){var i,o,a,s,l,c=this,f=c.input;"function"==typeof e.template?e.template.call(c.viewModel,{element:c.input,dataSource:c.suggestDataSource}):n==u?f.attr(r.attr("role"),"autocomplete").attr(r.attr("text-field"),e.dataTextField||e.field).attr(r.attr("filter"),e.suggestionOperator).attr(r.attr("delay"),e.delay).attr(r.attr("min-length"),e.minLength).attr(r.attr("value-primitive"),!0):"date"==n?f.attr(r.attr("role"),"datepicker"):n==h?(f.remove(),i=t("<input type='radio'/>"),o=c.wrapper,a=r.guid(),s=t("<label/>").text(e.messages.isTrue).append(i),i.attr(r.attr("bind"),"checked:value").attr("name",a).val("true"),l=s.clone().text(e.messages.isFalse),i.clone().val("false").appendTo(l),o.append([s,l])):"number"==n?f.attr(r.attr("role"),"numerictextbox"):n==d&&f.attr(r.attr("role"),"combobox").attr(r.attr("text-field"),"text").attr(r.attr("suggest"),!0).attr(r.attr("filter"),"contains").attr(r.attr("value-field"),"value").attr(r.attr("value-primitive"),!0)},_createOperatorDropDown:function(e){var n,i,o=[];for(n in e)o.push({text:e[n],value:n});i=t('<input class="k-dropdown-operator" '+r.attr("bind")+'="value: operator"/>').appendTo(this.wrapper),this.operatorDropDown=i.kendoDropDownList({dataSource:o,dataTextField:"text",dataValueField:"value",open:function(){this.popup.element.width(150)},valuePrimitive:!0}).data("kendoDropDownList"),this.operatorDropDown.wrapper.find(".k-i-arrow-s").removeClass("k-i-arrow-s").addClass("k-filter")},initSuggestDataSource:function(t){var n=t.suggestDataSource;n instanceof s||(!t.customDataSource&&n&&(n.group=e),n=this.suggestDataSource=s.create(n)),t.customDataSource||(n._pageSize=e,n.reader.data=o(n.reader.data,this.options.field)),this.suggestDataSource=n},setAutoCompleteSource:function(){var t=this.input.data("kendoAutoComplete");t&&t.setDataSource(this.suggestDataSource)},setComboBoxSource:function(t){var e=s.create({data:t}),n=this.input.data("kendoComboBox");n&&n.setDataSource(e)},_refreshUI:function(){var e=this,i=n(e.dataSource.filter(),this.options.field)||{},o=e.viewModel;e.manuallyUpdatingVM=!0,i=t.extend(!0,{},i),e.options.type==h&&o.value!==i.value&&e.wrapper.find(":radio").prop("checked",!1),i.operator&&o.set("operator",i.operator),o.set("value",i.value),e.manuallyUpdatingVM=!1},updateDsFilter:function(n){var i,o,r,a=this,s=a.viewModel;a.manuallyUpdatingVM||"operator"==n.field&&s.value===e||(i=t.extend({},a.viewModel.toJSON(),{field:a.options.field}),o={logic:"and",filters:[]},i.value!==e&&null!==i.value&&o.filters.push(i),r=a._merge(o),a.dataSource.filter(r.filters.length?r:{}))},_merge:function(e){var n,o,r,a=this,s=e.logic||"and",l=e.filters,c=a.dataSource.filter()||{filters:[],logic:"and"};for(i(c,a.options.field),o=0,r=l.length;r>o;o++)n=l[o],n.value=a._parse(n.value);return l=t.grep(l,function(t){return""!==t.value&&null!==t.value}),l.length&&(c.filters.length?(e.filters=l,"and"!==c.logic&&(c.filters=[{logic:c.logic,filters:c.filters}],c.logic="and"),c.filters.push(l.length>1?e:l[0])):(c.filters=l,c.logic=s)),c},_createClearIcon:function(){var e=this;t("<button type='button' class='k-button k-button-icon'/>").attr(r.attr("bind"),"visible:operatorVisible").html("<span class='k-icon k-i-close'/>").click(g(e.clearFilter,e)).appendTo(e.wrapper)},clearFilter:function(){this.viewModel.set("value",null)},destroy:function(){var t=this;t.filterModel=null,l.fn.destroy.call(t),r.destroy(t.element)},events:[c],options:{name:"FilterCell",delay:200,minLength:1,inputWidth:null,values:e,customDataSource:!1,field:"",dataTextField:"",type:"string",suggestDataSource:null,suggestionOperator:"startswith",operator:"eq",showOperators:!0,template:null,messages:{isTrue:"is true",isFalse:"is false",filter:"Filter",clear:"Clear",operator:"Operator"},operators:{string:{eq:f,neq:p,startswith:"Starts with",contains:"Contains",doesnotcontain:"Does not contain",endswith:"Ends with"},number:{eq:f,neq:p,gte:"Is greater than or equal to",gt:"Is greater than",lte:"Is less than or equal to",lt:"Is less than"},date:{eq:f,neq:p,gte:"Is after or equal to",gt:"Is after",lte:"Is before or equal to",lt:"Is before"},enums:{eq:f,neq:p}}}});a.plugin(m)}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(t,e){e()});