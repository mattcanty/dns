var NON_REG = NewRegistrar("none", "NONE");
var R53 = NewDnsProvider("r53", "ROUTE53");

var GOOGLE_APPS_MX_RECORDS = [
    MX("@", 1, "aspmx.l.google.com."),
    MX("@", 5, "alt1.aspmx.l.google.com."),
    MX("@", 5, "alt2.aspmx.l.google.com."),
    MX("@", 10, "alt3.aspmx.l.google.com."),
    MX("@", 10, "alt4.aspmx.l.google.com."),
]

D("cantytech.uk", R53, DnsProvider(DSP_R53),
   GOOGLE_APPS_MX_RECORDS,
);

D("cantytech.co.uk", R53, DnsProvider(DSP_R53),
   GOOGLE_APPS_MX_RECORDS,
);
