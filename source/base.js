/*! jQuery v1.8.3 jquery.com | jquery.org/license 中文*/
(function(a) { a.fn.Big_sml = function(c) {
        var n = { speed: 1200, auto: true, trigger: "mouseover", big_cls: ".big_cls", ctag: "li", smlul_cls: ".sml_cls ul", sml_cls: ".sml_cls", stag: "li", smlz_cls: "smlz_cls", prev_cls: ".left", next_cls: ".right", btn: "prev", mar_z: 0 };
        n = a.extend({}, n, c);
        var p = a(this).find(n.sml_cls),
            o = p.find(n.ctag);
        var z = a(this).find(n.big_cls),
            b = z.find(n.stag);
        var e = a(this).find(n.prev_cls);
        var g = a(this).find(n.next_cls);
        var l = a(this).find(n.smlul_cls);
        var m = a(this).find(n.hover_cls);
        var u = b.width();
        var q = o.width() + n.mar_z;
        var s = true;
        var i = 0,
            j = -1,
            k = 0,
            t, r;
        l.css({ width: o.length * q + "px", "margin-left": 0 });
        o.eq(0).addClass(n.smlz_cls);
        b.each(function(A) {
            (A == 0) ? a(this).css({ position: "absolute", "z-index": 9, left: 0, top: 0 }): a(this).css({ position: "absolute", "z-index": 1, opacity: 0, left: 0, top: 0 }) });
        o.bind(n.trigger, function() { i = a(this).index();
            v(i) });
        e.click(function() { f(-1, o.length - 1) });
        g.click(function() { f(1, 0) });

        function v(A) { b.eq(k).stop().animate({ opacity: 0 }, 300).css("z-index", 1).end().eq(A).css("z-index", 9).stop().animate({ opacity: 1 }, 300);
            o.eq(k).removeClass(n.smlz_cls);
            o.eq(A).addClass(n.smlz_cls);
            k = A }

        function d() {
            if (parseInt(l.css("margin-left")) == -(o.length - n.num) * q && j == -1) { j = 0 } else {
                if (parseInt(l.css("margin-left")) == 0 && j == 1) { j = 0 } } }

        function f(A, B) {
            if (s) { s = false;
                j = A;
                d();
                if (k == B && A == -1) { B = 0;
                    v(B);
                    j = o.length - n.num } else {
                    if (k == B && A == 1) { B = o.length - 1;
                        v(B);
                        j = -(o.length - n.num) } else { v(k - A) } }
                l.stop().animate({ "margin-left": "+=" + q * j + "px" }, 500, function() { s = true }) } }
        if (n.auto == true) { n.btn == "prev" ? r = e : r = g;
            t = setInterval(function() { r.click() }, n.speed);
            a(this).hover(function() { clearInterval(t) }, function() { t = setInterval(function() { r.click() }, n.speed) }) } } })(jQuery);
(function(a) { a.fn.Run_x = function(d) {
        var b = { speed: 1200, auto: true, content: ".content", trigger: "click", conbox: ".conbox", ctag: "li", copy: ".team1 li", prev: ".prev", next: ".next", prev_next: "prev", mar: 0 };
        b = a.extend({}, b, d);
        var u = a(this).find(b.conbox),
            p = u.find(b.ctag),
            q = a(this).find(b.copy),
            f = a(this).find(b.prev),
            v = a(this).find(b.next),
            r = a(this).find(b.content);
        for (var t = 0; t < p.length; t++) { u.append(q.eq(t).clone()) }
        var n = p.eq(0).width() + b.mar;
        var s = true,
            m = -1,
            z = "",
            c = "";
        var l = (u.find(b.ctag)).length;
        u.css("width", l * n + "px");

        function e() {
            if (parseInt(u.css("margin-left")) == 0 && m == 1) { u.stop().css("margin-left", -l * n / 2 + "px") }
            if (parseInt(u.css("margin-left")) == -l * n / 2 && m == -1) { u.stop().css("margin-left", "0") } }

        function j() { e();
            if (s) { s = false;
                u.stop().animate({ "margin-left": "+=" + n * m + "px" }, 500, function() { s = true }) } }

        function o() { m = -1;
            j() }

        function g() { m = 1;
            j() }

        function k() { clearInterval(z) }

        function A() {
            if (b.auto == true) { z = setInterval(function() { b.prev_next == "prev" ? o() : g() }, b.speed) } }
        f.bind(b.trigger, o);
        v.bind(b.trigger, g);
        if (b.auto == true) { A() }
        r.hover(k, A) } })(jQuery);
(function(a) { a.fn.Run_y = function(d) {
        var b = { speed: 1200, auto: true, content: ".content", trigger: "click", conbox: ".conbox", ctag: "li", copy: ".team1 li", prev: ".prev", next: ".next", prev_next: "prev", mar: 0 };
        b = a.extend({}, b, d);
        var u = a(this).find(b.conbox),
            p = u.find(b.ctag),
            q = a(this).find(b.copy),
            f = a(this).find(b.prev),
            v = a(this).find(b.next),
            r = a(this).find(b.content);
        for (var t = 0; t < p.length; t++) { u.append(q.eq(t).clone()) }
        var n = p.eq(0).height() + b.mar;
        var s = true,
            m = -1,
            z = "",
            c = "";
        var l = (u.find(b.ctag)).length;
        u.css("height", l * n + "px");

        function e() {
            if (parseInt(u.css("margin-top")) == 0 && m == 1) { u.stop().css("margin-top", -l * n / 2 + "px") }
            if (parseInt(u.css("margin-top")) == -l * n / 2 && m == -1) { u.stop().css("margin-top", "0") } }

        function j() { e();
            if (s) { s = false;
                u.stop().animate({ "margin-top": "+=" + n * m + "px" }, 500, function() { s = true }) } }

        function o() { m = -1;
            j() }

        function g() { m = 1;
            j() }

        function k() { clearInterval(z) }

        function A() {
            if (b.auto == true) { z = setInterval(function() { b.prev_next == "prev" ? o() : g() }, b.speed) } }
        f.bind(b.trigger, o);
        v.bind(b.trigger, g);
        if (b.auto == true) { A() }
        r.hover(k, A) } })(jQuery);
(function(a) { a.fn.Les_x = function(d) {
        var b = { speed: 1200, auto: true, content: ".content", trigger: "click", conbox: ".conbox", ctag: "li", copy: ".team1 li", prev_next: "prev", mar: 0 };
        b = a.extend({}, b, d);
        var u = a(this).find(b.conbox),
            p = u.find(b.ctag),
            q = a(this).find(b.copy),
            f = a(this).find(b.prev),
            v = a(this).find(b.next),
            r = a(this).find(b.content);
        for (var t = 0; t < p.length; t++) { u.append(q.eq(t).clone()) }
        var n = p.eq(0).width() + b.mar;
        var s = true,
            m = -1,
            z = "",
            c = "";
        var l = (u.find(b.ctag)).length;
        u.css("width", l * n + "px");
        b.prev_next == "prev" ? m = -1 : m = 1;

        function e() {
            if (parseInt(u.css("margin-left")) == 0 && m == 1) { u.stop().css("margin-left", -l * n / 2 + "px") }
            if (parseInt(u.css("margin-left")) == -l * n / 2 && m == -1) { u.stop().css("margin-left", "0") } }

        function j() { e();
            u.css("margin-left", parseInt(u.css("margin-left")) + m + "px") }

        function k() { clearInterval(z) }

        function A() {
            if (b.auto == true) { z = setInterval(function() { j() }, b.speed) } }

        function o() { m = -1 }

        function g() { m = 1 }
        f.bind(b.trigger, o);
        v.bind(b.trigger, g);
        if (b.auto == true) { A() }
        r.hover(k, A) } })(jQuery);
(function(a) { a.fn.Les_y = function(d) {
        var b = { speed: 1200, auto: true, content: ".content", trigger: "click", conbox: ".conbox", ctag: "li", copy: ".team1 li", prev_next: "prev", mar: 0 };
        b = a.extend({}, b, d);
        var s = a(this).find(b.conbox),
            n = s.find(b.ctag),
            o = a(this).find(b.copy),
            f = a(this).find(b.prev),
            t = a(this).find(b.next),
            p = a(this).find(b.content);
        for (var r = 0; r < n.length; r++) { s.append(o.eq(r).clone()) }
        var m = n.eq(0).height() + b.mar;
        var q = true,
            l = -1,
            u = "",
            c = "";
        var k = (s.find(b.ctag)).length;
        s.css("height", k * m + "px");
        b.prev_next == "prev" ? l = -1 : l = 1;

        function e() {
            if (parseInt(s.css("margin-top")) == 0 && l == 1) { s.stop().css("margin-top", -k * m / 2 + "px") }
            if (parseInt(s.css("margin-top")) == -k * m / 2 && l == -1) { s.stop().css("margin-top", "0") } }

        function g() { e();
            s.css("margin-top", parseInt(s.css("margin-top")) + l + "px") }

        function j() { clearInterval(u) }

        function v() {
            if (b.auto == true) { u = setInterval(function() { g() }, b.speed) } }
        if (b.auto == true) { v() }
        p.hover(j, v) } })(jQuery);
(function(a) { a.fn.Xtab = function(c) {
        var d = { trigger: "mouseover", conbox: ".tab_nr", switcher: ".tab_tl", stag: "li", current: "cur" };
        d = a.extend({}, d, c);
        var f = a(this).find(d.conbox);
        var e = a(this).find(d.switcher),
            b = e.find(d.stag);
        b.bind(d.trigger, function() { index = a(this).index();
            b.removeClass(d.current).eq(index).addClass(d.current);
            f.hide().eq(index).show() }) } })(jQuery);
(function(a) { a.fn.Nav = function(b) {
        var e = { ctag: "li", navz_cls: "navz_cls", navul_cls: ".navul_cls", stag: "a" };
        e = a.extend({}, e, b);
        var d = a(this).find(e.ctag);
        var c = a(this).find(e.stag);
        d.hover(function() { a(this).find(e.navul_cls).show() }, function() { a(this).find(e.navul_cls).hide() });
        a(this).find(e.navul_cls).hover(function() { a(this).parent().find("a").eq(0).addClass(e.navz_cls) }, function() { a(this).parent().find("a").eq(0).removeClass(e.navz_cls) }) } })(jQuery);
(function(a) { a.fn.banner_r = function(d) {
        var v = { speed: 500, space: 5000, auto: true, over: true, trigger: "mouseover", conbox: ".conbox ul", ctag: "li", switcher: ".switcher ul", stag: "li", current: "cur", big_show: true };
        v = a.extend({}, v, d);
        var g = 0,
            o = 0,
            n = 0,
            j = 0,
            s = true;
        var m = a(this).find(v.conbox),
            c = m.find(v.ctag);
        var f = a(this).find(v.switcher),
            i = f.find(v.stag);
        var q = c.length;
        var k = c.eq(0).width();
        var r, s = true;
        if (q < 2) {
            return false }
        if (v.big_show) { k = a(window).width();
            c.css("width", k + "px") }
        m.append(c.eq(0).clone());
        c.eq(0).before(c.eq(q - 1).clone());
        a.each(m.find(v.ctag), function(l) { a(this).css({ "float": "left" }) });
        m.css({ width: k * (q + 2) + "px", "margin-left": -k + "px" });
        i.eq(0).addClass(v.current);

        function z() { clearInterval(r) }

        function e() {
            if (v.auto) { r = setInterval(b, v.space) } }

        function p() {
            if (s) { s = false;
                b() } }

        function b() { j == 0 ? g++ : g = g + j;
            if (g >= q) { g = 0;
                m.stop().animate({ "margin-left": -k * (q + 1) + "px" }, v.speed, function() { m.css("margin-left", -k + "px");
                    s = true }) } else {
                if (g < 0) { g = (q - 1);
                    m.stop().animate({ "margin-left": 0 + "px" }, v.speed, function() { m.css("margin-left", -k * q + "px");
                        s = true }) } else { m.stop().animate({ "margin-left": -k * (g + 1) + "px" }, v.speed, function() { s = true }) } }
            i.removeClass(v.current).eq(g).addClass(v.current);
            o = g;
            j = 0 }
        if (v.auto) { r = setInterval(b, v.space) }
        i.bind(v.trigger, function() { z();
            g = a(this).index() - 1;
            b();
            e() });
        if (v.over) { m.hover(z, e) }
        if (v._prev != null && v._next != null) {
            var t = a(this).find(v._prev);
            var u = a(this).find(v._next);
            t.hover(z, e);
            u.hover(z, e);
            t.bind("click", function(l) { j = -1;
                p() });
            u.bind("click", function(l) { j = 1;
                p() }) } } })(jQuery);
(function(a) { a.fn.banner_f = function(d) {
        var t = { speed: 500, space: 5000, auto: true, over: true, trigger: "mouseover", conbox: ".conbox ul", ctag: "li", switcher: ".switcher ul", stag: "li", current: "cur", big_show: true };
        t = a.extend({}, t, d);
        var g = 0;
        var n = 0;
        var m = a(this).find(t.conbox),
            c = m.find(t.ctag);
        var f = a(this).find(t.switcher),
            i = f.find(t.stag);
        var o = c.length;
        var k = c.eq(0).width();
        var p, q = true,
            j = 1;
        if (t.big_show) { k = a(window).width();
            c.css("width", k + "px") }
        a.each(c, function(z, l) {
            (z === 0) ? a(this).css({ position: "absolute", "z-index": 9, left: 0, top: 0 }): a(this).css({ position: "absolute", "z-index": 1, opacity: 0, left: 0, top: 0 }) });
        i.eq(0).addClass(t.current);

        function b() { g = g + j;
            if (g > o - 1) { g = 0 }
            if (g < 0) { g = o - 1 }
            i.removeClass(t.current).eq(g).addClass(t.current);
            c.eq(n).stop().animate({ opacity: 0 }, t.speed / 2).css("z-index", 1).end().eq(g).css("z-index", 9).stop().animate({ opacity: 1 }, t.speed / 2);
            n = g;
            j = 1 }
        if (t.auto) { p = setInterval(b, t.space) }

        function u() { clearInterval(p) }

        function e() {
            if (t.auto) { p = setInterval(b, t.space) } }
        i.bind(t.trigger, function() { j = 0;
            g = a(this).index();
            b() });
        i.hover(function() { u() }, function() { e() });
        if (t._prev != null && t._next != null) {
            var r = a(this).find(t._prev);
            var s = a(this).find(t._next);
            r.hover(u, e);
            s.hover(u, e);
            r.bind("click", function(l) { j = -1;
                b() });
            s.bind("click", function(l) { j = 1;
                b() }) }
        if (t.over) { m.hover(u, e) } } })(jQuery);
(function(a) { a.fn.Run_line = function(d) {
        var b = { speed: 1200, auto: true, content: ".content", trigger: "click", conbox: ".conbox", ctag: "li", copy: ".team1 li", prev: ".prev", next: ".next", prev_next: "prev", newul: true, line: 1, less: false, lessnum: 1, mar: 0, gin: 0 };
        b = a.extend({}, b, d);
        var t = a(this).find(b.conbox),
            l = t.find(b.ctag),
            o = a(this).find(b.copy),
            f = a(this).find(b.prev),
            u = a(this).find(b.next),
            p = a(this).find(b.content);
        var s = [];
        var k = l.eq(0).width() + b.mar;
        var r = l.eq(0).width() + b.mar;
        var n = l.eq(0).height() + b.gin;
        var q = true,
            j = -1,
            v = "",
            c = "";
        var A = Math.ceil(l.length / b.line);
        var m = 500;
        b.prev_next == "prev" ? c = f : c = u;
        t.css({ width: A * k + "px", "float": "left", height: b.line * n + "px" });
        t.parent().css({ width: A * k * 2 + "px", height: b.line * n + "px" });
        if (b.linum) { f.hide();
            u.hide();
            if (b.linum > l.length) {
                return false } else { f.show() } }
        t.parent().append(t.clone());

        function e() {
            if (parseInt(t.css("margin-left")) == 0 && j == 1) { t.stop().css("margin-left", -A * r + "px") }
            if (parseInt(t.css("margin-left")) == -A * r && j == -1) { t.stop().css("margin-left", "0") } }
        if (b.less) { k = 1 * b.lessnum;
            m = 10;
            b.speed = 10 }
        if (b.auto == true) { z();
            a(this).hover(i, z) }

        function g() { e();
            if (q) { q = false;
                t.stop().animate({ "margin-left": "+=" + k * j + "px" }, m, function() { q = true }) } }
        f.click(function() { j = -1;
            g() });
        u.click(function() { j = 1;
            g() });

        function i() { clearInterval(v) }

        function z() {
            if (b.auto == true) { v = setInterval(function() { c.click() }, b.speed) } } } })(jQuery);
(function(a) { a.fn.Les_line = function(d) {
        var b = { speed: 1200, auto: true, content: ".content", trigger: "click", conbox: ".conbox", ctag: "li", copy: ".team1 li", prev: ".prev", next: ".next", prev_next: "prev", newul: true, line: 1, less: false, lessnum: 1, mar: 0, gin: 0 };
        b = a.extend({}, b, d);
        var t = a(this).find(b.conbox),
            l = t.find(b.ctag),
            o = a(this).find(b.copy),
            f = a(this).find(b.prev),
            u = a(this).find(b.next),
            p = a(this).find(b.content);
        var s = [];
        var k = l.eq(0).width() + b.mar;
        var r = l.eq(0).width() + b.mar;
        var n = l.eq(0).height() + b.gin;
        var q = true,
            j = -1,
            v = "",
            c = "";
        var A = Math.ceil(l.length / b.line);
        var m = 500;
        b.prev_next == "prev" ? c = f : c = u;
        t.css({ width: A * k + "px", "float": "left", height: b.line * n + "px" });
        t.parent().css({ width: A * k * 2 + "px", height: b.line * n + "px" });
        if (b.linum) { f.hide();
            u.hide();
            if (b.linum > l.length) {
                return false } else { f.show() } }
        t.parent().append(t.clone());

        function e() {
            if (parseInt(t.css("margin-left")) == 0 && j == 1) { t.stop().css("margin-left", -A * r + "px") }
            if (parseInt(t.css("margin-left")) == -A * r && j == -1) { t.stop().css("margin-left", "0") } }
        if (b.less) { k = 1 * b.lessnum;
            m = 10;
            b.speed = 10 }
        if (b.auto == true) { z();
            a(this).hover(i, z) }

        function g() { e();
            t.css("margin-left", parseInt(t.css("margin-left")) + j + "px") }
        f.click(function() { j = -1;
            g() });
        u.click(function() { j = 1;
            g() });

        function i() { clearInterval(v) }

        function z() {
            if (b.auto == true) { v = setInterval(function() { c.click() }, b.speed) } } } })(jQuery);
(function(a) { a.fn.Fourshow = function() {
        var d = a(this).find("li"),
            i = d.length,
            b = a(this).find("ul"),
            f = a(this).find("img"),
            k = 0,
            g = 0;
        x = 1;
        y = 0;
        w = 128, h = 72, num = 1, mun = 1, spd_f = 1000, spd_r = 5000, timer = "";

        function e() { k = a(window).width();
            g = a(window).height();
            b.css("height", g + "px");
            d.each(function(l) { l == 0 ? a(this).css({ height: g + h + "px", opacity: 1, "z-index": 9, width: k + w + "px" }) : a(this).css({ height: g + h + "px", opacity: 0, "z-index": 1, width: k + w + "px" }) }) }
        e();
        f.each(function(l) { a(this).css({ width: k + w + "px", height: g + h + "px" }) });

        function c() { d.eq(y).animate({ opacity: 0 }, spd_r).css("z-index", 1) }

        function j() {
            if (x > i - 1) { x = 0 }
            num = Math.ceil(Math.random() * 4);
            switch (num) {
                case 1:
                    d.eq(x).css({ left: 50 + "%", "margin-left": -(k + w) / 2 + "px", top: 0 + "px", "margin-top": 0 });
                    c();
                    d.eq(x).css("z-index", 9).animate({ opacity: 1, top: -h + "px" }, spd_r);
                    break;
                case 2:
                    d.eq(x).css({ top: 50 + "%", "margin-top": -(g + h) / 2 + "px", left: 0, "margin-left": 0 });
                    c();
                    d.eq(x).css("z-index", 9).animate({ opacity: 1, left: -w + "px" }, spd_r);
                    break;
                case 3:
                    d.eq(x).css({ left: 50 + "%", "margin-left": -(k + w) / 2 + "px", top: -h + "px", "margin-top": 0 });
                    c();
                    d.eq(x).css("z-index", 9).animate({ opacity: 1, top: 0 }, spd_r);
                    break;
                case 4:
                    d.eq(x).css({ top: 50 + "%", "margin-top": -(g + h) / 2 + "px", left: -w + "px", "margin-left": 0 });
                    c();
                    d.eq(x).css("z-index", 9).animate({ opacity: 1, left: 0 }, spd_r);
                    break }
            y = x;
            mun = num;
            x++ }
        j();
        timer = setInterval(j, 4000) } })(jQuery);
eval(function(i, b, l, f, g, j) { g = function(a) {
        return (a < b ? "" : g(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36)) };
    if (!"".replace(/^/, String)) {
        while (l--) { j[g(l)] = f[l] || g(l) }
        f = [function(a) {
            return j[a] }];
        g = function() {
            return "\\w+" };
        l = 1 }
    while (l--) {
        if (f[l]) { i = i.replace(new RegExp("\\b" + g(l) + "\\b", "g"), f[l]) } }
    return i }('(5($){$.J.L=5(r){8 1={d:0,A:0,b:"h",v:"N",3:4};6(r){$.D(1,r)}8 m=9;6("h"==1.b){$(1.3).p("h",5(b){8 C=0;m.t(5(){6(!$.k(9,1)&&!$.l(9,1)){$(9).z("o")}j{6(C++>1.A){g B}}});8 w=$.M(m,5(f){g!f.e});m=$(w)})}g 9.t(5(){8 2=9;$(2).c("s",$(2).c("i"));6("h"!=1.b||$.k(2,1)||$.l(2,1)){6(1.u){$(2).c("i",1.u)}j{$(2).K("i")}2.e=B}j{2.e=x}$(2).T("o",5(){6(!9.e){$("<V />").p("X",5(){$(2).Y().c("i",$(2).c("s"))[1.v](1.Z);2.e=x}).c("i",$(2).c("s"))}});6("h"!=1.b){$(2).p(1.b,5(b){6(!2.e){$(2).z("o")}})}})};$.k=5(f,1){6(1.3===E||1.3===4){8 7=$(4).F()+$(4).O()}j{8 7=$(1.3).n().G+$(1.3).F()}g 7<=$(f).n().G-1.d};$.l=5(f,1){6(1.3===E||1.3===4){8 7=$(4).I()+$(4).U()}j{8 7=$(1.3).n().q+$(1.3).I()}g 7<=$(f).n().q-1.d};$.D($.P[\':\'],{"Q-H-7":"$.k(a, {d : 0, 3: 4})","R-H-7":"!$.k(a, {d : 0, 3: 4})","S-y-7":"$.l(a, {d : 0, 3: 4})","q-y-7":"!$.l(a, {d : 0, 3: 4})"})})(W);', 62, 62, "|settings|self|container|window|function|if|fold|var|this||event|attr|threshold|loaded|element|return|scroll|src|else|belowthefold|rightoffold|elements|offset|appear|bind|left|options|original|each|placeholder|effect|temp|true|of|trigger|failurelimit|false|counter|extend|undefined|height|top|the|width|fn|removeAttr|lazyload|grep|show|scrollTop|expr|below|above|right|one|scrollLeft|img|jQuery|load|hide|effectspeed".split("|"), 0, {}));
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(e, f, a, i, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, i, g) }, easeInQuad: function(e, f, a, i, g) {
        return i * (f /= g) * f + a }, easeOutQuad: function(e, f, a, i, g) {
        return -i * (f /= g) * (f - 2) + a }, easeInOutQuad: function(e, f, a, i, g) {
        if ((f /= g / 2) < 1) {
            return i / 2 * f * f + a }
        return -i / 2 * ((--f) * (f - 2) - 1) + a }, easeInCubic: function(e, f, a, i, g) {
        return i * (f /= g) * f * f + a }, easeOutCubic: function(e, f, a, i, g) {
        return i * ((f = f / g - 1) * f * f + 1) + a }, easeInOutCubic: function(e, f, a, i, g) {
        if ((f /= g / 2) < 1) {
            return i / 2 * f * f * f + a }
        return i / 2 * ((f -= 2) * f * f + 2) + a }, easeInQuart: function(e, f, a, i, g) {
        return i * (f /= g) * f * f * f + a }, easeOutQuart: function(e, f, a, i, g) {
        return -i * ((f = f / g - 1) * f * f * f - 1) + a }, easeInOutQuart: function(e, f, a, i, g) {
        if ((f /= g / 2) < 1) {
            return i / 2 * f * f * f * f + a }
        return -i / 2 * ((f -= 2) * f * f * f - 2) + a }, easeInQuint: function(e, f, a, i, g) {
        return i * (f /= g) * f * f * f * f + a }, easeOutQuint: function(e, f, a, i, g) {
        return i * ((f = f / g - 1) * f * f * f * f + 1) + a }, easeInOutQuint: function(e, f, a, i, g) {
        if ((f /= g / 2) < 1) {
            return i / 2 * f * f * f * f * f + a }
        return i / 2 * ((f -= 2) * f * f * f * f + 2) + a }, easeInSine: function(e, f, a, i, g) {
        return -i * Math.cos(f / g * (Math.PI / 2)) + i + a }, easeOutSine: function(e, f, a, i, g) {
        return i * Math.sin(f / g * (Math.PI / 2)) + a }, easeInOutSine: function(e, f, a, i, g) {
        return -i / 2 * (Math.cos(Math.PI * f / g) - 1) + a }, easeInExpo: function(e, f, a, i, g) {
        return (f == 0) ? a : i * Math.pow(2, 10 * (f / g - 1)) + a }, easeOutExpo: function(e, f, a, i, g) {
        return (f == g) ? a + i : i * (-Math.pow(2, -10 * f / g) + 1) + a }, easeInOutExpo: function(e, f, a, i, g) {
        if (f == 0) {
            return a }
        if (f == g) {
            return a + i }
        if ((f /= g / 2) < 1) {
            return i / 2 * Math.pow(2, 10 * (f - 1)) + a }
        return i / 2 * (-Math.pow(2, -10 * --f) + 2) + a }, easeInCirc: function(e, f, a, i, g) {
        return -i * (Math.sqrt(1 - (f /= g) * f) - 1) + a }, easeOutCirc: function(e, f, a, i, g) {
        return i * Math.sqrt(1 - (f = f / g - 1) * f) + a }, easeInOutCirc: function(e, f, a, i, g) {
        if ((f /= g / 2) < 1) {
            return -i / 2 * (Math.sqrt(1 - f * f) - 1) + a }
        return i / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a }, easeInElastic: function(f, i, e, m, l) {
        var j = 1.70158;
        var k = 0;
        var g = m;
        if (i == 0) {
            return e }
        if ((i /= l) == 1) {
            return e + m }
        if (!k) { k = l * 0.3 }
        if (g < Math.abs(m)) { g = m;
            var j = k / 4 } else {
            var j = k / (2 * Math.PI) * Math.asin(m / g) }
        return -(g * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * l - j) * (2 * Math.PI) / k)) + e }, easeOutElastic: function(f, i, e, m, l) {
        var j = 1.70158;
        var k = 0;
        var g = m;
        if (i == 0) {
            return e }
        if ((i /= l) == 1) {
            return e + m }
        if (!k) { k = l * 0.3 }
        if (g < Math.abs(m)) { g = m;
            var j = k / 4 } else {
            var j = k / (2 * Math.PI) * Math.asin(m / g) }
        return g * Math.pow(2, -10 * i) * Math.sin((i * l - j) * (2 * Math.PI) / k) + m + e }, easeInOutElastic: function(f, i, e, m, l) {
        var j = 1.70158;
        var k = 0;
        var g = m;
        if (i == 0) {
            return e }
        if ((i /= l / 2) == 2) {
            return e + m }
        if (!k) { k = l * (0.3 * 1.5) }
        if (g < Math.abs(m)) { g = m;
            var j = k / 4 } else {
            var j = k / (2 * Math.PI) * Math.asin(m / g) }
        if (i < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * l - j) * (2 * Math.PI) / k)) + e }
        return g * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * l - j) * (2 * Math.PI) / k) * 0.5 + m + e }, easeInBack: function(e, f, a, j, i, g) {
        if (g == undefined) { g = 1.70158 }
        return j * (f /= i) * f * ((g + 1) * f - g) + a }, easeOutBack: function(e, f, a, j, i, g) {
        if (g == undefined) { g = 1.70158 }
        return j * ((f = f / i - 1) * f * ((g + 1) * f + g) + 1) + a }, easeInOutBack: function(e, f, a, j, i, g) {
        if (g == undefined) { g = 1.70158 }
        if ((f /= i / 2) < 1) {
            return j / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a }
        return j / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a }, easeInBounce: function(e, f, a, i, g) {
        return i - jQuery.easing.easeOutBounce(e, g - f, 0, i, g) + a }, easeOutBounce: function(e, f, a, i, g) {
        if ((f /= g) < (1 / 2.75)) {
            return i * (7.5625 * f * f) + a } else {
            if (f < (2 / 2.75)) {
                return i * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a } else {
                if (f < (2.5 / 2.75)) {
                    return i * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a } else {
                    return i * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a } } } }, easeInOutBounce: function(e, f, a, i, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, i, g) * 0.5 + a }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, i, g) * 0.5 + i * 0.5 + a } });

function Cur(e) {
    var t = document.getElementById("nav").getElementsByTagName("li");
    for (var n = 0; n <= t.length - 1; n++) t[n].getElementsByTagName("a")[0].className = "";
    // t[e].getElementsByTagName("a")[0].className = "nav_z" 
}

$(".jc_fot").css("top", $("html,body").height() - 50 + "px");
