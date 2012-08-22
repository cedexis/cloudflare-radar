CloudFlare.define("cedexis-radar", ["cedexis-radar/config"],
    function(config) {
        (function (d, c) {
            var a = d.createElement('script');
            a.type = 'text/javascript';
            a.async = 'async';
            a.src = '//' + "portal.dev.cedexis.com/api/partners/cloudflare/radar?domain_id=" + c.domain_id;
            d.body.appendChild(a);
        })(document, {customer:config && config.domain_id});
    }
);
