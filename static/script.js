(function (w, h, a, t, a0, b) {
  w.__whatab_browser_agent__ = {
    load: function (src) {
      var el = h.createElement("script");
      el.src = src; el.async = true; el.type = "text/javascript";
      h.getElementsByTagName("head")[0].appendChild(el);
    },
    license: t,
    pcode: a0,
    host: b,
  }; w.__whatab_browser_agent__.load(a);
})(window, document, "https://repo.whatap.io/rum/v1/whatap-browser-agent.js", 'whatap-dev-license', 1488 ,'http://192.168.115.215:8000/');


BOOMR.init({
beacon_url: "http://192.168.225.30:8080/beacon/"
});