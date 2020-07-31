/* == jquery mousewheel plugin == Version: 3.1.12, License: MIT License (MIT) */ ! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
	function b(b) {
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if(b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
			if(1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				j *= q, m *= q, l *= q
			} else if(2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				j *= r, m *= r, l *= r
			}
			if(n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();
				o = b.clientX - s.left, p = b.clientY - s.top
			}
			return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
		}
	}

	function c() {
		f = null
	}

	function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
	}
	var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		i = Array.prototype.slice;
	if(a.event.fixHooks)
		for(var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function() {
			if(this.addEventListener)
				for(var c = h.length; c;) this.addEventListener(h[--c], b, !1);
			else this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
		},
		teardown: function() {
			if(this.removeEventListener)
				for(var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
			else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function(b) {
			var c = a(b),
				d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
		},
		getPageHeight: function(b) {
			return a(b).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	a.fn.extend({
		mousewheel: function(a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function(a) {
			return this.unbind("mousewheel", a)
		}
	})
});
/* == malihu jquery custom scrollbar plugin == Version: 3.0.7, License: MIT License (MIT) */
! function(e, t, a) {
	! function(t) {
		var o = "function" == typeof define && define.amd,
			n = "https:" == a.location.protocol ? "https:" : "http:",
			i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
		o || e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E")), t()
	}(function() {
		var o, n = "mCustomScrollbar",
			i = "mCS",
			r = ".mCustomScrollbar",
			l = {
				setTop: 0,
				setLeft: 0,
				axis: "y",
				scrollbarPosition: "inside",
				scrollInertia: 950,
				autoDraggerLength: !0,
				alwaysShowScrollbar: 0,
				snapOffset: 0,
				mouseWheel: {
					enable: !0,
					scrollAmount: "auto",
					axis: "y",
					deltaFactor: "auto",
					disableOver: ["select", "option", "keygen", "datalist", "textarea"]
				},
				scrollButtons: {
					scrollType: "stepless",
					scrollAmount: "auto"
				},
				keyboard: {
					enable: !0,
					scrollType: "stepless",
					scrollAmount: "auto"
				},
				contentTouchScroll: 25,
				advanced: {
					autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
					updateOnContentResize: !0,
					updateOnImageLoad: !0
				},
				theme: "light",
				callbacks: {
					onTotalScrollOffset: 0,
					onTotalScrollBackOffset: 0,
					alwaysTriggerOffsets: !0
				}
			},
			s = 0,
			c = {},
			d = t.attachEvent && !t.addEventListener ? 1 : 0,
			u = !1,
			f = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
			h = {
				init: function(t) {
					var t = e.extend(!0, {}, l, t),
						a = m.call(this);
					if(t.live) {
						var o = t.liveSelector || this.selector || r,
							n = e(o);
						if("off" === t.live) return void g(o);
						c[o] = setTimeout(function() {
							n.mCustomScrollbar(t), "once" === t.live && n.length && g(o)
						}, 500)
					} else g(o);
					return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : v(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
						enable: !0,
						scrollAmount: "auto",
						axis: "y",
						preventDefault: !1,
						deltaFactor: "auto",
						normalizeDelta: !1,
						invert: !1
					}), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = x(t.scrollButtons.scrollType), p(t), e(a).each(function() {
						var a = e(this);
						if(!a.data(i)) {
							a.data(i, {
								idx: ++s,
								opt: t,
								scrollRatio: {
									y: null,
									x: null
								},
								overflowed: null,
								contentReset: {
									y: null,
									x: null
								},
								bindEvents: !1,
								tweenRunning: !1,
								sequential: {},
								langDir: a.css("direction"),
								cbOffsets: null,
								trigger: null
							});
							var o = a.data(i),
								n = o.opt,
								r = a.data("mcs-axis"),
								l = a.data("mcs-scrollbar-position"),
								c = a.data("mcs-theme");
							r && (n.axis = r), l && (n.scrollbarPosition = l), c && (n.theme = c, p(n)), _.call(this), e("#mCSB_" + o.idx + "_container img:not(." + f[2] + ")").addClass(f[2]), h.update.call(null, a)
						}
					})
				},
				update: function(t, a) {
					var o = t || m.call(this);
					return e(o).each(function() {
						var t = e(this);
						if(t.data(i)) {
							var o = t.data(i),
								n = o.opt,
								r = e("#mCSB_" + o.idx + "_container"),
								l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
							if(!r.length) return;
							o.tweenRunning && Q(t), t.hasClass(f[3]) && t.removeClass(f[3]), t.hasClass(f[4]) && t.removeClass(f[4]), C.call(this), w.call(this), "y" === n.axis || n.advanced.autoExpandHorizontalScroll || r.css("width", S(r.children())), o.overflowed = k.call(this), R.call(this), n.autoDraggerLength && y.call(this), B.call(this), O.call(this);
							var s = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
							"x" !== n.axis && (o.overflowed[0] ? l[0].height() > l[0].parent().height() ? M.call(this) : (G(t, s[0].toString(), {
								dir: "y",
								dur: 0,
								overwrite: "none"
							}), o.contentReset.y = null) : (M.call(this), "y" === n.axis ? I.call(this) : "yx" === n.axis && o.overflowed[1] && G(t, s[1].toString(), {
								dir: "x",
								dur: 0,
								overwrite: "none"
							}))), "y" !== n.axis && (o.overflowed[1] ? l[1].width() > l[1].parent().width() ? M.call(this) : (G(t, s[1].toString(), {
								dir: "x",
								dur: 0,
								overwrite: "none"
							}), o.contentReset.x = null) : (M.call(this), "x" === n.axis ? I.call(this) : "yx" === n.axis && o.overflowed[0] && G(t, s[0].toString(), {
								dir: "y",
								dur: 0,
								overwrite: "none"
							}))), a && o && (2 === a && n.callbacks.onImageLoad && "function" == typeof n.callbacks.onImageLoad ? n.callbacks.onImageLoad.call(this) : 3 === a && n.callbacks.onSelectorChange && "function" == typeof n.callbacks.onSelectorChange ? n.callbacks.onSelectorChange.call(this) : n.callbacks.onUpdate && "function" == typeof n.callbacks.onUpdate && n.callbacks.onUpdate.call(this)), N.call(this)
						}
					})
				},
				scrollTo: function(t, a) {
					if("undefined" != typeof t && null != t) {
						var o = m.call(this);
						return e(o).each(function() {
							var o = e(this);
							if(o.data(i)) {
								var n = o.data(i),
									r = n.opt,
									l = {
										trigger: "external",
										scrollInertia: r.scrollInertia,
										scrollEasing: "mcsEaseInOut",
										moveDragger: !1,
										timeout: 60,
										callbacks: !0,
										onStart: !0,
										onUpdate: !0,
										onComplete: !0
									},
									s = e.extend(!0, {}, l, a),
									c = Y.call(this, t),
									d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
								c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= n.scrollRatio.y, c[1] *= n.scrollRatio.x), s.dur = d, setTimeout(function() {
									null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && n.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(o, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && n.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(o, c[1].toString(), s))
								}, s.timeout)
							}
						})
					}
				},
				stop: function() {
					var t = m.call(this);
					return e(t).each(function() {
						var t = e(this);
						t.data(i) && Q(t)
					})
				},
				disable: function(t) {
					var a = m.call(this);
					return e(a).each(function() {
						var a = e(this);
						if(a.data(i)) {
							{
								a.data(i)
							}
							N.call(this, "remove"), I.call(this), t && M.call(this), R.call(this, !0), a.addClass(f[3])
						}
					})
				},
				destroy: function() {
					var t = m.call(this);
					return e(t).each(function() {
						var a = e(this);
						if(a.data(i)) {
							var o = a.data(i),
								r = o.opt,
								l = e("#mCSB_" + o.idx),
								s = e("#mCSB_" + o.idx + "_container"),
								c = e(".mCSB_" + o.idx + "_scrollbar");
							r.live && g(r.liveSelector || e(t).selector), N.call(this, "remove"), I.call(this), M.call(this), a.removeData(i), $(this, "mcs"), c.remove(), s.find("img." + f[2]).removeClass(f[2]), l.replaceWith(s.contents()), a.removeClass(n + " _" + i + "_" + o.idx + " " + f[6] + " " + f[7] + " " + f[5] + " " + f[3]).addClass(f[4])
						}
					})
				}
			},
			m = function() {
				return "object" != typeof e(this) || e(this).length < 1 ? r : this
			},
			p = function(t) {
				var a = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
					o = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
					n = ["minimal", "minimal-dark"],
					i = ["minimal", "minimal-dark"],
					r = ["minimal", "minimal-dark"];
				t.autoDraggerLength = e.inArray(t.theme, a) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, o) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
			},
			g = function(e) {
				c[e] && (clearTimeout(c[e]), $(c, e))
			},
			v = function(e) {
				return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
			},
			x = function(e) {
				return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
			},
			_ = function() {
				var t = e(this),
					a = t.data(i),
					o = a.opt,
					r = o.autoExpandScrollbar ? " " + f[1] + "_expand" : "",
					l = ["<div id='mCSB_" + a.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + a.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + f[12] + "'><div id='mCSB_" + a.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + a.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + a.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + f[12] + "'><div id='mCSB_" + a.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
					s = "yx" === o.axis ? "mCSB_vertical_horizontal" : "x" === o.axis ? "mCSB_horizontal" : "mCSB_vertical",
					c = "yx" === o.axis ? l[0] + l[1] : "x" === o.axis ? l[1] : l[0],
					d = "yx" === o.axis ? "<div id='mCSB_" + a.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
					u = o.autoHideScrollbar ? " " + f[6] : "",
					h = "x" !== o.axis && "rtl" === a.langDir ? " " + f[7] : "";
				o.setWidth && t.css("width", o.setWidth), o.setHeight && t.css("height", o.setHeight), o.setLeft = "y" !== o.axis && "rtl" === a.langDir ? "989999px" : o.setLeft, t.addClass(n + " _" + i + "_" + a.idx + u + h).wrapInner("<div id='mCSB_" + a.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + s + "'><div id='mCSB_" + a.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir=" + a.langDir + " /></div>");
				var m = e("#mCSB_" + a.idx),
					p = e("#mCSB_" + a.idx + "_container");
				"y" === o.axis || o.advanced.autoExpandHorizontalScroll || p.css("width", S(p.children())), "outside" === o.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(d)), b.call(this);
				var g = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")];
				g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
			},
			S = function(t) {
				return Math.max.apply(Math, t.map(function() {
					return e(this).outerWidth(!0)
				}).get())
			},
			w = function() {
				var t = e(this),
					a = t.data(i),
					o = a.opt,
					n = e("#mCSB_" + a.idx + "_container");
				o.advanced.autoExpandHorizontalScroll && "y" !== o.axis && n.css({
					position: "absolute",
					width: "auto"
				}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
					width: Math.ceil(n[0].getBoundingClientRect().right + .4) - Math.floor(n[0].getBoundingClientRect().left),
					position: "relative"
				}).unwrap()
			},
			b = function() {
				var t = e(this),
					a = t.data(i),
					o = a.opt,
					n = e(".mCSB_" + a.idx + "_scrollbar:first"),
					r = at(o.scrollButtons.tabindex) ? "tabindex='" + o.scrollButtons.tabindex + "'" : "",
					l = ["<a href='#' class='" + f[13] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + f[14] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + f[15] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + f[16] + "' oncontextmenu='return false;' " + r + " />"],
					s = ["x" === o.axis ? l[2] : l[0], "x" === o.axis ? l[3] : l[1], l[2], l[3]];
				o.scrollButtons.enable && n.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
			},
			C = function() {
				var t = e(this),
					a = t.data(i),
					o = e("#mCSB_" + a.idx),
					n = t.css("max-height") || "none",
					r = -1 !== n.indexOf("%"),
					l = t.css("box-sizing");
				if("none" !== n) {
					var s = r ? t.parent().height() * parseInt(n) / 100 : parseInt(n);
					"border-box" === l && (s -= t.innerHeight() - t.height() + (t.outerHeight() - t.innerHeight())), o.css("max-height", Math.round(s))
				}
			},
			y = function() {
				var t = e(this),
					a = t.data(i),
					o = e("#mCSB_" + a.idx),
					n = e("#mCSB_" + a.idx + "_container"),
					r = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")],
					l = [o.height() / n.outerHeight(!1), o.width() / n.outerWidth(!1)],
					s = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
					c = d && s[1] < s[0] ? s[0] : s[1],
					u = d && s[3] < s[2] ? s[2] : s[3];
				r[0].css({
					height: c,
					"max-height": r[0].parent().height() - 10
				}).find(".mCSB_dragger_bar").css({
					"line-height": s[0] + "px"
				}), r[1].css({
					width: u,
					"max-width": r[1].parent().width() - 10
				})
			},
			B = function() {
				var t = e(this),
					a = t.data(i),
					o = e("#mCSB_" + a.idx),
					n = e("#mCSB_" + a.idx + "_container"),
					r = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")],
					l = [n.outerHeight(!1) - o.height(), n.outerWidth(!1) - o.width()],
					s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
				a.scrollRatio = {
					y: s[0],
					x: s[1]
				}
			},
			T = function(e, t, a) {
				var o = a ? f[0] + "_expanded" : "",
					n = e.closest(".mCSB_scrollTools");
				"active" === t ? (e.toggleClass(f[0] + " " + o), n.toggleClass(f[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(f[0]), n.removeClass(f[1])) : (e.addClass(f[0]), n.addClass(f[1])))
			},
			k = function() {
				var t = e(this),
					a = t.data(i),
					o = e("#mCSB_" + a.idx),
					n = e("#mCSB_" + a.idx + "_container"),
					r = null == a.overflowed ? n.height() : n.outerHeight(!1),
					l = null == a.overflowed ? n.width() : n.outerWidth(!1);
				return [r > o.height(), l > o.width()]
			},
			M = function() {
				var t = e(this),
					a = t.data(i),
					o = a.opt,
					n = e("#mCSB_" + a.idx),
					r = e("#mCSB_" + a.idx + "_container"),
					l = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")];
				if(Q(t), ("x" !== o.axis && !a.overflowed[0] || "y" === o.axis && a.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== o.axis && !a.overflowed[1] || "x" === o.axis && a.overflowed[1]) {
					var s = dx = 0;
					"rtl" === a.langDir && (s = n.width() - r.outerWidth(!1), dx = Math.abs(s / a.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX")
				}
			},
			O = function() {
				function t() {
					r = setTimeout(function() {
						e.event.special.mousewheel ? (clearTimeout(r), A.call(a[0])) : t()
					}, 100)
				}
				var a = e(this),
					o = a.data(i),
					n = o.opt;
				if(!o.bindEvents) {
					if(D.call(this), n.contentTouchScroll && L.call(this), W.call(this), n.mouseWheel.enable) {
						var r;
						t()
					}
					z.call(this), U.call(this), n.advanced.autoScrollOnFocus && H.call(this), n.scrollButtons.enable && F.call(this), n.keyboard.enable && q.call(this), o.bindEvents = !0
				}
			},
			I = function() {
				var t = e(this),
					o = t.data(i),
					n = o.opt,
					r = i + "_" + o.idx,
					l = ".mCSB_" + o.idx + "_scrollbar",
					s = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + l + " ." + f[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + l + ">a"),
					c = e("#mCSB_" + o.idx + "_container");
				n.advanced.releaseDraggableSelectors && s.add(e(n.advanced.releaseDraggableSelectors)), o.bindEvents && (e(a).unbind("." + r), s.each(function() {
					e(this).unbind("." + r)
				}), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(c[0].onCompleteTimeout), $(c[0], "onCompleteTimeout"), o.bindEvents = !1)
			},
			R = function(t) {
				var a = e(this),
					o = a.data(i),
					n = o.opt,
					r = e("#mCSB_" + o.idx + "_container_wrapper"),
					l = r.length ? r : e("#mCSB_" + o.idx + "_container"),
					s = [e("#mCSB_" + o.idx + "_scrollbar_vertical"), e("#mCSB_" + o.idx + "_scrollbar_horizontal")],
					c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
				"x" !== n.axis && (o.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(f[8] + " " + f[10])) : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(f[10])) : (s[0].css("display", "none"), l.addClass(f[10])), l.addClass(f[8]))), "y" !== n.axis && (o.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(f[9] + " " + f[11])) : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(f[11])) : (s[1].css("display", "none"), l.addClass(f[11])), l.addClass(f[9]))), o.overflowed[0] || o.overflowed[1] ? a.removeClass(f[5]) : a.addClass(f[5])
			},
			E = function(e) {
				var t = e.type;
				switch(t) {
					case "pointerdown":
					case "MSPointerDown":
					case "pointermove":
					case "MSPointerMove":
					case "pointerup":
					case "MSPointerUp":
						return [e.originalEvent.pageY, e.originalEvent.pageX, !1];
					case "touchstart":
					case "touchmove":
					case "touchend":
						var a = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
							o = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
						return [a.pageY, a.pageX, o > 1];
					default:
						return [e.pageY, e.pageX, !1]
				}
			},
			D = function() {
				function t(e) {
					var t = p.find("iframe");
					if(t.length) {
						var a = e ? "auto" : "none";
						t.css("pointer-events", a)
					}
				}

				function o(e, t, a, o) {
					if(p[0].idleTimer = f.scrollInertia < 233 ? 250 : 0, n.attr("id") === m[1]) var i = "x",
						r = (n[0].offsetLeft - t + o) * c.scrollRatio.x;
					else var i = "y",
						r = (n[0].offsetTop - e + a) * c.scrollRatio.y;
					G(s, r.toString(), {
						dir: i,
						drag: !0
					})
				}
				var n, r, l, s = e(this),
					c = s.data(i),
					f = c.opt,
					h = i + "_" + c.idx,
					m = ["mCSB_" + c.idx + "_dragger_vertical", "mCSB_" + c.idx + "_dragger_horizontal"],
					p = e("#mCSB_" + c.idx + "_container"),
					g = e("#" + m[0] + ",#" + m[1]),
					v = f.advanced.releaseDraggableSelectors ? g.add(e(f.advanced.releaseDraggableSelectors)) : g;
				g.bind("mousedown." + h + " touchstart." + h + " pointerdown." + h + " MSPointerDown." + h, function(o) {
					if(o.stopImmediatePropagation(), o.preventDefault(), et(o)) {
						u = !0, d && (a.onselectstart = function() {
							return !1
						}), t(!1), Q(s), n = e(this);
						var i = n.offset(),
							c = E(o)[0] - i.top,
							h = E(o)[1] - i.left,
							m = n.height() + i.top,
							p = n.width() + i.left;
						m > c && c > 0 && p > h && h > 0 && (r = c, l = h), T(n, "active", f.autoExpandScrollbar)
					}
				}).bind("touchmove." + h, function(e) {
					e.stopImmediatePropagation(), e.preventDefault();
					var t = n.offset(),
						a = E(e)[0] - t.top,
						i = E(e)[1] - t.left;
					o(r, l, a, i)
				}), e(a).bind("mousemove." + h + " pointermove." + h + " MSPointerMove." + h, function(e) {
					if(n) {
						var t = n.offset(),
							a = E(e)[0] - t.top,
							i = E(e)[1] - t.left;
						if(r === a) return;
						o(r, l, a, i)
					}
				}).add(v).bind("mouseup." + h + " touchend." + h + " pointerup." + h + " MSPointerUp." + h, function() {
					n && (T(n, "active", f.autoExpandScrollbar), n = null), u = !1, d && (a.onselectstart = null), t(!0)
				})
			},
			L = function() {
				function t(e, t) {
					var a = [1.5 * t, 2 * t, t / 1.5, t / 2];
					return e > 90 ? t > 4 ? a[0] : a[3] : e > 60 ? t > 3 ? a[3] : a[2] : e > 30 ? t > 8 ? a[1] : t > 6 ? a[0] : t > 4 ? t : a[2] : t > 8 ? t : a[3]
				}

				function a(e, t, a, o, n, i) {
					e && G(_, e.toString(), {
						dur: t,
						scrollEasing: a,
						dir: o,
						overwrite: n,
						drag: i
					})
				}
				var n, r, l, s, c, d, f, h, m, p, g, v, x, _ = e(this),
					S = _.data(i),
					w = S.opt,
					b = i + "_" + S.idx,
					C = e("#mCSB_" + S.idx),
					y = e("#mCSB_" + S.idx + "_container"),
					B = [e("#mCSB_" + S.idx + "_dragger_vertical"), e("#mCSB_" + S.idx + "_dragger_horizontal")],
					T = [],
					k = [],
					M = 0,
					O = "yx" === w.axis ? "none" : "all",
					I = [];
				y.bind("touchstart." + b + " pointerdown." + b + " MSPointerDown." + b, function(e) {
					if(!tt(e) || u || E(e)[2]) return void(o = 0);
					o = 1, v = 0, x = 0;
					var t = y.offset();
					n = E(e)[0] - t.top, r = E(e)[1] - t.left, I = [E(e)[0], E(e)[1]]
				}).bind("touchmove." + b + " pointermove." + b + " MSPointerMove." + b, function(e) {
					if(tt(e) && !u && !E(e)[2] && (e.stopImmediatePropagation(), !x || v)) {
						d = K();
						var t = C.offset(),
							o = E(e)[0] - t.top,
							i = E(e)[1] - t.left,
							l = "mcsLinearOut";
						if(T.push(o), k.push(i), I[2] = Math.abs(E(e)[0] - I[0]), I[3] = Math.abs(E(e)[1] - I[1]), S.overflowed[0]) var s = B[0].parent().height() - B[0].height(),
							c = n - o > 0 && o - n > -(s * S.scrollRatio.y) && (2 * I[3] < I[2] || "yx" === w.axis);
						if(S.overflowed[1]) var f = B[1].parent().width() - B[1].width(),
							h = r - i > 0 && i - r > -(f * S.scrollRatio.x) && (2 * I[2] < I[3] || "yx" === w.axis);
						c || h ? (e.preventDefault(), v = 1) : x = 1, p = "yx" === w.axis ? [n - o, r - i] : "x" === w.axis ? [null, r - i] : [n - o, null], y[0].idleTimer = 250, S.overflowed[0] && a(p[0], M, l, "y", "all", !0), S.overflowed[1] && a(p[1], M, l, "x", O, !0)
					}
				}), C.bind("touchstart." + b + " pointerdown." + b + " MSPointerDown." + b, function(e) {
					if(!tt(e) || u || E(e)[2]) return void(o = 0);
					o = 1, e.stopImmediatePropagation(), Q(_), c = K();
					var t = C.offset();
					l = E(e)[0] - t.top, s = E(e)[1] - t.left, T = [], k = []
				}).bind("touchend." + b + " pointerup." + b + " MSPointerUp." + b, function(e) {
					if(tt(e) && !u && !E(e)[2]) {
						e.stopImmediatePropagation(), v = 0, x = 0, f = K();
						var o = C.offset(),
							n = E(e)[0] - o.top,
							i = E(e)[1] - o.left;
						if(!(f - d > 30)) {
							m = 1e3 / (f - c);
							var r = "mcsEaseOut",
								_ = 2.5 > m,
								b = _ ? [T[T.length - 2], k[k.length - 2]] : [0, 0];
							h = _ ? [n - b[0], i - b[1]] : [n - l, i - s];
							var B = [Math.abs(h[0]), Math.abs(h[1])];
							m = _ ? [Math.abs(h[0] / 4), Math.abs(h[1] / 4)] : [m, m];
							var M = [Math.abs(y[0].offsetTop) - h[0] * t(B[0] / m[0], m[0]), Math.abs(y[0].offsetLeft) - h[1] * t(B[1] / m[1], m[1])];
							p = "yx" === w.axis ? [M[0], M[1]] : "x" === w.axis ? [null, M[1]] : [M[0], null], g = [4 * B[0] + w.scrollInertia, 4 * B[1] + w.scrollInertia];
							var I = parseInt(w.contentTouchScroll) || 0;
							p[0] = B[0] > I ? p[0] : 0, p[1] = B[1] > I ? p[1] : 0, S.overflowed[0] && a(p[0], g[0], r, "y", O, !1), S.overflowed[1] && a(p[1], g[1], r, "x", O, !1)
						}
					}
				})
			},
			W = function() {
				function n() {
					return t.getSelection ? t.getSelection().toString() : a.selection && "Control" != a.selection.type ? a.selection.createRange().text : 0
				}

				function r(e, t, a) {
					f.type = a && l ? "stepped" : "stepless", f.scrollAmount = 10, j(s, e, t, "mcsLinearOut", a ? 60 : null)
				}
				var l, s = e(this),
					c = s.data(i),
					d = c.opt,
					f = c.sequential,
					h = i + "_" + c.idx,
					m = e("#mCSB_" + c.idx + "_container"),
					p = m.parent();
				m.bind("mousedown." + h, function() {
					o || l || (l = 1, u = !0)
				}).add(a).bind("mousemove." + h, function(e) {
					if(!o && l && n()) {
						var t = m.offset(),
							a = E(e)[0] - t.top + m[0].offsetTop,
							i = E(e)[1] - t.left + m[0].offsetLeft;
						a > 0 && a < p.height() && i > 0 && i < p.width() ? f.step && r("off", null, "stepped") : ("x" !== d.axis && c.overflowed[0] && (0 > a ? r("on", 38) : a > p.height() && r("on", 40)), "y" !== d.axis && c.overflowed[1] && (0 > i ? r("on", 37) : i > p.width() && r("on", 39)))
					}
				}).bind("mouseup." + h, function() {
					o || (l && (l = 0, r("off", null)), u = !1)
				})
			},
			A = function() {
				function t(e) {
					var t = null;
					try {
						var a = e.contentDocument || e.contentWindow.document;
						t = a.body.innerHTML
					} catch(o) {}
					return null !== t
				}
				var a = e(this),
					o = a.data(i);
				if(o) {
					var n = o.opt,
						r = i + "_" + o.idx,
						l = e("#mCSB_" + o.idx),
						s = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
						c = e("#mCSB_" + o.idx + "_container").find("iframe"),
						u = l;
					c.length && c.each(function() {
						var a = this;
						t(a) && (u = u.add(e(a).contents().find("body")))
					}), u.bind("mousewheel." + r, function(t, i) {
						if(Q(a), !P(a, t.target)) {
							var r = "auto" !== n.mouseWheel.deltaFactor ? parseInt(n.mouseWheel.deltaFactor) : d && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100;
							if("x" === n.axis || "x" === n.mouseWheel.axis) var c = "x",
								u = [Math.round(r * o.scrollRatio.x), parseInt(n.mouseWheel.scrollAmount)],
								f = "auto" !== n.mouseWheel.scrollAmount ? u[1] : u[0] >= l.width() ? .9 * l.width() : u[0],
								h = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetLeft),
								m = s[1][0].offsetLeft,
								p = s[1].parent().width() - s[1].width(),
								g = t.deltaX || t.deltaY || i;
							else var c = "y",
								u = [Math.round(r * o.scrollRatio.y), parseInt(n.mouseWheel.scrollAmount)],
								f = "auto" !== n.mouseWheel.scrollAmount ? u[1] : u[0] >= l.height() ? .9 * l.height() : u[0],
								h = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetTop),
								m = s[0][0].offsetTop,
								p = s[0].parent().height() - s[0].height(),
								g = t.deltaY || i;
							"y" === c && !o.overflowed[0] || "x" === c && !o.overflowed[1] || (n.mouseWheel.invert && (g = -g), n.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== m || 0 > g && m !== p || n.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), G(a, (h - g * f).toString(), {
								dir: c
							}))
						}
					})
				}
			},
			P = function(t, a) {
				var o = a.nodeName.toLowerCase(),
					n = t.data(i).opt.mouseWheel.disableOver,
					r = ["select", "textarea"];
				return e.inArray(o, n) > -1 && !(e.inArray(o, r) > -1 && !e(a).is(":focus"))
			},
			z = function() {
				var t = e(this),
					a = t.data(i),
					o = i + "_" + a.idx,
					n = e("#mCSB_" + a.idx + "_container"),
					r = n.parent(),
					l = e(".mCSB_" + a.idx + "_scrollbar ." + f[12]);
				l.bind("touchstart." + o + " pointerdown." + o + " MSPointerDown." + o, function() {
					u = !0
				}).bind("touchend." + o + " pointerup." + o + " MSPointerUp." + o, function() {
					u = !1
				}).bind("click." + o, function(o) {
					if(e(o.target).hasClass(f[12]) || e(o.target).hasClass("mCSB_draggerRail")) {
						Q(t);
						var i = e(this),
							l = i.find(".mCSB_dragger");
						if(i.parent(".mCSB_scrollTools_horizontal").length > 0) {
							if(!a.overflowed[1]) return;
							var s = "x",
								c = o.pageX > l.offset().left ? -1 : 1,
								d = Math.abs(n[0].offsetLeft) - .9 * c * r.width()
						} else {
							if(!a.overflowed[0]) return;
							var s = "y",
								c = o.pageY > l.offset().top ? -1 : 1,
								d = Math.abs(n[0].offsetTop) - .9 * c * r.height()
						}
						G(t, d.toString(), {
							dir: s,
							scrollEasing: "mcsEaseInOut"
						})
					}
				})
			},
			H = function() {
				var t = e(this),
					o = t.data(i),
					n = o.opt,
					r = i + "_" + o.idx,
					l = e("#mCSB_" + o.idx + "_container"),
					s = l.parent();
				l.bind("focusin." + r, function() {
					var o = e(a.activeElement),
						i = l.find(".mCustomScrollBox").length,
						r = 0;
					o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? (r + 17) * i : 0, t[0]._focusTimeout = setTimeout(function() {
						var e = [ot(o)[0], ot(o)[1]],
							a = [l[0].offsetTop, l[0].offsetLeft],
							i = [a[0] + e[0] >= 0 && a[0] + e[0] < s.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < s.width() - o.outerWidth(!1)],
							c = "yx" !== n.axis || i[0] || i[1] ? "all" : "none";
						"x" === n.axis || i[0] || G(t, e[0].toString(), {
							dir: "y",
							scrollEasing: "mcsEaseInOut",
							overwrite: c,
							dur: r
						}), "y" === n.axis || i[1] || G(t, e[1].toString(), {
							dir: "x",
							scrollEasing: "mcsEaseInOut",
							overwrite: c,
							dur: r
						})
					}, t[0]._focusTimer))
				})
			},
			U = function() {
				var t = e(this),
					a = t.data(i),
					o = i + "_" + a.idx,
					n = e("#mCSB_" + a.idx + "_container").parent();
				n.bind("scroll." + o, function() {
					(0 !== n.scrollTop() || 0 !== n.scrollLeft()) && e(".mCSB_" + a.idx + "_scrollbar").css("visibility", "hidden")
				})
			},
			F = function() {
				var t = e(this),
					a = t.data(i),
					o = a.opt,
					n = a.sequential,
					r = i + "_" + a.idx,
					l = ".mCSB_" + a.idx + "_scrollbar",
					s = e(l + ">a");
				s.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(i) {
					function r(e, a) {
						n.scrollAmount = o.snapAmount || o.scrollButtons.scrollAmount, j(t, e, a)
					}
					if(i.preventDefault(), et(i)) {
						var l = e(this).attr("class");
						switch(n.type = o.scrollButtons.scrollType, i.type) {
							case "mousedown":
							case "touchstart":
							case "pointerdown":
							case "MSPointerDown":
								if("stepped" === n.type) return;
								u = !0, a.tweenRunning = !1, r("on", l);
								break;
							case "mouseup":
							case "touchend":
							case "pointerup":
							case "MSPointerUp":
							case "mouseout":
							case "pointerout":
							case "MSPointerOut":
								if("stepped" === n.type) return;
								u = !1, n.dir && r("off", l);
								break;
							case "click":
								if("stepped" !== n.type || a.tweenRunning) return;
								r("on", l)
						}
					}
				})
			},
			q = function() {
				var t = e(this),
					o = t.data(i),
					n = o.opt,
					r = o.sequential,
					l = i + "_" + o.idx,
					s = e("#mCSB_" + o.idx),
					c = e("#mCSB_" + o.idx + "_container"),
					d = c.parent(),
					u = "input,textarea,select,datalist,keygen,[contenteditable='true']";
				s.attr("tabindex", "0").bind("blur." + l + " keydown." + l + " keyup." + l, function(i) {
					function l(e, a) {
						r.type = n.keyboard.scrollType, r.scrollAmount = n.snapAmount || n.keyboard.scrollAmount, "stepped" === r.type && o.tweenRunning || j(t, e, a)
					}
					switch(i.type) {
						case "blur":
							o.tweenRunning && r.dir && l("off", null);
							break;
						case "keydown":
						case "keyup":
							var s = i.keyCode ? i.keyCode : i.which,
								f = "on";
							if("x" !== n.axis && (38 === s || 40 === s) || "y" !== n.axis && (37 === s || 39 === s)) {
								if((38 === s || 40 === s) && !o.overflowed[0] || (37 === s || 39 === s) && !o.overflowed[1]) return;
								"keyup" === i.type && (f = "off"), e(a.activeElement).is(u) || (i.preventDefault(), i.stopImmediatePropagation(), l(f, s))
							} else if(33 === s || 34 === s) {
								if((o.overflowed[0] || o.overflowed[1]) && (i.preventDefault(), i.stopImmediatePropagation()), "keyup" === i.type) {
									Q(t);
									var h = 34 === s ? -1 : 1;
									if("x" === n.axis || "yx" === n.axis && o.overflowed[1] && !o.overflowed[0]) var m = "x",
										p = Math.abs(c[0].offsetLeft) - .9 * h * d.width();
									else var m = "y",
										p = Math.abs(c[0].offsetTop) - .9 * h * d.height();
									G(t, p.toString(), {
										dir: m,
										scrollEasing: "mcsEaseInOut"
									})
								}
							} else if((35 === s || 36 === s) && !e(a.activeElement).is(u) && ((o.overflowed[0] || o.overflowed[1]) && (i.preventDefault(), i.stopImmediatePropagation()), "keyup" === i.type)) {
								if("x" === n.axis || "yx" === n.axis && o.overflowed[1] && !o.overflowed[0]) var m = "x",
									p = 35 === s ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
								else var m = "y",
									p = 35 === s ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
								G(t, p.toString(), {
									dir: m,
									scrollEasing: "mcsEaseInOut"
								})
							}
					}
				})
			},
			j = function(t, a, o, n, r) {
				function l(e) {
					var a = "stepped" !== u.type,
						o = r ? r : e ? a ? p / 1.5 : g : 1e3 / 60,
						i = e ? a ? 7.5 : 40 : 2.5,
						s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
						d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
						f = "x" === u.dir[0] ? s[1] + u.dir[1] * d[1] * i : s[0] + u.dir[1] * d[0] * i,
						m = "x" === u.dir[0] ? s[1] + u.dir[1] * parseInt(u.scrollAmount) : s[0] + u.dir[1] * parseInt(u.scrollAmount),
						v = "auto" !== u.scrollAmount ? m : f,
						x = n ? n : e ? a ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
						_ = e ? !0 : !1;
					return e && 17 > o && (v = "x" === u.dir[0] ? s[1] : s[0]), G(t, v.toString(), {
						dir: u.dir[0],
						scrollEasing: x,
						dur: o,
						onComplete: _
					}), e ? void(u.dir = !1) : (clearTimeout(u.step), void(u.step = setTimeout(function() {
						l()
					}, o)))
				}

				function s() {
					clearTimeout(u.step), $(u, "step"), Q(t)
				}
				var c = t.data(i),
					d = c.opt,
					u = c.sequential,
					h = e("#mCSB_" + c.idx + "_container"),
					m = "stepped" === u.type ? !0 : !1,
					p = d.scrollInertia < 26 ? 26 : d.scrollInertia,
					g = d.scrollInertia < 1 ? 17 : d.scrollInertia;
				switch(a) {
					case "on":
						if(u.dir = [o === f[16] || o === f[15] || 39 === o || 37 === o ? "x" : "y", o === f[13] || o === f[15] || 38 === o || 37 === o ? -1 : 1], Q(t), at(o) && "stepped" === u.type) return;
						l(m);
						break;
					case "off":
						s(), (m || c.tweenRunning && u.dir) && l(!0)
				}
			},
			Y = function(t) {
				var a = e(this).data(i).opt,
					o = [];
				return "function" == typeof t && (t = t()), t instanceof Array ? o = t.length > 1 ? [t[0], t[1]] : "x" === a.axis ? [null, t[0]] : [t[0], null] : (o[0] = t.y ? t.y : t.x || "x" === a.axis ? null : t, o[1] = t.x ? t.x : t.y || "y" === a.axis ? null : t), "function" == typeof o[0] && (o[0] = o[0]()), "function" == typeof o[1] && (o[1] = o[1]()), o
			},
			X = function(t, a) {
				if(null != t && "undefined" != typeof t) {
					var o = e(this),
						n = o.data(i),
						r = n.opt,
						l = e("#mCSB_" + n.idx + "_container"),
						s = l.parent(),
						c = typeof t;
					a || (a = "x" === r.axis ? "x" : "y");
					var d = "x" === a ? l.outerWidth(!1) : l.outerHeight(!1),
						u = "x" === a ? l[0].offsetLeft : l[0].offsetTop,
						f = "x" === a ? "left" : "top";
					switch(c) {
						case "function":
							return t();
						case "object":
							var m = t.jquery ? t : e(t);
							if(!m.length) return;
							return "x" === a ? ot(m)[1] : ot(m)[0];
						case "string":
						case "number":
							if(at(t)) return Math.abs(t);
							if(-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
							if(-1 !== t.indexOf("-=")) return Math.abs(u - parseInt(t.split("-=")[1]));
							if(-1 !== t.indexOf("+=")) {
								var p = u + parseInt(t.split("+=")[1]);
								return p >= 0 ? 0 : Math.abs(p)
							}
							if(-1 !== t.indexOf("px") && at(t.split("px")[0])) return Math.abs(t.split("px")[0]);
							if("top" === t || "left" === t) return 0;
							if("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
							if("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
							if("first" === t || "last" === t) {
								var m = l.find(":" + t);
								return "x" === a ? ot(m)[1] : ot(m)[0]
							}
							return e(t).length ? "x" === a ? ot(e(t))[1] : ot(e(t))[0] : (l.css(f, t), void h.update.call(null, o[0]))
					}
				}
			},
			N = function(t) {
				function a() {
					clearTimeout(u[0].autoUpdate), u[0].autoUpdate = setTimeout(function() {
						return d.advanced.updateOnSelectorChange && (m = r(), m !== S) ? (l(3), void(S = m)) : (d.advanced.updateOnContentResize && (p = [u.outerHeight(!1), u.outerWidth(!1), v.height(), v.width(), _()[0], _()[1]], (p[0] !== w[0] || p[1] !== w[1] || p[2] !== w[2] || p[3] !== w[3] || p[4] !== w[4] || p[5] !== w[5]) && (l(p[0] !== w[0] || p[1] !== w[1]), w = p)), d.advanced.updateOnImageLoad && (g = o(), g !== b && (u.find("img").each(function() {
							n(this)
						}), b = g)), void((d.advanced.updateOnSelectorChange || d.advanced.updateOnContentResize || d.advanced.updateOnImageLoad) && a()))
					}, 60)
				}

				function o() {
					var e = 0;
					return d.advanced.updateOnImageLoad && (e = u.find("img").length), e
				}

				function n(t) {
					function a(e, t) {
						return function() {
							return t.apply(e, arguments)
						}
					}

					function o() {
						this.onload = null, e(t).addClass(f[2]), l(2)
					}
					if(e(t).hasClass(f[2])) return void l();
					var n = new Image;
					n.onload = a(n, o), n.src = t.src
				}

				function r() {
					d.advanced.updateOnSelectorChange === !0 && (d.advanced.updateOnSelectorChange = "*");
					var t = 0,
						a = u.find(d.advanced.updateOnSelectorChange);
					return d.advanced.updateOnSelectorChange && a.length > 0 && a.each(function() {
						t += e(this).height() + e(this).width()
					}), t
				}

				function l(e) {
					clearTimeout(u[0].autoUpdate), h.update.call(null, s[0], e)
				}
				var s = e(this),
					c = s.data(i),
					d = c.opt,
					u = e("#mCSB_" + c.idx + "_container");
				if(t) return clearTimeout(u[0].autoUpdate), void $(u[0], "autoUpdate");
				var m, p, g, v = u.parent(),
					x = [e("#mCSB_" + c.idx + "_scrollbar_vertical"), e("#mCSB_" + c.idx + "_scrollbar_horizontal")],
					_ = function() {
						return [x[0].is(":visible") ? x[0].outerHeight(!0) : 0, x[1].is(":visible") ? x[1].outerWidth(!0) : 0]
					},
					S = r(),
					w = [u.outerHeight(!1), u.outerWidth(!1), v.height(), v.width(), _()[0], _()[1]],
					b = o();
				a()
			},
			V = function(e, t, a) {
				return Math.round(e / t) * t - a
			},
			Q = function(t) {
				var a = t.data(i),
					o = e("#mCSB_" + a.idx + "_container,#mCSB_" + a.idx + "_container_wrapper,#mCSB_" + a.idx + "_dragger_vertical,#mCSB_" + a.idx + "_dragger_horizontal");
				o.each(function() {
					Z.call(this)
				})
			},
			G = function(t, a, o) {
				function n(e) {
					return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
				}

				function r() {
					return [c.callbacks.alwaysTriggerOffsets || _ >= S[0] + b, c.callbacks.alwaysTriggerOffsets || -C >= _]
				}

				function l() {
					var e = [h[0].offsetTop, h[0].offsetLeft],
						a = [v[0].offsetTop, v[0].offsetLeft],
						n = [h.outerHeight(!1), h.outerWidth(!1)],
						i = [f.height(), f.width()];
					t[0].mcs = {
						content: h,
						top: e[0],
						left: e[1],
						draggerTop: a[0],
						draggerLeft: a[1],
						topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(n[0]) - i[0])),
						leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(n[1]) - i[1])),
						direction: o.dir
					}
				}
				var s = t.data(i),
					c = s.opt,
					d = {
						trigger: "internal",
						dir: "y",
						scrollEasing: "mcsEaseOut",
						drag: !1,
						dur: c.scrollInertia,
						overwrite: "all",
						callbacks: !0,
						onStart: !0,
						onUpdate: !0,
						onComplete: !0
					},
					o = e.extend(d, o),
					u = [o.dur, o.drag ? 0 : o.dur],
					f = e("#mCSB_" + s.idx),
					h = e("#mCSB_" + s.idx + "_container"),
					m = h.parent(),
					p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
					g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
				if(s.trigger = o.trigger, (0 !== m.scrollTop() || 0 !== m.scrollLeft()) && (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== a || s.contentReset.y || (n("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== a || s.contentReset.x || (n("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== a && "_resetX" !== a) {
					switch(!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (n("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (n("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount && (a = V(a, c.snapAmount, c.snapOffset)), o.dir) {
						case "x":
							var v = e("#mCSB_" + s.idx + "_dragger_horizontal"),
								x = "left",
								_ = h[0].offsetLeft,
								S = [f.width() - h.outerWidth(!1), v.parent().width() - v.width()],
								w = [a, 0 === a ? 0 : a / s.scrollRatio.x],
								b = p[1],
								C = g[1],
								y = b > 0 ? b / s.scrollRatio.x : 0,
								B = C > 0 ? C / s.scrollRatio.x : 0;
							break;
						case "y":
							var v = e("#mCSB_" + s.idx + "_dragger_vertical"),
								x = "top",
								_ = h[0].offsetTop,
								S = [f.height() - h.outerHeight(!1), v.parent().height() - v.height()],
								w = [a, 0 === a ? 0 : a / s.scrollRatio.y],
								b = p[0],
								C = g[0],
								y = b > 0 ? b / s.scrollRatio.y : 0,
								B = C > 0 ? C / s.scrollRatio.y : 0
					}
					w[1] < 0 || 0 === w[0] && 0 === w[1] ? w = [0, 0] : w[1] >= S[1] ? w = [S[0], S[1]] : w[0] = -w[0], t[0].mcs || (l(), n("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), (s.tweenRunning || !(0 === _ && w[0] >= 0 || _ === S[0] && w[0] <= S[0])) && (J(v[0], x, Math.round(w[1]), u[1], o.scrollEasing), J(h[0], x, Math.round(w[0]), u[0], o.scrollEasing, o.overwrite, {
						onStart: function() {
							o.callbacks && o.onStart && !s.tweenRunning && (n("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, T(v), s.cbOffsets = r())
						},
						onUpdate: function() {
							o.callbacks && o.onUpdate && n("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]))
						},
						onComplete: function() {
							if(o.callbacks && o.onComplete) {
								"yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
								var e = h[0].idleTimer || 0;
								h[0].onCompleteTimeout = setTimeout(function() {
									n("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), n("onTotalScroll") && w[1] >= S[1] - y && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), n("onTotalScrollBack") && w[1] <= B && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, T(v, "hide")
								}, e)
							}
						}
					}))
				}
			},
			J = function(e, a, o, n, i, r, l) {
				function s() {
					b.stop || (_ || p.call(), _ = K() - x, c(), _ >= b.time && (b.time = _ > b.time ? _ + h - (_ - b.time) : _ + h - 1, b.time < _ + 1 && (b.time = _ + 1)), b.time < n ? b.id = m(s) : v.call())
				}

				function c() {
					n > 0 ? (b.currVal = f(b.time, S, C, n, i), w[a] = Math.round(b.currVal) + "px") : w[a] = o + "px", g.call()
				}

				function d() {
					h = 1e3 / 60, b.time = _ + h, m = t.requestAnimationFrame ? t.requestAnimationFrame : function(e) {
						return c(), setTimeout(e, .01)
					}, b.id = m(s)
				}

				function u() {
					null != b.id && (t.requestAnimationFrame ? t.cancelAnimationFrame(b.id) : clearTimeout(b.id), b.id = null)
				}

				function f(e, t, a, o, n) {
					switch(n) {
						case "linear":
						case "mcsLinear":
							return a * e / o + t;
						case "mcsLinearOut":
							return e /= o, e--, a * Math.sqrt(1 - e * e) + t;
						case "easeInOutSmooth":
							return e /= o / 2, 1 > e ? a / 2 * e * e + t : (e--, -a / 2 * (e * (e - 2) - 1) + t);
						case "easeInOutStrong":
							return e /= o / 2, 1 > e ? a / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, a / 2 * (-Math.pow(2, -10 * e) + 2) + t);
						case "easeInOut":
						case "mcsEaseInOut":
							return e /= o / 2, 1 > e ? a / 2 * e * e * e + t : (e -= 2, a / 2 * (e * e * e + 2) + t);
						case "easeOutSmooth":
							return e /= o, e--, -a * (e * e * e * e - 1) + t;
						case "easeOutStrong":
							return a * (-Math.pow(2, -10 * e / o) + 1) + t;
						case "easeOut":
						case "mcsEaseOut":
						default:
							var i = (e /= o) * e,
								r = i * e;
							return t + a * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
					}
				}
				e._mTween || (e._mTween = {
					top: {},
					left: {}
				});
				var h, m, l = l || {},
					p = l.onStart || function() {},
					g = l.onUpdate || function() {},
					v = l.onComplete || function() {},
					x = K(),
					_ = 0,
					S = e.offsetTop,
					w = e.style,
					b = e._mTween[a];
				"left" === a && (S = e.offsetLeft);
				var C = o - S;
				b.stop = 0, "none" !== r && u(), d()
			},
			K = function() {
				return t.performance && t.performance.now ? t.performance.now() : t.performance && t.performance.webkitNow ? t.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
			},
			Z = function() {
				var e = this;
				e._mTween || (e._mTween = {
					top: {},
					left: {}
				});
				for(var a = ["top", "left"], o = 0; o < a.length; o++) {
					var n = a[o];
					e._mTween[n].id && (t.requestAnimationFrame ? t.cancelAnimationFrame(e._mTween[n].id) : clearTimeout(e._mTween[n].id), e._mTween[n].id = null, e._mTween[n].stop = 1)
				}
			},
			$ = function(e, t) {
				try {
					delete e[t]
				} catch(a) {
					e[t] = null
				}
			},
			et = function(e) {
				return !(e.which && 1 !== e.which)
			},
			tt = function(e) {
				var t = e.originalEvent.pointerType;
				return !(t && "touch" !== t && 2 !== t)
			},
			at = function(e) {
				return !isNaN(parseFloat(e)) && isFinite(e)
			},
			ot = function(e) {
				var t = e.parents(".mCSB_container");
				return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
			};
		e.fn[n] = function(t) {
			return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : h.init.apply(this, arguments)
		}, e[n] = function(t) {
			return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : h.init.apply(this, arguments)
		}, e[n].defaults = l, t[n] = !0, e(t).load(function() {
			e(r)[n](), e.extend(e.expr[":"], {
				mcsInView: e.expr[":"].mcsInView || function(t) {
					var a, o, n = e(t),
						i = n.parents(".mCSB_container");
					if(i.length) return a = i.parent(), o = [i[0].offsetTop, i[0].offsetLeft], o[0] + ot(n)[0] >= 0 && o[0] + ot(n)[0] < a.height() - n.outerHeight(!1) && o[1] + ot(n)[1] >= 0 && o[1] + ot(n)[1] < a.width() - n.outerWidth(!1)
				},
				mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
					var a = e(t).data(i);
					if(a) return a.overflowed[0] || a.overflowed[1]
				}
			})
		})
	})
}(jQuery, window, document);