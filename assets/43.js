/*! no_rails_asset_compression */

webpackJsonp([43],{506:function(){/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
!function(e,t,o,i){var n=o("html"),a=o(e),r=o(t),l=o.fancybox=function(){l.open.apply(this,arguments)},s=navigator.userAgent.match(/msie/i),c=null,d=t.createTouch!==i,p=function(e){return e&&e.hasOwnProperty&&e instanceof o},u=function(e){return e&&"string"===o.type(e)},h=function(e){return u(e)&&0<e.indexOf("%")},f=function(e,t){var o=parseInt(e,10)||0
t&&h(e)&&(o*=l.getViewport()[t]/100)
return Math.ceil(o)},m=function(e,t){return f(e,t)+"px"}
o.extend(l,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!d,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(s?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:o.noop,beforeLoad:o.noop,afterLoad:o.noop,beforeShow:o.noop,afterShow:o.noop,beforeChange:o.noop,beforeClose:o.noop,afterClose:o.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){if(e&&(o.isPlainObject(t)||(t={}),!1!==l.close(!0)))return o.isArray(e)||(e=p(e)?o(e).get():[e]),o.each(e,function(n,a){var r,s,c,d,h,f={}
"object"===o.type(a)&&(a.nodeType&&(a=o(a)),p(a)?(f={href:a.data("fancybox-href")||a.attr("href"),title:o("<div/>").text(a.data("fancybox-title")||a.attr("title")).html(),isDom:!0,element:a},o.metadata&&o.extend(!0,f,a.metadata())):f=a)
r=t.href||f.href||(u(a)?a:null)
s=t.title!==i?t.title:f.title||""
d=(c=t.content||f.content)?"html":t.type||f.type
!d&&f.isDom&&(d=a.data("fancybox-type"),d||(d=(d=a.prop("class").match(/fancybox\.(\w+)/))?d[1]:null))
u(r)&&(d||(l.isImage(r)?d="image":l.isSWF(r)?d="swf":"#"===r.charAt(0)?d="inline":u(a)&&(d="html",c=a)),"ajax"===d&&(h=r.split(/\s+/,2),r=h.shift(),h=h.shift()))
c||("inline"===d?r?c=o(u(r)?r.replace(/.*(?=#[^\s]+$)/,""):r):f.isDom&&(c=a):"html"===d?c=r:d||r||!f.isDom||(d="inline",c=a))
o.extend(f,{href:r,type:d,content:c,title:s,selector:h})
e[n]=f}),l.opts=o.extend(!0,{},l.defaults,t),t.keys!==i&&(l.opts.keys=!!t.keys&&o.extend({},l.defaults.keys,t.keys)),l.group=e,l._start(l.opts.index)},cancel:function(){var e=l.coming
e&&!1===l.trigger("onCancel")||(l.hideLoading(),e&&(l.ajaxLoad&&l.ajaxLoad.abort(),l.ajaxLoad=null,l.imgPreload&&(l.imgPreload.onload=l.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),l.coming=null,l.current||l._afterZoomOut(e)))},close:function(e){l.cancel()
!1!==l.trigger("beforeClose")&&(l.unbindEvents(),l.isActive&&(l.isOpen&&!0!==e?(l.isOpen=l.isOpened=!1,l.isClosing=!0,o(".fancybox-item, .fancybox-nav").remove(),l.wrap.stop(!0,!0).removeClass("fancybox-opened"),l.transitions[l.current.closeMethod]()):(o(".fancybox-wrap").stop(!0).trigger("onReset").remove(),l._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(l.player.timer)},o=function(){t()
l.current&&l.player.isActive&&(l.player.timer=setTimeout(l.next,l.current.playSpeed))},i=function(){t()
r.unbind(".player")
l.player.isActive=!1
l.trigger("onPlayEnd")}
!0===e||!l.player.isActive&&!1!==e?l.current&&(l.current.loop||l.current.index<l.group.length-1)&&(l.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":i,"onUpdate.player":o,"beforeLoad.player":t}),o(),l.trigger("onPlayStart")):i()},next:function(e){var t=l.current
t&&(u(e)||(e=t.direction.next),l.jumpto(t.index+1,e,"next"))},prev:function(e){var t=l.current
t&&(u(e)||(e=t.direction.prev),l.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,o){var n=l.current
n&&(e=f(e),l.direction=t||n.direction[e>=n.index?"next":"prev"],l.router=o||"jumpto",n.loop&&(0>e&&(e=n.group.length+e%n.group.length),e%=n.group.length),n.group[e]!==i&&(l.cancel(),l._start(e)))},reposition:function(e,t){var i,n=l.current,a=n?n.wrap:null
a&&(i=l._getPosition(t),e&&"scroll"===e.type?(delete i.position,a.stop(!0,!0).animate(i,200)):(a.css(i),n.pos=o.extend({},n.dim,i)))},update:function(e){var t=e&&e.originalEvent&&e.originalEvent.type,o=!t||"orientationchange"===t
o&&(clearTimeout(c),c=null)
l.isOpen&&!c&&(c=setTimeout(function(){var i=l.current
i&&!l.isClosing&&(l.wrap.removeClass("fancybox-tmp"),(o||"load"===t||"resize"===t&&i.autoResize)&&l._setDimension(),"scroll"===t&&i.canShrink||l.reposition(e),l.trigger("onUpdate"),c=null)},o&&!d?0:300))},toggle:function(e){l.isOpen&&(l.current.fitToView="boolean"===o.type(e)?e:!l.current.fitToView,d&&(l.wrap.removeAttr("style").addClass("fancybox-tmp"),l.trigger("onUpdate")),l.update())},hideLoading:function(){r.unbind(".loading")
o("#fancybox-loading").remove()},showLoading:function(){var e,t
l.hideLoading()
e=o('<div id="fancybox-loading"><div></div></div>').click(l.cancel).appendTo("body")
r.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),l.cancel())})
l.defaults.fixed||(t=l.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))
l.trigger("onLoading")},getViewport:function(){var t=l.current&&l.current.locked||!1,o={x:a.scrollLeft(),y:a.scrollTop()}
t&&t.length?(o.w=t[0].clientWidth,o.h=t[0].clientHeight):(o.w=d&&e.innerWidth?e.innerWidth:a.width(),o.h=d&&e.innerHeight?e.innerHeight:a.height())
return o},unbindEvents:function(){l.wrap&&p(l.wrap)&&l.wrap.unbind(".fb")
r.unbind(".fb")
a.unbind(".fb")},bindEvents:function(){var e,t=l.current
t&&(a.bind("orientationchange.fb"+(d?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),l.update),(e=t.keys)&&r.bind("keydown.fb",function(n){var a=n.which||n.keyCode,r=n.target||n.srcElement
if(27===a&&l.coming)return!1
n.ctrlKey||n.altKey||n.shiftKey||n.metaKey||r&&(r.type||o(r).is("[contenteditable]"))||o.each(e,function(e,r){return 1<t.group.length&&r[a]!==i?(l[e](r[a]),n.preventDefault(),!1):-1<o.inArray(a,r)?(l[e](),n.preventDefault(),!1):void 0})}),o.fn.mousewheel&&t.mouseWheel&&l.wrap.bind("mousewheel.fb",function(e,i,n,a){for(var r=o(e.target||null),s=!1;r.length&&!(s||r.is(".fancybox-skin")||r.is(".fancybox-wrap"));)s=r[0]&&!(r[0].style.overflow&&"hidden"===r[0].style.overflow)&&(r[0].clientWidth&&r[0].scrollWidth>r[0].clientWidth||r[0].clientHeight&&r[0].scrollHeight>r[0].clientHeight),r=o(r).parent()
0!==i&&!s&&1<l.group.length&&!t.canShrink&&(0<a||0<n?l.prev(0<a?"down":"left"):(0>a||0>n)&&l.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var i,n=t||l.coming||l.current
if(n){o.isFunction(n[e])&&(i=n[e].apply(n,Array.prototype.slice.call(arguments,1)))
if(!1===i)return!1
n.helpers&&o.each(n.helpers,function(t,i){i&&l.helpers[t]&&o.isFunction(l.helpers[t][e])&&l.helpers[t][e](o.extend(!0,{},l.helpers[t].defaults,i),n)})}r.trigger(e)},isImage:function(e){return u(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return u(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,i,n={}
e=f(e)
t=l.group[e]||null
if(!t)return!1
n=o.extend(!0,{},l.opts,t)
t=n.margin
i=n.padding
"number"===o.type(t)&&(n.margin=[t,t,t,t])
"number"===o.type(i)&&(n.padding=[i,i,i,i])
n.modal&&o.extend(!0,n,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}})
n.autoSize&&(n.autoWidth=n.autoHeight=!0)
"auto"===n.width&&(n.autoWidth=!0)
"auto"===n.height&&(n.autoHeight=!0)
n.group=l.group
n.index=e
l.coming=n
if(!1===l.trigger("beforeLoad"))l.coming=null
else{i=n.type
t=n.href
if(!i)return l.coming=null,!(!l.current||!l.router||"jumpto"===l.router)&&(l.current.index=e,l[l.router](l.direction))
l.isActive=!0
"image"!==i&&"swf"!==i||(n.autoHeight=n.autoWidth=!1,n.scrolling="visible")
"image"===i&&(n.aspectRatio=!0)
"iframe"===i&&d&&(n.scrolling="scroll")
n.wrap=o(n.tpl.wrap).addClass("fancybox-"+(d?"mobile":"desktop")+" fancybox-type-"+i+" fancybox-tmp "+n.wrapCSS).appendTo(n.parent||"body")
o.extend(n,{skin:o(".fancybox-skin",n.wrap),outer:o(".fancybox-outer",n.wrap),inner:o(".fancybox-inner",n.wrap)})
o.each(["Top","Right","Bottom","Left"],function(e,t){n.skin.css("padding"+t,m(n.padding[e]))})
l.trigger("onReady")
if("inline"===i||"html"===i){if(!n.content||!n.content.length)return l._error("content")}else if(!t)return l._error("href")
"image"===i?l._loadImage():"ajax"===i?l._loadAjax():"iframe"===i?l._loadIframe():l._afterLoad()}},_error:function(e){o.extend(l.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:l.coming.tpl.error})
l._afterLoad()},_loadImage:function(){var e=l.imgPreload=new Image
e.onload=function(){this.onload=this.onerror=null
l.coming.width=this.width/l.opts.pixelRatio
l.coming.height=this.height/l.opts.pixelRatio
l._afterLoad()}
e.onerror=function(){this.onload=this.onerror=null
l._error("image")}
e.src=l.coming.href
!0!==e.complete&&l.showLoading()},_loadAjax:function(){var e=l.coming
l.showLoading()
l.ajaxLoad=o.ajax(o.extend({},e.ajax,{url:e.href,error:function(e,t){l.coming&&"abort"!==t?l._error("ajax",e):l.hideLoading()},success:function(t,o){"success"===o&&(e.content=t,l._afterLoad())}}))},_loadIframe:function(){var e=l.coming,t=o(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",d?"auto":e.iframe.scrolling).attr("src",e.href)
o(e.wrap).bind("onReset",function(){try{o(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}})
e.iframe.preload&&(l.showLoading(),t.one("load",function(){o(this).data("ready",1)
d||o(this).bind("load.fb",l.update)
o(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show()
l._afterLoad()}))
e.content=t.appendTo(e.inner)
e.iframe.preload||l._afterLoad()},_preloadImages:function(){var e,t,o=l.group,i=l.current,n=o.length,a=i.preload?Math.min(i.preload,n-1):0
for(t=1;t<=a;t+=1)e=o[(i.index+t)%n],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,i,n,a,r=l.coming,s=l.current
l.hideLoading()
if(r&&!1!==l.isActive)if(!1===l.trigger("afterLoad",r,s))r.wrap.stop(!0).trigger("onReset").remove(),l.coming=null
else{s&&(l.trigger("beforeChange",s),s.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove())
l.unbindEvents()
e=r.content
t=r.type
i=r.scrolling
o.extend(l,{wrap:r.wrap,skin:r.skin,outer:r.outer,inner:r.inner,current:r,previous:s})
n=r.href
switch(t){case"inline":case"ajax":case"html":r.selector?e=o("<div>").html(e).find(r.selector):p(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",o('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),r.wrap.bind("onReset",function(){o(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}))
break
case"image":e=r.tpl.image.replace(/\{href\}/g,n)
break
case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+n+'"></param>',a="",o.each(r.swf,function(t,o){e+='<param name="'+t+'" value="'+o+'"></param>'
a+=" "+t+'="'+o+'"'}),e+='<embed src="'+n+'" type="application/x-shockwave-flash" width="100%" height="100%"'+a+"></embed></object>"}p(e)&&e.parent().is(r.inner)||r.inner.append(e)
l.trigger("beforeShow")
r.inner.css("overflow","yes"===i?"scroll":"no"===i?"hidden":i)
l._setDimension()
l.reposition()
l.isOpen=!1
l.coming=null
l.bindEvents()
l.isOpened?s.prevMethod&&l.transitions[s.prevMethod]():o(".fancybox-wrap").not(r.wrap).stop(!0).trigger("onReset").remove()
l.transitions[l.isOpened?r.nextMethod:r.openMethod]()
l._preloadImages()}},_setDimension:function(){var e,t,i,n,a,r,s,c,d,p=l.getViewport(),u=0,g=!1,y=!1,g=l.wrap,w=l.skin,v=l.inner,b=l.current,y=b.width,x=b.height,k=b.minWidth,O=b.minHeight,C=b.maxWidth,_=b.maxHeight,T=b.scrolling,E=b.scrollOutside?b.scrollbarWidth:0,H=b.margin,D=f(H[1]+H[3]),I=f(H[0]+H[2])
g.add(w).add(v).width("auto").height("auto").removeClass("fancybox-tmp")
H=f(w.outerWidth(!0)-w.width())
e=f(w.outerHeight(!0)-w.height())
t=D+H
i=I+e
n=h(y)?(p.w-t)*f(y)/100:y
a=h(x)?(p.h-i)*f(x)/100:x
if("iframe"===b.type){if(d=b.content,b.autoHeight&&1===d.data("ready"))try{d[0].contentWindow.document.location&&(v.width(n).height(9999),r=d.contents().find("body"),E&&r.css("overflow-x","hidden"),a=r.outerHeight(!0))}catch(e){}}else(b.autoWidth||b.autoHeight)&&(v.addClass("fancybox-tmp"),b.autoWidth||v.width(n),b.autoHeight||v.height(a),b.autoWidth&&(n=v.width()),b.autoHeight&&(a=v.height()),v.removeClass("fancybox-tmp"))
y=f(n)
x=f(a)
c=n/a
k=f(h(k)?f(k,"w")-t:k)
C=f(h(C)?f(C,"w")-t:C)
O=f(h(O)?f(O,"h")-i:O)
_=f(h(_)?f(_,"h")-i:_)
r=C
s=_
b.fitToView&&(C=Math.min(p.w-t,C),_=Math.min(p.h-i,_))
t=p.w-D
I=p.h-I
b.aspectRatio?(y>C&&(y=C,x=f(y/c)),x>_&&(x=_,y=f(x*c)),y<k&&(y=k,x=f(y/c)),x<O&&(x=O,y=f(x*c))):(y=Math.max(k,Math.min(y,C)),b.autoHeight&&"iframe"!==b.type&&(v.width(y),x=v.height()),x=Math.max(O,Math.min(x,_)))
if(b.fitToView)if(v.width(y).height(x),g.width(y+H),p=g.width(),D=g.height(),b.aspectRatio)for(;(p>t||D>I)&&y>k&&x>O&&!(19<u++);)x=Math.max(O,Math.min(_,x-10)),y=f(x*c),y<k&&(y=k,x=f(y/c)),y>C&&(y=C,x=f(y/c)),v.width(y).height(x),g.width(y+H),p=g.width(),D=g.height()
else y=Math.max(k,Math.min(y,y-(p-t))),x=Math.max(O,Math.min(x,x-(D-I)))
E&&"auto"===T&&x<a&&y+H+E<t&&(y+=E)
v.width(y).height(x)
g.width(y+H)
p=g.width()
D=g.height()
g=(p>t||D>I)&&y>k&&x>O
y=b.aspectRatio?y<r&&x<s&&y<n&&x<a:(y<r||x<s)&&(y<n||x<a)
o.extend(b,{dim:{width:m(p),height:m(D)},origWidth:n,origHeight:a,canShrink:g,canExpand:y,wPadding:H,hPadding:e,wrapSpace:D-w.outerHeight(!0),skinSpace:w.height()-x})
!d&&b.autoHeight&&x>O&&x<_&&!y&&v.height("auto")},_getPosition:function(e){var t=l.current,o=l.getViewport(),i=t.margin,n=l.wrap.width()+i[1]+i[3],a=l.wrap.height()+i[0]+i[2],i={position:"absolute",top:i[0],left:i[3]}
t.autoCenter&&t.fixed&&!e&&a<=o.h&&n<=o.w?i.position="fixed":t.locked||(i.top+=o.y,i.left+=o.x)
i.top=m(Math.max(i.top,i.top+(o.h-a)*t.topRatio))
i.left=m(Math.max(i.left,i.left+(o.w-n)*t.leftRatio))
return i},_afterZoomIn:function(){var e=l.current
e&&(l.isOpen=l.isOpened=!0,l.wrap.css("overflow","visible").addClass("fancybox-opened"),l.update(),(e.closeClick||e.nextClick&&1<l.group.length)&&l.inner.css("cursor","pointer").bind("click.fb",function(t){o(t.target).is("a")||o(t.target).parent().is("a")||(t.preventDefault(),l[e.closeClick?"close":"next"]())}),e.closeBtn&&o(e.tpl.closeBtn).appendTo(l.skin).bind("click.fb",function(e){e.preventDefault()
l.close()}),e.arrows&&1<l.group.length&&((e.loop||0<e.index)&&o(e.tpl.prev).appendTo(l.outer).bind("click.fb",l.prev),(e.loop||e.index<l.group.length-1)&&o(e.tpl.next).appendTo(l.outer).bind("click.fb",l.next)),l.trigger("afterShow"),e.loop||e.index!==e.group.length-1?l.opts.autoPlay&&!l.player.isActive&&(l.opts.autoPlay=!1,l.play(!0)):l.play(!1))},_afterZoomOut:function(e){e=e||l.current
o(".fancybox-wrap").trigger("onReset").remove()
o.extend(l,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null})
l.trigger("afterClose",e)}})
l.transitions={getOrigPosition:function(){var e=l.current,t=e.element,o=e.orig,i={},n=50,a=50,r=e.hPadding,s=e.wPadding,c=l.getViewport()
!o&&e.isDom&&t.is(":visible")&&(o=t.find("img:first"),o.length||(o=t))
p(o)?(i=o.offset(),o.is("img")&&(n=o.outerWidth(),a=o.outerHeight())):(i.top=c.y+(c.h-a)*e.topRatio,i.left=c.x+(c.w-n)*e.leftRatio);("fixed"===l.wrap.css("position")||e.locked)&&(i.top-=c.y,i.left-=c.x)
return i={top:m(i.top-r*e.topRatio),left:m(i.left-s*e.leftRatio),width:m(n+s),height:m(a+r)}},step:function(e,t){var o,i,n=t.prop
i=l.current
var a=i.wrapSpace,r=i.skinSpace
"width"!==n&&"height"!==n||(o=t.end===t.start?1:(e-t.start)/(t.end-t.start),l.isClosing&&(o=1-o),i="width"===n?i.wPadding:i.hPadding,i=e-i,l.skin[n](f("width"===n?i:i-a*o)),l.inner[n](f("width"===n?i:i-a*o-r*o)))},zoomIn:function(){var e=l.current,t=e.pos,i=e.openEffect,n="elastic"===i,a=o.extend({opacity:1},t)
delete a.position
n?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===i&&(t.opacity=.1)
l.wrap.css(t).animate(a,{duration:"none"===i?0:e.openSpeed,easing:e.openEasing,step:n?this.step:null,complete:l._afterZoomIn})},zoomOut:function(){var e=l.current,t=e.closeEffect,o="elastic"===t,i={opacity:.1}
o&&(i=this.getOrigPosition(),e.closeOpacity&&(i.opacity=.1))
l.wrap.animate(i,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:o?this.step:null,complete:l._afterZoomOut})},changeIn:function(){var e,t=l.current,o=t.nextEffect,i=t.pos,n={opacity:1},a=l.direction
i.opacity=.1
"elastic"===o&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(i[e]=m(f(i[e])-200),n[e]="+=200px"):(i[e]=m(f(i[e])+200),n[e]="-=200px"))
"none"===o?l._afterZoomIn():l.wrap.css(i).animate(n,{duration:t.nextSpeed,easing:t.nextEasing,complete:l._afterZoomIn})},changeOut:function(){var e=l.previous,t=e.prevEffect,i={opacity:.1},n=l.direction
"elastic"===t&&(i["down"===n||"up"===n?"top":"left"]=("up"===n||"left"===n?"-":"+")+"=200px")
e.wrap.animate(i,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){o(this).trigger("onReset").remove()}})}}
l.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!d,fixed:!0},overlay:null,fixed:!1,el:o("html"),create:function(e){var t
e=o.extend({},this.defaults,e)
this.overlay&&this.close()
t=l.coming?l.coming.parent:e.parent
this.overlay=o('<div class="fancybox-overlay"></div>').appendTo(t&&t.lenth?t:"body")
this.fixed=!1
e.fixed&&l.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this
e=o.extend({},this.defaults,e)
this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e)
this.fixed||(a.bind("resize.overlay",o.proxy(this.update,this)),this.update())
e.closeClick&&this.overlay.bind("click.overlay",function(e){if(o(e.target).hasClass("fancybox-overlay"))return l.isActive?l.close():t.close(),!1})
this.overlay.css(e.css).show()},close:function(){a.unbind("resize.overlay")
this.el.hasClass("fancybox-lock")&&(o(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),a.scrollTop(this.scrollV).scrollLeft(this.scrollH))
o(".fancybox-overlay").remove().hide()
o.extend(this,{overlay:null,fixed:!1})},update:function(){var e,o="100%"
this.overlay.width(o).height("100%")
s?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),r.width()>e&&(o=r.width())):r.width()>a.width()&&(o=r.width())
this.overlay.width(o).height(r.height())},onReady:function(e,t){var i=this.overlay
o(".fancybox-overlay").stop(!0,!0)
i||this.create(e)
e.locked&&this.fixed&&t.fixed&&(t.locked=this.overlay.append(t.wrap),t.fixed=!1)
!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){t.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&o("*").filter(function(){return"fixed"===o(this).css("position")&&!o(this).hasClass("fancybox-overlay")&&!o(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=a.scrollTop(),this.scrollH=a.scrollLeft(),this.el.addClass("fancybox-lock"),a.scrollTop(this.scrollV).scrollLeft(this.scrollH))
this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!l.coming&&this.overlay.fadeOut(e.speedOut,o.proxy(this.close,this))}}
l.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=l.current,i=t.title,n=e.type
o.isFunction(i)&&(i=i.call(t.element,t))
if(u(i)&&""!==o.trim(i)){t=o('<div class="fancybox-title fancybox-title-'+n+'-wrap">'+i+"</div>")
switch(n){case"inside":n=l.skin
break
case"outside":n=l.wrap
break
case"over":n=l.inner
break
default:n=l.skin,t.appendTo("body"),s&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),l.current.margin[2]+=Math.abs(f(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](n)}}}
o.fn.fancybox=function(e){var t,i=o(this),n=this.selector||"",a=function(a){var r,s,c=o(this).blur(),d=t
a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(r=e.groupAttr||"data-fancybox-group",s=c.attr(r),s||(r="rel",s=c.get(0)[r]),s&&""!==s&&"nofollow"!==s&&(c=n.length?o(n):i,c=c.filter("["+r+'="'+s+'"]'),d=c.index(this)),e.index=d,!1!==l.open(c,e)&&a.preventDefault())}
e=e||{}
t=e.index||0
n&&!1!==e.live?r.undelegate(n,"click.fb-start").delegate(n+":not('.fancybox-item, .fancybox-nav')","click.fb-start",a):i.unbind("click.fb-start").bind("click.fb-start",a)
this.filter("[data-fancybox-start=1]").trigger("click")
return this}
r.ready(function(){var t,a
o.scrollbarWidth===i&&(o.scrollbarWidth=function(){var e=o('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),t=t.innerWidth()-t.height(99).innerWidth()
e.remove()
return t})
o.support.fixedPosition===i&&(o.support.fixedPosition=function(){var e=o('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop
e.remove()
return t}())
o.extend(l.defaults,{scrollbarWidth:o.scrollbarWidth(),fixed:o.support.fixedPosition,parent:o("body")})
t=o(e).width()
n.addClass("fancybox-lock-test")
a=o(e).width()
n.removeClass("fancybox-lock-test")
o("<style type='text/css'>.fancybox-margin{margin-right:"+(a-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery)},514:function(e,t){"use strict"
t.RegexConstants={VIDEO_UPLOAD:{YOUTUBE:/youtube\.com\/watch\/?\?(?:.*&)?v=(.*)$/,VIMEO:/vimeo\.com\/(?:(?:channels\/[A-z]+\/)|(?:groups\/[A-z]+\/videos\/))?([0-9]+)(?:\?.*)?$/,YOUKU:/^http(s)?.*youku\.com/,TUDOU:/^http(s)?.*tudou\.com/,QQ:/^http(s)?:\/\/v\.qq\.com/},EMAIL:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}(\s*;\s*[\w-\.]+@([\w-]+\.)+[\w-]{2,10})*(\s*;\s*)?$/,PHONE:/^[+\d-\(\)]+$/,NO_NUMBER:/^[^\d]+$/,HAS_LINK_G:/https?:\/\/[^\s,{}\[\]]*/g,DOMAIN_NAME:/^[\w-]+[^-]$/}},649:function(e,t,o){var i,n,a,r,l
i=o(514).RegexConstants
l=i.VIDEO_UPLOAD.YOUTUBE
r=i.VIDEO_UPLOAD.VIMEO
a=function(e){return l.test(e)?"youtube":r.test(e)?"vimeo":i.VIDEO_UPLOAD.YOUKU.test(e)?"youku":i.VIDEO_UPLOAD.TUDOU.test(e)?"tudou":i.VIDEO_UPLOAD.QQ.test(e)?"qq":""}
n={getVideoType:a,getVideoID:function(e,t){t||(t=a(e))
switch(t){case"youtube":return e.match(l)[1].split("&")[0]
case"vimeo":return e.match(r)[1]}},getSmallYTThumbnail:function(e){return"//img.youtube.com/vi/"+e+"/mqdefault.jpg"},getNormalYTThumbnail:function(e){return"//img.youtube.com/vi/"+e+"/hqdefault.jpg"},getHDYTThumbnail:function(e){return"//img.youtube.com/vi/"+e+"/maxresdefault.jpg"},getYTIFrameHtml:function(e,t,o){var i
null==t&&(t=854)
null==o&&(o=480)
i=e+"_"+(new Date).getTime()
return"<iframe id='"+i+"' src='//www.youtube.com/embed/"+e+"?rel=1&autoplay=1&loop=1&playlist="+e+"&showinfo=0&wmode=transparent&controls=0&enablejsapi=1&origin=' frameborder='0' width='"+t+"' height='"+o+"'></iframe>"},getVimeoIFrameHtml:function(e,t,o){var i
i=e+"_"+(new Date).getTime()
return"<iframe id='"+i+"' src='//player.vimeo.com/video/"+e+"?api=1&player_id="+i+"&autopause=0&autoplay=1&badge=0&loop=1&portrait=0&title=0&origin=' frameborder='0' width='"+t+"' height='"+o+"'></iframe>"},getVideoHtmlByUrl:function(e,t,o){var i
i=a(e)
switch(i){case"youtube":return n.getYTIFrameHtml(n.getVideoID(e,"youtube"),t,o)
case"vimeo":return n.getVimeoIFrameHtml(n.getVideoID(e,"vimeo"),t,o)}},getYouKuHtml:function(e,t,o){var i,n
null==t&&(t=854)
null==o&&(o=480)
i=e.match(/\/id_([^.\/]*)(?:.html)?/)||[]
if(i.length){n=i[1]
return"<iframe width='"+t+"' height='"+o+"' src='http://player.youku.com/embed/"+n+"' frameborder=0 allowfullscreen></iframe>"}return""},getTuDouHtml:function(e,t,o){var i,n,a,r
null==t&&(t=854)
null==o&&(o=480)
if(/\/programs\/view\//.test(e)){n=e.match(/\/programs\/view\/([^.\/]*)\//)||[]
a=0}else if(/\/listplay\//.test(e)){n=e.match(/\/listplay\/([^.\/]*)\/([^.\/]*)(?:.html)?/)||[]
a=1}else{if(!/\/albumplay\//.test(e))return""
n=e.match(/\/albumplay\/([^.\/]*)\/([^.\/]*)(?:.html)?/)||[]
a=2}if(n.length){r=""
i=""
switch(n.length){case 3:r=n[2]
i=n[1]
break
case 2:r=n[1]}return"<iframe src='http://www.tudou.com/programs/view/html5embed.action?type="+a+"&code="+r+"&lcode="+i+"' width='"+t+"' height='"+o+"' allowtransparency='true' allowfullscreen='true' allowfullscreenInteractive='true' scrolling='no' border='0' frameborder='0'></iframe>"}return""},getQQHtml:function(e,t,o){var i,n,a,r
null==t&&(t=640)
null==o&&(o=498)
i=/v\.qq\.com.*vid=(\w*)$/
n=/v\.qq\.com.*\/page.*\/(\w*)\.html/
r=""
a=e.match(i);(null!=a?a.length:void 0)&&(r=a[1])
a=e.match(n);(null!=a?a.length:void 0)&&(r=a[1])
return r?"<iframe frameborder='0' width='"+t+"' height='"+o+"' src='http://v.qq.com/iframe/player.html?vid="+r+"&tiny=0&auto=0' allowfullscreen></iframe>":""},getMoreVideoTypesForFancybox:function(){return{youku:{matcher:/v\.youku\.com\/v_show\/id_([^.\/]*)(?:.html)?/,type:"iframe",url:"http://player.youku.com/embed/$1"},tudou1:{matcher:/www\.tudou\.com\/programs\/view\/([^.\/]*)\//,type:"iframe",url:"http://www.tudou.com/programs/view/html5embed.action?type=0&code=$1"},tudou2:{matcher:/www\.tudou\.com\/listplay\/([^.\/]*)\/([^.\/]*)(?:.html)?/,type:"iframe",url:"http://www.tudou.com/programs/view/html5embed.action?type=1&code=$2&lcode=$1"},tudou3:{matcher:/www\.tudou\.com\/albumplay\/([^.\/]*)\/([^.\/]*)(?:.html)?/,type:"iframe",url:"http://www.tudou.com/programs/view/html5embed.action?type=1&code=$2&lcode=$1"}}}}
e.exports=n},663:function(){!function(e){"use strict"
var t=e.fancybox,o=function(t,o,i){i=i||""
"object"===e.type(i)&&(i=e.param(i,!0))
e.each(o,function(e,o){t=t.replace("$"+e,o||"")})
i.length&&(t+=(t.indexOf("?")>0?"&":"?")+i)
return t}
t.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"opaque",enablejsapi:1},type:"iframe",url:"//www.youtube.com/embed/$3"},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:"yes"},type:"swf",url:function(t,o,i){i.swf.flashVars="playerVars="+e.param(o,!0)
return"//www.metacafe.com/fplayer/"+t[1]+"/.swf"}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"swf",url:"//www.dailymotion.com/swf/video/$1"},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:"iframe",url:"//www.twitvid.com/embed.php?guid=$1"},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:"image",url:"//twitpic.com/show/full/$1/"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:"iframe",url:function(e){return"//maps.google."+e[1]+"/"+e[3]+e[4]+"&output="+(e[4].indexOf("layer=c")>0?"svembed":"embed")}}},beforeLoad:function(t,i){var n,a,r,l,s=i.href||"",c=!1
for(n in t)if(t.hasOwnProperty(n)){a=t[n]
r=s.match(a.matcher)
if(r){c=a.type
l=e.extend(!0,{},a.params,i[n]||(e.isPlainObject(t[n])?t[n].params:null))
s="function"===e.type(a.url)?a.url.call(this,r,l,i):o(a.url,r,l)
break}}if(c){i.href=s
i.type=c
i.autoHeight=!1}}}}(jQuery)}})
;
