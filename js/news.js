! function (e) {
    "use strict";

    function t() {
        var e = 0;
        jQuery(".br-article-list-inner", ".br-article-list").each(function () {
            var t = jQuery(this),
                a = e;
            if (e += 1, t.find(".br-article").size() > 0) {
                if (!i) return !1;
                var h = (parseInt(t.find(".br-article").css("margin-right"), 10), parseInt(t.parent().css("width"), 10), t),
                    g = 0;
                h.find(".br-article").each(function () {
                    g = g + parseInt(jQuery(this).width(), 10) + parseInt(jQuery(this).css("padding-right"), 10) + parseInt(jQuery(this).css("margin-right"), 10)
                });
                d[a] = g / 2, c[a] && (jQuery(this).parent().parent().parent().addClass("isscrolling"), jQuery(".br-article-list-inner").eq(a).parent().parent().parent().attr("rel", a), t.find(".br-article").clone().appendTo(this), c[a] = !1);
                var y = d[a] + l[a];
                Math.abs(y) <= Math.abs(s[a]) && o(a), u[a] || (u[a] = setInterval(function () {
                    r(t, a)
                }, n))
            }
        }), setTimeout(function () {
            new t
        }, n)
    }

    function r(e, t) {
        s[t] = s[t] - 1, e.css("left", s[t] + "px")
    }

    function o(e) {
        s[e] = 0, jQuery(".br-article-list").eq(e).find(".br-article-list-inner").css("left", "0px")
    }

    function a(e, t) {
        var r = document.createElement("CANVAS"),
            o = r.getContext("2d"),
            a = new Image;
        return r.height = t, r.width = e, o.drawImage(a, 0, 0), setTimeout(function () {
            r = null
        }, 10), r.toDataURL("image/png")
    }
    var i = !0,
        n = 40,
        s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        c = [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0],
        u = [],
        d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    Array.prototype.forEach2 = function (e) {
        for (var t = this.length, r = 0; t > r; r++) e(this[r], r)
    }, new t, jQuery(document).on("ready", function () {
        jQuery("[data-ot-css]", "body").toArray().forEach2(function (e) {
            var t = jQuery(e);
            t.attr("style", t.data("ot-css"))
        });
        var e = window.devicePixelRatio > 1;
        if (e) {
            jQuery(".retina-check", "body").toArray().forEach2(function (e) {
                jQuery(e).addClass("go-retina")
            });
            jQuery("img[data-ot-retina]", "body").toArray().forEach2(function (e) {
                var t = jQuery(e),
                    r = new Image;
                return "" == t.data("ot-retina") ? !1 : (r.src = t.attr("src"), void jQuery(r).load(function () {
                    var e = jQuery(this);
                    t.attr("src", a(e[0].width, e[0].height)), t.css({
                        "background-image": "url('" + t.data("ot-retina") + "')",
                        "background-size": "100% 100%",
                        "background-repeat": "none"
                    })
                }))
            })
        }
        //        jQuery("input[type=text]", ".search-nav").on("focus blur", function() {
        //            var e = jQuery(this);
        //            "" != e.val() ? e.addClass("active") : e.removeClass("active")
        //        }), 
        //         jQuery(".short-tabs", "body").toArray().forEach2(function(e) {
        //            var t = jQuery(e);
        //            t.children("ul").children("li").eq(0).addClass("active"), t.children("div").eq(0).addClass("active")
        //        }), 
        //         jQuery(".short-tabs > ul > li a", "body").on("click", function() {
        //            var e = jQuery(this).parent();
        //            return e.siblings(".active").removeClass("active"), e.addClass("active"), e.parent().siblings("div.active").removeClass("active"), e.parent().siblings("div").eq(e.index()).addClass("active"), !1
        //        })
        //         , jQuery(".accordion > div > a", "body").on("click", function() {
        //            var e = jQuery(this).parent();
        //            return e.hasClass("active") ? (e.removeClass("active").children("div").animate({
        //                height: "toggle",
        //                opacity: "toggle",
        //                "padding-top": "toggle"
        //            }, 300), !1) : (e.siblings("div").toArray().forEach2(function(e) {
        //                var t = jQuery(e);
        //                t.hasClass("active") && t.removeClass("active").children("div").animate({
        //                    height: "toggle",
        //                    opacity: "toggle",
        //                    "padding-top": "toggle"
        //                }, 300)
        //            }), e.addClass("active").children("div").animate({
        //                height: "toggle",
        //                opacity: "toggle",
        //                "padding-top": "toggle"
        //            }, 300), !1)
        //        }), 
        //         jQuery("button", ".photo-gallery-thumbs").on("click", function() {
        //            var e = jQuery(this),
        //                t = e.siblings(".photo-gallery-thumbs-inner").children(".item").eq(0),
        //                r = e.siblings(".photo-gallery-thumbs-inner").data("thumbs-start-from");
        //            if (e.hasClass("photo-gallery-nav-left")) r + 216 >= 0 ? (r = 0, e.siblings(".photo-gallery-thumbs-inner").removeClass("not-first").removeClass("is-last")) : (r += 216, e.siblings(".photo-gallery-thumbs-inner").removeClass("is-last"));
        //            else if (e.hasClass("photo-gallery-nav-right")) {
        //                var o = 86 * e.siblings(".photo-gallery-thumbs-inner").children(".item").size() - parseInt(jQuery(".photo-gallery-thumbs-inner", ".photo-gallery-thumbs").width(), 10); - 1 * o >= r - 216 ? o > 0 && (r = -1 * o, e.siblings(".photo-gallery-thumbs-inner").addClass("is-last")) : (r -= 216, e.siblings(".photo-gallery-thumbs-inner").addClass("not-first").removeClass("is-last"))
        //            }
        //            return t.css("margin-left", r + "px"), e.siblings(".photo-gallery-thumbs-inner").data("thumbs-start-from", r), !1
        //        }), 
        //         jQuery(".lightbox", "body").on("click", function() {
        //            var e = jQuery(this);
        //            e.css("overflow", "hidden"), jQuery("body").css("overflow", "auto"), e.find(".lightcontent").fadeOut("fast"), e.fadeOut("slow")
        //        }).children().on("click", function(e) {
        //            return !1
        //        }), jQuery(".lightbox .light-close", "body").on("click", function() {
        //            return jQuery(".lightbox").click(), !1
        //        })
    });
    var h = !1;
    //    jQuery(window).on("scroll", function() {
    //        var e = jQuery(".ot-menu-will-follow .main-menu-placeholder").parent(),
    //            t = jQuery(".ot-menu-will-follow .is-now-following");
    //        e.size() > 0 && jQuery(window).scrollTop() >= parseInt(e.offset().top, 10) + 280 ? e.addClass("smallify") : t.size() > 0 && jQuery(window).scrollTop() < parseInt(t.offset().top, 10) + 280 && t.removeClass("smallify"), e.size() > 0 && jQuery(window).scrollTop() >= parseInt(e.offset().top, 10) && 0 == h ? (h = !0, e.css({
    //            height: e.children(".main-menu-placeholder").height()
    //        }), e.addClass("is-now-following")) : t.size() > 0 && jQuery(window).scrollTop() < parseInt(t.offset().top, 10) && 1 == h && (h = !1, t.removeClass("is-now-following").css({
    //            height: "auto"
    //        }))
    //     }), setTimeout(function() {
    //         jQuery(".theiaStickySidebar", "body").parent().theiaStickySidebar({
    //              additionalMarginTop: 30
    //          })
    //     }, 100), 

    jQuery(".breaking-news").on("mouseenter", function () {
            var e = jQuery(this).attr("rel");
            clearTimeout(u[e])
        }).on("mouseleave", function () {
            var e = jQuery(this).attr("rel");
            u[e] = !1
        }),
        jQuery("[data-spacer-color]", "body").toArray().forEach2(function (e) {
            var t = jQuery(e);
            t.css({
                color: t.data("spacer-color"),
                "background-color": t.data("spacer-color")
            })
        })
}(jQuery);