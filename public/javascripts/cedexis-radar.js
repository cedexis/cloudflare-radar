CloudFlare.define("cedexis-radar", ["cedexis-radar/config"],
    function(config) {
        var a = document.createElement('script');
        a.type = 'text/javascript';
        a.async = 'async';
        a.src = '//' + "portal.cedexis.com/api/partners/cloudflare.json/radar?domain_id=" + config.domain_id;
        document.body.appendChild(a);
    }
);
