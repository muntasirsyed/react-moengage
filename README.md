<h1 align='center'>
  React MoEngage
</h1>

<p align='center'>
  <a href='https://www.npmjs.com/package/react-moengage'>
    <img src='https://img.shields.io/npm/v/react-moengage.svg' alt='Latest npm version'>
  </a>
  <a href='https://www.npmjs.com/package/react-moengage'>
    <img src='https://img.shields.io/npm/dm/react-moengage.svg' alt='Downloads'>
  </a>
</p>

<p align='center'>
  A convenient wrapper around the <a href="https://docs.moengage.com/docs/web-sdk-integration">MoEngage Web SDK</a> for React.
</p>

## Install

```bash
npm install --save react-moengage
```

## Usage

```javascript
import MoEngage from "react-moengage"

MoEngage.init("MOENGAGE_APP_ID", {
    debugLogs: 0,
    swPath: "/customSw.js",
})

MoEngage.trackEvent("PurchaseMade", { ...data })
```

## Methods

All methods are camel-cased versions of those specified in the [MoEngage SDK documentation](https://docs.moengage.com/docs/web-sdk-integration).

```javascript
MoEngage.trackEvent("PurchaseMade", { value: 0.5 })

MoEngage.addFirstName("Dominick")
MoEngage.addLastName("Cobb")
MoEngage.addEmail("dom@level5.com")
MoEngage.addMobile("+12399999999")

Moengage.addUserAttribute("replenishment_date", new Date(2021, 4, 30))
```

The `moe` object is also accessible directly if need-be:

```javascript
const moe = MoEngage.moe

moe.onsite.registerCallback(...args)
moe.onsite.getData(...args)
```

## Environment

**By default `debugLogs` is set to `1` (test mode).**

As in the [MoEngage SDK documentation](https://docs.moengage.com/docs/web-sdk-integration), set `debugLogs` to `0` in order to push data to your `LIVE` environment. Set it to `1` in order to push data to your `TEST` environment & enable logging to the console.

## Server-Side Rendering

Please note in order to initialise this library, the MoEngage SDK relies on the `window` object and therefore will only work in the browser. If server-side rendering, it is recommended to call `init()` in somewhere like `componentDidMount()` or `useEffect(..., [])`.

```javascript
import MoEngage from "react-moengage"

class MyComponent extends React.Component {
    componentDidMount() {
        const options = { ... }
        MoEngage.init("MOENGAGE_APP_ID", options)
    }
}
```
