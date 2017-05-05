var NON_REG = NewRegistrar("none", "NONE");
var R53 = NewDnsProvider("r53", "ROUTE53");

D("mattcanty.com", NON_REG, DnsProvider(R53),
    A("lifedex","151.101.1.195"),
    A("lifedex","151.101.65.195"),
    TXT("@","google-site-verification=qbRypdAcGwptTI43UaQrfDvAEN7-DkALAcnME-5Kwn0")
);

D("matthewcanty.co.uk", NON_REG, DnsProvider(R53),
    CNAME("www","dns.strikingly.com."),
    CNAME("weatherclock","analog-weather-clock.herokuapp.com.")
);

D("katybrody.co.uk", NON_REG, DnsProvider(R53),
    A("www","88.208.252.9"),
    A("@","88.208.252.9")
);
