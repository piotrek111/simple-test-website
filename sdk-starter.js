/* Landing Page script */
(function(c,w,v){
    function getUrlParameter(name) {
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    function setCookie(name, value) {
        var host = w.location.host;
        var domain = host.substring(host.indexOf('.'));
        if (domain.match(/\./g).length <2 || domain.substring(0, domain.indexOf('.', 1)) === '.co'){
            // prepend dot
            domain = '.' + host;
        }

        var d = new Date();
        var t = d.getTime() + (365 * 24 * 60 * 60 * 1000);
        d.setTime(t);
        v.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';domain=' + domain + ';path=/;sameSite=none;Secure=true';
    };

    // set tdclid_sn cookie
    var m = 'tdclid_sn';
    var n = getUrlParameter(m);
    if (n){
        setCookie(m, n);
    }

    // the library's query string
    var q = '?org=' + c.organization + '&prog=' + c.programId;

    /* Load fallback library */
    w.tdfallback = function(url){
        var js, fjs = v.getElementsByTagName('script')[0];
        js = v.createElement('script');
        js.src = url + q;
        fjs.parentNode.insertBefore(js, fjs);
    };

    var url = '../src/tr_sdk_uat.js' + q + '&rand=';
    (function(i,s,o,g,r,a,m){i['TDConversionObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script', url + Math.random(), 'tdconv');
    //    (function(i,s,o,g,r,a,m){i['TDConversionObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script', 'https://sdk.tradedoubler.com/trsdk' + q, 'tdconv');

    // run "init" step by default to apply new config structure
    tdconv('init', c);
})({organization: '123', programId: '321', program: false, element: 'iframe'}, window, document);