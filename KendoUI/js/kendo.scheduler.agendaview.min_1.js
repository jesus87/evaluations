/*
* Kendo UI v2014.3.1119 (http://www.telerik.com/kendo-ui)
* Copyright 2014 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
!function(e,define){define(["./kendo.scheduler.view.min"],e)}(function(){return function(e){function t(e){var t,n,i=0;for(t=0,n=e.length;n>t;t++)i+=e[t].items.length;return i}function n(e,t){return e.valuePrimitive&&(t=o.getter(e.dataValueField)(t)),t}function i(e){for(var t,n=0,i=e.length,o=[];i>n;n++)t=e[n],t.groups?(t=r(t.groups),o=o.concat(t)):o=o.concat(r(t.items));return o}function r(e){for(var t=[].concat(e),n=t.shift(),i=[],r=[].push;n;)n.groups?r.apply(t,n.groups):n.items?r.apply(t,n.items):r.call(i,n),n=t.shift();return i}var o=window.kendo,a=o.ui,s=".kendoAgendaView",l='<div class="k-task" title="#:title.replace(/"/g,"\'")#" data-#=kendo.ns#uid="#=uid#"># if (resources[0]) {#<span class="k-scheduler-mark" style="background-color:#=resources[0].color#"></span># } ## if (data.isException()) { #<span class="k-icon k-i-exception"></span># } else if (data.isRecurring()) {#<span class="k-icon k-i-refresh"></span># } #{0}#if (showDelete) {#<a href="\\#" class="k-link k-event-delete"><span class="k-icon k-si-close"></span></a>#}#</div>';a.AgendaView=a.SchedulerView.extend({init:function(t,n){a.SchedulerView.fn.init.call(this,t,n),n=this.options,n.editable&&(n.editable=e.extend({"delete":!0},n.editable,{create:!1,update:!1})),this.title=n.title,this.name="agenda",this._eventTemplate=this._eventTmpl(n.eventTemplate,l),this._dateTemplate=o.template(n.eventDateTemplate),this._groupTemplate=o.template(n.eventGroupTemplate),this._timeTemplate=o.template(n.eventTimeTemplate),this.element.on("mouseenter"+s,".k-scheduler-agenda .k-scheduler-content tr","_mouseenter").on("mouseleave"+s,".k-scheduler-agenda .k-scheduler-content tr","_mouseleave").on("click"+s,".k-scheduler-agenda .k-scheduler-content .k-link:has(.k-si-close)","_remove"),this._renderLayout(n.date)},_mouseenter:function(t){e(t.currentTarget).addClass("k-state-hover")},_mouseleave:function(t){e(t.currentTarget).removeClass("k-state-hover")},_remove:function(t){t.preventDefault(),this.trigger("remove",{uid:e(t.currentTarget).closest(".k-task").attr(o.attr("uid"))})},nextDate:function(){return o.date.nextDay(this.startDate())},startDate:function(){return this._startDate},endDate:function(){return this._endDate},previousDate:function(){return o.date.previousDay(this.startDate())},_renderLayout:function(e){this._startDate=e,this._endDate=o.date.addDays(e,7),this.createLayout(this._layout()),this.table.addClass("k-scheduler-agenda")},_layout:function(){var e,t,n,i=[{text:this.options.messages.time,className:"k-scheduler-timecolumn"},{text:this.options.messages.event}];if(this._isMobilePhoneView()||i.splice(0,0,{text:this.options.messages.date,className:"k-scheduler-datecolumn"}),e=this.groupedResources,e.length){for(t=[],n=0;e.length>n;n++)t.push({text:"",className:"k-scheduler-groupcolumn"});i=t.concat(i)}return{columns:i}},_tasks:function(e){var t,n,i,r,a,s,l,c=[];for(t=0;e.length>t;t++)if(n=e[t],i=n.start,r=n.end,a=(o.date.getDate(r)-o.date.getDate(i))/o.date.MS_PER_DAY+1,s=n.clone(),s.startDate=o.date.getDate(i),s.startDate>=this.startDate()&&c.push(s),a>1)for(s.end=o.date.nextDay(i),s.head=!0,l=1;a>l;l++)i=s.end,s=n.clone(),s.start=i,s.startDate=o.date.getDate(i),s.end=o.date.nextDay(i),l==a-1?(s.end=new Date(s.start.getFullYear(),s.start.getMonth(),s.start.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()),s.tail=!0):(s.isAllDay=!0,s.middle=!0),s.end<=this.endDate()&&s.start>=this.startDate()&&c.push(s);return new o.data.Query(c).sort([{field:"start",dir:"asc"},{field:"end",dir:"asc"}]).groupBy({field:"startDate"}).toArray()},_renderTaskGroups:function(e,t){var n,i,r,a,s,l,c,d,u,h=[],f=this.options.editable,p=f&&f.destroy!==!1&&!this._isMobile(),g=this._isMobilePhoneView();for(n=0;e.length>n;n++)for(i=e[n].value,r=e[n].items,a=o.date.isToday(i),s=0;r.length>s;s++){if(l=r[s],c=[],d=g?[]:c,0===n&&0===s&&t.length)for(u=0;t.length>u;u++)d.push(o.format('<td class="k-scheduler-groupcolumn{2}" rowspan="{0}">{1}</td>',t[u].rowSpan,this._groupTemplate({value:t[u].text}),t[u].className));0===s&&(g?(d.push(o.format('<td class="k-scheduler-datecolumn" colspan="2">{0}</td>',this._dateTemplate({date:i}))),h.push('<tr role="row" aria-selected="false"'+(a?' class="k-today">':">")+d.join("")+"</tr>")):c.push(o.format('<td class="k-scheduler-datecolumn{3}{2}" rowspan="{0}">{1}</td>',r.length,this._dateTemplate({date:i}),n!=e.length-1||t.length?"":" k-last",t.length?"":" k-first"))),l.format=l.head?"{0:t}":l.tail?"{1:t}":"{0:t}-{1:t}",l.resources=this.eventResources(l),c.push(o.format('<td class="k-scheduler-timecolumn"><div>{0}{1}{2}</div></td><td>{3}</td>',l.tail||l.middle?'<span class="k-icon k-i-arrow-w"></span>':"",this._timeTemplate(l.clone({start:l.startTime||l.start,end:l.endTime||l.end})),l.head||l.middle?'<span class="k-icon k-i-arrow-e"></span>':"",this._eventTemplate(l.clone({showDelete:p})))),h.push('<tr role="row" aria-selected="false"'+(a?' class="k-today">':">")+c.join("")+"</tr>")}return h.join("")},render:function(e){var t,n,r=this.content.find("table").empty(),o=[];e.length>0&&(t=this.groupedResources,t.length?(o=this._createGroupConfiguration(e,t,null),this._renderGroups(o,r,[])):(o=this._tasks(e),r.append(this._renderTaskGroups(o,[])))),n=this._eventsList=i(o),this._angularItems(r,n),this.refreshLayout(),this.trigger("activate")},_angularItems:function(e,t){this.angular("compile",function(){var n=[],i=t.map(function(t){return n.push({dataItem:t}),e.find(".k-task["+o.attr("uid")+"="+t.uid+"]")});return{elements:i,data:n}})},_renderGroups:function(e,t,n){var i,r,o;for(i=0,r=e.length;r>i;i++)o=n.splice(0),o.push(e[i]),e[i].groups?this._renderGroups(e[i].groups,t,o):t.append(this._renderTaskGroups(e[i].items,o))},_createGroupConfiguration:function(e,i,r){var s,l,c,d,u,h,f,p=i[0],g=[],m=p.dataSource.view(),v=this._isMobilePhoneView();for(s=0;m.length>s;s++)l=n(p,m[s]),c=new o.data.Query(e).filter({field:p.field,operator:a.SchedulerView.groupEqFilter(l)}).toArray(),c.length&&(d=this._tasks(c),u=r?"":" k-first",s===m.length-1&&(!r||r.className.indexOf("k-last")>-1)&&(u+=" k-last"),h={text:o.getter(p.dataTextField)(m[s]),value:l,rowSpan:0,className:u},i.length>1?(h.groups=this._createGroupConfiguration(c,i.slice(1),h),r&&(r.rowSpan+=h.rowSpan)):(h.items=d,f=t(h.items),v&&(f+=h.items.length),h.rowSpan=f,r&&(r.rowSpan+=f)),g.push(h));return g},selectionByElement:function(t){var n,i,r;return t=e(t),t.hasClass("k-scheduler-datecolumn")?void 0:(this._isMobile()?(r=t.parent(),n=r.parent().children().filter(function(){return e(this).children(":not(.k-scheduler-datecolumn)").length}).index(r)):n=t.parent().index(),i=this._eventsList[n],{index:n,start:i.start,end:i.end,isAllDay:i.isAllDay,uid:i.uid})},select:function(e){this.clearSelection();var t=this.table.find(".k-task").eq(e.index).closest("tr").addClass("k-state-selected").attr("aria-selected",!0)[0];this.current(t)},move:function(e,t){var n,i=!1,r=e.index;return t==o.keys.UP?(r--,i=!0):t==o.keys.DOWN&&(r++,i=!0),i&&(n=this._eventsList[r],n&&(e.start=n.start,e.end=n.end,e.isAllDay=n.isAllDay,e.events=[n.uid],e.index=r)),i},moveToEvent:function(){return!1},constrainSelection:function(e){var t=this._eventsList[0];t&&(e.start=t.start,e.end=t.end,e.isAllDay=t.isAllDay,e.events=[t.uid],e.index=0)},isInRange:function(){return!0},destroy:function(){this.element&&this.element.off(s),a.SchedulerView.fn.destroy.call(this)},options:{title:"Agenda",name:"agenda",editable:!0,selectedDateFormat:"{0:D}-{1:D}",eventTemplate:"#:title#",eventTimeTemplate:"#if(data.isAllDay) {##=this.options.messages.allDay##} else { ##=kendo.format(format, start, end)## } #",eventDateTemplate:'<strong class="k-scheduler-agendaday">#=kendo.toString(date, "dd")#</strong><em class="k-scheduler-agendaweek">#=kendo.toString(date,"dddd")#</em><span class="k-scheduler-agendadate">#=kendo.toString(date, "y")#</span>',eventGroupTemplate:'<strong class="k-scheduler-adgendagroup">#=value#</strong>',messages:{event:"Event",date:"Date",time:"Time",allDay:"all day"}}})}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(e,t){t()});