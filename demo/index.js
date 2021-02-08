import React from "react"
import ReactDOM from "react-dom"

import MoEngage from "../src/index"

MoEngage.init("moengage_app_id", { debug: true })

ReactDOM.render(
    <div>
        <h1>React MoEngage Demo</h1>
        <button
            type="button"
            onClick={() =>
                MoEngage.trackEvent("PurchaseMade", {
                    product: "Carrot",
                    currency: "USD",
                    value: 0.5,
                })
            }
        >
            Track Event
        </button>
    </div>,
    document.getElementById("app"),
)
