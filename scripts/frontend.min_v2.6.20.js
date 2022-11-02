!(function (r) {
  "use strict";
  var m = function (e) {
      var t,
        o,
        n = {},
        i = e.data("model-cid");
      return (
        a && i
          ? ((t = elementorFrontend.config.elements.data[i]),
            (o =
              elementorFrontend.config.elements.keys[
                t.attributes.widgetType || t.attributes.elType
              ]),
            jQuery.each(t.getActiveControls(), function (e) {
              -1 !== o.indexOf(e) && (n[e] = t.attributes[e]);
            }))
          : (n = e.data("settings") || {}),
        n
      );
    },
    a = !1,
    p = function (t, o, n, e) {
      r(t).closest(".elementor-widget-wrap").addClass("e-swiper-container"),
        r(t).closest(".elementor-widget").addClass("e-widget-swiper"),
        "undefined" == typeof Swiper
          ? new elementorFrontend.utils.swiper(t, e).then(function (e) {
              d(t, o, n, e);
            })
          : ((e = new Swiper(t, e)), d(t, o, n, e));
    },
    d = function (e, t, o, n) {
      "yes" === o.pause_on_hover &&
        (e.on("mouseover", function () {
          n.autoplay.stop();
        }),
        e.on("mouseout", function () {
          n.autoplay.start();
        })),
        a &&
          t.resize(function () {
            n.update();
          }),
        i(n, ".pp-swiper-slider", "swiper");
    },
    e = function (e, t) {
      var o = m(e),
        n = e.find(".swiper-container-wrap"),
        i = e.find(".pp-swiper-slider"),
        e = JSON.parse(i.attr("data-slider-settings"));
      p(i, n, o, e);
    },
    i = function (n, i, a) {
      void 0 === a && (a = "swiper");
      [
        "ppe-tabs-switched",
        "ppe-toggle-switched",
        "ppe-accordion-switched",
        "ppe-popup-opened",
      ].forEach(function (o) {
        void 0 !== o &&
          r(document).on(o, function (e, t) {
            0 <
              (t =
                "ppe-popup-opened" == o ? r(".pp-modal-popup-" + t) : t).find(i)
                .length &&
              setTimeout(function () {
                "slick" === a
                  ? n.slick("setPosition")
                  : "swiper" === a
                  ? n.update()
                  : "gallery" === a &&
                    t.find(".pp-image-gallery").eq(0).isotope("layout");
              }, 100);
          });
      });
    },
    t = function (e, t) {
      var o = e.data("id"),
        e = e.find(".pp-image-hotspots"),
        e = JSON.parse(e.attr("data-tooltip-options")),
        n = "pp-tooltip pp-tooltip-" + o,
        i = e.arrow,
        a = e.always_open,
        r = e.trigger,
        d = e.distance,
        p = e.animation,
        c = e.width,
        o = e.size,
        s = e.zindex;
      "" !== o && undefined !== o && (n += " pp-tooltip-size-" + o),
        t(".pp-hot-spot-wrap[data-tooltip]").each(function () {
          var e = t(this).data("tooltip-position");
          t(this).pptooltipster({
            trigger: r,
            animation: p,
            minWidth: 0,
            maxWidth: c,
            ppclass: n,
            position: e,
            arrow: "yes" === i,
            distance: d,
            interactive: !0,
            positionTracker: !0,
            zIndex: s,
          }),
            "yes" === a &&
              (t(this).pptooltipster(), t(this).pptooltipster("show"));
        });
    },
    o = function (e, t) {
      var o = e.find(".pp-image-comparison").eq(0),
        e = o.data("settings");
      o.twentytwenty({
        default_offset_pct: e.visible_ratio,
        orientation: e.orientation,
        before_label: e.before_label,
        after_label: e.after_label,
        move_slider_on_hover: e.slider_on_hover,
        move_with_handle_only: e.slider_with_handle,
        click_to_move: e.slider_with_click,
        no_overlay: e.no_overlay,
      });
    },
    n = function (e, n) {
      var t = e.find(".pp-counter").eq(0),
        o = t.data("target"),
        i = e.find(".pp-counter-number").data("separator"),
        e = e.find(".pp-counter-number").data("separator-char"),
        a = "" !== e ? "(" + e + "ddd).dd" : "(,ddd).dd";
      "undefined" != typeof elementorFrontend.waypoint &&
        elementorFrontend.waypoint(
          t,
          function () {
            n(o).each(function () {
              var e = n(this).data("to"),
                t = n(this).data("speed"),
                o = new Odometer({
                  el: this,
                  value: 0,
                  duration: t,
                  format: "yes" === i ? a : "",
                });
              o.render(),
                setInterval(function () {
                  o.update(e);
                });
            });
          },
          { offset: "80%", triggerOnce: !0 }
        );
    },
    c = function (e, t) {
      var o = 0;
      e.find(".swiper-slide").each(function () {
        t(this).height() > o && (o = t(this).height());
      }),
        e.find(".pp-info-box-content-wrap").css("min-height", o);
    },
    s = function (t, o) {
      var n = m(t),
        i = t.find(".swiper-container-wrap"),
        a = t.find(".pp-info-box-carousel"),
        e =
          a.attr("data-slider-settings") !== undefined
            ? JSON.parse(a.attr("data-slider-settings"))
            : "",
        r = n.equal_height_boxes;
      o(a).closest(".elementor-widget-wrap").addClass("e-swiper-container"),
        o(a).closest(".elementor-widget").addClass("e-widget-swiper"),
        "undefined" == typeof Swiper
          ? new elementorFrontend.utils.swiper(a, e).then(function (e) {
              "yes" === r &&
                e.on("slideChange", function () {
                  c(t, o);
                }),
                d(a, i, n, e);
            })
          : ((e = new Swiper(a, e)), "yes" === r && c(t, o), d(a, i, n, e));
    },
    l = function (e, t) {
      var o,
        n,
        i,
        a = e.data("id"),
        r = m(e),
        d = r.feed_layout;
      "carousel" === d
        ? ((o = e.find(".swiper-container-wrap")),
          (n = e.find(".swiper-container").eq(0)),
          (e = JSON.parse(n.attr("data-slider-settings"))),
          p(n, o, r, e))
        : "masonry" === d &&
          (i = t("#pp-instafeed-" + a).imagesLoaded(function () {
            i.masonry({ itemSelector: ".pp-feed-item", percentPosition: !0 });
          }));
    },
    f = function (e, t) {
      var o = e.find(".pp-image-scroll-container"),
        n = o.find(".pp-image-scroll-overlay"),
        i = o.find(".pp-image-scroll-vertical"),
        e = m(e),
        a = o.find(".pp-image-scroll-image img"),
        r = e.direction_type,
        d = e.reverse,
        e = e.trigger_type,
        p = null;
      function c() {
        a.css(
          "transform",
          ("vertical" == r ? "translateY" : "translateX") + "( -" + p + "px)"
        );
      }
      function s() {
        a.css(
          "transform",
          ("vertical" == r ? "translateY" : "translateX") + "(0px)"
        );
      }
      function l() {
        p = "vertical" == r ? a.height() - o.height() : a.width() - o.width();
      }
      "scroll" == e
        ? (o.addClass("pp-container-scroll"),
          "vertical" == r
            ? i.addClass("pp-image-scroll-ver")
            : o.imagesLoaded(function () {
                n.css({ width: a.width(), height: a.height() });
              }))
        : ("yes" === d &&
            o.imagesLoaded(function () {
              o.addClass("pp-container-scroll-instant"), l(), c();
            }),
          "vertical" == r && i.removeClass("pp-image-scroll-ver"),
          o.mouseenter(function () {
            o.removeClass("pp-container-scroll-instant"),
              l(),
              ("yes" === d ? s : c)();
          }),
          o.mouseleave(function () {
            ("yes" === d ? c : s)();
          }));
    },
    u = function (e, o) {
      var t = e.find(".pp-accordion-tab-title"),
        e = m(e),
        n = e.accordion_type,
        i = e.toggle_speed;
      t.each(function () {
        o(this).hasClass("pp-accordion-tab-active-default") &&
          (o(this).addClass("pp-accordion-tab-show pp-accordion-tab-active"),
          o(this).next().slideDown(i));
      }),
        t.unbind("click"),
        t.on("click keypress", function (e) {
          var t;
          e.preventDefault(),
            (1 != e.which &&
              13 != e.which &&
              32 != e.which &&
              e.which != undefined) ||
              ((e = (t = o(this)).parent()),
              o(document).trigger("ppe-accordion-switched", [e]),
              "accordion" === n
                ? t.hasClass("pp-accordion-tab-show")
                  ? (t
                      .closest(".pp-accordion-item")
                      .removeClass("pp-accordion-item-active"),
                    t.removeClass(
                      "pp-accordion-tab-show pp-accordion-tab-active"
                    ),
                    t.attr("aria-expanded", "false"),
                    t.next().slideUp(i))
                  : (t
                      .closest(".pp-advanced-accordion")
                      .find(".pp-accordion-item")
                      .removeClass("pp-accordion-item-active"),
                    t
                      .closest(".pp-advanced-accordion")
                      .find(".pp-accordion-tab-title")
                      .removeClass(
                        "pp-accordion-tab-show pp-accordion-tab-active"
                      ),
                    t
                      .closest(".pp-advanced-accordion")
                      .find(".pp-accordion-tab-title")
                      .removeClass("pp-accordion-tab-active-default"),
                    t
                      .closest(".pp-advanced-accordion")
                      .find(".pp-accordion-tab-content")
                      .slideUp(i),
                    t.toggleClass(
                      "pp-accordion-tab-show pp-accordion-tab-active"
                    ),
                    t
                      .closest(".pp-advanced-accordion")
                      .find(".pp-accordion-tab-title")
                      .attr("aria-expanded", "false"),
                    t
                      .closest(".pp-accordion-item")
                      .toggleClass("pp-accordion-item-active"),
                    t.hasClass("pp-accordion-tab-title") &&
                      t.attr("aria-expanded", "true"),
                    t.next().slideToggle(i))
                : t.hasClass("pp-accordion-tab-show")
                ? (t.removeClass(
                    "pp-accordion-tab-show pp-accordion-tab-active"
                  ),
                  t.next().slideUp(i))
                : (t.addClass("pp-accordion-tab-show pp-accordion-tab-active"),
                  t.next().slideDown(i)));
        }),
        h(),
        o(window).on("hashchange", function () {
          h();
        });
    };
  function h() {
    var e;
    location.hash &&
      0 < r(location.hash).length &&
      (e = r(location.hash + ".pp-accordion-tab-title")) &&
      0 < e.length &&
      ((location.href = "#"),
      r("html, body").animate(
        { scrollTop: e.parents(".pp-accordion-item").offset().top - 50 + "px" },
        500,
        function () {
          e
            .parents(".pp-accordion-item")
            .hasClass("pp-accordion-item-active") || e.trigger("click");
        }
      ));
  }
  var g = function (e) {
      var t = "pp-tooltip pp-tooltip-" + e.data("id"),
        o = e.find(".pp-button[data-tooltip]").data("tooltip-position"),
        n = elementorFrontend.config.breakpoints;
      window.innerWidth <= n.lg &&
        window.innerWidth >= n.md &&
        (o = e
          .find(".pp-button[data-tooltip]")
          .data("tooltip-position-tablet")),
        window.innerWidth < n.md &&
          (o = e
            .find(".pp-button[data-tooltip]")
            .data("tooltip-position-mobile")),
        e
          .find(".pp-button[data-tooltip]")
          .pptooltipster({
            trigger: "hover",
            animation: "fade",
            ppclass: t,
            side: o,
            interactive: !0,
            positionTracker: !0,
          });
    },
    v = function (e, t) {
      t(document).ready(function () {
        "undefined" !== twttr && twttr.widgets.load();
      });
    },
    w = function (e, t) {
      var o = e.find(".pp-image-accordion").eq(0),
        e = m(e).accordion_action,
        o = o.attr("id"),
        n = t("#" + o + " .pp-image-accordion-item");
      "on-hover" === e
        ? n.hover(
            function () {
              n.css("flex", "1"),
                n.removeClass("pp-image-accordion-active"),
                t(this).addClass("pp-image-accordion-active"),
                n
                  .find(".pp-image-accordion-content-wrap")
                  .removeClass("pp-image-accordion-content-active"),
                t(this)
                  .find(".pp-image-accordion-content-wrap")
                  .addClass("pp-image-accordion-content-active"),
                t(this).css("flex", "3");
            },
            function () {
              n.css("flex", "1"),
                n
                  .find(".pp-image-accordion-content-wrap")
                  .removeClass("pp-image-accordion-content-active"),
                n.removeClass("pp-image-accordion-active");
            }
          )
        : "on-click" === e &&
          (n.click(function (e) {
            e.stopPropagation(),
              n.css("flex", "1"),
              n.removeClass("pp-image-accordion-active"),
              t(this).addClass("pp-image-accordion-active"),
              n
                .find(".pp-image-accordion-content-wrap")
                .removeClass("pp-image-accordion-content-active"),
              t(this)
                .find(".pp-image-accordion-content-wrap")
                .addClass("pp-image-accordion-content-active"),
              t(this).css("flex", "3");
          }),
          t("#" + o).click(function (e) {
            e.stopPropagation();
          }),
          t("body").click(function () {
            n.css("flex", "1"),
              n
                .find(".pp-image-accordion-content-wrap")
                .removeClass("pp-image-accordion-content-active"),
              n.removeClass("pp-image-accordion-active");
          }));
    },
    y = function (e, t) {
      void 0 !== e &&
        e.find("select:not([multiple])").each(function () {
          var e = t(this);
          (e.next().hasClass("chosen-container") ? e.next() : e).wrap(
            "<span class='pp-gf-select-custom'></span>"
          );
        });
    },
    b = function (n, i) {
      var e = n.data("id"),
        t = n.find(".pp-pricing-table-tooptip[data-tooltip]"),
        o = m(n),
        a = "pp-tooltip pp-tooltip-" + e,
        r = o.tooltip_arrow,
        d = o.tooltip_trigger,
        p = o.tooltip_animation,
        e = o.tooltip_size,
        c = o.tooltip_zindex,
        s = elementorFrontend.config.breakpoints;
      "" !== e && undefined !== e && (a += " pp-tooltip-size-" + e),
        t.each(function () {
          var e = i(this).data("tooltip-position"),
            t = i(this).data("tooltip-width"),
            o = i(this).data("tooltip-distance");
          window.innerWidth <= s.lg &&
            window.innerWidth >= s.md &&
            (e = n
              .find(".pp-pricing-table-tooptip[data-tooltip]")
              .data("tooltip-position-tablet")),
            window.innerWidth < s.md &&
              (e = n
                .find(".pp-pricing-table-tooptip[data-tooltip]")
                .data("tooltip-position-mobile")),
            i(this).pptooltipster({
              trigger: d,
              animation: p,
              minWidth: t,
              ppclass: a,
              side: e,
              arrow: "yes" === r,
              distance: o,
              interactive: !0,
              positionTracker: !0,
              zIndex: c,
            });
        });
    },
    _ = function (e, t) {
      m(e);
      var o,
        n = e.find(".pp-content-reveal-content-wrapper"),
        i = e.find(".pp-content-reveal-content"),
        a = e.find(".pp-content-reveal-saparator"),
        r = e.find(".pp-content-reveal-button-inner"),
        d = i.outerHeight(),
        p = n.data("scroll-top"),
        c = n.data("visibility"),
        s = n.data("content-height"),
        l = 1e3 * n.data("speed"),
        f = n.data("lines"),
        e = e.find(".pp-content-reveal-content p").css("line-height"),
        i = i.css("padding-top");
      "lines" == c
        ? "0" == f
          ? (o = n.outerHeight())
          : ((o = parseInt(e, 10) * f + parseInt(i, 10)),
            n.css("height", o + "px"))
        : (n.css("height", s + "px"), (o = s)),
        r.on("click", function () {
          a.slideToggle(l),
            t(this).toggleClass("pp-content-revealed"),
            t(this).find(".pp-content-reveal-button-open").slideToggle(l),
            t(this).find(".pp-content-reveal-button-closed").slideToggle(l),
            r.hasClass("pp-content-revealed")
              ? n.animate({ height: d + "px" }, l)
              : (n.animate({ height: o + "px" }, l),
                "yes" == p &&
                  t("html, body").animate({
                    scrollTop: n.offset().top - 50 + "px",
                  }));
        });
    },
    k = function (e) {
      var t, o, n, i, a, r;
      e.data("pp-wrapper-link") &&
        ((t = e.data("pp-wrapper-link")),
        (o = e.data("id")),
        (n = t.url),
        (i = t.is_external ? "_blank" : "_self"),
        (a = t.nofollow ? "nofollow" : ""),
        (r = document.createElement("a")),
        e.on("click.onPPWrapperLink", function () {
          (r.id = "pp-wrapper-link-" + o),
            (r.href = n),
            (r.target = i),
            (r.rel = a),
            (r.style.display = "none"),
            document.body.appendChild(r);
          var e = document.getElementById(r.id);
          e.click();
          var t = setTimeout(function () {
            document.body.removeChild(e), clearTimeout(t);
          });
        }));
    };
  r(window).on("elementor/frontend/init", function () {
    elementorFrontend.isEditMode() && (a = !0),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-image-hotspots.default",
        t
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-image-comparison.default",
        o
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-counter.default",
        n
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-logo-carousel.default",
        e
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-info-box-carousel.default",
        s
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-instafeed.default",
        l
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-team-member-carousel.default",
        e
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-scroll-image.default",
        f
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-advanced-accordion.default",
        u
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-content-ticker.default",
        e
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-buttons.default",
        g
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-twitter-timeline.default",
        v
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-twitter-tweet.default",
        v
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-image-accordion.default",
        w
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-gravity-forms.default",
        y
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-pricing-table.default",
        b
      ),
      elementorFrontend.hooks.addAction(
        "frontend/element_ready/pp-content-reveal.default",
        _
      ),
      elementorFrontend.hooks.addAction("frontend/element_ready/global", k),
      a &&
        parent.document.addEventListener("mousedown", function (e) {
          var t = parent.document.querySelectorAll(
            ".elementor-element--promotion"
          );
          if (0 < t.length)
            for (var o = 0; o < t.length; o++)
              if (t[o].contains(e.target)) {
                var n,
                  i,
                  a = parent.document.querySelector(
                    "#elementor-element--promotion__dialog"
                  );
                0 <=
                t[o]
                  .querySelector(".icon > i")
                  .classList.toString()
                  .indexOf("ppicon")
                  ? ((a.querySelector(".dialog-buttons-action").style.display =
                      "none"),
                    null === a.querySelector(".pp-dialog-buttons-action")
                      ? ((n = document.createElement("a")),
                        (i = document.createTextNode(
                          "Upgrade to PowerPack Pro"
                        )),
                        n.setAttribute(
                          "href",
                          "https://powerpackelements.com/upgrade/?utm_medium=pp-elements-lite&utm_source=pp-editor-icons&utm_campaign=pp-pro-upgrade"
                        ),
                        n.setAttribute("target", "_blank"),
                        n.classList.add(
                          "dialog-button",
                          "dialog-action",
                          "dialog-buttons-action",
                          "elementor-button",
                          "elementor-button-success",
                          "pp-dialog-buttons-action"
                        ),
                        n.appendChild(i),
                        a
                          .querySelector(".dialog-buttons-action")
                          .insertAdjacentHTML("afterend", n.outerHTML))
                      : (a.querySelector(
                          ".pp-dialog-buttons-action"
                        ).style.display = ""))
                  : ((a.querySelector(".dialog-buttons-action").style.display =
                      ""),
                    null !== a.querySelector(".pp-dialog-buttons-action") &&
                      (a.querySelector(
                        ".pp-dialog-buttons-action"
                      ).style.display = "none"));
                break;
              }
        });
  });
})(jQuery);
