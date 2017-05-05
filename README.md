##  Prerequisites
* [go](https://golang.org/dl/)
* [dnscontrol](https://stackexchange.github.io/dnscontrol/)

## Steps
1. Edit `dnsconfig.js`
2. `dnscontrol push`

## Creds
Ensure `creds.json` is ready, eg:
```
{
 "r53":{
      "KeyId": "YOUR_KEY",
      "SecretKey": "YOUR_SECRET"
 }
}
```
