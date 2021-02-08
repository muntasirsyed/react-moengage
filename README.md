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
    debug: true,
})

MoEngage.trackEvent("PurchaseMade", { ...data })
```

## Options

| Option    | Description                                                                                                                                                                                                                                                          | Default |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `debug`   | If `true`, a `1` is passed into the SDK's `debug_logs` option and logs all method calls to the console. Pass in `true` if you want data going to your **TEST** environment. It's recommended you set this to something like `process.env.NODE_ENV === 'production'`. | `false` |
| `cluster` | Specify a cluster for data redirection.                                                                                                                                                                                                                              |         |
| `swPath`  | Customise the service worker filename & path outputted by the SDK.                                                                                                                                                                                                   |         |

Any options further to the above passed into `MoEngage.init("ID", {...})` will also be passed into `moe({ ... })`.

## Methods

All methods are camel-cased versions of those specified in the `moe` object [MoEngage docs](https://docs.moengage.com/docs/web-sdk-integration).

The `moe` object is accessible directly if need-be easily at `MoEngage.moe`
