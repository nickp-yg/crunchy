define(["jquery","version!fly/utils/object-helper","version!fly/utils/string-helper","version!fly/utils/string-vars","version!fly/components/base","fly/components/loading-1.0"],function(e,t){e.widget("cbsnews.loadExternal",e.fly.base,{options:{url:null,data:{},eventName:"click",responseKey:null},isLoading:!1,id:null,data:{},loader:null,eventData:{},_create:function(){var e=this.options;this._setup(),"load"===e.eventName?this.load():this._setupEvents()},_setupEvents:function(){var e=this.options,t={};t[e.eventName]="_handleLoadClick",this._on(this.$document,t)},_setupLoader:function(){this.loader=e.fly.loading(this.options.loader),this.loader.$element.attr("data-load",this.id).insertAfter(this.$element)},_handleLoadClick:function(e){e.preventDefault(),this.isLoading||this.load()},_getContainer:function(){var t,n=this.$element.data()||{},i=n.$container||[];return i.length?i:(t=n.target||this.$element.attr("href"),i=e(t),this.$element.data("$container",i),i)},load:function(t){var n=this.options;this.isLoading||this._trigger("load")!==!1&&(t||(t=null),this.isLoading=!0,e.ajax({type:"GET",dataType:"json",url:n.url,data:n.data}).done(e.proxy(this._handleResponse,this,t)).fail(e.proxy(this._handleResponseFailure,this)))},_handleResponse:function(e,n){var i=this.options,s=t.deepFind(n,i.responseKey)||{},a=this._getContainer();return s.html?(a.append(s.html),e&&e(a),this.isLoading=!1,void this._trigger("dataLoaded",null,{$element:this.$element,$content:a})):(console.log("no content"),void this._handleResponseFailure())},_handleResponseFailure:function(e){}})});