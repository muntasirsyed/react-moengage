> React wrapper around the MoEngage Web SDK.

## Install

```bash
npm install --save react-moengage
```

## Usage

```javascript
import MoEngage from "react-moengage"

MoEngage.init("MOENGAGE_APP_ID", {
    debug: true,
})

MoEngage.trackEvent("PurchaseMade", { ...data })
```
