Cedexis collects over a <em>billion</em> web performance metrics a day from websites all over the world. The Cedexis Real User Measurements (RUM) app allows us to collect performance statistics for your website visitors and give you <strong>free</strong> access to this valuable information via the Cedexis portal website.

#### How it Works
By signing up for the Cedexis RUM app via CloudFlare, a small javascript file will be inserted into your domain web pages.  The javascript file runs quietly in the background collecting a variety of measurement statistics about your website performance.
When deployed to your website, the Javascript tag will look something like this:

    <script type="text/javascript">
    (function(w, d) { var a = function() { var a = d.createElement('script'); a.type = 'text/javascript';
        a.async = 'async'; a.src = '//' + ((w.location.protocol === 'https:') ? 'testing.cedexis.com/test-url/' :
        'testing.cedexis.com/') + '00-12345-radar.min.js'; d.body.appendChild(a); };
        if (w.addEventListener) { w.addEventListener('load', a, false); }
        else if (w.attachEvent) { w.attachEvent('onload', a); }
    }(window, document));
    </script>


When you want to see performance metrics, the CloudFlare marketplace will sign you in to the Cedexis CloudFlare dashboard.  Here you will be able to see Page Load Time (PLT) charts and graphs for your website visitors.

#### PLT Charts
By deploying our javascript tag, we are able to collect website performance measurements as seen by your end users anywhere in the world.
Some of the PLT performance measurements we collect are: <em>total page load time, connect time, DNS lookup, send/receive, DOM load</em> and several other PLT measurements.  When viewing chart reports, you can filter data on any of the PLT measurements as well as country/region, network, URL or browser type.
![Example](/images/apps/cedexis_radar/plt-charts.png "Sample PLT Charts")

#### PLT Alerts
PLT Alerts allow you to set up an email alert notification or daily summary when a URL that you are interested in exceeds a specific PLT threshold. For example, you might want to be notified when your home page is taking longer than 3 seconds to load over a given period of time (ie 5 minutes).  With PLT Alerts, you can be proactive about your website performance and also closely monitor SLAs for your cloud service providers.
![Alerts](/images/apps/cedexis_radar/alerts-screen.png "Sample PLT Alerts")

#### Subscriptions
- Free $0 - PLT Charts
- Pro $10 - PLT Charts, up to 5 Alerts
- Business $100 - PLT Charts, up to 50 Alerts
- Enterprise $1,000 - PLT Charts, unlimited Alerts

#### Live Tour
If you would like to see a live sample of how the top Internet providers are performing, check out our [Country Reports](http://www.cedexis.com/reports/#?report=isp&country=US).  We also provide a [network statistics widget](http://www.cedexis.com/reports/widget.html) that is freely available for anyone to include in their website.  This is just a small sample of information available to you as a Cedexis community member.

#### About Cedexis
We are passionate about making the Internet faster.  We are also passionate about web site performance, statistics and data visualization.  We've only scratched the surface on what Cedexis can do for you.  Check out our [website](http://www.cedexis.com), we'd love to hear from you!

