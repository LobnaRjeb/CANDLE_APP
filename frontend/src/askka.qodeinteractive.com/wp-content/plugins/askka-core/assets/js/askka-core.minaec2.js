!function(t){"use strict";"object"!=typeof qodef&&(window.qodef={}),window.qodefCore={},qodefCore.shortcodes={},qodefCore.listShortcodesScripts={qodefSwiper:qodef.qodefSwiper,qodefPagination:qodef.qodefPagination,qodefFilter:qodef.qodefFilter,qodefMasonryLayout:qodef.qodefMasonryLayout,qodefJustifiedGallery:qodef.qodefJustifiedGallery},qodefCore.body=t("body"),qodefCore.html=t("html"),qodefCore.windowWidth=t(window).width(),qodefCore.windowHeight=t(window).height(),qodefCore.scroll=0,t(document).ready(function(){qodefCore.scroll=t(window).scrollTop(),e.init()}),t(window).resize(function(){qodefCore.windowWidth=t(window).width(),qodefCore.windowHeight=t(window).height()}),t(window).scroll(function(){qodefCore.scroll=t(window).scrollTop()}),t(window).on("elementor/frontend/init",function(){i.init()}),t(window).load(function(){d.init(),i.init()}),qodefCore.qodefIsInViewport={check:function(o,t,n){var e,i;o.length&&(e=void 0!==o.data("viewport-offset")?o.data("viewport-offset"):.25,(i=new IntersectionObserver(function(e){!0===e[0].isIntersecting&&(t.call(o),!1!==n&&i.disconnect())},{threshold:[e]})).observe(o[0]))}};var n={disable:function(){window.addEventListener&&window.addEventListener("wheel",n.preventDefaultValue,{passive:!1}),document.onkeydown=n.keyDown},enable:function(){window.removeEventListener&&window.removeEventListener("wheel",n.preventDefaultValue,{passive:!1}),window.onmousewheel=document.onmousewheel=document.onkeydown=null},preventDefaultValue:function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1},keyDown:function(e){for(var o=[37,38,39,40],t=o.length;t--;)if(e.keyCode===o[t])return void n.preventDefaultValue(e)}};qodefCore.qodefScroll=n;var o={init:function(e){e.length&&o.qodefInitScroll(e)},qodefInitScroll:function(e){var o=new PerfectScrollbar(e[0],{wheelSpeed:.6,suppressScrollX:!0});t(window).resize(function(){o.update()})}};qodefCore.qodefPerfectScrollbar=o;var e={init:function(){var e;this.holder=t("#askka-core-page-inline-style"),!this.holder.length||(e=this.holder.data("style")).length&&t("head").append('<style type="text/css">'+e+"</style>")}},i={init:function(){var e=t(".qodef-parallax-item");e.length&&e.each(function(){var e=t(this),o=Math.floor(-75*Math.random()-25);(e.hasClass("qodef-grid-item")?e.children(".qodef-e-inner"):e).attr("data-parallax",'{"y": '+o+', "smoothness": 30}')}),i.initParallax()},initParallax:function(){t("[data-parallax]").length&&!qodefCore.html.hasClass("touchevents")&&"object"==typeof ParallaxScroll&&ParallaxScroll.init()}};qodefCore.qodefParallaxItem=i;var d={init:function(){var e=t(".qodef-zoom-scroll");e.length&&!qodefCore.html.hasClass("touchevents")&&e.each(function(){t(this).find("img").attr({"data-bottom-top":"transform: scale(1);","data-top-bottom":"transform: scale(1.1);"})}),1024<t(window).width()&&skrollr.init({forceHeight:!1})}};qodefCore.qodefScrollZoom=d}(jQuery),function(d){"use strict";d(document).ready(function(){a.init()});var a={init:function(){this.holder=d("#qodef-back-to-top"),this.holder.length&&(this.holder.on("click",function(e){e.preventDefault(),a.animateScrollToTop()}),a.showHideBackToTop())},animateScrollToTop:function(){var o,t=qodef.scroll,n=qodef.scroll,i=function(){var e;0!==n&&(n<1e-4&&(n=0),e=a.easingFunction((t-n)/t),d("html, body").scrollTop(t-(t-n)*e),n*=.9,o=requestAnimationFrame(i))};i(),d(window).one("wheel touchstart",function(){cancelAnimationFrame(o)})},easingFunction:function(e){return 0==e?0:Math.pow(1024,e-1)},showHideBackToTop:function(){d(window).scroll(function(){var e=d(this),o=e.scrollTop(),e=e.height(),e=0<o?o+e/2:1;e<1e3?a.addClass("off"):a.addClass("on")})},addClass:function(e){this.holder.removeClass("qodef--off qodef--on"),"on"===e?this.holder.addClass("qodef--on"):this.holder.addClass("qodef--off")}}}(jQuery),function(o){"use strict";o(window).on("load",function(){n.init()}),o(window).resize(function(){n.init()});var n={init:function(){var e=o(".qodef-background-text");e.length&&e.each(function(){n.responsiveOutputHandler(o(this))})},responsiveOutputHandler:function(t){o.each({3840:1441,1440:1367,1366:1025,1024:1},function(e,o){qodef.windowWidth<=e&&qodef.windowWidth>=o&&n.generateResponsiveOutput(t,e)})},generateResponsiveOutput:function(e,o){e=e.find(".qodef-m-background-text");e.length&&e.css({"font-size":e.data("size-"+o)+"px",top:e.data("vertical-offset-"+o)+"px"})}};window.qodefBackgroundText=n}(jQuery),function(t){"use strict";t(window).on("load",function(){e.init()});var e={holder:"",init:function(){this.holder=t("#qodef-page-footer.qodef--uncover"),this.holder.length&&!qodefCore.html.hasClass("touchevents")&&(e.addClass(),e.setHeight(this.holder),t(window).resize(function(){e.setHeight(e.holder)}))},setHeight:function(e){e.css("height","auto");var o=e.outerHeight();0<o&&(t("#qodef-page-outer").css({"margin-bottom":o,"background-color":qodefCore.body.css("backgroundColor")}),e.css("height",o))},addClass:function(){qodefCore.body.addClass("qodef-page-footer--uncover")}}}(jQuery),function(n){"use strict";n(document).ready(function(){i.init()});var i={init:function(){var t=n("a.qodef-fullscreen-menu-opener"),e=n("#qodef-fullscreen-area nav ul li a");t.on("click",function(e){e.preventDefault();var o=n(this);qodefCore.body.hasClass("qodef-fullscreen-menu--opened")?i.closeFullscreen(o):(i.openFullscreen(o),n(document).keyup(function(e){27===e.keyCode&&i.closeFullscreen(o)}))}),e.on("tap click",function(e){var o=n(this);o.parent().hasClass("menu-item-has-children")?(e.preventDefault(),i.clickItemWithChild(o)):"http://#"!==o.attr("href")&&"#"!==o.attr("href")&&i.closeFullscreen(t)})},openFullscreen:function(e){e.addClass("qodef--opened"),qodefCore.body.removeClass("qodef-fullscreen-menu-animate--out").addClass("qodef-fullscreen-menu--opened qodef-fullscreen-menu-animate--in"),qodefCore.qodefScroll.disable()},closeFullscreen:function(e){e.removeClass("qodef--opened"),qodefCore.body.removeClass("qodef-fullscreen-menu--opened qodef-fullscreen-menu-animate--in").addClass("qodef-fullscreen-menu-animate--out"),qodefCore.qodefScroll.enable(),n("nav.qodef-fullscreen-menu ul.sub_menu").slideUp(200)},clickItemWithChild:function(e){var o=e.parent(),e=o.find(".sub-menu").first();e.is(":visible")?(e.slideUp(300),o.removeClass("qodef--opened")):(e.slideDown(300),o.addClass("qodef--opened").siblings().find(".sub-menu").slideUp(400))}}}(jQuery),function(){"use strict";jQuery(document).ready(function(){e.init()});var e={appearanceType:function(){return-1!==qodefCore.body.attr("class").indexOf("qodef-header-appearance--")?qodefCore.body.attr("class").match(/qodef-header-appearance--([\w]+)/)[1]:""},init:function(){var e=this.appearanceType();""!==e&&"none"!==e&&qodefCore[e+"HeaderAppearance"]()}}}(),function(n){"use strict";n(document).ready(function(){i.init()});var i={init:function(){var e,o,t;qodefCore.body.hasClass("qodef-mobile-header-appearance--sticky")&&(e=qodefCore.scroll,o=qodefGlobal.vars.mobileHeaderHeight+qodefGlobal.vars.adminBarHeight,t=n("#qodef-page-outer"),i.showHideMobileHeader(e,o,t),n(window).scroll(function(){i.showHideMobileHeader(e,o,t),e=qodefCore.scroll}),n(window).resize(function(){t.css("padding-top",0),i.showHideMobileHeader(e,o,t)}))},showHideMobileHeader:function(e,o,t){qodefCore.windowWidth<=1024&&(qodefCore.scroll>2*o?(qodefCore.body.addClass("qodef-mobile-header--sticky"),setTimeout(function(){qodefCore.body.addClass("qodef-mobile-header--sticky-animation")},300),t.css("padding-top",qodefGlobal.vars.mobileHeaderHeight)):(qodefCore.body.removeClass("qodef-mobile-header--sticky"),setTimeout(function(){qodefCore.body.removeClass("qodef-mobile-header--sticky-animation")},300),t.css("padding-top",0)),qodefCore.scroll>e&&qodefCore.scroll>o||qodefCore.scroll<3*o?qodefCore.body.removeClass("qodef-mobile-header--sticky-display"):qodefCore.body.addClass("qodef-mobile-header--sticky-display"))}}}(jQuery),function(r){"use strict";r(document).ready(function(){e.init()});var e={init:function(){e.dropdownBehavior(),e.wideDropdownPosition(),e.dropdownPosition()},dropdownBehavior:function(){r(".qodef-header-navigation > ul > li").each(function(){var t=r(this);t.find(".qodef-drop-down-second").length&&t.waitForImages(function(){var e=t.find(".qodef-drop-down-second"),o=e.find(".qodef-drop-down-second-inner ul").outerHeight();navigator.userAgent.match(/(iPod|iPhone|iPad)/)?t.on("touchstart mouseenter",function(){e.css({height:o,overflow:"visible",visibility:"visible",opacity:"1"})}).on("mouseleave",function(){e.css({height:"0px",overflow:"hidden",visibility:"hidden",opacity:"0"})}):qodefCore.body.hasClass("qodef-drop-down-second--animate-height")?t.hoverIntent({interval:0,over:function(){setTimeout(function(){e.addClass("qodef-drop-down--start").css({visibility:"visible",height:"0",opacity:"1"}),e.stop().animate({height:o},400,"linear",function(){e.css("overflow","visible")})},100)},timeout:100,out:function(){e.stop().animate({height:"0",opacity:0},100,function(){e.css({overflow:"hidden",visibility:"hidden"})}),e.removeClass("qodef-drop-down--start")}}):t.hoverIntent({interval:0,over:function(){setTimeout(function(){e.addClass("qodef-drop-down--start").stop().css({height:o})},150)},timeout:150,out:function(){e.stop().css({height:"0"}).removeClass("qodef-drop-down--start")}})})})},wideDropdownPosition:function(){var e=r(".qodef-header-navigation > ul > li.qodef-menu-item--wide");e.length&&e.each(function(){var e,o,t=r(this).find(".qodef-drop-down-second");t.length&&(t.css("left",0),e=t.offset().left,qodefCore.body.hasClass("qodef--boxed")?(o=r(".qodef--boxed #qodef-page-wrapper").outerWidth(),e-=(qodefCore.windowWidth-o)/2,t.css({left:-e,width:o})):qodefCore.body.hasClass("qodef-drop-down-second--full-width")?t.css({left:-e,width:qodefCore.windowWidth}):t.css({left:-e+(qodefCore.windowWidth-t.width())/2}))})},dropdownPosition:function(){var e=r(".qodef-header-navigation > ul > li.qodef-menu-item--narrow.menu-item-has-children");e.length&&e.each(function(){var e,o=r(this),t=o.offset().left,n=o.find(".qodef-drop-down-second"),i=n.find(".qodef-drop-down-second-inner ul"),d=i.outerWidth(),a=r(window).width()-t;qodef.body.hasClass("qodef--boxed")&&(a=r(".qodef--boxed #qodef-page-wrapper").outerWidth()-t),0<o.find("li.menu-item-has-children").length&&(e=a-d),n.removeClass("qodef-drop-down--right"),i.removeClass("qodef-drop-down--right"),(a<d||e<d)&&(n.addClass("qodef-drop-down--right"),i.addClass("qodef-drop-down--right"))})}}}(jQuery),function(n){"use strict";n(window).on("load",function(){i.init()});var i={init:function(e){this.$sections=n(".qodef-parallax"),n.extend(this.$sections,e);e=!qodefCore.html.hasClass("touchevents")&&!qodefCore.body.hasClass("qodef-browser--edge")&&!qodefCore.body.hasClass("qodef-browser--ms-explorer");this.$sections.length&&e&&this.$sections.each(function(){i.ready(n(this))})},ready:function(e){e.$imgHolder=e.find(".qodef-parallax-img-holder"),e.$imgWrapper=e.find(".qodef-parallax-img-wrapper"),e.$img=e.find("img.qodef-parallax-img");var o=e.height(),t=e.$imgWrapper.height();e.movement=100*(t-o)/o/2,e.buffer=window.pageYOffset,e.scrollBuffer=null,requestAnimationFrame(function(){e.$imgHolder.animate({opacity:1},100),i.calc(e),i.loop(e)}),n(window).on("resize",function(){i.calc(e)})},calc:function(e){var o=e.$imgWrapper.height(),t=e.$imgWrapper.width();e.$img.width()<t&&e.$img.css({width:"100%",height:"auto"}),e.$img.height()<o&&e.$img.css({height:"100%",width:"auto","max-width":"unset"})},loop:function(e){if(e.scrollBuffer===Math.round(window.pageYOffset))return requestAnimationFrame(function(){i.loop(e)}),!1;e.scrollBuffer=Math.round(window.pageYOffset);var o=window.outerHeight,t=e.offset().top,n=e.height();e.scrollBuffer+1.2*o>t&&e.scrollBuffer<t+n&&(n=((o=(Math.abs(e.scrollBuffer+o-t)/(o+n)).toFixed(4))*e.movement).toFixed(4),e.buffer!==o&&e.$imgWrapper.css("transform","translate3d(0,"+n+"%, 0)"),e.buffer=o),requestAnimationFrame(function(){i.loop(e)})}};qodefCore.qodefParallaxBackground=i}(jQuery),function(n){"use strict";n(document).ready(function(){i.init()});var i={init:function(){var e=n("a.qodef-side-area-opener"),o=n("#qodef-side-area-close"),t=n("#qodef-side-area");i.openerHoverColor(e),e.on("click",function(e){e.preventDefault(),qodefCore.body.hasClass("qodef-side-area--opened")?i.closeSideArea():(i.openSideArea(),n(document).keyup(function(e){27===e.keyCode&&i.closeSideArea()}))}),o.on("click",function(e){e.preventDefault(),i.closeSideArea()}),t.length&&"object"==typeof qodefCore.qodefPerfectScrollbar&&qodefCore.qodefPerfectScrollbar.init(t)},openSideArea:function(){var e=n("#qodef-page-wrapper"),o=n(window).scrollTop();n(".qodef-side-area-cover").remove(),e.prepend('<div class="qodef-side-area-cover"/>'),qodefCore.body.removeClass("qodef-side-area-animate--out").addClass("qodef-side-area--opened qodef-side-area-animate--in"),n(".qodef-side-area-cover").on("click",function(e){e.preventDefault(),i.closeSideArea()}),n(window).scroll(function(){400<Math.abs(qodefCore.scroll-o)&&i.closeSideArea()})},closeSideArea:function(){qodefCore.body.removeClass("qodef-side-area--opened qodef-side-area-animate--in").addClass("qodef-side-area-animate--out")},openerHoverColor:function(e){var o,t;void 0!==e.data("hover-color")&&(o=e.data("hover-color"),t=e.css("color"),e.on("mouseenter",function(){e.css("color",o)}).on("mouseleave",function(){e.css("color",t)}))}}}(jQuery),function(s){"use strict";s(document).ready(function(){l.init()}),s(window).on("load",function(){l.windowLoaded=!0}),s(window).on("elementor/frontend/init",function(){var e=Boolean(elementorFrontend.isEditMode());e&&l.init(e)});var l={windowLoaded:!1,init:function(e){var o,t,n,i,d,a,r=s("#qodef-page-spinner");r.length&&(r.hasClass("qodef-layout--askka")?(o=s("#qodef-landing-rev-holder"),t=r.find(".qodef-m-askka-word"),n=r.find(".qodef-m-askka-text"),t.length&&(d=i=0,a=setInterval(function(){1400<=i&&(s(t[d]).removeClass("qodef--active"),s(n[d]).removeClass("qodef--active"),d+=1,i=0);s(t[d]).hasClass("qodef-active")||(d<2?(s(t[d]).addClass("qodef--active"),s(n[d]).addClass("qodef--active")):(s(t[d]).addClass("qodef--active-stay"),s(n[d]).addClass("qodef--active-stay")));{var e;i+=700,d>=t.length&&(o.length&&o.find("rs-module").revstart(),clearInterval(a),e=setInterval(function(){l.windowLoaded&&(clearInterval(e),r.addClass("qodef--finished"))},100))}},700))):(l.animateSpinner(r,e),l.fadeOutAnimation()))},animateSpinner:function(e,o){var t=setInterval(function(){l.windowLoaded&&(clearInterval(t),l.fadeOutLoader(e))},100);o&&l.fadeOutLoader(e)},fadeOutLoader:function(o,t,e,n){t=t||600,n=n||"swing",o.delay(e=e||0).fadeOut(t,n),s(window).on("bind","pageshow",function(e){e.originalEvent.persisted&&o.fadeOut(t,n)})},fadeOutAnimation:function(){var t,e;qodefCore.body.hasClass("qodef-spinner--fade-out")&&(t=s("#qodef-page-wrapper"),e=s("a"),window.addEventListener("pageshow",function(e){(e.persisted||void 0!==window.performance&&2===window.performance.navigation.type)&&!t.is(":visible")&&t.show()}),e.on("click",function(e){var o=s(this);1===e.which&&0<=o.attr("href").indexOf(window.location.host)&&!o.hasClass("remove")&&o.parent(".product-remove").length<=0&&o.parents(".woocommerce-product-gallery__image").length<=0&&void 0===o.data("rel")&&void 0===o.attr("rel")&&!o.hasClass("lightbox-active")&&(void 0===o.attr("target")||"_self"===o.attr("target"))&&o.attr("href").split("#")[0]!==window.location.href.split("#")[0]&&(e.preventDefault(),t.fadeOut(600,"easeOutSine",function(){window.location=o.attr("href")}))}))}}}(jQuery),function(a){"use strict";a(window).on("load",function(){r.init()});var r={init:function(){var e,o,t,n,i,d;this.holder=a("#qodef-subscribe-popup-modal"),this.holder.length&&(e=this.holder.find(".qodef-sp-prevent"),o=a(".qodef-sp-close"),t="no",e.length&&(n=this.holder.hasClass("qodef-sp-prevent-cookies"),i=e.find(".qodef-sp-prevent-input"),d=i.data("value"),n?(t=localStorage.getItem("disabledPopup"),sessionStorage.removeItem("disabledPopup")):(t=sessionStorage.getItem("disabledPopup"),localStorage.removeItem("disabledPopup")),e.children().on("click",function(e){"yes"!==d?(d="yes",i.addClass("qodef-sp-prevent-clicked").data("value","yes")):(d="no",i.removeClass("qodef-sp-prevent-clicked").data("value","no")),"yes"===d?(n?localStorage:sessionStorage).setItem("disabledPopup","yes"):(n?localStorage:sessionStorage).setItem("disabledPopup","no")})),"yes"!==t&&(qodefCore.body.hasClass("qodef-sp-opened")?r.handleClassAndScroll("remove"):r.handleClassAndScroll("add"),o.on("click",function(e){e.preventDefault(),r.handleClassAndScroll("remove")}),a(document).keyup(function(e){27===e.keyCode&&r.handleClassAndScroll("remove")})))},handleClassAndScroll:function(e){"remove"===e&&(qodefCore.body.removeClass("qodef-sp-opened"),qodefCore.qodefScroll.enable()),"add"===e&&(qodefCore.body.addClass("qodef-sp-opened"),qodefCore.qodefScroll.disable())}}}(jQuery),function(e){"use strict";qodefCore.shortcodes.askka_core_button={},e(document).ready(function(){n.init()});var n={init:function(){this.buttons=e(".qodef-button"),this.buttons.length&&this.buttons.each(function(){n.initItem(e(this))})},initItem:function(e){n.buttonHoverColor(e),n.buttonHoverBgColor(e),n.buttonHoverBorderColor(e)},buttonHoverColor:function(e){var o,t;void 0!==e.data("hover-color")&&(o=e.data("hover-color"),t=e.css("color"),e.on("mouseenter touchstart",function(){n.changeColor(e,"color",o)}),e.on("mouseleave touchend",function(){n.changeColor(e,"color",t)}))},buttonHoverBgColor:function(e){var o,t;void 0!==e.data("hover-background-color")&&(o=e.data("hover-background-color"),t=e.css("background-color"),e.on("mouseenter touchstart",function(){n.changeColor(e,"background-color",o)}),e.on("mouseleave touchend",function(){n.changeColor(e,"background-color",t)}))},buttonHoverBorderColor:function(e){var o,t;void 0!==e.data("hover-border-color")&&(o=e.data("hover-border-color"),t=e.css("borderTopColor"),e.on("mouseenter touchstart",function(){n.changeColor(e,"border-color",o)}),e.on("mouseleave touchend",function(){n.changeColor(e,"border-color",t)}))},changeColor:function(e,o,t){e.css(o,t)}};qodefCore.shortcodes.askka_core_button.qodefButton=n}(jQuery),function(){"use strict";qodefCore.shortcodes.askka_core_content_block={},qodefCore.shortcodes.askka_core_content_block.qodefMagnificPopup=qodef.qodefMagnificPopup}(jQuery),function(r){"use strict";qodefCore.shortcodes.askka_core_countdown={},r(document).ready(function(){t.init()});var t={init:function(){this.countdowns=r(".qodef-countdown"),this.countdowns.length&&this.countdowns.each(function(){t.initItem(r(this))})},initItem:function(e){var o=e.find(".qodef-m-date"),e=t.generateOptions(e);t.initCountdown(o,e)},generateOptions:function(e){var o={};return o.date=void 0!==e.data("date")?e.data("date"):null,o.weekLabel=void 0!==e.data("week-label")?e.data("week-label"):"",o.weekLabelPlural=void 0!==e.data("week-label-plural")?e.data("week-label-plural"):"",o.dayLabel=void 0!==e.data("day-label")?e.data("day-label"):"",o.dayLabelPlural=void 0!==e.data("day-label-plural")?e.data("day-label-plural"):"",o.hourLabel=void 0!==e.data("hour-label")?e.data("hour-label"):"",o.hourLabelPlural=void 0!==e.data("hour-label-plural")?e.data("hour-label-plural"):"",o.minuteLabel=void 0!==e.data("minute-label")?e.data("minute-label"):"",o.minuteLabelPlural=void 0!==e.data("minute-label-plural")?e.data("minute-label-plural"):"",o.secondLabel=void 0!==e.data("second-label")?e.data("second-label"):"",o.secondLabelPlural=void 0!==e.data("second-label-plural")?e.data("second-label-plural"):"",o},initCountdown:function(e,o){var t='<span class="qodef-digit-wrapper"><span class="qodef-digit">%w</span><span class="qodef-label">%!w:'+o.weekLabel+","+o.weekLabelPlural+";</span></span>",n='<span class="qodef-digit-wrapper"><span class="qodef-digit">%d</span><span class="qodef-label">%!d:'+o.dayLabel+","+o.dayLabelPlural+";</span></span>",i='<span class="qodef-digit-wrapper"><span class="qodef-digit">%H</span><span class="qodef-label">%!H:'+o.hourLabel+","+o.hourLabelPlural+";</span></span>",d='<span class="qodef-digit-wrapper"><span class="qodef-digit">%M</span><span class="qodef-label">%!M:'+o.minuteLabel+","+o.minuteLabelPlural+";</span></span>",a='<span class="qodef-digit-wrapper"><span class="qodef-digit">%S</span><span class="qodef-label">%!S:'+o.secondLabel+","+o.secondLabelPlural+";</span></span>";e.countdown(o.date,function(e){r(this).html(e.strftime(t+n+i+d+a))})}};qodefCore.shortcodes.askka_core_countdown.qodefCountdown=t}(jQuery),function(e){"use strict";qodefCore.shortcodes.askka_core_google_map={},e(document).ready(function(){o.init()});var o={init:function(){this.holder=e(".qodef-google-map"),this.holder.length&&this.holder.each(function(){o.initItem(e(this))})},initItem:function(e){void 0!==window.qodefGoogleMap&&window.qodefGoogleMap.init(e.find(".qodef-m-map"))}};qodefCore.shortcodes.askka_core_google_map.qodefGoogleMap=o}(jQuery),function(e){"use strict";qodefCore.shortcodes.askka_core_icon={},e(document).ready(function(){i.init()});var i={init:function(){this.icons=e(".qodef-icon-holder"),this.icons.length&&this.icons.each(function(){i.initItem(e(this))})},initItem:function(e){i.iconHoverColor(e),i.iconHoverBgColor(e),i.iconHoverBorderColor(e)},iconHoverColor:function(e){var o,t,n;void 0!==e.data("hover-color")&&(o=e.find("span").length?e.find("span"):e,t=o.css("color"),n=e.data("hover-color"),e.on("mouseenter",function(){i.changeColor(o,"color",n)}),e.on("mouseleave",function(){i.changeColor(o,"color",t)}))},iconHoverBgColor:function(e){var o,t;void 0!==e.data("hover-background-color")&&(o=e.data("hover-background-color"),t=e.css("background-color"),e.on("mouseenter",function(){i.changeColor(e,"background-color",o)}),e.on("mouseleave",function(){i.changeColor(e,"background-color",t)}))},iconHoverBorderColor:function(e){var o,t;void 0!==e.data("hover-border-color")&&(o=e.data("hover-border-color"),t=e.css("borderTopColor"),e.on("mouseenter",function(){i.changeColor(e,"border-color",o)}),e.on("mouseleave",function(){i.changeColor(e,"border-color",t)}))},changeColor:function(e,o,t){e.css(o,t)}};qodefCore.shortcodes.askka_core_icon.qodefIcon=i}(jQuery),function(){"use strict";qodefCore.shortcodes.askka_core_image_gallery={},qodefCore.shortcodes.askka_core_image_gallery.qodefSwiper=qodef.qodefSwiper,qodefCore.shortcodes.askka_core_image_gallery.qodefMasonryLayout=qodef.qodefMasonryLayout,qodefCore.shortcodes.askka_core_image_gallery.qodefMagnificPopup=qodef.qodefMagnificPopup}(jQuery),function(){"use strict";qodefCore.shortcodes.askka_core_image_with_text={},qodefCore.shortcodes.askka_core_image_with_text.qodefMagnificPopup=qodef.qodefMagnificPopup}(jQuery),function(e){"use strict";qodefCore.shortcodes.askka_core_section_title={},e(document).ready(function(){n.init()}),e(window).resize(function(){n.init()});var n={init:function(){this.holder=e(".qodef-section-title"),this.holder.length&&this.holder.each(function(){n.initItem(e(this))})},initItem:function(e){qodefCore.qodefIsInViewport.check(e,function(){e.addClass("qodef--appeared")}),n.responsiveOutputHandler(e)},responsiveOutputHandler:function(t){e.each({3840:1441,1440:1367,1366:1025,1024:681,680:1},function(e,o){qodef.windowWidth<=e&&qodef.windowWidth>=o&&n.generateResponsiveOutput(t,e)})},generateResponsiveOutput:function(e,o){e=e.find(".qodef-m-background-text");e.length&&e.css({top:e.data("vertical-offset-"+o)+"px"})},resetItem:function(e){e.removeClass("qodef--appeared")}};qodefCore.shortcodes.askka_core_section_title.qodefSectionTitle=n}(jQuery),function(){"use strict";qodefCore.shortcodes.askka_core_single_image={},qodefCore.shortcodes.askka_core_single_image.qodefMagnificPopup=qodef.qodefMagnificPopup}(jQuery),function(e){"use strict";qodefCore.shortcodes.askka_core_stacked_images={},e(document).ready(function(){o.init()});var o={init:function(){this.images=e(".qodef-stacked-images"),this.images.length&&this.images.each(function(){o.initItem(e(this))})},initItem:function(e){var o=e.find(".qodef-m-images");e.animate({opacity:1},300),setTimeout(function(){e.appear(function(){o.addClass("qodef--appeared")})},200)}};qodefCore.shortcodes.askka_core_stacked_images.qodefStackedImages=o}(jQuery),function(n){"use strict";qodefCore.shortcodes.askka_core_tabs={},n(document).ready(function(){e.init()});var e={init:function(){this.holder=n(".qodef-tabs"),this.holder.length&&this.holder.each(function(){e.initItem(n(this))})},initItem:function(e){e.children(".qodef-tabs-content").each(function(e){e+=1;var o=n(this),t=o.attr("id"),o=o.parent().find(".qodef-tabs-navigation li:nth-child("+e+") a"),e=o.attr("href");-1<(t="#"+t).indexOf(e)&&o.attr("href",t)}),e.addClass("qodef--init").tabs()}};qodefCore.shortcodes.askka_core_tabs.qodefTabs=e}(jQuery),function(d){"use strict";qodefCore.shortcodes.askka_vertical_split_slider={},d(document).ready(function(){a.init()});var a={init:function(){var e=d(".qodef-vertical-split-slider"),o=d(".qodef-vertical-split-slider-responsive .qodef-m-slide-content"),t=d("#qodef-page-header-inner"),n=a.getBreakpoint(e),i="";o.length&&o.each(function(){a.initItem(d(this))}),t.hasClass("qodef-skin--light")?i="light":t.hasClass("qodef-skin--dark")&&(i="dark"),e.length&&(e.multiscroll({navigation:!0,navigationPosition:"right",afterRender:function(){qodefCore.body.addClass("qodef-vertical-split-slider--initialized"),a.headerClassHandler(d(".ms-left .ms-section:first-child").data("header-skin"),i,t)},onLeave:function(e,o){a.headerClassHandler(d(d(".ms-left .ms-section")[o-1]).data("header-skin"),i,t)}}),qodefCore.body.addClass("qodef-vertical-split-slider--loaded"),e.height(qodefCore.windowHeight),a.buildAndDestroy(n),d(window).resize(function(){a.buildAndDestroy(n)}))},initItem:function(e){qodefCore.qodefIsInViewport.check(e,function(){e.addClass("qodef--appeared")})},getBreakpoint:function(e){return e.hasClass("qodef-disable-below--768")?768:1024},buildAndDestroy:function(e){qodefCore.windowWidth<=e?(d.fn.multiscroll.destroy(),d("html, body").css("overflow","initial"),qodefCore.body.removeClass("qodef-vertical-split-slider--initialized")):(d.fn.multiscroll.build(),qodefCore.body.addClass("qodef-vertical-split-slider--initialized"))},headerClassHandler:function(e,o,t){var n=d("#multiscroll-nav");void 0!==e&&""!==e||""!==o?(t.removeClass("qodef-skin--light qodef-skin--dark").addClass("qodef-skin--"+e),n.length&&n.removeClass("qodef-skin--light qodef-skin--dark").addClass("qodef-skin--"+e)):(t.removeClass("qodef-skin--light qodef-skin--dark"),n.length&&n.removeClass("qodef-skin--light qodef-skin--dark"))}};qodefCore.shortcodes.askka_vertical_split_slider.qodefVerticalSplitSlider=a}(jQuery),function(){"use strict";qodefCore.shortcodes.askka_core_video_button={},qodefCore.shortcodes.askka_core_video_button.qodefMagnificPopup=qodef.qodefMagnificPopup}(jQuery),function(){"use strict";qodefCore.shortcodes.askka_core_image_with_text={},qodefCore.shortcodes.askka_core_image_with_text.qodefMagnificPopup=qodef.qodefMagnificPopup}(jQuery),function(e){"use strict";var t="askka_core_blog_list";qodefCore.shortcodes[t]={},"object"==typeof qodefCore.listShortcodesScripts&&e.each(qodefCore.listShortcodesScripts,function(e,o){qodefCore.shortcodes[t][e]=o}),qodefCore.shortcodes[t].qodefResizeIframes=qodef.qodefResizeIframes}(jQuery),function(t){"use strict";var n={showHideHeader:function(e,o){1024<qodefCore.windowWidth&&(qodefCore.scroll<=0?(qodefCore.body.removeClass("qodef-header--fixed-display"),e.css("padding-top","0"),o.css("margin-top","0")):(qodefCore.body.addClass("qodef-header--fixed-display"),e.css("padding-top",parseInt(qodefGlobal.vars.headerHeight+qodefGlobal.vars.topAreaHeight)+"px"),o.css("margin-top",parseInt(qodefGlobal.vars.topAreaHeight)+"px")))},init:function(){var e,o;qodefCore.body.hasClass("qodef-header--vertical")||(e=t("#qodef-page-outer"),o=t("#qodef-page-header"),n.showHideHeader(e,o),t(window).scroll(function(){n.showHideHeader(e,o)}),t(window).resize(function(){e.css("padding-top","0"),n.showHideHeader(e,o)}))}};qodefCore.fixedHeaderAppearance=n.init}(jQuery),function(n){"use strict";var i={header:"",docYScroll:0,init:function(){var e=i.displayAmount();i.header=n(".qodef-header-sticky"),i.docYScroll=n(document).scrollTop(),i.setVisibility(e),n(window).scroll(function(){i.setVisibility(e)})},displayAmount:function(){return 0!==qodefGlobal.vars.qodefStickyHeaderScrollAmount?parseInt(qodefGlobal.vars.qodefStickyHeaderScrollAmount,10):parseInt(qodefGlobal.vars.headerHeight+qodefGlobal.vars.adminBarHeight,10)},setVisibility:function(e){var o,t=qodefCore.scroll<e;i.header.hasClass("qodef-appearance--up")&&(t=(o=n(document).scrollTop())>i.docYScroll&&e<o||o<e,i.docYScroll=n(document).scrollTop()),i.showHideHeader(t)},showHideHeader:function(e){e?qodefCore.body.removeClass("qodef-header--sticky-display"):qodefCore.body.addClass("qodef-header--sticky-display")}};qodefCore.stickyHeaderAppearance=i.init}(jQuery),function(a){"use strict";a(document).ready(function(){r.init()});var r={init:function(){var e=a("a.qodef-search-opener"),o=a(".qodef-search-cover-form"),t=o.find(".qodef-m-close"),n=a("#qodef-page-header-inner"),i=a(".qodef-widget-holder.qodef--one .qodef-search-opener"),d=a(".qodef-widget-holder.qodef--two .qodef-search-opener");e.length&&o.length&&(e.on("click",function(e){e.preventDefault(),r.openCoversHeader(o)}),t.on("click",function(e){e.preventDefault(),r.closeCoversHeader(o)})),qodefCore.body.hasClass("qodef-header--centered")&&n.hasClass("qodef-content-grid")&&o.length&&(i.length&&o.addClass("qodef-centered-in-grid-right"),d.length&&o.addClass("qodef-centered-in-grid-left"))},openCoversHeader:function(e){qodefCore.body.addClass("qodef-covers-search--opened qodef-covers-search--fadein"),qodefCore.body.removeClass("qodef-covers-search--fadeout"),setTimeout(function(){e.find(".qodef-m-form-field").focus()},600)},closeCoversHeader:function(e){qodefCore.body.removeClass("qodef-covers-search--opened qodef-covers-search--fadein"),qodefCore.body.addClass("qodef-covers-search--fadeout"),setTimeout(function(){e.find(".qodef-m-form-field").val(""),e.find(".qodef-m-form-field").blur(),qodefCore.body.removeClass("qodef-covers-search--fadeout")},300)}}}(jQuery),function(o){"use strict";o(document).ready(function(){t.init()});var t={init:function(){this.search=o("a.qodef-search-opener"),this.search.length&&this.search.each(function(){var e=o(this);t.searchHoverColor(e)})},searchHoverColor:function(e){var o,t;void 0!==e.data("hover-color")&&(o=e.data("hover-color"),t=e.css("color"),e.on("mouseenter",function(){e.css("color",o)}).on("mouseleave",function(){e.css("color",t)}))}}}(jQuery),function(i){"use strict";i(document).ready(function(){d.init()}),i(window).on("load",function(){d.windowLoaded=!0,d.completeAnimation()}),i(window).on("elementor/frontend/init",function(){var e=Boolean(elementorFrontend.isEditMode());e&&d.init(e)});var d={holder:"",windowLoaded:!1,percentNumber:0,init:function(e){this.holder=i("#qodef-page-spinner.qodef-layout--progress-bar"),this.holder.length&&d.animateSpinner(this.holder,e)},animateSpinner:function(e,o){var t=e.find(".qodef-m-spinner-number-label");e.find(".qodef-m-spinner-line-front").animate({width:"100%"},1e4,"linear");var n=setInterval(function(){d.animatePercent(t,d.percentNumber),d.windowLoaded&&clearInterval(n)},100);o&&d.fadeOutLoader(e)},completeAnimation:function(){var e=d.holder.length?d.holder:i("#qodef-page-spinner.qodef-layout--progress-bar"),o=setInterval(function(){100<=d.percentNumber?(clearInterval(o),e.find(".qodef-m-spinner-line-front").stop().animate({width:"100%"},500),e.addClass("qodef--finished"),setTimeout(function(){d.fadeOutLoader(e)},600)):d.animatePercent(e.find(".qodef-m-spinner-number-label"),d.percentNumber)},6)},animatePercent:function(e,o){o<100&&(e.text(o+=5),d.percentNumber=o)},fadeOutLoader:function(o,t,e,n){t=t||600,n=n||"swing",o.delay(e=e||0).fadeOut(t,n),i(window).on("bind","pageshow",function(e){e.originalEvent.persisted&&o.fadeOut(t,n)})}}}(jQuery),function(d){"use strict";qodefCore.shortcodes.askka_core_instagram_list={},d(document).ready(function(){e.init()});var e={init:function(){this.holder=d(".sbi.qodef-instagram-swiper-container"),this.holder.length&&this.holder.each(function(){e.initSlider(d(this))})},initSlider:function(e,o){var t=e.parent().attr("data-options"),n=e.find(".sbi_item.sbi_type_image"),i=e.find("#sbi_images");e.attr("data-options",t),i.addClass("swiper-wrapper"),n.length&&n.each(function(){d(this).addClass("qodef-e qodef-image-wrapper swiper-slide")}),"object"==typeof qodef.qodefSwiper&&(!1===o?qodef.qodefSwiper.initSlider(e):qodef.qodefSwiper.init(e))}};qodefCore.shortcodes.askka_core_instagram_list.qodefInstagram=e,qodefCore.shortcodes.askka_core_instagram_list.qodefSwiper=qodef.qodefSwiper}(jQuery),function(o){"use strict";o(document).on("qv_loader_stop qv_variation_gallery_loaded",function(){t.init()});var t={init:function(e){this.holder=[],this.holder.push({holder:o("#yith-quick-view-modal .variations select"),options:{minimumResultsForSearch:1/0}}),o.extend(this.holder,e),"object"==typeof this.holder&&o.each(this.holder,function(e,o){t.createSelect2(o.holder,o.options)})},createSelect2:function(e,o){"function"==typeof e.select2&&e.select2(o)}}}(jQuery),function(){"use strict";qodefCore.shortcodes.askka_core_product_category_list={},qodefCore.shortcodes.askka_core_product_category_list.qodefMasonryLayout=qodef.qodefMasonryLayout,qodefCore.shortcodes.askka_core_product_category_list.qodefSwiper=qodef.qodefSwiper}(jQuery),function(e){"use strict";var t="askka_core_product_list";qodefCore.shortcodes[t]={},"object"==typeof qodefCore.listShortcodesScripts&&e.each(qodefCore.listShortcodesScripts,function(e,o){qodefCore.shortcodes[t][e]=o})}(jQuery),function(t){"use strict";t(document).ready(function(){n.init()});var n={init:function(){var e=t(".qodef-woo-side-area-cart");e.length&&e.each(function(){var e=t(this);680<qodefCore.windowWidth&&(n.trigger(e),qodef.body.addClass("qodef-side-cart--initialized"),qodefCore.body.on("added_to_cart",function(){qodef.body.hasClass("qodef-side-cart--initialized")||n.trigger(e)}))})},trigger:function(o){t(".qodef-woo-side-area-cart").on("click",".qodef-m-opener",function(e){e.preventDefault();e=o.find(".qodef-m-items");o.hasClass("qodef--opened")?n.closeSideArea(o):(n.openSideArea(o),e.length&&"object"==typeof qodefCore.qodefPerfectScrollbar&&qodefCore.qodefPerfectScrollbar.init(e),t(document).keyup(function(e){27===e.keyCode&&n.closeSideArea(o)}))}),t(".qodef-woo-side-area-cart").on("click",".qodef-m-close",function(e){e.preventDefault(),n.closeSideArea(o)})},openSideArea:function(o){qodefCore.qodefScroll.disable(),o.addClass("qodef--opened"),t("#qodef-page-wrapper").prepend('<div class="qodef-woo-side-area-cart-cover"/>'),t(".qodef-woo-side-area-cart-cover").on("click",function(e){e.preventDefault(),n.closeSideArea(o)})},closeSideArea:function(e){e.hasClass("qodef--opened")&&(qodefCore.qodefScroll.enable(),e.removeClass("qodef--opened"),t(".qodef-woo-side-area-cart-cover").remove())}}}(jQuery),function(t){"use strict";t(document).ready(function(){n.init()});var n={init:function(){var e=t(".qodef-woo-dropdown-cart");e.length&&e.each(function(){var e=t(this),o=e.find(".qodef-woo-dropdown-items");n.addItemsClass(o),qodefCore.body.on("added_to_cart",function(){n.addItemsClass(e.find(".qodef-woo-dropdown-items"))})})},addItemsClass:function(e){e.length&&4<e.children().length?e.addClass("qodef--scrollable"):e.hasClass("qodef--scrollable")&&e.removeClass("qodef--scrollable")}}}(jQuery),function(){"use strict";qodefCore.shortcodes.askka_core_clients_list={},qodefCore.shortcodes.askka_core_clients_list.qodefSwiper=qodef.qodefSwiper}(jQuery),function(e){"use strict";var t="askka_core_portfolio_list";qodefCore.shortcodes[t]={},"object"==typeof qodefCore.listShortcodesScripts&&e.each(qodefCore.listShortcodesScripts,function(e,o){qodefCore.shortcodes[t][e]=o})}(jQuery),function(){"use strict";qodefCore.shortcodes.askka_core_testimonials_list={},qodefCore.shortcodes.askka_core_testimonials_list.qodefSwiper=qodef.qodefSwiper}(jQuery);