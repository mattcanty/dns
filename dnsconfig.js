var NON_REG = NewRegistrar("none", "NONE");
var R53 = NewDnsProvider("r53", "ROUTE53");

D("mattcanty.com", NON_REG, DnsProvider(R53),
    A("@", "185.199.108.153"),
    A("@", "185.199.109.153"),
    A("@", "185.199.110.153"),
    A("@", "185.199.111.153"),
    CNAME("www", "mattcanty.com."),
    CNAME("c37trtl6ubra6yp4enjsp4tegjqn3lt7._domainkey", "c37trtl6ubra6yp4enjsp4tegjqn3lt7.dkim.amazonses.com."),
    CNAME("debf6om2flnqorv7k5ncutk7yzlutu7t._domainkey", "debf6om2flnqorv7k5ncutk7yzlutu7t.dkim.amazonses.com."),
    CNAME("odcgmdy25sn67hci6ko6xmn5hccsgxvb._domainkey", "odcgmdy25sn67hci6ko6xmn5hccsgxvb.dkim.amazonses.com."),
    TXT("_amazonses", "i0uXmZmm8Ce/k2jwpEv+Y9ZXmxHJkNWz8MBUGsjcCDU="),
    TXT("@", "google-site-verification=qbRypdAcGwptTI43UaQrfDvAEN7-DkALAcnME-5Kwn0"),
    TXT("@", "keybase-site-verification=A7ns5-QzuyAi-fb-B5h2gmgnU9IvT9KNMZH24hksx54"),
    CNAME("blog", "gracious-varahamihira-35ff13.netlify.com."),
    CNAME("_c0e6e8fc4682262e6c452a1b1d43d327", "_2b82288279a845962a0b4c2854d6a418.tljzshvwok.acm-validations.aws."),
    CNAME("bass", "angry-yalow-e2f303.netlify.app."),
    R53_ALIAS("photo", "A", "d2twlpstq44dr.cloudfront.net.", R53_ZONE('Z2FDTNDATAQYW2')),
    CNAME("rainclock", "stirring-bonbon-38127e.netlify.app.")
);

D("controlaltrepeat.net", NON_REG, DnsProvider(R53),
    TXT("@", "google-site-verification=zg0vSqTUbu4DFD2w_wq4KBGk3rt5iGCNH94QAt67oNY"),
    MX("@", 1, "ASPMX.L.GOOGLE.COM."),
    MX("@", 5, "ALT1.ASPMX.L.GOOGLE.COM."),
    MX("@", 5, "ALT2.ASPMX.L.GOOGLE.COM."),
    MX("@", 10, "ALT3.ASPMX.L.GOOGLE.COM."),
    MX("@", 10, "ALT4.ASPMX.L.GOOGLE.COM."),
    MX("send.updates", 10, "10 feedback-smtp.eu-west-1.amazonses.com"),
    TXT("send.updates", "v=spf1 include:amazonses.com ~all"),
    TXT("resend._domainkey.updates", "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCxfn2VzWN50wHTiH4qLbWfxDnkPkZjS3tAeeF51qqdvm9N8DcIwMBr7UXiFrnLvXSd3f5vuB0WWsK7Jcd5aYTi3hQmx3RXjIwfgQfr7bMkibQ1rUHLHhifYIZCk9xTdBqNN/NURGuQD7cnmEIElFSnK2nD3yXACBthJmEXAeP4nwIDAQAB"),
    TXT("20240814125127pm._domainkey", "k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC/UhMiB+4qOMGvw+3CVowftnxkL2Sv377vzjaBtuNxbWFT1fmDN5xwDqzzp/mp4GEWyv+aPVnqRPqRkjbE3W3egmsWJkreoMSoKtvHCwqDDaiGgIFtpQXheTMW6Bxp/siltRYAY+xqy+p3KQKbmcwdUTK7uZXrl/bugwW0u08MTwIDAQAB"),
    CNAME("freeagent-mailer", "pm.mtasv.net."),
    A("@", "75.2.60.5"),
    CNAME("www", "sage-blini-bad66c.netlify.app."),
    TXT("@", "google-site-verification=C1JMr8GTUmYpUYzppKhqH5ev854aWT3op5aspA9ovvQ"),
    TXT("@", "v=spf1 include:_spf.google.com ~all"),
    TXT("@", "v=DMARC1; p=none; rua=mailto:postmaster@controlaltrepeat.net"),
    CNAME("orvz7hkwc3zmp4k7latumjp2qg4y3guc._domainkey", "orvz7hkwc3zmp4k7latumjp2qg4y3guc.dkim.custom-email-domain.stripe.com."),
    CNAME("lq52ukhxi5r7uumkeayr6six2473kfdj._domainkey", "lq52ukhxi5r7uumkeayr6six2473kfdj.dkim.custom-email-domain.stripe.com."),
    CNAME("6nregyhktjxx34qv55w72zszbkmsaiex._domainkey", "6nregyhktjxx34qv55w72zszbkmsaiex.dkim.custom-email-domain.stripe.com."),
    CNAME("puefeaibaewfejqm4i6ajrhcoyrnqbp3._domainkey", "puefeaibaewfejqm4i6ajrhcoyrnqbp3.dkim.custom-email-domain.stripe.com."),
    CNAME("lveb4wlnjhtjiw3zddfl6svib5mqpgyw._domainkey", "lveb4wlnjhtjiw3zddfl6svib5mqpgyw.dkim.custom-email-domain.stripe.com."),
    CNAME("rmfzhb3soumbxtasa3zasa2rv4atm7ec._domainkey", "rmfzhb3soumbxtasa3zasa2rv4atm7ec.dkim.custom-email-domain.stripe.com."),
    CNAME("bounce", "custom-email-domain.stripe.com."),
    TXT("@", "stripe-verification=4997d4f786aa534f5c07ff109736edb2a723e60d4eddce354359a0582e9462f3"),
    TXT("_dmarc", "v=DMARC1; p=none; rua=mailto:postmaster@controlaltrepeat.net")
);

D("bassguitarbook.com", NON_REG, DnsProvider(R53),
    A("@", "75.2.60.5"),
    CNAME("www", "graceful-kashata-aea1f7.netlify.app.")
);

D("katybrody.co.uk", NON_REG, DnsProvider(R53),
    R53_ALIAS('@', 'A', 's3-website.eu-west-2.amazonaws.com.', R53_ZONE('Z3GKZC51ZF0DB4')),
    CNAME("www", "katybrody.format.com.")
);

D("cantonite.com", NON_REG, DnsProvider(R53),
    MX("@", 1, "ASPMX.L.GOOGLE.COM."),
    MX("@", 5, "ALT1.ASPMX.L.GOOGLE.COM."),
    MX("@", 5, "ALT2.ASPMX.L.GOOGLE.COM."),
    MX("@", 10, "ALT3.ASPMX.L.GOOGLE.COM."),
    MX("@", 10, "ALT4.ASPMX.L.GOOGLE.COM."),
    MX("@", 15, "cfxvr25twetlbxcl3mj2xlmollggaahxwtf3d5u4kzedtil2v23q.mx-verification.google.com."),    
    TXT("20200208171147pm._domainkey", "k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvmAV2ogFclJKwuXYVXjIVC/44qkqvMbVlpvzSnKXKa4KSNNkrmcYF4Sc01JjNsDXyymqstismxiMkFQKkxqYQSsGus+LE09lXf0aRD74BxftKFpyu/P9APmMXc95J9YGTC7cTFzw3fakecX2Q1FpFMOlsKYLA2lya4MSBCDBfiQIDAQAB"),
    CNAME("freeagent-mailer", "pm.mtasv.net."),
    A("@", "75.2.60.5"),
    CNAME("www", "cantonitewebsite.netlify.app.")
);

D("raulgame.com", NON_REG, DnsProvider(R53),
  A("@", "75.2.60.5"),
  CNAME("www", "dreamy-keller-bb1d7e.netlify.app.")
);

D("thelabsband.co.uk", NON_REG, DnsProvider(R53),
  A("@", "185.199.108.153"),
  A("@", "185.199.109.153"),
  A("@", "185.199.110.153"),
  A("@", "185.199.111.153"),
  CNAME("www", "Lancaster-Album-Band.github.io.")
);
