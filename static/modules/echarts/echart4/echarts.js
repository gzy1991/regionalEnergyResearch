!
function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
} (this,
function(t) {
	"use strict";
	function e(t, e) {
		"createCanvas" === techarts.min.js && (Ox = null),
		kx[t] = e
	}
	function i(t) {
		if (null == t || "object" != typeof t) return t;
		var e = t,
		n = Mx.call(t);
		if ("[object Array]" === n) {
			if (!N(t)) {
				e = [];
				for (var o = 0,
				a = t.length; o < a; o++) e[o] = i(t[o])
			}
		} else if (Sx[n]) {
			if (!N(t)) {
				var r = t.constructor;
				if (t.constructor.from) e = r.from(t);
				else {
					e = new r(t.length);
					for (var o = 0,
					a = t.length; o < a; o++) e[o] = i(t[o])
				}
			}
		} else if (!bx[n] && !N(t) && !M(t)) {
			e = {};
			for (var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]))
		}
		return e
	}
	function n(t, e, o) {
		if (!w(e) || !w(t)) return o ? i(e) : t;
		for (var a in e) if (e.hasOwnProperty(a)) {
			var r = t[a],
			s = e[a]; ! w(s) || !w(r) || y(s) || y(r) || M(s) || M(r) || b(s) || b(r) || N(s) || N(r) ? !o && a in t || (t[a] = i(e[a], !0)) : n(r, s, o)
		}
		return t
	}
	function o(t, e) {
		for (var i = t[0], o = 1, a = t.length; o < a; o++) i = n(i, t[o], e);
		return i
	}
	function a(t, e) {
		for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
		return t
	}
	function r(t, e, i) {
		for (var n in e) e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
		return t
	}
	function s() {
		return Ox || (Ox = Px().getContext("2d")),
		Ox
	}
	function l(t, e) {
		if (t) {
			if (t.indexOf) return t.indexOf(e);
			for (var i = 0,
			n = t.length; i < n; i++) if (t[i] === e) return i
		}
		return - 1
	}
	function h(t, e) {
		function i() {}
		var n = t.prototype;
		i.prototype = e.prototype,
		t.prototype = new i;
		for (var o in n) t.prototype[o] = n[o];
		t.prototype.constructor = t,
		t.superClass = e
	}
	function u(t, e, i) {
		r(t = "prototype" in t ? t.prototype: t, e = "prototype" in e ? e.prototype: e, i)
	}
	function c(t) {
		if (t) return "string" != typeof t && "number" == typeof t.length
	}
	function d(t, e, i) {
		if (t && e) if (t.forEach && t.forEach === Tx) t.forEach(e, i);
		else if (t.length === +t.length) for (var n = 0,
		o = t.length; n < o; n++) e.call(i, t[n], n, t);
		else for (var a in t) t.hasOwnProperty(a) && e.call(i, t[a], a, t)
	}
	function f(t, e, i) {
		if (t && e) {
			if (t.map && t.map === Cx) return t.map(e, i);
			for (var n = [], o = 0, a = t.length; o < a; o++) n.push(e.call(i, t[o], o, t));
			return n
		}
	}
	function p(t, e, i, n) {
		if (t && e) {
			if (t.reduce && t.reduce === Lx) return t.reduce(e, i, n);
			for (var o = 0,
			a = t.length; o < a; o++) i = e.call(n, i, t[o], o, t);
			return i
		}
	}
	function g(t, e, i) {
		if (t && e) {
			if (t.filter && t.filter === Ax) return t.filter(e, i);
			for (var n = [], o = 0, a = t.length; o < a; o++) e.call(i, t[o], o, t) && n.push(t[o]);
			return n
		}
	}
	function m(t, e) {
		var i = Dx.call(arguments, 2);
		return function() {
			return t.apply(e, i.concat(Dx.call(arguments)))
		}
	}
	function v(t) {
		var e = Dx.call(arguments, 1);
		return function() {
			return t.apply(this, e.concat(Dx.call(arguments)))
		}
	}
	function y(t) {
		return "[object Array]" === Mx.call(t)
	}
	function x(t) {
		return "function" == typeof t
	}
	function _(t) {
		return "[object String]" === Mx.call(t)
	}
	function w(t) {
		var e = typeof t;
		return "function" === e || !!t && "object" == e
	}
	function b(t) {
		return !! bx[Mx.call(t)]
	}
	function S(t) {
		return !! Sx[Mx.call(t)]
	}
	function M(t) {
		return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
	}
	function I(t) {
		return t !== t
	}
	function T(t) {
		for (var e = 0,
		i = arguments.length; e < i; e++) if (null != arguments[e]) return arguments[e]
	}
	function A(t, e) {
		return null != t ? t: e
	}
	function D(t, e, i) {
		return null != t ? t: null != e ? e: i
	}
	function C() {
		return Function.call.apply(Dx, arguments)
	}
	function L(t) {
		if ("number" == typeof t) return [t, t, t, t];
		var e = t.length;
		return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
	}
	function k(t, e) {
		if (!t) throw new Error(e)
	}
	function P(t) {
		return null == t ? null: "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
	}
	function O(t) {
		t[Nx] = !0
	}
	function N(t) {
		return t[Nx]
	}
	function E(t) {
		function e(t, e) {
			i ? n.set(t, e) : n.set(e, t)
		}
		var i = y(t),
		n = this;
		t instanceof E ? t.each(e) : t && d(t, e)
	}
	function z(t) {
		return new E(t)
	}
	function R(t, e) {
		for (var i = new t.constructor(t.length + e.length), n = 0; n < t.length; n++) i[n] = t[n];
		var o = t.length;
		for (n = 0; n < e.length; n++) i[n + o] = e[n];
		return i
	}
	function B() {}
	function V(t, e) {
		var i = new zx(2);
		return null == t && (t = 0),
		null == e && (e = 0),
		i[0] = t,
		i[1] = e,
		i
	}
	function G(t, e) {
		return t[0] = e[0],
		t[1] = e[1],
		t
	}
	function W(t) {
		var e = new zx(2);
		return e[0] = t[0],
		e[1] = t[1],
		e
	}
	function F(t, e, i) {
		return t[0] = e,
		t[1] = i,
		t
	}
	function H(t, e, i) {
		return t[0] = e[0] + i[0],
		t[1] = e[1] + i[1],
		t
	}
	function Z(t, e, i, n) {
		return t[0] = e[0] + i[0] * n,
		t[1] = e[1] + i[1] * n,
		t
	}
	function U(t, e, i) {
		return t[0] = e[0] - i[0],
		t[1] = e[1] - i[1],
		t
	}
	function j(t) {
		return Math.sqrt(X(t))
	}
	function X(t) {
		return t[0] * t[0] + t[1] * t[1]
	}
	function Y(t, e, i) {
		return t[0] = e[0] * i,
		t[1] = e[1] * i,
		t
	}
	function q(t, e) {
		var i = j(e);
		return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i),
		t
	}
	function $(t, e) {
		return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
	}
	function K(t, e) {
		return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
	}
	function J(t, e, i, n) {
		return t[0] = e[0] + n * (i[0] - e[0]),
		t[1] = e[1] + n * (i[1] - e[1]),
		t
	}
	function Q(t, e, i) {
		var n = e[0],
		o = e[1];
		return t[0] = i[0] * n + i[2] * o + i[4],
		t[1] = i[1] * n + i[3] * o + i[5],
		t
	}
	function tt(t, e, i) {
		return t[0] = Math.min(e[0], i[0]),
		t[1] = Math.min(e[1], i[1]),
		t
	}
	function et(t, e, i) {
		return t[0] = Math.max(e[0], i[0]),
		t[1] = Math.max(e[1], i[1]),
		t
	}
	function it() {
		this.on("mousedown", this._dragStart, this),
		this.on("mousemove", this._drag, this),
		this.on("mouseup", this._dragEnd, this),
		this.on("globalout", this._dragEnd, this)
	}
	function nt(t, e) {
		return {
			target: t,
			topTarget: e && e.topTarget
		}
	}
	function ot(t, e, i) {
		return {
			type: t,
			event: i,
			target: e.target,
			topTarget: e.topTarget,
			cancelBubble: !1,
			offsetX: i.zrX,
			offsetY: i.zrY,
			gestureEvent: i.gestureEvent,
			pinchX: i.pinchX,
			pinchY: i.pinchY,
			pinchScale: i.pinchScale,
			wheelDelta: i.zrDelta,
			zrByTouch: i.zrByTouch,
			which: i.which
		}
	}
	function at() {}
	function rt(t, e, i) {
		if (t[t.rectHover ? "rectContain": "contain"](e, i)) {
			for (var n, o = t; o;) {
				if (o.clipPath && !o.clipPath.contain(e, i)) return ! 1;
				o.silent && (n = !0),
				o = o.parent
			}
			return ! n || Zx
		}
		return ! 1
	}
	function st() {
		var t = new Xx(6);
		return lt(t),
		t
	}
	function lt(t) {
		return t[0] = 1,
		t[1] = 0,
		t[2] = 0,
		t[3] = 1,
		t[4] = 0,
		t[5] = 0,
		t
	}
	function ht(t, e) {
		return t[0] = e[0],
		t[1] = e[1],
		t[2] = e[2],
		t[3] = e[3],
		t[4] = e[4],
		t[5] = e[5],
		t
	}
	function ut(t, e, i) {
		var n = e[0] * i[0] + e[2] * i[1],
		o = e[1] * i[0] + e[3] * i[1],
		a = e[0] * i[2] + e[2] * i[3],
		r = e[1] * i[2] + e[3] * i[3],
		s = e[0] * i[4] + e[2] * i[5] + e[4],
		l = e[1] * i[4] + e[3] * i[5] + e[5];
		return t[0] = n,
		t[1] = o,
		t[2] = a,
		t[3] = r,
		t[4] = s,
		t[5] = l,
		t
	}
	function ct(t, e, i) {
		return t[0] = e[0],
		t[1] = e[1],
		t[2] = e[2],
		t[3] = e[3],
		t[4] = e[4] + i[0],
		t[5] = e[5] + i[1],
		t
	}
	function dt(t, e, i) {
		var n = e[0],
		o = e[2],
		a = e[4],
		r = e[1],
		s = e[3],
		l = e[5],
		h = Math.sin(i),
		u = Math.cos(i);
		return t[0] = n * u + r * h,
		t[1] = -n * h + r * u,
		t[2] = o * u + s * h,
		t[3] = -o * h + u * s,
		t[4] = u * a + h * l,
		t[5] = u * l - h * a,
		t
	}
	function ft(t, e, i) {
		var n = i[0],
		o = i[1];
		return t[0] = e[0] * n,
		t[1] = e[1] * o,
		t[2] = e[2] * n,
		t[3] = e[3] * o,
		t[4] = e[4] * n,
		t[5] = e[5] * o,
		t
	}
	function pt(t, e) {
		var i = e[0],
		n = e[2],
		o = e[4],
		a = e[1],
		r = e[3],
		s = e[5],
		l = i * r - a * n;
		return l ? (l = 1 / l, t[0] = r * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - r * o) * l, t[5] = (a * o - i * s) * l, t) : null
	}
	function gt(t) {
		var e = st();
		return ht(e, t),
		e
	}
	function mt(t) {
		return t > $x || t < -$x
	}
	function vt(t) {
		this._target = t.target,
		this._life = t.life || 1e3,
		this._delay = t.delay || 0,
		this._initialized = !1,
		this.loop = null != t.loop && t.loop,
		this.gap = t.gap || 0,
		this.easing = t.easing || "Linear",
		this.onframe = t.onframe,
		this.ondestroy = t.ondestroy,
		this.onrestart = t.onrestart,
		this._pausedTime = 0,
		this._paused = !1
	}
	function yt(t) {
		return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
	}
	function xt(t) {
		return (t = Math.round(t)) < 0 ? 0 : t > 360 ? 360 : t
	}
	function _t(t) {
		return t < 0 ? 0 : t > 1 ? 1 : t
	}
	function wt(t) {
		return yt(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
	}
	function bt(t) {
		return _t(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
	}
	function St(t, e, i) {
		return i < 0 ? i += 1 : i > 1 && (i -= 1),
		6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e: 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
	}
	function Mt(t, e, i) {
		return t + (e - t) * i
	}
	function It(t, e, i, n, o) {
		return t[0] = e,
		t[1] = i,
		t[2] = n,
		t[3] = o,
		t
	}
	function Tt(t, e) {
		return t[0] = e[0],
		t[1] = e[1],
		t[2] = e[2],
		t[3] = e[3],
		t
	}
	function At(t, e) {
		l_ && Tt(l_, e),
		l_ = s_.put(t, l_ || e.slice())
	}
	function Dt(t, e) {
		if (t) {
			e = e || [];
			var i = s_.get(t);
			if (i) return Tt(e, i);
			var n = (t += "").replace(/ /g, "").toLowerCase();
			if (n in r_) return Tt(e, r_[n]),
			At(t, e),
			e;
			if ("#" !== n.charAt(0)) {
				var o = n.indexOf("("),
				a = n.indexOf(")");
				if ( - 1 !== o && a + 1 === n.length) {
					var r = n.substr(0, o),
					s = n.substr(o + 1, a - (o + 1)).split(","),
					l = 1;
					switch (r) {
					case "rgba":
						if (4 !== s.length) return void It(e, 0, 0, 0, 1);
						l = bt(s.pop());
					case "rgb":
						return 3 !== s.length ? void It(e, 0, 0, 0, 1) : (It(e, wt(s[0]), wt(s[1]), wt(s[2]), l), At(t, e), e);
					case "hsla":
						return 4 !== s.length ? void It(e, 0, 0, 0, 1) : (s[3] = bt(s[3]), Ct(s, e), At(t, e), e);
					case "hsl":
						return 3 !== s.length ? void It(e, 0, 0, 0, 1) : (Ct(s, e), At(t, e), e);
					default:
						return
					}
				}
				It(e, 0, 0, 0, 1)
			} else {
				if (4 === n.length) return (h = parseInt(n.substr(1), 16)) >= 0 && h <= 4095 ? (It(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), At(t, e), e) : void It(e, 0, 0, 0, 1);
				if (7 === n.length) {
					var h = parseInt(n.substr(1), 16);
					return h >= 0 && h <= 16777215 ? (It(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), At(t, e), e) : void It(e, 0, 0, 0, 1)
				}
			}
		}
	}
	function Ct(t, e) {
		var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
		n = bt(t[1]),
		o = bt(t[2]),
		a = o <= .5 ? o * (n + 1) : o + n - o * n,
		r = 2 * o - a;
		return e = e || [],
		It(e, yt(255 * St(r, a, i + 1 / 3)), yt(255 * St(r, a, i)), yt(255 * St(r, a, i - 1 / 3)), 1),
		4 === t.length && (e[3] = t[3]),
		e
	}
	function Lt(t) {
		if (t) {
			var e, i, n = t[0] / 255,
			o = t[1] / 255,
			a = t[2] / 255,
			r = Math.min(n, o, a),
			s = Math.max(n, o, a),
			l = s - r,
			h = (s + r) / 2;
			if (0 === l) e = 0,
			i = 0;
			else {
				i = h < .5 ? l / (s + r) : l / (2 - s - r);
				var u = ((s - n) / 6 + l / 2) / l,
				c = ((s - o) / 6 + l / 2) / l,
				d = ((s - a) / 6 + l / 2) / l;
				n === s ? e = d - c: o === s ? e = 1 / 3 + u - d: a === s && (e = 2 / 3 + c - u),
				e < 0 && (e += 1),
				e > 1 && (e -= 1)
			}
			var f = [360 * e, i, h];
			return null != t[3] && f.push(t[3]),
			f
		}
	}
	function kt(t, e) {
		var i = Dt(t);
		if (i) {
			for (var n = 0; n < 3; n++) i[n] = e < 0 ? i[n] * (1 - e) | 0 : (255 - i[n]) * e + i[n] | 0;
			return Rt(i, 4 === i.length ? "rgba": "rgb")
		}
	}
	function Pt(t) {
		var e = Dt(t);
		if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
	}
	function Ot(t, e, i) {
		if (e && e.length && t >= 0 && t <= 1) {
			i = i || [];
			var n = t * (e.length - 1),
			o = Math.floor(n),
			a = Math.ceil(n),
			r = e[o],
			s = e[a],
			l = n - o;
			return i[0] = yt(Mt(r[0], s[0], l)),
			i[1] = yt(Mt(r[1], s[1], l)),
			i[2] = yt(Mt(r[2], s[2], l)),
			i[3] = _t(Mt(r[3], s[3], l)),
			i
		}
	}
	function Nt(t, e, i) {
		if (e && e.length && t >= 0 && t <= 1) {
			var n = t * (e.length - 1),
			o = Math.floor(n),
			a = Math.ceil(n),
			r = Dt(e[o]),
			s = Dt(e[a]),
			l = n - o,
			h = Rt([yt(Mt(r[0], s[0], l)), yt(Mt(r[1], s[1], l)), yt(Mt(r[2], s[2], l)), _t(Mt(r[3], s[3], l))], "rgba");
			return i ? {
				color: h,
				leftIndex: o,
				rightIndex: a,
				value: n
			}: h
		}
	}
	function Et(t, e, i, n) {
		if (t = Dt(t)) return t = Lt(t),
		null != e && (t[0] = xt(e)),
		null != i && (t[1] = bt(i)),
		null != n && (t[2] = bt(n)),
		Rt(Ct(t), "rgba")
	}
	function zt(t, e) {
		if ((t = Dt(t)) && null != e) return t[3] = _t(e),
		Rt(t, "rgba")
	}
	function Rt(t, e) {
		if (t && t.length) {
			var i = t[0] + "," + t[1] + "," + t[2];
			return "rgba" !== e && "hsva" !== e && "hsla" !== e || (i += "," + t[3]),
			e + "(" + i + ")"
		}
	}
	function Bt(t, e) {
		return t[e]
	}
	function Vt(t, e, i) {
		t[e] = i
	}
	function Gt(t, e, i) {
		return (e - t) * i + t
	}
	function Wt(t, e, i) {
		return i > .5 ? e: t
	}
	function Ft(t, e, i, n, o) {
		var a = t.length;
		if (1 == o) for (s = 0; s < a; s++) n[s] = Gt(t[s], e[s], i);
		else for (var r = a && t[0].length, s = 0; s < a; s++) for (var l = 0; l < r; l++) n[s][l] = Gt(t[s][l], e[s][l], i)
	}
	function Ht(t, e, i) {
		var n = t.length,
		o = e.length;
		if (n !== o) if (n > o) t.length = o;
		else for (r = n; r < o; r++) t.push(1 === i ? e[r] : d_.call(e[r]));
		for (var a = t[0] && t[0].length, r = 0; r < t.length; r++) if (1 === i) isNaN(t[r]) && (t[r] = e[r]);
		else for (var s = 0; s < a; s++) isNaN(t[r][s]) && (t[r][s] = e[r][s])
	}
	function Zt(t, e, i) {
		if (t === e) return ! 0;
		var n = t.length;
		if (n !== e.length) return ! 1;
		if (1 === i) {
			for (a = 0; a < n; a++) if (t[a] !== e[a]) return ! 1
		} else for (var o = t[0].length, a = 0; a < n; a++) for (var r = 0; r < o; r++) if (t[a][r] !== e[a][r]) return ! 1;
		return ! 0
	}
	function Ut(t, e, i, n, o, a, r, s, l) {
		var h = t.length;
		if (1 == l) for (c = 0; c < h; c++) s[c] = jt(t[c], e[c], i[c], n[c], o, a, r);
		else for (var u = t[0].length, c = 0; c < h; c++) for (var d = 0; d < u; d++) s[c][d] = jt(t[c][d], e[c][d], i[c][d], n[c][d], o, a, r)
	}
	function jt(t, e, i, n, o, a, r) {
		var s = .5 * (i - t),
		l = .5 * (n - e);
		return (2 * (e - i) + s + l) * r + ( - 3 * (e - i) - 2 * s - l) * a + s * o + e
	}
	function Xt(t) {
		if (c(t)) {
			var e = t.length;
			if (c(t[0])) {
				for (var i = [], n = 0; n < e; n++) i.push(d_.call(t[n]));
				return i
			}
			return d_.call(t)
		}
		return t
	}
	function Yt(t) {
		return t[0] = Math.floor(t[0]),
		t[1] = Math.floor(t[1]),
		t[2] = Math.floor(t[2]),
		"rgba(" + t.join(",") + ")"
	}
	function qt(t) {
		var e = t[t.length - 1].value;
		return c(e && e[0]) ? 2 : 1
	}
	function $t(t, e, i, n, o, a) {
		var r = t._getter,
		s = t._setter,
		l = "spline" === e,
		h = n.length;
		if (h) {
			var u, d = c(n[0].value),
			f = !1,
			p = !1,
			g = d ? qt(n) : 0;
			n.sort(function(t, e) {
				return t.time - e.time
			}),
			u = n[h - 1].time;
			for (var m = [], v = [], y = n[0].value, x = !0, _ = 0; _ < h; _++) {
				m.push(n[_].time / u);
				var w = n[_].value;
				if (d && Zt(w, y, g) || !d && w === y || (x = !1), y = w, "string" == typeof w) {
					var b = Dt(w);
					b ? (w = b, f = !0) : p = !0
				}
				v.push(w)
			}
			if (a || !x) {
				for (var S = v[h - 1], _ = 0; _ < h - 1; _++) d ? Ht(v[_], S, g) : !isNaN(v[_]) || isNaN(S) || p || f || (v[_] = S);
				d && Ht(r(t._target, o), S, g);
				var M, I, T, A, D, C, L = 0,
				k = 0;
				if (f) var P = [0, 0, 0, 0];
				var O = new vt({
					target: t._target,
					life: u,
					loop: t._loop,
					delay: t._delay,
					onframe: function(t, e) {
						var i;
						if (e < 0) i = 0;
						else if (e < k) {
							for (i = M = Math.min(L + 1, h - 1); i >= 0 && !(m[i] <= e); i--);
							i = Math.min(i, h - 2)
						} else {
							for (i = L; i < h && !(m[i] > e); i++);
							i = Math.min(i - 1, h - 2)
						}
						L = i,
						k = e;
						var n = m[i + 1] - m[i];
						if (0 !== n) if (I = (e - m[i]) / n, l) if (A = v[i], T = v[0 === i ? i: i - 1], D = v[i > h - 2 ? h - 1 : i + 1], C = v[i > h - 3 ? h - 1 : i + 2], d) Ut(T, A, D, C, I, I * I, I * I * I, r(t, o), g);
						else {
							if (f) a = Ut(T, A, D, C, I, I * I, I * I * I, P, 1),
							a = Yt(P);
							else {
								if (p) return Wt(A, D, I);
								a = jt(T, A, D, C, I, I * I, I * I * I)
							}
							s(t, o, a)
						} else if (d) Ft(v[i], v[i + 1], I, r(t, o), g);
						else {
							var a;
							if (f) Ft(v[i], v[i + 1], I, P, 1),
							a = Yt(P);
							else {
								if (p) return Wt(v[i], v[i + 1], I);
								a = Gt(v[i], v[i + 1], I)
							}
							s(t, o, a)
						}
					},
					ondestroy: i
				});
				return e && "spline" !== e && (O.easing = e),
				O
			}
		}
	}
	function Kt(t, e, i, n) {
		i < 0 && (t += i, i = -i),
		n < 0 && (e += n, n = -n),
		this.x = t,
		this.y = e,
		this.width = i,
		this.height = n
	}
	function Jt(t) {
		for (var e = 0; t >= M_;) e |= 1 & t,
		t >>= 1;
		return t + e
	}
	function Qt(t, e, i, n) {
		var o = e + 1;
		if (o === i) return 1;
		if (n(t[o++], t[e]) < 0) {
			for (; o < i && n(t[o], t[o - 1]) < 0;) o++;
			te(t, e, o)
		} else for (; o < i && n(t[o], t[o - 1]) >= 0;) o++;
		return o - e
	}
	function te(t, e, i) {
		for (i--; e < i;) {
			var n = t[e];
			t[e++] = t[i],
			t[i--] = n
		}
	}
	function ee(t, e, i, n, o) {
		for (n === e && n++; n < i; n++) {
			for (var a, r = t[n], s = e, l = n; s < l;) o(r, t[a = s + l >>> 1]) < 0 ? l = a: s = a + 1;
			var h = n - s;
			switch (h) {
			case 3:
				t[s + 3] = t[s + 2];
			case 2:
				t[s + 2] = t[s + 1];
			case 1:
				t[s + 1] = t[s];
				break;
			default:
				for (; h > 0;) t[s + h] = t[s + h - 1],
				h--
			}
			t[s] = r
		}
	}
	function ie(t, e, i, n, o, a) {
		var r = 0,
		s = 0,
		l = 1;
		if (a(t, e[i + o]) > 0) {
			for (s = n - o; l < s && a(t, e[i + o + l]) > 0;) r = l,
			(l = 1 + (l << 1)) <= 0 && (l = s);
			l > s && (l = s),
			r += o,
			l += o
		} else {
			for (s = o + 1; l < s && a(t, e[i + o - l]) <= 0;) r = l,
			(l = 1 + (l << 1)) <= 0 && (l = s);
			l > s && (l = s);
			var h = r;
			r = o - l,
			l = o - h
		}
		for (r++; r < l;) {
			var u = r + (l - r >>> 1);
			a(t, e[i + u]) > 0 ? r = u + 1 : l = u
		}
		return l
	}
	function ne(t, e, i, n, o, a) {
		var r = 0,
		s = 0,
		l = 1;
		if (a(t, e[i + o]) < 0) {
			for (s = o + 1; l < s && a(t, e[i + o - l]) < 0;) r = l,
			(l = 1 + (l << 1)) <= 0 && (l = s);
			l > s && (l = s);
			var h = r;
			r = o - l,
			l = o - h
		} else {
			for (s = n - o; l < s && a(t, e[i + o + l]) >= 0;) r = l,
			(l = 1 + (l << 1)) <= 0 && (l = s);
			l > s && (l = s),
			r += o,
			l += o
		}
		for (r++; r < l;) {
			var u = r + (l - r >>> 1);
			a(t, e[i + u]) < 0 ? l = u: r = u + 1
		}
		return l
	}
	function oe(t, e) {
		function i(i) {
			var s = a[i],
			h = r[i],
			u = a[i + 1],
			c = r[i + 1];
			r[i] = h + c,
			i === l - 3 && (a[i + 1] = a[i + 2], r[i + 1] = r[i + 2]),
			l--;
			var d = ne(t[u], t, s, h, 0, e);
			s += d,
			0 !== (h -= d) && 0 !== (c = ie(t[s + h - 1], t, u, c, c - 1, e)) && (h <= c ? n(s, h, u, c) : o(s, h, u, c))
		}
		function n(i, n, o, a) {
			var r = 0;
			for (r = 0; r < n; r++) h[r] = t[i + r];
			var l = 0,
			u = o,
			c = i;
			if (t[c++] = t[u++], 0 != --a) if (1 !== n) {
				for (var d, f, p, g = s;;) {
					d = 0,
					f = 0,
					p = !1;
					do {
						if (e(t[u], h[l]) < 0) {
							if (t[c++] = t[u++], f++, d = 0, 0 == --a) {
								p = !0;
								break
							}
						} else if (t[c++] = h[l++], d++, f = 0, 1 == --n) {
							p = !0;
							break
						}
					} while (( d | f ) < g);
					if (p) break;
					do {
						if (0 !== (d = ne(t[u], h, l, n, 0, e))) {
							for (r = 0; r < d; r++) t[c + r] = h[l + r];
							if (c += d, l += d, (n -= d) <= 1) {
								p = !0;
								break
							}
						}
						if (t[c++] = t[u++], 0 == --a) {
							p = !0;
							break
						}
						if (0 !== (f = ie(h[l], t, u, a, 0, e))) {
							for (r = 0; r < f; r++) t[c + r] = t[u + r];
							if (c += f, u += f, 0 === (a -= f)) {
								p = !0;
								break
							}
						}
						if (t[c++] = h[l++], 1 == --n) {
							p = !0;
							break
						}
						g--
					} while ( d >= I_ || f >= I_ );
					if (p) break;
					g < 0 && (g = 0),
					g += 2
				}
				if ((s = g) < 1 && (s = 1), 1 === n) {
					for (r = 0; r < a; r++) t[c + r] = t[u + r];
					t[c + a] = h[l]
				} else {
					if (0 === n) throw new Error;
					for (r = 0; r < n; r++) t[c + r] = h[l + r]
				}
			} else {
				for (r = 0; r < a; r++) t[c + r] = t[u + r];
				t[c + a] = h[l]
			} else for (r = 0; r < n; r++) t[c + r] = h[l + r]
		}
		function o(i, n, o, a) {
			var r = 0;
			for (r = 0; r < a; r++) h[r] = t[o + r];
			var l = i + n - 1,
			u = a - 1,
			c = o + a - 1,
			d = 0,
			f = 0;
			if (t[c--] = t[l--], 0 != --n) if (1 !== a) {
				for (var p = s;;) {
					var g = 0,
					m = 0,
					v = !1;
					do {
						if (e(h[u], t[l]) < 0) {
							if (t[c--] = t[l--], g++, m = 0, 0 == --n) {
								v = !0;
								break
							}
						} else if (t[c--] = h[u--], m++, g = 0, 1 == --a) {
							v = !0;
							break
						}
					} while (( g | m ) < p);
					if (v) break;
					do {
						if (0 != (g = n - ne(h[u], t, i, n, n - 1, e))) {
							for (n -= g, f = (c -= g) + 1, d = (l -= g) + 1, r = g - 1; r >= 0; r--) t[f + r] = t[d + r];
							if (0 === n) {
								v = !0;
								break
							}
						}
						if (t[c--] = h[u--], 1 == --a) {
							v = !0;
							break
						}
						if (0 != (m = a - ie(t[l], h, 0, a, a - 1, e))) {
							for (a -= m, f = (c -= m) + 1, d = (u -= m) + 1, r = 0; r < m; r++) t[f + r] = h[d + r];
							if (a <= 1) {
								v = !0;
								break
							}
						}
						if (t[c--] = t[l--], 0 == --n) {
							v = !0;
							break
						}
						p--
					} while ( g >= I_ || m >= I_ );
					if (v) break;
					p < 0 && (p = 0),
					p += 2
				}
				if ((s = p) < 1 && (s = 1), 1 === a) {
					for (f = (c -= n) + 1, d = (l -= n) + 1, r = n - 1; r >= 0; r--) t[f + r] = t[d + r];
					t[c] = h[u]
				} else {
					if (0 === a) throw new Error;
					for (d = c - (a - 1), r = 0; r < a; r++) t[d + r] = h[r]
				}
			} else {
				for (f = (c -= n) + 1, d = (l -= n) + 1, r = n - 1; r >= 0; r--) t[f + r] = t[d + r];
				t[c] = h[u]
			} else for (d = c - (a - 1), r = 0; r < a; r++) t[d + r] = h[r]
		}
		var a, r, s = I_,
		l = 0,
		h = [];
		a = [],
		r = [],
		this.mergeRuns = function() {
			for (; l > 1;) {
				var t = l - 2;
				if (t >= 1 && r[t - 1] <= r[t] + r[t + 1] || t >= 2 && r[t - 2] <= r[t] + r[t - 1]) r[t - 1] < r[t + 1] && t--;
				else if (r[t] > r[t + 1]) break;
				i(t)
			}
		},
		this.forceMergeRuns = function() {
			for (; l > 1;) {
				var t = l - 2;
				t > 0 && r[t - 1] < r[t + 1] && t--,
				i(t)
			}
		},
		this.pushRun = function(t, e) {
			a[l] = t,
			r[l] = e,
			l += 1
		}
	}
	function ae(t, e, i, n) {
		i || (i = 0),
		n || (n = t.length);
		var o = n - i;
		if (! (o < 2)) {
			var a = 0;
			if (o < M_) return a = Qt(t, i, n, e),
			void ee(t, i, n, i + a, e);
			var r = new oe(t, e),
			s = Jt(o);
			do {
				if ((a = Qt(t, i, n, e)) < s) {
					var l = o;
					l > s && (l = s),
					ee(t, i, i + l, i + a, e),
					a = l
				}
				r.pushRun(i, a), r.mergeRuns(), o -= a, i += a
			} while ( 0 !== o );
			r.forceMergeRuns()
		}
	}
	function re(t, e) {
		return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2: t.z - e.z: t.zlevel - e.zlevel
	}
	function se(t, e, i) {
		var n = null == e.x ? 0 : e.x,
		o = null == e.x2 ? 1 : e.x2,
		a = null == e.y ? 0 : e.y,
		r = null == e.y2 ? 0 : e.y2;
		return e.global || (n = n * i.width + i.x, o = o * i.width + i.x, a = a * i.height + i.y, r = r * i.height + i.y),
		t.createLinearGradient(n, a, o, r)
	}
	function le(t, e, i) {
		var n = i.width,
		o = i.height,
		a = Math.min(n, o),
		r = null == e.x ? .5 : e.x,
		s = null == e.y ? .5 : e.y,
		l = null == e.r ? .5 : e.r;
		return e.global || (r = r * n + i.x, s = s * o + i.y, l *= a),
		t.createRadialGradient(r, s, 0, r, s, l)
	}
	function he() {
		return ! 1
	}
	function ue(t, e, i) {
		var n = Px(),
		o = e.getWidth(),
		a = e.getHeight(),
		r = n.style;
		return r && (r.position = "absolute", r.left = 0, r.top = 0, r.width = o + "px", r.height = a + "px", n.setAttribute("data-zr-dom-id", t)),
		n.width = o * i,
		n.height = a * i,
		n
	}
	function ce(t) {
		if ("string" == typeof t) {
			var e = R_.get(t);
			return e && e.image
		}
		return t
	}
	function de(t, e, i, n, o) {
		if (t) {
			if ("string" == typeof t) {
				if (e && e.__zrImageSrc === t || !i) return e;
				var a = R_.get(t),
				r = {
					hostEl: i,
					cb: n,
					cbPayload: o
				};
				return a ? !pe(e = a.image) && a.pending.push(r) : (!e && (e = new Image), e.onload = fe, R_.put(t, e.__cachedImgObj = {
					image: e,
					pending: [r]
				}), e.src = e.__zrImageSrc = t),
				e
			}
			return t
		}
		return e
	}
	function fe() {
		var t = this.__cachedImgObj;
		this.onload = this.__cachedImgObj = null;
		for (var e = 0; e < t.pending.length; e++) {
			var i = t.pending[e],
			n = i.cb;
			n && n(this, i.cbPayload),
			i.hostEl.dirty()
		}
		t.pending.length = 0
	}
	function pe(t) {
		return t && t.width && t.height
	}
	function ge(t, e) {
		var i = t + ":" + (e = e || F_);
		if (B_[i]) return B_[i];
		for (var n = (t + "").split("\n"), o = 0, a = 0, r = n.length; a < r; a++) o = Math.max(Ae(n[a], e).width, o);
		return V_ > G_ && (V_ = 0, B_ = {}),
		V_++,
		B_[i] = o,
		o
	}
	function me(t, e, i, n, o, a, r) {
		return a ? ye(t, e, i, n, o, a, r) : ve(t, e, i, n, o, r)
	}
	function ve(t, e, i, n, o, a) {
		var r = De(t, e, o, a),
		s = ge(t, e);
		o && (s += o[1] + o[3]);
		var l = r.outerHeight,
		h = new Kt(xe(0, s, i), _e(0, l, n), s, l);
		return h.lineHeight = r.lineHeight,
		h
	}
	function ye(t, e, i, n, o, a, r) {
		var s = Ce(t, {
			rich: a,
			truncate: r,
			font: e,
			textAlign: i,
			textPadding: o
		}),
		l = s.outerWidth,
		h = s.outerHeight;
		return new Kt(xe(0, l, i), _e(0, h, n), l, h)
	}
	function xe(t, e, i) {
		return "right" === i ? t -= e: "center" === i && (t -= e / 2),
		t
	}
	function _e(t, e, i) {
		return "middle" === i ? t -= e / 2 : "bottom" === i && (t -= e),
		t
	}
	function we(t, e, i) {
		var n = e.x,
		o = e.y,
		a = e.height,
		r = e.width,
		s = a / 2,
		l = "left",
		h = "top";
		switch (t) {
		case "left":
			n -= i,
			o += s,
			l = "right",
			h = "middle";
			break;
		case "right":
			n += i + r,
			o += s,
			h = "middle";
			break;
		case "top":
			n += r / 2,
			o -= i,
			l = "center",
			h = "bottom";
			break;
		case "bottom":
			n += r / 2,
			o += a + i,
			l = "center";
			break;
		case "inside":
			n += r / 2,
			o += s,
			l = "center",
			h = "middle";
			break;
		case "insideLeft":
			n += i,
			o += s,
			h = "middle";
			break;
		case "insideRight":
			n += r - i,
			o += s,
			l = "right",
			h = "middle";
			break;
		case "insideTop":
			n += r / 2,
			o += i,
			l = "center";
			break;
		case "insideBottom":
			n += r / 2,
			o += a - i,
			l = "center",
			h = "bottom";
			break;
		case "insideTopLeft":
			n += i,
			o += i;
			break;
		case "insideTopRight":
			n += r - i,
			o += i,
			l = "right";
			break;
		case "insideBottomLeft":
			n += i,
			o += a - i,
			h = "bottom";
			break;
		case "insideBottomRight":
			n += r - i,
			o += a - i,
			l = "right",
			h = "bottom"
		}
		return {
			x: n,
			y: o,
			textAlign: l,
			textVerticalAlign: h
		}
	}
	function be(t, e, i, n, o) {
		if (!e) return "";
		var a = (t + "").split("\n");
		o = Se(e, i, n, o);
		for (var r = 0,
		s = a.length; r < s; r++) a[r] = Me(a[r], o);
		return a.join("\n")
	}
	function Se(t, e, i, n) { (n = a({},
		n)).font = e;
		var i = A(i, "...");
		n.maxIterations = A(n.maxIterations, 2);
		var o = n.minChar = A(n.minChar, 0);
		n.cnCharWidth = ge("国", e);
		var r = n.ascCharWidth = ge("a", e);
		n.placeholder = A(n.placeholder, "");
		for (var s = t = Math.max(0, t - 1), l = 0; l < o && s >= r; l++) s -= r;
		var h = ge(i);
		return h > s && (i = "", h = 0),
		s = t - h,
		n.ellipsis = i,
		n.ellipsisWidth = h,
		n.contentWidth = s,
		n.containerWidth = t,
		n
	}
	function Me(t, e) {
		var i = e.containerWidth,
		n = e.font,
		o = e.contentWidth;
		if (!i) return "";
		var a = ge(t, n);
		if (a <= i) return t;
		for (var r = 0;; r++) {
			if (a <= o || r >= e.maxIterations) {
				t += e.ellipsis;
				break
			}
			var s = 0 === r ? Ie(t, o, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * o / a) : 0;
			a = ge(t = t.substr(0, s), n)
		}
		return "" === t && (t = e.placeholder),
		t
	}
	function Ie(t, e, i, n) {
		for (var o = 0,
		a = 0,
		r = t.length; a < r && o < e; a++) {
			var s = t.charCodeAt(a);
			o += 0 <= s && s <= 127 ? i: n
		}
		return a
	}
	function Te(t) {
		return ge("国", t)
	}
	function Ae(t, e) {
		return H_.measureText(t, e)
	}
	function De(t, e, i, n) {
		null != t && (t += "");
		var o = Te(e),
		a = t ? t.split("\n") : [],
		r = a.length * o,
		s = r;
		if (i && (s += i[0] + i[2]), t && n) {
			var l = n.outerHeight,
			h = n.outerWidth;
			if (null != l && s > l) t = "",
			a = [];
			else if (null != h) for (var u = Se(h - (i ? i[1] + i[3] : 0), e, n.ellipsis, {
				minChar: n.minChar,
				placeholder: n.placeholder
			}), c = 0, d = a.length; c < d; c++) a[c] = Me(a[c], u)
		}
		return {
			lines: a,
			height: r,
			outerHeight: s,
			lineHeight: o
		}
	}
	function Ce(t, e) {
		var i = {
			lines: [],
			width: 0,
			height: 0
		};
		if (null != t && (t += ""), !t) return i;
		for (var n, o = W_.lastIndex = 0; null != (n = W_.exec(t));) {
			var a = n.index;
			a > o && Le(i, t.substring(o, a)),
			Le(i, n[2], n[1]),
			o = W_.lastIndex
		}
		o < t.length && Le(i, t.substring(o, t.length));
		var r = i.lines,
		s = 0,
		l = 0,
		h = [],
		u = e.textPadding,
		c = e.truncate,
		d = c && c.outerWidth,
		f = c && c.outerHeight;
		u && (null != d && (d -= u[1] + u[3]), null != f && (f -= u[0] + u[2]));
		for (L = 0; L < r.length; L++) {
			for (var p = r[L], g = 0, m = 0, v = 0; v < p.tokens.length; v++) {
				var y = (k = p.tokens[v]).styleName && e.rich[k.styleName] || {},
				x = k.textPadding = y.textPadding,
				_ = k.font = y.font || e.font,
				w = k.textHeight = A(y.textHeight, Te(_));
				if (x && (w += x[0] + x[2]), k.height = w, k.lineHeight = D(y.textLineHeight, e.textLineHeight, w), k.textAlign = y && y.textAlign || e.textAlign, k.textVerticalAlign = y && y.textVerticalAlign || "middle", null != f && s + k.lineHeight > f) return {
					lines: [],
					width: 0,
					height: 0
				};
				k.textWidth = ge(k.text, _);
				var b = y.textWidth,
				S = null == b || "auto" === b;
				if ("string" == typeof b && "%" === b.charAt(b.length - 1)) k.percentWidth = b,
				h.push(k),
				b = 0;
				else {
					if (S) {
						b = k.textWidth;
						var M = y.textBackgroundColor,
						I = M && M.image;
						I && pe(I = ce(I)) && (b = Math.max(b, I.width * w / I.height))
					}
					var T = x ? x[1] + x[3] : 0;
					b += T;
					var C = null != d ? d - m: null;
					null != C && C < b && (!S || C < T ? (k.text = "", k.textWidth = b = 0) : (k.text = be(k.text, C - T, _, c.ellipsis, {
						minChar: c.minChar
					}), k.textWidth = ge(k.text, _), b = k.textWidth + T))
				}
				m += k.width = b,
				y && (g = Math.max(g, k.lineHeight))
			}
			p.width = m,
			p.lineHeight = g,
			s += g,
			l = Math.max(l, m)
		}
		i.outerWidth = i.width = A(e.textWidth, l),
		i.outerHeight = i.height = A(e.textHeight, s),
		u && (i.outerWidth += u[1] + u[3], i.outerHeight += u[0] + u[2]);
		for (var L = 0; L < h.length; L++) {
			var k = h[L],
			P = k.percentWidth;
			k.width = parseInt(P, 10) / 100 * l
		}
		return i
	}
	function Le(t, e, i) {
		for (var n = "" === e,
		o = e.split("\n"), a = t.lines, r = 0; r < o.length; r++) {
			var s = o[r],
			l = {
				styleName: i,
				text: s,
				isLineHolder: !s && !n
			};
			if (r) a.push({
				tokens: [l]
			});
			else {
				var h = (a[a.length - 1] || (a[0] = {
					tokens: []
				})).tokens,
				u = h.length;
				1 === u && h[0].isLineHolder ? h[0] = l: (s || !u || n) && h.push(l)
			}
		}
	}
	function ke(t) {
		var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
		return e && P(e) || t.textFont || t.font
	}
	function Pe(t, e) {
		var i, n, o, a, r = e.x,
		s = e.y,
		l = e.width,
		h = e.height,
		u = e.r;
		l < 0 && (r += l, l = -l),
		h < 0 && (s += h, h = -h),
		"number" == typeof u ? i = n = o = a = u: u instanceof Array ? 1 === u.length ? i = n = o = a = u[0] : 2 === u.length ? (i = o = u[0], n = a = u[1]) : 3 === u.length ? (i = u[0], n = a = u[1], o = u[2]) : (i = u[0], n = u[1], o = u[2], a = u[3]) : i = n = o = a = 0;
		var c;
		i + n > l && (i *= l / (c = i + n), n *= l / c),
		o + a > l && (o *= l / (c = o + a), a *= l / c),
		n + o > h && (n *= h / (c = n + o), o *= h / c),
		i + a > h && (i *= h / (c = i + a), a *= h / c),
		t.moveTo(r + i, s),
		t.lineTo(r + l - n, s),
		0 !== n && t.quadraticCurveTo(r + l, s, r + l, s + n),
		t.lineTo(r + l, s + h - o),
		0 !== o && t.quadraticCurveTo(r + l, s + h, r + l - o, s + h),
		t.lineTo(r + a, s + h),
		0 !== a && t.quadraticCurveTo(r, s + h, r, s + h - a),
		t.lineTo(r, s + i),
		0 !== i && t.quadraticCurveTo(r, s, r + i, s)
	}
	function Oe(t) {
		return Ne(t),
		d(t.rich, Ne),
		t
	}
	function Ne(t) {
		if (t) {
			t.font = ke(t);
			var e = t.textAlign;
			"middle" === e && (e = "center"),
			t.textAlign = null == e || Z_[e] ? e: "left";
			var i = t.textVerticalAlign || t.textBaseline;
			"center" === i && (i = "middle"),
			t.textVerticalAlign = null == i || U_[i] ? i: "top",
			t.textPadding && (t.textPadding = L(t.textPadding))
		}
	}
	function Ee(t, e, i, n, o) {
		n.rich ? Re(t, e, i, n, o) : ze(t, e, i, n, o)
	}
	function ze(t, e, i, n, o) {
		var a = Ue(e, "font", n.font || F_),
		r = n.textPadding,
		s = t.__textCotentBlock;
		s && !t.__dirty || (s = t.__textCotentBlock = De(i, a, r, n.truncate));
		var l = s.outerHeight,
		h = s.lines,
		u = s.lineHeight,
		c = Ze(l, n, o),
		d = c.baseX,
		f = c.baseY,
		p = c.textAlign,
		g = c.textVerticalAlign;
		Ve(e, n, o, d, f);
		var m = _e(f, l, g),
		v = d,
		y = m,
		x = We(n);
		if (x || r) {
			var _ = ge(i, a);
			r && (_ += r[1] + r[3]);
			var w = xe(d, _, p);
			x && Fe(t, e, n, w, m, _, l),
			r && (v = qe(d, p, r), y += r[0])
		}
		Ue(e, "textAlign", p || "left"),
		Ue(e, "textBaseline", "middle"),
		Ue(e, "shadowBlur", n.textShadowBlur || 0),
		Ue(e, "shadowColor", n.textShadowColor || "transparent"),
		Ue(e, "shadowOffsetX", n.textShadowOffsetX || 0),
		Ue(e, "shadowOffsetY", n.textShadowOffsetY || 0),
		y += u / 2;
		var b = n.textStrokeWidth,
		S = je(n.textStroke, b),
		M = Xe(n.textFill);
		S && (Ue(e, "lineWidth", b), Ue(e, "strokeStyle", S)),
		M && Ue(e, "fillStyle", M);
		for (var I = 0; I < h.length; I++) S && e.strokeText(h[I], v, y),
		M && e.fillText(h[I], v, y),
		y += u
	}
	function Re(t, e, i, n, o) {
		var a = t.__textCotentBlock;
		a && !t.__dirty || (a = t.__textCotentBlock = Ce(i, n)),
		Be(t, e, a, n, o)
	}
	function Be(t, e, i, n, o) {
		var a = i.width,
		r = i.outerWidth,
		s = i.outerHeight,
		l = n.textPadding,
		h = Ze(s, n, o),
		u = h.baseX,
		c = h.baseY,
		d = h.textAlign,
		f = h.textVerticalAlign;
		Ve(e, n, o, u, c);
		var p = xe(u, r, d),
		g = _e(c, s, f),
		m = p,
		v = g;
		l && (m += l[3], v += l[0]);
		var y = m + a;
		We(n) && Fe(t, e, n, p, g, r, s);
		for (var x = 0; x < i.lines.length; x++) {
			for (var _, w = i.lines[x], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, T = 0, A = m, D = y, C = S - 1; T < S && (!(_ = b[T]).textAlign || "left" === _.textAlign);) Ge(t, e, _, n, M, v, A, "left"),
			I -= _.width,
			A += _.width,
			T++;
			for (; C >= 0 && "right" === (_ = b[C]).textAlign;) Ge(t, e, _, n, M, v, D, "right"),
			I -= _.width,
			D -= _.width,
			C--;
			for (A += (a - (A - m) - (y - D) - I) / 2; T <= C;) Ge(t, e, _ = b[T], n, M, v, A + _.width / 2, "center"),
			A += _.width,
			T++;
			v += M
		}
	}
	function Ve(t, e, i, n, o) {
		if (i && e.textRotation) {
			var a = e.textOrigin;
			"center" === a ? (n = i.width / 2 + i.x, o = i.height / 2 + i.y) : a && (n = a[0] + i.x, o = a[1] + i.y),
			t.translate(n, o),
			t.rotate( - e.textRotation),
			t.translate( - n, -o)
		}
	}
	function Ge(t, e, i, n, o, a, r, s) {
		var l = n.rich[i.styleName] || {},
		h = i.textVerticalAlign,
		u = a + o / 2;
		"top" === h ? u = a + i.height / 2 : "bottom" === h && (u = a + o - i.height / 2),
		!i.isLineHolder && We(l) && Fe(t, e, l, "right" === s ? r - i.width: "center" === s ? r - i.width / 2 : r, u - i.height / 2, i.width, i.height);
		var c = i.textPadding;
		c && (r = qe(r, s, c), u -= i.height / 2 - c[2] - i.textHeight / 2),
		Ue(e, "shadowBlur", D(l.textShadowBlur, n.textShadowBlur, 0)),
		Ue(e, "shadowColor", l.textShadowColor || n.textShadowColor || "transparent"),
		Ue(e, "shadowOffsetX", D(l.textShadowOffsetX, n.textShadowOffsetX, 0)),
		Ue(e, "shadowOffsetY", D(l.textShadowOffsetY, n.textShadowOffsetY, 0)),
		Ue(e, "textAlign", s),
		Ue(e, "textBaseline", "middle"),
		Ue(e, "font", i.font || F_);
		var d = je(l.textStroke || n.textStroke, p),
		f = Xe(l.textFill || n.textFill),
		p = A(l.textStrokeWidth, n.textStrokeWidth);
		d && (Ue(e, "lineWidth", p), Ue(e, "strokeStyle", d), e.strokeText(i.text, r, u)),
		f && (Ue(e, "fillStyle", f), e.fillText(i.text, r, u))
	}
	function We(t) {
		return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
	}
	function Fe(t, e, i, n, o, a, r) {
		var s = i.textBackgroundColor,
		l = i.textBorderWidth,
		h = i.textBorderColor,
		u = _(s);
		if (Ue(e, "shadowBlur", i.textBoxShadowBlur || 0), Ue(e, "shadowColor", i.textBoxShadowColor || "transparent"), Ue(e, "shadowOffsetX", i.textBoxShadowOffsetX || 0), Ue(e, "shadowOffsetY", i.textBoxShadowOffsetY || 0), u || l && h) {
			e.beginPath();
			var c = i.textBorderRadius;
			c ? Pe(e, {
				x: n,
				y: o,
				width: a,
				height: r,
				r: c
			}) : e.rect(n, o, a, r),
			e.closePath()
		}
		if (u) Ue(e, "fillStyle", s),
		e.fill();
		else if (w(s)) {
			var d = s.image; (d = de(d, null, t, He, s)) && pe(d) && e.drawImage(d, n, o, a, r)
		}
		l && h && (Ue(e, "lineWidth", l), Ue(e, "strokeStyle", h), e.stroke())
	}
	function He(t, e) {
		e.image = t
	}
	function Ze(t, e, i) {
		var n = e.x || 0,
		o = e.y || 0,
		a = e.textAlign,
		r = e.textVerticalAlign;
		if (i) {
			var s = e.textPosition;
			if (s instanceof Array) n = i.x + Ye(s[0], i.width),
			o = i.y + Ye(s[1], i.height);
			else {
				var l = we(s, i, e.textDistance);
				n = l.x,
				o = l.y,
				a = a || l.textAlign,
				r = r || l.textVerticalAlign
			}
			var h = e.textOffset;
			h && (n += h[0], o += h[1])
		}
		return {
			baseX: n,
			baseY: o,
			textAlign: a,
			textVerticalAlign: r
		}
	}
	function Ue(t, e, i) {
		return t[e] = D_(t, e, i),
		t[e]
	}
	function je(t, e) {
		return null == t || e <= 0 || "transparent" === t || "none" === t ? null: t.image || t.colorStops ? "#000": t
	}
	function Xe(t) {
		return null == t || "none" === t ? null: t.image || t.colorStops ? "#000": t
	}
	function Ye(t, e) {
		return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e: parseFloat(t) : t
	}
	function qe(t, e, i) {
		return "right" === e ? t - i[1] : "center" === e ? t + i[3] / 2 - i[1] / 2 : t + i[3]
	}
	function $e(t, e) {
		return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
	}
	function Ke(t) {
		t = t || {},
		x_.call(this, t);
		for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
		this.style = new L_(t.style, this),
		this._rect = null,
		this.__clipPaths = []
	}
	function Je(t) {
		Ke.call(this, t)
	}
	function Qe(t) {
		return parseInt(t, 10)
	}
	function ti(t) {
		return !! t && ( !! t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh)
	}
	function ei(t, e, i) {
		return Y_.copy(t.getBoundingRect()),
		t.transform && Y_.applyTransform(t.transform),
		q_.width = e,
		q_.height = i,
		!Y_.intersect(q_)
	}
	function ii(t, e) {
		if (t == e) return ! 1;
		if (!t || !e || t.length !== e.length) return ! 0;
		for (var i = 0; i < t.length; i++) if (t[i] !== e[i]) return ! 0
	}
	function ni(t, e) {
		for (var i = 0; i < t.length; i++) {
			var n = t[i];
			n.setTransform(e),
			e.beginPath(),
			n.buildPath(e, n.shape),
			e.clip(),
			n.restoreTransform(e)
		}
	}
	function oi(t, e) {
		var i = document.createElement("div");
		return i.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";",
		i
	}
	function ai(t) {
		return t.getBoundingClientRect ? t.getBoundingClientRect() : {
			left: 0,
			top: 0
		}
	}
	function ri(t, e, i, n) {
		return i = i || {},
		n || !_x.canvasSupported ? si(t, e, i) : _x.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : si(t, e, i),
		i
	}
	function si(t, e, i) {
		var n = ai(t);
		i.zrX = e.clientX - n.left,
		i.zrY = e.clientY - n.top
	}
	function li(t, e, i) {
		if (null != (e = e || window.event).zrX) return e;
		var n = e.type;
		if (n && n.indexOf("touch") >= 0) {
			var o = "touchend" != n ? e.targetTouches[0] : e.changedTouches[0];
			o && ri(t, o, e, i)
		} else ri(t, e, e, i),
		e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
		var a = e.button;
		return null == e.which && void 0 !== a && J_.test(e.type) && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
		e
	}
	function hi(t, e, i) {
		K_ ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
	}
	function ui(t, e, i) {
		K_ ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
	}
	function ci(t) {
		return t.which > 1
	}
	function di(t) {
		var e = t[1][0] - t[0][0],
		i = t[1][1] - t[0][1];
		return Math.sqrt(e * e + i * i)
	}
	function fi(t) {
		return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
	}
	function pi(t) {
		return "mousewheel" === t && _x.browser.firefox ? "DOMMouseScroll": t
	}
	function gi(t, e, i) {
		var n = t._gestureMgr;
		"start" === i && n.clear();
		var o = n.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
		if ("end" === i && n.clear(), o) {
			var a = o.type;
			e.gestureEvent = a,
			t.handler.dispatchToElement({
				target: o.target
			},
			a, o.event)
		}
	}
	function mi(t) {
		t._touching = !0,
		clearTimeout(t._touchTimer),
		t._touchTimer = setTimeout(function() {
			t._touching = !1
		},
		700)
	}
	function vi(t) {
		var e = t.pointerType;
		return "pen" === e || "touch" === e
	}
	function yi(t) {
		function e(t, e) {
			return function() {
				if (!e._touching) return t.apply(e, arguments)
			}
		}
		d(ow,
		function(e) {
			t._handlers[e] = m(sw[e], t)
		}),
		d(rw,
		function(e) {
			t._handlers[e] = m(sw[e], t)
		}),
		d(nw,
		function(i) {
			t._handlers[i] = e(sw[i], t)
		})
	}
	function xi(t) {
		function e(e, i) {
			d(e,
			function(e) {
				hi(t, pi(e), i._handlers[e])
			},
			i)
		}
		Hx.call(this),
		this.dom = t,
		this._touching = !1,
		this._touchTimer,
		this._gestureMgr = new ew,
		this._handlers = {},
		yi(this),
		_x.pointerEventsSupported ? e(rw, this) : (_x.touchEventsSupported && e(ow, this), e(nw, this))
	}
	function _i(t, e) {
		var i = new dw(yx(), t, e);
		return cw[i.id] = i,
		i
	}
	function wi(t, e) {
		uw[t] = e
	}
	function bi(t) {
		delete cw[t]
	}
	function Si(t) {
		return t instanceof Array ? t: null == t ? [] : [t]
	}
	function Mi(t, e, i) {
		if (t) {
			t[e] = t[e] || {},
			t.emphasis = t.emphasis || {},
			t.emphasis[e] = t.emphasis[e] || {};
			for (var n = 0,
			o = i.length; n < o; n++) {
				var a = i[n]; ! t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
			}
		}
	}
	function Ii(t) {
		return ! gw(t) || mw(t) || t instanceof Date ? t: t.value
	}
	function Ti(t) {
		return gw(t) && !(t instanceof Array)
	}
	function Ai(t, e) {
		e = (e || []).slice();
		var i = f(t || [],
		function(t, e) {
			return {
				exist: t
			}
		});
		return pw(e,
		function(t, n) {
			if (gw(t)) {
				for (o = 0; o < i.length; o++) if (!i[o].option && null != t.id && i[o].exist.id === t.id + "") return i[o].option = t,
				void(e[n] = null);
				for (var o = 0; o < i.length; o++) {
					var a = i[o].exist;
					if (! (i[o].option || null != a.id && null != t.id || null == t.name || Ci(t) || Ci(a) || a.name !== t.name + "")) return i[o].option = t,
					void(e[n] = null)
				}
			}
		}),
		pw(e,
		function(t, e) {
			if (gw(t)) {
				for (var n = 0; n < i.length; n++) {
					var o = i[n].exist;
					if (!i[n].option && !Ci(o) && null == t.id) {
						i[n].option = t;
						break
					}
				}
				n >= i.length && i.push({
					option: t
				})
			}
		}),
		i
	}
	function Di(t) {
		var e = z();
		pw(t,
		function(t, i) {
			var n = t.exist;
			n && e.set(n.id, t)
		}),
		pw(t,
		function(t, i) {
			var n = t.option;
			k(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)),
			n && null != n.id && e.set(n.id, t),
			!t.keyInfo && (t.keyInfo = {})
		}),
		pw(t,
		function(t, i) {
			var n = t.exist,
			o = t.option,
			a = t.keyInfo;
			if (gw(o)) {
				if (a.name = null != o.name ? o.name + "": n ? n.name: vw, n) a.id = n.id;
				else if (null != o.id) a.id = o.id + "";
				else {
					var r = 0;
					do {
						a.id = "\0" + a.name + "\0" + r++
					} while ( e . get ( a . id ))
				}
				e.set(a.id, t)
			}
		})
	}
	function Ci(t) {
		return gw(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
	}
	function Li(t, e) {
		function i(t, e, i) {
			for (var n = 0,
			o = t.length; n < o; n++) for (var a = t[n].seriesId, r = Si(t[n].dataIndex), s = i && i[a], l = 0, h = r.length; l < h; l++) {
				var u = r[l];
				s && s[u] ? s[u] = null: (e[a] || (e[a] = {}))[u] = 1
			}
		}
		function n(t, e) {
			var i = [];
			for (var o in t) if (t.hasOwnProperty(o) && null != t[o]) if (e) i.push( + o);
			else {
				var a = n(t[o], !0);
				a.length && i.push({
					seriesId: o,
					dataIndex: a
				})
			}
			return i
		}
		var o = {},
		a = {};
		return i(t || [], o),
		i(e || [], a, o),
		[n(o), n(a)]
	}
	function ki(t, e) {
		return null != e.dataIndexInside ? e.dataIndexInside: null != e.dataIndex ? y(e.dataIndex) ? f(e.dataIndex,
		function(e) {
			return t.indexOfRawIndex(e)
		}) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? y(e.name) ? f(e.name,
		function(e) {
			return t.indexOfName(e)
		}) : t.indexOfName(e.name) : void 0
	}
	function Pi() {
		var t = "__\0ec_inner_" + xw+++"_" + Math.random().toFixed(5);
		return function(e) {
			return e[t] || (e[t] = {})
		}
	}
	function Oi(t, e, i) {
		if (_(e)) {
			var n = {};
			n[e + "Index"] = 0,
			e = n
		}
		var o = i && i.defaultMainType; ! o || Ni(e, o + "Index") || Ni(e, o + "Id") || Ni(e, o + "Name") || (e[o + "Index"] = 0);
		var a = {};
		return pw(e,
		function(n, o) {
			var n = e[o];
			if ("dataIndex" !== o && "dataIndexInside" !== o) {
				var r = o.match(/^(\w+)(Index|Id|Name)$/) || [],
				s = r[1],
				h = (r[2] || "").toLowerCase();
				if (! (!s || !h || null == n || "index" === h && "none" === n || i && i.includeMainTypes && l(i.includeMainTypes, s) < 0)) {
					var u = {
						mainType: s
					};
					"index" === h && "all" === n || (u[h] = n);
					var c = t.queryComponents(u);
					a[s + "Models"] = c,
					a[s + "Model"] = c[0]
				}
			} else a[o] = n
		}),
		a
	}
	function Ni(t, e) {
		return t && t.hasOwnProperty(e)
	}
	function Ei(t, e, i) {
		t.setAttribute ? t.setAttribute(e, i) : t[e] = i
	}
	function zi(t, e) {
		return t.getAttribute ? t.getAttribute(e) : t[e]
	}
	function Ri(t) {
		var e = {
			main: "",
			sub: ""
		};
		return t && (t = t.split(_w), e.main = t[0] || "", e.sub = t[1] || ""),
		e
	}
	function Bi(t) {
		k(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
	}
	function Vi(t, e) {
		t.$constructor = t,
		t.extend = function(t) {
			var e = this,
			i = function() {
				t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
			};
			return a(i.prototype, t),
			i.extend = this.extend,
			i.superCall = Wi,
			i.superApply = Fi,
			h(i, this),
			i.superClass = e,
			i
		}
	}
	function Gi(t) {
		var e = ["__\0is_clz", bw++, Math.random().toFixed(3)].join("_");
		t.prototype[e] = !0,
		t.isInstance = function(t) {
			return ! (!t || !t[e])
		}
	}
	function Wi(t, e) {
		var i = C(arguments, 2);
		return this.superClass.prototype[e].apply(t, i)
	}
	function Fi(t, e, i) {
		return this.superClass.prototype[e].apply(t, i)
	}
	function Hi(t, e) {
		function i(t) {
			var e = n[t.main];
			return e && e[ww] || ((e = n[t.main] = {})[ww] = !0),
			e
		}
		e = e || {};
		var n = {};
		if (t.registerClass = function(t, e) {
			return e && (Bi(e), (e = Ri(e)).sub ? e.sub !== ww && (i(e)[e.sub] = t) : n[e.main] = t),
			t
		},
		t.getClass = function(t, e, i) {
			var o = n[t];
			if (o && o[ww] && (o = e ? o[e] : null), i && !o) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first.": t + ".type should be specified.");
			return o
		},
		t.getClassesByMainType = function(t) {
			t = Ri(t);
			var e = [],
			i = n[t.main];
			return i && i[ww] ? d(i,
			function(t, i) {
				i !== ww && e.push(t)
			}) : e.push(i),
			e
		},
		t.hasClass = function(t) {
			return t = Ri(t),
			!!n[t.main]
		},
		t.getAllClassMainTypes = function() {
			var t = [];
			return d(n,
			function(e, i) {
				t.push(i)
			}),
			t
		},
		t.hasSubTypes = function(t) {
			t = Ri(t);
			var e = n[t.main];
			return e && e[ww]
		},
		t.parseClassType = Ri, e.registerWhenExtend) {
			var o = t.extend;
			o && (t.extend = function(e) {
				var i = o.call(this, e);
				return t.registerClass(i, e.type)
			})
		}
		return t
	}
	function Zi(t) {
		return t > -Lw && t < Lw
	}
	function Ui(t) {
		return t > Lw || t < -Lw
	}
	function ji(t, e, i, n, o) {
		var a = 1 - o;
		return a * a * (a * t + 3 * o * e) + o * o * (o * n + 3 * a * i)
	}
	function Xi(t, e, i, n, o) {
		var a = 1 - o;
		return 3 * (((e - t) * a + 2 * (i - e) * o) * a + (n - i) * o * o)
	}
	function Yi(t, e, i, n, o, a) {
		var r = n + 3 * (e - i) - t,
		s = 3 * (i - 2 * e + t),
		l = 3 * (e - t),
		h = t - o,
		u = s * s - 3 * r * l,
		c = s * l - 9 * r * h,
		d = l * l - 3 * s * h,
		f = 0;
		if (Zi(u) && Zi(c)) Zi(s) ? a[0] = 0 : (M = -l / s) >= 0 && M <= 1 && (a[f++] = M);
		else {
			var p = c * c - 4 * u * d;
			if (Zi(p)) {
				var g = c / u,
				m = -g / 2; (M = -s / r + g) >= 0 && M <= 1 && (a[f++] = M),
				m >= 0 && m <= 1 && (a[f++] = m)
			} else if (p > 0) {
				var v = Cw(p),
				y = u * s + 1.5 * r * ( - c + v),
				x = u * s + 1.5 * r * ( - c - v); (M = ( - s - ((y = y < 0 ? -Dw( - y, Ow) : Dw(y, Ow)) + (x = x < 0 ? -Dw( - x, Ow) : Dw(x, Ow)))) / (3 * r)) >= 0 && M <= 1 && (a[f++] = M)
			} else {
				var _ = (2 * u * s - 3 * r * c) / (2 * Cw(u * u * u)),
				w = Math.acos(_) / 3,
				b = Cw(u),
				S = Math.cos(w),
				M = ( - s - 2 * b * S) / (3 * r),
				m = ( - s + b * (S + Pw * Math.sin(w))) / (3 * r),
				I = ( - s + b * (S - Pw * Math.sin(w))) / (3 * r);
				M >= 0 && M <= 1 && (a[f++] = M),
				m >= 0 && m <= 1 && (a[f++] = m),
				I >= 0 && I <= 1 && (a[f++] = I)
			}
		}
		return f
	}
	function qi(t, e, i, n, o) {
		var a = 6 * i - 12 * e + 6 * t,
		r = 9 * e + 3 * n - 3 * t - 9 * i,
		s = 3 * e - 3 * t,
		l = 0;
		if (Zi(r)) Ui(a) && (c = -s / a) >= 0 && c <= 1 && (o[l++] = c);
		else {
			var h = a * a - 4 * r * s;
			if (Zi(h)) o[0] = -a / (2 * r);
			else if (h > 0) {
				var u = Cw(h),
				c = ( - a + u) / (2 * r),
				d = ( - a - u) / (2 * r);
				c >= 0 && c <= 1 && (o[l++] = c),
				d >= 0 && d <= 1 && (o[l++] = d)
			}
		}
		return l
	}
	function $i(t, e, i, n, o, a) {
		var r = (e - t) * o + t,
		s = (i - e) * o + e,
		l = (n - i) * o + i,
		h = (s - r) * o + r,
		u = (l - s) * o + s,
		c = (u - h) * o + h;
		a[0] = t,
		a[1] = r,
		a[2] = h,
		a[3] = c,
		a[4] = c,
		a[5] = u,
		a[6] = l,
		a[7] = n
	}
	function Ki(t, e, i, n, o, a, r, s, l, h, u) {
		var c, d, f, p, g, m = .005,
		v = 1 / 0;
		Nw[0] = l,
		Nw[1] = h;
		for (var y = 0; y < 1; y += .05) Ew[0] = ji(t, i, o, r, y),
		Ew[1] = ji(e, n, a, s, y),
		(p = Gx(Nw, Ew)) < v && (c = y, v = p);
		v = 1 / 0;
		for (var x = 0; x < 32 && !(m < kw); x++) d = c - m,
		f = c + m,
		Ew[0] = ji(t, i, o, r, d),
		Ew[1] = ji(e, n, a, s, d),
		p = Gx(Ew, Nw),
		d >= 0 && p < v ? (c = d, v = p) : (zw[0] = ji(t, i, o, r, f), zw[1] = ji(e, n, a, s, f), g = Gx(zw, Nw), f <= 1 && g < v ? (c = f, v = g) : m *= .5);
		return u && (u[0] = ji(t, i, o, r, c), u[1] = ji(e, n, a, s, c)),
		Cw(v)
	}
	function Ji(t, e, i, n) {
		var o = 1 - n;
		return o * (o * t + 2 * n * e) + n * n * i
	}
	function Qi(t, e, i, n) {
		return 2 * ((1 - n) * (e - t) + n * (i - e))
	}
	function tn(t, e, i, n, o) {
		var a = t - 2 * e + i,
		r = 2 * (e - t),
		s = t - n,
		l = 0;
		if (Zi(a)) Ui(r) && (c = -s / r) >= 0 && c <= 1 && (o[l++] = c);
		else {
			var h = r * r - 4 * a * s;
			if (Zi(h))(c = -r / (2 * a)) >= 0 && c <= 1 && (o[l++] = c);
			else if (h > 0) {
				var u = Cw(h),
				c = ( - r + u) / (2 * a),
				d = ( - r - u) / (2 * a);
				c >= 0 && c <= 1 && (o[l++] = c),
				d >= 0 && d <= 1 && (o[l++] = d)
			}
		}
		return l
	}
	function en(t, e, i) {
		var n = t + i - 2 * e;
		return 0 === n ? .5 : (t - e) / n
	}
	function nn(t, e, i, n, o) {
		var a = (e - t) * n + t,
		r = (i - e) * n + e,
		s = (r - a) * n + a;
		o[0] = t,
		o[1] = a,
		o[2] = s,
		o[3] = s,
		o[4] = r,
		o[5] = i
	}
	function on(t, e, i, n, o, a, r, s, l) {
		var h, u = .005,
		c = 1 / 0;
		Nw[0] = r,
		Nw[1] = s;
		for (var d = 0; d < 1; d += .05) Ew[0] = Ji(t, i, o, d),
		Ew[1] = Ji(e, n, a, d),
		(m = Gx(Nw, Ew)) < c && (h = d, c = m);
		c = 1 / 0;
		for (var f = 0; f < 32 && !(u < kw); f++) {
			var p = h - u,
			g = h + u;
			Ew[0] = Ji(t, i, o, p),
			Ew[1] = Ji(e, n, a, p);
			var m = Gx(Ew, Nw);
			if (p >= 0 && m < c) h = p,
			c = m;
			else {
				zw[0] = Ji(t, i, o, g),
				zw[1] = Ji(e, n, a, g);
				var v = Gx(zw, Nw);
				g <= 1 && v < c ? (h = g, c = v) : u *= .5
			}
		}
		return l && (l[0] = Ji(t, i, o, h), l[1] = Ji(e, n, a, h)),
		Cw(c)
	}
	function an(t, e, i) {
		if (0 !== t.length) {
			var n, o = t[0],
			a = o[0],
			r = o[0],
			s = o[1],
			l = o[1];
			for (n = 1; n < t.length; n++) o = t[n],
			a = Rw(a, o[0]),
			r = Bw(r, o[0]),
			s = Rw(s, o[1]),
			l = Bw(l, o[1]);
			e[0] = a,
			e[1] = s,
			i[0] = r,
			i[1] = l
		}
	}
	function rn(t, e, i, n, o, a) {
		o[0] = Rw(t, i),
		o[1] = Rw(e, n),
		a[0] = Bw(t, i),
		a[1] = Bw(e, n)
	}
	function sn(t, e, i, n, o, a, r, s, l, h) {
		var u, c = qi,
		d = ji,
		f = c(t, i, o, r, Uw);
		for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; u < f; u++) {
			var p = d(t, i, o, r, Uw[u]);
			l[0] = Rw(p, l[0]),
			h[0] = Bw(p, h[0])
		}
		for (f = c(e, n, a, s, jw), u = 0; u < f; u++) {
			var g = d(e, n, a, s, jw[u]);
			l[1] = Rw(g, l[1]),
			h[1] = Bw(g, h[1])
		}
		l[0] = Rw(t, l[0]),
		h[0] = Bw(t, h[0]),
		l[0] = Rw(r, l[0]),
		h[0] = Bw(r, h[0]),
		l[1] = Rw(e, l[1]),
		h[1] = Bw(e, h[1]),
		l[1] = Rw(s, l[1]),
		h[1] = Bw(s, h[1])
	}
	function ln(t, e, i, n, o, a, r, s) {
		var l = en,
		h = Ji,
		u = Bw(Rw(l(t, i, o), 1), 0),
		c = Bw(Rw(l(e, n, a), 1), 0),
		d = h(t, i, o, u),
		f = h(e, n, a, c);
		r[0] = Rw(t, o, d),
		r[1] = Rw(e, a, f),
		s[0] = Bw(t, o, d),
		s[1] = Bw(e, a, f)
	}
	function hn(t, e, i, n, o, a, r, s, l) {
		var h = tt,
		u = et,
		c = Math.abs(o - a);
		if (c % Ww < 1e-4 && c > 1e-4) return s[0] = t - i,
		s[1] = e - n,
		l[0] = t + i,
		void(l[1] = e + n);
		if (Fw[0] = Gw(o) * i + t, Fw[1] = Vw(o) * n + e, Hw[0] = Gw(a) * i + t, Hw[1] = Vw(a) * n + e, h(s, Fw, Hw), u(l, Fw, Hw), (o %= Ww) < 0 && (o += Ww), (a %= Ww) < 0 && (a += Ww), o > a && !r ? a += Ww: o < a && r && (o += Ww), r) {
			var d = a;
			a = o,
			o = d
		}
		for (var f = 0; f < a; f += Math.PI / 2) f > o && (Zw[0] = Gw(f) * i + t, Zw[1] = Vw(f) * n + e, h(s, Zw, s), u(l, Zw, l))
	}
	function un(t, e, i, n, o, a, r) {
		if (0 === o) return ! 1;
		var s = o,
		l = 0,
		h = t;
		if (r > e + s && r > n + s || r < e - s && r < n - s || a > t + s && a > i + s || a < t - s && a < i - s) return ! 1;
		if (t === i) return Math.abs(a - t) <= s / 2;
		var u = (l = (e - n) / (t - i)) * a - r + (h = (t * n - i * e) / (t - i));
		return u * u / (l * l + 1) <= s / 2 * s / 2
	}
	function cn(t, e, i, n, o, a, r, s, l, h, u) {
		if (0 === l) return ! 1;
		var c = l;
		return ! (u > e + c && u > n + c && u > a + c && u > s + c || u < e - c && u < n - c && u < a - c && u < s - c || h > t + c && h > i + c && h > o + c && h > r + c || h < t - c && h < i - c && h < o - c && h < r - c) && Ki(t, e, i, n, o, a, r, s, h, u, null) <= c / 2
	}
	function dn(t, e, i, n, o, a, r, s, l) {
		if (0 === r) return ! 1;
		var h = r;
		return ! (l > e + h && l > n + h && l > a + h || l < e - h && l < n - h && l < a - h || s > t + h && s > i + h && s > o + h || s < t - h && s < i - h && s < o - h) && on(t, e, i, n, o, a, s, l, null) <= h / 2
	}
	function fn(t) {
		return (t %= rb) < 0 && (t += rb),
		t
	}
	function pn(t, e, i, n, o, a, r, s, l) {
		if (0 === r) return ! 1;
		var h = r;
		s -= t,
		l -= e;
		var u = Math.sqrt(s * s + l * l);
		if (u - h > i || u + h < i) return ! 1;
		if (Math.abs(n - o) % sb < 1e-4) return ! 0;
		if (a) {
			var c = n;
			n = fn(o),
			o = fn(c)
		} else n = fn(n),
		o = fn(o);
		n > o && (o += sb);
		var d = Math.atan2(l, s);
		return d < 0 && (d += sb),
		d >= n && d <= o || d + sb >= n && d + sb <= o
	}
	function gn(t, e, i, n, o, a) {
		if (a > e && a > n || a < e && a < n) return 0;
		if (n === e) return 0;
		var r = n < e ? 1 : -1,
		s = (a - e) / (n - e);
		return 1 !== s && 0 !== s || (r = n < e ? .5 : -.5),
		s * (i - t) + t > o ? r: 0
	}
	function mn(t, e) {
		return Math.abs(t - e) < ub
	}
	function vn() {
		var t = db[0];
		db[0] = db[1],
		db[1] = t
	}
	function yn(t, e, i, n, o, a, r, s, l, h) {
		if (h > e && h > n && h > a && h > s || h < e && h < n && h < a && h < s) return 0;
		var u = Yi(e, n, a, s, h, cb);
		if (0 === u) return 0;
		for (var c, d, f = 0,
		p = -1,
		g = 0; g < u; g++) {
			var m = cb[g],
			v = 0 === m || 1 === m ? .5 : 1;
			ji(t, i, o, r, m) < l || (p < 0 && (p = qi(e, n, a, s, db), db[1] < db[0] && p > 1 && vn(), c = ji(e, n, a, s, db[0]), p > 1 && (d = ji(e, n, a, s, db[1]))), 2 == p ? m < db[0] ? f += c < e ? v: -v: m < db[1] ? f += d < c ? v: -v: f += s < d ? v: -v: m < db[0] ? f += c < e ? v: -v: f += s < c ? v: -v)
		}
		return f
	}
	function xn(t, e, i, n, o, a, r, s) {
		if (s > e && s > n && s > a || s < e && s < n && s < a) return 0;
		var l = tn(e, n, a, s, cb);
		if (0 === l) return 0;
		var h = en(e, n, a);
		if (h >= 0 && h <= 1) {
			for (var u = 0,
			c = Ji(e, n, a, h), d = 0; d < l; d++) {
				f = 0 === cb[d] || 1 === cb[d] ? .5 : 1; (p = Ji(t, i, o, cb[d])) < r || (cb[d] < h ? u += c < e ? f: -f: u += a < c ? f: -f)
			}
			return u
		}
		var f = 0 === cb[0] || 1 === cb[0] ? .5 : 1,
		p = Ji(t, i, o, cb[0]);
		return p < r ? 0 : a < e ? f: -f
	}
	function _n(t, e, i, n, o, a, r, s) {
		if ((s -= e) > i || s < -i) return 0;
		h = Math.sqrt(i * i - s * s);
		cb[0] = -h,
		cb[1] = h;
		var l = Math.abs(n - o);
		if (l < 1e-4) return 0;
		if (l % hb < 1e-4) {
			n = 0,
			o = hb;
			p = a ? 1 : -1;
			return r >= cb[0] + t && r <= cb[1] + t ? p: 0
		}
		if (a) {
			var h = n;
			n = fn(o),
			o = fn(h)
		} else n = fn(n),
		o = fn(o);
		n > o && (o += hb);
		for (var u = 0,
		c = 0; c < 2; c++) {
			var d = cb[c];
			if (d + t > r) {
				var f = Math.atan2(s, d),
				p = a ? 1 : -1;
				f < 0 && (f = hb + f),
				(f >= n && f <= o || f + hb >= n && f + hb <= o) && (f > Math.PI / 2 && f < 1.5 * Math.PI && (p = -p), u += p)
			}
		}
		return u
	}
	function wn(t, e, i, n, o) {
		for (var a = 0,
		r = 0,
		s = 0,
		l = 0,
		h = 0,
		u = 0; u < t.length;) {
			var c = t[u++];
			switch (c === lb.M && u > 1 && (i || (a += gn(r, s, l, h, n, o))), 1 == u && (l = r = t[u], h = s = t[u + 1]), c) {
			case lb.M:
				r = l = t[u++],
				s = h = t[u++];
				break;
			case lb.L:
				if (i) {
					if (un(r, s, t[u], t[u + 1], e, n, o)) return ! 0
				} else a += gn(r, s, t[u], t[u + 1], n, o) || 0;
				r = t[u++],
				s = t[u++];
				break;
			case lb.C:
				if (i) {
					if (cn(r, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, n, o)) return ! 0
				} else a += yn(r, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], n, o) || 0;
				r = t[u++],
				s = t[u++];
				break;
			case lb.Q:
				if (i) {
					if (dn(r, s, t[u++], t[u++], t[u], t[u + 1], e, n, o)) return ! 0
				} else a += xn(r, s, t[u++], t[u++], t[u], t[u + 1], n, o) || 0;
				r = t[u++],
				s = t[u++];
				break;
			case lb.A:
				var d = t[u++],
				f = t[u++],
				p = t[u++],
				g = t[u++],
				m = t[u++],
				v = t[u++],
				y = (t[u++], 1 - t[u++]),
				x = Math.cos(m) * p + d,
				_ = Math.sin(m) * g + f;
				u > 1 ? a += gn(r, s, x, _, n, o) : (l = x, h = _);
				var w = (n - d) * g / p + d;
				if (i) {
					if (pn(d, f, g, m, m + v, y, e, w, o)) return ! 0
				} else a += _n(d, f, g, m, m + v, y, w, o);
				r = Math.cos(m + v) * p + d,
				s = Math.sin(m + v) * g + f;
				break;
			case lb.R:
				l = r = t[u++],
				h = s = t[u++];
				var x = l + t[u++],
				_ = h + t[u++];
				if (i) {
					if (un(l, h, x, h, e, n, o) || un(x, h, x, _, e, n, o) || un(x, _, l, _, e, n, o) || un(l, _, l, h, e, n, o)) return ! 0
				} else a += gn(x, h, x, _, n, o),
				a += gn(l, _, l, h, n, o);
				break;
			case lb.Z:
				if (i) {
					if (un(r, s, l, h, e, n, o)) return ! 0
				} else a += gn(r, s, l, h, n, o);
				r = l,
				s = h
			}
		}
		return i || mn(s, h) || (a += gn(r, s, l, h, n, o) || 0),
		0 !== a
	}
	function bn(t, e, i) {
		return wn(t, 0, !1, e, i)
	}
	function Sn(t, e, i, n) {
		return wn(t, e, !0, i, n)
	}
	function Mn(t) {
		Ke.call(this, t),
		this.path = null
	}
	function In(t, e, i, n, o, a, r, s, l, h, u) {
		var c = l * (Ib / 180),
		d = Mb(c) * (t - i) / 2 + Sb(c) * (e - n) / 2,
		f = -1 * Sb(c) * (t - i) / 2 + Mb(c) * (e - n) / 2,
		p = d * d / (r * r) + f * f / (s * s);
		p > 1 && (r *= bb(p), s *= bb(p));
		var g = (o === a ? -1 : 1) * bb((r * r * (s * s) - r * r * (f * f) - s * s * (d * d)) / (r * r * (f * f) + s * s * (d * d))) || 0,
		m = g * r * f / s,
		v = g * -s * d / r,
		y = (t + i) / 2 + Mb(c) * m - Sb(c) * v,
		x = (e + n) / 2 + Sb(c) * m + Mb(c) * v,
		_ = Db([1, 0], [(d - m) / r, (f - v) / s]),
		w = [(d - m) / r, (f - v) / s],
		b = [( - 1 * d - m) / r, ( - 1 * f - v) / s],
		S = Db(w, b);
		Ab(w, b) <= -1 && (S = Ib),
		Ab(w, b) >= 1 && (S = 0),
		0 === a && S > 0 && (S -= 2 * Ib),
		1 === a && S < 0 && (S += 2 * Ib),
		u.addData(h, y, x, r, s, _, S, c, a)
	}
	function Tn(t) {
		if (!t) return [];
		var e, i = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
		for (e = 0; e < wb.length; e++) i = i.replace(new RegExp(wb[e], "g"), "|" + wb[e]);
		var n, o = i.split("|"),
		a = 0,
		r = 0,
		s = new ab,
		l = ab.CMD;
		for (e = 1; e < o.length; e++) {
			var h, u = o[e],
			c = u.charAt(0),
			d = 0,
			f = u.slice(1).replace(/e,-/g, "e-").split(",");
			f.length > 0 && "" === f[0] && f.shift();
			for (var p = 0; p < f.length; p++) f[p] = parseFloat(f[p]);
			for (; d < f.length && !isNaN(f[d]) && !isNaN(f[0]);) {
				var g, m, v, y, x, _, w, b = a,
				S = r;
				switch (c) {
				case "l":
					a += f[d++],
					r += f[d++],
					h = l.L,
					s.addData(h, a, r);
					break;
				case "L":
					a = f[d++],
					r = f[d++],
					h = l.L,
					s.addData(h, a, r);
					break;
				case "m":
					a += f[d++],
					r += f[d++],
					h = l.M,
					s.addData(h, a, r),
					c = "l";
					break;
				case "M":
					a = f[d++],
					r = f[d++],
					h = l.M,
					s.addData(h, a, r),
					c = "L";
					break;
				case "h":
					a += f[d++],
					h = l.L,
					s.addData(h, a, r);
					break;
				case "H":
					a = f[d++],
					h = l.L,
					s.addData(h, a, r);
					break;
				case "v":
					r += f[d++],
					h = l.L,
					s.addData(h, a, r);
					break;
				case "V":
					r = f[d++],
					h = l.L,
					s.addData(h, a, r);
					break;
				case "C":
					h = l.C,
					s.addData(h, f[d++], f[d++], f[d++], f[d++], f[d++], f[d++]),
					a = f[d - 2],
					r = f[d - 1];
					break;
				case "c":
					h = l.C,
					s.addData(h, f[d++] + a, f[d++] + r, f[d++] + a, f[d++] + r, f[d++] + a, f[d++] + r),
					a += f[d - 2],
					r += f[d - 1];
					break;
				case "S":
					g = a,
					m = r;
					var M = s.len(),
					I = s.data;
					n === l.C && (g += a - I[M - 4], m += r - I[M - 3]),
					h = l.C,
					b = f[d++],
					S = f[d++],
					a = f[d++],
					r = f[d++],
					s.addData(h, g, m, b, S, a, r);
					break;
				case "s":
					g = a,
					m = r;
					var M = s.len(),
					I = s.data;
					n === l.C && (g += a - I[M - 4], m += r - I[M - 3]),
					h = l.C,
					b = a + f[d++],
					S = r + f[d++],
					a += f[d++],
					r += f[d++],
					s.addData(h, g, m, b, S, a, r);
					break;
				case "Q":
					b = f[d++],
					S = f[d++],
					a = f[d++],
					r = f[d++],
					h = l.Q,
					s.addData(h, b, S, a, r);
					break;
				case "q":
					b = f[d++] + a,
					S = f[d++] + r,
					a += f[d++],
					r += f[d++],
					h = l.Q,
					s.addData(h, b, S, a, r);
					break;
				case "T":
					g = a,
					m = r;
					var M = s.len(),
					I = s.data;
					n === l.Q && (g += a - I[M - 4], m += r - I[M - 3]),
					a = f[d++],
					r = f[d++],
					h = l.Q,
					s.addData(h, g, m, a, r);
					break;
				case "t":
					g = a,
					m = r;
					var M = s.len(),
					I = s.data;
					n === l.Q && (g += a - I[M - 4], m += r - I[M - 3]),
					a += f[d++],
					r += f[d++],
					h = l.Q,
					s.addData(h, g, m, a, r);
					break;
				case "A":
					v = f[d++],
					y = f[d++],
					x = f[d++],
					_ = f[d++],
					w = f[d++],
					In(b = a, S = r, a = f[d++], r = f[d++], _, w, v, y, x, h = l.A, s);
					break;
				case "a":
					v = f[d++],
					y = f[d++],
					x = f[d++],
					_ = f[d++],
					w = f[d++],
					In(b = a, S = r, a += f[d++], r += f[d++], _, w, v, y, x, h = l.A, s)
				}
			}
			"z" !== c && "Z" !== c || (h = l.Z, s.addData(h)),
			n = h
		}
		return s.toStatic(),
		s
	}
	function An(t, e) {
		var i = Tn(t);
		return e = e || {},
		e.buildPath = function(t) {
			if (t.setData) t.setData(i.data),
			(e = t.getContext()) && t.rebuildPath(e);
			else {
				var e = t;
				i.rebuildPath(e)
			}
		},
		e.applyTransform = function(t) {
			_b(i, t),
			this.dirty(!0)
		},
		e
	}
	function Dn(t, e) {
		return new Mn(An(t, e))
	}
	function Cn(t, e) {
		return Mn.extend(An(t, e))
	}
	function Ln(t, e, i, n, o, a, r) {
		var s = .5 * (i - t),
		l = .5 * (n - e);
		return (2 * (e - i) + s + l) * r + ( - 3 * (e - i) - 2 * s - l) * a + s * o + e
	}
	function kn(t, e, i) {
		var n = e.points,
		o = e.smooth;
		if (n && n.length >= 2) {
			if (o && "spline" !== o) {
				var a = zb(n, o, i, e.smoothConstraint);
				t.moveTo(n[0][0], n[0][1]);
				for (var r = n.length,
				s = 0; s < (i ? r: r - 1); s++) {
					var l = a[2 * s],
					h = a[2 * s + 1],
					u = n[(s + 1) % r];
					t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1])
				}
			} else {
				"spline" === o && (n = Eb(n, i)),
				t.moveTo(n[0][0], n[0][1]);
				for (var s = 1,
				c = n.length; s < c; s++) t.lineTo(n[s][0], n[s][1])
			}
			i && t.closePath()
		}
	}
	function Pn(t, e, i) {
		var n = t.cpx2,
		o = t.cpy2;
		return null === n || null === o ? [(i ? Xi: ji)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? Xi: ji)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? Qi: Ji)(t.x1, t.cpx1, t.x2, e), (i ? Qi: Ji)(t.y1, t.cpy1, t.y2, e)]
	}
	function On(t) {
		Ke.call(this, t),
		this._displayables = [],
		this._temporaryDisplayables = [],
		this._cursor = 0,
		this.notClear = !0
	}
	function Nn(t) {
		return Mn.extend(t)
	}
	function En(t, e, i, n) {
		var o = Dn(t, e),
		a = o.getBoundingRect();
		return i && ("center" === n && (i = Rn(i, a)), Bn(o, i)),
		o
	}
	function zn(t, e, i) {
		var n = new Je({
			style: {
				image: t,
				x: e.x,
				y: e.y,
				width: e.width,
				height: e.height
			},
			onload: function(t) {
				if ("center" === i) {
					var o = {
						width: t.width,
						height: t.height
					};
					n.setStyle(Rn(e, o))
				}
			}
		});
		return n
	}
	function Rn(t, e) {
		var i, n = e.width / e.height,
		o = t.height * n;
		return i = o <= t.width ? t.height: (o = t.width) / n,
		{
			x: t.x + t.width / 2 - o / 2,
			y: t.y + t.height / 2 - i / 2,
			width: o,
			height: i
		}
	}
	function Bn(t, e) {
		if (t.applyTransform) {
			var i = t.getBoundingRect().calculateTransform(e);
			t.applyTransform(i)
		}
	}
	function Vn(t) {
		var e = t.shape,
		i = t.style.lineWidth;
		return qb(2 * e.x1) === qb(2 * e.x2) && (e.x1 = e.x2 = Wn(e.x1, i, !0)),
		qb(2 * e.y1) === qb(2 * e.y2) && (e.y1 = e.y2 = Wn(e.y1, i, !0)),
		t
	}
	function Gn(t) {
		var e = t.shape,
		i = t.style.lineWidth,
		n = e.x,
		o = e.y,
		a = e.width,
		r = e.height;
		return e.x = Wn(e.x, i, !0),
		e.y = Wn(e.y, i, !0),
		e.width = Math.max(Wn(n + a, i, !1) - e.x, 0 === a ? 0 : 1),
		e.height = Math.max(Wn(o + r, i, !1) - e.y, 0 === r ? 0 : 1),
		t
	}
	function Wn(t, e, i) {
		var n = qb(2 * t);
		return (n + qb(e)) % 2 == 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
	}
	function Fn(t) {
		return null != t && "none" != t
	}
	function Hn(t) {
		return "string" == typeof t ? kt(t, -.1) : t
	}
	function Zn(t) {
		if (t.__hoverStlDirty) {
			var e = t.style.stroke,
			i = t.style.fill,
			n = t.__hoverStl;
			n.fill = n.fill || (Fn(i) ? Hn(i) : null),
			n.stroke = n.stroke || (Fn(e) ? Hn(e) : null);
			var o = {};
			for (var a in n) null != n[a] && (o[a] = t.style[a]);
			t.__normalStl = o,
			t.__hoverStlDirty = !1
		}
	}
	function Un(t) {
		if (!t.__isHover) {
			if (Zn(t), t.useHoverLayer) t.__zr && t.__zr.addHover(t, t.__hoverStl);
			else {
				var e = t.style,
				i = e.insideRollbackOpt;
				i && lo(e),
				e.extendFrom(t.__hoverStl),
				i && (so(e, e.insideOriginalTextPosition, i), null == e.textFill && (e.textFill = i.autoColor)),
				t.dirty(!1),
				t.z2 += 1
			}
			t.__isHover = !0
		}
	}
	function jn(t) {
		if (t.__isHover) {
			var e = t.__normalStl;
			t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1),
			t.__isHover = !1
		}
	}
	function Xn(t) {
		"group" === t.type ? t.traverse(function(t) {
			"group" !== t.type && Un(t)
		}) : Un(t)
	}
	function Yn(t) {
		"group" === t.type ? t.traverse(function(t) {
			"group" !== t.type && jn(t)
		}) : jn(t)
	}
	function qn(t, e) {
		t.__hoverStl = t.hoverStyle || e || {},
		t.__hoverStlDirty = !0,
		t.__isHover && Zn(t)
	}
	function $n(t) {
		this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Xn(this)
	}
	function Kn(t) {
		this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Yn(this)
	}
	function Jn() {
		this.__isEmphasis = !0,
		Xn(this)
	}
	function Qn() {
		this.__isEmphasis = !1,
		Yn(this)
	}
	function to(t, e, i) {
		t.__hoverSilentOnTouch = i && i.hoverSilentOnTouch,
		"group" === t.type ? t.traverse(function(t) {
			"group" !== t.type && qn(t, e)
		}) : qn(t, e),
		t.on("mouseover", $n).on("mouseout", Kn),
		t.on("emphasis", Jn).on("normal", Qn)
	}
	function eo(t, e, i, n, o, a, r) {
		var s, l = (o = o || Jb).labelFetcher,
		h = o.labelDataIndex,
		u = o.labelDimIndex,
		c = i.getShallow("show"),
		d = n.getShallow("show"); (c || d) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = x(o.defaultText) ? o.defaultText(h, o) : o.defaultText));
		var f = c ? s: null,
		p = d ? A(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;
		null == f && null == p || (io(t, i, a, o), io(e, n, r, o, !0)),
		t.text = f,
		e.text = p
	}
	function io(t, e, i, n, o) {
		return no(t, e, n, o),
		i && a(t, i),
		t.host && t.host.dirty && t.host.dirty(!1),
		t
	}
	function no(t, e, i, n) {
		if ((i = i || Jb).isRectText) {
			var o = e.getShallow("position") || (n ? null: "inside");
			"outside" === o && (o = "top"),
			t.textPosition = o,
			t.textOffset = e.getShallow("offset");
			var a = e.getShallow("rotate");
			null != a && (a *= Math.PI / 180),
			t.textRotation = a,
			t.textDistance = A(e.getShallow("distance"), n ? null: 5)
		}
		var r, s = e.ecModel,
		l = s && s.option.textStyle,
		h = oo(e);
		if (h) {
			r = {};
			for (var u in h) if (h.hasOwnProperty(u)) {
				var c = e.getModel(["rich", u]);
				ao(r[u] = {},
				c, l, i, n)
			}
		}
		return t.rich = r,
		ao(t, e, l, i, n, !0),
		i.forceRich && !i.textStyle && (i.textStyle = {}),
		t
	}
	function oo(t) {
		for (var e; t && t !== t.ecModel;) {
			var i = (t.option || Jb).rich;
			if (i) {
				e = e || {};
				for (var n in i) i.hasOwnProperty(n) && (e[n] = 1)
			}
			t = t.parentModel
		}
		return e
	}
	function ao(t, e, i, n, o, a) {
		if (i = !o && i || Jb, t.textFill = ro(e.getShallow("color"), n) || i.color, t.textStroke = ro(e.getShallow("textBorderColor"), n) || i.textBorderColor, t.textStrokeWidth = A(e.getShallow("textBorderWidth"), i.textBorderWidth), !o) {
			if (a) {
				var r = t.textPosition;
				t.insideRollback = so(t, r, n),
				t.insideOriginalTextPosition = r,
				t.insideRollbackOpt = n
			}
			null == t.textFill && (t.textFill = n.autoColor)
		}
		t.fontStyle = e.getShallow("fontStyle") || i.fontStyle,
		t.fontWeight = e.getShallow("fontWeight") || i.fontWeight,
		t.fontSize = e.getShallow("fontSize") || i.fontSize,
		t.fontFamily = e.getShallow("fontFamily") || i.fontFamily,
		t.textAlign = e.getShallow("align"),
		t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"),
		t.textLineHeight = e.getShallow("lineHeight"),
		t.textWidth = e.getShallow("width"),
		t.textHeight = e.getShallow("height"),
		t.textTag = e.getShallow("tag"),
		a && n.disableBox || (t.textBackgroundColor = ro(e.getShallow("backgroundColor"), n), t.textPadding = e.getShallow("padding"), t.textBorderColor = ro(e.getShallow("borderColor"), n), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")),
		t.textShadowColor = e.getShallow("textShadowColor") || i.textShadowColor,
		t.textShadowBlur = e.getShallow("textShadowBlur") || i.textShadowBlur,
		t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || i.textShadowOffsetX,
		t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || i.textShadowOffsetY
	}
	function ro(t, e) {
		return "auto" !== t ? t: e && e.autoColor ? e.autoColor: null
	}
	function so(t, e, i) {
		var n, o = i.useInsideStyle;
		return null == t.textFill && !1 !== o && (!0 === o || i.isRectText && e && "string" == typeof e && e.indexOf("inside") >= 0) && (n = {
			textFill: null,
			textStroke: t.textStroke,
			textStrokeWidth: t.textStrokeWidth
		},
		t.textFill = "#fff", null == t.textStroke && (t.textStroke = i.autoColor, null == t.textStrokeWidth && (t.textStrokeWidth = 2))),
		n
	}
	function lo(t) {
		var e = t.insideRollback;
		e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth)
	}
	function ho(t, e) {
		var i = e || e.getModel("textStyle");
		return P([t.fontStyle || i && i.getShallow("fontStyle") || "", t.fontWeight || i && i.getShallow("fontWeight") || "", (t.fontSize || i && i.getShallow("fontSize") || 12) + "px", t.fontFamily || i && i.getShallow("fontFamily") || "sans-serif"].join(" "))
	}
	function uo(t, e, i, n, o, a) {
		if ("function" == typeof o && (a = o, o = null), n && n.isAnimationEnabled()) {
			var r = t ? "Update": "",
			s = n.getShallow("animationDuration" + r),
			l = n.getShallow("animationEasing" + r),
			h = n.getShallow("animationDelay" + r);
			"function" == typeof h && (h = h(o, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, o) : null)),
			"function" == typeof s && (s = s(o)),
			s > 0 ? e.animateTo(i, s, h || 0, l, a, !!a) : (e.stopAnimation(), e.attr(i), a && a())
		} else e.stopAnimation(),
		e.attr(i),
		a && a()
	}
	function co(t, e, i, n, o) {
		uo(!0, t, e, i, n, o)
	}
	function fo(t, e, i, n, o) {
		uo(!1, t, e, i, n, o)
	}
	function po(t, e) {
		for (var i = lt([]); t && t !== e;) ut(i, t.getLocalTransform(), i),
		t = t.parent;
		return i
	}
	function go(t, e, i) {
		return e && !c(e) && (e = Kx.getLocalTransform(e)),
		i && (e = pt([], e)),
		Q([], t, e)
	}
	function mo(t, e, i) {
		var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
		o = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
		a = ["left" === t ? -n: "right" === t ? n: 0, "top" === t ? -o: "bottom" === t ? o: 0];
		return a = go(a, e, i),
		Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right": "left": a[1] > 0 ? "bottom": "top"
	}
	function vo(t, e, i, n) {
		function o(t) {
			var e = {
				position: W(t.position),
				rotation: t.rotation
			};
			return t.shape && (e.shape = a({},
			t.shape)),
			e
		}
		if (t && e) {
			var r = function(t) {
				var e = {};
				return t.traverse(function(t) { ! t.isGroup && t.anid && (e[t.anid] = t)
				}),
				e
			} (t);
			e.traverse(function(t) {
				if (!t.isGroup && t.anid) {
					var e = r[t.anid];
					if (e) {
						var n = o(t);
						t.attr(o(e)),
						co(t, n, i, t.dataIndex)
					}
				}
			})
		}
	}
	function yo(t, e) {
		return f(t,
		function(t) {
			var i = t[0];
			i = $b(i, e.x),
			i = Kb(i, e.x + e.width);
			var n = t[1];
			return n = $b(n, e.y),
			n = Kb(n, e.y + e.height),
			[i, n]
		})
	}
	function xo(t, e, i) {
		var n = (e = a({
			rectHover: !0
		},
		e)).style = {
			strokeNoScale: !0
		};
		if (i = i || {
			x: -1,
			y: -1,
			width: 2,
			height: 2
		},
		t) return 0 === t.indexOf("image://") ? (n.image = t.slice(8), r(n, i), new Je(e)) : En(t.replace("path://", ""), e, i, "center")
	}
	function _o(t, e, i) {
		this.parentModel = e,
		this.ecModel = i,
		this.option = t
	}
	function wo(t, e, i) {
		for (var n = 0; n < e.length && (!e[n] || null != (t = t && "object" == typeof t ? t[e[n]] : null)); n++);
		return null == t && i && (t = i.get(e)),
		t
	}
	function bo(t, e) {
		var i = rS(t).getParent;
		return i ? i.call(t, e) : t.parentModel
	}
	function So(t) {
		return [t || "", sS++, Math.random().toFixed(5)].join("_")
	}
	function Mo(t) {
		return t.replace(/^\s+/, "").replace(/\s+$/, "")
	}
	function Io(t, e, i, n) {
		var o = e[1] - e[0],
		a = i[1] - i[0];
		if (0 === o) return 0 === a ? i[0] : (i[0] + i[1]) / 2;
		if (n) if (o > 0) {
			if (t <= e[0]) return i[0];
			if (t >= e[1]) return i[1]
		} else {
			if (t >= e[0]) return i[0];
			if (t <= e[1]) return i[1]
		} else {
			if (t === e[0]) return i[0];
			if (t === e[1]) return i[1]
		}
		return (t - e[0]) / o * a + i[0]
	}
	function To(t, e) {
		switch (t) {
		case "center":
		case "middle":
			t = "50%";
			break;
		case "left":
		case "top":
			t = "0%";
			break;
		case "right":
		case "bottom":
			t = "100%"
		}
		return "string" == typeof t ? Mo(t).match(/%$/) ? parseFloat(t) / 100 * e: parseFloat(t) : null == t ? NaN: +t
	}
	function Ao(t, e, i) {
		return null == e && (e = 10),
		e = Math.min(Math.max(0, e), 20),
		t = ( + t).toFixed(e),
		i ? t: +t
	}
	function Do(t) {
		return t.sort(function(t, e) {
			return t - e
		}),
		t
	}
	function Co(t) {
		if (t = +t, isNaN(t)) return 0;
		for (var e = 1,
		i = 0; Math.round(t * e) / e !== t;) e *= 10,
		i++;
		return i
	}
	function Lo(t) {
		var e = t.toString(),
		i = e.indexOf("e");
		if (i > 0) {
			var n = +e.slice(i + 1);
			return n < 0 ? -n: 0
		}
		var o = e.indexOf(".");
		return o < 0 ? 0 : e.length - 1 - o
	}
	function ko(t, e) {
		var i = Math.log,
		n = Math.LN10,
		o = Math.floor(i(t[1] - t[0]) / n),
		a = Math.round(i(Math.abs(e[1] - e[0])) / n),
		r = Math.min(Math.max( - o + a, 0), 20);
		return isFinite(r) ? r: 20
	}
	function Po(t, e, i) {
		if (!t[e]) return 0;
		var n = p(t,
		function(t, e) {
			return t + (isNaN(e) ? 0 : e)
		},
		0);
		if (0 === n) return 0;
		for (var o = Math.pow(10, i), a = f(t,
		function(t) {
			return (isNaN(t) ? 0 : t) / n * o * 100
		}), r = 100 * o, s = f(a,
		function(t) {
			return Math.floor(t)
		}), l = p(s,
		function(t, e) {
			return t + e
		},
		0), h = f(a,
		function(t, e) {
			return t - s[e]
		}); l < r;) {
			for (var u = Number.NEGATIVE_INFINITY,
			c = null,
			d = 0,
			g = h.length; d < g; ++d) h[d] > u && (u = h[d], c = d); ++s[c],
			h[c] = 0,
			++l
		}
		return s[e] / o
	}
	function Oo(t) {
		var e = 2 * Math.PI;
		return (t % e + e) % e
	}
	function No(t) {
		return t > -lS && t < lS
	}
	function Eo(t) {
		if (t instanceof Date) return t;
		if ("string" == typeof t) {
			var e = uS.exec(t);
			if (!e) return new Date(NaN);
			if (e[8]) {
				var i = +e[4] || 0;
				return "Z" !== e[8].toUpperCase() && (i -= e[8].slice(0, 3)),
				new Date(Date.UTC( + e[1], +(e[2] || 1) - 1, +e[3] || 1, i, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
			}
			return new Date( + e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
		}
		return null == t ? new Date(NaN) : new Date(Math.round(t))
	}
	function zo(t) {
		return Math.pow(10, Ro(t))
	}
	function Ro(t) {
		return Math.floor(Math.log(t) / Math.LN10)
	}
	function Bo(t, e) {
		var i, n = Ro(t),
		o = Math.pow(10, n),
		a = t / o;
		return i = e ? a < 1.5 ? 1 : a < 2.5 ? 2 : a < 4 ? 3 : a < 7 ? 5 : 10 : a < 1 ? 1 : a < 2 ? 2 : a < 3 ? 3 : a < 5 ? 5 : 10,
		t = i * o,
		n >= -20 ? +t.toFixed(n < 0 ? -n: 0) : t
	}
	function Vo(t) {
		function e(t, i, n) {
			return t.interval[n] < i.interval[n] || t.interval[n] === i.interval[n] && (t.close[n] - i.close[n] == (n ? -1 : 1) || !n && e(t, i, 1))
		}
		t.sort(function(t, i) {
			return e(t, i, 0) ? -1 : 1
		});
		for (var i = -1 / 0,
		n = 1,
		o = 0; o < t.length;) {
			for (var a = t[o].interval, r = t[o].close, s = 0; s < 2; s++) a[s] <= i && (a[s] = i, r[s] = s ? 1 : 1 - n),
			i = a[s],
			n = r[s];
			a[0] === a[1] && r[0] * r[1] != 1 ? t.splice(o, 1) : o++
		}
		return t
	}
	function Go(t) {
		return t - parseFloat(t) >= 0
	}
	function Wo(t) {
		return isNaN(t) ? "-": (t = (t + "").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "")
	}
	function Fo(t, e) {
		return t = (t || "").toLowerCase().replace(/-(.)/g,
		function(t, e) {
			return e.toUpperCase()
		}),
		e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)),
		t
	}
	function Ho(t) {
		return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
	}
	function Zo(t, e, i) {
		y(e) || (e = [e]);
		var n = e.length;
		if (!n) return "";
		for (var o = e[0].$vars || [], a = 0; a < o.length; a++) {
			var r = fS[a];
			t = t.replace(pS(r), pS(r, 0))
		}
		for (var s = 0; s < n; s++) for (var l = 0; l < o.length; l++) {
			var h = e[s][o[l]];
			t = t.replace(pS(fS[l], s), i ? Ho(h) : h)
		}
		return t
	}
	function Uo(t, e, i) {
		return d(e,
		function(e, n) {
			t = t.replace("{" + n + "}", i ? Ho(e) : e)
		}),
		t
	}
	function jo(t, e) {
		var i = (t = _(t) ? {
			color: t,
			extraCssText: e
		}: t || {}).color,
		n = t.type,
		e = t.extraCssText;
		return i ? "subItem" === n ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Ho(i) + ";" + (e || "") + '"></span>': '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + Ho(i) + ";" + (e || "") + '"></span>': ""
	}
	function Xo(t, e, i) {
		"week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
		var n = Eo(e),
		o = i ? "UTC": "",
		a = n["get" + o + "FullYear"](),
		r = n["get" + o + "Month"]() + 1,
		s = n["get" + o + "Date"](),
		l = n["get" + o + "Hours"](),
		h = n["get" + o + "Minutes"](),
		u = n["get" + o + "Seconds"]();
		return t = t.replace("MM", gS(r)).replace("M", r).replace("yyyy", a).replace("yy", a % 100).replace("dd", gS(s)).replace("d", s).replace("hh", gS(l)).replace("h", l).replace("mm", gS(h)).replace("m", h).replace("ss", gS(u)).replace("s", u)
	}
	function Yo(t) {
		return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
	}
	function qo(t, e, i, n, o) {
		var a = 0,
		r = 0;
		null == n && (n = 1 / 0),
		null == o && (o = 1 / 0);
		var s = 0;
		e.eachChild(function(l, h) {
			var u, c, d = l.position,
			f = l.getBoundingRect(),
			p = e.childAt(h + 1),
			g = p && p.getBoundingRect();
			if ("horizontal" === t) {
				var m = f.width + (g ? -g.x + f.x: 0); (u = a + m) > n || l.newline ? (a = 0, u = m, r += s + i, s = f.height) : s = Math.max(s, f.height)
			} else {
				var v = f.height + (g ? -g.y + f.y: 0); (c = r + v) > o || l.newline ? (a += s + i, r = 0, c = v, s = f.width) : s = Math.max(s, f.width)
			}
			l.newline || (d[0] = a, d[1] = r, "horizontal" === t ? a = u + i: r = c + i)
		})
	}
	function $o(t, e, i) {
		var n = e.width,
		o = e.height,
		a = To(t.x, n),
		r = To(t.y, o),
		s = To(t.x2, n),
		l = To(t.y2, o);
		return (isNaN(a) || isNaN(parseFloat(t.x))) && (a = 0),
		(isNaN(s) || isNaN(parseFloat(t.x2))) && (s = n),
		(isNaN(r) || isNaN(parseFloat(t.y))) && (r = 0),
		(isNaN(l) || isNaN(parseFloat(t.y2))) && (l = o),
		i = dS(i || 0),
		{
			width: Math.max(s - a - i[1] - i[3], 0),
			height: Math.max(l - r - i[0] - i[2], 0)
		}
	}
	function Ko(t, e, i) {
		i = dS(i || 0);
		var n = e.width,
		o = e.height,
		a = To(t.left, n),
		r = To(t.top, o),
		s = To(t.right, n),
		l = To(t.bottom, o),
		h = To(t.width, n),
		u = To(t.height, o),
		c = i[2] + i[0],
		d = i[1] + i[3],
		f = t.aspect;
		switch (isNaN(h) && (h = n - s - d - a), isNaN(u) && (u = o - l - c - r), null != f && (isNaN(h) && isNaN(u) && (f > n / o ? h = .8 * n: u = .8 * o), isNaN(h) && (h = f * u), isNaN(u) && (u = h / f)), isNaN(a) && (a = n - s - h - d), isNaN(r) && (r = o - l - u - c), t.left || t.right) {
		case "center":
			a = n / 2 - h / 2 - i[3];
			break;
		case "right":
			a = n - h - d
		}
		switch (t.top || t.bottom) {
		case "middle":
		case "center":
			r = o / 2 - u / 2 - i[0];
			break;
		case "bottom":
			r = o - u - c
		}
		a = a || 0,
		r = r || 0,
		isNaN(h) && (h = n - d - a - (s || 0)),
		isNaN(u) && (u = o - c - r - (l || 0));
		var p = new Kt(a + i[3], r + i[0], h, u);
		return p.margin = i,
		p
	}
	function Jo(t, e, i, n, o) {
		var a = !o || !o.hv || o.hv[0],
		s = !o || !o.hv || o.hv[1],
		l = o && o.boundingMode || "all";
		if (a || s) {
			var h;
			if ("raw" === l) h = "group" === t.type ? new Kt(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect();
			else if (h = t.getBoundingRect(), t.needLocalTransform()) {
				var u = t.getLocalTransform(); (h = h.clone()).applyTransform(u)
			}
			e = Ko(r({
				width: h.width,
				height: h.height
			},
			e), i, n);
			var c = t.position,
			d = a ? e.x - h.x: 0,
			f = s ? e.y - h.y: 0;
			t.attr("position", "raw" === l ? [d, f] : [c[0] + d, c[1] + f])
		}
	}
	function Qo(t, e) {
		return null != t[wS[e][0]] || null != t[wS[e][1]] && null != t[wS[e][2]]
	}
	function ta(t, e, i) {
		function n(i, n) {
			var r = {},
			l = 0,
			h = {},
			u = 0;
			if (xS(i,
			function(e) {
				h[e] = t[e]
			}), xS(i,
			function(t) {
				o(e, t) && (r[t] = h[t] = e[t]),
				a(r, t) && l++,
				a(h, t) && u++
			}), s[n]) return a(e, i[1]) ? h[i[2]] = null: a(e, i[2]) && (h[i[1]] = null),
			h;
			if (2 !== u && l) {
				if (l >= 2) return r;
				for (var c = 0; c < i.length; c++) {
					var d = i[c];
					if (!o(r, d) && o(t, d)) {
						r[d] = t[d];
						break
					}
				}
				return r
			}
			return h
		}
		function o(t, e) {
			return t.hasOwnProperty(e)
		}
		function a(t, e) {
			return null != t[e] && "auto" !== t[e]
		}
		function r(t, e, i) {
			xS(t,
			function(t) {
				e[t] = i[t]
			})
		} ! w(i) && (i = {});
		var s = i.ignoreSize; ! y(s) && (s = [s, s]);
		var l = n(wS[0], 0),
		h = n(wS[1], 1);
		r(wS[0], t, l),
		r(wS[1], t, h)
	}
	function ea(t) {
		return ia({},
		t)
	}
	function ia(t, e) {
		return e && t && xS(_S,
		function(i) {
			e.hasOwnProperty(i) && (t[i] = e[i])
		}),
		t
	}
	function na(t, e) {
		for (var i = t.length,
		n = 0; n < i; n++) if (t[n].length > e) return t[n];
		return t[i - 1]
	}
	function oa(t) {
		var e = t.get("coordinateSystem"),
		i = {
			coordSysName: e,
			coordSysDims: [],
			axisMap: z(),
			categoryAxisMap: z()
		},
		n = LS[e];
		if (n) return n(t, i, i.axisMap, i.categoryAxisMap),
		i
	}
	function aa(t) {
		return "category" === t.get("type")
	}
	function ra(t) {
		this.fromDataset = t.fromDataset,
		this.data = t.data || (t.sourceFormat === NS ? {}: []),
		this.sourceFormat = t.sourceFormat || ES,
		this.seriesLayoutBy = t.seriesLayoutBy || RS,
		this.dimensionsDefine = t.dimensionsDefine,
		this.encodeDefine = t.encodeDefine && z(t.encodeDefine),
		this.startIndex = t.startIndex || 0,
		this.dimensionsDetectCount = t.dimensionsDetectCount
	}
	function sa(t) {
		var e = t.option.source,
		i = ES;
		if (S(e)) i = zS;
		else if (y(e)) for (var n = 0,
		o = e.length; n < o; n++) {
			var a = e[n];
			if (null != a) {
				if (y(a)) {
					i = PS;
					break
				}
				if (w(a)) {
					i = OS;
					break
				}
			}
		} else if (w(e)) {
			for (var r in e) if (e.hasOwnProperty(r) && c(e[r])) {
				i = NS;
				break
			}
		} else if (null != e) throw new Error("Invalid data");
		VS(t).sourceFormat = i
	}
	function la(t) {
		return VS(t).source
	}
	function ha(t) {
		VS(t).datasetMap = z()
	}
	function ua(t) {
		var e = t.option,
		i = e.data,
		n = S(i) ? zS: kS,
		o = !1,
		a = e.seriesLayoutBy,
		r = e.sourceHeader,
		s = e.dimensions,
		l = ma(t);
		if (l) {
			var h = l.option;
			i = h.source,
			n = VS(l).sourceFormat,
			o = !0,
			a = a || h.seriesLayoutBy,
			null == r && (r = h.sourceHeader),
			s = s || h.dimensions
		}
		var u = ca(i, n, a, r, s),
		c = e.encode; ! c && l && (c = ga(t, l, i, n, a, u)),
		VS(t).source = new ra({
			data: i,
			fromDataset: o,
			seriesLayoutBy: a,
			sourceFormat: n,
			dimensionsDefine: u.dimensionsDefine,
			startIndex: u.startIndex,
			dimensionsDetectCount: u.dimensionsDetectCount,
			encodeDefine: c
		})
	}
	function ca(t, e, i, n, o) {
		if (!t) return {
			dimensionsDefine: da(o)
		};
		var a, r, s;
		if (e === PS)"auto" === n || null == n ? fa(function(t) {
			null != t && "-" !== t && (_(t) ? null == r && (r = 1) : r = 0)
		},
		i, t, 10) : r = n ? 1 : 0,
		o || 1 !== r || (o = [], fa(function(t, e) {
			o[e] = null != t ? t: ""
		},
		i, t)),
		a = o ? o.length: i === BS ? t.length: t[0] ? t[0].length: null;
		else if (e === OS) o || (o = pa(t), s = !0);
		else if (e === NS) o || (o = [], s = !0, d(t,
		function(t, e) {
			o.push(e)
		}));
		else if (e === kS) {
			var l = Ii(t[0]);
			a = y(l) && l.length || 1
		}
		var h;
		return s && d(o,
		function(t, e) {
			"name" === (w(t) ? t.name: t) && (h = e)
		}),
		{
			startIndex: r,
			dimensionsDefine: da(o),
			dimensionsDetectCount: a,
			potentialNameDimIndex: h
		}
	}
	function da(t) {
		if (t) {
			var e = z();
			return f(t,
			function(t, i) {
				if (null == (t = a({},
				w(t) ? t: {
					name: t
				})).name) return t;
				t.name += "",
				null == t.displayName && (t.displayName = t.name);
				var n = e.get(t.name);
				return n ? t.name += "-" + n.count++:e.set(t.name, {
					count: 1
				}),
				t
			})
		}
	}
	function fa(t, e, i, n) {
		if (null == n && (n = 1 / 0), e === BS) for (a = 0; a < i.length && a < n; a++) t(i[a] ? i[a][0] : null, a);
		else for (var o = i[0] || [], a = 0; a < o.length && a < n; a++) t(o[a], a)
	}
	function pa(t) {
		for (var e, i = 0; i < t.length && !(e = t[i++]););
		if (e) {
			var n = [];
			return d(e,
			function(t, e) {
				n.push(e)
			}),
			n
		}
	}
	function ga(t, e, i, n, o, a) {
		var r = oa(t),
		s = {},
		l = [],
		h = [],
		u = t.subType,
		c = z(["pie", "map", "funnel"]),
		f = z(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
		if (r && null != f.get(u)) {
			var p = t.ecModel,
			g = VS(p).datasetMap,
			m = e.uid + "_" + o,
			v = g.get(m) || g.set(m, {
				categoryWayDim: 1,
				valueWayDim: 0
			});
			d(r.coordSysDims,
			function(t) {
				if (null == r.firstCategoryDimIndex) {
					e = v.valueWayDim++;
					s[t] = e,
					h.push(e)
				} else if (r.categoryAxisMap.get(t)) s[t] = 0,
				l.push(0);
				else {
					var e = v.categoryWayDim++;
					s[t] = e,
					h.push(e)
				}
			})
		} else if (null != c.get(u)) {
			for (var y, x = 0; x < 5 && null == y; x++) ya(i, n, o, a.dimensionsDefine, a.startIndex, x) || (y = x);
			if (null != y) {
				s.value = y;
				var _ = a.potentialNameDimIndex || Math.max(y - 1, 0);
				h.push(_),
				l.push(_)
			}
		}
		return l.length && (s.itemName = l),
		h.length && (s.seriesName = h),
		s
	}
	function ma(t) {
		var e = t.option;
		if (!e.data) return t.ecModel.getComponent("dataset", e.datasetIndex || 0)
	}
	function va(t, e) {
		return ya(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
	}
	function ya(t, e, i, n, o, a) {
		function r(t) {
			return (null == t || !isFinite(t) || "" === t) && (!(!_(t) || "-" === t) || void 0)
		}
		var s;
		if (S(t)) return ! 1;
		var l;
		if (n && (l = w(l = n[a]) ? l.name: l), e === PS) if (i === BS) {
			for (var h = t[a], u = 0; u < (h || []).length && u < 5; u++) if (null != (s = r(h[o + u]))) return s
		} else for (u = 0; u < t.length && u < 5; u++) {
			var c = t[o + u];
			if (c && null != (s = r(c[a]))) return s
		} else if (e === OS) {
			if (!l) return;
			for (u = 0; u < t.length && u < 5; u++) if ((d = t[u]) && null != (s = r(d[l]))) return s
		} else if (e === NS) {
			if (!l) return;
			if (! (h = t[l]) || S(h)) return ! 1;
			for (u = 0; u < h.length && u < 5; u++) if (null != (s = r(h[u]))) return s
		} else if (e === kS) for (u = 0; u < t.length && u < 5; u++) {
			var d = t[u],
			f = Ii(d);
			if (!y(f)) return ! 1;
			if (null != (s = r(f[a]))) return s
		}
		return ! 1
	}
	function xa(t, e) {
		if (e) {
			var i = e.seiresIndex,
			n = e.seriesId,
			o = e.seriesName;
			return null != i && t.componentIndex !== i || null != n && t.id !== n || null != o && t.name !== o
		}
	}
	function _a(t, e) {
		d(e,
		function(e, o) {
			IS.hasClass(o) || ("object" == typeof e ? t[o] = t[o] ? n(t[o], e, !1) : i(e) : null == t[o] && (t[o] = e))
		})
	}
	function wa(t) {
		t = t,
		this.option = {},
		this.option[GS] = 1,
		this._componentsMap = z({
			series: []
		}),
		this._seriesIndices,
		this._seriesIndicesMap,
		_a(t, this._theme.option),
		n(t, AS, !1),
		this.mergeOption(t)
	}
	function ba(t, e) {
		y(e) || (e = e ? [e] : []);
		var i = {};
		return d(e,
		function(e) {
			i[e] = (t.get(e) || []).slice()
		}),
		i
	}
	function Sa(t, e, i) {
		return e.type ? e.type: i ? i.subType: IS.determineSubType(t, e)
	}
	function Ma(t, e) {
		t._seriesIndicesMap = z(t._seriesIndices = f(e,
		function(t) {
			return t.componentIndex
		}) || [])
	}
	function Ia(t, e) {
		return e.hasOwnProperty("subType") ? g(t,
		function(t) {
			return t.subType === e.subType
		}) : t
	}
	function Ta(t) {
		d(FS,
		function(e) {
			this[e] = m(t[e], t)
		},
		this)
	}
	function Aa() {
		this._coordinateSystems = []
	}
	function Da(t) {
		this._api = t,
		this._timelineOptions = [],
		this._mediaList = [],
		this._mediaDefault,
		this._currentMediaIndices = [],
		this._optionBackup,
		this._newBaseOption
	}
	function Ca(t, e, i) {
		var n, o, a = [],
		r = [],
		s = t.timeline;
		if (t.baseOption && (o = t.baseOption), (s || t.options) && (o = o || {},
		a = (t.options || []).slice()), t.media) {
			o = o || {};
			var l = t.media;
			ZS(l,
			function(t) {
				t && t.option && (t.query ? r.push(t) : n || (n = t))
			})
		}
		return o || (o = t),
		o.timeline || (o.timeline = s),
		ZS([o].concat(a).concat(f(r,
		function(t) {
			return t.option
		})),
		function(t) {
			ZS(e,
			function(e) {
				e(t, i)
			})
		}),
		{
			baseOption: o,
			timelineOptions: a,
			mediaDefault: n,
			mediaList: r
		}
	}
	function La(t, e, i) {
		var n = {
			width: e,
			height: i,
			aspectratio: e / i
		},
		o = !0;
		return d(t,
		function(t, e) {
			var i = e.match(YS);
			if (i && i[1] && i[2]) {
				var a = i[1],
				r = i[2].toLowerCase();
				ka(n[r], t, a) || (o = !1)
			}
		}),
		o
	}
	function ka(t, e, i) {
		return "min" === i ? t >= e: "max" === i ? t <= e: t === e
	}
	function Pa(t, e) {
		return t.join(",") === e.join(",")
	}
	function Oa(t, e) {
		ZS(e = e || {},
		function(e, i) {
			if (null != e) {
				var n = t[i];
				if (IS.hasClass(i)) {
					e = Si(e);
					var o = Ai(n = Si(n), e);
					t[i] = jS(o,
					function(t) {
						return t.option && t.exist ? XS(t.exist, t.option, !0) : t.exist || t.option
					})
				} else t[i] = XS(n, e, !0)
			}
		})
	}
	function Na(t) {
		var e = t && t.itemStyle;
		if (e) for (var i = 0,
		o = KS.length; i < o; i++) {
			var a = KS[i],
			r = e.normal,
			s = e.emphasis;
			r && r[a] && (t[a] = t[a] || {},
			t[a].normal ? n(t[a].normal, r[a]) : t[a].normal = r[a], r[a] = null),
			s && s[a] && (t[a] = t[a] || {},
			t[a].emphasis ? n(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null)
		}
	}
	function Ea(t, e, i) {
		if (t && t[e] && (t[e].normal || t[e].emphasis)) {
			var n = t[e].normal,
			o = t[e].emphasis;
			n && (i ? (t[e].normal = t[e].emphasis = null, r(t[e], n)) : t[e] = n),
			o && (t.emphasis = t.emphasis || {},
			t.emphasis[e] = o)
		}
	}
	function za(t) {
		Ea(t, "itemStyle"),
		Ea(t, "lineStyle"),
		Ea(t, "areaStyle"),
		Ea(t, "label"),
		Ea(t, "labelLine"),
		Ea(t, "upperLabel"),
		Ea(t, "edgeLabel")
	}
	function Ra(t) {
		var e = $S(t) && t.textStyle;
		if (e) for (var i = 0,
		n = yw.length; i < n; i++) {
			var o = yw[i];
			e.hasOwnProperty(o) && (t[o] = e[o])
		}
	}
	function Ba(t) {
		t && (za(t), Ra(t.label), t.emphasis && Ra(t.emphasis.label))
	}
	function Va(t) {
		if ($S(t)) {
			Na(t),
			za(t),
			Ra(t.label),
			Ra(t.upperLabel),
			Ra(t.edgeLabel),
			t.emphasis && (Ra(t.emphasis.label), Ra(t.emphasis.upperLabel), Ra(t.emphasis.edgeLabel));
			var e = t.markPoint;
			e && (Na(e), Ba(e));
			var i = t.markLine;
			i && (Na(i), Ba(i));
			var n = t.markArea;
			n && Ba(n);
			var o = t.data;
			if ("graph" === t.type) {
				o = o || t.nodes;
				var a = t.links || t.edges;
				if (a && !S(a)) for (s = 0; s < a.length; s++) Ba(a[s]);
				d(t.categories,
				function(t) {
					za(t)
				})
			}
			if (o && !S(o)) for (s = 0; s < o.length; s++) Ba(o[s]);
			if ((e = t.markPoint) && e.data) for (var r = e.data,
			s = 0; s < r.length; s++) Ba(r[s]);
			if ((i = t.markLine) && i.data) for (var l = i.data,
			s = 0; s < l.length; s++) y(l[s]) ? (Ba(l[s][0]), Ba(l[s][1])) : Ba(l[s]);
			"gauge" === t.type ? (Ra(t, "axisLabel"), Ra(t, "title"), Ra(t, "detail")) : "treemap" === t.type && (Ea(t.breadcrumb, "itemStyle"), d(t.levels,
			function(t) {
				za(t)
			}))
		}
	}
	function Ga(t) {
		return y(t) ? t: t ? [t] : []
	}
	function Wa(t) {
		return (y(t) ? t[0] : t) || {}
	}
	function Fa(t, e) {
		e = e.split(",");
		for (var i = t,
		n = 0; n < e.length && null != (i = i && i[e[n]]); n++);
		return i
	}
	function Ha(t, e, i, n) {
		e = e.split(",");
		for (var o, a = t,
		r = 0; r < e.length - 1; r++) null == a[o = e[r]] && (a[o] = {}),
		a = a[o]; (n || null == a[e[r]]) && (a[e[r]] = i)
	}
	function Za(t) {
		d(QS,
		function(e) {
			e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
		})
	}
	function Ua(t, e) {
		ra.isInstance(t) || (t = ra.seriesDataToSource(t)),
		this._source = t;
		var i = this._data = t.data,
		n = t.sourceFormat;
		n === zS && (this._offset = 0, this._dimSize = e, this._data = i),
		a(this, nM[n === PS ? n + "_" + t.seriesLayoutBy: n])
	}
	function ja() {
		return this._data.length
	}
	function Xa(t) {
		return this._data[t]
	}
	function Ya(t) {
		for (var e = 0; e < t.length; e++) this._data.push(t[e])
	}
	function qa(t, e, i, n) {
		return null != i ? t[i] : t
	}
	function $a(t, e, i, n) {
		return Ka(t[n], this._dimensionInfos[e])
	}
	function Ka(t, e) {
		var i = e && e.type;
		if ("ordinal" === i) {
			var n = e && e.ordinalMeta;
			return n ? n.parseAndCollect(t) : t
		}
		return "time" === i && "number" != typeof t && null != t && "-" !== t && (t = +Eo(t)),
		null == t || "" === t ? NaN: +t
	}
	function Ja(t, e, i) {
		if (t) {
			var n = t.getRawDataItem(e);
			if (null != n) {
				var o, a, r = t.getProvider().getSource().sourceFormat,
				s = t.getDimensionInfo(i);
				return s && (o = s.name, a = s.index),
				oM[r](n, e, a, o)
			}
		}
	}
	function Qa(t, e, i) {
		if (t) {
			var n = t.getProvider().getSource().sourceFormat;
			if (n === kS || n === OS) {
				var o = t.getRawDataItem(e);
				return n !== kS || w(o) || (o = null),
				o ? o[i] : void 0
			}
		}
	}
	function tr(t) {
		return new er(t)
	}
	function er(t) {
		t = t || {},
		this._reset = t.reset,
		this._plan = t.plan,
		this._count = t.count,
		this._onDirty = t.onDirty,
		this._dirty = !0,
		this.context
	}
	function ir(t, e) {
		t._dueIndex = t._outputDueEnd = t._dueEnd = 0,
		t._settedOutputEnd = null,
		t._progress = !e && t._reset && t._reset(t.context);
		var i = t._downstream;
		i && i.dirty()
	}
	function nr(t) {
		var e = t.name;
		vw === e && (t.name = or(t) || e)
	}
	function or(t) {
		var e = t.getRawData(),
		i = [];
		return d(e.mapDimension("seriesName", !0),
		function(t) {
			var n = e.getDimensionInfo(t);
			n.displayName && i.push(n.displayName)
		}),
		i.join(" ")
	}
	function ar(t) {
		return t.model.getRawData().count()
	}
	function rr(t) {
		var e = t.model;
		return e.setData(e.getRawData().cloneShallow()),
		sr
	}
	function sr(t, e) {
		t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
	}
	function lr(t, e) {
		d(t.CHANGABLE_METHODS,
		function(i) {
			t.wrapMethod(i, v(hr, e))
		})
	}
	function hr(t) {
		var e = ur(t);
		e && e.setOutputEnd(this.count())
	}
	function ur(t) {
		var e = (t.ecModel || {}).scheduler,
		i = e && e.getPipeline(t.uid);
		if (i) {
			var n = i.currentTask;
			if (n) {
				var o = n.agentStubMap;
				o && (n = o.get(t.uid))
			}
			return n
		}
	}
	function cr() {
		this.group = new S_,
		this.uid = So("viewChart"),
		this.renderTask = tr({
			plan: pr,
			reset: gr
		}),
		this.renderTask.context = {
			view: this
		}
	}
	function dr(t, e) {
		if (t && (t.trigger(e), "group" === t.type)) for (var i = 0; i < t.childCount(); i++) dr(t.childAt(i), e)
	}
	function fr(t, e, i) {
		var n = ki(t, e);
		null != n ? d(Si(n),
		function(e) {
			dr(t.getItemGraphicEl(e), i)
		}) : t.eachItemGraphicEl(function(t) {
			dr(t, i)
		})
	}
	function pr(t) {
		return gM(t.model)
	}
	function gr(t) {
		var e = t.model,
		i = t.ecModel,
		n = t.api,
		o = t.payload,
		a = e.pipelineContext.incrementalRender,
		r = t.view,
		s = o && pM(o).updateMethod;
		return r[a && r.incrementalPrepareRender ? "incrementalPrepareRender": s && r[s] ? s: "render"](e, i, n, o),
		a ? mr: null
	}
	function mr(t, e) {
		e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
	}
	function vr(t, e, i) {
		function n() {
			u = (new Date).getTime(),
			c = null,
			t.apply(r, s || [])
		}
		var o, a, r, s, l, h = 0,
		u = 0,
		c = null;
		e = e || 0;
		var d = function() {
			o = (new Date).getTime(),
			r = this,
			s = arguments;
			var t = l || e,
			d = l || i;
			l = null,
			a = o - (d ? h: u) - t,
			clearTimeout(c),
			d ? c = setTimeout(n, t) : a >= 0 ? n() : c = setTimeout(n, -a),
			h = o
		};
		return d.clear = function() {
			c && (clearTimeout(c), c = null)
		},
		d.debounceNextCall = function(t) {
			l = t
		},
		d
	}
	function yr(t, e, i, n) {
		var o = t[e];
		if (o) {
			var a = o[vM] || o,
			r = o[xM];
			if (o[yM] !== i || r !== n) {
				if (null == i || !n) return t[e] = a; (o = t[e] = vr(a, i, "debounce" === n))[vM] = a,
				o[xM] = n,
				o[yM] = i
			}
			return o
		}
	}
	function xr(t, e) {
		var i = t[e];
		i && i[vM] && (t[e] = i[vM])
	}
	function _r(t, e) {
		this.ecInstance = t,
		this.api = e,
		this.unfinished,
		this._stageTaskMap = z()
	}
	function wr(t, e, i, n, o) {
		function a(t, e) {
			return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
		}
		o = o || {};
		var r;
		d(e,
		function(e, s) {
			if (!o.visualType || o.visualType === e.visualType) {
				var l = t._stageTaskMap.get(e.uid),
				h = l.seriesTaskMap,
				u = l.overallTask;
				if (u) {
					var c, d = u.agentStubMap;
					d.each(function(t) {
						a(o, t) && (t.dirty(), c = !0)
					}),
					c && u.dirty(),
					IM(u, n);
					var f = t.getPerformArgs(u, o.block);
					d.each(function(t) {
						t.perform(f)
					}),
					r |= u.perform(f)
				} else h && h.each(function(s, l) {
					a(o, s) && s.dirty();
					var h = t.getPerformArgs(s, o.block);
					h.skip = !e.performRawSeries && i.isSeriesFiltered(s.context.model),
					IM(s, n),
					r |= s.perform(h)
				})
			}
		}),
		t.unfinished |= r
	}
	function br(t, e, i, n, o) {
		function a(i) {
			var a = i.uid,
			s = r.get(a) || r.set(a, tr({
				plan: Dr,
				reset: Cr,
				count: kr
			}));
			s.context = {
				model: i,
				ecModel: n,
				api: o,
				useClearVisual: e.isVisual && !e.isLayout,
				plan: e.plan,
				reset: e.reset,
				scheduler: t
			},
			Pr(t, i, s)
		}
		var r = i.seriesTaskMap || (i.seriesTaskMap = z()),
		s = e.seriesType,
		l = e.getTargetSeries;
		e.createOnAllSeries ? n.eachRawSeries(a) : s ? n.eachRawSeriesByType(s, a) : l && l(n, o).each(a);
		var h = t._pipelineMap;
		r.each(function(t, e) {
			h.get(e) || (t.dispose(), r.removeKey(e))
		})
	}
	function Sr(t, e, i, n, o) {
		function a(e) {
			var i = e.uid,
			n = s.get(i) || s.set(i, tr({
				reset: Ir,
				onDirty: Ar
			}));
			n.context = {
				model: e,
				overallProgress: u,
				isOverallFilter: c
			},
			n.agent = r,
			n.__block = u,
			Pr(t, e, n)
		}
		var r = i.overallTask = i.overallTask || tr({
			reset: Mr
		});
		r.context = {
			ecModel: n,
			api: o,
			overallReset: e.overallReset,
			scheduler: t
		};
		var s = r.agentStubMap = r.agentStubMap || z(),
		l = e.seriesType,
		h = e.getTargetSeries,
		u = !0,
		c = e.isOverallFilter;
		l ? n.eachRawSeriesByType(l, a) : h ? h(n, o).each(a) : (u = !1, d(n.getSeries(), a));
		var f = t._pipelineMap;
		s.each(function(t, e) {
			f.get(e) || (t.dispose(), s.removeKey(e))
		})
	}
	function Mr(t) {
		t.overallReset(t.ecModel, t.api, t.payload)
	}
	function Ir(t, e) {
		return t.overallProgress && Tr
	}
	function Tr() {
		this.agent.dirty(),
		this.getDownstream().dirty()
	}
	function Ar() {
		this.agent && this.agent.dirty()
	}
	function Dr(t) {
		return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
	}
	function Cr(t) {
		if (t.useClearVisual && t.data.clearAllVisual(), (t.resetDefines = Si(t.reset(t.model, t.ecModel, t.api, t.payload))).length) return Lr
	}
	function Lr(t, e) {
		for (var i = e.data,
		n = e.resetDefines,
		o = 0; o < n.length; o++) {
			var a = n[o];
			if (a && a.dataEach) for (var r = t.start; r < t.end; r++) a.dataEach(i, r);
			else a && a.progress && a.progress(t, i)
		}
	}
	function kr(t) {
		return t.data.count()
	}
	function Pr(t, e, i) {
		var n = e.uid,
		o = t._pipelineMap.get(n); ! o.head && (o.head = i),
		o.tail && o.tail.pipe(i),
		o.tail = i,
		i.__idxInPipeline = o.count++,
		i.__pipeline = o
	}
	function Or(t) {
		TM = null;
		try {
			t(AM, DM)
		} catch(t) {}
		return TM
	}
	function Nr(t, e) {
		for (var i in e.prototype) t[i] = B
	}
	function Er(t) {
		return function(e, i, n) {
			e = e && e.toLowerCase(),
			Hx.prototype[t].call(this, e, i, n)
		}
	}
	function zr() {
		Hx.call(this)
	}
	function Rr(t, e, n) {
		function o(t, e) {
			return t.__prio - e.__prio
		}
		n = n || {},
		"string" == typeof e && (e = eI[e]),
		this.id,
		this.group,
		this._dom = t;
		var a = this._zr = _i(t, {
			renderer: n.renderer || "canvas",
			devicePixelRatio: n.devicePixelRatio,
			width: n.width,
			height: n.height
		});
		this._throttledZrFlush = vr(m(a.flush, a), 17),
		(e = i(e)) && eM(e, !0),
		this._theme = e,
		this._chartsViews = [],
		this._chartsMap = {},
		this._componentsViews = [],
		this._componentsMap = {},
		this._coordSysMgr = new Aa;
		var r = this._api = is(this);
		this._scheduler = new _r(this, r),
		Hx.call(this),
		this._messageCenter = new zr,
		this._initEvents(),
		this.resize = m(this.resize, this),
		this._pendingActions = [],
		ae(tI, o),
		ae(KM, o),
		a.animation.on("frame", this._onframe, this),
		O(this)
	}
	function Br(t, e, i) {
		var n, o = this._model,
		a = this._coordSysMgr.getCoordinateSystems();
		e = Oi(o, e);
		for (var r = 0; r < a.length; r++) {
			var s = a[r];
			if (s[t] && null != (n = s[t](o, e, i))) return n
		}
	}
	function Vr(t) {
		var e = t._model,
		i = t._scheduler;
		i.restorePipelines(e),
		i.prepareStageTasks(KM),
		i.prepareStageTasks(tI),
		jr(t, "component", e, i),
		jr(t, "chart", e, i),
		i.plan()
	}
	function Gr(t, e, i, n, o) {
		function a(n) {
			n && n.__alive && n[e] && n[e](n.__model, r, t._api, i)
		}
		var r = t._model;
		if (n) {
			var s = {};
			s[n + "Id"] = i[n + "Id"],
			s[n + "Index"] = i[n + "Index"],
			s[n + "Name"] = i[n + "Name"];
			var l = {
				mainType: n,
				query: s
			};
			o && (l.subType = o),
			r && r.eachComponent(l,
			function(e, i) {
				a(t["series" === n ? "_chartsMap": "_componentsMap"][e.__viewId])
			},
			t)
		} else NM(t._componentsViews.concat(t._chartsViews), a)
	}
	function Wr(t, e, i) {
		t[HM] = !0,
		e && Vr(t),
		XM.update.call(t),
		t[HM] = !1,
		Zr.call(t, i),
		Ur.call(t, i)
	}
	function Fr(t, e) {
		var i = t._chartsMap,
		n = t._scheduler;
		e.eachSeries(function(t) {
			n.updateStreamModes(t, i[t.__viewId])
		})
	}
	function Hr(t, e) {
		var i = t.type,
		n = t.escapeConnect,
		o = qM[i],
		s = o.actionInfo,
		l = (s.update || "update").split(":"),
		h = l.pop();
		l = null != l[0] && RM(l[0]),
		this[HM] = !0;
		var u = [t],
		c = !1;
		t.batch && (c = !0, u = f(t.batch,
		function(e) {
			return e = r(a({},
			e), t),
			e.batch = null,
			e
		}));
		var d, p = [],
		g = "highlight" === i || "downplay" === i;
		NM(u,
		function(t) {
			d = o.action(t, this._model, this._api),
			(d = d || a({},
			t)).type = s.event || d.type,
			p.push(d),
			g ? Gr(this, h, t, "series") : l && Gr(this, h, t, l.main, l.sub)
		},
		this),
		"none" === h || g || l || (this[ZM] ? (Vr(this), XM.update.call(this, t), this[ZM] = !1) : XM[h].call(this, t)),
		d = c ? {
			type: s.event || i,
			escapeConnect: n,
			batch: p
		}: p[0],
		this[HM] = !1,
		!e && this._messageCenter.trigger(d.type, d)
	}
	function Zr(t) {
		for (var e = this._pendingActions; e.length;) {
			var i = e.shift();
			Hr.call(this, i, t)
		}
	}
	function Ur(t) { ! t && this.trigger("updated")
	}
	function jr(t, e, i, n) {
		function o(t) {
			var e = "_ec_" + t.id + "_" + t.type,
			o = s[e];
			if (!o) {
				var u = RM(t.type); (o = new(a ? cM.getClass(u.main, u.sub) : cr.getClass(u.sub))).init(i, h),
				s[e] = o,
				r.push(o),
				l.add(o.group)
			}
			t.__viewId = o.__id = e,
			o.__alive = !0,
			o.__model = t,
			o.group.__ecComponentInfo = {
				mainType: t.mainType,
				index: t.componentIndex
			},
			!a && n.prepareView(o, t, i, h)
		}
		for (var a = "component" === e,
		r = a ? t._componentsViews: t._chartsViews, s = a ? t._componentsMap: t._chartsMap, l = t._zr, h = t._api, u = 0; u < r.length; u++) r[u].__alive = !1;
		a ? i.eachComponent(function(t, e) {
			"series" !== t && o(e)
		}) : i.eachSeries(o);
		for (u = 0; u < r.length;) {
			var c = r[u];
			c.__alive ? u++:(!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(i, h), r.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
		}
	}
	function Xr(t) {
		var e = {};
		t.eachSeries(function(t) {
			var i = t.get("stack"),
			n = t.getData();
			if (i && "list" === n.type) {
				var o = e[i];
				e.hasOwnProperty(i) && o && (n.stackedOn = o),
				e[i] = n
			}
		})
	}
	function Yr(t) {
		t.clearColorPalette(),
		t.eachSeries(function(t) {
			t.clearColorPalette()
		})
	}
	function qr(t, e, i, n) {
		$r(t, e, i, n),
		NM(t._chartsViews,
		function(t) {
			t.__alive = !1
		}),
		Kr(t, e, i, n),
		NM(t._chartsViews,
		function(t) {
			t.__alive || t.remove(e, i)
		})
	}
	function $r(t, e, i, n, o) {
		NM(o || t._componentsViews,
		function(t) {
			var o = t.__model;
			t.render(o, e, i, n),
			es(o, t)
		})
	}
	function Kr(t, e, i, n, o) {
		var a, r = t._scheduler;
		e.eachSeries(function(e) {
			var i = t._chartsMap[e.__viewId];
			i.__alive = !0;
			var s = i.renderTask;
			r.updatePayload(s, n),
			o && o.get(e.uid) && s.dirty(),
			a |= s.perform(r.getPerformArgs(s)),
			i.group.silent = !!e.get("silent"),
			es(e, i),
			ts(e, i)
		}),
		r.unfinished |= a,
		Qr(t._zr, e),
		bM(t._zr.dom, e)
	}
	function Jr(t, e) {
		NM(QM,
		function(i) {
			i(t, e)
		})
	}
	function Qr(t, e) {
		var i = t.storage,
		n = 0;
		i.traverse(function(t) {
			t.isGroup || n++
		}),
		n > e.get("hoverLayerThreshold") && !_x.node && i.traverse(function(t) {
			t.isGroup || (t.useHoverLayer = !0)
		})
	}
	function ts(t, e) {
		var i = t.get("blendMode") || null;
		e.group.traverse(function(t) {
			t.isGroup || t.style.blend !== i && t.setStyle("blend", i),
			t.eachPendingDisplayable && t.eachPendingDisplayable(function(t) {
				t.setStyle("blend", i)
			})
		})
	}
	function es(t, e) {
		var i = t.get("z"),
		n = t.get("zlevel");
		e.group.traverse(function(t) {
			"group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n))
		})
	}
	function is(t) {
		var e = t._coordSysMgr;
		return a(new Ta(t), {
			getCoordinateSystems: m(e.getCoordinateSystems, e),
			getComponentByElement: function(e) {
				for (; e;) {
					var i = e.__ecComponentInfo;
					if (null != i) return t._model.getComponent(i.mainType, i.index);
					e = e.parent
				}
			}
		})
	}
	function ns(t) {
		function e(t, e) {
			for (var n = 0; n < t.length; n++) t[n][i] = e
		}
		var i = "__connectUpdateStatus";
		NM($M,
		function(n, o) {
			t._messageCenter.on(o,
			function(n) {
				if (oI[t.group] && 0 !== t[i]) {
					if (n && n.escapeConnect) return;
					var o = t.makeActionFromEvent(n),
					a = [];
					NM(nI,
					function(e) {
						e !== t && e.group === t.group && a.push(e)
					}),
					e(a, 0),
					NM(a,
					function(t) {
						1 !== t[i] && t.dispatchAction(o)
					}),
					e(a, 2)
				}
			})
		})
	}
	function os(t) {
		oI[t] = !1
	}
	function as(t) {
		return nI[zi(t, sI)]
	}
	function rs(t, e) {
		eI[t] = e
	}
	function ss(t) {
		JM.push(t)
	}
	function ls(t, e) {
		fs(KM, t, e, VM)
	}
	function hs(t, e, i) {
		"function" == typeof e && (i = e, e = "");
		var n = zM(t) ? t.type: [t, t = {
			event: e
		}][0];
		t.event = (t.event || n).toLowerCase(),
		e = t.event,
		OM(UM.test(n) && UM.test(e)),
		qM[n] || (qM[n] = {
			action: i,
			actionInfo: t
		}),
		$M[e] = n
	}
	function us(t, e) {
		Aa.register(t, e)
	}
	function cs(t, e) {
		fs(tI, t, e, GM, "layout")
	}
	function ds(t, e) {
		fs(tI, t, e, WM, "visual")
	}
	function fs(t, e, i, n, o) { (EM(e) || zM(e)) && (i = e, e = n);
		var a = _r.wrapStageHandler(i, o);
		return a.__prio = e,
		a.__raw = i,
		t.push(a),
		a
	}
	function ps(t, e) {
		iI[t] = e
	}
	function gs(t) {
		return IS.extend(t)
	}
	function ms(t) {
		return cM.extend(t)
	}
	function vs(t) {
		return uM.extend(t)
	}
	function ys(t) {
		return cr.extend(t)
	}
	function xs(t) {
		return lI[t]
	}
	function _s(t) {
		return t
	}
	function ws(t, e, i, n, o) {
		this._old = t,
		this._new = e,
		this._oldKeyGetter = i || _s,
		this._newKeyGetter = n || _s,
		this.context = o
	}
	function bs(t, e, i, n, o) {
		for (var a = 0; a < t.length; a++) {
			var r = "_ec_" + o[n](t[a], a),
			s = e[r];
			null == s ? (i.push(r), e[r] = a) : (s.length || (e[r] = s = [s]), s.push(a))
		}
	}
	function Ss(t) {
		var e = {},
		i = e.encode = {},
		n = e.coordDimMap = z(),
		o = [];
		d(t.dimensions,
		function(e) {
			var a = t.getDimensionInfo(e),
			r = a.coordDim;
			if (r) {
				var s = i[r];
				i.hasOwnProperty(r) || (s = i[r] = []),
				s[a.coordDimIndex] = e,
				a.isSysCoord && Is(a.type) && (o[0] = e),
				n.set(r, 1)
			}
			cI.each(function(t, e) {
				var n = i[e];
				i.hasOwnProperty(e) || (n = i[e] = []);
				var o = a.otherDims[e];
				null != o && !1 !== o && (n[o] = a.name)
			})
		});
		var a = [];
		n.each(function(t, e) {
			a = a.concat(i[e])
		}),
		e.dataDimsOnCoord = a;
		var r = i.label;
		r && r.length && (o = r.slice());
		var s = o.slice(),
		l = i.tooltip;
		return l && l.length && (s = l.slice()),
		i.defaultedLabel = o,
		i.defaultedTooltip = s,
		e
	}
	function Ms(t) {
		return "category" === t ? "ordinal": "time" === t ? "time": "float"
	}
	function Is(t) {
		return ! ("ordinal" === t || "time" === t)
	}
	function Ts(t) {
		var e = typeof pI.Uint32Array === fI ? Array: pI.Uint32Array,
		i = typeof pI.Uint16Array === fI ? Array: pI.Uint16Array;
		return t._rawCount > 65535 ? e: i
	}
	function As(t) {
		var e = t.constructor;
		return e === Array ? t.slice() : new e(t)
	}
	function Ds(t, e) {
		d(vI.concat(e.__wrappedMethods || []),
		function(i) {
			e.hasOwnProperty(i) && (t[i] = e[i])
		}),
		t.__wrappedMethods = e.__wrappedMethods
	}
	function Cs(t) {
		return t
	}
	function Ls(t) {
		return t < this._count && t >= 0 ? this._indices[t] : -1
	}
	function ks(t, e) {
		var i = t._idList[e];
		return null == i && (i = t._getIdFromStore(e)),
		null == i && (i = gI + e),
		i
	}
	function Ps(t) {
		return y(t) || (t = [t]),
		t
	}
	function Os(t, e) {
		var i = t.dimensions,
		n = new yI(f(i, t.getDimensionInfo, t), t.hostModel);
		Ds(n, t);
		for (var o = n._storage = {},
		a = t._storage,
		r = 0; r < i.length; r++) {
			var s = i[r];
			a[s] && (o[s] = l(e, s) >= 0 ? Ns(a[s]) : a[s])
		}
		return n
	}
	function Ns(t) {
		for (var e = new Array(t.length), i = 0; i < t.length; i++) e[i] = As(t[i]);
		return e
	}
	function Es(t, e, n) {
		function o(t, e, i) {
			null != cI.get(e) ? t.otherDims[e] = i: (t.coordDim = e, t.coordDimIndex = i, u.set(e, !0))
		}
		ra.isInstance(e) || (e = ra.seriesDataToSource(e)),
		n = n || {},
		t = (t || []).slice();
		for (var s = (n.dimsDef || []).slice(), l = z(n.encodeDef), h = z(), u = z(), c = [], f = zs(e, t, s, n.dimCount), p = 0; p < f; p++) {
			var g = s[p] = a({},
			w(s[p]) ? s[p] : {
				name: s[p]
			}),
			m = g.name,
			v = c[p] = {
				otherDims: {}
			};
			null != m && null == h.get(m) && (v.name = v.displayName = m, h.set(m, p)),
			null != g.type && (v.type = g.type),
			null != g.displayName && (v.displayName = g.displayName)
		}
		l.each(function(t, e) {
			t = Si(t).slice();
			var i = l.set(e, []);
			d(t,
			function(t, n) {
				_(t) && (t = h.get(t)),
				null != t && t < f && (i[n] = t, o(c[t], e, n))
			})
		});
		var y = 0;
		d(t,
		function(t, e) {
			var n, t, a, s;
			if (_(t)) n = t,
			t = {};
			else {
				n = t.name;
				var h = t.ordinalMeta;
				t.ordinalMeta = null,
				(t = i(t)).ordinalMeta = h,
				a = t.dimsDef,
				s = t.otherDims,
				t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
			}
			var u = Si(l.get(n));
			if (!u.length) for (var f = 0; f < (a && a.length || 1); f++) {
				for (; y < c.length && null != c[y].coordDim;) y++;
				y < c.length && u.push(y++)
			}
			d(u,
			function(e, i) {
				var l = c[e];
				o(r(l, t), n, i),
				null == l.name && a && (l.name = l.displayName = a[i]),
				l.isSysCoord = !0,
				s && r(l.otherDims, s)
			})
		});
		for (var x = n.extraPrefix || "value",
		b = 0; b < f; b++) null == (v = c[b] = c[b] || {}).coordDim && (v.coordDim = Rs(x, u, n.extraFromZero), v.coordDimIndex = 0, v.isExtraCoord = !0),
		null == v.name && (v.name = Rs(v.coordDim, h)),
		null == v.type && va(e, b, v.name) && (v.type = "ordinal");
		return c
	}
	function zs(t, e, i, n) {
		return null == n && (n = Math.max(t.dimensionsDetectCount || 1, e.length, i.length), d(e,
		function(t) {
			var e = t.dimsDef;
			e && (n = Math.max(n, e.length))
		})),
		n
	}
	function Rs(t, e, i) {
		if (i || null != e.get(t)) {
			for (var n = 0; null != e.get(t + n);) n++;
			t += n
		}
		return e.set(t, !0),
		t
	}
	function Bs(t, e) {
		ra.isInstance(t) || (t = ra.seriesDataToSource(t));
		var i, n = e.get("coordinateSystem"),
		o = Aa.get(n),
		a = oa(e);
		a && (i = f(a.coordSysDims,
		function(t) {
			var e = {
				name: t
			},
			i = a.axisMap.get(t);
			if (i) {
				var n = i.get("type");
				e.type = Ms(n),
				e.stackable = Vs(n)
			}
			return e
		})),
		i || (i = o && (o.getDimensionsInfo ? o.getDimensionsInfo() : o.dimensions.slice()) || ["x", "y"]);
		var r, s, l = wI(t, {
			coordDimensions: i
		});
		a && d(l,
		function(t, e) {
			var i = t.coordDim,
			n = a.categoryAxisMap.get(i);
			n && (null == r && (r = e), t.ordinalMeta = n.getOrdinalMeta()),
			null != t.otherDims.itemName && (s = !0)
		}),
		s || null == r || (l[r].otherDims.itemName = 0);
		var h = new yI(l, e),
		u = null != r && Gs(t) ?
		function(t, e, i, n) {
			return n === r ? i: this.defaultDimValueGetter(t, e, i, n)
		}: null;
		return h.hasItemOption = !1,
		h.initData(t, null, u),
		h
	}
	function Vs(t) {
		return "category" !== t && "time" !== t
	}
	function Gs(t) {
		if (t.sourceFormat === kS) {
			var e = Ws(t.data || []);
			return null != e && !y(Ii(e))
		}
	}
	function Ws(t) {
		for (var e = 0; e < t.length && null == t[e];) e++;
		return t[e]
	}
	function Fs(t) {
		this._setting = t || {},
		this._extent = [1 / 0, -1 / 0],
		this._interval = 0,
		this.init && this.init.apply(this, arguments)
	}
	function Hs(t) {
		this.categories = t.categories || [],
		this._needCollect = t.needCollect,
		this._deduplication = t.deduplication,
		this._map
	}
	function Zs(t) {
		return t._map || (t._map = z(t.categories))
	}
	function Us(t) {
		return w(t) && null != t.value ? t.value: t + ""
	}
	function js(t, e, i, n) {
		var o = {},
		a = t[1] - t[0],
		r = o.interval = Bo(a / e, !0);
		null != i && r < i && (r = o.interval = i),
		null != n && r > n && (r = o.interval = n);
		var s = o.intervalPrecision = Xs(r);
		return qs(o.niceTickExtent = [II(Math.ceil(t[0] / r) * r, s), II(Math.floor(t[1] / r) * r, s)], t),
		o
	}
	function Xs(t) {
		return Lo(t) + 2
	}
	function Ys(t, e, i) {
		t[e] = Math.max(Math.min(t[e], i[1]), i[0])
	}
	function qs(t, e) { ! isFinite(t[0]) && (t[0] = e[0]),
		!isFinite(t[1]) && (t[1] = e[1]),
		Ys(t, 0, e),
		Ys(t, 1, e),
		t[0] > t[1] && (t[0] = t[1])
	}
	function $s(t, e, i, n) {
		var o = [];
		if (!t) return o;
		e[0] < i[0] && o.push(e[0]);
		for (var a = i[0]; a <= i[1] && (o.push(a), (a = II(a + t, n)) !== o[o.length - 1]);) if (o.length > 1e4) return [];
		return e[1] > (o.length ? o[o.length - 1] : i[1]) && o.push(e[1]),
		o
	}
	function Ks(t) {
		return t.get("stack") || DI + t.seriesIndex
	}
	function Js(t) {
		return t.dim + t.index
	}
	function Qs(t, e) {
		var i = [],
		n = t.axis;
		if ("category" === n.type) {
			for (var o = n.getBandWidth(), a = 0; a < t.count; a++) i.push(r({
				bandWidth: o,
				axisKey: "axis0",
				stackId: DI + a
			},
			t));
			for (var s = el(i, e), l = [], a = 0; a < t.count; a++) {
				var h = s.axis0[DI + a];
				h.offsetCenter = h.offset + h.width / 2,
				l.push(h)
			}
			return l
		}
	}
	function tl(t, e) {
		return el(f(t,
		function(t) {
			var e = t.getData(),
			i = t.coordinateSystem.getBaseAxis(),
			n = i.getExtent(),
			o = "category" === i.type ? i.getBandWidth() : Math.abs(n[1] - n[0]) / e.count();
			return {
				bandWidth: o,
				barWidth: To(t.get("barWidth"), o),
				barMaxWidth: To(t.get("barMaxWidth"), o),
				barGap: t.get("barGap"),
				barCategoryGap: t.get("barCategoryGap"),
				axisKey: Js(i),
				stackId: Ks(t)
			}
		}), e)
	}
	function el(t, e) {
		var i = {};
		d(t,
		function(t, e) {
			var n = t.axisKey,
			o = t.bandWidth,
			a = i[n] || {
				bandWidth: o,
				remainedWidth: o,
				autoWidthCount: 0,
				categoryGap: "20%",
				gap: "30%",
				stacks: {}
			},
			r = a.stacks;
			i[n] = a;
			var s = t.stackId;
			r[s] || a.autoWidthCount++,
			r[s] = r[s] || {
				width: 0,
				maxWidth: 0
			};
			var l = t.barWidth;
			l && !r[s].width && (r[s].width = l, l = Math.min(a.remainedWidth, l), a.remainedWidth -= l);
			var h = t.barMaxWidth;
			h && (r[s].maxWidth = h);
			var u = t.barGap;
			null != u && (a.gap = u);
			var c = t.barCategoryGap;
			null != c && (a.categoryGap = c)
		});
		var n = {};
		return d(i,
		function(t, e) {
			n[e] = {};
			var i = t.stacks,
			o = t.bandWidth,
			a = To(t.categoryGap, o),
			r = To(t.gap, 1),
			s = t.remainedWidth,
			l = t.autoWidthCount,
			h = (s - a) / (l + (l - 1) * r);
			h = Math.max(h, 0),
			d(i,
			function(t, e) {
				var i = t.maxWidth;
				i && i < h && (i = Math.min(i, s), t.width && (i = Math.min(i, t.width)), s -= i, t.width = i, l--)
			}),
			h = (s - a) / (l + (l - 1) * r),
			h = Math.max(h, 0);
			var u, c = 0;
			d(i,
			function(t, e) {
				t.width || (t.width = h),
				u = t,
				c += t.width * (1 + r)
			}),
			u && (c -= u.width * r);
			var f = -c / 2;
			d(i,
			function(t, i) {
				n[e][i] = n[e][i] || {
					offset: f,
					width: t.width
				},
				f += t.width * (1 + r)
			})
		}),
		n
	}
	function il(t, e, i) {
		var n = tl(g(e.getSeriesByType(t),
		function(t) {
			return ! e.isSeriesFiltered(t) && t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
		})),
		o = {},
		a = {};
		e.eachSeriesByType(t,
		function(t) {
			if ("cartesian2d" === t.coordinateSystem.type) {
				var e = t.getData(),
				i = t.coordinateSystem,
				r = i.getBaseAxis(),
				s = Ks(t),
				l = n[Js(r)][s],
				h = l.offset,
				u = l.width,
				c = i.getOtherAxis(r),
				d = t.get("barMinHeight") || 0,
				f = r.onZero ? c.toGlobalCoord(c.dataToCoord(0)) : c.getGlobalExtent()[0],
				p = [e.mapDimension("x"), e.mapDimension("y")],
				g = e.mapArray(p,
				function(t, e) {
					return i.dataToPoint([t, e])
				},
				!0);
				o[s] = o[s] || [],
				a[s] = a[s] || [],
				e.setLayout({
					offset: h,
					size: u
				}),
				e.each(e.mapDimension(c.dim),
				function(t, i) {
					if (!isNaN(t)) {
						o[s][i] || (o[s][i] = {
							p: f,
							n: f
						},
						a[s][i] = {
							p: f,
							n: f
						});
						var n, r, l, p, m = t >= 0 ? "p": "n",
						v = g[i],
						y = o[s][i][m],
						x = a[s][i][m];
						c.isHorizontal() ? (n = y, r = v[1] + h, l = v[0] - x, p = u, a[s][i][m] += l, Math.abs(l) < d && (l = (l < 0 ? -1 : 1) * d), o[s][i][m] += l) : (n = v[0] + h, r = y, l = u, p = v[1] - x, a[s][i][m] += p, Math.abs(p) < d && (p = (p <= 0 ? -1 : 1) * d), o[s][i][m] += p),
						e.setItemLayout(i, {
							x: n,
							y: r,
							width: l,
							height: p
						})
					}
				},
				!0)
			}
		},
		this)
	}
	function nl(t, e) {
		return BI(t, RI(e))
	}
	function ol(t, e) {
		var i, n, o, a = t.type,
		r = e.getMin(),
		s = e.getMax(),
		l = null != r,
		h = null != s,
		u = t.getExtent();
		"ordinal" === a ? i = e.getCategories().length: (y(n = e.get("boundaryGap")) || (n = [n || 0, n || 0]), "boolean" == typeof n[0] && (n = [0, 0]), n[0] = To(n[0], 1), n[1] = To(n[1], 1), o = u[1] - u[0] || Math.abs(u[0])),
		null == r && (r = "ordinal" === a ? i ? 0 : NaN: u[0] - n[0] * o),
		null == s && (s = "ordinal" === a ? i ? i - 1 : NaN: u[1] + n[1] * o),
		"dataMin" === r ? r = u[0] : "function" == typeof r && (r = r({
			min: u[0],
			max: u[1]
		})),
		"dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
			min: u[0],
			max: u[1]
		})),
		(null == r || !isFinite(r)) && (r = NaN),
		(null == s || !isFinite(s)) && (s = NaN),
		t.setBlank(I(r) || I(s)),
		e.getNeedCrossZero() && (r > 0 && s > 0 && !l && (r = 0), r < 0 && s < 0 && !h && (s = 0));
		var c = e.ecModel;
		if (c) {
			var d = g(c.getSeriesByType("bar"),
			function(t) {
				return t.getBaseAxis() === e.axis
			}).length > 0;
			if (("time" === a || "interval" === a) && d) {
				var f = al(r, s, e);
				r = f.min,
				s = f.max
			}
		}
		return [r, s]
	}
	function al(t, e, i) {
		var n = i.ecModel,
		o = i.axis.getExtent(),
		a = o[1] - o[0],
		r = tl(g(n.getSeriesByType("bar"),
		function(t) {
			return ! n.isSeriesFiltered(t) && t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
		}))[i.axis.dim + i.axis.index];
		if (void 0 === r) return {
			min: t,
			max: e
		};
		var s = 1 / 0;
		d(r,
		function(t) {
			s = Math.min(t.offset, s)
		});
		var l = -1 / 0;
		d(r,
		function(t) {
			l = Math.max(t.offset + t.width, l)
		});
		var h = Math.abs(s) + l,
		u = e - t,
		c = u / (1 - (s + l) / a) - u;
		return e += c * (l / h),
		t -= c * (s / h),
		{
			min: t,
			max: e
		}
	}
	function rl(t, e) {
		var i = ol(t, e),
		n = null != e.getMin(),
		o = null != e.getMax(),
		a = e.get("splitNumber");
		"log" === t.type && (t.base = e.get("logBase"));
		var r = t.type;
		t.setExtent(i[0], i[1]),
		t.niceExtent({
			splitNumber: a,
			fixMin: n,
			fixMax: o,
			minInterval: "interval" === r || "time" === r ? e.get("minInterval") : null,
			maxInterval: "interval" === r || "time" === r ? e.get("maxInterval") : null
		});
		var s = e.get("interval");
		null != s && t.setInterval && t.setInterval(s)
	}
	function sl(t, e) {
		if (e = e || t.get("type")) switch (e) {
		case "category":
			return new MI(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
		case "value":
			return new AI;
		default:
			return (Fs.getClass(e) || AI).create(t)
		}
	}
	function ll(t, e, i, n, o) {
		var a, r = 0,
		s = 0,
		l = (n - o) / 180 * Math.PI,
		h = 1;
		e.length > 40 && (h = Math.floor(e.length / 40));
		for (var u = 0; u < t.length; u += h) {
			var c = t[u],
			d = me(e[u], i, "center", "top");
			d.x += c * Math.cos(l),
			d.y += c * Math.sin(l),
			d.width *= 1.3,
			d.height *= 1.3,
			a ? a.intersect(d) ? (s++, r = Math.max(r, s)) : (a.union(d), s = 0) : a = d.clone()
		}
		return 0 === r && h > 1 ? h: (r + 1) * h - 1
	}
	function hl(t, e) {
		var i = t.scale,
		n = i.getTicksLabels(),
		o = i.getTicks();
		return "string" == typeof e ? (e = function(t) {
			return function(e) {
				return t.replace("{value}", null != e ? e: "")
			}
		} (e), f(n, e)) : "function" == typeof e ? f(o,
		function(i, n) {
			return e(ul(t, i), n)
		},
		this) : n
	}
	function ul(t, e) {
		return "category" === t.type ? t.scale.getLabel(e) : e
	}
	function cl(t, e) {
		if ("image" !== this.type) {
			var i = this.style,
			n = this.shape;
			n && "line" === n.symbolType ? i.stroke = t: this.__isEmptyBrush ? (i.stroke = t, i.fill = e || "#fff") : (i.fill && (i.fill = t), i.stroke && (i.stroke = t)),
			this.dirty(!1)
		}
	}
	function dl(t, e, i, n, o, a, r) {
		var s = 0 === t.indexOf("empty");
		s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
		var l;
		return l = 0 === t.indexOf("image://") ? zn(t.slice(8), new Kt(e, i, n, o), r ? "center": "cover") : 0 === t.indexOf("path://") ? En(t.slice(7), {},
		new Kt(e, i, n, o), r ? "center": "cover") : new KI({
			shape: {
				symbolType: t,
				x: e,
				y: i,
				width: n,
				height: o
			}
		}),
		l.__isEmptyBrush = s,
		l.setColor = cl,
		l.setColor(a),
		l
	}
	function fl(t, e) {
		return Math.abs(t - e) < QI
	}
	function pl(t, e, i) {
		var n = 0,
		o = t[0];
		if (!o) return ! 1;
		for (var a = 1; a < t.length; a++) {
			var r = t[a];
			n += gn(o[0], o[1], r[0], r[1], e, i),
			o = r
		}
		var s = t[0];
		return fl(o[0], s[0]) && fl(o[1], s[1]) || (n += gn(o[0], o[1], s[0], s[1], e, i)),
		0 !== n
	}
	function gl(t, e, i) {
		if (this.name = t, this.geometries = e, i) i = [i[0], i[1]];
		else {
			var n = this.getBoundingRect();
			i = [n.x + n.width / 2, n.y + n.height / 2]
		}
		this.center = i
	}
	function ml(t) {
		if (!t.UTF8Encoding) return t;
		var e = t.UTF8Scale;
		null == e && (e = 1024);
		for (var i = t.features,
		n = 0; n < i.length; n++) for (var o = i[n].geometry, a = o.coordinates, r = o.encodeOffsets, s = 0; s < a.length; s++) {
			var l = a[s];
			if ("Polygon" === o.type) a[s] = vl(l, r[s], e);
			else if ("MultiPolygon" === o.type) for (var h = 0; h < l.length; h++) {
				var u = l[h];
				l[h] = vl(u, r[s][h], e)
			}
		}
		return t.UTF8Encoding = !1,
		t
	}
	function vl(t, e, i) {
		for (var n = [], o = e[0], a = e[1], r = 0; r < t.length; r += 2) {
			var s = t.charCodeAt(r) - 64,
			l = t.charCodeAt(r + 1) - 64;
			s = s >> 1 ^ -(1 & s),
			l = l >> 1 ^ -(1 & l),
			o = s += o,
			a = l += a,
			n.push([s / i, l / i])
		}
		return n
	}
	function yl(t, e) {
		var i = (t[1] - t[0]) / e / 2;
		t[0] += i,
		t[1] -= i
	}
	function xl(t, e) {
		var i = t.mapDimension("defaultedLabel", !0),
		n = i.length;
		if (1 === n) return Ja(t, e, i[0]);
		if (n) {
			for (var o = [], a = 0; a < i.length; a++) {
				var r = Ja(t, e, i[a]);
				o.push(r)
			}
			return o.join(" ")
		}
	}
	function _l(t, e) {
		var i = t.getItemVisual(e, "symbolSize");
		return i instanceof Array ? i.slice() : [ + i, +i]
	}
	function wl(t) {
		return [t[0] / 2, t[1] / 2]
	}
	function bl(t, e, i) {
		S_.call(this),
		this.updateData(t, e, i)
	}
	function Sl(t, e) {
		this.parent.drift(t, e)
	}
	function Ml(t) {
		this.group = new S_,
		this._symbolCtor = t || bl
	}
	function Il(t, e, i, n) {
		return e && !isNaN(e[0]) && !isNaN(e[1]) && !(n && n(i)) && "none" !== t.getItemVisual(i, "symbol")
	}
	function Tl(t) {
		var e = t.hostModel;
		return {
			itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
			hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
			symbolRotate: e.get("symbolRotate"),
			symbolOffset: e.get("symbolOffset"),
			hoverAnimation: e.get("hoverAnimation"),
			labelModel: e.getModel("label"),
			hoverLabelModel: e.getModel("emphasis.label"),
			cursorStyle: e.get("cursor")
		}
	}
	function Al(t) {
		return t >= 0 ? 1 : -1
	}
	function Dl(t, e, i) {
		for (var n, o = t.getBaseAxis(), a = t.getOtherAxis(o), r = o.onZero ? 0 : a.scale.getExtent()[0], s = a.dim, l = "x" === s || "radius" === s ? 1 : 0, h = e.stackedOn, u = e.get(s, i); h && Al(h.get(s, i)) === Al(u);) {
			n = h;
			break
		}
		var c = [];
		return c[l] = e.get(o.dim, i),
		c[1 - l] = n ? n.get(s, i, !0) : r,
		t.dataToPoint(c)
	}
	function Cl(t, e) {
		var i = [];
		return e.diff(t).add(function(t) {
			i.push({
				cmd: "+",
				idx: t
			})
		}).update(function(t, e) {
			i.push({
				cmd: "=",
				idx: e,
				idx1: t
			})
		}).remove(function(t) {
			i.push({
				cmd: "-",
				idx: t
			})
		}).execute(),
		i
	}
	function Ll(t) {
		return isNaN(t[0]) || isNaN(t[1])
	}
	function kl(t, e, i, n, o, a, r, s, l, h, u) {
		for (var c = 0,
		d = i,
		f = 0; f < n; f++) {
			var p = e[d];
			if (d >= o || d < 0) break;
			if (Ll(p)) {
				if (u) {
					d += a;
					continue
				}
				break
			}
			if (d === i) t[a > 0 ? "moveTo": "lineTo"](p[0], p[1]),
			mT(yT, p);
			else if (l > 0) {
				var g = d + a,
				m = e[g];
				if (u) for (; m && Ll(e[g]);) m = e[g += a];
				var v = .5,
				y = e[c];
				if (! (m = e[g]) || Ll(m)) mT(xT, p);
				else {
					Ll(m) && !u && (m = p),
					U(vT, m, y);
					var x, _;
					if ("x" === h || "y" === h) {
						var w = "x" === h ? 0 : 1;
						x = Math.abs(p[w] - y[w]),
						_ = Math.abs(p[w] - m[w])
					} else x = Vx(p, y),
					_ = Vx(p, m);
					gT(xT, p, vT, -l * (1 - (v = _ / (_ + x))))
				}
				fT(yT, yT, s),
				pT(yT, yT, r),
				fT(xT, xT, s),
				pT(xT, xT, r),
				t.bezierCurveTo(yT[0], yT[1], xT[0], xT[1], p[0], p[1]),
				gT(yT, p, vT, l * v)
			} else t.lineTo(p[0], p[1]);
			c = d,
			d += a
		}
		return f
	}
	function Pl(t, e) {
		var i = [1 / 0, 1 / 0],
		n = [ - 1 / 0, -1 / 0];
		if (e) for (var o = 0; o < t.length; o++) {
			var a = t[o];
			a[0] < i[0] && (i[0] = a[0]),
			a[1] < i[1] && (i[1] = a[1]),
			a[0] > n[0] && (n[0] = a[0]),
			a[1] > n[1] && (n[1] = a[1])
		}
		return {
			min: e ? i: n,
			max: e ? n: i
		}
	}
	function Ol(t, e) {
		if (t.length === e.length) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i],
				o = e[i];
				if (n[0] !== o[0] || n[1] !== o[1]) return
			}
			return ! 0
		}
	}
	function Nl(t) {
		return "number" == typeof t ? t: t ? .3 : 0
	}
	function El(t) {
		var e = t.getGlobalExtent();
		if (t.onBand) {
			var i = t.getBandWidth() / 2 - 1,
			n = e[1] > e[0] ? 1 : -1;
			e[0] += n * i,
			e[1] -= n * i
		}
		return e
	}
	function zl(t) {
		return t >= 0 ? 1 : -1
	}
	function Rl(t, e, i, n) {
		var o = e.getBaseAxis(),
		a = e.getOtherAxis(o),
		r = 0,
		s = a.scale.getExtent();
		"start" === n ? r = s[0] : "end" === n ? r = s[1] : (s = a.scale.getExtent())[0] > 0 ? r = s[0] : s[1] < 0 && (r = s[1]);
		var l = a.dim,
		h = "x" === l || "radius" === l ? 1 : 0,
		u = i.mapDimension(l);
		return i.mapArray(u ? [u] : [],
		function(t, n) {
			for (var a, s = i.stackedOn; s && zl(s.get(u, n)) === zl(t);) {
				a = s;
				break
			}
			var l = [];
			return l[h] = i.get(o.dim, n),
			l[1 - h] = a ? a.get(u, n, !0) : r,
			e.dataToPoint(l)
		},
		!0)
	}
	function Bl(t, e, i) {
		var n = El(t.getAxis("x")),
		o = El(t.getAxis("y")),
		a = t.getBaseAxis().isHorizontal(),
		r = Math.min(n[0], n[1]),
		s = Math.min(o[0], o[1]),
		l = Math.max(n[0], n[1]) - r,
		h = Math.max(o[0], o[1]) - s,
		u = i.get("lineStyle.width") || 2,
		c = i.get("clipOverflow") ? u / 2 : Math.max(l, h);
		a ? (s -= c, h += 2 * c) : (r -= c, l += 2 * c);
		var d = new Vb({
			shape: {
				x: r,
				y: s,
				width: l,
				height: h
			}
		});
		return e && (d.shape[a ? "width": "height"] = 0, fo(d, {
			shape: {
				width: l,
				height: h
			}
		},
		i)),
		d
	}
	function Vl(t, e, i) {
		var n = t.getAngleAxis(),
		o = t.getRadiusAxis().getExtent(),
		a = n.getExtent(),
		r = Math.PI / 180,
		s = new Ob({
			shape: {
				cx: t.cx,
				cy: t.cy,
				r0: o[0],
				r: o[1],
				startAngle: -a[0] * r,
				endAngle: -a[1] * r,
				clockwise: n.inverse
			}
		});
		return e && (s.shape.endAngle = -a[0] * r, fo(s, {
			shape: {
				endAngle: -a[1] * r
			}
		},
		i)),
		s
	}
	function Gl(t, e, i) {
		return "polar" === t.type ? Vl(t, e, i) : Bl(t, e, i)
	}
	function Wl(t, e, i) {
		for (var n = e.getBaseAxis(), o = "x" === n.dim || "radius" === n.dim ? 0 : 1, a = [], r = 0; r < t.length - 1; r++) {
			var s = t[r + 1],
			l = t[r];
			a.push(l);
			var h = [];
			switch (i) {
			case "end":
				h[o] = s[o],
				h[1 - o] = l[1 - o],
				a.push(h);
				break;
			case "middle":
				var u = (l[o] + s[o]) / 2,
				c = [];
				h[o] = c[o] = u,
				h[1 - o] = l[1 - o],
				c[1 - o] = s[1 - o],
				a.push(h),
				a.push(c);
				break;
			default:
				h[o] = l[o],
				h[1 - o] = s[1 - o],
				a.push(h)
			}
		}
		return t[r] && a.push(t[r]),
		a
	}
	function Fl(t, e) {
		var i = t.getVisual("visualMeta");
		if (i && i.length && t.count()) {
			for (var n, o = i.length - 1; o >= 0; o--) if (i[o].dimension < 2) {
				n = i[o];
				break
			}
			if (n && "cartesian2d" === e.type) {
				var a = n.dimension,
				r = t.dimensions[a],
				s = e.getAxis(r),
				l = f(n.stops,
				function(t) {
					return {
						coord: s.toGlobalCoord(s.dataToCoord(t.value)),
						color: t.color
					}
				}),
				h = l.length,
				u = n.outerColors.slice();
				h && l[0].coord > l[h - 1].coord && (l.reverse(), u.reverse());
				var c = l[0].coord - 10,
				p = l[h - 1].coord + 10,
				g = p - c;
				if (g < .001) return "transparent";
				d(l,
				function(t) {
					t.offset = (t.coord - c) / g
				}),
				l.push({
					offset: h ? l[h - 1].offset: .5,
					color: u[1] || "transparent"
				}),
				l.unshift({
					offset: h ? l[0].offset: .5,
					color: u[0] || "transparent"
				});
				var m = new jb(0, 0, 0, 0, l, !0);
				return m[r] = c,
				m[r + "2"] = p,
				m
			}
		}
	}
	function Hl(t) {
		return this._axes[t]
	}
	function Zl(t) {
		TT.call(this, t)
	}
	function Ul(t, e) {
		return e.type || (e.data ? "category": "value")
	}
	function jl(t, e, i) {
		return t.getCoordSysModel() === e
	}
	function Xl(t, e) {
		var i = e * Math.PI / 180,
		n = t.plain(),
		o = n.width,
		a = n.height,
		r = o * Math.cos(i) + a * Math.sin(i),
		s = o * Math.sin(i) + a * Math.cos(i);
		return new Kt(n.x, n.y, r, s)
	}
	function Yl(t) {
		var e, i = t.model,
		n = i.get("axisLabel.show") ? i.getFormattedLabels() : [],
		o = i.getModel("axisLabel"),
		a = 1,
		r = n.length;
		r > 40 && (a = Math.ceil(r / 40));
		for (var s = 0; s < r; s += a) if (!t.isLabelIgnored(s)) {
			var l = Xl(o.getTextRect(n[s]), o.get("rotate") || 0);
			e ? e.union(l) : e = l
		}
		return e
	}
	function ql(t, e, i) {
		this._coordsMap = {},
		this._coordsList = [],
		this._axesMap = {},
		this._axesList = [],
		this._initCartesian(t, e, i),
		this.model = t
	}
	function $l(t, e, i) {
		var n = t[e];
		if (i.onZero) {
			var o = i.onZeroAxisIndex;
			if (null == o) {
				for (var a in n) if (n.hasOwnProperty(a)) {
					var r = n[a];
					if (r && !Kl(r)) {
						o = +a;
						break
					}
				}
				null == o && (i.onZero = !1),
				i.onZeroAxisIndex = o
			} else(r = n[o]) && Kl(r) && (i.onZero = !1)
		}
	}
	function Kl(t) {
		return "category" === t.type || "time" === t.type || !ET(t)
	}
	function Jl(t, e) {
		var i = t.getExtent(),
		n = i[0] + i[1];
		t.toGlobalCoord = "x" === t.dim ?
		function(t) {
			return t + e
		}: function(t) {
			return n - t + e
		},
		t.toLocalCoord = "x" === t.dim ?
		function(t) {
			return t - e
		}: function(t) {
			return n - t + e
		}
	}
	function Ql(t, e) {
		return f(BT,
		function(e) {
			return t.getReferringComponents(e)[0]
		})
	}
	function th(t) {
		return "cartesian2d" === t.get("coordinateSystem")
	}
	function eh(t) {
		var e = {
			componentType: t.mainType
		};
		return e[t.mainType + "Index"] = t.componentIndex,
		e
	}
	function ih(t, e, i, n) {
		var o, a, r = Oo(i - t.rotation),
		s = n[0] > n[1],
		l = "start" === e && !s || "start" !== e && s;
		return No(r - VT / 2) ? (a = l ? "bottom": "top", o = "center") : No(r - 1.5 * VT) ? (a = l ? "top": "bottom", o = "center") : (a = "middle", o = r < 1.5 * VT && r > VT / 2 ? l ? "left": "right": l ? "right": "left"),
		{
			rotation: r,
			textAlign: o,
			textVerticalAlign: a
		}
	}
	function nh(t) {
		var e = t.get("tooltip");
		return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
	}
	function oh(t, e, i) {
		var n = t.get("axisLabel.showMinLabel"),
		o = t.get("axisLabel.showMaxLabel");
		e = e || [],
		i = i || [];
		var a = e[0],
		r = e[1],
		s = e[e.length - 1],
		l = e[e.length - 2],
		h = i[0],
		u = i[1],
		c = i[i.length - 1],
		d = i[i.length - 2]; ! 1 === n ? (ah(a), ah(h)) : rh(a, r) && (n ? (ah(r), ah(u)) : (ah(a), ah(h))),
		!1 === o ? (ah(s), ah(c)) : rh(l, s) && (o ? (ah(l), ah(d)) : (ah(s), ah(c)))
	}
	function ah(t) {
		t && (t.ignore = !0)
	}
	function rh(t, e, i) {
		var n = t && t.getBoundingRect().clone(),
		o = e && e.getBoundingRect().clone();
		if (n && o) {
			var a = lt([]);
			return dt(a, a, -t.rotation),
			n.applyTransform(ut([], a, t.getLocalTransform())),
			o.applyTransform(ut([], a, e.getLocalTransform())),
			n.intersect(o)
		}
	}
	function sh(t) {
		return "middle" === t || "center" === t
	}
	function lh(t, e, i) {
		var n = e.axis;
		if (e.get("axisTick.show") && !n.scale.isBlank()) {
			for (var o = e.getModel("axisTick"), a = o.getModel("lineStyle"), s = o.get("length"), l = ZT(o, i.labelInterval), h = n.getTicksCoords(o.get("alignWithLabel")), u = n.scale.getTicks(), c = e.get("axisLabel.showMinLabel"), d = e.get("axisLabel.showMaxLabel"), f = [], p = [], g = t._transform, m = [], v = h.length, y = 0; y < v; y++) if (!HT(n, y, l, v, c, d)) {
				var x = h[y];
				f[0] = x,
				f[1] = 0,
				p[0] = x,
				p[1] = i.tickDirection * s,
				g && (Q(f, f, g), Q(p, p, g));
				var _ = new Gb(Vn({
					anid: "tick_" + u[y],
					shape: {
						x1: f[0],
						y1: f[1],
						x2: p[0],
						y2: p[1]
					},
					style: r(a.getLineStyle(), {
						stroke: e.get("axisLine.lineStyle.color")
					}),
					z2: 2,
					silent: !0
				}));
				t.group.add(_),
				m.push(_)
			}
			return m
		}
	}
	function hh(t, e, i) {
		var n = e.axis;
		if (T(i.axisLabelShow, e.get("axisLabel.show")) && !n.scale.isBlank()) {
			var o = e.getModel("axisLabel"),
			a = o.get("margin"),
			r = n.scale.getTicks(),
			s = e.getFormattedLabels(),
			l = (T(i.labelRotate, o.get("rotate")) || 0) * VT / 180,
			h = FT(i.rotation, l, i.labelDirection),
			u = e.getCategories(),
			c = [],
			f = nh(e),
			p = e.get("triggerEvent"),
			g = e.get("axisLabel.showMinLabel"),
			m = e.get("axisLabel.showMaxLabel");
			return d(r,
			function(l, d) {
				if (!HT(n, d, i.labelInterval, r.length, g, m)) {
					var v = o;
					u && u[l] && u[l].textStyle && (v = new _o(u[l].textStyle, o, e.ecModel));
					var y = v.getTextColor() || e.get("axisLine.lineStyle.color"),
					x = [n.dataToCoord(l), i.labelOffset + i.labelDirection * a],
					_ = n.scale.getLabel(l),
					w = new Cb({
						anid: "label_" + l,
						position: x,
						rotation: h.rotation,
						silent: f,
						z2: 10
					});
					io(w.style, v, {
						text: s[d],
						textAlign: v.getShallow("align", !0) || h.textAlign,
						textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || h.textVerticalAlign,
						textFill: "function" == typeof y ? y("category" === n.type ? _: "value" === n.type ? l + "": l, d) : y
					}),
					p && (w.eventData = eh(e), w.eventData.targetType = "axisLabel", w.eventData.value = _),
					t._dumbGroup.add(w),
					w.updateTransform(),
					c.push(w),
					t.group.add(w),
					w.decomposeTransform()
				}
			}),
			c
		}
	}
	function uh(t, e) {
		var i = {
			axesInfo: {},
			seriesInvolved: !1,
			coordSysAxesInfo: {},
			coordSysMap: {}
		};
		return ch(i, t, e),
		i.seriesInvolved && fh(i, t),
		i
	}
	function ch(t, e, i) {
		var n = e.getComponent("tooltip"),
		o = e.getComponent("axisPointer"),
		a = o.get("link", !0) || [],
		r = [];
		UT(i.getCoordinateSystems(),
		function(i) {
			function s(n, s, l) {
				var c = l.model.getModel("axisPointer", o),
				d = c.get("show");
				if (d && ("auto" !== d || n || xh(c))) {
					null == s && (s = c.get("triggerTooltip"));
					var f = (c = n ? dh(l, u, o, e, n, s) : c).get("snap"),
					p = _h(l.model),
					g = s || f || "category" === l.type,
					m = t.axesInfo[p] = {
						key: p,
						axis: l,
						coordSys: i,
						axisPointerModel: c,
						triggerTooltip: s,
						involveSeries: g,
						snap: f,
						useHandle: xh(c),
						seriesModels: []
					};
					h[p] = m,
					t.seriesInvolved |= g;
					var v = ph(a, l);
					if (null != v) {
						var y = r[v] || (r[v] = {
							axesInfo: {}
						});
						y.axesInfo[p] = m,
						y.mapper = a[v].mapper,
						m.linkGroup = y
					}
				}
			}
			if (i.axisPointerEnabled) {
				var l = _h(i.model),
				h = t.coordSysAxesInfo[l] = {};
				t.coordSysMap[l] = i;
				var u = i.model.getModel("tooltip", n);
				if (UT(i.getAxes(), jT(s, !1, null)), i.getTooltipAxes && n && u.get("show")) {
					var c = "axis" === u.get("trigger"),
					d = "cross" === u.get("axisPointer.type"),
					f = i.getTooltipAxes(u.get("axisPointer.axis")); (c || d) && UT(f.baseAxes, jT(s, !d || "cross", c)),
					d && UT(f.otherAxes, jT(s, "cross", !1))
				}
			}
		})
	}
	function dh(t, e, n, o, a, s) {
		var l = e.getModel("axisPointer"),
		h = {};
		UT(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"],
		function(t) {
			h[t] = i(l.get(t))
		}),
		h.snap = "category" !== t.type && !!s,
		"cross" === l.get("type") && (h.type = "line");
		var u = h.label || (h.label = {});
		if (null == u.show && (u.show = !1), "cross" === a && (u.show = !0, !s)) {
			var c = h.lineStyle = l.get("crossStyle");
			c && r(u, c.textStyle)
		}
		return t.model.getModel("axisPointer", new _o(h, n, o))
	}
	function fh(t, e) {
		e.eachSeries(function(e) {
			var i = e.coordinateSystem,
			n = e.get("tooltip.trigger", !0),
			o = e.get("tooltip.show", !0);
			i && "none" !== n && !1 !== n && "item" !== n && !1 !== o && !1 !== e.get("axisPointer.show", !0) && UT(t.coordSysAxesInfo[_h(i.model)],
			function(t) {
				var n = t.axis;
				i.getAxis(n.dim) === n && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
			})
		},
		this)
	}
	function ph(t, e) {
		for (var i = e.model,
		n = e.dim,
		o = 0; o < t.length; o++) {
			var a = t[o] || {};
			if (gh(a[n + "AxisId"], i.id) || gh(a[n + "AxisIndex"], i.componentIndex) || gh(a[n + "AxisName"], i.name)) return o
		}
	}
	function gh(t, e) {
		return "all" === t || y(t) && l(t, e) >= 0 || t === e
	}
	function mh(t) {
		var e = vh(t);
		if (e) {
			var i = e.axisPointerModel,
			n = e.axis.scale,
			o = i.option,
			a = i.get("status"),
			r = i.get("value");
			null != r && (r = n.parse(r));
			var s = xh(i);
			null == a && (o.status = s ? "show": "hide");
			var l = n.getExtent().slice();
			l[0] > l[1] && l.reverse(),
			(null == r || r > l[1]) && (r = l[1]),
			r < l[0] && (r = l[0]),
			o.value = r,
			s && (o.status = e.axis.scale.isBlank() ? "hide": "show")
		}
	}
	function vh(t) {
		var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
		return e && e.axesInfo[_h(t)]
	}
	function yh(t) {
		var e = vh(t);
		return e && e.axisPointerModel
	}
	function xh(t) {
		return !! t.get("handle.show")
	}
	function _h(t) {
		return t.type + "||" + t.id
	}
	function wh(t, e, i, n, o, a) {
		var r = XT.getAxisPointerClass(t.axisPointerClass);
		if (r) {
			var s = yh(e);
			s ? (t._axisPointer || (t._axisPointer = new r)).render(e, s, n, a) : bh(t, n)
		}
	}
	function bh(t, e, i) {
		var n = t._axisPointer;
		n && n.dispose(e, i),
		t._axisPointer = null
	}
	function Sh(t, e, i) {
		i = i || {};
		var n = t.coordinateSystem,
		o = e.axis,
		a = {},
		r = o.position,
		s = o.onZero ? "onZero": r,
		l = o.dim,
		h = n.getRect(),
		u = [h.x, h.x + h.width, h.y, h.y + h.height],
		c = {
			left: 0,
			right: 1,
			top: 0,
			bottom: 1,
			onZero: 2
		},
		d = e.get("offset") || 0,
		f = "x" === l ? [u[2] - d, u[3] + d] : [u[0] - d, u[1] + d];
		if (o.onZero) {
			var p = n.getAxis("x" === l ? "y": "x", o.onZeroAxisIndex),
			g = p.toGlobalCoord(p.dataToCoord(0));
			f[c.onZero] = Math.max(Math.min(g, f[1]), f[0])
		}
		a.position = ["y" === l ? f[c[s]] : u[0], "x" === l ? f[c[s]] : u[3]],
		a.rotation = Math.PI / 2 * ("x" === l ? 0 : 1);
		var m = {
			top: -1,
			bottom: 1,
			left: -1,
			right: 1
		};
		a.labelDirection = a.tickDirection = a.nameDirection = m[r],
		a.labelOffset = o.onZero ? f[c[r]] - f[c.onZero] : 0,
		e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection),
		T(i.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
		var v = e.get("axisLabel.rotate");
		return a.labelRotate = "top" === s ? -v: v,
		a.labelInterval = o.getLabelInterval(),
		a.z2 = 1,
		a
	}
	function Mh(t, e, i, n, o, a, r) {
		eo(t, e, i.getModel("label"), i.getModel("emphasis.label"), {
			labelFetcher: o,
			labelDataIndex: a,
			defaultText: xl(o.getData(), a),
			isRectText: !0,
			autoColor: n
		}),
		Ih(t),
		Ih(e)
	}
	function Ih(t, e) {
		"outside" === t.textPosition && (t.textPosition = e)
	}
	function Th(t, e, i) {
		i.style.text = null,
		co(i, {
			shape: {
				width: 0
			}
		},
		e, t,
		function() {
			i.parent && i.parent.remove(i)
		})
	}
	function Ah(t, e, i) {
		i.style.text = null,
		co(i, {
			shape: {
				r: i.shape.r0
			}
		},
		e, t,
		function() {
			i.parent && i.parent.remove(i)
		})
	}
	function Dh(t, e, i, n, o, a, s, l) {
		var h = e.getItemVisual(i, "color"),
		u = e.getItemVisual(i, "opacity"),
		c = n.getModel("itemStyle"),
		d = n.getModel("emphasis.itemStyle").getBarItemStyle();
		l || t.setShape("r", c.get("barBorderRadius") || 0),
		t.useStyle(r({
			fill: h,
			opacity: u
		},
		c.getBarItemStyle()));
		var f = n.getShallow("cursor");
		f && t.attr("cursor", f);
		var p = s ? o.height > 0 ? "bottom": "top": o.width > 0 ? "left": "right";
		l || Mh(t.style, d, n, h, a, i, p),
		to(t, d)
	}
	function Ch(t, e) {
		var i = t.get(nA) || 0;
		return Math.min(i, Math.abs(e.width), Math.abs(e.height))
	}
	function Lh(t, e, i, n) {
		var o = e.getData(),
		a = this.dataIndex,
		r = o.getName(a),
		s = e.get("selectedOffset");
		n.dispatchAction({
			type: "pieToggleSelect",
			from: t,
			name: r,
			seriesId: e.id
		}),
		o.each(function(t) {
			kh(o.getItemGraphicEl(t), o.getItemLayout(t), e.isSelected(o.getName(t)), s, i)
		})
	}
	function kh(t, e, i, n, o) {
		var a = (e.startAngle + e.endAngle) / 2,
		r = Math.cos(a),
		s = Math.sin(a),
		l = i ? n: 0,
		h = [r * l, s * l];
		o ? t.animate().when(200, {
			position: h
		}).start("bounceOut") : t.attr("position", h)
	}
	function Ph(t, e) {
		function i() {
			a.ignore = a.hoverIgnore,
			r.ignore = r.hoverIgnore
		}
		function n() {
			a.ignore = a.normalIgnore,
			r.ignore = r.normalIgnore
		}
		S_.call(this);
		var o = new Ob({
			z2: 2
		}),
		a = new Bb,
		r = new Cb;
		this.add(o),
		this.add(a),
		this.add(r),
		this.updateData(t, e, !0),
		this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
	}
	function Oh(t, e, i, n, o, a, r) {
		function s(e, i) {
			for (var n = e; n >= 0 && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--);
		}
		function l(t, e, i, n, o, a) {
			for (var r = e ? Number.MAX_VALUE: 0, s = 0, l = t.length; s < l; s++) if ("center" !== t[s].position) {
				var h = Math.abs(t[s].y - n),
				u = t[s].len,
				c = t[s].len2,
				d = h < o + u ? Math.sqrt((o + u + c) * (o + u + c) - h * h) : Math.abs(t[s].x - i);
				e && d >= r && (d = r - 10),
				!e && d <= r && (d = r + 10),
				t[s].x = i + d * a,
				r = d
			}
		}
		t.sort(function(t, e) {
			return t.y - e.y
		});
		for (var h, u = 0,
		c = t.length,
		d = [], f = [], p = 0; p < c; p++)(h = t[p].y - u) < 0 &&
		function(e, i, n, o) {
			for (var a = e; a < i; a++) if (t[a].y += n, a > e && a + 1 < i && t[a + 1].y > t[a].y + t[a].height) return void s(a, n / 2);
			s(i - 1, n / 2)
		} (p, c, -h),
		u = t[p].y + t[p].height;
		r - u < 0 && s(c - 1, u - r);
		for (p = 0; p < c; p++) t[p].y >= i ? f.push(t[p]) : d.push(t[p]);
		l(d, !1, e, i, n, o),
		l(f, !0, e, i, n, o)
	}
	function Nh(t, e, i, n, o, a) {
		for (var r = [], s = [], l = 0; l < t.length; l++) t[l].x < e ? r.push(t[l]) : s.push(t[l]);
		Oh(s, e, i, n, 1, o, a),
		Oh(r, e, i, n, -1, o, a);
		for (l = 0; l < t.length; l++) {
			var h = t[l].linePoints;
			if (h) {
				var u = h[1][0] - h[2][0];
				t[l].x < e ? h[2][0] = t[l].x + 3 : h[2][0] = t[l].x - 3,
				h[1][1] = h[2][1] = t[l].y,
				h[1][0] = h[2][0] + u
			}
		}
	}
	function Eh() {
		this.group = new S_
	}
	function zh(t, e, i) {
		nT.call(this, t, e, i),
		this.type = "value",
		this.angle = 0,
		this.name = "",
		this.model
	}
	function Rh(t, e, i) {
		this._model = t,
		this.dimensions = [],
		this._indicatorAxes = f(t.getIndicatorModels(),
		function(t, e) {
			var i = "indicator_" + e,
			n = new zh(i, new AI);
			return n.name = t.get("name"),
			n.model = t,
			t.axis = n,
			this.dimensions.push(i),
			n
		},
		this),
		this.resize(t, i),
		this.cx,
		this.cy,
		this.r,
		this.startAngle
	}
	function Bh(t, e) {
		return r({
			show: e
		},
		t)
	}
	function Vh(t) {
		return y(t) || (t = [ + t, +t]),
		t
	}
	function Gh(t, e, i) {
		Hh(t)[e] = i
	}
	function Wh(t, e, i) {
		var n = Hh(t);
		n[e] === i && (n[e] = null)
	}
	function Fh(t, e) {
		return !! Hh(t)[e]
	}
	function Hh(t) {
		return t[bA] || (t[bA] = {})
	}
	function Zh(t) {
		this.pointerChecker,
		this._zr = t,
		this._opt = {};
		var e = m,
		n = e(Uh, this),
		o = e(jh, this),
		a = e(Xh, this),
		s = e(Yh, this),
		l = e(qh, this);
		Hx.call(this),
		this.setPointerChecker = function(t) {
			this.pointerChecker = t
		},
		this.enable = function(e, h) {
			this.disable(),
			this._opt = r(i(h) || {},
			{
				zoomOnMouseWheel: !0,
				moveOnMouseMove: !0,
				preventDefaultMouseMove: !0
			}),
			null == e && (e = !0),
			!0 !== e && "move" !== e && "pan" !== e || (t.on("mousedown", n), t.on("mousemove", o), t.on("mouseup", a)),
			!0 !== e && "scale" !== e && "zoom" !== e || (t.on("mousewheel", s), t.on("pinch", l))
		},
		this.disable = function() {
			t.off("mousedown", n),
			t.off("mousemove", o),
			t.off("mouseup", a),
			t.off("mousewheel", s),
			t.off("pinch", l)
		},
		this.dispose = this.disable,
		this.isDragging = function() {
			return this._dragging
		},
		this.isPinching = function() {
			return this._pinching
		}
	}
	function Uh(t) {
		if (! (ci(t) || t.target && t.target.draggable)) {
			var e = t.offsetX,
			i = t.offsetY;
			this.pointerChecker && this.pointerChecker(t, e, i) && (this._x = e, this._y = i, this._dragging = !0)
		}
	}
	function jh(t) {
		if (!ci(t) && Kh(this, "moveOnMouseMove", t) && this._dragging && "pinch" !== t.gestureEvent && !Fh(this._zr, "globalPan")) {
			var e = t.offsetX,
			i = t.offsetY,
			n = this._x,
			o = this._y,
			a = e - n,
			r = i - o;
			this._x = e,
			this._y = i,
			this._opt.preventDefaultMouseMove && Q_(t.event),
			this.trigger("pan", a, r, n, o, e, i)
		}
	}
	function Xh(t) {
		ci(t) || (this._dragging = !1)
	}
	function Yh(t) {
		if (Kh(this, "zoomOnMouseWheel", t) && 0 !== t.wheelDelta) {
			var e = t.wheelDelta > 0 ? 1.1 : 1 / 1.1;
			$h.call(this, t, e, t.offsetX, t.offsetY)
		}
	}
	function qh(t) {
		if (!Fh(this._zr, "globalPan")) {
			var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
			$h.call(this, t, e, t.pinchX, t.pinchY)
		}
	}
	function $h(t, e, i, n) {
		this.pointerChecker && this.pointerChecker(t, i, n) && (Q_(t.event), this.trigger("zoom", e, i, n))
	}
	function Kh(t, e, i) {
		var n = t._opt[e];
		return n && (!_(n) || i.event[n + "Key"])
	}
	function Jh(t, e, i) {
		var n = t.target,
		o = n.position;
		o[0] += e,
		o[1] += i,
		n.dirty()
	}
	function Qh(t, e, i, n) {
		var o = t.target,
		a = t.zoomLimit,
		r = o.position,
		s = o.scale,
		l = t.zoom = t.zoom || 1;
		if (l *= e, a) {
			var h = a.min || 0,
			u = a.max || 1 / 0;
			l = Math.max(Math.min(u, l), h)
		}
		var c = l / t.zoom;
		t.zoom = l,
		r[0] -= (i - r[0]) * (c - 1),
		r[1] -= (n - r[1]) * (c - 1),
		s[0] *= c,
		s[1] *= c,
		o.dirty()
	}
	function tu(t, e, i) {
		var n = e.getComponentByElement(t.topTarget),
		o = n && n.coordinateSystem;
		return n && n !== i && !SA[n.mainType] && o && o.model !== i
	}
	function eu(t, e) {
		var i = t.getItemStyle(),
		n = t.get("areaColor");
		return null != n && (i.fill = n),
		i
	}
	function iu(t, e, i, n, o) {
		i.off("click"),
		i.off("mousedown"),
		e.get("selectedMode") && (i.on("mousedown",
		function() {
			t._mouseDownFlag = !0
		}), i.on("click",
		function(a) {
			if (t._mouseDownFlag) {
				t._mouseDownFlag = !1;
				for (var r = a.target; ! r.__regions;) r = r.parent;
				if (r) {
					var s = {
						type: ("geo" === e.mainType ? "geo": "map") + "ToggleSelect",
						batch: f(r.__regions,
						function(t) {
							return {
								name: t.name,
								from: o.uid
							}
						})
					};
					s[e.mainType + "Id"] = e.id,
					n.dispatchAction(s),
					nu(e, i)
				}
			}
		}))
	}
	function nu(t, e) {
		e.eachChild(function(e) {
			d(e.__regions,
			function(i) {
				e.trigger(t.isSelected(i.name) ? "emphasis": "normal")
			})
		})
	}
	function ou(t, e) {
		var i = new S_;
		this._controller = new Zh(t.getZr()),
		this._controllerHost = {
			target: e ? i: null
		},
		this.group = i,
		this._updateGroup = e,
		this._mouseDownFlag
	}
	function au(t, e, i) {
		var n = t.getZoom(),
		o = t.getCenter(),
		a = e.zoom,
		r = t.dataToPoint(o);
		if (null != e.dx && null != e.dy) {
			r[0] -= e.dx,
			r[1] -= e.dy;
			o = t.pointToData(r);
			t.setCenter(o)
		}
		if (null != a) {
			if (i) {
				var s = i.min || 0,
				l = i.max || 1 / 0;
				a = Math.max(Math.min(n * a, l), s) / n
			}
			t.scale[0] *= a,
			t.scale[1] *= a;
			var h = t.position,
			u = (e.originX - h[0]) * (a - 1),
			c = (e.originY - h[1]) * (a - 1);
			h[0] -= u,
			h[1] -= c,
			t.updateTransform();
			o = t.pointToData(r);
			t.setCenter(o),
			t.setZoom(a * n)
		}
		return {
			center: t.getCenter(),
			zoom: t.getZoom()
		}
	}
	function ru() {
		Kx.call(this)
	}
	function su(t) {
		this.name = t,
		this.zoomLimit,
		Kx.call(this),
		this._roamTransformable = new ru,
		this._rawTransformable = new ru,
		this._center,
		this._zoom
	}
	function lu(t, e, i, n) {
		var o = i.seriesModel,
		a = o ? o.coordinateSystem: null;
		return a === this ? a[t](n) : null
	}
	function hu(t, e, i, n, o) {
		su.call(this, t),
		this.map = e,
		this._nameCoordMap = z(),
		this.loadGeoJson(i, n, o)
	}
	function uu(t, e, i, n) {
		var o = i.geoModel,
		a = i.seriesModel,
		r = o ? o.coordinateSystem: a ? a.coordinateSystem || (a.getReferringComponents("geo")[0] || {}).coordinateSystem: null;
		return r === this ? r[t](n) : null
	}
	function cu(t, e) {
		var i = t.get("boundingCoords");
		if (null != i) {
			var n = i[0],
			o = i[1];
			isNaN(n[0]) || isNaN(n[1]) || isNaN(o[0]) || isNaN(o[1]) || this.setBoundingRect(n[0], n[1], o[0] - n[0], o[1] - n[1])
		}
		var a, r = this.getBoundingRect(),
		s = t.get("layoutCenter"),
		l = t.get("layoutSize"),
		h = e.getWidth(),
		u = e.getHeight(),
		c = t.get("aspectScale") || .75,
		d = r.width / r.height * c,
		f = !1;
		s && l && (s = [To(s[0], h), To(s[1], u)], l = To(l, Math.min(h, u)), isNaN(s[0]) || isNaN(s[1]) || isNaN(l) || (f = !0));
		if (f) {
			var p = {};
			d > 1 ? (p.width = l, p.height = l / d) : (p.height = l, p.width = l * d),
			p.y = s[1] - p.height / 2,
			p.x = s[0] - p.width / 2
		} else(a = t.getBoxLayoutParams()).aspect = d,
		p = Ko(a, {
			width: h,
			height: u
		});
		this.setViewRect(p.x, p.y, p.width, p.height),
		this.setCenter(t.get("center")),
		this.setZoom(t.get("zoom"))
	}
	function du(t, e) {
		d(e.get("geoCoord"),
		function(e, i) {
			t.addGeoCoord(i, e)
		})
	}
	function fu(t, e) {
		var i = {};
		return d(t,
		function(t) {
			t.each(t.mapDimension("value"),
			function(e, n) {
				var o = "ec-" + t.getName(n);
				i[o] = i[o] || [],
				isNaN(e) || i[o].push(e)
			})
		}),
		t[0].map(t[0].mapDimension("value"),
		function(n, o) {
			for (var a = "ec-" + t[0].getName(o), r = 0, s = 1 / 0, l = -1 / 0, h = i[a].length, u = 0; u < h; u++) s = Math.min(s, i[a][u]),
			l = Math.max(l, i[a][u]),
			r += i[a][u];
			var c;
			return c = "min" === e ? s: "max" === e ? l: "average" === e ? r / h: r,
			0 === h ? NaN: c
		})
	}
	function pu(t) {
		var e = t.mainData,
		i = t.datas;
		i || (i = {
			main: e
		},
		t.datasAttr = {
			main: "data"
		}),
		t.datas = t.mainData = null,
		_u(e, i, t),
		NA(i,
		function(i) {
			NA(e.TRANSFERABLE_METHODS,
			function(e) {
				i.wrapMethod(e, v(gu, t))
			})
		}),
		e.wrapMethod("cloneShallow", v(vu, t)),
		NA(e.CHANGABLE_METHODS,
		function(i) {
			e.wrapMethod(i, v(mu, t))
		}),
		k(i[e.dataType] === e)
	}
	function gu(t, e) {
		if (xu(this)) {
			var i = a({},
			this[EA]);
			i[this.dataType] = e,
			_u(e, i, t)
		} else wu(e, this.dataType, this[zA], t);
		return e
	}
	function mu(t, e) {
		return t.struct && t.struct.update(this),
		e
	}
	function vu(t, e) {
		return NA(e[EA],
		function(i, n) {
			i !== e && wu(i.cloneShallow(), n, e, t)
		}),
		e
	}
	function yu(t) {
		var e = this[zA];
		return null == t || null == e ? e: e[EA][t]
	}
	function xu(t) {
		return t[zA] === t
	}
	function _u(t, e, i) {
		t[EA] = {},
		NA(e,
		function(e, n) {
			wu(e, n, t, i)
		})
	}
	function wu(t, e, i, n) {
		i[EA][e] = t,
		t[zA] = i,
		t.dataType = e,
		n.struct && (t[n.structAttr] = n.struct, n.struct[n.datasAttr[e]] = t),
		t.getLinkedData = yu
	}
	function bu(t, e, i) {
		this.root,
		this.data,
		this._nodes = [],
		this.hostModel = t,
		this.levelModels = f(e || [],
		function(e) {
			return new _o(e, t, t.ecModel)
		}),
		this.leavesModel = new _o(i || {},
		t, t.ecModel)
	}
	function Su(t, e) {
		var i = e.children;
		t.parentNode !== e && (i.push(t), t.parentNode = e)
	}
	function Mu(t) {
		t.hierNode = {
			defaultAncestor: null,
			ancestor: t,
			prelim: 0,
			modifier: 0,
			change: 0,
			shift: 0,
			i: 0,
			thread: null
		};
		for (var e, i, n = [t]; e = n.pop();) if (i = e.children, e.isExpand && i.length) for (var o = i.length - 1; o >= 0; o--) {
			var a = i[o];
			a.hierNode = {
				defaultAncestor: null,
				ancestor: a,
				prelim: 0,
				modifier: 0,
				change: 0,
				shift: 0,
				i: o,
				thread: null
			},
			n.push(a)
		}
	}
	function Iu(t, e) {
		var i = t.isExpand ? t.children: [],
		n = t.parentNode.children,
		o = t.hierNode.i ? n[t.hierNode.i - 1] : null;
		if (i.length) {
			Lu(t);
			var a = (i[0].hierNode.prelim + i[i.length - 1].hierNode.prelim) / 2;
			o ? (t.hierNode.prelim = o.hierNode.prelim + e(t, o), t.hierNode.modifier = t.hierNode.prelim - a) : t.hierNode.prelim = a
		} else o && (t.hierNode.prelim = o.hierNode.prelim + e(t, o));
		t.parentNode.hierNode.defaultAncestor = ku(t, o, t.parentNode.hierNode.defaultAncestor || n[0], e)
	}
	function Tu(t) {
		var e = t.hierNode.prelim + t.parentNode.hierNode.modifier;
		t.setLayout({
			x: e
		},
		!0),
		t.hierNode.modifier += t.parentNode.hierNode.modifier
	}
	function Au(t) {
		return arguments.length ? t: zu
	}
	function Du(t, e) {
		var i = {};
		return t -= Math.PI / 2,
		i.x = e * Math.cos(t),
		i.y = e * Math.sin(t),
		i
	}
	function Cu(t, e) {
		return Ko(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		})
	}
	function Lu(t) {
		for (var e = t.children,
		i = e.length,
		n = 0,
		o = 0; --i >= 0;) {
			var a = e[i];
			a.hierNode.prelim += n,
			a.hierNode.modifier += n,
			o += a.hierNode.change,
			n += a.hierNode.shift + o
		}
	}
	function ku(t, e, i, n) {
		if (e) {
			for (var o = t,
			a = t,
			r = a.parentNode.children[0], s = e, l = o.hierNode.modifier, h = a.hierNode.modifier, u = r.hierNode.modifier, c = s.hierNode.modifier; s = Pu(s), a = Ou(a), s && a;) {
				o = Pu(o),
				r = Ou(r),
				o.hierNode.ancestor = t;
				var d = s.hierNode.prelim + c - a.hierNode.prelim - h + n(s, a);
				d > 0 && (Eu(Nu(s, t, i), t, d), h += d, l += d),
				c += s.hierNode.modifier,
				h += a.hierNode.modifier,
				l += o.hierNode.modifier,
				u += r.hierNode.modifier
			}
			s && !Pu(o) && (o.hierNode.thread = s, o.hierNode.modifier += c - l),
			a && !Ou(r) && (r.hierNode.thread = a, r.hierNode.modifier += h - u, i = t)
		}
		return i
	}
	function Pu(t) {
		var e = t.children;
		return e.length && t.isExpand ? e[e.length - 1] : t.hierNode.thread
	}
	function Ou(t) {
		var e = t.children;
		return e.length && t.isExpand ? e[0] : t.hierNode.thread
	}
	function Nu(t, e, i) {
		return t.hierNode.ancestor.parentNode === e.parentNode ? t.hierNode.ancestor: i
	}
	function Eu(t, e, i) {
		var n = i / (e.hierNode.i - t.hierNode.i);
		e.hierNode.change -= n,
		e.hierNode.shift += i,
		e.hierNode.modifier += i,
		e.hierNode.prelim += i,
		t.hierNode.change += n
	}
	function zu(t, e) {
		return t.parentNode === e.parentNode ? 1 : 2
	}
	function Ru(t, e) {
		var i = t.getItemLayout(e);
		return i && !isNaN(i.x) && !isNaN(i.y) && "none" !== t.getItemVisual(e, "symbol")
	}
	function Bu(t, e, i) {
		return i.itemModel = e,
		i.itemStyle = e.getModel("itemStyle").getItemStyle(),
		i.hoverItemStyle = e.getModel("emphasis.itemStyle").getItemStyle(),
		i.lineStyle = e.getModel("lineStyle").getLineStyle(),
		i.labelModel = e.getModel("label"),
		i.hoverLabelModel = e.getModel("emphasis.label"),
		!1 === t.isExpand && 0 !== t.children.length ? i.symbolInnerColor = i.itemStyle.fill: i.symbolInnerColor = "#fff",
		i
	}
	function Vu(t, e, i, n, o, a) {
		var s = !i,
		l = t.tree.getNodeByDataIndex(e),
		a = Bu(l, l.getModel(), a),
		h = t.tree.root,
		u = l.parentNode === h ? l: l.parentNode || l,
		c = t.getItemGraphicEl(u.dataIndex),
		d = u.getLayout(),
		f = c ? {
			x: c.position[0],
			y: c.position[1],
			rawX: c.__radialOldRawX,
			rawY: c.__radialOldRawY
		}: d,
		p = l.getLayout();
		s ? (i = new bl(t, e, a)).attr("position", [f.x, f.y]) : i.updateData(t, e, a),
		i.__radialOldRawX = i.__radialRawX,
		i.__radialOldRawY = i.__radialRawY,
		i.__radialRawX = p.rawX,
		i.__radialRawY = p.rawY,
		n.add(i),
		t.setItemGraphicEl(e, i),
		co(i, {
			position: [p.x, p.y]
		},
		o);
		var g = i.getSymbolPath();
		if ("radial" === a.layout) {
			var m, v, y = h.children[0],
			x = y.getLayout(),
			_ = y.children.length;
			if (p.x === x.x && !0 === l.isExpand) {
				var w = {};
				w.x = (y.children[0].getLayout().x + y.children[_ - 1].getLayout().x) / 2,
				w.y = (y.children[0].getLayout().y + y.children[_ - 1].getLayout().y) / 2,
				(m = Math.atan2(w.y - x.y, w.x - x.x)) < 0 && (m = 2 * Math.PI + m),
				(v = w.x < x.x) && (m -= Math.PI)
			} else(m = Math.atan2(p.y - x.y, p.x - x.x)) < 0 && (m = 2 * Math.PI + m),
			0 === l.children.length || 0 !== l.children.length && !1 === l.isExpand ? (v = p.x < x.x) && (m -= Math.PI) : (v = p.x > x.x) || (m -= Math.PI);
			var b = v ? "left": "right";
			g.setStyle({
				textPosition: b,
				textRotation: -m,
				textOrigin: "center",
				verticalAlign: "middle"
			})
		}
		if (l.parentNode && l.parentNode !== h) {
			var S = i.__edge;
			S || (S = i.__edge = new Fb({
				shape: Wu(a, f, f),
				style: r({
					opacity: 0
				},
				a.lineStyle)
			})),
			co(S, {
				shape: Wu(a, d, p),
				style: {
					opacity: 1
				}
			},
			o),
			n.add(S)
		}
	}
	function Gu(t, e, i, n, o, a) {
		for (var r, s = t.tree.getNodeByDataIndex(e), l = t.tree.root, a = Bu(s, s.getModel(), a), h = s.parentNode === l ? s: s.parentNode || s; null == (r = h.getLayout());) h = h.parentNode === l ? h: h.parentNode || h;
		co(i, {
			position: [r.x + 1, r.y + 1]
		},
		o,
		function() {
			n.remove(i),
			t.setItemGraphicEl(e, null)
		}),
		i.fadeOut(null, {
			keepLabel: !0
		});
		var u = i.__edge;
		u && co(u, {
			shape: Wu(a, r, r),
			style: {
				opacity: 0
			}
		},
		o,
		function() {
			n.remove(u)
		})
	}
	function Wu(t, e, i) {
		var n, o, a, r, s = t.orient;
		if ("radial" === t.layout) {
			var l = e.rawX,
			h = e.rawY,
			u = i.rawX,
			c = i.rawY,
			d = Du(l, h),
			f = Du(l, h + (c - h) * t.curvature),
			p = Du(u, c + (h - c) * t.curvature),
			g = Du(u, c);
			return {
				x1: d.x,
				y1: d.y,
				x2: g.x,
				y2: g.y,
				cpx1: f.x,
				cpy1: f.y,
				cpx2: p.x,
				cpy2: p.y
			}
		}
		var l = e.x,
		h = e.y,
		u = i.x,
		c = i.y;
		return "horizontal" === s && (n = l + (u - l) * t.curvature, o = h, a = u + (l - u) * t.curvature, r = c),
		"vertical" === s && (n = l, o = h + (c - h) * t.curvature, a = u, r = c + (h - c) * t.curvature),
		{
			x1: l,
			y1: h,
			x2: u,
			y2: c,
			cpx1: n,
			cpy1: o,
			cpx2: a,
			cpy2: r
		}
	}
	function Fu(t, e, i) {
		for (var n, o = [t], a = []; n = o.pop();) if (a.push(n), n.isExpand) {
			var r = n.children;
			if (r.length) for (var s = 0; s < r.length; s++) o.push(r[s])
		}
		for (; n = a.pop();) e(n, i)
	}
	function Hu(t, e) {
		for (var i, n = [t]; i = n.pop();) if (e(i), i.isExpand) {
			var o = i.children;
			if (o.length) for (var a = o.length - 1; a >= 0; a--) n.push(o[a])
		}
	}
	function Zu(t, e, i) {
		if (t && l(e, t.type) >= 0) {
			var n = i.getData().tree.root,
			o = t.targetNode;
			if (o && n.contains(o)) return {
				node: o
			};
			var a = t.targetNodeId;
			if (null != a && (o = n.getNodeById(a))) return {
				node: o
			}
		}
	}
	function Uu(t) {
		for (var e = []; t;)(t = t.parentNode) && e.push(t);
		return e.reverse()
	}
	function ju(t, e) {
		return l(Uu(t), e) >= 0
	}
	function Xu(t, e) {
		for (var i = []; t;) {
			var n = t.dataIndex;
			i.push({
				name: t.name,
				dataIndex: n,
				value: e.getRawValue(n)
			}),
			t = t.parentNode
		}
		return i.reverse(),
		i
	}
	function Yu(t) {
		var e = 0;
		d(t.children,
		function(t) {
			Yu(t);
			var i = t.value;
			y(i) && (i = i[0]),
			e += i
		});
		var i = t.value;
		y(i) && (i = i[0]),
		(null == i || isNaN(i)) && (i = e),
		i < 0 && (i = 0),
		y(t.value) ? t.value[0] = i: t.value = i
	}
	function qu(t, e) {
		var i = e.get("color");
		if (i) {
			var n;
			return d(t = t || [],
			function(t) {
				var e = new _o(t),
				i = e.get("color"); (e.get("itemStyle.color") || i && "none" !== i) && (n = !0)
			}),
			n || ((t[0] || (t[0] = {})).color = i.slice()),
			t
		}
	}
	function $u(t) {
		this.group = new S_,
		t.add(this.group)
	}
	function Ku(t, e, i, n, o, a) {
		var r = [[o ? t: t - VA, e], [t + i, e], [t + i, e + n], [o ? t: t - VA, e + n]];
		return ! a && r.splice(2, 0, [t + i + VA, e + n / 2]),
		!o && r.push([t, e + n / 2]),
		r
	}
	function Ju(t, e, i) {
		t.eventData = {
			componentType: "series",
			componentSubType: "treemap",
			seriesIndex: e.componentIndex,
			seriesName: e.name,
			seriesType: "treemap",
			selfType: "breadcrumb",
			nodeData: {
				dataIndex: i && i.dataIndex,
				name: i && i.name
			},
			treePathInfo: i && Xu(i, e)
		}
	}
	function Qu() {
		var t, e = [],
		i = {};
		return {
			add: function(t, n, o, a, r) {
				return _(a) && (r = a, a = 0),
				!i[t.id] && (i[t.id] = 1, e.push({
					el: t,
					target: n,
					time: o,
					delay: a,
					easing: r
				}), !0)
			},
			done: function(e) {
				return t = e,
				this
			},
			start: function() {
				for (var n = e.length,
				o = 0,
				a = e.length; o < a; o++) {
					var r = e[o];
					r.el.animateTo(r.target, r.time, r.delay, r.easing,
					function() {--n || (e.length = 0, i = {},
						t && t())
					})
				}
				return this
			}
		}
	}
	function tc(t, e, n, o, r, s, l, h, u, c) {
		function d(t, e) {
			w ? !t.invisible && s.push(t) : (e(), t.__tmWillVisible || (t.invisible = !1))
		}
		function f(e, n, o, a, r, s) {
			var h = l.getModel(),
			u = T(t.getFormattedLabel(l.dataIndex, "normal", null, null, s ? "upperLabel": "label"), h.get("name"));
			if (!s && v.isLeafRoot) {
				var c = t.get("drillDownIcon", !0);
				u = c ? c + " " + u: u
			}
			var d = h.getModel(s ? jA: ZA),
			f = h.getModel(s ? XA: UA),
			p = d.getShallow("show");
			eo(e, n, d, f, {
				defaultText: p ? u: null,
				autoColor: o,
				isRectText: !0
			}),
			s && (e.textRect = i(s)),
			e.truncate = p && d.get("ellipsis") ? {
				outerWidth: a,
				outerHeight: r,
				minChar: 2
			}: null
		}
		function p(t, i, o, a) {
			var s = null != S && n[t][S],
			l = r[t];
			return s ? (n[t][S] = null, g(l, s, t)) : w || ((s = new i({
				z: ec(o, a)
			})).__tmDepth = o, s.__tmStorageName = t, m(l, s, t)),
			e[t][b] = s
		}
		function g(t, e, i) { (t[b] = {}).old = "nodeGroup" === i ? e.position.slice() : a({},
			e.shape)
		}
		function m(t, e, i) {
			var n = t[b] = {},
			a = l.parentNode;
			if (a && (!o || "drillDown" === o.direction)) {
				var s = 0,
				h = 0,
				u = r.background[a.getRawIndex()]; ! o && u && u.old && (s = u.old.width, h = u.old.height),
				n.old = "nodeGroup" === i ? [0, h] : {
					x: s,
					y: h,
					width: 0,
					height: 0
				}
			}
			n.fadein = "nodeGroup" !== i
		}
		if (l) {
			var v = l.getLayout();
			if (v && v.isInView) {
				var y = v.width,
				x = v.height,
				_ = v.borderWidth,
				w = v.invisible,
				b = l.getRawIndex(),
				S = h && h.getRawIndex(),
				M = l.viewChildren,
				I = v.upperHeight,
				A = M && M.length,
				D = l.getModel("itemStyle"),
				C = l.getModel("emphasis.itemStyle"),
				L = p("nodeGroup", WA);
				if (L) {
					if (u.add(L), L.attr("position", [v.x || 0, v.y || 0]), L.__tmNodeWidth = y, L.__tmNodeHeight = x, v.isAboveViewRoot) return L;
					var k = p("background", FA, c, qA);
					if (k &&
					function(e, i, n) {
						i.dataIndex = l.dataIndex,
						i.seriesIndex = t.seriesIndex,
						i.setShape({
							x: 0,
							y: 0,
							width: y,
							height: x
						});
						var o = l.getVisual("borderColor", !0),
						a = C.get("borderColor");
						d(i,
						function() {
							var t = JA(D);
							t.fill = o;
							var e = KA(C);
							if (e.fill = a, n) {
								var r = y - 2 * _;
								f(t, e, o, r, I, {
									x: _,
									y: 0,
									width: r,
									height: I
								})
							} else t.text = e.text = null;
							i.setStyle(t),
							to(i, e)
						}),
						e.add(i)
					} (L, k, A && v.upperHeight), !A) {
						var P = p("content", FA, c, $A);
						P &&
						function(e, i) {
							i.dataIndex = l.dataIndex,
							i.seriesIndex = t.seriesIndex;
							var n = Math.max(y - 2 * _, 0),
							o = Math.max(x - 2 * _, 0);
							i.culling = !0,
							i.setShape({
								x: _,
								y: _,
								width: n,
								height: o
							});
							var a = l.getVisual("color", !0);
							d(i,
							function() {
								var t = JA(D);
								t.fill = a;
								var e = KA(C);
								f(t, e, a, n, o),
								i.setStyle(t),
								to(i, e)
							}),
							e.add(i)
						} (L, P)
					}
					return L
				}
			}
		}
	}
	function ec(t, e) {
		var i = t * YA + e;
		return (i - 1) / i
	}
	function ic(t) {
		var e = t.pieceList;
		t.hasSpecialVisual = !1,
		d(e,
		function(e, i) {
			e.originIndex = i,
			null != e.visual && (t.hasSpecialVisual = !0)
		})
	}
	function nc(t) {
		var e = t.categories,
		i = t.visual,
		n = t.categoryMap = {};
		if (eD(e,
		function(t, e) {
			n[t] = e
		}), !y(i)) {
			var o = [];
			w(i) ? eD(i,
			function(t, e) {
				var i = n[e];
				o[null != i ? i: nD] = t
			}) : o[nD] = i,
			i = dc(t, o)
		}
		for (var a = e.length - 1; a >= 0; a--) null == i[a] && (delete n[e[a]], e.pop())
	}
	function oc(t, e) {
		var i = t.visual,
		n = [];
		w(i) ? eD(i,
		function(t) {
			n.push(t)
		}) : null != i && n.push(i);
		var o = {
			color: 1,
			symbol: 1
		};
		e || 1 !== n.length || o.hasOwnProperty(t.type) || (n[1] = n[0]),
		dc(t, n)
	}
	function ac(t) {
		return {
			applyVisual: function(e, i, n) {
				e = this.mapValueToVisual(e),
				n("color", t(i("color"), e))
			},
			_doMap: uc([0, 1])
		}
	}
	function rc(t) {
		var e = this.option.visual;
		return e[Math.round(Io(t, [0, 1], [0, e.length - 1], !0))] || {}
	}
	function sc(t) {
		return function(e, i, n) {
			n(t, this.mapValueToVisual(e))
		}
	}
	function lc(t) {
		var e = this.option.visual;
		return e[this.option.loop && t !== nD ? t % e.length: t]
	}
	function hc() {
		return this.option.visual[0]
	}
	function uc(t) {
		return {
			linear: function(e) {
				return Io(e, t, this.option.visual, !0)
			},
			category: lc,
			piecewise: function(e, i) {
				var n = cc.call(this, i);
				return null == n && (n = Io(e, t, this.option.visual, !0)),
				n
			},
			fixed: hc
		}
	}
	function cc(t) {
		var e = this.option,
		i = e.pieceList;
		if (e.hasSpecialVisual) {
			var n = i[oD.findPieceIndex(t, i)];
			if (n && n.visual) return n.visual[this.type]
		}
	}
	function dc(t, e) {
		return t.visual = e,
		"color" === t.type && (t.parsedVisual = f(e,
		function(t) {
			return Dt(t)
		})),
		e
	}
	function fc(t, e, i) {
		return t ? e <= i: e < i
	}
	function pc(t, e, i, n, o, a) {
		var r = t.getModel(),
		s = t.getLayout();
		if (s && !s.invisible && s.isInView) {
			var l, h = t.getModel(lD),
			u = gc(h, e, i[t.depth], n),
			c = h.get("borderColor"),
			f = h.get("borderColorSaturation");
			null != f && (c = vc(f, l = mc(u))),
			t.setVisual("borderColor", c);
			var p = t.viewChildren;
			if (p && p.length) {
				var g = xc(t, r, s, h, u, p);
				d(p,
				function(t, e) { (t.depth >= o.length || t === o[t.depth]) && pc(t, wc(r, u, t, e, g, a), i, n, o, a)
				})
			} else l = mc(u),
			t.setVisual("color", l)
		}
	}
	function gc(t, e, i, n) {
		var o = a({},
		e);
		return d(["color", "colorAlpha", "colorSaturation"],
		function(a) {
			var r = t.get(a, !0);
			null == r && i && (r = i[a]),
			null == r && (r = e[a]),
			null == r && (r = n.get(a)),
			null != r && (o[a] = r)
		}),
		o
	}
	function mc(t) {
		var e = yc(t, "color");
		if (e) {
			var i = yc(t, "colorAlpha"),
			n = yc(t, "colorSaturation");
			return n && (e = Et(e, null, null, n)),
			i && (e = zt(e, i)),
			e
		}
	}
	function vc(t, e) {
		return null != e ? Et(e, null, null, t) : null
	}
	function yc(t, e) {
		var i = t[e];
		if (null != i && "none" !== i) return i
	}
	function xc(t, e, i, n, o, a) {
		if (a && a.length) {
			var r = _c(e, "color") || null != o.color && "none" !== o.color && (_c(e, "colorAlpha") || _c(e, "colorSaturation"));
			if (r) {
				var s = e.get("visualMin"),
				l = e.get("visualMax"),
				h = i.dataExtent.slice();
				null != s && s < h[0] && (h[0] = s),
				null != l && l > h[1] && (h[1] = l);
				var u = e.get("colorMappingBy"),
				c = {
					type: r.name,
					dataExtent: h,
					visual: r.range
				};
				"color" !== c.type || "index" !== u && "id" !== u ? c.mappingMethod = "linear": (c.mappingMethod = "category", c.loop = !0);
				var d = new oD(c);
				return d.__drColorMappingBy = u,
				d
			}
		}
	}
	function _c(t, e) {
		var i = t.get(e);
		return sD(i) && i.length ? {
			name: e,
			range: i
		}: null
	}
	function wc(t, e, i, n, o, r) {
		var s = a({},
		e);
		if (o) {
			var l = o.type,
			h = "color" === l && o.__drColorMappingBy,
			u = "index" === h ? n: "id" === h ? r.mapIdToIndex(i.getId()) : i.getValue(t.get("visualDimension"));
			s[l] = o.mapValueToVisual(u)
		}
		return s
	}
	function bc(t, e, i, n) {
		var o, a;
		if (!t.isRemoved()) {
			var r = t.getLayout();
			o = r.width,
			a = r.height;
			var s = (f = t.getModel()).get(pD),
			l = f.get(gD) / 2,
			h = Pc(f),
			u = Math.max(s, h),
			c = s - l,
			d = u - l,
			f = t.getModel();
			t.setLayout({
				borderWidth: s,
				upperHeight: u,
				upperLabelHeight: h
			},
			!0);
			var p = (o = uD(o - 2 * c, 0)) * (a = uD(a - c - d, 0)),
			g = Sc(t, f, p, e, i, n);
			if (g.length) {
				var m = {
					x: c,
					y: d,
					width: o,
					height: a
				},
				v = cD(o, a),
				y = 1 / 0,
				x = [];
				x.area = 0;
				for (var _ = 0,
				w = g.length; _ < w;) {
					var b = g[_];
					x.push(b),
					x.area += b.getLayout().area;
					var S = Ac(x, v, e.squareRatio);
					S <= y ? (_++, y = S) : (x.area -= x.pop().getLayout().area, Dc(x, v, m, l, !1), v = cD(m.width, m.height), x.length = x.area = 0, y = 1 / 0)
				}
				if (x.length && Dc(x, v, m, l, !0), !i) {
					var M = f.get("childrenVisibleMin");
					null != M && p < M && (i = !0)
				}
				for (var _ = 0,
				w = g.length; _ < w; _++) bc(g[_], e, i, n + 1)
			}
		}
	}
	function Sc(t, e, i, n, o, a) {
		var r = t.children || [],
		s = n.sort;
		"asc" !== s && "desc" !== s && (s = null);
		var l = null != n.leafDepth && n.leafDepth <= a;
		if (o && !l) return t.viewChildren = [];
		Ic(r = g(r,
		function(t) {
			return ! t.isRemoved()
		}), s);
		var h = Tc(e, r, s);
		if (0 === h.sum) return t.viewChildren = [];
		if (h.sum = Mc(e, i, h.sum, s, r), 0 === h.sum) return t.viewChildren = [];
		for (var u = 0,
		c = r.length; u < c; u++) {
			var d = r[u].getValue() / h.sum * i;
			r[u].setLayout({
				area: d
			})
		}
		return l && (r.length && t.setLayout({
			isLeafRoot: !0
		},
		!0), r.length = 0),
		t.viewChildren = r,
		t.setLayout({
			dataExtent: h.dataExtent
		},
		!0),
		r
	}
	function Mc(t, e, i, n, o) {
		if (!n) return i;
		for (var a = t.get("visibleMin"), r = o.length, s = r, l = r - 1; l >= 0; l--) {
			var h = o["asc" === n ? r - l - 1 : l].getValue();
			h / i * e < a && (s = l, i -= h)
		}
		return "asc" === n ? o.splice(0, r - s) : o.splice(s, r - s),
		i
	}
	function Ic(t, e) {
		return e && t.sort(function(t, i) {
			var n = "asc" === e ? t.getValue() - i.getValue() : i.getValue() - t.getValue();
			return 0 === n ? "asc" === e ? t.dataIndex - i.dataIndex: i.dataIndex - t.dataIndex: n
		}),
		t
	}
	function Tc(t, e, i) {
		for (var n = 0,
		o = 0,
		a = e.length; o < a; o++) n += e[o].getValue();
		var r = t.get("visualDimension");
		if (e && e.length) if ("value" === r && i) s = [e[e.length - 1].getValue(), e[0].getValue()],
		"asc" === i && s.reverse();
		else {
			var s = [1 / 0, -1 / 0];
			fD(e,
			function(t) {
				var e = t.getValue(r);
				e < s[0] && (s[0] = e),
				e > s[1] && (s[1] = e)
			})
		} else s = [NaN, NaN];
		return {
			sum: n,
			dataExtent: s
		}
	}
	function Ac(t, e, i) {
		for (var n, o = 0,
		a = 1 / 0,
		r = 0,
		s = t.length; r < s; r++)(n = t[r].getLayout().area) && (n < a && (a = n), n > o && (o = n));
		var l = t.area * t.area,
		h = e * e * i;
		return l ? uD(h * o / l, l / (h * a)) : 1 / 0
	}
	function Dc(t, e, i, n, o) {
		var a = e === i.width ? 0 : 1,
		r = 1 - a,
		s = ["x", "y"],
		l = ["width", "height"],
		h = i[s[a]],
		u = e ? t.area / e: 0; (o || u > i[l[r]]) && (u = i[l[r]]);
		for (var c = 0,
		d = t.length; c < d; c++) {
			var f = t[c],
			p = {},
			g = u ? f.getLayout().area / u: 0,
			m = p[l[r]] = uD(u - 2 * n, 0),
			v = i[s[a]] + i[l[a]] - h,
			y = c === d - 1 || v < g ? v: g,
			x = p[l[a]] = uD(y - 2 * n, 0);
			p[s[r]] = i[s[r]] + cD(n, m / 2),
			p[s[a]] = h + cD(n, x / 2),
			h += y,
			f.setLayout(p, !0)
		}
		i[s[r]] += u,
		i[l[r]] -= u
	}
	function Cc(t, e, i, n, o) {
		var a = (e || {}).node,
		r = [n, o];
		if (!a || a === i) return r;
		for (var s, l = n * o,
		h = l * t.option.zoomToNodeRatio; s = a.parentNode;) {
			for (var u = 0,
			c = s.children,
			d = 0,
			f = c.length; d < f; d++) u += c[d].getValue();
			var p = a.getValue();
			if (0 === p) return r;
			h *= u / p;
			var g = s.getModel(),
			m = g.get(pD); (h += 4 * m * m + (3 * m + Math.max(m, Pc(g))) * Math.pow(h, .5)) > hS && (h = hS),
			a = s
		}
		h < l && (h = l);
		var v = Math.pow(h / l, .5);
		return [n * v, o * v]
	}
	function Lc(t, e, i) {
		if (e) return {
			x: e.x,
			y: e.y
		};
		var n = {
			x: 0,
			y: 0
		};
		if (!i) return n;
		var o = i.node,
		a = o.getLayout();
		if (!a) return n;
		for (var r = [a.width / 2, a.height / 2], s = o; s;) {
			var l = s.getLayout();
			r[0] += l.x,
			r[1] += l.y,
			s = s.parentNode
		}
		return {
			x: t.width / 2 - r[0],
			y: t.height / 2 - r[1]
		}
	}
	function kc(t, e, i, n, o) {
		var a = t.getLayout(),
		r = i[o],
		s = r && r === t;
		if (! (r && !s || o === i.length && t !== n)) {
			t.setLayout({
				isInView: !0,
				invisible: !s && !e.intersect(a),
				isAboveViewRoot: s
			},
			!0);
			var l = new Kt(e.x - a.x, e.y - a.y, e.width, e.height);
			fD(t.viewChildren || [],
			function(t) {
				kc(t, l, i, n, o + 1)
			})
		}
	}
	function Pc(t) {
		return t.get(mD) ? t.get(vD) : 0
	}
	function Oc(t) {
		return "_EC_" + t
	}
	function Nc(t, e) {
		this.id = null == t ? "": t,
		this.inEdges = [],
		this.outEdges = [],
		this.edges = [],
		this.hostGraph,
		this.dataIndex = null == e ? -1 : e
	}
	function Ec(t, e, i) {
		this.node1 = t,
		this.node2 = e,
		this.dataIndex = null == i ? -1 : i
	}
	function zc(t) {
		return isNaN( + t.cpx1) || isNaN( + t.cpy1)
	}
	function Rc(t) {
		return "_" + t + "Type"
	}
	function Bc(t, e, i) {
		var n = e.getItemVisual(i, "color"),
		o = e.getItemVisual(i, t),
		a = e.getItemVisual(i, t + "Size");
		if (o && "none" !== o) {
			y(a) || (a = [a, a]);
			var r = dl(o, -a[0] / 2, -a[1] / 2, a[0], a[1], n);
			return r.name = t,
			r
		}
	}
	function Vc(t) {
		var e = new TD({
			name: "line"
		});
		return Gc(e.shape, t),
		e
	}
	function Gc(t, e) {
		var i = e[0],
		n = e[1],
		o = e[2];
		t.x1 = i[0],
		t.y1 = i[1],
		t.x2 = n[0],
		t.y2 = n[1],
		t.percent = 1,
		o ? (t.cpx1 = o[0], t.cpy1 = o[1]) : (t.cpx1 = NaN, t.cpy1 = NaN)
	}
	function Wc(t, e, i) {
		S_.call(this),
		this._createLine(t, e, i)
	}
	function Fc(t) {
		this._ctor = t || Wc,
		this.group = new S_
	}
	function Hc(t, e, i, n) {
		if (Xc(e.getItemLayout(i))) {
			var o = new t._ctor(e, i, n);
			e.setItemGraphicEl(i, o),
			t.group.add(o)
		}
	}
	function Zc(t, e, i, n, o, a) {
		var r = e.getItemGraphicEl(n);
		Xc(i.getItemLayout(o)) ? (r ? r.updateData(i, o, a) : r = new t._ctor(i, o, a), i.setItemGraphicEl(o, r), t.group.add(r)) : t.group.remove(r)
	}
	function Uc(t) {
		var e = t.hostModel;
		return {
			lineStyle: e.getModel("lineStyle").getLineStyle(),
			hoverLineStyle: e.getModel("emphasis.lineStyle").getLineStyle(),
			labelModel: e.getModel("label"),
			hoverLabelModel: e.getModel("emphasis.label")
		}
	}
	function jc(t) {
		return isNaN(t[0]) || isNaN(t[1])
	}
	function Xc(t) {
		return ! jc(t[0]) && !jc(t[1])
	}
	function Yc(t, e, i) {
		for (var n, o = t[0], a = t[1], r = t[2], s = 1 / 0, l = i * i, h = .1, u = .1; u <= .9; u += .1) LD[0] = OD(o[0], a[0], r[0], u),
		LD[1] = OD(o[1], a[1], r[1], u),
		(f = ED(ND(LD, e) - l)) < s && (s = f, n = u);
		for (var c = 0; c < 32; c++) {
			var d = n + h;
			kD[0] = OD(o[0], a[0], r[0], n),
			kD[1] = OD(o[1], a[1], r[1], n),
			PD[0] = OD(o[0], a[0], r[0], d),
			PD[1] = OD(o[1], a[1], r[1], d);
			var f = ND(kD, e) - l;
			if (ED(f) < .01) break;
			var p = ND(PD, e) - l;
			h /= 2,
			f < 0 ? p >= 0 ? n += h: n -= h: p >= 0 ? n -= h: n += h
		}
		return n
	}
	function qc(t, e) {
		return t.getVisual("opacity") || t.getModel().get(e)
	}
	function $c(t, e, i) {
		var n = t.getGraphicEl(),
		o = qc(t, e);
		null != i && (null == o && (o = 1), o *= i),
		n.downplay && n.downplay(),
		n.traverse(function(t) {
			"group" !== t.type && t.setStyle("opacity", o)
		})
	}
	function Kc(t, e) {
		var i = qc(t, e),
		n = t.getGraphicEl();
		n.highlight && n.highlight(),
		n.traverse(function(t) {
			"group" !== t.type && t.setStyle("opacity", i)
		})
	}
	function Jc(t) {
		return t instanceof Array || (t = [t, t]),
		t
	}
	function Qc(t) {
		var e = t.coordinateSystem;
		if (!e || "view" === e.type) {
			var i = t.getGraph();
			i.eachNode(function(t) {
				var e = t.getModel();
				t.setLayout([ + e.get("x"), +e.get("y")])
			}),
			td(i)
		}
	}
	function td(t) {
		t.eachEdge(function(t) {
			var e = t.getModel().get("lineStyle.curveness") || 0,
			i = W(t.node1.getLayout()),
			n = W(t.node2.getLayout()),
			o = [i, n]; + e && o.push([(i[0] + n[0]) / 2 - (i[1] - n[1]) * e, (i[1] + n[1]) / 2 - (n[0] - i[0]) * e]),
			t.setLayout(o)
		})
	}
	function ed(t) {
		var e = t.coordinateSystem;
		if (!e || "view" === e.type) {
			var i = e.getBoundingRect(),
			n = t.getData(),
			o = n.graph,
			a = 0,
			r = n.getSum("value"),
			s = 2 * Math.PI / (r || n.count()),
			l = i.width / 2 + i.x,
			h = i.height / 2 + i.y,
			u = Math.min(i.width, i.height) / 2;
			o.eachNode(function(t) {
				var e = t.getValue("value");
				a += s * (r ? e: 1) / 2,
				t.setLayout([u * Math.cos(a) + l, u * Math.sin(a) + h]),
				a += s * (r ? e: 1) / 2
			}),
			n.setLayout({
				cx: l,
				cy: h
			}),
			o.eachEdge(function(t) {
				var e, i = t.getModel().get("lineStyle.curveness") || 0,
				n = W(t.node1.getLayout()),
				o = W(t.node2.getLayout()),
				a = (n[0] + o[0]) / 2,
				r = (n[1] + o[1]) / 2; + i && (e = [l * (i *= 3) + a * (1 - i), h * i + r * (1 - i)]),
				t.setLayout([n, o, e])
			})
		}
	}
	function id(t, e, i) {
		for (var n = i.rect,
		o = n.width,
		a = n.height,
		r = [n.x + o / 2, n.y + a / 2], s = null == i.gravity ? .1 : i.gravity, l = 0; l < t.length; l++) {
			var h = t[l];
			h.p || (h.p = V(o * (Math.random() - .5) + r[0], a * (Math.random() - .5) + r[1])),
			h.pp = W(h.p),
			h.edges = null
		}
		var u = .6;
		return {
			warmUp: function() {
				u = .5
			},
			setFixed: function(e) {
				t[e].fixed = !0
			},
			setUnfixed: function(e) {
				t[e].fixed = !1
			},
			step: function(i) {
				for (var n = [], o = t.length, a = 0; a < e.length; a++) {
					var l = e[a],
					h = l.n1;
					U(n, (p = l.n2).p, h.p);
					var c = j(n) - l.d,
					d = p.w / (h.w + p.w);
					isNaN(d) && (d = 0),
					q(n, n),
					!h.fixed && VD(h.p, h.p, n, d * c * u),
					!p.fixed && VD(p.p, p.p, n, -(1 - d) * c * u)
				}
				for (a = 0; a < o; a++)(v = t[a]).fixed || (U(n, r, v.p), VD(v.p, v.p, n, s * u));
				for (a = 0; a < o; a++) for (var h = t[a], f = a + 1; f < o; f++) {
					var p = t[f];
					U(n, p.p, h.p),
					0 === (c = j(n)) && (F(n, Math.random() - .5, Math.random() - .5), c = 1);
					var g = (h.rep + p.rep) / c / c; ! h.fixed && VD(h.pp, h.pp, n, g),
					!p.fixed && VD(p.pp, p.pp, n, -g)
				}
				for (var m = [], a = 0; a < o; a++) {
					var v = t[a];
					v.fixed || (U(m, v.p, v.pp), VD(v.p, v.p, m, u), G(v.pp, v.p))
				}
				u *= .992,
				i && i(t, e, u < .01)
			}
		}
	}
	function nd(t, e, i) {
		var n = t.getBoxLayoutParams();
		return n.aspect = i,
		Ko(n, {
			width: e.getWidth(),
			height: e.getHeight()
		})
	}
	function od(t, e) {
		var i = t.get("center"),
		n = e.getWidth(),
		o = e.getHeight(),
		a = Math.min(n, o);
		return {
			cx: To(i[0], e.getWidth()),
			cy: To(i[1], e.getHeight()),
			r: To(t.get("radius"), a / 2)
		}
	}
	function ad(t, e) {
		return e && ("string" == typeof e ? t = e.replace("{value}", null != t ? t: "") : "function" == typeof e && (t = e(t))),
		t
	}
	function rd(t, e) {
		function i() {
			a.ignore = a.hoverIgnore,
			r.ignore = r.hoverIgnore
		}
		function n() {
			a.ignore = a.normalIgnore,
			r.ignore = r.normalIgnore
		}
		S_.call(this);
		var o = new Rb,
		a = new Bb,
		r = new Cb;
		this.add(o),
		this.add(a),
		this.add(r),
		this.updateData(t, e, !0),
		this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
	}
	function sd(t, e) {
		return Ko(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		})
	}
	function ld(t, e) {
		for (var i = t.mapDimension("value"), n = t.mapArray(i,
		function(t) {
			return t
		}), o = [], a = "ascending" === e, r = 0, s = t.count(); r < s; r++) o[r] = r;
		return "function" == typeof e ? o.sort(e) : "none" !== e && o.sort(function(t, e) {
			return a ? n[t] - n[e] : n[e] - n[t]
		}),
		o
	}
	function hd(t) {
		t.each(function(e) {
			var i, n, o, a, r = t.getItemModel(e),
			s = r.getModel("label").get("position"),
			l = r.getModel("labelLine"),
			h = t.getItemLayout(e),
			u = h.points,
			c = "inner" === s || "inside" === s || "center" === s;
			if (c) i = "center",
			a = [[n = (u[0][0] + u[1][0] + u[2][0] + u[3][0]) / 4, o = (u[0][1] + u[1][1] + u[2][1] + u[3][1]) / 4], [n, o]];
			else {
				var d, f, p, g = l.get("length");
				"left" === s ? (d = (u[3][0] + u[0][0]) / 2, f = (u[3][1] + u[0][1]) / 2, n = (p = d - g) - 5, i = "right") : (d = (u[1][0] + u[2][0]) / 2, f = (u[1][1] + u[2][1]) / 2, n = (p = d + g) + 5, i = "left");
				var m = f;
				a = [[d, f], [p, m]],
				o = m
			}
			h.label = {
				linePoints: a,
				x: n,
				y: o,
				verticalAlign: "middle",
				textAlign: i,
				inside: c
			}
		})
	}
	function ud(t) {
		if (!t.parallel) {
			var e = !1;
			d(t.series,
			function(t) {
				t && "parallel" === t.type && (e = !0)
			}),
			e && (t.parallel = [{}])
		}
	}
	function cd(t) {
		d(Si(t.parallelAxis),
		function(e) {
			if (w(e)) {
				var i = e.parallelIndex || 0,
				o = Si(t.parallel)[i];
				o && o.parallelAxisDefault && n(e, o.parallelAxisDefault, !1)
			}
		})
	}
	function dd(t, e) {
		var i = t[e] - t[1 - e];
		return {
			span: Math.abs(i),
			sign: i > 0 ? -1 : i < 0 ? 1 : e ? -1 : 1
		}
	}
	function fd(t, e) {
		return Math.min(e[1], Math.max(e[0], t))
	}
	function pd(t, e, i) {
		this._axesMap = z(),
		this._axesLayout = {},
		this.dimensions = t.dimensions,
		this._rect,
		this._model = t,
		this._init(t, e, i)
	}
	function gd(t, e) {
		return YD(qD(t, e[0]), e[1])
	}
	function md(t, e) {
		var i = e.layoutLength / (e.axisCount - 1);
		return {
			position: i * t,
			axisNameAvailableWidth: i,
			axisLabelShow: !0
		}
	}
	function vd(t, e) {
		var i, n, o = e.layoutLength,
		a = e.axisExpandWidth,
		r = e.axisCount,
		s = e.axisCollapseWidth,
		l = e.winInnerIndices,
		h = s,
		u = !1;
		return t < l[0] ? (i = t * s, n = s) : t <= l[1] ? (i = e.axisExpandWindow0Pos + t * a - e.axisExpandWindow[0], h = a, u = !0) : (i = o - (r - 1 - t) * s, n = s),
		{
			position: i,
			axisNameAvailableWidth: h,
			axisLabelShow: u,
			nameTruncateMaxWidth: n
		}
	}
	function yd(t) {
		Hx.call(this),
		this._zr = t,
		this.group = new S_,
		this._brushType,
		this._brushOption,
		this._panels,
		this._track = [],
		this._dragging,
		this._covers = [],
		this._creatingCover,
		this._creatingPanel,
		this._enableGlobalPan,
		this._uid = "brushController_" + gC++,
		this._handlers = {},
		nC(mC,
		function(t, e) {
			this._handlers[e] = m(t, this)
		},
		this)
	}
	function xd(t, e) {
		var o = t._zr;
		t._enableGlobalPan || Gh(o, cC, t._uid),
		nC(t._handlers,
		function(t, e) {
			o.on(e, t)
		}),
		t._brushType = e.brushType,
		t._brushOption = n(i(pC), e, !0)
	}
	function _d(t) {
		var e = t._zr;
		Wh(e, cC, t._uid),
		nC(t._handlers,
		function(t, i) {
			e.off(i, t)
		}),
		t._brushType = t._brushOption = null
	}
	function wd(t, e) {
		var i = vC[e.brushType].createCover(t, e);
		return i.__brushOption = e,
		Md(i, e),
		t.group.add(i),
		i
	}
	function bd(t, e) {
		var i = Td(e);
		return i.endCreating && (i.endCreating(t, e), Md(e, e.__brushOption)),
		e
	}
	function Sd(t, e) {
		var i = e.__brushOption;
		Td(e).updateCoverShape(t, e, i.range, i)
	}
	function Md(t, e) {
		var i = e.z;
		null == i && (i = lC),
		t.traverse(function(t) {
			t.z = i,
			t.z2 = i
		})
	}
	function Id(t, e) {
		Td(e).updateCommon(t, e),
		Sd(t, e)
	}
	function Td(t) {
		return vC[t.__brushOption.brushType]
	}
	function Ad(t, e, i) {
		var n = t._panels;
		if (!n) return ! 0;
		var o, a = t._transform;
		return nC(n,
		function(t) {
			t.isTargetByCursor(e, i, a) && (o = t)
		}),
		o
	}
	function Dd(t, e) {
		var i = t._panels;
		if (!i) return ! 0;
		var n = e.__brushOption.panelId;
		return null == n || i[n]
	}
	function Cd(t) {
		var e = t._covers,
		i = e.length;
		return nC(e,
		function(e) {
			t.group.remove(e)
		},
		t),
		e.length = 0,
		!!i
	}
	function Ld(t, e) {
		var n = oC(t._covers,
		function(t) {
			var e = t.__brushOption,
			n = i(e.range);
			return {
				brushType: e.brushType,
				panelId: e.panelId,
				range: n
			}
		});
		t.trigger("brush", n, {
			isEnd: !!e.isEnd,
			removeOnClick: !!e.removeOnClick
		})
	}
	function kd(t) {
		var e = t._track;
		if (!e.length) return ! 1;
		var i = e[e.length - 1],
		n = e[0],
		o = i[0] - n[0],
		a = i[1] - n[1];
		return sC(o * o + a * a, .5) > hC
	}
	function Pd(t) {
		var e = t.length - 1;
		return e < 0 && (e = 0),
		[t[0], t[e]]
	}
	function Od(t, e, i, n) {
		var o = new S_;
		return o.add(new Vb({
			name: "main",
			style: Rd(i),
			silent: !0,
			draggable: !0,
			cursor: "move",
			drift: iC(t, e, o, "nswe"),
			ondragend: iC(Ld, e, {
				isEnd: !0
			})
		})),
		nC(n,
		function(i) {
			o.add(new Vb({
				name: i,
				style: {
					opacity: 0
				},
				draggable: !0,
				silent: !0,
				invisible: !0,
				drift: iC(t, e, o, i),
				ondragend: iC(Ld, e, {
					isEnd: !0
				})
			}))
		}),
		o
	}
	function Nd(t, e, i, n) {
		var o = n.brushStyle.lineWidth || 0,
		a = rC(o, uC),
		r = i[0][0],
		s = i[1][0],
		l = r - o / 2,
		h = s - o / 2,
		u = i[0][1],
		c = i[1][1],
		d = u - a + o / 2,
		f = c - a + o / 2,
		p = u - r,
		g = c - s,
		m = p + o,
		v = g + o;
		zd(t, e, "main", r, s, p, g),
		n.transformable && (zd(t, e, "w", l, h, a, v), zd(t, e, "e", d, h, a, v), zd(t, e, "n", l, h, m, a), zd(t, e, "s", l, f, m, a), zd(t, e, "nw", l, h, a, a), zd(t, e, "ne", d, h, a, a), zd(t, e, "sw", l, f, a, a), zd(t, e, "se", d, f, a, a))
	}
	function Ed(t, e) {
		var i = e.__brushOption,
		n = i.transformable,
		o = e.childAt(0);
		o.useStyle(Rd(i)),
		o.attr({
			silent: !n,
			cursor: n ? "move": "default"
		}),
		nC(["w", "e", "n", "s", "se", "sw", "ne", "nw"],
		function(i) {
			var o = e.childOfName(i),
			a = Gd(t, i);
			o && o.attr({
				silent: !n,
				invisible: !n,
				cursor: n ? fC[a] + "-resize": null
			})
		})
	}
	function zd(t, e, i, n, o, a, r) {
		var s = e.childOfName(i);
		s && s.setShape(Ud(Zd(t, e, [[n, o], [n + a, o + r]])))
	}
	function Rd(t) {
		return r({
			strokeNoScale: !0
		},
		t.brushStyle)
	}
	function Bd(t, e, i, n) {
		var o = [aC(t, i), aC(e, n)],
		a = [rC(t, i), rC(e, n)];
		return [[o[0], a[0]], [o[1], a[1]]]
	}
	function Vd(t) {
		return po(t.group)
	}
	function Gd(t, e) {
		if (e.length > 1) return ("e" === (n = [Gd(t, (e = e.split(""))[0]), Gd(t, e[1])])[0] || "w" === n[0]) && n.reverse(),
		n.join("");
		var i = {
			left: "w",
			right: "e",
			top: "n",
			bottom: "s"
		},
		n = mo({
			w: "left",
			e: "right",
			n: "top",
			s: "bottom"
		} [e], Vd(t));
		return i[n]
	}
	function Wd(t, e, i, n, o, a, r, s) {
		var l = n.__brushOption,
		h = t(l.range),
		u = Hd(i, a, r);
		nC(o.split(""),
		function(t) {
			var e = dC[t];
			h[e[0]][e[1]] += u[e[0]]
		}),
		l.range = e(Bd(h[0][0], h[1][0], h[0][1], h[1][1])),
		Id(i, n),
		Ld(i, {
			isEnd: !1
		})
	}
	function Fd(t, e, i, n, o) {
		var a = e.__brushOption.range,
		r = Hd(t, i, n);
		nC(a,
		function(t) {
			t[0] += r[0],
			t[1] += r[1]
		}),
		Id(t, e),
		Ld(t, {
			isEnd: !1
		})
	}
	function Hd(t, e, i) {
		var n = t.group,
		o = n.transformCoordToLocal(e, i),
		a = n.transformCoordToLocal(0, 0);
		return [o[0] - a[0], o[1] - a[1]]
	}
	function Zd(t, e, n) {
		var o = Dd(t, e);
		return o && !0 !== o ? o.clipPath(n, t._transform) : i(n)
	}
	function Ud(t) {
		var e = aC(t[0][0], t[1][0]),
		i = aC(t[0][1], t[1][1]);
		return {
			x: e,
			y: i,
			width: rC(t[0][0], t[1][0]) - e,
			height: rC(t[0][1], t[1][1]) - i
		}
	}
	function jd(t, e, i) {
		if (t._brushType) {
			var n = t._zr,
			o = t._covers,
			a = Ad(t, e, i);
			if (!t._dragging) for (var r = 0; r < o.length; r++) {
				var s = o[r].__brushOption;
				if (a && (!0 === a || s.panelId === a.panelId) && vC[s.brushType].contain(o[r], i[0], i[1])) return
			}
			a && n.setCursorStyle("crosshair")
		}
	}
	function Xd(t) {
		var e = t.event;
		e.preventDefault && e.preventDefault()
	}
	function Yd(t, e, i) {
		return t.childOfName("main").contain(e, i)
	}
	function qd(t, e, n, o) {
		var a, r = t._creatingCover,
		s = t._creatingPanel,
		l = t._brushOption;
		if (t._track.push(n.slice()), kd(t) || r) {
			if (s && !r) {
				"single" === l.brushMode && Cd(t);
				var h = i(l);
				h.brushType = $d(h.brushType, s),
				h.panelId = !0 === s ? null: s.panelId,
				r = t._creatingCover = wd(t, h),
				t._covers.push(r)
			}
			if (r) {
				var u = vC[$d(t._brushType, s)];
				r.__brushOption.range = u.getCreatingRange(Zd(t, r, t._track)),
				o && (bd(t, r), u.updateCommon(t, r)),
				Sd(t, r),
				a = {
					isEnd: o
				}
			}
		} else o && "single" === l.brushMode && l.removeOnClick && Ad(t, e, n) && Cd(t) && (a = {
			isEnd: o,
			removeOnClick: !0
		});
		return a
	}
	function $d(t, e) {
		return "auto" === t ? e.defaultBrushType: t
	}
	function Kd(t) {
		if (this._dragging) {
			Xd(t);
			var e = qd(this, t, this.group.transformCoordToLocal(t.offsetX, t.offsetY), !0);
			this._dragging = !1,
			this._track = [],
			this._creatingCover = null,
			e && Ld(this, e)
		}
	}
	function Jd(t) {
		return {
			createCover: function(e, i) {
				return Od(iC(Wd,
				function(e) {
					var i = [e, [0, 100]];
					return t && i.reverse(),
					i
				},
				function(e) {
					return e[t]
				}), e, i, [["w", "e"], ["n", "s"]][t])
			},
			getCreatingRange: function(e) {
				var i = Pd(e);
				return [aC(i[0][t], i[1][t]), rC(i[0][t], i[1][t])]
			},
			updateCoverShape: function(e, i, n, o) {
				var a, r = Dd(e, i);
				if (!0 !== r && r.getLinearBrushOtherExtent) a = r.getLinearBrushOtherExtent(t, e._transform);
				else {
					var s = e._zr;
					a = [0, [s.getWidth(), s.getHeight()][1 - t]]
				}
				var l = [n, a];
				t && l.reverse(),
				Nd(e, i, l, o)
			},
			updateCommon: Ed,
			contain: Yd
		}
	}
	function Qd(t) {
		return t = nf(t),
		function(e, i) {
			return yo(e, t)
		}
	}
	function tf(t, e) {
		return t = nf(t),
		function(i) {
			var n = null != e ? e: i,
			o = n ? t.width: t.height,
			a = n ? t.x: t.y;
			return [a, a + (o || 0)]
		}
	}
	function ef(t, e, i) {
		return t = nf(t),
		function(n, o, a) {
			return t.contain(o[0], o[1]) && !tu(n, e, i)
		}
	}
	function nf(t) {
		return Kt.create(t)
	}
	function of(t, e, i) {
		return i && "axisAreaSelect" === i.type && e.findComponents({
			mainType: "parallelAxis",
			query: i
		})[0] === t
	}
	function af(t) {
		var e = t.axis;
		return f(t.activeIntervals,
		function(t) {
			return {
				brushType: "lineX",
				panelId: "pl",
				range: [e.dataToCoord(t[0], !0), e.dataToCoord(t[1], !0)]
			}
		})
	}
	function rf(t, e) {
		return e.getComponent("parallel", t.get("parallelIndex"))
	}
	function sf(t, e) {
		var i = t._model;
		return i.get("axisExpandable") && i.get("axisExpandTriggerOn") === e
	}
	function lf(t, e) {
		if (!t.encodeDefine) {
			var i = e.ecModel.getComponent("parallel", e.get("parallelIndex"));
			if (i) {
				var n = t.encodeDefine = z();
				d(i.dimensions,
				function(t) {
					var e = hf(t);
					n.set(t, e)
				})
			}
		}
	}
	function hf(t) {
		return + t.replace("dim", "")
	}
	function uf(t, e, i) {
		var n = t.model,
		o = t.getRect(),
		a = new Vb({
			shape: {
				x: o.x,
				y: o.y,
				width: o.width,
				height: o.height
			}
		}),
		r = "horizontal" === n.get("layout") ? "width": "height";
		return a.setShape(r, 0),
		fo(a, {
			shape: {
				width: o.width,
				height: o.height
			}
		},
		e, i),
		a
	}
	function cf(t, e, i, n) {
		for (var o = [], a = 0; a < i.length; a++) {
			var r = i[a],
			s = t.get(t.mapDimension(r), e);
			pf(s, n.getAxis(r).type) || o.push(n.dataToPoint(s, r))
		}
		return o
	}
	function df(t, e, i, n, o) {
		var a = cf(t, i, n, o),
		r = new Bb({
			shape: {
				points: a
			},
			silent: !0,
			z2: 10
		});
		e.add(r),
		t.setItemGraphicEl(i, r)
	}
	function ff(t, e) {
		var i = t.hostModel.getModel("lineStyle"),
		n = i.getLineStyle();
		t.eachItemGraphicEl(function(o, r) {
			if (t.hasItemOption) {
				var s = t.getItemModel(r).getModel("lineStyle", i);
				n = s.getLineStyle(["color", "stroke"])
			}
			o.useStyle(a(n, {
				fill: null,
				stroke: t.getItemVisual(r, "color"),
				opacity: t.getItemVisual(r, "opacity")
			})),
			o.shape.smooth = e
		})
	}
	function pf(t, e) {
		return "category" === e ? null == t: null == t || isNaN(t)
	}
	function gf(t, e, i) {
		var n = new Vb({
			shape: {
				x: t.x - 10,
				y: t.y - 10,
				width: 0,
				height: t.height + 20
			}
		});
		return fo(n, {
			shape: {
				width: t.width + 20,
				height: t.height + 20
			}
		},
		e, i),
		n
	}
	function mf() {
		function t(e, n) {
			if (n >= i.length) return e;
			for (var o = -1,
			a = e.length,
			r = i[n++], s = {},
			l = {}; ++o < a;) {
				var h = r(e[o]),
				u = l[h];
				u ? u.push(e[o]) : l[h] = [e[o]]
			}
			return d(l,
			function(e, i) {
				s[i] = t(e, n)
			}),
			s
		}
		function e(t, o) {
			if (o >= i.length) return t;
			var a = [],
			r = n[o++];
			return d(t,
			function(t, i) {
				a.push({
					key: i,
					values: e(t, o)
				})
			}),
			r ? a.sort(function(t, e) {
				return r(t.key, e.key)
			}) : a
		}
		var i = [],
		n = [];
		return {
			key: function(t) {
				return i.push(t),
				this
			},
			sortKeys: function(t) {
				return n[i.length - 1] = t,
				this
			},
			entries: function(i) {
				return e(t(i, 0), 0)
			}
		}
	}
	function vf(t, e) {
		return Ko(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		})
	}
	function yf(t, e, i, n, o, a, r) {
		_f(t, i, o),
		Sf(t, e, a, n, r),
		Lf(t)
	}
	function xf(t) {
		d(t,
		function(t) {
			var e = Of(t.outEdges, Rf),
			i = Of(t.inEdges, Rf),
			n = Math.max(e, i);
			t.setLayout({
				value: n
			},
			!0)
		})
	}
	function _f(t, e, i) {
		for (var n = t,
		o = null,
		a = 0; n.length;) {
			o = [];
			for (var r = 0,
			s = n.length; r < s; r++) {
				var l = n[r];
				l.setLayout({
					x: a
				},
				!0),
				l.setLayout({
					dx: e
				},
				!0);
				for (var h = 0,
				u = l.outEdges.length; h < u; h++) o.push(l.outEdges[h].node2)
			}
			n = o,
			++a
		}
		wf(t, a),
		bf(t, (i - e) / (a - 1))
	}
	function wf(t, e) {
		d(t,
		function(t) {
			t.outEdges.length || t.setLayout({
				x: e - 1
			},
			!0)
		})
	}
	function bf(t, e) {
		d(t,
		function(t) {
			var i = t.getLayout().x * e;
			t.setLayout({
				x: i
			},
			!0)
		})
	}
	function Sf(t, e, i, n, o) {
		var a = mf().key(function(t) {
			return t.getLayout().x
		}).sortKeys(zf).entries(t).map(function(t) {
			return t.values
		});
		Mf(t, a, e, i, n),
		If(a, n, i);
		for (var r = 1; o > 0; o--) Tf(a, r *= .99),
		If(a, n, i),
		Df(a, r),
		If(a, n, i)
	}
	function Mf(t, e, i, n, o) {
		var a = [];
		d(e,
		function(t) {
			var e = t.length,
			i = 0;
			d(t,
			function(t) {
				i += t.getLayout().value
			});
			var r = (n - (e - 1) * o) / i;
			a.push(r)
		}),
		a.sort(function(t, e) {
			return t - e
		});
		var r = a[0];
		d(e,
		function(t) {
			d(t,
			function(t, e) {
				t.setLayout({
					y: e
				},
				!0);
				var i = t.getLayout().value * r;
				t.setLayout({
					dy: i
				},
				!0)
			})
		}),
		d(i,
		function(t) {
			var e = +t.getValue() * r;
			t.setLayout({
				dy: e
			},
			!0)
		})
	}
	function If(t, e, i) {
		d(t,
		function(t) {
			var n, o, a, r = 0,
			s = t.length;
			for (t.sort(Ef), a = 0; a < s; a++) {
				if (n = t[a], (o = r - n.getLayout().y) > 0) {
					l = n.getLayout().y + o;
					n.setLayout({
						y: l
					},
					!0)
				}
				r = n.getLayout().y + n.getLayout().dy + e
			}
			if ((o = r - e - i) > 0) {
				var l = n.getLayout().y - o;
				for (n.setLayout({
					y: l
				},
				!0), r = n.getLayout().y, a = s - 2; a >= 0; --a)(o = (n = t[a]).getLayout().y + n.getLayout().dy + e - r) > 0 && (l = n.getLayout().y - o, n.setLayout({
					y: l
				},
				!0)),
				r = n.getLayout().y
			}
		})
	}
	function Tf(t, e) {
		d(t.slice().reverse(),
		function(t) {
			d(t,
			function(t) {
				if (t.outEdges.length) {
					var i = Of(t.outEdges, Af) / Of(t.outEdges, Rf),
					n = t.getLayout().y + (i - Nf(t)) * e;
					t.setLayout({
						y: n
					},
					!0)
				}
			})
		})
	}
	function Af(t) {
		return Nf(t.node2) * t.getValue()
	}
	function Df(t, e) {
		d(t,
		function(t) {
			d(t,
			function(t) {
				if (t.inEdges.length) {
					var i = Of(t.inEdges, Cf) / Of(t.inEdges, Rf),
					n = t.getLayout().y + (i - Nf(t)) * e;
					t.setLayout({
						y: n
					},
					!0)
				}
			})
		})
	}
	function Cf(t) {
		return Nf(t.node1) * t.getValue()
	}
	function Lf(t) {
		d(t,
		function(t) {
			t.outEdges.sort(kf),
			t.inEdges.sort(Pf)
		}),
		d(t,
		function(t) {
			var e = 0,
			i = 0;
			d(t.outEdges,
			function(t) {
				t.setLayout({
					sy: e
				},
				!0),
				e += t.getLayout().dy
			}),
			d(t.inEdges,
			function(t) {
				t.setLayout({
					ty: i
				},
				!0),
				i += t.getLayout().dy
			})
		})
	}
	function kf(t, e) {
		return t.node2.getLayout().y - e.node2.getLayout().y
	}
	function Pf(t, e) {
		return t.node1.getLayout().y - e.node1.getLayout().y
	}
	function Of(t, e) {
		for (var i = 0,
		n = t.length,
		o = -1; ++o < n;) {
			var a = +e.call(t, t[o], o);
			isNaN(a) || (i += a)
		}
		return i
	}
	function Nf(t) {
		return t.getLayout().y + t.getLayout().dy / 2
	}
	function Ef(t, e) {
		return t.getLayout().y - e.getLayout().y
	}
	function zf(t, e) {
		return t < e ? -1 : t > e ? 1 : t === e ? 0 : NaN
	}
	function Rf(t) {
		return t.getValue()
	}
	function Bf(t, e, i, n) {
		S_.call(this),
		this.bodyIndex,
		this.whiskerIndex,
		this.styleUpdater = i,
		this._createContent(t, e, n),
		this.updateData(t, e, n),
		this._seriesModel
	}
	function Vf(t, e, i) {
		return f(t,
		function(t) {
			return t = t.slice(),
			t[e] = i.initBaseline,
			t
		})
	}
	function Gf(t) {
		var e = {};
		return d(t,
		function(t, i) {
			e["ends" + i] = t
		}),
		e
	}
	function Wf(t) {
		this.group = new S_,
		this.styleUpdater = t
	}
	function Ff(t, e, i) {
		var n = e.getItemModel(i),
		o = n.getModel(CC),
		a = e.getItemVisual(i, "color"),
		r = o.getItemStyle(["borderColor"]),
		s = t.childAt(t.whiskerIndex);
		s.style.set(r),
		s.style.stroke = a,
		s.dirty();
		var l = t.childAt(t.bodyIndex);
		l.style.set(r),
		l.style.stroke = a,
		l.dirty(),
		to(t, n.getModel(LC).getItemStyle())
	}
	function Hf(t) {
		var e = [],
		i = [];
		return t.eachSeriesByType("boxplot",
		function(t) {
			var n = t.getBaseAxis(),
			o = l(i, n);
			o < 0 && (o = i.length, i[o] = n, e[o] = {
				axis: n,
				seriesModels: []
			}),
			e[o].seriesModels.push(t)
		}),
		e
	}
	function Zf(t) {
		var e, i, n = t.axis,
		o = t.seriesModels,
		a = o.length,
		r = t.boxWidthList = [],
		s = t.boxOffsetList = [],
		l = [];
		if ("category" === n.type) i = n.getBandWidth();
		else {
			var h = 0;
			PC(o,
			function(t) {
				h = Math.max(h, t.getData().count())
			}),
			e = n.getExtent(),
			Math.abs(e[1] - e[0])
		}
		PC(o,
		function(t) {
			var e = t.get("boxWidth");
			y(e) || (e = [e, e]),
			l.push([To(e[0], i) || 0, To(e[1], i) || 0])
		});
		var u = .8 * i - 2,
		c = u / a * .3,
		d = (u - c * (a - 1)) / a,
		f = d / 2 - u / 2;
		PC(o,
		function(t, e) {
			s.push(f),
			f += c + d,
			r.push(Math.min(Math.max(d, l[e][0]), l[e][1]))
		})
	}
	function Uf(t, e, i) {
		var n, o = t.coordinateSystem,
		a = t.getData(),
		r = i / 2,
		s = t.get("layout"),
		l = "horizontal" === s ? 0 : 1,
		h = 1 - l,
		u = ["x", "y"],
		c = [];
		d(a.dimensions,
		function(t) {
			var e = a.getDimensionInfo(t).coordDim;
			e === u[h] ? c.push(t) : e === u[l] && (n = t)
		}),
		null == n || c.length < 5 || a.each([n].concat(c),
		function() {
			function t(t) {
				var i = [];
				i[l] = d,
				i[h] = t;
				var n;
				return isNaN(d) || isNaN(t) ? n = [NaN, NaN] : (n = o.dataToPoint(i))[l] += e,
				n
			}
			function i(t, e) {
				var i = t.slice(),
				n = t.slice();
				i[l] += r,
				n[l] -= r,
				e ? y.push(i, n) : y.push(n, i)
			}
			function n(t) {
				var e = [t.slice(), t.slice()];
				e[0][l] -= r,
				e[1][l] += r,
				v.push(e)
			}
			var u = arguments,
			d = u[0],
			f = u[c.length + 1],
			p = t(u[3]),
			g = t(u[1]),
			m = t(u[5]),
			v = [[g, t(u[2])], [m, t(u[4])]];
			n(g),
			n(m),
			n(p);
			var y = [];
			i(v[0][1], 0),
			i(v[1][1], 1),
			a.setItemLayout(f, {
				chartLayout: s,
				initBaseline: p[h],
				median: p,
				bodyEnds: y,
				whiskerEnds: v
			})
		})
	}
	function jf(t, e, i) {
		var n = e.getItemModel(i),
		o = n.getModel(OC),
		a = e.getItemVisual(i, "color"),
		r = e.getItemVisual(i, "borderColor") || a,
		s = o.getItemStyle(["color", "color0", "borderColor", "borderColor0"]),
		l = t.childAt(t.whiskerIndex);
		l.useStyle(s),
		l.style.stroke = r;
		var h = t.childAt(t.bodyIndex);
		h.useStyle(s),
		h.style.fill = a,
		h.style.stroke = r,
		to(t, n.getModel(NC).getItemStyle())
	}
	function Xf(t, e) {
		var i, n = t.getBaseAxis(),
		o = "category" === n.type ? n.getBandWidth() : (i = n.getExtent(), Math.abs(i[1] - i[0]) / e.count()),
		a = To(VC(t.get("barMaxWidth"), o), o),
		r = To(VC(t.get("barMinWidth"), 1), o),
		s = t.get("barWidth");
		return null != s ? To(s, o) : Math.max(Math.min(o / 2, a), r)
	}
	function Yf(t) {
		return y(t) || (t = [ + t, +t]),
		t
	}
	function qf(t, e) {
		t.eachChild(function(t) {
			t.attr({
				z: e.z,
				zlevel: e.zlevel,
				style: {
					stroke: "stroke" === e.brushType ? e.color: null,
					fill: "fill" === e.brushType ? e.color: null
				}
			})
		})
	}
	function $f(t, e) {
		S_.call(this);
		var i = new bl(t, e),
		n = new S_;
		this.add(i),
		this.add(n),
		n.beforeUpdate = function() {
			this.attr(i.getScale())
		},
		this.updateData(t, e)
	}
	function Kf(t) {
		var e = t.data;
		e && e[0] && e[0][0] && e[0][0].coord && (t.data = f(e,
		function(t) {
			var e = {
				coords: [t[0].coord, t[1].coord]
			};
			return t[0].name && (e.fromName = t[0].name),
			t[1].name && (e.toName = t[1].name),
			o([e, t[0], t[1]])
		}))
	}
	function Jf(t, e, i) {
		S_.call(this),
		this.add(this.createLine(t, e, i)),
		this._updateEffectSymbol(t, e)
	}
	function Qf(t, e, i) {
		S_.call(this),
		this._createPolyline(t, e, i)
	}
	function tp(t, e, i) {
		Jf.call(this, t, e, i),
		this._lastFrame = 0,
		this._lastFramePercent = 0
	}
	function ep() {
		this.group = new S_
	}
	function ip(t) {
		return t instanceof Array || (t = [t, t]),
		t
	}
	function np() {
		var t = Px();
		this.canvas = t,
		this.blurSize = 30,
		this.pointSize = 20,
		this.maxOpacity = 1,
		this.minOpacity = 0,
		this._gradientPixels = {}
	}
	function op(t, e, i) {
		var n = t[1] - t[0],
		o = (e = f(e,
		function(e) {
			return {
				interval: [(e.interval[0] - t[0]) / n, (e.interval[1] - t[0]) / n]
			}
		})).length,
		a = 0;
		return function(t) {
			for (n = a; n < o; n++) if ((r = e[n].interval)[0] <= t && t <= r[1]) {
				a = n;
				break
			}
			if (n === o) for (var n = a - 1; n >= 0; n--) {
				var r = e[n].interval;
				if (r[0] <= t && t <= r[1]) {
					a = n;
					break
				}
			}
			return n >= 0 && n < o && i[n]
		}
	}
	function ap(t, e) {
		var i = t[1] - t[0];
		return e = [(e[0] - t[0]) / i, (e[1] - t[0]) / i],
		function(t) {
			return t >= e[0] && t <= e[1]
		}
	}
	function rp(t) {
		var e = t.dimensions;
		return "lng" === e[0] && "lat" === e[1]
	}
	function sp(t, e, i, n) {
		var o = t.getItemLayout(e),
		a = i.get("symbolRepeat"),
		r = i.get("symbolClip"),
		s = i.get("symbolPosition") || "start",
		l = (i.get("symbolRotate") || 0) * Math.PI / 180 || 0,
		h = i.get("symbolPatternSize") || 2,
		u = i.isAnimationEnabled(),
		c = {
			dataIndex: e,
			layout: o,
			itemModel: i,
			symbolType: t.getItemVisual(e, "symbol") || "circle",
			color: t.getItemVisual(e, "color"),
			symbolClip: r,
			symbolRepeat: a,
			symbolRepeatDirection: i.get("symbolRepeatDirection"),
			symbolPatternSize: h,
			rotation: l,
			animationModel: u ? i: null,
			hoverAnimation: u && i.get("hoverAnimation"),
			z2: i.getShallow("z", !0) || 0
		};
		lp(i, a, o, n, c),
		up(t, e, o, a, r, c.boundingLength, c.pxSign, h, n, c),
		cp(i, c.symbolScale, l, n, c);
		var d = c.symbolSize,
		f = i.get("symbolOffset");
		return y(f) && (f = [To(f[0], d[0]), To(f[1], d[1])]),
		dp(i, d, o, a, r, f, s, c.valueLineWidth, c.boundingLength, c.repeatCutLength, n, c),
		c
	}
	function lp(t, e, i, n, o) {
		var a, r = n.valueDim,
		s = t.get("symbolBoundingData"),
		l = n.coordSys.getOtherAxis(n.coordSys.getBaseAxis()),
		h = l.toGlobalCoord(l.dataToCoord(0)),
		u = 1 - +(i[r.wh] <= 0);
		if (y(s)) {
			var c = [hp(l, s[0]) - h, hp(l, s[1]) - h];
			c[1] < c[0] && c.reverse(),
			a = c[u]
		} else a = null != s ? hp(l, s) - h: e ? n.coordSysExtent[r.index][u] - h: i[r.wh];
		o.boundingLength = a,
		e && (o.repeatCutLength = i[r.wh]),
		o.pxSign = a > 0 ? 1 : a < 0 ? -1 : 0
	}
	function hp(t, e) {
		return t.toGlobalCoord(t.dataToCoord(t.scale.parse(e)))
	}
	function up(t, e, i, n, o, a, r, s, l, h) {
		var u = l.valueDim,
		c = l.categoryDim,
		d = Math.abs(i[c.wh]),
		f = t.getItemVisual(e, "symbolSize");
		y(f) ? f = f.slice() : (null == f && (f = "100%"), f = [f, f]),
		f[c.index] = To(f[c.index], d),
		f[u.index] = To(f[u.index], n ? d: Math.abs(a)),
		h.symbolSize = f,
		(h.symbolScale = [f[0] / s, f[1] / s])[u.index] *= (l.isHorizontal ? -1 : 1) * r
	}
	function cp(t, e, i, n, o) {
		var a = t.get(tL) || 0;
		a && (iL.attr({
			scale: e.slice(),
			rotation: i
		}), iL.updateTransform(), a /= iL.getLineScale(), a *= e[n.valueDim.index]),
		o.valueLineWidth = a
	}
	function dp(t, e, i, n, o, r, s, l, h, u, c, d) {
		var f = c.categoryDim,
		p = c.valueDim,
		g = d.pxSign,
		m = Math.max(e[p.index] + l, 0),
		v = m;
		if (n) {
			var y = Math.abs(h),
			x = T(t.get("symbolMargin"), "15%") + "",
			_ = !1;
			x.lastIndexOf("!") === x.length - 1 && (_ = !0, x = x.slice(0, x.length - 1)),
			x = To(x, e[p.index]);
			var w = Math.max(m + 2 * x, 0),
			b = _ ? 0 : 2 * x,
			S = Go(n),
			M = S ? n: Cp((y + b) / w);
			w = m + 2 * (x = (y - M * m) / 2 / (_ ? M: M - 1)),
			b = _ ? 0 : 2 * x,
			S || "fixed" === n || (M = u ? Cp((Math.abs(u) + b) / w) : 0),
			v = M * w - b,
			d.repeatTimes = M,
			d.symbolMargin = x
		}
		var I = g * (v / 2),
		A = d.pathPosition = [];
		A[f.index] = i[f.wh] / 2,
		A[p.index] = "start" === s ? I: "end" === s ? h - I: h / 2,
		r && (A[0] += r[0], A[1] += r[1]);
		var D = d.bundlePosition = [];
		D[f.index] = i[f.xy],
		D[p.index] = i[p.xy];
		var C = d.barRectShape = a({},
		i);
		C[p.wh] = g * Math.max(Math.abs(i[p.wh]), Math.abs(A[p.index] + I)),
		C[f.wh] = i[f.wh];
		var L = d.clipShape = {};
		L[f.xy] = -i[f.xy],
		L[f.wh] = c.ecSize[f.wh],
		L[p.xy] = 0,
		L[p.wh] = i[p.wh]
	}
	function fp(t) {
		var e = t.symbolPatternSize,
		i = dl(t.symbolType, -e / 2, -e / 2, e, e, t.color);
		return i.attr({
			culling: !0
		}),
		"image" !== i.type && i.setStyle({
			strokeNoScale: !0
		}),
		i
	}
	function pp(t, e, i, n) {
		function o(t) {
			var e = l.slice(),
			n = i.pxSign,
			o = t;
			return ("start" === i.symbolRepeatDirection ? n > 0 : n < 0) && (o = u - 1 - t),
			e[h.index] = d * (o - u / 2 + .5) + l[h.index],
			{
				position: e,
				scale: i.symbolScale.slice(),
				rotation: i.rotation
			}
		}
		var a = t.__pictorialBundle,
		r = i.symbolSize,
		s = i.valueLineWidth,
		l = i.pathPosition,
		h = e.valueDim,
		u = i.repeatTimes || 0,
		c = 0,
		d = r[e.valueDim.index] + s + 2 * i.symbolMargin;
		for (Tp(t,
		function(t) {
			t.__pictorialAnimationIndex = c,
			t.__pictorialRepeatTimes = u,
			c < u ? Ap(t, null, o(c), i, n) : Ap(t, null, {
				scale: [0, 0]
			},
			i, n,
			function() {
				a.remove(t)
			}),
			wp(t, i),
			c++
		}); c < u; c++) {
			var f = fp(i);
			f.__pictorialAnimationIndex = c,
			f.__pictorialRepeatTimes = u,
			a.add(f);
			var p = o(c);
			Ap(f, {
				position: p.position,
				scale: [0, 0]
			},
			{
				scale: p.scale,
				rotation: p.rotation
			},
			i, n),
			f.on("mouseover",
			function() {
				Tp(t,
				function(t) {
					t.trigger("emphasis")
				})
			}).on("mouseout",
			function() {
				Tp(t,
				function(t) {
					t.trigger("normal")
				})
			}),
			wp(f, i)
		}
	}
	function gp(t, e, i, n) {
		var o = t.__pictorialBundle,
		a = t.__pictorialMainPath;
		a ? Ap(a, null, {
			position: i.pathPosition.slice(),
			scale: i.symbolScale.slice(),
			rotation: i.rotation
		},
		i, n) : (a = t.__pictorialMainPath = fp(i), o.add(a), Ap(a, {
			position: i.pathPosition.slice(),
			scale: [0, 0],
			rotation: i.rotation
		},
		{
			scale: i.symbolScale.slice()
		},
		i, n), a.on("mouseover",
		function() {
			this.trigger("emphasis")
		}).on("mouseout",
		function() {
			this.trigger("normal")
		})),
		wp(a, i)
	}
	function mp(t, e, i) {
		var n = a({},
		e.barRectShape),
		o = t.__pictorialBarRect;
		o ? Ap(o, null, {
			shape: n
		},
		e, i) : (o = t.__pictorialBarRect = new Vb({
			z2: 2,
			shape: n,
			silent: !0,
			style: {
				stroke: "transparent",
				fill: "transparent",
				lineWidth: 0
			}
		}), t.add(o))
	}
	function vp(t, e, i, n) {
		if (i.symbolClip) {
			var o = t.__pictorialClipPath,
			r = a({},
			i.clipShape),
			s = e.valueDim,
			l = i.animationModel,
			h = i.dataIndex;
			if (o) co(o, {
				shape: r
			},
			l, h);
			else {
				r[s.wh] = 0,
				o = new Vb({
					shape: r
				}),
				t.__pictorialBundle.setClipPath(o),
				t.__pictorialClipPath = o;
				var u = {};
				u[s.wh] = i.clipShape[s.wh],
				tS[n ? "updateProps": "initProps"](o, {
					shape: u
				},
				l, h)
			}
		}
	}
	function yp(t, e) {
		var i = t.getItemModel(e);
		return i.getAnimationDelayParams = xp,
		i.isAnimationEnabled = _p,
		i
	}
	function xp(t) {
		return {
			index: t.__pictorialAnimationIndex,
			count: t.__pictorialRepeatTimes
		}
	}
	function _p() {
		return this.parentModel.isAnimationEnabled() && !!this.getShallow("animation")
	}
	function wp(t, e) {
		t.off("emphasis").off("normal");
		var i = e.symbolScale.slice();
		e.hoverAnimation && t.on("emphasis",
		function() {
			this.animateTo({
				scale: [1.1 * i[0], 1.1 * i[1]]
			},
			400, "elasticOut")
		}).on("normal",
		function() {
			this.animateTo({
				scale: i.slice()
			},
			400, "elasticOut")
		})
	}
	function bp(t, e, i, n) {
		var o = new S_,
		a = new S_;
		return o.add(a),
		o.__pictorialBundle = a,
		a.attr("position", i.bundlePosition.slice()),
		i.symbolRepeat ? pp(o, e, i) : gp(o, e, i),
		mp(o, i, n),
		vp(o, e, i, n),
		o.__pictorialShapeStr = Ip(t, i),
		o.__pictorialSymbolMeta = i,
		o
	}
	function Sp(t, e, i) {
		var n = i.animationModel,
		o = i.dataIndex;
		co(t.__pictorialBundle, {
			position: i.bundlePosition.slice()
		},
		n, o),
		i.symbolRepeat ? pp(t, e, i, !0) : gp(t, e, i, !0),
		mp(t, i, !0),
		vp(t, e, i, !0)
	}
	function Mp(t, e, i, n) {
		var o = n.__pictorialBarRect;
		o && (o.style.text = null);
		var a = [];
		Tp(n,
		function(t) {
			a.push(t)
		}),
		n.__pictorialMainPath && a.push(n.__pictorialMainPath),
		n.__pictorialClipPath && (i = null),
		d(a,
		function(t) {
			co(t, {
				scale: [0, 0]
			},
			i, e,
			function() {
				n.parent && n.parent.remove(n)
			})
		}),
		t.setItemGraphicEl(e, null)
	}
	function Ip(t, e) {
		return [t.getItemVisual(e.dataIndex, "symbol") || "none", !!e.symbolRepeat, !!e.symbolClip].join(":")
	}
	function Tp(t, e, i) {
		d(t.__pictorialBundle.children(),
		function(n) {
			n !== t.__pictorialBarRect && e.call(i, n)
		})
	}
	function Ap(t, e, i, n, o, a) {
		e && t.attr(e),
		n.symbolClip && !o ? i && t.attr(i) : i && tS[o ? "updateProps": "initProps"](t, i, n.animationModel, n.dataIndex, a)
	}
	function Dp(t, e, i) {
		var n = i.color,
		o = i.dataIndex,
		a = i.itemModel,
		s = a.getModel("itemStyle").getItemStyle(["color"]),
		l = a.getModel("emphasis.itemStyle").getItemStyle(),
		h = a.getShallow("cursor");
		Tp(t,
		function(t) {
			t.setColor(n),
			t.setStyle(r({
				fill: n,
				opacity: i.opacity
			},
			s)),
			to(t, l),
			h && (t.cursor = h),
			t.z2 = i.z2
		});
		var u = {},
		c = e.valueDim.posDesc[ + (i.boundingLength > 0)],
		d = t.__pictorialBarRect;
		Mh(d.style, u, a, n, e.seriesModel, o, c),
		to(d, u)
	}
	function Cp(t) {
		var e = Math.round(t);
		return Math.abs(t - e) < 1e-4 ? e: Math.ceil(t)
	}
	function Lp(t, e, i) {
		this.dimension = "single",
		this.dimensions = ["single"],
		this._axis = null,
		this._rect,
		this._init(t, e, i),
		this.model = t
	}
	function kp(t, e) {
		e = e || {};
		var i = t.coordinateSystem,
		n = t.axis,
		o = {},
		a = n.position,
		r = n.orient,
		s = i.getRect(),
		l = [s.x, s.x + s.width, s.y, s.y + s.height],
		h = {
			horizontal: {
				top: l[2],
				bottom: l[3]
			},
			vertical: {
				left: l[0],
				right: l[1]
			}
		};
		o.position = ["vertical" === r ? h.vertical[a] : l[0], "horizontal" === r ? h.horizontal[a] : l[3]];
		var u = {
			horizontal: 0,
			vertical: 1
		};
		o.rotation = Math.PI / 2 * u[r];
		var c = {
			top: -1,
			bottom: 1,
			right: 1,
			left: -1
		};
		o.labelDirection = o.tickDirection = o.nameDirection = c[a],
		t.get("axisTick.inside") && (o.tickDirection = -o.tickDirection),
		T(e.labelInside, t.get("axisLabel.inside")) && (o.labelDirection = -o.labelDirection);
		var d = e.rotate;
		return null == d && (d = t.get("axisLabel.rotate")),
		o.labelRotation = "top" === a ? -d: d,
		o.labelInterval = n.getLabelInterval(),
		o.z2 = 1,
		o
	}
	function Pp(t, e, i, n, o) {
		var r = t.axis;
		if (!r.scale.isBlank() && r.containData(e)) if (t.involveSeries) {
			var s = Op(e, t),
			l = s.payloadBatch,
			h = s.snapToValue;
			l[0] && null == o.seriesIndex && a(o, l[0]),
			!n && t.snap && r.containData(h) && null != h && (e = h),
			i.showPointer(t, e, l, o),
			i.showTooltip(t, s, h)
		} else i.showPointer(t, e)
	}
	function Op(t, e) {
		var i = e.axis,
		n = i.dim,
		o = t,
		a = [],
		r = Number.MAX_VALUE,
		s = -1;
		return cL(e.seriesModels,
		function(e, l) {
			var h, u, c = e.getData().mapDimension(n, !0);
			if (e.getAxisTooltipData) {
				var d = e.getAxisTooltipData(c, t, i);
				u = d.dataIndices,
				h = d.nestestValue
			} else {
				if (! (u = e.getData().indicesOfNearest(c[0], t, !1, "category" === i.type ? .5 : null)).length) return;
				h = e.getData().get(c[0], u[0])
			}
			if (null != h && isFinite(h)) {
				var f = t - h,
				p = Math.abs(f);
				p <= r && ((p < r || f >= 0 && s < 0) && (r = p, s = f, o = h, a.length = 0), cL(u,
				function(t) {
					a.push({
						seriesIndex: e.seriesIndex,
						dataIndexInside: t,
						dataIndex: e.getData().getRawIndex(t)
					})
				}))
			}
		}),
		{
			payloadBatch: a,
			snapToValue: o
		}
	}
	function Np(t, e, i, n) {
		t[e.key] = {
			value: i,
			payloadBatch: n
		}
	}
	function Ep(t, e, i, n) {
		var o = i.payloadBatch,
		a = e.axis,
		r = a.model,
		s = e.axisPointerModel;
		if (e.triggerTooltip && o.length) {
			var l = e.coordSys.model,
			h = _h(l),
			u = t.map[h];
			u || (u = t.map[h] = {
				coordSysId: l.id,
				coordSysIndex: l.componentIndex,
				coordSysType: l.type,
				coordSysMainType: l.mainType,
				dataByAxis: []
			},
			t.list.push(u)),
			u.dataByAxis.push({
				axisDim: a.dim,
				axisIndex: r.componentIndex,
				axisType: r.type,
				axisId: r.id,
				value: n,
				valueLabelOpt: {
					precision: s.get("label.precision"),
					formatter: s.get("label.formatter")
				},
				seriesDataIndices: o.slice()
			})
		}
	}
	function zp(t, e, i) {
		var n = i.axesInfo = [];
		cL(e,
		function(e, i) {
			var o = e.axisPointerModel.option,
			a = t[i];
			a ? (!e.useHandle && (o.status = "show"), o.value = a.value, o.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (o.status = "hide"),
			"show" === o.status && n.push({
				axisDim: e.axis.dim,
				axisIndex: e.axis.model.componentIndex,
				value: o.value
			})
		})
	}
	function Rp(t, e, i, n) {
		if (!Wp(e) && t.list.length) {
			var o = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
			n({
				type: "showTip",
				escapeConnect: !0,
				x: e[0],
				y: e[1],
				tooltipOption: i.tooltipOption,
				position: i.position,
				dataIndexInside: o.dataIndexInside,
				dataIndex: o.dataIndex,
				seriesIndex: o.seriesIndex,
				dataByCoordSys: t.list
			})
		} else n({
			type: "hideTip"
		})
	}
	function Bp(t, e, i) {
		var n = i.getZr(),
		o = fL(n).axisPointerLastHighlights || {},
		a = fL(n).axisPointerLastHighlights = {};
		cL(t,
		function(t, e) {
			var i = t.axisPointerModel.option;
			"show" === i.status && cL(i.seriesDataIndices,
			function(t) {
				var e = t.seriesIndex + " | " + t.dataIndex;
				a[e] = t
			})
		});
		var r = [],
		s = [];
		d(o,
		function(t, e) { ! a[e] && s.push(t)
		}),
		d(a,
		function(t, e) { ! o[e] && r.push(t)
		}),
		s.length && i.dispatchAction({
			type: "downplay",
			escapeConnect: !0,
			batch: s
		}),
		r.length && i.dispatchAction({
			type: "highlight",
			escapeConnect: !0,
			batch: r
		})
	}
	function Vp(t, e) {
		for (var i = 0; i < (t || []).length; i++) {
			var n = t[i];
			if (e.axis.dim === n.axisDim && e.axis.model.componentIndex === n.axisIndex) return n
		}
	}
	function Gp(t) {
		var e = t.axis.model,
		i = {},
		n = i.axisDim = t.axis.dim;
		return i.axisIndex = i[n + "AxisIndex"] = e.componentIndex,
		i.axisName = i[n + "AxisName"] = e.name,
		i.axisId = i[n + "AxisId"] = e.id,
		i
	}
	function Wp(t) {
		return ! t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
	}
	function Fp(t, e, i) {
		if (!_x.node) {
			var n = e.getZr();
			pL(n).records || (pL(n).records = {}),
			Hp(n, e),
			(pL(n).records[t] || (pL(n).records[t] = {})).handler = i
		}
	}
	function Hp(t, e) {
		function i(i, n) {
			t.on(i,
			function(i) {
				var o = Xp(e);
				gL(pL(t).records,
				function(t) {
					t && n(t, i, o.dispatchAction)
				}),
				Zp(o.pendings, e)
			})
		}
		pL(t).initialized || (pL(t).initialized = !0, i("click", v(jp, "click")), i("mousemove", v(jp, "mousemove")), i("globalout", Up))
	}
	function Zp(t, e) {
		var i, n = t.showTip.length,
		o = t.hideTip.length;
		n ? i = t.showTip[n - 1] : o && (i = t.hideTip[o - 1]),
		i && (i.dispatchAction = null, e.dispatchAction(i))
	}
	function Up(t, e, i) {
		t.handler("leave", null, i)
	}
	function jp(t, e, i, n) {
		e.handler(t, i, n)
	}
	function Xp(t) {
		var e = {
			showTip: [],
			hideTip: []
		},
		i = function(n) {
			var o = e[n.type];
			o ? o.push(n) : (n.dispatchAction = i, t.dispatchAction(n))
		};
		return {
			dispatchAction: i,
			pendings: e
		}
	}
	function Yp(t, e) {
		if (!_x.node) {
			var i = e.getZr(); (pL(i).records || {})[t] && (pL(i).records[t] = null)
		}
	}
	function qp() {}
	function $p(t, e, i, n) {
		Kp(vL(i).lastProp, n) || (vL(i).lastProp = n, e ? co(i, n, t) : (i.stopAnimation(), i.attr(n)))
	}
	function Kp(t, e) {
		if (w(t) && w(e)) {
			var i = !0;
			return d(e,
			function(e, n) {
				i = i && Kp(t[n], e)
			}),
			!!i
		}
		return t === e
	}
	function Jp(t, e) {
		t[e.get("label.show") ? "show": "hide"]()
	}
	function Qp(t) {
		return {
			position: t.position.slice(),
			rotation: t.rotation || 0
		}
	}
	function tg(t, e, i) {
		var n = e.get("z"),
		o = e.get("zlevel");
		t && t.traverse(function(t) {
			"group" !== t.type && (null != n && (t.z = n), null != o && (t.zlevel = o), t.silent = i)
		})
	}
	function eg(t) {
		var e, i = t.get("type"),
		n = t.getModel(i + "Style");
		return "line" === i ? (e = n.getLineStyle()).fill = null: "shadow" === i && ((e = n.getAreaStyle()).stroke = null),
		e
	}
	function ig(t, e, i, n, o) {
		var a = og(i.get("value"), e.axis, e.ecModel, i.get("seriesDataIndices"), {
			precision: i.get("label.precision"),
			formatter: i.get("label.formatter")
		}),
		r = i.getModel("label"),
		s = dS(r.get("padding") || 0),
		l = r.getFont(),
		h = me(a, l),
		u = o.position,
		c = h.width + s[1] + s[3],
		d = h.height + s[0] + s[2],
		f = o.align;
		"right" === f && (u[0] -= c),
		"center" === f && (u[0] -= c / 2);
		var p = o.verticalAlign;
		"bottom" === p && (u[1] -= d),
		"middle" === p && (u[1] -= d / 2),
		ng(u, c, d, n);
		var g = r.get("backgroundColor");
		g && "auto" !== g || (g = e.get("axisLine.lineStyle.color")),
		t.label = {
			shape: {
				x: 0,
				y: 0,
				width: c,
				height: d,
				r: r.get("borderRadius")
			},
			position: u.slice(),
			style: {
				text: a,
				textFont: l,
				textFill: r.getTextColor(),
				textPosition: "inside",
				fill: g,
				stroke: r.get("borderColor") || "transparent",
				lineWidth: r.get("borderWidth") || 0,
				shadowBlur: r.get("shadowBlur"),
				shadowColor: r.get("shadowColor"),
				shadowOffsetX: r.get("shadowOffsetX"),
				shadowOffsetY: r.get("shadowOffsetY")
			},
			z2: 10
		}
	}
	function ng(t, e, i, n) {
		var o = n.getWidth(),
		a = n.getHeight();
		t[0] = Math.min(t[0] + e, o) - e,
		t[1] = Math.min(t[1] + i, a) - i,
		t[0] = Math.max(t[0], 0),
		t[1] = Math.max(t[1], 0)
	}
	function og(t, e, i, n, o) {
		var a = e.scale.getLabel(t, {
			precision: o.precision
		}),
		r = o.formatter;
		if (r) {
			var s = {
				value: ul(e, t),
				seriesData: []
			};
			d(n,
			function(t) {
				var e = i.getSeriesByIndex(t.seriesIndex),
				n = t.dataIndexInside,
				o = e && e.getDataParams(n);
				o && s.seriesData.push(o)
			}),
			_(r) ? a = r.replace("{value}", a) : x(r) && (a = r(s))
		}
		return a
	}
	function ag(t, e, i) {
		var n = st();
		return dt(n, n, i.rotation),
		ct(n, n, i.position),
		go([t.dataToCoord(e), (i.labelOffset || 0) + (i.labelDirection || 1) * (i.labelMargin || 0)], n)
	}
	function rg(t, e, i, n, o, a) {
		var r = GT.innerTextLayout(i.rotation, 0, i.labelDirection);
		i.labelMargin = o.get("label.margin"),
		ig(e, n, o, a, {
			position: ag(n.axis, t, i),
			align: r.textAlign,
			verticalAlign: r.textVerticalAlign
		})
	}
	function sg(t, e, i) {
		return i = i || 0,
		{
			x1: t[i],
			y1: t[1 - i],
			x2: e[i],
			y2: e[1 - i]
		}
	}
	function lg(t, e, i) {
		return i = i || 0,
		{
			x: t[i],
			y: t[1 - i],
			width: e[i],
			height: e[1 - i]
		}
	}
	function hg(t, e, i, n, o, a) {
		return {
			cx: t,
			cy: e,
			r0: i,
			r: n,
			startAngle: o,
			endAngle: a,
			clockwise: !0
		}
	}
	function ug(t, e) {
		var i = {};
		return i[e.dim + "AxisIndex"] = e.index,
		t.getCartesian(i)
	}
	function cg(t) {
		return "x" === t.dim ? 0 : 1
	}
	function dg(t) {
		return t.isHorizontal() ? 0 : 1
	}
	function fg(t, e) {
		var i = t.getRect();
		return [i[bL[e]], i[bL[e]] + i[SL[e]]]
	}
	function pg(t, e, i) {
		var n = new Vb({
			shape: {
				x: t.x - 10,
				y: t.y - 10,
				width: 0,
				height: t.height + 20
			}
		});
		return fo(n, {
			shape: {
				width: t.width + 20,
				height: t.height + 20
			}
		},
		e, i),
		n
	}
	function gg(t, e, i) {
		if (t.count()) for (var n, o = e.coordinateSystem,
		a = e.getLayerSeries(), r = t.mapDimension("single"), s = t.mapDimension("value"), l = f(a,
		function(e) {
			return f(e.indices,
			function(e) {
				var i = o.dataToPoint(t.get(r, e));
				return i[1] = t.get(s, e),
				i
			})
		}), h = mg(l), u = h.y0, c = i / h.max, d = a.length, p = a[0].indices.length, g = 0; g < p; ++g) {
			n = u[g] * c,
			t.setItemLayout(a[0].indices[g], {
				layerIndex: 0,
				x: l[0][g][0],
				y0: n,
				y: l[0][g][1] * c
			});
			for (var m = 1; m < d; ++m) n += l[m - 1][g][1] * c,
			t.setItemLayout(a[m].indices[g], {
				layerIndex: m,
				x: l[m][g][0],
				y0: n,
				y: l[m][g][1] * c
			})
		}
	}
	function mg(t) {
		for (var e = t.length,
		i = t[0].length, n = [], o = [], a = 0, r = {},
		s = 0; s < i; ++s) {
			for (var l = 0,
			h = 0; l < e; ++l) h += t[l][s][1];
			h > a && (a = h),
			n.push(h)
		}
		for (var u = 0; u < i; ++u) o[u] = (a - n[u]) / 2;
		a = 0;
		for (var c = 0; c < i; ++c) {
			var d = n[c] + o[c];
			d > a && (a = d)
		}
		return r.y0 = o,
		r.max = a,
		r
	}
	function vg(t) {
		var e = 0;
		d(t.children,
		function(t) {
			vg(t);
			var i = t.value;
			y(i) && (i = i[0]),
			e += i
		});
		var i = t.value;
		y(i) && (i = i[0]),
		(null == i || isNaN(i)) && (i = e),
		i < 0 && (i = 0),
		y(t.value) ? t.value[0] = i: t.value = i
	}
	function yg(t, e, i) {
		function n() {
			r.ignore = r.hoverIgnore
		}
		function o() {
			r.ignore = r.normalIgnore
		}
		S_.call(this);
		var a = new Ob({
			z2: DL
		}),
		r = new Cb({
			z2: CL,
			silent: t.getModel("label").get("silent")
		});
		this.add(a),
		this.add(r),
		this.updateData(!0, t, "normal", e, i),
		this.on("emphasis", n).on("normal", o).on("mouseover", n).on("mouseout", o)
	}
	function xg(t, e, i) {
		var n = t.getVisual("color");
		0 === t.getVisual("visualMeta").length && (n = null);
		var o = t.getModel("itemStyle").get("color");
		if (o) return o;
		if (n) return n;
		if (0 === t.depth) return i.option.color[0];
		var a = i.option.color.length;
		return o = i.option.color[_g(t) % a]
	}
	function _g(t) {
		for (var e = t; e.depth > 1;) e = e.parentNode;
		return l(t.getAncestors()[0].children, e)
	}
	function wg(t, e, i) {
		return i !== AL.NONE && (i === AL.SELF ? t === e: i === AL.ANCESTOR ? t === e || t.isAncestorOf(e) : t === e || t.isDescendantOf(e))
	}
	function bg(t, e) {
		var i = t.children || [];
		t.children = Sg(i, e),
		i.length && d(t.children,
		function(t) {
			bg(t, e)
		})
	}
	function Sg(t, e) {
		if ("function" == typeof e) return t.sort(e);
		var i = "asc" === e;
		return t.sort(function(t, e) {
			var n = (t.getValue() - e.getValue()) * (i ? 1 : -1);
			return 0 === n ? (t.dataIndex - e.dataIndex) * (i ? -1 : 1) : n
		})
	}
	function Mg(t, e) {
		return e = e || [0, 0],
		f(["x", "y"],
		function(i, n) {
			var o = this.getAxis(i),
			a = e[n],
			r = t[n] / 2;
			return "category" === o.type ? o.getBandWidth() : Math.abs(o.dataToCoord(a - r) - o.dataToCoord(a + r))
		},
		this)
	}
	function Ig(t, e) {
		return e = e || [0, 0],
		f([0, 1],
		function(i) {
			var n = e[i],
			o = t[i] / 2,
			a = [],
			r = [];
			return a[i] = n - o,
			r[i] = n + o,
			a[1 - i] = r[1 - i] = e[1 - i],
			Math.abs(this.dataToPoint(a)[i] - this.dataToPoint(r)[i])
		},
		this)
	}
	function Tg(t, e) {
		var i = this.getAxis(),
		n = e instanceof Array ? e[0] : e,
		o = (t instanceof Array ? t[0] : t) / 2;
		return "category" === i.type ? i.getBandWidth() : Math.abs(i.dataToCoord(n - o) - i.dataToCoord(n + o))
	}
	function Ag(t, e) {
		return f(["Radius", "Angle"],
		function(i, n) {
			var o = this["get" + i + "Axis"](),
			a = e[n],
			r = t[n] / 2,
			s = "dataTo" + i,
			l = "category" === o.type ? o.getBandWidth() : Math.abs(o[s](a - r) - o[s](a + r));
			return "Angle" === i && (l = l * Math.PI / 180),
			l
		},
		this)
	}
	function Dg(t) {
		var e, i = t.type;
		if ("path" === i) {
			var n = t.shape; (e = En(n.pathData, null, {
				x: n.x || 0,
				y: n.y || 0,
				width: n.width || 0,
				height: n.height || 0
			},
			"center")).__customPathData = t.pathData
		} else "image" === i ? (e = new Je({})).__customImagePath = t.style.image: "text" === i ? (e = new Cb({})).__customText = t.style.text: e = new(0, tS[i.charAt(0).toUpperCase() + i.slice(1)]);
		return e.__customGraphicType = i,
		e.name = t.name,
		e
	}
	function Cg(t, e, n, o, a, r) {
		var s = {},
		l = n.style || {};
		if (n.shape && (s.shape = i(n.shape)), n.position && (s.position = n.position.slice()), n.scale && (s.scale = n.scale.slice()), n.origin && (s.origin = n.origin.slice()), n.rotation && (s.rotation = n.rotation), "image" === t.type && n.style) {
			h = s.style = {};
			d(["x", "y", "width", "height"],
			function(e) {
				Lg(e, h, l, t.style, r)
			})
		}
		if ("text" === t.type && n.style) {
			var h = s.style = {};
			d(["x", "y"],
			function(e) {
				Lg(e, h, l, t.style, r)
			}),
			!l.hasOwnProperty("textFill") && l.fill && (l.textFill = l.fill),
			!l.hasOwnProperty("textStroke") && l.stroke && (l.textStroke = l.stroke)
		}
		if ("group" !== t.type && (t.useStyle(l), r)) {
			t.style.opacity = 0;
			var u = l.opacity;
			null == u && (u = 1),
			fo(t, {
				style: {
					opacity: u
				}
			},
			o, e)
		}
		r ? t.attr(s) : co(t, s, o, e),
		t.attr({
			z2: n.z2 || 0,
			silent: n.silent
		}),
		!1 !== n.styleEmphasis && to(t, n.styleEmphasis)
	}
	function Lg(t, e, i, n, o) {
		null == i[t] || o || (e[t] = i[t], i[t] = n[t])
	}
	function kg(t, e, i, n) {
		function o(t) {
			null == t && (t = u),
			v && (c = e.getItemModel(t), d = c.getModel(zL), f = c.getModel(RL), p = e.getItemVisual(t, "color"), v = !1)
		}
		var s = t.get("renderItem"),
		l = t.coordinateSystem,
		h = {};
		l && (h = l.prepareCustoms ? l.prepareCustoms() : VL[l.type](l));
		var u, c, d, f, p, g = r({
			getWidth: n.getWidth,
			getHeight: n.getHeight,
			getZr: n.getZr,
			getDevicePixelRatio: n.getDevicePixelRatio,
			value: function(t, i) {
				return null == i && (i = u),
				e.get(e.getDimension(t || 0), i)
			},
			style: function(i, n) {
				null == n && (n = u),
				o(n);
				var r = c.getModel(NL).getItemStyle();
				null != p && (r.fill = p);
				var s = e.getItemVisual(n, "opacity");
				return null != s && (r.opacity = s),
				io(r, d, null, {
					autoColor: p,
					isRectText: !0
				}),
				r.text = d.getShallow("show") ? A(t.getFormattedLabel(n, "normal"), xl(e, n)) : null,
				i && a(r, i),
				r
			},
			styleEmphasis: function(i, n) {
				null == n && (n = u),
				o(n);
				var r = c.getModel(EL).getItemStyle();
				return io(r, f, null, {
					isRectText: !0
				},
				!0),
				r.text = f.getShallow("show") ? D(t.getFormattedLabel(n, "emphasis"), t.getFormattedLabel(n, "normal"), xl(e, n)) : null,
				i && a(r, i),
				r
			},
			visual: function(t, i) {
				return null == i && (i = u),
				e.getItemVisual(i, t)
			},
			barLayout: function(t) {
				if (l.getBaseAxis) return Qs(r({
					axis: l.getBaseAxis()
				},
				t), n)
			},
			currentSeriesIndices: function() {
				return i.getCurrentSeriesIndices()
			},
			font: function(t) {
				return ho(t, i)
			}
		},
		h.api || {}),
		m = {
			context: {},
			seriesId: t.id,
			seriesName: t.name,
			seriesIndex: t.seriesIndex,
			coordSys: h.coordSys,
			dataInsideLength: e.count(),
			encode: Pg(t.getData())
		},
		v = !0;
		return function(t) {
			return u = t,
			v = !0,
			s && s(r({
				dataIndexInside: t,
				dataIndex: e.getRawIndex(t)
			},
			m), g) || {}
		}
	}
	function Pg(t) {
		var e = {};
		return d(t.dimensions,
		function(i, n) {
			var o = t.getDimensionInfo(i);
			if (!o.isExtraCoord) {
				var a = o.coordDim; (e[a] = e[a] || [])[o.coordDimIndex] = n
			}
		}),
		e
	}
	function Og(t, e, i, n, o, a) {
		return (t = Ng(t, e, i, n, o, a)) && a.setItemGraphicEl(e, t),
		t
	}
	function Ng(t, e, i, n, o, a) {
		var r = i.type;
		if (!t || r === t.__customGraphicType || "path" === r && i.pathData === t.__customPathData || "image" === r && i.style.image === t.__customImagePath || "text" === r && i.style.text === t.__customText || (o.remove(t), t = null), null != r) {
			var s = !t;
			if (!t && (t = Dg(i)), Cg(t, e, i, n, a, s), "group" === r) {
				var l = t.children() || [],
				h = i.children || [];
				if (i.diffChildrenByName) Eg({
					oldChildren: l,
					newChildren: h,
					dataIndex: e,
					animatableModel: n,
					group: t,
					data: a
				});
				else {
					for (var u = 0; u < h.length; u++) Ng(t.childAt(u), e, h[u], n, t, a);
					for (; u < l.length; u++) l[u] && t.remove(l[u])
				}
			}
			return o.add(t),
			t
		}
	}
	function Eg(t) {
		new ws(t.oldChildren, t.newChildren, zg, zg, t).add(Rg).update(Rg).remove(Bg).execute()
	}
	function zg(t, e) {
		var i = t && t.name;
		return null != i ? i: BL + e
	}
	function Rg(t, e) {
		var i = this.context,
		n = null != t ? i.newChildren[t] : null;
		Ng(null != e ? i.oldChildren[e] : null, i.dataIndex, n, i.animatableModel, i.group, i.data)
	}
	function Bg(t) {
		var e = this.context,
		i = e.oldChildren[t];
		i && e.group.remove(i)
	}
	function Vg(t, e, i, n) {
		var o = i.type,
		a = new(0, tS[o.charAt(0).toUpperCase() + o.slice(1)])(i);
		e.add(a),
		n.set(t, a),
		a.__ecGraphicId = t
	}
	function Gg(t, e) {
		var i = t && t.parent;
		i && ("group" === t.type && t.traverse(function(t) {
			Gg(t, e)
		}), e.removeKey(t.__ecGraphicId), i.remove(t))
	}
	function Wg(t) {
		return t = a({},
		t),
		d(["id", "parentId", "$action", "hv", "bounding"].concat(_S),
		function(e) {
			delete t[e]
		}),
		t
	}
	function Fg(t, e) {
		var i;
		return d(e,
		function(e) {
			null != t[e] && "auto" !== t[e] && (i = !0)
		}),
		i
	}
	function Hg(t, e) {
		var i = t.exist;
		if (e.id = t.keyInfo.id, !e.type && i && (e.type = i.type), null == e.parentId) {
			var n = e.parentOption;
			n ? e.parentId = n.id: i && (e.parentId = i.parentId)
		}
		e.parentOption = null
	}
	function Zg(t, e, i) {
		var o = a({},
		i),
		r = t[e],
		s = i.$action || "merge";
		"merge" === s ? r ? (n(r, o, !0), ta(r, o, {
			ignoreSize: !0
		}), ia(i, r)) : t[e] = o: "replace" === s ? t[e] = o: "remove" === s && r && (t[e] = null)
	}
	function Ug(t, e) {
		t && (t.hv = e.hv = [Fg(e, ["left", "right"]), Fg(e, ["top", "bottom"])], "group" === t.type && (null == t.width && (t.width = e.width = 0), null == t.height && (t.height = e.height = 0)))
	}
	function jg(t, e, i) {
		var n, o = {},
		a = "toggleSelected" === t;
		return i.eachComponent("legend",
		function(i) {
			a && null != n ? i[n ? "select": "unSelect"](e.name) : (i[t](e.name), n = i.isSelected(e.name)),
			d(i.getData(),
			function(t) {
				var e = t.get("name");
				if ("\n" !== e && "" !== e) {
					var n = i.isSelected(e);
					o.hasOwnProperty(e) ? o[e] = o[e] && n: o[e] = n
				}
			})
		}),
		{
			name: e.name,
			selected: o
		}
	}
	function Xg(t, e, i) {
		var n = e.getBoxLayoutParams(),
		o = e.get("padding"),
		a = {
			width: i.getWidth(),
			height: i.getHeight()
		},
		r = Ko(n, a, o);
		bS(e.get("orient"), t, e.get("itemGap"), r.width, r.height),
		Jo(t, n, a, o)
	}
	function Yg(t, e) {
		var i = dS(e.get("padding")),
		n = e.getItemStyle(["color", "opacity"]);
		return n.fill = e.get("backgroundColor"),
		t = new Vb({
			shape: {
				x: t.x - i[3],
				y: t.y - i[0],
				width: t.width + i[1] + i[3],
				height: t.height + i[0] + i[2],
				r: e.get("borderRadius")
			},
			style: n,
			silent: !0,
			z2: -1
		})
	}
	function qg(t, e) {
		e.dispatchAction({
			type: "legendToggleSelect",
			name: t
		})
	}
	function $g(t, e, i) {
		var n = i.getZr().storage.getDisplayList()[0];
		n && n.useHoverLayer || t.get("legendHoverLink") && i.dispatchAction({
			type: "highlight",
			seriesName: t.name,
			name: e
		})
	}
	function Kg(t, e, i) {
		var n = i.getZr().storage.getDisplayList()[0];
		n && n.useHoverLayer || t.get("legendHoverLink") && i.dispatchAction({
			type: "downplay",
			seriesName: t.name,
			name: e
		})
	}
	function Jg(t, e, i) {
		var n = [1, 1];
		n[t.getOrient().index] = 0,
		ta(e, i, {
			type: "box",
			ignoreSize: n
		})
	}
	function Qg(t) {
		var e = "left " + t + "s cubic-bezier(0.23, 1, 0.32, 1),top " + t + "s cubic-bezier(0.23, 1, 0.32, 1)";
		return f(QL,
		function(t) {
			return t + "transition:" + e
		}).join(";")
	}
	function tm(t) {
		var e = [],
		i = t.get("fontSize"),
		n = t.getTextColor();
		return n && e.push("color:" + n),
		e.push("font:" + t.getFont()),
		i && e.push("line-height:" + Math.round(3 * i / 2) + "px"),
		KL(["decoration", "align"],
		function(i) {
			var n = t.get(i);
			n && e.push("text-" + i + ":" + n)
		}),
		e.join(";")
	}
	function em(t) {
		var e = [],
		i = t.get("transitionDuration"),
		n = t.get("backgroundColor"),
		o = t.getModel("textStyle"),
		a = t.get("padding");
		return i && e.push(Qg(i)),
		n && (_x.canvasSupported ? e.push("background-Color:" + n) : (e.push("background-Color:#" + Pt(n)), e.push("filter:alpha(opacity=70)"))),
		KL(["width", "color", "radius"],
		function(i) {
			var n = "border-" + i,
			o = JL(n),
			a = t.get(o);
			null != a && e.push(n + ":" + a + ("color" === i ? "": "px"))
		}),
		e.push(tm(o)),
		null != a && e.push("padding:" + dS(a).join("px ") + "px"),
		e.join(";") + ";"
	}
	function im(t, e) {
		if (_x.wxa) return null;
		var i = document.createElement("div"),
		n = this._zr = e.getZr();
		this.el = i,
		this._x = e.getWidth() / 2,
		this._y = e.getHeight() / 2,
		t.appendChild(i),
		this._container = t,
		this._show = !1,
		this._hideTimeout;
		var o = this;
		i.onmouseenter = function() {
			o._enterable && (clearTimeout(o._hideTimeout), o._show = !0),
			o._inContent = !0
		},
		i.onmousemove = function(e) {
			if (e = e || window.event, !o._enterable) {
				var i = n.handler;
				li(t, e, !0),
				i.dispatch("mousemove", e)
			}
		},
		i.onmouseleave = function() {
			o._enterable && o._show && o.hideLater(o._hideDelay),
			o._inContent = !1
		}
	}
	function nm(t) {
		for (var e = t.pop(); t.length;) {
			var i = t.pop();
			i && (_o.isInstance(i) && (i = i.get("tooltip", !0)), "string" == typeof i && (i = {
				formatter: i
			}), e = new _o(i, e, e.ecModel))
		}
		return e
	}
	function om(t, e) {
		return t.dispatchAction || m(e.dispatchAction, e)
	}
	function am(t, e, i, n, o, a, r) {
		var s = sm(i),
		l = s.width,
		h = s.height;
		return null != a && (t + l + a > n ? t -= l + a: t += a),
		null != r && (e + h + r > o ? e -= h + r: e += r),
		[t, e]
	}
	function rm(t, e, i, n, o) {
		var a = sm(i),
		r = a.width,
		s = a.height;
		return t = Math.min(t + r, n) - r,
		e = Math.min(e + s, o) - s,
		t = Math.max(t, 0),
		e = Math.max(e, 0),
		[t, e]
	}
	function sm(t) {
		var e = t.clientWidth,
		i = t.clientHeight;
		if (document.defaultView && document.defaultView.getComputedStyle) {
			var n = document.defaultView.getComputedStyle(t);
			n && (e += parseInt(n.paddingLeft, 10) + parseInt(n.paddingRight, 10) + parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), i += parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10))
		}
		return {
			width: e,
			height: i
		}
	}
	function lm(t, e, i) {
		var n = i[0],
		o = i[1],
		a = 0,
		r = 0,
		s = e.width,
		l = e.height;
		switch (t) {
		case "inside":
			a = e.x + s / 2 - n / 2,
			r = e.y + l / 2 - o / 2;
			break;
		case "top":
			a = e.x + s / 2 - n / 2,
			r = e.y - o - 5;
			break;
		case "bottom":
			a = e.x + s / 2 - n / 2,
			r = e.y + l + 5;
			break;
		case "left":
			a = e.x - n - 5,
			r = e.y + l / 2 - o / 2;
			break;
		case "right":
			a = e.x + s + 5,
			r = e.y + l / 2 - o / 2
		}
		return [a, r]
	}
	function hm(t) {
		return "center" === t || "middle" === t
	}
	function um(t) {
		return t.get("stack") || "__ec_stack_" + t.seriesIndex
	}
	function cm(t) {
		return t.dim
	}
	function dm(t, e) {
		var i = {};
		d(t,
		function(t, e) {
			var n = t.getData(),
			o = t.coordinateSystem.getBaseAxis(),
			a = o.getExtent(),
			r = "category" === o.type ? o.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(),
			s = i[cm(o)] || {
				bandWidth: r,
				remainedWidth: r,
				autoWidthCount: 0,
				categoryGap: "20%",
				gap: "30%",
				stacks: {}
			},
			l = s.stacks;
			i[cm(o)] = s;
			var h = um(t);
			l[h] || s.autoWidthCount++,
			l[h] = l[h] || {
				width: 0,
				maxWidth: 0
			};
			var u = To(t.get("barWidth"), r),
			c = To(t.get("barMaxWidth"), r),
			d = t.get("barGap"),
			f = t.get("barCategoryGap");
			u && !l[h].width && (u = Math.min(s.remainedWidth, u), l[h].width = u, s.remainedWidth -= u),
			c && (l[h].maxWidth = c),
			null != d && (s.gap = d),
			null != f && (s.categoryGap = f)
		});
		var n = {};
		return d(i,
		function(t, e) {
			n[e] = {};
			var i = t.stacks,
			o = t.bandWidth,
			a = To(t.categoryGap, o),
			r = To(t.gap, 1),
			s = t.remainedWidth,
			l = t.autoWidthCount,
			h = (s - a) / (l + (l - 1) * r);
			h = Math.max(h, 0),
			d(i,
			function(t, e) {
				var i = t.maxWidth;
				i && i < h && (i = Math.min(i, s), t.width && (i = Math.min(i, t.width)), s -= i, t.width = i, l--)
			}),
			h = (s - a) / (l + (l - 1) * r),
			h = Math.max(h, 0);
			var u, c = 0;
			d(i,
			function(t, e) {
				t.width || (t.width = h),
				u = t,
				c += t.width * (1 + r)
			}),
			u && (c -= u.width * r);
			var f = -c / 2;
			d(i,
			function(t, i) {
				n[e][i] = n[e][i] || {
					offset: f,
					width: t.width
				},
				f += t.width * (1 + r)
			})
		}),
		n
	}
	function fm(t, e) {
		nT.call(this, "radius", t, e),
		this.type = "category"
	}
	function pm(t, e) {
		e = e || [0, 360],
		nT.call(this, "angle", t, e),
		this.type = "category"
	}
	function gm(t, e) {
		return e.type || (e.data ? "category": "value")
	}
	function mm(t, e, i) {
		var n = e.get("center"),
		o = i.getWidth(),
		a = i.getHeight();
		t.cx = To(n[0], o),
		t.cy = To(n[1], a);
		var r = t.getRadiusAxis(),
		s = Math.min(o, a) / 2,
		l = To(e.get("radius"), s);
		r.inverse ? r.setExtent(l, 0) : r.setExtent(0, l)
	}
	function vm(t, e) {
		var i = this,
		n = i.getAngleAxis(),
		o = i.getRadiusAxis();
		if (n.scale.setExtent(1 / 0, -1 / 0), o.scale.setExtent(1 / 0, -1 / 0), t.eachSeries(function(t) {
			if (t.coordinateSystem === i) {
				var e = t.getData();
				d(e.mapDimension("radius", !0),
				function(t) {
					o.scale.unionExtentFromData(e, t)
				}),
				d(e.mapDimension("angle", !0),
				function(t) {
					n.scale.unionExtentFromData(e, t)
				})
			}
		}), rl(n.scale, n.model), rl(o.scale, o.model), "category" === n.type && !n.onBand) {
			var a = n.getExtent(),
			r = 360 / n.scale.count();
			n.inverse ? a[1] += r: a[1] -= r,
			n.setExtent(a[0], a[1])
		}
	}
	function ym(t, e) {
		if (t.type = e.get("type"), t.scale = sl(e), t.onBand = e.get("boundaryGap") && "category" === t.type, t.inverse = e.get("inverse"), "angleAxis" === e.mainType) {
			t.inverse ^= e.get("clockwise");
			var i = e.get("startAngle");
			t.setExtent(i, i + (t.inverse ? -360 : 360))
		}
		e.axis = t,
		t.model = e
	}
	function xm(t, e, i) {
		e[1] > e[0] && (e = e.slice().reverse());
		var n = t.coordToPoint([e[0], i]),
		o = t.coordToPoint([e[1], i]);
		return {
			x1: n[0],
			y1: n[1],
			x2: o[0],
			y2: o[1]
		}
	}
	function _m(t) {
		return t.getRadiusAxis().inverse ? 0 : 1
	}
	function wm(t, e, i) {
		return {
			position: [t.cx, t.cy],
			rotation: i / 180 * Math.PI,
			labelDirection: -1,
			tickDirection: -1,
			nameDirection: 1,
			labelRotate: e.getModel("axisLabel").get("rotate"),
			z2: 1
		}
	}
	function bm(t, e, i, n, o) {
		var a = e.axis,
		r = a.dataToCoord(t),
		s = n.getAngleAxis().getExtent()[0];
		s = s / 180 * Math.PI;
		var l, h, u, c = n.getRadiusAxis().getExtent();
		if ("radius" === a.dim) {
			var d = st();
			dt(d, d, s),
			ct(d, d, [n.cx, n.cy]),
			l = go([r, -o], d);
			var f = e.getModel("axisLabel").get("rotate") || 0,
			p = GT.innerTextLayout(s, f * Math.PI / 180, -1);
			h = p.textAlign,
			u = p.textVerticalAlign
		} else {
			var g = c[1];
			l = n.coordToPoint([g + o, r]);
			var m = n.cx,
			v = n.cy;
			h = Math.abs(l[0] - m) / g < .3 ? "center": l[0] > m ? "left": "right",
			u = Math.abs(l[1] - v) / g < .3 ? "middle": l[1] > v ? "top": "bottom"
		}
		return {
			position: l,
			align: h,
			verticalAlign: u
		}
	}
	function Sm(t, e) {
		e.update = "updateView",
		hs(e,
		function(e, i) {
			var n = {};
			return i.eachComponent({
				mainType: "geo",
				query: e
			},
			function(i) {
				i[t](e.name),
				d(i.coordinateSystem.regions,
				function(t) {
					n[t.name] = i.isSelected(t.name) || !1
				})
			}),
			{
				selected: n,
				name: e.name
			}
		})
	}
	function Mm(t) {
		var e = {};
		d(t,
		function(t) {
			e[t] = 1
		}),
		t.length = 0,
		d(e,
		function(e, i) {
			t.push(i)
		})
	}
	function Im(t) {
		if (t) for (var e in t) if (t.hasOwnProperty(e)) return ! 0
	}
	function Tm(t, e, n) {
		function o() {
			var t = function() {};
			return t.prototype.__hidden = t.prototype,
			new t
		}
		var a = {};
		return pk(e,
		function(e) {
			var r = a[e] = o();
			pk(t[e],
			function(t, o) {
				if (oD.isValidType(o)) {
					var a = {
						type: o,
						visual: t
					};
					n && n(a, e),
					r[o] = new oD(a),
					"opacity" === o && ((a = i(a)).type = "colorAlpha", r.__hidden.__alphaForOpacity = new oD(a))
				}
			})
		}),
		a
	}
	function Am(t, e, n) {
		var o;
		d(n,
		function(t) {
			e.hasOwnProperty(t) && Im(e[t]) && (o = !0)
		}),
		o && d(n,
		function(n) {
			e.hasOwnProperty(n) && Im(e[n]) ? t[n] = i(e[n]) : delete t[n]
		})
	}
	function Dm(t, e, i, n, o, a) {
		function r(t) {
			return i.getItemVisual(u, t)
		}
		function s(t, e) {
			i.setItemVisual(u, t, e)
		}
		function l(t, l) {
			u = null == a ? t: l;
			var c = i.getRawDataItem(u);
			if (!c || !1 !== c.visualMap) for (var d = n.call(o, t), f = e[d], p = h[d], g = 0, m = p.length; g < m; g++) {
				var v = p[g];
				f[v] && f[v].applyVisual(t, r, s)
			}
		}
		var h = {};
		d(t,
		function(t) {
			var i = oD.prepareVisualTypes(e[t]);
			h[t] = i
		});
		var u;
		null == a ? i.each(l, !0) : i.each([a], l, !0)
	}
	function Cm(t, e, i, n) {
		var o = {};
		return d(t,
		function(t) {
			var i = oD.prepareVisualTypes(e[t]);
			o[t] = i
		}),
		{
			progress: function(t, a) {
				null != n && (n = a.getDimension(n));
				for (var r = t.start; r < t.end; r++) {
					var s = a.getRawDataItem(r);
					if (s && !1 === s.visualMap) return;
					for (var l = null != n ? a.get(n, r, !0) : r, h = i(l), u = e[h], c = o[h], d = 0, f = c.length; d < f; d++) {
						var p = c[d];
						u[p] && u[p].applyVisual(l,
						function(t) {
							return a.getItemVisual(r, t)
						},
						function(t, e) {
							a.setItemVisual(r, t, e)
						})
					}
				}
			}
		}
	}
	function Lm(t) {
		var e = ["x", "y"],
		i = ["width", "height"];
		return {
			point: function(e, i, n) {
				if (e) {
					var o = n.range;
					return km(e[t], o)
				}
			},
			rect: function(n, o, a) {
				if (n) {
					var r = a.range,
					s = [n[e[t]], n[e[t]] + n[i[t]]];
					return s[1] < s[0] && s.reverse(),
					km(s[0], r) || km(s[1], r) || km(r[0], s) || km(r[1], s)
				}
			}
		}
	}
	function km(t, e) {
		return e[0] <= t && t <= e[1]
	}
	function Pm(t, e, i, n, o) {
		for (var a = 0,
		r = o[o.length - 1]; a < o.length; a++) {
			var s = o[a];
			if (Om(t, e, i, n, s[0], s[1], r[0], r[1])) return ! 0;
			r = s
		}
	}
	function Om(t, e, i, n, o, a, r, s) {
		var l = Em(i - t, o - r, n - e, a - s);
		if (Nm(l)) return ! 1;
		var h = Em(o - t, o - r, a - e, a - s) / l;
		if (h < 0 || h > 1) return ! 1;
		var u = Em(i - t, o - t, n - e, a - e) / l;
		return ! (u < 0 || u > 1)
	}
	function Nm(t) {
		return t <= 1e-6 && t >= -1e-6
	}
	function Em(t, e, i, n) {
		return t * n - e * i
	}
	function zm(t, e, i) {
		var n = this._targetInfoList = [],
		o = {},
		a = Bm(e, t);
		mk(bk,
		function(t, e) { (!i || !i.include || vk(i.include, e) >= 0) && t(a, n, o)
		})
	}
	function Rm(t) {
		return t[0] > t[1] && t.reverse(),
		t
	}
	function Bm(t, e) {
		return Oi(t, e, {
			includeMainTypes: _k
		})
	}
	function Vm(t, e, i, n) {
		var o = i.getAxis(["x", "y"][t]),
		a = Rm(f([0, 1],
		function(t) {
			return e ? o.coordToData(o.toLocalCoord(n[t])) : o.toGlobalCoord(o.dataToCoord(n[t]))
		})),
		r = [];
		return r[t] = a,
		r[1 - t] = [NaN, NaN],
		{
			values: a,
			xyMinMax: r
		}
	}
	function Gm(t, e, i, n) {
		return [e[0] - n[t] * i[0], e[1] - n[t] * i[1]]
	}
	function Wm(t, e) {
		var i = Fm(t),
		n = Fm(e),
		o = [i[0] / n[0], i[1] / n[1]];
		return isNaN(o[0]) && (o[0] = 1),
		isNaN(o[1]) && (o[1] = 1),
		o
	}
	function Fm(t) {
		return t ? [t[0][1] - t[0][0], t[1][1] - t[1][0]] : [NaN, NaN]
	}
	function Hm(t, e, i, n, o) {
		if (o) {
			var a = t.getZr();
			a[Ck] || (a[Dk] || (a[Dk] = Zm), yr(a, Dk, i, e)(t, n))
		}
	}
	function Zm(t, e) {
		if (!t.isDisposed()) {
			var i = t.getZr();
			i[Ck] = !0,
			t.dispatchAction({
				type: "brushSelect",
				batch: e
			}),
			i[Ck] = !1
		}
	}
	function Um(t, e, i, n) {
		for (var o = 0,
		a = e.length; o < a; o++) {
			var r = e[o];
			if (t[r.brushType](n, i, r.selectors, r)) return ! 0
		}
	}
	function jm(t) {
		var e = t.brushSelector;
		if (_(e)) {
			var i = [];
			return d(gk,
			function(t, n) {
				i[n] = function(i, n, o, a) {
					var r = n.getItemLayout(i);
					return t[e](r, o, a)
				}
			}),
			i
		}
		if (x(e)) {
			var n = {};
			return d(gk,
			function(t, i) {
				n[i] = e
			}),
			n
		}
		return e
	}
	function Xm(t, e) {
		var i = t.option.seriesIndex;
		return null != i && "all" !== i && (y(i) ? l(i, e) < 0 : e !== i)
	}
	function Ym(t) {
		var e = t.selectors = {};
		return d(gk[t.brushType],
		function(i, n) {
			e[n] = function(n) {
				return i(n, e, t)
			}
		}),
		t
	}
	function qm(t) {
		return new Kt(t[0][0], t[1][0], t[0][1] - t[0][0], t[1][1] - t[1][0])
	}
	function $m(t, e) {
		return n({
			brushType: t.brushType,
			brushMode: t.brushMode,
			transformable: t.transformable,
			brushStyle: new _o(t.brushStyle).getItemStyle(),
			removeOnClick: t.removeOnClick,
			z: t.z
		},
		e, !0)
	}
	function Km(t, e, i, n) { (!n || n.$from !== t.id) && this._brushController.setPanels(t.brushTargetManager.makePanelOpts(i)).enableBrush(t.brushOption).updateCovers(t.areas.slice())
	}
	function Jm(t, e) {
		Ok[t] = e
	}
	function Qm(t) {
		return Ok[t]
	}
	function tv(t, e, i) {
		this.model = t,
		this.ecModel = e,
		this.api = i,
		this._brushType,
		this._brushMode
	}
	function ev(t, e, i) {
		this._model = t
	}
	function iv(t, e, i, n) {
		var o = i.calendarModel,
		a = i.seriesModel,
		r = o ? o.coordinateSystem: a ? a.coordinateSystem: null;
		return r === this ? r[t](n) : null
	}
	function nv(t, e) {
		var i = t.cellSize;
		y(i) ? 1 === i.length && (i[1] = i[0]) : i = t.cellSize = [i, i];
		var n = f([0, 1],
		function(t) {
			return Qo(e, t) && (i[t] = "auto"),
			null != i[t] && "auto" !== i[t]
		});
		ta(t, e, {
			type: "box",
			ignoreSize: n
		})
	}
	function ov(t) {
		return l(Vk, t) >= 0
	}
	function av(t, e, i) {
		function n(t, e) {
			return l(e.nodes, t) >= 0
		}
		function o(t, n) {
			var o = !1;
			return e(function(e) {
				d(i(t, e) || [],
				function(t) {
					n.records[e.name][t] && (o = !0)
				})
			}),
			o
		}
		function a(t, n) {
			n.nodes.push(t),
			e(function(e) {
				d(i(t, e) || [],
				function(t) {
					n.records[e.name][t] = !0
				})
			})
		}
		return function(i) {
			var r = {
				nodes: [],
				records: {}
			};
			if (e(function(t) {
				r.records[t.name] = {}
			}), !i) return r;
			a(i, r);
			var s;
			do {
				s = !1, t(function(t) { ! n(t, r) && o(t, r) && (a(t, r), s = !0)
				})
			} while ( s );
			return r
		}
	}
	function rv(t, e, i) {
		var n = [1 / 0, -1 / 0];
		return Wk(i,
		function(t) {
			var i = t.getData();
			i && Wk(i.mapDimension(e, !0),
			function(t) {
				var e = i.getApproximateExtent(t);
				e[0] < n[0] && (n[0] = e[0]),
				e[1] > n[1] && (n[1] = e[1])
			})
		}),
		n[1] < n[0] && (n = [NaN, NaN]),
		sv(t, n),
		n
	}
	function sv(t, e) {
		var i = t.getAxisModel(),
		n = i.getMin(!0),
		o = "category" === i.get("type"),
		a = o && i.getCategories().length;
		null != n && "dataMin" !== n && "function" != typeof n ? e[0] = n: o && (e[0] = a > 0 ? 0 : NaN);
		var r = i.getMax(!0);
		return null != r && "dataMax" !== r && "function" != typeof r ? e[1] = r: o && (e[1] = a > 0 ? a - 1 : NaN),
		i.get("scale", !0) || (e[0] > 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0)),
		e
	}
	function lv(t, e) {
		var i = t.getAxisModel(),
		n = t._percentWindow,
		o = t._valueWindow;
		if (n) {
			var a = ko(o, [0, 500]);
			a = Math.min(a, 20);
			var r = e || 0 === n[0] && 100 === n[1];
			i.setRange(r ? null: +o[0].toFixed(a), r ? null: +o[1].toFixed(a))
		}
	}
	function hv(t) {
		var e = t._minMaxSpan = {},
		i = t._dataZoomModel;
		Wk(["min", "max"],
		function(n) {
			e[n + "Span"] = i.get(n + "Span");
			var o = i.get(n + "ValueSpan");
			if (null != o && (e[n + "ValueSpan"] = o, null != (o = t.getAxisModel().axis.scale.parse(o)))) {
				var a = t._dataExtent;
				e[n + "Span"] = Io(a[0] + o, a, [0, 100], !0)
			}
		})
	}
	function uv(t) {
		var e = {};
		return Zk(["start", "end", "startValue", "endValue", "throttle"],
		function(i) {
			t.hasOwnProperty(i) && (e[i] = t[i])
		}),
		e
	}
	function cv(t, e) {
		var i = t._rangePropMode,
		n = t.get("rangeMode");
		Zk([["start", "startValue"], ["end", "endValue"]],
		function(t, o) {
			var a = null != e[t[0]],
			r = null != e[t[1]];
			a && !r ? i[o] = "percent": !a && r ? i[o] = "value": n ? i[o] = n[o] : a && (i[o] = "percent")
		})
	}
	function dv(t) {
		return {
			x: "y",
			y: "x",
			radius: "angle",
			angle: "radius"
		} [t]
	}
	function fv(t) {
		return "vertical" === t ? "ns-resize": "ew-resize"
	}
	function pv(t, e) {
		var i = yv(t),
		n = e.dataZoomId,
		o = e.coordId;
		d(i,
		function(t, i) {
			var a = t.dataZoomInfos;
			a[n] && l(e.allCoordIds, o) < 0 && (delete a[n], t.count--)
		}),
		_v(i);
		var a = i[o];
		a || ((a = i[o] = {
			coordId: o,
			dataZoomInfos: {},
			count: 0
		}).controller = xv(t, a), a.dispatchAction = v(Mv, t)),
		!a.dataZoomInfos[n] && a.count++,
		a.dataZoomInfos[n] = e;
		var r = Iv(a.dataZoomInfos);
		a.controller.enable(r.controlType, r.opt),
		a.controller.setPointerChecker(e.containsPoint),
		yr(a, "dispatchAction", e.throttleRate, "fixRate")
	}
	function gv(t, e) {
		var i = yv(t);
		d(i,
		function(t) {
			t.controller.dispose();
			var i = t.dataZoomInfos;
			i[e] && (delete i[e], t.count--)
		}),
		_v(i)
	}
	function mv(t, e) {
		if (t && "dataZoom" === t.type && t.batch) for (var i = 0,
		n = t.batch.length; i < n; i++) if (t.batch[i].dataZoomId === e) return ! 1;
		return ! 0
	}
	function vv(t) {
		return t.type + "\0_" + t.id
	}
	function yv(t) {
		var e = t.getZr();
		return e[oP] || (e[oP] = {})
	}
	function xv(t, e) {
		var i = new Zh(t.getZr());
		return i.on("pan", nP(wv, e)),
		i.on("zoom", nP(bv, e)),
		i
	}
	function _v(t) {
		d(t,
		function(e, i) {
			e.count || (e.controller.dispose(), delete t[i])
		})
	}
	function wv(t, e, i, n, o, a, r) {
		Sv(t,
		function(s) {
			return s.panGetRange(t.controller, e, i, n, o, a, r)
		})
	}
	function bv(t, e, i, n) {
		Sv(t,
		function(o) {
			return o.zoomGetRange(t.controller, e, i, n)
		})
	}
	function Sv(t, e) {
		var i = [];
		d(t.dataZoomInfos,
		function(t) {
			var n = e(t); ! t.disabled && n && i.push({
				dataZoomId: t.dataZoomId,
				start: n[0],
				end: n[1]
			})
		}),
		t.dispatchAction(i)
	}
	function Mv(t, e) {
		t.dispatchAction({
			type: "dataZoom",
			batch: e
		})
	}
	function Iv(t) {
		var e, i = {},
		n = {
			type_true: 2,
			type_move: 1,
			type_false: 0,
			type_undefined: -1
		};
		return d(t,
		function(t) {
			var o = !t.disabled && (!t.zoomLock || "move");
			n["type_" + o] > n["type_" + e] && (e = o),
			a(i, t.roamControllerOpt)
		}),
		{
			controlType: e,
			opt: i
		}
	}
	function Tv(t, e) {
		return t && t.hasOwnProperty && t.hasOwnProperty(e)
	}
	function Av(t, e, i, n) {
		for (var o = e.targetVisuals[n], a = oD.prepareVisualTypes(o), r = {
			color: t.getData().getVisual("color")
		},
		s = 0, l = a.length; s < l; s++) {
			var h = a[s],
			u = o["opacity" === h ? "__alphaForOpacity": h];
			u && u.applyVisual(i,
			function(t) {
				return r[t]
			},
			function(t, e) {
				r[t] = e
			})
		}
		return r.color
	}
	function Dv(t, e, i) {
		if (i[0] === i[1]) return i.slice();
		for (var n = (i[1] - i[0]) / 200, o = i[0], a = [], r = 0; r <= 200 && o < i[1]; r++) a.push(o),
		o += n;
		return a.push(i[1]),
		a
	}
	function Cv(t, e, i) {
		var n = t.option,
		o = n.align;
		if (null != o && "auto" !== o) return o;
		for (var a = {
			width: e.getWidth(),
			height: e.getHeight()
		},
		r = "horizontal" === n.orient ? 1 : 0, s = [["left", "right", "width"], ["top", "bottom", "height"]], l = s[r], h = [0, null, 10], u = {},
		c = 0; c < 3; c++) u[s[1 - r][c]] = h[c],
		u[l[c]] = 2 === c ? i[0] : n[l[c]];
		var d = [["x", "width", 3], ["y", "height", 0]][r],
		f = Ko(u, a, n.padding);
		return l[(f.margin[d[2]] || 0) + f[d[0]] + .5 * f[d[1]] < .5 * a[d[1]] ? 0 : 1]
	}
	function Lv(t) {
		return d(t || [],
		function(e) {
			null != t.dataIndex && (t.dataIndexInside = t.dataIndex, t.dataIndex = null)
		}),
		t
	}
	function kv(t, e, i, n) {
		return new Rb({
			shape: {
				points: t
			},
			draggable: !!i,
			cursor: e,
			drift: i,
			onmousemove: function(t) {
				Q_(t.event)
			},
			ondragend: n
		})
	}
	function Pv(t, e) {
		return 0 === t ? [[0, 0], [e, 0], [e, -e]] : [[0, 0], [e, 0], [e, e]]
	}
	function Ov(t, e, i, n) {
		return t ? [[0, -TP(e, AP(i, 0))], [CP, 0], [0, TP(e, AP(n - i, 0))]] : [[0, 0], [5, -5], [5, 5]]
	}
	function Nv(t, e, i) {
		var n = DP / 2,
		o = t.get("hoverLinkDataSize");
		return o && (n = MP(o, e, i, !0) / 2),
		n
	}
	function Ev(t) {
		var e = t.get("hoverLinkOnHandle");
		return !! (null == e ? t.get("realtime") : e)
	}
	function zv(t) {
		return "vertical" === t ? "ns-resize": "ew-resize"
	}
	function Rv(t, e) {
		var i = t.inverse; ("vertical" === t.orient ? !i: i) && e.reverse()
	}
	function Bv(t) {
		Mi(t, "label", ["show"])
	}
	function Vv(t) {
		return ! (isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)))
	}
	function Gv(t) {
		return ! isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y))
	}
	function Wv(t, e, i) {
		var n = -1;
		do {
			n = Math.max(Co(t.get(e, i)), n), t = t.stackedOn
		} while ( t );
		return n
	}
	function Fv(t, e, i, n, o, a) {
		var r = [],
		s = Yv(e, n, t),
		l = e.indicesOfNearest(n, s, !0)[0];
		r[o] = e.get(i, l, !0),
		r[a] = e.get(n, l, !0);
		var h = Wv(e, n, l);
		return (h = Math.min(h, 20)) >= 0 && (r[a] = +r[a].toFixed(h)),
		r
	}
	function Hv(t, e) {
		var n = t.getData(),
		o = t.coordinateSystem;
		if (e && !Gv(e) && !y(e.coord) && o) {
			var a = o.dimensions,
			r = Zv(e, n, o, t);
			if ((e = i(e)).type && BP[e.type] && r.baseAxis && r.valueAxis) {
				var s = zP(a, r.baseAxis.dim),
				l = zP(a, r.valueAxis.dim);
				e.coord = BP[e.type](n, r.baseDataDim, r.valueDataDim, s, l),
				e.value = e.coord[l]
			} else {
				for (var h = [null != e.xAxis ? e.xAxis: e.radiusAxis, null != e.yAxis ? e.yAxis: e.angleAxis], u = 0; u < 2; u++) BP[h[u]] && (h[u] = Yv(n, n.mapDimension(a[u]), h[u]));
				e.coord = h
			}
		}
		return e
	}
	function Zv(t, e, i, n) {
		var o = {};
		return null != t.valueIndex || null != t.valueDim ? (o.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, o.valueAxis = i.getAxis(Uv(n, o.valueDataDim)), o.baseAxis = i.getOtherAxis(o.valueAxis), o.baseDataDim = e.mapDimension(o.baseAxis.dim)) : (o.baseAxis = n.getBaseAxis(), o.valueAxis = i.getOtherAxis(o.baseAxis), o.baseDataDim = e.mapDimension(o.baseAxis.dim), o.valueDataDim = e.mapDimension(o.valueAxis.dim)),
		o
	}
	function Uv(t, e) {
		var i = t.getData(),
		n = i.dimensions;
		e = i.getDimension(e);
		for (var o = 0; o < n.length; o++) {
			var a = i.getDimensionInfo(n[o]);
			if (a.name === e) return a.coordDim
		}
	}
	function jv(t, e) {
		return ! (t && t.containData && e.coord && !Vv(e)) || t.containData(e.coord)
	}
	function Xv(t, e, i, n) {
		return n < 2 ? t.coord && t.coord[n] : t.value
	}
	function Yv(t, e, i) {
		if ("average" === i) {
			var n = 0,
			o = 0;
			return t.each(e,
			function(t, e) {
				isNaN(t) || (n += t, o++)
			},
			!0),
			n / o
		}
		return t.getDataExtent(e, !0)["max" === i ? 1 : 0]
	}
	function qv(t, e, i) {
		var n = e.coordinateSystem;
		t.each(function(o) {
			var a, r = t.getItemModel(o),
			s = To(r.get("x"), i.getWidth()),
			l = To(r.get("y"), i.getHeight());
			if (isNaN(s) || isNaN(l)) {
				if (e.getMarkerPosition) a = e.getMarkerPosition(t.getValues(t.dimensions, o));
				else if (n) {
					var h = t.get(n.dimensions[0], o),
					u = t.get(n.dimensions[1], o);
					a = n.dataToPoint([h, u])
				}
			} else a = [s, l];
			isNaN(s) || (a[0] = s),
			isNaN(l) || (a[1] = l),
			t.setItemLayout(o, a)
		})
	}
	function $v(t, e, i) {
		var n;
		n = t ? f(t && t.dimensions,
		function(t) {
			return r({
				name: t,
				isSysCoord: !0
			},
			e.getData().getDimensionInfo(e.getData().mapDimension(t)) || {})
		}) : [{
			name: "value",
			type: "float",
			isSysCoord: !0
		}];
		var o = new yI(n, i),
		a = f(i.get("data"), v(Hv, e));
		return t && (a = g(a, v(jv, t))),
		o.initData(a, null, t ? Xv: function(t) {
			return t.value
		}),
		o
	}
	function Kv(t) {
		return ! isNaN(t) && !isFinite(t)
	}
	function Jv(t, e, i, n) {
		var o = 1 - t,
		a = n.dimensions[t];
		return Kv(e[o]) && Kv(i[o]) && e[t] === i[t] && n.getAxis(a).containData(e[t])
	}
	function Qv(t, e) {
		if ("cartesian2d" === t.type) {
			var i = e[0].coord,
			n = e[1].coord;
			if (i && n && (Jv(1, i, n, t) || Jv(0, i, n, t))) return ! 0
		}
		return jv(t, e[0]) && jv(t, e[1])
	}
	function ty(t, e, i, n, o) {
		var a, r = n.coordinateSystem,
		s = t.getItemModel(e),
		l = To(s.get("x"), o.getWidth()),
		h = To(s.get("y"), o.getHeight());
		if (isNaN(l) || isNaN(h)) {
			if (n.getMarkerPosition) a = n.getMarkerPosition(t.getValues(t.dimensions, e));
			else {
				var u = r.dimensions,
				c = t.get(u[0], e),
				d = t.get(u[1], e);
				a = r.dataToPoint([c, d])
			}
			if ("cartesian2d" === r.type) {
				var f = r.getAxis("x"),
				p = r.getAxis("y"),
				u = r.dimensions;
				Kv(t.get(u[0], e)) ? a[0] = f.toGlobalCoord(f.getExtent()[i ? 0 : 1]) : Kv(t.get(u[1], e)) && (a[1] = p.toGlobalCoord(p.getExtent()[i ? 0 : 1]))
			}
			isNaN(l) || (a[0] = l),
			isNaN(h) || (a[1] = h)
		} else a = [l, h];
		t.setItemLayout(e, a)
	}
	function ey(t, e, i) {
		var n;
		n = t ? f(t && t.dimensions,
		function(t) {
			return r({
				name: t
			},
			e.getData().getDimensionInfo(e.getData().mapDimension(t)) || {})
		}) : [{
			name: "value",
			type: "float"
		}];
		var o = new yI(n, i),
		a = new yI(n, i),
		s = new yI([], i),
		l = f(i.get("data"), v(GP, e, t, i));
		t && (l = g(l, v(Qv, t)));
		var h = t ? Xv: function(t) {
			return t.value
		};
		return o.initData(f(l,
		function(t) {
			return t[0]
		}), null, h),
		a.initData(f(l,
		function(t) {
			return t[1]
		}), null, h),
		s.initData(f(l,
		function(t) {
			return t[2]
		})),
		s.hasItemOption = !0,
		{
			from: o,
			to: a,
			line: s
		}
	}
	function iy(t) {
		return ! isNaN(t) && !isFinite(t)
	}
	function ny(t, e, i, n) {
		var o = 1 - t;
		return iy(e[o]) && iy(i[o])
	}
	function oy(t, e) {
		var i = e.coord[0],
		n = e.coord[1];
		return ! ("cartesian2d" !== t.type || !i || !n || !ny(1, i, n, t) && !ny(0, i, n, t)) || (jv(t, {
			coord: i,
			x: e.x0,
			y: e.y0
		}) || jv(t, {
			coord: n,
			x: e.x1,
			y: e.y1
		}))
	}
	function ay(t, e, i, n, o) {
		var a, r = n.coordinateSystem,
		s = t.getItemModel(e),
		l = To(s.get(i[0]), o.getWidth()),
		h = To(s.get(i[1]), o.getHeight());
		if (isNaN(l) || isNaN(h)) {
			if (n.getMarkerPosition) a = n.getMarkerPosition(t.getValues(i, e));
			else {
				var u = [f = t.get(i[0], e), p = t.get(i[1], e)];
				r.clampData && r.clampData(u, u),
				a = r.dataToPoint(u, !0)
			}
			if ("cartesian2d" === r.type) {
				var c = r.getAxis("x"),
				d = r.getAxis("y"),
				f = t.get(i[0], e),
				p = t.get(i[1], e);
				iy(f) ? a[0] = c.toGlobalCoord(c.getExtent()["x0" === i[0] ? 0 : 1]) : iy(p) && (a[1] = d.toGlobalCoord(d.getExtent()["y0" === i[1] ? 0 : 1]))
			}
			isNaN(l) || (a[0] = l),
			isNaN(h) || (a[1] = h)
		} else a = [l, h];
		return a
	}
	function ry(t, e, i) {
		var n, o, a = ["x0", "y0", "x1", "y1"];
		t ? (n = f(t && t.dimensions,
		function(t) {
			var i = e.getData();
			return r({
				name: t
			},
			i.getDimensionInfo(i.mapDimension(t)) || {})
		}), o = new yI(f(a,
		function(t, e) {
			return {
				name: t,
				type: n[e % 2].type
			}
		}), i)) : o = new yI(n = [{
			name: "value",
			type: "float"
		}], i);
		var s = f(i.get("data"), v(WP, e, t, i));
		t && (s = g(s, v(oy, t)));
		var l = t ?
		function(t, e, i, n) {
			return t.coord[Math.floor(n / 2)][n % 2]
		}: function(t) {
			return t.value
		};
		return o.initData(s, null, l),
		o.hasItemOption = !0,
		o
	}
	function sy(t) {
		var e = t.type,
		i = {
			number: "value",
			time: "time"
		};
		if (i[e] && (t.axisType = i[e], delete t.type), ly(t), hy(t, "controlPosition")) {
			var n = t.controlStyle || (t.controlStyle = {});
			hy(n, "position") || (n.position = t.controlPosition),
			"none" !== n.position || hy(n, "show") || (n.show = !1, delete n.position),
			delete t.controlPosition
		}
		d(t.data || [],
		function(t) {
			w(t) && !y(t) && (!hy(t, "value") && hy(t, "name") && (t.value = t.name), ly(t))
		})
	}
	function ly(t) {
		var e = t.itemStyle || (t.itemStyle = {}),
		i = e.emphasis || (e.emphasis = {}),
		n = t.label || t.label || {},
		o = n.normal || (n.normal = {}),
		a = {
			normal: 1,
			emphasis: 1
		};
		d(n,
		function(t, e) {
			a[e] || hy(o, e) || (o[e] = t)
		}),
		i.label && !hy(n, "emphasis") && (n.emphasis = i.label, delete i.label)
	}
	function hy(t, e) {
		return t.hasOwnProperty(e)
	}
	function uy(t, e) {
		return Ko(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		},
		t.get("padding"))
	}
	function cy(t, e, n, o) {
		return En(t.get(e).replace(/^path:\/\//, ""), i(o || {}), new Kt(n[0], n[1], n[2], n[3]), "center")
	}
	function dy(t, e, i, o, a, r) {
		var s = e.get("color");
		a ? (a.setColor(s), i.add(a), r && r.onUpdate(a)) : ((a = dl(t.get("symbol"), -1, -1, 2, 2, s)).setStyle("strokeNoScale", !0), i.add(a), r && r.onCreate(a));
		var l = e.getItemStyle(["color", "symbol", "symbolSize"]);
		a.setStyle(l),
		o = n({
			rectHover: !0,
			z2: 100
		},
		o, !0);
		var h = t.get("symbolSize"); (h = h instanceof Array ? h.slice() : [ + h, +h])[0] /= 2,
		h[1] /= 2,
		o.scale = h;
		var u = t.get("symbolOffset");
		if (u) {
			var c = o.position = o.position || [0, 0];
			c[0] += To(u[0], h[0]),
			c[1] += To(u[1], h[1])
		}
		var d = t.get("symbolRotate");
		return o.rotation = (d || 0) * Math.PI / 180 || 0,
		a.attr(o),
		a.updateTransform(),
		a
	}
	function fy(t, e, i, n, o) {
		if (!t.dragging) {
			var a = n.getModel("checkpointStyle"),
			r = i.dataToCoord(n.getData().get(["value"], e));
			o || !a.get("animation", !0) ? t.attr({
				position: [r, 0]
			}) : (t.stopAnimation(!0), t.animateTo({
				position: [r, 0]
			},
			a.get("animationDuration", !0), a.get("animationEasing", !0)))
		}
	}
	function py(t) {
		return 0 === t.indexOf("my")
	}
	function gy(t) {
		this.model = t
	}
	function my(t) {
		this.model = t
	}
	function vy(t) {
		var e = {},
		i = [],
		n = [];
		return t.eachRawSeries(function(t) {
			var o = t.coordinateSystem;
			if (!o || "cartesian2d" !== o.type && "polar" !== o.type) i.push(t);
			else {
				var a = o.getBaseAxis();
				if ("category" === a.type) {
					var r = a.dim + "_" + a.index;
					e[r] || (e[r] = {
						categoryAxis: a,
						valueAxis: o.getOtherAxis(a),
						series: []
					},
					n.push({
						axisDim: a.dim,
						axisIndex: a.index
					})),
					e[r].series.push(t)
				} else i.push(t)
			}
		}),
		{
			seriesGroupByCategoryAxis: e,
			other: i,
			meta: n
		}
	}
	function yy(t) {
		var e = [];
		return d(t,
		function(t, i) {
			var n = t.categoryAxis,
			o = t.valueAxis.dim,
			a = [" "].concat(f(t.series,
			function(t) {
				return t.name
			})),
			r = [n.model.getCategories()];
			d(t.series,
			function(t) {
				r.push(t.getRawData().mapArray(o,
				function(t) {
					return t
				}))
			});
			for (var s = [a.join(nO)], l = 0; l < r[0].length; l++) {
				for (var h = [], u = 0; u < r.length; u++) h.push(r[u][l]);
				s.push(h.join(nO))
			}
			e.push(s.join("\n"))
		}),
		e.join("\n\n" + iO + "\n\n")
	}
	function xy(t) {
		return f(t,
		function(t) {
			var e = t.getRawData(),
			i = [t.name],
			n = [];
			return e.each(e.dimensions,
			function() {
				for (var t = arguments.length,
				o = arguments[t - 1], a = e.getName(o), r = 0; r < t - 1; r++) n[r] = arguments[r];
				i.push((a ? a + nO: "") + n.join(nO))
			}),
			i.join("\n")
		}).join("\n\n" + iO + "\n\n")
	}
	function _y(t) {
		var e = vy(t);
		return {
			value: g([yy(e.seriesGroupByCategoryAxis), xy(e.other)],
			function(t) {
				return t.replace(/[\n\t\s]/g, "")
			}).join("\n\n" + iO + "\n\n"),
			meta: e.meta
		}
	}
	function wy(t) {
		return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
	}
	function by(t) {
		if (t.slice(0, t.indexOf("\n")).indexOf(nO) >= 0) return ! 0
	}
	function Sy(t) {
		for (var e = t.split(/\n+/g), i = [], n = f(wy(e.shift()).split(oO),
		function(t) {
			return {
				name: t,
				data: []
			}
		}), o = 0; o < e.length; o++) {
			var a = wy(e[o]).split(oO);
			i.push(a.shift());
			for (var r = 0; r < a.length; r++) n[r] && (n[r].data[o] = a[r])
		}
		return {
			series: n,
			categories: i
		}
	}
	function My(t) {
		for (var e = t.split(/\n+/g), i = wy(e.shift()), n = [], o = 0; o < e.length; o++) {
			var a, r = wy(e[o]).split(oO),
			s = "",
			l = !1;
			isNaN(r[0]) ? (l = !0, s = r[0], r = r.slice(1), n[o] = {
				name: s,
				value: []
			},
			a = n[o].value) : a = n[o] = [];
			for (var h = 0; h < r.length; h++) a.push( + r[h]);
			1 === a.length && (l ? n[o].value = a[0] : n[o] = a[0])
		}
		return {
			name: i,
			data: n
		}
	}
	function Iy(t, e) {
		var i = {
			series: []
		};
		return d(t.split(new RegExp("\n*" + iO + "\n*", "g")),
		function(t, n) {
			if (by(t)) {
				var o = Sy(t),
				a = e[n],
				r = a.axisDim + "Axis";
				a && (i[r] = i[r] || [], i[r][a.axisIndex] = {
					data: o.categories
				},
				i.series = i.series.concat(o.series))
			} else {
				o = My(t);
				i.series.push(o)
			}
		}),
		i
	}
	function Ty(t) {
		this._dom = null,
		this.model = t
	}
	function Ay(t, e) {
		return f(t,
		function(t, i) {
			var n = e && e[i];
			return w(n) && !y(n) ? (w(t) && !y(t) && (t = t.value), r({
				value: t
			},
			n)) : t
		})
	}
	function Dy(t, e) {
		var i = Py(t);
		aO(e,
		function(e, n) {
			for (var o = i.length - 1; o >= 0 && !i[o][n]; o--);
			if (o < 0) {
				var a = t.queryComponents({
					mainType: "dataZoom",
					subType: "select",
					id: n
				})[0];
				if (a) {
					var r = a.getPercentRange();
					i[0][n] = {
						dataZoomId: n,
						start: r[0],
						end: r[1]
					}
				}
			}
		}),
		i.push(e)
	}
	function Cy(t) {
		var e = Py(t),
		i = e[e.length - 1];
		e.length > 1 && e.pop();
		var n = {};
		return aO(i,
		function(t, i) {
			for (var o = e.length - 1; o >= 0; o--) if (t = e[o][i]) {
				n[i] = t;
				break
			}
		}),
		n
	}
	function Ly(t) {
		t[rO] = null
	}
	function ky(t) {
		return Py(t).length
	}
	function Py(t) {
		var e = t[rO];
		return e || (e = t[rO] = [{}]),
		e
	}
	function Oy(t, e, i) { (this._brushController = new yd(i.getZr())).on("brush", m(this._onBrush, this)).mount(),
		this._isZoomActive
	}
	function Ny(t) {
		var e = {};
		return d(["xAxisIndex", "yAxisIndex"],
		function(i) {
			e[i] = t[i],
			null == e[i] && (e[i] = "all"),
			(!1 === e[i] || "none" === e[i]) && (e[i] = [])
		}),
		e
	}
	function Ey(t, e) {
		t.setIconStatus("back", ky(e) > 1 ? "emphasis": "normal")
	}
	function zy(t, e, i, n, o) {
		var a = i._isZoomActive;
		n && "takeGlobalCursor" === n.type && (a = "dataZoomSelect" === n.key && n.dataZoomSelectActive),
		i._isZoomActive = a,
		t.setIconStatus("zoom", a ? "emphasis": "normal");
		var r = new zm(Ny(t.option), e, {
			include: ["grid"]
		});
		i._brushController.setPanels(r.makePanelOpts(o,
		function(t) {
			return t.xAxisDeclared && !t.yAxisDeclared ? "lineX": !t.xAxisDeclared && t.yAxisDeclared ? "lineY": "rect"
		})).enableBrush( !! a && {
			brushType: "auto",
			brushStyle: {
				lineWidth: 0,
				fill: "rgba(0,0,0,0.2)"
			}
		})
	}
	function Ry(t) {
		this.model = t
	}
	function By(t) {
		return fO(t)
	}
	function Vy() {
		if (!mO && vO) {
			mO = !0;
			var t = vO.styleSheets;
			t.length < 31 ? vO.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
		}
	}
	function Gy(t) {
		return parseInt(t, 10)
	}
	function Wy(t, e) {
		Vy(),
		this.root = t,
		this.storage = e;
		var i = document.createElement("div"),
		n = document.createElement("div");
		i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;",
		n.style.cssText = "position:absolute;left:0;top:0;",
		t.appendChild(i),
		this._vmlRoot = n,
		this._vmlViewport = i,
		this.resize();
		var o = e.delFromStorage,
		a = e.addToStorage;
		e.delFromStorage = function(t) {
			o.call(e, t),
			t && t.onRemove && t.onRemove(n)
		},
		e.addToStorage = function(t) {
			t.onAdd && t.onAdd(n),
			a.call(e, t)
		},
		this._firstPaint = !0
	}
	function Fy(t) {
		return function() {
			v_('In IE8.0 VML mode painter not support method "' + t + '"')
		}
	}
	function Hy(t) {
		return document.createElementNS(KO, t)
	}
	function Zy(t) {
		return eN(1e4 * t) / 1e4
	}
	function Uy(t) {
		return t < sN && t > -sN
	}
	function jy(t, e) {
		var i = e ? t.textFill: t.fill;
		return null != i && i !== tN
	}
	function Xy(t, e) {
		var i = e ? t.textStroke: t.stroke;
		return null != i && i !== tN
	}
	function Yy(t, e) {
		e && qy(t, "transform", "matrix(" + QO.call(e, ",") + ")")
	}
	function qy(t, e, i) { (!i || "linear" !== i.type && "radial" !== i.type) && t.setAttribute(e, i)
	}
	function $y(t, e, i) {
		t.setAttributeNS("http://www.w3.org/1999/xlink", e, i)
	}
	function Ky(t, e, i) {
		if (jy(e, i)) {
			var n = i ? e.textFill: e.fill;
			n = "transparent" === n ? tN: n,
			"none" !== t.getAttribute("clip-path") && n === tN && (n = "rgba(0, 0, 0, 0.002)"),
			qy(t, "fill", n),
			qy(t, "fill-opacity", e.opacity)
		} else qy(t, "fill", tN);
		if (Xy(e, i)) {
			var o = i ? e.textStroke: e.stroke;
			qy(t, "stroke", o = "transparent" === o ? tN: o),
			qy(t, "stroke-width", (i ? e.textStrokeWidth: e.lineWidth) / (!i && e.strokeNoScale ? e.host.getLineScale() : 1)),
			qy(t, "paint-order", i ? "stroke": "fill"),
			qy(t, "stroke-opacity", e.opacity),
			e.lineDash ? (qy(t, "stroke-dasharray", e.lineDash.join(",")), qy(t, "stroke-dashoffset", eN(e.lineDashOffset || 0))) : qy(t, "stroke-dasharray", ""),
			e.lineCap && qy(t, "stroke-linecap", e.lineCap),
			e.lineJoin && qy(t, "stroke-linejoin", e.lineJoin),
			e.miterLimit && qy(t, "stroke-miterlimit", e.miterLimit)
		} else qy(t, "stroke", tN)
	}
	function Jy(t) {
		for (var e = [], i = t.data, n = t.len(), o = 0; o < n;) {
			var a = "",
			r = 0;
			switch (i[o++]) {
			case JO.M:
				a = "M",
				r = 2;
				break;
			case JO.L:
				a = "L",
				r = 2;
				break;
			case JO.Q:
				a = "Q",
				r = 4;
				break;
			case JO.C:
				a = "C",
				r = 6;
				break;
			case JO.A:
				var s = i[o++],
				l = i[o++],
				h = i[o++],
				u = i[o++],
				c = i[o++],
				d = i[o++],
				f = i[o++],
				p = i[o++],
				g = Math.abs(d),
				m = Uy(g - aN) && !Uy(g),
				v = !1;
				v = g >= aN || !Uy(g) && (d > -oN && d < 0 || d > oN) == !!p;
				var y = Zy(s + h * nN(c)),
				x = Zy(l + u * iN(c));
				m && (d = p ? aN - 1e-4: 1e-4 - aN, v = !0, 9 === o && e.push("M", y, x));
				var _ = Zy(s + h * nN(c + d)),
				w = Zy(l + u * iN(c + d));
				e.push("A", Zy(h), Zy(u), eN(f * rN), +v, +p, _, w);
				break;
			case JO.Z:
				a = "Z";
				break;
			case JO.R:
				var _ = Zy(i[o++]),
				w = Zy(i[o++]),
				b = Zy(i[o++]),
				S = Zy(i[o++]);
				e.push("M", _, w, "L", _ + b, w, "L", _ + b, w + S, "L", _, w + S, "L", _, w)
			}
			a && e.push(a);
			for (var M = 0; M < r; M++) e.push(Zy(i[o++]))
		}
		return e.join(" ")
	}
	function Qy(t) {
		return "middle" === t ? "middle": "bottom" === t ? "baseline": "hanging"
	}
	function tx() {}
	function ex(t, e, i, n) {
		for (var o = 0,
		a = e.length,
		r = 0,
		s = 0; o < a; o++) {
			var l = e[o];
			if (l.removed) {
				for (var h = [], u = s; u < s + l.count; u++) h.push(u);
				l.indices = h,
				s += l.count
			} else {
				for (var h = [], u = r; u < r + l.count; u++) h.push(u);
				l.indices = h,
				r += l.count,
				l.added || (s += l.count)
			}
		}
		return e
	}
	function ix(t) {
		return {
			newPos: t.newPos,
			components: t.components.slice(0)
		}
	}
	function nx(t, e, i, n, o) {
		this._zrId = t,
		this._svgRoot = e,
		this._tagNames = "string" == typeof i ? [i] : i,
		this._markLabel = n,
		this._domName = o || "_dom",
		this.nextId = 0
	}
	function ox(t, e) {
		nx.call(this, t, e, ["linearGradient", "radialGradient"], "__gradient_in_use__")
	}
	function ax(t, e) {
		nx.call(this, t, e, "clipPath", "__clippath_in_use__")
	}
	function rx(t, e) {
		nx.call(this, t, e, ["filter"], "__filter_in_use__", "_shadowDom")
	}
	function sx(t) {
		return t && (t.shadowBlur || t.shadowOffsetX || t.shadowOffsetY || t.textShadowBlur || t.textShadowOffsetX || t.textShadowOffsetY)
	}
	function lx(t) {
		return parseInt(t, 10)
	}
	function hx(t) {
		return t instanceof Mn ? lN: t instanceof Je ? hN: t instanceof Cb ? uN: lN
	}
	function ux(t, e) {
		return e && t && e.parentNode !== t
	}
	function cx(t, e, i) {
		if (ux(t, e) && i) {
			var n = i.nextSibling;
			n ? t.insertBefore(e, n) : t.appendChild(e)
		}
	}
	function dx(t, e) {
		if (ux(t, e)) {
			var i = t.firstChild;
			i ? t.insertBefore(e, i) : t.appendChild(e)
		}
	}
	function fx(t, e) {
		e && t && e.parentNode === t && t.removeChild(e)
	}
	function px(t) {
		return t.__textSvgEl
	}
	function gx(t) {
		return t.__svgEl
	}
	function mx(t) {
		return function() {
			v_('In SVG mode painter not support method "' + t + '"')
		}
	}
	var vx = 2311,
	yx = function() {
		return vx++
	},
	xx = {},
	_x = xx = "undefined" != typeof wx ? {
		browser: {},
		os: {},
		node: !1,
		wxa: !0,
		canvasSupported: !0,
		svgSupported: !1,
		touchEventsSupported: !0
	}: "undefined" == typeof document && "undefined" != typeof self ? {
		browser: {},
		os: {},
		node: !1,
		worker: !0,
		canvasSupported: !0
	}: "undefined" == typeof navigator ? {
		browser: {},
		os: {},
		node: !0,
		worker: !1,
		canvasSupported: !0,
		svgSupported: !0
	}: function(t) {
		var e = {},
		i = {},
		n = t.match(/Firefox\/([\d.]+)/),
		o = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
		a = t.match(/Edge\/([\d.]+)/),
		r = /micromessenger/i.test(t);
		return n && (i.firefox = !0, i.version = n[1]),
		o && (i.ie = !0, i.version = o[1]),
		a && (i.edge = !0, i.version = a[1]),
		r && (i.weChat = !0),
		{
			browser: i,
			os: e,
			node: !1,
			canvasSupported: !!document.createElement("canvas").getContext,
			svgSupported: "undefined" != typeof SVGRect,
			touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
			pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 11)
		}
	} (navigator.userAgent),
	bx = {
		"[object Function]": 1,
		"[object RegExp]": 1,
		"[object Date]": 1,
		"[object Error]": 1,
		"[object CanvasGradient]": 1,
		"[object CanvasPattern]": 1,
		"[object Image]": 1,
		"[object Canvas]": 1
	},
	Sx = {
		"[object Int8Array]": 1,
		"[object Uint8Array]": 1,
		"[object Uint8ClampedArray]": 1,
		"[object Int16Array]": 1,
		"[object Uint16Array]": 1,
		"[object Int32Array]": 1,
		"[object Uint32Array]": 1,
		"[object Float32Array]": 1,
		"[object Float64Array]": 1
	},
	Mx = Object.prototype.toString,
	Ix = Array.prototype,
	Tx = Ix.forEach,
	Ax = Ix.filter,
	Dx = Ix.slice,
	Cx = Ix.map,
	Lx = Ix.reduce,
	kx = {},
	Px = function() {
		return kx.createCanvas()
	};
	kx.createCanvas = function() {
		return document.createElement("canvas")
	};
	var Ox, Nx = "__ec_primitive__";
	E.prototype = {
		constructor: E,
		get: function(t) {
			return this.hasOwnProperty(t) ? this[t] : null
		},
		set: function(t, e) {
			return this[t] = e
		},
		each: function(t, e) {
			void 0 !== e && (t = m(t, e));
			for (var i in this) this.hasOwnProperty(i) && t(this[i], i)
		},
		removeKey: function(t) {
			delete this[t]
		}
	};
	var Ex = (Object.freeze || Object)({
		$override: e,
		clone: i,
		merge: n,
		mergeAll: o,
		extend: a,
		defaults: r,
		createCanvas: Px,
		getContext: s,
		indexOf: l,
		inherits: h,
		mixin: u,
		isArrayLike: c,
		each: d,
		map: f,
		reduce: p,
		filter: g,
		find: function(t, e, i) {
			if (t && e) for (var n = 0,
			o = t.length; n < o; n++) if (e.call(i, t[n], n, t)) return t[n]
		},
		bind: m,
		curry: v,
		isArray: y,
		isFunction: x,
		isString: _,
		isObject: w,
		isBuiltInObject: b,
		isTypedArray: S,
		isDom: M,
		eqNaN: I,
		retrieve: T,
		retrieve2: A,
		retrieve3: D,
		slice: C,
		normalizeCssArray: L,
		assert: k,
		trim: P,
		setAsPrimitive: O,
		isPrimitive: N,
		createHashMap: z,
		concatArray: R,
		noop: B
	}),
	zx = "undefined" == typeof Float32Array ? Array: Float32Array,
	Rx = j,
	Bx = X,
	Vx = $,
	Gx = K,
	Wx = (Object.freeze || Object)({
		create: V,
		copy: G,
		clone: W,
		set: F,
		add: H,
		scaleAndAdd: Z,
		sub: U,
		len: j,
		length: Rx,
		lenSquare: X,
		lengthSquare: Bx,
		mul: function(t, e, i) {
			return t[0] = e[0] * i[0],
			t[1] = e[1] * i[1],
			t
		},
		div: function(t, e, i) {
			return t[0] = e[0] / i[0],
			t[1] = e[1] / i[1],
			t
		},
		dot: function(t, e) {
			return t[0] * e[0] + t[1] * e[1]
		},
		scale: Y,
		normalize: q,
		distance: $,
		dist: Vx,
		distanceSquare: K,
		distSquare: Gx,
		negate: function(t, e) {
			return t[0] = -e[0],
			t[1] = -e[1],
			t
		},
		lerp: J,
		applyTransform: Q,
		min: tt,
		max: et
	});
	it.prototype = {
		constructor: it,
		_dragStart: function(t) {
			var e = t.target;
			e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(nt(e, t), "dragstart", t.event))
		},
		_drag: function(t) {
			var e = this._draggingTarget;
			if (e) {
				var i = t.offsetX,
				n = t.offsetY,
				o = i - this._x,
				a = n - this._y;
				this._x = i,
				this._y = n,
				e.drift(o, a, t),
				this.dispatchToElement(nt(e, t), "drag", t.event);
				var r = this.findHover(i, n, e).target,
				s = this._dropTarget;
				this._dropTarget = r,
				e !== r && (s && r !== s && this.dispatchToElement(nt(s, t), "dragleave", t.event), r && r !== s && this.dispatchToElement(nt(r, t), "dragenter", t.event))
			}
		},
		_dragEnd: function(t) {
			var e = this._draggingTarget;
			e && (e.dragging = !1),
			this.dispatchToElement(nt(e, t), "dragend", t.event),
			this._dropTarget && this.dispatchToElement(nt(this._dropTarget, t), "drop", t.event),
			this._draggingTarget = null,
			this._dropTarget = null
		}
	};
	var Fx = Array.prototype.slice,
	Hx = function() {
		this._$handlers = {}
	};
	Hx.prototype = {
		constructor: Hx,
		one: function(t, e, i) {
			var n = this._$handlers;
			if (!e || !t) return this;
			n[t] || (n[t] = []);
			for (var o = 0; o < n[t].length; o++) if (n[t][o].h === e) return this;
			return n[t].push({
				h: e,
				one: !0,
				ctx: i || this
			}),
			this
		},
		on: function(t, e, i) {
			var n = this._$handlers;
			if (!e || !t) return this;
			n[t] || (n[t] = []);
			for (var o = 0; o < n[t].length; o++) if (n[t][o].h === e) return this;
			return n[t].push({
				h: e,
				one: !1,
				ctx: i || this
			}),
			this
		},
		isSilent: function(t) {
			var e = this._$handlers;
			return e[t] && e[t].length
		},
		off: function(t, e) {
			var i = this._$handlers;
			if (!t) return this._$handlers = {},
			this;
			if (e) {
				if (i[t]) {
					for (var n = [], o = 0, a = i[t].length; o < a; o++) i[t][o].h != e && n.push(i[t][o]);
					i[t] = n
				}
				i[t] && 0 === i[t].length && delete i[t]
			} else delete i[t];
			return this
		},
		trigger: function(t) {
			if (this._$handlers[t]) {
				var e = arguments,
				i = e.length;
				i > 3 && (e = Fx.call(e, 1));
				for (var n = this._$handlers[t], o = n.length, a = 0; a < o;) {
					switch (i) {
					case 1:
						n[a].h.call(n[a].ctx);
						break;
					case 2:
						n[a].h.call(n[a].ctx, e[1]);
						break;
					case 3:
						n[a].h.call(n[a].ctx, e[1], e[2]);
						break;
					default:
						n[a].h.apply(n[a].ctx, e)
					}
					n[a].one ? (n.splice(a, 1), o--) : a++
				}
			}
			return this
		},
		triggerWithContext: function(t) {
			if (this._$handlers[t]) {
				var e = arguments,
				i = e.length;
				i > 4 && (e = Fx.call(e, 1, e.length - 1));
				for (var n = e[e.length - 1], o = this._$handlers[t], a = o.length, r = 0; r < a;) {
					switch (i) {
					case 1:
						o[r].h.call(n);
						break;
					case 2:
						o[r].h.call(n, e[1]);
						break;
					case 3:
						o[r].h.call(n, e[1], e[2]);
						break;
					default:
						o[r].h.apply(n, e)
					}
					o[r].one ? (o.splice(r, 1), a--) : r++
				}
			}
			return this
		}
	};
	var Zx = "silent";
	at.prototype.dispose = function() {};
	var Ux = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
	jx = function(t, e, i, n) {
		Hx.call(this),
		this.storage = t,
		this.painter = e,
		this.painterRoot = n,
		i = i || new at,
		this.proxy = null,
		this._hovered = {},
		this._lastTouchMoment,
		this._lastX,
		this._lastY,
		it.call(this),
		this.setHandlerProxy(i)
	};
	jx.prototype = {
		constructor: jx,
		setHandlerProxy: function(t) {
			this.proxy && this.proxy.dispose(),
			t && (d(Ux,
			function(e) {
				t.on && t.on(e, this[e], this)
			},
			this), t.handler = this),
			this.proxy = t
		},
		mousemove: function(t) {
			var e = t.zrX,
			i = t.zrY,
			n = this._hovered,
			o = n.target;
			o && !o.__zr && (o = (n = this.findHover(n.x, n.y)).target);
			var a = this._hovered = this.findHover(e, i),
			r = a.target,
			s = this.proxy;
			s.setCursor && s.setCursor(r ? r.cursor: "default"),
			o && r !== o && this.dispatchToElement(n, "mouseout", t),
			this.dispatchToElement(a, "mousemove", t),
			r && r !== o && this.dispatchToElement(a, "mouseover", t)
		},
		mouseout: function(t) {
			this.dispatchToElement(this._hovered, "mouseout", t);
			var e, i = t.toElement || t.relatedTarget;
			do {
				i = i && i.parentNode
			} while ( i && 9 != i . nodeType && !( e = i === this . painterRoot )); ! e && this.trigger("globalout", {
				event: t
			})
		},
		resize: function(t) {
			this._hovered = {}
		},
		dispatch: function(t, e) {
			var i = this[t];
			i && i.call(this, e)
		},
		dispose: function() {
			this.proxy.dispose(),
			this.storage = this.proxy = this.painter = null
		},
		setCursorStyle: function(t) {
			var e = this.proxy;
			e.setCursor && e.setCursor(t)
		},
		dispatchToElement: function(t, e, i) {
			var n = (t = t || {}).target;
			if (!n || !n.silent) {
				for (var o = "on" + e,
				a = ot(e, t, i); n && (n[o] && (a.cancelBubble = n[o].call(n, a)), n.trigger(e, a), n = n.parent, !a.cancelBubble););
				a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function(t) {
					"function" == typeof t[o] && t[o].call(t, a),
					t.trigger && t.trigger(e, a)
				}))
			}
		},
		findHover: function(t, e, i) {
			for (var n = this.storage.getDisplayList(), o = {
				x: t,
				y: e
			},
			a = n.length - 1; a >= 0; a--) {
				var r;
				if (n[a] !== i && !n[a].ignore && (r = rt(n[a], t, e)) && (!o.topTarget && (o.topTarget = n[a]), r !== Zx)) {
					o.target = n[a];
					break
				}
			}
			return o
		}
	},
	d(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"],
	function(t) {
		jx.prototype[t] = function(e) {
			var i = this.findHover(e.zrX, e.zrY),
			n = i.target;
			if ("mousedown" === t) this._downEl = n,
			this._downPoint = [e.zrX, e.zrY],
			this._upEl = n;
			else if ("mouseup" === t) this._upEl = n;
			else if ("click" === t) {
				if (this._downEl !== this._upEl || !this._downPoint || Vx(this._downPoint, [e.zrX, e.zrY]) > 4) return;
				this._downPoint = null
			}
			this.dispatchToElement(i, t, e)
		}
	}),
	u(jx, Hx),
	u(jx, it);
	var Xx = "undefined" == typeof Float32Array ? Array: Float32Array,
	Yx = (Object.freeze || Object)({
		create: st,
		identity: lt,
		copy: ht,
		mul: ut,
		translate: ct,
		rotate: dt,
		scale: ft,
		invert: pt,
		clone: gt
	}),
	qx = lt,
	$x = 5e-5,
	Kx = function(t) { (t = t || {}).position || (this.position = [0, 0]),
		null == t.rotation && (this.rotation = 0),
		t.scale || (this.scale = [1, 1]),
		this.origin = this.origin || null
	},
	Jx = Kx.prototype;
	Jx.transform = null,
	Jx.needLocalTransform = function() {
		return mt(this.rotation) || mt(this.position[0]) || mt(this.position[1]) || mt(this.scale[0] - 1) || mt(this.scale[1] - 1)
	},
	Jx.updateTransform = function() {
		var t = this.parent,
		e = t && t.transform,
		i = this.needLocalTransform(),
		n = this.transform;
		i || e ? (n = n || st(), i ? this.getLocalTransform(n) : qx(n), e && (i ? ut(n, t.transform, n) : ht(n, t.transform)), this.transform = n, this.invTransform = this.invTransform || st(), pt(this.invTransform, n)) : n && qx(n)
	},
	Jx.getLocalTransform = function(t) {
		return Kx.getLocalTransform(this, t)
	},
	Jx.setTransform = function(t) {
		var e = this.transform,
		i = t.dpr || 1;
		e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0)
	},
	Jx.restoreTransform = function(t) {
		var e = t.dpr || 1;
		t.setTransform(e, 0, 0, e, 0, 0)
	};
	var Qx = [];
	Jx.decomposeTransform = function() {
		if (this.transform) {
			var t = this.parent,
			e = this.transform;
			t && t.transform && (ut(Qx, t.invTransform, e), e = Qx);
			var i = e[0] * e[0] + e[1] * e[1],
			n = e[2] * e[2] + e[3] * e[3],
			o = this.position,
			a = this.scale;
			mt(i - 1) && (i = Math.sqrt(i)),
			mt(n - 1) && (n = Math.sqrt(n)),
			e[0] < 0 && (i = -i),
			e[3] < 0 && (n = -n),
			o[0] = e[4],
			o[1] = e[5],
			a[0] = i,
			a[1] = n,
			this.rotation = Math.atan2( - e[1] / n, e[0] / i)
		}
	},
	Jx.getGlobalScale = function() {
		var t = this.transform;
		if (!t) return [1, 1];
		var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
		i = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
		return t[0] < 0 && (e = -e),
		t[3] < 0 && (i = -i),
		[e, i]
	},
	Jx.transformCoordToLocal = function(t, e) {
		var i = [t, e],
		n = this.invTransform;
		return n && Q(i, i, n),
		i
	},
	Jx.transformCoordToGlobal = function(t, e) {
		var i = [t, e],
		n = this.transform;
		return n && Q(i, i, n),
		i
	},
	Kx.getLocalTransform = function(t, e) {
		qx(e = e || []);
		var i = t.origin,
		n = t.scale || [1, 1],
		o = t.rotation || 0,
		a = t.position || [0, 0];
		return i && (e[4] -= i[0], e[5] -= i[1]),
		ft(e, e, n),
		o && dt(e, e, o),
		i && (e[4] += i[0], e[5] += i[1]),
		e[4] += a[0],
		e[5] += a[1],
		e
	};
	var t_ = {
		linear: function(t) {
			return t
		},
		quadraticIn: function(t) {
			return t * t
		},
		quadraticOut: function(t) {
			return t * (2 - t)
		},
		quadraticInOut: function(t) {
			return (t *= 2) < 1 ? .5 * t * t: -.5 * (--t * (t - 2) - 1)
		},
		cubicIn: function(t) {
			return t * t * t
		},
		cubicOut: function(t) {
			return--t * t * t + 1
		},
		cubicInOut: function(t) {
			return (t *= 2) < 1 ? .5 * t * t * t: .5 * ((t -= 2) * t * t + 2)
		},
		quarticIn: function(t) {
			return t * t * t * t
		},
		quarticOut: function(t) {
			return 1 - --t * t * t * t
		},
		quarticInOut: function(t) {
			return (t *= 2) < 1 ? .5 * t * t * t * t: -.5 * ((t -= 2) * t * t * t - 2)
		},
		quinticIn: function(t) {
			return t * t * t * t * t
		},
		quinticOut: function(t) {
			return--t * t * t * t * t + 1
		},
		quinticInOut: function(t) {
			return (t *= 2) < 1 ? .5 * t * t * t * t * t: .5 * ((t -= 2) * t * t * t * t + 2)
		},
		sinusoidalIn: function(t) {
			return 1 - Math.cos(t * Math.PI / 2)
		},
		sinusoidalOut: function(t) {
			return Math.sin(t * Math.PI / 2)
		},
		sinusoidalInOut: function(t) {
			return.5 * (1 - Math.cos(Math.PI * t))
		},
		exponentialIn: function(t) {
			return 0 === t ? 0 : Math.pow(1024, t - 1)
		},
		exponentialOut: function(t) {
			return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
		},
		exponentialInOut: function(t) {
			return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
		},
		circularIn: function(t) {
			return 1 - Math.sqrt(1 - t * t)
		},
		circularOut: function(t) {
			return Math.sqrt(1 - --t * t)
		},
		circularInOut: function(t) {
			return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
		},
		elasticIn: function(t) {
			var e, i = .1;
			return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
		},
		elasticOut: function(t) {
			var e, i = .1;
			return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
		},
		elasticInOut: function(t) {
			var e, i = .1;
			return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
		},
		backIn: function(t) {
			var e = 1.70158;
			return t * t * ((e + 1) * t - e)
		},
		backOut: function(t) {
			var e = 1.70158;
			return--t * t * ((e + 1) * t + e) + 1
		},
		backInOut: function(t) {
			var e = 2.5949095;
			return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
		},
		bounceIn: function(t) {
			return 1 - t_.bounceOut(1 - t)
		},
		bounceOut: function(t) {
			return t < 1 / 2.75 ? 7.5625 * t * t: t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
		},
		bounceInOut: function(t) {
			return t < .5 ? .5 * t_.bounceIn(2 * t) : .5 * t_.bounceOut(2 * t - 1) + .5
		}
	};
	vt.prototype = {
		constructor: vt,
		step: function(t, e) {
			if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) this._pausedTime += e;
			else {
				var i = (t - this._startTime - this._pausedTime) / this._life;
				if (! (i < 0)) {
					i = Math.min(i, 1);
					var n = this.easing,
					o = "string" == typeof n ? t_[n] : n,
					a = "function" == typeof o ? o(i) : i;
					return this.fire("frame", a),
					1 == i ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
				}
			}
		},
		restart: function(t) {
			var e = (t - this._startTime - this._pausedTime) % this._life;
			this._startTime = t - e + this.gap,
			this._pausedTime = 0,
			this._needsRemove = !1
		},
		fire: function(t, e) {
			this[t = "on" + t] && this[t](this._target, e)
		},
		pause: function() {
			this._paused = !0
		},
		resume: function() {
			this._paused = !1
		}
	};
	var e_ = function() {
		this.head = null,
		this.tail = null,
		this._len = 0
	},
	i_ = e_.prototype;
	i_.insert = function(t) {
		var e = new n_(t);
		return this.insertEntry(e),
		e
	},
	i_.insertEntry = function(t) {
		this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t,
		this._len++
	},
	i_.remove = function(t) {
		var e = t.prev,
		i = t.next;
		e ? e.next = i: this.head = i,
		i ? i.prev = e: this.tail = e,
		t.next = t.prev = null,
		this._len--
	},
	i_.len = function() {
		return this._len
	},
	i_.clear = function() {
		this.head = this.tail = null,
		this._len = 0
	};
	var n_ = function(t) {
		this.value = t,
		this.next,
		this.prev
	},
	o_ = function(t) {
		this._list = new e_,
		this._map = {},
		this._maxSize = t || 10,
		this._lastRemovedEntry = null
	},
	a_ = o_.prototype;
	a_.put = function(t, e) {
		var i = this._list,
		n = this._map,
		o = null;
		if (null == n[t]) {
			var a = i.len(),
			r = this._lastRemovedEntry;
			if (a >= this._maxSize && a > 0) {
				var s = i.head;
				i.remove(s),
				delete n[s.key],
				o = s.value,
				this._lastRemovedEntry = s
			}
			r ? r.value = e: r = new n_(e),
			r.key = t,
			i.insertEntry(r),
			n[t] = r
		}
		return o
	},
	a_.get = function(t) {
		var e = this._map[t],
		i = this._list;
		if (null != e) return e !== i.tail && (i.remove(e), i.insertEntry(e)),
		e.value
	},
	a_.clear = function() {
		this._list.clear(),
		this._map = {}
	};
	var r_ = {
		transparent: [0, 0, 0, 0],
		aliceblue: [240, 248, 255, 1],
		antiquewhite: [250, 235, 215, 1],
		aqua: [0, 255, 255, 1],
		aquamarine: [127, 255, 212, 1],
		azure: [240, 255, 255, 1],
		beige: [245, 245, 220, 1],
		bisque: [255, 228, 196, 1],
		black: [0, 0, 0, 1],
		blanchedalmond: [255, 235, 205, 1],
		blue: [0, 0, 255, 1],
		blueviolet: [138, 43, 226, 1],
		brown: [165, 42, 42, 1],
		burlywood: [222, 184, 135, 1],
		cadetblue: [95, 158, 160, 1],
		chartreuse: [127, 255, 0, 1],
		chocolate: [210, 105, 30, 1],
		coral: [255, 127, 80, 1],
		cornflowerblue: [100, 149, 237, 1],
		cornsilk: [255, 248, 220, 1],
		crimson: [220, 20, 60, 1],
		cyan: [0, 255, 255, 1],
		darkblue: [0, 0, 139, 1],
		darkcyan: [0, 139, 139, 1],
		darkgoldenrod: [184, 134, 11, 1],
		darkgray: [169, 169, 169, 1],
		darkgreen: [0, 100, 0, 1],
		darkgrey: [169, 169, 169, 1],
		darkkhaki: [189, 183, 107, 1],
		darkmagenta: [139, 0, 139, 1],
		darkolivegreen: [85, 107, 47, 1],
		darkorange: [255, 140, 0, 1],
		darkorchid: [153, 50, 204, 1],
		darkred: [139, 0, 0, 1],
		darksalmon: [233, 150, 122, 1],
		darkseagreen: [143, 188, 143, 1],
		darkslateblue: [72, 61, 139, 1],
		darkslategray: [47, 79, 79, 1],
		darkslategrey: [47, 79, 79, 1],
		darkturquoise: [0, 206, 209, 1],
		darkviolet: [148, 0, 211, 1],
		deeppink: [255, 20, 147, 1],
		deepskyblue: [0, 191, 255, 1],
		dimgray: [105, 105, 105, 1],
		dimgrey: [105, 105, 105, 1],
		dodgerblue: [30, 144, 255, 1],
		firebrick: [178, 34, 34, 1],
		floralwhite: [255, 250, 240, 1],
		forestgreen: [34, 139, 34, 1],
		fuchsia: [255, 0, 255, 1],
		gainsboro: [220, 220, 220, 1],
		ghostwhite: [248, 248, 255, 1],
		gold: [255, 215, 0, 1],
		goldenrod: [218, 165, 32, 1],
		gray: [128, 128, 128, 1],
		green: [0, 128, 0, 1],
		greenyellow: [173, 255, 47, 1],
		grey: [128, 128, 128, 1],
		honeydew: [240, 255, 240, 1],
		hotpink: [255, 105, 180, 1],
		indianred: [205, 92, 92, 1],
		indigo: [75, 0, 130, 1],
		ivory: [255, 255, 240, 1],
		khaki: [240, 230, 140, 1],
		lavender: [230, 230, 250, 1],
		lavenderblush: [255, 240, 245, 1],
		lawngreen: [124, 252, 0, 1],
		lemonchiffon: [255, 250, 205, 1],
		lightblue: [173, 216, 230, 1],
		lightcoral: [240, 128, 128, 1],
		lightcyan: [224, 255, 255, 1],
		lightgoldenrodyellow: [250, 250, 210, 1],
		lightgray: [211, 211, 211, 1],
		lightgreen: [144, 238, 144, 1],
		lightgrey: [211, 211, 211, 1],
		lightpink: [255, 182, 193, 1],
		lightsalmon: [255, 160, 122, 1],
		lightseagreen: [32, 178, 170, 1],
		lightskyblue: [135, 206, 250, 1],
		lightslategray: [119, 136, 153, 1],
		lightslategrey: [119, 136, 153, 1],
		lightsteelblue: [176, 196, 222, 1],
		lightyellow: [255, 255, 224, 1],
		lime: [0, 255, 0, 1],
		limegreen: [50, 205, 50, 1],
		linen: [250, 240, 230, 1],
		magenta: [255, 0, 255, 1],
		maroon: [128, 0, 0, 1],
		mediumaquamarine: [102, 205, 170, 1],
		mediumblue: [0, 0, 205, 1],
		mediumorchid: [186, 85, 211, 1],
		mediumpurple: [147, 112, 219, 1],
		mediumseagreen: [60, 179, 113, 1],
		mediumslateblue: [123, 104, 238, 1],
		mediumspringgreen: [0, 250, 154, 1],
		mediumturquoise: [72, 209, 204, 1],
		mediumvioletred: [199, 21, 133, 1],
		midnightblue: [25, 25, 112, 1],
		mintcream: [245, 255, 250, 1],
		mistyrose: [255, 228, 225, 1],
		moccasin: [255, 228, 181, 1],
		navajowhite: [255, 222, 173, 1],
		navy: [0, 0, 128, 1],
		oldlace: [253, 245, 230, 1],
		olive: [128, 128, 0, 1],
		olivedrab: [107, 142, 35, 1],
		orange: [255, 165, 0, 1],
		orangered: [255, 69, 0, 1],
		orchid: [218, 112, 214, 1],
		palegoldenrod: [238, 232, 170, 1],
		palegreen: [152, 251, 152, 1],
		paleturquoise: [175, 238, 238, 1],
		palevioletred: [219, 112, 147, 1],
		papayawhip: [255, 239, 213, 1],
		peachpuff: [255, 218, 185, 1],
		peru: [205, 133, 63, 1],
		pink: [255, 192, 203, 1],
		plum: [221, 160, 221, 1],
		powderblue: [176, 224, 230, 1],
		purple: [128, 0, 128, 1],
		red: [255, 0, 0, 1],
		rosybrown: [188, 143, 143, 1],
		royalblue: [65, 105, 225, 1],
		saddlebrown: [139, 69, 19, 1],
		salmon: [250, 128, 114, 1],
		sandybrown: [244, 164, 96, 1],
		seagreen: [46, 139, 87, 1],
		seashell: [255, 245, 238, 1],
		sienna: [160, 82, 45, 1],
		silver: [192, 192, 192, 1],
		skyblue: [135, 206, 235, 1],
		slateblue: [106, 90, 205, 1],
		slategray: [112, 128, 144, 1],
		slategrey: [112, 128, 144, 1],
		snow: [255, 250, 250, 1],
		springgreen: [0, 255, 127, 1],
		steelblue: [70, 130, 180, 1],
		tan: [210, 180, 140, 1],
		teal: [0, 128, 128, 1],
		thistle: [216, 191, 216, 1],
		tomato: [255, 99, 71, 1],
		turquoise: [64, 224, 208, 1],
		violet: [238, 130, 238, 1],
		wheat: [245, 222, 179, 1],
		white: [255, 255, 255, 1],
		whitesmoke: [245, 245, 245, 1],
		yellow: [255, 255, 0, 1],
		yellowgreen: [154, 205, 50, 1]
	},
	s_ = new o_(20),
	l_ = null,
	h_ = Ot,
	u_ = Nt,
	c_ = (Object.freeze || Object)({
		parse: Dt,
		lift: kt,
		toHex: Pt,
		fastLerp: Ot,
		fastMapToColor: h_,
		lerp: Nt,
		mapToColor: u_,
		modifyHSL: Et,
		modifyAlpha: zt,
		stringify: Rt
	}),
	d_ = Array.prototype.slice,
	f_ = function(t, e, i, n) {
		this._tracks = {},
		this._target = t,
		this._loop = e || !1,
		this._getter = i || Bt,
		this._setter = n || Vt,
		this._clipCount = 0,
		this._delay = 0,
		this._doneList = [],
		this._onframeList = [],
		this._clipList = []
	};
	f_.prototype = {
		when: function(t, e) {
			var i = this._tracks;
			for (var n in e) if (e.hasOwnProperty(n)) {
				if (!i[n]) {
					i[n] = [];
					var o = this._getter(this._target, n);
					if (null == o) continue;
					0 !== t && i[n].push({
						time: 0,
						value: Xt(o)
					})
				}
				i[n].push({
					time: t,
					value: e[n]
				})
			}
			return this
		},
		during: function(t) {
			return this._onframeList.push(t),
			this
		},
		pause: function() {
			for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
			this._paused = !0
		},
		resume: function() {
			for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
			this._paused = !1
		},
		isPaused: function() {
			return !! this._paused
		},
		_doneCallback: function() {
			this._tracks = {},
			this._clipList.length = 0;
			for (var t = this._doneList,
			e = t.length,
			i = 0; i < e; i++) t[i].call(this)
		},
		start: function(t, e) {
			var i, n = this,
			o = 0;
			for (var a in this._tracks) if (this._tracks.hasOwnProperty(a)) {
				var r = $t(this, t,
				function() {--o || n._doneCallback()
				},
				this._tracks[a], a, e);
				r && (this._clipList.push(r), o++, this.animation && this.animation.addClip(r), i = r)
			}
			if (i) {
				var s = i.onframe;
				i.onframe = function(t, e) {
					s(t, e);
					for (var i = 0; i < n._onframeList.length; i++) n._onframeList[i](t, e)
				}
			}
			return o || this._doneCallback(),
			this
		},
		stop: function(t) {
			for (var e = this._clipList,
			i = this.animation,
			n = 0; n < e.length; n++) {
				var o = e[n];
				t && o.onframe(this._target, 1),
				i && i.removeClip(o)
			}
			e.length = 0
		},
		delay: function(t) {
			return this._delay = t,
			this
		},
		done: function(t) {
			return t && this._doneList.push(t),
			this
		},
		getClips: function() {
			return this._clipList
		}
	};
	var p_ = 1;
	"undefined" != typeof window && (p_ = Math.max(window.devicePixelRatio || 1, 1));
	var g_ = p_,
	m_ = function() {},
	v_ = m_,
	y_ = function() {
		this.animators = []
	};
	y_.prototype = {
		constructor: y_,
		animate: function(t, e) {
			var i, n = !1,
			o = this,
			a = this.__zr;
			if (t) {
				var r = t.split("."),
				s = o;
				n = "shape" === r[0];
				for (var h = 0,
				u = r.length; h < u; h++) s && (s = s[r[h]]);
				s && (i = s)
			} else i = o;
			if (i) {
				var c = o.animators,
				d = new f_(i, e);
				return d.during(function(t) {
					o.dirty(n)
				}).done(function() {
					c.splice(l(c, d), 1)
				}),
				c.push(d),
				a && a.animation.addAnimator(d),
				d
			}
			v_('Property "' + t + '" is not existed in element ' + o.id)
		},
		stopAnimation: function(t) {
			for (var e = this.animators,
			i = e.length,
			n = 0; n < i; n++) e[n].stop(t);
			return e.length = 0,
			this
		},
		animateTo: function(t, e, i, n, o, a) {
			_(i) ? (o = n, n = i, i = 0) : x(n) ? (o = n, n = "linear", i = 0) : x(i) ? (o = i, i = 0) : x(e) ? (o = e, e = 500) : e || (e = 500),
			this.stopAnimation(),
			this._animateToShallow("", this, t, e, i);
			var r = this.animators.slice(),
			s = r.length;
			s || o && o();
			for (var l = 0; l < r.length; l++) r[l].done(function() {--s || o && o()
			}).start(n, a)
		},
		_animateToShallow: function(t, e, i, n, o) {
			var a = {},
			r = 0;
			for (var s in i) if (i.hasOwnProperty(s)) if (null != e[s]) w(i[s]) && !c(i[s]) ? this._animateToShallow(t ? t + "." + s: s, e[s], i[s], n, o) : (a[s] = i[s], r++);
			else if (null != i[s]) if (t) {
				var l = {};
				l[t] = {},
				l[t][s] = i[s],
				this.attr(l)
			} else this.attr(s, i[s]);
			return r > 0 && this.animate(t, !1).when(null == n ? 500 : n, a).delay(o || 0),
			this
		}
	};
	var x_ = function(t) {
		Kx.call(this, t),
		Hx.call(this, t),
		y_.call(this, t),
		this.id = t.id || yx()
	};
	x_.prototype = {
		type: "element",
		name: "",
		__zr: null,
		ignore: !1,
		clipPath: null,
		isGroup: !1,
		drift: function(t, e) {
			switch (this.draggable) {
			case "horizontal":
				e = 0;
				break;
			case "vertical":
				t = 0
			}
			var i = this.transform;
			i || (i = this.transform = [1, 0, 0, 1, 0, 0]),
			i[4] += t,
			i[5] += e,
			this.decomposeTransform(),
			this.dirty(!1)
		},
		beforeUpdate: function() {},
		afterUpdate: function() {},
		update: function() {
			this.updateTransform()
		},
		traverse: function(t, e) {},
		attrKV: function(t, e) {
			if ("position" === t || "scale" === t || "origin" === t) {
				if (e) {
					var i = this[t];
					i || (i = this[t] = []),
					i[0] = e[0],
					i[1] = e[1]
				}
			} else this[t] = e
		},
		hide: function() {
			this.ignore = !0,
			this.__zr && this.__zr.refresh()
		},
		show: function() {
			this.ignore = !1,
			this.__zr && this.__zr.refresh()
		},
		attr: function(t, e) {
			if ("string" == typeof t) this.attrKV(t, e);
			else if (w(t)) for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
			return this.dirty(!1),
			this
		},
		setClipPath: function(t) {
			var e = this.__zr;
			e && t.addSelfToZr(e),
			this.clipPath && this.clipPath !== t && this.removeClipPath(),
			this.clipPath = t,
			t.__zr = e,
			t.__clipTarget = this,
			this.dirty(!1)
		},
		removeClipPath: function() {
			var t = this.clipPath;
			t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
		},
		addSelfToZr: function(t) {
			this.__zr = t;
			var e = this.animators;
			if (e) for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
			this.clipPath && this.clipPath.addSelfToZr(t)
		},
		removeSelfFromZr: function(t) {
			this.__zr = null;
			var e = this.animators;
			if (e) for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
			this.clipPath && this.clipPath.removeSelfFromZr(t)
		}
	},
	u(x_, y_),
	u(x_, Kx),
	u(x_, Hx);
	var __ = Q,
	w_ = Math.min,
	b_ = Math.max;
	Kt.prototype = {
		constructor: Kt,
		union: function(t) {
			var e = w_(t.x, this.x),
			i = w_(t.y, this.y);
			this.width = b_(t.x + t.width, this.x + this.width) - e,
			this.height = b_(t.y + t.height, this.y + this.height) - i,
			this.x = e,
			this.y = i
		},
		applyTransform: function() {
			var t = [],
			e = [],
			i = [],
			n = [];
			return function(o) {
				if (o) {
					t[0] = i[0] = this.x,
					t[1] = n[1] = this.y,
					e[0] = n[0] = this.x + this.width,
					e[1] = i[1] = this.y + this.height,
					__(t, t, o),
					__(e, e, o),
					__(i, i, o),
					__(n, n, o),
					this.x = w_(t[0], e[0], i[0], n[0]),
					this.y = w_(t[1], e[1], i[1], n[1]);
					var a = b_(t[0], e[0], i[0], n[0]),
					r = b_(t[1], e[1], i[1], n[1]);
					this.width = a - this.x,
					this.height = r - this.y
				}
			}
		} (),
		calculateTransform: function(t) {
			var e = this,
			i = t.width / e.width,
			n = t.height / e.height,
			o = st();
			return ct(o, o, [ - e.x, -e.y]),
			ft(o, o, [i, n]),
			ct(o, o, [t.x, t.y]),
			o
		},
		intersect: function(t) {
			if (!t) return ! 1;
			t instanceof Kt || (t = Kt.create(t));
			var e = this,
			i = e.x,
			n = e.x + e.width,
			o = e.y,
			a = e.y + e.height,
			r = t.x,
			s = t.x + t.width,
			l = t.y,
			h = t.y + t.height;
			return ! (n < r || s < i || a < l || h < o)
		},
		contain: function(t, e) {
			var i = this;
			return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
		},
		clone: function() {
			return new Kt(this.x, this.y, this.width, this.height)
		},
		copy: function(t) {
			this.x = t.x,
			this.y = t.y,
			this.width = t.width,
			this.height = t.height
		},
		plain: function() {
			return {
				x: this.x,
				y: this.y,
				width: this.width,
				height: this.height
			}
		}
	},
	Kt.create = function(t) {
		return new Kt(t.x, t.y, t.width, t.height)
	};
	var S_ = function(t) {
		t = t || {},
		x_.call(this, t);
		for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
		this._children = [],
		this.__storage = null,
		this.__dirty = !0
	};
	S_.prototype = {
		constructor: S_,
		isGroup: !0,
		type: "group",
		silent: !1,
		children: function() {
			return this._children.slice()
		},
		childAt: function(t) {
			return this._children[t]
		},
		childOfName: function(t) {
			for (var e = this._children,
			i = 0; i < e.length; i++) if (e[i].name === t) return e[i]
		},
		childCount: function() {
			return this._children.length
		},
		add: function(t) {
			return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)),
			this
		},
		addBefore: function(t, e) {
			if (t && t !== this && t.parent !== this && e && e.parent === this) {
				var i = this._children,
				n = i.indexOf(e);
				n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
			}
			return this
		},
		_doAdd: function(t) {
			t.parent && t.parent.remove(t),
			t.parent = this;
			var e = this.__storage,
			i = this.__zr;
			e && e !== t.__storage && (e.addToStorage(t), t instanceof S_ && t.addChildrenToStorage(e)),
			i && i.refresh()
		},
		remove: function(t) {
			var e = this.__zr,
			i = this.__storage,
			n = this._children,
			o = l(n, t);
			return o < 0 ? this: (n.splice(o, 1), t.parent = null, i && (i.delFromStorage(t), t instanceof S_ && t.delChildrenFromStorage(i)), e && e.refresh(), this)
		},
		removeAll: function() {
			var t, e, i = this._children,
			n = this.__storage;
			for (e = 0; e < i.length; e++) t = i[e],
			n && (n.delFromStorage(t), t instanceof S_ && t.delChildrenFromStorage(n)),
			t.parent = null;
			return i.length = 0,
			this
		},
		eachChild: function(t, e) {
			for (var i = this._children,
			n = 0; n < i.length; n++) {
				var o = i[n];
				t.call(e, o, n)
			}
			return this
		},
		traverse: function(t, e) {
			for (var i = 0; i < this._children.length; i++) {
				var n = this._children[i];
				t.call(e, n),
				"group" === n.type && n.traverse(t, e)
			}
			return this
		},
		addChildrenToStorage: function(t) {
			for (var e = 0; e < this._children.length; e++) {
				var i = this._children[e];
				t.addToStorage(i),
				i instanceof S_ && i.addChildrenToStorage(t)
			}
		},
		delChildrenFromStorage: function(t) {
			for (var e = 0; e < this._children.length; e++) {
				var i = this._children[e];
				t.delFromStorage(i),
				i instanceof S_ && i.delChildrenFromStorage(t)
			}
		},
		dirty: function() {
			return this.__dirty = !0,
			this.__zr && this.__zr.refresh(),
			this
		},
		getBoundingRect: function(t) {
			for (var e = null,
			i = new Kt(0, 0, 0, 0), n = t || this._children, o = [], a = 0; a < n.length; a++) {
				var r = n[a];
				if (!r.ignore && !r.invisible) {
					var s = r.getBoundingRect(),
					l = r.getLocalTransform(o);
					l ? (i.copy(s), i.applyTransform(l), (e = e || i.clone()).union(i)) : (e = e || s.clone()).union(s)
				}
			}
			return e || i
		}
	},
	h(S_, x_);
	var M_ = 32,
	I_ = 7,
	T_ = function() {
		this._roots = [],
		this._displayList = [],
		this._displayListLen = 0
	};
	T_.prototype = {
		constructor: T_,
		traverse: function(t, e) {
			for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e)
		},
		getDisplayList: function(t, e) {
			return e = e || !1,
			t && this.updateDisplayList(e),
			this._displayList
		},
		updateDisplayList: function(t) {
			this._displayListLen = 0;
			for (var e = this._roots,
			i = this._displayList,
			n = 0,
			o = e.length; n < o; n++) this._updateAndAddDisplayable(e[n], null, t);
			i.length = this._displayListLen,
			_x.canvasSupported && ae(i, re)
		},
		_updateAndAddDisplayable: function(t, e, i) {
			if (!t.ignore || i) {
				t.beforeUpdate(),
				t.__dirty && t.update(),
				t.afterUpdate();
				var n = t.clipPath;
				if (n) {
					e = e ? e.slice() : [];
					for (var o = n,
					a = t; o;) o.parent = a,
					o.updateTransform(),
					e.push(o),
					a = o,
					o = o.clipPath
				}
				if (t.isGroup) {
					for (var r = t._children,
					s = 0; s < r.length; s++) {
						var l = r[s];
						t.__dirty && (l.__dirty = !0),
						this._updateAndAddDisplayable(l, e, i)
					}
					t.__dirty = !1
				} else t.__clipPaths = e,
				this._displayList[this._displayListLen++] = t
			}
		},
		addRoot: function(t) {
			t.__storage !== this && (t instanceof S_ && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
		},
		delRoot: function(t) {
			if (null == t) {
				for (i = 0; i < this._roots.length; i++) {
					var e = this._roots[i];
					e instanceof S_ && e.delChildrenFromStorage(this)
				}
				return this._roots = [],
				this._displayList = [],
				void(this._displayListLen = 0)
			}
			if (t instanceof Array) for (var i = 0,
			n = t.length; i < n; i++) this.delRoot(t[i]);
			else {
				var o = l(this._roots, t);
				o >= 0 && (this.delFromStorage(t), this._roots.splice(o, 1), t instanceof S_ && t.delChildrenFromStorage(this))
			}
		},
		addToStorage: function(t) {
			return t && (t.__storage = this, t.dirty(!1)),
			this
		},
		delFromStorage: function(t) {
			return t && (t.__storage = null),
			this
		},
		dispose: function() {
			this._renderList = this._roots = null
		},
		displayableSortFunc: re
	};
	var A_ = {
		shadowBlur: 1,
		shadowOffsetX: 1,
		shadowOffsetY: 1,
		textShadowBlur: 1,
		textShadowOffsetX: 1,
		textShadowOffsetY: 1,
		textBoxShadowBlur: 1,
		textBoxShadowOffsetX: 1,
		textBoxShadowOffsetY: 1
	},
	D_ = function(t, e, i) {
		return A_.hasOwnProperty(e) ? i *= t.dpr: i
	},
	C_ = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
	L_ = function(t, e) {
		this.extendFrom(t, !1),
		this.host = e
	};
	L_.prototype = {
		constructor: L_,
		host: null,
		fill: "#000",
		stroke: null,
		opacity: 1,
		lineDash: null,
		lineDashOffset: 0,
		shadowBlur: 0,
		shadowOffsetX: 0,
		shadowOffsetY: 0,
		lineWidth: 1,
		strokeNoScale: !1,
		text: null,
		font: null,
		textFont: null,
		fontStyle: null,
		fontWeight: null,
		fontSize: null,
		fontFamily: null,
		textTag: null,
		textFill: "#000",
		textStroke: null,
		textWidth: null,
		textHeight: null,
		textStrokeWidth: 0,
		textLineHeight: null,
		textPosition: "inside",
		textRect: null,
		textOffset: null,
		textAlign: null,
		textVerticalAlign: null,
		textDistance: 5,
		textShadowColor: "transparent",
		textShadowBlur: 0,
		textShadowOffsetX: 0,
		textShadowOffsetY: 0,
		textBoxShadowColor: "transparent",
		textBoxShadowBlur: 0,
		textBoxShadowOffsetX: 0,
		textBoxShadowOffsetY: 0,
		transformText: !1,
		textRotation: 0,
		textOrigin: null,
		textBackgroundColor: null,
		textBorderColor: null,
		textBorderWidth: 0,
		textBorderRadius: 0,
		textPadding: null,
		rich: null,
		truncate: null,
		blend: null,
		bind: function(t, e, i) {
			for (var n = this,
			o = i && i.style,
			a = !o,
			r = 0; r < C_.length; r++) {
				var s = C_[r],
				l = s[0]; (a || n[l] !== o[l]) && (t[l] = D_(t, l, n[l] || s[1]))
			}
			if ((a || n.fill !== o.fill) && (t.fillStyle = n.fill), (a || n.stroke !== o.stroke) && (t.strokeStyle = n.stroke), (a || n.opacity !== o.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (a || n.blend !== o.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
				var h = n.lineWidth;
				t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
			}
		},
		hasFill: function() {
			var t = this.fill;
			return null != t && "none" !== t
		},
		hasStroke: function() {
			var t = this.stroke;
			return null != t && "none" !== t && this.lineWidth > 0
		},
		extendFrom: function(t, e) {
			if (t) for (var i in t) ! t.hasOwnProperty(i) || !0 !== e && (!1 === e ? this.hasOwnProperty(i) : null == t[i]) || (this[i] = t[i])
		},
		set: function(t, e) {
			"string" == typeof t ? this[t] = e: this.extendFrom(t, !0)
		},
		clone: function() {
			var t = new this.constructor;
			return t.extendFrom(this, !0),
			t
		},
		getGradient: function(t, e, i) {
			for (var n = ("radial" === e.type ? le: se)(t, e, i), o = e.colorStops, a = 0; a < o.length; a++) n.addColorStop(o[a].offset, o[a].color);
			return n
		}
	};
	for (var k_ = L_.prototype,
	P_ = 0; P_ < C_.length; P_++) {
		var O_ = C_[P_];
		O_[0] in k_ || (k_[O_[0]] = O_[1])
	}
	L_.getGradient = k_.getGradient;
	var N_ = function(t, e) {
		this.image = t,
		this.repeat = e,
		this.type = "pattern"
	};
	N_.prototype.getCanvasPattern = function(t) {
		return t.createPattern(this.image, this.repeat || "repeat")
	};
	var E_ = function(t, e, i) {
		var n;
		i = i || g_,
		"string" == typeof t ? n = ue(t, e, i) : w(t) && (t = (n = t).id),
		this.id = t,
		this.dom = n;
		var o = n.style;
		o && (n.onselectstart = he, o["-webkit-user-select"] = "none", o["user-select"] = "none", o["-webkit-touch-callout"] = "none", o["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", o.padding = 0, o.margin = 0, o["border-width"] = 0),
		this.domBack = null,
		this.ctxBack = null,
		this.painter = e,
		this.config = null,
		this.clearColor = 0,
		this.motionBlur = !1,
		this.lastFrameAlpha = .7,
		this.dpr = i
	};
	E_.prototype = {
		constructor: E_,
		__dirty: !0,
		__used: !1,
		__drawIndex: 0,
		__startIndex: 0,
		__endIndex: 0,
		incremental: !1,
		getElementCount: function() {
			return this.__endIndex - this.__startIndex
		},
		initContext: function() {
			this.ctx = this.dom.getContext("2d"),
			this.ctx.dpr = this.dpr
		},
		createBackBuffer: function() {
			var t = this.dpr;
			this.domBack = ue("back-" + this.id, this.painter, t),
			this.ctxBack = this.domBack.getContext("2d"),
			1 != t && this.ctxBack.scale(t, t)
		},
		resize: function(t, e) {
			var i = this.dpr,
			n = this.dom,
			o = n.style,
			a = this.domBack;
			o.width = t + "px",
			o.height = e + "px",
			n.width = t * i,
			n.height = e * i,
			a && (a.width = t * i, a.height = e * i, 1 != i && this.ctxBack.scale(i, i))
		},
		clear: function(t) {
			var e = this.dom,
			i = this.ctx,
			n = e.width,
			o = e.height,
			a = this.clearColor,
			r = this.motionBlur && !t,
			s = this.lastFrameAlpha,
			l = this.dpr;
			if (r && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, n / l, o / l)), i.clearRect(0, 0, n, o), a) {
				var h;
				a.colorStops ? (h = a.__canvasGradient || L_.getGradient(i, a, {
					x: 0,
					y: 0,
					width: n,
					height: o
				}), a.__canvasGradient = h) : a.image && (h = N_.prototype.getCanvasPattern.call(a, i)),
				i.save(),
				i.fillStyle = h || a,
				i.fillRect(0, 0, n, o),
				i.restore()
			}
			if (r) {
				var u = this.domBack;
				i.save(),
				i.globalAlpha = s,
				i.drawImage(u, 0, 0, n, o),
				i.restore()
			}
		}
	};
	var z_ = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) ||
	function(t) {
		setTimeout(t, 16)
	},
	R_ = new o_(50),
	B_ = {},
	V_ = 0,
	G_ = 5e3,
	W_ = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
	F_ = "12px sans-serif",
	H_ = {};
	H_.measureText = function(t, e) {
		var i = s();
		return i.font = e || F_,
		i.measureText(t)
	};
	var Z_ = {
		left: 1,
		right: 1,
		center: 1
	},
	U_ = {
		top: 1,
		bottom: 1,
		middle: 1
	},
	j_ = new Kt,
	X_ = function() {};
	X_.prototype = {
		constructor: X_,
		drawRectText: function(t, e) {
			var i = this.style;
			e = i.textRect || e,
			this.__dirty && Oe(i);
			var n = i.text;
			if (null != n && (n += ""), $e(n, i)) {
				t.save();
				var o = this.transform;
				i.transformText ? this.setTransform(t) : o && (j_.copy(e), j_.applyTransform(o), e = j_),
				Ee(this, t, n, i, e),
				t.restore()
			}
		}
	},
	Ke.prototype = {
		constructor: Ke,
		type: "displayable",
		__dirty: !0,
		invisible: !1,
		z: 0,
		z2: 0,
		zlevel: 0,
		draggable: !1,
		dragging: !1,
		silent: !1,
		culling: !1,
		cursor: "pointer",
		rectHover: !1,
		progressive: !1,
		incremental: !1,
		inplace: !1,
		beforeBrush: function(t) {},
		afterBrush: function(t) {},
		brush: function(t, e) {},
		getBoundingRect: function() {},
		contain: function(t, e) {
			return this.rectContain(t, e)
		},
		traverse: function(t, e) {
			t.call(e, this)
		},
		rectContain: function(t, e) {
			var i = this.transformCoordToLocal(t, e);
			return this.getBoundingRect().contain(i[0], i[1])
		},
		dirty: function() {
			this.__dirty = !0,
			this._rect = null,
			this.__zr && this.__zr.refresh()
		},
		animateStyle: function(t) {
			return this.animate("style", t)
		},
		attrKV: function(t, e) {
			"style" !== t ? x_.prototype.attrKV.call(this, t, e) : this.style.set(e)
		},
		setStyle: function(t, e) {
			return this.style.set(t, e),
			this.dirty(!1),
			this
		},
		useStyle: function(t) {
			return this.style = new L_(t, this),
			this.dirty(!1),
			this
		}
	},
	h(Ke, x_),
	u(Ke, X_),
	Je.prototype = {
		constructor: Je,
		type: "image",
		brush: function(t, e) {
			var i = this.style,
			n = i.image;
			i.bind(t, this, e);
			var o = this._image = de(n, this._image, this, this.onload);
			if (o && pe(o)) {
				var a = i.x || 0,
				r = i.y || 0,
				s = i.width,
				l = i.height,
				h = o.width / o.height;
				if (null == s && null != l ? s = l * h: null == l && null != s ? l = s / h: null == s && null == l && (s = o.width, l = o.height), this.setTransform(t), i.sWidth && i.sHeight) {
					var u = i.sx || 0,
					c = i.sy || 0;
					t.drawImage(o, u, c, i.sWidth, i.sHeight, a, r, s, l)
				} else if (i.sx && i.sy) {
					var d = s - (u = i.sx),
					f = l - (c = i.sy);
					t.drawImage(o, u, c, d, f, a, r, s, l)
				} else t.drawImage(o, a, r, s, l);
				null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
			}
		},
		getBoundingRect: function() {
			var t = this.style;
			return this._rect || (this._rect = new Kt(t.x || 0, t.y || 0, t.width || 0, t.height || 0)),
			this._rect
		}
	},
	h(Je, Ke);
	var Y_ = new Kt(0, 0, 0, 0),
	q_ = new Kt(0, 0, 0, 0),
	$_ = function(t, e, i) {
		this.type = "canvas";
		var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
		this._opts = i = a({},
		i || {}),
		this.dpr = i.devicePixelRatio || g_,
		this._singleCanvas = n,
		this.root = t;
		var o = t.style;
		o && (o["-webkit-tap-highlight-color"] = "transparent", o["-webkit-user-select"] = o["user-select"] = o["-webkit-touch-callout"] = "none", t.innerHTML = ""),
		this.storage = e;
		var r = this._zlevelList = [],
		s = this._layers = {};
		if (this._layerConfig = {},
		this._needsManuallyCompositing = !1, n) {
			null != i.width && (t.width = i.width),
			null != i.height && (t.height = i.height);
			var l = t.width,
			h = t.height;
			this._width = l,
			this._height = h;
			var u = new E_(t, this, 1);
			u.__builtin__ = !0,
			u.initContext(),
			s[314159] = u,
			r.push(314159),
			this._domRoot = t
		} else {
			this._width = this._getSize(0),
			this._height = this._getSize(1);
			var c = this._domRoot = oi(this._width, this._height);
			t.appendChild(c)
		}
		this._hoverlayer = null,
		this._hoverElements = []
	};
	$_.prototype = {
		constructor: $_,
		getType: function() {
			return "canvas"
		},
		isSingleCanvas: function() {
			return this._singleCanvas
		},
		getViewportRoot: function() {
			return this._domRoot
		},
		getViewportRootOffset: function() {
			var t = this.getViewportRoot();
			if (t) return {
				offsetLeft: t.offsetLeft || 0,
				offsetTop: t.offsetTop || 0
			}
		},
		refresh: function(t) {
			var e = this.storage.getDisplayList(!0),
			i = this._zlevelList;
			this._redrawId = Math.random(),
			this._paintList(e, t, this._redrawId);
			for (var n = 0; n < i.length; n++) {
				var o = i[n],
				a = this._layers[o]; ! a.__builtin__ && a.refresh && a.refresh()
			}
			return this.refreshHover(),
			this
		},
		addHover: function(t, e) {
			if (!t.__hoverMir) {
				var i = new t.constructor({
					style: t.style,
					shape: t.shape
				});
				i.__from = t,
				t.__hoverMir = i,
				i.setStyle(e),
				this._hoverElements.push(i)
			}
		},
		removeHover: function(t) {
			var e = t.__hoverMir,
			i = this._hoverElements,
			n = l(i, e);
			n >= 0 && i.splice(n, 1),
			t.__hoverMir = null
		},
		clearHover: function(t) {
			for (var e = this._hoverElements,
			i = 0; i < e.length; i++) {
				var n = e[i].__from;
				n && (n.__hoverMir = null)
			}
			e.length = 0
		},
		refreshHover: function() {
			var t = this._hoverElements,
			e = t.length,
			i = this._hoverlayer;
			if (i && i.clear(), e) {
				ae(t, this.storage.displayableSortFunc),
				i || (i = this._hoverlayer = this.getLayer(1e5));
				var n = {};
				i.ctx.save();
				for (var o = 0; o < e;) {
					var a = t[o],
					r = a.__from;
					r && r.__zr ? (o++, r.invisible || (a.transform = r.transform, a.invTransform = r.invTransform, a.__clipPaths = r.__clipPaths, this._doPaintEl(a, i, !0, n))) : (t.splice(o, 1), r.__hoverMir = null, e--)
				}
				i.ctx.restore()
			}
		},
		getHoverLayer: function() {
			return this.getLayer(1e5)
		},
		_paintList: function(t, e, i) {
			if (this._redrawId === i) {
				e = e || !1,
				this._updateLayerStatus(t);
				var n = this._doPaintList(t, e);
				if (this._needsManuallyCompositing && this._compositeManually(), !n) {
					var o = this;
					z_(function() {
						o._paintList(t, e, i)
					})
				}
			}
		},
		_compositeManually: function() {
			var t = this.getLayer(314159).ctx,
			e = this._domRoot.width,
			i = this._domRoot.height;
			t.clearRect(0, 0, e, i),
			this.eachBuiltinLayer(function(n) {
				n.virtual && t.drawImage(n.dom, 0, 0, e, i)
			})
		},
		_doPaintList: function(t, e) {
			for (var i = [], n = 0; n < this._zlevelList.length; n++) {
				var o = this._zlevelList[n]; (s = this._layers[o]).__builtin__ && s !== this._hoverlayer && (s.__dirty || e) && i.push(s)
			}
			for (var a = !0,
			r = 0; r < i.length; r++) {
				var s = i[r],
				l = s.ctx,
				h = {};
				l.save();
				var u = e ? s.__startIndex: s.__drawIndex,
				c = !e && s.incremental && Date.now,
				f = c && Date.now();
				if (s.__startIndex === s.__endIndex) s.clear();
				else if (u === s.__startIndex) {
					var p = t[u];
					p.incremental && p.notClear && !e || s.clear()
				} - 1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = s.__startIndex);
				for (var g = u; g < s.__endIndex; g++) {
					var m = t[g];
					if (this._doPaintEl(m, s, e, h), m.__dirty = !1, c && Date.now() - f > 15) break
				}
				s.__drawIndex = g,
				s.__drawIndex < s.__endIndex && (a = !1),
				h.prevElClipPaths && l.restore(),
				l.restore()
			}
			return _x.wxa && d(this._layers,
			function(t) {
				t && t.ctx && t.ctx.draw && t.ctx.draw()
			}),
			a
		},
		_doPaintEl: function(t, e, i, n) {
			var o = e.ctx,
			a = t.transform;
			if ((e.__dirty || i) && !t.invisible && 0 !== t.style.opacity && (!a || a[0] || a[3]) && (!t.culling || !ei(t, this._width, this._height))) {
				var r = t.__clipPaths;
				n.prevElClipPaths && !ii(r, n.prevElClipPaths) || (n.prevElClipPaths && (e.ctx.restore(), n.prevElClipPaths = null, n.prevEl = null), r && (o.save(), ni(r, o), n.prevElClipPaths = r)),
				t.beforeBrush && t.beforeBrush(o),
				t.brush(o, n.prevEl || null),
				n.prevEl = t,
				t.afterBrush && t.afterBrush(o)
			}
		},
		getLayer: function(t, e) {
			this._singleCanvas && !this._needsManuallyCompositing && (t = 314159);
			var i = this._layers[t];
			return i || ((i = new E_("zr_" + t, this, this.dpr)).zlevel = t, i.__builtin__ = !0, this._layerConfig[t] && n(i, this._layerConfig[t], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()),
			i
		},
		insertLayer: function(t, e) {
			var i = this._layers,
			n = this._zlevelList,
			o = n.length,
			a = null,
			r = -1,
			s = this._domRoot;
			if (i[t]) v_("ZLevel " + t + " has been used already");
			else if (ti(e)) {
				if (o > 0 && t > n[0]) {
					for (r = 0; r < o - 1 && !(n[r] < t && n[r + 1] > t); r++);
					a = i[n[r]]
				}
				if (n.splice(r + 1, 0, t), i[t] = e, !e.virtual) if (a) {
					var l = a.dom;
					l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
				} else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
			} else v_("Layer of zlevel " + t + " is not valid")
		},
		eachLayer: function(t, e) {
			var i, n, o = this._zlevelList;
			for (n = 0; n < o.length; n++) i = o[n],
			t.call(e, this._layers[i], i)
		},
		eachBuiltinLayer: function(t, e) {
			var i, n, o, a = this._zlevelList;
			for (o = 0; o < a.length; o++) n = a[o],
			(i = this._layers[n]).__builtin__ && t.call(e, i, n)
		},
		eachOtherLayer: function(t, e) {
			var i, n, o, a = this._zlevelList;
			for (o = 0; o < a.length; o++) n = a[o],
			(i = this._layers[n]).__builtin__ || t.call(e, i, n)
		},
		getLayers: function() {
			return this._layers
		},
		_updateLayerStatus: function(t) {
			function e(t) {
				i && (i.__endIndex !== t && (i.__dirty = !0), i.__endIndex = t)
			}
			if (this.eachBuiltinLayer(function(t, e) {
				t.__dirty = t.__used = !1
			}), this._singleCanvas) for (o = 1; o < t.length; o++) if ((r = t[o]).zlevel !== t[o - 1].zlevel || r.incremental) {
				this._needsManuallyCompositing = !0;
				break
			}
			for (var i = null,
			n = 0,
			o = 0; o < t.length; o++) {
				var a, r = t[o],
				s = r.zlevel;
				r.incremental ? ((a = this.getLayer(s + .001, this._needsManuallyCompositing)).incremental = !0, n = 1) : a = this.getLayer(s + (n > 0 ? .01 : 0), this._needsManuallyCompositing),
				a.__builtin__ || v_("ZLevel " + s + " has been used by unkown layer " + a.id),
				a !== i && (a.__used = !0, a.__startIndex !== o && (a.__dirty = !0), a.__startIndex = o, a.incremental ? a.__drawIndex = -1 : a.__drawIndex = o, e(o), i = a),
				r.__dirty && (a.__dirty = !0, a.incremental && a.__drawIndex < 0 && (a.__drawIndex = o))
			}
			e(o),
			this.eachBuiltinLayer(function(t, e) { ! t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0),
				t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
			})
		},
		clear: function() {
			return this.eachBuiltinLayer(this._clearLayer),
			this
		},
		_clearLayer: function(t) {
			t.clear()
		},
		configLayer: function(t, e) {
			if (e) {
				var i = this._layerConfig;
				i[t] ? n(i[t], e, !0) : i[t] = e;
				for (var o = 0; o < this._zlevelList.length; o++) {
					var a = this._zlevelList[o];
					a !== t && a !== t + .01 || n(this._layers[a], i[t], !0)
				}
			}
		},
		delLayer: function(t) {
			var e = this._layers,
			i = this._zlevelList,
			n = e[t];
			n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(l(i, t), 1))
		},
		resize: function(t, e) {
			if (this._domRoot.style) {
				var i = this._domRoot;
				i.style.display = "none";
				var n = this._opts;
				if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width != t || e != this._height) {
					i.style.width = t + "px",
					i.style.height = e + "px";
					for (var o in this._layers) this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
					d(this._progressiveLayers,
					function(i) {
						i.resize(t, e)
					}),
					this.refresh(!0)
				}
				this._width = t,
				this._height = e
			} else {
				if (null == t || null == e) return;
				this._width = t,
				this._height = e,
				this.getLayer(314159).resize(t, e)
			}
			return this
		},
		clearLayer: function(t) {
			var e = this._layers[t];
			e && e.clear()
		},
		dispose: function() {
			this.root.innerHTML = "",
			this.root = this.storage = this._domRoot = this._layers = null
		},
		getRenderedCanvas: function(t) {
			if (t = t || {},
			this._singleCanvas && !this._compositeManually) return this._layers[314159].dom;
			var e = new E_("image", this, t.pixelRatio || this.dpr);
			if (e.initContext(), e.clearColor = t.backgroundColor, e.clear(), t.pixelRatio <= this.dpr) {
				this.refresh();
				var i = e.dom.width,
				n = e.dom.height,
				o = e.ctx;
				this.eachLayer(function(t) {
					t.__builtin__ ? o.drawImage(t.dom, 0, 0, i, n) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
				})
			} else for (var a = {},
			r = this.storage.getDisplayList(!0), s = 0; s < r.length; s++) {
				var l = r[s];
				this._doPaintEl(l, e, !0, a)
			}
			return e.dom
		},
		getWidth: function() {
			return this._width
		},
		getHeight: function() {
			return this._height
		},
		_getSize: function(t) {
			var e = this._opts,
			i = ["width", "height"][t],
			n = ["clientWidth", "clientHeight"][t],
			o = ["paddingLeft", "paddingTop"][t],
			a = ["paddingRight", "paddingBottom"][t];
			if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
			var r = this.root,
			s = document.defaultView.getComputedStyle(r);
			return (r[n] || Qe(s[i]) || Qe(r.style[i])) - (Qe(s[o]) || 0) - (Qe(s[a]) || 0) | 0
		},
		pathToImage: function(t, e) {
			e = e || this.dpr;
			var i = document.createElement("canvas"),
			n = i.getContext("2d"),
			o = t.getBoundingRect(),
			a = t.style,
			r = a.shadowBlur * e,
			s = a.shadowOffsetX * e,
			l = a.shadowOffsetY * e,
			h = a.hasStroke() ? a.lineWidth: 0,
			u = Math.max(h / 2, -s + r),
			c = Math.max(h / 2, s + r),
			d = Math.max(h / 2, -l + r),
			f = Math.max(h / 2, l + r),
			p = o.width + u + c,
			g = o.height + d + f;
			i.width = p * e,
			i.height = g * e,
			n.scale(e, e),
			n.clearRect(0, 0, p, g),
			n.dpr = e;
			var m = {
				position: t.position,
				rotation: t.rotation,
				scale: t.scale
			};
			t.position = [u - o.x, d - o.y],
			t.rotation = 0,
			t.scale = [1, 1],
			t.updateTransform(),
			t && t.brush(n);
			var v = new Je({
				style: {
					x: 0,
					y: 0,
					image: i
				}
			});
			return null != m.position && (v.position = t.position = m.position),
			null != m.rotation && (v.rotation = t.rotation = m.rotation),
			null != m.scale && (v.scale = t.scale = m.scale),
			v
		}
	};
	var K_ = "undefined" != typeof window && !!window.addEventListener,
	J_ = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	Q_ = K_ ?
	function(t) {
		t.preventDefault(),
		t.stopPropagation(),
		t.cancelBubble = !0
	}: function(t) {
		t.returnValue = !1,
		t.cancelBubble = !0
	},
	tw = function(t) {
		t = t || {},
		this.stage = t.stage || {},
		this.onframe = t.onframe ||
		function() {},
		this._clips = [],
		this._running = !1,
		this._time,
		this._pausedTime,
		this._pauseStart,
		this._paused = !1,
		Hx.call(this)
	};
	tw.prototype = {
		constructor: tw,
		addClip: function(t) {
			this._clips.push(t)
		},
		addAnimator: function(t) {
			t.animation = this;
			for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i])
		},
		removeClip: function(t) {
			var e = l(this._clips, t);
			e >= 0 && this._clips.splice(e, 1)
		},
		removeAnimator: function(t) {
			for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
			t.animation = null
		},
		_update: function() {
			for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, o = [], a = [], r = 0; r < n; r++) {
				var s = i[r],
				l = s.step(t, e);
				l && (o.push(l), a.push(s))
			}
			for (r = 0; r < n;) i[r]._needsRemove ? (i[r] = i[n - 1], i.pop(), n--) : r++;
			n = o.length;
			for (r = 0; r < n; r++) a[r].fire(o[r]);
			this._time = t,
			this.onframe(e),
			this.trigger("frame", e),
			this.stage.update && this.stage.update()
		},
		_startLoop: function() {
			function t() {
				e._running && (z_(t), !e._paused && e._update())
			}
			var e = this;
			this._running = !0,
			z_(t)
		},
		start: function() {
			this._time = (new Date).getTime(),
			this._pausedTime = 0,
			this._startLoop()
		},
		stop: function() {
			this._running = !1
		},
		pause: function() {
			this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
		},
		resume: function() {
			this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
		},
		clear: function() {
			this._clips = []
		},
		animate: function(t, e) {
			var i = new f_(t, (e = e || {}).loop, e.getter, e.setter);
			return this.addAnimator(i),
			i
		}
	},
	u(tw, Hx);
	var ew = function() {
		this._track = []
	};
	ew.prototype = {
		constructor: ew,
		recognize: function(t, e, i) {
			return this._doTrack(t, e, i),
			this._recognize(t)
		},
		clear: function() {
			return this._track.length = 0,
			this
		},
		_doTrack: function(t, e, i) {
			var n = t.touches;
			if (n) {
				for (var o = {
					points: [],
					touches: [],
					target: e,
					event: t
				},
				a = 0, r = n.length; a < r; a++) {
					var s = n[a],
					l = ri(i, s, {});
					o.points.push([l.zrX, l.zrY]),
					o.touches.push(s)
				}
				this._track.push(o)
			}
		},
		_recognize: function(t) {
			for (var e in iw) if (iw.hasOwnProperty(e)) {
				var i = iw[e](this._track, t);
				if (i) return i
			}
		}
	};
	var iw = {
		pinch: function(t, e) {
			var i = t.length;
			if (i) {
				var n = (t[i - 1] || {}).points,
				o = (t[i - 2] || {}).points || n;
				if (o && o.length > 1 && n && n.length > 1) {
					var a = di(n) / di(o); ! isFinite(a) && (a = 1),
					e.pinchScale = a;
					var r = fi(n);
					return e.pinchX = r[0],
					e.pinchY = r[1],
					{
						type: "pinch",
						target: t[0].target,
						event: e
					}
				}
			}
		}
	},
	nw = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
	ow = ["touchstart", "touchend", "touchmove"],
	aw = {
		pointerdown: 1,
		pointerup: 1,
		pointermove: 1,
		pointerout: 1
	},
	rw = f(nw,
	function(t) {
		var e = t.replace("mouse", "pointer");
		return aw[e] ? e: t
	}),
	sw = {
		mousemove: function(t) {
			t = li(this.dom, t),
			this.trigger("mousemove", t)
		},
		mouseout: function(t) {
			var e = (t = li(this.dom, t)).toElement || t.relatedTarget;
			if (e != this.dom) for (; e && 9 != e.nodeType;) {
				if (e === this.dom) return;
				e = e.parentNode
			}
			this.trigger("mouseout", t)
		},
		touchstart: function(t) { (t = li(this.dom, t)).zrByTouch = !0,
			this._lastTouchMoment = new Date,
			gi(this, t, "start"),
			sw.mousemove.call(this, t),
			sw.mousedown.call(this, t),
			mi(this)
		},
		touchmove: function(t) { (t = li(this.dom, t)).zrByTouch = !0,
			gi(this, t, "change"),
			sw.mousemove.call(this, t),
			mi(this)
		},
		touchend: function(t) { (t = li(this.dom, t)).zrByTouch = !0,
			gi(this, t, "end"),
			sw.mouseup.call(this, t),
			+new Date - this._lastTouchMoment < 300 && sw.click.call(this, t),
			mi(this)
		},
		pointerdown: function(t) {
			sw.mousedown.call(this, t)
		},
		pointermove: function(t) {
			vi(t) || sw.mousemove.call(this, t)
		},
		pointerup: function(t) {
			sw.mouseup.call(this, t)
		},
		pointerout: function(t) {
			vi(t) || sw.mouseout.call(this, t)
		}
	};
	d(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"],
	function(t) {
		sw[t] = function(e) {
			e = li(this.dom, e),
			this.trigger(t, e)
		}
	});
	var lw = xi.prototype;
	lw.dispose = function() {
		for (var t = nw.concat(ow), e = 0; e < t.length; e++) {
			var i = t[e];
			ui(this.dom, pi(i), this._handlers[i])
		}
	},
	lw.setCursor = function(t) {
		this.dom.style && (this.dom.style.cursor = t || "default")
	},
	u(xi, Hx);
	var hw = !_x.canvasSupported,
	uw = {
		canvas: $_
	},
	cw = {},
	dw = function(t, e, i) {
		i = i || {},
		this.dom = e,
		this.id = t;
		var n = this,
		o = new T_,
		a = i.renderer;
		if (hw) {
			if (!uw.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
			a = "vml"
		} else a && uw[a] || (a = "canvas");
		var r = new uw[a](e, o, i, t);
		this.storage = o,
		this.painter = r;
		var s = _x.node || _x.worker ? null: new xi(r.getViewportRoot());
		this.handler = new jx(o, r, s, r.root),
		this.animation = new tw({
			stage: {
				update: m(this.flush, this)
			}
		}),
		this.animation.start(),
		this._needsRefresh;
		var l = o.delFromStorage,
		h = o.addToStorage;
		o.delFromStorage = function(t) {
			l.call(o, t),
			t && t.removeSelfFromZr(n)
		},
		o.addToStorage = function(t) {
			h.call(o, t),
			t.addSelfToZr(n)
		}
	};
	dw.prototype = {
		constructor: dw,
		getId: function() {
			return this.id
		},
		add: function(t) {
			this.storage.addRoot(t),
			this._needsRefresh = !0
		},
		remove: function(t) {
			this.storage.delRoot(t),
			this._needsRefresh = !0
		},
		configLayer: function(t, e) {
			this.painter.configLayer(t, e),
			this._needsRefresh = !0
		},
		refreshImmediately: function() {
			this._needsRefresh = !1,
			this.painter.refresh(),
			this._needsRefresh = !1
		},
		refresh: function() {
			this._needsRefresh = !0
		},
		flush: function() {
			this._needsRefresh && this.refreshImmediately(),
			this._needsRefreshHover && this.refreshHoverImmediately()
		},
		addHover: function(t, e) {
			this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover())
		},
		removeHover: function(t) {
			this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
		},
		clearHover: function() {
			this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
		},
		refreshHover: function() {
			this._needsRefreshHover = !0
		},
		refreshHoverImmediately: function() {
			this._needsRefreshHover = !1,
			this.painter.refreshHover && this.painter.refreshHover()
		},
		resize: function(t) {
			t = t || {},
			this.painter.resize(t.width, t.height),
			this.handler.resize()
		},
		clearAnimation: function() {
			this.animation.clear()
		},
		getWidth: function() {
			return this.painter.getWidth()
		},
		getHeight: function() {
			return this.painter.getHeight()
		},
		pathToImage: function(t, e) {
			return this.painter.pathToImage(t, e)
		},
		setCursorStyle: function(t) {
			this.handler.setCursorStyle(t)
		},
		findHover: function(t, e) {
			return this.handler.findHover(t, e)
		},
		on: function(t, e, i) {
			this.handler.on(t, e, i)
		},
		off: function(t, e) {
			this.handler.off(t, e)
		},
		trigger: function(t, e) {
			this.handler.trigger(t, e)
		},
		clear: function() {
			this.storage.delRoot(),
			this.painter.clear()
		},
		dispose: function() {
			this.animation.stop(),
			this.clear(),
			this.storage.dispose(),
			this.painter.dispose(),
			this.handler.dispose(),
			this.animation = this.storage = this.painter = this.handler = null,
			bi(this.id)
		}
	};
	var fw = (Object.freeze || Object)({
		version: "4.0.1",
		init: _i,
		dispose: function(t) {
			if (t) t.dispose();
			else {
				for (var e in cw) cw.hasOwnProperty(e) && cw[e].dispose();
				cw = {}
			}
			return this
		},
		getInstance: function(t) {
			return cw[t]
		},
		registerPainter: wi
	}),
	pw = d,
	gw = w,
	mw = y,
	vw = "\0-",
	yw = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
	xw = 0,
	_w = ".",
	ww = "___EC__COMPONENT__CONTAINER___",
	bw = 0,
	Sw = function(t) {
		for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
		return function(e, i, n) {
			for (var o = {},
			a = 0; a < t.length; a++) {
				var r = t[a][1];
				if (! (i && l(i, r) >= 0 || n && l(n, r) < 0)) {
					var s = e.getShallow(r);
					null != s && (o[t[a][0]] = s)
				}
			}
			return o
		}
	},
	Mw = Sw([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
	Iw = {
		getLineStyle: function(t) {
			var e = Mw(this, t),
			i = this.getLineDash(e.lineWidth);
			return i && (e.lineDash = i),
			e
		},
		getLineDash: function(t) {
			null == t && (t = 1);
			var e = this.get("type"),
			i = Math.max(t, 2),
			n = 4 * t;
			return "solid" === e || null == e ? null: "dashed" === e ? [n, n] : [i, i]
		}
	},
	Tw = Sw([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
	Aw = {
		getAreaStyle: function(t, e) {
			return Tw(this, t, e)
		}
	},
	Dw = Math.pow,
	Cw = Math.sqrt,
	Lw = 1e-8,
	kw = 1e-4,
	Pw = Cw(3),
	Ow = 1 / 3,
	Nw = V(),
	Ew = V(),
	zw = V(),
	Rw = Math.min,
	Bw = Math.max,
	Vw = Math.sin,
	Gw = Math.cos,
	Ww = 2 * Math.PI,
	Fw = V(),
	Hw = V(),
	Zw = V(),
	Uw = [],
	jw = [],
	Xw = {
		M: 1,
		L: 2,
		C: 3,
		Q: 4,
		A: 5,
		Z: 6,
		R: 7
	},
	Yw = [],
	qw = [],
	$w = [],
	Kw = [],
	Jw = Math.min,
	Qw = Math.max,
	tb = Math.cos,
	eb = Math.sin,
	ib = Math.sqrt,
	nb = Math.abs,
	ob = "undefined" != typeof Float32Array,
	ab = function(t) {
		this._saveData = !t,
		this._saveData && (this.data = []),
		this._ctx = null
	};
	ab.prototype = {
		constructor: ab,
		_xi: 0,
		_yi: 0,
		_x0: 0,
		_y0: 0,
		_ux: 0,
		_uy: 0,
		_len: 0,
		_lineDash: null,
		_dashOffset: 0,
		_dashIdx: 0,
		_dashSum: 0,
		setScale: function(t, e) {
			this._ux = nb(1 / g_ / t) || 0,
			this._uy = nb(1 / g_ / e) || 0
		},
		getContext: function() {
			return this._ctx
		},
		beginPath: function(t) {
			return this._ctx = t,
			t && t.beginPath(),
			t && (this.dpr = t.dpr),
			this._saveData && (this._len = 0),
			this._lineDash && (this._lineDash = null, this._dashOffset = 0),
			this
		},
		moveTo: function(t, e) {
			return this.addData(Xw.M, t, e),
			this._ctx && this._ctx.moveTo(t, e),
			this._x0 = t,
			this._y0 = e,
			this._xi = t,
			this._yi = e,
			this
		},
		lineTo: function(t, e) {
			var i = nb(t - this._xi) > this._ux || nb(e - this._yi) > this._uy || this._len < 5;
			return this.addData(Xw.L, t, e),
			this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)),
			i && (this._xi = t, this._yi = e),
			this
		},
		bezierCurveTo: function(t, e, i, n, o, a) {
			return this.addData(Xw.C, t, e, i, n, o, a),
			this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, o, a) : this._ctx.bezierCurveTo(t, e, i, n, o, a)),
			this._xi = o,
			this._yi = a,
			this
		},
		quadraticCurveTo: function(t, e, i, n) {
			return this.addData(Xw.Q, t, e, i, n),
			this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)),
			this._xi = i,
			this._yi = n,
			this
		},
		arc: function(t, e, i, n, o, a) {
			return this.addData(Xw.A, t, e, i, i, n, o - n, 0, a ? 0 : 1),
			this._ctx && this._ctx.arc(t, e, i, n, o, a),
			this._xi = tb(o) * i + t,
			this._yi = eb(o) * i + t,
			this
		},
		arcTo: function(t, e, i, n, o) {
			return this._ctx && this._ctx.arcTo(t, e, i, n, o),
			this
		},
		rect: function(t, e, i, n) {
			return this._ctx && this._ctx.rect(t, e, i, n),
			this.addData(Xw.R, t, e, i, n),
			this
		},
		closePath: function() {
			this.addData(Xw.Z);
			var t = this._ctx,
			e = this._x0,
			i = this._y0;
			return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()),
			this._xi = e,
			this._yi = i,
			this
		},
		fill: function(t) {
			t && t.fill(),
			this.toStatic()
		},
		stroke: function(t) {
			t && t.stroke(),
			this.toStatic()
		},
		setLineDash: function(t) {
			if (t instanceof Array) {
				this._lineDash = t,
				this._dashIdx = 0;
				for (var e = 0,
				i = 0; i < t.length; i++) e += t[i];
				this._dashSum = e
			}
			return this
		},
		setLineDashOffset: function(t) {
			return this._dashOffset = t,
			this
		},
		len: function() {
			return this._len
		},
		setData: function(t) {
			var e = t.length;
			this.data && this.data.length == e || !ob || (this.data = new Float32Array(e));
			for (var i = 0; i < e; i++) this.data[i] = t[i];
			this._len = e
		},
		appendPath: function(t) {
			t instanceof Array || (t = [t]);
			for (var e = t.length,
			i = 0,
			n = this._len,
			o = 0; o < e; o++) i += t[o].len();
			ob && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
			for (o = 0; o < e; o++) for (var a = t[o].data, r = 0; r < a.length; r++) this.data[n++] = a[r];
			this._len = n
		},
		addData: function(t) {
			if (this._saveData) {
				var e = this.data;
				this._len + arguments.length > e.length && (this._expandData(), e = this.data);
				for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
				this._prevCmd = t
			}
		},
		_expandData: function() {
			if (! (this.data instanceof Array)) {
				for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
				this.data = t
			}
		},
		_needsDash: function() {
			return this._lineDash
		},
		_dashedLineTo: function(t, e) {
			var i, n, o = this._dashSum,
			a = this._dashOffset,
			r = this._lineDash,
			s = this._ctx,
			l = this._xi,
			h = this._yi,
			u = t - l,
			c = e - h,
			d = ib(u * u + c * c),
			f = l,
			p = h,
			g = r.length;
			for (u /= d, c /= d, a < 0 && (a = o + a), f -= (a %= o) * u, p -= a * c; u > 0 && f <= t || u < 0 && f >= t || 0 == u && (c > 0 && p <= e || c < 0 && p >= e);) f += u * (i = r[n = this._dashIdx]),
			p += c * i,
			this._dashIdx = (n + 1) % g,
			u > 0 && f < l || u < 0 && f > l || c > 0 && p < h || c < 0 && p > h || s[n % 2 ? "moveTo": "lineTo"](u >= 0 ? Jw(f, t) : Qw(f, t), c >= 0 ? Jw(p, e) : Qw(p, e));
			u = f - t,
			c = p - e,
			this._dashOffset = -ib(u * u + c * c)
		},
		_dashedBezierTo: function(t, e, i, n, o, a) {
			var r, s, l, h, u, c = this._dashSum,
			d = this._dashOffset,
			f = this._lineDash,
			p = this._ctx,
			g = this._xi,
			m = this._yi,
			v = ji,
			y = 0,
			x = this._dashIdx,
			_ = f.length,
			w = 0;
			for (d < 0 && (d = c + d), d %= c, r = 0; r < 1; r += .1) s = v(g, t, i, o, r + .1) - v(g, t, i, o, r),
			l = v(m, e, n, a, r + .1) - v(m, e, n, a, r),
			y += ib(s * s + l * l);
			for (; x < _ && !((w += f[x]) > d); x++);
			for (r = (w - d) / y; r <= 1;) h = v(g, t, i, o, r),
			u = v(m, e, n, a, r),
			x % 2 ? p.moveTo(h, u) : p.lineTo(h, u),
			r += f[x] / y,
			x = (x + 1) % _;
			x % 2 != 0 && p.lineTo(o, a),
			s = o - h,
			l = a - u,
			this._dashOffset = -ib(s * s + l * l)
		},
		_dashedQuadraticTo: function(t, e, i, n) {
			var o = i,
			a = n;
			i = (i + 2 * t) / 3,
			n = (n + 2 * e) / 3,
			t = (this._xi + 2 * t) / 3,
			e = (this._yi + 2 * e) / 3,
			this._dashedBezierTo(t, e, i, n, o, a)
		},
		toStatic: function() {
			var t = this.data;
			t instanceof Array && (t.length = this._len, ob && (this.data = new Float32Array(t)))
		},
		getBoundingRect: function() {
			Yw[0] = Yw[1] = $w[0] = $w[1] = Number.MAX_VALUE,
			qw[0] = qw[1] = Kw[0] = Kw[1] = -Number.MAX_VALUE;
			for (var t = this.data,
			e = 0,
			i = 0,
			n = 0,
			o = 0,
			a = 0; a < t.length;) {
				var r = t[a++];
				switch (1 == a && (n = e = t[a], o = i = t[a + 1]), r) {
				case Xw.M:
					e = n = t[a++],
					i = o = t[a++],
					$w[0] = n,
					$w[1] = o,
					Kw[0] = n,
					Kw[1] = o;
					break;
				case Xw.L:
					rn(e, i, t[a], t[a + 1], $w, Kw),
					e = t[a++],
					i = t[a++];
					break;
				case Xw.C:
					sn(e, i, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], $w, Kw),
					e = t[a++],
					i = t[a++];
					break;
				case Xw.Q:
					ln(e, i, t[a++], t[a++], t[a], t[a + 1], $w, Kw),
					e = t[a++],
					i = t[a++];
					break;
				case Xw.A:
					var s = t[a++],
					l = t[a++],
					h = t[a++],
					u = t[a++],
					c = t[a++],
					d = t[a++] + c,
					f = (t[a++], 1 - t[a++]);
					1 == a && (n = tb(c) * h + s, o = eb(c) * u + l),
					hn(s, l, h, u, c, d, f, $w, Kw),
					e = tb(d) * h + s,
					i = eb(d) * u + l;
					break;
				case Xw.R:
					rn(n = e = t[a++], o = i = t[a++], n + t[a++], o + t[a++], $w, Kw);
					break;
				case Xw.Z:
					e = n,
					i = o
				}
				tt(Yw, Yw, $w),
				et(qw, qw, Kw)
			}
			return 0 === a && (Yw[0] = Yw[1] = qw[0] = qw[1] = 0),
			new Kt(Yw[0], Yw[1], qw[0] - Yw[0], qw[1] - Yw[1])
		},
		rebuildPath: function(t) {
			for (var e, i, n, o, a, r, s = this.data,
			l = this._ux,
			h = this._uy,
			u = this._len,
			c = 0; c < u;) {
				var d = s[c++];
				switch (1 == c && (e = n = s[c], i = o = s[c + 1]), d) {
				case Xw.M:
					e = n = s[c++],
					i = o = s[c++],
					t.moveTo(n, o);
					break;
				case Xw.L:
					a = s[c++],
					r = s[c++],
					(nb(a - n) > l || nb(r - o) > h || c === u - 1) && (t.lineTo(a, r), n = a, o = r);
					break;
				case Xw.C:
					t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]),
					n = s[c - 2],
					o = s[c - 1];
					break;
				case Xw.Q:
					t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]),
					n = s[c - 2],
					o = s[c - 1];
					break;
				case Xw.A:
					var f = s[c++],
					p = s[c++],
					g = s[c++],
					m = s[c++],
					v = s[c++],
					y = s[c++],
					x = s[c++],
					_ = s[c++],
					w = g > m ? g: m,
					b = g > m ? 1 : g / m,
					S = g > m ? m / g: 1,
					M = v + y;
					Math.abs(g - m) > .001 ? (t.translate(f, p), t.rotate(x), t.scale(b, S), t.arc(0, 0, w, v, M, 1 - _), t.scale(1 / b, 1 / S), t.rotate( - x), t.translate( - f, -p)) : t.arc(f, p, w, v, M, 1 - _),
					1 == c && (e = tb(v) * g + f, i = eb(v) * m + p),
					n = tb(M) * g + f,
					o = eb(M) * m + p;
					break;
				case Xw.R:
					e = n = s[c],
					i = o = s[c + 1],
					t.rect(s[c++], s[c++], s[c++], s[c++]);
					break;
				case Xw.Z:
					t.closePath(),
					n = e,
					o = i
				}
			}
		}
	},
	ab.CMD = Xw;
	var rb = 2 * Math.PI,
	sb = 2 * Math.PI,
	lb = ab.CMD,
	hb = 2 * Math.PI,
	ub = 1e-4,
	cb = [ - 1, -1, -1],
	db = [ - 1, -1],
	fb = N_.prototype.getCanvasPattern,
	pb = Math.abs,
	gb = new ab(!0);
	Mn.prototype = {
		constructor: Mn,
		type: "path",
		__dirtyPath: !0,
		strokeContainThreshold: 5,
		brush: function(t, e) {
			var i = this.style,
			n = this.path || gb,
			o = i.hasStroke(),
			a = i.hasFill(),
			r = i.fill,
			s = i.stroke,
			l = a && !!r.colorStops,
			h = o && !!s.colorStops,
			u = a && !!r.image,
			c = o && !!s.image;
			if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
				var d;
				l && (d = d || this.getBoundingRect(), this._fillGradient = i.getGradient(t, r, d)),
				h && (d = d || this.getBoundingRect(), this._strokeGradient = i.getGradient(t, s, d))
			}
			l ? t.fillStyle = this._fillGradient: u && (t.fillStyle = fb.call(r, t)),
			h ? t.strokeStyle = this._strokeGradient: c && (t.strokeStyle = fb.call(s, t));
			var f = i.lineDash,
			p = i.lineDashOffset,
			g = !!t.setLineDash,
			m = this.getGlobalScale();
			n.setScale(m[0], m[1]),
			this.__dirtyPath || f && !g && o ? (n.beginPath(t), f && !g && (n.setLineDash(f), n.setLineDashOffset(p)), this.buildPath(n, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)),
			a && n.fill(t),
			f && g && (t.setLineDash(f), t.lineDashOffset = p),
			o && n.stroke(t),
			f && g && t.setLineDash([]),
			null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
		},
		buildPath: function(t, e, i) {},
		createPathProxy: function() {
			this.path = new ab
		},
		getBoundingRect: function() {
			var t = this._rect,
			e = this.style,
			i = !t;
			if (i) {
				var n = this.path;
				n || (n = this.path = new ab),
				this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)),
				t = n.getBoundingRect()
			}
			if (this._rect = t, e.hasStroke()) {
				var o = this._rectWithStroke || (this._rectWithStroke = t.clone());
				if (this.__dirty || i) {
					o.copy(t);
					var a = e.lineWidth,
					r = e.strokeNoScale ? this.getLineScale() : 1;
					e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)),
					r > 1e-10 && (o.width += a / r, o.height += a / r, o.x -= a / r / 2, o.y -= a / r / 2)
				}
				return o
			}
			return t
		},
		contain: function(t, e) {
			var i = this.transformCoordToLocal(t, e),
			n = this.getBoundingRect(),
			o = this.style;
			if (t = i[0], e = i[1], n.contain(t, e)) {
				var a = this.path.data;
				if (o.hasStroke()) {
					var r = o.lineWidth,
					s = o.strokeNoScale ? this.getLineScale() : 1;
					if (s > 1e-10 && (o.hasFill() || (r = Math.max(r, this.strokeContainThreshold)), Sn(a, r / s, t, e))) return ! 0
				}
				if (o.hasFill()) return bn(a, t, e)
			}
			return ! 1
		},
		dirty: function(t) {
			null == t && (t = !0),
			t && (this.__dirtyPath = t, this._rect = null),
			this.__dirty = !0,
			this.__zr && this.__zr.refresh(),
			this.__clipTarget && this.__clipTarget.dirty()
		},
		animateShape: function(t) {
			return this.animate("shape", t)
		},
		attrKV: function(t, e) {
			"shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : Ke.prototype.attrKV.call(this, t, e)
		},
		setShape: function(t, e) {
			var i = this.shape;
			if (i) {
				if (w(t)) for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
				else i[t] = e;
				this.dirty(!0)
			}
			return this
		},
		getLineScale: function() {
			var t = this.transform;
			return t && pb(t[0] - 1) > 1e-10 && pb(t[3] - 1) > 1e-10 ? Math.sqrt(pb(t[0] * t[3] - t[2] * t[1])) : 1
		}
	},
	Mn.extend = function(t) {
		var e = function(e) {
			Mn.call(this, e),
			t.style && this.style.extendFrom(t.style, !1);
			var i = t.shape;
			if (i) {
				this.shape = this.shape || {};
				var n = this.shape;
				for (var o in i) ! n.hasOwnProperty(o) && i.hasOwnProperty(o) && (n[o] = i[o])
			}
			t.init && t.init.call(this, e)
		};
		h(e, Mn);
		for (var i in t)"style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
		return e
	},
	h(Mn, Ke);
	var mb = ab.CMD,
	vb = [[], [], []],
	yb = Math.sqrt,
	xb = Math.atan2,
	_b = function(t, e) {
		var i, n, o, a, r, s, l = t.data,
		h = mb.M,
		u = mb.C,
		c = mb.L,
		d = mb.R,
		f = mb.A,
		p = mb.Q;
		for (o = 0, a = 0; o < l.length;) {
			switch (i = l[o++], a = o, n = 0, i) {
			case h:
			case c:
				n = 1;
				break;
			case u:
				n = 3;
				break;
			case p:
				n = 2;
				break;
			case f:
				var g = e[4],
				m = e[5],
				v = yb(e[0] * e[0] + e[1] * e[1]),
				y = yb(e[2] * e[2] + e[3] * e[3]),
				x = xb( - e[1] / y, e[0] / v);
				l[o] *= v,
				l[o++] += g,
				l[o] *= y,
				l[o++] += m,
				l[o++] *= v,
				l[o++] *= y,
				l[o++] += x,
				l[o++] += x,
				a = o += 2;
				break;
			case d:
				s[0] = l[o++],
				s[1] = l[o++],
				Q(s, s, e),
				l[a++] = s[0],
				l[a++] = s[1],
				s[0] += l[o++],
				s[1] += l[o++],
				Q(s, s, e),
				l[a++] = s[0],
				l[a++] = s[1]
			}
			for (r = 0; r < n; r++)(s = vb[r])[0] = l[o++],
			s[1] = l[o++],
			Q(s, s, e),
			l[a++] = s[0],
			l[a++] = s[1]
		}
	},
	wb = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
	bb = Math.sqrt,
	Sb = Math.sin,
	Mb = Math.cos,
	Ib = Math.PI,
	Tb = function(t) {
		return Math.sqrt(t[0] * t[0] + t[1] * t[1])
	},
	Ab = function(t, e) {
		return (t[0] * e[0] + t[1] * e[1]) / (Tb(t) * Tb(e))
	},
	Db = function(t, e) {
		return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Ab(t, e))
	},
	Cb = function(t) {
		Ke.call(this, t)
	};
	Cb.prototype = {
		constructor: Cb,
		type: "text",
		brush: function(t, e) {
			var i = this.style;
			this.__dirty && Oe(i),
			i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null;
			var n = i.text;
			null != n && (n += ""),
			i.bind(t, this, e),
			$e(n, i) && (this.setTransform(t), Ee(this, t, n, i), this.restoreTransform(t))
		},
		getBoundingRect: function() {
			var t = this.style;
			if (this.__dirty && Oe(t), !this._rect) {
				var e = t.text;
				null != e ? e += "": e = "";
				var i = me(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
				if (i.x += t.x || 0, i.y += t.y || 0, je(t.textStroke, t.textStrokeWidth)) {
					var n = t.textStrokeWidth;
					i.x -= n / 2,
					i.y -= n / 2,
					i.width += n,
					i.height += n
				}
				this._rect = i
			}
			return this._rect
		}
	},
	h(Cb, Ke);
	var Lb = Mn.extend({
		type: "circle",
		shape: {
			cx: 0,
			cy: 0,
			r: 0
		},
		buildPath: function(t, e, i) {
			i && t.moveTo(e.cx + e.r, e.cy),
			t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
		}
	}),
	kb = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
	Pb = function(t) {
		return _x.browser.ie && _x.browser.version >= 11 ?
		function() {
			var e, i = this.__clipPaths,
			n = this.style;
			if (i) for (var o = 0; o < i.length; o++) {
				var a = i[o],
				r = a && a.shape,
				s = a && a.type;
				if (r && ("sector" === s && r.startAngle === r.endAngle || "rect" === s && (!r.width || !r.height))) {
					for (l = 0; l < kb.length; l++) kb[l][2] = n[kb[l][0]],
					n[kb[l][0]] = kb[l][1];
					e = !0;
					break
				}
			}
			if (t.apply(this, arguments), e) for (var l = 0; l < kb.length; l++) n[kb[l][0]] = kb[l][2]
		}: t
	},
	Ob = Mn.extend({
		type: "sector",
		shape: {
			cx: 0,
			cy: 0,
			r0: 0,
			r: 0,
			startAngle: 0,
			endAngle: 2 * Math.PI,
			clockwise: !0
		},
		brush: Pb(Mn.prototype.brush),
		buildPath: function(t, e) {
			var i = e.cx,
			n = e.cy,
			o = Math.max(e.r0 || 0, 0),
			a = Math.max(e.r, 0),
			r = e.startAngle,
			s = e.endAngle,
			l = e.clockwise,
			h = Math.cos(r),
			u = Math.sin(r);
			t.moveTo(h * o + i, u * o + n),
			t.lineTo(h * a + i, u * a + n),
			t.arc(i, n, a, r, s, !l),
			t.lineTo(Math.cos(s) * o + i, Math.sin(s) * o + n),
			0 !== o && t.arc(i, n, o, s, r, l),
			t.closePath()
		}
	}),
	Nb = Mn.extend({
		type: "ring",
		shape: {
			cx: 0,
			cy: 0,
			r: 0,
			r0: 0
		},
		buildPath: function(t, e) {
			var i = e.cx,
			n = e.cy,
			o = 2 * Math.PI;
			t.moveTo(i + e.r, n),
			t.arc(i, n, e.r, 0, o, !1),
			t.moveTo(i + e.r0, n),
			t.arc(i, n, e.r0, 0, o, !0)
		}
	}),
	Eb = function(t, e) {
		for (var i = t.length,
		n = [], o = 0, a = 1; a < i; a++) o += $(t[a - 1], t[a]);
		var r = o / 2;
		r = r < i ? i: r;
		for (a = 0; a < r; a++) {
			var s, l, h, u = a / (r - 1) * (e ? i: i - 1),
			c = Math.floor(u),
			d = u - c,
			f = t[c % i];
			e ? (s = t[(c - 1 + i) % i], l = t[(c + 1) % i], h = t[(c + 2) % i]) : (s = t[0 === c ? c: c - 1], l = t[c > i - 2 ? i - 1 : c + 1], h = t[c > i - 3 ? i - 1 : c + 2]);
			var p = d * d,
			g = d * p;
			n.push([Ln(s[0], f[0], l[0], h[0], d, p, g), Ln(s[1], f[1], l[1], h[1], d, p, g)])
		}
		return n
	},
	zb = function(t, e, i, n) {
		var o, a, r, s, l = [],
		h = [],
		u = [],
		c = [];
		if (n) {
			r = [1 / 0, 1 / 0],
			s = [ - 1 / 0, -1 / 0];
			for (var d = 0,
			f = t.length; d < f; d++) tt(r, r, t[d]),
			et(s, s, t[d]);
			tt(r, r, n[0]),
			et(s, s, n[1])
		}
		for (var d = 0,
		f = t.length; d < f; d++) {
			var p = t[d];
			if (i) o = t[d ? d - 1 : f - 1],
			a = t[(d + 1) % f];
			else {
				if (0 === d || d === f - 1) {
					l.push(W(t[d]));
					continue
				}
				o = t[d - 1],
				a = t[d + 1]
			}
			U(h, a, o),
			Y(h, h, e);
			var g = $(p, o),
			m = $(p, a),
			v = g + m;
			0 !== v && (g /= v, m /= v),
			Y(u, h, -g),
			Y(c, h, m);
			var y = H([], p, u),
			x = H([], p, c);
			n && (et(y, y, r), tt(y, y, s), et(x, x, r), tt(x, x, s)),
			l.push(y),
			l.push(x)
		}
		return i && l.push(l.shift()),
		l
	},
	Rb = Mn.extend({
		type: "polygon",
		shape: {
			points: null,
			smooth: !1,
			smoothConstraint: null
		},
		buildPath: function(t, e) {
			kn(t, e, !0)
		}
	}),
	Bb = Mn.extend({
		type: "polyline",
		shape: {
			points: null,
			smooth: !1,
			smoothConstraint: null
		},
		style: {
			stroke: "#000",
			fill: null
		},
		buildPath: function(t, e) {
			kn(t, e, !1)
		}
	}),
	Vb = Mn.extend({
		type: "rect",
		shape: {
			r: 0,
			x: 0,
			y: 0,
			width: 0,
			height: 0
		},
		buildPath: function(t, e) {
			var i = e.x,
			n = e.y,
			o = e.width,
			a = e.height;
			e.r ? Pe(t, e) : t.rect(i, n, o, a),
			t.closePath()
		}
	}),
	Gb = Mn.extend({
		type: "line",
		shape: {
			x1: 0,
			y1: 0,
			x2: 0,
			y2: 0,
			percent: 1
		},
		style: {
			stroke: "#000",
			fill: null
		},
		buildPath: function(t, e) {
			var i = e.x1,
			n = e.y1,
			o = e.x2,
			a = e.y2,
			r = e.percent;
			0 !== r && (t.moveTo(i, n), r < 1 && (o = i * (1 - r) + o * r, a = n * (1 - r) + a * r), t.lineTo(o, a))
		},
		pointAt: function(t) {
			var e = this.shape;
			return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
		}
	}),
	Wb = [],
	Fb = Mn.extend({
		type: "bezier-curve",
		shape: {
			x1: 0,
			y1: 0,
			x2: 0,
			y2: 0,
			cpx1: 0,
			cpy1: 0,
			percent: 1
		},
		style: {
			stroke: "#000",
			fill: null
		},
		buildPath: function(t, e) {
			var i = e.x1,
			n = e.y1,
			o = e.x2,
			a = e.y2,
			r = e.cpx1,
			s = e.cpy1,
			l = e.cpx2,
			h = e.cpy2,
			u = e.percent;
			0 !== u && (t.moveTo(i, n), null == l || null == h ? (u < 1 && (nn(i, r, o, u, Wb), r = Wb[1], o = Wb[2], nn(n, s, a, u, Wb), s = Wb[1], a = Wb[2]), t.quadraticCurveTo(r, s, o, a)) : (u < 1 && ($i(i, r, l, o, u, Wb), r = Wb[1], l = Wb[2], o = Wb[3], $i(n, s, h, a, u, Wb), s = Wb[1], h = Wb[2], a = Wb[3]), t.bezierCurveTo(r, s, l, h, o, a)))
		},
		pointAt: function(t) {
			return Pn(this.shape, t, !1)
		},
		tangentAt: function(t) {
			var e = Pn(this.shape, t, !0);
			return q(e, e)
		}
	}),
	Hb = Mn.extend({
		type: "arc",
		shape: {
			cx: 0,
			cy: 0,
			r: 0,
			startAngle: 0,
			endAngle: 2 * Math.PI,
			clockwise: !0
		},
		style: {
			stroke: "#000",
			fill: null
		},
		buildPath: function(t, e) {
			var i = e.cx,
			n = e.cy,
			o = Math.max(e.r, 0),
			a = e.startAngle,
			r = e.endAngle,
			s = e.clockwise,
			l = Math.cos(a),
			h = Math.sin(a);
			t.moveTo(l * o + i, h * o + n),
			t.arc(i, n, o, a, r, !s)
		}
	}),
	Zb = Mn.extend({
		type: "compound",
		shape: {
			paths: null
		},
		_updatePathDirty: function() {
			for (var t = this.__dirtyPath,
			e = this.shape.paths,
			i = 0; i < e.length; i++) t = t || e[i].__dirtyPath;
			this.__dirtyPath = t,
			this.__dirty = this.__dirty || t
		},
		beforeBrush: function() {
			this._updatePathDirty();
			for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) t[i].path || t[i].createPathProxy(),
			t[i].path.setScale(e[0], e[1])
		},
		buildPath: function(t, e) {
			for (var i = e.paths || [], n = 0; n < i.length; n++) i[n].buildPath(t, i[n].shape, !0)
		},
		afterBrush: function() {
			for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
		},
		getBoundingRect: function() {
			return this._updatePathDirty(),
			Mn.prototype.getBoundingRect.call(this)
		}
	}),
	Ub = function(t) {
		this.colorStops = t || []
	};
	Ub.prototype = {
		constructor: Ub,
		addColorStop: function(t, e) {
			this.colorStops.push({
				offset: t,
				color: e
			})
		}
	};
	var jb = function(t, e, i, n, o, a) {
		this.x = null == t ? 0 : t,
		this.y = null == e ? 0 : e,
		this.x2 = null == i ? 1 : i,
		this.y2 = null == n ? 0 : n,
		this.type = "linear",
		this.global = a || !1,
		Ub.call(this, o)
	};
	jb.prototype = {
		constructor: jb
	},
	h(jb, Ub);
	var Xb = function(t, e, i, n, o) {
		this.x = null == t ? .5 : t,
		this.y = null == e ? .5 : e,
		this.r = null == i ? .5 : i,
		this.type = "radial",
		this.global = o || !1,
		Ub.call(this, n)
	};
	Xb.prototype = {
		constructor: Xb
	},
	h(Xb, Ub),
	On.prototype.incremental = !0,
	On.prototype.clearDisplaybles = function() {
		this._displayables = [],
		this._temporaryDisplayables = [],
		this._cursor = 0,
		this.dirty(),
		this.notClear = !1
	},
	On.prototype.addDisplayable = function(t, e) {
		e ? this._temporaryDisplayables.push(t) : this._displayables.push(t),
		this.dirty()
	},
	On.prototype.addDisplayables = function(t, e) {
		e = e || !1;
		for (var i = 0; i < t.length; i++) this.addDisplayable(t[i], e)
	},
	On.prototype.eachPendingDisplayable = function(t) {
		for (e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
		for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
	},
	On.prototype.update = function() {
		this.updateTransform();
		for (t = this._cursor; t < this._displayables.length; t++)(e = this._displayables[t]).parent = this,
		e.update(),
		e.parent = null;
		for (var t = 0; t < this._temporaryDisplayables.length; t++) {
			var e = this._temporaryDisplayables[t];
			e.parent = this,
			e.update(),
			e.parent = null
		}
	},
	On.prototype.brush = function(t, e) {
		for (i = this._cursor; i < this._displayables.length; i++)(n = this._temporaryDisplayables[i]).beforeBrush && n.beforeBrush(t),
		n.brush(t, i === this._cursor ? null: this._displayables[i - 1]),
		n.afterBrush && n.afterBrush(t);
		this._cursor = i;
		for (var i = 0; i < this._temporaryDisplayables.length; i++) {
			var n = this._temporaryDisplayables[i];
			n.beforeBrush && n.beforeBrush(t),
			n.brush(t, 0 === i ? null: this._temporaryDisplayables[i - 1]),
			n.afterBrush && n.afterBrush(t)
		}
		this._temporaryDisplayables = [],
		this.notClear = !0
	};
	var Yb = [];
	On.prototype.getBoundingRect = function() {
		if (!this._rect) {
			for (var t = new Kt(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
				var i = this._displayables[e],
				n = i.getBoundingRect().clone();
				i.needLocalTransform() && n.applyTransform(i.getLocalTransform(Yb)),
				t.union(n)
			}
			this._rect = t
		}
		return this._rect
	},
	On.prototype.contain = function(t, e) {
		var i = this.transformCoordToLocal(t, e);
		if (this.getBoundingRect().contain(i[0], i[1])) for (var n = 0; n < this._displayables.length; n++) if (this._displayables[n].contain(t, e)) return ! 0;
		return ! 1
	},
	h(On, Ke);
	var qb = Math.round,
	$b = Math.max,
	Kb = Math.min,
	Jb = {},
	Qb = function(t, e) {
		for (var i = [], n = t.length, o = 0; o < n; o++) {
			var a = t[o];
			a.path || a.createPathProxy(),
			a.__dirtyPath && a.buildPath(a.path, a.shape, !0),
			i.push(a.path)
		}
		var r = new Mn(e);
		return r.createPathProxy(),
		r.buildPath = function(t) {
			t.appendPath(i);
			var e = t.getContext();
			e && t.rebuildPath(e)
		},
		r
	},
	tS = (Object.freeze || Object)({
		extendShape: Nn,
		extendPath: function(t, e) {
			return Cn(t, e)
		},
		makePath: En,
		makeImage: zn,
		mergePath: Qb,
		resizePath: Bn,
		subPixelOptimizeLine: Vn,
		subPixelOptimizeRect: Gn,
		subPixelOptimize: Wn,
		setHoverStyle: to,
		setLabelStyle: eo,
		setTextStyle: io,
		setText: function(t, e, i) {
			var n, o = {
				isRectText: !0
			}; ! 1 === i ? n = !0 : o.autoColor = i,
			no(t, e, o, n),
			t.host && t.host.dirty && t.host.dirty(!1)
		},
		getFont: ho,
		updateProps: co,
		initProps: fo,
		getTransform: po,
		applyTransform: go,
		transformDirection: mo,
		groupTransition: vo,
		clipPointsByRect: yo,
		clipRectByRect: function(t, e) {
			var i = $b(t.x, e.x),
			n = Kb(t.x + t.width, e.x + e.width),
			o = $b(t.y, e.y),
			a = Kb(t.y + t.height, e.y + e.height);
			if (n >= i && a >= o) return {
				x: i,
				y: o,
				width: n - i,
				height: a - o
			}
		},
		createIcon: xo,
		Group: S_,
		Image: Je,
		Text: Cb,
		Circle: Lb,
		Sector: Ob,
		Ring: Nb,
		Polygon: Rb,
		Polyline: Bb,
		Rect: Vb,
		Line: Gb,
		BezierCurve: Fb,
		Arc: Hb,
		IncrementalDisplayable: On,
		CompoundPath: Zb,
		LinearGradient: jb,
		RadialGradient: Xb,
		BoundingRect: Kt
	}),
	eS = ["textStyle", "color"],
	iS = {
		getTextColor: function(t) {
			var e = this.ecModel;
			return this.getShallow("color") || (!t && e ? e.get(eS) : null)
		},
		getFont: function() {
			return ho({
				fontStyle: this.getShallow("fontStyle"),
				fontWeight: this.getShallow("fontWeight"),
				fontSize: this.getShallow("fontSize"),
				fontFamily: this.getShallow("fontFamily")
			},
			this.ecModel)
		},
		getTextRect: function(t) {
			return me(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
		}
	},
	nS = Sw([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
	oS = {
		getItemStyle: function(t, e) {
			var i = nS(this, t, e),
			n = this.getBorderLineDash();
			return n && (i.lineDash = n),
			i
		},
		getBorderLineDash: function() {
			var t = this.get("borderType");
			return "solid" === t || null == t ? null: "dashed" === t ? [5, 5] : [1, 1]
		}
	},
	aS = u,
	rS = Pi();
	_o.prototype = {
		constructor: _o,
		init: null,
		mergeOption: function(t) {
			n(this.option, t, !0)
		},
		get: function(t, e) {
			return null == t ? this.option: wo(this.option, this.parsePath(t), !e && bo(this, t))
		},
		getShallow: function(t, e) {
			var i = this.option,
			n = null == i ? i: i[t],
			o = !e && bo(this, t);
			return null == n && o && (n = o.getShallow(t)),
			n
		},
		getModel: function(t, e) {
			var i, n = null == t ? this.option: wo(this.option, t = this.parsePath(t));
			return e = e || (i = bo(this, t)) && i.getModel(t),
			new _o(n, e, this.ecModel)
		},
		isEmpty: function() {
			return null == this.option
		},
		restoreData: function() {},
		clone: function() {
			return new(0, this.constructor)(i(this.option))
		},
		setReadOnly: function(t) {},
		parsePath: function(t) {
			return "string" == typeof t && (t = t.split(".")),
			t
		},
		customizeGetParent: function(t) {
			rS(this).getParent = t
		},
		isAnimationEnabled: function() {
			if (!_x.node) {
				if (null != this.option.animation) return !! this.option.animation;
				if (this.parentModel) return this.parentModel.isAnimationEnabled()
			}
		}
	},
	Vi(_o),
	Gi(_o),
	aS(_o, Iw),
	aS(_o, Aw),
	aS(_o, iS),
	aS(_o, oS);
	var sS = 0,
	lS = 1e-4,
	hS = 9007199254740991,
	uS = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
	cS = (Object.freeze || Object)({
		linearMap: Io,
		parsePercent: To,
		round: Ao,
		asc: Do,
		getPrecision: Co,
		getPrecisionSafe: Lo,
		getPixelPrecision: ko,
		getPercentWithPrecision: Po,
		MAX_SAFE_INTEGER: hS,
		remRadian: Oo,
		isRadianAroundZero: No,
		parseDate: Eo,
		quantity: zo,
		nice: Bo,
		reformIntervals: Vo,
		isNumeric: Go
	}),
	dS = L,
	fS = ["a", "b", "c", "d", "e", "f", "g"],
	pS = function(t, e) {
		return "{" + t + (null == e ? "": e) + "}"
	},
	gS = function(t) {
		return t < 10 ? "0" + t: t
	},
	mS = be,
	vS = me,
	yS = (Object.freeze || Object)({
		addCommas: Wo,
		toCamelCase: Fo,
		normalizeCssArray: dS,
		encodeHTML: Ho,
		formatTpl: Zo,
		formatTplSimple: Uo,
		getTooltipMarker: jo,
		formatTime: Xo,
		capitalFirst: Yo,
		truncateText: mS,
		getTextRect: vS
	}),
	xS = d,
	_S = ["left", "right", "top", "bottom", "width", "height"],
	wS = [["width", "left", "right"], ["height", "top", "bottom"]],
	bS = qo,
	SS = (v(qo, "vertical"), v(qo, "horizontal"), {
		getBoxLayoutParams: function() {
			return {
				left: this.get("left"),
				top: this.get("top"),
				right: this.get("right"),
				bottom: this.get("bottom"),
				width: this.get("width"),
				height: this.get("height")
			}
		}
	}),
	MS = Pi(),
	IS = _o.extend({
		type: "component",
		id: "",
		name: "",
		mainType: "",
		subType: "",
		componentIndex: 0,
		defaultOption: null,
		ecModel: null,
		dependentModels: [],
		uid: null,
		layoutMode: null,
		$constructor: function(t, e, i, n) {
			_o.call(this, t, e, i, n),
			this.uid = So("ec_cpt_model")
		},
		init: function(t, e, i, n) {
			this.mergeDefaultAndTheme(t, i)
		},
		mergeDefaultAndTheme: function(t, e) {
			var i = this.layoutMode,
			o = i ? ea(t) : {};
			n(t, e.getTheme().get(this.mainType)),
			n(t, this.getDefaultOption()),
			i && ta(t, o, i)
		},
		mergeOption: function(t, e) {
			n(this.option, t, !0);
			var i = this.layoutMode;
			i && ta(this.option, t, i)
		},
		optionUpdated: function(t, e) {},
		getDefaultOption: function() {
			var t = MS(this);
			if (!t.defaultOption) {
				for (var e = [], i = this.constructor; i;) {
					var o = i.prototype.defaultOption;
					o && e.push(o),
					i = i.superClass
				}
				for (var a = {},
				r = e.length - 1; r >= 0; r--) a = n(a, e[r], !0);
				t.defaultOption = a
			}
			return t.defaultOption
		},
		getReferringComponents: function(t) {
			return this.ecModel.queryComponents({
				mainType: t,
				index: this.get(t + "Index", !0),
				id: this.get(t + "Id", !0)
			})
		}
	});
	Hi(IS, {
		registerWhenExtend: !0
	}),
	function(t) {
		var e = {};
		t.registerSubTypeDefaulter = function(t, i) {
			t = Ri(t),
			e[t.main] = i
		},
		t.determineSubType = function(i, n) {
			var o = n.type;
			if (!o) {
				var a = Ri(i).main;
				t.hasSubTypes(i) && e[a] && (o = e[a](n))
			}
			return o
		}
	} (IS),
	function(t, e) {
		function i(t) {
			var i = {},
			a = [];
			return d(t,
			function(r) {
				var s = n(i, r),
				h = o(s.originalDeps = e(r), t);
				s.entryCount = h.length,
				0 === s.entryCount && a.push(r),
				d(h,
				function(t) {
					l(s.predecessor, t) < 0 && s.predecessor.push(t);
					var e = n(i, t);
					l(e.successor, t) < 0 && e.successor.push(r)
				})
			}),
			{
				graph: i,
				noEntryList: a
			}
		}
		function n(t, e) {
			return t[e] || (t[e] = {
				predecessor: [],
				successor: []
			}),
			t[e]
		}
		function o(t, e) {
			var i = [];
			return d(t,
			function(t) {
				l(e, t) >= 0 && i.push(t)
			}),
			i
		}
		t.topologicalTravel = function(t, e, n, o) {
			function a(t) {
				s[t].entryCount--,
				0 === s[t].entryCount && l.push(t)
			}
			if (t.length) {
				var r = i(e),
				s = r.graph,
				l = r.noEntryList,
				h = {};
				for (d(t,
				function(t) {
					h[t] = !0
				}); l.length;) {
					var u = l.pop(),
					c = s[u],
					f = !!h[u];
					f && (n.call(o, u, c.originalDeps.slice()), delete h[u]),
					d(c.successor, f ?
					function(t) {
						h[t] = !0,
						a(t)
					}: a)
				}
				d(h,
				function() {
					throw new Error("Circle dependency may exists")
				})
			}
		}
	} (IS,
	function(t) {
		var e = [];
		return d(IS.getClassesByMainType(t),
		function(t) {
			e = e.concat(t.prototype.dependencies || [])
		}),
		e = f(e,
		function(t) {
			return Ri(t).main
		}),
		"dataset" !== t && l(e, "dataset") <= 0 && e.unshift("dataset"),
		e
	}),
	u(IS, SS);
	var TS = "";
	"undefined" != typeof navigator && (TS = navigator.platform || "");
	var AS = {
		color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
		gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
		textStyle: {
			fontFamily: TS.match(/^Win/) ? "Microsoft YaHei": "sans-serif",
			fontSize: 12,
			fontStyle: "normal",
			fontWeight: "normal"
		},
		blendMode: null,
		animation: "auto",
		animationDuration: 1e3,
		animationDurationUpdate: 300,
		animationEasing: "exponentialOut",
		animationEasingUpdate: "cubicOut",
		animationThreshold: 2e3,
		progressiveThreshold: 3e3,
		progressive: 400,
		hoverLayerThreshold: 3e3,
		useUTC: !1
	},
	DS = Pi(),
	CS = {
		clearColorPalette: function() {
			DS(this).colorIdx = 0,
			DS(this).colorNameMap = {}
		},
		getColorFromPalette: function(t, e, i) {
			var n = DS(e = e || this),
			o = n.colorIdx || 0,
			a = n.colorNameMap = n.colorNameMap || {};
			if (a.hasOwnProperty(t)) return a[t];
			var r = Si(this.get("color", !0)),
			s = this.get("colorLayer", !0),
			l = null != i && s ? na(s, i) : r;
			if ((l = l || r) && l.length) {
				var h = l[o];
				return t && (a[t] = h),
				n.colorIdx = (o + 1) % l.length,
				h
			}
		}
	},
	LS = {
		cartesian2d: function(t, e, i, n) {
			var o = t.getReferringComponents("xAxis")[0],
			a = t.getReferringComponents("yAxis")[0];
			e.coordSysDims = ["x", "y"],
			i.set("x", o),
			i.set("y", a),
			aa(o) && (n.set("x", o), e.firstCategoryDimIndex = 0),
			aa(a) && (n.set("y", a), e.firstCategoryDimIndex = 1)
		},
		singleAxis: function(t, e, i, n) {
			var o = t.getReferringComponents("singleAxis")[0];
			e.coordSysDims = ["single"],
			i.set("single", o),
			aa(o) && (n.set("single", o), e.firstCategoryDimIndex = 0)
		},
		polar: function(t, e, i, n) {
			var o = t.getReferringComponents("polar")[0],
			a = o.findAxisModel("radiusAxis"),
			r = o.findAxisModel("angleAxis");
			e.coordSysDims = ["radius", "angle"],
			i.set("radius", a),
			i.set("angle", r),
			aa(a) && (n.set("radius", a), e.firstCategoryDimIndex = 0),
			aa(r) && (n.set("angle", r), e.firstCategoryDimIndex = 1)
		},
		geo: function(t, e, i, n) {
			e.coordSysDims = ["lng", "lat"]
		},
		parallel: function(t, e, i, n) {
			var o = t.ecModel,
			a = o.getComponent("parallel", t.get("parallelIndex")),
			r = e.coordSysDims = a.dimensions.slice();
			d(a.parallelAxisIndex,
			function(t, a) {
				var s = o.getComponent("parallelAxis", t),
				l = r[a];
				i.set(l, s),
				aa(s) && null == e.firstCategoryDimIndex && (n.set(l, s), e.firstCategoryDimIndex = a)
			})
		}
	},
	kS = "original",
	PS = "arrayRows",
	OS = "objectRows",
	NS = "keyedColumns",
	ES = "unknown",
	zS = "typedArray",
	RS = "column",
	BS = "row";
	ra.seriesDataToSource = function(t) {
		return new ra({
			data: t,
			sourceFormat: S(t) ? zS: kS,
			fromDataset: !1
		})
	},
	Gi(ra);
	var VS = Pi(),
	GS = "\0_ec_inner",
	WS = _o.extend({
		constructor: WS,
		init: function(t, e, i, n) {
			i = i || {},
			this.option = null,
			this._theme = new _o(i),
			this._optionManager = n
		},
		setOption: function(t, e) {
			k(!(GS in t), "please use chart.getOption()"),
			this._optionManager.setOption(t, e),
			this.resetOption(null)
		},
		resetOption: function(t) {
			var e = !1,
			i = this._optionManager;
			if (!t || "recreate" === t) {
				var n = i.mountOption("recreate" === t);
				this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : wa.call(this, n),
				e = !0
			}
			if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
				var o = i.getTimelineOption(this);
				o && (this.mergeOption(o), e = !0)
			}
			if (!t || "recreate" === t || "media" === t) {
				var a = i.getMediaOption(this, this._api);
				a.length && d(a,
				function(t) {
					this.mergeOption(t, e = !0)
				},
				this)
			}
			return e
		},
		mergeOption: function(t) {
			var e = this.option,
			o = this._componentsMap,
			r = [];
			ha(this),
			d(t,
			function(t, o) {
				null != t && (IS.hasClass(o) ? o && r.push(o) : e[o] = null == e[o] ? i(t) : n(e[o], t, !0))
			}),
			IS.topologicalTravel(r, IS.getAllClassMainTypes(),
			function(i, n) {
				var r = Si(t[i]),
				s = Ai(o.get(i), r);
				Di(s),
				d(s,
				function(t, e) {
					var n = t.option;
					w(n) && (t.keyInfo.mainType = i, t.keyInfo.subType = Sa(i, n, t.exist))
				});
				var l = ba(o, n);
				e[i] = [],
				o.set(i, []),
				d(s,
				function(t, n) {
					var r = t.exist,
					s = t.option;
					if (k(w(s) || r, "Empty component definition"), s) {
						var h = IS.getClass(i, t.keyInfo.subType, !0);
						if (r && r instanceof h) r.name = t.keyInfo.name,
						r.mergeOption(s, this),
						r.optionUpdated(s, !1);
						else {
							var u = a({
								dependentModels: l,
								componentIndex: n
							},
							t.keyInfo);
							a(r = new h(s, this, this, u), u),
							r.init(s, this, this, u),
							r.optionUpdated(null, !0)
						}
					} else r.mergeOption({},
					this),
					r.optionUpdated({},
					!1);
					o.get(i)[n] = r,
					e[i][n] = r.option
				},
				this),
				"series" === i && Ma(this, o.get("series"))
			},
			this),
			this._seriesIndicesMap = z(this._seriesIndices = this._seriesIndices || [])
		},
		getOption: function() {
			var t = i(this.option);
			return d(t,
			function(e, i) {
				if (IS.hasClass(i)) {
					for (var n = (e = Si(e)).length - 1; n >= 0; n--) Ci(e[n]) && e.splice(n, 1);
					t[i] = e
				}
			}),
			delete t[GS],
			t
		},
		getTheme: function() {
			return this._theme
		},
		getComponent: function(t, e) {
			var i = this._componentsMap.get(t);
			if (i) return i[e || 0]
		},
		queryComponents: function(t) {
			var e = t.mainType;
			if (!e) return [];
			var i = t.index,
			n = t.id,
			o = t.name,
			a = this._componentsMap.get(e);
			if (!a || !a.length) return [];
			var r;
			if (null != i) y(i) || (i = [i]),
			r = g(f(i,
			function(t) {
				return a[t]
			}),
			function(t) {
				return !! t
			});
			else if (null != n) {
				var s = y(n);
				r = g(a,
				function(t) {
					return s && l(n, t.id) >= 0 || !s && t.id === n
				})
			} else if (null != o) {
				var h = y(o);
				r = g(a,
				function(t) {
					return h && l(o, t.name) >= 0 || !h && t.name === o
				})
			} else r = a.slice();
			return Ia(r, t)
		},
		findComponents: function(t) {
			var e = t.query,
			i = t.mainType,
			n = function(t) {
				var e = i + "Index",
				n = i + "Id",
				o = i + "Name";
				return ! t || null == t[e] && null == t[n] && null == t[o] ? null: {
					mainType: i,
					index: t[e],
					id: t[n],
					name: t[o]
				}
			} (e);
			return function(e) {
				return t.filter ? g(e, t.filter) : e
			} (Ia(n ? this.queryComponents(n) : this._componentsMap.get(i), t))
		},
		eachComponent: function(t, e, i) {
			var n = this._componentsMap;
			"function" == typeof t ? (i = e, e = t, n.each(function(t, n) {
				d(t,
				function(t, o) {
					e.call(i, n, t, o)
				})
			})) : _(t) ? d(n.get(t), e, i) : w(t) && d(this.findComponents(t), e, i)
		},
		getSeriesByName: function(t) {
			return g(this._componentsMap.get("series"),
			function(e) {
				return e.name === t
			})
		},
		getSeriesByIndex: function(t) {
			return this._componentsMap.get("series")[t]
		},
		getSeriesByType: function(t) {
			return g(this._componentsMap.get("series"),
			function(e) {
				return e.subType === t
			})
		},
		getSeries: function() {
			return this._componentsMap.get("series").slice()
		},
		getSeriesCount: function() {
			return this._componentsMap.get("series").length
		},
		eachSeries: function(t, e) {
			d(this._seriesIndices,
			function(i) {
				var n = this._componentsMap.get("series")[i];
				t.call(e, n, i)
			},
			this)
		},
		eachRawSeries: function(t, e) {
			d(this._componentsMap.get("series"), t, e)
		},
		eachSeriesByType: function(t, e, i) {
			d(this._seriesIndices,
			function(n) {
				var o = this._componentsMap.get("series")[n];
				o.subType === t && e.call(i, o, n)
			},
			this)
		},
		eachRawSeriesByType: function(t, e, i) {
			return d(this.getSeriesByType(t), e, i)
		},
		isSeriesFiltered: function(t) {
			return null == this._seriesIndicesMap.get(t.componentIndex)
		},
		getCurrentSeriesIndices: function() {
			return (this._seriesIndices || []).slice()
		},
		filterSeries: function(t, e) {
			Ma(this, g(this._componentsMap.get("series"), t, e))
		},
		restoreData: function(t) {
			var e = this._componentsMap;
			Ma(this, e.get("series"));
			var i = [];
			e.each(function(t, e) {
				i.push(e)
			}),
			IS.topologicalTravel(i, IS.getAllClassMainTypes(),
			function(i, n) {
				d(e.get(i),
				function(e) { ("series" !== i || !xa(e, t)) && e.restoreData()
				})
			})
		}
	});
	u(WS, CS);
	var FS = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
	HS = {};
	Aa.prototype = {
		constructor: Aa,
		create: function(t, e) {
			var i = [];
			d(HS,
			function(n, o) {
				var a = n.create(t, e);
				i = i.concat(a || [])
			}),
			this._coordinateSystems = i
		},
		update: function(t, e) {
			d(this._coordinateSystems,
			function(i) {
				i.update && i.update(t, e)
			})
		},
		getCoordinateSystems: function() {
			return this._coordinateSystems.slice()
		}
	},
	Aa.register = function(t, e) {
		HS[t] = e
	},
	Aa.get = function(t) {
		return HS[t]
	};
	var ZS = d,
	US = i,
	jS = f,
	XS = n,
	YS = /^(min|max)?(.+)$/;
	Da.prototype = {
		constructor: Da,
		setOption: function(t, e) {
			t && d(Si(t.series),
			function(t) {
				t && t.data && S(t.data) && O(t.data)
			}),
			t = US(t, !0);
			var i = this._optionBackup,
			n = Ca.call(this, t, e, !i);
			this._newBaseOption = n.baseOption,
			i ? (Oa(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n
		},
		mountOption: function(t) {
			var e = this._optionBackup;
			return this._timelineOptions = jS(e.timelineOptions, US),
			this._mediaList = jS(e.mediaList, US),
			this._mediaDefault = US(e.mediaDefault),
			this._currentMediaIndices = [],
			US(t ? e.baseOption: this._newBaseOption)
		},
		getTimelineOption: function(t) {
			var e, i = this._timelineOptions;
			if (i.length) {
				var n = t.getComponent("timeline");
				n && (e = US(i[n.getCurrentIndex()], !0))
			}
			return e
		},
		getMediaOption: function(t) {
			var e = this._api.getWidth(),
			i = this._api.getHeight(),
			n = this._mediaList,
			o = this._mediaDefault,
			a = [],
			r = [];
			if (!n.length && !o) return r;
			for (var s = 0,
			l = n.length; s < l; s++) La(n[s].query, e, i) && a.push(s);
			return ! a.length && o && (a = [ - 1]),
			a.length && !Pa(a, this._currentMediaIndices) && (r = jS(a,
			function(t) {
				return US( - 1 === t ? o.option: n[t].option)
			})),
			this._currentMediaIndices = a,
			r
		}
	};
	var qS = d,
	$S = w,
	KS = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
	JS = function(t, e) {
		qS(Ga(t.series),
		function(t) {
			$S(t) && Va(t)
		});
		var i = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
		e && i.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"),
		qS(i,
		function(e) {
			qS(Ga(t[e]),
			function(t) {
				t && (Ra(t, "axisLabel"), Ra(t.axisPointer, "label"))
			})
		}),
		qS(Ga(t.parallel),
		function(t) {
			var e = t && t.parallelAxisDefault;
			Ra(e, "axisLabel"),
			Ra(e && e.axisPointer, "label")
		}),
		qS(Ga(t.calendar),
		function(t) {
			Ea(t, "itemStyle"),
			Ra(t, "dayLabel"),
			Ra(t, "monthLabel"),
			Ra(t, "yearLabel")
		}),
		qS(Ga(t.radar),
		function(t) {
			Ra(t, "name")
		}),
		qS(Ga(t.geo),
		function(t) {
			$S(t) && (Ba(t), qS(Ga(t.regions),
			function(t) {
				Ba(t)
			}))
		}),
		qS(Ga(t.timeline),
		function(t) {
			Ba(t),
			Ea(t, "label"),
			Ea(t, "itemStyle"),
			Ea(t, "controlStyle", !0),
			Ea(t, "checkpointStyle");
			var e = t.data;
			y(e) && d(e,
			function(t) {
				w(t) && (Ea(t, "label"), Ea(t, "itemStyle"))
			})
		}),
		qS(Ga(t.toolbox),
		function(t) {
			Ea(t, "iconStyle"),
			qS(t.feature,
			function(t) {
				Ea(t, "iconStyle")
			})
		}),
		Ra(Wa(t.axisPointer), "label"),
		Ra(Wa(t.tooltip).axisPointer, "label")
	},
	QS = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
	tM = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
	eM = function(t, e) {
		JS(t, e),
		t.series = Si(t.series),
		d(t.series,
		function(t) {
			if (w(t)) {
				var e = t.type;
				if ("pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
					var i = Fa(t, "pointer.color");
					null != i && Ha(t, "itemStyle.normal.color", i)
				}
				Za(t)
			}
		}),
		t.dataRange && (t.visualMap = t.dataRange),
		d(tM,
		function(e) {
			var i = t[e];
			i && (y(i) || (i = [i]), d(i,
			function(t) {
				Za(t)
			}))
		})
	},
	iM = Ua.prototype;
	iM.pure = !1,
	iM.persistent = !0,
	iM.getSource = function() {
		return this._source
	};
	var nM = {
		arrayRows_column: {
			pure: !0,
			count: function() {
				return Math.max(0, this._data.length - this._source.startIndex)
			},
			getItem: function(t) {
				return this._data[t + this._source.startIndex]
			},
			appendData: Ya
		},
		arrayRows_row: {
			pure: !0,
			count: function() {
				var t = this._data[0];
				return t ? Math.max(0, t.length - this._source.startIndex) : 0
			},
			getItem: function(t) {
				t += this._source.startIndex;
				for (var e = [], i = this._data, n = 0; n < i.length; n++) {
					var o = i[n];
					e.push(o ? o[t] : null)
				}
				return e
			},
			appendData: function() {
				throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
			}
		},
		objectRows: {
			pure: !0,
			count: ja,
			getItem: Xa,
			appendData: Ya
		},
		keyedColumns: {
			pure: !0,
			count: function() {
				var t = this._source.dimensionsDefine[0].name,
				e = this._data[t];
				return e ? e.length: 0
			},
			getItem: function(t) {
				for (var e = [], i = this._source.dimensionsDefine, n = 0; n < i.length; n++) {
					var o = this._data[i[n].name];
					e.push(o ? o[t] : null)
				}
				return e
			},
			appendData: function(t) {
				var e = this._data;
				d(t,
				function(t, i) {
					for (var n = e[i] || (e[i] = []), o = 0; o < (t || []).length; o++) n.push(t[o])
				})
			}
		},
		original: {
			count: ja,
			getItem: Xa,
			appendData: Ya
		},
		typedArray: {
			persistent: !1,
			pure: !0,
			count: function() {
				return this._data ? this._data.length / this._dimSize: 0
			},
			getItem: function(t) {
				t -= this._offset;
				for (var e = [], i = this._dimSize * t, n = 0; n < this._dimSize; n++) e[n] = this._data[i + n];
				return e
			},
			appendData: function(t) {
				this._data = t
			},
			clean: function() {
				this._offset += this.count(),
				this._data = null
			}
		}
	},
	oM = {
		arrayRows: qa,
		objectRows: function(t, e, i, n) {
			return null != i ? t[n] : t
		},
		keyedColumns: qa,
		original: function(t, e, i, n) {
			var o = Ii(t);
			return null != i && o instanceof Array ? o[i] : o
		},
		typedArray: qa
	},
	aM = {
		arrayRows: $a,
		objectRows: function(t, e, i, n) {
			return Ka(t[e], this._dimensionInfos[e])
		},
		keyedColumns: $a,
		original: function(t, e, i, n) {
			var o = t && (null == t.value ? t: t.value);
			return ! this._rawData.pure && Ti(t) && (this.hasItemOption = !0),
			Ka(o instanceof Array ? o[n] : o, this._dimensionInfos[e])
		},
		typedArray: function(t, e, i, n) {
			return t[n]
		}
	},
	rM = /\{@(.+?)\}/g,
	sM = {
		getDataParams: function(t, e) {
			var i = this.getData(e),
			n = this.getRawValue(t, e),
			o = i.getRawIndex(t),
			a = i.getName(t, !0),
			r = i.getRawDataItem(t),
			s = i.getItemVisual(t, "color");
			return {
				componentType: this.mainType,
				componentSubType: this.subType,
				seriesType: "series" === this.mainType ? this.subType: null,
				seriesIndex: this.seriesIndex,
				seriesId: this.id,
				seriesName: this.name,
				name: a,
				dataIndex: o,
				data: r,
				dataType: e,
				value: n,
				color: s,
				marker: jo(s),
				$vars: ["seriesName", "name", "value"]
			}
		},
		getFormattedLabel: function(t, e, i, n, o) {
			e = e || "normal";
			var a = this.getData(i),
			r = a.getItemModel(t),
			s = this.getDataParams(t, i);
			null != n && s.value instanceof Array && (s.value = s.value[n]);
			var l = r.get("normal" === e ? [o || "label", "formatter"] : [e, o || "label", "formatter"]);
			return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? Zo(l, s).replace(rM,
			function(e, i) {
				var n = i.length;
				return "[" === i.charAt(0) && "]" === i.charAt(n - 1) && (i = +i.slice(1, n - 1)),
				Ja(a, t, i)
			}) : void 0
		},
		getRawValue: function(t, e) {
			return Ja(this.getData(e), t)
		},
		formatTooltip: function() {}
	},
	lM = er.prototype;
	lM.perform = function(t) {
		var e = this._upstream,
		i = t && t.skip;
		if (this._dirty && e) {
			var n = this.context;
			n.data = n.outputData = e.context.outputData
		}
		this.__pipeline && (this.__pipeline.currentTask = this);
		var o;
		this._plan && !i && (o = this._plan(this.context)),
		(this._dirty || "reset" === o) && (this._dirty = !1, ir(this, i));
		var a = t && t.step;
		if (this._dueEnd = e ? e._outputDueEnd: this._count ? this._count(this.context) : 1 / 0, this._progress) {
			var r = this._dueIndex,
			s = Math.min(null != a ? this._dueIndex + a: 1 / 0, this._dueEnd); ! i && r < s && this._progress({
				start: r,
				end: s
			},
			this.context),
			this._dueIndex = s;
			var l = null != this._settedOutputEnd ? this._settedOutputEnd: s;
			this._outputDueEnd = l
		} else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd: this._dueEnd;
		return this.unfinished()
	},
	lM.dirty = function() {
		this._dirty = !0,
		this._onDirty && this._onDirty(this.context)
	},
	lM.unfinished = function() {
		return this._progress && this._dueIndex < this._dueEnd
	},
	lM.pipe = function(t) { (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
	},
	lM.dispose = function() {
		this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
	},
	lM.getUpstream = function() {
		return this._upstream
	},
	lM.getDownstream = function() {
		return this._downstream
	},
	lM.setOutputEnd = function(t) {
		this._outputDueEnd = this._settedOutputEnd = t
	};
	var hM = Pi(),
	uM = IS.extend({
		type: "series.__base__",
		seriesIndex: 0,
		coordinateSystem: null,
		defaultOption: null,
		legendDataProvider: null,
		visualColorAccessPath: "itemStyle.color",
		layoutMode: null,
		init: function(t, e, i, n) {
			this.seriesIndex = this.componentIndex,
			this.dataTask = tr({
				count: ar,
				reset: rr
			}),
			this.dataTask.context = {
				model: this
			},
			this.mergeDefaultAndTheme(t, i),
			ua(this);
			var o = this.getInitialData(t, i);
			lr(o, this),
			this.dataTask.context.data = o,
			hM(this).dataBeforeProcessed = o,
			nr(this)
		},
		mergeDefaultAndTheme: function(t, e) {
			var i = this.layoutMode,
			o = i ? ea(t) : {},
			a = this.subType;
			IS.hasClass(a) && (a += "Series"),
			n(t, e.getTheme().get(this.subType)),
			n(t, this.getDefaultOption()),
			Mi(t, "label", ["show"]),
			this.fillDataTextStyle(t.data),
			i && ta(t, o, i)
		},
		mergeOption: function(t, e) {
			t = n(this.option, t, !0),
			this.fillDataTextStyle(t.data);
			var i = this.layoutMode;
			i && ta(this.option, t, i),
			ua(this);
			var o = this.getInitialData(t, e);
			lr(o, this),
			this.dataTask.dirty(),
			this.dataTask.context.data = o,
			hM(this).dataBeforeProcessed = o,
			nr(this)
		},
		fillDataTextStyle: function(t) {
			if (t) for (var e = ["show"], i = 0; i < t.length; i++) t[i] && t[i].label && Mi(t[i], "label", e)
		},
		getInitialData: function() {},
		appendData: function(t) {
			this.getRawData().appendData(t.data)
		},
		getData: function(t) {
			var e = ur(this);
			if (e) {
				var i = e.context.data;
				return null == t ? i: i.getLinkedData(t)
			}
			return hM(this).data
		},
		setData: function(t) {
			var e = ur(this);
			if (e) {
				var i = e.context;
				i.data !== t && e.isOverallFilter && e.setOutputEnd(t.count()),
				i.outputData = t,
				e !== this.dataTask && (i.data = t)
			}
			hM(this).data = t
		},
		getSource: function() {
			return la(this)
		},
		getRawData: function() {
			return hM(this).dataBeforeProcessed
		},
		getBaseAxis: function() {
			var t = this.coordinateSystem;
			return t && t.getBaseAxis && t.getBaseAxis()
		},
		formatTooltip: function(t, e, i) {
			function n(t) {
				return Ho(Wo(t))
			}
			var o = this.getData(),
			a = o.mapDimension("defaultedTooltip", !0),
			r = a.length,
			s = this.getRawValue(t),
			l = y(s),
			h = o.getItemVisual(t, "color");
			w(h) && h.colorStops && (h = (h.colorStops[0] || {}).color),
			h = h || "transparent";
			var u = r > 1 || l && !r ?
			function(i) {
				function n(t, i) {
					var n = o.getDimensionInfo(i);
					if (n && !1 !== n.otherDims.tooltip) {
						var a = n.type,
						l = jo({
							color: h,
							type: "subItem"
						}),
						u = (r ? l + Ho(n.displayName || "-") + ": ": "") + Ho("ordinal" === a ? t + "": "time" === a ? e ? "": Xo("yyyy/MM/dd hh:mm:ss", t) : Wo(t));
						u && s.push(u)
					}
				}
				var r = p(i,
				function(t, e, i) {
					var n = o.getDimensionInfo(i);
					return t |= n && !1 !== n.tooltip && null != n.displayName
				},
				0),
				s = [];
				return a.length ? d(a,
				function(e) {
					n(Ja(o, t, e), e)
				}) : d(i, n),
				(r ? "<br/>": "") + s.join(r ? "<br/>": ", ")
			} (s) : n(r ? Ja(o, t, a[0]) : l ? s[0] : s),
			c = jo(h),
			f = o.getName(t),
			g = this.name;
			return g === vw && (g = ""),
			g = g ? Ho(g) + (e ? ": ": "<br/>") : "",
			e ? c + g + u: g + c + (f ? Ho(f) + ": " + u: u)
		},
		isAnimationEnabled: function() {
			if (_x.node) return ! 1;
			var t = this.getShallow("animation");
			return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1),
			t
		},
		restoreData: function() {
			this.dataTask.dirty()
		},
		getColorFromPalette: function(t, e, i) {
			var n = this.ecModel,
			o = CS.getColorFromPalette.call(this, t, e, i);
			return o || (o = n.getColorFromPalette(t, e, i)),
			o
		},
		coordDimToDataDim: function(t) {
			return this.getRawData().mapDimension(t, !0)
		},
		getProgressive: function() {
			return this.get("progressive")
		},
		getProgressiveThreshold: function() {
			return this.get("progressiveThreshold")
		},
		getAxisTooltipData: null,
		getTooltipPosition: null,
		pipeTask: null,
		preventIncremental: null,
		pipelineContext: null
	});
	u(uM, sM),
	u(uM, CS);
	var cM = function() {
		this.group = new S_,
		this.uid = So("viewComponent")
	};
	cM.prototype = {
		constructor: cM,
		init: function(t, e) {},
		render: function(t, e, i, n) {},
		dispose: function() {}
	};
	var dM = cM.prototype;
	dM.updateView = dM.updateLayout = dM.updateVisual = function(t, e, i, n) {},
	Vi(cM),
	Hi(cM, {
		registerWhenExtend: !0
	});
	var fM = function() {
		var t = Pi();
		return function(e) {
			var i = t(e),
			n = e.pipelineContext,
			o = i.large,
			a = i.incrementalRender,
			r = i.large = n.large,
			s = i.incrementalRender = n.incrementalRender;
			return (o ^ r || a ^ s) && "reset"
		}
	},
	pM = Pi(),
	gM = fM();
	cr.prototype = {
		type: "chart",
		init: function(t, e) {},
		render: function(t, e, i, n) {},
		highlight: function(t, e, i, n) {
			fr(t.getData(), n, "emphasis")
		},
		downplay: function(t, e, i, n) {
			fr(t.getData(), n, "normal")
		},
		remove: function(t, e) {
			this.group.removeAll()
		},
		dispose: function() {},
		incrementalPrepareRender: null,
		incrementalRender: null,
		updateTransform: null
	};
	var mM = cr.prototype;
	mM.updateView = mM.updateLayout = mM.updateVisual = function(t, e, i, n) {
		this.render(t, e, i, n)
	},
	Vi(cr),
	Hi(cr, {
		registerWhenExtend: !0
	}),
	cr.markUpdateMethod = function(t, e) {
		pM(t).updateMethod = e
	};
	var vM = "\0__throttleOriginMethod",
	yM = "\0__throttleRate",
	xM = "\0__throttleType",
	_M = {
		createOnAllSeries: !0,
		performRawSeries: !0,
		reset: function(t, e) {
			var i = t.getData(),
			n = (t.visualColorAccessPath || "itemStyle.color").split("."),
			o = t.get(n) || t.getColorFromPalette(t.get("name"), null, e.getSeriesCount());
			if (i.setVisual("color", o), !e.isSeriesFiltered(t)) {
				"function" != typeof o || o instanceof Ub || i.each(function(e) {
					i.setItemVisual(e, "color", o(t.getDataParams(e)))
				});
				return {
					dataEach: i.hasItemOption ?
					function(t, e) {
						var i = t.getItemModel(e).get(n, !0);
						null != i && t.setItemVisual(e, "color", i)
					}: null
				}
			}
		}
	},
	wM = {
		toolbox: {
			brush: {
				title: {
					rect: "矩形选择",
					polygon: "圈选",
					lineX: "横向选择",
					lineY: "纵向选择",
					keep: "保持选择",
					clear: "清除选择"
				}
			},
			dataView: {
				title: "数据视图",
				lang: ["数据视图", "关闭", "刷新"]
			},
			dataZoom: {
				title: {
					zoom: "区域缩放",
					back: "区域缩放还原"
				}
			},
			magicType: {
				title: {
					line: "切换为折线图",
					bar: "切换为柱状图",
					stack: "切换为堆叠",
					tiled: "切换为平铺"
				}
			},
			restore: {
				title: "还原"
			},
			saveAsImage: {
				title: "保存为图片",
				lang: ["右键另存为图片"]
			}
		},
		series: {
			typeNames: {
				pie: "饼图",
				bar: "柱状图",
				line: "折线图",
				scatter: "散点图",
				effectScatter: "涟漪散点图",
				radar: "雷达图",
				tree: "树图",
				treemap: "矩形树图",
				boxplot: "箱型图",
				candlestick: "K线图",
				k: "K线图",
				heatmap: "热力图",
				map: "地图",
				parallel: "平行坐标图",
				lines: "线图",
				graph: "关系图",
				sankey: "桑基图",
				funnel: "漏斗图",
				gauge: "仪表盘图",
				pictorialBar: "象形柱图",
				themeRiver: "主题河流图",
				sunburst: "旭日图"
			}
		},
		aria: {
			general: {
				withTitle: "这是一个关于“{title}”的图表。",
				withoutTitle: "这是一个图表，"
			},
			series: {
				single: {
					prefix: "",
					withName: "图表类型是{seriesType}，表示{seriesName}。",
					withoutName: "图表类型是{seriesType}。"
				},
				multiple: {
					prefix: "它由{seriesCount}个图表系列组成。",
					withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
					withoutName: "第{seriesId}个系列是一个{seriesType}，",
					separator: {
						middle: "；",
						end: "。"
					}
				}
			},
			data: {
				allData: "其数据是——",
				partialData: "其中，前{displayCnt}项是——",
				withName: "{name}的数据是{value}",
				withoutName: "{value}",
				separator: {
					middle: "，",
					end: ""
				}
			}
		}
	},
	bM = function(t, e) {
		function i(t, e) {
			if ("string" != typeof t) return t;
			var i = t;
			return d(e,
			function(t, e) {
				i = i.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
			}),
			i
		}
		function n(t) {
			var e = a.get(t);
			if (null == e) {
				for (var i = t.split("."), n = wM.aria, o = 0; o < i.length; ++o) n = n[i[o]];
				return n
			}
			return e
		}
		function o(t) {
			return wM.series.typeNames[t] || "自定义图"
		}
		var a = e.getModel("aria");
		if (a.get("show")) if (a.get("description")) t.setAttribute("aria-label", a.get("description"));
		else {
			var r = 0;
			e.eachSeries(function(t, e) {++r
			},
			this);
			var s, l = a.get("data.maxCount") || 10,
			h = a.get("series.maxCount") || 10,
			u = Math.min(r, h);
			if (! (r < 1)) {
				var c = function() {
					var t = e.getModel("title").option;
					return t && t.length && (t = t[0]),
					t && t.text
				} ();
				s = c ? i(n("general.withTitle"), {
					title: c
				}) : n("general.withoutTitle");
				var f = [];
				s += i(n(r > 1 ? "series.multiple.prefix": "series.single.prefix"), {
					seriesCount: r
				}),
				e.eachSeries(function(t, e) {
					if (e < u) {
						var a, s = t.get("name"),
						h = "series." + (r > 1 ? "multiple": "single") + ".";
						a = i(a = n(s ? h + "withName": h + "withoutName"), {
							seriesId: t.seriesIndex,
							seriesName: t.get("name"),
							seriesType: o(t.subType)
						});
						var c = t.getData();
						window.data = c,
						c.count() > l ? a += i(n("data.partialData"), {
							displayCnt: l
						}) : a += n("data.allData");
						for (var d = [], p = 0; p < c.count(); p++) if (p < l) {
							var g = c.getName(p),
							m = Ja(c, p);
							d.push(i(n(g ? "data.withName": "data.withoutName"), {
								name: g,
								value: m
							}))
						}
						a += d.join(n("data.separator.middle")) + n("data.separator.end"),
						f.push(a)
					}
				}),
				s += f.join(n("series.multiple.separator.middle")) + n("series.multiple.separator.end"),
				t.setAttribute("aria-label", s)
			}
		}
	},
	SM = Math.PI,
	MM = _r.prototype;
	MM.getPerformArgs = function(t, e) {
		if (t.__pipeline) {
			var i = this._pipelineMap.get(t.__pipeline.id),
			n = i.context;
			return {
				step: !e && i.progressiveEnabled && (!n || n.incrementalRender) && t.__idxInPipeline > i.bockIndex ? i.step: null
			}
		}
	},
	MM.getPipeline = function(t) {
		return this._pipelineMap.get(t)
	},
	MM.updateStreamModes = function(t, e) {
		var i = this._pipelineMap.get(t.uid),
		n = t.getData().count(),
		o = i.progressiveEnabled && e.incrementalPrepareRender && n >= i.threshold,
		a = t.get("large") && n >= t.get("largeThreshold");
		t.pipelineContext = i.context = {
			incrementalRender: o,
			large: a
		}
	},
	MM.restorePipelines = function(t) {
		var e = this,
		i = e._pipelineMap = z();
		t.eachSeries(function(t) {
			var n = t.getProgressive(),
			o = t.uid;
			i.set(o, {
				id: o,
				head: null,
				tail: null,
				threshold: t.getProgressiveThreshold(),
				progressiveEnabled: n && !(t.preventIncremental && t.preventIncremental()),
				bockIndex: -1,
				step: n || 700,
				count: 0
			}),
			Pr(e, t, t.dataTask)
		})
	},
	MM.prepareStageTasks = function(t, e) {
		var i = this._stageTaskMap,
		n = this.ecInstance.getModel(),
		o = this.api;
		d(t,
		function(t) {
			var e = i.get(t.uid) || i.set(t.uid, []);
			t.reset && br(this, t, e, n, o),
			t.overallReset && Sr(this, t, e, n, o)
		},
		this)
	},
	MM.prepareView = function(t, e, i, n) {
		var o = t.renderTask,
		a = o.context;
		a.model = e,
		a.ecModel = i,
		a.api = n,
		o.__block = !t.incrementalPrepareRender,
		Pr(this, e, o)
	},
	MM.performDataProcessorTasks = function(t, e, i) {
		wr(this, t, e, i, {
			block: !0
		})
	},
	MM.performVisualTasks = function(t, e, i, n) {
		wr(this, t, e, i, n)
	},
	MM.performSeriesTasks = function(t) {
		var e;
		t.eachSeries(function(t) {
			e |= t.dataTask.perform()
		}),
		this.unfinished |= e
	},
	MM.plan = function() {
		this._pipelineMap.each(function(t) {
			var e = t.tail;
			do {
				if (e.__block) {
					t.bockIndex = e.__idxInPipeline;
					break
				}
				e = e.getUpstream()
			} while ( e )
		})
	};
	var IM = MM.updatePayload = function(t, e) {
		"remain" !== e && (t.context.payload = e)
	};
	_r.wrapStageHandler = function(t, e) {
		return x(t) && (t = {
			overallReset: t,
			seriesType: Or(t)
		}),
		t.uid = So("stageHandler"),
		e && (t.visualType = e),
		t
	};
	var TM, AM = {},
	DM = {};
	Nr(AM, WS),
	Nr(DM, Ta),
	AM.eachSeriesByType = AM.eachRawSeriesByType = function(t) {
		TM = t
	},
	AM.eachComponent = function(t) {
		"series" === t.mainType && t.subType && (TM = t.subType)
	};
	var CM = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
	LM = {
		color: CM,
		colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], CM]
	},
	kM = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
	PM = {
		color: kM,
		backgroundColor: "#333",
		tooltip: {
			axisPointer: {
				lineStyle: {
					color: "#eee"
				},
				crossStyle: {
					color: "#eee"
				}
			}
		},
		legend: {
			textStyle: {
				color: "#eee"
			}
		},
		textStyle: {
			color: "#eee"
		},
		title: {
			textStyle: {
				color: "#eee"
			}
		},
		toolbox: {
			iconStyle: {
				normal: {
					borderColor: "#eee"
				}
			}
		},
		dataZoom: {
			textStyle: {
				color: "#eee"
			}
		},
		visualMap: {
			textStyle: {
				color: "#eee"
			}
		},
		timeline: {
			lineStyle: {
				color: "#eee"
			},
			itemStyle: {
				normal: {
					color: kM[1]
				}
			},
			label: {
				normal: {
					textStyle: {
						color: "#eee"
					}
				}
			},
			controlStyle: {
				normal: {
					color: "#eee",
					borderColor: "#eee"
				}
			}
		},
		timeAxis: {
			axisLine: {
				lineStyle: {
					color: "#eee"
				}
			},
			axisTick: {
				lineStyle: {
					color: "#eee"
				}
			},
			axisLabel: {
				textStyle: {
					color: "#eee"
				}
			},
			splitLine: {
				lineStyle: {
					type: "dashed",
					color: "#aaa"
				}
			},
			splitArea: {
				areaStyle: {
					color: "#eee"
				}
			}
		},
		logAxis: {
			axisLine: {
				lineStyle: {
					color: "#eee"
				}
			},
			axisTick: {
				lineStyle: {
					color: "#eee"
				}
			},
			axisLabel: {
				textStyle: {
					color: "#eee"
				}
			},
			splitLine: {
				lineStyle: {
					type: "dashed",
					color: "#aaa"
				}
			},
			splitArea: {
				areaStyle: {
					color: "#eee"
				}
			}
		},
		valueAxis: {
			axisLine: {
				lineStyle: {
					color: "#eee"
				}
			},
			axisTick: {
				lineStyle: {
					color: "#eee"
				}
			},
			axisLabel: {
				textStyle: {
					color: "#eee"
				}
			},
			splitLine: {
				lineStyle: {
					type: "dashed",
					color: "#aaa"
				}
			},
			splitArea: {
				areaStyle: {
					color: "#eee"
				}
			}
		},
		categoryAxis: {
			axisLine: {
				lineStyle: {
					color: "#eee"
				}
			},
			axisTick: {
				lineStyle: {
					color: "#eee"
				}
			},
			axisLabel: {
				textStyle: {
					color: "#eee"
				}
			},
			splitLine: {
				lineStyle: {
					type: "dashed",
					color: "#aaa"
				}
			},
			splitArea: {
				areaStyle: {
					color: "#eee"
				}
			}
		},
		line: {
			symbol: "circle"
		},
		graph: {
			color: kM
		},
		gauge: {
			title: {
				textStyle: {
					color: "#eee"
				}
			}
		},
		candlestick: {
			itemStyle: {
				normal: {
					color: "#FD1050",
					color0: "#0CF49B",
					borderColor: "#FD1050",
					borderColor0: "#0CF49B"
				}
			}
		}
	};
	PM.categoryAxis.splitLine.show = !1;
	var OM = k,
	NM = d,
	EM = x,
	zM = w,
	RM = IS.parseClassType,
	BM = {
		zrender: "4.0.1"
	},
	VM = 1e3,
	GM = 1e3,
	WM = 3e3,
	FM = {
		PROCESSOR: {
			FILTER: VM,
			STATISTIC: 5e3
		},
		VISUAL: {
			LAYOUT: GM,
			GLOBAL: 2e3,
			CHART: WM,
			COMPONENT: 4e3,
			BRUSH: 5e3
		}
	},
	HM = "__flagInMainProcess",
	ZM = "__optionUpdated",
	UM = /^[a-zA-Z0-9_]+$/;
	zr.prototype.on = Er("on"),
	zr.prototype.off = Er("off"),
	zr.prototype.one = Er("one"),
	u(zr, Hx);
	var jM = Rr.prototype;
	jM._onframe = function() {
		if (!this._disposed) {
			var t = this._scheduler;
			if (this[ZM]) {
				var e = this[ZM].silent;
				this[HM] = !0,
				Vr(this),
				XM.update.call(this),
				this[HM] = !1,
				this[ZM] = !1,
				Zr.call(this, e),
				Ur.call(this, e)
			} else if (t.unfinished) {
				var i = 1,
				n = this._model;
				this._api;
				t.unfinished = !1;
				do {
					var o = +new Date;
					t.performSeriesTasks(n), t.performDataProcessorTasks(KM, n), Fr(this, n), t.performVisualTasks(tI, n), Kr(this, this._model, 0, "remain"), i -= +new Date - o
				} while ( i > 0 && t . unfinished );
				t.unfinished || (this._zr && this._zr.flush(), this.trigger("finished"))
			}
		}
	},
	jM.getDom = function() {
		return this._dom
	},
	jM.getZr = function() {
		return this._zr
	},
	jM.setOption = function(t, e, i) {
		var n;
		if (zM(e) && (i = e.lazyUpdate, n = e.silent, e = e.notMerge), this[HM] = !0, !this._model || e) {
			var o = new Da(this._api),
			a = this._theme,
			r = this._model = new WS(null, null, a, o);
			r.scheduler = this._scheduler,
			r.init(null, null, a, o)
		}
		this._model.setOption(t, JM),
		i ? (this[ZM] = {
			silent: n
		},
		this[HM] = !1) : (Vr(this), XM.update.call(this), this._zr.flush(), this[ZM] = !1, this[HM] = !1, Zr.call(this, n), Ur.call(this, n))
	},
	jM.setTheme = function() {
		console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
	},
	jM.getModel = function() {
		return this._model
	},
	jM.getOption = function() {
		return this._model && this._model.getOption()
	},
	jM.getWidth = function() {
		return this._zr.getWidth()
	},
	jM.getHeight = function() {
		return this._zr.getHeight()
	},
	jM.getDevicePixelRatio = function() {
		return this._zr.painter.dpr || window.devicePixelRatio || 1
	},
	jM.getRenderedCanvas = function(t) {
		if (_x.canvasSupported) { (t = t || {}).pixelRatio = t.pixelRatio || 1,
			t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
			var e = this._zr;
			return d(e.storage.getDisplayList(),
			function(t) {
				t.stopAnimation(!0)
			}),
			e.painter.getRenderedCanvas(t)
		}
	},
	jM.getSvgDataUrl = function() {
		if (_x.svgSupported) {
			var t = this._zr;
			return d(t.storage.getDisplayList(),
			function(t) {
				t.stopAnimation(!0)
			}),
			t.painter.pathToSvg()
		}
	},
	jM.getDataURL = function(t) {
		var e = (t = t || {}).excludeComponents,
		i = this._model,
		n = [],
		o = this;
		NM(e,
		function(t) {
			i.eachComponent({
				mainType: t
			},
			function(t) {
				var e = o._componentsMap[t.__viewId];
				e.group.ignore || (n.push(e), e.group.ignore = !0)
			})
		});
		var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
		return NM(n,
		function(t) {
			t.group.ignore = !1
		}),
		a
	},
	jM.getConnectedDataURL = function(t) {
		if (_x.canvasSupported) {
			var e = this.group,
			n = Math.min,
			o = Math.max;
			if (oI[e]) {
				var a = 1 / 0,
				r = 1 / 0,
				s = -1 / 0,
				l = -1 / 0,
				h = [],
				u = t && t.pixelRatio || 1;
				d(nI,
				function(u, c) {
					if (u.group === e) {
						var d = u.getRenderedCanvas(i(t)),
						f = u.getDom().getBoundingClientRect();
						a = n(f.left, a),
						r = n(f.top, r),
						s = o(f.right, s),
						l = o(f.bottom, l),
						h.push({
							dom: d,
							left: f.left,
							top: f.top
						})
					}
				});
				var c = (s *= u) - (a *= u),
				f = (l *= u) - (r *= u),
				p = Px();
				p.width = c,
				p.height = f;
				var g = _i(p);
				return NM(h,
				function(t) {
					var e = new Je({
						style: {
							x: t.left * u - a,
							y: t.top * u - r,
							image: t.dom
						}
					});
					g.add(e)
				}),
				g.refreshImmediately(),
				p.toDataURL("image/" + (t && t.type || "png"))
			}
			return this.getDataURL(t)
		}
	},
	jM.convertToPixel = v(Br, "convertToPixel"),
	jM.convertFromPixel = v(Br, "convertFromPixel"),
	jM.containPixel = function(t, e) {
		var i;
		return t = Oi(this._model, t),
		d(t,
		function(t, n) {
			n.indexOf("Models") >= 0 && d(t,
			function(t) {
				var o = t.coordinateSystem;
				if (o && o.containPoint) i |= !!o.containPoint(e);
				else if ("seriesModels" === n) {
					var a = this._chartsMap[t.__viewId];
					a && a.containPoint && (i |= a.containPoint(e, t))
				}
			},
			this)
		},
		this),
		!!i
	},
	jM.getVisual = function(t, e) {
		var i = (t = Oi(this._model, t, {
			defaultMainType: "series"
		})).seriesModel.getData(),
		n = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside: t.hasOwnProperty("dataIndex") ? i.indexOfRawIndex(t.dataIndex) : null;
		return null != n ? i.getItemVisual(n, e) : i.getVisual(e)
	},
	jM.getViewOfComponentModel = function(t) {
		return this._componentsMap[t.__viewId]
	},
	jM.getViewOfSeriesModel = function(t) {
		return this._chartsMap[t.__viewId]
	};
	var XM = {
		prepareAndUpdate: function(t) {
			Vr(this),
			XM.update.call(this, t)
		},
		update: function(t) {
			var e = this._model,
			i = this._api,
			n = this._zr,
			o = this._coordSysMgr,
			a = this._scheduler;
			if (e) {
				e.restoreData(t),
				a.performSeriesTasks(e),
				o.create(e, i),
				a.performDataProcessorTasks(KM, e, t),
				Fr(this, e),
				Xr(e),
				o.update(e, i),
				Yr(e),
				a.performVisualTasks(tI, e, t),
				qr(this, e, i, t);
				var r = e.get("backgroundColor") || "transparent",
				s = n.painter;
				if (s.isSingleCanvas && s.isSingleCanvas()) n.configLayer(0, {
					clearColor: r
				});
				else {
					if (!_x.canvasSupported) {
						var l = Dt(r);
						r = Rt(l, "rgb"),
						0 === l[3] && (r = "transparent")
					}
					r.colorStops || r.image ? (n.configLayer(0, {
						clearColor: r
					}), this.__hasGradientOrPatternBg = !0, this._dom.style.background = "transparent") : (this.__hasGradientOrPatternBg && n.configLayer(0, {
						clearColor: null
					}), this.__hasGradientOrPatternBg = !1, this._dom.style.background = r)
				}
				Jr(e, i)
			}
		},
		updateTransform: function(t) {
			var e = this._model,
			i = this,
			n = this._api;
			if (e) {
				var o = [];
				e.eachComponent(function(a, r) {
					var s = i.getViewOfComponentModel(r);
					if (s && s.__alive) if (s.updateTransform) {
						var l = s.updateTransform(r, e, n, t);
						l && l.update && o.push(s)
					} else o.push(s)
				});
				var a = z();
				e.eachSeries(function(o) {
					var r = i._chartsMap[o.__viewId];
					if (r.updateTransform) {
						var s = r.updateTransform(o, e, n, t);
						s && s.update && a.set(o.uid, 1)
					} else a.set(o.uid, 1)
				}),
				Yr(e),
				this._scheduler.performVisualTasks(tI, e, t, {
					setDirty: !0,
					dirtyMap: a
				}),
				Kr(i, e, 0, t, a),
				Jr(e, this._api)
			}
		},
		updateView: function(t) {
			var e = this._model;
			e && (cr.markUpdateMethod(t, "updateView"), Yr(e), this._scheduler.performVisualTasks(tI, e, t, {
				setDirty: !0
			}), qr(this, this._model, this._api, t), Jr(e, this._api))
		},
		updateVisual: function(t) {
			XM.update.call(this, t)
		},
		updateLayout: function(t) {
			XM.update.call(this, t)
		}
	};
	jM.resize = function(t) {
		this._zr.resize(t);
		var e = this._model;
		this._loadingFX && this._loadingFX.resize(),
		e && Wr(this, e.resetOption("media"), t && t.silent)
	},
	jM.showLoading = function(t, e) {
		if (zM(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), iI[t]) {
			var i = iI[t](this._api, e),
			n = this._zr;
			this._loadingFX = i,
			n.add(i)
		}
	},
	jM.hideLoading = function() {
		this._loadingFX && this._zr.remove(this._loadingFX),
		this._loadingFX = null
	},
	jM.makeActionFromEvent = function(t) {
		var e = a({},
		t);
		return e.type = $M[t.type],
		e
	},
	jM.dispatchAction = function(t, e) {
		zM(e) || (e = {
			silent: !!e
		}),
		qM[t.type] && this._model && (this[HM] ? this._pendingActions.push(t) : (Hr.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && _x.browser.weChat && this._throttledZrFlush(), Zr.call(this, e.silent), Ur.call(this, e.silent)))
	},
	jM.appendData = function(t) {
		var e = t.seriesIndex;
		this.getModel().getSeriesByIndex(e).appendData(t),
		this._scheduler.unfinished = !0
	},
	jM.on = Er("on"),
	jM.off = Er("off"),
	jM.one = Er("one");
	var YM = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
	jM._initEvents = function() {
		NM(YM,
		function(t) {
			this._zr.on(t,
			function(e) {
				var i, n = this.getModel(),
				o = e.target;
				if ("globalout" === t) i = {};
				else if (o && null != o.dataIndex) {
					var r = o.dataModel || n.getSeriesByIndex(o.seriesIndex);
					i = r && r.getDataParams(o.dataIndex, o.dataType) || {}
				} else o && o.eventData && (i = a({},
				o.eventData));
				i && (i.event = e, i.type = t, this.trigger(t, i))
			},
			this)
		},
		this),
		NM($M,
		function(t, e) {
			this._messageCenter.on(e,
			function(t) {
				this.trigger(e, t)
			},
			this)
		},
		this)
	},
	jM.isDisposed = function() {
		return this._disposed
	},
	jM.clear = function() {
		this.setOption({
			series: []
		},
		!0)
	},
	jM.dispose = function() {
		if (!this._disposed) {
			this._disposed = !0,
			Ei(this.getDom(), sI, "");
			var t = this._api,
			e = this._model;
			NM(this._componentsViews,
			function(i) {
				i.dispose(e, t)
			}),
			NM(this._chartsViews,
			function(i) {
				i.dispose(e, t)
			}),
			this._zr.dispose(),
			delete nI[this.id]
		}
	},
	u(Rr, Hx);
	var qM = {},
	$M = {},
	KM = [],
	JM = [],
	QM = [],
	tI = [],
	eI = {},
	iI = {},
	nI = {},
	oI = {},
	aI = new Date - 0,
	rI = new Date - 0,
	sI = "_echarts_instance_",
	lI = {},
	hI = os;
	ds(2e3, _M),
	ss(eM),
	ps("default",
	function(t, e) {
		r(e = e || {},
		{
			text: "loading",
			color: "#c23531",
			textColor: "#000",
			maskColor: "rgba(255, 255, 255, 0.8)",
			zlevel: 0
		});
		var i = new Vb({
			style: {
				fill: e.maskColor
			},
			zlevel: e.zlevel,
			z: 1e4
		}),
		n = new Hb({
			shape: {
				startAngle: -SM / 2,
				endAngle: -SM / 2 + .1,
				r: 10
			},
			style: {
				stroke: e.color,
				lineCap: "round",
				lineWidth: 5
			},
			zlevel: e.zlevel,
			z: 10001
		}),
		o = new Vb({
			style: {
				fill: "none",
				text: e.text,
				textPosition: "right",
				textDistance: 10,
				textFill: e.textColor
			},
			zlevel: e.zlevel,
			z: 10001
		});
		n.animateShape(!0).when(1e3, {
			endAngle: 3 * SM / 2
		}).start("circularInOut"),
		n.animateShape(!0).when(1e3, {
			startAngle: 3 * SM / 2
		}).delay(300).start("circularInOut");
		var a = new S_;
		return a.add(n),
		a.add(o),
		a.add(i),
		a.resize = function() {
			var e = t.getWidth() / 2,
			a = t.getHeight() / 2;
			n.setShape({
				cx: e,
				cy: a
			});
			var r = n.shape.r;
			o.setShape({
				x: e - r,
				y: a - r,
				width: 2 * r,
				height: 2 * r
			}),
			i.setShape({
				x: 0,
				y: 0,
				width: t.getWidth(),
				height: t.getHeight()
			})
		},
		a.resize(),
		a
	}),
	hs({
		type: "highlight",
		event: "highlight",
		update: "highlight"
	},
	B),
	hs({
		type: "downplay",
		event: "downplay",
		update: "downplay"
	},
	B),
	rs("light", LM),
	rs("dark", PM);
	var uI = {};
	ws.prototype = {
		constructor: ws,
		add: function(t) {
			return this._add = t,
			this
		},
		update: function(t) {
			return this._update = t,
			this
		},
		remove: function(t) {
			return this._remove = t,
			this
		},
		execute: function() {
			var t = this._old,
			e = this._new,
			i = {},
			n = [],
			o = [];
			for (bs(t, {},
			n, "_oldKeyGetter", this), bs(e, i, o, "_newKeyGetter", this), a = 0; a < t.length; a++) null != (s = i[r = n[a]]) ? ((h = s.length) ? (1 === h && (i[r] = null), s = s.unshift()) : i[r] = null, this._update && this._update(s, a)) : this._remove && this._remove(a);
			for (var a = 0; a < o.length; a++) {
				var r = o[a];
				if (i.hasOwnProperty(r)) {
					var s = i[r];
					if (null == s) continue;
					if (s.length) for (var l = 0,
					h = s.length; l < h; l++) this._add && this._add(s[l]);
					else this._add && this._add(s)
				}
			}
		}
	};
	var cI = z(["tooltip", "label", "itemName", "itemId", "seriesName"]),
	dI = w,
	fI = "undefined",
	pI = typeof window === fI ? global: window,
	gI = "e\0\0",
	mI = {
		float: typeof pI.Float64Array === fI ? Array: pI.Float64Array,
		int: typeof pI.Int32Array === fI ? Array: pI.Int32Array,
		ordinal: Array,
		number: Array,
		time: Array
	},
	vI = ["stackedOn", "hasItemOption", "_nameList", "_idList", "_rawData", "_rawExtent", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
	yI = function(t, e) {
		t = t || ["x", "y"];
		for (var i = {},
		n = [], o = 0; o < t.length; o++) {
			var a, r = {};
			"string" == typeof t[o] ? r = {
				name: a = t[o],
				coordDim: a,
				coordDimIndex: 0,
				stackable: !1,
				type: "float"
			}: (a = (r = t[o]).name, r.type = r.type || "float", r.coordDim || (r.coordDim = a, r.coordDimIndex = 0)),
			r.otherDims = r.otherDims || {},
			n.push(a),
			i[a] = r,
			r.index = o
		}
		this.dimensions = n,
		this._dimensionInfos = i,
		this.hostModel = e,
		this.dataType,
		this._indices = null,
		this._count = 0,
		this._rawCount = 0,
		this._storage = {},
		this._nameList = [],
		this._idList = [],
		this._optionModels = [],
		this.stackedOn = null,
		this._visual = {},
		this._layout = {},
		this._itemVisuals = [],
		this.hasItemVisual = {},
		this._itemLayouts = [],
		this._graphicEls = [],
		this._chunkSize = 1e5,
		this._chunkCount = 0,
		this._rawData,
		this._rawExtent = {},
		this._extent = {},
		this._approximateExtent = {},
		this._dimensionsSummary = Ss(this)
	},
	xI = yI.prototype;
	xI.type = "list",
	xI.hasItemOption = !0,
	xI.getDimension = function(t) {
		return isNaN(t) || (t = this.dimensions[t] || t),
		t
	},
	xI.getDimensionInfo = function(t) {
		return this._dimensionInfos[this.getDimension(t)]
	},
	xI.getDimensionsOnCoord = function() {
		return this._dimensionsSummary.dataDimsOnCoord.slice()
	},
	xI.mapDimension = function(t, e) {
		var i = this._dimensionsSummary.encode[t];
		return ! 0 === e ? i && i.slice() || [] : i ? i[e || 0] : null
	},
	xI.initData = function(t, e, i) { (ra.isInstance(t) || c(t)) && (t = new Ua(t, this.dimensions.length)),
		this._rawData = t,
		this._storage = {},
		this._indices = null,
		this._nameList = e || [],
		this._idList = [],
		this._nameRepeatCount = {},
		i || (this.hasItemOption = !1),
		this.defaultDimValueGetter = aM[this._rawData.getSource().sourceFormat],
		this._dimValueGetter = i = i || this.defaultDimValueGetter,
		this._rawExtent = {},
		this._initDataFromProvider(0, t.count()),
		t.pure && (this.hasItemOption = !1)
	},
	xI.getProvider = function() {
		return this._rawData
	},
	xI.appendData = function(t) {
		var e = this._rawData,
		i = this.count();
		e.appendData(t);
		var n = e.count();
		e.persistent || (n += i),
		this._initDataFromProvider(i, n)
	},
	xI._initDataFromProvider = function(t, e) {
		if (! (t >= e)) {
			for (var i, n = this._chunkSize,
			o = this._rawData,
			a = this._storage,
			r = this.dimensions,
			s = this._dimensionInfos,
			l = this._nameList,
			h = this._idList,
			u = this._rawExtent,
			c = this._nameRepeatCount = {},
			d = this._chunkCount,
			f = d - 1,
			p = 0; p < r.length; p++) {
				u[I = r[p]] || (u[I] = [1 / 0, -1 / 0]);
				var g = s[I];
				0 === g.otherDims.itemName && (i = this._nameDimIdx = p),
				0 === g.otherDims.itemId && (this._idDimIdx = p);
				var m = mI[g.type];
				a[I] || (a[I] = []);
				var v = a[I][f];
				if (v && v.length < n) {
					for (var y = new m(Math.min(e - f * n, n)), x = 0; x < v.length; x++) y[x] = v[x];
					a[I][f] = y
				}
				for (M = d * n; M < e; M += n) a[I].push(new m(Math.min(e - M, n)));
				this._chunkCount = a[I].length
			}
			for (var _ = t; _ < e; _++) {
				for (var w = o.getItem(_), b = Math.floor(_ / n), S = _ % n, M = 0; M < r.length; M++) {
					var I = r[M],
					T = a[I][b],
					A = this._dimValueGetter(w, I, _, M);
					T[S] = A,
					A < u[I][0] && (u[I][0] = A),
					A > u[I][1] && (u[I][1] = A)
				}
				if (!o.pure) {
					var D = l[_];
					w && !D && (null != i ? D = this._getNameFromStore(_) : null != w.name && (l[_] = D = w.name));
					var C = null == w ? null: w.id;
					null == C && null != D && (c[D] = c[D] || 0, C = D, c[D] > 0 && (C += "__ec__" + c[D]), c[D]++),
					null != C && (h[_] = C)
				}
			} ! o.persistent && o.clean && o.clean(),
			this._rawCount = this._count = e,
			this._extent = {}
		}
	},
	xI._getNameFromStore = function(t) {
		var e = this._nameDimIdx;
		if (null != e) {
			var i = this._chunkSize,
			n = Math.floor(t / i),
			o = t % i,
			a = this.dimensions[e],
			r = this._dimensionInfos[a].ordinalMeta;
			if (r) return r.categories[t];
			var s = this._storage[a][n];
			return s && s[o]
		}
	},
	xI._getIdFromStore = function(t) {
		var e = this._idDimIdx;
		if (null != e) {
			var i = this._chunkSize,
			n = Math.floor(t / i),
			o = t % i,
			a = this.dimensions[e],
			r = this._dimensionInfos[a].ordinalMeta;
			if (r) return r.categories[t];
			var s = this._storage[a][n];
			return s && s[o]
		}
	},
	xI.count = function() {
		return this._count
	},
	xI.getIndices = function() {
		if (this._indices) return new(t = this._indices.constructor)(this._indices.buffer, 0, this._count);
		for (var t = Ts(this), e = new t(this.count()), i = 0; i < e.length; i++) e[i] = i;
		return e
	},
	xI.get = function(t, e, i) {
		if (! (e >= 0 && e < this._count)) return NaN;
		var n = this._storage;
		if (!n[t]) return NaN;
		e = this.getRawIndex(e);
		var o = Math.floor(e / this._chunkSize),
		a = e % this._chunkSize,
		r = n[t][o][a];
		if (i) {
			var s = this._dimensionInfos[t];
			if (s && s.stackable) for (var l = this.stackedOn; l;) {
				var h = l.get(t, e); (r >= 0 && h > 0 || r <= 0 && h < 0) && (r += h),
				l = l.stackedOn
			}
		}
		return r
	},
	xI._getFast = function(t, e) {
		var i = Math.floor(e / this._chunkSize),
		n = e % this._chunkSize;
		return this._storage[t][i][n]
	},
	xI.getValues = function(t, e, i) {
		var n = [];
		y(t) || (i = e, e = t, t = this.dimensions);
		for (var o = 0,
		a = t.length; o < a; o++) n.push(this.get(t[o], e, i));
		return n
	},
	xI.hasValue = function(t) {
		for (var e = this._dimensionsSummary.dataDimsOnCoord,
		i = this._dimensionInfos,
		n = 0,
		o = e.length; n < o; n++) if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t))) return ! 1;
		return ! 0
	},
	xI.getDataExtent = function(t, e) {
		t = this.getDimension(t);
		var i = this._storage[t],
		n = [1 / 0, -1 / 0];
		if (e = (e || !1) && this.isStacked(t), !i) return n;
		var o, a = this.count(),
		r = [t, !!e].join("_");
		if (!this._indices && !e) return this._rawExtent[t].slice();
		if (o = this._extent[r]) return o.slice();
		for (var s = (o = n)[0], l = o[1], h = 0; h < a; h++) {
			var u = e ? this.get(t, h, !0) : this._getFast(t, this.getRawIndex(h));
			u < s && (s = u),
			u > l && (l = u)
		}
		return o = [s, l],
		this._extent[r] = o,
		o
	},
	xI.getApproximateExtent = function(t, e) {
		return t = this.getDimension(t),
		this._approximateExtent[t] || this.getDataExtent(t, e)
	},
	xI.setApproximateExtent = function(t, e, i) {
		e = this.getDimension(e),
		this._approximateExtent[e] = t.slice()
	},
	xI.isStacked = function(t) {
		var e = this._dimensionInfos[t];
		return e && e.stackable && this.stackedOn
	},
	xI.getSum = function(t, e) {
		var i = 0;
		if (this._storage[t]) for (var n = 0,
		o = this.count(); n < o; n++) {
			var a = this.get(t, n, e);
			isNaN(a) || (i += a)
		}
		return i
	},
	xI.indexOf = function(t, e) {
		var i = this._storage[t],
		n = this._chunkSize;
		if (i) for (var o = 0,
		a = this.count(); o < a; o++) {
			var r = o % n;
			if (i[Math.floor(o / n)][r] === e) return o
		}
		return - 1
	},
	xI.indexOfName = function(t) {
		for (var e = 0,
		i = this.count(); e < i; e++) if (this.getName(e) === t) return e;
		return - 1
	},
	xI.indexOfRawIndex = function(t) {
		if (!this._indices) return t;
		if (t >= this._rawCount || t < 0) return - 1;
		var e = this._indices,
		i = e[t];
		if (null != i && i < this._count && i === t) return t;
		for (var n = 0,
		o = this._count - 1; n <= o;) {
			var a = (n + o) / 2 | 0;
			if (e[a] < t) n = a + 1;
			else {
				if (! (e[a] > t)) return a;
				o = a - 1
			}
		}
		return - 1
	},
	xI.indicesOfNearest = function(t, e, i, n) {
		var o = [];
		if (!this._storage[t]) return o;
		null == n && (n = 1 / 0);
		for (var a = Number.MAX_VALUE,
		r = -1,
		s = 0,
		l = this.count(); s < l; s++) {
			var h = e - this.get(t, s, i),
			u = Math.abs(h);
			h <= n && u <= a && ((u < a || h >= 0 && r < 0) && (a = u, r = h, o.length = 0), o.push(s))
		}
		return o
	},
	xI.getRawIndex = Cs,
	xI.getRawDataItem = function(t) {
		if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
		for (var e = [], i = 0; i < this.dimensions.length; i++) {
			var n = this.dimensions[i];
			e.push(this.get(n, t))
		}
		return e
	},
	xI.getName = function(t) {
		var e = this.getRawIndex(t);
		return this._nameList[e] || this._getNameFromStore(e) || ""
	},
	xI.getId = function(t) {
		return ks(this, this.getRawIndex(t))
	},
	xI.each = function(t, e, i, n) {
		if (this._count) {
			"function" == typeof t && (n = i, i = e, e = t, t = []);
			var o = (t = f(Ps(t), this.getDimension, this)).length;
			n = n || this;
			for (var a = 0; a < this.count(); a++) switch (o) {
			case 0:
				e.call(n, a);
				break;
			case 1:
				e.call(n, this.get(t[0], a, i), a);
				break;
			case 2:
				e.call(n, this.get(t[0], a, i), this.get(t[1], a, i), a);
				break;
			default:
				for (var r = 0,
				s = []; r < o; r++) s[r] = this.get(t[r], a, i);
				s[r] = a,
				e.apply(n, s)
			}
		}
	},
	xI.filterSelf = function(t, e, i, n) {
		if (this._count) {
			"function" == typeof t && (n = i, i = e, e = t, t = []),
			i = i || !1,
			n = n || this,
			t = f(Ps(t), this.getDimension, this);
			for (var o = this.count(), a = new(Ts(this))(o), r = [], s = t.length, l = 0, h = t[0], u = 0; u < o; u++) {
				var c, d = this.getRawIndex(u);
				if (0 === s) c = e.call(n, u);
				else if (1 === s) {
					var p = i ? this.get(h, u, !0) : this._getFast(h, d);
					c = e.call(n, p, u)
				} else {
					for (var g = 0; g < s; g++) r[g] = i ? this.get(t[g], u, !0) : this._getFast(h, d);
					r[g] = u,
					c = e.apply(n, r)
				}
				c && (a[l++] = d)
			}
			return l < o && (this._indices = a),
			this._count = l,
			this._extent = {},
			this.getRawIndex = this._indices ? Ls: Cs,
			this
		}
	},
	xI.selectRange = function(t, e) {
		if (this._count) {
			e = e || !1;
			var i = [];
			for (var n in t) t.hasOwnProperty(n) && i.push(n);
			var o = i.length;
			if (o) {
				var a = this.count(),
				r = new(Ts(this))(a),
				s = 0,
				l = i[0],
				h = t[l][0],
				u = t[l][1],
				c = !1;
				if (!this._indices && !e) {
					var d = 0;
					if (1 === o) {
						for (var f = this._storage[i[0]], p = 0; p < this._chunkCount; p++) for (var g = f[p], m = Math.min(this._count - p * this._chunkSize, this._chunkSize), v = 0; v < m; v++)(b = g[v]) >= h && b <= u && (r[s++] = d),
						d++;
						c = !0
					} else if (2 === o) {
						for (var f = this._storage[l], y = this._storage[i[1]], x = t[i[1]][0], _ = t[i[1]][1], p = 0; p < this._chunkCount; p++) for (var g = f[p], w = y[p], m = Math.min(this._count - p * this._chunkSize, this._chunkSize), v = 0; v < m; v++) {
							var b = g[v],
							S = w[v];
							b >= h && b <= u && S >= x && S <= _ && (r[s++] = d),
							d++
						}
						c = !0
					}
				}
				if (!c) if (1 === o) {
					e = e || this.isStacked(l);
					for (v = 0; v < a; v++) {
						I = this.getRawIndex(v); (b = e ? this.get(l, v, !0) : this._getFast(l, I)) >= h && b <= u && (r[s++] = I)
					}
				} else for (v = 0; v < a; v++) {
					for (var M = !0,
					I = this.getRawIndex(v), p = 0; p < o; p++) {
						var T = i[p]; ((b = e ? this.get(T, v, !0) : this._getFast(n, I)) < t[T][0] || b > t[T][1]) && (M = !1)
					}
					M && (r[s++] = this.getRawIndex(v))
				}
				return s < a && (this._indices = r),
				this._count = s,
				this._extent = {},
				this.getRawIndex = this._indices ? Ls: Cs,
				this
			}
		}
	},
	xI.mapArray = function(t, e, i, n) {
		"function" == typeof t && (n = i, i = e, e = t, t = []);
		var o = [];
		return this.each(t,
		function() {
			o.push(e && e.apply(this, arguments))
		},
		i, n),
		o
	},
	xI.map = function(t, e, i, n) {
		var o = Os(this, t = f(Ps(t), this.getDimension, this));
		o._indices = this._indices,
		o.getRawIndex = o._indices ? Ls: Cs;
		for (var a = o._storage,
		r = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = 0; c < h; c++) {
			for (var d = 0; d < l; d++) u[d] = this.get(t[d], c, i);
			u[l] = c;
			var p = e && e.apply(n, u);
			if (null != p) {
				"object" != typeof p && (r[0] = p, p = r);
				for (var g = this.getRawIndex(c), m = Math.floor(g / s), v = g % s, y = 0; y < p.length; y++) {
					var x = a[t[y]];
					x && (x[m][v] = p[y])
				}
			}
		}
		return o
	},
	xI.downSample = function(t, e, i, n) {
		for (var o = Os(this, [t]), a = o._storage, r = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = new(Ts(this))(h), d = 0, f = 0; f < h; f += s) {
			s > h - f && (s = h - f, r.length = s);
			for (var p = 0; p < s; p++) {
				var g = this.getRawIndex(f + p),
				m = Math.floor(g / u),
				v = g % u;
				r[p] = l[m][v]
			}
			var y = i(r),
			x = this.getRawIndex(Math.min(f + n(r, y) || 0, h - 1)),
			_ = x % u;
			l[Math.floor(x / u)][_] = y,
			c[d++] = x
		}
		return o._count = d,
		o._indices = c,
		o.getRawIndex = Ls,
		o
	},
	xI.getItemModel = function(t) {
		var e = this.hostModel;
		return new _o(this.getRawDataItem(t), e, e && e.ecModel)
	},
	xI.diff = function(t) {
		var e = this;
		return new ws(t ? t.getIndices() : [], this.getIndices(),
		function(e) {
			return ks(t, e)
		},
		function(t) {
			return ks(e, t)
		})
	},
	xI.getVisual = function(t) {
		var e = this._visual;
		return e && e[t]
	},
	xI.setVisual = function(t, e) {
		if (dI(t)) for (var i in t) t.hasOwnProperty(i) && this.setVisual(i, t[i]);
		else this._visual = this._visual || {},
		this._visual[t] = e
	},
	xI.setLayout = function(t, e) {
		if (dI(t)) for (var i in t) t.hasOwnProperty(i) && this.setLayout(i, t[i]);
		else this._layout[t] = e
	},
	xI.getLayout = function(t) {
		return this._layout[t]
	},
	xI.getItemLayout = function(t) {
		return this._itemLayouts[t]
	},
	xI.setItemLayout = function(t, e, i) {
		this._itemLayouts[t] = i ? a(this._itemLayouts[t] || {},
		e) : e
	},
	xI.clearItemLayouts = function() {
		this._itemLayouts.length = 0
	},
	xI.getItemVisual = function(t, e, i) {
		var n = this._itemVisuals[t],
		o = n && n[e];
		return null != o || i ? o: this.getVisual(e)
	},
	xI.setItemVisual = function(t, e, i) {
		var n = this._itemVisuals[t] || {},
		o = this.hasItemVisual;
		if (this._itemVisuals[t] = n, dI(e)) for (var a in e) e.hasOwnProperty(a) && (n[a] = e[a], o[a] = !0);
		else n[e] = i,
		o[e] = !0
	},
	xI.clearAllVisual = function() {
		this._visual = {},
		this._itemVisuals = [],
		this.hasItemVisual = {}
	};
	var _I = function(t) {
		t.seriesIndex = this.seriesIndex,
		t.dataIndex = this.dataIndex,
		t.dataType = this.dataType
	};
	xI.setItemGraphicEl = function(t, e) {
		var i = this.hostModel;
		e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(_I, e)),
		this._graphicEls[t] = e
	},
	xI.getItemGraphicEl = function(t) {
		return this._graphicEls[t]
	},
	xI.eachItemGraphicEl = function(t, e) {
		d(this._graphicEls,
		function(i, n) {
			i && t && t.call(e, i, n)
		})
	},
	xI.cloneShallow = function(t) {
		if (!t) {
			var e = f(this.dimensions, this.getDimensionInfo, this);
			t = new yI(e, this.hostModel)
		}
		if (t._storage = this._storage, Ds(t, this), this._indices) {
			var n = this._indices.constructor;
			t._indices = new n(this._indices)
		} else t._indices = null;
		return t.getRawIndex = t._indices ? Ls: Cs,
		t._extent = i(this._extent),
		t._approximateExtent = i(this._approximateExtent),
		t
	},
	xI.wrapMethod = function(t, e) {
		var i = this[t];
		"function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
			var t = i.apply(this, arguments);
			return e.apply(this, [t].concat(C(arguments)))
		})
	},
	xI.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"],
	xI.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
	var wI = function(t, e) {
		return e = e || {},
		Es(e.coordDimensions || [], t, {
			dimsDef: e.dimensionsDefine || t.dimensionsDefine,
			encodeDef: e.encodeDefine || t.encodeDefine,
			dimCount: e.dimensionsCount,
			extraPrefix: e.extraPrefix,
			extraFromZero: e.extraFromZero
		})
	};
	Fs.prototype.parse = function(t) {
		return t
	},
	Fs.prototype.getSetting = function(t) {
		return this._setting[t]
	},
	Fs.prototype.contain = function(t) {
		var e = this._extent;
		return t >= e[0] && t <= e[1]
	},
	Fs.prototype.normalize = function(t) {
		var e = this._extent;
		return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
	},
	Fs.prototype.scale = function(t) {
		var e = this._extent;
		return t * (e[1] - e[0]) + e[0]
	},
	Fs.prototype.unionExtent = function(t) {
		var e = this._extent;
		t[0] < e[0] && (e[0] = t[0]),
		t[1] > e[1] && (e[1] = t[1])
	},
	Fs.prototype.unionExtentFromData = function(t, e) {
		this.unionExtent(t.getApproximateExtent(e, !0))
	},
	Fs.prototype.getExtent = function() {
		return this._extent.slice()
	},
	Fs.prototype.setExtent = function(t, e) {
		var i = this._extent;
		isNaN(t) || (i[0] = t),
		isNaN(e) || (i[1] = e)
	},
	Fs.prototype.getTicksLabels = function() {
		for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++) t.push(this.getLabel(e[i]));
		return t
	},
	Fs.prototype.isBlank = function() {
		return this._isBlank
	},
	Fs.prototype.setBlank = function(t) {
		this._isBlank = t
	},
	Vi(Fs),
	Hi(Fs, {
		registerWhenExtend: !0
	}),
	Hs.createByAxisModel = function(t) {
		var e = t.option,
		i = e.data,
		n = i && f(i, Us);
		return new Hs({
			categories: n,
			needCollect: !n,
			deduplication: !1 !== e.dedplication
		})
	};
	var bI = Hs.prototype;
	bI.getOrdinal = function(t) {
		return Zs(this).get(t)
	},
	bI.parseAndCollect = function(t) {
		var e, i = this._needCollect;
		if ("string" != typeof t && !i) return t;
		if (i && !this._deduplication) return e = this.categories.length,
		this.categories[e] = t,
		e;
		var n = Zs(this);
		return null == (e = n.get(t)) && (i ? (e = this.categories.length, this.categories[e] = t, n.set(t, e)) : e = NaN),
		e
	};
	var SI = Fs.prototype,
	MI = Fs.extend({
		type: "ordinal",
		init: function(t, e) {
			t && !y(t) || (t = new Hs({
				categories: t
			})),
			this._ordinalMeta = t,
			this._extent = e || [0, t.categories.length - 1]
		},
		parse: function(t) {
			return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
		},
		contain: function(t) {
			return t = this.parse(t),
			SI.contain.call(this, t) && null != this._ordinalMeta.categories[t]
		},
		normalize: function(t) {
			return SI.normalize.call(this, this.parse(t))
		},
		scale: function(t) {
			return Math.round(SI.scale.call(this, t))
		},
		getTicks: function() {
			for (var t = [], e = this._extent, i = e[0]; i <= e[1];) t.push(i),
			i++;
			return t
		},
		getLabel: function(t) {
			return this._ordinalMeta.categories[t]
		},
		count: function() {
			return this._extent[1] - this._extent[0] + 1
		},
		unionExtentFromData: function(t, e) {
			this.unionExtent(t.getApproximateExtent(e, !1))
		},
		niceTicks: B,
		niceExtent: B
	});
	MI.create = function() {
		return new MI
	};
	var II = Ao,
	TI = Ao,
	AI = Fs.extend({
		type: "interval",
		_interval: 0,
		_intervalPrecision: 2,
		setExtent: function(t, e) {
			var i = this._extent;
			isNaN(t) || (i[0] = parseFloat(t)),
			isNaN(e) || (i[1] = parseFloat(e))
		},
		unionExtent: function(t) {
			var e = this._extent;
			t[0] < e[0] && (e[0] = t[0]),
			t[1] > e[1] && (e[1] = t[1]),
			AI.prototype.setExtent.call(this, e[0], e[1])
		},
		getInterval: function() {
			return this._interval
		},
		setInterval: function(t) {
			this._interval = t,
			this._niceExtent = this._extent.slice(),
			this._intervalPrecision = Xs(t)
		},
		getTicks: function() {
			return $s(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
		},
		getTicksLabels: function() {
			for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++) t.push(this.getLabel(e[i]));
			return t
		},
		getLabel: function(t, e) {
			if (null == t) return "";
			var i = e && e.precision;
			return null == i ? i = Lo(t) || 0 : "auto" === i && (i = this._intervalPrecision),
			t = TI(t, i, !0),
			Wo(t)
		},
		niceTicks: function(t, e, i) {
			t = t || 5;
			var n = this._extent,
			o = n[1] - n[0];
			if (isFinite(o)) {
				o < 0 && (o = -o, n.reverse());
				var a = js(n, t, e, i);
				this._intervalPrecision = a.intervalPrecision,
				this._interval = a.interval,
				this._niceExtent = a.niceTickExtent
			}
		},
		niceExtent: function(t) {
			var e = this._extent;
			if (e[0] === e[1]) if (0 !== e[0]) {
				var i = e[0];
				t.fixMax ? e[0] -= i / 2 : (e[1] += i / 2, e[0] -= i / 2)
			} else e[1] = 1;
			var n = e[1] - e[0];
			isFinite(n) || (e[0] = 0, e[1] = 1),
			this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
			var o = this._interval;
			t.fixMin || (e[0] = TI(Math.floor(e[0] / o) * o)),
			t.fixMax || (e[1] = TI(Math.ceil(e[1] / o) * o))
		}
	});
	AI.create = function() {
		return new AI
	};
	var DI = "__ec_stack_",
	CI = AI.prototype,
	LI = Math.ceil,
	kI = Math.floor,
	PI = function(t, e, i, n) {
		for (; i < n;) {
			var o = i + n >>> 1;
			t[o][1] < e ? i = o + 1 : n = o
		}
		return i
	},
	OI = AI.extend({
		type: "time",
		getLabel: function(t) {
			var e = this._stepLvl,
			i = new Date(t);
			return Xo(e[0], i, this.getSetting("useUTC"))
		},
		niceExtent: function(t) {
			var e = this._extent;
			if (e[0] === e[1] && (e[0] -= 864e5, e[1] += 864e5), e[1] === -1 / 0 && e[0] === 1 / 0) {
				var i = new Date;
				e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()),
				e[0] = e[1] - 864e5
			}
			this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
			var n = this._interval;
			t.fixMin || (e[0] = Ao(kI(e[0] / n) * n)),
			t.fixMax || (e[1] = Ao(LI(e[1] / n) * n))
		},
		niceTicks: function(t, e, i) {
			t = t || 10;
			var n = this._extent,
			o = n[1] - n[0],
			a = o / t;
			null != e && a < e && (a = e),
			null != i && a > i && (a = i);
			var r = NI.length,
			s = PI(NI, a, 0, r),
			l = NI[Math.min(s, r - 1)],
			h = l[1];
			"year" === l[0] && (h *= Bo(o / h / t, !0));
			var u = this.getSetting("useUTC") ? 0 : 60 * new Date( + n[0] || +n[1]).getTimezoneOffset() * 1e3,
			c = [Math.round(LI((n[0] - u) / h) * h + u), Math.round(kI((n[1] - u) / h) * h + u)];
			qs(c, n),
			this._stepLvl = l,
			this._interval = h,
			this._niceExtent = c
		},
		parse: function(t) {
			return + Eo(t)
		}
	});
	d(["contain", "normalize"],
	function(t) {
		OI.prototype[t] = function(e) {
			return CI[t].call(this, this.parse(e))
		}
	});
	var NI = [["hh:mm:ss", 1e3], ["hh:mm:ss", 5e3], ["hh:mm:ss", 1e4], ["hh:mm:ss", 15e3], ["hh:mm:ss", 3e4], ["hh:mm\nMM-dd", 6e4], ["hh:mm\nMM-dd", 3e5], ["hh:mm\nMM-dd", 6e5], ["hh:mm\nMM-dd", 9e5], ["hh:mm\nMM-dd", 18e5], ["hh:mm\nMM-dd", 36e5], ["hh:mm\nMM-dd", 72e5], ["hh:mm\nMM-dd", 216e5], ["hh:mm\nMM-dd", 432e5], ["MM-dd\nyyyy", 864e5], ["MM-dd\nyyyy", 1728e5], ["MM-dd\nyyyy", 2592e5], ["MM-dd\nyyyy", 3456e5], ["MM-dd\nyyyy", 432e6], ["MM-dd\nyyyy", 5184e5], ["week", 6048e5], ["MM-dd\nyyyy", 864e6], ["week", 12096e5], ["week", 18144e5], ["month", 26784e5], ["week", 36288e5], ["month", 53568e5], ["week", 36288e5], ["quarter", 8208e6], ["month", 107136e5], ["month", 13392e6], ["half-year", 16416e6], ["month", 214272e5], ["month", 26784e6], ["year", 32832e6]];
	OI.create = function(t) {
		return new OI({
			useUTC: t.ecModel.get("useUTC")
		})
	};
	var EI = Fs.prototype,
	zI = AI.prototype,
	RI = Lo,
	BI = Ao,
	VI = Math.floor,
	GI = Math.ceil,
	WI = Math.pow,
	FI = Math.log,
	HI = Fs.extend({
		type: "log",
		base: 10,
		$constructor: function() {
			Fs.apply(this, arguments),
			this._originalScale = new AI
		},
		getTicks: function() {
			var t = this._originalScale,
			e = this._extent,
			i = t.getExtent();
			return f(zI.getTicks.call(this),
			function(n) {
				var o = Ao(WI(this.base, n));
				return o = n === e[0] && t.__fixMin ? nl(o, i[0]) : o,
				o = n === e[1] && t.__fixMax ? nl(o, i[1]) : o
			},
			this)
		},
		getLabel: zI.getLabel,
		scale: function(t) {
			return t = EI.scale.call(this, t),
			WI(this.base, t)
		},
		setExtent: function(t, e) {
			var i = this.base;
			t = FI(t) / FI(i),
			e = FI(e) / FI(i),
			zI.setExtent.call(this, t, e)
		},
		getExtent: function() {
			var t = this.base,
			e = EI.getExtent.call(this);
			e[0] = WI(t, e[0]),
			e[1] = WI(t, e[1]);
			var i = this._originalScale,
			n = i.getExtent();
			return i.__fixMin && (e[0] = nl(e[0], n[0])),
			i.__fixMax && (e[1] = nl(e[1], n[1])),
			e
		},
		unionExtent: function(t) {
			this._originalScale.unionExtent(t);
			var e = this.base;
			t[0] = FI(t[0]) / FI(e),
			t[1] = FI(t[1]) / FI(e),
			EI.unionExtent.call(this, t)
		},
		unionExtentFromData: function(t, e) {
			this.unionExtent(t.getApproximateExtent(e, !0,
			function(t) {
				return t > 0
			}))
		},
		niceTicks: function(t) {
			t = t || 10;
			var e = this._extent,
			i = e[1] - e[0];
			if (! (i === 1 / 0 || i <= 0)) {
				var n = zo(i);
				for (t / i * n <= .5 && (n *= 10); ! isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0;) n *= 10;
				var o = [Ao(GI(e[0] / n) * n), Ao(VI(e[1] / n) * n)];
				this._interval = n,
				this._niceExtent = o
			}
		},
		niceExtent: function(t) {
			zI.niceExtent.call(this, t);
			var e = this._originalScale;
			e.__fixMin = t.fixMin,
			e.__fixMax = t.fixMax
		}
	});
	d(["contain", "normalize"],
	function(t) {
		HI.prototype[t] = function(e) {
			return e = FI(e) / FI(this.base),
			EI[t].call(this, e)
		}
	}),
	HI.create = function() {
		return new HI
	};
	var ZI = {
		getFormattedLabels: function() {
			return hl(this.axis, this.get("axisLabel.formatter"))
		},
		getMin: function(t) {
			var e = this.option,
			i = t || null == e.rangeStart ? e.min: e.rangeStart;
			return this.axis && null != i && "dataMin" !== i && "function" != typeof i && !I(i) && (i = this.axis.scale.parse(i)),
			i
		},
		getMax: function(t) {
			var e = this.option,
			i = t || null == e.rangeEnd ? e.max: e.rangeEnd;
			return this.axis && null != i && "dataMax" !== i && "function" != typeof i && !I(i) && (i = this.axis.scale.parse(i)),
			i
		},
		getNeedCrossZero: function() {
			var t = this.option;
			return null == t.rangeStart && null == t.rangeEnd && !t.scale
		},
		getCoordSysModel: B,
		setRange: function(t, e) {
			this.option.rangeStart = t,
			this.option.rangeEnd = e
		},
		resetRange: function() {
			this.option.rangeStart = this.option.rangeEnd = null
		}
	},
	UI = Nn({
		type: "triangle",
		shape: {
			cx: 0,
			cy: 0,
			width: 0,
			height: 0
		},
		buildPath: function(t, e) {
			var i = e.cx,
			n = e.cy,
			o = e.width / 2,
			a = e.height / 2;
			t.moveTo(i, n - a),
			t.lineTo(i + o, n + a),
			t.lineTo(i - o, n + a),
			t.closePath()
		}
	}),
	jI = Nn({
		type: "diamond",
		shape: {
			cx: 0,
			cy: 0,
			width: 0,
			height: 0
		},
		buildPath: function(t, e) {
			var i = e.cx,
			n = e.cy,
			o = e.width / 2,
			a = e.height / 2;
			t.moveTo(i, n - a),
			t.lineTo(i + o, n),
			t.lineTo(i, n + a),
			t.lineTo(i - o, n),
			t.closePath()
		}
	}),
	XI = Nn({
		type: "pin",
		shape: {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		},
		buildPath: function(t, e) {
			var i = e.x,
			n = e.y,
			o = e.width / 5 * 3,
			a = Math.max(o, e.height),
			r = o / 2,
			s = r * r / (a - r),
			l = n - a + r + s,
			h = Math.asin(s / r),
			u = Math.cos(h) * r,
			c = Math.sin(h),
			d = Math.cos(h),
			f = .6 * r,
			p = .7 * r;
			t.moveTo(i - u, l + s),
			t.arc(i, l, r, Math.PI - h, 2 * Math.PI + h),
			t.bezierCurveTo(i + u - c * f, l + s + d * f, i, n - p, i, n),
			t.bezierCurveTo(i, n - p, i - u + c * f, l + s + d * f, i - u, l + s),
			t.closePath()
		}
	}),
	YI = Nn({
		type: "arrow",
		shape: {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		},
		buildPath: function(t, e) {
			var i = e.height,
			n = e.width,
			o = e.x,
			a = e.y,
			r = n / 3 * 2;
			t.moveTo(o, a),
			t.lineTo(o + r, a + i),
			t.lineTo(o, a + i / 4 * 3),
			t.lineTo(o - r, a + i),
			t.lineTo(o, a),
			t.closePath()
		}
	}),
	qI = {
		line: function(t, e, i, n, o) {
			o.x1 = t,
			o.y1 = e + n / 2,
			o.x2 = t + i,
			o.y2 = e + n / 2
		},
		rect: function(t, e, i, n, o) {
			o.x = t,
			o.y = e,
			o.width = i,
			o.height = n
		},
		roundRect: function(t, e, i, n, o) {
			o.x = t,
			o.y = e,
			o.width = i,
			o.height = n,
			o.r = Math.min(i, n) / 4
		},
		square: function(t, e, i, n, o) {
			var a = Math.min(i, n);
			o.x = t,
			o.y = e,
			o.width = a,
			o.height = a
		},
		circle: function(t, e, i, n, o) {
			o.cx = t + i / 2,
			o.cy = e + n / 2,
			o.r = Math.min(i, n) / 2
		},
		diamond: function(t, e, i, n, o) {
			o.cx = t + i / 2,
			o.cy = e + n / 2,
			o.width = i,
			o.height = n
		},
		pin: function(t, e, i, n, o) {
			o.x = t + i / 2,
			o.y = e + n / 2,
			o.width = i,
			o.height = n
		},
		arrow: function(t, e, i, n, o) {
			o.x = t + i / 2,
			o.y = e + n / 2,
			o.width = i,
			o.height = n
		},
		triangle: function(t, e, i, n, o) {
			o.cx = t + i / 2,
			o.cy = e + n / 2,
			o.width = i,
			o.height = n
		}
	},
	$I = {};
	d({
		line: Gb,
		rect: Vb,
		roundRect: Vb,
		square: Vb,
		circle: Lb,
		diamond: jI,
		pin: XI,
		arrow: YI,
		triangle: UI
	},
	function(t, e) {
		$I[e] = new t
	});
	var KI = Nn({
		type: "symbol",
		shape: {
			symbolType: "",
			x: 0,
			y: 0,
			width: 0,
			height: 0
		},
		beforeBrush: function() {
			var t = this.style;
			"pin" === this.shape.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
		},
		buildPath: function(t, e, i) {
			var n = e.symbolType,
			o = $I[n];
			"none" !== e.symbolType && (o || (o = $I[n = "rect"]), qI[n](e.x, e.y, e.width, e.height, o.shape), o.buildPath(t, o.shape, i))
		}
	}),
	JI = (Object.freeze || Object)({
		createList: function(t) {
			return Bs(t.getSource(), t)
		},
		getLayoutRect: Ko,
		createScale: function(t, e) {
			var i = e;
			_o.isInstance(e) || u(i = new _o(e), ZI);
			var n = sl(i);
			return n.setExtent(t[0], t[1]),
			rl(n, i),
			n
		},
		mixinAxisModelCommonMethods: function(t) {
			u(t, ZI)
		},
		completeDimensions: Es,
		createDimensions: wI,
		createSymbol: dl
	}),
	QI = 1e-8;
	gl.prototype = {
		constructor: gl,
		properties: null,
		getBoundingRect: function() {
			var t = this._rect;
			if (t) return t;
			for (var e = Number.MAX_VALUE,
			i = [e, e], n = [ - e, -e], o = [], a = [], r = this.geometries, s = 0; s < r.length; s++)"polygon" === r[s].type && (an(r[s].exterior, o, a), tt(i, i, o), et(n, n, a));
			return 0 === s && (i[0] = i[1] = n[0] = n[1] = 0),
			this._rect = new Kt(i[0], i[1], n[0] - i[0], n[1] - i[1])
		},
		contain: function(t) {
			var e = this.getBoundingRect(),
			i = this.geometries;
			if (!e.contain(t[0], t[1])) return ! 1;
			t: for (var n = 0,
			o = i.length; n < o; n++) if ("polygon" === i[n].type) {
				var a = i[n].exterior,
				r = i[n].interiors;
				if (pl(a, t[0], t[1])) {
					for (var s = 0; s < (r ? r.length: 0); s++) if (pl(r[s])) continue t;
					return ! 0
				}
			}
			return ! 1
		},
		transformTo: function(t, e, i, n) {
			var o = this.getBoundingRect(),
			a = o.width / o.height;
			i ? n || (n = i / a) : i = a * n;
			for (var r = new Kt(t, e, i, n), s = o.calculateTransform(r), l = this.geometries, h = 0; h < l.length; h++) if ("polygon" === l[h].type) {
				for (var u = l[h].exterior, c = l[h].interiors, d = 0; d < u.length; d++) Q(u[d], u[d], s);
				for (var f = 0; f < (c ? c.length: 0); f++) for (d = 0; d < c[f].length; d++) Q(c[f][d], c[f][d], s)
			} (o = this._rect).copy(r),
			this.center = [o.x + o.width / 2, o.y + o.height / 2]
		}
	};
	var tT = function(t) {
		return ml(t),
		f(g(t.features,
		function(t) {
			return t.geometry && t.properties && t.geometry.coordinates.length > 0
		}),
		function(t) {
			var e = t.properties,
			i = t.geometry,
			n = i.coordinates,
			o = [];
			"Polygon" === i.type && o.push({
				type: "polygon",
				exterior: n[0],
				interiors: n.slice(1)
			}),
			"MultiPolygon" === i.type && d(n,
			function(t) {
				t[0] && o.push({
					type: "polygon",
					exterior: t[0],
					interiors: t.slice(1)
				})
			});
			var a = new gl(e.name, o, e.cp);
			return a.properties = e,
			a
		})
	},
	eT = Io,
	iT = [0, 1],
	nT = function(t, e, i) {
		this.dim = t,
		this.scale = e,
		this._extent = i || [0, 0],
		this.inverse = !1,
		this.onBand = !1,
		this._labelInterval
	};
	nT.prototype = {
		constructor: nT,
		contain: function(t) {
			var e = this._extent,
			i = Math.min(e[0], e[1]),
			n = Math.max(e[0], e[1]);
			return t >= i && t <= n
		},
		containData: function(t) {
			return this.contain(this.dataToCoord(t))
		},
		getExtent: function() {
			return this._extent.slice()
		},
		getPixelPrecision: function(t) {
			return ko(t || this.scale.getExtent(), this._extent)
		},
		setExtent: function(t, e) {
			var i = this._extent;
			i[0] = t,
			i[1] = e
		},
		dataToCoord: function(t, e) {
			var i = this._extent,
			n = this.scale;
			return t = n.normalize(t),
			this.onBand && "ordinal" === n.type && yl(i = i.slice(), n.count()),
			eT(t, iT, i, e)
		},
		coordToData: function(t, e) {
			var i = this._extent,
			n = this.scale;
			this.onBand && "ordinal" === n.type && yl(i = i.slice(), n.count());
			var o = eT(t, i, iT, e);
			return this.scale.scale(o)
		},
		pointToData: function(t, e) {},
		getTicksCoords: function(t) {
			if (this.onBand && !t) {
				for (var e = this.getBands(), i = [], n = 0; n < e.length; n++) i.push(e[n][0]);
				return e[n - 1] && i.push(e[n - 1][1]),
				i
			}
			return f(this.scale.getTicks(), this.dataToCoord, this)
		},
		getLabelsCoords: function() {
			return f(this.scale.getTicks(), this.dataToCoord, this)
		},
		getBands: function() {
			for (var t = this.getExtent(), e = [], i = this.scale.count(), n = t[0], o = t[1] - n, a = 0; a < i; a++) e.push([o * a / i + n, o * (a + 1) / i + n]);
			return e
		},
		getBandWidth: function() {
			var t = this._extent,
			e = this.scale.getExtent(),
			i = e[1] - e[0] + (this.onBand ? 1 : 0);
			0 === i && (i = 1);
			var n = Math.abs(t[1] - t[0]);
			return Math.abs(n) / i
		},
		isHorizontal: null,
		getRotate: null,
		getLabelInterval: function() {
			var t = this._labelInterval;
			if (!t) {
				var e = this.model,
				i = e.getModel("axisLabel");
				t = i.get("interval"),
				"category" !== this.type || null != t && "auto" !== t || (t = ll(f(this.scale.getTicks(), this.dataToCoord, this), e.getFormattedLabels(), i.getFont(), this.getRotate ? this.getRotate() : this.isHorizontal && !this.isHorizontal() ? 90 : 0, i.get("rotate"))),
				this._labelInterval = t
			}
			return t
		}
	};
	var oT = tT,
	aT = {};
	d(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"],
	function(t) {
		aT[t] = Ex[t]
	});
	gs({
		type: "dataset",
		defaultOption: {
			seriesLayoutBy: RS,
			sourceHeader: null,
			dimensions: null,
			source: null
		},
		optionUpdated: function() {
			sa(this)
		}
	});
	ms({
		type: "dataset"
	}),
	uM.extend({
		type: "series.line",
		dependencies: ["grid", "polar"],
		getInitialData: function(t, e) {
			return Bs(this.getSource(), this)
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "cartesian2d",
			legendHoverLink: !0,
			hoverAnimation: !0,
			clipOverflow: !0,
			label: {
				position: "top"
			},
			lineStyle: {
				width: 2,
				type: "solid"
			},
			step: !1,
			smooth: !1,
			smoothMonotone: null,
			symbol: "emptyCircle",
			symbolSize: 4,
			symbolRotate: null,
			showSymbol: !0,
			showAllSymbol: !1,
			connectNulls: !1,
			sampling: "none",
			animationEasing: "linear",
			progressive: 0,
			hoverLayerThreshold: 1 / 0
		}
	});
	var rT = bl.prototype;
	rT._createSymbol = function(t, e, i, n) {
		this.removeAll();
		var o = dl(t, -1, -1, 2, 2, e.getItemVisual(i, "color"));
		o.attr({
			z2: 100,
			culling: !0,
			scale: wl(n)
		}),
		o.drift = Sl,
		this._symbolType = t,
		this.add(o)
	},
	rT.stopSymbolAnimation = function(t) {
		this.childAt(0).stopAnimation(t)
	},
	rT.getSymbolPath = function() {
		return this.childAt(0)
	},
	rT.getScale = function() {
		return this.childAt(0).scale
	},
	rT.highlight = function() {
		this.childAt(0).trigger("emphasis")
	},
	rT.downplay = function() {
		this.childAt(0).trigger("normal")
	},
	rT.setZ = function(t, e) {
		var i = this.childAt(0);
		i.zlevel = t,
		i.z = e
	},
	rT.setDraggable = function(t) {
		var e = this.childAt(0);
		e.draggable = t,
		e.cursor = t ? "move": "pointer"
	},
	rT.updateData = function(t, e, i) {
		this.silent = !1;
		var n = t.getItemVisual(e, "symbol") || "circle",
		o = t.hostModel,
		a = _l(t, e),
		r = n !== this._symbolType;
		if (r ? this._createSymbol(n, t, e, a) : ((s = this.childAt(0)).silent = !1, co(s, {
			scale: wl(a)
		},
		o, e)), this._updateCommon(t, e, a, i), r) {
			var s = this.childAt(0),
			l = i && i.fadeIn,
			h = {
				scale: s.scale.slice()
			};
			l && (h.style = {
				opacity: s.style.opacity
			}),
			s.scale = [0, 0],
			l && (s.style.opacity = 0),
			fo(s, h, o, e)
		}
		this._seriesModel = o
	};
	var sT = ["itemStyle"],
	lT = ["emphasis", "itemStyle"],
	hT = ["label"],
	uT = ["emphasis", "label"];
	rT._updateCommon = function(t, e, i, n) {
		var o = this.childAt(0),
		r = t.hostModel,
		s = t.getItemVisual(e, "color");
		"image" !== o.type && o.useStyle({
			strokeNoScale: !0
		});
		var l = n && n.itemStyle,
		h = n && n.hoverItemStyle,
		u = n && n.symbolRotate,
		c = n && n.symbolOffset,
		d = n && n.labelModel,
		f = n && n.hoverLabelModel,
		p = n && n.hoverAnimation,
		g = n && n.cursorStyle;
		if (!n || t.hasItemOption) {
			var m = n && n.itemModel ? n.itemModel: t.getItemModel(e);
			l = m.getModel(sT).getItemStyle(["color"]),
			h = m.getModel(lT).getItemStyle(),
			u = m.getShallow("symbolRotate"),
			c = m.getShallow("symbolOffset"),
			d = m.getModel(hT),
			f = m.getModel(uT),
			p = m.getShallow("hoverAnimation"),
			g = m.getShallow("cursor")
		} else h = a({},
		h);
		var v = o.style;
		o.attr("rotation", (u || 0) * Math.PI / 180 || 0),
		c && o.attr("position", [To(c[0], i[0]), To(c[1], i[1])]),
		g && o.attr("cursor", g),
		o.setColor(s, n && n.symbolInnerColor),
		o.setStyle(l);
		var y = t.getItemVisual(e, "opacity");
		null != y && (v.opacity = y);
		var x = n && n.useNameLabel;
		eo(v, h, d, f, {
			labelFetcher: r,
			labelDataIndex: e,
			defaultText: function(e, i) {
				return x ? t.getName(e) : xl(t, e)
			},
			isRectText: !0,
			autoColor: s
		}),
		o.off("mouseover").off("mouseout").off("emphasis").off("normal"),
		o.hoverStyle = h,
		to(o);
		var _ = wl(i);
		if (p && r.isAnimationEnabled()) {
			var w = function() {
				var t = _[1] / _[0];
				this.animateTo({
					scale: [Math.max(1.1 * _[0], _[0] + 3), Math.max(1.1 * _[1], _[1] + 3 * t)]
				},
				400, "elasticOut")
			},
			b = function() {
				this.animateTo({
					scale: _
				},
				400, "elasticOut")
			};
			o.on("mouseover", w).on("mouseout", b).on("emphasis", w).on("normal", b)
		}
	},
	rT.fadeOut = function(t, e) {
		var i = this.childAt(0);
		this.silent = i.silent = !0,
		!(e && e.keepLabel) && (i.style.text = null),
		co(i, {
			style: {
				opacity: 0
			},
			scale: [0, 0]
		},
		this._seriesModel, this.dataIndex, t)
	},
	h(bl, S_);
	var cT = Ml.prototype;
	cT.updateData = function(t, e) {
		var i = this.group,
		n = t.hostModel,
		o = this._data,
		a = this._symbolCtor,
		r = Tl(t);
		o || i.removeAll(),
		t.diff(o).add(function(n) {
			var o = t.getItemLayout(n);
			if (Il(t, o, n, e)) {
				var s = new a(t, n, r);
				s.attr("position", o),
				t.setItemGraphicEl(n, s),
				i.add(s)
			}
		}).update(function(s, l) {
			var h = o.getItemGraphicEl(l),
			u = t.getItemLayout(s);
			Il(t, u, s, e) ? (h ? (h.updateData(t, s, r), co(h, {
				position: u
			},
			n)) : (h = new a(t, s)).attr("position", u), i.add(h), t.setItemGraphicEl(s, h)) : i.remove(h)
		}).remove(function(t) {
			var e = o.getItemGraphicEl(t);
			e && e.fadeOut(function() {
				i.remove(e)
			})
		}).execute(),
		this._data = t
	},
	cT.isPersistent = function() {
		return ! 0
	},
	cT.updateLayout = function() {
		var t = this._data;
		t && t.eachItemGraphicEl(function(e, i) {
			var n = t.getItemLayout(i);
			e.attr("position", n)
		})
	},
	cT.incrementalPrepareUpdate = function(t) {
		this._seriesScope = Tl(t),
		this._data = null,
		this.group.removeAll()
	},
	cT.incrementalUpdate = function(t, e, i) {
		for (var n = t.start; n < t.end; n++) {
			var o = e.getItemLayout(n);
			if (Il(e, o, n, i)) {
				var a = new this._symbolCtor(e, n, this._seriesScope);
				a.traverse(function(t) {
					t.isGroup || (t.incremental = t.useHoverLayer = !0)
				}),
				a.attr("position", o),
				this.group.add(a),
				e.setItemGraphicEl(n, a)
			}
		}
	},
	cT.remove = function(t) {
		var e = this.group,
		i = this._data;
		i && (t ? i.eachItemGraphicEl(function(t) {
			t.fadeOut(function() {
				e.remove(t)
			})
		}) : e.removeAll())
	};
	var dT = function(t, e, i, n, o, a) {
		for (var r = Cl(t, e), s = [], l = [], h = [], u = [], c = [], d = [], f = [], p = a.dimensions, g = 0; g < r.length; g++) {
			var m = r[g],
			v = !0;
			switch (m.cmd) {
			case "=":
				var y = t.getItemLayout(m.idx),
				x = e.getItemLayout(m.idx1); (isNaN(y[0]) || isNaN(y[1])) && (y = x.slice()),
				s.push(y),
				l.push(x),
				h.push(i[m.idx]),
				u.push(n[m.idx1]),
				f.push(e.getRawIndex(m.idx1));
				break;
			case "+":
				_ = m.idx;
				s.push(o.dataToPoint([e.get(p[0], _, !0), e.get(p[1], _, !0)])),
				l.push(e.getItemLayout(_).slice()),
				h.push(Dl(o, e, _)),
				u.push(n[_]),
				f.push(e.getRawIndex(_));
				break;
			case "-":
				var _ = m.idx,
				w = t.getRawIndex(_);
				w !== _ ? (s.push(t.getItemLayout(_)), l.push(a.dataToPoint([t.get(p[0], _, !0), t.get(p[1], _, !0)])), h.push(i[_]), u.push(Dl(a, t, _)), f.push(w)) : v = !1
			}
			v && (c.push(m), d.push(d.length))
		}
		d.sort(function(t, e) {
			return f[t] - f[e]
		});
		for (var b = [], S = [], M = [], I = [], T = [], g = 0; g < d.length; g++) {
			_ = d[g];
			b[g] = s[_],
			S[g] = l[_],
			M[g] = h[_],
			I[g] = u[_],
			T[g] = c[_]
		}
		return {
			current: b,
			next: S,
			stackedOnCurrent: M,
			stackedOnNext: I,
			status: T
		}
	},
	fT = tt,
	pT = et,
	gT = Z,
	mT = G,
	vT = [],
	yT = [],
	xT = [],
	_T = Mn.extend({
		type: "ec-polyline",
		shape: {
			points: [],
			smooth: 0,
			smoothConstraint: !0,
			smoothMonotone: null,
			connectNulls: !1
		},
		style: {
			fill: null,
			stroke: "#000"
		},
		brush: Pb(Mn.prototype.brush),
		buildPath: function(t, e) {
			var i = e.points,
			n = 0,
			o = i.length,
			a = Pl(i, e.smoothConstraint);
			if (e.connectNulls) {
				for (; o > 0 && Ll(i[o - 1]); o--);
				for (; n < o && Ll(i[n]); n++);
			}
			for (; n < o;) n += kl(t, i, n, o, o, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
		}
	}),
	wT = Mn.extend({
		type: "ec-polygon",
		shape: {
			points: [],
			stackedOnPoints: [],
			smooth: 0,
			stackedOnSmooth: 0,
			smoothConstraint: !0,
			smoothMonotone: null,
			connectNulls: !1
		},
		brush: Pb(Mn.prototype.brush),
		buildPath: function(t, e) {
			var i = e.points,
			n = e.stackedOnPoints,
			o = 0,
			a = i.length,
			r = e.smoothMonotone,
			s = Pl(i, e.smoothConstraint),
			l = Pl(n, e.smoothConstraint);
			if (e.connectNulls) {
				for (; a > 0 && Ll(i[a - 1]); a--);
				for (; o < a && Ll(i[o]); o++);
			}
			for (; o < a;) {
				var h = kl(t, i, o, a, a, 1, s.min, s.max, e.smooth, r, e.connectNulls);
				kl(t, n, o + h - 1, h, a, -1, l.min, l.max, e.stackedOnSmooth, r, e.connectNulls),
				o += h + 1,
				t.closePath()
			}
		}
	});
	cr.extend({
		type: "line",
		init: function() {
			var t = new S_,
			e = new Ml;
			this.group.add(e.group),
			this._symbolDraw = e,
			this._lineGroup = t
		},
		render: function(t, e, i) {
			var n = t.coordinateSystem,
			o = this.group,
			a = t.getData(),
			s = t.getModel("lineStyle"),
			l = t.getModel("areaStyle"),
			h = a.mapArray(a.getItemLayout, !0),
			u = "polar" === n.type,
			c = this._coordSys,
			d = this._symbolDraw,
			f = this._polyline,
			p = this._polygon,
			g = this._lineGroup,
			m = t.get("animation"),
			v = !l.isEmpty(),
			y = Rl(0, n, a, l.get("origin")),
			x = t.get("showSymbol"),
			_ = x && !u && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(a, n),
			w = this._data;
			w && w.eachItemGraphicEl(function(t, e) {
				t.__temp && (o.remove(t), w.setItemGraphicEl(e, null))
			}),
			x || d.remove(),
			o.add(g);
			var b = !u && t.get("step");
			f && c.type === n.type && b === this._step ? (v && !p ? p = this._newPolygon(h, y, n, m) : p && !v && (g.remove(p), p = this._polygon = null), g.setClipPath(Gl(n, !1, t)), x && d.updateData(a, _), a.eachItemGraphicEl(function(t) {
				t.stopAnimation(!0)
			}), Ol(this._stackedOnPoints, y) && Ol(this._points, h) || (m ? this._updateAnimation(a, y, n, i, b) : (b && (h = Wl(h, n, b), y = Wl(y, n, b)), f.setShape({
				points: h
			}), p && p.setShape({
				points: h,
				stackedOnPoints: y
			})))) : (x && d.updateData(a, _), b && (h = Wl(h, n, b), y = Wl(y, n, b)), f = this._newPolyline(h, n, m), v && (p = this._newPolygon(h, y, n, m)), g.setClipPath(Gl(n, !0, t)));
			var S = Fl(a, n) || a.getVisual("color");
			f.useStyle(r(s.getLineStyle(), {
				fill: "none",
				stroke: S,
				lineJoin: "bevel"
			}));
			var M = t.get("smooth");
			if (M = Nl(t.get("smooth")), f.setShape({
				smooth: M,
				smoothMonotone: t.get("smoothMonotone"),
				connectNulls: t.get("connectNulls")
			}), p) {
				var I = a.stackedOn,
				T = 0;
				p.useStyle(r(l.getAreaStyle(), {
					fill: S,
					opacity: .7,
					lineJoin: "bevel"
				})),
				I && (T = Nl(I.hostModel.get("smooth"))),
				p.setShape({
					smooth: M,
					stackedOnSmooth: T,
					smoothMonotone: t.get("smoothMonotone"),
					connectNulls: t.get("connectNulls")
				})
			}
			this._data = a,
			this._coordSys = n,
			this._stackedOnPoints = y,
			this._points = h,
			this._step = b
		},
		dispose: function() {},
		highlight: function(t, e, i, n) {
			var o = t.getData(),
			a = ki(o, n);
			if (! (a instanceof Array) && null != a && a >= 0) {
				var r = o.getItemGraphicEl(a);
				if (!r) {
					var s = o.getItemLayout(a);
					if (!s) return; (r = new bl(o, a)).position = s,
					r.setZ(t.get("zlevel"), t.get("z")),
					r.ignore = isNaN(s[0]) || isNaN(s[1]),
					r.__temp = !0,
					o.setItemGraphicEl(a, r),
					r.stopSymbolAnimation(!0),
					this.group.add(r)
				}
				r.highlight()
			} else cr.prototype.highlight.call(this, t, e, i, n)
		},
		downplay: function(t, e, i, n) {
			var o = t.getData(),
			a = ki(o, n);
			if (null != a && a >= 0) {
				var r = o.getItemGraphicEl(a);
				r && (r.__temp ? (o.setItemGraphicEl(a, null), this.group.remove(r)) : r.downplay())
			} else cr.prototype.downplay.call(this, t, e, i, n)
		},
		_newPolyline: function(t) {
			var e = this._polyline;
			return e && this._lineGroup.remove(e),
			e = new _T({
				shape: {
					points: t
				},
				silent: !0,
				z2: 10
			}),
			this._lineGroup.add(e),
			this._polyline = e,
			e
		},
		_newPolygon: function(t, e) {
			var i = this._polygon;
			return i && this._lineGroup.remove(i),
			i = new wT({
				shape: {
					points: t,
					stackedOnPoints: e
				},
				silent: !0
			}),
			this._lineGroup.add(i),
			this._polygon = i,
			i
		},
		_getSymbolIgnoreFunc: function(t, e) {
			var i = e.getAxesByScale("ordinal")[0];
			if (i && i.isLabelIgnored) return m(i.isLabelIgnored, i)
		},
		_updateAnimation: function(t, e, i, n, o) {
			var a = this._polyline,
			r = this._polygon,
			s = t.hostModel,
			l = dT(this._data, t, this._stackedOnPoints, e, this._coordSys, i),
			h = l.current,
			u = l.stackedOnCurrent,
			c = l.next,
			d = l.stackedOnNext;
			o && (h = Wl(l.current, i, o), u = Wl(l.stackedOnCurrent, i, o), c = Wl(l.next, i, o), d = Wl(l.stackedOnNext, i, o)),
			a.shape.__points = l.current,
			a.shape.points = h,
			co(a, {
				shape: {
					points: c
				}
			},
			s),
			r && (r.setShape({
				points: h,
				stackedOnPoints: u
			}), co(r, {
				shape: {
					points: c,
					stackedOnPoints: d
				}
			},
			s));
			for (var f = [], p = l.status, g = 0; g < p.length; g++) if ("=" === p[g].cmd) {
				var m = t.getItemGraphicEl(p[g].idx1);
				m && f.push({
					el: m,
					ptIdx: g
				})
			}
			a.animators && a.animators.length && a.animators[0].during(function() {
				for (var t = 0; t < f.length; t++) f[t].el.attr("position", a.shape.__points[f[t].ptIdx])
			})
		},
		remove: function(t) {
			var e = this.group,
			i = this._data;
			this._lineGroup.removeAll(),
			this._symbolDraw.remove(!0),
			i && i.eachItemGraphicEl(function(t, n) {
				t.__temp && (e.remove(t), i.setItemGraphicEl(n, null))
			}),
			this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
		}
	});
	var bT = function(t, e, i) {
		return {
			seriesType: t,
			performRawSeries: !0,
			reset: function(t, n, o) {
				var a = t.getData(),
				r = t.get("symbol") || e,
				s = t.get("symbolSize");
				if (a.setVisual({
					legendSymbol: i || r,
					symbol: r,
					symbolSize: s
				}), !n.isSeriesFiltered(t)) {
					var l = "function" == typeof s;
					return {
						dataEach: a.hasItemOption || l ?
						function(e, i) {
							if ("function" == typeof s) {
								var n = t.getRawValue(i),
								o = t.getDataParams(i);
								e.setItemVisual(i, "symbolSize", s(n, o))
							}
							if (e.hasItemOption) {
								var a = e.getItemModel(i),
								r = a.getShallow("symbol", !0),
								l = a.getShallow("symbolSize", !0);
								null != r && e.setItemVisual(i, "symbol", r),
								null != l && e.setItemVisual(i, "symbolSize", l)
							}
						}: null
					}
				}
			}
		}
	},
	ST = function(t) {
		return {
			seriesType: t,
			plan: fM(),
			reset: function(t) {
				var e = t.getData(),
				i = t.coordinateSystem,
				n = t.pipelineContext.large;
				if (i) {
					var o = f(i.dimensions,
					function(t) {
						return e.getDimension(e.mapDimension(t))
					}).slice(0, 2),
					a = o.length;
					return a && {
						progress: function(t, e) {
							for (var r = t.end - t.start,
							s = n && new Float32Array(r * a), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {
								var d;
								if (1 === a) f = e.get(o[0], l, !0),
								d = !isNaN(f) && i.dataToPoint(f, null, c);
								else {
									var f = u[0] = e.get(o[0], l, !0),
									p = u[1] = e.get(o[1], l, !0);
									d = !isNaN(f) && !isNaN(p) && i.dataToPoint(u, null, c)
								}
								n ? (s[h++] = d ? d[0] : NaN, s[h++] = d ? d[1] : NaN) : e.setItemLayout(l, d && d.slice() || [NaN, NaN])
							}
							n && e.setLayout("symbolPoints", s)
						}
					}
				}
			}
		}
	},
	MT = {
		average: function(t) {
			for (var e = 0,
			i = 0,
			n = 0; n < t.length; n++) isNaN(t[n]) || (e += t[n], i++);
			return 0 === i ? NaN: e / i
		},
		sum: function(t) {
			for (var e = 0,
			i = 0; i < t.length; i++) e += t[i] || 0;
			return e
		},
		max: function(t) {
			for (var e = -1 / 0,
			i = 0; i < t.length; i++) t[i] > e && (e = t[i]);
			return e
		},
		min: function(t) {
			for (var e = 1 / 0,
			i = 0; i < t.length; i++) t[i] < e && (e = t[i]);
			return e
		},
		nearest: function(t) {
			return t[0]
		}
	},
	IT = function(t, e) {
		return Math.round(t.length / 2)
	},
	TT = function(t) {
		this._axes = {},
		this._dimList = [],
		this.name = t || ""
	};
	TT.prototype = {
		constructor: TT,
		type: "cartesian",
		getAxis: function(t) {
			return this._axes[t]
		},
		getAxes: function() {
			return f(this._dimList, Hl, this)
		},
		getAxesByScale: function(t) {
			return t = t.toLowerCase(),
			g(this.getAxes(),
			function(e) {
				return e.scale.type === t
			})
		},
		addAxis: function(t) {
			var e = t.dim;
			this._axes[e] = t,
			this._dimList.push(e)
		},
		dataToCoord: function(t) {
			return this._dataCoordConvert(t, "dataToCoord")
		},
		coordToData: function(t) {
			return this._dataCoordConvert(t, "coordToData")
		},
		_dataCoordConvert: function(t, e) {
			for (var i = this._dimList,
			n = t instanceof Array ? [] : {},
			o = 0; o < i.length; o++) {
				var a = i[o],
				r = this._axes[a];
				n[a] = r[e](t[a])
			}
			return n
		}
	},
	Zl.prototype = {
		constructor: Zl,
		type: "cartesian2d",
		dimensions: ["x", "y"],
		getBaseAxis: function() {
			return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
		},
		containPoint: function(t) {
			var e = this.getAxis("x"),
			i = this.getAxis("y");
			return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]))
		},
		containData: function(t) {
			return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
		},
		dataToPoint: function(t, e, i) {
			var n = this.getAxis("x"),
			o = this.getAxis("y");
			return i = i || [],
			i[0] = n.toGlobalCoord(n.dataToCoord(t[0])),
			i[1] = o.toGlobalCoord(o.dataToCoord(t[1])),
			i
		},
		clampData: function(t, e) {
			var i = this.getAxis("x").scale.getExtent(),
			n = this.getAxis("y").scale.getExtent();
			return e = e || [],
			e[0] = Math.min(Math.max(Math.min(i[0], i[1]), t[0]), Math.max(i[0], i[1])),
			e[1] = Math.min(Math.max(Math.min(n[0], n[1]), t[1]), Math.max(n[0], n[1])),
			e
		},
		pointToData: function(t, e) {
			var i = this.getAxis("x"),
			n = this.getAxis("y");
			return e = e || [],
			e[0] = i.coordToData(i.toLocalCoord(t[0])),
			e[1] = n.coordToData(n.toLocalCoord(t[1])),
			e
		},
		getOtherAxis: function(t) {
			return this.getAxis("x" === t.dim ? "y": "x")
		}
	},
	h(Zl, TT);
	var AT = function(t, e, i, n, o) {
		nT.call(this, t, e, i),
		this.type = n || "value",
		this.position = o || "bottom"
	};
	AT.prototype = {
		constructor: AT,
		index: 0,
		onZero: !1,
		model: null,
		isHorizontal: function() {
			var t = this.position;
			return "top" === t || "bottom" === t
		},
		getGlobalExtent: function(t) {
			var e = this.getExtent();
			return e[0] = this.toGlobalCoord(e[0]),
			e[1] = this.toGlobalCoord(e[1]),
			t && e[0] > e[1] && e.reverse(),
			e
		},
		getOtherAxis: function() {
			this.grid.getOtherAxis()
		},
		isLabelIgnored: function(t) {
			if ("category" === this.type) {
				var e = this.getLabelInterval();
				return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
			}
		},
		pointToData: function(t, e) {
			return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
		},
		toLocalCoord: null,
		toGlobalCoord: null
	},
	h(AT, nT);
	var DT = {
		show: !0,
		zlevel: 0,
		z: 0,
		inverse: !1,
		name: "",
		nameLocation: "end",
		nameRotate: null,
		nameTruncate: {
			maxWidth: null,
			ellipsis: "...",
			placeholder: "."
		},
		nameTextStyle: {},
		nameGap: 15,
		silent: !1,
		triggerEvent: !1,
		tooltip: {
			show: !1
		},
		axisPointer: {},
		axisLine: {
			show: !0,
			onZero: !0,
			onZeroAxisIndex: null,
			lineStyle: {
				color: "#333",
				width: 1,
				type: "solid"
			},
			symbol: ["none", "none"],
			symbolSize: [10, 15]
		},
		axisTick: {
			show: !0,
			inside: !1,
			length: 5,
			lineStyle: {
				width: 1
			}
		},
		axisLabel: {
			show: !0,
			inside: !1,
			rotate: 0,
			showMinLabel: null,
			showMaxLabel: null,
			margin: 8,
			fontSize: 12
		},
		splitLine: {
			show: !0,
			lineStyle: {
				color: ["#ccc"],
				width: 1,
				type: "solid"
			}
		},
		splitArea: {
			show: !1,
			areaStyle: {
				color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
			}
		}
	},
	CT = {};
	CT.categoryAxis = n({
		boundaryGap: !0,
		deduplication: null,
		splitLine: {
			show: !1
		},
		axisTick: {
			alignWithLabel: !1,
			interval: "auto"
		},
		axisLabel: {
			interval: "auto"
		}
	},
	DT),
	CT.valueAxis = n({
		boundaryGap: [0, 0],
		splitNumber: 5
	},
	DT),
	CT.timeAxis = r({
		scale: !0,
		min: "dataMin",
		max: "dataMax"
	},
	CT.valueAxis),
	CT.logAxis = r({
		scale: !0,
		logBase: 10
	},
	CT.valueAxis);
	var LT = ["value", "category", "time", "log"],
	kT = function(t, e, i, a) {
		d(LT,
		function(r) {
			e.extend({
				type: t + "Axis." + r,
				mergeDefaultAndTheme: function(e, o) {
					var a = this.layoutMode,
					s = a ? ea(e) : {};
					n(e, o.getTheme().get(r + "Axis")),
					n(e, this.getDefaultOption()),
					e.type = i(t, e),
					a && ta(e, s, a)
				},
				optionUpdated: function() {
					"category" === this.option.type && (this.__ordinalMeta = Hs.createByAxisModel(this))
				},
				getCategories: function() {
					if ("category" === this.option.type) return this.__ordinalMeta.categories
				},
				getOrdinalMeta: function() {
					return this.__ordinalMeta
				},
				defaultOption: o([{},
				CT[r + "Axis"], a], !0)
			})
		}),
		IS.registerSubTypeDefaulter(t + "Axis", v(i, t))
	},
	PT = IS.extend({
		type: "cartesian2dAxis",
		axis: null,
		init: function() {
			PT.superApply(this, "init", arguments),
			this.resetRange()
		},
		mergeOption: function() {
			PT.superApply(this, "mergeOption", arguments),
			this.resetRange()
		},
		restoreData: function() {
			PT.superApply(this, "restoreData", arguments),
			this.resetRange()
		},
		getCoordSysModel: function() {
			return this.ecModel.queryComponents({
				mainType: "grid",
				index: this.option.gridIndex,
				id: this.option.gridId
			})[0]
		}
	});
	n(PT.prototype, ZI);
	var OT = {
		offset: 0
	};
	kT("x", PT, Ul, OT),
	kT("y", PT, Ul, OT),
	IS.extend({
		type: "grid",
		dependencies: ["xAxis", "yAxis"],
		layoutMode: "box",
		coordinateSystem: null,
		defaultOption: {
			show: !1,
			zlevel: 0,
			z: 0,
			left: "10%",
			top: 60,
			right: "10%",
			bottom: 60,
			containLabel: !1,
			backgroundColor: "rgba(0,0,0,0)",
			borderWidth: 1,
			borderColor: "#ccc"
		}
	});
	var NT = d,
	ET = function(t) {
		var e = t.scale.getExtent(),
		i = e[0],
		n = e[1];
		return ! (i > 0 && n > 0 || i < 0 && n < 0)
	},
	zT = rl,
	RT = ql.prototype;
	RT.type = "grid",
	RT.axisPointerEnabled = !0,
	RT.getRect = function() {
		return this._rect
	},
	RT.update = function(t, e) {
		var i = this._axesMap;
		this._updateScale(t, this.model),
		NT(i.x,
		function(t) {
			zT(t.scale, t.model)
		}),
		NT(i.y,
		function(t) {
			zT(t.scale, t.model)
		}),
		NT(i.x,
		function(t) {
			$l(i, "y", t)
		}),
		NT(i.y,
		function(t) {
			$l(i, "x", t)
		}),
		this.resize(this.model, e)
	},
	RT.resize = function(t, e, i) {
		function n() {
			NT(a,
			function(t) {
				var e = t.isHorizontal(),
				i = e ? [0, o.width] : [0, o.height],
				n = t.inverse ? 1 : 0;
				t.setExtent(i[n], i[1 - n]),
				Jl(t, e ? o.x: o.y)
			})
		}
		var o = Ko(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		});
		this._rect = o;
		var a = this._axesList;
		n(),
		!i && t.get("containLabel") && (NT(a,
		function(t) {
			if (!t.model.get("axisLabel.inside")) {
				var e = Yl(t);
				if (e) {
					var i = t.isHorizontal() ? "height": "width",
					n = t.model.get("axisLabel.margin");
					o[i] -= e[i] + n,
					"top" === t.position ? o.y += e.height + n: "left" === t.position && (o.x += e.width + n)
				}
			}
		}), n())
	},
	RT.getAxis = function(t, e) {
		var i = this._axesMap[t];
		if (null != i) {
			if (null == e) for (var n in i) if (i.hasOwnProperty(n)) return i[n];
			return i[e]
		}
	},
	RT.getAxes = function() {
		return this._axesList.slice()
	},
	RT.getCartesian = function(t, e) {
		if (null != t && null != e) {
			var i = "x" + t + "y" + e;
			return this._coordsMap[i]
		}
		w(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
		for (var n = 0,
		o = this._coordsList; n < o.length; n++) if (o[n].getAxis("x").index === t || o[n].getAxis("y").index === e) return o[n]
	},
	RT.getCartesians = function() {
		return this._coordsList.slice()
	},
	RT.convertToPixel = function(t, e, i) {
		var n = this._findConvertTarget(t, e);
		return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null
	},
	RT.convertFromPixel = function(t, e, i) {
		var n = this._findConvertTarget(t, e);
		return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null
	},
	RT._findConvertTarget = function(t, e) {
		var i, n, o = e.seriesModel,
		a = e.xAxisModel || o && o.getReferringComponents("xAxis")[0],
		r = e.yAxisModel || o && o.getReferringComponents("yAxis")[0],
		s = e.gridModel,
		h = this._coordsList;
		return o ? l(h, i = o.coordinateSystem) < 0 && (i = null) : a && r ? i = this.getCartesian(a.componentIndex, r.componentIndex) : a ? n = this.getAxis("x", a.componentIndex) : r ? n = this.getAxis("y", r.componentIndex) : s && s.coordinateSystem === this && (i = this._coordsList[0]),
		{
			cartesian: i,
			axis: n
		}
	},
	RT.containPoint = function(t) {
		var e = this._coordsList[0];
		if (e) return e.containPoint(t)
	},
	RT._initCartesian = function(t, e, i) {
		function n(i) {
			return function(n, s) {
				if (jl(n, t, e)) {
					var l = n.get("position");
					"x" === i ? "top" !== l && "bottom" !== l && o[l = "bottom"] && (l = "top" === l ? "bottom": "top") : "left" !== l && "right" !== l && o[l = "left"] && (l = "left" === l ? "right": "left"),
					o[l] = !0;
					var h = new AT(i, sl(n), [0, 0], n.get("type"), l),
					u = "category" === h.type;
					h.onBand = u && n.get("boundaryGap"),
					h.inverse = n.get("inverse"),
					h.onZero = n.get("axisLine.onZero"),
					h.onZeroAxisIndex = n.get("axisLine.onZeroAxisIndex"),
					n.axis = h,
					h.model = n,
					h.grid = this,
					h.index = s,
					this._axesList.push(h),
					a[i][s] = h,
					r[i]++
				}
			}
		}
		var o = {
			left: !1,
			right: !1,
			top: !1,
			bottom: !1
		},
		a = {
			x: {},
			y: {}
		},
		r = {
			x: 0,
			y: 0
		};
		if (e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), !r.x || !r.y) return this._axesMap = {},
		void(this._axesList = []);
		this._axesMap = a,
		NT(a.x,
		function(e, i) {
			NT(a.y,
			function(n, o) {
				var a = "x" + i + "y" + o,
				r = new Zl(a);
				r.grid = this,
				r.model = t,
				this._coordsMap[a] = r,
				this._coordsList.push(r),
				r.addAxis(e),
				r.addAxis(n)
			},
			this)
		},
		this)
	},
	RT._updateScale = function(t, e) {
		function i(t, e, i) {
			NT(t.mapDimension(e.dim, !0),
			function(i) {
				e.scale.unionExtentFromData(t, i)
			})
		}
		d(this._axesList,
		function(t) {
			t.scale.setExtent(1 / 0, -1 / 0)
		}),
		t.eachSeries(function(n) {
			if (th(n)) {
				var o = Ql(n),
				a = o[0],
				r = o[1];
				if (!jl(a, e, t) || !jl(r, e, t)) return;
				var s = this.getCartesian(a.componentIndex, r.componentIndex),
				l = n.getData(),
				h = s.getAxis("x"),
				u = s.getAxis("y");
				"list" === l.type && (i(l, h), i(l, u))
			}
		},
		this)
	},
	RT.getTooltipAxes = function(t) {
		var e = [],
		i = [];
		return NT(this.getCartesians(),
		function(n) {
			var o = null != t && "auto" !== t ? n.getAxis(t) : n.getBaseAxis(),
			a = n.getOtherAxis(o);
			l(e, o) < 0 && e.push(o),
			l(i, a) < 0 && i.push(a)
		}),
		{
			baseAxes: e,
			otherAxes: i
		}
	};
	var BT = ["xAxis", "yAxis"];
	ql.create = function(t, e) {
		var i = [];
		return t.eachComponent("grid",
		function(n, o) {
			var a = new ql(n, t, e);
			a.name = "grid_" + o,
			a.resize(n, e, !0),
			n.coordinateSystem = a,
			i.push(a)
		}),
		t.eachSeries(function(t) {
			if (th(t)) {
				var e = Ql(t),
				i = e[0],
				n = e[1],
				o = i.getCoordSysModel().coordinateSystem;
				t.coordinateSystem = o.getCartesian(i.componentIndex, n.componentIndex)
			}
		}),
		i
	},
	ql.dimensions = ql.prototype.dimensions = Zl.prototype.dimensions,
	Aa.register("cartesian2d", ql);
	var VT = Math.PI,
	GT = function(t, e) {
		this.opt = e,
		this.axisModel = t,
		r(e, {
			labelOffset: 0,
			nameDirection: 1,
			tickDirection: 1,
			labelDirection: 1,
			silent: !0
		}),
		this.group = new S_;
		var i = new S_({
			position: e.position.slice(),
			rotation: e.rotation
		});
		i.updateTransform(),
		this._transform = i.transform,
		this._dumbGroup = i
	};
	GT.prototype = {
		constructor: GT,
		hasBuilder: function(t) {
			return !! WT[t]
		},
		add: function(t) {
			WT[t].call(this)
		},
		getGroup: function() {
			return this.group
		}
	};
	var WT = {
		axisLine: function() {
			var t = this.opt,
			e = this.axisModel;
			if (e.get("axisLine.show")) {
				var i = this.axisModel.axis.getExtent(),
				n = this._transform,
				o = [i[0], 0],
				r = [i[1], 0];
				n && (Q(o, o, n), Q(r, r, n));
				var s = a({
					lineCap: "round"
				},
				e.getModel("axisLine.lineStyle").getLineStyle());
				this.group.add(new Gb(Vn({
					anid: "line",
					shape: {
						x1: o[0],
						y1: o[1],
						x2: r[0],
						y2: r[1]
					},
					style: s,
					strokeContainThreshold: t.strokeContainThreshold || 5,
					silent: !0,
					z2: 1
				})));
				var l = e.get("axisLine.symbol"),
				h = e.get("axisLine.symbolSize");
				if (null != l) {
					"string" == typeof l && (l = [l, l]),
					"string" != typeof h && "number" != typeof h || (h = [h, h]);
					var u = h[0],
					c = h[1];
					d([[t.rotation + Math.PI / 2, o], [t.rotation - Math.PI / 2, r]],
					function(t, e) {
						if ("none" !== l[e] && null != l[e]) {
							var i = dl(l[e], -u / 2, -c / 2, u, c, s.stroke, !0);
							i.attr({
								rotation: t[0],
								position: t[1],
								silent: !0
							}),
							this.group.add(i)
						}
					},
					this)
				}
			}
		},
		axisTickLabel: function() {
			var t = this.axisModel,
			e = this.opt,
			i = lh(this, t, e);
			oh(t, hh(this, t, e), i)
		},
		axisName: function() {
			var t = this.opt,
			e = this.axisModel,
			i = T(t.axisName, e.get("name"));
			if (i) {
				var n, o = e.get("nameLocation"),
				r = t.nameDirection,
				s = e.getModel("nameTextStyle"),
				l = e.get("nameGap") || 0,
				h = this.axisModel.axis.getExtent(),
				u = h[0] > h[1] ? -1 : 1,
				c = ["start" === o ? h[0] - u * l: "end" === o ? h[1] + u * l: (h[0] + h[1]) / 2, sh(o) ? t.labelOffset + r * l: 0],
				d = e.get("nameRotate");
				null != d && (d = d * VT / 180);
				var f;
				sh(o) ? n = FT(t.rotation, null != d ? d: t.rotation, r) : (n = ih(t, o, d || 0, h), null != (f = t.axisNameAvailableWidth) && (f = Math.abs(f / Math.sin(n.rotation)), !isFinite(f) && (f = null)));
				var p = s.getFont(),
				g = e.get("nameTruncate", !0) || {},
				m = g.ellipsis,
				v = T(t.nameTruncateMaxWidth, g.maxWidth, f),
				y = null != m && null != v ? mS(i, v, p, m, {
					minChar: 2,
					placeholder: g.placeholder
				}) : i,
				x = e.get("tooltip", !0),
				_ = e.mainType,
				w = {
					componentType: _,
					name: i,
					$vars: ["name"]
				};
				w[_ + "Index"] = e.componentIndex;
				var b = new Cb({
					anid: "name",
					__fullText: i,
					__truncatedText: y,
					position: c,
					rotation: n.rotation,
					silent: nh(e),
					z2: 1,
					tooltip: x && x.show ? a({
						content: i,
						formatter: function() {
							return i
						},
						formatterParams: w
					},
					x) : null
				});
				io(b.style, s, {
					text: y,
					textFont: p,
					textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
					textAlign: n.textAlign,
					textVerticalAlign: n.textVerticalAlign
				}),
				e.get("triggerEvent") && (b.eventData = eh(e), b.eventData.targetType = "axisName", b.eventData.name = i),
				this._dumbGroup.add(b),
				b.updateTransform(),
				this.group.add(b),
				b.decomposeTransform()
			}
		}
	},
	FT = GT.innerTextLayout = function(t, e, i) {
		var n, o, a = Oo(e - t);
		return No(a) ? (o = i > 0 ? "top": "bottom", n = "center") : No(a - VT) ? (o = i > 0 ? "bottom": "top", n = "center") : (o = "middle", n = a > 0 && a < VT ? i > 0 ? "right": "left": i > 0 ? "left": "right"),
		{
			rotation: a,
			textAlign: n,
			textVerticalAlign: o
		}
	},
	HT = GT.ifIgnoreOnTick = function(t, e, i, n, o, a) {
		if (0 === e && o || e === n - 1 && a) return ! 1;
		var r, s = t.scale;
		return "ordinal" === s.type && ("function" == typeof i ? (r = s.getTicks()[e], !i(r, s.getLabel(r))) : e % (i + 1))
	},
	ZT = GT.getInterval = function(t, e) {
		var i = t.get("interval");
		return null != i && "auto" != i || (i = e),
		i
	},
	UT = d,
	jT = v,
	XT = ms({
		type: "axis",
		_axisPointer: null,
		axisPointerClass: null,
		render: function(t, e, i, n) {
			this.axisPointerClass && mh(t),
			XT.superApply(this, "render", arguments),
			wh(this, t, 0, i, 0, !0)
		},
		updateAxisPointer: function(t, e, i, n, o) {
			wh(this, t, 0, i, 0, !1)
		},
		remove: function(t, e) {
			var i = this._axisPointer;
			i && i.remove(e),
			XT.superApply(this, "remove", arguments)
		},
		dispose: function(t, e) {
			bh(this, e),
			XT.superApply(this, "dispose", arguments)
		}
	}),
	YT = [];
	XT.registerAxisPointerClass = function(t, e) {
		YT[t] = e
	},
	XT.getAxisPointerClass = function(t) {
		return t && YT[t]
	};
	var qT = GT.ifIgnoreOnTick,
	$T = GT.getInterval,
	KT = ["axisLine", "axisTickLabel", "axisName"],
	JT = ["splitArea", "splitLine"],
	QT = XT.extend({
		type: "cartesianAxis",
		axisPointerClass: "CartesianAxisPointer",
		render: function(t, e, i, n) {
			this.group.removeAll();
			var o = this._axisGroup;
			if (this._axisGroup = new S_, this.group.add(this._axisGroup), t.get("show")) {
				var a = t.getCoordSysModel(),
				r = Sh(a, t),
				s = new GT(t, r);
				d(KT, s.add, s),
				this._axisGroup.add(s.getGroup()),
				d(JT,
				function(e) {
					t.get(e + ".show") && this["_" + e](t, a, r.labelInterval)
				},
				this),
				vo(o, this._axisGroup, t),
				QT.superCall(this, "render", t, e, i, n)
			}
		},
		_splitLine: function(t, e, i) {
			var n = t.axis;
			if (!n.scale.isBlank()) {
				var o = t.getModel("splitLine"),
				a = o.getModel("lineStyle"),
				s = a.get("color"),
				l = $T(o, i);
				s = y(s) ? s: [s];
				for (var h = e.coordinateSystem.getRect(), u = n.isHorizontal(), c = 0, d = n.getTicksCoords(), f = n.scale.getTicks(), p = t.get("axisLabel.showMinLabel"), g = t.get("axisLabel.showMaxLabel"), m = [], v = [], x = a.getLineStyle(), _ = 0; _ < d.length; _++) if (!qT(n, _, l, d.length, p, g)) {
					var w = n.toGlobalCoord(d[_]);
					u ? (m[0] = w, m[1] = h.y, v[0] = w, v[1] = h.y + h.height) : (m[0] = h.x, m[1] = w, v[0] = h.x + h.width, v[1] = w);
					var b = c++%s.length;
					this._axisGroup.add(new Gb(Vn({
						anid: "line_" + f[_],
						shape: {
							x1: m[0],
							y1: m[1],
							x2: v[0],
							y2: v[1]
						},
						style: r({
							stroke: s[b]
						},
						x),
						silent: !0
					})))
				}
			}
		},
		_splitArea: function(t, e, i) {
			var n = t.axis;
			if (!n.scale.isBlank()) {
				var o = t.getModel("splitArea"),
				a = o.getModel("areaStyle"),
				s = a.get("color"),
				l = e.coordinateSystem.getRect(),
				h = n.getTicksCoords(),
				u = n.scale.getTicks(),
				c = n.toGlobalCoord(h[0]),
				d = n.toGlobalCoord(h[0]),
				f = 0,
				p = $T(o, i),
				g = a.getAreaStyle();
				s = y(s) ? s: [s];
				for (var m = t.get("axisLabel.showMinLabel"), v = t.get("axisLabel.showMaxLabel"), x = 1; x < h.length; x++) if (!qT(n, x, p, h.length, m, v)) {
					var _, w, b, S, M = n.toGlobalCoord(h[x]);
					n.isHorizontal() ? (_ = c, w = l.y, b = M - _, S = l.height) : (_ = l.x, w = d, b = l.width, S = M - w);
					var I = f++%s.length;
					this._axisGroup.add(new Vb({
						anid: "area_" + u[x],
						shape: {
							x: _,
							y: w,
							width: b,
							height: S
						},
						style: r({
							fill: s[I]
						},
						g),
						silent: !0
					})),
					c = _ + b,
					d = w + S
				}
			}
		}
	});
	QT.extend({
		type: "xAxis"
	}),
	QT.extend({
		type: "yAxis"
	}),
	ms({
		type: "grid",
		render: function(t, e) {
			this.group.removeAll(),
			t.get("show") && this.group.add(new Vb({
				shape: t.coordinateSystem.getRect(),
				style: r({
					fill: t.get("backgroundColor")
				},
				t.getItemStyle()),
				silent: !0,
				z2: -1
			}))
		}
	}),
	ss(function(t) {
		t.xAxis && t.yAxis && !t.grid && (t.grid = {})
	}),
	ds(bT("line", "circle", "line")),
	cs(ST("line")),
	ls(FM.PROCESSOR.STATISTIC,
	function(t) {
		return {
			seriesType: t,
			reset: function(t, e, i) {
				var n = t.getData(),
				o = t.get("sampling"),
				a = t.coordinateSystem;
				if ("cartesian2d" === a.type && o) {
					var r = a.getBaseAxis(),
					s = a.getOtherAxis(r),
					l = r.getExtent(),
					h = l[1] - l[0],
					u = Math.round(n.count() / h);
					if (u > 1) {
						var c;
						"string" == typeof o ? c = MT[o] : "function" == typeof o && (c = o),
						c && t.setData(n.downSample(s.dim, 1 / u, c, IT))
					}
				}
			}
		}
	} ("line"));
	var tA = uM.extend({
		type: "series.__base_bar__",
		getInitialData: function(t, e) {
			return Bs(this.getSource(), this)
		},
		getMarkerPosition: function(t) {
			var e = this.coordinateSystem;
			if (e) {
				var i = e.dataToPoint(e.clampData(t)),
				n = this.getData(),
				o = n.getLayout("offset"),
				a = n.getLayout("size");
				return i[e.getBaseAxis().isHorizontal() ? 0 : 1] += o + a / 2,
				i
			}
			return [NaN, NaN]
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "cartesian2d",
			legendHoverLink: !0,
			barMinHeight: 0,
			barMinAngle: 0,
			itemStyle: {},
			emphasis: {}
		}
	});
	tA.extend({
		type: "series.bar",
		dependencies: ["grid", "polar"],
		brushSelector: "rect"
	});
	var eA = Sw([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
	iA = {
		getBarItemStyle: function(t) {
			var e = eA(this, t);
			if (this.getBorderLineDash) {
				var i = this.getBorderLineDash();
				i && (e.lineDash = i)
			}
			return e
		}
	},
	nA = ["itemStyle", "barBorderWidth"];
	a(_o.prototype, iA),
	ys({
		type: "bar",
		render: function(t, e, i) {
			var n = t.get("coordinateSystem");
			return "cartesian2d" !== n && "polar" !== n || this._render(t, e, i),
			this.group
		},
		dispose: B,
		_render: function(t, e, i) {
			var n, o = this.group,
			a = t.getData(),
			r = this._data,
			s = t.coordinateSystem,
			l = s.getBaseAxis();
			"cartesian2d" === s.type ? n = l.isHorizontal() : "polar" === s.type && (n = "angle" === l.dim);
			var h = t.isAnimationEnabled() ? t: null;
			a.diff(r).add(function(e) {
				if (a.hasValue(e)) {
					var i = a.getItemModel(e),
					r = aA[s.type](a, e, i),
					l = oA[s.type](a, e, i, r, n, h);
					a.setItemGraphicEl(e, l),
					o.add(l),
					Dh(l, a, e, i, r, t, n, "polar" === s.type)
				}
			}).update(function(e, i) {
				var l = r.getItemGraphicEl(i);
				if (a.hasValue(e)) {
					var u = a.getItemModel(e),
					c = aA[s.type](a, e, u);
					l ? co(l, {
						shape: c
					},
					h, e) : l = oA[s.type](a, e, u, c, n, h, !0),
					a.setItemGraphicEl(e, l),
					o.add(l),
					Dh(l, a, e, u, c, t, n, "polar" === s.type)
				} else o.remove(l)
			}).remove(function(t) {
				var e = r.getItemGraphicEl(t);
				"cartesian2d" === s.type ? e && Th(t, h, e) : e && Ah(t, h, e)
			}).execute(),
			this._data = a
		},
		remove: function(t, e) {
			var i = this.group,
			n = this._data;
			t.get("animation") ? n && n.eachItemGraphicEl(function(e) {
				"sector" === e.type ? Ah(e.dataIndex, t, e) : Th(e.dataIndex, t, e)
			}) : i.removeAll()
		}
	});
	var oA = {
		cartesian2d: function(t, e, i, n, o, r, s) {
			var l = new Vb({
				shape: a({},
				n)
			});
			if (r) {
				var h = l.shape,
				u = o ? "height": "width",
				c = {};
				h[u] = 0,
				c[u] = n[u],
				tS[s ? "updateProps": "initProps"](l, {
					shape: c
				},
				r, e)
			}
			return l
		},
		polar: function(t, e, i, n, o, r, s) {
			var l = new Ob({
				shape: a({},
				n)
			});
			if (r) {
				var h = l.shape,
				u = o ? "r": "endAngle",
				c = {};
				h[u] = o ? 0 : n.startAngle,
				c[u] = n[u],
				tS[s ? "updateProps": "initProps"](l, {
					shape: c
				},
				r, e)
			}
			return l
		}
	},
	aA = {
		cartesian2d: function(t, e, i) {
			var n = t.getItemLayout(e),
			o = Ch(i, n),
			a = n.width > 0 ? 1 : -1,
			r = n.height > 0 ? 1 : -1;
			return {
				x: n.x + a * o / 2,
				y: n.y + r * o / 2,
				width: n.width - a * o,
				height: n.height - r * o
			}
		},
		polar: function(t, e, i) {
			var n = t.getItemLayout(e);
			return {
				cx: n.cx,
				cy: n.cy,
				r0: n.r0,
				r: n.r,
				startAngle: n.startAngle,
				endAngle: n.endAngle
			}
		}
	};
	cs(v(il, "bar")),
	ds(function(t) {
		t.eachSeriesByType("bar",
		function(t) {
			t.getData().setVisual("legendSymbol", "roundRect")
		})
	});
	var rA = function(t, e, i) {
		e = y(e) && {
			coordDimensions: e
		} || a({},
		e);
		var n = t.getSource(),
		o = wI(n, e),
		r = new yI(o, t);
		return r.initData(n, i),
		r
	},
	sA = {
		updateSelectedMap: function(t) {
			if (y(t)) this._targetList = t.slice();
			else for (var e = t,
			i = e.mapDimension("value"), t = this._targetList = [], n = 0, o = e.count(); n < o; n++) t.push({
				name: e.getName(n),
				value: e.get(i, n),
				selected: Qa(e, n, "selected")
			});
			this._selectTargetMap = p(t || [],
			function(t, e) {
				return t.set(e.name, e),
				t
			},
			z())
		},
		select: function(t, e) {
			var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
			"single" === this.get("selectedMode") && this._selectTargetMap.each(function(t) {
				t.selected = !1
			}),
			i && (i.selected = !0)
		},
		unSelect: function(t, e) {
			var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
			i && (i.selected = !1)
		},
		toggleSelected: function(t, e) {
			var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
			if (null != i) return this[i.selected ? "unSelect": "select"](t, e),
			i.selected
		},
		isSelected: function(t, e) {
			var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
			return i && i.selected
		}
	},
	lA = vs({
		type: "series.pie",
		init: function(t) {
			lA.superApply(this, "init", arguments),
			this.legendDataProvider = function() {
				return this.getRawData()
			},
			this.updateSelectedMap(this.getRawData()),
			this._defaultLabelLine(t)
		},
		mergeOption: function(t) {
			lA.superCall(this, "mergeOption", t),
			this.updateSelectedMap(this.getRawData())
		},
		getInitialData: function(t, e) {
			return rA(this, ["value"])
		},
		getDataParams: function(t) {
			var e = this.getData(),
			i = lA.superCall(this, "getDataParams", t),
			n = [];
			return e.each(e.mapDimension("value"),
			function(t) {
				n.push(t)
			}),
			i.percent = Po(n, t, e.hostModel.get("percentPrecision")),
			i.$vars.push("percent"),
			i
		},
		_defaultLabelLine: function(t) {
			Mi(t, "labelLine", ["show"]);
			var e = t.labelLine,
			i = t.emphasis.labelLine;
			e.show = e.show && t.label.show,
			i.show = i.show && t.emphasis.label.show
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			legendHoverLink: !0,
			hoverAnimation: !0,
			center: ["50%", "50%"],
			radius: [0, "75%"],
			clockwise: !0,
			startAngle: 90,
			minAngle: 0,
			selectedOffset: 10,
			hoverOffset: 10,
			avoidLabelOverlap: !0,
			percentPrecision: 2,
			stillShowZeroSum: !0,
			label: {
				rotate: !1,
				show: !0,
				position: "outer"
			},
			labelLine: {
				show: !0,
				length: 15,
				length2: 15,
				smooth: !1,
				lineStyle: {
					width: 1,
					type: "solid"
				}
			},
			itemStyle: {
				borderWidth: 1
			},
			animationType: "expansion",
			animationEasing: "cubicOut"
		}
	});
	u(lA, sA);
	var hA = Ph.prototype;
	hA.updateData = function(t, e, i) {
		function n() {
			s.stopAnimation(!0),
			s.animateTo({
				shape: {
					r: u.r + l.get("hoverOffset")
				}
			},
			300, "elasticOut")
		}
		function o() {
			s.stopAnimation(!0),
			s.animateTo({
				shape: {
					r: u.r
				}
			},
			300, "elasticOut")
		}
		var s = this.childAt(0),
		l = t.hostModel,
		h = t.getItemModel(e),
		u = t.getItemLayout(e),
		c = a({},
		u);
		c.label = null,
		i ? (s.setShape(c), "scale" === l.getShallow("animationType") ? (s.shape.r = u.r0, fo(s, {
			shape: {
				r: u.r
			}
		},
		l, e)) : (s.shape.endAngle = u.startAngle, co(s, {
			shape: {
				endAngle: u.endAngle
			}
		},
		l, e))) : co(s, {
			shape: c
		},
		l, e);
		var d = t.getItemVisual(e, "color");
		s.useStyle(r({
			lineJoin: "bevel",
			fill: d
		},
		h.getModel("itemStyle").getItemStyle())),
		s.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle();
		var f = h.getShallow("cursor");
		f && s.attr("cursor", f),
		kh(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")),
		s.off("mouseover").off("mouseout").off("emphasis").off("normal"),
		h.get("hoverAnimation") && l.isAnimationEnabled() && s.on("mouseover", n).on("mouseout", o).on("emphasis", n).on("normal", o),
		this._updateLabel(t, e),
		to(this)
	},
	hA._updateLabel = function(t, e) {
		var i = this.childAt(1),
		n = this.childAt(2),
		o = t.hostModel,
		a = t.getItemModel(e),
		r = t.getItemLayout(e).label,
		s = t.getItemVisual(e, "color");
		co(i, {
			shape: {
				points: r.linePoints || [[r.x, r.y], [r.x, r.y], [r.x, r.y]]
			}
		},
		o, e),
		co(n, {
			style: {
				x: r.x,
				y: r.y
			}
		},
		o, e),
		n.attr({
			rotation: r.rotation,
			origin: [r.x, r.y],
			z2: 10
		});
		var l = a.getModel("label"),
		h = a.getModel("emphasis.label"),
		u = a.getModel("labelLine"),
		c = a.getModel("emphasis.labelLine"),
		s = t.getItemVisual(e, "color");
		eo(n.style, n.hoverStyle = {},
		l, h, {
			labelFetcher: t.hostModel,
			labelDataIndex: e,
			defaultText: t.getName(e),
			autoColor: s,
			useInsideStyle: !!r.inside
		},
		{
			textAlign: r.textAlign,
			textVerticalAlign: r.verticalAlign,
			opacity: t.getItemVisual(e, "opacity")
		}),
		n.ignore = n.normalIgnore = !l.get("show"),
		n.hoverIgnore = !h.get("show"),
		i.ignore = i.normalIgnore = !u.get("show"),
		i.hoverIgnore = !c.get("show"),
		i.setStyle({
			stroke: s,
			opacity: t.getItemVisual(e, "opacity")
		}),
		i.setStyle(u.getModel("lineStyle").getLineStyle()),
		i.hoverStyle = c.getModel("lineStyle").getLineStyle();
		var d = u.get("smooth");
		d && !0 === d && (d = .4),
		i.setShape({
			smooth: d
		})
	},
	h(Ph, S_);
	cr.extend({
		type: "pie",
		init: function() {
			var t = new S_;
			this._sectorGroup = t
		},
		render: function(t, e, i, n) {
			if (!n || n.from !== this.uid) {
				var o = t.getData(),
				a = this._data,
				r = this.group,
				s = e.get("animation"),
				l = !a,
				h = t.get("animationType"),
				u = v(Lh, this.uid, t, s, i),
				c = t.get("selectedMode");
				if (o.diff(a).add(function(t) {
					var e = new Ph(o, t);
					l && "scale" !== h && e.eachChild(function(t) {
						t.stopAnimation(!0)
					}),
					c && e.on("click", u),
					o.setItemGraphicEl(t, e),
					r.add(e)
				}).update(function(t, e) {
					var i = a.getItemGraphicEl(e);
					i.updateData(o, t),
					i.off("click"),
					c && i.on("click", u),
					r.add(i),
					o.setItemGraphicEl(t, i)
				}).remove(function(t) {
					var e = a.getItemGraphicEl(t);
					r.remove(e)
				}).execute(), s && l && o.count() > 0 && "scale" !== h) {
					var d = o.getItemLayout(0),
					f = Math.max(i.getWidth(), i.getHeight()) / 2,
					p = m(r.removeClipPath, r);
					r.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t))
				}
				this._data = o
			}
		},
		dispose: function() {},
		_createClipPath: function(t, e, i, n, o, a, r) {
			var s = new Ob({
				shape: {
					cx: t,
					cy: e,
					r0: 0,
					r: i,
					startAngle: n,
					endAngle: n,
					clockwise: o
				}
			});
			return fo(s, {
				shape: {
					endAngle: n + (o ? 1 : -1) * Math.PI * 2
				}
			},
			r, a),
			s
		},
		containPoint: function(t, e) {
			var i = e.getData().getItemLayout(0);
			if (i) {
				var n = t[0] - i.cx,
				o = t[1] - i.cy,
				a = Math.sqrt(n * n + o * o);
				return a <= i.r && a >= i.r0
			}
		}
	});
	var uA = function(t, e) {
		d(e,
		function(e) {
			e.update = "updateView",
			hs(e,
			function(i, n) {
				var o = {};
				return n.eachComponent({
					mainType: "series",
					subType: t,
					query: i
				},
				function(t) {
					t[e.method] && t[e.method](i.name, i.dataIndex);
					var n = t.getData();
					n.each(function(e) {
						var i = n.getName(e);
						o[i] = t.isSelected(i) || !1
					})
				}),
				{
					name: i.name,
					selected: o
				}
			})
		})
	},
	cA = function(t) {
		return {
			getTargetSeries: function(e) {
				var i = {},
				n = z();
				return e.eachSeriesByType(t,
				function(t) {
					t.__paletteScope = i,
					n.set(t.uid, t)
				}),
				n
			},
			reset: function(t, e) {
				var i = t.getRawData(),
				n = {},
				o = t.getData();
				o.each(function(t) {
					var e = o.getRawIndex(t);
					n[e] = t
				}),
				i.each(function(e) {
					var a = n[e],
					r = null != a && o.getItemVisual(a, "color", !0);
					if (r) i.setItemVisual(e, "color", r);
					else {
						var s = i.getItemModel(e).get("itemStyle.color") || t.getColorFromPalette(i.getName(e), t.__paletteScope, i.count());
						i.setItemVisual(e, "color", s),
						null != a && o.setItemVisual(a, "color", s)
					}
				})
			}
		}
	},
	dA = function(t, e, i, n) {
		var o, a, r = t.getData(),
		s = [],
		l = !1;
		r.each(function(i) {
			var n, h, u, c, d = r.getItemLayout(i),
			f = r.getItemModel(i),
			p = f.getModel("label"),
			g = p.get("position") || f.get("emphasis.label.position"),
			m = f.getModel("labelLine"),
			v = m.get("length"),
			y = m.get("length2"),
			x = (d.startAngle + d.endAngle) / 2,
			_ = Math.cos(x),
			w = Math.sin(x);
			o = d.cx,
			a = d.cy;
			var b = "inside" === g || "inner" === g;
			if ("center" === g) n = d.cx,
			h = d.cy,
			c = "center";
			else {
				var S = (b ? (d.r + d.r0) / 2 * _: d.r * _) + o,
				M = (b ? (d.r + d.r0) / 2 * w: d.r * w) + a;
				if (n = S + 3 * _, h = M + 3 * w, !b) {
					var I = S + _ * (v + e - d.r),
					T = M + w * (v + e - d.r),
					A = I + (_ < 0 ? -1 : 1) * y,
					D = T;
					n = A + (_ < 0 ? -5 : 5),
					h = D,
					u = [[S, M], [I, T], [A, D]]
				}
				c = b ? "center": _ > 0 ? "left": "right"
			}
			var C = p.getFont(),
			L = p.get("rotate") ? _ < 0 ? -x + Math.PI: -x: 0,
			k = me(t.getFormattedLabel(i, "normal") || r.getName(i), C, c, "top");
			l = !!L,
			d.label = {
				x: n,
				y: h,
				position: g,
				height: k.height,
				len: v,
				len2: y,
				linePoints: u,
				textAlign: c,
				verticalAlign: "middle",
				rotation: L,
				inside: b
			},
			b || s.push(d.label)
		}),
		!l && t.get("avoidLabelOverlap") && Nh(s, o, a, e, i, n)
	},
	fA = 2 * Math.PI,
	pA = Math.PI / 180,
	gA = function(t) {
		return {
			seriesType: t,
			reset: function(t, e) {
				var i = e.findComponents({
					mainType: "legend"
				});
				if (i && i.length) {
					var n = t.getData();
					n.filterSelf(function(t) {
						for (var e = n.getName(t), o = 0; o < i.length; o++) if (!i[o].isSelected(e)) return ! 1;
						return ! 0
					},
					this)
				}
			}
		}
	};
	uA("pie", [{
		type: "pieToggleSelect",
		event: "pieselectchanged",
		method: "toggleSelected"
	},
	{
		type: "pieSelect",
		event: "pieselected",
		method: "select"
	},
	{
		type: "pieUnSelect",
		event: "pieunselected",
		method: "unSelect"
	}]),
	ds(cA("pie")),
	cs(v(function(t, e, i, n) {
		e.eachSeriesByType(t,
		function(t) {
			var e = t.getData(),
			n = e.mapDimension("value"),
			o = t.get("center"),
			a = t.get("radius");
			y(a) || (a = [0, a]),
			y(o) || (o = [o, o]);
			var r = i.getWidth(),
			s = i.getHeight(),
			l = Math.min(r, s),
			h = To(o[0], r),
			u = To(o[1], s),
			c = To(a[0], l / 2),
			d = To(a[1], l / 2),
			f = -t.get("startAngle") * pA,
			p = t.get("minAngle") * pA,
			g = 0;
			e.each(n,
			function(t) { ! isNaN(t) && g++
			});
			var m = e.getSum(n),
			v = Math.PI / (m || g) * 2,
			x = t.get("clockwise"),
			_ = t.get("roseType"),
			w = t.get("stillShowZeroSum"),
			b = e.getDataExtent(n);
			b[0] = 0;
			var S = fA,
			M = 0,
			I = f,
			T = x ? 1 : -1;
			if (e.each(n,
			function(t, i) {
				var n;
				if (isNaN(t)) e.setItemLayout(i, {
					angle: NaN,
					startAngle: NaN,
					endAngle: NaN,
					clockwise: x,
					cx: h,
					cy: u,
					r0: c,
					r: _ ? NaN: d
				});
				else { (n = "area" !== _ ? 0 === m && w ? v: t * v: fA / g) < p ? (n = p, S -= p) : M += t;
					var o = I + T * n;
					e.setItemLayout(i, {
						angle: n,
						startAngle: I,
						endAngle: o,
						clockwise: x,
						cx: h,
						cy: u,
						r0: c,
						r: _ ? Io(t, b, [c, d]) : d
					}),
					I = o
				}
			},
			!0), S < fA && g) if (S <= .001) {
				var A = fA / g;
				e.each(n,
				function(t, i) {
					if (!isNaN(t)) {
						var n = e.getItemLayout(i);
						n.angle = A,
						n.startAngle = f + T * i * A,
						n.endAngle = f + T * (i + 1) * A
					}
				})
			} else v = S / M,
			I = f,
			e.each(n,
			function(t, i) {
				if (!isNaN(t)) {
					var n = e.getItemLayout(i),
					o = n.angle === p ? p: t * v;
					n.startAngle = I,
					n.endAngle = I + T * o,
					I += T * o
				}
			});
			dA(t, d, r, s)
		})
	},
	"pie")),
	ls(gA("pie")),
	uM.extend({
		type: "series.scatter",
		dependencies: ["grid", "polar", "geo", "singleAxis", "calendar"],
		getInitialData: function(t, e) {
			return Bs(this.getSource(), this)
		},
		brushSelector: "point",
		getProgressive: function() {
			var t = this.option.progressive;
			return null == t ? this.option.large ? 5e3: this.get("progressive") : t
		},
		getProgressiveThreshold: function() {
			var t = this.option.progressiveThreshold;
			return null == t ? this.option.large ? 1e4: this.get("progressiveThreshold") : t
		},
		defaultOption: {
			coordinateSystem: "cartesian2d",
			zlevel: 0,
			z: 2,
			legendHoverLink: !0,
			hoverAnimation: !0,
			symbolSize: 10,
			large: !1,
			largeThreshold: 2e3,
			itemStyle: {
				opacity: .8
			},
			progressive: null
		}
	});
	var mA = Nn({
		shape: {
			points: null
		},
		symbolProxy: null,
		buildPath: function(t, e) {
			var i = e.points,
			n = e.size,
			o = this.symbolProxy,
			a = o.shape;
			if (! ((t.getContext ? t.getContext() : t) && n[0] < 4)) for (var r = 0; r < i.length;) {
				var s = i[r++],
				l = i[r++];
				isNaN(s) || isNaN(l) || (a.x = s - n[0] / 2, a.y = l - n[1] / 2, a.width = n[0], a.height = n[1], o.buildPath(t, a, !0))
			}
		},
		afterBrush: function(t) {
			var e = this.shape,
			i = e.points,
			n = e.size;
			if (n[0] < 4) {
				this.setTransform(t);
				for (var o = 0; o < i.length;) {
					var a = i[o++],
					r = i[o++];
					isNaN(a) || isNaN(r) || t.fillRect(a - n[0] / 2, r - n[1] / 2, n[0], n[1])
				}
				this.restoreTransform(t)
			}
		},
		findDataIndex: function(t, e) {
			for (var i = this.shape,
			n = i.points,
			o = i.size,
			a = Math.max(o[0], 4), r = Math.max(o[1], 4), s = n.length / 2 - 1; s >= 0; s--) {
				var l = 2 * s,
				h = n[l] - a / 2,
				u = n[l + 1] - r / 2;
				if (t >= h && e >= u && t <= h + a && e <= u + r) return s
			}
			return - 1
		}
	}),
	vA = Eh.prototype;
	vA.isPersistent = function() {
		return ! this._incremental
	},
	vA.updateData = function(t) {
		this.group.removeAll();
		var e = new mA({
			rectHover: !0,
			cursor: "default"
		});
		e.setShape({
			points: t.getLayout("symbolPoints")
		}),
		this._setCommon(e, t),
		this.group.add(e),
		this._incremental = null
	},
	vA.updateLayout = function(t) {
		if (!this._incremental) {
			var e = t.getLayout("symbolPoints");
			this.group.eachChild(function(t) {
				if (null != t.startIndex) {
					var i = 2 * (t.endIndex - t.startIndex),
					n = 4 * t.startIndex * 2;
					e = new Float32Array(e.buffer, n, i)
				}
				t.setShape("points", e)
			})
		}
	},
	vA.incrementalPrepareUpdate = function(t) {
		this.group.removeAll(),
		this._clearIncremental(),
		t.count() > 2e6 ? (this._incremental || (this._incremental = new On({
			silent: !0
		})), this.group.add(this._incremental)) : this._incremental = null
	},
	vA.incrementalUpdate = function(t, e) {
		var i;
		this._incremental ? (i = new mA, this._incremental.addDisplayable(i, !0)) : ((i = new mA({
			rectHover: !0,
			cursor: "default",
			startIndex: t.start,
			endIndex: t.end
		})).incremental = !0, this.group.add(i)),
		i.setShape({
			points: e.getLayout("symbolPoints")
		}),
		this._setCommon(i, e, !!this._incremental)
	},
	vA._setCommon = function(t, e, i) {
		var n = e.hostModel,
		o = e.getVisual("symbolSize");
		t.setShape("size", o instanceof Array ? o: [o, o]),
		t.symbolProxy = dl(e.getVisual("symbol"), 0, 0, 0, 0),
		t.setColor = t.symbolProxy.setColor;
		var a = t.shape.size[0] < 4;
		t.useStyle(n.getModel("itemStyle").getItemStyle(a ? ["color", "shadowBlur", "shadowColor"] : ["color"]));
		var r = e.getVisual("color");
		r && t.setColor(r),
		i || (t.seriesIndex = n.seriesIndex, t.on("mousemove",
		function(e) {
			t.dataIndex = null;
			var i = t.findDataIndex(e.offsetX, e.offsetY);
			i >= 0 && (t.dataIndex = i + (t.startIndex || 0))
		}))
	},
	vA.remove = function() {
		this._clearIncremental(),
		this._incremental = null,
		this.group.removeAll()
	},
	vA._clearIncremental = function() {
		var t = this._incremental;
		t && t.clearDisplaybles()
	},
	ys({
		type: "scatter",
		render: function(t, e, i) {
			var n = t.getData();
			this._updateSymbolDraw(n, t).updateData(n),
			this._finished = !0
		},
		incrementalPrepareRender: function(t, e, i) {
			var n = t.getData();
			this._updateSymbolDraw(n, t).incrementalPrepareUpdate(n),
			this._finished = !1
		},
		incrementalRender: function(t, e, i) {
			this._symbolDraw.incrementalUpdate(t, e.getData()),
			this._finished = t.end === e.getData().count()
		},
		updateTransform: function(t, e, i) {
			var n = t.getData();
			if (this.group.dirty(), !this._finished || n.count() > 1e4 || !this._symbolDraw.isPersistent()) return {
				update: !0
			};
			var o = ST().reset(t);
			o.progress && o.progress({
				start: 0,
				end: n.count()
			},
			n),
			this._symbolDraw.updateLayout(n)
		},
		_updateSymbolDraw: function(t, e) {
			var i = this._symbolDraw,
			n = e.pipelineContext.large;
			return i && n === this._isLargeDraw || (i && i.remove(), i = this._symbolDraw = n ? new Eh: new Ml, this._isLargeDraw = n, this.group.removeAll()),
			this.group.add(i.group),
			i
		},
		remove: function(t, e) {
			this._symbolDraw && this._symbolDraw.remove(!0),
			this._symbolDraw = null
		},
		dispose: function() {}
	}),
	ds(bT("scatter", "circle")),
	cs(ST("scatter")),
	h(zh, nT),
	Rh.prototype.getIndicatorAxes = function() {
		return this._indicatorAxes
	},
	Rh.prototype.dataToPoint = function(t, e) {
		var i = this._indicatorAxes[e];
		return this.coordToPoint(i.dataToCoord(t), e)
	},
	Rh.prototype.coordToPoint = function(t, e) {
		var i = this._indicatorAxes[e].angle;
		return [this.cx + t * Math.cos(i), this.cy - t * Math.sin(i)]
	},
	Rh.prototype.pointToData = function(t) {
		var e = t[0] - this.cx,
		i = t[1] - this.cy,
		n = Math.sqrt(e * e + i * i);
		e /= n,
		i /= n;
		for (var o, a = Math.atan2( - i, e), r = 1 / 0, s = -1, l = 0; l < this._indicatorAxes.length; l++) {
			var h = this._indicatorAxes[l],
			u = Math.abs(a - h.angle);
			u < r && (o = h, s = l, r = u)
		}
		return [s, +(o && o.coodToData(n))]
	},
	Rh.prototype.resize = function(t, e) {
		var i = t.get("center"),
		n = e.getWidth(),
		o = e.getHeight(),
		a = Math.min(n, o) / 2;
		this.cx = To(i[0], n),
		this.cy = To(i[1], o),
		this.startAngle = t.get("startAngle") * Math.PI / 180,
		this.r = To(t.get("radius"), a),
		d(this._indicatorAxes,
		function(t, e) {
			t.setExtent(0, this.r);
			var i = this.startAngle + e * Math.PI * 2 / this._indicatorAxes.length;
			i = Math.atan2(Math.sin(i), Math.cos(i)),
			t.angle = i
		},
		this)
	},
	Rh.prototype.update = function(t, e) {
		function i(t) {
			var e = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)),
			i = t / e;
			return 2 === i ? i = 5 : i *= 2,
			i * e
		}
		var n = this._indicatorAxes,
		o = this._model;
		d(n,
		function(t) {
			t.scale.setExtent(1 / 0, -1 / 0)
		}),
		t.eachSeriesByType("radar",
		function(e, i) {
			if ("radar" === e.get("coordinateSystem") && t.getComponent("radar", e.get("radarIndex")) === o) {
				var a = e.getData();
				d(n,
				function(t) {
					t.scale.unionExtentFromData(a, a.mapDimension(t.dim))
				})
			}
		},
		this);
		var a = o.get("splitNumber");
		d(n,
		function(t, e) {
			var n = ol(t.scale, t.model);
			rl(t.scale, t.model);
			var o = t.model,
			r = t.scale,
			s = o.getMin(),
			l = o.getMax(),
			h = r.getInterval();
			if (null != s && null != l) r.setExtent( + s, +l),
			r.setInterval((l - s) / a);
			else if (null != s) {
				var u;
				do {
					u = s + h * a, r.setExtent( + s, u), r.setInterval(h), h = i(h)
				} while ( u < n [ 1 ] && isFinite(u) && isFinite(n[1]))
			} else if (null != l) {
				var c;
				do {
					c = l - h * a, r.setExtent(c, +l), r.setInterval(h), h = i(h)
				} while ( c > n [ 0 ] && isFinite(c) && isFinite(n[0]))
			} else {
				r.getTicks().length - 1 > a && (h = i(h));
				var d = Math.round((n[0] + n[1]) / 2 / h) * h,
				f = Math.round(a / 2);
				r.setExtent(Ao(d - f * h), Ao(d + (a - f) * h)),
				r.setInterval(h)
			}
		})
	},
	Rh.dimensions = [],
	Rh.create = function(t, e) {
		var i = [];
		return t.eachComponent("radar",
		function(n) {
			var o = new Rh(n, t, e);
			i.push(o),
			n.coordinateSystem = o
		}),
		t.eachSeriesByType("radar",
		function(t) {
			"radar" === t.get("coordinateSystem") && (t.coordinateSystem = i[t.get("radarIndex") || 0])
		}),
		i
	},
	Aa.register("radar", Rh);
	var yA = CT.valueAxis,
	xA = (gs({
		type: "radar",
		optionUpdated: function() {
			var t = this.get("boundaryGap"),
			e = this.get("splitNumber"),
			o = this.get("scale"),
			s = this.get("axisLine"),
			l = this.get("axisTick"),
			h = this.get("axisLabel"),
			u = this.get("name"),
			c = this.get("name.show"),
			d = this.get("name.formatter"),
			p = this.get("nameGap"),
			g = this.get("triggerEvent"),
			m = f(this.get("indicator") || [],
			function(f) {
				null != f.max && f.max > 0 && !f.min ? f.min = 0 : null != f.min && f.min < 0 && !f.max && (f.max = 0);
				var m = u;
				if (null != f.color && (m = r({
					color: f.color
				},
				u)), f = n(i(f), {
					boundaryGap: t,
					splitNumber: e,
					scale: o,
					axisLine: s,
					axisTick: l,
					axisLabel: h,
					name: f.text,
					nameLocation: "end",
					nameGap: p,
					nameTextStyle: m,
					triggerEvent: g
				},
				!1), c || (f.name = ""), "string" == typeof d) {
					var v = f.name;
					f.name = d.replace("{value}", null != v ? v: "")
				} else "function" == typeof d && (f.name = d(f.name, f));
				var y = a(new _o(f, null, this.ecModel), ZI);
				return y.mainType = "radar",
				y.componentIndex = this.componentIndex,
				y
			},
			this);
			this.getIndicatorModels = function() {
				return m
			}
		},
		defaultOption: {
			zlevel: 0,
			z: 0,
			center: ["50%", "50%"],
			radius: "75%",
			startAngle: 90,
			name: {
				show: !0
			},
			boundaryGap: [0, 0],
			splitNumber: 5,
			nameGap: 15,
			scale: !1,
			shape: "polygon",
			axisLine: n({
				lineStyle: {
					color: "#bbb"
				}
			},
			yA.axisLine),
			axisLabel: Bh(yA.axisLabel, !1),
			axisTick: Bh(yA.axisTick, !1),
			splitLine: Bh(yA.splitLine, !0),
			splitArea: Bh(yA.splitArea, !0),
			indicator: []
		}
	}), ["axisLine", "axisTickLabel", "axisName"]);
	ms({
		type: "radar",
		render: function(t, e, i) {
			this.group.removeAll(),
			this._buildAxes(t),
			this._buildSplitLineAndArea(t)
		},
		_buildAxes: function(t) {
			var e = t.coordinateSystem;
			d(f(e.getIndicatorAxes(),
			function(t) {
				return new GT(t.model, {
					position: [e.cx, e.cy],
					rotation: t.angle,
					labelDirection: -1,
					tickDirection: -1,
					nameDirection: 1
				})
			}),
			function(t) {
				d(xA, t.add, t),
				this.group.add(t.getGroup())
			},
			this)
		},
		_buildSplitLineAndArea: function(t) {
			function e(t, e, i) {
				var n = i % e.length;
				return t[n] = t[n] || [],
				n
			}
			var i = t.coordinateSystem,
			n = i.getIndicatorAxes();
			if (n.length) {
				var o = t.get("shape"),
				a = t.getModel("splitLine"),
				s = t.getModel("splitArea"),
				l = a.getModel("lineStyle"),
				h = s.getModel("areaStyle"),
				u = a.get("show"),
				c = s.get("show"),
				p = l.get("color"),
				g = h.get("color");
				p = y(p) ? p: [p],
				g = y(g) ? g: [g];
				var m = [],
				v = [];
				if ("circle" === o) for (var x = n[0].getTicksCoords(), _ = i.cx, w = i.cy, b = 0; b < x.length; b++) u && m[D = e(m, p, b)].push(new Lb({
					shape: {
						cx: _,
						cy: w,
						r: x[b]
					}
				})),
				c && b < x.length - 1 && v[D = e(v, g, b)].push(new Nb({
					shape: {
						cx: _,
						cy: w,
						r0: x[b],
						r: x[b + 1]
					}
				}));
				else for (var S, M = f(n,
				function(t, e) {
					var n = t.getTicksCoords();
					return S = null == S ? n.length - 1 : Math.min(n.length - 1, S),
					f(n,
					function(t) {
						return i.coordToPoint(t, e)
					})
				}), I = [], b = 0; b <= S; b++) {
					for (var T = [], A = 0; A < n.length; A++) T.push(M[A][b]);
					if (T[0] && T.push(T[0].slice()), u && m[D = e(m, p, b)].push(new Bb({
						shape: {
							points: T
						}
					})), c && I) {
						var D = e(v, g, b - 1);
						v[D].push(new Rb({
							shape: {
								points: T.concat(I)
							}
						}))
					}
					I = T.slice().reverse()
				}
				var C = l.getLineStyle(),
				L = h.getAreaStyle();
				d(v,
				function(t, e) {
					this.group.add(Qb(t, {
						style: r({
							stroke: "none",
							fill: g[e % g.length]
						},
						L),
						silent: !0
					}))
				},
				this),
				d(m,
				function(t, e) {
					this.group.add(Qb(t, {
						style: r({
							fill: "none",
							stroke: p[e % p.length]
						},
						C),
						silent: !0
					}))
				},
				this)
			}
		}
	});
	var _A = uM.extend({
		type: "series.radar",
		dependencies: ["radar"],
		init: function(t) {
			_A.superApply(this, "init", arguments),
			this.legendDataProvider = function() {
				return this.getRawData()
			}
		},
		getInitialData: function(t, e) {
			return rA(this, {
				extraPrefix: "indicator_",
				extraFromZero: !0
			})
		},
		formatTooltip: function(t) {
			var e = this.getData(),
			i = this.coordinateSystem.getIndicatorAxes(),
			n = this.getData().getName(t);
			return Ho("" === n ? this.name: n) + "<br/>" + f(i,
			function(i, n) {
				var o = e.get(e.mapDimension(i.dim), t);
				return Ho(i.name + " : " + o)
			}).join("<br />")
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "radar",
			legendHoverLink: !0,
			radarIndex: 0,
			lineStyle: {
				width: 2,
				type: "solid"
			},
			label: {
				position: "top"
			},
			symbol: "emptyCircle",
			symbolSize: 4
		}
	});
	ys({
		type: "radar",
		render: function(t, e, n) {
			function o(t, e) {
				var i = t.getItemVisual(e, "symbol") || "circle",
				n = t.getItemVisual(e, "color");
				if ("none" !== i) {
					var o = Vh(t.getItemVisual(e, "symbolSize")),
					a = dl(i, -1, -1, 2, 2, n);
					return a.attr({
						style: {
							strokeNoScale: !0
						},
						z2: 100,
						scale: [o[0] / 2, o[1] / 2]
					}),
					a
				}
			}
			function a(e, i, n, a, r, s) {
				n.removeAll();
				for (var l = 0; l < i.length - 1; l++) {
					var h = o(a, r);
					h && (h.__dimIdx = l, e[l] ? (h.attr("position", e[l]), tS[s ? "initProps": "updateProps"](h, {
						position: i[l]
					},
					t, r)) : h.attr("position", i[l]), n.add(h))
				}
			}
			function s(t) {
				return f(t,
				function(t) {
					return [l.cx, l.cy]
				})
			}
			var l = t.coordinateSystem,
			h = this.group,
			u = t.getData(),
			c = this._data;
			u.diff(c).add(function(e) {
				var i = u.getItemLayout(e);
				if (i) {
					var n = new Rb,
					o = new Bb,
					r = {
						shape: {
							points: i
						}
					};
					n.shape.points = s(i),
					o.shape.points = s(i),
					fo(n, r, t, e),
					fo(o, r, t, e);
					var l = new S_,
					h = new S_;
					l.add(o),
					l.add(n),
					l.add(h),
					a(o.shape.points, i, h, u, e, !0),
					u.setItemGraphicEl(e, l)
				}
			}).update(function(e, i) {
				var n = c.getItemGraphicEl(i),
				o = n.childAt(0),
				r = n.childAt(1),
				s = n.childAt(2),
				l = {
					shape: {
						points: u.getItemLayout(e)
					}
				};
				l.shape.points && (a(o.shape.points, l.shape.points, s, u, e, !1), co(o, l, t), co(r, l, t), u.setItemGraphicEl(e, n))
			}).remove(function(t) {
				h.remove(c.getItemGraphicEl(t))
			}).execute(),
			u.eachItemGraphicEl(function(t, e) {
				function n() {
					l.attr("ignore", m)
				}
				function o() {
					l.attr("ignore", g)
				}
				var a = u.getItemModel(e),
				s = t.childAt(0),
				l = t.childAt(1),
				c = t.childAt(2),
				d = u.getItemVisual(e, "color");
				h.add(t),
				s.useStyle(r(a.getModel("lineStyle").getLineStyle(), {
					fill: "none",
					stroke: d
				})),
				s.hoverStyle = a.getModel("emphasis.lineStyle").getLineStyle();
				var f = a.getModel("areaStyle"),
				p = a.getModel("emphasis.areaStyle"),
				g = f.isEmpty() && f.parentModel.isEmpty(),
				m = p.isEmpty() && p.parentModel.isEmpty();
				m = m && g,
				l.ignore = g,
				l.useStyle(r(f.getAreaStyle(), {
					fill: d,
					opacity: .7
				})),
				l.hoverStyle = p.getAreaStyle();
				var v = a.getModel("itemStyle").getItemStyle(["color"]),
				y = a.getModel("emphasis.itemStyle").getItemStyle(),
				x = a.getModel("label"),
				_ = a.getModel("emphasis.label");
				c.eachChild(function(t) {
					t.setStyle(v),
					t.hoverStyle = i(y),
					eo(t.style, t.hoverStyle, x, _, {
						labelFetcher: u.hostModel,
						labelDataIndex: e,
						labelDimIndex: t.__dimIdx,
						defaultText: u.get(u.dimensions[t.__dimIdx], e),
						autoColor: d,
						isRectText: !0
					})
				}),
				t.off("mouseover").off("mouseout").off("normal").off("emphasis"),
				t.on("emphasis", n).on("mouseover", n).on("normal", o).on("mouseout", o),
				to(t)
			}),
			this._data = u
		},
		remove: function() {
			this.group.removeAll(),
			this._data = null
		},
		dispose: function() {}
	});
	ds(cA("radar")),
	ds(bT("radar", "circle")),
	cs(function(t) {
		t.eachSeriesByType("radar",
		function(t) {
			var e = t.getData(),
			i = [],
			n = t.coordinateSystem;
			if (n) {
				for (var o = n.getIndicatorAxes(), a = 0; a < n.getIndicatorAxes().length; a++) e.each(e.mapDimension(o[a].dim),
				function(t, e) {
					i[e] = i[e] || [],
					i[e][a] = n.dataToPoint(t, a)
				});
				e.each(function(t) {
					i[t][0] && i[t].push(i[t][0].slice()),
					e.setItemLayout(t, i[t])
				})
			}
		})
	}),
	ls(gA("radar")),
	ss(function(t) {
		var e = t.polar;
		if (e) {
			y(e) || (e = [e]);
			var i = [];
			d(e,
			function(e, n) {
				e.indicator ? (e.type && !e.shape && (e.shape = e.type), t.radar = t.radar || [], y(t.radar) || (t.radar = [t.radar]), t.radar.push(e)) : i.push(e)
			}),
			t.polar = i
		}
		d(t.series,
		function(t) {
			t && "radar" === t.type && t.polarIndex && (t.radarIndex = t.polarIndex)
		})
	});
	var wA = uM.extend({
		type: "series.map",
		dependencies: ["geo"],
		layoutMode: "box",
		needsDrawMap: !1,
		seriesGroup: [],
		init: function(t) {
			this._fillOption(t, this.getMapType()),
			wA.superApply(this, "init", arguments),
			this.updateSelectedMap(this.getRawData())
		},
		getInitialData: function(t) {
			return rA(this, ["value"])
		},
		mergeOption: function(t) {
			this._fillOption(t, this.getMapType()),
			wA.superApply(this, "mergeOption", arguments),
			this.updateSelectedMap(this.getRawData())
		},
		getHostGeoModel: function() {
			var t = this.option.geoIndex;
			return null != t ? this.dependentModels.geo[t] : null
		},
		getMapType: function() {
			return (this.getHostGeoModel() || this).option.map
		},
		_fillOption: function(t, e) {},
		getRawValue: function(t) {
			var e = this.getData();
			return e.get(e.mapDimension("value"), t)
		},
		getRegionModel: function(t) {
			var e = this.getData();
			return e.getItemModel(e.indexOfName(t))
		},
		formatTooltip: function(t) {
			for (var e = this.getData(), i = Wo(this.getRawValue(t)), n = e.getName(t), o = this.seriesGroup, a = [], r = 0; r < o.length; r++) {
				var s = o[r].originalData.indexOfName(n),
				l = e.mapDimension("value");
				isNaN(o[r].originalData.get(l, s)) || a.push(Ho(o[r].name))
			}
			return a.join(", ") + "<br />" + Ho(n + " : " + i)
		},
		getTooltipPosition: function(t) {
			if (null != t) {
				var e = this.getData().getName(t),
				i = this.coordinateSystem,
				n = i.getRegion(e);
				return n && i.dataToPoint(n.center)
			}
		},
		setZoom: function(t) {
			this.option.zoom = t
		},
		setCenter: function(t) {
			this.option.center = t
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "geo",
			map: "",
			left: "center",
			top: "center",
			aspectScale: .75,
			showLegendSymbol: !0,
			dataRangeHoverLink: !0,
			boundingCoords: null,
			center: null,
			zoom: 1,
			scaleLimit: null,
			label: {
				show: !1,
				color: "#000"
			},
			itemStyle: {
				borderWidth: .5,
				borderColor: "#444",
				areaColor: "#eee"
			},
			emphasis: {
				label: {
					show: !0,
					color: "rgb(100,0,0)"
				},
				itemStyle: {
					areaColor: "rgba(255,215,0,0.8)"
				}
			}
		}
	});
	u(wA, sA);
	var bA = "\0_ec_interaction_mutex";
	hs({
		type: "takeGlobalCursor",
		event: "globalCursorTaken",
		update: "update"
	},
	function() {}),
	u(Zh, Hx);
	var SA = {
		axisPointer: 1,
		tooltip: 1,
		brush: 1
	};
	ou.prototype = {
		constructor: ou,
		draw: function(t, e, i, n, o) {
			var a = "geo" === t.mainType,
			r = t.getData && t.getData();
			a && e.eachComponent({
				mainType: "series",
				subType: "map"
			},
			function(e) {
				r || e.getHostGeoModel() !== t || (r = e.getData())
			});
			var s = t.coordinateSystem,
			l = this.group,
			h = s.scale,
			u = {
				position: s.position,
				scale: h
			}; ! l.childAt(0) || o ? l.attr(u) : co(l, u, t),
			l.removeAll();
			var c = ["itemStyle"],
			f = ["emphasis", "itemStyle"],
			p = ["label"],
			g = ["emphasis", "label"],
			m = z();
			d(s.regions,
			function(e) {
				var i = m.get(e.name) || m.set(e.name, new S_),
				n = new Zb({
					shape: {
						paths: []
					}
				});
				i.add(n);
				var o, s = (C = t.getRegionModel(e.name) || t).getModel(c),
				u = C.getModel(f),
				v = eu(s),
				y = eu(u),
				x = C.getModel(p),
				_ = C.getModel(g);
				if (r) {
					o = r.indexOfName(e.name);
					var w = r.getItemVisual(o, "color", !0);
					w && (v.fill = w)
				}
				d(e.geometries,
				function(t) {
					if ("polygon" === t.type) {
						n.shape.paths.push(new Rb({
							shape: {
								points: t.exterior
							}
						}));
						for (var e = 0; e < (t.interiors ? t.interiors.length: 0); e++) n.shape.paths.push(new Rb({
							shape: {
								points: t.interiors[e]
							}
						}))
					}
				}),
				n.setStyle(v),
				n.style.strokeNoScale = !0,
				n.culling = !0;
				var b = x.get("show"),
				S = _.get("show"),
				M = r && isNaN(r.get(r.mapDimension("value"), o)),
				I = r && r.getItemLayout(o);
				if (a || M && (b || S) || I && I.showLabel) {
					var T, A = a ? e.name: o; (!r || o >= 0) && (T = t);
					var D = new Cb({
						position: e.center.slice(),
						scale: [1 / h[0], 1 / h[1]],
						z2: 10,
						silent: !0
					});
					eo(D.style, D.hoverStyle = {},
					x, _, {
						labelFetcher: T,
						labelDataIndex: A,
						defaultText: e.name,
						useInsideStyle: !1
					},
					{
						textAlign: "center",
						textVerticalAlign: "middle"
					}),
					i.add(D)
				}
				if (r) r.setItemGraphicEl(o, i);
				else {
					var C = t.getRegionModel(e.name);
					n.eventData = {
						componentType: "geo",
						geoIndex: t.componentIndex,
						name: e.name,
						region: C && C.option || {}
					}
				} (i.__regions || (i.__regions = [])).push(e),
				to(i, y, {
					hoverSilentOnTouch: !!t.get("selectedMode")
				}),
				l.add(i)
			}),
			this._updateController(t, e, i),
			iu(this, t, l, i, n),
			nu(t, l)
		},
		remove: function() {
			this.group.removeAll(),
			this._controller.dispose(),
			this._controllerHost = {}
		},
		_updateController: function(t, e, i) {
			function n() {
				var e = {
					type: "geoRoam",
					componentType: l
				};
				return e[l + "Id"] = t.id,
				e
			}
			var o = t.coordinateSystem,
			r = this._controller,
			s = this._controllerHost;
			s.zoomLimit = t.get("scaleLimit"),
			s.zoom = o.getZoom(),
			r.enable(t.get("roam") || !1);
			var l = t.mainType;
			r.off("pan").on("pan",
			function(t, e) {
				this._mouseDownFlag = !1,
				Jh(s, t, e),
				i.dispatchAction(a(n(), {
					dx: t,
					dy: e
				}))
			},
			this),
			r.off("zoom").on("zoom",
			function(t, e, o) {
				if (this._mouseDownFlag = !1, Qh(s, t, e, o), i.dispatchAction(a(n(), {
					zoom: t,
					originX: e,
					originY: o
				})), this._updateGroup) {
					var r = this.group,
					l = r.scale;
					r.traverse(function(t) {
						"text" === t.type && t.attr("scale", [1 / l[0], 1 / l[1]])
					})
				}
			},
			this),
			r.setPointerChecker(function(e, n, a) {
				return o.getViewRectAfterRoam().contain(n, a) && !tu(e, i, t)
			})
		}
	},
	ys({
		type: "map",
		render: function(t, e, i, n) {
			if (!n || "mapToggleSelect" !== n.type || n.from !== this.uid) {
				var o = this.group;
				if (o.removeAll(), !t.getHostGeoModel()) {
					if (n && "geoRoam" === n.type && "series" === n.componentType && n.seriesId === t.id)(a = this._mapDraw) && o.add(a.group);
					else if (t.needsDrawMap) {
						var a = this._mapDraw || new ou(i, !0);
						o.add(a.group),
						a.draw(t, e, i, this, n),
						this._mapDraw = a
					} else this._mapDraw && this._mapDraw.remove(),
					this._mapDraw = null;
					t.get("showLegendSymbol") && e.getComponent("legend") && this._renderSymbols(t, e, i)
				}
			}
		},
		remove: function() {
			this._mapDraw && this._mapDraw.remove(),
			this._mapDraw = null,
			this.group.removeAll()
		},
		dispose: function() {
			this._mapDraw && this._mapDraw.remove(),
			this._mapDraw = null
		},
		_renderSymbols: function(t, e, i) {
			var n = t.originalData,
			o = this.group;
			n.each(n.mapDimension("value"),
			function(e, i) {
				if (!isNaN(e)) {
					var a = n.getItemLayout(i);
					if (a && a.point) {
						var r = a.point,
						s = a.offset,
						l = new Lb({
							style: {
								fill: t.getData().getVisual("color")
							},
							shape: {
								cx: r[0] + 9 * s,
								cy: r[1],
								r: 3
							},
							silent: !0,
							z2: s ? 8 : 10
						});
						if (!s) {
							var h = t.mainSeries.getData(),
							u = n.getName(i),
							c = h.indexOfName(u),
							d = n.getItemModel(i),
							f = d.getModel("label"),
							p = d.getModel("emphasis.label"),
							g = h.getItemGraphicEl(c),
							m = A(t.getFormattedLabel(i, "normal"), u),
							v = A(t.getFormattedLabel(i, "emphasis"), m),
							y = function() {
								var t = io({},
								p, {
									text: p.get("show") ? v: null
								},
								{
									isRectText: !0,
									useInsideStyle: !1
								},
								!0);
								l.style.extendFrom(t),
								l.__mapOriginalZ2 = l.z2,
								l.z2 += 1
							},
							x = function() {
								io(l.style, f, {
									text: f.get("show") ? m: null,
									textPosition: f.getShallow("position") || "bottom"
								},
								{
									isRectText: !0,
									useInsideStyle: !1
								}),
								null != l.__mapOriginalZ2 && (l.z2 = l.__mapOriginalZ2, l.__mapOriginalZ2 = null)
							};
							g.on("mouseover", y).on("mouseout", x).on("emphasis", y).on("normal", x),
							x()
						}
						o.add(l)
					}
				}
			})
		}
	}),
	hs({
		type: "geoRoam",
		event: "geoRoam",
		update: "updateTransform"
	},
	function(t, e) {
		var i = t.componentType || "series";
		e.eachComponent({
			mainType: i,
			query: t
		},
		function(e) {
			var n = e.coordinateSystem;
			if ("geo" === n.type) {
				var o = au(n, t, e.get("scaleLimit"));
				e.setCenter && e.setCenter(o.center),
				e.setZoom && e.setZoom(o.zoom),
				"series" === i && d(e.seriesGroup,
				function(t) {
					t.setCenter(o.center),
					t.setZoom(o.zoom)
				})
			}
		})
	});
	var MA = Q;
	u(ru, Kx),
	su.prototype = {
		constructor: su,
		type: "view",
		dimensions: ["x", "y"],
		setBoundingRect: function(t, e, i, n) {
			return this._rect = new Kt(t, e, i, n),
			this._rect
		},
		getBoundingRect: function() {
			return this._rect
		},
		setViewRect: function(t, e, i, n) {
			this.transformTo(t, e, i, n),
			this._viewRect = new Kt(t, e, i, n)
		},
		transformTo: function(t, e, i, n) {
			var o = this.getBoundingRect(),
			a = this._rawTransformable;
			a.transform = o.calculateTransform(new Kt(t, e, i, n)),
			a.decomposeTransform(),
			this._updateTransform()
		},
		setCenter: function(t) {
			t && (this._center = t, this._updateCenterAndZoom())
		},
		setZoom: function(t) {
			t = t || 1;
			var e = this.zoomLimit;
			e && (null != e.max && (t = Math.min(e.max, t)), null != e.min && (t = Math.max(e.min, t))),
			this._zoom = t,
			this._updateCenterAndZoom()
		},
		getDefaultCenter: function() {
			var t = this.getBoundingRect();
			return [t.x + t.width / 2, t.y + t.height / 2]
		},
		getCenter: function() {
			return this._center || this.getDefaultCenter()
		},
		getZoom: function() {
			return this._zoom || 1
		},
		getRoamTransform: function() {
			return this._roamTransformable.getLocalTransform()
		},
		_updateCenterAndZoom: function() {
			var t = this._rawTransformable.getLocalTransform(),
			e = this._roamTransformable,
			i = this.getDefaultCenter(),
			n = this.getCenter(),
			o = this.getZoom();
			n = Q([], n, t),
			i = Q([], i, t),
			e.origin = n,
			e.position = [i[0] - n[0], i[1] - n[1]],
			e.scale = [o, o],
			this._updateTransform()
		},
		_updateTransform: function() {
			var t = this._roamTransformable,
			e = this._rawTransformable;
			e.parent = t,
			t.updateTransform(),
			e.updateTransform(),
			ht(this.transform || (this.transform = []), e.transform || st()),
			this._rawTransform = e.getLocalTransform(),
			this.invTransform = this.invTransform || [],
			pt(this.invTransform, this.transform),
			this.decomposeTransform()
		},
		getViewRect: function() {
			return this._viewRect
		},
		getViewRectAfterRoam: function() {
			var t = this.getBoundingRect().clone();
			return t.applyTransform(this.transform),
			t
		},
		dataToPoint: function(t, e, i) {
			var n = e ? this._rawTransform: this.transform;
			return i = i || [],
			n ? MA(i, t, n) : G(i, t)
		},
		pointToData: function(t) {
			var e = this.invTransform;
			return e ? MA([], t, e) : [t[0], t[1]]
		},
		convertToPixel: v(lu, "dataToPoint"),
		convertFromPixel: v(lu, "pointToData"),
		containPoint: function(t) {
			return this.getViewRectAfterRoam().contain(t[0], t[1])
		}
	},
	u(su, Kx);
	for (var IA = [126, 25], TA = [[[0, 3.5], [7, 11.2], [15, 11.9], [30, 7], [42, .7], [52, .7], [56, 7.7], [59, .7], [64, .7], [64, 0], [5, 0], [0, 3.5]], [[13, 16.1], [19, 14.7], [16, 21.7], [11, 23.1], [13, 16.1]], [[12, 32.2], [14, 38.5], [15, 38.5], [13, 32.2], [12, 32.2]], [[16, 47.6], [12, 53.2], [13, 53.2], [18, 47.6], [16, 47.6]], [[6, 64.4], [8, 70], [9, 70], [8, 64.4], [6, 64.4]], [[23, 82.6], [29, 79.8], [30, 79.8], [25, 82.6], [23, 82.6]], [[37, 70.7], [43, 62.3], [44, 62.3], [39, 70.7], [37, 70.7]], [[48, 51.1], [51, 45.5], [53, 45.5], [50, 51.1], [48, 51.1]], [[51, 35], [51, 28.7], [53, 28.7], [53, 35], [51, 35]], [[52, 22.4], [55, 17.5], [56, 17.5], [53, 22.4], [52, 22.4]], [[58, 12.6], [62, 7], [63, 7], [60, 12.6], [58, 12.6]], [[0, 3.5], [0, 93.1], [64, 93.1], [64, 0], [63, 0], [63, 92.4], [1, 92.4], [1, 3.5], [0, 3.5]]], AA = 0; AA < TA.length; AA++) for (var DA = 0; DA < TA[AA].length; DA++) TA[AA][DA][0] /= 10.5,
	TA[AA][DA][1] /= -14,
	TA[AA][DA][0] += IA[0],
	TA[AA][DA][1] += IA[1];
	var CA = {
		"南海诸岛": [32, 80],
		"广东": [0, -10],
		"香港": [10, 5],
		"澳门": [ - 10, 10],
		"天津": [5, 5]
	},
	LA = {
		Russia: [100, 60],
		"United States": [ - 99, 38],
		"United States of America": [ - 99, 38]
	},
	kA = [[[123.45165252685547, 25.73527164402261], [123.49731445312499, 25.73527164402261], [123.49731445312499, 25.750734064600884], [123.45165252685547, 25.750734064600884], [123.45165252685547, 25.73527164402261]]],
	PA = [function(t) {
		"china" === t.map && t.regions.push(new gl("南海诸岛", f(TA,
		function(t) {
			return {
				type: "polygon",
				exterior: t
			}
		}), IA))
	},
	function(t) {
		d(t.regions,
		function(t) {
			var e = CA[t.name];
			if (e) {
				var i = t.center;
				i[0] += e[0] / 10.5,
				i[1] += -e[1] / 14
			}
		})
	},
	function(t) {
		d(t.regions,
		function(t) {
			var e = LA[t.name];
			if (e) {
				var i = t.center;
				i[0] = e[0],
				i[1] = e[1]
			}
		})
	},
	function(t) {
		if ("china" === t.map) for (var e = 0,
		i = t.regions.length; e < i; ++e)"台湾" === t.regions[e].name && t.regions[e].geometries.push({
			type: "polygon",
			exterior: kA[0]
		})
	}];
	hu.prototype = {
		constructor: hu,
		type: "geo",
		dimensions: ["lng", "lat"],
		containCoord: function(t) {
			for (var e = this.regions,
			i = 0; i < e.length; i++) if (e[i].contain(t)) return ! 0;
			return ! 1
		},
		loadGeoJson: function(t, e, i) {
			try {
				this.regions = t ? tT(t) : []
			} catch(t) {
				throw "Invalid geoJson format\n" + t.message
			}
			e = e || {},
			i = i || {};
			for (var n = this.regions,
			o = z(), a = 0; a < n.length; a++) {
				var r = n[a].name;
				r = i.hasOwnProperty(r) ? i[r] : r,
				n[a].name = r,
				o.set(r, n[a]),
				this.addGeoCoord(r, n[a].center);
				var s = e[r];
				s && n[a].transformTo(s.left, s.top, s.width, s.height)
			}
			this._regionsMap = o,
			this._rect = null,
			d(PA,
			function(t) {
				t(this)
			},
			this)
		},
		transformTo: function(t, e, i, n) {
			var o = this.getBoundingRect(); (o = o.clone()).y = -o.y - o.height;
			var a = this._rawTransformable;
			a.transform = o.calculateTransform(new Kt(t, e, i, n)),
			a.decomposeTransform();
			var r = a.scale;
			r[1] = -r[1],
			a.updateTransform(),
			this._updateTransform()
		},
		getRegion: function(t) {
			return this._regionsMap.get(t)
		},
		getRegionByCoord: function(t) {
			for (var e = this.regions,
			i = 0; i < e.length; i++) if (e[i].contain(t)) return e[i]
		},
		addGeoCoord: function(t, e) {
			this._nameCoordMap.set(t, e)
		},
		getGeoCoord: function(t) {
			return this._nameCoordMap.get(t)
		},
		getBoundingRect: function() {
			if (this._rect) return this._rect;
			for (var t, e = this.regions,
			i = 0; i < e.length; i++) {
				var n = e[i].getBoundingRect(); (t = t || n.clone()).union(n)
			}
			return this._rect = t || new Kt(0, 0, 0, 0)
		},
		dataToPoint: function(t, e, i) {
			if ("string" == typeof t && (t = this.getGeoCoord(t)), t) return su.prototype.dataToPoint.call(this, t, e, i)
		},
		convertToPixel: v(uu, "dataToPoint"),
		convertFromPixel: v(uu, "pointToData")
	},
	u(hu, su);
	var OA = {
		dimensions: hu.prototype.dimensions,
		create: function(t, e) {
			var i = [];
			t.eachComponent("geo",
			function(t, n) {
				var o = t.get("map"),
				a = xs(o),
				r = new hu(o + n, o, a && a.geoJson, a && a.specialAreas, t.get("nameMap"));
				r.zoomLimit = t.get("scaleLimit"),
				i.push(r),
				du(r, t),
				t.coordinateSystem = r,
				r.model = t,
				r.resize = cu,
				r.resize(t, e)
			}),
			t.eachSeries(function(t) {
				if ("geo" === t.get("coordinateSystem")) {
					var e = t.get("geoIndex") || 0;
					t.coordinateSystem = i[e]
				}
			});
			var n = {};
			return t.eachSeriesByType("map",
			function(t) {
				if (!t.getHostGeoModel()) {
					var e = t.getMapType();
					n[e] = n[e] || [],
					n[e].push(t)
				}
			}),
			d(n,
			function(t, n) {
				var a = xs(n),
				r = f(t,
				function(t) {
					return t.get("nameMap")
				}),
				s = new hu(n, n, a && a.geoJson, a && a.specialAreas, o(r));
				s.zoomLimit = T.apply(null, f(t,
				function(t) {
					return t.get("scaleLimit")
				})),
				i.push(s),
				s.resize = cu,
				s.resize(t[0], e),
				d(t,
				function(t) {
					t.coordinateSystem = s,
					du(s, t)
				})
			}),
			i
		},
		getFilledRegions: function(t, e, i) {
			var n = (t || []).slice();
			i = i || {};
			var o = xs(e),
			a = o && o.geoJson;
			if (!a) return t;
			for (var r = z(), s = a.features, l = 0; l < n.length; l++) r.set(n[l].name, n[l]);
			for (l = 0; l < s.length; l++) {
				var h = s[l].properties.name;
				r.get(h) || (i.hasOwnProperty(h) && (h = i[h]), n.push({
					name: h
				}))
			}
			return n
		}
	};
	us("geo", OA);
	cs(function(t) {
		var e = {};
		t.eachSeriesByType("map",
		function(i) {
			var n = i.getMapType();
			if (!i.getHostGeoModel() && !e[n]) {
				var o = {};
				d(i.seriesGroup,
				function(e) {
					var i = e.coordinateSystem,
					n = e.originalData;
					e.get("showLegendSymbol") && t.getComponent("legend") && n.each(n.mapDimension("value"),
					function(t, e) {
						var a = n.getName(e),
						r = i.getRegion(a);
						if (r && !isNaN(t)) {
							var s = o[a] || 0,
							l = i.dataToPoint(r.center);
							o[a] = s + 1,
							n.setItemLayout(e, {
								point: l,
								offset: s
							})
						}
					})
				});
				var a = i.getData();
				a.each(function(t) {
					var e = a.getName(t),
					i = a.getItemLayout(t) || {};
					i.showLabel = !o[e],
					a.setItemLayout(t, i)
				}),
				e[n] = !0
			}
		})
	}),
	ds(function(t) {
		t.eachSeriesByType("map",
		function(t) {
			var e = t.get("color"),
			i = t.getModel("itemStyle"),
			n = i.get("areaColor"),
			o = i.get("color") || e[t.seriesIndex % e.length];
			t.getData().setVisual({
				areaColor: n,
				color: o
			})
		})
	}),
	ls(FM.PROCESSOR.STATISTIC,
	function(t) {
		var e = {};
		t.eachSeriesByType("map",
		function(t) {
			var i = t.getHostGeoModel(),
			n = i ? "o" + i.id: "i" + t.getMapType(); (e[n] = e[n] || []).push(t)
		}),
		d(e,
		function(t, e) {
			for (var i = fu(f(t,
			function(t) {
				return t.getData()
			}), t[0].get("mapValueCalculation")), n = 0; n < t.length; n++) t[n].originalData = t[n].getData();
			for (n = 0; n < t.length; n++) t[n].seriesGroup = t,
			t[n].needsDrawMap = 0 === n && !t[n].getHostGeoModel(),
			t[n].setData(i.cloneShallow()),
			t[n].mainSeries = t[0]
		})
	}),
	ss(function(t) {
		var e = [];
		d(t.series,
		function(t) {
			t && "map" === t.type && (e.push(t), t.map = t.map || t.mapType, r(t, t.mapLocation))
		})
	}),
	uA("map", [{
		type: "mapToggleSelect",
		event: "mapselectchanged",
		method: "toggleSelected"
	},
	{
		type: "mapSelect",
		event: "mapselected",
		method: "select"
	},
	{
		type: "mapUnSelect",
		event: "mapunselected",
		method: "unSelect"
	}]);
	var NA = d,
	EA = "\0__link_datas",
	zA = "\0__link_mainData",
	RA = function(t, e) {
		this.name = t || "",
		this.depth = 0,
		this.height = 0,
		this.parentNode = null,
		this.dataIndex = -1,
		this.children = [],
		this.viewChildren = [],
		this.hostTree = e
	};
	RA.prototype = {
		constructor: RA,
		isRemoved: function() {
			return this.dataIndex < 0
		},
		eachNode: function(t, e, i) {
			"function" == typeof t && (i = e, e = t, t = null),
			_(t = t || {}) && (t = {
				order: t
			});
			var n, o = t.order || "preorder",
			a = this[t.attr || "children"];
			"preorder" === o && (n = e.call(i, this));
			for (var r = 0; ! n && r < a.length; r++) a[r].eachNode(t, e, i);
			"postorder" === o && e.call(i, this)
		},
		updateDepthAndHeight: function(t) {
			var e = 0;
			this.depth = t;
			for (var i = 0; i < this.children.length; i++) {
				var n = this.children[i];
				n.updateDepthAndHeight(t + 1),
				n.height > e && (e = n.height)
			}
			this.height = e + 1
		},
		getNodeById: function(t) {
			if (this.getId() === t) return this;
			for (var e = 0,
			i = this.children,
			n = i.length; e < n; e++) {
				var o = i[e].getNodeById(t);
				if (o) return o
			}
		},
		contains: function(t) {
			if (t === this) return ! 0;
			for (var e = 0,
			i = this.children,
			n = i.length; e < n; e++) {
				var o = i[e].contains(t);
				if (o) return o
			}
		},
		getAncestors: function(t) {
			for (var e = [], i = t ? this: this.parentNode; i;) e.push(i),
			i = i.parentNode;
			return e.reverse(),
			e
		},
		getValue: function(t) {
			var e = this.hostTree.data;
			return e.get(e.getDimension(t || "value"), this.dataIndex)
		},
		setLayout: function(t, e) {
			this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, t, e)
		},
		getLayout: function() {
			return this.hostTree.data.getItemLayout(this.dataIndex)
		},
		getModel: function(t) {
			if (! (this.dataIndex < 0)) {
				var e, i = this.hostTree,
				n = i.data.getItemModel(this.dataIndex),
				o = this.getLevelModel();
				return o || 0 !== this.children.length && (0 === this.children.length || !1 !== this.isExpand) || (e = this.getLeavesModel()),
				n.getModel(t, (o || e || i.hostModel).getModel(t))
			}
		},
		getLevelModel: function() {
			return (this.hostTree.levelModels || [])[this.depth]
		},
		getLeavesModel: function() {
			return this.hostTree.leavesModel
		},
		setVisual: function(t, e) {
			this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, t, e)
		},
		getVisual: function(t, e) {
			return this.hostTree.data.getItemVisual(this.dataIndex, t, e)
		},
		getRawIndex: function() {
			return this.hostTree.data.getRawIndex(this.dataIndex)
		},
		getId: function() {
			return this.hostTree.data.getId(this.dataIndex)
		},
		isAncestorOf: function(t) {
			for (var e = t.parentNode; e;) {
				if (e === this) return ! 0;
				e = e.parentNode
			}
			return ! 1
		},
		isDescendantOf: function(t) {
			return t !== this && t.isAncestorOf(this)
		}
	},
	bu.prototype = {
		constructor: bu,
		type: "tree",
		eachNode: function(t, e, i) {
			this.root.eachNode(t, e, i)
		},
		getNodeByDataIndex: function(t) {
			var e = this.data.getRawIndex(t);
			return this._nodes[e]
		},
		getNodeByName: function(t) {
			return this.root.getNodeByName(t)
		},
		update: function() {
			for (var t = this.data,
			e = this._nodes,
			i = 0,
			n = e.length; i < n; i++) e[i].dataIndex = -1;
			for (var i = 0,
			n = t.count(); i < n; i++) e[t.getRawIndex(i)].dataIndex = i
		},
		clearLayouts: function() {
			this.data.clearItemLayouts()
		}
	},
	bu.createTree = function(t, e, i) {
		function n(t, e) {
			var i = t.value;
			r = Math.max(r, y(i) ? i.length: 1),
			a.push(t);
			var s = new RA(t.name, o);
			e ? Su(s, e) : o.root = s,
			o._nodes.push(s);
			var l = t.children;
			if (l) for (var h = 0; h < l.length; h++) n(l[h], s)
		}
		var o = new bu(e, i.levels, i.leaves),
		a = [],
		r = 1;
		n(t),
		o.root.updateDepthAndHeight(0);
		var s = wI(a, {
			coordDimensions: ["value"],
			dimensionsCount: r
		}),
		l = new yI(s, e);
		return l.initData(a),
		pu({
			mainData: l,
			struct: o,
			structAttr: "tree"
		}),
		o.update(),
		o
	},
	uM.extend({
		type: "series.tree",
		layoutInfo: null,
		layoutMode: "box",
		getInitialData: function(t) {
			var e = {
				name: t.name,
				children: t.data
			},
			i = t.leaves || {},
			n = {};
			n.leaves = i;
			var o = bu.createTree(e, this, n),
			a = 0;
			o.eachNode("preorder",
			function(t) {
				t.depth > a && (a = t.depth)
			});
			var r = t.expandAndCollapse && t.initialTreeDepth >= 0 ? t.initialTreeDepth: a;
			return o.root.eachNode("preorder",
			function(t) {
				var e = t.hostTree.data.getRawDataItem(t.dataIndex);
				t.isExpand = e && null != e.collapsed ? !e.collapsed: t.depth <= r
			}),
			o.data
		},
		formatTooltip: function(t) {
			for (var e = this.getData().tree, i = e.root.children[0], n = e.getNodeByDataIndex(t), o = n.getValue(), a = n.name; n && n !== i;) a = n.parentNode.name + "." + a,
			n = n.parentNode;
			return Ho(a + (isNaN(o) || null == o ? "": " : " + o))
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			left: "12%",
			top: "12%",
			right: "12%",
			bottom: "12%",
			layout: "orthogonal",
			orient: "horizontal",
			symbol: "emptyCircle",
			symbolSize: 7,
			expandAndCollapse: !0,
			initialTreeDepth: 2,
			lineStyle: {
				color: "#ccc",
				width: 1.5,
				curveness: .5
			},
			itemStyle: {
				color: "lightsteelblue",
				borderColor: "#c23531",
				borderWidth: 1.5
			},
			label: {
				show: !0,
				color: "#555"
			},
			leaves: {
				label: {
					show: !0
				}
			},
			animationEasing: "linear",
			animationDuration: 700,
			animationDurationUpdate: 1e3
		}
	}),
	ys({
		type: "tree",
		init: function(t, e) {
			this._oldTree,
			this._mainGroup = new S_,
			this.group.add(this._mainGroup)
		},
		render: function(t, e, i, n) {
			var o = t.getData(),
			a = t.layoutInfo,
			r = this._mainGroup,
			s = t.get("layout");
			"radial" === s ? r.attr("position", [a.x + a.width / 2, a.y + a.height / 2]) : r.attr("position", [a.x, a.y]);
			var l = this._data,
			h = {
				expandAndCollapse: t.get("expandAndCollapse"),
				layout: s,
				orient: t.get("orient"),
				curvature: t.get("lineStyle.curveness"),
				symbolRotate: t.get("symbolRotate"),
				symbolOffset: t.get("symbolOffset"),
				hoverAnimation: t.get("hoverAnimation"),
				useNameLabel: !0,
				fadeIn: !0
			};
			o.diff(l).add(function(e) {
				Ru(o, e) && Vu(o, e, null, r, t, h)
			}).update(function(e, i) {
				var n = l.getItemGraphicEl(i);
				Ru(o, e) ? Vu(o, e, n, r, t, h) : n && Gu(o, e, n, r, t, h)
			}).remove(function(e) {
				var i = l.getItemGraphicEl(e);
				Gu(o, e, i, r, t, h)
			}).execute(),
			!0 === h.expandAndCollapse && o.eachItemGraphicEl(function(e, n) {
				e.off("click").on("click",
				function() {
					i.dispatchAction({
						type: "treeExpandAndCollapse",
						seriesId: t.id,
						dataIndex: n
					})
				})
			}),
			this._data = o
		},
		dispose: function() {},
		remove: function() {
			this._mainGroup.removeAll(),
			this._data = null
		}
	}),
	hs({
		type: "treeExpandAndCollapse",
		event: "treeExpandAndCollapse",
		update: "update"
	},
	function(t, e) {
		e.eachComponent({
			mainType: "series",
			subType: "tree",
			query: t
		},
		function(e) {
			var i = t.dataIndex,
			n = e.getData().tree.getNodeByDataIndex(i);
			n.isExpand = !n.isExpand
		})
	});
	var BA = function(t, e) {
		var i = Cu(t, e);
		t.layoutInfo = i;
		var n = t.get("layout"),
		o = 0,
		a = 0,
		r = null;
		"radial" === n ? (o = 2 * Math.PI, a = Math.min(i.height, i.width) / 2, r = Au(function(t, e) {
			return (t.parentNode === e.parentNode ? 1 : 2) / t.depth
		})) : (o = i.width, a = i.height, r = Au());
		var s = t.getData().tree.root,
		l = s.children[0];
		Mu(s),
		Fu(l, Iu, r),
		s.hierNode.modifier = -l.hierNode.prelim,
		Hu(l, Tu);
		var h = l,
		u = l,
		c = l;
		Hu(l,
		function(t) {
			var e = t.getLayout().x;
			e < h.getLayout().x && (h = t),
			e > u.getLayout().x && (u = t),
			t.depth > c.depth && (c = t)
		});
		var d = h === u ? 1 : r(h, u) / 2,
		f = d - h.getLayout().x,
		p = 0,
		g = 0,
		m = 0,
		v = 0;
		"radial" === n ? (p = o / (u.getLayout().x + d + f), g = a / (c.depth - 1 || 1), Hu(l,
		function(t) {
			m = (t.getLayout().x + f) * p,
			v = (t.depth - 1) * g;
			var e = Du(m, v);
			t.setLayout({
				x: e.x,
				y: e.y,
				rawX: m,
				rawY: v
			},
			!0)
		})) : "horizontal" === t.get("orient") ? (g = a / (u.getLayout().x + d + f), p = o / (c.depth - 1 || 1), Hu(l,
		function(t) {
			v = (t.getLayout().x + f) * g,
			m = (t.depth - 1) * p,
			t.setLayout({
				x: m,
				y: v
			},
			!0)
		})) : (p = o / (u.getLayout().x + d + f), g = a / (c.depth - 1 || 1), Hu(l,
		function(t) {
			m = (t.getLayout().x + f) * p,
			v = (t.depth - 1) * g,
			t.setLayout({
				x: m,
				y: v
			},
			!0)
		}))
	};
	ds(bT("tree", "circle")),
	cs(function(t, e) {
		t.eachSeriesByType("tree",
		function(t) {
			BA(t, e)
		})
	}),
	cs(function(t, e) {
		t.eachSeriesByType("tree",
		function(t) {
			BA(t, e)
		})
	}),
	uM.extend({
		type: "series.treemap",
		layoutMode: "box",
		dependencies: ["grid", "polar"],
		_viewRoot: null,
		defaultOption: {
			progressive: 0,
			hoverLayerThreshold: 1 / 0,
			left: "center",
			top: "middle",
			right: null,
			bottom: null,
			width: "80%",
			height: "80%",
			sort: !0,
			clipWindow: "origin",
			squareRatio: .5 * (1 + Math.sqrt(5)),
			leafDepth: null,
			drillDownIcon: "▶",
			zoomToNodeRatio: .1024,
			roam: !0,
			nodeClick: "zoomToNode",
			animation: !0,
			animationDurationUpdate: 900,
			animationEasing: "quinticInOut",
			breadcrumb: {
				show: !0,
				height: 22,
				left: "center",
				top: "bottom",
				emptyItemWidth: 25,
				itemStyle: {
					color: "rgba(0,0,0,0.7)",
					borderColor: "rgba(255,255,255,0.7)",
					borderWidth: 1,
					shadowColor: "rgba(150,150,150,1)",
					shadowBlur: 3,
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					textStyle: {
						color: "#fff"
					}
				},
				emphasis: {
					textStyle: {}
				}
			},
			label: {
				show: !0,
				distance: 0,
				padding: 5,
				position: "inside",
				color: "#fff",
				ellipsis: !0
			},
			upperLabel: {
				show: !1,
				position: [0, "50%"],
				height: 20,
				color: "#fff",
				ellipsis: !0,
				verticalAlign: "middle"
			},
			itemStyle: {
				color: null,
				colorAlpha: null,
				colorSaturation: null,
				borderWidth: 0,
				gapWidth: 0,
				borderColor: "#fff",
				borderColorSaturation: null
			},
			emphasis: {
				upperLabel: {
					show: !0,
					position: [0, "50%"],
					color: "#fff",
					ellipsis: !0,
					verticalAlign: "middle"
				}
			},
			visualDimension: 0,
			visualMin: null,
			visualMax: null,
			color: [],
			colorAlpha: null,
			colorSaturation: null,
			colorMappingBy: "index",
			visibleMin: 10,
			childrenVisibleMin: null,
			levels: []
		},
		getInitialData: function(t, e) {
			var i = {
				name: t.name,
				children: t.data
			};
			Yu(i);
			var n = t.levels || [];
			n = t.levels = qu(n, e);
			var o = {};
			return o.levels = n,
			bu.createTree(i, this, o).data
		},
		optionUpdated: function() {
			this.resetViewRoot()
		},
		formatTooltip: function(t) {
			var e = this.getData(),
			i = this.getRawValue(t),
			n = Wo(y(i) ? i[0] : i);
			return Ho(e.getName(t) + ": " + n)
		},
		getDataParams: function(t) {
			var e = uM.prototype.getDataParams.apply(this, arguments),
			i = this.getData().tree.getNodeByDataIndex(t);
			return e.treePathInfo = Xu(i, this),
			e
		},
		setLayoutInfo: function(t) {
			this.layoutInfo = this.layoutInfo || {},
			a(this.layoutInfo, t)
		},
		mapIdToIndex: function(t) {
			var e = this._idIndexMap;
			e || (e = this._idIndexMap = z(), this._idIndexMapCount = 0);
			var i = e.get(t);
			return null == i && e.set(t, i = this._idIndexMapCount++),
			i
		},
		getViewRoot: function() {
			return this._viewRoot
		},
		resetViewRoot: function(t) {
			t ? this._viewRoot = t: t = this._viewRoot;
			var e = this.getRawData().tree.root;
			t && (t === e || e.contains(t)) || (this._viewRoot = e)
		}
	});
	var VA = 5;
	$u.prototype = {
		constructor: $u,
		render: function(t, e, i, n) {
			var o = t.getModel("breadcrumb"),
			a = this.group;
			if (a.removeAll(), o.get("show") && i) {
				var r = o.getModel("itemStyle"),
				s = r.getModel("textStyle"),
				l = {
					pos: {
						left: o.get("left"),
						right: o.get("right"),
						top: o.get("top"),
						bottom: o.get("bottom")
					},
					box: {
						width: e.getWidth(),
						height: e.getHeight()
					},
					emptyItemWidth: o.get("emptyItemWidth"),
					totalWidth: 0,
					renderList: []
				};
				this._prepare(i, l, s),
				this._renderContent(t, l, r, s, n),
				Jo(a, l.pos, l.box)
			}
		},
		_prepare: function(t, e, i) {
			for (var n = t; n; n = n.parentNode) {
				var o = n.getModel().get("name"),
				a = i.getTextRect(o),
				r = Math.max(a.width + 16, e.emptyItemWidth);
				e.totalWidth += r + 8,
				e.renderList.push({
					node: n,
					text: o,
					width: r
				})
			}
		},
		_renderContent: function(t, e, i, n, o) {
			for (var a = 0,
			s = e.emptyItemWidth,
			l = t.get("breadcrumb.height"), h = $o(e.pos, e.box), u = e.totalWidth, c = e.renderList, d = c.length - 1; d >= 0; d--) {
				var f = c[d],
				p = f.node,
				g = f.width,
				m = f.text;
				u > h.width && (u -= g - s, g = s, m = null);
				var y = new Rb({
					shape: {
						points: Ku(a, 0, g, l, d === c.length - 1, 0 === d)
					},
					style: r(i.getItemStyle(), {
						lineJoin: "bevel",
						text: m,
						textFill: n.getTextColor(),
						textFont: n.getFont()
					}),
					z: 10,
					onclick: v(o, p)
				});
				this.group.add(y),
				Ju(y, t, p),
				a += g + 8
			}
		},
		remove: function() {
			this.group.removeAll()
		}
	};
	var GA = m,
	WA = S_,
	FA = Vb,
	HA = d,
	ZA = ["label"],
	UA = ["emphasis", "label"],
	jA = ["upperLabel"],
	XA = ["emphasis", "upperLabel"],
	YA = 10,
	qA = 1,
	$A = 2,
	KA = Sw([["fill", "color"], ["stroke", "strokeColor"], ["lineWidth", "strokeWidth"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
	JA = function(t) {
		var e = KA(t);
		return e.stroke = e.fill = e.lineWidth = null,
		e
	};
	ys({
		type: "treemap",
		init: function(t, e) {
			this._containerGroup,
			this._storage = {
				nodeGroup: [],
				background: [],
				content: []
			},
			this._oldTree,
			this._breadcrumb,
			this._controller,
			this._state = "ready"
		},
		render: function(t, e, i, n) {
			if (! (l(e.findComponents({
				mainType: "series",
				subType: "treemap",
				query: n
			}), t) < 0)) {
				this.seriesModel = t,
				this.api = i,
				this.ecModel = e;
				var o = Zu(n, ["treemapZoomToNode", "treemapRootToNode"], t),
				a = n && n.type,
				r = t.layoutInfo,
				s = !this._oldTree,
				h = this._storage,
				u = "treemapRootToNode" === a && o && h ? {
					rootNodeGroup: h.nodeGroup[o.node.getRawIndex()],
					direction: n.direction
				}: null,
				c = this._giveContainerGroup(r),
				d = this._doRender(c, t, u);
				s || a && "treemapZoomToNode" !== a && "treemapRootToNode" !== a ? d.renderFinally() : this._doAnimation(c, d, t, u),
				this._resetController(i),
				this._renderBreadcrumb(t, i, o)
			}
		},
		_giveContainerGroup: function(t) {
			var e = this._containerGroup;
			return e || (e = this._containerGroup = new WA, this._initEvents(e), this.group.add(e)),
			e.attr("position", [t.x, t.y]),
			e
		},
		_doRender: function(t, e, i) {
			function n(t, e, i, o, a) {
				function r(t) {
					return t.getId()
				}
				function s(r, s) {
					var l = null != r ? t[r] : null,
					h = null != s ? e[s] : null,
					c = u(l, h, i, a);
					c && n(l && l.viewChildren || [], h && h.viewChildren || [], c, o, a + 1)
				}
				o ? (e = t, HA(t,
				function(t, e) { ! t.isRemoved() && s(e, e)
				})) : new ws(e, t, r, r).add(s).update(s).remove(v(s, null)).execute()
			}
			var o = e.getData().tree,
			a = this._oldTree,
			r = {
				nodeGroup: [],
				background: [],
				content: []
			},
			s = {
				nodeGroup: [],
				background: [],
				content: []
			},
			l = this._storage,
			h = [],
			u = v(tc, e, s, l, i, r, h);
			n(o.root ? [o.root] : [], a && a.root ? [a.root] : [], t, o === a || !a, 0);
			var c = function(t) {
				var e = {
					nodeGroup: [],
					background: [],
					content: []
				};
				return t && HA(t,
				function(t, i) {
					var n = e[i];
					HA(t,
					function(t) {
						t && (n.push(t), t.__tmWillDelete = 1)
					})
				}),
				e
			} (l);
			return this._oldTree = o,
			this._storage = s,
			{
				lastsForAnimation: r,
				willDeleteEls: c,
				renderFinally: function() {
					HA(c,
					function(t) {
						HA(t,
						function(t) {
							t.parent && t.parent.remove(t)
						})
					}),
					HA(h,
					function(t) {
						t.invisible = !0,
						t.dirty()
					})
				}
			}
		},
		_doAnimation: function(t, e, i, n) {
			if (i.get("animation")) {
				var o = i.get("animationDurationUpdate"),
				r = i.get("animationEasing"),
				s = Qu();
				HA(e.willDeleteEls,
				function(t, e) {
					HA(t,
					function(t, i) {
						if (!t.invisible) {
							var a, l = t.parent;
							if (n && "drillDown" === n.direction) a = l === n.rootNodeGroup ? {
								shape: {
									x: 0,
									y: 0,
									width: l.__tmNodeWidth,
									height: l.__tmNodeHeight
								},
								style: {
									opacity: 0
								}
							}: {
								style: {
									opacity: 0
								}
							};
							else {
								var h = 0,
								u = 0;
								l.__tmWillDelete || (h = l.__tmNodeWidth / 2, u = l.__tmNodeHeight / 2),
								a = "nodeGroup" === e ? {
									position: [h, u],
									style: {
										opacity: 0
									}
								}: {
									shape: {
										x: h,
										y: u,
										width: 0,
										height: 0
									},
									style: {
										opacity: 0
									}
								}
							}
							a && s.add(t, a, o, r)
						}
					})
				}),
				HA(this._storage,
				function(t, i) {
					HA(t,
					function(t, n) {
						var l = e.lastsForAnimation[i][n],
						h = {};
						l && ("nodeGroup" === i ? l.old && (h.position = t.position.slice(), t.attr("position", l.old)) : (l.old && (h.shape = a({},
						t.shape), t.setShape(l.old)), l.fadein ? (t.setStyle("opacity", 0), h.style = {
							opacity: 1
						}) : 1 !== t.style.opacity && (h.style = {
							opacity: 1
						})), s.add(t, h, o, r))
					})
				},
				this),
				this._state = "animating",
				s.done(GA(function() {
					this._state = "ready",
					e.renderFinally()
				},
				this)).start()
			}
		},
		_resetController: function(t) {
			var e = this._controller;
			e || ((e = this._controller = new Zh(t.getZr())).enable(this.seriesModel.get("roam")), e.on("pan", GA(this._onPan, this)), e.on("zoom", GA(this._onZoom, this)));
			var i = new Kt(0, 0, t.getWidth(), t.getHeight());
			e.setPointerChecker(function(t, e, n) {
				return i.contain(e, n)
			})
		},
		_clearController: function() {
			var t = this._controller;
			t && (t.dispose(), t = null)
		},
		_onPan: function(t, e) {
			if ("animating" !== this._state && (Math.abs(t) > 3 || Math.abs(e) > 3)) {
				var i = this.seriesModel.getData().tree.root;
				if (!i) return;
				var n = i.getLayout();
				if (!n) return;
				this.api.dispatchAction({
					type: "treemapMove",
					from: this.uid,
					seriesId: this.seriesModel.id,
					rootRect: {
						x: n.x + t,
						y: n.y + e,
						width: n.width,
						height: n.height
					}
				})
			}
		},
		_onZoom: function(t, e, i) {
			if ("animating" !== this._state) {
				var n = this.seriesModel.getData().tree.root;
				if (!n) return;
				var o = n.getLayout();
				if (!o) return;
				var a = new Kt(o.x, o.y, o.width, o.height),
				r = this.seriesModel.layoutInfo;
				e -= r.x,
				i -= r.y;
				var s = st();
				ct(s, s, [ - e, -i]),
				ft(s, s, [t, t]),
				ct(s, s, [e, i]),
				a.applyTransform(s),
				this.api.dispatchAction({
					type: "treemapRender",
					from: this.uid,
					seriesId: this.seriesModel.id,
					rootRect: {
						x: a.x,
						y: a.y,
						width: a.width,
						height: a.height
					}
				})
			}
		},
		_initEvents: function(t) {
			t.on("click",
			function(t) {
				if ("ready" === this._state) {
					var e = this.seriesModel.get("nodeClick", !0);
					if (e) {
						var i = this.findTarget(t.offsetX, t.offsetY);
						if (i) {
							var n = i.node;
							if (n.getLayout().isLeafRoot) this._rootToNode(i);
							else if ("zoomToNode" === e) this._zoomToNode(i);
							else if ("link" === e) {
								var o = n.hostTree.data.getItemModel(n.dataIndex),
								a = o.get("link", !0),
								r = o.get("target", !0) || "blank";
								a && window.open(a, r)
							}
						}
					}
				}
			},
			this)
		},
		_renderBreadcrumb: function(t, e, i) {
			i || (i = null != t.get("leafDepth", !0) ? {
				node: t.getViewRoot()
			}: this.findTarget(e.getWidth() / 2, e.getHeight() / 2)) || (i = {
				node: t.getData().tree.root
			}),
			(this._breadcrumb || (this._breadcrumb = new $u(this.group))).render(t, e, i.node, GA(function(e) {
				"animating" !== this._state && (ju(t.getViewRoot(), e) ? this._rootToNode({
					node: e
				}) : this._zoomToNode({
					node: e
				}))
			},
			this))
		},
		remove: function() {
			this._clearController(),
			this._containerGroup && this._containerGroup.removeAll(),
			this._storage = {
				nodeGroup: [],
				background: [],
				content: []
			},
			this._state = "ready",
			this._breadcrumb && this._breadcrumb.remove()
		},
		dispose: function() {
			this._clearController()
		},
		_zoomToNode: function(t) {
			this.api.dispatchAction({
				type: "treemapZoomToNode",
				from: this.uid,
				seriesId: this.seriesModel.id,
				targetNode: t.node
			})
		},
		_rootToNode: function(t) {
			this.api.dispatchAction({
				type: "treemapRootToNode",
				from: this.uid,
				seriesId: this.seriesModel.id,
				targetNode: t.node
			})
		},
		findTarget: function(t, e) {
			var i;
			return this.seriesModel.getViewRoot().eachNode({
				attr: "viewChildren",
				order: "preorder"
			},
			function(n) {
				var o = this._storage.background[n.getRawIndex()];
				if (o) {
					var a = o.transformCoordToLocal(t, e),
					r = o.shape;
					if (! (r.x <= a[0] && a[0] <= r.x + r.width && r.y <= a[1] && a[1] <= r.y + r.height)) return ! 1;
					i = {
						node: n,
						offsetX: a[0],
						offsetY: a[1]
					}
				}
			},
			this),
			i
		}
	});
	for (var QA = ["treemapZoomToNode", "treemapRender", "treemapMove"], tD = 0; tD < QA.length; tD++) hs({
		type: QA[tD],
		update: "updateView"
	},
	function() {});
	hs({
		type: "treemapRootToNode",
		update: "updateView"
	},
	function(t, e) {
		e.eachComponent({
			mainType: "series",
			subType: "treemap",
			query: t
		},
		function(e, i) {
			var n = Zu(t, ["treemapZoomToNode", "treemapRootToNode"], e);
			if (n) {
				var o = e.getViewRoot();
				o && (t.direction = ju(o, n.node) ? "rollUp": "drillDown"),
				e.resetViewRoot(n.node)
			}
		})
	});
	var eD = d,
	iD = w,
	nD = -1,
	oD = function(t) {
		var e = t.mappingMethod,
		n = t.type,
		o = this.option = i(t);
		this.type = n,
		this.mappingMethod = e,
		this._normalizeData = rD[e];
		var a = aD[n];
		this.applyVisual = a.applyVisual,
		this.getColorMapper = a.getColorMapper,
		this._doMap = a._doMap[e],
		"piecewise" === e ? (oc(o), ic(o)) : "category" === e ? o.categories ? nc(o) : oc(o, !0) : (k("linear" !== e || o.dataExtent), oc(o))
	};
	oD.prototype = {
		constructor: oD,
		mapValueToVisual: function(t) {
			var e = this._normalizeData(t);
			return this._doMap(e, t)
		},
		getNormalizer: function() {
			return m(this._normalizeData, this)
		}
	};
	var aD = oD.visualHandlers = {
		color: {
			applyVisual: sc("color"),
			getColorMapper: function() {
				var t = this.option;
				return m("category" === t.mappingMethod ?
				function(t, e) {
					return ! e && (t = this._normalizeData(t)),
					lc.call(this, t)
				}: function(e, i, n) {
					var o = !!n;
					return ! i && (e = this._normalizeData(e)),
					n = Ot(e, t.parsedVisual, n),
					o ? n: Rt(n, "rgba")
				},
				this)
			},
			_doMap: {
				linear: function(t) {
					return Rt(Ot(t, this.option.parsedVisual), "rgba")
				},
				category: lc,
				piecewise: function(t, e) {
					var i = cc.call(this, e);
					return null == i && (i = Rt(Ot(t, this.option.parsedVisual), "rgba")),
					i
				},
				fixed: hc
			}
		},
		colorHue: ac(function(t, e) {
			return Et(t, e)
		}),
		colorSaturation: ac(function(t, e) {
			return Et(t, null, e)
		}),
		colorLightness: ac(function(t, e) {
			return Et(t, null, null, e)
		}),
		colorAlpha: ac(function(t, e) {
			return zt(t, e)
		}),
		opacity: {
			applyVisual: sc("opacity"),
			_doMap: uc([0, 1])
		},
		symbol: {
			applyVisual: function(t, e, i) {
				var n = this.mapValueToVisual(t);
				if (_(n)) i("symbol", n);
				else if (iD(n)) for (var o in n) n.hasOwnProperty(o) && i(o, n[o])
			},
			_doMap: {
				linear: rc,
				category: lc,
				piecewise: function(t, e) {
					var i = cc.call(this, e);
					return null == i && (i = rc.call(this, t)),
					i
				},
				fixed: hc
			}
		},
		symbolSize: {
			applyVisual: sc("symbolSize"),
			_doMap: uc([0, 1])
		}
	},
	rD = {
		linear: function(t) {
			return Io(t, this.option.dataExtent, [0, 1], !0)
		},
		piecewise: function(t) {
			var e = this.option.pieceList,
			i = oD.findPieceIndex(t, e, !0);
			if (null != i) return Io(i, [0, e.length - 1], [0, 1], !0)
		},
		category: function(t) {
			var e = this.option.categories ? this.option.categoryMap[t] : t;
			return null == e ? nD: e
		},
		fixed: B
	};
	oD.listVisualTypes = function() {
		var t = [];
		return d(aD,
		function(e, i) {
			t.push(i)
		}),
		t
	},
	oD.addVisualHandler = function(t, e) {
		aD[t] = e
	},
	oD.isValidType = function(t) {
		return aD.hasOwnProperty(t)
	},
	oD.eachVisual = function(t, e, i) {
		w(t) ? d(t, e, i) : e.call(i, t)
	},
	oD.mapVisual = function(t, e, i) {
		var n, o = y(t) ? [] : w(t) ? {}: (n = !0, null);
		return oD.eachVisual(t,
		function(t, a) {
			var r = e.call(i, t, a);
			n ? o = r: o[a] = r
		}),
		o
	},
	oD.retrieveVisuals = function(t) {
		var e, i = {};
		return t && eD(aD,
		function(n, o) {
			t.hasOwnProperty(o) && (i[o] = t[o], e = !0)
		}),
		e ? i: null
	},
	oD.prepareVisualTypes = function(t) {
		if (iD(t)) {
			var e = [];
			eD(t,
			function(t, i) {
				e.push(i)
			}),
			t = e
		} else {
			if (!y(t)) return [];
			t = t.slice()
		}
		return t.sort(function(t, e) {
			return "color" === e && "color" !== t && 0 === t.indexOf("color") ? 1 : -1
		}),
		t
	},
	oD.dependsOn = function(t, e) {
		return "color" === e ? !(!t || 0 !== t.indexOf(e)) : t === e
	},
	oD.findPieceIndex = function(t, e, i) {
		function n(e, i) {
			var n = Math.abs(e - t);
			n < a && (a = n, o = i)
		}
		for (var o, a = 1 / 0,
		r = 0,
		s = e.length; r < s; r++) {
			var l = e[r].value;
			if (null != l) {
				if (l === t || "string" == typeof l && l === t + "") return r;
				i && n(l, r)
			}
		}
		for (var r = 0,
		s = e.length; r < s; r++) {
			var h = e[r],
			u = h.interval,
			c = h.close;
			if (u) {
				if (u[0] === -1 / 0) {
					if (fc(c[1], t, u[1])) return r
				} else if (u[1] === 1 / 0) {
					if (fc(c[0], u[0], t)) return r
				} else if (fc(c[0], u[0], t) && fc(c[1], t, u[1])) return r;
				i && n(u[0], r),
				i && n(u[1], r)
			}
		}
		if (i) return t === 1 / 0 ? e.length - 1 : t === -1 / 0 ? 0 : o
	};
	var sD = y,
	lD = "itemStyle",
	hD = {
		seriesType: "treemap",
		reset: function(t, e, i, n) {
			var o = t.getData().tree,
			a = o.root,
			r = t.getModel(lD);
			a.isRemoved() || pc(a, {},
			f(o.levelModels,
			function(t) {
				return t ? t.get(lD) : null
			}), r, t.getViewRoot().getAncestors(), t)
		}
	},
	uD = Math.max,
	cD = Math.min,
	dD = T,
	fD = d,
	pD = ["itemStyle", "borderWidth"],
	gD = ["itemStyle", "gapWidth"],
	mD = ["upperLabel", "show"],
	vD = ["upperLabel", "height"],
	yD = {
		seriesType: "treemap",
		reset: function(t, e, i, n) {
			var o = i.getWidth(),
			r = i.getHeight(),
			s = t.option,
			l = Ko(t.getBoxLayoutParams(), {
				width: i.getWidth(),
				height: i.getHeight()
			}),
			h = s.size || [],
			u = To(dD(l.width, h[0]), o),
			c = To(dD(l.height, h[1]), r),
			d = n && n.type,
			f = Zu(n, ["treemapZoomToNode", "treemapRootToNode"], t),
			p = "treemapRender" === d || "treemapMove" === d ? n.rootRect: null,
			g = t.getViewRoot(),
			m = Uu(g);
			if ("treemapMove" !== d) {
				var v = "treemapZoomToNode" === d ? Cc(t, f, g, u, c) : p ? [p.width, p.height] : [u, c],
				y = s.sort;
				y && "asc" !== y && "desc" !== y && (y = "desc");
				var x = {
					squareRatio: s.squareRatio,
					sort: y,
					leafDepth: s.leafDepth
				};
				g.hostTree.clearLayouts();
				_ = {
					x: 0,
					y: 0,
					width: v[0],
					height: v[1],
					area: v[0] * v[1]
				};
				g.setLayout(_),
				bc(g, x, !1, 0);
				var _ = g.getLayout();
				fD(m,
				function(t, e) {
					var i = (m[e + 1] || g).getValue();
					t.setLayout(a({
						dataExtent: [i, i],
						borderWidth: 0,
						upperHeight: 0
					},
					_))
				})
			}
			var w = t.getData().tree.root;
			w.setLayout(Lc(l, p, f), !0),
			t.setLayoutInfo(l),
			kc(w, new Kt( - l.x, -l.y, o, r), m, g, 0)
		}
	};
	ds(hD),
	cs(yD);
	var xD = function(t) {
		this._directed = t || !1,
		this.nodes = [],
		this.edges = [],
		this._nodesMap = {},
		this._edgesMap = {},
		this.data,
		this.edgeData
	},
	_D = xD.prototype;
	_D.type = "graph",
	_D.isDirected = function() {
		return this._directed
	},
	_D.addNode = function(t, e) {
		t = t || "" + e;
		var i = this._nodesMap;
		if (!i[Oc(t)]) {
			var n = new Nc(t, e);
			return n.hostGraph = this,
			this.nodes.push(n),
			i[Oc(t)] = n,
			n
		}
	},
	_D.getNodeByIndex = function(t) {
		var e = this.data.getRawIndex(t);
		return this.nodes[e]
	},
	_D.getNodeById = function(t) {
		return this._nodesMap[Oc(t)]
	},
	_D.addEdge = function(t, e, i) {
		var n = this._nodesMap,
		o = this._edgesMap;
		if ("number" == typeof t && (t = this.nodes[t]), "number" == typeof e && (e = this.nodes[e]), Nc.isInstance(t) || (t = n[Oc(t)]), Nc.isInstance(e) || (e = n[Oc(e)]), t && e) {
			var a = t.id + "-" + e.id;
			if (!o[a]) {
				var r = new Ec(t, e, i);
				return r.hostGraph = this,
				this._directed && (t.outEdges.push(r), e.inEdges.push(r)),
				t.edges.push(r),
				t !== e && e.edges.push(r),
				this.edges.push(r),
				o[a] = r,
				r
			}
		}
	},
	_D.getEdgeByIndex = function(t) {
		var e = this.edgeData.getRawIndex(t);
		return this.edges[e]
	},
	_D.getEdge = function(t, e) {
		Nc.isInstance(t) && (t = t.id),
		Nc.isInstance(e) && (e = e.id);
		var i = this._edgesMap;
		return this._directed ? i[t + "-" + e] : i[t + "-" + e] || i[e + "-" + t]
	},
	_D.eachNode = function(t, e) {
		for (var i = this.nodes,
		n = i.length,
		o = 0; o < n; o++) i[o].dataIndex >= 0 && t.call(e, i[o], o)
	},
	_D.eachEdge = function(t, e) {
		for (var i = this.edges,
		n = i.length,
		o = 0; o < n; o++) i[o].dataIndex >= 0 && i[o].node1.dataIndex >= 0 && i[o].node2.dataIndex >= 0 && t.call(e, i[o], o)
	},
	_D.breadthFirstTraverse = function(t, e, i, n) {
		if (Nc.isInstance(e) || (e = this._nodesMap[Oc(e)]), e) {
			for (var o = "out" === i ? "outEdges": "in" === i ? "inEdges": "edges", a = 0; a < this.nodes.length; a++) this.nodes[a].__visited = !1;
			if (!t.call(n, e, null)) for (var r = [e]; r.length;) for (var s = r.shift(), l = s[o], a = 0; a < l.length; a++) {
				var h = l[a],
				u = h.node1 === s ? h.node2: h.node1;
				if (!u.__visited) {
					if (t.call(n, u, s)) return;
					r.push(u),
					u.__visited = !0
				}
			}
		}
	},
	_D.update = function() {
		for (var t = this.data,
		e = this.edgeData,
		i = this.nodes,
		n = this.edges,
		o = 0,
		a = i.length; o < a; o++) i[o].dataIndex = -1;
		for (var o = 0,
		a = t.count(); o < a; o++) i[t.getRawIndex(o)].dataIndex = o;
		e.filterSelf(function(t) {
			var i = n[e.getRawIndex(t)];
			return i.node1.dataIndex >= 0 && i.node2.dataIndex >= 0
		});
		for (var o = 0,
		a = n.length; o < a; o++) n[o].dataIndex = -1;
		for (var o = 0,
		a = e.count(); o < a; o++) n[e.getRawIndex(o)].dataIndex = o
	},
	_D.clone = function() {
		for (var t = new xD(this._directed), e = this.nodes, i = this.edges, n = 0; n < e.length; n++) t.addNode(e[n].id, e[n].dataIndex);
		for (n = 0; n < i.length; n++) {
			var o = i[n];
			t.addEdge(o.node1.id, o.node2.id, o.dataIndex)
		}
		return t
	},
	Nc.prototype = {
		constructor: Nc,
		degree: function() {
			return this.edges.length
		},
		inDegree: function() {
			return this.inEdges.length
		},
		outDegree: function() {
			return this.outEdges.length
		},
		getModel: function(t) {
			if (! (this.dataIndex < 0)) return this.hostGraph.data.getItemModel(this.dataIndex).getModel(t)
		}
	},
	Ec.prototype.getModel = function(t) {
		if (! (this.dataIndex < 0)) return this.hostGraph.edgeData.getItemModel(this.dataIndex).getModel(t)
	};
	var wD = function(t, e) {
		return {
			getValue: function(i) {
				var n = this[t][e];
				return n.get(n.getDimension(i || "value"), this.dataIndex)
			},
			setVisual: function(i, n) {
				this.dataIndex >= 0 && this[t][e].setItemVisual(this.dataIndex, i, n)
			},
			getVisual: function(i, n) {
				return this[t][e].getItemVisual(this.dataIndex, i, n)
			},
			setLayout: function(i, n) {
				this.dataIndex >= 0 && this[t][e].setItemLayout(this.dataIndex, i, n)
			},
			getLayout: function() {
				return this[t][e].getItemLayout(this.dataIndex)
			},
			getGraphicEl: function() {
				return this[t][e].getItemGraphicEl(this.dataIndex)
			},
			getRawIndex: function() {
				return this[t][e].getRawIndex(this.dataIndex)
			}
		}
	};
	u(Nc, wD("hostGraph", "data")),
	u(Ec, wD("hostGraph", "edgeData")),
	xD.Node = Nc,
	xD.Edge = Ec,
	Gi(Nc),
	Gi(Ec);
	var bD = function(t, e, i, n, o) {
		for (var a = new xD(n), r = 0; r < t.length; r++) a.addNode(T(t[r].id, t[r].name, r), r);
		for (var s = [], l = [], h = 0, r = 0; r < e.length; r++) {
			var u = e[r],
			c = u.source,
			d = u.target;
			a.addEdge(c, d, h) && (l.push(u), s.push(T(u.id, c + " > " + d)), h++)
		}
		var f, p = i.get("coordinateSystem");
		if ("cartesian2d" === p || "polar" === p) f = Bs(t, i);
		else {
			var g = Aa.get(p),
			m = wI(t, {
				coordDimensions: (g && "view" !== g.type ? g.dimensions || [] : []).concat(["value"])
			}); (f = new yI(m, i)).initData(t)
		}
		var v = new yI(["value"], i);
		return v.initData(l, s),
		o && o(f, v),
		pu({
			mainData: f,
			struct: a,
			structAttr: "graph",
			datas: {
				node: f,
				edge: v
			},
			datasAttr: {
				node: "data",
				edge: "edgeData"
			}
		}),
		a.update(),
		a
	},
	SD = vs({
		type: "series.graph",
		init: function(t) {
			SD.superApply(this, "init", arguments),
			this.legendDataProvider = function() {
				return this._categoriesData
			},
			this.fillDataTextStyle(t.edges || t.links),
			this._updateCategoriesData()
		},
		mergeOption: function(t) {
			SD.superApply(this, "mergeOption", arguments),
			this.fillDataTextStyle(t.edges || t.links),
			this._updateCategoriesData()
		},
		mergeDefaultAndTheme: function(t) {
			SD.superApply(this, "mergeDefaultAndTheme", arguments),
			Mi(t, ["edgeLabel"], ["show"])
		},
		getInitialData: function(t, e) {
			var i = t.edges || t.links || [],
			n = t.data || t.nodes || [],
			o = this;
			if (n && i) return bD(n, i, this, !0,
			function(t, i) {
				function n(t) {
					return (t = this.parsePath(t)) && "label" === t[0] ? r: this.parentModel
				}
				t.wrapMethod("getItemModel",
				function(t) {
					var e = o._categoriesModels[t.getShallow("category")];
					return e && (e.parentModel = t.parentModel, t.parentModel = e),
					t
				});
				var a = o.getModel("edgeLabel"),
				r = new _o({
					label: a.option
				},
				a.parentModel, e);
				i.wrapMethod("getItemModel",
				function(t) {
					return t.customizeGetParent(n),
					t
				})
			}).data
		},
		getGraph: function() {
			return this.getData().graph
		},
		getEdgeData: function() {
			return this.getGraph().edgeData
		},
		getCategoriesData: function() {
			return this._categoriesData
		},
		formatTooltip: function(t, e, i) {
			if ("edge" === i) {
				var n = this.getData(),
				o = this.getDataParams(t, i),
				a = n.graph.getEdgeByIndex(t),
				r = n.getName(a.node1.dataIndex),
				s = n.getName(a.node2.dataIndex),
				l = [];
				return null != r && l.push(r),
				null != s && l.push(s),
				l = Ho(l.join(" > ")),
				o.value && (l += " : " + Ho(o.value)),
				l
			}
			return SD.superApply(this, "formatTooltip", arguments)
		},
		_updateCategoriesData: function() {
			var t = f(this.option.categories || [],
			function(t) {
				return null != t.value ? t: a({
					value: 0
				},
				t)
			}),
			e = new yI(["value"], this);
			e.initData(t),
			this._categoriesData = e,
			this._categoriesModels = e.mapArray(function(t) {
				return e.getItemModel(t, !0)
			})
		},
		setZoom: function(t) {
			this.option.zoom = t
		},
		setCenter: function(t) {
			this.option.center = t
		},
		isAnimationEnabled: function() {
			return SD.superCall(this, "isAnimationEnabled") && !("force" === this.get("layout") && this.get("force.layoutAnimation"))
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "view",
			legendHoverLink: !0,
			hoverAnimation: !0,
			layout: null,
			focusNodeAdjacency: !1,
			circular: {
				rotateLabel: !1
			},
			force: {
				initLayout: null,
				repulsion: [0, 50],
				gravity: .1,
				edgeLength: 30,
				layoutAnimation: !0
			},
			left: "center",
			top: "center",
			symbol: "circle",
			symbolSize: 10,
			edgeSymbol: ["none", "none"],
			edgeSymbolSize: 10,
			edgeLabel: {
				position: "middle"
			},
			draggable: !1,
			roam: !1,
			center: null,
			zoom: 1,
			nodeScaleRatio: .6,
			label: {
				show: !1,
				formatter: "{b}"
			},
			itemStyle: {},
			lineStyle: {
				color: "#aaa",
				width: 1,
				curveness: 0,
				opacity: .5
			},
			emphasis: {
				label: {
					show: !0
				}
			}
		}
	}),
	MD = Gb.prototype,
	ID = Fb.prototype,
	TD = Nn({
		type: "ec-line",
		style: {
			stroke: "#000",
			fill: null
		},
		shape: {
			x1: 0,
			y1: 0,
			x2: 0,
			y2: 0,
			percent: 1,
			cpx1: null,
			cpy1: null
		},
		buildPath: function(t, e) { (zc(e) ? MD: ID).buildPath(t, e)
		},
		pointAt: function(t) {
			return zc(this.shape) ? MD.pointAt.call(this, t) : ID.pointAt.call(this, t)
		},
		tangentAt: function(t) {
			var e = this.shape,
			i = zc(e) ? [e.x2 - e.x1, e.y2 - e.y1] : ID.tangentAt.call(this, t);
			return q(i, i)
		}
	}),
	AD = ["fromSymbol", "toSymbol"],
	DD = Wc.prototype;
	DD.beforeUpdate = function() {
		var t = this,
		e = t.childOfName("fromSymbol"),
		i = t.childOfName("toSymbol"),
		n = t.childOfName("label");
		if (e || i || !n.ignore) {
			for (var o = 1,
			a = this.parent; a;) a.scale && (o /= a.scale[0]),
			a = a.parent;
			var r = t.childOfName("line");
			if (this.__dirty || r.__dirty) {
				var s = r.shape.percent,
				l = r.pointAt(0),
				h = r.pointAt(s),
				u = U([], h, l);
				if (q(u, u), e && (e.attr("position", l), c = r.tangentAt(0), e.attr("rotation", Math.PI / 2 - Math.atan2(c[1], c[0])), e.attr("scale", [o * s, o * s])), i) {
					i.attr("position", h);
					var c = r.tangentAt(1);
					i.attr("rotation", -Math.PI / 2 - Math.atan2(c[1], c[0])),
					i.attr("scale", [o * s, o * s])
				}
				if (!n.ignore) {
					n.attr("position", h);
					var d, f, p, g = 5 * o;
					if ("end" === n.__position) d = [u[0] * g + h[0], u[1] * g + h[1]],
					f = u[0] > .8 ? "left": u[0] < -.8 ? "right": "center",
					p = u[1] > .8 ? "top": u[1] < -.8 ? "bottom": "middle";
					else if ("middle" === n.__position) {
						var m = s / 2,
						v = [(c = r.tangentAt(m))[1], -c[0]],
						y = r.pointAt(m);
						v[1] > 0 && (v[0] = -v[0], v[1] = -v[1]),
						d = [y[0] + v[0] * g, y[1] + v[1] * g],
						f = "center",
						p = "bottom";
						var x = -Math.atan2(c[1], c[0]);
						h[0] < l[0] && (x = Math.PI + x),
						n.attr("rotation", x)
					} else d = [ - u[0] * g + l[0], -u[1] * g + l[1]],
					f = u[0] > .8 ? "right": u[0] < -.8 ? "left": "center",
					p = u[1] > .8 ? "bottom": u[1] < -.8 ? "top": "middle";
					n.attr({
						style: {
							textVerticalAlign: n.__verticalAlign || p,
							textAlign: n.__textAlign || f
						},
						position: d,
						scale: [o, o]
					})
				}
			}
		}
	},
	DD._createLine = function(t, e, i) {
		var n = t.hostModel,
		o = Vc(t.getItemLayout(e));
		o.shape.percent = 0,
		fo(o, {
			shape: {
				percent: 1
			}
		},
		n, e),
		this.add(o);
		var a = new Cb({
			name: "label"
		});
		this.add(a),
		d(AD,
		function(i) {
			var n = Bc(i, t, e);
			this.add(n),
			this[Rc(i)] = t.getItemVisual(e, i)
		},
		this),
		this._updateCommonStl(t, e, i)
	},
	DD.updateData = function(t, e, i) {
		var n = t.hostModel,
		o = this.childOfName("line"),
		a = t.getItemLayout(e),
		r = {
			shape: {}
		};
		Gc(r.shape, a),
		co(o, r, n, e),
		d(AD,
		function(i) {
			var n = t.getItemVisual(e, i),
			o = Rc(i);
			if (this[o] !== n) {
				this.remove(this.childOfName(i));
				var a = Bc(i, t, e);
				this.add(a)
			}
			this[o] = n
		},
		this),
		this._updateCommonStl(t, e, i)
	},
	DD._updateCommonStl = function(t, e, i) {
		var n = t.hostModel,
		o = this.childOfName("line"),
		a = i && i.lineStyle,
		s = i && i.hoverLineStyle,
		l = i && i.labelModel,
		h = i && i.hoverLabelModel;
		if (!i || t.hasItemOption) {
			var u = t.getItemModel(e);
			a = u.getModel("lineStyle").getLineStyle(),
			s = u.getModel("emphasis.lineStyle").getLineStyle(),
			l = u.getModel("label"),
			h = u.getModel("emphasis.label")
		}
		var c = t.getItemVisual(e, "color"),
		f = D(t.getItemVisual(e, "opacity"), a.opacity, 1);
		o.useStyle(r({
			strokeNoScale: !0,
			fill: "none",
			stroke: c,
			opacity: f
		},
		a)),
		o.hoverStyle = s,
		d(AD,
		function(t) {
			var e = this.childOfName(t);
			e && (e.setColor(c), e.setStyle({
				opacity: f
			}))
		},
		this);
		var p, g, m, v = l.getShallow("show"),
		y = h.getShallow("show"),
		x = this.childOfName("label");
		if (v || y) {
			if (p = c || "#000", null == (g = n.getFormattedLabel(e, "normal", t.dataType))) {
				var _ = n.getRawValue(e);
				g = null == _ ? t.getName(e) : isFinite(_) ? Ao(_) : _
			}
			m = A(n.getFormattedLabel(e, "emphasis", t.dataType), g)
		}
		if (v) {
			var w = io(x.style, l, {
				text: g
			},
			{
				autoColor: p
			});
			x.__textAlign = w.textAlign,
			x.__verticalAlign = w.textVerticalAlign,
			x.__position = l.get("position") || "middle"
		} else x.setStyle("text", null);
		x.hoverStyle = y ? {
			text: m,
			textFill: h.getTextColor(!0),
			fontStyle: h.getShallow("fontStyle"),
			fontWeight: h.getShallow("fontWeight"),
			fontSize: h.getShallow("fontSize"),
			fontFamily: h.getShallow("fontFamily")
		}: {
			text: null
		},
		x.ignore = !v && !y,
		to(this)
	},
	DD.highlight = function() {
		this.trigger("emphasis")
	},
	DD.downplay = function() {
		this.trigger("normal")
	},
	DD.updateLayout = function(t, e) {
		this.setLinePoints(t.getItemLayout(e))
	},
	DD.setLinePoints = function(t) {
		var e = this.childOfName("line");
		Gc(e.shape, t),
		e.dirty()
	},
	h(Wc, S_);
	var CD = Fc.prototype;
	CD.isPersistent = function() {
		return ! 0
	},
	CD.updateData = function(t) {
		var e = this,
		i = e.group,
		n = e._lineData;
		e._lineData = t,
		n || i.removeAll();
		var o = Uc(t);
		t.diff(n).add(function(i) {
			Hc(e, t, i, o)
		}).update(function(i, a) {
			Zc(e, n, t, a, i, o)
		}).remove(function(t) {
			i.remove(n.getItemGraphicEl(t))
		}).execute()
	},
	CD.updateLayout = function() {
		var t = this._lineData;
		t.eachItemGraphicEl(function(e, i) {
			e.updateLayout(t, i)
		},
		this)
	},
	CD.incrementalPrepareUpdate = function(t) {
		this._seriesScope = Uc(t),
		this._lineData = null,
		this.group.removeAll()
	},
	CD.incrementalUpdate = function(t, e) {
		for (var i = t.start; i < t.end; i++) if (Xc(e.getItemLayout(i))) {
			var n = new this._ctor(e, i, this._seriesScope);
			n.traverse(function(t) {
				t.isGroup || (t.incremental = t.useHoverLayer = !0)
			}),
			this.group.add(n)
		}
	},
	CD.remove = function() {
		this._clearIncremental(),
		this._incremental = null,
		this.group.removeAll()
	},
	CD._clearIncremental = function() {
		var t = this._incremental;
		t && t.clearDisplaybles()
	};
	var LD = [],
	kD = [],
	PD = [],
	OD = Ji,
	ND = Gx,
	ED = Math.abs,
	zD = function(t, e) {
		function i(t) {
			var e = t.getVisual("symbolSize");
			return e instanceof Array && (e = (e[0] + e[1]) / 2),
			e
		}
		var n = [],
		o = nn,
		a = [[], [], []],
		r = [[], []],
		s = [];
		e /= 2,
		t.eachEdge(function(t, l) {
			var h = t.getLayout(),
			u = t.getVisual("fromSymbol"),
			c = t.getVisual("toSymbol");
			h.__original || (h.__original = [W(h[0]), W(h[1])], h[2] && h.__original.push(W(h[2])));
			var d = h.__original;
			if (null != h[2]) {
				if (G(a[0], d[0]), G(a[1], d[2]), G(a[2], d[1]), u && "none" != u) {
					var f = i(t.node1),
					p = Yc(a, d[0], f * e);
					o(a[0][0], a[1][0], a[2][0], p, n),
					a[0][0] = n[3],
					a[1][0] = n[4],
					o(a[0][1], a[1][1], a[2][1], p, n),
					a[0][1] = n[3],
					a[1][1] = n[4]
				}
				if (c && "none" != c) {
					var f = i(t.node2),
					p = Yc(a, d[1], f * e);
					o(a[0][0], a[1][0], a[2][0], p, n),
					a[1][0] = n[1],
					a[2][0] = n[2],
					o(a[0][1], a[1][1], a[2][1], p, n),
					a[1][1] = n[1],
					a[2][1] = n[2]
				}
				G(h[0], a[0]),
				G(h[1], a[2]),
				G(h[2], a[1])
			} else {
				if (G(r[0], d[0]), G(r[1], d[1]), U(s, r[1], r[0]), q(s, s), u && "none" != u) {
					f = i(t.node1);
					Z(r[0], r[0], s, f * e)
				}
				if (c && "none" != c) {
					f = i(t.node2);
					Z(r[1], r[1], s, -f * e)
				}
				G(h[0], r[0]),
				G(h[1], r[1])
			}
		})
	},
	RD = ["itemStyle", "opacity"],
	BD = ["lineStyle", "opacity"];
	ys({
		type: "graph",
		init: function(t, e) {
			var i = new Ml,
			n = new Fc,
			o = this.group;
			this._controller = new Zh(e.getZr()),
			this._controllerHost = {
				target: o
			},
			o.add(i.group),
			o.add(n.group),
			this._symbolDraw = i,
			this._lineDraw = n,
			this._firstRender = !0
		},
		render: function(t, e, i) {
			var n = t.coordinateSystem;
			this._model = t,
			this._nodeScaleRatio = t.get("nodeScaleRatio");
			var o = this._symbolDraw,
			a = this._lineDraw,
			r = this.group;
			if ("view" === n.type) {
				var s = {
					position: n.position,
					scale: n.scale
				};
				this._firstRender ? r.attr(s) : co(r, s, t)
			}
			zD(t.getGraph(), this._getNodeGlobalScale(t));
			var l = t.getData();
			o.updateData(l);
			var h = t.getEdgeData();
			a.updateData(h),
			this._updateNodeAndLinkScale(),
			this._updateController(t, e, i),
			clearTimeout(this._layoutTimeout);
			var u = t.forceLayout,
			c = t.get("force.layoutAnimation");
			u && this._startForceLayoutIteration(u, c),
			l.eachItemGraphicEl(function(e, n) {
				var o = l.getItemModel(n);
				e.off("drag").off("dragend");
				var a = l.getItemModel(n).get("draggable");
				a && e.on("drag",
				function() {
					u && (u.warmUp(), !this._layouting && this._startForceLayoutIteration(u, c), u.setFixed(n), l.setItemLayout(n, e.position))
				},
				this).on("dragend",
				function() {
					u && u.setUnfixed(n)
				},
				this),
				e.setDraggable(a && u),
				e.off("mouseover", e.__focusNodeAdjacency),
				e.off("mouseout", e.__unfocusNodeAdjacency),
				o.get("focusNodeAdjacency") && (e.on("mouseover", e.__focusNodeAdjacency = function() {
					i.dispatchAction({
						type: "focusNodeAdjacency",
						seriesId: t.id,
						dataIndex: e.dataIndex
					})
				}), e.on("mouseout", e.__unfocusNodeAdjacency = function() {
					i.dispatchAction({
						type: "unfocusNodeAdjacency",
						seriesId: t.id
					})
				}))
			},
			this),
			l.graph.eachEdge(function(e) {
				var n = e.getGraphicEl();
				n.off("mouseover", n.__focusNodeAdjacency),
				n.off("mouseout", n.__unfocusNodeAdjacency),
				e.getModel().get("focusNodeAdjacency") && (n.on("mouseover", n.__focusNodeAdjacency = function() {
					i.dispatchAction({
						type: "focusNodeAdjacency",
						seriesId: t.id,
						edgeDataIndex: e.dataIndex
					})
				}), n.on("mouseout", n.__unfocusNodeAdjacency = function() {
					i.dispatchAction({
						type: "unfocusNodeAdjacency",
						seriesId: t.id
					})
				}))
			});
			var d = "circular" === t.get("layout") && t.get("circular.rotateLabel"),
			f = l.getLayout("cx"),
			p = l.getLayout("cy");
			l.eachItemGraphicEl(function(t, e) {
				var i = t.getSymbolPath();
				if (d) {
					var n = l.getItemLayout(e),
					o = Math.atan2(n[1] - p, n[0] - f);
					o < 0 && (o = 2 * Math.PI + o);
					var a = n[0] < f;
					a && (o -= Math.PI);
					var r = a ? "left": "right";
					i.setStyle({
						textRotation: -o,
						textPosition: r,
						textOrigin: "center"
					}),
					i.hoverStyle && (i.hoverStyle.textPosition = r)
				} else i.setStyle({
					textRotation: 0
				})
			}),
			this._firstRender = !1
		},
		dispose: function() {
			this._controller && this._controller.dispose(),
			this._controllerHost = {}
		},
		focusNodeAdjacency: function(t, e, i, n) {
			var o = this._model.getData().graph,
			a = n.dataIndex,
			r = n.edgeDataIndex,
			s = o.getNodeByIndex(a),
			l = o.getEdgeByIndex(r); (s || l) && (o.eachNode(function(t) {
				$c(t, RD, .1)
			}), o.eachEdge(function(t) {
				$c(t, BD, .1)
			}), s && (Kc(s, RD), d(s.edges,
			function(t) {
				t.dataIndex < 0 || (Kc(t, BD), Kc(t.node1, RD), Kc(t.node2, RD))
			})), l && (Kc(l, BD), Kc(l.node1, RD), Kc(l.node2, RD)))
		},
		unfocusNodeAdjacency: function(t, e, i, n) {
			var o = this._model.getData().graph;
			o.eachNode(function(t) {
				$c(t, RD)
			}),
			o.eachEdge(function(t) {
				$c(t, BD)
			})
		},
		_startForceLayoutIteration: function(t, e) {
			var i = this; !
			function n() {
				t.step(function(t) {
					i.updateLayout(i._model),
					(i._layouting = !t) && (e ? i._layoutTimeout = setTimeout(n, 16) : n())
				})
			} ()
		},
		_updateController: function(t, e, i) {
			var n = this._controller,
			o = this._controllerHost,
			a = this.group;
			n.setPointerChecker(function(e, n, o) {
				var r = a.getBoundingRect();
				return r.applyTransform(a.transform),
				r.contain(n, o) && !tu(e, i, t)
			}),
			"view" === t.coordinateSystem.type ? (n.enable(t.get("roam")), o.zoomLimit = t.get("scaleLimit"), o.zoom = t.coordinateSystem.getZoom(), n.off("pan").off("zoom").on("pan",
			function(e, n) {
				Jh(o, e, n),
				i.dispatchAction({
					seriesId: t.id,
					type: "graphRoam",
					dx: e,
					dy: n
				})
			}).on("zoom",
			function(e, n, a) {
				Qh(o, e, n, a),
				i.dispatchAction({
					seriesId: t.id,
					type: "graphRoam",
					zoom: e,
					originX: n,
					originY: a
				}),
				this._updateNodeAndLinkScale(),
				zD(t.getGraph(), this._getNodeGlobalScale(t)),
				this._lineDraw.updateLayout()
			},
			this)) : n.disable()
		},
		_updateNodeAndLinkScale: function() {
			var t = this._model,
			e = t.getData(),
			i = this._getNodeGlobalScale(t),
			n = [i, i];
			e.eachItemGraphicEl(function(t, e) {
				t.attr("scale", n)
			})
		},
		_getNodeGlobalScale: function(t) {
			var e = t.coordinateSystem;
			if ("view" !== e.type) return 1;
			var i = this._nodeScaleRatio,
			n = e.scale,
			o = n && n[0] || 1;
			return ((e.getZoom() - 1) * i + 1) / o
		},
		updateLayout: function(t) {
			zD(t.getGraph(), this._getNodeGlobalScale(t)),
			this._symbolDraw.updateLayout(),
			this._lineDraw.updateLayout()
		},
		remove: function(t, e) {
			this._symbolDraw && this._symbolDraw.remove(),
			this._lineDraw && this._lineDraw.remove()
		}
	}),
	hs({
		type: "graphRoam",
		event: "graphRoam",
		update: "none"
	},
	function(t, e) {
		e.eachComponent({
			mainType: "series",
			query: t
		},
		function(e) {
			var i = au(e.coordinateSystem, t);
			e.setCenter && e.setCenter(i.center),
			e.setZoom && e.setZoom(i.zoom)
		})
	}),
	hs({
		type: "focusNodeAdjacency",
		event: "focusNodeAdjacency",
		update: "series.graph:focusNodeAdjacency"
	},
	function() {}),
	hs({
		type: "unfocusNodeAdjacency",
		event: "unfocusNodeAdjacency",
		update: "series.graph:unfocusNodeAdjacency"
	},
	function() {});
	var VD = Z;
	ls(function(t) {
		var e = t.findComponents({
			mainType: "legend"
		});
		e && e.length && t.eachSeriesByType("graph",
		function(t) {
			var i = t.getCategoriesData(),
			n = t.getGraph().data,
			o = i.mapArray(i.getName);
			n.filterSelf(function(t) {
				var i = n.getItemModel(t).getShallow("category");
				if (null != i) {
					"number" == typeof i && (i = o[i]);
					for (var a = 0; a < e.length; a++) if (!e[a].isSelected(i)) return ! 1
				}
				return ! 0
			})
		},
		this)
	}),
	ds(bT("graph", "circle", null)),
	ds(function(t) {
		var e = {};
		t.eachSeriesByType("graph",
		function(t) {
			var i = t.getCategoriesData(),
			n = t.getData(),
			o = {};
			i.each(function(n) {
				var a = i.getName(n);
				o["ec-" + a] = n;
				var r = i.getItemModel(n).get("itemStyle.color") || t.getColorFromPalette(a, e);
				i.setItemVisual(n, "color", r)
			}),
			i.count() && n.each(function(t) {
				var e = n.getItemModel(t).getShallow("category");
				null != e && ("string" == typeof e && (e = o["ec-" + e]), n.getItemVisual(t, "color", !0) || n.setItemVisual(t, "color", i.getItemVisual(e, "color")))
			})
		})
	}),
	ds(function(t) {
		t.eachSeriesByType("graph",
		function(t) {
			var e = t.getGraph(),
			i = t.getEdgeData(),
			n = Jc(t.get("edgeSymbol")),
			o = Jc(t.get("edgeSymbolSize")),
			a = "lineStyle.color".split("."),
			r = "lineStyle.opacity".split(".");
			i.setVisual("fromSymbol", n && n[0]),
			i.setVisual("toSymbol", n && n[1]),
			i.setVisual("fromSymbolSize", o && o[0]),
			i.setVisual("toSymbolSize", o && o[1]),
			i.setVisual("color", t.get(a)),
			i.setVisual("opacity", t.get(r)),
			i.each(function(t) {
				var n = i.getItemModel(t),
				o = e.getEdgeByIndex(t),
				s = Jc(n.getShallow("symbol", !0)),
				l = Jc(n.getShallow("symbolSize", !0)),
				h = n.get(a),
				u = n.get(r);
				switch (h) {
				case "source":
					h = o.node1.getVisual("color");
					break;
				case "target":
					h = o.node2.getVisual("color")
				}
				s[0] && o.setVisual("fromSymbol", s[0]),
				s[1] && o.setVisual("toSymbol", s[1]),
				l[0] && o.setVisual("fromSymbolSize", l[0]),
				l[1] && o.setVisual("toSymbolSize", l[1]),
				o.setVisual("color", h),
				o.setVisual("opacity", u)
			})
		})
	}),
	cs(function(t, e) {
		t.eachSeriesByType("graph",
		function(t) {
			var e = t.get("layout"),
			i = t.coordinateSystem;
			if (i && "view" !== i.type) {
				var n = t.getData(),
				o = [];
				d(i.dimensions,
				function(t) {
					o = o.concat(n.mapDimension(t, !0))
				});
				for (var a = 0; a < n.count(); a++) {
					for (var r = [], s = !1, l = 0; l < o.length; l++) {
						var h = n.get(o[l], a);
						isNaN(h) || (s = !0),
						r.push(h)
					}
					s ? n.setItemLayout(a, i.dataToPoint(r)) : n.setItemLayout(a, [NaN, NaN])
				}
				td(n.graph)
			} else e && "none" !== e || Qc(t)
		})
	}),
	cs(function(t) {
		t.eachSeriesByType("graph",
		function(t) {
			"circular" === t.get("layout") && ed(t)
		})
	}),
	cs(function(t) {
		t.eachSeriesByType("graph",
		function(t) {
			var e = t.coordinateSystem;
			if (!e || "view" === e.type) if ("force" === t.get("layout")) {
				var i = t.preservedPoints || {},
				n = t.getGraph(),
				o = n.data,
				a = n.edgeData,
				r = t.getModel("force"),
				s = r.get("initLayout");
				t.preservedPoints ? o.each(function(t) {
					var e = o.getId(t);
					o.setItemLayout(t, i[e] || [NaN, NaN])
				}) : s && "none" !== s ? "circular" === s && ed(t) : Qc(t);
				var l = o.getDataExtent("value"),
				h = a.getDataExtent("value"),
				u = r.get("repulsion"),
				c = r.get("edgeLength");
				y(u) || (u = [u, u]),
				y(c) || (c = [c, c]),
				c = [c[1], c[0]];
				var d = o.mapArray("value",
				function(t, e) {
					var i = o.getItemLayout(e),
					n = Io(t, l, u);
					return isNaN(n) && (n = (u[0] + u[1]) / 2),
					{
						w: n,
						rep: n,
						fixed: o.getItemModel(e).get("fixed"),
						p: !i || isNaN(i[0]) || isNaN(i[1]) ? null: i
					}
				}),
				f = a.mapArray("value",
				function(t, e) {
					var i = n.getEdgeByIndex(e),
					o = Io(t, h, c);
					return isNaN(o) && (o = (c[0] + c[1]) / 2),
					{
						n1: d[i.node1.dataIndex],
						n2: d[i.node2.dataIndex],
						d: o,
						curveness: i.getModel().get("lineStyle.curveness") || 0
					}
				}),
				p = (e = t.coordinateSystem).getBoundingRect(),
				g = id(d, f, {
					rect: p,
					gravity: r.get("gravity")
				}),
				m = g.step;
				g.step = function(t) {
					for (var e = 0,
					a = d.length; e < a; e++) d[e].fixed && G(d[e].p, n.getNodeByIndex(e).getLayout());
					m(function(e, a, r) {
						for (var s = 0,
						l = e.length; s < l; s++) e[s].fixed || n.getNodeByIndex(s).setLayout(e[s].p),
						i[o.getId(s)] = e[s].p;
						for (var s = 0,
						l = a.length; s < l; s++) {
							var h = a[s],
							u = n.getEdgeByIndex(s),
							c = h.n1.p,
							d = h.n2.p,
							f = u.getLayout(); (f = f ? f.slice() : [])[0] = f[0] || [],
							f[1] = f[1] || [],
							G(f[0], c),
							G(f[1], d),
							+h.curveness && (f[2] = [(c[0] + d[0]) / 2 - (c[1] - d[1]) * h.curveness, (c[1] + d[1]) / 2 - (d[0] - c[0]) * h.curveness]),
							u.setLayout(f)
						}
						t && t(r)
					})
				},
				t.forceLayout = g,
				t.preservedPoints = i,
				g.step()
			} else t.forceLayout = null
		})
	}),
	us("graphView", {
		create: function(t, e) {
			var i = [];
			return t.eachSeriesByType("graph",
			function(t) {
				var n = t.get("coordinateSystem");
				if (!n || "view" === n) {
					var o = t.getData(),
					a = [],
					r = [];
					an(o.mapArray(function(t) {
						var e = o.getItemModel(t);
						return [ + e.get("x"), +e.get("y")]
					}), a, r),
					r[0] - a[0] == 0 && (r[0] += 1, a[0] -= 1),
					r[1] - a[1] == 0 && (r[1] += 1, a[1] -= 1);
					var s = (r[0] - a[0]) / (r[1] - a[1]),
					l = nd(t, e, s);
					isNaN(s) && (a = [l.x, l.y], r = [l.x + l.width, l.y + l.height]);
					var h = r[0] - a[0],
					u = r[1] - a[1],
					c = l.width,
					d = l.height,
					f = t.coordinateSystem = new su;
					f.zoomLimit = t.get("scaleLimit"),
					f.setBoundingRect(a[0], a[1], h, u),
					f.setViewRect(l.x, l.y, c, d),
					f.setCenter(t.get("center")),
					f.setZoom(t.get("zoom")),
					i.push(f)
				}
			}),
			i
		}
	});
	uM.extend({
		type: "series.gauge",
		getInitialData: function(t, e) {
			var i = t.data || [];
			return y(i) || (i = [i]),
			t.data = i,
			rA(this, ["value"])
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			center: ["50%", "50%"],
			legendHoverLink: !0,
			radius: "75%",
			startAngle: 225,
			endAngle: -45,
			clockwise: !0,
			min: 0,
			max: 100,
			splitNumber: 10,
			axisLine: {
				show: !0,
				lineStyle: {
					color: [[.2, "#91c7ae"], [.8, "#63869e"], [1, "#c23531"]],
					width: 30
				}
			},
			splitLine: {
				show: !0,
				length: 30,
				lineStyle: {
					color: "#eee",
					width: 2,
					type: "solid"
				}
			},
			axisTick: {
				show: !0,
				splitNumber: 5,
				length: 8,
				lineStyle: {
					color: "#eee",
					width: 1,
					type: "solid"
				}
			},
			axisLabel: {
				show: !0,
				distance: 5,
				color: "auto"
			},
			pointer: {
				show: !0,
				length: "80%",
				width: 8
			},
			itemStyle: {
				color: "auto"
			},
			title: {
				show: !0,
				offsetCenter: [0, "-40%"],
				color: "#333",
				fontSize: 15
			},
			detail: {
				show: !0,
				backgroundColor: "rgba(0,0,0,0)",
				borderWidth: 0,
				borderColor: "#ccc",
				width: 100,
				height: null,
				padding: [5, 10],
				offsetCenter: [0, "40%"],
				color: "auto",
				fontSize: 30
			}
		}
	});
	var GD = Mn.extend({
		type: "echartsGaugePointer",
		shape: {
			angle: 0,
			width: 10,
			r: 10,
			x: 0,
			y: 0
		},
		buildPath: function(t, e) {
			var i = Math.cos,
			n = Math.sin,
			o = e.r,
			a = e.width,
			r = e.angle,
			s = e.x - i(r) * a * (a >= o / 3 ? 1 : 2),
			l = e.y - n(r) * a * (a >= o / 3 ? 1 : 2);
			r = e.angle - Math.PI / 2,
			t.moveTo(s, l),
			t.lineTo(e.x + i(r) * a, e.y + n(r) * a),
			t.lineTo(e.x + i(e.angle) * o, e.y + n(e.angle) * o),
			t.lineTo(e.x - i(r) * a, e.y - n(r) * a),
			t.lineTo(s, l)
		}
	}),
	WD = 2 * Math.PI,
	FD = (cr.extend({
		type: "gauge",
		render: function(t, e, i) {
			this.group.removeAll();
			var n = t.get("axisLine.lineStyle.color"),
			o = od(t, i);
			this._renderMain(t, e, i, n, o)
		},
		dispose: function() {},
		_renderMain: function(t, e, i, n, o) {
			for (var a = this.group,
			r = t.getModel("axisLine").getModel("lineStyle"), s = t.get("clockwise"), l = -t.get("startAngle") / 180 * Math.PI, h = -t.get("endAngle") / 180 * Math.PI, u = (h - l) % WD, c = l, d = r.get("width"), f = 0; f < n.length; f++) {
				var p = Math.min(Math.max(n[f][0], 0), 1),
				g = new Ob({
					shape: {
						startAngle: c,
						endAngle: h = l + u * p,
						cx: o.cx,
						cy: o.cy,
						clockwise: s,
						r0: o.r - d,
						r: o.r
					},
					silent: !0
				});
				g.setStyle({
					fill: n[f][1]
				}),
				g.setStyle(r.getLineStyle(["color", "borderWidth", "borderColor"])),
				a.add(g),
				c = h
			}
			var m = function(t) {
				if (t <= 0) return n[0][1];
				for (var e = 0; e < n.length; e++) if (n[e][0] >= t && (0 === e ? 0 : n[e - 1][0]) < t) return n[e][1];
				return n[e - 1][1]
			};
			if (!s) {
				var v = l;
				l = h,
				h = v
			}
			this._renderTicks(t, e, i, m, o, l, h, s),
			this._renderPointer(t, e, i, m, o, l, h, s),
			this._renderTitle(t, e, i, m, o),
			this._renderDetail(t, e, i, m, o)
		},
		_renderTicks: function(t, e, i, n, o, a, r, s) {
			for (var l = this.group,
			h = o.cx,
			u = o.cy,
			c = o.r,
			d = +t.get("min"), f = +t.get("max"), p = t.getModel("splitLine"), g = t.getModel("axisTick"), m = t.getModel("axisLabel"), v = t.get("splitNumber"), y = g.get("splitNumber"), x = To(p.get("length"), c), _ = To(g.get("length"), c), w = a, b = (r - a) / v, S = b / y, M = p.getModel("lineStyle").getLineStyle(), I = g.getModel("lineStyle").getLineStyle(), T = 0; T <= v; T++) {
				var A = Math.cos(w),
				D = Math.sin(w);
				if (p.get("show")) {
					var C = new Gb({
						shape: {
							x1: A * c + h,
							y1: D * c + u,
							x2: A * (c - x) + h,
							y2: D * (c - x) + u
						},
						style: M,
						silent: !0
					});
					"auto" === M.stroke && C.setStyle({
						stroke: n(T / v)
					}),
					l.add(C)
				}
				if (m.get("show")) {
					var L = ad(Ao(T / v * (f - d) + d), m.get("formatter")),
					k = m.get("distance"),
					P = n(T / v);
					l.add(new Cb({
						style: io({},
						m, {
							text: L,
							x: A * (c - x - k) + h,
							y: D * (c - x - k) + u,
							textVerticalAlign: D < -.4 ? "top": D > .4 ? "bottom": "middle",
							textAlign: A < -.4 ? "left": A > .4 ? "right": "center"
						},
						{
							autoColor: P
						}),
						silent: !0
					}))
				}
				if (g.get("show") && T !== v) {
					for (var O = 0; O <= y; O++) {
						var A = Math.cos(w),
						D = Math.sin(w),
						N = new Gb({
							shape: {
								x1: A * c + h,
								y1: D * c + u,
								x2: A * (c - _) + h,
								y2: D * (c - _) + u
							},
							silent: !0,
							style: I
						});
						"auto" === I.stroke && N.setStyle({
							stroke: n((T + O / y) / v)
						}),
						l.add(N),
						w += S
					}
					w -= S
				} else w += b
			}
		},
		_renderPointer: function(t, e, i, n, o, a, r, s) {
			var l = this.group,
			h = this._data;
			if (t.get("pointer.show")) {
				var u = [ + t.get("min"), +t.get("max")],
				c = [a, r],
				d = t.getData(),
				f = d.mapDimension("value");
				d.diff(h).add(function(e) {
					var i = new GD({
						shape: {
							angle: a
						}
					});
					fo(i, {
						shape: {
							angle: Io(d.get(f, e), u, c, !0)
						}
					},
					t),
					l.add(i),
					d.setItemGraphicEl(e, i)
				}).update(function(e, i) {
					var n = h.getItemGraphicEl(i);
					co(n, {
						shape: {
							angle: Io(d.get(f, e), u, c, !0)
						}
					},
					t),
					l.add(n),
					d.setItemGraphicEl(e, n)
				}).remove(function(t) {
					var e = h.getItemGraphicEl(t);
					l.remove(e)
				}).execute(),
				d.eachItemGraphicEl(function(t, e) {
					var i = d.getItemModel(e),
					a = i.getModel("pointer");
					t.setShape({
						x: o.cx,
						y: o.cy,
						width: To(a.get("width"), o.r),
						r: To(a.get("length"), o.r)
					}),
					t.useStyle(i.getModel("itemStyle").getItemStyle()),
					"auto" === t.style.fill && t.setStyle("fill", n(Io(d.get(f, e), u, [0, 1], !0))),
					to(t, i.getModel("emphasis.itemStyle").getItemStyle())
				}),
				this._data = d
			} else h && h.eachItemGraphicEl(function(t) {
				l.remove(t)
			})
		},
		_renderTitle: function(t, e, i, n, o) {
			var a = t.getData(),
			r = a.mapDimension("value"),
			s = t.getModel("title");
			if (s.get("show")) {
				var l = s.get("offsetCenter"),
				h = o.cx + To(l[0], o.r),
				u = o.cy + To(l[1], o.r),
				c = +t.get("min"),
				d = +t.get("max"),
				f = n(Io(t.getData().get(r, 0), [c, d], [0, 1], !0));
				this.group.add(new Cb({
					silent: !0,
					style: io({},
					s, {
						x: h,
						y: u,
						text: a.getName(0),
						textAlign: "center",
						textVerticalAlign: "middle"
					},
					{
						autoColor: f,
						forceRich: !0
					})
				}))
			}
		},
		_renderDetail: function(t, e, i, n, o) {
			var a = t.getModel("detail"),
			r = +t.get("min"),
			s = +t.get("max");
			if (a.get("show")) {
				var l = a.get("offsetCenter"),
				h = o.cx + To(l[0], o.r),
				u = o.cy + To(l[1], o.r),
				c = To(a.get("width"), o.r),
				d = To(a.get("height"), o.r),
				f = t.getData(),
				p = f.get(f.mapDimension("value"), 0),
				g = n(Io(p, [r, s], [0, 1], !0));
				this.group.add(new Cb({
					silent: !0,
					style: io({},
					a, {
						x: h,
						y: u,
						text: ad(p, a.get("formatter")),
						textWidth: isNaN(c) ? null: c,
						textHeight: isNaN(d) ? null: d,
						textAlign: "center",
						textVerticalAlign: "middle"
					},
					{
						autoColor: g,
						forceRich: !0
					})
				}))
			}
		}
	}), vs({
		type: "series.funnel",
		init: function(t) {
			FD.superApply(this, "init", arguments),
			this.legendDataProvider = function() {
				return this.getRawData()
			},
			this._defaultLabelLine(t)
		},
		getInitialData: function(t, e) {
			return rA(this, ["value"])
		},
		_defaultLabelLine: function(t) {
			Mi(t, "labelLine", ["show"]);
			var e = t.labelLine,
			i = t.emphasis.labelLine;
			e.show = e.show && t.label.show,
			i.show = i.show && t.emphasis.label.show
		},
		getDataParams: function(t) {
			var e = this.getData(),
			i = FD.superCall(this, "getDataParams", t),
			n = e.mapDimension("value"),
			o = e.getSum(n);
			return i.percent = o ? +(e.get(n, t) / o * 100).toFixed(2) : 0,
			i.$vars.push("percent"),
			i
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			legendHoverLink: !0,
			left: 80,
			top: 60,
			right: 80,
			bottom: 60,
			minSize: "0%",
			maxSize: "100%",
			sort: "descending",
			gap: 0,
			funnelAlign: "center",
			label: {
				show: !0,
				position: "outer"
			},
			labelLine: {
				show: !0,
				length: 20,
				lineStyle: {
					width: 1,
					type: "solid"
				}
			},
			itemStyle: {
				borderColor: "#fff",
				borderWidth: 1
			},
			emphasis: {
				label: {
					show: !0
				}
			}
		}
	})),
	HD = rd.prototype,
	ZD = ["itemStyle", "opacity"];
	HD.updateData = function(t, e, i) {
		var n = this.childAt(0),
		o = t.hostModel,
		a = t.getItemModel(e),
		s = t.getItemLayout(e),
		l = t.getItemModel(e).get(ZD);
		l = null == l ? 1 : l,
		n.useStyle({}),
		i ? (n.setShape({
			points: s.points
		}), n.setStyle({
			opacity: 0
		}), fo(n, {
			style: {
				opacity: l
			}
		},
		o, e)) : co(n, {
			style: {
				opacity: l
			},
			shape: {
				points: s.points
			}
		},
		o, e);
		var h = a.getModel("itemStyle"),
		u = t.getItemVisual(e, "color");
		n.setStyle(r({
			lineJoin: "round",
			fill: u
		},
		h.getItemStyle(["opacity"]))),
		n.hoverStyle = h.getModel("emphasis").getItemStyle(),
		this._updateLabel(t, e),
		to(this)
	},
	HD._updateLabel = function(t, e) {
		var i = this.childAt(1),
		n = this.childAt(2),
		o = t.hostModel,
		a = t.getItemModel(e),
		r = t.getItemLayout(e).label,
		s = t.getItemVisual(e, "color");
		co(i, {
			shape: {
				points: r.linePoints || r.linePoints
			}
		},
		o, e),
		co(n, {
			style: {
				x: r.x,
				y: r.y
			}
		},
		o, e),
		n.attr({
			rotation: r.rotation,
			origin: [r.x, r.y],
			z2: 10
		});
		var l = a.getModel("label"),
		h = a.getModel("emphasis.label"),
		u = a.getModel("labelLine"),
		c = a.getModel("emphasis.labelLine"),
		s = t.getItemVisual(e, "color");
		eo(n.style, n.hoverStyle = {},
		l, h, {
			labelFetcher: t.hostModel,
			labelDataIndex: e,
			defaultText: t.getName(e),
			autoColor: s,
			useInsideStyle: !!r.inside
		},
		{
			textAlign: r.textAlign,
			textVerticalAlign: r.verticalAlign
		}),
		n.ignore = n.normalIgnore = !l.get("show"),
		n.hoverIgnore = !h.get("show"),
		i.ignore = i.normalIgnore = !u.get("show"),
		i.hoverIgnore = !c.get("show"),
		i.setStyle({
			stroke: s
		}),
		i.setStyle(u.getModel("lineStyle").getLineStyle()),
		i.hoverStyle = c.getModel("lineStyle").getLineStyle()
	},
	h(rd, S_);
	cr.extend({
		type: "funnel",
		render: function(t, e, i) {
			var n = t.getData(),
			o = this._data,
			a = this.group;
			n.diff(o).add(function(t) {
				var e = new rd(n, t);
				n.setItemGraphicEl(t, e),
				a.add(e)
			}).update(function(t, e) {
				var i = o.getItemGraphicEl(e);
				i.updateData(n, t),
				a.add(i),
				n.setItemGraphicEl(t, i)
			}).remove(function(t) {
				var e = o.getItemGraphicEl(t);
				a.remove(e)
			}).execute(),
			this._data = n
		},
		remove: function() {
			this.group.removeAll(),
			this._data = null
		},
		dispose: function() {}
	});
	ds(cA("funnel")),
	cs(function(t, e, i) {
		t.eachSeriesByType("funnel",
		function(t) {
			var i = t.getData(),
			n = i.mapDimension("value"),
			o = t.get("sort"),
			a = sd(t, e),
			r = ld(i, o),
			s = [To(t.get("minSize"), a.width), To(t.get("maxSize"), a.width)],
			l = i.getDataExtent(n),
			h = t.get("min"),
			u = t.get("max");
			null == h && (h = Math.min(l[0], 0)),
			null == u && (u = l[1]);
			var c = t.get("funnelAlign"),
			d = t.get("gap"),
			f = (a.height - d * (i.count() - 1)) / i.count(),
			p = a.y,
			g = function(t, e) {
				var o, r = Io(i.get(n, t) || 0, [h, u], s, !0);
				switch (c) {
				case "left":
					o = a.x;
					break;
				case "center":
					o = a.x + (a.width - r) / 2;
					break;
				case "right":
					o = a.x + a.width - r
				}
				return [[o, e], [o + r, e]]
			};
			"ascending" === o && (f = -f, d = -d, p += a.height, r = r.reverse());
			for (var m = 0; m < r.length; m++) {
				var v = r[m],
				y = r[m + 1],
				x = i.getItemModel(v).get("itemStyle.height");
				null == x ? x = f: (x = To(x, a.height), "ascending" === o && (x = -x));
				var _ = g(v, p),
				w = g(y, p + x);
				p += x + d,
				i.setItemLayout(v, {
					points: _.concat(w.slice().reverse())
				})
			}
			hd(i)
		})
	}),
	ls(gA("funnel"));
	var UD = function(t, e, i, n, o) {
		nT.call(this, t, e, i),
		this.type = n || "value",
		this.axisIndex = o
	};
	UD.prototype = {
		constructor: UD,
		model: null,
		isHorizontal: function() {
			return "horizontal" !== this.coordinateSystem.getModel().get("layout")
		}
	},
	h(UD, nT);
	var jD = function(t, e, i, n, o, a) {
		e[0] = fd(e[0], i),
		e[1] = fd(e[1], i),
		t = t || 0;
		var r = i[1] - i[0];
		null != o && (o = fd(o, [0, r])),
		null != a && (a = Math.max(a, null != o ? o: 0)),
		"all" === n && (o = a = Math.abs(e[1] - e[0]), n = 0);
		var s = dd(e, n);
		e[n] += t;
		var l = o || 0,
		h = i.slice();
		s.sign < 0 ? h[0] += l: h[1] -= l,
		e[n] = fd(e[n], h);
		u = dd(e, n);
		null != o && (u.sign !== s.sign || u.span < o) && (e[1 - n] = e[n] + s.sign * o);
		var u = dd(e, n);
		return null != a && u.span > a && (e[1 - n] = e[n] + u.sign * a),
		e
	},
	XD = d,
	YD = Math.min,
	qD = Math.max,
	$D = Math.floor,
	KD = Math.ceil,
	JD = Ao,
	QD = Math.PI;
	pd.prototype = {
		type: "parallel",
		constructor: pd,
		_init: function(t, e, i) {
			var n = t.dimensions,
			o = t.parallelAxisIndex;
			XD(n,
			function(t, i) {
				var n = o[i],
				a = e.getComponent("parallelAxis", n),
				r = this._axesMap.set(t, new UD(t, sl(a), [0, 0], a.get("type"), n)),
				s = "category" === r.type;
				r.onBand = s && a.get("boundaryGap"),
				r.inverse = a.get("inverse"),
				a.axis = r,
				r.model = a,
				r.coordinateSystem = a.coordinateSystem = this
			},
			this)
		},
		update: function(t, e) {
			this._updateAxesFromSeries(this._model, t)
		},
		containPoint: function(t) {
			var e = this._makeLayoutInfo(),
			i = e.axisBase,
			n = e.layoutBase,
			o = e.pixelDimIndex,
			a = t[1 - o],
			r = t[o];
			return a >= i && a <= i + e.axisLength && r >= n && r <= n + e.layoutLength
		},
		getModel: function() {
			return this._model
		},
		_updateAxesFromSeries: function(t, e) {
			e.eachSeries(function(i) {
				if (t.contains(i, e)) {
					var n = i.getData();
					XD(this.dimensions,
					function(t) {
						var e = this._axesMap.get(t);
						e.scale.unionExtentFromData(n, n.mapDimension(t)),
						rl(e.scale, e.model)
					},
					this)
				}
			},
			this)
		},
		resize: function(t, e) {
			this._rect = Ko(t.getBoxLayoutParams(), {
				width: e.getWidth(),
				height: e.getHeight()
			}),
			this._layoutAxes()
		},
		getRect: function() {
			return this._rect
		},
		_makeLayoutInfo: function() {
			var t, e = this._model,
			i = this._rect,
			n = ["x", "y"],
			o = ["width", "height"],
			a = e.get("layout"),
			r = "horizontal" === a ? 0 : 1,
			s = i[o[r]],
			l = [0, s],
			h = this.dimensions.length,
			u = gd(e.get("axisExpandWidth"), l),
			c = gd(e.get("axisExpandCount") || 0, [0, h]),
			d = e.get("axisExpandable") && h > 3 && h > c && c > 1 && u > 0 && s > 0,
			f = e.get("axisExpandWindow");
			f ? (t = gd(f[1] - f[0], l), f[1] = f[0] + t) : (t = gd(u * (c - 1), l), (f = [u * (e.get("axisExpandCenter") || $D(h / 2)) - t / 2])[1] = f[0] + t);
			var p = (s - t) / (h - c);
			p < 3 && (p = 0);
			var g = [$D(JD(f[0] / u, 1)) + 1, KD(JD(f[1] / u, 1)) - 1],
			m = p / u * f[0];
			return {
				layout: a,
				pixelDimIndex: r,
				layoutBase: i[n[r]],
				layoutLength: s,
				axisBase: i[n[1 - r]],
				axisLength: i[o[1 - r]],
				axisExpandable: d,
				axisExpandWidth: u,
				axisCollapseWidth: p,
				axisExpandWindow: f,
				axisCount: h,
				winInnerIndices: g,
				axisExpandWindow0Pos: m
			}
		},
		_layoutAxes: function() {
			var t = this._rect,
			e = this._axesMap,
			i = this.dimensions,
			n = this._makeLayoutInfo(),
			o = n.layout;
			e.each(function(t) {
				var e = [0, n.axisLength],
				i = t.inverse ? 1 : 0;
				t.setExtent(e[i], e[1 - i])
			}),
			XD(i,
			function(i, a) {
				var r = (n.axisExpandable ? vd: md)(a, n),
				s = {
					horizontal: {
						x: r.position,
						y: n.axisLength
					},
					vertical: {
						x: 0,
						y: r.position
					}
				},
				l = {
					horizontal: QD / 2,
					vertical: 0
				},
				h = [s[o].x + t.x, s[o].y + t.y],
				u = l[o],
				c = st();
				dt(c, c, u),
				ct(c, c, h),
				this._axesLayout[i] = {
					position: h,
					rotation: u,
					transform: c,
					axisNameAvailableWidth: r.axisNameAvailableWidth,
					axisLabelShow: r.axisLabelShow,
					nameTruncateMaxWidth: r.nameTruncateMaxWidth,
					tickDirection: 1,
					labelDirection: 1,
					labelInterval: e.get(i).getLabelInterval()
				}
			},
			this)
		},
		getAxis: function(t) {
			return this._axesMap.get(t)
		},
		dataToPoint: function(t, e) {
			return this.axisCoordToPoint(this._axesMap.get(e).dataToCoord(t), e)
		},
		eachActiveState: function(t, e, i) {
			for (var n = this.dimensions,
			o = f(n,
			function(e) {
				return t.mapDimension(e)
			}), a = this._axesMap, r = this.hasAxisBrushed(), s = 0, l = t.count(); s < l; s++) {
				var h, u = t.getValues(o, s);
				if (r) {
					h = "active";
					for (var c = 0,
					d = n.length; c < d; c++) {
						var p = n[c];
						if ("inactive" === a.get(p).model.getActiveState(u[c], c)) {
							h = "inactive";
							break
						}
					}
				} else h = "normal";
				e.call(i, h, s)
			}
		},
		hasAxisBrushed: function() {
			for (var t = this.dimensions,
			e = this._axesMap,
			i = !1,
			n = 0,
			o = t.length; n < o; n++)"normal" !== e.get(t[n]).model.getActiveState() && (i = !0);
			return i
		},
		axisCoordToPoint: function(t, e) {
			return go([t, 0], this._axesLayout[e].transform)
		},
		getAxisLayout: function(t) {
			return i(this._axesLayout[t])
		},
		getSlidedAxisExpandWindow: function(t) {
			var e = this._makeLayoutInfo(),
			i = e.pixelDimIndex,
			n = e.axisExpandWindow.slice(),
			o = n[1] - n[0],
			a = [0, e.axisExpandWidth * (e.axisCount - 1)];
			if (!this.containPoint(t)) return {
				behavior: "none",
				axisExpandWindow: n
			};
			var r, s = t[i] - e.layoutBase - e.axisExpandWindow0Pos,
			l = "slide",
			h = e.axisCollapseWidth,
			u = this._model.get("axisExpandSlideTriggerArea"),
			c = null != u[0];
			if (h) c && h && s < o * u[0] ? (l = "jump", r = s - o * u[2]) : c && h && s > o * (1 - u[0]) ? (l = "jump", r = s - o * (1 - u[2])) : (r = s - o * u[1]) >= 0 && (r = s - o * (1 - u[1])) <= 0 && (r = 0),
			(r *= e.axisExpandWidth / h) ? jD(r, n, a, "all") : l = "none";
			else {
				o = n[1] - n[0]; (n = [qD(0, a[1] * s / o - o / 2)])[1] = YD(a[1], n[0] + o),
				n[0] = n[1] - o
			}
			return {
				axisExpandWindow: n,
				behavior: l
			}
		}
	},
	Aa.register("parallel", {
		create: function(t, e) {
			var i = [];
			return t.eachComponent("parallel",
			function(n, o) {
				var a = new pd(n, t, e);
				a.name = "parallel_" + o,
				a.resize(n, e),
				n.coordinateSystem = a,
				a.model = n,
				i.push(a)
			}),
			t.eachSeries(function(e) {
				if ("parallel" === e.get("coordinateSystem")) {
					var i = t.queryComponents({
						mainType: "parallel",
						index: e.get("parallelIndex"),
						id: e.get("parallelId")
					})[0];
					e.coordinateSystem = i.coordinateSystem
				}
			}),
			i
		}
	});
	var tC = IS.extend({
		type: "baseParallelAxis",
		axis: null,
		activeIntervals: [],
		getAreaSelectStyle: function() {
			return Sw([["fill", "color"], ["lineWidth", "borderWidth"], ["stroke", "borderColor"], ["width", "width"], ["opacity", "opacity"]])(this.getModel("areaSelectStyle"))
		},
		setActiveIntervals: function(t) {
			var e = this.activeIntervals = i(t);
			if (e) for (var n = e.length - 1; n >= 0; n--) Do(e[n])
		},
		getActiveState: function(t) {
			var e = this.activeIntervals;
			if (!e.length) return "normal";
			if (null == t) return "inactive";
			for (var i = 0,
			n = e.length; i < n; i++) if (e[i][0] <= t && t <= e[i][1]) return "active";
			return "inactive"
		}
	}),
	eC = {
		type: "value",
		dim: null,
		areaSelectStyle: {
			width: 20,
			borderWidth: 1,
			borderColor: "rgba(160,197,232)",
			color: "rgba(160,197,232)",
			opacity: .3
		},
		realtime: !0,
		z: 10
	};
	n(tC.prototype, ZI),
	kT("parallel", tC,
	function(t, e) {
		return e.type || (e.data ? "category": "value")
	},
	eC),
	IS.extend({
		type: "parallel",
		dependencies: ["parallelAxis"],
		coordinateSystem: null,
		dimensions: null,
		parallelAxisIndex: null,
		layoutMode: "box",
		defaultOption: {
			zlevel: 0,
			z: 0,
			left: 80,
			top: 60,
			right: 80,
			bottom: 60,
			layout: "horizontal",
			axisExpandable: !1,
			axisExpandCenter: null,
			axisExpandCount: 0,
			axisExpandWidth: 50,
			axisExpandRate: 17,
			axisExpandDebounce: 50,
			axisExpandSlideTriggerArea: [ - .15, .05, .4],
			axisExpandTriggerOn: "click",
			parallelAxisDefault: null
		},
		init: function() {
			IS.prototype.init.apply(this, arguments),
			this.mergeOption({})
		},
		mergeOption: function(t) {
			var e = this.option;
			t && n(e, t, !0),
			this._initDimensions()
		},
		contains: function(t, e) {
			var i = t.get("parallelIndex");
			return null != i && e.getComponent("parallel", i) === this
		},
		setAxisExpand: function(t) {
			d(["axisExpandable", "axisExpandCenter", "axisExpandCount", "axisExpandWidth", "axisExpandWindow"],
			function(e) {
				t.hasOwnProperty(e) && (this.option[e] = t[e])
			},
			this)
		},
		_initDimensions: function() {
			var t = this.dimensions = [],
			e = this.parallelAxisIndex = [];
			d(g(this.dependentModels.parallelAxis,
			function(t) {
				return (t.get("parallelIndex") || 0) === this.componentIndex
			},
			this),
			function(i) {
				t.push("dim" + i.get("dim")),
				e.push(i.componentIndex)
			})
		}
	}),
	hs({
		type: "axisAreaSelect",
		event: "axisAreaSelected"
	},
	function(t, e) {
		e.eachComponent({
			mainType: "parallelAxis",
			query: t
		},
		function(e) {
			e.axis.model.setActiveIntervals(t.intervals)
		})
	}),
	hs("parallelAxisExpand",
	function(t, e) {
		e.eachComponent({
			mainType: "parallel",
			query: t
		},
		function(e) {
			e.setAxisExpand(t)
		})
	});
	var iC = v,
	nC = d,
	oC = f,
	aC = Math.min,
	rC = Math.max,
	sC = Math.pow,
	lC = 1e4,
	hC = 6,
	uC = 6,
	cC = "globalPan",
	dC = {
		w: [0, 0],
		e: [0, 1],
		n: [1, 0],
		s: [1, 1]
	},
	fC = {
		w: "ew",
		e: "ew",
		n: "ns",
		s: "ns",
		ne: "nesw",
		sw: "nesw",
		nw: "nwse",
		se: "nwse"
	},
	pC = {
		brushStyle: {
			lineWidth: 2,
			stroke: "rgba(0,0,0,0.3)",
			fill: "rgba(0,0,0,0.1)"
		},
		transformable: !0,
		brushMode: "single",
		removeOnClick: !1
	},
	gC = 0;
	yd.prototype = {
		constructor: yd,
		enableBrush: function(t) {
			return this._brushType && _d(this),
			t.brushType && xd(this, t),
			this
		},
		setPanels: function(t) {
			if (t && t.length) {
				var e = this._panels = {};
				d(t,
				function(t) {
					e[t.panelId] = i(t)
				})
			} else this._panels = null;
			return this
		},
		mount: function(t) {
			t = t || {},
			this._enableGlobalPan = t.enableGlobalPan;
			var e = this.group;
			return this._zr.add(e),
			e.attr({
				position: t.position || [0, 0],
				rotation: t.rotation || 0,
				scale: t.scale || [1, 1]
			}),
			this._transform = e.getLocalTransform(),
			this
		},
		eachCover: function(t, e) {
			nC(this._covers, t, e)
		},
		updateCovers: function(t) {
			function e(t, e) {
				return (null != t.id ? t.id: a + e) + "-" + t.brushType
			}
			function o(e, i) {
				var n = t[e];
				if (null != i && r[i] === h) s[e] = r[i];
				else {
					var o = s[e] = null != i ? (r[i].__brushOption = n, r[i]) : bd(l, wd(l, n));
					Id(l, o)
				}
			}
			t = f(t,
			function(t) {
				return n(i(pC), t, !0)
			});
			var a = "\0-brush-index-",
			r = this._covers,
			s = this._covers = [],
			l = this,
			h = this._creatingCover;
			return new ws(r, t,
			function(t, i) {
				return e(t.__brushOption, i)
			},
			e).add(o).update(o).remove(function(t) {
				r[t] !== h && l.group.remove(r[t])
			}).execute(),
			this
		},
		unmount: function() {
			return this.enableBrush(!1),
			Cd(this),
			this._zr.remove(this.group),
			this
		},
		dispose: function() {
			this.unmount(),
			this.off()
		}
	},
	u(yd, Hx);
	var mC = {
		mousedown: function(t) {
			if (this._dragging) Kd.call(this, t);
			else if (!t.target || !t.target.draggable) {
				Xd(t);
				var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
				this._creatingCover = null,
				(this._creatingPanel = Ad(this, t, e)) && (this._dragging = !0, this._track = [e.slice()])
			}
		},
		mousemove: function(t) {
			var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
			if (jd(this, t, e), this._dragging) {
				Xd(t);
				var i = qd(this, t, e, !1);
				i && Ld(this, i)
			}
		},
		mouseup: Kd
	},
	vC = {
		lineX: Jd(0),
		lineY: Jd(1),
		rect: {
			createCover: function(t, e) {
				return Od(iC(Wd,
				function(t) {
					return t
				},
				function(t) {
					return t
				}), t, e, ["w", "e", "n", "s", "se", "sw", "ne", "nw"])
			},
			getCreatingRange: function(t) {
				var e = Pd(t);
				return Bd(e[1][0], e[1][1], e[0][0], e[0][1])
			},
			updateCoverShape: function(t, e, i, n) {
				Nd(t, e, i, n)
			},
			updateCommon: Ed,
			contain: Yd
		},
		polygon: {
			createCover: function(t, e) {
				var i = new S_;
				return i.add(new Bb({
					name: "main",
					style: Rd(e),
					silent: !0
				})),
				i
			},
			getCreatingRange: function(t) {
				return t
			},
			endCreating: function(t, e) {
				e.remove(e.childAt(0)),
				e.add(new Rb({
					name: "main",
					draggable: !0,
					drift: iC(Fd, t, e),
					ondragend: iC(Ld, t, {
						isEnd: !0
					})
				}))
			},
			updateCoverShape: function(t, e, i, n) {
				e.childAt(0).setShape({
					points: Zd(t, e, i)
				})
			},
			updateCommon: Ed,
			contain: Yd
		}
	},
	yC = ["axisLine", "axisTickLabel", "axisName"],
	xC = ms({
		type: "parallelAxis",
		init: function(t, e) {
			xC.superApply(this, "init", arguments),
			(this._brushController = new yd(e.getZr())).on("brush", m(this._onBrush, this))
		},
		render: function(t, e, i, n) {
			if (!of(t, e, n)) {
				this.axisModel = t,
				this.api = i,
				this.group.removeAll();
				var o = this._axisGroup;
				if (this._axisGroup = new S_, this.group.add(this._axisGroup), t.get("show")) {
					var r = rf(t, e),
					s = r.coordinateSystem,
					l = t.getAreaSelectStyle(),
					h = l.width,
					u = t.axis.dim,
					c = a({
						strokeContainThreshold: h
					},
					s.getAxisLayout(u)),
					f = new GT(t, c);
					d(yC, f.add, f),
					this._axisGroup.add(f.getGroup()),
					this._refreshBrushController(c, l, t, r, h, i);
					var p = n && !1 === n.animation ? null: t;
					vo(o, this._axisGroup, p)
				}
			}
		},
		_refreshBrushController: function(t, e, i, n, o, a) {
			var r = i.axis.getExtent(),
			s = r[1] - r[0],
			l = Math.min(30, .1 * Math.abs(s)),
			h = Kt.create({
				x: r[0],
				y: -o / 2,
				width: s,
				height: o
			});
			h.x -= l,
			h.width += 2 * l,
			this._brushController.mount({
				enableGlobalPan: !0,
				rotation: t.rotation,
				position: t.position
			}).setPanels([{
				panelId: "pl",
				clipPath: Qd(h),
				isTargetByCursor: ef(h, a, n),
				getLinearBrushOtherExtent: tf(h, 0)
			}]).enableBrush({
				brushType: "lineX",
				brushStyle: e,
				removeOnClick: !0
			}).updateCovers(af(i))
		},
		_onBrush: function(t, e) {
			var i = this.axisModel,
			n = i.axis,
			o = f(t,
			function(t) {
				return [n.coordToData(t.range[0], !0), n.coordToData(t.range[1], !0)]
			}); (!i.option.realtime === e.isEnd || e.removeOnClick) && this.api.dispatchAction({
				type: "axisAreaSelect",
				parallelAxisId: i.id,
				intervals: o
			})
		},
		dispose: function() {
			this._brushController.dispose()
		}
	});
	ms({
		type: "parallel",
		render: function(t, e, i) {
			this._model = t,
			this._api = i,
			this._handlers || (this._handlers = {},
			d(_C,
			function(t, e) {
				i.getZr().on(e, this._handlers[e] = m(t, this))
			},
			this)),
			yr(this, "_throttledDispatchExpand", t.get("axisExpandRate"), "fixRate")
		},
		dispose: function(t, e) {
			d(this._handlers,
			function(t, i) {
				e.getZr().off(i, t)
			}),
			this._handlers = null
		},
		_throttledDispatchExpand: function(t) {
			this._dispatchExpand(t)
		},
		_dispatchExpand: function(t) {
			t && this._api.dispatchAction(a({
				type: "parallelAxisExpand"
			},
			t))
		}
	});
	var _C = {
		mousedown: function(t) {
			sf(this, "click") && (this._mouseDownPoint = [t.offsetX, t.offsetY])
		},
		mouseup: function(t) {
			var e = this._mouseDownPoint;
			if (sf(this, "click") && e) {
				var i = [t.offsetX, t.offsetY];
				if (Math.pow(e[0] - i[0], 2) + Math.pow(e[1] - i[1], 2) > 5) return;
				var n = this._model.coordinateSystem.getSlidedAxisExpandWindow([t.offsetX, t.offsetY]);
				"none" !== n.behavior && this._dispatchExpand({
					axisExpandWindow: n.axisExpandWindow
				})
			}
			this._mouseDownPoint = null
		},
		mousemove: function(t) {
			if (!this._mouseDownPoint && sf(this, "mousemove")) {
				var e = this._model,
				i = e.coordinateSystem.getSlidedAxisExpandWindow([t.offsetX, t.offsetY]),
				n = i.behavior;
				"jump" === n && this._throttledDispatchExpand.debounceNextCall(e.get("axisExpandDebounce")),
				this._throttledDispatchExpand("none" === n ? null: {
					axisExpandWindow: i.axisExpandWindow,
					animation: "jump" === n && null
				})
			}
		}
	};
	ss(function(t) {
		ud(t),
		cd(t)
	}),
	uM.extend({
		type: "series.parallel",
		dependencies: ["parallel"],
		visualColorAccessPath: "lineStyle.color",
		getInitialData: function(t, e) {
			this.option.progressive && (this.option.animation = !1);
			var i = this.getSource();
			return lf(i, this),
			Bs(i, this)
		},
		getRawIndicesByActiveState: function(t) {
			var e = this.coordinateSystem,
			i = this.getData(),
			n = [];
			return e.eachActiveState(i,
			function(e, o) {
				t === e && n.push(i.getRawIndex(o))
			}),
			n
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "parallel",
			parallelIndex: 0,
			label: {
				show: !1
			},
			inactiveOpacity: .05,
			activeOpacity: 1,
			lineStyle: {
				width: 1,
				opacity: .45,
				type: "solid"
			},
			emphasis: {
				label: {
					show: !1
				}
			},
			progressive: !1,
			smooth: !1,
			animationEasing: "linear"
		}
	});
	cr.extend({
		type: "parallel",
		init: function() {
			this._dataGroup = new S_,
			this.group.add(this._dataGroup),
			this._data
		},
		render: function(t, e, i, n) {
			this._renderForNormal(t, n)
		},
		dispose: function() {},
		_renderForNormal: function(t, e) {
			var i = this._dataGroup,
			n = t.getData(),
			o = this._data,
			a = t.coordinateSystem,
			r = a.dimensions,
			s = t.option.smooth ? .3 : null;
			if (n.diff(o).add(function(t) {
				df(n, i, t, r, a)
			}).update(function(i, s) {
				var l = o.getItemGraphicEl(s),
				h = cf(n, i, r, a);
				n.setItemGraphicEl(i, l),
				co(l, {
					shape: {
						points: h
					}
				},
				e && !1 === e.animation ? null: t, i)
			}).remove(function(t) {
				var e = o.getItemGraphicEl(t);
				i.remove(e)
			}).execute(), ff(n, s), !this._data) {
				var l = uf(a, t,
				function() {
					setTimeout(function() {
						i.removeClipPath()
					})
				});
				i.setClipPath(l)
			}
			this._data = n
		},
		remove: function() {
			this._dataGroup && this._dataGroup.removeAll(),
			this._data = null
		}
	});
	var wC = ["lineStyle", "normal", "opacity"];
	ds(function(t) {
		t.eachSeriesByType("parallel",
		function(e) {
			var i = e.getModel("itemStyle"),
			n = e.getModel("lineStyle"),
			o = t.get("color"),
			a = n.get("color") || i.get("color") || o[e.seriesIndex % o.length],
			r = e.get("inactiveOpacity"),
			s = e.get("activeOpacity"),
			l = e.getModel("lineStyle").getLineStyle(),
			h = e.coordinateSystem,
			u = e.getData(),
			c = {
				normal: l.opacity,
				active: s,
				inactive: r
			};
			h.eachActiveState(u,
			function(t, e) {
				var i = u.getItemModel(e),
				n = c[t];
				if ("normal" === t) {
					var o = i.get(wC, !0);
					null != o && (n = o)
				}
				u.setItemVisual(e, "opacity", n)
			}),
			u.setVisual("color", a)
		})
	});
	var bC = uM.extend({
		type: "series.sankey",
		layoutInfo: null,
		getInitialData: function(t) {
			var e = t.edges || t.links,
			i = t.data || t.nodes;
			if (i && e) return bD(i, e, this, !0).data
		},
		getGraph: function() {
			return this.getData().graph
		},
		getEdgeData: function() {
			return this.getGraph().edgeData
		},
		formatTooltip: function(t, e, i) {
			if ("edge" === i) {
				var n = this.getDataParams(t, i),
				o = n.data,
				a = o.source + " -- " + o.target;
				return n.value && (a += " : " + n.value),
				Ho(a)
			}
			return bC.superCall(this, "formatTooltip", t, e)
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "view",
			layout: null,
			left: "5%",
			top: "5%",
			right: "20%",
			bottom: "5%",
			nodeWidth: 20,
			nodeGap: 8,
			layoutIterations: 32,
			label: {
				show: !0,
				position: "right",
				color: "#000",
				fontSize: 12
			},
			itemStyle: {
				borderWidth: 1,
				borderColor: "#333"
			},
			lineStyle: {
				color: "#314656",
				opacity: .2,
				curveness: .5
			},
			emphasis: {
				label: {
					show: !0
				},
				lineStyle: {
					opacity: .6
				}
			},
			animationEasing: "linear",
			animationDuration: 1e3
		}
	}),
	SC = Nn({
		shape: {
			x1: 0,
			y1: 0,
			x2: 0,
			y2: 0,
			cpx1: 0,
			cpy1: 0,
			cpx2: 0,
			cpy2: 0,
			extent: 0
		},
		buildPath: function(t, e) {
			var i = e.extent / 2;
			t.moveTo(e.x1, e.y1 - i),
			t.bezierCurveTo(e.cpx1, e.cpy1 - i, e.cpx2, e.cpy2 - i, e.x2, e.y2 - i),
			t.lineTo(e.x2, e.y2 + i),
			t.bezierCurveTo(e.cpx2, e.cpy2 + i, e.cpx1, e.cpy1 + i, e.x1, e.y1 + i),
			t.closePath()
		}
	});
	ys({
		type: "sankey",
		_model: null,
		render: function(t, e, i) {
			var n = t.getGraph(),
			o = this.group,
			a = t.layoutInfo,
			r = t.getData(),
			s = t.getData("edge");
			this._model = t,
			o.removeAll(),
			o.attr("position", [a.x, a.y]),
			n.eachEdge(function(e) {
				var i = new SC;
				i.dataIndex = e.dataIndex,
				i.seriesIndex = t.seriesIndex,
				i.dataType = "edge";
				var n = e.getModel("lineStyle"),
				a = n.get("curveness"),
				r = e.node1.getLayout(),
				l = e.node2.getLayout(),
				h = e.getLayout();
				i.shape.extent = Math.max(1, h.dy);
				var u = r.x + r.dx,
				c = r.y + h.sy + h.dy / 2,
				d = l.x,
				f = l.y + h.ty + h.dy / 2,
				p = u * (1 - a) + d * a,
				g = c,
				m = u * a + d * (1 - a),
				v = f;
				switch (i.setShape({
					x1: u,
					y1: c,
					x2: d,
					y2: f,
					cpx1: p,
					cpy1: g,
					cpx2: m,
					cpy2: v
				}), i.setStyle(n.getItemStyle()), i.style.fill) {
				case "source":
					i.style.fill = e.node1.getVisual("color");
					break;
				case "target":
					i.style.fill = e.node2.getVisual("color")
				}
				to(i, e.getModel("emphasis.lineStyle").getItemStyle()),
				o.add(i),
				s.setItemGraphicEl(e.dataIndex, i)
			}),
			n.eachNode(function(e) {
				var i = e.getLayout(),
				n = e.getModel(),
				a = n.getModel("label"),
				s = n.getModel("emphasis.label"),
				l = new Vb({
					shape: {
						x: i.x,
						y: i.y,
						width: e.getLayout().dx,
						height: e.getLayout().dy
					},
					style: n.getModel("itemStyle").getItemStyle()
				}),
				h = e.getModel("emphasis.itemStyle").getItemStyle();
				eo(l.style, h, a, s, {
					labelFetcher: t,
					labelDataIndex: e.dataIndex,
					defaultText: e.id,
					isRectText: !0
				}),
				l.setStyle("fill", e.getVisual("color")),
				to(l, h),
				o.add(l),
				r.setItemGraphicEl(e.dataIndex, l),
				l.dataType = "node"
			}),
			!this._data && t.get("animation") && o.setClipPath(gf(o.getBoundingRect(), t,
			function() {
				o.removeClipPath()
			})),
			this._data = t.getData()
		},
		dispose: function() {}
	});
	cs(function(t, e, i) {
		t.eachSeriesByType("sankey",
		function(t) {
			var i = t.get("nodeWidth"),
			n = t.get("nodeGap"),
			o = vf(t, e);
			t.layoutInfo = o;
			var a = o.width,
			r = o.height,
			s = t.getGraph(),
			l = s.nodes,
			h = s.edges;
			xf(l),
			yf(l, h, i, n, a, r, 0 !== g(l,
			function(t) {
				return 0 === t.getLayout().value
			}).length ? 0 : t.get("layoutIterations"))
		})
	}),
	ds(function(t, e) {
		t.eachSeriesByType("sankey",
		function(t) {
			var e = t.getGraph().nodes;
			e.sort(function(t, e) {
				return t.getLayout().value - e.getLayout().value
			});
			var i = e[0].getLayout().value,
			n = e[e.length - 1].getLayout().value;
			d(e,
			function(e) {
				var o = new oD({
					type: "color",
					mappingMethod: "linear",
					dataExtent: [i, n],
					visual: t.get("color")
				}).mapValueToVisual(e.getLayout().value);
				e.setVisual("color", o);
				var a = e.getModel().get("itemStyle.color");
				null != a && e.setVisual("color", a)
			})
		})
	});
	var MC = Mn.extend({
		type: "whiskerInBox",
		shape: {},
		buildPath: function(t, e) {
			for (var i in e) if (e.hasOwnProperty(i) && 0 === i.indexOf("ends")) {
				var n = e[i];
				t.moveTo(n[0][0], n[0][1]),
				t.lineTo(n[1][0], n[1][1])
			}
		}
	}),
	IC = Bf.prototype;
	IC._createContent = function(t, e, i) {
		var n = t.getItemLayout(e),
		o = "horizontal" === n.chartLayout ? 1 : 0,
		a = 0;
		this.add(new Rb({
			shape: {
				points: i ? Vf(n.bodyEnds, o, n) : n.bodyEnds
			},
			style: {
				strokeNoScale: !0
			},
			z2: 100
		})),
		this.bodyIndex = a++;
		var r = f(n.whiskerEnds,
		function(t) {
			return i ? Vf(t, o, n) : t
		});
		this.add(new MC({
			shape: Gf(r),
			style: {
				strokeNoScale: !0
			},
			z2: 100
		})),
		this.whiskerIndex = a++
	},
	IC.updateData = function(t, e, i) {
		var n = this._seriesModel = t.hostModel,
		o = t.getItemLayout(e),
		a = tS[i ? "initProps": "updateProps"];
		a(this.childAt(this.bodyIndex), {
			shape: {
				points: o.bodyEnds
			}
		},
		n, e),
		a(this.childAt(this.whiskerIndex), {
			shape: Gf(o.whiskerEnds)
		},
		n, e),
		this.styleUpdater.call(null, this, t, e)
	},
	h(Bf, S_);
	var TC = Wf.prototype;
	TC.updateData = function(t) {
		var e = this.group,
		i = this._data,
		n = this.styleUpdater;
		t.diff(i).add(function(i) {
			if (t.hasValue(i)) {
				var o = new Bf(t, i, n, !0);
				t.setItemGraphicEl(i, o),
				e.add(o)
			}
		}).update(function(o, a) {
			var r = i.getItemGraphicEl(a);
			t.hasValue(o) ? (r ? r.updateData(t, o) : r = new Bf(t, o, n), e.add(r), t.setItemGraphicEl(o, r)) : e.remove(r)
		}).remove(function(t) {
			var n = i.getItemGraphicEl(t);
			n && e.remove(n)
		}).execute(),
		this._data = t
	},
	TC.remove = function() {
		var t = this.group,
		e = this._data;
		this._data = null,
		e && e.eachItemGraphicEl(function(e) {
			e && t.remove(e)
		})
	};
	var AC = {
		_baseAxisDim: null,
		getInitialData: function(t, e) {
			var i, n, o = e.getComponent("xAxis", this.get("xAxisIndex")),
			a = e.getComponent("yAxis", this.get("yAxisIndex")),
			r = o.get("type"),
			s = a.get("type");
			"category" === r ? (t.layout = "horizontal", i = o.getOrdinalMeta(), n = !0) : "category" === s ? (t.layout = "vertical", i = a.getOrdinalMeta(), n = !0) : t.layout = t.layout || "horizontal";
			var l = ["x", "y"],
			h = "horizontal" === t.layout ? 0 : 1,
			u = this._baseAxisDim = l[h],
			c = l[1 - h],
			f = [o, a],
			p = f[h].get("type"),
			g = f[1 - h].get("type"),
			m = t.data;
			if (m && n) {
				var v = [];
				d(m,
				function(t, e) {
					var i;
					t.value && y(t.value) ? (i = t.value.slice(), t.value.unshift(e)) : y(t) ? (i = t.slice(), t.unshift(e)) : i = t,
					v.push(i)
				}),
				t.data = v
			}
			var x = this.defaultValueDimensions;
			return rA(this, {
				coordDimensions: [{
					name: u,
					type: Ms(p),
					ordinalMeta: i,
					otherDims: {
						tooltip: !1,
						itemName: 0
					},
					dimsDef: ["base"]
				},
				{
					name: c,
					type: Ms(g),
					dimsDef: x.slice()
				}],
				dimensionsCount: x.length + 1
			})
		},
		getBaseAxis: function() {
			var t = this._baseAxisDim;
			return this.ecModel.getComponent(t + "Axis", this.get(t + "AxisIndex")).axis
		}
	},
	DC = {
		init: function() {
			var t = this._whiskerBoxDraw = new Wf(this.getStyleUpdater());
			this.group.add(t.group)
		},
		render: function(t, e, i) {
			this._whiskerBoxDraw.updateData(t.getData())
		},
		remove: function(t) {
			this._whiskerBoxDraw.remove()
		}
	};
	u(uM.extend({
		type: "series.boxplot",
		dependencies: ["xAxis", "yAxis", "grid"],
		defaultValueDimensions: ["min", "Q1", "median", "Q3", "max"],
		dimensions: null,
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "cartesian2d",
			legendHoverLink: !0,
			hoverAnimation: !0,
			layout: null,
			boxWidth: [7, 50],
			itemStyle: {
				color: "#fff",
				borderWidth: 1
			},
			emphasis: {
				itemStyle: {
					borderWidth: 2,
					shadowBlur: 5,
					shadowOffsetX: 2,
					shadowOffsetY: 2,
					shadowColor: "rgba(0,0,0,0.4)"
				}
			},
			animationEasing: "elasticOut",
			animationDuration: 800
		}
	}), AC, !0),
	u(cr.extend({
		type: "boxplot",
		getStyleUpdater: function() {
			return Ff
		},
		dispose: B
	}), DC, !0);
	var CC = ["itemStyle"],
	LC = ["emphasis", "itemStyle"],
	kC = ["itemStyle", "borderColor"],
	PC = d;
	ds(function(t, e) {
		var i = t.get("color");
		t.eachRawSeriesByType("boxplot",
		function(e) {
			var n = i[e.seriesIndex % i.length],
			o = e.getData();
			o.setVisual({
				legendSymbol: "roundRect",
				color: e.get(kC) || n
			}),
			t.isSeriesFiltered(e) || o.each(function(t) {
				var e = o.getItemModel(t);
				o.setItemVisual(t, {
					color: e.get(kC, !0)
				})
			})
		})
	}),
	cs(function(t) {
		var e = Hf(t);
		PC(e,
		function(t) {
			var e = t.seriesModels;
			e.length && (Zf(t), PC(e,
			function(e, i) {
				Uf(e, t.boxOffsetList[i], t.boxWidthList[i])
			}))
		})
	}),
	u(uM.extend({
		type: "series.candlestick",
		dependencies: ["xAxis", "yAxis", "grid"],
		defaultValueDimensions: ["open", "close", "lowest", "highest"],
		dimensions: null,
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "cartesian2d",
			legendHoverLink: !0,
			hoverAnimation: !0,
			layout: null,
			itemStyle: {
				color: "#c23531",
				color0: "#314656",
				borderWidth: 1,
				borderColor: "#c23531",
				borderColor0: "#314656"
			},
			emphasis: {
				itemStyle: {
					borderWidth: 2
				}
			},
			barMaxWidth: null,
			barMinWidth: null,
			barWidth: null,
			animationUpdate: !1,
			animationEasing: "linear",
			animationDuration: 300
		},
		getShadowDim: function() {
			return "open"
		},
		brushSelector: function(t, e, i) {
			var n = e.getItemLayout(t);
			return i.rect(n.brushRect)
		}
	}), AC, !0),
	u(cr.extend({
		type: "candlestick",
		getStyleUpdater: function() {
			return jf
		},
		dispose: B
	}), DC, !0);
	var OC = ["itemStyle"],
	NC = ["emphasis", "itemStyle"],
	EC = ["itemStyle", "borderColor"],
	zC = ["itemStyle", "borderColor0"],
	RC = ["itemStyle", "color"],
	BC = ["itemStyle", "color0"],
	VC = A;
	ss(function(t) {
		t && y(t.series) && d(t.series,
		function(t) {
			w(t) && "k" === t.type && (t.type = "candlestick")
		})
	}),
	ds(function(t, e) {
		t.eachRawSeriesByType("candlestick",
		function(e) {
			var i = e.getData();
			i.setVisual({
				legendSymbol: "roundRect"
			}),
			t.isSeriesFiltered(e) || i.each(function(t) {
				var e = i.getItemModel(t),
				n = i.getItemLayout(t).sign;
				i.setItemVisual(t, {
					color: e.get(n > 0 ? RC: BC),
					borderColor: e.get(n > 0 ? EC: zC)
				})
			})
		})
	}),
	cs(function(t) {
		t.eachSeriesByType("candlestick",
		function(t) {
			var e, i = t.coordinateSystem,
			n = t.getData(),
			o = Xf(t, n),
			a = t.get("layout"),
			r = "horizontal" === a ? 0 : 1,
			s = 1 - r,
			l = ["x", "y"],
			h = [];
			if (d(n.dimensions,
			function(t) {
				var i = n.getDimensionInfo(t).coordDim;
				i === l[s] ? h.push(t) : i === l[r] && (e = t)
			}), !(null == e || h.length < 4)) {
				var u = 0;
				n.each([e].concat(h),
				function() {
					function t(t) {
						var e = [];
						return e[r] = d,
						e[s] = t,
						isNaN(d) || isNaN(t) ? [NaN, NaN] : i.dataToPoint(e)
					}
					function e(t, e) {
						var i = t.slice(),
						n = t.slice();
						i[r] = Wn(i[r] + o / 2, 1, !1),
						n[r] = Wn(n[r] - o / 2, 1, !0),
						e ? M.push(i, n) : M.push(n, i)
					}
					function l(t) {
						return t[r] = Wn(t[r], 1),
						t
					}
					var c = arguments,
					d = c[0],
					f = c[h.length + 1],
					p = c[1],
					g = c[2],
					m = c[3],
					v = c[4],
					y = Math.min(p, g),
					x = Math.max(p, g),
					_ = t(y),
					w = t(x),
					b = t(m),
					S = [[l(t(v)), l(w)], [l(b), l(_)]],
					M = [];
					e(w, 0),
					e(_, 1);
					var I;
					I = p > g ? -1 : p < g ? 1 : u > 0 ? n.getItemModel(u - 1).get()[2] <= g ? 1 : -1 : 1,
					n.setItemLayout(f, {
						chartLayout: a,
						sign: I,
						initBaseline: p > g ? w[s] : _[s],
						bodyEnds: M,
						whiskerEnds: S,
						brushRect: function() {
							var e = t(Math.min(p, g, m, v)),
							i = t(Math.max(p, g, m, v));
							return e[r] -= o / 2,
							i[r] -= o / 2,
							{
								x: e[0],
								y: e[1],
								width: s ? o: i[0] - e[0],
								height: s ? i[1] - e[1] : o
							}
						} ()
					}),
					++u
				},
				!0)
			}
		})
	}),
	uM.extend({
		type: "series.effectScatter",
		dependencies: ["grid", "polar"],
		getInitialData: function(t, e) {
			return Bs(this.getSource(), this)
		},
		brushSelector: "point",
		defaultOption: {
			coordinateSystem: "cartesian2d",
			zlevel: 0,
			z: 2,
			legendHoverLink: !0,
			effectType: "ripple",
			progressive: 0,
			showEffectOn: "render",
			rippleEffect: {
				period: 4,
				scale: 2.5,
				brushType: "fill"
			},
			symbolSize: 10
		}
	});
	var GC = $f.prototype;
	GC.stopEffectAnimation = function() {
		this.childAt(1).removeAll()
	},
	GC.startEffectAnimation = function(t) {
		for (var e = t.symbolType,
		i = t.color,
		n = this.childAt(1), o = 0; o < 3; o++) {
			var a = dl(e, -1, -1, 2, 2, i);
			a.attr({
				style: {
					strokeNoScale: !0
				},
				z2: 99,
				silent: !0,
				scale: [.5, .5]
			});
			var r = -o / 3 * t.period + t.effectOffset;
			a.animate("", !0).when(t.period, {
				scale: [t.rippleScale / 2, t.rippleScale / 2]
			}).delay(r).start(),
			a.animateStyle(!0).when(t.period, {
				opacity: 0
			}).delay(r).start(),
			n.add(a)
		}
		qf(n, t)
	},
	GC.updateEffectAnimation = function(t) {
		for (var e = this._effectCfg,
		i = this.childAt(1), n = ["symbolType", "period", "rippleScale"], o = 0; o < n.length; o++) {
			var a = n[o];
			if (e[a] !== t[a]) return this.stopEffectAnimation(),
			void this.startEffectAnimation(t)
		}
		qf(i, t)
	},
	GC.highlight = function() {
		this.trigger("emphasis")
	},
	GC.downplay = function() {
		this.trigger("normal")
	},
	GC.updateData = function(t, e) {
		var i = t.hostModel;
		this.childAt(0).updateData(t, e);
		var n = this.childAt(1),
		o = t.getItemModel(e),
		a = t.getItemVisual(e, "symbol"),
		r = Yf(t.getItemVisual(e, "symbolSize")),
		s = t.getItemVisual(e, "color");
		n.attr("scale", r),
		n.traverse(function(t) {
			t.attr({
				fill: s
			})
		});
		var l = o.getShallow("symbolOffset");
		if (l) {
			var h = n.position;
			h[0] = To(l[0], r[0]),
			h[1] = To(l[1], r[1])
		}
		n.rotation = (o.getShallow("symbolRotate") || 0) * Math.PI / 180 || 0;
		var u = {};
		if (u.showEffectOn = i.get("showEffectOn"), u.rippleScale = o.get("rippleEffect.scale"), u.brushType = o.get("rippleEffect.brushType"), u.period = 1e3 * o.get("rippleEffect.period"), u.effectOffset = e / t.count(), u.z = o.getShallow("z") || 0, u.zlevel = o.getShallow("zlevel") || 0, u.symbolType = a, u.color = s, this.off("mouseover").off("mouseout").off("emphasis").off("normal"), "render" === u.showEffectOn) this._effectCfg ? this.updateEffectAnimation(u) : this.startEffectAnimation(u),
		this._effectCfg = u;
		else {
			this._effectCfg = null,
			this.stopEffectAnimation();
			var c = this.childAt(0),
			d = function() {
				c.highlight(),
				"render" !== u.showEffectOn && this.startEffectAnimation(u)
			},
			f = function() {
				c.downplay(),
				"render" !== u.showEffectOn && this.stopEffectAnimation()
			};
			this.on("mouseover", d, this).on("mouseout", f, this).on("emphasis", d, this).on("normal", f, this)
		}
		this._effectCfg = u
	},
	GC.fadeOut = function(t) {
		this.off("mouseover").off("mouseout").off("emphasis").off("normal"),
		t && t()
	},
	h($f, S_),
	ys({
		type: "effectScatter",
		init: function() {
			this._symbolDraw = new Ml($f)
		},
		render: function(t, e, i) {
			var n = t.getData(),
			o = this._symbolDraw;
			o.updateData(n),
			this.group.add(o.group)
		},
		updateTransform: function(t, e, i) {
			var n = t.getData();
			this.group.dirty();
			var o = ST().reset(t);
			o.progress && o.progress({
				start: 0,
				end: n.count()
			},
			n),
			this._symbolDraw.updateLayout(n)
		},
		_updateGroupTransform: function(t) {
			var e = t.coordinateSystem;
			e && e.getRoamTransform && (this.group.transform = gt(e.getRoamTransform()), this.group.decomposeTransform())
		},
		remove: function(t, e) {
			this._symbolDraw && this._symbolDraw.remove(e)
		},
		dispose: function() {}
	}),
	ds(bT("effectScatter", "circle")),
	cs(ST("effectScatter"));
	var WC = "undefined" == typeof window ? global: window,
	FC = WC.Uint32Array || Array,
	HC = WC.Float64Array || Array,
	ZC = uM.extend({
		type: "series.lines",
		dependencies: ["grid", "polar"],
		visualColorAccessPath: "lineStyle.color",
		init: function(t) {
			Kf(t);
			var e = this._processFlatCoordsArray(t.data);
			this._flatCoords = e.flatCoords,
			this._flatCoordsOffset = e.flatCoordsOffset,
			e.flatCoords && (t.data = new Float32Array(e.count)),
			ZC.superApply(this, "init", arguments)
		},
		mergeOption: function(t) {
			if (Kf(t), t.data) {
				var e = this._processFlatCoordsArray(t.data);
				this._flatCoords = e.flatCoords,
				this._flatCoordsOffset = e.flatCoordsOffset,
				e.flatCoords && (t.data = new Float32Array(e.count))
			}
			ZC.superApply(this, "mergeOption", arguments)
		},
		appendData: function(t) {
			var e = this._processFlatCoordsArray(t.data);
			e.flatCoords && (this._flatCoords ? (this._flatCoords = R(this._flatCoords, e.flatCoords), this._flatCoordsOffset = R(this._flatCoordsOffset, e.flatCoordsOffset)) : (this._flatCoords = e.flatCoords, this._flatCoordsOffset = e.flatCoordsOffset), t.data = new Float32Array(e.count)),
			this.getRawData().appendData(t.data)
		},
		_getCoordsFromItemModel: function(t) {
			var e = this.getData().getItemModel(t);
			return e.option instanceof Array ? e.option: e.getShallow("coords")
		},
		getLineCoordsCount: function(t) {
			return this._flatCoordsOffset ? this._flatCoordsOffset[2 * t + 1] : this._getCoordsFromItemModel(t).length
		},
		getLineCoords: function(t, e) {
			if (this._flatCoordsOffset) {
				for (var i = this._flatCoordsOffset[2 * t], n = this._flatCoordsOffset[2 * t + 1], o = 0; o < n; o++) e[o] = e[o] || [],
				e[o][0] = this._flatCoords[i + 2 * o],
				e[o][1] = this._flatCoords[i + 2 * o + 1];
				return n
			}
			for (var a = this._getCoordsFromItemModel(t), o = 0; o < a.length; o++) e[o] = e[o] || [],
			e[o][0] = a[o][0],
			e[o][1] = a[o][1];
			return a.length
		},
		_processFlatCoordsArray: function(t) {
			var e = 0;
			if (this._flatCoords && (e = this._flatCoords.length), "number" == typeof t[0]) {
				for (var i = t.length,
				n = new FC(i), o = new HC(i), a = 0, r = 0, s = 0, l = 0; l < i;) {
					s++;
					var h = t[l++];
					n[r++] = a + e,
					n[r++] = h;
					for (var u = 0; u < h; u++) {
						var c = t[l++],
						d = t[l++];
						o[a++] = c,
						o[a++] = d
					}
				}
				return {
					flatCoordsOffset: new Uint32Array(n.buffer, 0, r),
					flatCoords: o,
					count: s
				}
			}
			return {
				flatCoordsOffset: null,
				flatCoords: null,
				count: t.length
			}
		},
		getInitialData: function(t, e) {
			var i = new yI(["value"], this);
			return i.hasItemOption = !1,
			i.initData(t.data, [],
			function(t, e, n, o) {
				if (t instanceof Array) return NaN;
				i.hasItemOption = !0;
				var a = t.value;
				return null != a ? a instanceof Array ? a[o] : a: void 0
			}),
			i
		},
		formatTooltip: function(t) {
			var e = this.getData().getItemModel(t),
			i = e.get("name");
			if (i) return i;
			var n = e.get("fromName"),
			o = e.get("toName"),
			a = [];
			return null != n && a.push(n),
			null != o && a.push(o),
			Ho(a.join(" > "))
		},
		preventIncremental: function() {
			return !! this.get("effect.show")
		},
		getProgressive: function() {
			var t = this.option.progressive;
			return null == t ? this.option.large ? 1e4: this.get("progressive") : t
		},
		getProgressiveThreshold: function() {
			var t = this.option.progressiveThreshold;
			return null == t ? this.option.large ? 2e4: this.get("progressiveThreshold") : t
		},
		defaultOption: {
			coordinateSystem: "geo",
			zlevel: 0,
			z: 2,
			legendHoverLink: !0,
			hoverAnimation: !0,
			xAxisIndex: 0,
			yAxisIndex: 0,
			symbol: ["none", "none"],
			symbolSize: [10, 10],
			geoIndex: 0,
			effect: {
				show: !1,
				period: 4,
				constantSpeed: 0,
				symbol: "circle",
				symbolSize: 3,
				loop: !0,
				trailLength: .2
			},
			large: !1,
			largeThreshold: 2e3,
			incremental: !1,
			incrementalThreshold: 3e3,
			polyline: !1,
			label: {
				show: !1,
				position: "end"
			},
			lineStyle: {
				opacity: .5
			}
		}
	}),
	UC = Jf.prototype;
	UC.createLine = function(t, e, i) {
		return new Wc(t, e, i)
	},
	UC._updateEffectSymbol = function(t, e) {
		var i = t.getItemModel(e).getModel("effect"),
		n = i.get("symbolSize"),
		o = i.get("symbol");
		y(n) || (n = [n, n]);
		var a = i.get("color") || t.getItemVisual(e, "color"),
		r = this.childAt(1);
		this._symbolType !== o && (this.remove(r), (r = dl(o, -.5, -.5, 1, 1, a)).z2 = 100, r.culling = !0, this.add(r)),
		r && (r.setStyle("shadowColor", a), r.setStyle(i.getItemStyle(["color"])), r.attr("scale", n), r.setColor(a), r.attr("scale", n), this._symbolType = o, this._updateEffectAnimation(t, i, e))
	},
	UC._updateEffectAnimation = function(t, e, i) {
		var n = this.childAt(1);
		if (n) {
			var o = this,
			a = t.getItemLayout(i),
			r = 1e3 * e.get("period"),
			s = e.get("loop"),
			l = e.get("constantSpeed"),
			h = T(e.get("delay"),
			function(e) {
				return e / t.count() * r / 3
			}),
			u = "function" == typeof h;
			if (n.ignore = !0, this.updateAnimationPoints(n, a), l > 0 && (r = this.getLineLength(n) / l * 1e3), r !== this._period || s !== this._loop) {
				n.stopAnimation();
				var c = h;
				u && (c = h(i)),
				n.__t > 0 && (c = -r * n.__t),
				n.__t = 0;
				var d = n.animate("", s).when(r, {
					__t: 1
				}).delay(c).during(function() {
					o.updateSymbolPosition(n)
				});
				s || d.done(function() {
					o.remove(n)
				}),
				d.start()
			}
			this._period = r,
			this._loop = s
		}
	},
	UC.getLineLength = function(t) {
		return Vx(t.__p1, t.__cp1) + Vx(t.__cp1, t.__p2)
	},
	UC.updateAnimationPoints = function(t, e) {
		t.__p1 = e[0],
		t.__p2 = e[1],
		t.__cp1 = e[2] || [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
	},
	UC.updateData = function(t, e, i) {
		this.childAt(0).updateData(t, e, i),
		this._updateEffectSymbol(t, e)
	},
	UC.updateSymbolPosition = function(t) {
		var e = t.__p1,
		i = t.__p2,
		n = t.__cp1,
		o = t.__t,
		a = t.position,
		r = Ji,
		s = Qi;
		a[0] = r(e[0], n[0], i[0], o),
		a[1] = r(e[1], n[1], i[1], o);
		var l = s(e[0], n[0], i[0], o),
		h = s(e[1], n[1], i[1], o);
		t.rotation = -Math.atan2(h, l) - Math.PI / 2,
		t.ignore = !1
	},
	UC.updateLayout = function(t, e) {
		this.childAt(0).updateLayout(t, e);
		var i = t.getItemModel(e).getModel("effect");
		this._updateEffectAnimation(t, i, e)
	},
	h(Jf, S_);
	var jC = Qf.prototype;
	jC._createPolyline = function(t, e, i) {
		var n = t.getItemLayout(e),
		o = new Bb({
			shape: {
				points: n
			}
		});
		this.add(o),
		this._updateCommonStl(t, e, i)
	},
	jC.updateData = function(t, e, i) {
		var n = t.hostModel;
		co(this.childAt(0), {
			shape: {
				points: t.getItemLayout(e)
			}
		},
		n, e),
		this._updateCommonStl(t, e, i)
	},
	jC._updateCommonStl = function(t, e, i) {
		var n = this.childAt(0),
		o = t.getItemModel(e),
		a = t.getItemVisual(e, "color"),
		s = i && i.lineStyle,
		l = i && i.hoverLineStyle;
		i && !t.hasItemOption || (s = o.getModel("lineStyle").getLineStyle(), l = o.getModel("emphasis.lineStyle").getLineStyle()),
		n.useStyle(r({
			strokeNoScale: !0,
			fill: "none",
			stroke: a
		},
		s)),
		n.hoverStyle = l,
		to(this)
	},
	jC.updateLayout = function(t, e) {
		this.childAt(0).setShape("points", t.getItemLayout(e))
	},
	h(Qf, S_);
	var XC = tp.prototype;
	XC.createLine = function(t, e, i) {
		return new Qf(t, e, i)
	},
	XC.updateAnimationPoints = function(t, e) {
		this._points = e;
		for (var i = [0], n = 0, o = 1; o < e.length; o++) {
			var a = e[o - 1],
			r = e[o];
			n += Vx(a, r),
			i.push(n)
		}
		if (0 !== n) {
			for (o = 0; o < i.length; o++) i[o] /= n;
			this._offsets = i,
			this._length = n
		}
	},
	XC.getLineLength = function(t) {
		return this._length
	},
	XC.updateSymbolPosition = function(t) {
		var e = t.__t,
		i = this._points,
		n = this._offsets,
		o = i.length;
		if (n) {
			var a = this._lastFrame;
			if (e < this._lastFramePercent) {
				for (r = Math.min(a + 1, o - 1); r >= 0 && !(n[r] <= e); r--);
				r = Math.min(r, o - 2)
			} else {
				for (var r = a; r < o && !(n[r] > e); r++);
				r = Math.min(r - 1, o - 2)
			}
			J(t.position, i[r], i[r + 1], (e - n[r]) / (n[r + 1] - n[r]));
			var s = i[r + 1][0] - i[r][0],
			l = i[r + 1][1] - i[r][1];
			t.rotation = -Math.atan2(l, s) - Math.PI / 2,
			this._lastFrame = r,
			this._lastFramePercent = e,
			t.ignore = !1
		}
	},
	h(tp, Jf);
	var YC = Nn({
		shape: {
			polyline: !1,
			curveness: 0,
			segs: []
		},
		buildPath: function(t, e) {
			var i = e.segs,
			n = e.curveness;
			if (e.polyline) for (r = 0; r < i.length;) {
				var o = i[r++];
				if (o > 0) {
					t.moveTo(i[r++], i[r++]);
					for (var a = 1; a < o; a++) t.lineTo(i[r++], i[r++])
				}
			} else for (var r = 0; r < i.length;) {
				var s = i[r++],
				l = i[r++],
				h = i[r++],
				u = i[r++];
				if (t.moveTo(s, l), n > 0) {
					var c = (s + h) / 2 - (l - u) * n,
					d = (l + u) / 2 - (h - s) * n;
					t.quadraticCurveTo(c, d, h, u)
				} else t.lineTo(h, u)
			}
		},
		findDataIndex: function(t, e) {
			var i = this.shape,
			n = i.segs,
			o = i.curveness;
			if (i.polyline) for (var a = 0,
			r = 0; r < n.length;) {
				var s = n[r++];
				if (s > 0) for (var l = n[r++], h = n[r++], u = 1; u < s; u++) if (un(l, h, c = n[r++], d = n[r++])) return a;
				a++
			} else for (var a = 0,
			r = 0; r < n.length;) {
				var l = n[r++],
				h = n[r++],
				c = n[r++],
				d = n[r++];
				if (o > 0) {
					if (dn(l, h, (l + c) / 2 - (h - d) * o, (h + d) / 2 - (c - l) * o, c, d)) return a
				} else if (un(l, h, c, d)) return a;
				a++
			}
			return - 1
		}
	}),
	qC = ep.prototype;
	qC.isPersistent = function() {
		return ! this._incremental
	},
	qC.updateData = function(t) {
		this.group.removeAll();
		var e = new YC({
			rectHover: !0,
			cursor: "default"
		});
		e.setShape({
			segs: t.getLayout("linesPoints")
		}),
		this._setCommon(e, t),
		this.group.add(e),
		this._incremental = null
	},
	qC.incrementalPrepareUpdate = function(t) {
		this.group.removeAll(),
		this._clearIncremental(),
		t.count() > 5e5 ? (this._incremental || (this._incremental = new On({
			silent: !0
		})), this.group.add(this._incremental)) : this._incremental = null
	},
	qC.incrementalUpdate = function(t, e) {
		var i = new YC;
		i.setShape({
			segs: e.getLayout("linesPoints")
		}),
		this._setCommon(i, e, !!this._incremental),
		this._incremental ? this._incremental.addDisplayable(i, !0) : (i.rectHover = !0, i.cursor = "default", i.__startIndex = t.start, this.group.add(i))
	},
	qC.remove = function() {
		this._clearIncremental(),
		this._incremental = null,
		this.group.removeAll()
	},
	qC._setCommon = function(t, e, i) {
		var n = e.hostModel;
		t.setShape({
			polyline: n.get("polyline"),
			curveness: n.get("lineStyle.curveness")
		}),
		t.useStyle(n.getModel("lineStyle").getLineStyle()),
		t.style.strokeNoScale = !0;
		var o = e.getVisual("color");
		o && t.setStyle("stroke", o),
		t.setStyle("fill"),
		i || (t.seriesIndex = n.seriesIndex, t.on("mousemove",
		function(e) {
			t.dataIndex = null;
			var i = t.findDataIndex(e.offsetX, e.offsetY);
			i > 0 && (t.dataIndex = i + t.__startIndex)
		}))
	},
	qC._clearIncremental = function() {
		var t = this._incremental;
		t && t.clearDisplaybles()
	};
	var $C = {
		seriesType: "lines",
		plan: fM(),
		reset: function(t) {
			var e = t.coordinateSystem,
			i = t.get("polyline"),
			n = t.pipelineContext.large;
			return {
				progress: function(o, a) {
					var r = [];
					if (n) {
						var s, l = o.end - o.start;
						if (i) {
							for (var h = 0,
							u = o.start; u < o.end; u++) h += t.getLineCoordsCount(u);
							s = new Float32Array(l + 2 * h)
						} else s = new Float32Array(2 * l);
						for (var c = 0,
						d = [], u = o.start; u < o.end; u++) {
							g = t.getLineCoords(u, r),
							i && (s[c++] = g);
							for (var f = 0; f < g; f++) d = e.dataToPoint(r[f], !1, d),
							s[c++] = d[0],
							s[c++] = d[1]
						}
						a.setLayout("linesPoints", s)
					} else for (u = o.start; u < o.end; u++) {
						var p = a.getItemModel(u),
						g = t.getLineCoords(u, r),
						m = [];
						if (i) for (var v = 0; v < g; v++) m.push(e.dataToPoint(r[v]));
						else {
							m[0] = e.dataToPoint(r[0]),
							m[1] = e.dataToPoint(r[1]);
							var y = p.get("lineStyle.curveness"); + y && (m[2] = [(m[0][0] + m[1][0]) / 2 - (m[0][1] - m[1][1]) * y, (m[0][1] + m[1][1]) / 2 - (m[1][0] - m[0][0]) * y])
						}
						a.setItemLayout(u, m)
					}
				}
			}
		}
	};
	ys({
		type: "lines",
		init: function() {},
		render: function(t, e, i) {
			var n = t.getData(),
			o = this._updateLineDraw(n, t),
			a = t.get("zlevel"),
			r = t.get("effect.trailLength"),
			s = i.getZr(),
			l = "svg" === s.painter.getType();
			l || s.painter.getLayer(a).clear(!0),
			null == this._lastZlevel || l || s.configLayer(this._lastZlevel, {
				motionBlur: !1
			}),
			this._showEffect(t) && r && (l || s.configLayer(a, {
				motionBlur: !0,
				lastFrameAlpha: Math.max(Math.min(r / 10 + .9, 1), 0)
			})),
			o.updateData(n),
			this._lastZlevel = a,
			this._finished = !0
		},
		incrementalPrepareRender: function(t, e, i) {
			var n = t.getData();
			this._updateLineDraw(n, t).incrementalPrepareUpdate(n),
			this._clearLayer(i),
			this._finished = !1
		},
		incrementalRender: function(t, e, i) {
			this._lineDraw.incrementalUpdate(t, e.getData()),
			this._finished = t.end === e.getData().count()
		},
		updateTransform: function(t, e, i) {
			var n = t.getData();
			if (!this._finished || t.pipelineContext.large) return {
				update: !0
			};
			var o = $C.reset(t);
			o.progress && o.progress({
				start: 0,
				end: n.count()
			},
			n),
			this._lineDraw.updateLayout(),
			this._clearLayer(i)
		},
		_updateLineDraw: function(t, e) {
			var i = this._lineDraw,
			n = this._showEffect(e),
			o = !!e.get("polyline"),
			a = e.pipelineContext.large;
			return i && n === this._hasEffet && o === this._isPolyline && a === this._isLargeDraw || (i && i.remove(), i = this._lineDraw = a ? new ep: new Fc(o ? n ? tp: Qf: n ? Jf: Wc), this._hasEffet = n, this._isPolyline = o, this._isLargeDraw = a, this.group.removeAll()),
			this.group.add(i.group),
			i
		},
		_showEffect: function(t) {
			return !! t.get("effect.show")
		},
		_clearLayer: function(t) {
			var e = t.getZr();
			"svg" === e.painter.getType() || null == this._lastZlevel || e.painter.getLayer(this._lastZlevel).clear(!0)
		},
		remove: function(t, e) {
			this._lineDraw && this._lineDraw.remove(),
			this._lineDraw = null,
			this._clearLayer(e)
		},
		dispose: function() {}
	});
	var KC = "lineStyle.opacity".split("."),
	JC = {
		seriesType: "lines",
		reset: function(t, e, i) {
			var n = ip(t.get("symbol")),
			o = ip(t.get("symbolSize")),
			a = t.getData();
			return a.setVisual("fromSymbol", n && n[0]),
			a.setVisual("toSymbol", n && n[1]),
			a.setVisual("fromSymbolSize", o && o[0]),
			a.setVisual("toSymbolSize", o && o[1]),
			a.setVisual("opacity", t.get(KC)),
			{
				dataEach: a.hasItemOption ?
				function(t, e) {
					var i = t.getItemModel(e),
					n = ip(i.getShallow("symbol", !0)),
					o = ip(i.getShallow("symbolSize", !0)),
					a = i.get(KC);
					n[0] && t.setItemVisual(e, "fromSymbol", n[0]),
					n[1] && t.setItemVisual(e, "toSymbol", n[1]),
					o[0] && t.setItemVisual(e, "fromSymbolSize", o[0]),
					o[1] && t.setItemVisual(e, "toSymbolSize", o[1]),
					t.setItemVisual(e, "opacity", a)
				}: null
			}
		}
	};
	cs($C),
	ds(JC),
	uM.extend({
		type: "series.heatmap",
		getInitialData: function(t, e) {
			return Bs(this.getSource(), this)
		},
		preventIncremental: function() {
			var t = Aa.get(this.get("coordinateSystem"));
			if (t && t.dimensions) return "lng" === t.dimensions[0] && "lat" === t.dimensions[1]
		},
		defaultOption: {
			coordinateSystem: "cartesian2d",
			zlevel: 0,
			z: 2,
			geoIndex: 0,
			blurSize: 30,
			pointSize: 20,
			maxOpacity: 1,
			minOpacity: 0
		}
	});
	np.prototype = {
		update: function(t, e, i, n, o, a) {
			var r = this._getBrush(),
			s = this._getGradient(t, o, "inRange"),
			l = this._getGradient(t, o, "outOfRange"),
			h = this.pointSize + this.blurSize,
			u = this.canvas,
			c = u.getContext("2d"),
			d = t.length;
			u.width = e,
			u.height = i;
			for (var f = 0; f < d; ++f) {
				var p = t[f],
				g = p[0],
				m = p[1],
				v = n(p[2]);
				c.globalAlpha = v,
				c.drawImage(r, g - h, m - h)
			}
			if (!u.width || !u.height) return u;
			for (var y = c.getImageData(0, 0, u.width, u.height), x = y.data, _ = 0, w = x.length, b = this.minOpacity, S = this.maxOpacity - b; _ < w;) {
				var v = x[_ + 3] / 256,
				M = 4 * Math.floor(255 * v);
				if (v > 0) {
					var I = a(v) ? s: l;
					v > 0 && (v = v * S + b),
					x[_++] = I[M],
					x[_++] = I[M + 1],
					x[_++] = I[M + 2],
					x[_++] = I[M + 3] * v * 256
				} else _ += 4
			}
			return c.putImageData(y, 0, 0),
			u
		},
		_getBrush: function() {
			var t = this._brushCanvas || (this._brushCanvas = Px()),
			e = this.pointSize + this.blurSize,
			i = 2 * e;
			t.width = i,
			t.height = i;
			var n = t.getContext("2d");
			return n.clearRect(0, 0, i, i),
			n.shadowOffsetX = i,
			n.shadowBlur = this.blurSize,
			n.shadowColor = "#000",
			n.beginPath(),
			n.arc( - e, e, this.pointSize, 0, 2 * Math.PI, !0),
			n.closePath(),
			n.fill(),
			t
		},
		_getGradient: function(t, e, i) {
			for (var n = this._gradientPixels,
			o = n[i] || (n[i] = new Uint8ClampedArray(1024)), a = [0, 0, 0, 0], r = 0, s = 0; s < 256; s++) e[i](s / 255, !0, a),
			o[r++] = a[0],
			o[r++] = a[1],
			o[r++] = a[2],
			o[r++] = a[3];
			return o
		}
	},
	ys({
		type: "heatmap",
		render: function(t, e, i) {
			var n;
			e.eachComponent("visualMap",
			function(e) {
				e.eachTargetSeries(function(i) {
					i === t && (n = e)
				})
			}),
			this.group.removeAll(),
			this._incrementalDisplayable = null;
			var o = t.coordinateSystem;
			"cartesian2d" === o.type || "calendar" === o.type ? this._renderOnCartesianAndCalendar(t, i, 0, t.getData().count()) : rp(o) && this._renderOnGeo(o, t, n, i)
		},
		incrementalPrepareRender: function(t, e, i) {
			this.group.removeAll()
		},
		incrementalRender: function(t, e, i, n) {
			e.coordinateSystem && this._renderOnCartesianAndCalendar(e, n, t.start, t.end, !0)
		},
		_renderOnCartesianAndCalendar: function(t, e, i, n, o) {
			var r, s, l = t.coordinateSystem;
			if ("cartesian2d" === l.type) {
				var h = l.getAxis("x"),
				u = l.getAxis("y");
				r = h.getBandWidth(),
				s = u.getBandWidth()
			}
			for (var c = this.group,
			d = t.getData(), f = t.getModel("itemStyle").getItemStyle(["color"]), p = t.getModel("emphasis.itemStyle").getItemStyle(), g = t.getModel("label"), m = t.getModel("emphasis.label"), v = l.type, y = "cartesian2d" === v ? [d.mapDimension("x"), d.mapDimension("y"), d.mapDimension("value")] : [d.mapDimension("time"), d.mapDimension("value")], x = i; x < n; x++) {
				var _;
				if ("cartesian2d" === v) {
					if (isNaN(d.get(y[2], x))) continue;
					var w = l.dataToPoint([d.get(y[0], x), d.get(y[1], x)]);
					_ = new Vb({
						shape: {
							x: w[0] - r / 2,
							y: w[1] - s / 2,
							width: r,
							height: s
						},
						style: {
							fill: d.getItemVisual(x, "color"),
							opacity: d.getItemVisual(x, "opacity")
						}
					})
				} else {
					if (isNaN(d.get(y[1], x))) continue;
					_ = new Vb({
						z2: 1,
						shape: l.dataToRect([d.get(y[0], x)]).contentShape,
						style: {
							fill: d.getItemVisual(x, "color"),
							opacity: d.getItemVisual(x, "opacity")
						}
					})
				}
				var b = d.getItemModel(x);
				d.hasItemOption && (f = b.getModel("itemStyle").getItemStyle(["color"]), p = b.getModel("emphasis.itemStyle").getItemStyle(), g = b.getModel("label"), m = b.getModel("emphasis.label"));
				var S = t.getRawValue(x),
				M = "-";
				S && null != S[2] && (M = S[2]),
				eo(f, p, g, m, {
					labelFetcher: t,
					labelDataIndex: x,
					defaultText: M,
					isRectText: !0
				}),
				_.setStyle(f),
				to(_, d.hasItemOption ? p: a({},
				p)),
				_.incremental = o,
				o && (_.useHoverLayer = !0),
				c.add(_),
				d.setItemGraphicEl(x, _)
			}
		},
		_renderOnGeo: function(t, e, i, n) {
			var o = i.targetVisuals.inRange,
			a = i.targetVisuals.outOfRange,
			r = e.getData(),
			s = this._hmLayer || this._hmLayer || new np;
			s.blurSize = e.get("blurSize"),
			s.pointSize = e.get("pointSize"),
			s.minOpacity = e.get("minOpacity"),
			s.maxOpacity = e.get("maxOpacity");
			var l = t.getViewRect().clone(),
			h = t.getRoamTransform();
			l.applyTransform(h);
			var u = Math.max(l.x, 0),
			c = Math.max(l.y, 0),
			d = Math.min(l.width + l.x, n.getWidth()),
			f = Math.min(l.height + l.y, n.getHeight()),
			p = d - u,
			g = f - c,
			m = [r.mapDimension("lng"), r.mapDimension("lat"), r.mapDimension("value")],
			v = r.mapArray(m,
			function(e, i, n) {
				var o = t.dataToPoint([e, i]);
				return o[0] -= u,
				o[1] -= c,
				o.push(n),
				o
			}),
			y = i.getExtent(),
			x = "visualMap.continuous" === i.type ? ap(y, i.option.range) : op(y, i.getPieceList(), i.option.selected);
			s.update(v, p, g, o.color.getNormalizer(), {
				inRange: o.color.getColorMapper(),
				outOfRange: a.color.getColorMapper()
			},
			x);
			var _ = new Je({
				style: {
					width: p,
					height: g,
					x: u,
					y: c,
					image: s.canvas
				},
				silent: !0
			});
			this.group.add(_)
		},
		dispose: function() {}
	});
	var QC = tA.extend({
		type: "series.pictorialBar",
		dependencies: ["grid"],
		defaultOption: {
			symbol: "circle",
			symbolSize: null,
			symbolRotate: null,
			symbolPosition: null,
			symbolOffset: null,
			symbolMargin: null,
			symbolRepeat: !1,
			symbolRepeatDirection: "end",
			symbolClip: !1,
			symbolBoundingData: null,
			symbolPatternSize: 400,
			barGap: "-100%",
			progressive: 0,
			hoverAnimation: !1
		},
		getInitialData: function(t) {
			return t.stack = null,
			QC.superApply(this, "getInitialData", arguments)
		}
	}),
	tL = ["itemStyle", "borderWidth"],
	eL = [{
		xy: "x",
		wh: "width",
		index: 0,
		posDesc: ["left", "right"]
	},
	{
		xy: "y",
		wh: "height",
		index: 1,
		posDesc: ["top", "bottom"]
	}],
	iL = new Lb;
	ys({
		type: "pictorialBar",
		render: function(t, e, i) {
			var n = this.group,
			o = t.getData(),
			a = this._data,
			r = t.coordinateSystem,
			s = !!r.getBaseAxis().isHorizontal(),
			l = r.grid.getRect(),
			h = {
				ecSize: {
					width: i.getWidth(),
					height: i.getHeight()
				},
				seriesModel: t,
				coordSys: r,
				coordSysExtent: [[l.x, l.x + l.width], [l.y, l.y + l.height]],
				isHorizontal: s,
				valueDim: eL[ + s],
				categoryDim: eL[1 - s]
			};
			return o.diff(a).add(function(t) {
				if (o.hasValue(t)) {
					var e = yp(o, t),
					i = sp(o, t, e, h),
					a = bp(o, h, i);
					o.setItemGraphicEl(t, a),
					n.add(a),
					Dp(a, h, i)
				}
			}).update(function(t, e) {
				var i = a.getItemGraphicEl(e);
				if (o.hasValue(t)) {
					var r = yp(o, t),
					s = sp(o, t, r, h),
					l = Ip(o, s);
					i && l !== i.__pictorialShapeStr && (n.remove(i), o.setItemGraphicEl(t, null), i = null),
					i ? Sp(i, h, s) : i = bp(o, h, s, !0),
					o.setItemGraphicEl(t, i),
					i.__pictorialSymbolMeta = s,
					n.add(i),
					Dp(i, h, s)
				} else n.remove(i)
			}).remove(function(t) {
				var e = a.getItemGraphicEl(t);
				e && Mp(a, t, e.__pictorialSymbolMeta.animationModel, e)
			}).execute(),
			this._data = o,
			this.group
		},
		dispose: B,
		remove: function(t, e) {
			var i = this.group,
			n = this._data;
			t.get("animation") ? n && n.eachItemGraphicEl(function(e) {
				Mp(n, e.dataIndex, t, e)
			}) : i.removeAll()
		}
	});
	cs(v(il, "pictorialBar")),
	ds(bT("pictorialBar", "roundRect"));
	var nL = function(t, e, i, n, o) {
		nT.call(this, t, e, i),
		this.type = n || "value",
		this.position = o || "bottom",
		this.orient = null,
		this._labelInterval = null
	};
	nL.prototype = {
		constructor: nL,
		model: null,
		isHorizontal: function() {
			var t = this.position;
			return "top" === t || "bottom" === t
		},
		pointToData: function(t, e) {
			return this.coordinateSystem.pointToData(t, e)[0]
		},
		toGlobalCoord: null,
		toLocalCoord: null
	},
	h(nL, nT),
	Lp.prototype = {
		type: "singleAxis",
		axisPointerEnabled: !0,
		constructor: Lp,
		_init: function(t, e, i) {
			var n = this.dimension,
			o = new nL(n, sl(t), [0, 0], t.get("type"), t.get("position")),
			a = "category" === o.type;
			o.onBand = a && t.get("boundaryGap"),
			o.inverse = t.get("inverse"),
			o.orient = t.get("orient"),
			t.axis = o,
			o.model = t,
			o.coordinateSystem = this,
			this._axis = o
		},
		update: function(t, e) {
			t.eachSeries(function(t) {
				if (t.coordinateSystem === this) {
					var e = t.getData();
					d(e.mapDimension(this.dimension, !0),
					function(t) {
						this._axis.scale.unionExtentFromData(e, t)
					},
					this),
					rl(this._axis.scale, this._axis.model)
				}
			},
			this)
		},
		resize: function(t, e) {
			this._rect = Ko({
				left: t.get("left"),
				top: t.get("top"),
				right: t.get("right"),
				bottom: t.get("bottom"),
				width: t.get("width"),
				height: t.get("height")
			},
			{
				width: e.getWidth(),
				height: e.getHeight()
			}),
			this._adjustAxis()
		},
		getRect: function() {
			return this._rect
		},
		_adjustAxis: function() {
			var t = this._rect,
			e = this._axis,
			i = e.isHorizontal(),
			n = i ? [0, t.width] : [0, t.height],
			o = e.reverse ? 1 : 0;
			e.setExtent(n[o], n[1 - o]),
			this._updateAxisTransform(e, i ? t.x: t.y)
		},
		_updateAxisTransform: function(t, e) {
			var i = t.getExtent(),
			n = i[0] + i[1],
			o = t.isHorizontal();
			t.toGlobalCoord = o ?
			function(t) {
				return t + e
			}: function(t) {
				return n - t + e
			},
			t.toLocalCoord = o ?
			function(t) {
				return t - e
			}: function(t) {
				return n - t + e
			}
		},
		getAxis: function() {
			return this._axis
		},
		getBaseAxis: function() {
			return this._axis
		},
		getAxes: function() {
			return [this._axis]
		},
		getTooltipAxes: function() {
			return {
				baseAxes: [this.getAxis()]
			}
		},
		containPoint: function(t) {
			var e = this.getRect(),
			i = this.getAxis();
			return "horizontal" === i.orient ? i.contain(i.toLocalCoord(t[0])) && t[1] >= e.y && t[1] <= e.y + e.height: i.contain(i.toLocalCoord(t[1])) && t[0] >= e.y && t[0] <= e.y + e.height
		},
		pointToData: function(t) {
			var e = this.getAxis();
			return [e.coordToData(e.toLocalCoord(t["horizontal" === e.orient ? 0 : 1]))]
		},
		dataToPoint: function(t) {
			var e = this.getAxis(),
			i = this.getRect(),
			n = [],
			o = "horizontal" === e.orient ? 0 : 1;
			return t instanceof Array && (t = t[0]),
			n[o] = e.toGlobalCoord(e.dataToCoord( + t)),
			n[1 - o] = 0 === o ? i.y + i.height / 2 : i.x + i.width / 2,
			n
		}
	},
	Aa.register("single", {
		create: function(t, e) {
			var i = [];
			return t.eachComponent("singleAxis",
			function(n, o) {
				var a = new Lp(n, t, e);
				a.name = "single_" + o,
				a.resize(n, e),
				n.coordinateSystem = a,
				i.push(a)
			}),
			t.eachSeries(function(e) {
				if ("singleAxis" === e.get("coordinateSystem")) {
					var i = t.queryComponents({
						mainType: "singleAxis",
						index: e.get("singleAxisIndex"),
						id: e.get("singleAxisId")
					})[0];
					e.coordinateSystem = i && i.coordinateSystem
				}
			}),
			i
		},
		dimensions: Lp.prototype.dimensions
	});
	var oL = GT.getInterval,
	aL = GT.ifIgnoreOnTick,
	rL = ["axisLine", "axisTickLabel", "axisName"],
	sL = XT.extend({
		type: "singleAxis",
		axisPointerClass: "SingleAxisPointer",
		render: function(t, e, i, n) {
			var o = this.group;
			o.removeAll();
			var a = kp(t),
			r = new GT(t, a);
			d(rL, r.add, r),
			o.add(r.getGroup()),
			t.get("splitLine.show") && this._splitLine(t, a.labelInterval),
			sL.superCall(this, "render", t, e, i, n)
		},
		_splitLine: function(t, e) {
			var i = t.axis;
			if (!i.scale.isBlank()) {
				var n = t.getModel("splitLine"),
				o = n.getModel("lineStyle"),
				a = o.get("width"),
				r = o.get("color"),
				s = oL(n, e);
				r = r instanceof Array ? r: [r];
				for (var l = t.coordinateSystem.getRect(), h = i.isHorizontal(), u = [], c = 0, d = i.getTicksCoords(), f = [], p = [], g = t.get("axisLabel.showMinLabel"), m = t.get("axisLabel.showMaxLabel"), v = 0; v < d.length; ++v) if (!aL(i, v, s, d.length, g, m)) {
					var y = i.toGlobalCoord(d[v]);
					h ? (f[0] = y, f[1] = l.y, p[0] = y, p[1] = l.y + l.height) : (f[0] = l.x, f[1] = y, p[0] = l.x + l.width, p[1] = y);
					var x = c++%r.length;
					u[x] = u[x] || [],
					u[x].push(new Gb(Vn({
						shape: {
							x1: f[0],
							y1: f[1],
							x2: p[0],
							y2: p[1]
						},
						style: {
							lineWidth: a
						},
						silent: !0
					})))
				}
				for (v = 0; v < u.length; ++v) this.group.add(Qb(u[v], {
					style: {
						stroke: r[v % r.length],
						lineDash: o.getLineDash(a),
						lineWidth: a
					},
					silent: !0
				}))
			}
		}
	}),
	lL = IS.extend({
		type: "singleAxis",
		layoutMode: "box",
		axis: null,
		coordinateSystem: null,
		getCoordSysModel: function() {
			return this
		}
	}),
	hL = {
		left: "5%",
		top: "5%",
		right: "5%",
		bottom: "5%",
		type: "value",
		position: "bottom",
		orient: "horizontal",
		axisLine: {
			show: !0,
			lineStyle: {
				width: 2,
				type: "solid"
			}
		},
		tooltip: {
			show: !0
		},
		axisTick: {
			show: !0,
			length: 6,
			lineStyle: {
				width: 2
			}
		},
		axisLabel: {
			show: !0,
			interval: "auto"
		},
		splitLine: {
			show: !0,
			lineStyle: {
				type: "dashed",
				opacity: .2
			}
		}
	};
	n(lL.prototype, ZI),
	kT("single", lL,
	function(t, e) {
		return e.type || (e.data ? "category": "value")
	},
	hL);
	var uL = function(t, e) {
		var i, n = [],
		o = t.seriesIndex;
		if (null == o || !(i = e.getSeriesByIndex(o))) return {
			point: []
		};
		var a = i.getData(),
		r = ki(a, t);
		if (null == r || r < 0 || y(r)) return {
			point: []
		};
		var s = a.getItemGraphicEl(r),
		l = i.coordinateSystem;
		if (i.getTooltipPosition) n = i.getTooltipPosition(r) || [];
		else if (l && l.dataToPoint) n = l.dataToPoint(a.getValues(f(l.dimensions,
		function(t) {
			return a.mapDimension(t)
		}), r, !0)) || [];
		else if (s) {
			var h = s.getBoundingRect().clone();
			h.applyTransform(s.transform),
			n = [h.x + h.width / 2, h.y + h.height / 2]
		}
		return {
			point: n,
			el: s
		}
	},
	cL = d,
	dL = v,
	fL = Pi(),
	pL = (gs({
		type: "axisPointer",
		coordSysAxesInfo: null,
		defaultOption: {
			show: "auto",
			triggerOn: null,
			zlevel: 0,
			z: 50,
			type: "line",
			snap: !1,
			triggerTooltip: !0,
			value: null,
			status: null,
			link: [],
			animation: null,
			animationDurationUpdate: 200,
			lineStyle: {
				color: "#aaa",
				width: 1,
				type: "solid"
			},
			shadowStyle: {
				color: "rgba(150,150,150,0.3)"
			},
			label: {
				show: !0,
				formatter: null,
				precision: "auto",
				margin: 3,
				color: "#fff",
				padding: [5, 7, 5, 7],
				backgroundColor: "auto",
				borderColor: null,
				borderWidth: 0,
				shadowBlur: 3,
				shadowColor: "#aaa"
			},
			handle: {
				show: !1,
				icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
				size: 45,
				margin: 50,
				color: "#333",
				shadowBlur: 3,
				shadowColor: "#aaa",
				shadowOffsetX: 0,
				shadowOffsetY: 2,
				throttle: 40
			}
		}
	}), Pi()),
	gL = d,
	mL = ms({
		type: "axisPointer",
		render: function(t, e, i) {
			var n = e.getComponent("tooltip"),
			o = t.get("triggerOn") || n && n.get("triggerOn") || "mousemove|click";
			Fp("axisPointer", i,
			function(t, e, i) {
				"none" !== o && ("leave" === t || o.indexOf(t) >= 0) && i({
					type: "updateAxisPointer",
					currTrigger: t,
					x: e && e.offsetX,
					y: e && e.offsetY
				})
			})
		},
		remove: function(t, e) {
			Yp(e.getZr(), "axisPointer"),
			mL.superApply(this._model, "remove", arguments)
		},
		dispose: function(t, e) {
			Yp("axisPointer", e),
			mL.superApply(this._model, "dispose", arguments)
		}
	}),
	vL = Pi(),
	yL = i,
	xL = m; (qp.prototype = {
		_group: null,
		_lastGraphicKey: null,
		_handle: null,
		_dragging: !1,
		_lastValue: null,
		_lastStatus: null,
		_payloadInfo: null,
		animationThreshold: 15,
		render: function(t, e, i, n) {
			var o = e.get("value"),
			a = e.get("status");
			if (this._axisModel = t, this._axisPointerModel = e, this._api = i, n || this._lastValue !== o || this._lastStatus !== a) {
				this._lastValue = o,
				this._lastStatus = a;
				var r = this._group,
				s = this._handle;
				if (!a || "hide" === a) return r && r.hide(),
				void(s && s.hide());
				r && r.show(),
				s && s.show();
				var l = {};
				this.makeElOption(l, o, t, e, i);
				var h = l.graphicKey;
				h !== this._lastGraphicKey && this.clear(i),
				this._lastGraphicKey = h;
				var u = this._moveAnimation = this.determineAnimation(t, e);
				if (r) {
					var c = v($p, e, u);
					this.updatePointerEl(r, l, c, e),
					this.updateLabelEl(r, l, c, e)
				} else r = this._group = new S_,
				this.createPointerEl(r, l, t, e),
				this.createLabelEl(r, l, t, e),
				i.getZr().add(r);
				tg(r, e, !0),
				this._renderHandle(o)
			}
		},
		remove: function(t) {
			this.clear(t)
		},
		dispose: function(t) {
			this.clear(t)
		},
		determineAnimation: function(t, e) {
			var i = e.get("animation"),
			n = t.axis,
			o = "category" === n.type,
			a = e.get("snap");
			if (!a && !o) return ! 1;
			if ("auto" === i || null == i) {
				var r = this.animationThreshold;
				if (o && n.getBandWidth() > r) return ! 0;
				if (a) {
					var s = vh(t).seriesDataCount,
					l = n.getExtent();
					return Math.abs(l[0] - l[1]) / s > r
				}
				return ! 1
			}
			return ! 0 === i
		},
		makeElOption: function(t, e, i, n, o) {},
		createPointerEl: function(t, e, i, n) {
			var o = e.pointer;
			if (o) {
				var a = vL(t).pointerEl = new tS[o.type](yL(e.pointer));
				t.add(a)
			}
		},
		createLabelEl: function(t, e, i, n) {
			if (e.label) {
				var o = vL(t).labelEl = new Vb(yL(e.label));
				t.add(o),
				Jp(o, n)
			}
		},
		updatePointerEl: function(t, e, i) {
			var n = vL(t).pointerEl;
			n && (n.setStyle(e.pointer.style), i(n, {
				shape: e.pointer.shape
			}))
		},
		updateLabelEl: function(t, e, i, n) {
			var o = vL(t).labelEl;
			o && (o.setStyle(e.label.style), i(o, {
				shape: e.label.shape,
				position: e.label.position
			}), Jp(o, n))
		},
		_renderHandle: function(t) {
			if (!this._dragging && this.updateHandleTransform) {
				var e = this._axisPointerModel,
				i = this._api.getZr(),
				n = this._handle,
				o = e.getModel("handle"),
				a = e.get("status");
				if (!o.get("show") || !a || "hide" === a) return n && i.remove(n),
				void(this._handle = null);
				var r;
				this._handle || (r = !0, n = this._handle = xo(o.get("icon"), {
					cursor: "move",
					draggable: !0,
					onmousemove: function(t) {
						Q_(t.event)
					},
					onmousedown: xL(this._onHandleDragMove, this, 0, 0),
					drift: xL(this._onHandleDragMove, this),
					ondragend: xL(this._onHandleDragEnd, this)
				}), i.add(n)),
				tg(n, e, !1);
				var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
				n.setStyle(o.getItemStyle(null, s));
				var l = o.get("size");
				y(l) || (l = [l, l]),
				n.attr("scale", [l[0] / 2, l[1] / 2]),
				yr(this, "_doDispatchAxisPointer", o.get("throttle") || 0, "fixRate"),
				this._moveHandleToValue(t, r)
			}
		},
		_moveHandleToValue: function(t, e) {
			$p(this._axisPointerModel, !e && this._moveAnimation, this._handle, Qp(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
		},
		_onHandleDragMove: function(t, e) {
			var i = this._handle;
			if (i) {
				this._dragging = !0;
				var n = this.updateHandleTransform(Qp(i), [t, e], this._axisModel, this._axisPointerModel);
				this._payloadInfo = n,
				i.stopAnimation(),
				i.attr(Qp(n)),
				vL(i).lastProp = null,
				this._doDispatchAxisPointer()
			}
		},
		_doDispatchAxisPointer: function() {
			if (this._handle) {
				var t = this._payloadInfo,
				e = this._axisModel;
				this._api.dispatchAction({
					type: "updateAxisPointer",
					x: t.cursorPoint[0],
					y: t.cursorPoint[1],
					tooltipOption: t.tooltipOption,
					axesInfo: [{
						axisDim: e.axis.dim,
						axisIndex: e.componentIndex
					}]
				})
			}
		},
		_onHandleDragEnd: function(t) {
			if (this._dragging = !1, this._handle) {
				var e = this._axisPointerModel.get("value");
				this._moveHandleToValue(e),
				this._api.dispatchAction({
					type: "hideTip"
				})
			}
		},
		getHandleTransform: null,
		updateHandleTransform: null,
		clear: function(t) {
			this._lastValue = null,
			this._lastStatus = null;
			var e = t.getZr(),
			i = this._group,
			n = this._handle;
			e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, this._handle = null, this._payloadInfo = null)
		},
		doClear: function() {},
		buildLabel: function(t, e, i) {
			return i = i || 0,
			{
				x: t[i],
				y: t[1 - i],
				width: e[i],
				height: e[1 - i]
			}
		}
	}).constructor = qp,
	Vi(qp);
	var _L = qp.extend({
		makeElOption: function(t, e, i, n, o) {
			var a = i.axis,
			r = a.grid,
			s = n.get("type"),
			l = ug(r, a).getOtherAxis(a).getGlobalExtent(),
			h = a.toGlobalCoord(a.dataToCoord(e, !0));
			if (s && "none" !== s) {
				var u = eg(n),
				c = wL[s](a, h, l, u);
				c.style = u,
				t.graphicKey = c.type,
				t.pointer = c
			}
			rg(e, t, Sh(r.model, i), i, n, o)
		},
		getHandleTransform: function(t, e, i) {
			var n = Sh(e.axis.grid.model, e, {
				labelInside: !1
			});
			return n.labelMargin = i.get("handle.margin"),
			{
				position: ag(e.axis, t, n),
				rotation: n.rotation + (n.labelDirection < 0 ? Math.PI: 0)
			}
		},
		updateHandleTransform: function(t, e, i, n) {
			var o = i.axis,
			a = o.grid,
			r = o.getGlobalExtent(!0),
			s = ug(a, o).getOtherAxis(o).getGlobalExtent(),
			l = "x" === o.dim ? 0 : 1,
			h = t.position;
			h[l] += e[l],
			h[l] = Math.min(r[1], h[l]),
			h[l] = Math.max(r[0], h[l]);
			var u = (s[1] + s[0]) / 2,
			c = [u, u];
			c[l] = h[l];
			var d = [{
				verticalAlign: "middle"
			},
			{
				align: "center"
			}];
			return {
				position: h,
				rotation: t.rotation,
				cursorPoint: c,
				tooltipOption: d[l]
			}
		}
	}),
	wL = {
		line: function(t, e, i, n) {
			var o = sg([e, i[0]], [e, i[1]], cg(t));
			return Vn({
				shape: o,
				style: n
			}),
			{
				type: "Line",
				shape: o
			}
		},
		shadow: function(t, e, i, n) {
			var o = t.getBandWidth(),
			a = i[1] - i[0];
			return {
				type: "Rect",
				shape: lg([e - o / 2, i[0]], [o, a], cg(t))
			}
		}
	};
	XT.registerAxisPointerClass("CartesianAxisPointer", _L),
	ss(function(t) {
		if (t) { (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
			var e = t.axisPointer.link;
			e && !y(e) && (t.axisPointer.link = [e])
		}
	}),
	ls(FM.PROCESSOR.STATISTIC,
	function(t, e) {
		t.getComponent("axisPointer").coordSysAxesInfo = uh(t, e)
	}),
	hs({
		type: "updateAxisPointer",
		event: "updateAxisPointer",
		update: ":updateAxisPointer"
	},
	function(t, e, i) {
		var n = t.currTrigger,
		o = [t.x, t.y],
		a = t,
		r = t.dispatchAction || m(i.dispatchAction, i),
		s = e.getComponent("axisPointer").coordSysAxesInfo;
		if (s) {
			Wp(o) && (o = uL({
				seriesIndex: a.seriesIndex,
				dataIndex: a.dataIndex
			},
			e).point);
			var l = Wp(o),
			h = a.axesInfo,
			u = s.axesInfo,
			c = "leave" === n || Wp(o),
			d = {},
			f = {},
			p = {
				list: [],
				map: {}
			},
			g = {
				showPointer: dL(Np, f),
				showTooltip: dL(Ep, p)
			};
			cL(s.coordSysMap,
			function(t, e) {
				var i = l || t.containPoint(o);
				cL(s.coordSysAxesInfo[e],
				function(t, e) {
					var n = t.axis,
					a = Vp(h, t);
					if (!c && i && (!h || a)) {
						var r = a && a.value;
						null != r || l || (r = n.pointToData(o)),
						null != r && Pp(t, r, g, !1, d)
					}
				})
			});
			var v = {};
			return cL(u,
			function(t, e) {
				var i = t.linkGroup;
				i && !f[e] && cL(i.axesInfo,
				function(e, n) {
					var o = f[n];
					if (e !== t && o) {
						var a = o.value;
						i.mapper && (a = t.axis.scale.parse(i.mapper(a, Gp(e), Gp(t)))),
						v[t.key] = a
					}
				})
			}),
			cL(v,
			function(t, e) {
				Pp(u[e], t, g, !0, d)
			}),
			zp(f, u, d),
			Rp(p, o, t, r),
			Bp(u, 0, i),
			d
		}
	});
	var bL = ["x", "y"],
	SL = ["width", "height"],
	ML = qp.extend({
		makeElOption: function(t, e, i, n, o) {
			var a = i.axis,
			r = a.coordinateSystem,
			s = fg(r, 1 - dg(a)),
			l = r.dataToPoint(e)[0],
			h = n.get("type");
			if (h && "none" !== h) {
				var u = eg(n),
				c = IL[h](a, l, s, u);
				c.style = u,
				t.graphicKey = c.type,
				t.pointer = c
			}
			rg(e, t, kp(i), i, n, o)
		},
		getHandleTransform: function(t, e, i) {
			var n = kp(e, {
				labelInside: !1
			});
			return n.labelMargin = i.get("handle.margin"),
			{
				position: ag(e.axis, t, n),
				rotation: n.rotation + (n.labelDirection < 0 ? Math.PI: 0)
			}
		},
		updateHandleTransform: function(t, e, i, n) {
			var o = i.axis,
			a = o.coordinateSystem,
			r = dg(o),
			s = fg(a, r),
			l = t.position;
			l[r] += e[r],
			l[r] = Math.min(s[1], l[r]),
			l[r] = Math.max(s[0], l[r]);
			var h = fg(a, 1 - r),
			u = (h[1] + h[0]) / 2,
			c = [u, u];
			return c[r] = l[r],
			{
				position: l,
				rotation: t.rotation,
				cursorPoint: c,
				tooltipOption: {
					verticalAlign: "middle"
				}
			}
		}
	}),
	IL = {
		line: function(t, e, i, n) {
			var o = sg([e, i[0]], [e, i[1]], dg(t));
			return Vn({
				shape: o,
				style: n
			}),
			{
				type: "Line",
				shape: o
			}
		},
		shadow: function(t, e, i, n) {
			var o = t.getBandWidth(),
			a = i[1] - i[0];
			return {
				type: "Rect",
				shape: lg([e - o / 2, i[0]], [o, a], dg(t))
			}
		}
	};
	XT.registerAxisPointerClass("SingleAxisPointer", ML),
	ms({
		type: "single"
	});
	var TL = uM.extend({
		type: "series.themeRiver",
		dependencies: ["singleAxis"],
		nameMap: null,
		init: function(t) {
			TL.superApply(this, "init", arguments),
			this.legendDataProvider = function() {
				return this.getRawData()
			}
		},
		fixData: function(t) {
			for (var e = t.length,
			i = f(mf().key(function(t) {
				return t[2]
			}).entries(t),
			function(t) {
				return {
					name: t.key,
					dataList: t.values
				}
			}), n = i.length, o = -1, a = -1, r = 0; r < n; ++r) {
				var s = i[r].dataList.length;
				s > o && (o = s, a = r)
			}
			for (var l = 0; l < n; ++l) if (l !== a) for (var h = i[l].name, u = 0; u < o; ++u) {
				for (var c = i[a].dataList[u][0], d = i[l].dataList.length, p = -1, g = 0; g < d; ++g) if (i[l].dataList[g][0] === c) {
					p = g;
					break
				} - 1 === p && (t[e] = [], t[e][0] = c, t[e][1] = 0, t[e][2] = h, e++)
			}
			return t
		},
		getInitialData: function(t, e) {
			for (var i = e.queryComponents({
				mainType: "singleAxis",
				index: this.get("singleAxisIndex"),
				id: this.get("singleAxisId")
			})[0].get("type"), n = g(t.data,
			function(t) {
				return void 0 !== t[2]
			}), o = this.fixData(n || []), a = [], r = this.nameMap = z(), s = 0, l = 0; l < o.length; ++l) a.push(o[l][2]),
			r.get(o[l][2]) || (r.set(o[l][2], s), s++);
			var h = wI(o, {
				coordDimensions: ["single"],
				dimensionsDefine: [{
					name: "time",
					type: Ms(i)
				},
				{
					name: "value",
					type: "float"
				},
				{
					name: "name",
					type: "ordinal"
				}],
				encodeDefine: {
					single: 0,
					value: 1,
					itemName: 2
				}
			}),
			u = new yI(h, this);
			return u.initData(o),
			u
		},
		getLayerSeries: function() {
			for (var t = this.getData(), e = t.count(), i = [], n = 0; n < e; ++n) i[n] = n;
			for (var o = f(mf().key(function(e) {
				return t.get("name", e)
			}).entries(i),
			function(t) {
				return {
					name: t.key,
					indices: t.values
				}
			}), a = t.mapDimension("single"), r = 0; r < o.length; ++r) o[r].indices.sort(function(e, i) {
				return t.get(a, e) - t.get(a, i)
			});
			return o
		},
		getAxisTooltipData: function(t, e, i) {
			y(t) || (t = t ? [t] : []);
			for (var n, o = this.getData(), a = this.getLayerSeries(), r = [], s = a.length, l = 0; l < s; ++l) {
				for (var h = Number.MAX_VALUE,
				u = -1,
				c = a[l].indices.length, d = 0; d < c; ++d) {
					var f = o.get(t[0], a[l].indices[d]),
					p = Math.abs(f - e);
					p <= h && (n = f, h = p, u = a[l].indices[d])
				}
				r.push(u)
			}
			return {
				dataIndices: r,
				nestestValue: n
			}
		},
		formatTooltip: function(t) {
			var e = this.getData(),
			i = e.getName(t),
			n = e.get(e.mapDimension("value"), t);
			return (isNaN(n) || null == n) && (n = "-"),
			Ho(i + " : " + n)
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "singleAxis",
			boundaryGap: ["10%", "10%"],
			singleAxisIndex: 0,
			animationEasing: "linear",
			label: {
				margin: 4,
				textAlign: "right",
				show: !0,
				position: "left",
				color: "#000",
				fontSize: 11
			},
			emphasis: {
				label: {
					show: !0
				}
			}
		}
	});
	ys({
		type: "themeRiver",
		init: function() {
			this._layers = []
		},
		render: function(t, e, i) {
			function n(t) {
				return t.name
			}
			function o(e, i, n) {
				var o = this._layers;
				if ("remove" !== e) {
					for (var h, u = [], c = [], f = l[i].indices, p = 0; p < f.length; p++) {
						var g = r.getItemLayout(f[p]),
						m = g.x,
						v = g.y0,
						y = g.y;
						u.push([m, v]),
						c.push([m, v + y]),
						h = r.getItemVisual(f[p], "color")
					}
					var x, _, w = r.getItemLayout(f[0]),
					b = r.getItemModel(f[p - 1]),
					S = b.getModel("label"),
					M = S.get("margin");
					if ("add" === e) {
						I = d[i] = new S_;
						x = new wT({
							shape: {
								points: u,
								stackedOnPoints: c,
								smooth: .4,
								stackedOnSmooth: .4,
								smoothConstraint: !1
							},
							z2: 0
						}),
						_ = new Cb({
							style: {
								x: w.x - M,
								y: w.y0 + w.y / 2
							}
						}),
						I.add(x),
						I.add(_),
						s.add(I),
						x.setClipPath(pg(x.getBoundingRect(), t,
						function() {
							x.removeClipPath()
						}))
					} else {
						var I = o[n];
						x = I.childAt(0),
						_ = I.childAt(1),
						s.add(I),
						d[i] = I,
						co(x, {
							shape: {
								points: u,
								stackedOnPoints: c
							}
						},
						t),
						co(_, {
							style: {
								x: w.x - M,
								y: w.y0 + w.y / 2
							}
						},
						t)
					}
					var T = b.getModel("emphasis.itemStyle"),
					A = b.getModel("itemStyle");
					io(_.style, S, {
						text: S.get("show") ? t.getFormattedLabel(f[p - 1], "normal") || r.getName(f[p - 1]) : null,
						textVerticalAlign: "middle"
					}),
					x.setStyle(a({
						fill: h
					},
					A.getItemStyle(["color"]))),
					to(x, T.getItemStyle())
				} else s.remove(o[i])
			}
			var r = t.getData(),
			s = this.group,
			l = t.getLayerSeries(),
			h = r.getLayout("layoutInfo"),
			u = h.rect,
			c = h.boundaryGap;
			s.attr("position", [0, u.y + c[0]]);
			var d = {};
			new ws(this._layersSeries || [], l, n, n).add(m(o, this, "add")).update(m(o, this, "update")).remove(m(o, this, "remove")).execute(),
			this._layersSeries = l,
			this._layers = d
		},
		dispose: function() {}
	});
	cs(function(t, e) {
		t.eachSeriesByType("themeRiver",
		function(t) {
			var e = t.getData(),
			i = t.coordinateSystem,
			n = {},
			o = i.getRect();
			n.rect = o;
			var a = t.get("boundaryGap"),
			r = i.getAxis();
			n.boundaryGap = a,
			"horizontal" === r.orient ? (a[0] = To(a[0], o.height), a[1] = To(a[1], o.height), gg(e, t, o.height - a[0] - a[1])) : (a[0] = To(a[0], o.width), a[1] = To(a[1], o.width), gg(e, t, o.width - a[0] - a[1])),
			e.setLayout("layoutInfo", n)
		})
	}),
	ds(function(t) {
		t.eachSeriesByType("themeRiver",
		function(t) {
			var e = t.getData(),
			i = t.getRawData(),
			n = t.get("color"),
			o = z();
			e.each(function(t) {
				o.set(e.getRawIndex(t), t)
			}),
			i.each(function(a) {
				var r = i.getName(a),
				s = n[(t.nameMap.get(r) - 1) % n.length];
				i.setItemVisual(a, "color", s);
				var l = o.get(a);
				null != l && e.setItemVisual(l, "color", s)
			})
		})
	}),
	ls(gA("themeRiver")),
	uM.extend({
		type: "series.sunburst",
		_viewRoot: null,
		getInitialData: function(t, e) {
			var i = {
				name: t.name,
				children: t.data
			};
			vg(i);
			var n = t.levels || [],
			o = {};
			return o.levels = n,
			bu.createTree(i, this, o).data
		},
		optionUpdated: function() {
			this.resetViewRoot()
		},
		getDataParams: function(t) {
			var e = uM.prototype.getDataParams.apply(this, arguments),
			i = this.getData().tree.getNodeByDataIndex(t);
			return e.treePathInfo = Xu(i, this),
			e
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			center: ["50%", "50%"],
			radius: [0, "75%"],
			clockwise: !0,
			startAngle: 90,
			minAngle: 0,
			percentPrecision: 2,
			stillShowZeroSum: !0,
			highlightPolicy: "descendant",
			nodeClick: "rootToNode",
			renderLabelForZeroData: !1,
			label: {
				rotate: "radial",
				show: !0,
				opacity: 1,
				align: "center",
				position: "inside",
				distance: 5,
				silent: !0,
				emphasis: {}
			},
			itemStyle: {
				borderWidth: 1,
				borderColor: "white",
				opacity: 1,
				emphasis: {},
				highlight: {
					opacity: 1
				},
				downplay: {
					opacity: .9
				}
			},
			animationType: "expansion",
			animationDuration: 1e3,
			animationDurationUpdate: 500,
			animationEasing: "cubicOut",
			data: [],
			levels: [],
			sort: "desc"
		},
		getViewRoot: function() {
			return this._viewRoot
		},
		resetViewRoot: function(t) {
			t ? this._viewRoot = t: t = this._viewRoot;
			var e = this.getRawData().tree.root;
			t && (t === e || e.contains(t)) || (this._viewRoot = e)
		}
	});
	var AL = {
		NONE: "none",
		DESCENDANT: "descendant",
		ANCESTOR: "ancestor",
		SELF: "self"
	},
	DL = 2,
	CL = 4,
	LL = yg.prototype;
	LL.updateData = function(t, e, i, o, s) {
		this.node = e,
		e.piece = this,
		o = o || this._seriesModel,
		s = s || this._ecModel;
		var l = this.childAt(0);
		l.dataIndex = e.dataIndex;
		var h = e.getModel(),
		u = e.getLayout(),
		c = a({},
		u);
		c.label = null;
		var d, f = xg(e, 0, s),
		p = h.getModel("itemStyle").getItemStyle();
		d = r({
			lineJoin: "bevel",
			fill: (d = "normal" === i ? p: n(h.getModel(i + ".itemStyle").getItemStyle(), p)).fill || f
		},
		d),
		t ? (l.setShape(c), l.shape.r = u.r0, co(l, {
			shape: {
				r: u.r
			}
		},
		o, e.dataIndex), l.useStyle(d)) : co(l, {
			shape: c,
			style: d
		},
		o),
		"normal" === i && (l.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle(), to(this)),
		this._updateLabel(o, s, f);
		var g = h.getShallow("cursor");
		if (g && l.attr("cursor", g), t) {
			var m = o.getShallow("highlightPolicy");
			this._initEvents(l, e, o, m)
		}
		this._seriesModel = o || this._seriesModel,
		this._ecModel = s || this._ecModel
	},
	LL.onEmphasis = function(t) {
		var e = this;
		this.node.hostTree.root.eachNode(function(i) {
			i.piece && (e.node === i ? i.piece.updateData(!1, i, "emphasis") : wg(i, e.node, t) ? i.piece.childAt(0).trigger("highlight") : t !== AL.NONE && i.piece.childAt(0).trigger("downplay"))
		})
	},
	LL.onNormal = function() {
		this.node.hostTree.root.eachNode(function(t) {
			t.piece && t.piece.updateData(!1, t, "normal")
		})
	},
	LL.onHighlight = function() {
		this.updateData(!1, this.node, "highlight")
	},
	LL.onDownplay = function() {
		this.updateData(!1, this.node, "downplay")
	},
	LL._updateLabel = function(t, e, i) {
		var n = this.node.getModel(),
		o = n.getModel("label"),
		a = n.getModel("label.emphasis"),
		r = T(t.getFormattedLabel(this.node.dataIndex, "normal", null, null, "label"), this.node.name);
		o.get("show") || (r = "");
		var s = this.childAt(1);
		eo(s.style, s.hoverStyle = {},
		o, a, {
			defaultText: o.getShallow("show") ? r: null,
			autoColor: i,
			useInsideStyle: !0
		});
		var l, h = this.node.getLayout(),
		u = (h.startAngle + h.endAngle) / 2,
		c = Math.cos(u),
		d = Math.sin(u),
		f = o.get("position"),
		p = o.get("distance") || 0,
		g = o.get("align");
		"outside" === f ? (l = h.r + p, g = u > Math.PI / 2 ? "right": "left") : g && "center" !== g ? "left" === g ? (l = h.r0 + p, u > Math.PI / 2 && (g = "right")) : "right" === g && (l = h.r - p, u > Math.PI / 2 && (g = "left")) : (l = (h.r + h.r0) / 2, g = "center"),
		s.attr("style", {
			text: r,
			textAlign: g,
			textVerticalAlign: o.get("verticalAlign") || "middle",
			opacity: o.get("opacity")
		});
		var m = l * c + h.cx,
		v = l * d + h.cy;
		s.attr("position", [m, v]);
		var y = o.getShallow("rotate"),
		x = 0;
		"radial" === y ? (x = -u) < -Math.PI / 2 && (x += Math.PI) : "tangential" === y ? (x = Math.PI / 2 - u) > Math.PI / 2 ? x -= Math.PI: x < -Math.PI / 2 && (x += Math.PI) : "number" == typeof y && (x = y * Math.PI / 180),
		s.attr("rotation", x)
	},
	LL._initEvents = function(t, e, i, n) {
		t.off("mouseover").off("mouseout").off("emphasis").off("normal");
		var o = this,
		a = function() {
			o.onEmphasis(n)
		},
		r = function() {
			o.onNormal()
		};
		i.isAnimationEnabled() && t.on("mouseover", a).on("mouseout", r).on("emphasis", a).on("normal", r).on("downplay",
		function() {
			o.onDownplay()
		}).on("highlight",
		function() {
			o.onHighlight()
		})
	},
	h(yg, S_);
	cr.extend({
		type: "sunburst",
		init: function() {},
		render: function(t, e, i, n) {
			function o(i, n) {
				if (u || !i || i.getValue() || (i = null), i !== s && n !== s) if (n && n.piece) i ? n.piece.updateData(!1, i, "normal", t, e) : a(n);
				else if (i) {
					var o = new yg(i, t, e);
					h.add(o)
				}
			}
			function a(t) {
				t && t.piece && (h.remove(t.piece), t.piece = null)
			}
			var r = this;
			this.seriesModel = t,
			this.api = i,
			this.ecModel = e;
			var s = t.getData().tree.root,
			l = t.getViewRoot(),
			h = this.group,
			u = t.get("renderLabelForZeroData"),
			c = [];
			l.eachNode(function(t) {
				c.push(t)
			});
			var d = this._oldChildren || [];
			if (function(t, e) {
				function i(t) {
					return t.getId()
				}
				function n(i, n) {
					o(null == i ? null: t[i], null == n ? null: e[n])
				}
				0 === t.length && 0 === e.length || new ws(e, t, i, i).add(n).update(n).remove(v(n, null)).execute()
			} (c, d),
			function(i, n) {
				if (n.depth > 0) {
					i.piece ? i.piece.updateData(!1, i, "normal", t, e) : (i.piece = new yg(i, t, e), h.add(i.piece)),
					n.piece._onclickEvent && n.piece.off("click", n.piece._onclickEvent);
					var o = function(t) {
						r._rootToNode(n.parentNode)
					};
					n.piece._onclickEvent = o,
					i.piece.on("click", o)
				} else i.piece && (h.remove(i.piece), i.piece = null)
			} (s, l), n && n.highlight && n.highlight.piece) {
				var f = t.getShallow("highlightPolicy");
				n.highlight.piece.onEmphasis(f)
			} else if (n && n.unhighlight) {
				var p = s.piece; ! p && s.children.length && (p = s.children[0].piece),
				p && p.onNormal()
			}
			this._initEvents(),
			this._oldChildren = c
		},
		dispose: function() {},
		_initEvents: function() {
			var t = this,
			e = function(e) {
				var i = t.seriesModel.get("nodeClick", !0);
				if (i) {
					var n = !1;
					t.seriesModel.getViewRoot().eachNode(function(o) {
						if (!n && o.piece && o.piece.childAt(0) === e.target) {
							if ("rootToNode" === i) t._rootToNode(o);
							else if ("link" === i) {
								var a = o.getModel(),
								r = a.get("link", !0);
								if (r) {
									var s = a.get("target", !0) || "_blank";
									r && window.open(r, s)
								}
							}
							n = !0
						}
					})
				}
			};
			this.group._onclickEvent && this.group.off("click", this.group._onclickEvent),
			this.group.on("click", e),
			this.group._onclickEvent = e
		},
		_rootToNode: function(t) {
			t !== this.seriesModel.getViewRoot() && this.api.dispatchAction({
				type: "sunburstRootToNode",
				from: this.uid,
				seriesId: this.seriesModel.id,
				targetNode: t
			})
		},
		containPoint: function(t, e) {
			var i = e.getData().getItemLayout(0);
			if (i) {
				var n = t[0] - i.cx,
				o = t[1] - i.cy,
				a = Math.sqrt(n * n + o * o);
				return a <= i.r && a >= i.r0
			}
		}
	});
	var kL = "sunburstRootToNode";
	hs({
		type: kL,
		update: "updateView"
	},
	function(t, e) {
		e.eachComponent({
			mainType: "series",
			subType: "sunburst",
			query: t
		},
		function(e, i) {
			var n = Zu(t, [kL], e);
			if (n) {
				var o = e.getViewRoot();
				o && (t.direction = ju(o, n.node) ? "rollUp": "drillDown"),
				e.resetViewRoot(n.node)
			}
		})
	});
	var PL = "sunburstHighlight";
	hs({
		type: PL,
		update: "updateView"
	},
	function(t, e) {
		e.eachComponent({
			mainType: "series",
			subType: "sunburst",
			query: t
		},
		function(e, i) {
			var n = Zu(t, [PL], e);
			n && (t.highlight = n.node)
		})
	});
	hs({
		type: "sunburstUnhighlight",
		update: "updateView"
	},
	function(t, e) {
		e.eachComponent({
			mainType: "series",
			subType: "sunburst",
			query: t
		},
		function(e, i) {
			t.unhighlight = !0
		})
	});
	var OL = Math.PI / 180;
	ds(v(cA, "sunburst")),
	cs(v(function(t, e, i, n) {
		e.eachSeriesByType(t,
		function(t) {
			var e = t.get("center"),
			n = t.get("radius");
			y(n) || (n = [0, n]),
			y(e) || (e = [e, e]);
			var o = i.getWidth(),
			a = i.getHeight(),
			r = Math.min(o, a),
			s = To(e[0], o),
			l = To(e[1], a),
			h = To(n[0], r / 2),
			u = To(n[1], r / 2),
			c = -t.get("startAngle") * OL,
			f = t.get("minAngle") * OL,
			p = t.getData().tree.root,
			g = t.getViewRoot(),
			m = g.depth,
			v = t.get("sort");
			null != v && bg(g, v);
			var x = 0;
			d(g.children,
			function(t) { ! isNaN(t.getValue()) && x++
			});
			var _ = g.getValue(),
			w = Math.PI / (_ || x) * 2,
			b = g.depth > 0,
			S = g.height - (b ? -1 : 1),
			M = (u - h) / (S || 1),
			I = t.get("clockwise"),
			T = t.get("stillShowZeroSum"),
			A = I ? 1 : -1,
			D = function(t, e) {
				if (t) {
					var i = e;
					if (t !== p) {
						var n = t.getValue(),
						o = 0 === _ && T ? w: n * w;
						o < f && (o = f),
						i = e + A * o;
						var a = t.depth - m - (b ? -1 : 1),
						u = h + M * a,
						c = h + M * (a + 1),
						g = t.getModel();
						null != g.get("r0") && (u = To(g.get("r0"), r / 2)),
						null != g.get("r") && (c = To(g.get("r"), r / 2)),
						t.setLayout({
							angle: o,
							startAngle: e,
							endAngle: i,
							clockwise: I,
							cx: s,
							cy: l,
							r0: u,
							r: c
						})
					}
					if (t.children && t.children.length) {
						var v = 0;
						d(t.children,
						function(t) {
							v += D(t, e + v)
						})
					}
					return i - e
				}
			};
			if (b) {
				var C = h,
				L = h + M,
				k = 2 * Math.PI;
				p.setLayout({
					angle: k,
					startAngle: c,
					endAngle: c + k,
					clockwise: I,
					cx: s,
					cy: l,
					r0: C,
					r: L
				})
			}
			D(g, c)
		})
	},
	"sunburst")),
	ls(v(gA, "sunburst"));
	var NL = ["itemStyle"],
	EL = ["emphasis", "itemStyle"],
	zL = ["label"],
	RL = ["emphasis", "label"],
	BL = "e\0\0",
	VL = {
		cartesian2d: function(t) {
			var e = t.grid.getRect();
			return {
				coordSys: {
					type: "cartesian2d",
					x: e.x,
					y: e.y,
					width: e.width,
					height: e.height
				},
				api: {
					coord: function(e) {
						return t.dataToPoint(e)
					},
					size: m(Mg, t)
				}
			}
		},
		geo: function(t) {
			var e = t.getBoundingRect();
			return {
				coordSys: {
					type: "geo",
					x: e.x,
					y: e.y,
					width: e.width,
					height: e.height
				},
				api: {
					coord: function(e, i) {
						return t.dataToPoint(e, i)
					},
					size: m(Ig, t)
				}
			}
		},
		singleAxis: function(t) {
			var e = t.getRect();
			return {
				coordSys: {
					type: "singleAxis",
					x: e.x,
					y: e.y,
					width: e.width,
					height: e.height
				},
				api: {
					coord: function(e) {
						return t.dataToPoint(e)
					},
					size: m(Tg, t)
				}
			}
		},
		polar: function(t) {
			var e = t.getRadiusAxis(),
			i = t.getAngleAxis(),
			n = e.getExtent();
			return n[0] > n[1] && n.reverse(),
			{
				coordSys: {
					type: "polar",
					cx: t.cx,
					cy: t.cy,
					r: n[1],
					r0: n[0]
				},
				api: {
					coord: m(function(n) {
						var o = e.dataToRadius(n[0]),
						a = i.dataToAngle(n[1]),
						r = t.coordToPoint([o, a]);
						return r.push(o, a * Math.PI / 180),
						r
					}),
					size: m(Ag, t)
				}
			}
		},
		calendar: function(t) {
			var e = t.getRect(),
			i = t.getRangeInfo();
			return {
				coordSys: {
					type: "calendar",
					x: e.x,
					y: e.y,
					width: e.width,
					height: e.height,
					cellWidth: t.getCellWidth(),
					cellHeight: t.getCellHeight(),
					rangeInfo: {
						start: i.start,
						end: i.end,
						weeks: i.weeks,
						dayCount: i.allDay
					}
				},
				api: {
					coord: function(e, i) {
						return t.dataToPoint(e, i)
					}
				}
			}
		}
	};
	vs({
		type: "series.custom",
		dependencies: ["grid", "polar", "geo", "singleAxis", "calendar"],
		defaultOption: {
			coordinateSystem: "cartesian2d",
			zlevel: 0,
			z: 2,
			legendHoverLink: !0
		},
		getInitialData: function(t, e) {
			return Bs(this.getSource(), this)
		}
	}),
	ys({
		type: "custom",
		_data: null,
		render: function(t, e, i) {
			var n = this._data,
			o = t.getData(),
			a = this.group,
			r = kg(t, o, e, i);
			this.group.removeAll(),
			o.diff(n).add(function(e) {
				o.hasValue(e) && Og(null, e, r(e), t, a, o)
			}).update(function(e, i) {
				var s = n.getItemGraphicEl(i);
				o.hasValue(e) ? Og(s, e, r(e), t, a, o) : s && a.remove(s)
			}).remove(function(t) {
				var e = n.getItemGraphicEl(t);
				e && a.remove(e)
			}).execute(),
			this._data = o
		},
		incrementalPrepareRender: function(t, e, i) {
			this.group.removeAll(),
			this._data = null
		},
		incrementalRender: function(t, e, i, n) {
			for (var o = e.getData(), a = kg(e, o, i, n), r = t.start; r < t.end; r++) Og(null, r, a(r), e, this.group, o).traverse(function(t) {
				t.isGroup || (t.incremental = !0, t.useHoverLayer = !0)
			})
		},
		dispose: B
	}),
	ss(function(t) {
		var e = t.graphic;
		y(e) ? e[0] && e[0].elements ? t.graphic = [t.graphic[0]] : t.graphic = [{
			elements: e
		}] : e && !e.elements && (t.graphic = [{
			elements: [e]
		}])
	});
	var GL = gs({
		type: "graphic",
		defaultOption: {
			elements: [],
			parentId: null
		},
		_elOptionsToUpdate: null,
		mergeOption: function(t) {
			var e = this.option.elements;
			this.option.elements = null,
			GL.superApply(this, "mergeOption", arguments),
			this.option.elements = e
		},
		optionUpdated: function(t, e) {
			var i = this.option,
			n = (e ? i: t).elements,
			o = i.elements = e ? [] : i.elements,
			a = [];
			this._flatten(n, a);
			var r = Ai(o, a);
			Di(r);
			var s = this._elOptionsToUpdate = [];
			d(r,
			function(t, e) {
				var i = t.option;
				i && (s.push(i), Hg(t, i), Zg(o, e, i), Ug(o[e], i))
			},
			this);
			for (var l = o.length - 1; l >= 0; l--) null == o[l] ? o.splice(l, 1) : delete o[l].$action
		},
		_flatten: function(t, e, i) {
			d(t,
			function(t) {
				if (t) {
					i && (t.parentOption = i),
					e.push(t);
					var n = t.children;
					"group" === t.type && n && this._flatten(n, e, t),
					delete t.children
				}
			},
			this)
		},
		useElOptionsToUpdate: function() {
			var t = this._elOptionsToUpdate;
			return this._elOptionsToUpdate = null,
			t
		}
	});
	ms({
		type: "graphic",
		init: function(t, e) {
			this._elMap = z(),
			this._lastGraphicModel
		},
		render: function(t, e, i) {
			t !== this._lastGraphicModel && this._clear(),
			this._lastGraphicModel = t,
			this._updateElements(t, i),
			this._relocate(t, i)
		},
		_updateElements: function(t, e) {
			var i = t.useElOptionsToUpdate();
			if (i) {
				var n = this._elMap,
				o = this.group;
				d(i,
				function(t) {
					var e = t.$action,
					i = t.id,
					a = n.get(i),
					r = t.parentId,
					s = null != r ? n.get(r) : o;
					if ("text" === t.type) {
						var l = t.style;
						t.hv && t.hv[1] && (l.textVerticalAlign = l.textBaseline = null),
						!l.hasOwnProperty("textFill") && l.fill && (l.textFill = l.fill),
						!l.hasOwnProperty("textStroke") && l.stroke && (l.textStroke = l.stroke)
					}
					var h = Wg(t);
					e && "merge" !== e ? "replace" === e ? (Gg(a, n), Vg(i, s, h, n)) : "remove" === e && Gg(a, n) : a ? a.attr(h) : Vg(i, s, h, n);
					var u = n.get(i);
					u && (u.__ecGraphicWidth = t.width, u.__ecGraphicHeight = t.height)
				})
			}
		},
		_relocate: function(t, e) {
			for (var i = t.option.elements,
			n = this.group,
			o = this._elMap,
			a = i.length - 1; a >= 0; a--) {
				var r = i[a],
				s = o.get(r.id);
				if (s) {
					var l = s.parent;
					Jo(s, r, l === n ? {
						width: e.getWidth(),
						height: e.getHeight()
					}: {
						width: l.__ecGraphicWidth || 0,
						height: l.__ecGraphicHeight || 0
					},
					null, {
						hv: r.hv,
						boundingMode: r.bounding
					})
				}
			}
		},
		_clear: function() {
			var t = this._elMap;
			t.each(function(e) {
				Gg(e, t)
			}),
			this._elMap = z()
		},
		dispose: function() {
			this._clear()
		}
	});
	var WL = gs({
		type: "legend.plain",
		dependencies: ["series"],
		layoutMode: {
			type: "box",
			ignoreSize: !0
		},
		init: function(t, e, i) {
			this.mergeDefaultAndTheme(t, i),
			t.selected = t.selected || {}
		},
		mergeOption: function(t) {
			WL.superCall(this, "mergeOption", t)
		},
		optionUpdated: function() {
			this._updateData(this.ecModel);
			var t = this._data;
			if (t[0] && "single" === this.get("selectedMode")) {
				for (var e = !1,
				i = 0; i < t.length; i++) {
					var n = t[i].get("name");
					if (this.isSelected(n)) {
						this.select(n),
						e = !0;
						break
					}
				} ! e && this.select(t[0].get("name"))
			}
		},
		_updateData: function(t) {
			var e = [],
			i = [];
			t.eachRawSeries(function(n) {
				var o = n.name;
				i.push(o);
				var a;
				if (n.legendDataProvider) {
					var r = n.legendDataProvider(),
					s = r.mapArray(r.getName);
					t.isSeriesFiltered(n) || (i = i.concat(s)),
					s.length ? e = e.concat(s) : a = o
				} else a = o;
				a && a !== vw && e.push(a)
			}),
			this._availableNames = i;
			var n = f(this.get("data") || e,
			function(t) {
				return "string" != typeof t && "number" != typeof t || (t = {
					name: t
				}),
				new _o(t, this, this.ecModel)
			},
			this);
			this._data = n
		},
		getData: function() {
			return this._data
		},
		select: function(t) {
			var e = this.option.selected;
			"single" === this.get("selectedMode") && d(this._data,
			function(t) {
				e[t.get("name")] = !1
			}),
			e[t] = !0
		},
		unSelect: function(t) {
			"single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
		},
		toggleSelected: function(t) {
			var e = this.option.selected;
			e.hasOwnProperty(t) || (e[t] = !0),
			this[e[t] ? "unSelect": "select"](t)
		},
		isSelected: function(t) {
			var e = this.option.selected;
			return ! (e.hasOwnProperty(t) && !e[t]) && l(this._availableNames, t) >= 0
		},
		defaultOption: {
			zlevel: 0,
			z: 4,
			show: !0,
			orient: "horizontal",
			left: "center",
			top: 0,
			align: "auto",
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderRadius: 0,
			borderWidth: 0,
			padding: 5,
			itemGap: 10,
			itemWidth: 25,
			itemHeight: 14,
			inactiveColor: "#ccc",
			textStyle: {
				color: "#333"
			},
			selectedMode: !0,
			tooltip: {
				show: !1
			}
		}
	});
	hs("legendToggleSelect", "legendselectchanged", v(jg, "toggleSelected")),
	hs("legendSelect", "legendselected", v(jg, "select")),
	hs("legendUnSelect", "legendunselected", v(jg, "unSelect"));
	var FL = v,
	HL = d,
	ZL = S_,
	UL = ms({
		type: "legend.plain",
		newlineDisabled: !1,
		init: function() {
			this.group.add(this._contentGroup = new ZL),
			this._backgroundEl
		},
		getContentGroup: function() {
			return this._contentGroup
		},
		render: function(t, e, i) {
			if (this.resetInner(), t.get("show", !0)) {
				var n = t.get("align");
				n && "auto" !== n || (n = "right" === t.get("left") && "vertical" === t.get("orient") ? "right": "left"),
				this.renderInner(n, t, e, i);
				var o = t.getBoxLayoutParams(),
				a = {
					width: i.getWidth(),
					height: i.getHeight()
				},
				s = t.get("padding"),
				l = Ko(o, a, s),
				h = this.layoutInner(t, n, l),
				u = Ko(r({
					width: h.width,
					height: h.height
				},
				o), a, s);
				this.group.attr("position", [u.x - h.x, u.y - h.y]),
				this.group.add(this._backgroundEl = Yg(h, t))
			}
		},
		resetInner: function() {
			this.getContentGroup().removeAll(),
			this._backgroundEl && this.group.remove(this._backgroundEl)
		},
		renderInner: function(t, e, i, n) {
			var o = this.getContentGroup(),
			a = z(),
			r = e.get("selectedMode");
			HL(e.getData(),
			function(s, l) {
				var h = s.get("name");
				if (this.newlineDisabled || "" !== h && "\n" !== h) {
					var u = i.getSeriesByName(h)[0];
					if (!a.get(h)) if (u) {
						var c = u.getData(),
						d = c.getVisual("color");
						"function" == typeof d && (d = d(u.getDataParams(0)));
						var f = c.getVisual("legendSymbol") || "roundRect",
						p = c.getVisual("symbol");
						this._createItem(h, l, s, e, f, p, t, d, r).on("click", FL(qg, h, n)).on("mouseover", FL($g, u, null, n)).on("mouseout", FL(Kg, u, null, n)),
						a.set(h, !0)
					} else i.eachRawSeries(function(i) {
						if (!a.get(h) && i.legendDataProvider) {
							var o = i.legendDataProvider(),
							u = o.indexOfName(h);
							if (u < 0) return;
							var c = o.getItemVisual(u, "color");
							this._createItem(h, l, s, e, "roundRect", null, t, c, r).on("click", FL(qg, h, n)).on("mouseover", FL($g, i, h, n)).on("mouseout", FL(Kg, i, h, n)),
							a.set(h, !0)
						}
					},
					this)
				} else o.add(new ZL({
					newline: !0
				}))
			},
			this)
		},
		_createItem: function(t, e, i, n, o, r, s, l, h) {
			var u = n.get("itemWidth"),
			c = n.get("itemHeight"),
			d = n.get("inactiveColor"),
			f = n.isSelected(t),
			p = new ZL,
			g = i.getModel("textStyle"),
			m = i.get("icon"),
			v = i.getModel("tooltip"),
			y = v.parentModel;
			if (o = m || o, p.add(dl(o, 0, 0, u, c, f ? l: d, !0)), !m && r && (r !== o || "none" == r)) {
				var x = .8 * c;
				"none" === r && (r = "circle"),
				p.add(dl(r, (u - x) / 2, (c - x) / 2, x, x, f ? l: d))
			}
			var _ = "left" === s ? u + 5 : -5,
			w = s,
			b = n.get("formatter"),
			S = t;
			"string" == typeof b && b ? S = b.replace("{name}", null != t ? t: "") : "function" == typeof b && (S = b(t)),
			p.add(new Cb({
				style: io({},
				g, {
					text: S,
					x: _,
					y: c / 2,
					textFill: f ? g.getTextColor() : d,
					textAlign: w,
					textVerticalAlign: "middle"
				})
			}));
			var M = new Vb({
				shape: p.getBoundingRect(),
				invisible: !0,
				tooltip: v.get("show") ? a({
					content: t,
					formatter: y.get("formatter", !0) ||
					function() {
						return t
					},
					formatterParams: {
						componentType: "legend",
						legendIndex: n.componentIndex,
						name: t,
						$vars: ["name"]
					}
				},
				v.option) : null
			});
			return p.add(M),
			p.eachChild(function(t) {
				t.silent = !0
			}),
			M.silent = !h,
			this.getContentGroup().add(p),
			to(p),
			p.__legendDataIndex = e,
			p
		},
		layoutInner: function(t, e, i) {
			var n = this.getContentGroup();
			bS(t.get("orient"), n, t.get("itemGap"), i.width, i.height);
			var o = n.getBoundingRect();
			return n.attr("position", [ - o.x, -o.y]),
			this.group.getBoundingRect()
		}
	});
	ls(function(t) {
		var e = t.findComponents({
			mainType: "legend"
		});
		e && e.length && t.filterSeries(function(t) {
			for (var i = 0; i < e.length; i++) if (!e[i].isSelected(t.name)) return ! 1;
			return ! 0
		})
	}),
	IS.registerSubTypeDefaulter("legend",
	function() {
		return "plain"
	});
	var jL = WL.extend({
		type: "legend.scroll",
		setScrollDataIndex: function(t) {
			this.option.scrollDataIndex = t
		},
		defaultOption: {
			scrollDataIndex: 0,
			pageButtonItemGap: 5,
			pageButtonGap: null,
			pageButtonPosition: "end",
			pageFormatter: "{current}/{total}",
			pageIcons: {
				horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
				vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
			},
			pageIconColor: "#2f4554",
			pageIconInactiveColor: "#aaa",
			pageIconSize: 15,
			pageTextStyle: {
				color: "#333"
			},
			animationDurationUpdate: 800
		},
		init: function(t, e, i, n) {
			var o = ea(t);
			jL.superCall(this, "init", t, e, i, n),
			Jg(this, t, o)
		},
		mergeOption: function(t, e) {
			jL.superCall(this, "mergeOption", t, e),
			Jg(this, this.option, t)
		},
		getOrient: function() {
			return "vertical" === this.get("orient") ? {
				index: 1,
				name: "vertical"
			}: {
				index: 0,
				name: "horizontal"
			}
		}
	}),
	XL = S_,
	YL = ["width", "height"],
	qL = ["x", "y"],
	$L = UL.extend({
		type: "legend.scroll",
		newlineDisabled: !0,
		init: function() {
			$L.superCall(this, "init"),
			this._currentIndex = 0,
			this.group.add(this._containerGroup = new XL),
			this._containerGroup.add(this.getContentGroup()),
			this.group.add(this._controllerGroup = new XL),
			this._showController
		},
		resetInner: function() {
			$L.superCall(this, "resetInner"),
			this._controllerGroup.removeAll(),
			this._containerGroup.removeClipPath(),
			this._containerGroup.__rectSize = null
		},
		renderInner: function(t, e, i, n) {
			function o(t, i) {
				var o = t + "DataIndex",
				l = xo(e.get("pageIcons", !0)[e.getOrient().name][i], {
					onclick: m(a._pageGo, a, o, e, n)
				},
				{
					x: -s[0] / 2,
					y: -s[1] / 2,
					width: s[0],
					height: s[1]
				});
				l.name = t,
				r.add(l)
			}
			var a = this;
			$L.superCall(this, "renderInner", t, e, i, n);
			var r = this._controllerGroup,
			s = e.get("pageIconSize", !0);
			y(s) || (s = [s, s]),
			o("pagePrev", 0);
			var l = e.getModel("pageTextStyle");
			r.add(new Cb({
				name: "pageText",
				style: {
					textFill: l.getTextColor(),
					font: l.getFont(),
					textVerticalAlign: "middle",
					textAlign: "center"
				},
				silent: !0
			})),
			o("pageNext", 1)
		},
		layoutInner: function(t, e, i) {
			var n = this.getContentGroup(),
			o = this._containerGroup,
			a = this._controllerGroup,
			r = t.getOrient().index,
			s = YL[r],
			l = YL[1 - r],
			h = qL[1 - r];
			bS(t.get("orient"), n, t.get("itemGap"), r ? i.width: null, r ? null: i.height),
			bS("horizontal", a, t.get("pageButtonItemGap", !0));
			var u = n.getBoundingRect(),
			c = a.getBoundingRect(),
			d = this._showController = u[s] > i[s],
			f = [ - u.x, -u.y];
			f[r] = n.position[r];
			var p = [0, 0],
			g = [ - c.x, -c.y],
			m = A(t.get("pageButtonGap", !0), t.get("itemGap", !0));
			d && ("end" === t.get("pageButtonPosition", !0) ? g[r] += i[s] - c[s] : p[r] += c[s] + m),
			g[1 - r] += u[l] / 2 - c[l] / 2,
			n.attr("position", f),
			o.attr("position", p),
			a.attr("position", g);
			var v = this.group.getBoundingRect();
			if ((v = {
				x: 0,
				y: 0
			})[s] = d ? i[s] : u[s], v[l] = Math.max(u[l], c[l]), v[h] = Math.min(0, c[h] + g[1 - r]), o.__rectSize = i[s], d) {
				var y = {
					x: 0,
					y: 0
				};
				y[s] = Math.max(i[s] - c[s] - m, 0),
				y[l] = v[l],
				o.setClipPath(new Vb({
					shape: y
				})),
				o.__rectSize = y[s]
			} else a.eachChild(function(t) {
				t.attr({
					invisible: !0,
					silent: !0
				})
			});
			var x = this._getPageInfo(t);
			return null != x.pageIndex && co(n, {
				position: x.contentPosition
			},
			!!d && t),
			this._updatePageInfoView(t, x),
			v
		},
		_pageGo: function(t, e, i) {
			var n = this._getPageInfo(e)[t];
			null != n && i.dispatchAction({
				type: "legendScroll",
				scrollDataIndex: n,
				legendId: e.id
			})
		},
		_updatePageInfoView: function(t, e) {
			var i = this._controllerGroup;
			d(["pagePrev", "pageNext"],
			function(n) {
				var o = null != e[n + "DataIndex"],
				a = i.childOfName(n);
				a && (a.setStyle("fill", o ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), a.cursor = o ? "pointer": "default")
			});
			var n = i.childOfName("pageText"),
			o = t.get("pageFormatter"),
			a = e.pageIndex,
			r = null != a ? a + 1 : 0,
			s = e.pageCount;
			n && o && n.setStyle("text", _(o) ? o.replace("{current}", r).replace("{total}", s) : o({
				current: r,
				total: s
			}))
		},
		_getPageInfo: function(t) {
			function e(t) {
				var e = t.getBoundingRect().clone();
				return e[f] += t.position[u],
				e
			}
			var i, n, o, a, r = t.get("scrollDataIndex", !0),
			s = this.getContentGroup(),
			l = s.getBoundingRect(),
			h = this._containerGroup.__rectSize,
			u = t.getOrient().index,
			c = YL[u],
			d = YL[1 - u],
			f = qL[u],
			p = s.position.slice();
			this._showController ? s.eachChild(function(t) {
				t.__legendDataIndex === r && (a = t)
			}) : a = s.childAt(0);
			var g = h ? Math.ceil(l[c] / h) : 0;
			if (a) {
				var m = a.getBoundingRect(),
				v = a.position[u] + m[f];
				p[u] = -v - l[f],
				i = Math.floor(g * (v + m[f] + h / 2) / l[c]),
				i = l[c] && g ? Math.max(0, Math.min(g - 1, i)) : -1;
				var y = {
					x: 0,
					y: 0
				};
				y[c] = h,
				y[d] = l[d],
				y[f] = -p[u] - l[f];
				var x, _ = s.children();
				if (s.eachChild(function(t, i) {
					var n = e(t);
					n.intersect(y) && (null == x && (x = i), o = t.__legendDataIndex),
					i === _.length - 1 && n[f] + n[c] <= y[f] + y[c] && (o = null)
				}), null != x) {
					var w = e(_[x]);
					if (y[f] = w[f] + w[c] - y[c], x <= 0 && w[f] >= y[f]) n = null;
					else {
						for (; x > 0 && e(_[x - 1]).intersect(y);) x--;
						n = _[x].__legendDataIndex
					}
				}
			}
			return {
				contentPosition: p,
				pageIndex: i,
				pageCount: g,
				pagePrevDataIndex: n,
				pageNextDataIndex: o
			}
		}
	});
	hs("legendScroll", "legendscroll",
	function(t, e) {
		var i = t.scrollDataIndex;
		null != i && e.eachComponent({
			mainType: "legend",
			subType: "scroll",
			query: t
		},
		function(t) {
			t.setScrollDataIndex(i)
		})
	}),
	gs({
		type: "tooltip",
		dependencies: ["axisPointer"],
		defaultOption: {
			zlevel: 0,
			z: 8,
			show: !0,
			showContent: !0,
			trigger: "item",
			triggerOn: "mousemove|click",
			alwaysShowContent: !1,
			displayMode: "single",
			confine: !1,
			showDelay: 0,
			hideDelay: 100,
			transitionDuration: .4,
			enterable: !1,
			backgroundColor: "rgba(50,50,50,0.7)",
			borderColor: "#333",
			borderRadius: 4,
			borderWidth: 0,
			padding: 5,
			extraCssText: "",
			axisPointer: {
				type: "line",
				axis: "auto",
				animation: "auto",
				animationDurationUpdate: 200,
				animationEasingUpdate: "exponentialOut",
				crossStyle: {
					color: "#999",
					width: 1,
					type: "dashed",
					textStyle: {}
				}
			},
			textStyle: {
				color: "#fff",
				fontSize: 14
			}
		}
	});
	var KL = d,
	JL = Fo,
	QL = ["", "-webkit-", "-moz-", "-o-"];
	im.prototype = {
		constructor: im,
		_enterable: !0,
		update: function() {
			var t = this._container,
			e = t.currentStyle || document.defaultView.getComputedStyle(t),
			i = t.style;
			"absolute" !== i.position && "absolute" !== e.position && (i.position = "relative")
		},
		show: function(t) {
			clearTimeout(this._hideTimeout);
			var e = this.el;
			e.style.cssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + em(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""),
			e.style.display = e.innerHTML ? "block": "none",
			this._show = !0
		},
		setContent: function(t) {
			this.el.innerHTML = null == t ? "": t
		},
		setEnterable: function(t) {
			this._enterable = t
		},
		getSize: function() {
			var t = this.el;
			return [t.clientWidth, t.clientHeight]
		},
		moveTo: function(t, e) {
			var i, n = this._zr;
			n && n.painter && (i = n.painter.getViewportRootOffset()) && (t += i.offsetLeft, e += i.offsetTop);
			var o = this.el.style;
			o.left = t + "px",
			o.top = e + "px",
			this._x = t,
			this._y = e
		},
		hide: function() {
			this.el.style.display = "none",
			this._show = !1
		},
		hideLater: function(t) { ! this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide())
		},
		isShow: function() {
			return this._show
		}
	};
	var tk = m,
	ek = d,
	ik = To,
	nk = new Vb({
		shape: {
			x: -1,
			y: -1,
			width: 2,
			height: 2
		}
	});
	ms({
		type: "tooltip",
		init: function(t, e) {
			if (!_x.node) {
				var i = new im(e.getDom(), e);
				this._tooltipContent = i
			}
		},
		render: function(t, e, i) {
			if (!_x.node && !_x.wxa) {
				this.group.removeAll(),
				this._tooltipModel = t,
				this._ecModel = e,
				this._api = i,
				this._lastDataByCoordSys = null,
				this._alwaysShowContent = t.get("alwaysShowContent");
				var n = this._tooltipContent;
				n.update(),
				n.setEnterable(t.get("enterable")),
				this._initGlobalListener(),
				this._keepShow()
			}
		},
		_initGlobalListener: function() {
			var t = this._tooltipModel.get("triggerOn");
			Fp("itemTooltip", this._api, tk(function(e, i, n) {
				"none" !== t && (t.indexOf(e) >= 0 ? this._tryShow(i, n) : "leave" === e && this._hide(n))
			},
			this))
		},
		_keepShow: function() {
			var t = this._tooltipModel,
			e = this._ecModel,
			i = this._api;
			if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
				var n = this;
				clearTimeout(this._refreshUpdateTimeout),
				this._refreshUpdateTimeout = setTimeout(function() {
					n.manuallyShowTip(t, e, i, {
						x: n._lastX,
						y: n._lastY
					})
				})
			}
		},
		manuallyShowTip: function(t, e, i, n) {
			if (n.from !== this.uid && !_x.node) {
				var o = om(n, i);
				this._ticket = "";
				var a = n.dataByCoordSys;
				if (n.tooltip && null != n.x && null != n.y) {
					var r = nk;
					r.position = [n.x, n.y],
					r.update(),
					r.tooltip = n.tooltip,
					this._tryShow({
						offsetX: n.x,
						offsetY: n.y,
						target: r
					},
					o)
				} else if (a) this._tryShow({
					offsetX: n.x,
					offsetY: n.y,
					position: n.position,
					event: {},
					dataByCoordSys: n.dataByCoordSys,
					tooltipOption: n.tooltipOption
				},
				o);
				else if (null != n.seriesIndex) {
					if (this._manuallyAxisShowTip(t, e, i, n)) return;
					var s = uL(n, e),
					l = s.point[0],
					h = s.point[1];
					null != l && null != h && this._tryShow({
						offsetX: l,
						offsetY: h,
						position: n.position,
						target: s.el,
						event: {}
					},
					o)
				} else null != n.x && null != n.y && (i.dispatchAction({
					type: "updateAxisPointer",
					x: n.x,
					y: n.y
				}), this._tryShow({
					offsetX: n.x,
					offsetY: n.y,
					position: n.position,
					target: i.getZr().findHover(n.x, n.y).target,
					event: {}
				},
				o))
			}
		},
		manuallyHideTip: function(t, e, i, n) {
			var o = this._tooltipContent; ! this._alwaysShowContent && this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")),
			this._lastX = this._lastY = null,
			n.from !== this.uid && this._hide(om(n, i))
		},
		_manuallyAxisShowTip: function(t, e, i, n) {
			var o = n.seriesIndex,
			a = n.dataIndex,
			r = e.getComponent("axisPointer").coordSysAxesInfo;
			if (null != o && null != a && null != r) {
				var s = e.getSeriesByIndex(o);
				if (s && "axis" === (t = nm([s.getData().getItemModel(a), s, (s.coordinateSystem || {}).model, t])).get("trigger")) return i.dispatchAction({
					type: "updateAxisPointer",
					seriesIndex: o,
					dataIndex: a,
					position: n.position
				}),
				!0
			}
		},
		_tryShow: function(t, e) {
			var i = t.target;
			if (this._tooltipModel) {
				this._lastX = t.offsetX,
				this._lastY = t.offsetY;
				var n = t.dataByCoordSys;
				n && n.length ? this._showAxisTooltip(n, t) : i && null != i.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, i, e)) : i && i.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, i, e)) : (this._lastDataByCoordSys = null, this._hide(e))
			}
		},
		_showOrMove: function(t, e) {
			var i = t.get("showDelay");
			e = m(e, this),
			clearTimeout(this._showTimout),
			i > 0 ? this._showTimout = setTimeout(e, i) : e()
		},
		_showAxisTooltip: function(t, e) {
			var i = this._ecModel,
			n = this._tooltipModel,
			o = [e.offsetX, e.offsetY],
			a = [],
			r = [],
			s = nm([e.tooltipOption, n]);
			ek(t,
			function(t) {
				ek(t.dataByAxis,
				function(t) {
					var e = i.getComponent(t.axisDim + "Axis", t.axisIndex),
					n = t.value,
					o = [];
					if (e && null != n) {
						var s = og(n, e.axis, i, t.seriesDataIndices, t.valueLabelOpt);
						d(t.seriesDataIndices,
						function(a) {
							var l = i.getSeriesByIndex(a.seriesIndex),
							h = a.dataIndexInside,
							u = l && l.getDataParams(h);
							u.axisDim = t.axisDim,
							u.axisIndex = t.axisIndex,
							u.axisType = t.axisType,
							u.axisId = t.axisId,
							u.axisValue = ul(e.axis, n),
							u.axisValueLabel = s,
							u && (r.push(u), o.push(l.formatTooltip(h, !0)))
						});
						var l = s;
						a.push((l ? Ho(l) + "<br />": "") + o.join("<br />"))
					}
				})
			},
			this),
			a.reverse(),
			a = a.join("<br /><br />");
			var l = e.position;
			this._showOrMove(s,
			function() {
				this._updateContentNotChangedOnAxis(t) ? this._updatePosition(s, l, o[0], o[1], this._tooltipContent, r) : this._showTooltipContent(s, a, r, Math.random(), o[0], o[1], l)
			})
		},
		_showSeriesItemTooltip: function(t, e, i) {
			var n = this._ecModel,
			o = e.seriesIndex,
			a = n.getSeriesByIndex(o),
			r = e.dataModel || a,
			s = e.dataIndex,
			l = e.dataType,
			h = r.getData(),
			u = nm([h.getItemModel(s), r, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
			c = u.get("trigger");
			if (null == c || "item" === c) {
				var d = r.getDataParams(s, l),
				f = r.formatTooltip(s, !1, l),
				p = "item_" + r.name + "_" + s;
				this._showOrMove(u,
				function() {
					this._showTooltipContent(u, f, d, p, t.offsetX, t.offsetY, t.position, t.target)
				}),
				i({
					type: "showTip",
					dataIndexInside: s,
					dataIndex: h.getRawIndex(s),
					seriesIndex: o,
					from: this.uid
				})
			}
		},
		_showComponentItemTooltip: function(t, e, i) {
			var n = e.tooltip;
			if ("string" == typeof n) {
				var o = n;
				n = {
					content: o,
					formatter: o
				}
			}
			var a = new _o(n, this._tooltipModel, this._ecModel),
			r = a.get("content"),
			s = Math.random();
			this._showOrMove(a,
			function() {
				this._showTooltipContent(a, r, a.get("formatterParams") || {},
				s, t.offsetX, t.offsetY, t.position, e)
			}),
			i({
				type: "showTip",
				from: this.uid
			})
		},
		_showTooltipContent: function(t, e, i, n, o, a, r, s) {
			if (this._ticket = "", t.get("showContent") && t.get("show")) {
				var l = this._tooltipContent,
				h = t.get("formatter");
				r = r || t.get("position");
				var u = e;
				if (h && "string" == typeof h) u = Zo(h, i, !0);
				else if ("function" == typeof h) {
					var c = tk(function(e, n) {
						e === this._ticket && (l.setContent(n), this._updatePosition(t, r, o, a, l, i, s))
					},
					this);
					this._ticket = n,
					u = h(i, n, c)
				}
				l.setContent(u),
				l.show(t),
				this._updatePosition(t, r, o, a, l, i, s)
			}
		},
		_updatePosition: function(t, e, i, n, o, a, r) {
			var s = this._api.getWidth(),
			l = this._api.getHeight();
			e = e || t.get("position");
			var h = o.getSize(),
			u = t.get("align"),
			c = t.get("verticalAlign"),
			d = r && r.getBoundingRect().clone();
			if (r && d.applyTransform(r.transform), "function" == typeof e && (e = e([i, n], a, o.el, d, {
				viewSize: [s, l],
				contentSize: h.slice()
			})), y(e)) i = ik(e[0], s),
			n = ik(e[1], l);
			else if (w(e)) {
				e.width = h[0],
				e.height = h[1];
				var f = Ko(e, {
					width: s,
					height: l
				});
				i = f.x,
				n = f.y,
				u = null,
				c = null
			} else "string" == typeof e && r ? (i = (p = lm(e, d, h))[0], n = p[1]) : (i = (p = am(i, n, o.el, s, l, u ? null: 20, c ? null: 20))[0], n = p[1]);
			if (u && (i -= hm(u) ? h[0] / 2 : "right" === u ? h[0] : 0), c && (n -= hm(c) ? h[1] / 2 : "bottom" === c ? h[1] : 0), t.get("confine")) {
				var p = rm(i, n, o.el, s, l);
				i = p[0],
				n = p[1]
			}
			o.moveTo(i, n)
		},
		_updateContentNotChangedOnAxis: function(t) {
			var e = this._lastDataByCoordSys,
			i = !!e && e.length === t.length;
			return i && ek(e,
			function(e, n) {
				var o = e.dataByAxis || {},
				a = (t[n] || {}).dataByAxis || []; (i &= o.length === a.length) && ek(o,
				function(t, e) {
					var n = a[e] || {},
					o = t.seriesDataIndices || [],
					r = n.seriesDataIndices || []; (i &= t.value === n.value && t.axisType === n.axisType && t.axisId === n.axisId && o.length === r.length) && ek(o,
					function(t, e) {
						var n = r[e];
						i &= t.seriesIndex === n.seriesIndex && t.dataIndex === n.dataIndex
					})
				})
			}),
			this._lastDataByCoordSys = t,
			!!i
		},
		_hide: function(t) {
			this._lastDataByCoordSys = null,
			t({
				type: "hideTip",
				from: this.uid
			})
		},
		dispose: function(t, e) {
			_x.node || (this._tooltipContent.hide(), Yp("itemTooltip", e))
		}
	}),
	hs({
		type: "showTip",
		event: "showTip",
		update: "tooltip:manuallyShowTip"
	},
	function() {}),
	hs({
		type: "hideTip",
		event: "hideTip",
		update: "tooltip:manuallyHideTip"
	},
	function() {}),
	fm.prototype = {
		constructor: fm,
		pointToData: function(t, e) {
			return this.polar.pointToData(t, e)["radius" === this.dim ? 0 : 1]
		},
		dataToRadius: nT.prototype.dataToCoord,
		radiusToData: nT.prototype.coordToData
	},
	h(fm, nT),
	pm.prototype = {
		constructor: pm,
		pointToData: function(t, e) {
			return this.polar.pointToData(t, e)["radius" === this.dim ? 0 : 1]
		},
		dataToAngle: nT.prototype.dataToCoord,
		angleToData: nT.prototype.coordToData
	},
	h(pm, nT);
	var ok = function(t) {
		this.name = t || "",
		this.cx = 0,
		this.cy = 0,
		this._radiusAxis = new fm,
		this._angleAxis = new pm,
		this._radiusAxis.polar = this._angleAxis.polar = this
	};
	ok.prototype = {
		type: "polar",
		axisPointerEnabled: !0,
		constructor: ok,
		dimensions: ["radius", "angle"],
		model: null,
		containPoint: function(t) {
			var e = this.pointToCoord(t);
			return this._radiusAxis.contain(e[0]) && this._angleAxis.contain(e[1])
		},
		containData: function(t) {
			return this._radiusAxis.containData(t[0]) && this._angleAxis.containData(t[1])
		},
		getAxis: function(t) {
			return this["_" + t + "Axis"]
		},
		getAxes: function() {
			return [this._radiusAxis, this._angleAxis]
		},
		getAxesByScale: function(t) {
			var e = [],
			i = this._angleAxis,
			n = this._radiusAxis;
			return i.scale.type === t && e.push(i),
			n.scale.type === t && e.push(n),
			e
		},
		getAngleAxis: function() {
			return this._angleAxis
		},
		getRadiusAxis: function() {
			return this._radiusAxis
		},
		getOtherAxis: function(t) {
			var e = this._angleAxis;
			return t === e ? this._radiusAxis: e
		},
		getBaseAxis: function() {
			return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAngleAxis()
		},
		getTooltipAxes: function(t) {
			var e = null != t && "auto" !== t ? this.getAxis(t) : this.getBaseAxis();
			return {
				baseAxes: [e],
				otherAxes: [this.getOtherAxis(e)]
			}
		},
		dataToPoint: function(t, e) {
			return this.coordToPoint([this._radiusAxis.dataToRadius(t[0], e), this._angleAxis.dataToAngle(t[1], e)])
		},
		pointToData: function(t, e) {
			var i = this.pointToCoord(t);
			return [this._radiusAxis.radiusToData(i[0], e), this._angleAxis.angleToData(i[1], e)]
		},
		pointToCoord: function(t) {
			var e = t[0] - this.cx,
			i = t[1] - this.cy,
			n = this.getAngleAxis(),
			o = n.getExtent(),
			a = Math.min(o[0], o[1]),
			r = Math.max(o[0], o[1]);
			n.inverse ? a = r - 360 : r = a + 360;
			var s = Math.sqrt(e * e + i * i);
			e /= s,
			i /= s;
			for (var l = Math.atan2( - i, e) / Math.PI * 180, h = l < a ? 1 : -1; l < a || l > r;) l += 360 * h;
			return [s, l]
		},
		coordToPoint: function(t) {
			var e = t[0],
			i = t[1] / 180 * Math.PI;
			return [Math.cos(i) * e + this.cx, -Math.sin(i) * e + this.cy]
		}
	};
	var ak = IS.extend({
		type: "polarAxis",
		axis: null,
		getCoordSysModel: function() {
			return this.ecModel.queryComponents({
				mainType: "polar",
				index: this.option.polarIndex,
				id: this.option.polarId
			})[0]
		}
	});
	n(ak.prototype, ZI);
	var rk = {
		angle: {
			startAngle: 90,
			clockwise: !0,
			splitNumber: 12,
			axisLabel: {
				rotate: !1
			}
		},
		radius: {
			splitNumber: 5
		}
	};
	kT("angle", ak, gm, rk.angle),
	kT("radius", ak, gm, rk.radius),
	gs({
		type: "polar",
		dependencies: ["polarAxis", "angleAxis"],
		coordinateSystem: null,
		findAxisModel: function(t) {
			var e;
			return this.ecModel.eachComponent(t,
			function(t) {
				t.getCoordSysModel() === this && (e = t)
			},
			this),
			e
		},
		defaultOption: {
			zlevel: 0,
			z: 0,
			center: ["50%", "50%"],
			radius: "80%"
		}
	});
	var sk = {
		dimensions: ok.prototype.dimensions,
		create: function(t, e) {
			var i = [];
			return t.eachComponent("polar",
			function(t, n) {
				var o = new ok(n);
				o.update = vm;
				var a = o.getRadiusAxis(),
				r = o.getAngleAxis(),
				s = t.findAxisModel("radiusAxis"),
				l = t.findAxisModel("angleAxis");
				ym(a, s),
				ym(r, l),
				mm(o, t, e),
				i.push(o),
				t.coordinateSystem = o,
				o.model = t
			}),
			t.eachSeries(function(e) {
				if ("polar" === e.get("coordinateSystem")) {
					var i = t.queryComponents({
						mainType: "polar",
						index: e.get("polarIndex"),
						id: e.get("polarId")
					})[0];
					e.coordinateSystem = i.coordinateSystem
				}
			}),
			i
		}
	};
	Aa.register("polar", sk);
	var lk = ["axisLine", "axisLabel", "axisTick", "splitLine", "splitArea"];
	XT.extend({
		type: "angleAxis",
		axisPointerClass: "PolarAxisPointer",
		render: function(t, e) {
			if (this.group.removeAll(), t.get("show")) {
				var i = t.axis,
				n = i.polar,
				o = n.getRadiusAxis().getExtent(),
				a = i.getTicksCoords();
				"category" !== i.type && a.pop(),
				d(lk,
				function(e) { ! t.get(e + ".show") || i.scale.isBlank() && "axisLine" !== e || this["_" + e](t, n, a, o)
				},
				this)
			}
		},
		_axisLine: function(t, e, i, n) {
			var o = t.getModel("axisLine.lineStyle"),
			a = new Lb({
				shape: {
					cx: e.cx,
					cy: e.cy,
					r: n[_m(e)]
				},
				style: o.getLineStyle(),
				z2: 1,
				silent: !0
			});
			a.style.fill = null,
			this.group.add(a)
		},
		_axisTick: function(t, e, i, n) {
			var o = t.getModel("axisTick"),
			a = (o.get("inside") ? -1 : 1) * o.get("length"),
			s = n[_m(e)],
			l = f(i,
			function(t) {
				return new Gb({
					shape: xm(e, [s, s + a], t)
				})
			});
			this.group.add(Qb(l, {
				style: r(o.getModel("lineStyle").getLineStyle(), {
					stroke: t.get("axisLine.lineStyle.color")
				})
			}))
		},
		_axisLabel: function(t, e, i, n) {
			for (var o = t.axis,
			a = t.getCategories(), r = t.getModel("axisLabel"), s = t.getFormattedLabels(), l = r.get("margin"), h = o.getLabelsCoords(), u = 0; u < i.length; u++) {
				var c = n[_m(e)],
				d = e.coordToPoint([c + l, h[u]]),
				f = e.cx,
				p = e.cy,
				g = Math.abs(d[0] - f) / c < .3 ? "center": d[0] > f ? "left": "right",
				m = Math.abs(d[1] - p) / c < .3 ? "middle": d[1] > p ? "top": "bottom";
				a && a[u] && a[u].textStyle && (r = new _o(a[u].textStyle, r, r.ecModel));
				var v = new Cb({
					silent: !0
				});
				this.group.add(v),
				io(v.style, r, {
					x: d[0],
					y: d[1],
					textFill: r.getTextColor() || t.get("axisLine.lineStyle.color"),
					text: s[u],
					textAlign: g,
					textVerticalAlign: m
				})
			}
		},
		_splitLine: function(t, e, i, n) {
			var o = t.getModel("splitLine").getModel("lineStyle"),
			a = o.get("color"),
			s = 0;
			a = a instanceof Array ? a: [a];
			for (var l = [], h = 0; h < i.length; h++) {
				var u = s++%a.length;
				l[u] = l[u] || [],
				l[u].push(new Gb({
					shape: xm(e, n, i[h])
				}))
			}
			for (h = 0; h < l.length; h++) this.group.add(Qb(l[h], {
				style: r({
					stroke: a[h % a.length]
				},
				o.getLineStyle()),
				silent: !0,
				z: t.get("z")
			}))
		},
		_splitArea: function(t, e, i, n) {
			var o = t.getModel("splitArea").getModel("areaStyle"),
			a = o.get("color"),
			s = 0;
			a = a instanceof Array ? a: [a];
			for (var l = [], h = Math.PI / 180, u = -i[0] * h, c = Math.min(n[0], n[1]), d = Math.max(n[0], n[1]), f = t.get("clockwise"), p = 1; p < i.length; p++) {
				var g = s++%a.length;
				l[g] = l[g] || [],
				l[g].push(new Ob({
					shape: {
						cx: e.cx,
						cy: e.cy,
						r0: c,
						r: d,
						startAngle: u,
						endAngle: -i[p] * h,
						clockwise: f
					},
					silent: !0
				})),
				u = -i[p] * h
			}
			for (p = 0; p < l.length; p++) this.group.add(Qb(l[p], {
				style: r({
					fill: a[p % a.length]
				},
				o.getAreaStyle()),
				silent: !0
			}))
		}
	});
	var hk = ["axisLine", "axisTickLabel", "axisName"],
	uk = ["splitLine", "splitArea"];
	XT.extend({
		type: "radiusAxis",
		axisPointerClass: "PolarAxisPointer",
		render: function(t, e) {
			if (this.group.removeAll(), t.get("show")) {
				var i = t.axis,
				n = i.polar,
				o = n.getAngleAxis(),
				a = i.getTicksCoords(),
				r = o.getExtent()[0],
				s = i.getExtent(),
				l = wm(n, t, r),
				h = new GT(t, l);
				d(hk, h.add, h),
				this.group.add(h.getGroup()),
				d(uk,
				function(e) {
					t.get(e + ".show") && !i.scale.isBlank() && this["_" + e](t, n, r, s, a)
				},
				this)
			}
		},
		_splitLine: function(t, e, i, n, o) {
			var a = t.getModel("splitLine").getModel("lineStyle"),
			s = a.get("color"),
			l = 0;
			s = s instanceof Array ? s: [s];
			for (var h = [], u = 0; u < o.length; u++) {
				var c = l++%s.length;
				h[c] = h[c] || [],
				h[c].push(new Lb({
					shape: {
						cx: e.cx,
						cy: e.cy,
						r: o[u]
					},
					silent: !0
				}))
			}
			for (u = 0; u < h.length; u++) this.group.add(Qb(h[u], {
				style: r({
					stroke: s[u % s.length],
					fill: null
				},
				a.getLineStyle()),
				silent: !0
			}))
		},
		_splitArea: function(t, e, i, n, o) {
			var a = t.getModel("splitArea").getModel("areaStyle"),
			s = a.get("color"),
			l = 0;
			s = s instanceof Array ? s: [s];
			for (var h = [], u = o[0], c = 1; c < o.length; c++) {
				var d = l++%s.length;
				h[d] = h[d] || [],
				h[d].push(new Ob({
					shape: {
						cx: e.cx,
						cy: e.cy,
						r0: u,
						r: o[c],
						startAngle: 0,
						endAngle: 2 * Math.PI
					},
					silent: !0
				})),
				u = o[c]
			}
			for (c = 0; c < h.length; c++) this.group.add(Qb(h[c], {
				style: r({
					fill: s[c % s.length]
				},
				a.getAreaStyle()),
				silent: !0
			}))
		}
	});
	var ck = qp.extend({
		makeElOption: function(t, e, i, n, o) {
			var a = i.axis;
			"angle" === a.dim && (this.animationThreshold = Math.PI / 18);
			var r, s = a.polar,
			l = s.getOtherAxis(a).getExtent();
			r = a["dataTo" + Yo(a.dim)](e);
			var h = n.get("type");
			if (h && "none" !== h) {
				var u = eg(n),
				c = dk[h](a, s, r, l, u);
				c.style = u,
				t.graphicKey = c.type,
				t.pointer = c
			}
			ig(t, i, n, o, bm(e, i, 0, s, n.get("label.margin")))
		}
	}),
	dk = {
		line: function(t, e, i, n, o) {
			return "angle" === t.dim ? {
				type: "Line",
				shape: sg(e.coordToPoint([n[0], i]), e.coordToPoint([n[1], i]))
			}: {
				type: "Circle",
				shape: {
					cx: e.cx,
					cy: e.cy,
					r: i
				}
			}
		},
		shadow: function(t, e, i, n, o) {
			var a = t.getBandWidth(),
			r = Math.PI / 180;
			return "angle" === t.dim ? {
				type: "Sector",
				shape: hg(e.cx, e.cy, n[0], n[1], ( - i - a / 2) * r, (a / 2 - i) * r)
			}: {
				type: "Sector",
				shape: hg(e.cx, e.cy, i - a / 2, i + a / 2, 0, 2 * Math.PI)
			}
		}
	};
	XT.registerAxisPointerClass("PolarAxisPointer", ck),
	cs(v(function(t, e, i) {
		var n = i.getWidth(),
		o = i.getHeight(),
		a = {},
		r = {},
		s = dm(g(e.getSeriesByType(t),
		function(t) {
			return ! e.isSeriesFiltered(t) && t.coordinateSystem && "polar" === t.coordinateSystem.type
		}));
		e.eachSeriesByType(t,
		function(t) {
			if ("polar" === t.coordinateSystem.type) {
				var e = t.getData(),
				i = t.coordinateSystem,
				l = i.getAngleAxis(),
				h = i.getBaseAxis(),
				u = um(t),
				c = s[cm(h)][u],
				d = c.offset,
				f = c.width,
				p = i.getOtherAxis(h),
				g = t.get("center") || ["50%", "50%"],
				m = To(g[0], n),
				v = To(g[1], o),
				y = t.get("barMinHeight") || 0,
				x = t.get("barMinAngle") || 0,
				_ = p.getExtent()[0],
				w = p.model.get("max"),
				b = p.model.get("min"),
				S = [e.mapDimension("radius"), e.mapDimension("angle")],
				M = e.mapArray(S,
				function(t, e) {
					return i.dataToPoint([t, e])
				},
				!0);
				a[u] = a[u] || [],
				r[u] = r[u] || [],
				e.each(e.mapDimension(p.dim),
				function(t, n) {
					if (!isNaN(t)) {
						a[u][n] || (a[u][n] = {
							p: _,
							n: _
						},
						r[u][n] = {
							p: _,
							n: _
						});
						var o, s, h, c, g = t >= 0 ? "p": "n",
						S = i.pointToCoord(M[n]),
						I = r[u][n][g];
						if ("radius" === p.dim) o = I,
						s = S[0],
						c = (h = ( - S[1] + d) * Math.PI / 180) + f * Math.PI / 180,
						Math.abs(s) < y && (s = o + (s < 0 ? -1 : 1) * y),
						r[u][n][g] = s;
						else {
							s = (o = S[0] + d) + f,
							null != w && (t = Math.min(t, w)),
							null != b && (t = Math.max(t, b));
							var T = l.dataToAngle(t);
							Math.abs(T - I) < x && (T = I - (t < 0 ? -1 : 1) * x),
							h = -I * Math.PI / 180,
							c = -T * Math.PI / 180;
							var A = l.getExtent(),
							D = T;
							D === A[0] && t > 0 ? D = A[1] : D === A[1] && t < 0 && (D = A[0]),
							r[u][n][g] = D
						}
						e.setItemLayout(n, {
							cx: m,
							cy: v,
							r0: o,
							r: s,
							startAngle: h,
							endAngle: c
						})
					}
				},
				!0)
			}
		},
		this)
	},
	"bar")),
	ms({
		type: "polar"
	}),
	u(IS.extend({
		type: "geo",
		coordinateSystem: null,
		layoutMode: "box",
		init: function(t) {
			IS.prototype.init.apply(this, arguments),
			Mi(t, "label", ["show"])
		},
		optionUpdated: function() {
			var t = this.option,
			e = this;
			t.regions = OA.getFilledRegions(t.regions, t.map, t.nameMap),
			this._optionModelMap = p(t.regions || [],
			function(t, i) {
				return i.name && t.set(i.name, new _o(i, e)),
				t
			},
			z()),
			this.updateSelectedMap(t.regions)
		},
		defaultOption: {
			zlevel: 0,
			z: 0,
			show: !0,
			left: "center",
			top: "center",
			aspectScale: .75,
			silent: !1,
			map: "",
			boundingCoords: null,
			center: null,
			zoom: 1,
			scaleLimit: null,
			label: {
				show: !1,
				color: "#000"
			},
			itemStyle: {
				borderWidth: .5,
				borderColor: "#444",
				color: "#eee"
			},
			emphasis: {
				label: {
					show: !0,
					color: "rgb(100,0,0)"
				},
				itemStyle: {
					color: "rgba(255,215,0,0.8)"
				}
			},
			regions: []
		},
		getRegionModel: function(t) {
			return this._optionModelMap.get(t) || new _o(null, this, this.ecModel)
		},
		getFormattedLabel: function(t, e) {
			var i = this.getRegionModel(t).get("label." + e + ".formatter"),
			n = {
				name: t
			};
			return "function" == typeof i ? (n.status = e, i(n)) : "string" == typeof i ? i.replace("{a}", null != t ? t: "") : void 0
		},
		setZoom: function(t) {
			this.option.zoom = t
		},
		setCenter: function(t) {
			this.option.center = t
		}
	}), sA),
	ms({
		type: "geo",
		init: function(t, e) {
			var i = new ou(e, !0);
			this._mapDraw = i,
			this.group.add(i.group)
		},
		render: function(t, e, i, n) {
			if (!n || "geoToggleSelect" !== n.type || n.from !== this.uid) {
				var o = this._mapDraw;
				t.get("show") ? o.draw(t, e, i, this, n) : this._mapDraw.group.removeAll(),
				this.group.silent = t.get("silent")
			}
		},
		dispose: function() {
			this._mapDraw && this._mapDraw.remove()
		}
	}),
	Sm("toggleSelected", {
		type: "geoToggleSelect",
		event: "geoselectchanged"
	}),
	Sm("select", {
		type: "geoSelect",
		event: "geoselected"
	}),
	Sm("unSelect", {
		type: "geoUnSelect",
		event: "geounselected"
	});
	var fk = ["rect", "polygon", "keep", "clear"],
	pk = d,
	gk = {
		lineX: Lm(0),
		lineY: Lm(1),
		rect: {
			point: function(t, e, i) {
				return t && i.boundingRect.contain(t[0], t[1])
			},
			rect: function(t, e, i) {
				return t && i.boundingRect.intersect(t)
			}
		},
		polygon: {
			point: function(t, e, i) {
				return t && i.boundingRect.contain(t[0], t[1]) && pl(i.range, t[0], t[1])
			},
			rect: function(t, e, i) {
				var n = i.range;
				if (!t || n.length <= 1) return ! 1;
				var o = t.x,
				a = t.y,
				r = t.width,
				s = t.height,
				l = n[0];
				return !! (pl(n, o, a) || pl(n, o + r, a) || pl(n, o, a + s) || pl(n, o + r, a + s) || Kt.create(t).contain(l[0], l[1]) || Pm(o, a, o + r, a, n) || Pm(o, a, o, a + s, n) || Pm(o + r, a, o + r, a + s, n) || Pm(o, a + s, o + r, a + s, n)) || void 0
			}
		}
	},
	mk = d,
	vk = l,
	yk = v,
	xk = ["dataToPoint", "pointToData"],
	_k = ["grid", "xAxis", "yAxis", "geo", "graph", "polar", "radiusAxis", "angleAxis", "bmap"],
	wk = zm.prototype;
	wk.setOutputRanges = function(t, e) {
		this.matchOutputRanges(t, e,
		function(t, e, i) {
			if ((t.coordRanges || (t.coordRanges = [])).push(e), !t.coordRange) {
				t.coordRange = e;
				var n = Ik[t.brushType](0, i, e);
				t.__rangeOffset = {
					offset: Tk[t.brushType](n.values, t.range, [1, 1]),
					xyMinMax: n.xyMinMax
				}
			}
		})
	},
	wk.matchOutputRanges = function(t, e, i) {
		mk(t,
		function(t) {
			var n = this.findTargetInfo(t, e);
			n && !0 !== n && d(n.coordSyses,
			function(n) {
				var o = Ik[t.brushType](1, n, t.range);
				i(t, o.values, n, e)
			})
		},
		this)
	},
	wk.setInputRanges = function(t, e) {
		mk(t,
		function(t) {
			var i = this.findTargetInfo(t, e);
			if (t.range = t.range || [], i && !0 !== i) {
				t.panelId = i.panelId;
				var n = Ik[t.brushType](0, i.coordSys, t.coordRange),
				o = t.__rangeOffset;
				t.range = o ? Tk[t.brushType](n.values, o.offset, Wm(n.xyMinMax, o.xyMinMax)) : n.values
			}
		},
		this)
	},
	wk.makePanelOpts = function(t, e) {
		return f(this._targetInfoList,
		function(i) {
			var n = i.getPanelRect();
			return {
				panelId: i.panelId,
				defaultBrushType: e && e(i),
				clipPath: Qd(n),
				isTargetByCursor: ef(n, t, i.coordSysModel),
				getLinearBrushOtherExtent: tf(n)
			}
		})
	},
	wk.controlSeries = function(t, e, i) {
		var n = this.findTargetInfo(t, i);
		return ! 0 === n || n && vk(n.coordSyses, e.coordinateSystem) >= 0
	},
	wk.findTargetInfo = function(t, e) {
		for (var i = this._targetInfoList,
		n = Bm(e, t), o = 0; o < i.length; o++) {
			var a = i[o],
			r = t.panelId;
			if (r) {
				if (a.panelId === r) return a
			} else for (o = 0; o < Sk.length; o++) if (Sk[o](n, a)) return a
		}
		return ! 0
	};
	var bk = {
		grid: function(t, e) {
			var i = t.xAxisModels,
			n = t.yAxisModels,
			o = t.gridModels,
			a = z(),
			r = {},
			s = {}; (i || n || o) && (mk(i,
			function(t) {
				var e = t.axis.grid.model;
				a.set(e.id, e),
				r[e.id] = !0
			}), mk(n,
			function(t) {
				var e = t.axis.grid.model;
				a.set(e.id, e),
				s[e.id] = !0
			}), mk(o,
			function(t) {
				a.set(t.id, t),
				r[t.id] = !0,
				s[t.id] = !0
			}), a.each(function(t) {
				var o = t.coordinateSystem,
				a = [];
				mk(o.getCartesians(),
				function(t, e) { (vk(i, t.getAxis("x").model) >= 0 || vk(n, t.getAxis("y").model) >= 0) && a.push(t)
				}),
				e.push({
					panelId: "grid--" + t.id,
					gridModel: t,
					coordSysModel: t,
					coordSys: a[0],
					coordSyses: a,
					getPanelRect: Mk.grid,
					xAxisDeclared: r[t.id],
					yAxisDeclared: s[t.id]
				})
			}))
		},
		geo: function(t, e) {
			mk(t.geoModels,
			function(t) {
				var i = t.coordinateSystem;
				e.push({
					panelId: "geo--" + t.id,
					geoModel: t,
					coordSysModel: t,
					coordSys: i,
					coordSyses: [i],
					getPanelRect: Mk.geo
				})
			})
		}
	},
	Sk = [function(t, e) {
		var i = t.xAxisModel,
		n = t.yAxisModel,
		o = t.gridModel;
		return ! o && i && (o = i.axis.grid.model),
		!o && n && (o = n.axis.grid.model),
		o && o === e.gridModel
	},
	function(t, e) {
		var i = t.geoModel;
		return i && i === e.geoModel
	}],
	Mk = {
		grid: function() {
			return this.coordSys.grid.getRect().clone()
		},
		geo: function() {
			var t = this.coordSys,
			e = t.getBoundingRect().clone();
			return e.applyTransform(po(t)),
			e
		}
	},
	Ik = {
		lineX: yk(Vm, 0),
		lineY: yk(Vm, 1),
		rect: function(t, e, i) {
			var n = e[xk[t]]([i[0][0], i[1][0]]),
			o = e[xk[t]]([i[0][1], i[1][1]]),
			a = [Rm([n[0], o[0]]), Rm([n[1], o[1]])];
			return {
				values: a,
				xyMinMax: a
			}
		},
		polygon: function(t, e, i) {
			var n = [[1 / 0, -1 / 0], [1 / 0, -1 / 0]];
			return {
				values: f(i,
				function(i) {
					var o = e[xk[t]](i);
					return n[0][0] = Math.min(n[0][0], o[0]),
					n[1][0] = Math.min(n[1][0], o[1]),
					n[0][1] = Math.max(n[0][1], o[0]),
					n[1][1] = Math.max(n[1][1], o[1]),
					o
				}),
				xyMinMax: n
			}
		}
	},
	Tk = {
		lineX: yk(Gm, 0),
		lineY: yk(Gm, 1),
		rect: function(t, e, i) {
			return [[t[0][0] - i[0] * e[0][0], t[0][1] - i[0] * e[0][1]], [t[1][0] - i[1] * e[1][0], t[1][1] - i[1] * e[1][1]]]
		},
		polygon: function(t, e, i) {
			return f(t,
			function(t, n) {
				return [t[0] - i[0] * e[n][0], t[1] - i[1] * e[n][1]]
			})
		}
	},
	Ak = ["inBrush", "outOfBrush"],
	Dk = "__ecBrushSelect",
	Ck = "__ecInBrushSelectEvent",
	Lk = FM.VISUAL.BRUSH;
	cs(Lk,
	function(t, e, i) {
		t.eachComponent({
			mainType: "brush"
		},
		function(e) {
			i && "takeGlobalCursor" === i.type && e.setBrushOption("brush" === i.key ? i.brushOption: {
				brushType: !1
			}),
			(e.brushTargetManager = new zm(e.option, t)).setInputRanges(e.areas, t)
		})
	}),
	ds(Lk,
	function(t, e, n) {
		var o, a, s = [];
		t.eachComponent({
			mainType: "brush"
		},
		function(e, n) {
			function l(t) {
				return "all" === m || v[t]
			}
			function h(t) {
				return !! t.length
			}
			function u(t, e) {
				var i = t.coordinateSystem;
				w |= i.hasAxisBrushed(),
				l(e) && i.eachActiveState(t.getData(),
				function(t, e) {
					"active" === t && (x[e] = 1)
				})
			}
			function c(i, n, o) {
				var a = jm(i);
				if (a && !Xm(e, n) && (d(b,
				function(n) {
					a[n.brushType] && e.brushTargetManager.controlSeries(n, i, t) && o.push(n),
					w |= h(o)
				}), l(n) && h(o))) {
					var r = i.getData();
					r.each(function(t) {
						Um(a, o, r, t) && (x[t] = 1)
					})
				}
			}
			var p = {
				brushId: e.id,
				brushIndex: n,
				brushName: e.name,
				areas: i(e.areas),
				selected: []
			};
			s.push(p);
			var g = e.option,
			m = g.brushLink,
			v = [],
			x = [],
			_ = [],
			w = 0;
			n || (o = g.throttleType, a = g.throttleDelay);
			var b = f(e.areas,
			function(t) {
				return Ym(r({
					boundingRect: kk[t.brushType](t)
				},
				t))
			}),
			S = Tm(e.option, Ak,
			function(t) {
				t.mappingMethod = "fixed"
			});
			y(m) && d(m,
			function(t) {
				v[t] = 1
			}),
			t.eachSeries(function(t, e) {
				var i = _[e] = [];
				"parallel" === t.subType ? u(t, e) : c(t, e, i)
			}),
			t.eachSeries(function(t, e) {
				var i = {
					seriesId: t.id,
					seriesIndex: e,
					seriesName: t.name,
					dataIndex: []
				};
				p.selected.push(i);
				var n = jm(t),
				o = _[e],
				a = t.getData(),
				r = l(e) ?
				function(t) {
					return x[t] ? (i.dataIndex.push(a.getRawIndex(t)), "inBrush") : "outOfBrush"
				}: function(t) {
					return Um(n, o, a, t) ? (i.dataIndex.push(a.getRawIndex(t)), "inBrush") : "outOfBrush"
				}; (l(e) ? w: h(o)) && Dm(Ak, S, a, r)
			})
		}),
		Hm(e, o, a, s, n)
	});
	var kk = {
		lineX: B,
		lineY: B,
		rect: function(t) {
			return qm(t.range)
		},
		polygon: function(t) {
			for (var e, i = t.range,
			n = 0,
			o = i.length; n < o; n++) {
				e = e || [[1 / 0, -1 / 0], [1 / 0, -1 / 0]];
				var a = i[n];
				a[0] < e[0][0] && (e[0][0] = a[0]),
				a[0] > e[0][1] && (e[0][1] = a[0]),
				a[1] < e[1][0] && (e[1][0] = a[1]),
				a[1] > e[1][1] && (e[1][1] = a[1])
			}
			return e && qm(e)
		}
	},
	Pk = ["#ddd"];
	gs({
		type: "brush",
		dependencies: ["geo", "grid", "xAxis", "yAxis", "parallel", "series"],
		defaultOption: {
			toolbox: null,
			brushLink: null,
			seriesIndex: "all",
			geoIndex: null,
			xAxisIndex: null,
			yAxisIndex: null,
			brushType: "rect",
			brushMode: "single",
			transformable: !0,
			brushStyle: {
				borderWidth: 1,
				color: "rgba(120,140,180,0.3)",
				borderColor: "rgba(120,140,180,0.8)"
			},
			throttleType: "fixRate",
			throttleDelay: 0,
			removeOnClick: !0,
			z: 1e4
		},
		areas: [],
		brushType: null,
		brushOption: {},
		coordInfoList: [],
		optionUpdated: function(t, e) {
			var i = this.option; ! e && Am(i, t, ["inBrush", "outOfBrush"]),
			i.inBrush = i.inBrush || {},
			i.outOfBrush = i.outOfBrush || {
				color: Pk
			}
		},
		setAreas: function(t) {
			t && (this.areas = f(t,
			function(t) {
				return $m(this.option, t)
			},
			this))
		},
		setBrushOption: function(t) {
			this.brushOption = $m(this.option, t),
			this.brushType = this.brushOption.brushType
		}
	});
	ms({
		type: "brush",
		init: function(t, e) {
			this.ecModel = t,
			this.api = e,
			this.model,
			(this._brushController = new yd(e.getZr())).on("brush", m(this._onBrush, this)).mount()
		},
		render: function(t) {
			return this.model = t,
			Km.apply(this, arguments)
		},
		updateView: Km,
		dispose: function() {
			this._brushController.dispose()
		},
		_onBrush: function(t, e) {
			var n = this.model.id;
			this.model.brushTargetManager.setOutputRanges(t, this.ecModel),
			(!e.isEnd || e.removeOnClick) && this.api.dispatchAction({
				type: "brush",
				brushId: n,
				areas: i(t),
				$from: n
			})
		}
	}),
	hs({
		type: "brush",
		event: "brush"
	},
	function(t, e) {
		e.eachComponent({
			mainType: "brush",
			query: t
		},
		function(e) {
			e.setAreas(t.areas)
		})
	}),
	hs({
		type: "brushSelect",
		event: "brushSelected",
		update: "none"
	},
	function() {});
	var Ok = {},
	Nk = wM.toolbox.brush;
	tv.defaultOption = {
		show: !0,
		type: ["rect", "polygon", "lineX", "lineY", "keep", "clear"],
		icon: {
			rect: "M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13",
			polygon: "M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2",
			lineX: "M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4",
			lineY: "M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4",
			keep: "M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z",
			clear: "M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2"
		},
		title: i(Nk.title)
	};
	var Ek = tv.prototype;
	Ek.render = Ek.updateView = function(t, e, i) {
		var n, o, a;
		e.eachComponent({
			mainType: "brush"
		},
		function(t) {
			n = t.brushType,
			o = t.brushOption.brushMode || "single",
			a |= t.areas.length
		}),
		this._brushType = n,
		this._brushMode = o,
		d(t.get("type", !0),
		function(e) {
			t.setIconStatus(e, ("keep" === e ? "multiple" === o: "clear" === e ? a: e === n) ? "emphasis": "normal")
		})
	},
	Ek.getIcons = function() {
		var t = this.model,
		e = t.get("icon", !0),
		i = {};
		return d(t.get("type", !0),
		function(t) {
			e[t] && (i[t] = e[t])
		}),
		i
	},
	Ek.onclick = function(t, e, i) {
		var n = this._brushType,
		o = this._brushMode;
		"clear" === i ? (e.dispatchAction({
			type: "axisAreaSelect",
			intervals: []
		}), e.dispatchAction({
			type: "brush",
			command: "clear",
			areas: []
		})) : e.dispatchAction({
			type: "takeGlobalCursor",
			key: "brush",
			brushOption: {
				brushType: "keep" === i ? n: n !== i && i,
				brushMode: "keep" === i ? "multiple" === o ? "single": "multiple": o
			}
		})
	},
	Jm("brush", tv),
	ss(function(t, e) {
		var i = t && t.brush;
		if (y(i) || (i = i ? [i] : []), i.length) {
			var n = [];
			d(i,
			function(t) {
				var e = t.hasOwnProperty("toolbox") ? t.toolbox: [];
				e instanceof Array && (n = n.concat(e))
			});
			var o = t && t.toolbox;
			y(o) && (o = o[0]),
			o || (o = {
				feature: {}
			},
			t.toolbox = [o]);
			var a = o.feature || (o.feature = {}),
			r = a.brush || (a.brush = {}),
			s = r.type || (r.type = []);
			s.push.apply(s, n),
			Mm(s),
			e && !s.length && s.push.apply(s, fk)
		}
	});
	ev.prototype = {
		constructor: ev,
		type: "calendar",
		dimensions: ["time", "value"],
		getDimensionsInfo: function() {
			return [{
				name: "time",
				type: "time"
			}]
		},
		getRangeInfo: function() {
			return this._rangeInfo
		},
		getModel: function() {
			return this._model
		},
		getRect: function() {
			return this._rect
		},
		getCellWidth: function() {
			return this._sw
		},
		getCellHeight: function() {
			return this._sh
		},
		getOrient: function() {
			return this._orient
		},
		getFirstDayOfWeek: function() {
			return this._firstDayOfWeek
		},
		getDateInfo: function(t) {
			var e = (t = Eo(t)).getFullYear(),
			i = t.getMonth() + 1;
			i = i < 10 ? "0" + i: i;
			var n = t.getDate();
			n = n < 10 ? "0" + n: n;
			var o = t.getDay();
			return o = Math.abs((o + 7 - this.getFirstDayOfWeek()) % 7),
			{
				y: e,
				m: i,
				d: n,
				day: o,
				time: t.getTime(),
				formatedDate: e + "-" + i + "-" + n,
				date: t
			}
		},
		getNextNDay: function(t, e) {
			return 0 === (e = e || 0) ? this.getDateInfo(t) : ((t = new Date(this.getDateInfo(t).time)).setDate(t.getDate() + e), this.getDateInfo(t))
		},
		update: function(t, e) {
			function i(t, e) {
				return null != t[e] && "auto" !== t[e]
			}
			this._firstDayOfWeek = +this._model.getModel("dayLabel").get("firstDay"),
			this._orient = this._model.get("orient"),
			this._lineWidth = this._model.getModel("itemStyle").getItemStyle().lineWidth || 0,
			this._rangeInfo = this._getRangeInfo(this._initRangeOption());
			var n = this._rangeInfo.weeks || 1,
			o = ["width", "height"],
			a = this._model.get("cellSize").slice(),
			r = this._model.getBoxLayoutParams(),
			s = "horizontal" === this._orient ? [n, 7] : [7, n];
			d([0, 1],
			function(t) {
				i(a, t) && (r[o[t]] = a[t] * s[t])
			});
			var l = {
				width: e.getWidth(),
				height: e.getHeight()
			},
			h = this._rect = Ko(r, l);
			d([0, 1],
			function(t) {
				i(a, t) || (a[t] = h[o[t]] / s[t])
			}),
			this._sw = a[0],
			this._sh = a[1]
		},
		dataToPoint: function(t, e) {
			y(t) && (t = t[0]),
			null == e && (e = !0);
			var i = this.getDateInfo(t),
			n = this._rangeInfo,
			o = i.formatedDate;
			if (e && !(i.time >= n.start.time && i.time <= n.end.time)) return [NaN, NaN];
			var a = i.day,
			r = this._getRangeInfo([n.start.time, o]).nthWeek;
			return "vertical" === this._orient ? [this._rect.x + a * this._sw + this._sw / 2, this._rect.y + r * this._sh + this._sh / 2] : [this._rect.x + r * this._sw + this._sw / 2, this._rect.y + a * this._sh + this._sh / 2]
		},
		pointToData: function(t) {
			var e = this.pointToDate(t);
			return e && e.time
		},
		dataToRect: function(t, e) {
			var i = this.dataToPoint(t, e);
			return {
				contentShape: {
					x: i[0] - (this._sw - this._lineWidth) / 2,
					y: i[1] - (this._sh - this._lineWidth) / 2,
					width: this._sw - this._lineWidth,
					height: this._sh - this._lineWidth
				},
				center: i,
				tl: [i[0] - this._sw / 2, i[1] - this._sh / 2],
				tr: [i[0] + this._sw / 2, i[1] - this._sh / 2],
				br: [i[0] + this._sw / 2, i[1] + this._sh / 2],
				bl: [i[0] - this._sw / 2, i[1] + this._sh / 2]
			}
		},
		pointToDate: function(t) {
			var e = Math.floor((t[0] - this._rect.x) / this._sw) + 1,
			i = Math.floor((t[1] - this._rect.y) / this._sh) + 1,
			n = this._rangeInfo.range;
			return "vertical" === this._orient ? this._getDateByWeeksAndDay(i, e - 1, n) : this._getDateByWeeksAndDay(e, i - 1, n)
		},
		convertToPixel: v(iv, "dataToPoint"),
		convertFromPixel: v(iv, "pointToData"),
		_initRangeOption: function() {
			var t = this._model.get("range"),
			e = t;
			if (y(e) && 1 === e.length && (e = e[0]), /^\d{4}$/.test(e) && (t = [e + "-01-01", e + "-12-31"]), /^\d{4}[\/|-]\d{1,2}$/.test(e)) {
				var i = this.getDateInfo(e),
				n = i.date;
				n.setMonth(n.getMonth() + 1);
				var o = this.getNextNDay(n, -1);
				t = [i.formatedDate, o.formatedDate]
			}
			/^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(e) && (t = [e, e]);
			var a = this._getRangeInfo(t);
			return a.start.time > a.end.time && t.reverse(),
			t
		},
		_getRangeInfo: function(t) {
			var e; (t = [this.getDateInfo(t[0]), this.getDateInfo(t[1])])[0].time > t[1].time && (e = !0, t.reverse());
			var i = Math.floor(t[1].time / 864e5) - Math.floor(t[0].time / 864e5) + 1,
			n = new Date(t[0].time),
			o = n.getDate(),
			a = t[1].date.getDate();
			if (n.setDate(o + i - 1), n.getDate() !== a) for (var r = n.getTime() - t[1].time > 0 ? 1 : -1; n.getDate() !== a && (n.getTime() - t[1].time) * r > 0;) i -= r,
			n.setDate(o + i - 1);
			var s = Math.floor((i + t[0].day + 6) / 7),
			l = e ? 1 - s: s - 1;
			return e && t.reverse(),
			{
				range: [t[0].formatedDate, t[1].formatedDate],
				start: t[0],
				end: t[1],
				allDay: i,
				weeks: s,
				nthWeek: l,
				fweek: t[0].day,
				lweek: t[1].day
			}
		},
		_getDateByWeeksAndDay: function(t, e, i) {
			var n = this._getRangeInfo(i);
			if (t > n.weeks || 0 === t && e < n.fweek || t === n.weeks && e > n.lweek) return ! 1;
			var o = 7 * (t - 1) - n.fweek + e,
			a = new Date(n.start.time);
			return a.setDate(n.start.d + o),
			this.getDateInfo(a)
		}
	},
	ev.dimensions = ev.prototype.dimensions,
	ev.getDimensionsInfo = ev.prototype.getDimensionsInfo,
	ev.create = function(t, e) {
		var i = [];
		return t.eachComponent("calendar",
		function(n) {
			var o = new ev(n, t, e);
			i.push(o),
			n.coordinateSystem = o
		}),
		t.eachSeries(function(t) {
			"calendar" === t.get("coordinateSystem") && (t.coordinateSystem = i[t.get("calendarIndex") || 0])
		}),
		i
	},
	Aa.register("calendar", ev);
	var zk = IS.extend({
		type: "calendar",
		coordinateSystem: null,
		defaultOption: {
			zlevel: 0,
			z: 2,
			left: 80,
			top: 60,
			cellSize: 20,
			orient: "horizontal",
			splitLine: {
				show: !0,
				lineStyle: {
					color: "#000",
					width: 1,
					type: "solid"
				}
			},
			itemStyle: {
				color: "#fff",
				borderWidth: 1,
				borderColor: "#ccc"
			},
			dayLabel: {
				show: !0,
				firstDay: 0,
				position: "start",
				margin: "50%",
				nameMap: "en",
				color: "#000"
			},
			monthLabel: {
				show: !0,
				position: "start",
				margin: 5,
				align: "center",
				nameMap: "en",
				formatter: null,
				color: "#000"
			},
			yearLabel: {
				show: !0,
				position: null,
				margin: 30,
				formatter: null,
				color: "#ccc",
				fontFamily: "sans-serif",
				fontWeight: "bolder",
				fontSize: 20
			}
		},
		init: function(t, e, i, n) {
			var o = ea(t);
			zk.superApply(this, "init", arguments),
			nv(t, o)
		},
		mergeOption: function(t, e) {
			zk.superApply(this, "mergeOption", arguments),
			nv(this.option, t)
		}
	}),
	Rk = {
		EN: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		CN: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
	},
	Bk = {
		EN: ["S", "M", "T", "W", "T", "F", "S"],
		CN: ["日", "一", "二", "三", "四", "五", "六"]
	};
	ms({
		type: "calendar",
		_tlpoints: null,
		_blpoints: null,
		_firstDayOfMonth: null,
		_firstDayPoints: null,
		render: function(t, e, i) {
			var n = this.group;
			n.removeAll();
			var o = t.coordinateSystem,
			a = o.getRangeInfo(),
			r = o.getOrient();
			this._renderDayRect(t, a, n),
			this._renderLines(t, a, r, n),
			this._renderYearText(t, a, r, n),
			this._renderMonthText(t, r, n),
			this._renderWeekText(t, a, r, n)
		},
		_renderDayRect: function(t, e, i) {
			for (var n = t.coordinateSystem,
			o = t.getModel("itemStyle").getItemStyle(), a = n.getCellWidth(), r = n.getCellHeight(), s = e.start.time; s <= e.end.time; s = n.getNextNDay(s, 1).time) {
				var l = n.dataToRect([s], !1).tl,
				h = new Vb({
					shape: {
						x: l[0],
						y: l[1],
						width: a,
						height: r
					},
					cursor: "default",
					style: o
				});
				i.add(h)
			}
		},
		_renderLines: function(t, e, i, n) {
			function o(e) {
				a._firstDayOfMonth.push(r.getDateInfo(e)),
				a._firstDayPoints.push(r.dataToRect([e], !1).tl);
				var o = a._getLinePointsOfOneWeek(t, e, i);
				a._tlpoints.push(o[0]),
				a._blpoints.push(o[o.length - 1]),
				l && a._drawSplitline(o, s, n)
			}
			var a = this,
			r = t.coordinateSystem,
			s = t.getModel("splitLine.lineStyle").getLineStyle(),
			l = t.get("splitLine.show"),
			h = s.lineWidth;
			this._tlpoints = [],
			this._blpoints = [],
			this._firstDayOfMonth = [],
			this._firstDayPoints = [];
			for (var u = e.start,
			c = 0; u.time <= e.end.time; c++) {
				o(u.formatedDate),
				0 === c && (u = r.getDateInfo(e.start.y + "-" + e.start.m));
				var d = u.date;
				d.setMonth(d.getMonth() + 1),
				u = r.getDateInfo(d)
			}
			o(r.getNextNDay(e.end.time, 1).formatedDate),
			l && this._drawSplitline(a._getEdgesPoints(a._tlpoints, h, i), s, n),
			l && this._drawSplitline(a._getEdgesPoints(a._blpoints, h, i), s, n)
		},
		_getEdgesPoints: function(t, e, i) {
			var n = [t[0].slice(), t[t.length - 1].slice()],
			o = "horizontal" === i ? 0 : 1;
			return n[0][o] = n[0][o] - e / 2,
			n[1][o] = n[1][o] + e / 2,
			n
		},
		_drawSplitline: function(t, e, i) {
			var n = new Bb({
				z2: 20,
				shape: {
					points: t
				},
				style: e
			});
			i.add(n)
		},
		_getLinePointsOfOneWeek: function(t, e, i) {
			var n = t.coordinateSystem;
			e = n.getDateInfo(e);
			for (var o = [], a = 0; a < 7; a++) {
				var r = n.getNextNDay(e.time, a),
				s = n.dataToRect([r.time], !1);
				o[2 * r.day] = s.tl,
				o[2 * r.day + 1] = s["horizontal" === i ? "bl": "tr"]
			}
			return o
		},
		_formatterLabel: function(t, e) {
			return "string" == typeof t && t ? Uo(t, e) : "function" == typeof t ? t(e) : e.nameMap
		},
		_yearTextPositionControl: function(t, e, i, n, o) {
			e = e.slice();
			var a = ["center", "bottom"];
			"bottom" === n ? (e[1] += o, a = ["center", "top"]) : "left" === n ? e[0] -= o: "right" === n ? (e[0] += o, a = ["center", "top"]) : e[1] -= o;
			var r = 0;
			return "left" !== n && "right" !== n || (r = Math.PI / 2),
			{
				rotation: r,
				position: e,
				style: {
					textAlign: a[0],
					textVerticalAlign: a[1]
				}
			}
		},
		_renderYearText: function(t, e, i, n) {
			var o = t.getModel("yearLabel");
			if (o.get("show")) {
				var a = o.get("margin"),
				r = o.get("position");
				r || (r = "horizontal" !== i ? "top": "left");
				var s = [this._tlpoints[this._tlpoints.length - 1], this._blpoints[0]],
				l = (s[0][0] + s[1][0]) / 2,
				h = (s[0][1] + s[1][1]) / 2,
				u = "horizontal" === i ? 0 : 1,
				c = {
					top: [l, s[u][1]],
					bottom: [l, s[1 - u][1]],
					left: [s[1 - u][0], h],
					right: [s[u][0], h]
				},
				d = e.start.y; + e.end.y > +e.start.y && (d = d + "-" + e.end.y);
				var f = o.get("formatter"),
				p = {
					start: e.start.y,
					end: e.end.y,
					nameMap: d
				},
				g = this._formatterLabel(f, p),
				m = new Cb({
					z2: 30
				});
				io(m.style, o, {
					text: g
				}),
				m.attr(this._yearTextPositionControl(m, c[r], i, r, a)),
				n.add(m)
			}
		},
		_monthTextPositionControl: function(t, e, i, n, o) {
			var a = "left",
			r = "top",
			s = t[0],
			l = t[1];
			return "horizontal" === i ? (l += o, e && (a = "center"), "start" === n && (r = "bottom")) : (s += o, e && (r = "middle"), "start" === n && (a = "right")),
			{
				x: s,
				y: l,
				textAlign: a,
				textVerticalAlign: r
			}
		},
		_renderMonthText: function(t, e, i) {
			var n = t.getModel("monthLabel");
			if (n.get("show")) {
				var o = n.get("nameMap"),
				r = n.get("margin"),
				s = n.get("position"),
				l = n.get("align"),
				h = [this._tlpoints, this._blpoints];
				_(o) && (o = Rk[o.toUpperCase()] || []);
				var u = "start" === s ? 0 : 1,
				c = "horizontal" === e ? 0 : 1;
				r = "start" === s ? -r: r;
				for (var d = "center" === l,
				f = 0; f < h[u].length - 1; f++) {
					var p = h[u][f].slice(),
					g = this._firstDayOfMonth[f];
					if (d) {
						var m = this._firstDayPoints[f];
						p[c] = (m[c] + h[0][f + 1][c]) / 2
					}
					var v = n.get("formatter"),
					y = o[ + g.m - 1],
					x = {
						yyyy: g.y,
						yy: (g.y + "").slice(2),
						MM: g.m,
						M: +g.m,
						nameMap: y
					},
					w = this._formatterLabel(v, x),
					b = new Cb({
						z2: 30
					});
					a(io(b.style, n, {
						text: w
					}), this._monthTextPositionControl(p, d, e, s, r)),
					i.add(b)
				}
			}
		},
		_weekTextPositionControl: function(t, e, i, n, o) {
			var a = "center",
			r = "middle",
			s = t[0],
			l = t[1],
			h = "start" === i;
			return "horizontal" === e ? (s = s + n + (h ? 1 : -1) * o[0] / 2, a = h ? "right": "left") : (l = l + n + (h ? 1 : -1) * o[1] / 2, r = h ? "bottom": "top"),
			{
				x: s,
				y: l,
				textAlign: a,
				textVerticalAlign: r
			}
		},
		_renderWeekText: function(t, e, i, n) {
			var o = t.getModel("dayLabel");
			if (o.get("show")) {
				var r = t.coordinateSystem,
				s = o.get("position"),
				l = o.get("nameMap"),
				h = o.get("margin"),
				u = r.getFirstDayOfWeek();
				_(l) && (l = Bk[l.toUpperCase()] || []);
				var c = r.getNextNDay(e.end.time, 7 - e.lweek).time,
				d = [r.getCellWidth(), r.getCellHeight()];
				h = To(h, d["horizontal" === i ? 0 : 1]),
				"start" === s && (c = r.getNextNDay(e.start.time, -(7 + e.fweek)).time, h = -h);
				for (var f = 0; f < 7; f++) {
					var p = r.getNextNDay(c, f),
					g = r.dataToRect([p.time], !1).center,
					m = f;
					m = Math.abs((f + u) % 7);
					var v = new Cb({
						z2: 30
					});
					a(io(v.style, o, {
						text: l[m]
					}), this._weekTextPositionControl(g, i, s, h, d)),
					n.add(v)
				}
			}
		}
	}),
	gs({
		type: "title",
		layoutMode: {
			type: "box",
			ignoreSize: !0
		},
		defaultOption: {
			zlevel: 0,
			z: 6,
			show: !0,
			text: "",
			target: "blank",
			subtext: "",
			subtarget: "blank",
			left: 0,
			top: 0,
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderWidth: 0,
			padding: 5,
			itemGap: 10,
			textStyle: {
				fontSize: 18,
				fontWeight: "bolder",
				color: "#333"
			},
			subtextStyle: {
				color: "#aaa"
			}
		}
	}),
	ms({
		type: "title",
		render: function(t, e, i) {
			if (this.group.removeAll(), t.get("show")) {
				var n = this.group,
				o = t.getModel("textStyle"),
				a = t.getModel("subtextStyle"),
				r = t.get("textAlign"),
				s = t.get("textBaseline"),
				l = new Cb({
					style: io({},
					o, {
						text: t.get("text"),
						textFill: o.getTextColor()
					},
					{
						disableBox: !0
					}),
					z2: 10
				}),
				h = l.getBoundingRect(),
				u = t.get("subtext"),
				c = new Cb({
					style: io({},
					a, {
						text: u,
						textFill: a.getTextColor(),
						y: h.height + t.get("itemGap"),
						textVerticalAlign: "top"
					},
					{
						disableBox: !0
					}),
					z2: 10
				}),
				d = t.get("link"),
				f = t.get("sublink");
				l.silent = !d,
				c.silent = !f,
				d && l.on("click",
				function() {
					window.open(d, "_" + t.get("target"))
				}),
				f && c.on("click",
				function() {
					window.open(f, "_" + t.get("subtarget"))
				}),
				n.add(l),
				u && n.add(c);
				var p = n.getBoundingRect(),
				g = t.getBoxLayoutParams();
				g.width = p.width,
				g.height = p.height;
				var m = Ko(g, {
					width: i.getWidth(),
					height: i.getHeight()
				},
				t.get("padding"));
				r || ("middle" === (r = t.get("left") || t.get("right")) && (r = "center"), "right" === r ? m.x += m.width: "center" === r && (m.x += m.width / 2)),
				s || ("center" === (s = t.get("top") || t.get("bottom")) && (s = "middle"), "bottom" === s ? m.y += m.height: "middle" === s && (m.y += m.height / 2), s = s || "top"),
				n.attr("position", [m.x, m.y]);
				var v = {
					textAlign: r,
					textVerticalAlign: s
				};
				l.setStyle(v),
				c.setStyle(v),
				p = n.getBoundingRect();
				var y = m.margin,
				x = t.getItemStyle(["color", "opacity"]);
				x.fill = t.get("backgroundColor");
				var _ = new Vb({
					shape: {
						x: p.x - y[3],
						y: p.y - y[0],
						width: p.width + y[1] + y[3],
						height: p.height + y[0] + y[2],
						r: t.get("borderRadius")
					},
					style: x,
					silent: !0
				});
				Gn(_),
				n.add(_)
			}
		}
	}),
	IS.registerSubTypeDefaulter("dataZoom",
	function() {
		return "slider"
	});
	var Vk = ["cartesian2d", "polar", "singleAxis"],
	Gk = function(t, e) {
		var i = f(t = t.slice(), Yo),
		n = f(e = (e || []).slice(), Yo);
		return function(o, a) {
			d(t,
			function(t, r) {
				for (var s = {
					name: t,
					capital: i[r]
				},
				l = 0; l < e.length; l++) s[e[l]] = t + n[l];
				o.call(a, s)
			})
		}
	} (["x", "y", "z", "radius", "angle", "single"], ["axisIndex", "axis", "index", "id"]),
	Wk = d,
	Fk = Do,
	Hk = function(t, e, i, n) {
		this._dimName = t,
		this._axisIndex = e,
		this._valueWindow,
		this._percentWindow,
		this._dataExtent,
		this._minMaxSpan,
		this.ecModel = n,
		this._dataZoomModel = i,
		this.hasSeriesStacked
	};
	Hk.prototype = {
		constructor: Hk,
		hostedBy: function(t) {
			return this._dataZoomModel === t
		},
		getDataValueWindow: function() {
			return this._valueWindow.slice()
		},
		getDataPercentWindow: function() {
			return this._percentWindow.slice()
		},
		getTargetSeriesModels: function() {
			var t = [],
			e = this.ecModel;
			return e.eachSeries(function(i) {
				if (ov(i.get("coordinateSystem"))) {
					var n = this._dimName,
					o = e.queryComponents({
						mainType: n + "Axis",
						index: i.get(n + "AxisIndex"),
						id: i.get(n + "AxisId")
					})[0];
					this._axisIndex === (o && o.componentIndex) && t.push(i)
				}
			},
			this),
			t
		},
		getAxisModel: function() {
			return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
		},
		getOtherAxisModel: function() {
			var t, e, i = this._dimName,
			n = this.ecModel,
			o = this.getAxisModel();
			"x" === i || "y" === i ? (e = "gridIndex", t = "x" === i ? "y": "x") : (e = "polarIndex", t = "angle" === i ? "radius": "angle");
			var a;
			return n.eachComponent(t + "Axis",
			function(t) { (t.get(e) || 0) === (o.get(e) || 0) && (a = t)
			}),
			a
		},
		getMinMaxSpan: function() {
			return i(this._minMaxSpan)
		},
		calculateDataWindow: function(t) {
			var e = this._dataExtent,
			i = this.getAxisModel().axis.scale,
			n = this._dataZoomModel.getRangePropMode(),
			o = [0, 100],
			a = [t.start, t.end],
			r = [];
			return Wk(["startValue", "endValue"],
			function(e) {
				r.push(null != t[e] ? i.parse(t[e]) : null)
			}),
			Wk([0, 1],
			function(t) {
				var s = r[t],
				l = a[t];
				"percent" === n[t] ? (null == l && (l = o[t]), s = i.parse(Io(l, o, e, !0))) : l = Io(s, e, o, !0),
				r[t] = s,
				a[t] = l
			}),
			{
				valueWindow: Fk(r),
				percentWindow: Fk(a)
			}
		},
		reset: function(t) {
			if (t === this._dataZoomModel) {
				var e = this.getTargetSeriesModels();
				this._dataExtent = rv(this, this._dimName, e),
				this.hasSeriesStacked = !1,
				Wk(e,
				function(t) {
					var e = t.getData(),
					i = e.mapDimension(this._dimName);
					e.isStacked(i) && (this.hasSeriesStacked = !0)
				},
				this);
				var i = this.calculateDataWindow(t.option);
				this._valueWindow = i.valueWindow,
				this._percentWindow = i.percentWindow,
				hv(this),
				lv(this)
			}
		},
		restore: function(t) {
			t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, lv(this, !0))
		},
		filterData: function(t, e) {
			function i(t) {
				return t >= r[0] && t <= r[1]
			}
			if (t === this._dataZoomModel) {
				var n = this._dimName,
				o = this.getTargetSeriesModels(),
				a = t.get("filterMode"),
				r = this._valueWindow;
				if ("none" !== a) {
					var s = this.getOtherAxisModel();
					t.get("$fromToolbox") && s && s.hasSeriesStacked && (a = "empty"),
					Wk(o,
					function(t) {
						var e = t.getData(),
						o = e.mapDimension(n, !0);
						"weakFilter" === a ? e.filterSelf(function(t) {
							for (var i, n, a, s = 0; s < o.length; s++) {
								var l = e.get(o[s], t),
								h = !isNaN(l),
								u = l < r[0],
								c = l > r[1];
								if (h && !u && !c) return ! 0;
								h && (a = !0),
								u && (i = !0),
								c && (n = !0)
							}
							return a && i && n
						}) : Wk(o,
						function(n) {
							if ("empty" === a) t.setData(e.map(n,
							function(t) {
								return i(t) ? t: NaN
							}));
							else {
								var o = {};
								o[n] = r,
								e.selectRange(o)
							}
						}),
						Wk(o,
						function(t) {
							e.setApproximateExtent(r, t)
						})
					})
				}
			}
		}
	};
	var Zk = d,
	Uk = Gk,
	jk = gs({
		type: "dataZoom",
		dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "singleAxis", "series"],
		defaultOption: {
			zlevel: 0,
			z: 4,
			orient: null,
			xAxisIndex: null,
			yAxisIndex: null,
			filterMode: "filter",
			throttle: null,
			start: 0,
			end: 100,
			startValue: null,
			endValue: null,
			minSpan: null,
			maxSpan: null,
			minValueSpan: null,
			maxValueSpan: null,
			rangeMode: null
		},
		init: function(t, e, i) {
			this._dataIntervalByAxis = {},
			this._dataInfo = {},
			this._axisProxies = {},
			this.textStyleModel,
			this._autoThrottle = !0,
			this._rangePropMode = ["percent", "percent"];
			var n = uv(t);
			this.mergeDefaultAndTheme(t, i),
			this.doInit(n)
		},
		mergeOption: function(t) {
			var e = uv(t);
			n(this.option, t, !0),
			this.doInit(e)
		},
		doInit: function(t) {
			var e = this.option;
			_x.canvasSupported || (e.realtime = !1),
			this._setDefaultThrottle(t),
			cv(this, t),
			Zk([["start", "startValue"], ["end", "endValue"]],
			function(t, i) {
				"value" === this._rangePropMode[i] && (e[t[0]] = null)
			},
			this),
			this.textStyleModel = this.getModel("textStyle"),
			this._resetTarget(),
			this._giveAxisProxies()
		},
		_giveAxisProxies: function() {
			var t = this._axisProxies;
			this.eachTargetAxis(function(e, i, n, o) {
				var a = this.dependentModels[e.axis][i],
				r = a.__dzAxisProxy || (a.__dzAxisProxy = new Hk(e.name, i, this, o));
				t[e.name + "_" + i] = r
			},
			this)
		},
		_resetTarget: function() {
			var t = this.option,
			e = this._judgeAutoMode();
			Uk(function(e) {
				var i = e.axisIndex;
				t[i] = Si(t[i])
			},
			this),
			"axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
		},
		_judgeAutoMode: function() {
			var t = this.option,
			e = !1;
			Uk(function(i) {
				null != t[i.axisIndex] && (e = !0)
			},
			this);
			var i = t.orient;
			return null == i && e ? "orient": e ? void 0 : (null == i && (t.orient = "horizontal"), "axisIndex")
		},
		_autoSetAxisIndex: function() {
			var t = !0,
			e = this.get("orient", !0),
			i = this.option,
			n = this.dependentModels;
			if (t) {
				var o = "vertical" === e ? "y": "x";
				n[o + "Axis"].length ? (i[o + "AxisIndex"] = [0], t = !1) : Zk(n.singleAxis,
				function(n) {
					t && n.get("orient", !0) === e && (i.singleAxisIndex = [n.componentIndex], t = !1)
				})
			}
			t && Uk(function(e) {
				if (t) {
					var n = [],
					o = this.dependentModels[e.axis];
					if (o.length && !n.length) for (var a = 0,
					r = o.length; a < r; a++)"category" === o[a].get("type") && n.push(a);
					i[e.axisIndex] = n,
					n.length && (t = !1)
				}
			},
			this),
			t && this.ecModel.eachSeries(function(t) {
				this._isSeriesHasAllAxesTypeOf(t, "value") && Uk(function(e) {
					var n = i[e.axisIndex],
					o = t.get(e.axisIndex),
					a = t.get(e.axisId);
					l(n, o = t.ecModel.queryComponents({
						mainType: e.axis,
						index: o,
						id: a
					})[0].componentIndex) < 0 && n.push(o)
				})
			},
			this)
		},
		_autoSetOrient: function() {
			var t;
			this.eachTargetAxis(function(e) { ! t && (t = e.name)
			},
			this),
			this.option.orient = "y" === t ? "vertical": "horizontal"
		},
		_isSeriesHasAllAxesTypeOf: function(t, e) {
			var i = !0;
			return Uk(function(n) {
				var o = t.get(n.axisIndex),
				a = this.dependentModels[n.axis][o];
				a && a.get("type") === e || (i = !1)
			},
			this),
			i
		},
		_setDefaultThrottle: function(t) {
			if (t.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
				var e = this.ecModel.option;
				this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20
			}
		},
		getFirstTargetAxisModel: function() {
			var t;
			return Uk(function(e) {
				if (null == t) {
					var i = this.get(e.axisIndex);
					i.length && (t = this.dependentModels[e.axis][i[0]])
				}
			},
			this),
			t
		},
		eachTargetAxis: function(t, e) {
			var i = this.ecModel;
			Uk(function(n) {
				Zk(this.get(n.axisIndex),
				function(o) {
					t.call(e, n, o, this, i)
				},
				this)
			},
			this)
		},
		getAxisProxy: function(t, e) {
			return this._axisProxies[t + "_" + e]
		},
		getAxisModel: function(t, e) {
			var i = this.getAxisProxy(t, e);
			return i && i.getAxisModel()
		},
		setRawRange: function(t, e) {
			var i = this.option;
			Zk([["start", "startValue"], ["end", "endValue"]],
			function(e) {
				null == t[e[0]] && null == t[e[1]] || (i[e[0]] = t[e[0]], i[e[1]] = t[e[1]])
			},
			this),
			!e && cv(this, t)
		},
		getPercentRange: function() {
			var t = this.findRepresentativeAxisProxy();
			if (t) return t.getDataPercentWindow()
		},
		getValueRange: function(t, e) {
			if (null != t || null != e) return this.getAxisProxy(t, e).getDataValueWindow();
			var i = this.findRepresentativeAxisProxy();
			return i ? i.getDataValueWindow() : void 0
		},
		findRepresentativeAxisProxy: function(t) {
			if (t) return t.__dzAxisProxy;
			var e = this._axisProxies;
			for (var i in e) if (e.hasOwnProperty(i) && e[i].hostedBy(this)) return e[i];
			for (var i in e) if (e.hasOwnProperty(i) && !e[i].hostedBy(this)) return e[i]
		},
		getRangePropMode: function() {
			return this._rangePropMode.slice()
		}
	}),
	Xk = cM.extend({
		type: "dataZoom",
		render: function(t, e, i, n) {
			this.dataZoomModel = t,
			this.ecModel = e,
			this.api = i
		},
		getTargetCoordInfo: function() {
			function t(t, e, i, n) {
				for (var o, a = 0; a < i.length; a++) if (i[a].model === t) {
					o = i[a];
					break
				}
				o || i.push(o = {
					model: t,
					axisModels: [],
					coordIndex: n
				}),
				o.axisModels.push(e)
			}
			var e = this.dataZoomModel,
			i = this.ecModel,
			n = {};
			return e.eachTargetAxis(function(e, o) {
				var a = i.getComponent(e.axis, o);
				if (a) {
					var r = a.getCoordSysModel();
					r && t(r, a, n[r.mainType] || (n[r.mainType] = []), r.componentIndex)
				}
			},
			this),
			n
		}
	}),
	Yk = (jk.extend({
		type: "dataZoom.slider",
		layoutMode: "box",
		defaultOption: {
			show: !0,
			right: "ph",
			top: "ph",
			width: "ph",
			height: "ph",
			left: null,
			bottom: null,
			backgroundColor: "rgba(47,69,84,0)",
			dataBackground: {
				lineStyle: {
					color: "#2f4554",
					width: .5,
					opacity: .3
				},
				areaStyle: {
					color: "rgba(47,69,84,0.3)",
					opacity: .3
				}
			},
			borderColor: "#ddd",
			fillerColor: "rgba(167,183,204,0.4)",
			handleIcon: "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",
			handleSize: "100%",
			handleStyle: {
				color: "#a7b7cc"
			},
			labelPrecision: null,
			labelFormatter: null,
			showDetail: !0,
			showDataShadow: "auto",
			realtime: !0,
			zoomLock: !1,
			textStyle: {
				color: "#333"
			}
		}
	}), Vb),
	qk = Io,
	$k = Do,
	Kk = m,
	Jk = d,
	Qk = "horizontal",
	tP = 5,
	eP = ["line", "bar", "candlestick", "scatter"],
	iP = Xk.extend({
		type: "dataZoom.slider",
		init: function(t, e) {
			this._displayables = {},
			this._orient,
			this._range,
			this._handleEnds,
			this._size,
			this._handleWidth,
			this._handleHeight,
			this._location,
			this._dragging,
			this._dataShadowInfo,
			this.api = e
		},
		render: function(t, e, i, n) {
			iP.superApply(this, "render", arguments),
			yr(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"),
			this._orient = t.get("orient"),
			!1 !== this.dataZoomModel.get("show") ? (n && "dataZoom" === n.type && n.from === this.uid || this._buildView(), this._updateView()) : this.group.removeAll()
		},
		remove: function() {
			iP.superApply(this, "remove", arguments),
			xr(this, "_dispatchZoomAction")
		},
		dispose: function() {
			iP.superApply(this, "dispose", arguments),
			xr(this, "_dispatchZoomAction")
		},
		_buildView: function() {
			var t = this.group;
			t.removeAll(),
			this._resetLocation(),
			this._resetInterval();
			var e = this._displayables.barGroup = new S_;
			this._renderBackground(),
			this._renderHandle(),
			this._renderDataShadow(),
			t.add(e),
			this._positionGroup()
		},
		_resetLocation: function() {
			var t = this.dataZoomModel,
			e = this.api,
			i = this._findCoordRect(),
			n = {
				width: e.getWidth(),
				height: e.getHeight()
			},
			o = this._orient === Qk ? {
				right: n.width - i.x - i.width,
				top: n.height - 30 - 7,
				width: i.width,
				height: 30
			}: {
				right: 7,
				top: i.y,
				width: 30,
				height: i.height
			},
			a = ea(t.option);
			d(["right", "top", "width", "height"],
			function(t) {
				"ph" === a[t] && (a[t] = o[t])
			});
			var r = Ko(a, n, t.padding);
			this._location = {
				x: r.x,
				y: r.y
			},
			this._size = [r.width, r.height],
			"vertical" === this._orient && this._size.reverse()
		},
		_positionGroup: function() {
			var t = this.group,
			e = this._location,
			i = this._orient,
			n = this.dataZoomModel.getFirstTargetAxisModel(),
			o = n && n.get("inverse"),
			a = this._displayables.barGroup,
			r = (this._dataShadowInfo || {}).otherAxisInverse;
			a.attr(i !== Qk || o ? i === Qk && o ? {
				scale: r ? [ - 1, 1] : [ - 1, -1]
			}: "vertical" !== i || o ? {
				scale: r ? [ - 1, -1] : [ - 1, 1],
				rotation: Math.PI / 2
			}: {
				scale: r ? [1, -1] : [1, 1],
				rotation: Math.PI / 2
			}: {
				scale: r ? [1, 1] : [1, -1]
			});
			var s = t.getBoundingRect([a]);
			t.attr("position", [e.x - s.x, e.y - s.y])
		},
		_getViewExtent: function() {
			return [0, this._size[0]]
		},
		_renderBackground: function() {
			var t = this.dataZoomModel,
			e = this._size,
			i = this._displayables.barGroup;
			i.add(new Yk({
				silent: !0,
				shape: {
					x: 0,
					y: 0,
					width: e[0],
					height: e[1]
				},
				style: {
					fill: t.get("backgroundColor")
				},
				z2: -40
			})),
			i.add(new Yk({
				shape: {
					x: 0,
					y: 0,
					width: e[0],
					height: e[1]
				},
				style: {
					fill: "transparent"
				},
				z2: 0,
				onclick: m(this._onClickPanelClick, this)
			}))
		},
		_renderDataShadow: function() {
			var t = this._dataShadowInfo = this._prepareDataShadowInfo();
			if (t) {
				var e = this._size,
				i = t.series,
				n = i.getRawData(),
				o = i.getShadowDim ? i.getShadowDim() : t.otherDim;
				if (null != o) {
					var a = n.getDataExtent(o),
					s = .3 * (a[1] - a[0]);
					a = [a[0] - s, a[1] + s];
					var l, h = [0, e[1]],
					u = [0, e[0]],
					c = [[e[0], 0], [0, 0]],
					d = [],
					f = u[1] / (n.count() - 1),
					p = 0,
					g = Math.round(n.count() / e[0]);
					n.each([o],
					function(t, e) {
						if (g > 0 && e % g) p += f;
						else {
							var i = null == t || isNaN(t) || "" === t,
							n = i ? 0 : qk(t, a, h, !0);
							i && !l && e ? (c.push([c[c.length - 1][0], 0]), d.push([d[d.length - 1][0], 0])) : !i && l && (c.push([p, 0]), d.push([p, 0])),
							c.push([p, n]),
							d.push([p, n]),
							p += f,
							l = i
						}
					});
					var m = this.dataZoomModel;
					this._displayables.barGroup.add(new Rb({
						shape: {
							points: c
						},
						style: r({
							fill: m.get("dataBackgroundColor")
						},
						m.getModel("dataBackground.areaStyle").getAreaStyle()),
						silent: !0,
						z2: -20
					})),
					this._displayables.barGroup.add(new Bb({
						shape: {
							points: d
						},
						style: m.getModel("dataBackground.lineStyle").getLineStyle(),
						silent: !0,
						z2: -19
					}))
				}
			}
		},
		_prepareDataShadowInfo: function() {
			var t = this.dataZoomModel,
			e = t.get("showDataShadow");
			if (!1 !== e) {
				var i, n = this.ecModel;
				return t.eachTargetAxis(function(o, a) {
					d(t.getAxisProxy(o.name, a).getTargetSeriesModels(),
					function(t) {
						if (! (i || !0 !== e && l(eP, t.get("type")) < 0)) {
							var r, s = n.getComponent(o.axis, a).axis,
							h = dv(o.name),
							u = t.coordinateSystem;
							null != h && u.getOtherAxis && (r = u.getOtherAxis(s).inverse),
							h = t.getData().mapDimension(h),
							i = {
								thisAxis: s,
								series: t,
								thisDim: o.name,
								otherDim: h,
								otherAxisInverse: r
							}
						}
					},
					this)
				},
				this),
				i
			}
		},
		_renderHandle: function() {
			var t = this._displayables,
			e = t.handles = [],
			i = t.handleLabels = [],
			n = this._displayables.barGroup,
			o = this._size,
			a = this.dataZoomModel;
			n.add(t.filler = new Yk({
				draggable: !0,
				cursor: fv(this._orient),
				drift: Kk(this._onDragMove, this, "all"),
				onmousemove: function(t) {
					Q_(t.event)
				},
				ondragstart: Kk(this._showDataInfo, this, !0),
				ondragend: Kk(this._onDragEnd, this),
				onmouseover: Kk(this._showDataInfo, this, !0),
				onmouseout: Kk(this._showDataInfo, this, !1),
				style: {
					fill: a.get("fillerColor"),
					textPosition: "inside"
				}
			})),
			n.add(new Yk(Gn({
				silent: !0,
				shape: {
					x: 0,
					y: 0,
					width: o[0],
					height: o[1]
				},
				style: {
					stroke: a.get("dataBackgroundColor") || a.get("borderColor"),
					lineWidth: 1,
					fill: "rgba(0,0,0,0)"
				}
			}))),
			Jk([0, 1],
			function(t) {
				var o = xo(a.get("handleIcon"), {
					cursor: fv(this._orient),
					draggable: !0,
					drift: Kk(this._onDragMove, this, t),
					onmousemove: function(t) {
						Q_(t.event)
					},
					ondragend: Kk(this._onDragEnd, this),
					onmouseover: Kk(this._showDataInfo, this, !0),
					onmouseout: Kk(this._showDataInfo, this, !1)
				},
				{
					x: -1,
					y: 0,
					width: 2,
					height: 2
				}),
				r = o.getBoundingRect();
				this._handleHeight = To(a.get("handleSize"), this._size[1]),
				this._handleWidth = r.width / r.height * this._handleHeight,
				o.setStyle(a.getModel("handleStyle").getItemStyle());
				var s = a.get("handleColor");
				null != s && (o.style.fill = s),
				n.add(e[t] = o);
				var l = a.textStyleModel;
				this.group.add(i[t] = new Cb({
					silent: !0,
					invisible: !0,
					style: {
						x: 0,
						y: 0,
						text: "",
						textVerticalAlign: "middle",
						textAlign: "center",
						textFill: l.getTextColor(),
						textFont: l.getFont()
					},
					z2: 10
				}))
			},
			this)
		},
		_resetInterval: function() {
			var t = this._range = this.dataZoomModel.getPercentRange(),
			e = this._getViewExtent();
			this._handleEnds = [qk(t[0], [0, 100], e, !0), qk(t[1], [0, 100], e, !0)]
		},
		_updateInterval: function(t, e) {
			var i = this.dataZoomModel,
			n = this._handleEnds,
			o = this._getViewExtent(),
			a = i.findRepresentativeAxisProxy().getMinMaxSpan(),
			r = [0, 100];
			jD(e, n, o, i.get("zoomLock") ? "all": t, null != a.minSpan ? qk(a.minSpan, r, o, !0) : null, null != a.maxSpan ? qk(a.maxSpan, r, o, !0) : null),
			this._range = $k([qk(n[0], o, r, !0), qk(n[1], o, r, !0)])
		},
		_updateView: function(t) {
			var e = this._displayables,
			i = this._handleEnds,
			n = $k(i.slice()),
			o = this._size;
			Jk([0, 1],
			function(t) {
				var n = e.handles[t],
				a = this._handleHeight;
				n.attr({
					scale: [a / 2, a / 2],
					position: [i[t], o[1] / 2 - a / 2]
				})
			},
			this),
			e.filler.setShape({
				x: n[0],
				y: 0,
				width: n[1] - n[0],
				height: o[1]
			}),
			this._updateDataInfo(t)
		},
		_updateDataInfo: function(t) {
			function e(t) {
				var e = po(n.handles[t].parent, this.group),
				i = mo(0 === t ? "right": "left", e),
				s = this._handleWidth / 2 + tP,
				l = go([c[t] + (0 === t ? -s: s), this._size[1] / 2], e);
				o[t].setStyle({
					x: l[0],
					y: l[1],
					textVerticalAlign: a === Qk ? "middle": i,
					textAlign: a === Qk ? i: "center",
					text: r[t]
				})
			}
			var i = this.dataZoomModel,
			n = this._displayables,
			o = n.handleLabels,
			a = this._orient,
			r = ["", ""];
			if (i.get("showDetail")) {
				var s = i.findRepresentativeAxisProxy();
				if (s) {
					var l = s.getAxisModel().axis,
					h = this._range,
					u = t ? s.calculateDataWindow({
						start: h[0],
						end: h[1]
					}).valueWindow: s.getDataValueWindow();
					r = [this._formatLabel(u[0], l), this._formatLabel(u[1], l)]
				}
			}
			var c = $k(this._handleEnds.slice());
			e.call(this, 0),
			e.call(this, 1)
		},
		_formatLabel: function(t, e) {
			var i = this.dataZoomModel,
			n = i.get("labelFormatter"),
			o = i.get("labelPrecision");
			null != o && "auto" !== o || (o = e.getPixelPrecision());
			var a = null == t || isNaN(t) ? "": "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(o, 20));
			return x(n) ? n(t, a) : _(n) ? n.replace("{value}", a) : a
		},
		_showDataInfo: function(t) {
			t = this._dragging || t;
			var e = this._displayables.handleLabels;
			e[0].attr("invisible", !t),
			e[1].attr("invisible", !t)
		},
		_onDragMove: function(t, e, i) {
			this._dragging = !0;
			var n = go([e, i], this._displayables.barGroup.getLocalTransform(), !0);
			this._updateInterval(t, n[0]);
			var o = this.dataZoomModel.get("realtime");
			this._updateView(!o),
			o && this._dispatchZoomAction()
		},
		_onDragEnd: function() {
			this._dragging = !1,
			this._showDataInfo(!1),
			!this.dataZoomModel.get("realtime") && this._dispatchZoomAction()
		},
		_onClickPanelClick: function(t) {
			var e = this._size,
			i = this._displayables.barGroup.transformCoordToLocal(t.offsetX, t.offsetY);
			if (! (i[0] < 0 || i[0] > e[0] || i[1] < 0 || i[1] > e[1])) {
				var n = this._handleEnds,
				o = (n[0] + n[1]) / 2;
				this._updateInterval("all", i[0] - o),
				this._updateView(),
				this._dispatchZoomAction()
			}
		},
		_dispatchZoomAction: function() {
			var t = this._range;
			this.api.dispatchAction({
				type: "dataZoom",
				from: this.uid,
				dataZoomId: this.dataZoomModel.id,
				start: t[0],
				end: t[1]
			})
		},
		_findCoordRect: function() {
			var t;
			if (Jk(this.getTargetCoordInfo(),
			function(e) {
				if (!t && e.length) {
					var i = e[0].model.coordinateSystem;
					t = i.getRect && i.getRect()
				}
			}), !t) {
				var e = this.api.getWidth(),
				i = this.api.getHeight();
				t = {
					x: .2 * e,
					y: .2 * i,
					width: .6 * e,
					height: .6 * i
				}
			}
			return t
		}
	});
	jk.extend({
		type: "dataZoom.inside",
		defaultOption: {
			disabled: !1,
			zoomLock: !1,
			zoomOnMouseWheel: !0,
			moveOnMouseMove: !0,
			preventDefaultMouseMove: !0
		}
	});
	var nP = v,
	oP = "\0_ec_dataZoom_roams",
	aP = m,
	rP = Xk.extend({
		type: "dataZoom.inside",
		init: function(t, e) {
			this._range
		},
		render: function(t, e, i, n) {
			rP.superApply(this, "render", arguments),
			mv(n, t.id) && (this._range = t.getPercentRange()),
			d(this.getTargetCoordInfo(),
			function(e, n) {
				var o = f(e,
				function(t) {
					return vv(t.model)
				});
				d(e,
				function(e) {
					var a = e.model,
					r = t.option;
					pv(i, {
						coordId: vv(a),
						allCoordIds: o,
						containsPoint: function(t, e, i) {
							return a.coordinateSystem.containPoint([e, i])
						},
						dataZoomId: t.id,
						throttleRate: t.get("throttle", !0),
						panGetRange: aP(this._onPan, this, e, n),
						zoomGetRange: aP(this._onZoom, this, e, n),
						zoomLock: r.zoomLock,
						disabled: r.disabled,
						roamControllerOpt: {
							zoomOnMouseWheel: r.zoomOnMouseWheel,
							moveOnMouseMove: r.moveOnMouseMove,
							preventDefaultMouseMove: r.preventDefaultMouseMove
						}
					})
				},
				this)
			},
			this)
		},
		dispose: function() {
			gv(this.api, this.dataZoomModel.id),
			rP.superApply(this, "dispose", arguments),
			this._range = null
		},
		_onPan: function(t, e, i, n, o, a, r, s, l) {
			var h = this._range.slice(),
			u = t.axisModels[0];
			if (u) {
				var c = sP[e]([a, r], [s, l], u, i, t),
				d = c.signal * (h[1] - h[0]) * c.pixel / c.pixelLength;
				return jD(d, h, [0, 100], "all"),
				this._range = h
			}
		},
		_onZoom: function(t, e, i, n, o, a) {
			var r = this._range.slice(),
			s = t.axisModels[0];
			if (s) {
				var l = sP[e](null, [o, a], s, i, t),
				h = (l.signal > 0 ? l.pixelStart + l.pixelLength - l.pixel: l.pixel - l.pixelStart) / l.pixelLength * (r[1] - r[0]) + r[0];
				n = Math.max(1 / n, 0),
				r[0] = (r[0] - h) * n + h,
				r[1] = (r[1] - h) * n + h;
				var u = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
				return jD(0, r, [0, 100], 0, u.minSpan, u.maxSpan),
				this._range = r
			}
		}
	}),
	sP = {
		grid: function(t, e, i, n, o) {
			var a = i.axis,
			r = {},
			s = o.model.coordinateSystem.getRect();
			return t = t || [0, 0],
			"x" === a.dim ? (r.pixel = e[0] - t[0], r.pixelLength = s.width, r.pixelStart = s.x, r.signal = a.inverse ? 1 : -1) : (r.pixel = e[1] - t[1], r.pixelLength = s.height, r.pixelStart = s.y, r.signal = a.inverse ? -1 : 1),
			r
		},
		polar: function(t, e, i, n, o) {
			var a = i.axis,
			r = {},
			s = o.model.coordinateSystem,
			l = s.getRadiusAxis().getExtent(),
			h = s.getAngleAxis().getExtent();
			return t = t ? s.pointToCoord(t) : [0, 0],
			e = s.pointToCoord(e),
			"radiusAxis" === i.mainType ? (r.pixel = e[0] - t[0], r.pixelLength = l[1] - l[0], r.pixelStart = l[0], r.signal = a.inverse ? 1 : -1) : (r.pixel = e[1] - t[1], r.pixelLength = h[1] - h[0], r.pixelStart = h[0], r.signal = a.inverse ? -1 : 1),
			r
		},
		singleAxis: function(t, e, i, n, o) {
			var a = i.axis,
			r = o.model.coordinateSystem.getRect(),
			s = {};
			return t = t || [0, 0],
			"horizontal" === a.orient ? (s.pixel = e[0] - t[0], s.pixelLength = r.width, s.pixelStart = r.x, s.signal = a.inverse ? 1 : -1) : (s.pixel = e[1] - t[1], s.pixelLength = r.height, s.pixelStart = r.y, s.signal = a.inverse ? -1 : 1),
			s
		}
	};
	ls({
		getTargetSeries: function(t) {
			var e = z();
			return t.eachComponent("dataZoom",
			function(t) {
				t.eachTargetAxis(function(t, i, n) {
					d(n.getAxisProxy(t.name, i).getTargetSeriesModels(),
					function(t) {
						e.set(t.uid, t)
					})
				})
			}),
			e
		},
		isOverallFilter: !0,
		overallReset: function(t, e) {
			t.eachComponent("dataZoom",
			function(t) {
				t.eachTargetAxis(function(t, i, n) {
					n.getAxisProxy(t.name, i).reset(n, e)
				}),
				t.eachTargetAxis(function(t, i, n) {
					n.getAxisProxy(t.name, i).filterData(n, e)
				})
			}),
			t.eachComponent("dataZoom",
			function(t) {
				var e = t.findRepresentativeAxisProxy(),
				i = e.getDataPercentWindow(),
				n = e.getDataValueWindow();
				t.setRawRange({
					start: i[0],
					end: i[1],
					startValue: n[0],
					endValue: n[1]
				},
				!0)
			})
		}
	}),
	hs("dataZoom",
	function(t, e) {
		var i = av(m(e.eachComponent, e, "dataZoom"), Gk,
		function(t, e) {
			return t.get(e.axisIndex)
		}),
		n = [];
		e.eachComponent({
			mainType: "dataZoom",
			query: t
		},
		function(t, e) {
			n.push.apply(n, i(t).nodes)
		}),
		d(n,
		function(e, i) {
			e.setRawRange({
				start: t.start,
				end: t.end,
				startValue: t.startValue,
				endValue: t.endValue
			})
		})
	});
	var lP = d,
	hP = function(t) {
		var e = t && t.visualMap;
		y(e) || (e = e ? [e] : []),
		lP(e,
		function(t) {
			if (t) {
				Tv(t, "splitList") && !Tv(t, "pieces") && (t.pieces = t.splitList, delete t.splitList);
				var e = t.pieces;
				e && y(e) && lP(e,
				function(t) {
					w(t) && (Tv(t, "start") && !Tv(t, "min") && (t.min = t.start), Tv(t, "end") && !Tv(t, "max") && (t.max = t.end))
				})
			}
		})
	};
	IS.registerSubTypeDefaulter("visualMap",
	function(t) {
		return t.categories || (t.pieces ? t.pieces.length > 0 : t.splitNumber > 0) && !t.calculable ? "piecewise": "continuous"
	});
	var uP = FM.VISUAL.COMPONENT;
	ds(uP, {
		createOnAllSeries: !0,
		reset: function(t, e) {
			var i = [];
			return e.eachComponent("visualMap",
			function(e) {
				e.isTargetSeries(t) && i.push(Cm(e.stateList, e.targetVisuals, m(e.getValueState, e), e.getDataDimension(t.getData())))
			}),
			i
		}
	}),
	ds(uP, {
		createOnAllSeries: !0,
		reset: function(t, e) {
			var i = t.getData(),
			n = [];
			e.eachComponent("visualMap",
			function(e) {
				if (e.isTargetSeries(t)) {
					var o = e.getVisualMeta(m(Av, null, t, e)) || {
						stops: [],
						outerColors: []
					},
					a = e.getDataDimension(i),
					r = i.getDimensionInfo(a);
					null != r && (o.dimension = r.index, n.push(o))
				}
			}),
			t.getData().setVisual("visualMeta", n)
		}
	});
	var cP = {
		get: function(t, e, n) {
			var o = i((dP[t] || {})[e]);
			return n && y(o) ? o[o.length - 1] : o
		}
	},
	dP = {
		color: {
			active: ["#006edd", "#e0ffff"],
			inactive: ["rgba(0,0,0,0)"]
		},
		colorHue: {
			active: [0, 360],
			inactive: [0, 0]
		},
		colorSaturation: {
			active: [.3, 1],
			inactive: [0, 0]
		},
		colorLightness: {
			active: [.9, .5],
			inactive: [0, 0]
		},
		colorAlpha: {
			active: [.3, 1],
			inactive: [0, 0]
		},
		opacity: {
			active: [.3, 1],
			inactive: [0, 0]
		},
		symbol: {
			active: ["circle", "roundRect", "diamond"],
			inactive: ["none"]
		},
		symbolSize: {
			active: [10, 50],
			inactive: [0, 0]
		}
	},
	fP = oD.mapVisual,
	pP = oD.eachVisual,
	gP = y,
	mP = d,
	vP = Do,
	yP = Io,
	xP = B,
	_P = gs({
		type: "visualMap",
		dependencies: ["series"],
		stateList: ["inRange", "outOfRange"],
		replacableOptionKeys: ["inRange", "outOfRange", "target", "controller", "color"],
		dataBound: [ - 1 / 0, 1 / 0],
		layoutMode: {
			type: "box",
			ignoreSize: !0
		},
		defaultOption: {
			show: !0,
			zlevel: 0,
			z: 4,
			seriesIndex: "all",
			min: 0,
			max: 200,
			dimension: null,
			inRange: null,
			outOfRange: null,
			left: 0,
			right: null,
			top: null,
			bottom: 0,
			itemWidth: null,
			itemHeight: null,
			inverse: !1,
			orient: "vertical",
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			contentColor: "#5793f3",
			inactiveColor: "#aaa",
			borderWidth: 0,
			padding: 5,
			textGap: 10,
			precision: 0,
			color: null,
			formatter: null,
			text: null,
			textStyle: {
				color: "#333"
			}
		},
		init: function(t, e, i) {
			this._dataExtent,
			this.targetVisuals = {},
			this.controllerVisuals = {},
			this.textStyleModel,
			this.itemSize,
			this.mergeDefaultAndTheme(t, i)
		},
		optionUpdated: function(t, e) {
			var i = this.option;
			_x.canvasSupported || (i.realtime = !1),
			!e && Am(i, t, this.replacableOptionKeys),
			this.textStyleModel = this.getModel("textStyle"),
			this.resetItemSize(),
			this.completeVisualOption()
		},
		resetVisual: function(t) {
			var e = this.stateList;
			t = m(t, this),
			this.controllerVisuals = Tm(this.option.controller, e, t),
			this.targetVisuals = Tm(this.option.target, e, t)
		},
		getTargetSeriesIndices: function() {
			var t = this.option.seriesIndex,
			e = [];
			return null == t || "all" === t ? this.ecModel.eachSeries(function(t, i) {
				e.push(i)
			}) : e = Si(t),
			e
		},
		eachTargetSeries: function(t, e) {
			d(this.getTargetSeriesIndices(),
			function(i) {
				t.call(e, this.ecModel.getSeriesByIndex(i))
			},
			this)
		},
		isTargetSeries: function(t) {
			var e = !1;
			return this.eachTargetSeries(function(i) {
				i === t && (e = !0)
			}),
			e
		},
		formatValueText: function(t, e, i) {
			function n(t) {
				return t === l[0] ? "min": t === l[1] ? "max": ( + t).toFixed(Math.min(s, 20))
			}
			var o, a, r = this.option,
			s = r.precision,
			l = this.dataBound,
			h = r.formatter;
			return i = i || ["<", ">"],
			y(t) && (t = t.slice(), o = !0),
			a = e ? t: o ? [n(t[0]), n(t[1])] : n(t),
			_(h) ? h.replace("{value}", o ? a[0] : a).replace("{value2}", o ? a[1] : a) : x(h) ? o ? h(t[0], t[1]) : h(t) : o ? t[0] === l[0] ? i[0] + " " + a[1] : t[1] === l[1] ? i[1] + " " + a[0] : a[0] + " - " + a[1] : a
		},
		resetExtent: function() {
			var t = this.option,
			e = vP([t.min, t.max]);
			this._dataExtent = e
		},
		getDataDimension: function(t) {
			var e = this.option.dimension,
			i = t.dimensions;
			if (null != e || i.length) return t.getDimension(null != e ? e: i.length - 1)
		},
		getExtent: function() {
			return this._dataExtent.slice()
		},
		completeVisualOption: function() {
			function t(t) {
				gP(o.color) && !t.inRange && (t.inRange = {
					color: o.color.slice().reverse()
				}),
				t.inRange = t.inRange || {
					color: e.get("gradientColor")
				},
				mP(this.stateList,
				function(e) {
					var i = t[e];
					if (_(i)) {
						var n = cP.get(i, "active", l);
						n ? (t[e] = {},
						t[e][i] = n) : delete t[e]
					}
				},
				this)
			}
			var e = this.ecModel,
			o = this.option,
			a = {
				inRange: o.inRange,
				outOfRange: o.outOfRange
			},
			r = o.target || (o.target = {}),
			s = o.controller || (o.controller = {});
			n(r, a),
			n(s, a);
			var l = this.isCategory();
			t.call(this, r),
			t.call(this, s),
			function(t, e, i) {
				var n = t[e],
				o = t[i];
				n && !o && (o = t[i] = {},
				mP(n,
				function(t, e) {
					if (oD.isValidType(e)) {
						var i = cP.get(e, "inactive", l);
						null != i && (o[e] = i, "color" !== e || o.hasOwnProperty("opacity") || o.hasOwnProperty("colorAlpha") || (o.opacity = [0, 0]))
					}
				}))
			}.call(this, r, "inRange", "outOfRange"),
			function(t) {
				var e = (t.inRange || {}).symbol || (t.outOfRange || {}).symbol,
				n = (t.inRange || {}).symbolSize || (t.outOfRange || {}).symbolSize,
				o = this.get("inactiveColor");
				mP(this.stateList,
				function(a) {
					var r = this.itemSize,
					s = t[a];
					s || (s = t[a] = {
						color: l ? o: [o]
					}),
					null == s.symbol && (s.symbol = e && i(e) || (l ? "roundRect": ["roundRect"])),
					null == s.symbolSize && (s.symbolSize = n && i(n) || (l ? r[0] : [r[0], r[0]])),
					s.symbol = fP(s.symbol,
					function(t) {
						return "none" === t || "square" === t ? "roundRect": t
					});
					var h = s.symbolSize;
					if (null != h) {
						var u = -1 / 0;
						pP(h,
						function(t) {
							t > u && (u = t)
						}),
						s.symbolSize = fP(h,
						function(t) {
							return yP(t, [0, u], [0, r[0]], !0)
						})
					}
				},
				this)
			}.call(this, s)
		},
		resetItemSize: function() {
			this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))]
		},
		isCategory: function() {
			return !! this.option.categories
		},
		setSelected: xP,
		getValueState: xP,
		getVisualMeta: xP
	}),
	wP = [20, 140],
	bP = _P.extend({
		type: "visualMap.continuous",
		defaultOption: {
			align: "auto",
			calculable: !1,
			range: null,
			realtime: !0,
			itemHeight: null,
			itemWidth: null,
			hoverLink: !0,
			hoverLinkDataSize: null,
			hoverLinkOnHandle: null
		},
		optionUpdated: function(t, e) {
			bP.superApply(this, "optionUpdated", arguments),
			this.resetExtent(),
			this.resetVisual(function(t) {
				t.mappingMethod = "linear",
				t.dataExtent = this.getExtent()
			}),
			this._resetRange()
		},
		resetItemSize: function() {
			bP.superApply(this, "resetItemSize", arguments);
			var t = this.itemSize;
			"horizontal" === this._orient && t.reverse(),
			(null == t[0] || isNaN(t[0])) && (t[0] = wP[0]),
			(null == t[1] || isNaN(t[1])) && (t[1] = wP[1])
		},
		_resetRange: function() {
			var t = this.getExtent(),
			e = this.option.range; ! e || e.auto ? (t.auto = 1, this.option.range = t) : y(e) && (e[0] > e[1] && e.reverse(), e[0] = Math.max(e[0], t[0]), e[1] = Math.min(e[1], t[1]))
		},
		completeVisualOption: function() {
			_P.prototype.completeVisualOption.apply(this, arguments),
			d(this.stateList,
			function(t) {
				var e = this.option.controller[t].symbolSize;
				e && e[0] !== e[1] && (e[0] = 0)
			},
			this)
		},
		setSelected: function(t) {
			this.option.range = t.slice(),
			this._resetRange()
		},
		getSelected: function() {
			var t = this.getExtent(),
			e = Do((this.get("range") || []).slice());
			return e[0] > t[1] && (e[0] = t[1]),
			e[1] > t[1] && (e[1] = t[1]),
			e[0] < t[0] && (e[0] = t[0]),
			e[1] < t[0] && (e[1] = t[0]),
			e
		},
		getValueState: function(t) {
			var e = this.option.range,
			i = this.getExtent();
			return (e[0] <= i[0] || e[0] <= t) && (e[1] >= i[1] || t <= e[1]) ? "inRange": "outOfRange"
		},
		findTargetDataIndices: function(t) {
			var e = [];
			return this.eachTargetSeries(function(i) {
				var n = [],
				o = i.getData();
				o.each(this.getDataDimension(o),
				function(e, i) {
					t[0] <= e && e <= t[1] && n.push(i)
				},
				!0, this),
				e.push({
					seriesId: i.id,
					dataIndex: n
				})
			},
			this),
			e
		},
		getVisualMeta: function(t) {
			function e(e, i) {
				o.push({
					value: e,
					color: t(e, i)
				})
			}
			for (var i = Dv(0, 0, this.getExtent()), n = Dv(0, 0, this.option.range.slice()), o = [], a = 0, r = 0, s = n.length, l = i.length; r < l && (!n.length || i[r] <= n[0]); r++) i[r] < n[a] && e(i[r], "outOfRange");
			for (h = 1; a < s; a++, h = 0) h && o.length && e(n[a], "outOfRange"),
			e(n[a], "inRange");
			for (var h = 1; r < l; r++)(!n.length || n[n.length - 1] < i[r]) && (h && (o.length && e(o[o.length - 1].value, "outOfRange"), h = 0), e(i[r], "outOfRange"));
			var u = o.length;
			return {
				stops: o,
				outerColors: [u ? o[0].color: "transparent", u ? o[u - 1].color: "transparent"]
			}
		}
	}),
	SP = ms({
		type: "visualMap",
		autoPositionValues: {
			left: 1,
			right: 1,
			top: 1,
			bottom: 1
		},
		init: function(t, e) {
			this.ecModel = t,
			this.api = e,
			this.visualMapModel
		},
		render: function(t, e, i, n) {
			this.visualMapModel = t,
			!1 !== t.get("show") ? this.doRender.apply(this, arguments) : this.group.removeAll()
		},
		renderBackground: function(t) {
			var e = this.visualMapModel,
			i = dS(e.get("padding") || 0),
			n = t.getBoundingRect();
			t.add(new Vb({
				z2: -1,
				silent: !0,
				shape: {
					x: n.x - i[3],
					y: n.y - i[0],
					width: n.width + i[3] + i[1],
					height: n.height + i[0] + i[2]
				},
				style: {
					fill: e.get("backgroundColor"),
					stroke: e.get("borderColor"),
					lineWidth: e.get("borderWidth")
				}
			}))
		},
		getControllerVisual: function(t, e, i) {
			function n(t) {
				return s[t]
			}
			function o(t, e) {
				s[t] = e
			}
			var a = (i = i || {}).forceState,
			r = this.visualMapModel,
			s = {};
			if ("symbol" === e && (s.symbol = r.get("itemSymbol")), "color" === e) {
				var l = r.get("contentColor");
				s.color = l
			}
			var h = r.controllerVisuals[a || r.getValueState(t)];
			return d(oD.prepareVisualTypes(h),
			function(a) {
				var r = h[a];
				i.convertOpacityToAlpha && "opacity" === a && (a = "colorAlpha", r = h.__alphaForOpacity),
				oD.dependsOn(a, e) && r && r.applyVisual(t, n, o)
			}),
			s[e]
		},
		positionGroup: function(t) {
			var e = this.visualMapModel,
			i = this.api;
			Jo(t, e.getBoxLayoutParams(), {
				width: i.getWidth(),
				height: i.getHeight()
			})
		},
		doRender: B
	}),
	MP = Io,
	IP = d,
	TP = Math.min,
	AP = Math.max,
	DP = 12,
	CP = 6,
	LP = SP.extend({
		type: "visualMap.continuous",
		init: function() {
			LP.superApply(this, "init", arguments),
			this._shapes = {},
			this._dataInterval = [],
			this._handleEnds = [],
			this._orient,
			this._useHandle,
			this._hoverLinkDataIndices = [],
			this._dragging,
			this._hovering
		},
		doRender: function(t, e, i, n) {
			n && "selectDataRange" === n.type && n.from === this.uid || this._buildView()
		},
		_buildView: function() {
			this.group.removeAll();
			var t = this.visualMapModel,
			e = this.group;
			this._orient = t.get("orient"),
			this._useHandle = t.get("calculable"),
			this._resetInterval(),
			this._renderBar(e);
			var i = t.get("text");
			this._renderEndsText(e, i, 0),
			this._renderEndsText(e, i, 1),
			this._updateView(!0),
			this.renderBackground(e),
			this._updateView(),
			this._enableHoverLinkToSeries(),
			this._enableHoverLinkFromSeries(),
			this.positionGroup(e)
		},
		_renderEndsText: function(t, e, i) {
			if (e) {
				var n = e[1 - i];
				n = null != n ? n + "": "";
				var o = this.visualMapModel,
				a = o.get("textGap"),
				r = o.itemSize,
				s = this._shapes.barGroup,
				l = this._applyTransform([r[0] / 2, 0 === i ? -a: r[1] + a], s),
				h = this._applyTransform(0 === i ? "bottom": "top", s),
				u = this._orient,
				c = this.visualMapModel.textStyleModel;
				this.group.add(new Cb({
					style: {
						x: l[0],
						y: l[1],
						textVerticalAlign: "horizontal" === u ? "middle": h,
						textAlign: "horizontal" === u ? h: "center",
						text: n,
						textFont: c.getFont(),
						textFill: c.getTextColor()
					}
				}))
			}
		},
		_renderBar: function(t) {
			var e = this.visualMapModel,
			i = this._shapes,
			n = e.itemSize,
			o = this._orient,
			a = this._useHandle,
			r = Cv(e, this.api, n),
			s = i.barGroup = this._createBarGroup(r);
			s.add(i.outOfRange = kv()),
			s.add(i.inRange = kv(null, a ? zv(this._orient) : null, m(this._dragHandle, this, "all", !1), m(this._dragHandle, this, "all", !0)));
			var l = e.textStyleModel.getTextRect("国"),
			h = AP(l.width, l.height);
			a && (i.handleThumbs = [], i.handleLabels = [], i.handleLabelPoints = [], this._createHandle(s, 0, n, h, o, r), this._createHandle(s, 1, n, h, o, r)),
			this._createIndicator(s, n, h, o),
			t.add(s)
		},
		_createHandle: function(t, e, i, n, o) {
			var a = m(this._dragHandle, this, e, !1),
			r = m(this._dragHandle, this, e, !0),
			s = kv(Pv(e, n), zv(this._orient), a, r);
			s.position[0] = i[0],
			t.add(s);
			var l = this.visualMapModel.textStyleModel,
			h = new Cb({
				draggable: !0,
				drift: a,
				onmousemove: function(t) {
					Q_(t.event)
				},
				ondragend: r,
				style: {
					x: 0,
					y: 0,
					text: "",
					textFont: l.getFont(),
					textFill: l.getTextColor()
				}
			});
			this.group.add(h);
			var u = ["horizontal" === o ? n / 2 : 1.5 * n, "horizontal" === o ? 0 === e ? -1.5 * n: 1.5 * n: 0 === e ? -n / 2 : n / 2],
			c = this._shapes;
			c.handleThumbs[e] = s,
			c.handleLabelPoints[e] = u,
			c.handleLabels[e] = h
		},
		_createIndicator: function(t, e, i, n) {
			var o = kv([[0, 0]], "move");
			o.position[0] = e[0],
			o.attr({
				invisible: !0,
				silent: !0
			}),
			t.add(o);
			var a = this.visualMapModel.textStyleModel,
			r = new Cb({
				silent: !0,
				invisible: !0,
				style: {
					x: 0,
					y: 0,
					text: "",
					textFont: a.getFont(),
					textFill: a.getTextColor()
				}
			});
			this.group.add(r);
			var s = ["horizontal" === n ? i / 2 : CP + 3, 0],
			l = this._shapes;
			l.indicator = o,
			l.indicatorLabel = r,
			l.indicatorLabelPoint = s
		},
		_dragHandle: function(t, e, i, n) {
			if (this._useHandle) {
				if (this._dragging = !e, !e) {
					var o = this._applyTransform([i, n], this._shapes.barGroup, !0);
					this._updateInterval(t, o[1]),
					this._updateView()
				}
				e === !this.visualMapModel.get("realtime") && this.api.dispatchAction({
					type: "selectDataRange",
					from: this.uid,
					visualMapId: this.visualMapModel.id,
					selected: this._dataInterval.slice()
				}),
				e ? !this._hovering && this._clearHoverLinkToSeries() : Ev(this.visualMapModel) && this._doHoverLinkToSeries(this._handleEnds[t], !1)
			}
		},
		_resetInterval: function() {
			var t = this.visualMapModel,
			e = this._dataInterval = t.getSelected(),
			i = t.getExtent(),
			n = [0, t.itemSize[1]];
			this._handleEnds = [MP(e[0], i, n, !0), MP(e[1], i, n, !0)]
		},
		_updateInterval: function(t, e) {
			e = e || 0;
			var i = this.visualMapModel,
			n = this._handleEnds,
			o = [0, i.itemSize[1]];
			jD(e, n, o, t, 0);
			var a = i.getExtent();
			this._dataInterval = [MP(n[0], o, a, !0), MP(n[1], o, a, !0)]
		},
		_updateView: function(t) {
			var e = this.visualMapModel,
			i = e.getExtent(),
			n = this._shapes,
			o = [0, e.itemSize[1]],
			a = t ? o: this._handleEnds,
			r = this._createBarVisual(this._dataInterval, i, a, "inRange"),
			s = this._createBarVisual(i, i, o, "outOfRange");
			n.inRange.setStyle({
				fill: r.barColor,
				opacity: r.opacity
			}).setShape("points", r.barPoints),
			n.outOfRange.setStyle({
				fill: s.barColor,
				opacity: s.opacity
			}).setShape("points", s.barPoints),
			this._updateHandle(a, r)
		},
		_createBarVisual: function(t, e, i, n) {
			var o = {
				forceState: n,
				convertOpacityToAlpha: !0
			},
			a = this._makeColorGradient(t, o),
			r = [this.getControllerVisual(t[0], "symbolSize", o), this.getControllerVisual(t[1], "symbolSize", o)],
			s = this._createBarPoints(i, r);
			return {
				barColor: new jb(0, 0, 0, 1, a),
				barPoints: s,
				handlesColor: [a[0].color, a[a.length - 1].color]
			}
		},
		_makeColorGradient: function(t, e) {
			var i = [],
			n = (t[1] - t[0]) / 100;
			i.push({
				color: this.getControllerVisual(t[0], "color", e),
				offset: 0
			});
			for (var o = 1; o < 100; o++) {
				var a = t[0] + n * o;
				if (a > t[1]) break;
				i.push({
					color: this.getControllerVisual(a, "color", e),
					offset: o / 100
				})
			}
			return i.push({
				color: this.getControllerVisual(t[1], "color", e),
				offset: 1
			}),
			i
		},
		_createBarPoints: function(t, e) {
			var i = this.visualMapModel.itemSize;
			return [[i[0] - e[0], t[0]], [i[0], t[0]], [i[0], t[1]], [i[0] - e[1], t[1]]]
		},
		_createBarGroup: function(t) {
			var e = this._orient,
			i = this.visualMapModel.get("inverse");
			return new S_("horizontal" !== e || i ? "horizontal" === e && i ? {
				scale: "bottom" === t ? [ - 1, 1] : [1, 1],
				rotation: -Math.PI / 2
			}: "vertical" !== e || i ? {
				scale: "left" === t ? [1, 1] : [ - 1, 1]
			}: {
				scale: "left" === t ? [1, -1] : [ - 1, -1]
			}: {
				scale: "bottom" === t ? [1, 1] : [ - 1, 1],
				rotation: Math.PI / 2
			})
		},
		_updateHandle: function(t, e) {
			if (this._useHandle) {
				var i = this._shapes,
				n = this.visualMapModel,
				o = i.handleThumbs,
				a = i.handleLabels;
				IP([0, 1],
				function(r) {
					var s = o[r];
					s.setStyle("fill", e.handlesColor[r]),
					s.position[1] = t[r];
					var l = go(i.handleLabelPoints[r], po(s, this.group));
					a[r].setStyle({
						x: l[0],
						y: l[1],
						text: n.formatValueText(this._dataInterval[r]),
						textVerticalAlign: "middle",
						textAlign: this._applyTransform("horizontal" === this._orient ? 0 === r ? "bottom": "top": "left", i.barGroup)
					})
				},
				this)
			}
		},
		_showIndicator: function(t, e, i, n) {
			var o = this.visualMapModel,
			a = o.getExtent(),
			r = o.itemSize,
			s = [0, r[1]],
			l = MP(t, a, s, !0),
			h = this._shapes,
			u = h.indicator;
			if (u) {
				u.position[1] = l,
				u.attr("invisible", !1),
				u.setShape("points", Ov( !! i, n, l, r[1]));
				var c = {
					convertOpacityToAlpha: !0
				},
				d = this.getControllerVisual(t, "color", c);
				u.setStyle("fill", d);
				var f = go(h.indicatorLabelPoint, po(u, this.group)),
				p = h.indicatorLabel;
				p.attr("invisible", !1);
				var g = this._applyTransform("left", h.barGroup),
				m = this._orient;
				p.setStyle({
					text: (i || "") + o.formatValueText(e),
					textVerticalAlign: "horizontal" === m ? g: "middle",
					textAlign: "horizontal" === m ? "center": g,
					x: f[0],
					y: f[1]
				})
			}
		},
		_enableHoverLinkToSeries: function() {
			var t = this;
			this._shapes.barGroup.on("mousemove",
			function(e) {
				if (t._hovering = !0, !t._dragging) {
					var i = t.visualMapModel.itemSize,
					n = t._applyTransform([e.offsetX, e.offsetY], t._shapes.barGroup, !0, !0);
					n[1] = TP(AP(0, n[1]), i[1]),
					t._doHoverLinkToSeries(n[1], 0 <= n[0] && n[0] <= i[0])
				}
			}).on("mouseout",
			function() {
				t._hovering = !1,
				!t._dragging && t._clearHoverLinkToSeries()
			})
		},
		_enableHoverLinkFromSeries: function() {
			var t = this.api.getZr();
			this.visualMapModel.option.hoverLink ? (t.on("mouseover", this._hoverLinkFromSeriesMouseOver, this), t.on("mouseout", this._hideIndicator, this)) : this._clearHoverLinkFromSeries()
		},
		_doHoverLinkToSeries: function(t, e) {
			var i = this.visualMapModel,
			n = i.itemSize;
			if (i.option.hoverLink) {
				var o = [0, n[1]],
				a = i.getExtent();
				t = TP(AP(o[0], t), o[1]);
				var r = Nv(i, a, o),
				s = [t - r, t + r],
				l = MP(t, o, a, !0),
				h = [MP(s[0], o, a, !0), MP(s[1], o, a, !0)];
				s[0] < o[0] && (h[0] = -1 / 0),
				s[1] > o[1] && (h[1] = 1 / 0),
				e && (h[0] === -1 / 0 ? this._showIndicator(l, h[1], "< ", r) : h[1] === 1 / 0 ? this._showIndicator(l, h[0], "> ", r) : this._showIndicator(l, l, "≈ ", r));
				var u = this._hoverLinkDataIndices,
				c = []; (e || Ev(i)) && (c = this._hoverLinkDataIndices = i.findTargetDataIndices(h));
				var d = Li(u, c);
				this._dispatchHighDown("downplay", Lv(d[0])),
				this._dispatchHighDown("highlight", Lv(d[1]))
			}
		},
		_hoverLinkFromSeriesMouseOver: function(t) {
			var e = t.target,
			i = this.visualMapModel;
			if (e && null != e.dataIndex) {
				var n = this.ecModel.getSeriesByIndex(e.seriesIndex);
				if (i.isTargetSeries(n)) {
					var o = n.getData(e.dataType),
					a = o.get(i.getDataDimension(o), e.dataIndex, !0);
					isNaN(a) || this._showIndicator(a, a)
				}
			}
		},
		_hideIndicator: function() {
			var t = this._shapes;
			t.indicator && t.indicator.attr("invisible", !0),
			t.indicatorLabel && t.indicatorLabel.attr("invisible", !0)
		},
		_clearHoverLinkToSeries: function() {
			this._hideIndicator();
			var t = this._hoverLinkDataIndices;
			this._dispatchHighDown("downplay", Lv(t)),
			t.length = 0
		},
		_clearHoverLinkFromSeries: function() {
			this._hideIndicator();
			var t = this.api.getZr();
			t.off("mouseover", this._hoverLinkFromSeriesMouseOver),
			t.off("mouseout", this._hideIndicator)
		},
		_applyTransform: function(t, e, i, n) {
			var o = po(e, n ? null: this.group);
			return tS[y(t) ? "applyTransform": "transformDirection"](t, o, i)
		},
		_dispatchHighDown: function(t, e) {
			e && e.length && this.api.dispatchAction({
				type: t,
				batch: e
			})
		},
		dispose: function() {
			this._clearHoverLinkFromSeries(),
			this._clearHoverLinkToSeries()
		},
		remove: function() {
			this._clearHoverLinkFromSeries(),
			this._clearHoverLinkToSeries()
		}
	});
	hs({
		type: "selectDataRange",
		event: "dataRangeSelected",
		update: "update"
	},
	function(t, e) {
		e.eachComponent({
			mainType: "visualMap",
			query: t
		},
		function(e) {
			e.setSelected(t.selected)
		})
	}),
	ss(hP);
	var kP = _P.extend({
		type: "visualMap.piecewise",
		defaultOption: {
			selected: null,
			minOpen: !1,
			maxOpen: !1,
			align: "auto",
			itemWidth: 20,
			itemHeight: 14,
			itemSymbol: "roundRect",
			pieceList: null,
			categories: null,
			splitNumber: 5,
			selectedMode: "multiple",
			itemGap: 10,
			hoverLink: !0,
			showLabel: null
		},
		optionUpdated: function(t, e) {
			kP.superApply(this, "optionUpdated", arguments),
			this._pieceList = [],
			this.resetExtent();
			var n = this._mode = this._determineMode();
			PP[this._mode].call(this),
			this._resetSelected(t, e);
			var o = this.option.categories;
			this.resetVisual(function(t, e) {
				"categories" === n ? (t.mappingMethod = "category", t.categories = i(o)) : (t.dataExtent = this.getExtent(), t.mappingMethod = "piecewise", t.pieceList = f(this._pieceList,
				function(t) {
					var t = i(t);
					return "inRange" !== e && (t.visual = null),
					t
				}))
			})
		},
		completeVisualOption: function() {
			function t(t, e, i) {
				return t && t[e] && (w(t[e]) ? t[e].hasOwnProperty(i) : t[e] === i)
			}
			var e = this.option,
			i = {},
			n = oD.listVisualTypes(),
			o = this.isCategory();
			d(e.pieces,
			function(t) {
				d(n,
				function(e) {
					t.hasOwnProperty(e) && (i[e] = 1)
				})
			}),
			d(i,
			function(i, n) {
				var a = 0;
				d(this.stateList,
				function(i) {
					a |= t(e, i, n) || t(e.target, i, n)
				},
				this),
				!a && d(this.stateList,
				function(t) { (e[t] || (e[t] = {}))[n] = cP.get(n, "inRange" === t ? "active": "inactive", o)
				})
			},
			this),
			_P.prototype.completeVisualOption.apply(this, arguments)
		},
		_resetSelected: function(t, e) {
			var i = this.option,
			n = this._pieceList,
			o = (e ? i: t).selected || {};
			if (i.selected = o, d(n,
			function(t, e) {
				var i = this.getSelectedMapKey(t);
				o.hasOwnProperty(i) || (o[i] = !0)
			},
			this), "single" === i.selectedMode) {
				var a = !1;
				d(n,
				function(t, e) {
					var i = this.getSelectedMapKey(t);
					o[i] && (a ? o[i] = !1 : a = !0)
				},
				this)
			}
		},
		getSelectedMapKey: function(t) {
			return "categories" === this._mode ? t.value + "": t.index + ""
		},
		getPieceList: function() {
			return this._pieceList
		},
		_determineMode: function() {
			var t = this.option;
			return t.pieces && t.pieces.length > 0 ? "pieces": this.option.categories ? "categories": "splitNumber"
		},
		setSelected: function(t) {
			this.option.selected = i(t)
		},
		getValueState: function(t) {
			var e = oD.findPieceIndex(t, this._pieceList);
			return null != e && this.option.selected[this.getSelectedMapKey(this._pieceList[e])] ? "inRange": "outOfRange"
		},
		findTargetDataIndices: function(t) {
			var e = [];
			return this.eachTargetSeries(function(i) {
				var n = [],
				o = i.getData();
				o.each(this.getDataDimension(o),
				function(e, i) {
					oD.findPieceIndex(e, this._pieceList) === t && n.push(i)
				},
				!0, this),
				e.push({
					seriesId: i.id,
					dataIndex: n
				})
			},
			this),
			e
		},
		getRepresentValue: function(t) {
			var e;
			if (this.isCategory()) e = t.value;
			else if (null != t.value) e = t.value;
			else {
				var i = t.interval || [];
				e = i[0] === -1 / 0 && i[1] === 1 / 0 ? 0 : (i[0] + i[1]) / 2
			}
			return e
		},
		getVisualMeta: function(t) {
			function e(e, a) {
				var r = o.getRepresentValue({
					interval: e
				});
				a || (a = o.getValueState(r));
				var s = t(r, a);
				e[0] === -1 / 0 ? n[0] = s: e[1] === 1 / 0 ? n[1] = s: i.push({
					value: e[0],
					color: s
				},
				{
					value: e[1],
					color: s
				})
			}
			if (!this.isCategory()) {
				var i = [],
				n = [],
				o = this,
				a = this._pieceList.slice();
				if (a.length) {
					var r = a[0].interval[0];
					r !== -1 / 0 && a.unshift({
						interval: [ - 1 / 0, r]
					}),
					(r = a[a.length - 1].interval[1]) !== 1 / 0 && a.push({
						interval: [r, 1 / 0]
					})
				} else a.push({
					interval: [ - 1 / 0, 1 / 0]
				});
				var s = -1 / 0;
				return d(a,
				function(t) {
					var i = t.interval;
					i && (i[0] > s && e([s, i[0]], "outOfRange"), e(i.slice()), s = i[1])
				},
				this),
				{
					stops: i,
					outerColors: n
				}
			}
		}
	}),
	PP = {
		splitNumber: function() {
			var t = this.option,
			e = this._pieceList,
			i = Math.min(t.precision, 20),
			n = this.getExtent(),
			o = t.splitNumber;
			o = Math.max(parseInt(o, 10), 1),
			t.splitNumber = o;
			for (var a = (n[1] - n[0]) / o; + a.toFixed(i) !== a && i < 5;) i++;
			t.precision = i,
			a = +a.toFixed(i);
			var r = 0;
			t.minOpen && e.push({
				index: r++,
				interval: [ - 1 / 0, n[0]],
				close: [0, 0]
			});
			for (var s = n[0], l = r + o; r < l; s += a) {
				var h = r === o - 1 ? n[1] : s + a;
				e.push({
					index: r++,
					interval: [s, h],
					close: [1, 1]
				})
			}
			t.maxOpen && e.push({
				index: r++,
				interval: [n[1], 1 / 0],
				close: [0, 0]
			}),
			Vo(e),
			d(e,
			function(t) {
				t.text = this.formatValueText(t.interval)
			},
			this)
		},
		categories: function() {
			var t = this.option;
			d(t.categories,
			function(t) {
				this._pieceList.push({
					text: this.formatValueText(t, !0),
					value: t
				})
			},
			this),
			Rv(t, this._pieceList)
		},
		pieces: function() {
			var t = this.option,
			e = this._pieceList;
			d(t.pieces,
			function(t, i) {
				w(t) || (t = {
					value: t
				});
				var n = {
					text: "",
					index: i
				};
				if (null != t.label && (n.text = t.label), t.hasOwnProperty("value")) {
					var o = n.value = t.value;
					n.interval = [o, o],
					n.close = [1, 1]
				} else {
					for (var a = n.interval = [], r = n.close = [0, 0], s = [1, 0, 1], l = [ - 1 / 0, 1 / 0], h = [], u = 0; u < 2; u++) {
						for (var c = [["gte", "gt", "min"], ["lte", "lt", "max"]][u], d = 0; d < 3 && null == a[u]; d++) a[u] = t[c[d]],
						r[u] = s[d],
						h[u] = 2 === d;
						null == a[u] && (a[u] = l[u])
					}
					h[0] && a[1] === 1 / 0 && (r[0] = 0),
					h[1] && a[0] === -1 / 0 && (r[1] = 0),
					a[0] === a[1] && r[0] && r[1] && (n.value = a[0])
				}
				n.visual = oD.retrieveVisuals(t),
				e.push(n)
			},
			this),
			Rv(t, e),
			Vo(e),
			d(e,
			function(t) {
				var e = t.close,
				i = [["<", "≤"][e[1]], [">", "≥"][e[0]]];
				t.text = t.text || this.formatValueText(null != t.value ? t.value: t.interval, !1, i)
			},
			this)
		}
	};
	SP.extend({
		type: "visualMap.piecewise",
		doRender: function() {
			var t = this.group;
			t.removeAll();
			var e = this.visualMapModel,
			i = e.get("textGap"),
			n = e.textStyleModel,
			o = n.getFont(),
			a = n.getTextColor(),
			r = this._getItemAlign(),
			s = e.itemSize,
			l = this._getViewData(),
			h = l.endsText,
			u = T(e.get("showLabel", !0), !h);
			h && this._renderEndsText(t, h[0], s, u, r),
			d(l.viewPieceList,
			function(n) {
				var l = n.piece,
				h = new S_;
				h.onclick = m(this._onItemClick, this, l),
				this._enableHoverLink(h, n.indexInModelPieceList);
				var c = e.getRepresentValue(l);
				if (this._createItemSymbol(h, c, [0, 0, s[0], s[1]]), u) {
					var d = this.visualMapModel.getValueState(c);
					h.add(new Cb({
						style: {
							x: "right" === r ? -i: s[0] + i,
							y: s[1] / 2,
							text: l.text,
							textVerticalAlign: "middle",
							textAlign: r,
							textFont: o,
							textFill: a,
							opacity: "outOfRange" === d ? .5 : 1
						}
					}))
				}
				t.add(h)
			},
			this),
			h && this._renderEndsText(t, h[1], s, u, r),
			bS(e.get("orient"), t, e.get("itemGap")),
			this.renderBackground(t),
			this.positionGroup(t)
		},
		_enableHoverLink: function(t, e) {
			function i(t) {
				var i = this.visualMapModel;
				i.option.hoverLink && this.api.dispatchAction({
					type: t,
					batch: Lv(i.findTargetDataIndices(e))
				})
			}
			t.on("mouseover", m(i, this, "highlight")).on("mouseout", m(i, this, "downplay"))
		},
		_getItemAlign: function() {
			var t = this.visualMapModel,
			e = t.option;
			if ("vertical" === e.orient) return Cv(t, this.api, t.itemSize);
			var i = e.align;
			return i && "auto" !== i || (i = "left"),
			i
		},
		_renderEndsText: function(t, e, i, n, o) {
			if (e) {
				var a = new S_,
				r = this.visualMapModel.textStyleModel;
				a.add(new Cb({
					style: {
						x: n ? "right" === o ? i[0] : 0 : i[0] / 2,
						y: i[1] / 2,
						textVerticalAlign: "middle",
						textAlign: n ? o: "center",
						text: e,
						textFont: r.getFont(),
						textFill: r.getTextColor()
					}
				})),
				t.add(a)
			}
		},
		_getViewData: function() {
			var t = this.visualMapModel,
			e = f(t.getPieceList(),
			function(t, e) {
				return {
					piece: t,
					indexInModelPieceList: e
				}
			}),
			i = t.get("text"),
			n = t.get("orient"),
			o = t.get("inverse");
			return ("horizontal" === n ? o: !o) ? e.reverse() : i && (i = i.slice().reverse()),
			{
				viewPieceList: e,
				endsText: i
			}
		},
		_createItemSymbol: function(t, e, i) {
			t.add(dl(this.getControllerVisual(e, "symbol"), i[0], i[1], i[2], i[3], this.getControllerVisual(e, "color")))
		},
		_onItemClick: function(t) {
			var e = this.visualMapModel,
			n = e.option,
			o = i(n.selected),
			a = e.getSelectedMapKey(t);
			"single" === n.selectedMode ? (o[a] = !0, d(o,
			function(t, e) {
				o[e] = e === a
			})) : o[a] = !o[a],
			this.api.dispatchAction({
				type: "selectDataRange",
				from: this.uid,
				visualMapId: this.visualMapModel.id,
				selected: o
			})
		}
	});
	ss(hP);
	var OP = Wo,
	NP = Ho,
	EP = gs({
		type: "marker",
		dependencies: ["series", "grid", "polar", "geo"],
		init: function(t, e, i, n) {
			this.mergeDefaultAndTheme(t, i),
			this.mergeOption(t, i, n.createdBySelf, !0)
		},
		isAnimationEnabled: function() {
			if (_x.node) return ! 1;
			var t = this.__hostSeries;
			return this.getShallow("animation") && t && t.isAnimationEnabled()
		},
		mergeOption: function(t, e, i, n) {
			var o = this.constructor,
			r = this.mainType + "Model";
			i || e.eachSeries(function(t) {
				var i = t.get(this.mainType),
				s = t[r];
				i && i.data ? (s ? s.mergeOption(i, e, !0) : (n && Bv(i), d(i.data,
				function(t) {
					t instanceof Array ? (Bv(t[0]), Bv(t[1])) : Bv(t)
				}), a(s = new o(i, this, e), {
					mainType: this.mainType,
					seriesIndex: t.seriesIndex,
					name: t.name,
					createdBySelf: !0
				}), s.__hostSeries = t), t[r] = s) : t[r] = null
			},
			this)
		},
		formatTooltip: function(t) {
			var e = this.getData(),
			i = this.getRawValue(t),
			n = y(i) ? f(i, OP).join(", ") : OP(i),
			o = e.getName(t),
			a = NP(this.name);
			return (null != i || o) && (a += "<br />"),
			o && (a += NP(o), null != i && (a += " : ")),
			null != i && (a += NP(n)),
			a
		},
		getData: function() {
			return this._data
		},
		setData: function(t) {
			this._data = t
		}
	});
	u(EP, sM),
	EP.extend({
		type: "markPoint",
		defaultOption: {
			zlevel: 0,
			z: 5,
			symbol: "pin",
			symbolSize: 50,
			tooltip: {
				trigger: "item"
			},
			label: {
				show: !0,
				position: "inside"
			},
			itemStyle: {
				borderWidth: 2
			},
			emphasis: {
				label: {
					show: !0
				}
			}
		}
	});
	var zP = l,
	RP = v,
	BP = {
		min: RP(Fv, "min"),
		max: RP(Fv, "max"),
		average: RP(Fv, "average")
	},
	VP = ms({
		type: "marker",
		init: function() {
			this.markerGroupMap = z()
		},
		render: function(t, e, i) {
			var n = this.markerGroupMap;
			n.each(function(t) {
				t.__keep = !1
			});
			var o = this.type + "Model";
			e.eachSeries(function(t) {
				var n = t[o];
				n && this.renderSeries(t, n, e, i)
			},
			this),
			n.each(function(t) { ! t.__keep && this.group.remove(t.group)
			},
			this)
		},
		renderSeries: function() {}
	});
	VP.extend({
		type: "markPoint",
		updateTransform: function(t, e, i) {
			e.eachSeries(function(t) {
				var e = t.markPointModel;
				e && (qv(e.getData(), t, i), this.markerGroupMap.get(t.id).updateLayout(e))
			},
			this)
		},
		renderSeries: function(t, e, i, n) {
			var o = t.coordinateSystem,
			a = t.id,
			r = t.getData(),
			s = this.markerGroupMap,
			l = s.get(a) || s.set(a, new Ml),
			h = $v(o, t, e);
			e.setData(h),
			qv(e.getData(), t, n),
			h.each(function(t) {
				var i = h.getItemModel(t),
				n = i.getShallow("symbolSize");
				"function" == typeof n && (n = n(e.getRawValue(t), e.getDataParams(t))),
				h.setItemVisual(t, {
					symbolSize: n,
					color: i.get("itemStyle.color") || r.getVisual("color"),
					symbol: i.getShallow("symbol")
				})
			}),
			l.updateData(h),
			this.group.add(l.group),
			h.eachItemGraphicEl(function(t) {
				t.traverse(function(t) {
					t.dataModel = e
				})
			}),
			l.__keep = !0,
			l.group.silent = e.get("silent") || t.get("silent")
		}
	}),
	ss(function(t) {
		t.markPoint = t.markPoint || {}
	}),
	EP.extend({
		type: "markLine",
		defaultOption: {
			zlevel: 0,
			z: 5,
			symbol: ["circle", "arrow"],
			symbolSize: [8, 16],
			precision: 2,
			tooltip: {
				trigger: "item"
			},
			label: {
				show: !0,
				position: "end"
			},
			lineStyle: {
				type: "dashed"
			},
			emphasis: {
				label: {
					show: !0
				},
				lineStyle: {
					width: 3
				}
			},
			animationEasing: "linear"
		}
	});
	var GP = function(t, e, o, r) {
		var s = t.getData(),
		l = r.type;
		if (!y(r) && ("min" === l || "max" === l || "average" === l || null != r.xAxis || null != r.yAxis)) {
			var h, u;
			if (null != r.yAxis || null != r.xAxis) h = null != r.yAxis ? "y": "x",
			e.getAxis(h),
			u = T(r.yAxis, r.xAxis);
			else {
				var c = Zv(r, s, e, t);
				h = c.valueDataDim,
				c.valueAxis,
				u = Yv(s, h, l)
			}
			var d = "x" === h ? 0 : 1,
			f = 1 - d,
			p = i(r),
			g = {};
			p.type = null,
			p.coord = [],
			g.coord = [],
			p.coord[f] = -1 / 0,
			g.coord[f] = 1 / 0;
			var m = o.get("precision");
			m >= 0 && "number" == typeof u && (u = +u.toFixed(Math.min(m, 20))),
			p.coord[d] = g.coord[d] = u,
			r = [p, g, {
				type: l,
				valueIndex: r.valueIndex,
				value: u
			}]
		}
		return r = [Hv(t, r[0]), Hv(t, r[1]), a({},
		r[2])],
		r[2].type = r[2].type || "",
		n(r[2], r[0]),
		n(r[2], r[1]),
		r
	};
	VP.extend({
		type: "markLine",
		updateTransform: function(t, e, i) {
			e.eachSeries(function(t) {
				var e = t.markLineModel;
				if (e) {
					var n = e.getData(),
					o = e.__from,
					a = e.__to;
					o.each(function(e) {
						ty(o, e, !0, t, i),
						ty(a, e, !1, t, i)
					}),
					n.each(function(t) {
						n.setItemLayout(t, [o.getItemLayout(t), a.getItemLayout(t)])
					}),
					this.markerGroupMap.get(t.id).updateLayout()
				}
			},
			this)
		},
		renderSeries: function(t, e, i, n) {
			function o(e, i, o) {
				var a = e.getItemModel(i);
				ty(e, i, o, t, n),
				e.setItemVisual(i, {
					symbolSize: a.get("symbolSize") || g[o ? 0 : 1],
					symbol: a.get("symbol", !0) || p[o ? 0 : 1],
					color: a.get("itemStyle.color") || s.getVisual("color")
				})
			}
			var a = t.coordinateSystem,
			r = t.id,
			s = t.getData(),
			l = this.markerGroupMap,
			h = l.get(r) || l.set(r, new Fc);
			this.group.add(h.group);
			var u = ey(a, t, e),
			c = u.from,
			d = u.to,
			f = u.line;
			e.__from = c,
			e.__to = d,
			e.setData(f);
			var p = e.get("symbol"),
			g = e.get("symbolSize");
			y(p) || (p = [p, p]),
			"number" == typeof g && (g = [g, g]),
			u.from.each(function(t) {
				o(c, t, !0),
				o(d, t, !1)
			}),
			f.each(function(t) {
				var e = f.getItemModel(t).get("lineStyle.color");
				f.setItemVisual(t, {
					color: e || c.getItemVisual(t, "color")
				}),
				f.setItemLayout(t, [c.getItemLayout(t), d.getItemLayout(t)]),
				f.setItemVisual(t, {
					fromSymbolSize: c.getItemVisual(t, "symbolSize"),
					fromSymbol: c.getItemVisual(t, "symbol"),
					toSymbolSize: d.getItemVisual(t, "symbolSize"),
					toSymbol: d.getItemVisual(t, "symbol")
				})
			}),
			h.updateData(f),
			u.line.eachItemGraphicEl(function(t, i) {
				t.traverse(function(t) {
					t.dataModel = e
				})
			}),
			h.__keep = !0,
			h.group.silent = e.get("silent") || t.get("silent")
		}
	}),
	ss(function(t) {
		t.markLine = t.markLine || {}
	}),
	EP.extend({
		type: "markArea",
		defaultOption: {
			zlevel: 0,
			z: 1,
			tooltip: {
				trigger: "item"
			},
			animation: !1,
			label: {
				show: !0,
				position: "top"
			},
			itemStyle: {
				borderWidth: 0
			},
			emphasis: {
				label: {
					show: !0,
					position: "top"
				}
			}
		}
	});
	var WP = function(t, e, i, n) {
		var a = Hv(t, n[0]),
		r = Hv(t, n[1]),
		s = T,
		l = a.coord,
		h = r.coord;
		l[0] = s(l[0], -1 / 0),
		l[1] = s(l[1], -1 / 0),
		h[0] = s(h[0], 1 / 0),
		h[1] = s(h[1], 1 / 0);
		var u = o([{},
		a, r]);
		return u.coord = [a.coord, r.coord],
		u.x0 = a.x,
		u.y0 = a.y,
		u.x1 = r.x,
		u.y1 = r.y,
		u
	},
	FP = [["x0", "y0"], ["x1", "y0"], ["x1", "y1"], ["x0", "y1"]];
	VP.extend({
		type: "markArea",
		updateTransform: function(t, e, i) {
			e.eachSeries(function(t) {
				var e = t.markAreaModel;
				if (e) {
					var n = e.getData();
					n.each(function(e) {
						var o = f(FP,
						function(o) {
							return ay(n, e, o, t, i)
						});
						n.setItemLayout(e, o),
						n.getItemGraphicEl(e).setShape("points", o)
					})
				}
			},
			this)
		},
		renderSeries: function(t, e, i, n) {
			var o = t.coordinateSystem,
			a = t.name,
			s = t.getData(),
			l = this.markerGroupMap,
			h = l.get(a) || l.set(a, {
				group: new S_
			});
			this.group.add(h.group),
			h.__keep = !0;
			var u = ry(o, t, e);
			e.setData(u),
			u.each(function(e) {
				u.setItemLayout(e, f(FP,
				function(i) {
					return ay(u, e, i, t, n)
				})),
				u.setItemVisual(e, {
					color: s.getVisual("color")
				})
			}),
			u.diff(h.__data).add(function(t) {
				var e = new Rb({
					shape: {
						points: u.getItemLayout(t)
					}
				});
				u.setItemGraphicEl(t, e),
				h.group.add(e)
			}).update(function(t, i) {
				var n = h.__data.getItemGraphicEl(i);
				co(n, {
					shape: {
						points: u.getItemLayout(t)
					}
				},
				e, t),
				h.group.add(n),
				u.setItemGraphicEl(t, n)
			}).remove(function(t) {
				var e = h.__data.getItemGraphicEl(t);
				h.group.remove(e)
			}).execute(),
			u.eachItemGraphicEl(function(t, i) {
				var n = u.getItemModel(i),
				o = n.getModel("label"),
				a = n.getModel("emphasis.label"),
				s = u.getItemVisual(i, "color");
				t.useStyle(r(n.getModel("itemStyle").getItemStyle(), {
					fill: zt(s, .4),
					stroke: s
				})),
				t.hoverStyle = n.getModel("emphasis.itemStyle").getItemStyle(),
				eo(t.style, t.hoverStyle, o, a, {
					labelFetcher: e,
					labelDataIndex: i,
					defaultText: u.getName(i) || "",
					isRectText: !0,
					autoColor: s
				}),
				to(t, {}),
				t.dataModel = e
			}),
			h.__data = u,
			h.group.silent = e.get("silent") || t.get("silent")
		}
	}),
	ss(function(t) {
		t.markArea = t.markArea || {}
	});
	IS.registerSubTypeDefaulter("timeline",
	function() {
		return "slider"
	}),
	hs({
		type: "timelineChange",
		event: "timelineChanged",
		update: "prepareAndUpdate"
	},
	function(t, e) {
		var i = e.getComponent("timeline");
		return i && null != t.currentIndex && (i.setCurrentIndex(t.currentIndex), !i.get("loop", !0) && i.isIndexMax() && i.setPlayState(!1)),
		e.resetOption("timeline"),
		r({
			currentIndex: i.option.currentIndex
		},
		t)
	}),
	hs({
		type: "timelinePlayChange",
		event: "timelinePlayChanged",
		update: "update"
	},
	function(t, e) {
		var i = e.getComponent("timeline");
		i && null != t.playState && i.setPlayState(t.playState)
	});
	var HP = IS.extend({
		type: "timeline",
		layoutMode: "box",
		defaultOption: {
			zlevel: 0,
			z: 4,
			show: !0,
			axisType: "time",
			realtime: !0,
			left: "20%",
			top: null,
			right: "20%",
			bottom: 0,
			width: null,
			height: 40,
			padding: 5,
			controlPosition: "left",
			autoPlay: !1,
			rewind: !1,
			loop: !0,
			playInterval: 2e3,
			currentIndex: 0,
			itemStyle: {},
			label: {
				color: "#000"
			},
			data: []
		},
		init: function(t, e, i) {
			this._data,
			this._names,
			this.mergeDefaultAndTheme(t, i),
			this._initData()
		},
		mergeOption: function(t) {
			HP.superApply(this, "mergeOption", arguments),
			this._initData()
		},
		setCurrentIndex: function(t) {
			null == t && (t = this.option.currentIndex);
			var e = this._data.count();
			this.option.loop ? t = (t % e + e) % e: (t >= e && (t = e - 1), t < 0 && (t = 0)),
			this.option.currentIndex = t
		},
		getCurrentIndex: function() {
			return this.option.currentIndex
		},
		isIndexMax: function() {
			return this.getCurrentIndex() >= this._data.count() - 1
		},
		setPlayState: function(t) {
			this.option.autoPlay = !!t
		},
		getPlayState: function() {
			return !! this.option.autoPlay
		},
		_initData: function() {
			var t = this.option,
			e = t.data || [],
			n = t.axisType,
			o = this._names = [];
			if ("category" === n) {
				var a = [];
				d(e,
				function(t, e) {
					var n, r = Ii(t);
					w(t) ? (n = i(t)).value = e: n = e,
					a.push(n),
					_(r) || null != r && !isNaN(r) || (r = ""),
					o.push(r + "")
				}),
				e = a
			}
			var r = {
				category: "ordinal",
				time: "time"
			} [n] || "number"; (this._data = new yI([{
				name: "value",
				type: r
			}], this)).initData(e, o)
		},
		getData: function() {
			return this._data
		},
		getCategories: function() {
			if ("category" === this.get("axisType")) return this._names.slice()
		}
	});
	u(HP.extend({
		type: "timeline.slider",
		defaultOption: {
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderWidth: 0,
			orient: "horizontal",
			inverse: !1,
			tooltip: {
				trigger: "item"
			},
			symbol: "emptyCircle",
			symbolSize: 10,
			lineStyle: {
				show: !0,
				width: 2,
				color: "#304654"
			},
			label: {
				position: "auto",
				show: !0,
				interval: "auto",
				rotate: 0,
				color: "#304654"
			},
			itemStyle: {
				color: "#304654",
				borderWidth: 1
			},
			checkpointStyle: {
				symbol: "circle",
				symbolSize: 13,
				color: "#c23531",
				borderWidth: 5,
				borderColor: "rgba(194,53,49, 0.5)",
				animation: !0,
				animationDuration: 300,
				animationEasing: "quinticInOut"
			},
			controlStyle: {
				show: !0,
				showPlayBtn: !0,
				showPrevBtn: !0,
				showNextBtn: !0,
				itemSize: 22,
				itemGap: 12,
				position: "left",
				playIcon: "path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",
				stopIcon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
				nextIcon: "path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",
				prevIcon: "path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",
				color: "#304654",
				borderColor: "#304654",
				borderWidth: 1
			},
			emphasis: {
				label: {
					show: !0,
					color: "#c23531"
				},
				itemStyle: {
					color: "#c23531"
				},
				controlStyle: {
					color: "#c23531",
					borderColor: "#c23531",
					borderWidth: 2
				}
			},
			data: []
		}
	}), sM);
	var ZP = cM.extend({
		type: "timeline"
	}),
	UP = function(t, e, i, n) {
		nT.call(this, t, e, i),
		this.type = n || "value",
		this._autoLabelInterval,
		this.model = null
	};
	UP.prototype = {
		constructor: UP,
		getLabelInterval: function() {
			var t = this.model,
			e = t.getModel("label"),
			i = e.get("interval");
			return null != i && "auto" != i ? i: ((i = this._autoLabelInterval) || (i = this._autoLabelInterval = ll(f(this.scale.getTicks(), this.dataToCoord, this), hl(this, e.get("formatter")), e.getFont(), "horizontal" === t.get("orient") ? 0 : 90, e.get("rotate"))), i)
		},
		isLabelIgnored: function(t) {
			if ("category" === this.type) {
				var e = this.getLabelInterval();
				return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
			}
		}
	},
	h(UP, nT);
	var jP = m,
	XP = d,
	YP = Math.PI;
	ZP.extend({
		type: "timeline.slider",
		init: function(t, e) {
			this.api = e,
			this._axis,
			this._viewRect,
			this._timer,
			this._currentPointer,
			this._mainGroup,
			this._labelGroup
		},
		render: function(t, e, i, n) {
			if (this.model = t, this.api = i, this.ecModel = e, this.group.removeAll(), t.get("show", !0)) {
				var o = this._layout(t, i),
				a = this._createGroup("mainGroup"),
				r = this._createGroup("labelGroup"),
				s = this._axis = this._createAxis(o, t);
				t.formatTooltip = function(t) {
					return Ho(s.scale.getLabel(t))
				},
				XP(["AxisLine", "AxisTick", "Control", "CurrentPointer"],
				function(e) {
					this["_render" + e](o, a, s, t)
				},
				this),
				this._renderAxisLabel(o, r, s, t),
				this._position(o, t)
			}
			this._doPlayStop()
		},
		remove: function() {
			this._clearTimer(),
			this.group.removeAll()
		},
		dispose: function() {
			this._clearTimer()
		},
		_layout: function(t, e) {
			var i = t.get("label.position"),
			n = t.get("orient"),
			o = uy(t, e);
			null == i || "auto" === i ? i = "horizontal" === n ? o.y + o.height / 2 < e.getHeight() / 2 ? "-": "+": o.x + o.width / 2 < e.getWidth() / 2 ? "+": "-": isNaN(i) && (i = {
				horizontal: {
					top: "-",
					bottom: "+"
				},
				vertical: {
					left: "-",
					right: "+"
				}
			} [n][i]);
			var a = {
				horizontal: "center",
				vertical: i >= 0 || "+" === i ? "left": "right"
			},
			r = {
				horizontal: i >= 0 || "+" === i ? "top": "bottom",
				vertical: "middle"
			},
			s = {
				horizontal: 0,
				vertical: YP / 2
			},
			l = "vertical" === n ? o.height: o.width,
			h = t.getModel("controlStyle"),
			u = h.get("show", !0),
			c = u ? h.get("itemSize") : 0,
			d = u ? h.get("itemGap") : 0,
			f = c + d,
			p = t.get("label.rotate") || 0;
			p = p * YP / 180;
			var g, m, v, y, x = h.get("position", !0),
			_ = u && h.get("showPlayBtn", !0),
			w = u && h.get("showPrevBtn", !0),
			b = u && h.get("showNextBtn", !0),
			S = 0,
			M = l;
			return "left" === x || "bottom" === x ? (_ && (g = [0, 0], S += f), w && (m = [S, 0], S += f), b && (v = [M - c, 0], M -= f)) : (_ && (g = [M - c, 0], M -= f), w && (m = [0, 0], S += f), b && (v = [M - c, 0], M -= f)),
			y = [S, M],
			t.get("inverse") && y.reverse(),
			{
				viewRect: o,
				mainLength: l,
				orient: n,
				rotation: s[n],
				labelRotation: p,
				labelPosOpt: i,
				labelAlign: t.get("label.align") || a[n],
				labelBaseline: t.get("label.verticalAlign") || t.get("label.baseline") || r[n],
				playPosition: g,
				prevBtnPosition: m,
				nextBtnPosition: v,
				axisExtent: y,
				controlSize: c,
				controlGap: d
			}
		},
		_position: function(t, e) {
			function i(t) {
				var e = t.position;
				t.origin = [c[0][0] - e[0], c[1][0] - e[1]]
			}
			function n(t) {
				return [[t.x, t.x + t.width], [t.y, t.y + t.height]]
			}
			function o(t, e, i, n, o) {
				t[n] += i[n][o] - e[n][o]
			}
			var a = this._mainGroup,
			r = this._labelGroup,
			s = t.viewRect;
			if ("vertical" === t.orient) {
				var l = st(),
				h = s.x,
				u = s.y + s.height;
				ct(l, l, [ - h, -u]),
				dt(l, l, -YP / 2),
				ct(l, l, [h, u]),
				(s = s.clone()).applyTransform(l)
			}
			var c = n(s),
			d = n(a.getBoundingRect()),
			f = n(r.getBoundingRect()),
			p = a.position,
			g = r.position;
			g[0] = p[0] = c[0][0];
			var m = t.labelPosOpt;
			if (isNaN(m)) o(p, d, c, 1, v = "+" === m ? 0 : 1),
			o(g, f, c, 1, 1 - v);
			else {
				var v = m >= 0 ? 0 : 1;
				o(p, d, c, 1, v),
				g[1] = p[1] + m
			}
			a.attr("position", p),
			r.attr("position", g),
			a.rotation = r.rotation = t.rotation,
			i(a),
			i(r)
		},
		_createAxis: function(t, e) {
			var i = e.getData(),
			n = e.get("axisType"),
			o = sl(e, n),
			a = i.getDataExtent("value");
			o.setExtent(a[0], a[1]),
			this._customizeScale(o, i),
			o.niceTicks();
			var r = new UP("value", o, t.axisExtent, n);
			return r.model = e,
			r
		},
		_customizeScale: function(t, e) {
			t.getTicks = function() {
				return e.mapArray(["value"],
				function(t) {
					return t
				})
			},
			t.getTicksLabels = function() {
				return f(this.getTicks(), t.getLabel, t)
			}
		},
		_createGroup: function(t) {
			var e = this["_" + t] = new S_;
			return this.group.add(e),
			e
		},
		_renderAxisLine: function(t, e, i, n) {
			var o = i.getExtent();
			n.get("lineStyle.show") && e.add(new Gb({
				shape: {
					x1: o[0],
					y1: 0,
					x2: o[1],
					y2: 0
				},
				style: a({
					lineCap: "round"
				},
				n.getModel("lineStyle").getLineStyle()),
				silent: !0,
				z2: 1
			}))
		},
		_renderAxisTick: function(t, e, i, n) {
			var o = n.getData(),
			a = i.scale.getTicks();
			XP(a,
			function(t, a) {
				var r = i.dataToCoord(t),
				s = o.getItemModel(a),
				l = s.getModel("itemStyle"),
				h = s.getModel("emphasis.itemStyle"),
				u = {
					position: [r, 0],
					onclick: jP(this._changeTimeline, this, a)
				},
				c = dy(s, l, e, u);
				to(c, h.getItemStyle()),
				s.get("tooltip") ? (c.dataIndex = a, c.dataModel = n) : c.dataIndex = c.dataModel = null
			},
			this)
		},
		_renderAxisLabel: function(t, e, i, n) {
			var o = n.getModel("label");
			if (o.get("show")) {
				var a = n.getData(),
				r = i.scale.getTicks(),
				s = hl(i, o.get("formatter")),
				l = i.getLabelInterval();
				XP(r,
				function(n, o) {
					if (!i.isLabelIgnored(o, l)) {
						var r = a.getItemModel(o),
						h = r.getModel("label"),
						u = r.getModel("emphasis.label"),
						c = i.dataToCoord(n),
						d = new Cb({
							position: [c, 0],
							rotation: t.labelRotation - t.rotation,
							onclick: jP(this._changeTimeline, this, o),
							silent: !1
						});
						io(d.style, h, {
							text: s[o],
							textAlign: t.labelAlign,
							textVerticalAlign: t.labelBaseline
						}),
						e.add(d),
						to(d, io({},
						u))
					}
				},
				this)
			}
		},
		_renderControl: function(t, e, i, n) {
			function o(t, i, o, u) {
				if (t) {
					var c = cy(n, i, h, {
						position: t,
						origin: [a / 2, 0],
						rotation: u ? -r: 0,
						rectHover: !0,
						style: s,
						onclick: o
					});
					e.add(c),
					to(c, l)
				}
			}
			var a = t.controlSize,
			r = t.rotation,
			s = n.getModel("controlStyle").getItemStyle(),
			l = n.getModel("emphasis.controlStyle").getItemStyle(),
			h = [0, -a / 2, a, a],
			u = n.getPlayState(),
			c = n.get("inverse", !0);
			o(t.nextBtnPosition, "controlStyle.nextIcon", jP(this._changeTimeline, this, c ? "-": "+")),
			o(t.prevBtnPosition, "controlStyle.prevIcon", jP(this._changeTimeline, this, c ? "+": "-")),
			o(t.playPosition, "controlStyle." + (u ? "stopIcon": "playIcon"), jP(this._handlePlayClick, this, !u), !0)
		},
		_renderCurrentPointer: function(t, e, i, n) {
			var o = n.getData(),
			a = n.getCurrentIndex(),
			r = o.getItemModel(a).getModel("checkpointStyle"),
			s = this,
			l = {
				onCreate: function(t) {
					t.draggable = !0,
					t.drift = jP(s._handlePointerDrag, s),
					t.ondragend = jP(s._handlePointerDragend, s),
					fy(t, a, i, n, !0)
				},
				onUpdate: function(t) {
					fy(t, a, i, n)
				}
			};
			this._currentPointer = dy(r, r, this._mainGroup, {},
			this._currentPointer, l)
		},
		_handlePlayClick: function(t) {
			this._clearTimer(),
			this.api.dispatchAction({
				type: "timelinePlayChange",
				playState: t,
				from: this.uid
			})
		},
		_handlePointerDrag: function(t, e, i) {
			this._clearTimer(),
			this._pointerChangeTimeline([i.offsetX, i.offsetY])
		},
		_handlePointerDragend: function(t) {
			this._pointerChangeTimeline([t.offsetX, t.offsetY], !0)
		},
		_pointerChangeTimeline: function(t, e) {
			var i = this._toAxisCoord(t)[0],
			n = Do(this._axis.getExtent().slice());
			i > n[1] && (i = n[1]),
			i < n[0] && (i = n[0]),
			this._currentPointer.position[0] = i,
			this._currentPointer.dirty();
			var o = this._findNearestTick(i),
			a = this.model; (e || o !== a.getCurrentIndex() && a.get("realtime")) && this._changeTimeline(o)
		},
		_doPlayStop: function() {
			this._clearTimer(),
			this.model.getPlayState() && (this._timer = setTimeout(jP(function() {
				var t = this.model;
				this._changeTimeline(t.getCurrentIndex() + (t.get("rewind", !0) ? -1 : 1))
			},
			this), this.model.get("playInterval")))
		},
		_toAxisCoord: function(t) {
			return go(t, this._mainGroup.getLocalTransform(), !0)
		},
		_findNearestTick: function(t) {
			var e, i = this.model.getData(),
			n = 1 / 0,
			o = this._axis;
			return i.each(["value"],
			function(i, a) {
				var r = o.dataToCoord(i),
				s = Math.abs(r - t);
				s < n && (n = s, e = a)
			}),
			e
		},
		_clearTimer: function() {
			this._timer && (clearTimeout(this._timer), this._timer = null)
		},
		_changeTimeline: function(t) {
			var e = this.model.getCurrentIndex();
			"+" === t ? t = e + 1 : "-" === t && (t = e - 1),
			this.api.dispatchAction({
				type: "timelineChange",
				currentIndex: t,
				from: this.uid
			})
		}
	}),
	ss(function(t) {
		var e = t && t.timeline;
		y(e) || (e = e ? [e] : []),
		d(e,
		function(t) {
			t && sy(t)
		})
	});
	var qP = gs({
		type: "toolbox",
		layoutMode: {
			type: "box",
			ignoreSize: !0
		},
		mergeDefaultAndTheme: function(t) {
			qP.superApply(this, "mergeDefaultAndTheme", arguments),
			d(this.option.feature,
			function(t, e) {
				var i = Qm(e);
				i && n(t, i.defaultOption)
			})
		},
		defaultOption: {
			show: !0,
			z: 6,
			zlevel: 0,
			orient: "horizontal",
			left: "right",
			top: "top",
			backgroundColor: "transparent",
			borderColor: "#ccc",
			borderRadius: 0,
			borderWidth: 0,
			padding: 5,
			itemSize: 15,
			itemGap: 8,
			showTitle: !0,
			iconStyle: {
				borderColor: "#666",
				color: "none"
			},
			emphasis: {
				iconStyle: {
					borderColor: "#3E98C5"
				}
			}
		}
	});
	ms({
		type: "toolbox",
		render: function(t, e, i, n) {
			function o(o, r) {
				var s, c = u[o],
				d = u[r],
				f = new _o(l[c], t, t.ecModel);
				if (c && !d) {
					if (py(c)) s = {
						model: f,
						onclick: f.option.onclick,
						featureName: c
					};
					else {
						var p = Qm(c);
						if (!p) return;
						s = new p(f, e, i)
					}
					h[c] = s
				} else {
					if (! (s = h[d])) return;
					s.model = f,
					s.ecModel = e,
					s.api = i
				}
				c || !d ? f.get("show") && !s.unusable ? (a(f, s, c), f.setIconStatus = function(t, e) {
					var i = this.option,
					n = this.iconPaths;
					i.iconStatus = i.iconStatus || {},
					i.iconStatus[t] = e,
					n[t] && n[t].trigger(e)
				},
				s.render && s.render(f, e, i, n)) : s.remove && s.remove(e, i) : s.dispose && s.dispose(e, i)
			}
			function a(n, o, a) {
				var l = n.getModel("iconStyle"),
				h = n.getModel("emphasis.iconStyle"),
				u = o.getIcons ? o.getIcons() : n.get("icon"),
				c = n.get("title") || {};
				if ("string" == typeof u) {
					var f = u,
					p = c;
					c = {},
					(u = {})[a] = f,
					c[a] = p
				}
				var g = n.iconPaths = {};
				d(u,
				function(a, u) {
					var d = xo(a, {},
					{
						x: -s / 2,
						y: -s / 2,
						width: s,
						height: s
					});
					d.setStyle(l.getItemStyle()),
					d.hoverStyle = h.getItemStyle(),
					to(d),
					t.get("showTitle") && (d.__title = c[u], d.on("mouseover",
					function() {
						var t = h.getItemStyle();
						d.setStyle({
							text: c[u],
							textPosition: t.textPosition || "bottom",
							textFill: t.fill || t.stroke || "#000",
							textAlign: t.textAlign || "center"
						})
					}).on("mouseout",
					function() {
						d.setStyle({
							textFill: null
						})
					})),
					d.trigger(n.get("iconStatus." + u) || "normal"),
					r.add(d),
					d.on("click", m(o.onclick, o, e, i, u)),
					g[u] = d
				})
			}
			var r = this.group;
			if (r.removeAll(), t.get("show")) {
				var s = +t.get("itemSize"),
				l = t.get("feature") || {},
				h = this._features || (this._features = {}),
				u = [];
				d(l,
				function(t, e) {
					u.push(e)
				}),
				new ws(this._featureNames || [], u).add(o).update(o).remove(v(o, null)).execute(),
				this._featureNames = u,
				Xg(r, t, i),
				r.add(Yg(r.getBoundingRect(), t)),
				r.eachChild(function(t) {
					var e = t.__title,
					n = t.hoverStyle;
					if (n && e) {
						var o = me(e, ke(n)),
						a = t.position[0] + r.position[0],
						l = !1;
						t.position[1] + r.position[1] + s + o.height > i.getHeight() && (n.textPosition = "top", l = !0);
						var h = l ? -5 - o.height: s + 8;
						a + o.width / 2 > i.getWidth() ? (n.textPosition = ["100%", h], n.textAlign = "right") : a - o.width / 2 < 0 && (n.textPosition = [0, h], n.textAlign = "left")
					}
				})
			}
		},
		updateView: function(t, e, i, n) {
			d(this._features,
			function(t) {
				t.updateView && t.updateView(t.model, e, i, n)
			})
		},
		remove: function(t, e) {
			d(this._features,
			function(i) {
				i.remove && i.remove(t, e)
			}),
			this.group.removeAll()
		},
		dispose: function(t, e) {
			d(this._features,
			function(i) {
				i.dispose && i.dispose(t, e)
			})
		}
	});
	var $P = wM.toolbox.saveAsImage;
	gy.defaultOption = {
		show: !0,
		icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
		title: $P.title,
		type: "png",
		name: "",
		excludeComponents: ["toolbox"],
		pixelRatio: 1,
		lang: $P.lang.slice()
	},
	gy.prototype.unusable = !_x.canvasSupported,
	gy.prototype.onclick = function(t, e) {
		var i = this.model,
		n = i.get("name") || t.get("title.0.text") || "echarts",
		o = document.createElement("a"),
		a = i.get("type", !0) || "png";
		o.download = n + "." + a,
		o.target = "_blank";
		var r = e.getConnectedDataURL({
			type: a,
			backgroundColor: i.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
			excludeComponents: i.get("excludeComponents"),
			pixelRatio: i.get("pixelRatio")
		});
		if (o.href = r, "function" != typeof MouseEvent || _x.browser.ie || _x.browser.edge) if (window.navigator.msSaveOrOpenBlob) {
			for (var s = atob(r.split(",")[1]), l = s.length, h = new Uint8Array(l); l--;) h[l] = s.charCodeAt(l);
			var u = new Blob([h]);
			window.navigator.msSaveOrOpenBlob(u, n + "." + a)
		} else {
			var c = i.get("lang"),
			d = '<body style="margin:0;"><img src="' + r + '" style="max-width:100%;" title="' + (c && c[0] || "") + '" /></body>';
			window.open().document.write(d)
		} else {
			var f = new MouseEvent("click", {
				view: window,
				bubbles: !0,
				cancelable: !1
			});
			o.dispatchEvent(f)
		}
	},
	Jm("saveAsImage", gy);
	var KP = wM.toolbox.magicType;
	my.defaultOption = {
		show: !0,
		type: [],
		icon: {
			line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
			bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
			stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
			tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
		},
		title: i(KP.title),
		option: {},
		seriesIndex: {}
	};
	var JP = my.prototype;
	JP.getIcons = function() {
		var t = this.model,
		e = t.get("icon"),
		i = {};
		return d(t.get("type"),
		function(t) {
			e[t] && (i[t] = e[t])
		}),
		i
	};
	var QP = {
		line: function(t, e, i, o) {
			if ("bar" === t) return n({
				id: e,
				type: "line",
				data: i.get("data"),
				stack: i.get("stack"),
				markPoint: i.get("markPoint"),
				markLine: i.get("markLine")
			},
			o.get("option.line") || {},
			!0)
		},
		bar: function(t, e, i, o) {
			if ("line" === t) return n({
				id: e,
				type: "bar",
				data: i.get("data"),
				stack: i.get("stack"),
				markPoint: i.get("markPoint"),
				markLine: i.get("markLine")
			},
			o.get("option.bar") || {},
			!0)
		},
		stack: function(t, e, i, o) {
			if ("line" === t || "bar" === t) return n({
				id: e,
				stack: "__ec_magicType_stack__"
			},
			o.get("option.stack") || {},
			!0)
		},
		tiled: function(t, e, i, o) {
			if ("line" === t || "bar" === t) return n({
				id: e,
				stack: ""
			},
			o.get("option.tiled") || {},
			!0)
		}
	},
	tO = [["line", "bar"], ["stack", "tiled"]];
	JP.onclick = function(t, e, i) {
		var n = this.model,
		o = n.get("seriesIndex." + i);
		if (QP[i]) {
			var a = {
				series: []
			};
			d(tO,
			function(t) {
				l(t, i) >= 0 && d(t,
				function(t) {
					n.setIconStatus(t, "normal")
				})
			}),
			n.setIconStatus(i, "emphasis"),
			t.eachComponent({
				mainType: "series",
				query: null == o ? null: {
					seriesIndex: o
				}
			},
			function(e) {
				var o = e.subType,
				s = e.id,
				l = QP[i](o, s, e, n);
				l && (r(l, e.option), a.series.push(l));
				var h = e.coordinateSystem;
				if (h && "cartesian2d" === h.type && ("line" === i || "bar" === i)) {
					var u = h.getAxesByScale("ordinal")[0];
					if (u) {
						var c = u.dim + "Axis",
						d = t.queryComponents({
							mainType: c,
							index: e.get(name + "Index"),
							id: e.get(name + "Id")
						})[0].componentIndex;
						a[c] = a[c] || [];
						for (var f = 0; f <= d; f++) a[c][d] = a[c][d] || {};
						a[c][d].boundaryGap = "bar" === i
					}
				}
			}),
			e.dispatchAction({
				type: "changeMagicType",
				currentType: i,
				newOption: a
			})
		}
	},
	hs({
		type: "changeMagicType",
		event: "magicTypeChanged",
		update: "prepareAndUpdate"
	},
	function(t, e) {
		e.mergeOption(t.newOption)
	}),
	Jm("magicType", my);
	var eO = wM.toolbox.dataView,
	iO = new Array(60).join("-"),
	nO = "\t",
	oO = new RegExp("[" + nO + "]+", "g");
	Ty.defaultOption = {
		show: !0,
		readOnly: !1,
		optionToContent: null,
		contentToOption: null,
		icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
		title: i(eO.title),
		lang: i(eO.lang),
		backgroundColor: "#fff",
		textColor: "#000",
		textareaColor: "#fff",
		textareaBorderColor: "#333",
		buttonColor: "#c23531",
		buttonTextColor: "#fff"
	},
	Ty.prototype.onclick = function(t, e) {
		function i() {
			n.removeChild(a),
			x._dom = null
		}
		var n = e.getDom(),
		o = this.model;
		this._dom && n.removeChild(this._dom);
		var a = document.createElement("div");
		a.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;",
		a.style.backgroundColor = o.get("backgroundColor") || "#fff";
		var r = document.createElement("h4"),
		s = o.get("lang") || [];
		r.innerHTML = s[0] || o.get("title"),
		r.style.cssText = "margin: 10px 20px;",
		r.style.color = o.get("textColor");
		var l = document.createElement("div"),
		h = document.createElement("textarea");
		l.style.cssText = "display:block;width:100%;overflow:auto;";
		var u = o.get("optionToContent"),
		c = o.get("contentToOption"),
		d = _y(t);
		if ("function" == typeof u) {
			var f = u(e.getOption());
			"string" == typeof f ? l.innerHTML = f: M(f) && l.appendChild(f)
		} else l.appendChild(h),
		h.readOnly = o.get("readOnly"),
		h.style.cssText = "width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;",
		h.style.color = o.get("textColor"),
		h.style.borderColor = o.get("textareaBorderColor"),
		h.style.backgroundColor = o.get("textareaColor"),
		h.value = d.value;
		var p = d.meta,
		g = document.createElement("div");
		g.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
		var m = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
		v = document.createElement("div"),
		y = document.createElement("div");
		m += ";background-color:" + o.get("buttonColor"),
		m += ";color:" + o.get("buttonTextColor");
		var x = this;
		hi(v, "click", i),
		hi(y, "click",
		function() {
			var t;
			try {
				t = "function" == typeof c ? c(l, e.getOption()) : Iy(h.value, p)
			} catch(t) {
				throw i(),
				new Error("Data view format error " + t)
			}
			t && e.dispatchAction({
				type: "changeDataView",
				newOption: t
			}),
			i()
		}),
		v.innerHTML = s[1],
		y.innerHTML = s[2],
		y.style.cssText = m,
		v.style.cssText = m,
		!o.get("readOnly") && g.appendChild(y),
		g.appendChild(v),
		hi(h, "keydown",
		function(t) {
			if (9 === (t.keyCode || t.which)) {
				var e = this.value,
				i = this.selectionStart,
				n = this.selectionEnd;
				this.value = e.substring(0, i) + nO + e.substring(n),
				this.selectionStart = this.selectionEnd = i + 1,
				Q_(t)
			}
		}),
		a.appendChild(r),
		a.appendChild(l),
		a.appendChild(g),
		l.style.height = n.clientHeight - 80 + "px",
		n.appendChild(a),
		this._dom = a
	},
	Ty.prototype.remove = function(t, e) {
		this._dom && e.getDom().removeChild(this._dom)
	},
	Ty.prototype.dispose = function(t, e) {
		this.remove(t, e)
	},
	Jm("dataView", Ty),
	hs({
		type: "changeDataView",
		event: "dataViewChanged",
		update: "prepareAndUpdate"
	},
	function(t, e) {
		var i = [];
		d(t.newOption.series,
		function(t) {
			var n = e.getSeriesByName(t.name)[0];
			if (n) {
				var o = n.get("data");
				i.push({
					name: t.name,
					data: Ay(t.data, o)
				})
			} else i.push(a({
				type: "scatter"
			},
			t))
		}),
		e.mergeOption(r({
			series: i
		},
		t.newOption))
	});
	var aO = d,
	rO = "\0_ec_hist_store";
	jk.extend({
		type: "dataZoom.select"
	}),
	Xk.extend({
		type: "dataZoom.select"
	});
	var sO = wM.toolbox.dataZoom,
	lO = d,
	hO = "\0_ec_\0toolbox-dataZoom_";
	Oy.defaultOption = {
		show: !0,
		icon: {
			zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
			back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
		},
		title: i(sO.title)
	};
	var uO = Oy.prototype;
	uO.render = function(t, e, i, n) {
		this.model = t,
		this.ecModel = e,
		this.api = i,
		zy(t, e, this, n, i),
		Ey(t, e)
	},
	uO.onclick = function(t, e, i) {
		cO[i].call(this)
	},
	uO.remove = function(t, e) {
		this._brushController.unmount()
	},
	uO.dispose = function(t, e) {
		this._brushController.dispose()
	};
	var cO = {
		zoom: function() {
			var t = !this._isZoomActive;
			this.api.dispatchAction({
				type: "takeGlobalCursor",
				key: "dataZoomSelect",
				dataZoomSelectActive: t
			})
		},
		back: function() {
			this._dispatchZoomAction(Cy(this.ecModel))
		}
	};
	uO._onBrush = function(t, e) {
		function i(t, e, i) {
			var r = e.getAxis(t),
			s = r.model,
			l = n(t, s, a),
			h = l.findRepresentativeAxisProxy(s).getMinMaxSpan();
			null == h.minValueSpan && null == h.maxValueSpan || (i = jD(0, i.slice(), r.scale.getExtent(), 0, h.minValueSpan, h.maxValueSpan)),
			l && (o[l.id] = {
				dataZoomId: l.id,
				startValue: i[0],
				endValue: i[1]
			})
		}
		function n(t, e, i) {
			var n;
			return i.eachComponent({
				mainType: "dataZoom",
				subType: "select"
			},
			function(i) {
				i.getAxisModel(t, e.componentIndex) && (n = i)
			}),
			n
		}
		if (e.isEnd && t.length) {
			var o = {},
			a = this.ecModel;
			this._brushController.updateCovers([]),
			new zm(Ny(this.model.option), a, {
				include: ["grid"]
			}).matchOutputRanges(t, a,
			function(t, e, n) {
				if ("cartesian2d" === n.type) {
					var o = t.brushType;
					"rect" === o ? (i("x", n, e[0]), i("y", n, e[1])) : i({
						lineX: "x",
						lineY: "y"
					} [o], n, e)
				}
			}),
			Dy(a, o),
			this._dispatchZoomAction(o)
		}
	},
	uO._dispatchZoomAction = function(t) {
		var e = [];
		lO(t,
		function(t, n) {
			e.push(i(t))
		}),
		e.length && this.api.dispatchAction({
			type: "dataZoom",
			from: this.uid,
			batch: e
		})
	},
	Jm("dataZoom", Oy),
	ss(function(t) {
		function e(t, e) {
			if (e) {
				var o = t + "Index",
				a = e[o];
				null == a || "all" == a || y(a) || (a = !1 === a || "none" === a ? [] : [a]),
				i(t,
				function(e, i) {
					if (null == a || "all" == a || -1 !== l(a, i)) {
						var r = {
							type: "select",
							$fromToolbox: !0,
							id: hO + t + i
						};
						r[o] = i,
						n.push(r)
					}
				})
			}
		}
		function i(e, i) {
			var n = t[e];
			y(n) || (n = n ? [n] : []),
			lO(n, i)
		}
		if (t) {
			var n = t.dataZoom || (t.dataZoom = []);
			y(n) || (t.dataZoom = n = [n]);
			var o = t.toolbox;
			if (o && (y(o) && (o = o[0]), o && o.feature)) {
				var a = o.feature.dataZoom;
				e("xAxis", a),
				e("yAxis", a)
			}
		}
	});
	var dO = wM.toolbox.restore;
	Ry.defaultOption = {
		show: !0,
		icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
		title: dO.title
	},
	Ry.prototype.onclick = function(t, e, i) {
		Ly(t),
		e.dispatchAction({
			type: "restore",
			from: this.uid
		})
	},
	Jm("restore", Ry),
	hs({
		type: "restore",
		event: "restore",
		update: "prepareAndUpdate"
	},
	function(t, e) {
		e.resetOption("recreate")
	});
	var fO, pO = "urn:schemas-microsoft-com:vml",
	gO = "undefined" == typeof window ? null: window,
	mO = !1,
	vO = gO && gO.document;
	if (vO && !_x.canvasSupported) try { ! vO.namespaces.zrvml && vO.namespaces.add("zrvml", pO),
		fO = function(t) {
			return vO.createElement("<zrvml:" + t + ' class="zrvml">')
		}
	} catch(t) {
		fO = function(t) {
			return vO.createElement("<" + t + ' xmlns="' + pO + '" class="zrvml">')
		}
	}
	var yO = ab.CMD,
	xO = Math.round,
	_O = Math.sqrt,
	wO = Math.abs,
	bO = Math.cos,
	SO = Math.sin,
	MO = Math.max;
	if (!_x.canvasSupported) {
		var IO = 21600,
		TO = IO / 2,
		AO = function(t) {
			t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;",
			t.coordsize = IO + "," + IO,
			t.coordorigin = "0,0"
		},
		DO = function(t) {
			return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
		},
		CO = function(t, e, i) {
			return "rgb(" + [t, e, i].join(",") + ")"
		},
		LO = function(t, e) {
			e && t && e.parentNode !== t && t.appendChild(e)
		},
		kO = function(t, e) {
			e && t && e.parentNode === t && t.removeChild(e)
		},
		PO = function(t, e, i) {
			return 1e5 * (parseFloat(t) || 0) + 1e3 * (parseFloat(e) || 0) + i
		},
		OO = function(t, e) {
			return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e: parseFloat(t) : t
		},
		NO = function(t, e, i) {
			var n = Dt(e);
			i = +i,
			isNaN(i) && (i = 1),
			n && (t.color = CO(n[0], n[1], n[2]), t.opacity = i * n[3])
		},
		EO = function(t) {
			var e = Dt(t);
			return [CO(e[0], e[1], e[2]), e[3]]
		},
		zO = function(t, e, i) {
			var n = e.fill;
			if (null != n) if (n instanceof Ub) {
				var o, a = 0,
				r = [0, 0],
				s = 0,
				l = 1,
				h = i.getBoundingRect(),
				u = h.width,
				c = h.height;
				if ("linear" === n.type) {
					o = "gradient";
					var d = i.transform,
					f = [n.x * u, n.y * c],
					p = [n.x2 * u, n.y2 * c];
					d && (Q(f, f, d), Q(p, p, d));
					var g = p[0] - f[0],
					m = p[1] - f[1]; (a = 180 * Math.atan2(g, m) / Math.PI) < 0 && (a += 360),
					a < 1e-6 && (a = 0)
				} else {
					o = "gradientradial";
					var f = [n.x * u, n.y * c],
					d = i.transform,
					v = i.scale,
					y = u,
					x = c;
					r = [(f[0] - h.x) / y, (f[1] - h.y) / x],
					d && Q(f, f, d),
					y /= v[0] * IO,
					x /= v[1] * IO;
					var _ = MO(y, x);
					s = 0 / _,
					l = 2 * n.r / _ - s
				}
				var w = n.colorStops.slice();
				w.sort(function(t, e) {
					return t.offset - e.offset
				});
				for (var b = w.length,
				S = [], M = [], I = 0; I < b; I++) {
					var T = w[I],
					A = EO(T.color);
					M.push(T.offset * l + s + " " + A[0]),
					0 !== I && I !== b - 1 || S.push(A)
				}
				if (b >= 2) {
					var D = S[0][0],
					C = S[1][0],
					L = S[0][1] * e.opacity,
					k = S[1][1] * e.opacity;
					t.type = o,
					t.method = "none",
					t.focus = "100%",
					t.angle = a,
					t.color = D,
					t.color2 = C,
					t.colors = M.join(","),
					t.opacity = k,
					t.opacity2 = L
				}
				"radial" === o && (t.focusposition = r.join(","))
			} else NO(t, n, e.opacity)
		},
		RO = function(t, e) {
			null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")),
			null == e.stroke || e.stroke instanceof Ub || NO(t, e.stroke, e.opacity)
		},
		BO = function(t, e, i, n) {
			var o = "fill" == e,
			a = t.getElementsByTagName(e)[0];
			null != i[e] && "none" !== i[e] && (o || !o && i.lineWidth) ? (t[o ? "filled": "stroked"] = "true", i[e] instanceof Ub && kO(t, a), a || (a = By(e)), o ? zO(a, i, n) : RO(a, i), LO(t, a)) : (t[o ? "filled": "stroked"] = "false", kO(t, a))
		},
		VO = [[], [], []],
		GO = function(t, e) {
			var i, n, o, a, r, s, l = yO.M,
			h = yO.C,
			u = yO.L,
			c = yO.A,
			d = yO.Q,
			f = [],
			p = t.data,
			g = t.len();
			for (a = 0; a < g;) {
				switch (o = p[a++], n = "", i = 0, o) {
				case l:
					n = " m ",
					i = 1,
					r = p[a++],
					s = p[a++],
					VO[0][0] = r,
					VO[0][1] = s;
					break;
				case u:
					n = " l ",
					i = 1,
					r = p[a++],
					s = p[a++],
					VO[0][0] = r,
					VO[0][1] = s;
					break;
				case d:
				case h:
					n = " c ",
					i = 3;
					var m, v, y = p[a++],
					x = p[a++],
					_ = p[a++],
					w = p[a++];
					o === d ? (m = _, v = w, _ = (_ + 2 * y) / 3, w = (w + 2 * x) / 3, y = (r + 2 * y) / 3, x = (s + 2 * x) / 3) : (m = p[a++], v = p[a++]),
					VO[0][0] = y,
					VO[0][1] = x,
					VO[1][0] = _,
					VO[1][1] = w,
					VO[2][0] = m,
					VO[2][1] = v,
					r = m,
					s = v;
					break;
				case c:
					var b = 0,
					S = 0,
					M = 1,
					I = 1,
					T = 0;
					e && (b = e[4], S = e[5], M = _O(e[0] * e[0] + e[1] * e[1]), I = _O(e[2] * e[2] + e[3] * e[3]), T = Math.atan2( - e[1] / I, e[0] / M));
					var A = p[a++],
					D = p[a++],
					C = p[a++],
					L = p[a++],
					k = p[a++] + T,
					P = p[a++] + k + T;
					a++;
					var O = p[a++],
					N = A + bO(k) * C,
					E = D + SO(k) * L,
					y = A + bO(P) * C,
					x = D + SO(P) * L,
					z = O ? " wa ": " at ";
					Math.abs(N - y) < 1e-4 && (Math.abs(P - k) > .01 ? O && (N += .0125) : Math.abs(E - D) < 1e-4 ? O && N < A || !O && N > A ? x -= .0125 : x += .0125 : O && E < D || !O && E > D ? y += .0125 : y -= .0125),
					f.push(z, xO(((A - C) * M + b) * IO - TO), ",", xO(((D - L) * I + S) * IO - TO), ",", xO(((A + C) * M + b) * IO - TO), ",", xO(((D + L) * I + S) * IO - TO), ",", xO((N * M + b) * IO - TO), ",", xO((E * I + S) * IO - TO), ",", xO((y * M + b) * IO - TO), ",", xO((x * I + S) * IO - TO)),
					r = y,
					s = x;
					break;
				case yO.R:
					var R = VO[0],
					B = VO[1];
					R[0] = p[a++],
					R[1] = p[a++],
					B[0] = R[0] + p[a++],
					B[1] = R[1] + p[a++],
					e && (Q(R, R, e), Q(B, B, e)),
					R[0] = xO(R[0] * IO - TO),
					B[0] = xO(B[0] * IO - TO),
					R[1] = xO(R[1] * IO - TO),
					B[1] = xO(B[1] * IO - TO),
					f.push(" m ", R[0], ",", R[1], " l ", B[0], ",", R[1], " l ", B[0], ",", B[1], " l ", R[0], ",", B[1]);
					break;
				case yO.Z:
					f.push(" x ")
				}
				if (i > 0) {
					f.push(n);
					for (var V = 0; V < i; V++) {
						var G = VO[V];
						e && Q(G, G, e),
						f.push(xO(G[0] * IO - TO), ",", xO(G[1] * IO - TO), V < i - 1 ? ",": "")
					}
				}
			}
			return f.join("")
		};
		Mn.prototype.brushVML = function(t) {
			var e = this.style,
			i = this._vmlEl;
			i || (i = By("shape"), AO(i), this._vmlEl = i),
			BO(i, "fill", e, this),
			BO(i, "stroke", e, this);
			var n = this.transform,
			o = null != n,
			a = i.getElementsByTagName("stroke")[0];
			if (a) {
				var r = e.lineWidth;
				if (o && !e.strokeNoScale) {
					var s = n[0] * n[3] - n[1] * n[2];
					r *= _O(wO(s))
				}
				a.weight = r + "px"
			}
			var l = this.path || (this.path = new ab);
			this.__dirtyPath && (l.beginPath(), this.buildPath(l, this.shape), l.toStatic(), this.__dirtyPath = !1),
			i.path = GO(l, this.transform),
			i.style.zIndex = PO(this.zlevel, this.z, this.z2),
			LO(t, i),
			null != e.text ? this.drawRectText(t, this.getBoundingRect()) : this.removeRectText(t)
		},
		Mn.prototype.onRemove = function(t) {
			kO(t, this._vmlEl),
			this.removeRectText(t)
		},
		Mn.prototype.onAdd = function(t) {
			LO(t, this._vmlEl),
			this.appendRectText(t)
		};
		var WO = function(t) {
			return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
		};
		Je.prototype.brushVML = function(t) {
			var e, i, n = this.style,
			o = n.image;
			if (WO(o)) {
				var a = o.src;
				if (a === this._imageSrc) e = this._imageWidth,
				i = this._imageHeight;
				else {
					var r = o.runtimeStyle,
					s = r.width,
					l = r.height;
					r.width = "auto",
					r.height = "auto",
					e = o.width,
					i = o.height,
					r.width = s,
					r.height = l,
					this._imageSrc = a,
					this._imageWidth = e,
					this._imageHeight = i
				}
				o = a
			} else o === this._imageSrc && (e = this._imageWidth, i = this._imageHeight);
			if (o) {
				var h = n.x || 0,
				u = n.y || 0,
				c = n.width,
				d = n.height,
				f = n.sWidth,
				p = n.sHeight,
				g = n.sx || 0,
				m = n.sy || 0,
				v = f && p,
				y = this._vmlEl;
				y || (y = vO.createElement("div"), AO(y), this._vmlEl = y);
				var x, _ = y.style,
				w = !1,
				b = 1,
				S = 1;
				if (this.transform && (x = this.transform, b = _O(x[0] * x[0] + x[1] * x[1]), S = _O(x[2] * x[2] + x[3] * x[3]), w = x[1] || x[2]), w) {
					var M = [h, u],
					I = [h + c, u],
					T = [h, u + d],
					A = [h + c, u + d];
					Q(M, M, x),
					Q(I, I, x),
					Q(T, T, x),
					Q(A, A, x);
					var D = MO(M[0], I[0], T[0], A[0]),
					C = MO(M[1], I[1], T[1], A[1]),
					L = [];
					L.push("M11=", x[0] / b, ",", "M12=", x[2] / S, ",", "M21=", x[1] / b, ",", "M22=", x[3] / S, ",", "Dx=", xO(h * b + x[4]), ",", "Dy=", xO(u * S + x[5])),
					_.padding = "0 " + xO(D) + "px " + xO(C) + "px 0",
					_.filter = "progid:DXImageTransform.Microsoft.Matrix(" + L.join("") + ", SizingMethod=clip)"
				} else x && (h = h * b + x[4], u = u * S + x[5]),
				_.filter = "",
				_.left = xO(h) + "px",
				_.top = xO(u) + "px";
				var k = this._imageEl,
				P = this._cropEl;
				k || (k = vO.createElement("div"), this._imageEl = k);
				var O = k.style;
				if (v) {
					if (e && i) O.width = xO(b * e * c / f) + "px",
					O.height = xO(S * i * d / p) + "px";
					else {
						var N = new Image,
						E = this;
						N.onload = function() {
							N.onload = null,
							e = N.width,
							i = N.height,
							O.width = xO(b * e * c / f) + "px",
							O.height = xO(S * i * d / p) + "px",
							E._imageWidth = e,
							E._imageHeight = i,
							E._imageSrc = o
						},
						N.src = o
					}
					P || ((P = vO.createElement("div")).style.overflow = "hidden", this._cropEl = P);
					var z = P.style;
					z.width = xO((c + g * c / f) * b),
					z.height = xO((d + m * d / p) * S),
					z.filter = "progid:DXImageTransform.Microsoft.Matrix(Dx=" + -g * c / f * b + ",Dy=" + -m * d / p * S + ")",
					P.parentNode || y.appendChild(P),
					k.parentNode != P && P.appendChild(k)
				} else O.width = xO(b * c) + "px",
				O.height = xO(S * d) + "px",
				y.appendChild(k),
				P && P.parentNode && (y.removeChild(P), this._cropEl = null);
				var R = "",
				B = n.opacity;
				B < 1 && (R += ".Alpha(opacity=" + xO(100 * B) + ") "),
				R += "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + o + ", SizingMethod=scale)",
				O.filter = R,
				y.style.zIndex = PO(this.zlevel, this.z, this.z2),
				LO(t, y),
				null != n.text && this.drawRectText(t, this.getBoundingRect())
			}
		},
		Je.prototype.onRemove = function(t) {
			kO(t, this._vmlEl),
			this._vmlEl = null,
			this._cropEl = null,
			this._imageEl = null,
			this.removeRectText(t)
		},
		Je.prototype.onAdd = function(t) {
			LO(t, this._vmlEl),
			this.appendRectText(t)
		};
		var FO, HO = {},
		ZO = 0,
		UO = document.createElement("div"),
		jO = function(t) {
			var e = HO[t];
			if (!e) {
				ZO > 100 && (ZO = 0, HO = {});
				var i, n = UO.style;
				try {
					n.font = t,
					i = n.fontFamily.split(",")[0]
				} catch(t) {}
				e = {
					style: n.fontStyle || "normal",
					variant: n.fontVariant || "normal",
					weight: n.fontWeight || "normal",
					size: 0 | parseFloat(n.fontSize || 12),
					family: i || "Microsoft YaHei"
				},
				HO[t] = e,
				ZO++
			}
			return e
		}; !
		function(t, e) {
			H_[t] = e
		} ("measureText",
		function(t, e) {
			var i = vO;
			FO || ((FO = i.createElement("div")).style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", vO.body.appendChild(FO));
			try {
				FO.style.font = e
			} catch(t) {}
			return FO.innerHTML = "",
			FO.appendChild(i.createTextNode(t)),
			{
				width: FO.offsetWidth
			}
		});
		for (var XO = new Kt,
		YO = [X_, Ke, Je, Mn, Cb], qO = 0; qO < YO.length; qO++) {
			var $O = YO[qO].prototype;
			$O.drawRectText = function(t, e, i, n) {
				var o = this.style;
				this.__dirty && Oe(o);
				var a = o.text;
				if (null != a && (a += ""), a) {
					if (o.rich) {
						var r = Ce(a, o);
						a = [];
						for (var s = 0; s < r.lines.length; s++) {
							for (var l = r.lines[s].tokens, h = [], u = 0; u < l.length; u++) h.push(l[u].text);
							a.push(h.join(""))
						}
						a = a.join("\n")
					}
					var c, d, f = o.textAlign,
					p = o.textVerticalAlign,
					g = jO(o.font),
					m = g.style + " " + g.variant + " " + g.weight + " " + g.size + 'px "' + g.family + '"';
					i = i || me(a, m, f, p);
					var v = this.transform;
					if (v && !n && (XO.copy(e), XO.applyTransform(v), e = XO), n) c = e.x,
					d = e.y;
					else {
						var y = o.textPosition,
						x = o.textDistance;
						if (y instanceof Array) c = e.x + OO(y[0], e.width),
						d = e.y + OO(y[1], e.height),
						f = f || "left";
						else {
							var _ = we(y, e, x);
							c = _.x,
							d = _.y,
							f = f || _.textAlign,
							p = p || _.textVerticalAlign
						}
					}
					c = xe(c, i.width, f),
					d = _e(d, i.height, p),
					d += i.height / 2;
					var w, b, S, M = By,
					I = this._textVmlEl;
					I ? b = (w = (S = I.firstChild).nextSibling).nextSibling: (I = M("line"), w = M("path"), b = M("textpath"), S = M("skew"), b.style["v-text-align"] = "left", AO(I), w.textpathok = !0, b.on = !0, I.from = "0 0", I.to = "1000 0.05", LO(I, S), LO(I, w), LO(I, b), this._textVmlEl = I);
					var T = [c, d],
					A = I.style;
					v && n ? (Q(T, T, v), S.on = !0, S.matrix = v[0].toFixed(3) + "," + v[2].toFixed(3) + "," + v[1].toFixed(3) + "," + v[3].toFixed(3) + ",0,0", S.offset = (xO(T[0]) || 0) + "," + (xO(T[1]) || 0), S.origin = "0 0", A.left = "0px", A.top = "0px") : (S.on = !1, A.left = xO(c) + "px", A.top = xO(d) + "px"),
					b.string = DO(a);
					try {
						b.style.font = m
					} catch(t) {}
					BO(I, "fill", {
						fill: o.textFill,
						opacity: o.opacity
					},
					this),
					BO(I, "stroke", {
						stroke: o.textStroke,
						opacity: o.opacity,
						lineDash: o.lineDash
					},
					this),
					I.style.zIndex = PO(this.zlevel, this.z, this.z2),
					LO(t, I)
				}
			},
			$O.removeRectText = function(t) {
				kO(t, this._textVmlEl),
				this._textVmlEl = null
			},
			$O.appendRectText = function(t) {
				LO(t, this._textVmlEl)
			}
		}
		Cb.prototype.brushVML = function(t) {
			var e = this.style;
			null != e.text ? this.drawRectText(t, {
				x: e.x || 0,
				y: e.y || 0,
				width: 0,
				height: 0
			},
			this.getBoundingRect(), !0) : this.removeRectText(t)
		},
		Cb.prototype.onRemove = function(t) {
			this.removeRectText(t)
		},
		Cb.prototype.onAdd = function(t) {
			this.appendRectText(t)
		}
	}
	Wy.prototype = {
		constructor: Wy,
		getType: function() {
			return "vml"
		},
		getViewportRoot: function() {
			return this._vmlViewport
		},
		getViewportRootOffset: function() {
			var t = this.getViewportRoot();
			if (t) return {
				offsetLeft: t.offsetLeft || 0,
				offsetTop: t.offsetTop || 0
			}
		},
		refresh: function() {
			var t = this.storage.getDisplayList(!0, !0);
			this._paintList(t)
		},
		_paintList: function(t) {
			for (var e = this._vmlRoot,
			i = 0; i < t.length; i++) {
				var n = t[i];
				n.invisible || n.ignore ? (n.__alreadyNotVisible || n.onRemove(e), n.__alreadyNotVisible = !0) : (n.__alreadyNotVisible && n.onAdd(e), n.__alreadyNotVisible = !1, n.__dirty && (n.beforeBrush && n.beforeBrush(), (n.brushVML || n.brush).call(n, e), n.afterBrush && n.afterBrush())),
				n.__dirty = !1
			}
			this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1)
		},
		resize: function(t, e) {
			var t = null == t ? this._getWidth() : t,
			e = null == e ? this._getHeight() : e;
			if (this._width != t || this._height != e) {
				this._width = t,
				this._height = e;
				var i = this._vmlViewport.style;
				i.width = t + "px",
				i.height = e + "px"
			}
		},
		dispose: function() {
			this.root.innerHTML = "",
			this._vmlRoot = this._vmlViewport = this.storage = null
		},
		getWidth: function() {
			return this._width
		},
		getHeight: function() {
			return this._height
		},
		clear: function() {
			this._vmlViewport && this.root.removeChild(this._vmlViewport)
		},
		_getWidth: function() {
			var t = this.root,
			e = t.currentStyle;
			return (t.clientWidth || Gy(e.width)) - Gy(e.paddingLeft) - Gy(e.paddingRight) | 0
		},
		_getHeight: function() {
			var t = this.root,
			e = t.currentStyle;
			return (t.clientHeight || Gy(e.height)) - Gy(e.paddingTop) - Gy(e.paddingBottom) | 0
		}
	},
	d(["getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"],
	function(t) {
		Wy.prototype[t] = Fy(t)
	}),
	wi("vml", Wy);
	var KO = "http://www.w3.org/2000/svg",
	JO = ab.CMD,
	QO = Array.prototype.join,
	tN = "none",
	eN = Math.round,
	iN = Math.sin,
	nN = Math.cos,
	oN = Math.PI,
	aN = 2 * Math.PI,
	rN = 180 / oN,
	sN = 1e-4,
	lN = {};
	lN.brush = function(t) {
		var e = t.style,
		i = t.__svgEl;
		i || (i = Hy("path"), t.__svgEl = i),
		t.path || t.createPathProxy();
		var n = t.path;
		if (t.__dirtyPath) {
			n.beginPath(),
			t.buildPath(n, t.shape),
			t.__dirtyPath = !1;
			var o = Jy(n);
			o.indexOf("NaN") < 0 && qy(i, "d", o)
		}
		Ky(i, e),
		Yy(i, t.transform),
		null != e.text && dN(t, t.getBoundingRect())
	};
	var hN = {};
	hN.brush = function(t) {
		var e = t.style,
		i = e.image;
		if (i instanceof HTMLImageElement && (i = i.src), i) {
			var n = e.x || 0,
			o = e.y || 0,
			a = e.width,
			r = e.height,
			s = t.__svgEl;
			s || (s = Hy("image"), t.__svgEl = s),
			i !== t.__imageSrc && ($y(s, "href", i), t.__imageSrc = i),
			qy(s, "width", a),
			qy(s, "height", r),
			qy(s, "x", n),
			qy(s, "y", o),
			Yy(s, t.transform),
			null != e.text && dN(t, t.getBoundingRect())
		}
	};
	var uN = {},
	cN = new Kt,
	dN = function(t, e, i) {
		var n = t.style;
		t.__dirty && Oe(n);
		var o = n.text;
		if (null != o) {
			o += "";
			var a = t.__textSvgEl;
			if (a || (a = Hy("text"), t.__textSvgEl = a), Ky(a, n, !0), t instanceof Cb || t.style.transformText) Yy(a, t.transform);
			else if (t.transform) cN.copy(e),
			cN.applyTransform(t.transform),
			e = cN;
			else {
				var r = t.transformCoordToGlobal(e.x, e.y);
				e.x = r[0],
				e.y = r[1]
			}
			var s, l, h = n.textPosition,
			u = n.textDistance,
			c = n.textAlign || "left";
			"number" == typeof n.fontSize && (n.fontSize += "px");
			var d = n.font || [n.fontStyle || "", n.fontWeight || "", n.fontSize || "", n.fontFamily || ""].join(" ") || F_,
			f = Qy(n.textVerticalAlign),
			p = (i = me(o, d, c, f)).lineHeight;
			if (h instanceof Array) s = e.x + h[0],
			l = e.y + h[1];
			else {
				var g = we(h, e, u);
				s = g.x,
				l = g.y,
				f = Qy(g.textVerticalAlign),
				c = g.textAlign
			}
			qy(a, "alignment-baseline", f),
			d && (a.style.font = d);
			var m = n.textPadding;
			qy(a, "x", s),
			qy(a, "y", l);
			var v = o.split("\n"),
			y = v.length,
			x = c;
			"left" === x ? (x = "start", m && (s += m[3])) : "right" === x ? (x = "end", m && (s -= m[1])) : "center" === x && (x = "middle", m && (s += (m[3] - m[1]) / 2));
			var _ = 0;
			if ("baseline" === f ? (_ = -i.height + p, m && (_ -= m[2])) : "middle" === f ? (_ = ( - i.height + p) / 2, m && (l += (m[0] - m[2]) / 2)) : m && (_ += m[0]), t.__text !== o || t.__textFont !== d) {
				var w = t.__tspanList || [];
				t.__tspanList = w;
				for (S = 0; S < y; S++)(M = w[S]) ? M.innerHTML = "": (M = w[S] = Hy("tspan"), a.appendChild(M), qy(M, "alignment-baseline", f), qy(M, "text-anchor", x)),
				qy(M, "x", s),
				qy(M, "y", l + S * p + _),
				M.appendChild(document.createTextNode(v[S]));
				for (; S < w.length; S++) a.removeChild(w[S]);
				w.length = y,
				t.__text = o,
				t.__textFont = d
			} else if (t.__tspanList.length) for (var b = t.__tspanList.length,
			S = 0; S < b; ++S) {
				var M = t.__tspanList[S];
				M && (qy(M, "x", s), qy(M, "y", l + S * p + _))
			}
		}
	};
	uN.drawRectText = dN,
	uN.brush = function(t) {
		var e = t.style;
		null != e.text && (e.textPosition = [0, 0], dN(t, {
			x: e.x || 0,
			y: e.y || 0,
			width: 0,
			height: 0
		},
		t.getBoundingRect()))
	},
	tx.prototype = {
		diff: function(t, e, i) {
			i || (i = function(t, e) {
				return t === e
			}),
			this.equals = i;
			var n = this;
			t = t.slice();
			var o = (e = e.slice()).length,
			a = t.length,
			r = 1,
			s = o + a,
			l = [{
				newPos: -1,
				components: []
			}],
			h = this.extractCommon(l[0], e, t, 0);
			if (l[0].newPos + 1 >= o && h + 1 >= a) {
				for (var u = [], c = 0; c < e.length; c++) u.push(c);
				return [{
					indices: u,
					count: e.length
				}]
			}
			for (; r <= s;) {
				var d = function() {
					for (var i = -1 * r; i <= r; i += 2) {
						var s, h = l[i - 1],
						u = l[i + 1],
						c = (u ? u.newPos: 0) - i;
						h && (l[i - 1] = void 0);
						var d = h && h.newPos + 1 < o,
						f = u && 0 <= c && c < a;
						if (d || f) {
							if (!d || f && h.newPos < u.newPos ? (s = ix(u), n.pushComponent(s.components, void 0, !0)) : ((s = h).newPos++, n.pushComponent(s.components, !0, void 0)), c = n.extractCommon(s, e, t, i), s.newPos + 1 >= o && c + 1 >= a) return ex(0, s.components);
							l[i] = s
						} else l[i] = void 0
					}
					r++
				} ();
				if (d) return d
			}
		},
		pushComponent: function(t, e, i) {
			var n = t[t.length - 1];
			n && n.added === e && n.removed === i ? t[t.length - 1] = {
				count: n.count + 1,
				added: e,
				removed: i
			}: t.push({
				count: 1,
				added: e,
				removed: i
			})
		},
		extractCommon: function(t, e, i, n) {
			for (var o = e.length,
			a = i.length,
			r = t.newPos,
			s = r - n,
			l = 0; r + 1 < o && s + 1 < a && this.equals(e[r + 1], i[s + 1]);) r++,
			s++,
			l++;
			return l && t.components.push({
				count: l
			}),
			t.newPos = r,
			s
		},
		tokenize: function(t) {
			return t.slice()
		},
		join: function(t) {
			return t.slice()
		}
	};
	var fN = new tx,
	pN = function(t, e, i) {
		return fN.diff(t, e, i)
	};
	nx.prototype.createElement = Hy,
	nx.prototype.getDefs = function(t) {
		var e = this._svgRoot,
		i = this._svgRoot.getElementsByTagName("defs");
		return 0 === i.length ? t ? ((i = e.insertBefore(this.createElement("defs"), e.firstChild)).contains || (i.contains = function(t) {
			var e = i.children;
			if (!e) return ! 1;
			for (var n = e.length - 1; n >= 0; --n) if (e[n] === t) return ! 0;
			return ! 1
		}), i) : null: i[0]
	},
	nx.prototype.update = function(t, e) {
		if (t) {
			var i = this.getDefs(!1);
			if (t[this._domName] && i.contains(t[this._domName]))"function" == typeof e && e(t);
			else {
				var n = this.add(t);
				n && (t[this._domName] = n)
			}
		}
	},
	nx.prototype.addDom = function(t) {
		this.getDefs(!0).appendChild(t)
	},
	nx.prototype.removeDom = function(t) {
		var e = this.getDefs(!1);
		e && t[this._domName] && (e.removeChild(t[this._domName]), t[this._domName] = null)
	},
	nx.prototype.getDoms = function() {
		var t = this.getDefs(!1);
		if (!t) return [];
		var e = [];
		return d(this._tagNames,
		function(i) {
			var n = t.getElementsByTagName(i);
			e = e.concat([].slice.call(n))
		}),
		e
	},
	nx.prototype.markAllUnused = function() {
		var t = this;
		d(this.getDoms(),
		function(e) {
			e[t._markLabel] = "0"
		})
	},
	nx.prototype.markUsed = function(t) {
		t && (t[this._markLabel] = "1")
	},
	nx.prototype.removeUnused = function() {
		var t = this.getDefs(!1);
		if (t) {
			var e = this;
			d(this.getDoms(),
			function(i) {
				"1" !== i[e._markLabel] && t.removeChild(i)
			})
		}
	},
	nx.prototype.getSvgProxy = function(t) {
		return t instanceof Mn ? lN: t instanceof Je ? hN: t instanceof Cb ? uN: lN
	},
	nx.prototype.getTextSvgElement = function(t) {
		return t.__textSvgEl
	},
	nx.prototype.getSvgElement = function(t) {
		return t.__svgEl
	},
	h(ox, nx),
	ox.prototype.addWithoutUpdate = function(t, e) {
		if (e && e.style) {
			var i = this;
			d(["fill", "stroke"],
			function(n) {
				if (e.style[n] && ("linear" === e.style[n].type || "radial" === e.style[n].type)) {
					var o, a = e.style[n],
					r = i.getDefs(!0);
					a._dom ? (o = a._dom, r.contains(a._dom) || i.addDom(o)) : o = i.add(a),
					i.markUsed(e);
					var s = o.getAttribute("id");
					t.setAttribute(n, "url(#" + s + ")")
				}
			})
		}
	},
	ox.prototype.add = function(t) {
		var e;
		if ("linear" === t.type) e = this.createElement("linearGradient");
		else {
			if ("radial" !== t.type) return v_("Illegal gradient type."),
			null;
			e = this.createElement("radialGradient")
		}
		return t.id = t.id || this.nextId++,
		e.setAttribute("id", "zr" + this._zrId + "-gradient-" + t.id),
		this.updateDom(t, e),
		this.addDom(e),
		e
	},
	ox.prototype.update = function(t) {
		var e = this;
		nx.prototype.update.call(this, t,
		function() {
			var i = t.type,
			n = t._dom.tagName;
			"linear" === i && "linearGradient" === n || "radial" === i && "radialGradient" === n ? e.updateDom(t, t._dom) : (e.removeDom(t), e.add(t))
		})
	},
	ox.prototype.updateDom = function(t, e) {
		if ("linear" === t.type) e.setAttribute("x1", t.x),
		e.setAttribute("y1", t.y),
		e.setAttribute("x2", t.x2),
		e.setAttribute("y2", t.y2);
		else {
			if ("radial" !== t.type) return void v_("Illegal gradient type.");
			e.setAttribute("cx", t.x),
			e.setAttribute("cy", t.y),
			e.setAttribute("r", t.r)
		}
		t.global ? e.setAttribute("gradientUnits", "userSpaceOnUse") : e.setAttribute("gradientUnits", "objectBoundingBox"),
		e.innerHTML = "";
		for (var i = t.colorStops,
		n = 0,
		o = i.length; n < o; ++n) {
			var a = this.createElement("stop");
			a.setAttribute("offset", 100 * i[n].offset + "%"),
			a.setAttribute("stop-color", i[n].color),
			e.appendChild(a)
		}
		t._dom = e
	},
	ox.prototype.markUsed = function(t) {
		if (t.style) {
			var e = t.style.fill;
			e && e._dom && nx.prototype.markUsed.call(this, e._dom),
			(e = t.style.stroke) && e._dom && nx.prototype.markUsed.call(this, e._dom)
		}
	},
	h(ax, nx),
	ax.prototype.update = function(t) {
		var e = this.getSvgElement(t);
		e && this.updateDom(e, t.__clipPaths, !1);
		var i = this.getTextSvgElement(t);
		i && this.updateDom(i, t.__clipPaths, !0),
		this.markUsed(t)
	},
	ax.prototype.updateDom = function(t, e, i) {
		if (e && e.length > 0) {
			var n, o, a = this.getDefs(!0),
			r = e[0],
			s = i ? "_textDom": "_dom";
			r[s] ? (o = r[s].getAttribute("id"), n = r[s], a.contains(n) || a.appendChild(n)) : (o = "zr" + this._zrId + "-clip-" + this.nextId, ++this.nextId, (n = this.createElement("clipPath")).setAttribute("id", o), a.appendChild(n), r[s] = n);
			var l = this.getSvgProxy(r);
			if (r.transform && r.parent.invTransform && !i) {
				var h = Array.prototype.slice.call(r.transform);
				ut(r.transform, r.parent.invTransform, r.transform),
				l.brush(r),
				r.transform = h
			} else l.brush(r);
			var u = this.getSvgElement(r);
			n.innerHTML = "",
			n.appendChild(u.cloneNode()),
			t.setAttribute("clip-path", "url(#" + o + ")"),
			e.length > 1 && this.updateDom(n, e.slice(1), i)
		} else t && t.setAttribute("clip-path", "none")
	},
	ax.prototype.markUsed = function(t) {
		var e = this;
		t.__clipPaths && t.__clipPaths.length > 0 && d(t.__clipPaths,
		function(t) {
			t._dom && nx.prototype.markUsed.call(e, t._dom),
			t._textDom && nx.prototype.markUsed.call(e, t._textDom)
		})
	},
	h(rx, nx),
	rx.prototype.addWithoutUpdate = function(t, e) {
		if (e && sx(e.style)) {
			var i, n = e.style;
			n._shadowDom ? (i = n._shadowDom, this.getDefs(!0).contains(n._shadowDom) || this.addDom(i)) : i = this.add(e),
			this.markUsed(e);
			var o = i.getAttribute("id");
			t.style.filter = "url(#" + o + ")"
		}
	},
	rx.prototype.add = function(t) {
		var e = this.createElement("filter"),
		i = t.style;
		return i._shadowDomId = i._shadowDomId || this.nextId++,
		e.setAttribute("id", "zr" + this._zrId + "-shadow-" + i._shadowDomId),
		this.updateDom(t, e),
		this.addDom(e),
		e
	},
	rx.prototype.update = function(t, e) {
		var i = e.style;
		if (sx(i)) {
			var n = this;
			nx.prototype.update.call(this, e,
			function(t) {
				n.updateDom(e, t._shadowDom)
			})
		} else this.remove(t, i)
	},
	rx.prototype.remove = function(t, e) {
		null != e._shadowDomId && (this.removeDom(e), t.style.filter = "")
	},
	rx.prototype.updateDom = function(t, e) {
		var i = e.getElementsByTagName("feDropShadow");
		i = 0 === i.length ? this.createElement("feDropShadow") : i[0];
		var n, o, a, r, s = t.style,
		l = t.scale ? t.scale[0] || 1 : 1,
		h = t.scale ? t.scale[1] || 1 : 1;
		if (s.shadowBlur || s.shadowOffsetX || s.shadowOffsetY) n = s.shadowOffsetX || 0,
		o = s.shadowOffsetY || 0,
		a = s.shadowBlur,
		r = s.shadowColor;
		else {
			if (!s.textShadowBlur) return void this.removeDom(e, s);
			n = s.textShadowOffsetX || 0,
			o = s.textShadowOffsetY || 0,
			a = s.textShadowBlur,
			r = s.textShadowColor
		}
		i.setAttribute("dx", n / l),
		i.setAttribute("dy", o / h),
		i.setAttribute("flood-color", r);
		var u = a / 2 / l + " " + a / 2 / h;
		i.setAttribute("stdDeviation", u),
		e.setAttribute("x", "-100%"),
		e.setAttribute("y", "-100%"),
		e.setAttribute("width", Math.ceil(a / 2 * 200) + "%"),
		e.setAttribute("height", Math.ceil(a / 2 * 200) + "%"),
		e.appendChild(i),
		s._shadowDom = e
	},
	rx.prototype.markUsed = function(t) {
		var e = t.style;
		e && e._shadowDom && nx.prototype.markUsed.call(this, e._shadowDom)
	};
	var gN = function(t, e, i, n) {
		this.root = t,
		this.storage = e,
		this._opts = i = a({},
		i || {});
		var o = Hy("svg");
		o.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
		o.setAttribute("version", "1.1"),
		o.setAttribute("baseProfile", "full"),
		o.style.cssText = "user-select:none;position:absolute;left:0;top:0;",
		this.gradientManager = new ox(n, o),
		this.clipPathManager = new ax(n, o),
		this.shadowManager = new rx(n, o);
		var r = document.createElement("div");
		r.style.cssText = "overflow:hidden;position:relative",
		this._svgRoot = o,
		this._viewport = r,
		t.appendChild(r),
		r.appendChild(o),
		this.resize(i.width, i.height),
		this._visibleList = []
	};
	gN.prototype = {
		constructor: gN,
		getType: function() {
			return "svg"
		},
		getViewportRoot: function() {
			return this._viewport
		},
		getViewportRootOffset: function() {
			var t = this.getViewportRoot();
			if (t) return {
				offsetLeft: t.offsetLeft || 0,
				offsetTop: t.offsetTop || 0
			}
		},
		refresh: function() {
			var t = this.storage.getDisplayList(!0);
			this._paintList(t)
		},
		_paintList: function(t) {
			this.gradientManager.markAllUnused(),
			this.clipPathManager.markAllUnused(),
			this.shadowManager.markAllUnused();
			var e, i = this._svgRoot,
			n = this._visibleList,
			o = t.length,
			a = [];
			for (e = 0; e < o; e++) {
				var r = hx(f = t[e]),
				s = gx(f) || px(f);
				f.invisible || (f.__dirty && (r && r.brush(f), this.clipPathManager.update(f), f.style && (this.gradientManager.update(f.style.fill), this.gradientManager.update(f.style.stroke), this.shadowManager.update(s, f)), f.__dirty = !1), a.push(f))
			}
			var l, h = pN(n, a);
			for (e = 0; e < h.length; e++) if ((c = h[e]).removed) for (d = 0; d < c.count; d++) {
				var s = gx(f = n[c.indices[d]]),
				u = px(f);
				fx(i, s),
				fx(i, u)
			}
			for (e = 0; e < h.length; e++) {
				var c = h[e];
				if (c.added) for (d = 0; d < c.count; d++) {
					var s = gx(f = a[c.indices[d]]),
					u = px(f);
					l ? cx(i, s, l) : dx(i, s),
					s ? cx(i, u, s) : l ? cx(i, u, l) : dx(i, u),
					cx(i, u, s),
					l = u || s || l,
					this.gradientManager.addWithoutUpdate(s, f),
					this.shadowManager.addWithoutUpdate(l, f),
					this.clipPathManager.markUsed(f)
				} else if (!c.removed) for (var d = 0; d < c.count; d++) {
					var f = a[c.indices[d]];
					l = s = px(f) || gx(f) || l,
					this.gradientManager.markUsed(f),
					this.gradientManager.addWithoutUpdate(s, f),
					this.shadowManager.markUsed(f),
					this.shadowManager.addWithoutUpdate(s, f),
					this.clipPathManager.markUsed(f)
				}
			}
			this.gradientManager.removeUnused(),
			this.clipPathManager.removeUnused(),
			this.shadowManager.removeUnused(),
			this._visibleList = a
		},
		_getDefs: function(t) {
			var e = this._svgRoot,
			i = this._svgRoot.getElementsByTagName("defs");
			return 0 === i.length ? t ? ((i = e.insertBefore(Hy("defs"), e.firstChild)).contains || (i.contains = function(t) {
				var e = i.children;
				if (!e) return ! 1;
				for (var n = e.length - 1; n >= 0; --n) if (e[n] === t) return ! 0;
				return ! 1
			}), i) : null: i[0]
		},
		resize: function(t, e) {
			var i = this._viewport;
			i.style.display = "none";
			var n = this._opts;
			if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width !== t || this._height !== e) {
				this._width = t,
				this._height = e;
				var o = i.style;
				o.width = t + "px",
				o.height = e + "px";
				var a = this._svgRoot;
				a.setAttribute("width", t),
				a.setAttribute("height", e)
			}
		},
		getWidth: function() {
			return this._width
		},
		getHeight: function() {
			return this._height
		},
		_getSize: function(t) {
			var e = this._opts,
			i = ["width", "height"][t],
			n = ["clientWidth", "clientHeight"][t],
			o = ["paddingLeft", "paddingTop"][t],
			a = ["paddingRight", "paddingBottom"][t];
			if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
			var r = this.root,
			s = document.defaultView.getComputedStyle(r);
			return (r[n] || lx(s[i]) || lx(r.style[i])) - (lx(s[o]) || 0) - (lx(s[a]) || 0) | 0
		},
		dispose: function() {
			this.root.innerHTML = "",
			this._svgRoot = this._viewport = this.storage = null
		},
		clear: function() {
			this._viewport && this.root.removeChild(this._viewport)
		},
		pathToSvg: function() {
			this.refresh();
			var t = this._svgRoot.outerHTML;
			return "data:img/svg+xml;utf-8," + unescape(t)
		}
	},
	d(["getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"],
	function(t) {
		gN.prototype[t] = mx(t)
	}),
	wi("svg", gN),
	t.version = "4.0.2",
	t.dependencies = BM,
	t.PRIORITY = FM,
	t.init = function(t, e, i) {
		var n = as(t);
		if (n) return n;
		var o = new Rr(t, e, i);
		return o.id = "ec_" + aI++,
		nI[o.id] = o,
		Ei(t, sI, o.id),
		ns(o),
		o
	},
	t.connect = function(t) {
		if (y(t)) {
			var e = t;
			t = null,
			NM(e,
			function(e) {
				null != e.group && (t = e.group)
			}),
			t = t || "g_" + rI++,
			NM(e,
			function(e) {
				e.group = t
			})
		}
		return oI[t] = !0,
		t
	},
	t.disConnect = os,
	t.disconnect = hI,
	t.dispose = function(t) {
		"string" == typeof t ? t = nI[t] : t instanceof Rr || (t = as(t)),
		t instanceof Rr && !t.isDisposed() && t.dispose()
	},
	t.getInstanceByDom = as,
	t.getInstanceById = function(t) {
		return nI[t]
	},
	t.registerTheme = rs,
	t.registerPreprocessor = ss,
	t.registerProcessor = ls,
	t.registerPostUpdate = function(t) {
		QM.push(t)
	},
	t.registerAction = hs,
	t.registerCoordinateSystem = us,
	t.getCoordinateSystemDimensions = function(t) {
		var e = Aa.get(t);
		if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()
	},
	t.registerLayout = cs,
	t.registerVisual = ds,
	t.registerLoading = ps,
	t.extendComponentModel = gs,
	t.extendComponentView = ms,
	t.extendSeriesModel = vs,
	t.extendChartView = ys,
	t.setCanvasCreator = function(t) {
		e("createCanvas", t)
	},
	t.registerMap = function(t, e, i) {
		e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson),
		"string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()),
		lI[t] = {
			geoJson: e,
			specialAreas: i
		}
	},
	t.getMap = xs,
	t.dataTool = uI,
	t.zrender = fw,
	t.graphic = tS,
	t.number = cS,
	t.format = yS,
	t.throttle = vr,
	t.helper = JI,
	t.matrix = Yx,
	t.vector = Wx,
	t.color = c_,
	t.parseGeoJSON = tT,
	t.parseGeoJson = oT,
	t.util = aT,
	t.List = yI,
	t.Model = _o,
	t.Axis = nT,
	t.env = _x
});