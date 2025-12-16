"use strict";
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "undefined" != typeof exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(function (d) {
  var s,
    a = window.Slick || {};
  (s = 0),
    ((a = function (e, i) {
      var t = this;
      (t.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: d(e),
        appendDots: d(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow:
          '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, i) {
          return (
            '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' +
            (i + 1) +
            "</button>"
          );
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !1,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (t.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        d.extend(t, t.initials),
        (t.activeBreakpoint = null),
        (t.animType = null),
        (t.animProp = null),
        (t.breakpoints = []),
        (t.breakpointSettings = []),
        (t.cssTransitions = !1),
        (t.hidden = "hidden"),
        (t.paused = !1),
        (t.positionProp = null),
        (t.respondTo = null),
        (t.rowCount = 1),
        (t.shouldClick = !0),
        (t.$slider = d(e)),
        (t.$slidesCache = null),
        (t.transformType = null),
        (t.transitionType = null),
        (t.visibilityChange = "visibilitychange"),
        (t.windowWidth = 0),
        (t.windowTimer = null),
        (e = d(e).data("slick") || {}),
        (t.options = d.extend({}, t.defaults, e, i)),
        (t.currentSlide = t.options.initialSlide),
        (t.originalSettings = t.options),
        void 0 !== document.mozHidden
          ? ((t.hidden = "mozHidden"),
            (t.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((t.hidden = "webkitHidden"),
            (t.visibilityChange = "webkitvisibilitychange")),
        (t.autoPlay = d.proxy(t.autoPlay, t)),
        (t.autoPlayClear = d.proxy(t.autoPlayClear, t)),
        (t.changeSlide = d.proxy(t.changeSlide, t)),
        (t.clickHandler = d.proxy(t.clickHandler, t)),
        (t.selectHandler = d.proxy(t.selectHandler, t)),
        (t.setPosition = d.proxy(t.setPosition, t)),
        (t.swipeHandler = d.proxy(t.swipeHandler, t)),
        (t.dragHandler = d.proxy(t.dragHandler, t)),
        (t.keyHandler = d.proxy(t.keyHandler, t)),
        (t.autoPlayIterator = d.proxy(t.autoPlayIterator, t)),
        (t.instanceUid = s++),
        (t.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        t.registerBreakpoints(),
        t.init(!0),
        t.checkResponsive(!0);
    }).prototype.addSlide = a.prototype.slickAdd =
      function (e, i, t) {
        var s = this;
        if ("boolean" == typeof i) (t = i), (i = null);
        else if (i < 0 || i >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof i
            ? 0 === i && 0 === s.$slides.length
              ? d(e).appendTo(s.$slideTrack)
              : t
              ? d(e).insertBefore(s.$slides.eq(i))
              : d(e).insertAfter(s.$slides.eq(i))
            : !0 === t
            ? d(e).prependTo(s.$slideTrack)
            : d(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, i) {
            d(i).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (a.prototype.animateHeight = function () {
      var e,
        i = this;
      1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical &&
        ((e = i.$slides.eq(i.currentSlide).outerHeight(!0)),
        i.$list.animate({ height: e }, i.options.speed));
    }),
    (a.prototype.animateSlide = function (e, i) {
      var t = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                i
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                i
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            d({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (e) {
                  (e = Math.ceil(e)),
                    !1 === s.options.vertical
                      ? (t[s.animType] = "translate(" + e + "px, 0px)")
                      : (t[s.animType] = "translate(0px," + e + "px)"),
                    s.$slideTrack.css(t);
                },
                complete: function () {
                  i && i.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (t[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (t[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(t),
            i &&
              setTimeout(function () {
                s.disableTransition(), i.call();
              }, s.options.speed));
    }),
    (a.prototype.asNavFor = function (i) {
      var e = this.options.asNavFor;
      null !== (e = e && null !== e ? d(e).not(this.$slider) : e) &&
        "object" == _typeof(e) &&
        e.each(function () {
          var e = d(this).slick("getSlick");
          e.unslicked || e.slideHandler(i, !0);
        });
    }),
    (a.prototype.applyTransition = function (e) {
      var i = this,
        t = {};
      !1 === i.options.fade
        ? (t[i.transitionType] =
            i.transformType + " " + i.options.speed + "ms " + i.options.cssEase)
        : (t[i.transitionType] =
            "opacity " + i.options.speed + "ms " + i.options.cssEase),
        (!1 === i.options.fade ? i.$slideTrack : i.$slides.eq(e)).css(t);
    }),
    (a.prototype.autoPlay = function () {
      var e = this;
      e.autoPlayTimer && clearInterval(e.autoPlayTimer),
        e.slideCount > e.options.slidesToShow &&
          !0 !== e.paused &&
          (e.autoPlayTimer = setInterval(
            e.autoPlayIterator,
            e.options.autoplaySpeed
          ));
    }),
    (a.prototype.autoPlayClear = function () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }),
    (a.prototype.autoPlayIterator = function () {
      var e = this;
      !1 === e.options.infinite
        ? 1 === e.direction
          ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0),
            e.slideHandler(e.currentSlide + e.options.slidesToScroll))
          : (e.currentSlide - 1 == 0 && (e.direction = 1),
            e.slideHandler(e.currentSlide - e.options.slidesToScroll))
        : e.slideHandler(e.currentSlide + e.options.slidesToScroll);
    }),
    (a.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = d(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = d(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (a.prototype.buildDots = function () {
      var e,
        i,
        t = this;
      if (!0 === t.options.dots && t.slideCount > t.options.slidesToShow) {
        for (
          i = '<ul class="' + t.options.dotsClass + '">', e = 0;
          e <= t.getDotCount();
          e += 1
        )
          i += "<li>" + t.options.customPaging.call(this, t, e) + "</li>";
        (t.$dots = d((i += "</ul>")).appendTo(t.options.appendDots)),
          t.$dots
            .find("li")
            .first()
            .addClass("slick-active")
            .attr("aria-hidden", "false");
      }
    }),
    (a.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, i) {
          d(i)
            .attr("data-slick-index", e)
            .data("originalStyling", d(i).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? d('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack
          .wrap('<div aria-live="polite" class="slick-list"/>')
          .parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        d("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (a.prototype.buildRows = function () {
      var e,
        i,
        t,
        s = this,
        o = document.createDocumentFragment(),
        n = s.$slider.children();
      if (1 < s.options.rows) {
        for (
          t = s.options.slidesPerRow * s.options.rows,
            i = Math.ceil(n.length / t),
            e = 0;
          e < i;
          e++
        ) {
          for (
            var a = document.createElement("div"), l = 0;
            l < s.options.rows;
            l++
          ) {
            for (
              var r = document.createElement("div"), d = 0;
              d < s.options.slidesPerRow;
              d++
            ) {
              var c = e * t + (l * s.options.slidesPerRow + d);
              n.get(c) && r.appendChild(n.get(c));
            }
            a.appendChild(r);
          }
          o.appendChild(a);
        }
        s.$slider.html(o),
          s.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / s.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (a.prototype.checkResponsive = function (e, i) {
      var t,
        s,
        o,
        n = this,
        a = !1,
        l = n.$slider.width(),
        r = window.innerWidth || d(window).width();
      if (
        ("window" === n.respondTo
          ? (o = r)
          : "slider" === n.respondTo
          ? (o = l)
          : "min" === n.respondTo && (o = Math.min(r, l)),
        n.options.responsive &&
          n.options.responsive.length &&
          null !== n.options.responsive)
      ) {
        for (t in ((s = null), n.breakpoints))
          n.breakpoints.hasOwnProperty(t) &&
            (!1 === n.originalSettings.mobileFirst
              ? o < n.breakpoints[t] && (s = n.breakpoints[t])
              : o > n.breakpoints[t] && (s = n.breakpoints[t]));
        null !== s
          ? (null !== n.activeBreakpoint && s === n.activeBreakpoint && !i) ||
            ((n.activeBreakpoint = s),
            "unslick" === n.breakpointSettings[s]
              ? n.unslick(s)
              : ((n.options = d.extend(
                  {},
                  n.originalSettings,
                  n.breakpointSettings[s]
                )),
                !0 === e && (n.currentSlide = n.options.initialSlide),
                n.refresh(e)),
            (a = s))
          : null !== n.activeBreakpoint &&
            ((n.activeBreakpoint = null),
            (n.options = n.originalSettings),
            !0 === e && (n.currentSlide = n.options.initialSlide),
            n.refresh(e),
            (a = s)),
          e || !1 === a || n.$slider.trigger("breakpoint", [n, a]);
      }
    }),
    (a.prototype.changeSlide = function (e, i) {
      var t,
        s = this,
        o = d(e.target);
      switch (
        (o.is("a") && e.preventDefault(),
        o.is("li") || (o = o.closest("li")),
        (t =
          s.slideCount % s.options.slidesToScroll != 0
            ? 0
            : (s.slideCount - s.currentSlide) % s.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (n = 0 == t ? s.options.slidesToScroll : s.options.slidesToShow - t),
            s.slideCount > s.options.slidesToShow &&
              s.slideHandler(s.currentSlide - n, !1, i);
          break;
        case "next":
          (n = 0 == t ? s.options.slidesToScroll : t),
            s.slideCount > s.options.slidesToShow &&
              s.slideHandler(s.currentSlide + n, !1, i);
          break;
        case "index":
          var n =
            0 === e.data.index
              ? 0
              : e.data.index || o.index() * s.options.slidesToScroll;
          s.slideHandler(s.checkNavigable(n), !1, i),
            o.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (a.prototype.checkNavigable = function (e) {
      var i = this.getNavigableIndexes(),
        t = 0;
      if (e > i[i.length - 1]) e = i[i.length - 1];
      else
        for (var s in i) {
          if (e < i[s]) {
            e = t;
            break;
          }
          t = i[s];
        }
      return e;
    }),
    (a.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (d("li", e.$dots).off("click.slick", e.changeSlide),
        !0 === e.options.pauseOnDotsHover &&
          !0 === e.options.autoplay &&
          d("li", e.$dots)
            .off("mouseenter.slick", d.proxy(e.setPaused, e, !0))
            .off("mouseleave.slick", d.proxy(e.setPaused, e, !1))),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        d(document).off(e.visibilityChange, e.visibility),
        e.$list.off("mouseenter.slick", d.proxy(e.setPaused, e, !0)),
        e.$list.off("mouseleave.slick", d.proxy(e.setPaused, e, !1)),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          d(e.$slideTrack).children().off("click.slick", e.selectHandler),
        d(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        d(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        d("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        d(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
        d(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (a.prototype.cleanUpRows = function () {
      var e;
      1 < this.options.rows &&
        ((e = this.$slides.children().children()).removeAttr("style"),
        this.$slider.html(e));
    }),
    (a.prototype.clickHandler = function (e) {
      !1 === this.shouldClick &&
        (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
    }),
    (a.prototype.destroy = function (e) {
      var i = this;
      i.autoPlayClear(),
        (i.touchObject = {}),
        i.cleanUpEvents(),
        d(".slick-cloned", i.$slider).detach(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow &&
          i.$prevArrow.length &&
          (i.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
        i.$nextArrow &&
          i.$nextArrow.length &&
          (i.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
        i.$slides &&
          (i.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              d(this).attr("style", d(this).data("originalStyling"));
            }),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slideTrack.detach(),
          i.$list.detach(),
          i.$slider.append(i.$slides)),
        i.cleanUpRows(),
        i.$slider.removeClass("slick-slider"),
        i.$slider.removeClass("slick-initialized"),
        (i.unslicked = !0),
        e || i.$slider.trigger("destroy", [i]);
    }),
    (a.prototype.disableTransition = function (e) {
      var i = {};
      (i[this.transitionType] = ""),
        (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(e)).css(
          i
        );
    }),
    (a.prototype.fadeSlide = function (e, i) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(e).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(e)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, i))
        : (t.applyTransition(e),
          t.$slides.eq(e).css({ opacity: 1, zIndex: t.options.zIndex }),
          i &&
            setTimeout(function () {
              t.disableTransition(e), i.call();
            }, t.options.speed));
    }),
    (a.prototype.fadeSlideOut = function (e) {
      var i = this;
      !1 === i.cssTransitions
        ? i.$slides
            .eq(e)
            .animate(
              { opacity: 0, zIndex: i.options.zIndex - 2 },
              i.options.speed,
              i.options.easing
            )
        : (i.applyTransition(e),
          i.$slides.eq(e).css({ opacity: 0, zIndex: i.options.zIndex - 2 }));
    }),
    (a.prototype.filterSlides = a.prototype.slickFilter =
      function (e) {
        var i = this;
        null !== e &&
          ((i.$slidesCache = i.$slides),
          i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.filter(e).appendTo(i.$slideTrack),
          i.reinit());
      }),
    (a.prototype.getCurrent = a.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (a.prototype.getDotCount = function () {
      var e = this,
        i = 0,
        t = 0,
        s = 0;
      if (!0 === e.options.infinite)
        for (; i < e.slideCount; )
          ++s,
            (i = t + e.options.slidesToScroll),
            (t +=
              e.options.slidesToScroll <= e.options.slidesToShow
                ? e.options.slidesToScroll
                : e.options.slidesToShow);
      else if (!0 === e.options.centerMode) s = e.slideCount;
      else
        for (; i < e.slideCount; )
          ++s,
            (i = t + e.options.slidesToScroll),
            (t +=
              e.options.slidesToScroll <= e.options.slidesToShow
                ? e.options.slidesToScroll
                : e.options.slidesToShow);
      return s - 1;
    }),
    (a.prototype.getLeft = function (e) {
      var i,
        t = this,
        s = 0;
      return (
        (t.slideOffset = 0),
        (i = t.$slides.first().outerHeight(!0)),
        !0 === t.options.infinite
          ? (t.slideCount > t.options.slidesToShow &&
              ((t.slideOffset = t.slideWidth * t.options.slidesToShow * -1),
              (s = i * t.options.slidesToShow * -1)),
            t.slideCount % t.options.slidesToScroll != 0 &&
              e + t.options.slidesToScroll > t.slideCount &&
              t.slideCount > t.options.slidesToShow &&
              (s =
                e > t.slideCount
                  ? ((t.slideOffset =
                      (t.options.slidesToShow - (e - t.slideCount)) *
                      t.slideWidth *
                      -1),
                    (t.options.slidesToShow - (e - t.slideCount)) * i * -1)
                  : ((t.slideOffset =
                      (t.slideCount % t.options.slidesToScroll) *
                      t.slideWidth *
                      -1),
                    (t.slideCount % t.options.slidesToScroll) * i * -1)))
          : e + t.options.slidesToShow > t.slideCount &&
            ((t.slideOffset =
              (e + t.options.slidesToShow - t.slideCount) * t.slideWidth),
            (s = (e + t.options.slidesToShow - t.slideCount) * i)),
        t.slideCount <= t.options.slidesToShow && (s = t.slideOffset = 0),
        !0 === t.options.centerMode && !0 === t.options.infinite
          ? (t.slideOffset +=
              t.slideWidth * Math.floor(t.options.slidesToShow / 2) -
              t.slideWidth)
          : !0 === t.options.centerMode &&
            ((t.slideOffset = 0),
            (t.slideOffset +=
              t.slideWidth * Math.floor(t.options.slidesToShow / 2))),
        (i =
          !1 === t.options.vertical
            ? e * t.slideWidth * -1 + t.slideOffset
            : e * i * -1 + s),
        !0 === t.options.variableWidth &&
          ((s =
            t.slideCount <= t.options.slidesToShow || !1 === t.options.infinite
              ? t.$slideTrack.children(".slick-slide").eq(e)
              : t.$slideTrack
                  .children(".slick-slide")
                  .eq(e + t.options.slidesToShow)),
          (i =
            !0 === t.options.rtl
              ? s[0]
                ? -1 * (t.$slideTrack.width() - s[0].offsetLeft - s.width())
                : 0
              : s[0]
              ? -1 * s[0].offsetLeft
              : 0),
          !0 === t.options.centerMode &&
            ((s =
              t.slideCount <= t.options.slidesToShow ||
              !1 === t.options.infinite
                ? t.$slideTrack.children(".slick-slide").eq(e)
                : t.$slideTrack
                    .children(".slick-slide")
                    .eq(e + t.options.slidesToShow + 1)),
            (i =
              !0 === t.options.rtl
                ? s[0]
                  ? -1 * (t.$slideTrack.width() - s[0].offsetLeft - s.width())
                  : 0
                : s[0]
                ? -1 * s[0].offsetLeft
                : 0),
            (i += (t.$list.width() - s.outerWidth()) / 2))),
        i
      );
    }),
    (a.prototype.getOption = a.prototype.slickGetOption =
      function (e) {
        return this.options[e];
      }),
    (a.prototype.getNavigableIndexes = function () {
      for (
        var e = this,
          i = 0,
          t = 0,
          s = [],
          o =
            !1 === e.options.infinite
              ? e.slideCount
              : ((i = -1 * e.options.slidesToScroll),
                (t = -1 * e.options.slidesToScroll),
                2 * e.slideCount);
        i < o;

      )
        s.push(i),
          (i = t + e.options.slidesToScroll),
          (t +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (a.prototype.getSlick = function () {
      return this;
    }),
    (a.prototype.getSlideCount = function () {
      var t,
        s = this,
        o =
          !0 === s.options.centerMode
            ? s.slideWidth * Math.floor(s.options.slidesToShow / 2)
            : 0;
      return !0 === s.options.swipeToSlide
        ? (s.$slideTrack.find(".slick-slide").each(function (e, i) {
            return i.offsetLeft - o + d(i).outerWidth() / 2 > -1 * s.swipeLeft
              ? ((t = i), !1)
              : void 0;
          }),
          Math.abs(d(t).attr("data-slick-index") - s.currentSlide) || 1)
        : s.options.slidesToScroll;
    }),
    (a.prototype.goTo = a.prototype.slickGoTo =
      function (e, i) {
        this.changeSlide({ data: { message: "index", index: parseInt(e) } }, i);
      }),
    (a.prototype.init = function (e) {
      var i = this;
      d(i.$slider).hasClass("slick-initialized") ||
        (d(i.$slider).addClass("slick-initialized"),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots()),
        e && i.$slider.trigger("init", [i]),
        !0 === i.options.accessibility && i.initADA();
    }),
    (a.prototype.initArrowEvents = function () {
      var e = this;
      !0 === e.options.arrows &&
        e.slideCount > e.options.slidesToShow &&
        (e.$prevArrow.on("click.slick", { message: "previous" }, e.changeSlide),
        e.$nextArrow.on("click.slick", { message: "next" }, e.changeSlide));
    }),
    (a.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        e.slideCount > e.options.slidesToShow &&
        d("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          !0 === e.options.autoplay &&
          d("li", e.$dots)
            .on("mouseenter.slick", d.proxy(e.setPaused, e, !0))
            .on("mouseleave.slick", d.proxy(e.setPaused, e, !1));
    }),
    (a.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        d(document).on(e.visibilityChange, d.proxy(e.visibility, e)),
        e.$list.on("mouseenter.slick", d.proxy(e.setPaused, e, !0)),
        e.$list.on("mouseleave.slick", d.proxy(e.setPaused, e, !1)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          d(e.$slideTrack).children().on("click.slick", e.selectHandler),
        d(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          d.proxy(e.orientationChange, e)
        ),
        d(window).on(
          "resize.slick.slick-" + e.instanceUid,
          d.proxy(e.resize, e)
        ),
        d("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        d(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        d(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (a.prototype.initUI = function () {
      var e = this;
      !0 === e.options.arrows &&
        e.slideCount > e.options.slidesToShow &&
        (e.$prevArrow.show(), e.$nextArrow.show()),
        !0 === e.options.dots &&
          e.slideCount > e.options.slidesToShow &&
          e.$dots.show(),
        !0 === e.options.autoplay && e.autoPlay();
    }),
    (a.prototype.keyHandler = function (e) {
      e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === e.keyCode && !0 === this.options.accessibility
          ? this.changeSlide({ data: { message: "previous" } })
          : 39 === e.keyCode &&
            !0 === this.options.accessibility &&
            this.changeSlide({ data: { message: "next" } }));
    }),
    (a.prototype.lazyLoad = function () {
      function e(e) {
        d("img[data-lazy]", e).each(function () {
          var e = d(this),
            i = d(this).attr("data-lazy"),
            t = document.createElement("img");
          (t.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              e.attr("src", i).animate({ opacity: 1 }, 200, function () {
                e.removeAttr("data-lazy").removeClass("slick-loading");
              });
            });
          }),
            (t.src = i);
        });
      }
      var i,
        t,
        s = this;
      !0 === s.options.centerMode
        ? (t =
            !0 === s.options.infinite
              ? (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) +
                s.options.slidesToShow +
                2
              : ((i = Math.max(
                  0,
                  s.currentSlide - (s.options.slidesToShow / 2 + 1)
                )),
                s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
        : ((t =
            (i = s.options.infinite
              ? s.options.slidesToShow + s.currentSlide
              : s.currentSlide) + s.options.slidesToShow),
          !0 === s.options.fade && (0 < i && i--, t <= s.slideCount && t++)),
        e(s.$slider.find(".slick-slide").slice(i, t)),
        s.slideCount <= s.options.slidesToShow
          ? e(s.$slider.find(".slick-slide"))
          : s.currentSlide >= s.slideCount - s.options.slidesToShow
          ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow))
          : 0 === s.currentSlide &&
            e(
              s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow)
            );
    }),
    (a.prototype.loadSlider = function () {
      var e = this;
      e.setPosition(),
        e.$slideTrack.css({ opacity: 1 }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
    }),
    (a.prototype.next = a.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (a.prototype.orientationChange = function () {
      this.checkResponsive(), this.setPosition();
    }),
    (a.prototype.pause = a.prototype.slickPause =
      function () {
        this.autoPlayClear(), (this.paused = !0);
      }),
    (a.prototype.play = a.prototype.slickPlay =
      function () {
        (this.paused = !1), this.autoPlay();
      }),
    (a.prototype.postSlide = function (e) {
      var i = this;
      i.$slider.trigger("afterChange", [i, e]),
        (i.animating = !1),
        i.setPosition(),
        !(i.swipeLeft = null) === i.options.autoplay &&
          !1 === i.paused &&
          i.autoPlay(),
        !0 === i.options.accessibility && i.initADA();
    }),
    (a.prototype.prev = a.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (a.prototype.preventDefault = function (e) {
      e.preventDefault();
    }),
    (a.prototype.progressiveLazyLoad = function () {
      var e,
        i = this;
      0 < d("img[data-lazy]", i.$slider).length &&
        ((e = d("img[data-lazy]", i.$slider).first()).attr("src", null),
        e
          .attr("src", e.attr("data-lazy"))
          .removeClass("slick-loading")
          .load(function () {
            e.removeAttr("data-lazy"),
              i.progressiveLazyLoad(),
              !0 === i.options.adaptiveHeight && i.setPosition();
          })
          .error(function () {
            e.removeAttr("data-lazy"), i.progressiveLazyLoad();
          }));
    }),
    (a.prototype.refresh = function (e) {
      var i = this,
        t = i.slideCount - i.options.slidesToShow;
      i.options.infinite ||
        (i.slideCount <= i.options.slidesToShow
          ? (i.currentSlide = 0)
          : i.currentSlide > t && (i.currentSlide = t)),
        (t = i.currentSlide),
        i.destroy(!0),
        d.extend(i, i.initials, { currentSlide: t }),
        i.init(),
        e || i.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (a.prototype.registerBreakpoints = function () {
      var e,
        i,
        t,
        s = this,
        o = s.options.responsive || null;
      if ("array" === d.type(o) && o.length) {
        for (e in ((s.respondTo = s.options.respondTo || "window"), o))
          if (
            ((t = s.breakpoints.length - 1),
            (i = o[e].breakpoint),
            o.hasOwnProperty(e))
          ) {
            for (; 0 <= t; )
              s.breakpoints[t] &&
                s.breakpoints[t] === i &&
                s.breakpoints.splice(t, 1),
                t--;
            s.breakpoints.push(i), (s.breakpointSettings[i] = o[e].settings);
          }
        s.breakpoints.sort(function (e, i) {
          return s.options.mobileFirst ? e - i : i - e;
        });
      }
    }),
    (a.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          d(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(0),
        e.setPosition(),
        e.$slider.trigger("reInit", [e]),
        !0 === e.options.autoplay && e.focusHandler();
    }),
    (a.prototype.resize = function () {
      var e = this;
      d(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = d(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (a.prototype.removeSlide = a.prototype.slickRemove =
      function (e, i, t) {
        var s = this;
        return (
          (e =
            "boolean" == typeof e
              ? !0 === (i = e)
                ? 0
                : s.slideCount - 1
              : !0 === i
              ? --e
              : e),
          !(s.slideCount < 1 || e < 0 || e > s.slideCount - 1) &&
            (s.unload(),
            (!0 === t
              ? s.$slideTrack.children()
              : s.$slideTrack.children(this.options.slide).eq(e)
            ).remove(),
            (s.$slides = s.$slideTrack.children(this.options.slide)),
            s.$slideTrack.children(this.options.slide).detach(),
            s.$slideTrack.append(s.$slides),
            (s.$slidesCache = s.$slides),
            void s.reinit())
        );
      }),
    (a.prototype.setCSS = function (e) {
      var i,
        t,
        s = this,
        o = {};
      !0 === s.options.rtl && (e = -e),
        (i = "left" == s.positionProp ? Math.ceil(e) + "px" : "0px"),
        (t = "top" == s.positionProp ? Math.ceil(e) + "px" : "0px"),
        (o[s.positionProp] = e),
        !1 !== s.transformsEnabled &&
          (!(o = {}) === s.cssTransitions
            ? (o[s.animType] = "translate(" + i + ", " + t + ")")
            : (o[s.animType] = "translate3d(" + i + ", " + t + ", 0px)")),
        s.$slideTrack.css(o);
    }),
    (a.prototype.setDimensions = function () {
      var e = this,
        i =
          (!1 === e.options.vertical
            ? !0 === e.options.centerMode &&
              e.$list.css({ padding: "0px " + e.options.centerPadding })
            : (e.$list.height(
                e.$slides.first().outerHeight(!0) * e.options.slidesToShow
              ),
              !0 === e.options.centerMode &&
                e.$list.css({ padding: e.options.centerPadding + " 0px" })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(
                  e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children(".slick-slide").length
                )
              )),
          e.$slides.first().outerWidth(!0) - e.$slides.first().width());
      !1 === e.options.variableWidth &&
        e.$slideTrack.children(".slick-slide").width(e.slideWidth - i);
    }),
    (a.prototype.setFade = function () {
      var t,
        s = this;
      s.$slides.each(function (e, i) {
        (t = s.slideWidth * e * -1),
          !0 === s.options.rtl
            ? d(i).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: s.options.zIndex - 2,
                opacity: 0,
              })
            : d(i).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: s.options.zIndex - 2,
                opacity: 0,
              });
      }),
        s.$slides
          .eq(s.currentSlide)
          .css({ zIndex: s.options.zIndex - 1, opacity: 1 });
    }),
    (a.prototype.setHeight = function () {
      var e,
        i = this;
      1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical &&
        ((e = i.$slides.eq(i.currentSlide).outerHeight(!0)),
        i.$list.css("height", e));
    }),
    (a.prototype.setOption = a.prototype.slickSetOption =
      function (e, i, t) {
        var s,
          o,
          n = this;
        if ("responsive" === e && "array" === d.type(i))
          for (o in i)
            if ("array" !== d.type(n.options.responsive))
              n.options.responsive = [i[o]];
            else {
              for (s = n.options.responsive.length - 1; 0 <= s; )
                n.options.responsive[s].breakpoint === i[o].breakpoint &&
                  n.options.responsive.splice(s, 1),
                  s--;
              n.options.responsive.push(i[o]);
            }
        else n.options[e] = i;
        !0 === t && (n.unload(), n.reinit());
      }),
    (a.prototype.setPosition = function () {
      var e = this;
      e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade
          ? e.setCSS(e.getLeft(e.currentSlide))
          : e.setFade(),
        e.$slider.trigger("setPosition", [e]);
    }),
    (a.prototype.setProps = function () {
      var e = this,
        i = document.body.style;
      (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
        "top" === e.positionProp
          ? e.$slider.addClass("slick-vertical")
          : e.$slider.removeClass("slick-vertical"),
        (void 0 === i.WebkitTransition &&
          void 0 === i.MozTransition &&
          void 0 === i.msTransition) ||
          !0 !== e.options.useCSS ||
          (e.cssTransitions = !0),
        e.options.fade &&
          ("number" == typeof e.options.zIndex
            ? e.options.zIndex < 3 && (e.options.zIndex = 3)
            : (e.options.zIndex = e.defaults.zIndex)),
        void 0 !== i.OTransform &&
          ((e.animType = "OTransform"),
          (e.transformType = "-o-transform"),
          (e.transitionType = "OTransition"),
          void 0 === i.perspectiveProperty &&
            void 0 === i.webkitPerspective &&
            (e.animType = !1)),
        void 0 !== i.MozTransform &&
          ((e.animType = "MozTransform"),
          (e.transformType = "-moz-transform"),
          (e.transitionType = "MozTransition"),
          void 0 === i.perspectiveProperty &&
            void 0 === i.MozPerspective &&
            (e.animType = !1)),
        void 0 !== i.webkitTransform &&
          ((e.animType = "webkitTransform"),
          (e.transformType = "-webkit-transform"),
          (e.transitionType = "webkitTransition"),
          void 0 === i.perspectiveProperty &&
            void 0 === i.webkitPerspective &&
            (e.animType = !1)),
        void 0 !== i.msTransform &&
          ((e.animType = "msTransform"),
          (e.transformType = "-ms-transform"),
          (e.transitionType = "msTransition"),
          void 0 === i.msTransform && (e.animType = !1)),
        void 0 !== i.transform &&
          !1 !== e.animType &&
          ((e.animType = "transform"),
          (e.transformType = "transform"),
          (e.transitionType = "transition")),
        (e.transformsEnabled =
          e.options.useTransform && null !== e.animType && !1 !== e.animType);
    }),
    (a.prototype.setSlideClasses = function (e) {
      var i,
        t,
        s = this,
        o = s.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true");
      s.$slides.eq(e).addClass("slick-current"),
        !0 === s.options.centerMode
          ? ((t = Math.floor(s.options.slidesToShow / 2)),
            !0 === s.options.infinite &&
              ((t <= e && e <= s.slideCount - 1 - t
                ? s.$slides.slice(e - t, e + t + 1)
                : ((i = s.options.slidesToShow + e),
                  o.slice(i - t + 1, i + t + 2))
              )
                .addClass("slick-active")
                .attr("aria-hidden", "false"),
              0 === e
                ? o
                    .eq(o.length - 1 - s.options.slidesToShow)
                    .addClass("slick-center")
                : e === s.slideCount - 1 &&
                  o.eq(s.options.slidesToShow).addClass("slick-center")),
            s.$slides.eq(e).addClass("slick-center"))
          : (0 <= e && e <= s.slideCount - s.options.slidesToShow
              ? s.$slides.slice(e, e + s.options.slidesToShow)
              : o.length <= s.options.slidesToShow
              ? o
              : ((t = s.slideCount % s.options.slidesToShow),
                (i =
                  !0 === s.options.infinite ? s.options.slidesToShow + e : e),
                s.options.slidesToShow == s.options.slidesToScroll &&
                s.slideCount - e < s.options.slidesToShow
                  ? o.slice(i - (s.options.slidesToShow - t), i + t)
                  : o.slice(i, i + s.options.slidesToShow))
            )
              .addClass("slick-active")
              .attr("aria-hidden", "false"),
        "ondemand" === s.options.lazyLoad && s.lazyLoad();
    }),
    (a.prototype.setupInfinite = function () {
      var e,
        i,
        t,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((i = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          t =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - t;
          --e
        )
          d(s.$slides[(i = e - 1)])
            .clone(!0)
            .attr("id", "")
            .attr("data-slick-index", i - s.slideCount)
            .prependTo(s.$slideTrack)
            .addClass("slick-cloned");
        for (e = 0; e < t; e += 1)
          (i = e),
            d(s.$slides[i])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", i + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            d(this).attr("id", "");
          });
      }
    }),
    (a.prototype.setPaused = function (e) {
      var i = this;
      !0 === i.options.autoplay &&
        !0 === i.options.pauseOnHover &&
        ((i.paused = e) ? i.autoPlayClear() : i.autoPlay());
    }),
    (a.prototype.selectHandler = function (e) {
      var i = this,
        e = d(e.target).is(".slick-slide")
          ? d(e.target)
          : d(e.target).parents(".slick-slide"),
        e = (e = parseInt(e.attr("data-slick-index"))) || 0;
      return i.slideCount <= i.options.slidesToShow
        ? (i.setSlideClasses(e), void i.asNavFor(e))
        : void i.slideHandler(e);
    }),
    (a.prototype.slideHandler = function (e, i, t) {
      var s,
        o,
        n,
        a = this;
      return (
        (i = i || !1),
        (!0 === a.animating && !0 === a.options.waitForAnimate) ||
        (!0 === a.options.fade && a.currentSlide === e) ||
        a.slideCount <= a.options.slidesToShow
          ? void 0
          : (!1 === i && a.asNavFor(e),
            (s = e),
            (i = a.getLeft(s)),
            (n = a.getLeft(a.currentSlide)),
            (a.currentLeft = null === a.swipeLeft ? n : a.swipeLeft),
            (!1 === a.options.infinite &&
              !1 === a.options.centerMode &&
              (e < 0 || e > a.getDotCount() * a.options.slidesToScroll)) ||
            (!1 === a.options.infinite &&
              !0 === a.options.centerMode &&
              (e < 0 || e > a.slideCount - a.options.slidesToScroll))
              ? void (
                  !1 === a.options.fade &&
                  ((s = a.currentSlide),
                  !0 !== t
                    ? a.animateSlide(n, function () {
                        a.postSlide(s);
                      })
                    : a.postSlide(s))
                )
              : (!0 === a.options.autoplay && clearInterval(a.autoPlayTimer),
                (o =
                  s < 0
                    ? a.slideCount % a.options.slidesToScroll != 0
                      ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                      : a.slideCount + s
                    : s >= a.slideCount
                    ? a.slideCount % a.options.slidesToScroll != 0
                      ? 0
                      : s - a.slideCount
                    : s),
                (a.animating = !0),
                a.$slider.trigger("beforeChange", [a, a.currentSlide, o]),
                (e = a.currentSlide),
                (a.currentSlide = o),
                a.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                !0 === a.options.fade
                  ? (!0 !== t
                      ? (a.fadeSlideOut(e),
                        a.fadeSlide(o, function () {
                          a.postSlide(o);
                        }))
                      : a.postSlide(o),
                    void a.animateHeight())
                  : void (!0 !== t
                      ? a.animateSlide(i, function () {
                          a.postSlide(o);
                        })
                      : a.postSlide(o))))
      );
    }),
    (a.prototype.startLoad = function () {
      var e = this;
      !0 === e.options.arrows &&
        e.slideCount > e.options.slidesToShow &&
        (e.$prevArrow.hide(), e.$nextArrow.hide()),
        !0 === e.options.dots &&
          e.slideCount > e.options.slidesToShow &&
          e.$dots.hide(),
        e.$slider.addClass("slick-loading");
    }),
    (a.prototype.swipeDirection = function () {
      var e = this,
        i = e.touchObject.startX - e.touchObject.curX,
        t = e.touchObject.startY - e.touchObject.curY,
        t = Math.atan2(t, i),
        i = Math.round((180 * t) / Math.PI);
      return ((i = i < 0 ? 360 - Math.abs(i) : i) <= 45 && 0 <= i) ||
        (i <= 360 && 315 <= i)
        ? !1 === e.options.rtl
          ? "left"
          : "right"
        : 135 <= i && i <= 225
        ? !1 === e.options.rtl
          ? "right"
          : "left"
        : !0 === e.options.verticalSwiping
        ? 35 <= i && i <= 135
          ? "left"
          : "right"
        : "vertical";
    }),
    (a.prototype.swipeEnd = function (e) {
      var i,
        t = this;
      if (
        ((t.dragging = !1),
        (t.shouldClick = !(10 < t.touchObject.swipeLength)),
        void 0 === t.touchObject.curX)
      )
        return !1;
      if (
        (!0 === t.touchObject.edgeHit &&
          t.$slider.trigger("edge", [t, t.swipeDirection()]),
        t.touchObject.swipeLength >= t.touchObject.minSwipe)
      )
        switch (t.swipeDirection()) {
          case "left":
            (i = t.options.swipeToSlide
              ? t.checkNavigable(t.currentSlide + t.getSlideCount())
              : t.currentSlide + t.getSlideCount()),
              t.slideHandler(i),
              (t.currentDirection = 0),
              (t.touchObject = {}),
              t.$slider.trigger("swipe", [t, "left"]);
            break;
          case "right":
            (i = t.options.swipeToSlide
              ? t.checkNavigable(t.currentSlide - t.getSlideCount())
              : t.currentSlide - t.getSlideCount()),
              t.slideHandler(i),
              (t.currentDirection = 1),
              (t.touchObject = {}),
              t.$slider.trigger("swipe", [t, "right"]);
        }
      else
        t.touchObject.startX !== t.touchObject.curX &&
          (t.slideHandler(t.currentSlide), (t.touchObject = {}));
    }),
    (a.prototype.swipeHandler = function (e) {
      var i = this;
      if (
        !(
          !1 === i.options.swipe ||
          ("ontouchend" in document && !1 === i.options.swipe) ||
          (!1 === i.options.draggable && -1 !== e.type.indexOf("mouse"))
        )
      )
        switch (
          ((i.touchObject.fingerCount =
            e.originalEvent && void 0 !== e.originalEvent.touches
              ? e.originalEvent.touches.length
              : 1),
          (i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold),
          !0 === i.options.verticalSwiping &&
            (i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold),
          e.data.action)
        ) {
          case "start":
            i.swipeStart(e);
            break;
          case "move":
            i.swipeMove(e);
            break;
          case "end":
            i.swipeEnd(e);
        }
    }),
    (a.prototype.swipeMove = function (e) {
      var i,
        t,
        s = this,
        o = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
      return (
        !(!s.dragging || (o && 1 !== o.length)) &&
        ((i = s.getLeft(s.currentSlide)),
        (s.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX),
        (s.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY),
        (s.touchObject.swipeLength = Math.round(
          Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))
        )),
        !0 === s.options.verticalSwiping &&
          (s.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2))
          )),
        "vertical" !== (o = s.swipeDirection())
          ? (void 0 !== e.originalEvent &&
              4 < s.touchObject.swipeLength &&
              e.preventDefault(),
            (e =
              (!1 === s.options.rtl ? 1 : -1) *
              (s.touchObject.curX > s.touchObject.startX ? 1 : -1)),
            !0 === s.options.verticalSwiping &&
              (e = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
            (t = s.touchObject.swipeLength),
            (s.touchObject.edgeHit = !1) === s.options.infinite &&
              ((0 === s.currentSlide && "right" === o) ||
                (s.currentSlide >= s.getDotCount() && "left" === o)) &&
              ((t = s.touchObject.swipeLength * s.options.edgeFriction),
              (s.touchObject.edgeHit = !0)),
            !1 === s.options.vertical
              ? (s.swipeLeft = i + t * e)
              : (s.swipeLeft = i + t * (s.$list.height() / s.listWidth) * e),
            !0 === s.options.verticalSwiping && (s.swipeLeft = i + t * e),
            !0 !== s.options.fade &&
              !1 !== s.options.touchMove &&
              (!0 === s.animating
                ? ((s.swipeLeft = null), !1)
                : void s.setCSS(s.swipeLeft)))
          : void 0)
      );
    }),
    (a.prototype.swipeStart = function (e) {
      var i,
        t = this;
      return 1 !== t.touchObject.fingerCount ||
        t.slideCount <= t.options.slidesToShow
        ? !(t.touchObject = {})
        : (void 0 !== e.originalEvent &&
            void 0 !== e.originalEvent.touches &&
            (i = e.originalEvent.touches[0]),
          (t.touchObject.startX = t.touchObject.curX =
            void 0 !== i ? i.pageX : e.clientX),
          (t.touchObject.startY = t.touchObject.curY =
            void 0 !== i ? i.pageY : e.clientY),
          void (t.dragging = !0));
    }),
    (a.prototype.unfilterSlides = a.prototype.slickUnfilter =
      function () {
        var e = this;
        null !== e.$slidesCache &&
          (e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.appendTo(e.$slideTrack),
          e.reinit());
      }),
    (a.prototype.unload = function () {
      var e = this;
      d(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (a.prototype.unslick = function (e) {
      this.$slider.trigger("unslick", [this, e]), this.destroy();
    }),
    (a.prototype.updateArrows = function () {
      var e = this;
      Math.floor(e.options.slidesToShow / 2);
      !0 === e.options.arrows &&
        e.slideCount > e.options.slidesToShow &&
        !e.options.infinite &&
        (e.$prevArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false"),
        e.$nextArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false"),
        0 === e.currentSlide
          ? (e.$prevArrow
              .addClass("slick-disabled")
              .attr("aria-disabled", "true"),
            e.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"))
          : ((e.currentSlide >= e.slideCount - e.options.slidesToShow &&
              !1 === e.options.centerMode) ||
              (e.currentSlide >= e.slideCount - 1 &&
                !0 === e.options.centerMode)) &&
            (e.$nextArrow
              .addClass("slick-disabled")
              .attr("aria-disabled", "true"),
            e.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false")));
    }),
    (a.prototype.updateDots = function () {
      var e = this;
      null !== e.$dots &&
        (e.$dots
          .find("li")
          .removeClass("slick-active")
          .attr("aria-hidden", "true"),
        e.$dots
          .find("li")
          .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
          .addClass("slick-active")
          .attr("aria-hidden", "false"));
    }),
    (a.prototype.visibility = function () {
      var e = this;
      document[e.hidden]
        ? ((e.paused = !0), e.autoPlayClear())
        : !0 === e.options.autoplay && ((e.paused = !1), e.autoPlay());
    }),
    (a.prototype.initADA = function () {
      var i = this;
      i.$slides
        .add(i.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        i.$slideTrack.attr("role", "listbox"),
        i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function (e) {
          d(this).attr({
            role: "option",
            "aria-describedby": "slick-slide" + i.instanceUid + e,
          });
        }),
        null !== i.$dots &&
          i.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (e) {
              d(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + i.instanceUid + e,
                id: "slick-slide" + i.instanceUid + e,
              });
            })
            .first()
            .attr("aria-selected", "true")
            .end()
            .find("button")
            .attr("role", "button")
            .end()
            .closest("div")
            .attr("role", "toolbar"),
        i.activateADA();
    }),
    (a.prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
    (a.prototype.focusHandler = function () {
      var t = this;
      t.$slider.on("focus.slick blur.slick", "*", function (e) {
        e.stopImmediatePropagation();
        var i = d(this);
        setTimeout(function () {
          t.isPlay &&
            (i.is(":focus")
              ? (t.autoPlayClear(), (t.paused = !0))
              : ((t.paused = !1), t.autoPlay()));
        }, 0);
      });
    }),
    (d.fn.slick = function () {
      for (
        var e,
          i = this,
          t = arguments[0],
          s = Array.prototype.slice.call(arguments, 1),
          o = i.length,
          n = 0;
        n < o;
        n++
      )
        if (
          ("object" == _typeof(t) || void 0 === t
            ? (i[n].slick = new a(i[n], t))
            : (e = i[n].slick[t].apply(i[n].slick, s)),
          void 0 !== e)
        )
          return e;
      return i;
    });
}),
  function (o) {
    var i = o(".slider-company"),
      t =
        (i.slick({
          arrows: !1,
          dots: !1,
          speed: 500,
          infinite: !1,
          swipe: !1,
          swipeToSlide: !1,
          touchMove: !1,
          draggable: !1,
          accessibility: !1,
          responsive: [{ breakpoint: 768, settings: { speed: 10 } }],
        }),
        o(".society-slider")),
      e =
        (t.slick({
          arrows: !1,
          dots: !1,
          infinite: !1,
          swipe: !1,
          swipeToSlide: !1,
          touchMove: !1,
          draggable: !1,
          accessibility: !1,
        }),
        i.on("afterChange", function (e, i, t, s) {
          0 === t &&
            (o(".company-slider .prev-arrow img").css("opacity", "0.1"),
            o(".company-slider .next-arrow img").css("opacity", "0.5")),
            1 === t &&
              (o(".slider-company .slide-2").addClass("visiblity-none"),
              o(".company-slider .prev-arrow img").css("opacity", "0.5"),
              o(".company-slider .next-arrow img").css("opacity", "0.5")),
            2 === t &&
              (o(".bg-text").slideDown(300),
              o(".company-slider .prev-arrow img").css("opacity", "0.5"),
              o(".company-slider .next-arrow img").css("opacity", "0.1"),
              o(".slider-company .slide-2").addClass("visiblity-none"));
        }),
        t.on("afterChange", function (e, i, t, s) {
          0 === t &&
            (o(".society-slider-cta .prev-arrow img").css("opacity", "0.1"),
            o(".society-slider-cta .next-arrow img").css("opacity", "0.5")),
            1 === t &&
              (o(".society-slider-cta .prev-arrow img").css("opacity", "0.5"),
              o(".society-slider-cta .next-arrow img").css("opacity", "0.5")),
            2 === t &&
              (o(".society-slider-cta .prev-arrow img").css("opacity", "0.5"),
              o(".society-slider-cta .next-arrow img").css("opacity", "0.1"));
        }),
        i.on("afterChange", function (e, i, t, s) {
          0 === t &&
            (o(".item.slide-12").addClass("opacity-20"),
            o(".company-item").removeClass("pl-5"),
            o(".item .links-card").removeClass("pl-7"),
            o(".item.slide-12").css("pointer-events", "none")),
            1 === t && o(".item.slide-12").css("pointer-events", "auto");
        }),
        i.on("beforeChange", function (e, i, t, s) {
          0 === t &&
            (o(".item.slide-12").removeClass("opacity-20"),
            o(".company-item").addClass("pl-5"),
            o(".item .links-card").addClass("pl-7")),
            1 === t &&
              (o(".slider-company .slide-2").removeClass("visiblity-none"),
              console.log("before")),
            2 === t && o(".bg-text").slideUp(100);
        }),
        o(".company-slider a.next-arrow").click(function (e) {
          e.preventDefault(), i.slick("slickNext");
        }),
        o(".company-slider a.prev-arrow").click(function (e) {
          e.preventDefault(), i.slick("slickPrev");
        }),
        o(".society-slider-cta a.next-arrow").click(function (e) {
          e.preventDefault(), t.slick("slickNext");
        }),
        o(".society-slider-cta a.prev-arrow").click(function (e) {
          e.preventDefault(), t.slick("slickPrev");
        }),
        o(".people-description a").click(function (e) {
          e.preventDefault(), n.slick("slickNext");
        }),
        o(".people-slider-cta a.prev-arrow").click(function (e) {
          e.preventDefault(), n.slick("slickPrev");
        }),
        o(".milestone-slider a.next-arrow").click(function (e) {
          e.preventDefault(), s.slick("slickNext");
        }),
        o(".milestone-slider a.prev-arrow").click(function (e) {
          e.preventDefault(), s.slick("slickPrev");
        }),
        o(".people-slidesx")),
      e =
        (e.slick({ arrows: !1, dots: !1, speed: 1e3, adaptiveHeight: !0 }),
        e.on("wheel", function (e) {
          e.preventDefault(),
            e.originalEvent.deltaY < 0
              ? o(this).slick("slickPrev")
              : o(this).slick("slickNext");
        }),
        o(".people-slides").on("afterChange", function (e, i, t, s) {
          0 === t &&
            (o('[data-section-name="people"]').removeClass("whiteText"),
            o(".slick-next,.slick-prev").css("visibility", "hidden")),
            1 === t &&
              (o(".slick-next,.slick-prev").css("visibility", "visible"),
              o('[data-section-name="people"]').addClass("whiteText")),
            2 === t && o('[data-section-name="people"]').addClass("whiteText"),
            4 === t && o('[data-section-name="people"]').addClass("whiteText"),
            3 === t
              ? (o('[data-section-name="people"]').addClass("colourChange"),
                o('[data-section-name="people"]').removeClass("whiteText"))
              : o('[data-section-name="people"]').removeClass("colourChange");
        }),
        o(".year-slider").slick({
          slidesToScroll: 1,
          slidesToShow: 3,
          speed: 1e3,
          asNavFor: ".news-slider",
          arrows: !1,
          dots: !1,
          vertical: !0,
          verticalSwiping: !0,
          centerMode: !0,
          centerPadding: "0",
          autoplay: !1,
        }),
        o(".news-slider")),
      s =
        (e.slick({
          speed: 1e3,
          slidesToScroll: 1,
          asNavFor: ".year-slider",
          arrows: !1,
          dots: !1,
          vertical: !0,
          verticalSwiping: !0,
          autoplay: !1,
        }),
        e.on("wheel", function (e) {
          e.preventDefault(),
            e.originalEvent.deltaY < 0
              ? o(this).slick("slickNext")
              : o(this).slick("slickPrev");
        }),
        o(".year-slider").on("wheel", function (e) {
          e.preventDefault(),
            e.originalEvent.deltaY < 0
              ? o(this).slick("slickNext")
              : o(this).slick("slickPrev");
        }),
        o(".year-slider").on("afterChange", function (e, i, t, s) {
          o(".slick-slide").removeClass("active"),
            o(".slick-current").addClass("active");
        }),
        e.on("swipe", function (e, i, t) {
          console.log(t);
        }),
        o(".year-slider").on("edge", function (e, i, t) {
          console.log("edge was hit");
        }),
        e.on("beforeChange", function (e, i, t, s) {}),
        o(".blog-slides"));
    s.slick({
      touchMove: !1,
      draggable: !1,
      arrows: !1,
      dots: !1,
      centerMode: !0,
      centerPadding: "0",
    }),
      s.on("beforeChange", function (e, i, t, s) {
        0 === t &&
          (o(".milestone-slider .prev-arrow img").css("opacity", "1"),
          o(".milestone-slider .next-arrow img").css("opacity", "0.10")),
          1 === t &&
            (o(".milestone-slider .prev-arrow img").css("opacity", "0.10"),
            o(".milestone-slider .next-arrow img").css("opacity", "1"));
      }),
      o(function () {
        o(".timeline-nav").slick({
          slidesToShow: 7,
          slidesToScroll: 1,
          asNavFor: ".news-slides",
          centerMode: !1,
          focusOnSelect: !0,
          mobileFirst: !0,
          arrows: !1,
          infinite: !1,
          vertical: !0,
          verticalSwiping: !0,
          responsive: [
            { breakpoint: 768, settings: { slidesToShow: 6 } },
            {
              breakpoint: 540,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        }),
          o(".news-slides").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            asNavFor: ".timeline-nav",
            fade: !0,
            infinite: !1,
            responsive: [
              { breakpoint: 0, settings: { centerMode: !1 } },
              {
                breakpoint: 768,
                settings: { centerMode: !1, adaptiveHeight: !0 },
              },
              {
                breakpoint: 540,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: !1,
                },
              },
            ],
          });
      }),
      o(".card-1 img").hover(
        function () {
          o(".card-1").addClass("hoverx");
        },
        function () {
          o(".card-1").removeClass("hoverx");
        }
      ),
      o(".card-2 img").hover(
        function () {
          o(".card-2").addClass("hoverx");
        },
        function () {
          o(".card-2").removeClass("hoverx");
        }
      ),
      o(".card-3 img").hover(
        function () {
          o(".card-3").addClass("hoverx");
        },
        function () {
          o(".card-3").removeClass("hoverx");
        }
      ),
      o(".card-4 img").hover(
        function () {
          o(".card-4").addClass("hoverx");
        },
        function () {
          o(".card-4").removeClass("hoverx");
        }
      ),
      o(".product").hover(
        function () {
          o(this).addClass("hover-clip");
        },
        function () {
          o(".product").removeClass("hover-clip");
        }
      ),
      o(".product").click(function (e) {
        o('[data-slide="1"]').hide(),
          o('[data-slide="2"]').show(),
          o('[data-section-name="products"]').removeClass("form-1"),
          o('[data-section-name="products"]').addClass("step-2");
      }),
      o(document).on("click", ".step-2 .back span", function () {
        o('[data-section-name="products"]').addClass("form-1"),
          o('[data-slide="1"]').show(),
          o('[data-slide="2"]').hide(),
          o('[data-section-name="products"]').removeClass("step-2");
      }),
      o('[data-slide="2"] .form-type').click(function (e) {
        o('[data-slide="2"]').hide(),
          o('[data-slide="3"]').show(),
          o('[data-section-name="products"]').removeClass("step-2"),
          o('[data-section-name="products"]').addClass("step-3");
      }),
      o(document).on("click", ".step-3 .back span", function () {
        o('[data-section-name="products"]').addClass("step-2"),
          o('[data-slide="2"]').show(),
          o('[data-slide="3"]').hide(),
          o('[data-section-name="products"]').removeClass("step-3");
      }),
      o('[data-slide="3"] .not-sure a,[data-slide="3"] .grade ').click(
        function (e) {
          e.preventDefault(),
            o('[data-slide="3"]').hide(),
            o('[data-slide="4"]').show(),
            o('[data-section-name="products"]').removeClass("step-3"),
            o('[data-section-name="products"]').addClass("step-4");
        }
      ),
      o(document).on("click", ".step-4 .back span", function () {
        o('[data-section-name="products"]').addClass("step-3"),
          o('[data-slide="3"]').show(),
          o('[data-slide="4"]').hide(),
          o('[data-section-name="products"]').removeClass("step-4");
      }),
      o('[data-slide="4"] .specification ').click(function (e) {
        o('[data-slide="4"]').hide(),
          o('[data-slide="5"]').show(),
          o('[data-section-name="products"]').removeClass("step-4"),
          o('[data-section-name="products"]').addClass("step-5");
      }),
      o(document).on("click", ".step-5 .back span", function () {
        o('[data-section-name="products"]').addClass("step-4"),
          o('[data-slide="4"]').show(),
          o('[data-slide="5"]').hide(),
          o('[data-section-name="products"]').removeClass("step-5");
      }),
      o('[data-slide="5"] .standardized ').click(function (e) {
        o('[data-slide="5"]').hide(),
          o('[data-slide="6"]').show(),
          o('[data-section-name="products"]').removeClass("step-5"),
          o('[data-section-name="products"]').addClass("step-6");
      }),
      o(document).on("click", ".step-6 .back span", function () {
        o('[data-section-name="products"]').addClass("step-5"),
          o('[data-slide="5"]').show(),
          o('[data-slide="6"]').hide(),
          o('[data-section-name="products"]').removeClass("step-6");
      }),
      o('[data-slide="5"] .customized ').click(function (e) {
        o('[data-slide="5"]').hide(),
          o('[data-slide="customized"]').show(),
          o('[data-section-name="products"]').removeClass("step-5"),
          o('[data-section-name="products"]').addClass("customized-1");
      }),
      o(document).on("click", ".customized-1 .back span", function () {
        o('[data-section-name="products"]').addClass("step-5"),
          o('[data-slide="5"]').show(),
          o('[data-slide="customized"]').hide(),
          o('[data-section-name="products"]').removeClass("customized-1");
      }),
      o('[data-slide="customized"] .customized-submit ').click(function (e) {
        o('[data-slide="customized"]').hide(),
          o('[data-slide="7"]').show(),
          o('[data-section-name="products"]').removeClass("customized-1"),
          o('[data-section-name="products"]').addClass("fromCust");
      }),
      o(document).on("click", ".fromCust .back span", function () {
        o('[data-section-name="products"]').addClass("customized-1"),
          o('[data-slide="customized"]').show(),
          o('[data-slide="7"]').hide(),
          o('[data-section-name="products"]').removeClass("fromCust");
      }),
      o('[data-slide="4"] .brands ').click(function (e) {
        o('[data-slide="4"]').hide(),
          o('[data-slide="brandSlide"]').show(),
          o('[data-section-name="products"]').removeClass("step-4"),
          o('[data-section-name="products"]').addClass("brandSlide");
      }),
      o(document).on("click", ".brandSlide .back span", function () {
        o('[data-section-name="products"]').addClass("step-4"),
          o('[data-slide="4"]').show(),
          o('[data-slide="brandSlide"]').hide(),
          o('[data-section-name="products"]').removeClass("brandSlide");
      }),
      o('[data-slide="brandSlide"] .brand-select ').click(function (e) {
        o('[data-slide="brandSlide"]').hide(),
          o('[data-slide="5"]').show(),
          o('[data-section-name="products"]').removeClass("brandSlide"),
          o('[data-section-name="products"]').addClass("fromBrand");
      }),
      o(document).on("click", ".fromBrand .back span", function () {
        o('[data-slide="5"]').hide(),
          o('[data-slide="brandSlide"]').show(),
          o('[data-section-name="products"]').removeClass("fromBrand"),
          o('[data-section-name="products"]').addClass("brandSlide");
      }),
      o('input:radio[name="thikness"]').change(function () {
        o('[data-section-name="products"]').removeClass("step-6"),
          o('[data-section-name="products"]').addClass("step-7"),
          o(".tab-2").trigger("click");
      }),
      o(document).on("click", ".step-7 .back span", function () {
        o('[data-section-name="products"]').addClass("step-6"),
          o(".tab-1").trigger("click"),
          o('[data-section-name="products"]').removeClass("step-7");
      }),
      o('input:radio[name="width"]').change(function () {
        o('[data-section-name="products"]').removeClass("step-7"),
          o('[data-section-name="products"]').addClass("step-8"),
          o(".tab-3").trigger("click");
      }),
      o(document).on("click", ".step-8 .back span", function () {
        o('[data-section-name="products"]').addClass("step-7"),
          o(".tab-2").trigger("click"),
          o('[data-section-name="products"]').removeClass("step-8");
      }),
      o('input:radio[name="length"]').change(function () {
        o('[data-section-name="products"]').removeClass("step-8"),
          o('[data-section-name="products"]').addClass("step-9"),
          o(".tab-4").trigger("click");
      }),
      o(document).on("click", ".step-9 .back span", function () {
        o('[data-section-name="products"]').addClass("step-8"),
          o(".tab-3").trigger("click"),
          o('[data-section-name="products"]').removeClass("step-9");
      }),
      o('input:radio[name="coating"]').change(function () {
        o('[data-section-name="products"]').removeClass("step-9"),
          o('[data-section-name="products"]').addClass("step-10"),
          o(".tab-5").trigger("click");
      }),
      o(document).on("click", ".step-10 .back span", function () {
        o('[data-section-name="products"]').addClass("step-9"),
          o(".tab-4").trigger("click"),
          o('[data-section-name="products"]').removeClass("step-10");
      }),
      o('input:radio[name="colour"]').change(function () {
        o('[data-section-name="products"]').removeClass("step-10"),
          o('[data-section-name="products"]').addClass("step-11"),
          o('[data-slide="6"]').hide(),
          o('[data-slide="7"]').show();
      }),
      o(document).on("click", ".step-11 .back span", function () {
        o('[data-section-name="products"]').addClass("step-10"),
          o(".tab-5").trigger("click"),
          o('[data-slide="7"]').hide(),
          o('[data-slide="6"]').show(),
          o('[data-section-name="products"]').removeClass("step-11");
      }),
      o(".submited ").click(function (e) {
        o('[data-slide="thankyou"]').show(),
          o('[data-slide="7"]').hide(),
          o('[data-section-name="products"]').removeClass("step-11"),
          o('[data-section-name="products"]').addClass("final-step");
      }),
      o(".tab-link").click(function () {
        var e = o(this).attr("data-tab");
        o(this).addClass("active").siblings().removeClass("active"),
          o("#tab-" + e)
            .addClass("active")
            .siblings()
            .removeClass("active");
      }),
      o(window).on("scroll", function () {
        var e;
        o(window).scrollTop() >
        (null == (e = o(".newsroom-page .timeline")) || null == (e = e.offset())
          ? void 0
          : e.top)
          ? o(".timeline-nav").addClass("fixed")
          : o(".timeline-nav").removeClass("fixed");
      }),
      o(window).on("scroll", function () {
        var e;
        o(window).scrollTop() >
          (null == (e = o(".blog-list li:nth-child(2) object")) ||
          null == (e = e.offset())
            ? void 0
            : e.top) +
            250 && o(".timeline-nav").removeClass("fixed");
      }),
      o(".menu-cta").click(function (e) {
        o(this).hide(500),
          o(".search-box").hide(),
          o("header").addClass("black-c"),
          o(".menu").show(),
          o(".search-cta").hide(500),
          o(".menu-wrapper").slideDown(300),
          o(".back-cta").show(500),
          o("body").css("overflow", "hidden"),
          e.preventDefault();
      }),
      o(".search-cta").click(function (e) {
        o(this).hide(500),
          o(".menu").hide(),
          o(".search-box").show(),
          o(".menu-cta").hide(500),
          o(".menu-wrapper").slideDown(300),
          o(".menu-wrapper").addClass("pdl-0"),
          o(".back-cta").show(500),
          o("body").css("overflow", "hidden"),
          e.preventDefault();
      }),
      o(".back-cta").click(function (e) {
        o(this).hide(500),
          o(".menu-cta").show(500),
          o("header").removeClass("black-c"),
          o(".search-cta").show(500),
          o(".menu-wrapper").slideUp(300),
          o(".menu-wrapper").removeClass("pdl-0"),
          o("li").removeClass("subMenuActivated"),
          o(".sub-menu").hide(300),
          o("body").css("overflow-y", "scroll"),
          e.preventDefault();
      }),
      o("ul.lg-menu > li").click(function (e) {
        o("li").removeClass("subMenuActivated"),
          o(this).addClass("subMenuActivated");
        var i = o(".sub-menu", this);
        o("ul.lg-menu > li > .sub-menu").not(i).slideUp(),
          i.stop(!0, !0).slideToggle(400);
      }),
      o("ul.lg-menu > li > ul > li").click(function (e) {
        e.stopPropagation();
      }),
      o(".menu a:not(.has-submenu)").click(function (e) {
        o("body").css("overflow-y", "scroll"),
          o(".back-cta").hide(500),
          o(".menu-cta").show(500),
          o("header").removeClass("black-c"),
          o(".search-cta").show(500),
          o(".menu-wrapper").slideUp(300),
          o(".menu-wrapper").removeClass("pdl-0"),
          o("li").removeClass("subMenuActivated"),
          o(".sub-menu").hide(300),
          o("body").css("overflow-y", "scroll");
      }),
      o(".story-page .article-title").text(function () {
        return 75 < o(this).text().length
          ? o(this).text().substr(0, 150) + "..."
          : o(this).text();
      });
    o(".pdfDownloads ul li p").text(function () {
      return 75 < o(this).text().length
        ? o(this).text().substr(0, 105) + "..."
        : o(this).text();
    }),
      o(".trigger-file-upload").click(function (e) {
        return o("#resumeFile").trigger("click"), e.preventDefault(), !1;
      }),
      o(".trigger-file-upload").keydown(function (e) {
        return e.preventDefault(), !1;
      }),
      o("#popup1").popup({
        pagecontainer: "#page",
        closebutton: !0,
        escape: !1,
        opacity: 0.3,
        transition: "all 0.3s",
        scrolllock: !0,
      }),
      o("#popup2").popup({
        pagecontainer: "#page",
        closebutton: !0,
        escape: !1,
        opacity: 0.3,
        transition: "all 0.3s",
        scrolllock: !0,
      }),
      o(document).keydown(function (e) {
        27 == e.keyCode && o(".popup_content").popup("hide");
      }),
      o(".popup_close").html("CLOSE"),
      o(".down").click(function (e) {
        var i;
        o("html, body").animate(
          {
            scrollTop:
              null == (i = o("[data-section-name='who-we-are']"))
                ? void 0
                : i.offset().top,
          },
          1e3
        );
      }),
      o(".down2").click(function (e) {
        var i;
        o("html, body").animate(
          {
            scrollTop:
              null == (i = o("[data-section-name='people']"))
                ? void 0
                : i.offset().top,
          },
          1e3
        );
      });
    var n = o(".people-slides"),
      a =
        (n.slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !0, dots: !1 }),
        0);
    o(".pdfDownloads ul li").each(function () {
      o(this).height() > a && (a = o(this).height());
    }),
      o(".pdfDownloads ul li").height(a),
      o("form#newsletterForm").on("submit", function (e) {
        e.preventDefault();
        var i = o(this),
          e = i.find("#newsletterEmail"),
          t = e.val();
        t
          ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              t
            )
            ? (i.find("input, button").attr("disabled", "disabled"),
              o.ajax({
                type: i.attr("method") || "POST",
                url: i.attr("action"),
                data: { email: t },
                success: function (e) {
                  i.get(0).reset(),
                    e.message &&
                      o.notify(e.message, {
                        autoHide: !0,
                        className: "success",
                      });
                },
                error: function (e, i, t) {
                  switch (e.status) {
                    case 422:
                      var s = o.parseJSON(e.responseText).errors;
                      o.each(s, function (e, i) {
                        o.each(i, function (e, i) {
                          o.notify(i, { autoHide: !0, className: "error" });
                        });
                      });
                      break;
                    case 500:
                    case 401:
                    case 400:
                      o.notify(e.responseJSON.message, {
                        autoHide: !0,
                        className: "error",
                      });
                      break;
                    case 419:
                      o.notify("Session expired. Please refresh the page.", {
                        autoHide: !0,
                        className: "error",
                      });
                      break;
                    default:
                      o.notify("Something went wrong.", {
                        autoHide: !0,
                        className: "error",
                      });
                  }
                },
                complete: function () {
                  i.find("input, button").removeAttr("disabled");
                },
              }))
            : (o.notify("Please enter valid email.", {
                autoHide: !0,
                className: "error",
              }),
              e.focus())
          : (o.notify("Please enter email.", {
              autoHide: !0,
              className: "error",
            }),
            e.focus());
      }),
      o(window).scroll(function () {
        var e;
        (null == (e = o("#company")) || null == (e = e.offset())
          ? void 0
          : e.top) +
          o("#company").outerHeight() -
          (o(window).height() + 500) <
          o(this).scrollTop() &&
          setTimeout(function () {
            o("#company-svg").addClass("active");
          }, 100);
      }),
      o(".leadership-slider-x,.slider-mk").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: !1,
        infinite: !1,
        responsive: [
          { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      o(".leader-slider a.next-arrow").click(function (e) {
        e.preventDefault(), o(".leadership-slider-x").slick("slickNext");
      }),
      o(".leader-slider a.prev-arrow").click(function (e) {
        e.preventDefault(), o(".leadership-slider-x").slick("slickPrev");
      }),
      o(".article-title").hover(
        function () {
          o(this).parents("li").addClass("activeHover");
        },
        function () {
          o(this).parents("li").removeClass("activeHover");
        }
      ),
      o("body").on(
        "hover",
        ".objectSvg-hover",
        function () {
          o(this).parents("li").addClass("activeHoverText");
        },
        function () {
          o(this).parents("li").removeClass("activeHoverText");
        }
      ),
      o(".leadershipTab .tab-link").click(function (e) {
        o(".leadership-slider-x").slick("slickGoTo", 0);
      }),
      o(".process-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: !1,
        infinite: !1,
        responsive: [
          { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      o(".kit-overlay").click(function () {
        o(".kit-overlay").prevAll("a").first().trigger("click");
      });
  }.call(window, window.jQuery);
var section = document.querySelectorAll(".accordion"),
  aRRay = Array.from(section);
aRRay.map(function (i) {
  i.addEventListener("click", function () {
    i.classList.toggle("active");
    var e = i.nextElementSibling;
    "block" == e.style.display
      ? (e.style.display = "none")
      : (e.style.display = "block"),
      e.style.maxHeight
        ? (e.style.maxHeight = null)
        : (e.style.maxHeight = e.scrollHeight + "px");
  });
});
