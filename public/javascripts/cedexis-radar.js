CloudFlare.define("cedexis-radar", ["cedexis-radar/config"],
    function(config) {
        var a = document.createElement('script');
        a.type = 'text/javascript';
        a.async = 'async';
        a.src = '//' + "portal.dev.cedexis.com/api/partners/cloudflare/radar?domain_id=" + config.domain_id;
        document.body.appendChild(a);
    }
);
