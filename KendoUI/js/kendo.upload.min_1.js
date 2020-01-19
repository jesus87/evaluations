/*
* Kendo UI v2014.3.1119 (http://www.telerik.com/kendo-ui)
* Copyright 2014 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
!function(e,define){define(["./kendo.core.min"],e)}(function(){return function(e,t){function n(t){return e.map(i(t),function(e){return e.name}).join(", ")}function i(e){var t=e[0];return t.files?r(t.files):[{name:s(t.value),extension:a(t.value),size:null}]}function r(t){return e.map(t,function(e){return o(e)})}function o(e){var t=e.name||e.fileName;return{name:y.htmlEncode(t),extension:a(t),size:e.size||e.fileSize,rawFile:e}}function a(e){var t=e.match(x);return t?t[0]:""}function s(e){var t=e.lastIndexOf("\\");return-1!=t?e.substr(t+1):e}function l(t,n){var i=y.guid();return e.map(t,function(e){return e.uid=n?y.guid():i,e})}function c(t,n,i){var r,o;n._supportsRemove()&&(r=t.data("fileNames"),o=e.map(r,function(e){return e.name}),n._submitRemove(o,i,function(e,i,o){n._removeFileEntry(t),n.trigger(T,{operation:"remove",files:r,response:e,XMLHttpRequest:o})},function(e){n.trigger(A,{operation:"remove",files:r,XMLHttpRequest:e}),b("Server response: "+e.responseText)}))}function d(t,n,i){var r=!1,o="";try{o=e.parseJSON(u(t)),r=!0}catch(a){i()}r&&n(o)}function u(e){return(t===e||""===e)&&(e="{}"),e}function h(e){e.stopPropagation(),e.preventDefault()}function p(e,t,n,i){var r,o;e.on("dragenter"+t,function(){n(),o=new Date,r||(r=setInterval(function(){var e=new Date-o;e>100&&(i(),clearInterval(r),r=null)},100))}).on("dragover"+t,function(){o=new Date})}function f(e){return e.is(".k-file-progress, .k-file-success, .k-file-error")}function g(t){return e(t.target).closest(".k-file")}function m(){var n={},i=e("meta[name=csrf-token]").attr("content"),r=e("meta[name=csrf-param]").attr("content");return e("input[name^='__RequestVerificationToken']").each(function(){n[this.name]=this.value}),r!==t&&i!==t&&(n[r]=i),n}var v,_,y=window.kendo,w=y.ui.Widget,b=y.logToConsole,x=/\.([^\.]+)$/,k=".kendoUpload",S="select",C="upload",T="success",A="error",D="complete",M="cancel",E="progress",P="remove",z=w.extend({init:function(t,n){var i,r,o,a=this;w.fn.init.call(a,t,n),a.name=t.name,a.multiple=a.options.multiple,a.localization=a.options.localization,i=a.element,a.wrapper=i.closest(".k-upload"),0===a.wrapper.length&&(a.wrapper=a._wrapInput(i)),a._activeInput(i),a.toggle(a.options.enabled),r=a._ns=k+"-"+y.guid(),i.closest("form").on("submit"+r,e.proxy(a._onParentFormSubmit,a)).on("reset"+r,e.proxy(a._onParentFormReset,a)),a.options.async.saveUrl?(a._module=a._supportsFormData()?new _(a):new v(a),a._async=!0,o=a.options.files,o.length>0&&a._renderInitialFiles(o)):a._module=new I(a),a._supportsDrop()&&a._setupDropZone(),a.wrapper.on("click",".k-upload-action",e.proxy(a._onFileAction,a)).on("click",".k-upload-selected",e.proxy(a._onUploadSelected,a)),a.element.val()&&a._onInputChange({target:a.element})},events:[S,C,T,A,D,M,E,P],options:{name:"Upload",enabled:!0,multiple:!0,showFileList:!0,template:"",files:[],async:{removeVerb:"POST",autoUpload:!0,withCredentials:!0},localization:{select:"Select files...",cancel:"Cancel",retry:"Retry",remove:"Remove",uploadSelectedFiles:"Upload files",dropFilesHere:"drop files here to upload",statusUploading:"uploading",statusUploaded:"uploaded",statusWarning:"warning",statusFailed:"failed",headerStatusUploading:"Uploading...",headerStatusUploaded:"Done"}},setOptions:function(e){var t=this,n=t.element;w.fn.setOptions.call(t,e),t.multiple=t.options.multiple,n.attr("multiple",t._supportsMultiple()?t.multiple:!1),t.toggle(t.options.enabled)},enable:function(e){e=t===e?!0:e,this.toggle(e)},disable:function(){this.toggle(!1)},toggle:function(e){e=t===e?e:!e,this.wrapper.toggleClass("k-state-disabled",e),this.element.prop("disabled",e)},destroy:function(){var t=this;e(document).add(e(".k-dropzone",t.wrapper)).add(t.wrapper.closest("form")).off(t._ns),e(t.element).off(k),w.fn.destroy.call(t)},_addInput:function(t){if(t[0].nodeType){var n=this,i=t.clone().val("");i.insertAfter(n.element).data("kendoUpload",n),e(n.element).hide().attr("tabindex","-1").removeAttr("id").off(k),n._activeInput(i),n.element.focus()}},_activeInput:function(t){var n=this,i=n.wrapper;n.element=t,t.attr("multiple",n._supportsMultiple()?n.multiple:!1).attr("autocomplete","off").on("click"+k,function(e){i.hasClass("k-state-disabled")&&e.preventDefault()}).on("focus"+k,function(){e(this).parent().addClass("k-state-focused")}).on("blur"+k,function(){e(this).parent().removeClass("k-state-focused")}).on("change"+k,e.proxy(n._onInputChange,n)).on("keydown"+k,e.proxy(n._onInputKeyDown,n))},_onInputKeyDown:function(e){var t=this,n=t.wrapper.find(".k-upload-action:first");e.keyCode===y.keys.TAB&&n.length>0&&(e.preventDefault(),n.focus())},_onInputChange:function(t){var n=this,i=e(t.target),r=l(n._inputFiles(i),n._isAsyncNonBatch()),o=n.trigger(S,{files:r});o?(n._addInput(i),i.remove()):n._module.onSelect({target:i},r)},_onDrop:function(t){var n,i=t.originalEvent.dataTransfer,o=this,a=i.files,s=l(r(a),o._isAsyncNonBatch());h(t),a.length>0&&(n=o.trigger(S,{files:s}),n||o._module.onSelect({target:e(".k-dropzone",o.wrapper)},s))},_isAsyncNonBatch:function(){return this._async&&!this.options.async.batch||!1},_renderInitialFiles:function(t){var n,i,r=this,o=0;for(t=l(t,!0),o=0;t.length>o;o++)n=t[o],i=r._enqueueFile(n.name,{fileNames:[n]}),i.addClass("k-file-success").data("files",[t[o]]),e(".k-progress",i).width("100%"),e(".k-upload-status",i).prepend("<span class='k-upload-pct'>100%</span>"),r._fileAction(i,P)},_prepareTemplateData:function(e,t){var n=t.fileNames,i={},r=0,o=0;for(o=0;n.length>o;o++)r+=n[o].size;return i.name=e,i.size=r,i.files=t.fileNames,i},_prepareDefaultFileEntryTemplate:function(t,n){var i="",r=e("<li class='k-file'><span class='k-progress'></span><span class='k-icon'></span><span class='k-filename' title='"+t+"'>"+t+"</span><strong class='k-upload-status'></strong></li>");return 1==n.fileNames.length&&n.fileNames[0].extension&&(i=n.fileNames[0].extension.substring(1),e(".k-icon",r).addClass("k-i-"+i)),r},_enqueueFile:function(t,n){var i,r,o,a=this,s=n.fileNames[0].uid,l=e(".k-upload-files",a.wrapper),c=a.options,d=c.template;return 0===l.length&&(l=e("<ul class='k-upload-files k-reset'></ul>").appendTo(a.wrapper),a.options.showFileList||l.hide(),a.wrapper.removeClass("k-upload-empty")),i=e(".k-file",l),d?(o=a._prepareTemplateData(t,n),d=y.template(d),r=e("<li class='k-file'>"+d(o)+"</li>"),r.find(".k-upload-action").addClass("k-button k-button-bare")):r=a._prepareDefaultFileEntryTemplate(t,n),r.attr(y.attr("uid"),s).appendTo(l).data(n),a._async||e(".k-progress",r).width("100%"),!a.multiple&&i.length>0&&a._module.onRemove({target:e(i,a.wrapper)}),r},_removeFileEntry:function(t){var n,i,r=this,o=t.closest(".k-upload-files");t.remove(),n=e(".k-file",o),i=e(".k-file-success, .k-file-error",o),i.length===n.length&&this._hideUploadButton(),0===n.length&&(o.remove(),r.wrapper.addClass("k-upload-empty"),r._hideHeaderUploadstatus())},_fileAction:function(e,t){var n={remove:"k-delete",cancel:"k-cancel",retry:"k-retry"},i={remove:"k-i-close",cancel:"k-i-close",retry:"k-i-refresh"};n.hasOwnProperty(t)&&(this._clearFileAction(e),this.options.template?e.find(".k-upload-action").addClass("k-button k-button-bare").append("<span class='k-icon "+i[t]+" "+n[t]+"' title='"+this.localization[t]+"'></span>").show():(e.find(".k-upload-status .k-upload-action").remove(),e.find(".k-upload-status").append(this._renderAction(n[t],this.localization[t],i[t]))))},_fileState:function(t,n){var i=this.localization,r={uploading:{text:i.statusUploading},uploaded:{text:i.statusUploaded},failed:{text:i.statusFailed}},o=r[n];o&&e(".k-icon:not(.k-delete, .k-cancel, .k-retry)",t).text(o.text)},_renderAction:function(t,n,i){return e(""!==t?"<button type='button' class='k-button k-button-bare k-upload-action'><span class='k-icon "+i+" "+t+"' title='"+n+"'></span></button>":"<button type='button' class='k-button'>"+n+"</button>")},_clearFileAction:function(t){e(".k-upload-action",t).empty().hide()},_onFileAction:function(t){var n,i,r,o,a=this;return a.wrapper.hasClass("k-state-disabled")||(n=e(t.target).closest(".k-upload-action"),i=n.find(".k-icon"),r=n.closest(".k-file"),o={files:r.data("fileNames")},i.hasClass("k-delete")?a.trigger(P,o)||a._module.onRemove({target:e(r,a.wrapper)},o.data):i.hasClass("k-cancel")?(a.trigger(M,o),a._module.onCancel({target:e(r,a.wrapper)}),this._checkAllComplete(),a._updateHeaderUploadStatus()):i.hasClass("k-retry")&&(e(".k-warning",r).remove(),a._module.onRetry({target:e(r,a.wrapper)}))),!1},_onUploadSelected:function(){var e=this,t=e.wrapper;return t.hasClass("k-state-disabled")||this._module.onSaveSelected(),!1},_onFileProgress:function(t,n){var i;this.options.template?e(".k-progress",t.target).width(n+"%"):(i=e(".k-upload-pct",t.target),0===i.length&&e(".k-upload-status",t.target).prepend("<span class='k-upload-pct'></span>"),e(".k-upload-pct",t.target).text(n+"%"),e(".k-progress",t.target).width(n+"%")),this.trigger(E,{files:g(t).data("fileNames"),percentComplete:n})},_onUploadSuccess:function(e,t,n){var i=g(e);this._fileState(i,"uploaded"),i.removeClass("k-file-progress").addClass("k-file-success"),this._updateHeaderUploadStatus(),this.trigger(T,{files:i.data("fileNames"),response:t,operation:"upload",XMLHttpRequest:n}),this._supportsRemove()?this._fileAction(i,P):this._clearFileAction(i),this._checkAllComplete()},_onUploadError:function(t,n){var i=g(t),r=e(".k-upload-pct",i);this._fileState(i,"failed"),i.removeClass("k-file-progress").addClass("k-file-error"),e(".k-progress",i).width("100%"),r.length>0?r.empty().removeClass("k-upload-pct").addClass("k-icon k-warning"):e(".k-upload-status",i).prepend("<span class='k-icon k-warning'></span>"),this._updateHeaderUploadStatus(),this._fileAction(i,"retry"),this.trigger(A,{operation:"upload",files:i.data("fileNames"),XMLHttpRequest:n}),b("Server response: "+n.responseText),this._checkAllComplete()},_showUploadButton:function(){var t=e(".k-upload-selected",this.wrapper);0===t.length&&(t=this._renderAction("",this.localization.uploadSelectedFiles).addClass("k-upload-selected")),this.wrapper.append(t)},_hideUploadButton:function(){e(".k-upload-selected",this.wrapper).remove()},_showHeaderUploadStatus:function(){var t=this.localization,n=e(".k-dropzone",this.wrapper),i=e(".k-upload-status-total",this.wrapper);0!==i.length&&i.remove(),i='<strong class="k-upload-status k-upload-status-total">'+t.headerStatusUploading+'<span class="k-icon k-loading">'+t.statusUploading+"</span></strong>",n.length>0?n.append(i):e(".k-upload-button",this.wrapper).after(i)},_updateHeaderUploadStatus:function(){var t,n,i,r=this,o=r.localization,a=e(".k-file",r.wrapper).not(".k-file-success, .k-file-error");0===a.length&&(t=e(".k-file.k-file-error",r.wrapper),n=e(".k-upload-status-total",r.wrapper),i=e(".k-icon",n).removeClass("k-loading").addClass(0!==t.length?"k-warning":"k-i-tick").text(0!==t.length?o.statusWarning:o.statusUploaded),n.text(r.localization.headerStatusUploaded).append(i))},_hideHeaderUploadstatus:function(){e(".k-upload-status-total",this.wrapper).remove()},_onParentFormSubmit:function(){var n,i=this,r=i.element;t!==this._module.onAbort&&this._module.onAbort(),r.value||(n=e(r),n.attr("disabled","disabled"),window.setTimeout(function(){n.removeAttr("disabled")},0))},_onParentFormReset:function(){e(".k-upload-files",this.wrapper).remove()},_supportsFormData:function(){return"undefined"!=typeof FormData},_supportsMultiple:function(){var e=this._userAgent().indexOf("Windows")>-1;return!(y.support.browser.opera||y.support.browser.safari&&e)},_supportsDrop:function(){var e=this._userAgent().toLowerCase(),t=/chrome/.test(e),n=!t&&/safari/.test(e),i=n&&/windows/.test(e);return!i&&this._supportsFormData()&&this.options.async.saveUrl},_userAgent:function(){return navigator.userAgent},_setupDropZone:function(){var t,n,i=this;e(".k-upload-button",this.wrapper).wrap("<div class='k-dropzone'></div>"),t=i._ns,n=e(".k-dropzone",i.wrapper).append(e("<em>"+i.localization.dropFilesHere+"</em>")).on("dragenter"+t,h).on("dragover"+t,function(e){e.preventDefault()}).on("drop"+t,e.proxy(this._onDrop,this)),p(n,t,function(){n.addClass("k-dropzone-hovered")},function(){n.removeClass("k-dropzone-hovered")}),p(e(document),t,function(){n.addClass("k-dropzone-active"),n.closest(".k-upload").removeClass("k-upload-empty")},function(){n.removeClass("k-dropzone-active"),0===e("li.k-file",n.closest(".k-upload")).length&&n.closest(".k-upload").addClass("k-upload-empty")})},_supportsRemove:function(){return!!this.options.async.removeUrl},_submitRemove:function(t,n,i,r){var o=this,a=o.options.async.removeField||"fileNames",s=e.extend(n,m());s[a]=t,jQuery.ajax({type:this.options.async.removeVerb,dataType:"json",dataFilter:u,url:this.options.async.removeUrl,traditional:!0,data:s,success:i,error:r})},_wrapInput:function(e){var t=this,n=t.options;return e.wrap("<div class='k-widget k-upload k-header'><div class='k-button k-upload-button'></div></div>"),n.async.saveUrl||e.closest(".k-upload").addClass("k-upload-sync"),e.closest(".k-upload").addClass("k-upload-empty"),e.closest(".k-button").append("<span>"+this.localization.select+"</span>"),e.closest(".k-upload")},_checkAllComplete:function(){0===e(".k-file.k-file-progress",this.wrapper).length&&this.trigger(D)},_inputFiles:function(e){return i(e)}}),I=function(e){this.name="syncUploadModule",this.element=e.wrapper,this.upload=e,this.element.closest("form").attr("enctype","multipart/form-data").attr("encoding","multipart/form-data")};I.prototype={onSelect:function(t,i){var r,o=this.upload,a=e(t.target);o._addInput(a),r=o._enqueueFile(n(a),{relatedInput:a,fileNames:i}),o._fileAction(r,P)},onRemove:function(e){var t=g(e);t.data("relatedInput").remove(),this.upload._removeFileEntry(t)}},v=function(e){this.name="iframeUploadModule",this.element=e.wrapper,this.upload=e,this.iframes=[]},z._frameId=0,v.prototype={onSelect:function(t,n){var i=this.upload,r=e(t.target),o=this.prepareUpload(r,n);i.options.async.autoUpload?this.performUpload(o):(i._supportsRemove()&&this.upload._fileAction(o,P),i._showUploadButton())},prepareUpload:function(t,i){var r,o,a,s=this.upload,l=e(s.element),c=s.options.async.saveField||t.attr("name");return s._addInput(t),t.attr("name",c),r=this.createFrame(s.name+"_"+z._frameId++),this.registerFrame(r),o=this.createForm(s.options.async.saveUrl,r.attr("name")).append(l),a=s._enqueueFile(n(t),{frame:r,relatedInput:l,fileNames:i}),r.data({form:o,file:a}),a},performUpload:function(t){var n,i,r,o={files:t.data("fileNames")},a=t.data("frame"),s=this.upload;if(s.trigger(C,o))s._removeFileEntry(a.data("file")),this.cleanupFrame(a),this.unregisterFrame(a);else{s._hideUploadButton(),s._showHeaderUploadStatus(),a.appendTo(document.body),n=a.data("form").attr("action",s.options.async.saveUrl).appendTo(document.body),o.data=e.extend({},o.data,m());for(i in o.data)r=n.find("input[name='"+i+"']"),0===r.length&&(r=e("<input>",{type:"hidden",name:i}).prependTo(n)),r.val(o.data[i]);s._fileAction(t,M),s._fileState(t,"uploading"),e(t).removeClass("k-file-error").addClass("k-file-progress"),a.one("load",e.proxy(this.onIframeLoad,this)),n[0].submit()}},onSaveSelected:function(){var t=this;e(".k-file",this.element).each(function(){var n=e(this),i=f(n);i||t.performUpload(n)})},onIframeLoad:function(t){var n,i=e(t.target);try{n=i.contents().text()}catch(r){n="Error trying to get server response: "+r}this.processResponse(i,n)},processResponse:function(t,n){var i=t.data("file"),r=this,o={responseText:n};d(n,function(n){e.extend(o,{statusText:"OK",status:"200"}),r.upload._onFileProgress({target:e(i,r.upload.wrapper)},100),r.upload._onUploadSuccess({target:e(i,r.upload.wrapper)},n,o),r.cleanupFrame(t),r.unregisterFrame(t)},function(){e.extend(o,{statusText:"error",status:"500"}),r.upload._onUploadError({target:e(i,r.upload.wrapper)},o)})},onCancel:function(t){var n=e(t.target).data("frame");this.stopFrameSubmit(n),this.cleanupFrame(n),this.unregisterFrame(n),this.upload._removeFileEntry(n.data("file"))},onRetry:function(e){var t=g(e);this.performUpload(t)},onRemove:function(e,t){var n=g(e),i=n.data("frame");i?(this.unregisterFrame(i),this.upload._removeFileEntry(n),this.cleanupFrame(i)):c(n,this.upload,t)},onAbort:function(){var t=this.element,n=this;e.each(this.iframes,function(){e("input",this.data("form")).appendTo(t),n.stopFrameSubmit(this[0]),this.data("form").remove(),this.remove()}),this.iframes=[]},createFrame:function(t){return e("<iframe name='"+t+"' id='"+t+"' style='display:none;' />")},createForm:function(t,n){return e("<form enctype='multipart/form-data' method='POST' action='"+t+"' target='"+n+"'/>")},stopFrameSubmit:function(e){t!==e.stop?e.stop():e.document&&e.document.execCommand("Stop")},registerFrame:function(e){this.iframes.push(e)},unregisterFrame:function(t){this.iframes=e.grep(this.iframes,function(e){return e.attr("name")!=t.attr("name")})},cleanupFrame:function(e){var t=e.data("form");e.data("file").data("frame",null),setTimeout(function(){t.remove(),e.remove()},1)}},_=function(e){this.name="formDataUploadModule",this.element=e.wrapper,this.upload=e},_.prototype={onSelect:function(t,n){var i=this.upload,r=this,o=e(t.target),a=this.prepareUpload(o,n);e.each(a,function(){i.options.async.autoUpload?r.performUpload(this):(i._supportsRemove()&&i._fileAction(this,P),i._showUploadButton())})},prepareUpload:function(t,n){var i=this.enqueueFiles(n);return t.is("input")&&(e.each(i,function(){e(this).data("relatedInput",t)}),t.data("relatedFileEntries",i),this.upload._addInput(t)),i},enqueueFiles:function(t){var n,i,r,o,a=this.upload,s=t.length,l=[];if(a.options.async.batch===!0)n=e.map(t,function(e){return e.name}).join(", "),o=a._enqueueFile(n,{fileNames:t}),o.data("files",t),l.push(o);else for(i=0;s>i;i++)r=t[i],n=r.name,o=a._enqueueFile(n,{fileNames:[r]}),o.data("files",[r]),l.push(o);return l},performUpload:function(t){var n,i=this.upload,r=this.createFormData(),o=this.createXHR(),a={files:t.data("fileNames"),XMLHttpRequest:o};if(i.trigger(C,a))this.removeFileEntry(t);else{i._fileAction(t,M),i._hideUploadButton(),i._showHeaderUploadStatus(),a.data=e.extend({},a.data,m());for(n in a.data)r.append(n,a.data[n]);this.populateFormData(r,t.data("files")),i._fileState(t,"uploading"),e(t).removeClass("k-file-error").addClass("k-file-progress"),this.postFormData(i.options.async.saveUrl,r,t,o)}},onSaveSelected:function(){var t=this;e(".k-file",this.element).each(function(){var n=e(this),i=f(n);i||t.performUpload(n)})},onCancel:function(e){var t=g(e);this.stopUploadRequest(t),this.removeFileEntry(t)},onRetry:function(e){var t=g(e);this.performUpload(t)},onRemove:function(e,t){var n=g(e);n.hasClass("k-file-success")?c(n,this.upload,t):this.removeFileEntry(n)},createXHR:function(){return new XMLHttpRequest},postFormData:function(e,t,n,i){var r=this;n.data("request",i),i.addEventListener("load",function(e){r.onRequestSuccess.call(r,e,n)},!1),i.addEventListener(A,function(e){r.onRequestError.call(r,e,n)},!1),i.upload.addEventListener("progress",function(e){r.onRequestProgress.call(r,e,n)},!1),i.open("POST",e,!0),i.withCredentials=this.upload.options.async.withCredentials,i.send(t)},createFormData:function(){return new FormData},populateFormData:function(e,t){var n,i=this.upload,r=t.length;for(n=0;r>n;n++)e.append(i.options.async.saveField||i.name,t[n].rawFile);return e},onRequestSuccess:function(t,n){function i(){o.upload._onUploadError({target:e(n,o.upload.wrapper)},r)}var r=t.target,o=this;r.status>=200&&299>=r.status?d(r.responseText,function(t){o.upload._onFileProgress({target:e(n,o.upload.wrapper)},100),o.upload._onUploadSuccess({target:e(n,o.upload.wrapper)},t,r),o.cleanupFileEntry(n)},i):i()},onRequestError:function(t,n){var i=t.target;this.upload._onUploadError({target:e(n,this.upload.wrapper)},i)},cleanupFileEntry:function(t){var n=t.data("relatedInput"),i=!0;n&&(e.each(n.data("relatedFileEntries")||[],function(){this.parent().length>0&&this[0]!=t[0]&&(i=i&&this.hasClass("k-file-success"))}),i&&n.remove())},removeFileEntry:function(e){this.cleanupFileEntry(e),this.upload._removeFileEntry(e)},onRequestProgress:function(t,n){var i=Math.round(100*t.loaded/t.total);this.upload._onFileProgress({target:e(n,this.upload.wrapper)},i)},stopUploadRequest:function(e){e.data("request").abort()}},y.ui.plugin(z)}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(e,t){t()});