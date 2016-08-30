# Workflow
## Write report

```json
{
  "name": "John Doe",
  "ethereum-address": "0x11ce3c77e6f68f4022079618388561a50aef19de",
  "input":"?",
  "output":"?"
}
```

## Clearsign the report

    gpg --output report.sig --clearsign report.json 

## Hash clearsigned report
### OSX

    shasum -a 256 report.sig

## Verification
