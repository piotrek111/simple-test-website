!(function (e, n, t) {
    function r(e) {
        try {
            return (
                (function (e) {
                    for (var n = "", t = new Uint8Array(e), r = 0; r < t.length; r += 1) n += String.fromCharCode(t[r]);
                    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
                })(new TextEncoder().encode(e).buffer) + ".b"
            );
        } catch (n) {
            return e;
        }
    }
    var o = "tdclid_sn",
        a = (function (e) {
            var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
            return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "));
        })(o);
    a &&
    (function (e, r) {
        var o = n.location.host,
            a = o.substring(o.indexOf("."));
        (a.match(/\./g).length < 2 || ".co" === a.substring(0, a.indexOf(".", 1))) && (a = "." + o);
        var c = new Date();
        c.setTime(c.getTime() + 31536e6),
            (t.cookie =
                e + "=" + r + ";expires=" + c.toUTCString() + ";domain=" + a + ";path=/;sameSite=none;Secure=true");
    })(o, a);
    var c,
        i,
        s = "?org=" + encodeURIComponent(e.organization) + "&prog=" + encodeURIComponent(e.programId);
    (n.tdfallback = function (e) {
        var n,
            o = t.getElementsByTagName("script")[0],
            a = r("trsdk" + s),
            c = e.replace(/\/trsdk(?:\?.*)?$/i, "");
        ((n = t.createElement("script")).src = c + "/" + a), o.parentNode.insertBefore(n, o);
    }),
        (i = "tdconv"),
        ((c = n).TDConversionObject = i),
        (c[i] =
            c[i] ||
            function () {
                (c[i].q = c[i].q || []).push(arguments);
            }),
        (c[i].l = 1 * new Date());
    var d,
        g,
        p,
        m = r("trsdk" + s);
    (d = "https://sdk.tradedoubler.com/" + m),
        (g = t.getElementsByTagName("script")[0]),
        ((p = t.createElement("script")).async = !0),
        (p.src = d),
        g.parentNode.insertBefore(p, g),
        n.tdconv("init", e);
})({ organization: "2467571", programId: "398574", program: false, element: "iframe" }, window, document);
