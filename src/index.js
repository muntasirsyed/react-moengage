let MoEngageObj

let initialised = false
let debug = false

const moduleName = "react-moengage"

// --------------------------------------------------------
// Helpers
// --------------------------------------------------------

const warn = (...args) => {
    if (!debug) {
        return
    }
    // eslint-disable-next-line no-console
    console.info(...[`[${moduleName}]`].concat(args))
}

const log = (...args) => {
    if (!debug) {
        return
    }
    // eslint-disable-next-line no-console
    console.info(...[`[${moduleName}]`].concat(args))
}

// --------------------------------------------------------
// Utility
// --------------------------------------------------------

const verifyInit = () => {
    if (!initialised) {
        warn("Please first initialise by using MoEngage.init(...)")
    }
    return initialised
}

const defaultOptions = {
    debugLogs: 1,
}

// --------------------------------------------------------
// Module
// --------------------------------------------------------

export default {
    init: (appId, options = defaultOptions) => {
        initialised = typeof window !== "undefined" && !!window.moe

        if (initialised) {
            warn("MoEngage already initialised")
            return
        }

        /* eslint-disable */
        !(function (i, s, o, g, r, a, m, n) {
            i.moengage_object = r
            let f, h
            const t = {}
            const q = function (f) {
                return function () {
                    ;(i.moengage_q = i.moengage_q || []).push({ f: f, a: arguments })
                }
            }
            ;(f = [
                "track_event",
                "add_user_attribute",
                "add_first_name",
                "add_last_name",
                "add_email",
                "add_mobile",
                "add_user_name",
                "add_gender",
                "add_birthday",
                "destroy_session",
                "add_unique_user_id",
                "moe_events",
                "call_web_push",
                "track",
                "location_type_attribute",
            ]),
                (h = { onsite: ["getData", "registerCallback"] })
            for (const k in f) {
                t[f[k]] = q(f[k])
            }
            for (const k in h)
                for (const l in h[k]) {
                    null == t[k] && (t[k] = {}), (t[k][h[k][l]] = q(k + "." + h[k][l]))
                }
            a = s.createElement(o)
            m = s.getElementsByTagName(o)[0]
            a.async = 1
            a.src = g
            m.parentNode.insertBefore(a, m)
            i.moe =
                i.moe ||
                function () {
                    n = arguments[0]
                    return t
                }
            a.onload = function () {
                if (n) {
                    i[r] = moe(n)
                }
            }
        })(
            window,
            document,
            "script",
            "https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js",
            "Moengage",
        )
        /* eslint-disable */

        if (!appId) {
            warn("Call to MoEngage.init() is missing appId")
        } else {
            MoEngageObj = moe({
                app_id: appId,
                debug_logs: options.debugLogs,
                swPath: options.swPath ? options.swPath : undefined,
                cluster: options.cluster ? options.cluster : undefined,
            })
            debug = options.debugLogs === 1
            initialised = true
        }
    },

    get moe() {
        return MoEngageObj
    },

    trackEvent: (name, data) => {
        if (!verifyInit()) {
            return
        }

        MoEngageObj.track_event(name, data)

        if (debug) {
            log(`Called moe.track_event(${name}, ...)`)
            log(`With data`, data)
        }
    },

    addUserAttribute: (attribute, value) => {
        if (!verifyInit()) {
            return
        }
        if (attribute && value) {
            MoEngageObj.add_user_attribute(attribute, value)

            if (debug) {
                log(`Called moe.add_user_attribute(${attribute}, ${value})`)
            }
        }
    },

    addFirstName: (firstName) => {
        if (!verifyInit()) {
            return
        }

        MoEngageObj.add_first_name(firstName)

        if (debug) {
            log(`Called moe.add_first_name(${firstName})`)
        }
    },

    addLastName: (lastName) => {
        if (!verifyInit()) {
            return
        }

        MoEngageObj.add_last_name(lastName)

        if (debug) {
            log(`Called moe.add_last_name(${lastName})`)
        }
    },

    addEmail: (email) => {
        if (!verifyInit()) {
            return
        }

        MoEngageObj.add_email(email)

        if (debug) {
            log(`Called moe.add_email(${email})`)
        }
    },

    addMobile: (mobile) => {
        if (!verifyInit()) {
            return
        }

        MoEngageObj.add_mobile(mobile)

        if (debug) {
            log(`Called moe.add_mobile(${mobile})`)
        }
    },

    addUserName: (userName) => {
        if (!verifyInit()) {
            return
        }

        MoEngageObj.add_user_name(userName)

        if (debug) {
            log(`Called moe.add_user_name(${userName})`)
        }
    },

    addGender: (gender) => {
        if (!verifyInit()) {
            return
        }

        MoEngageObj.add_gender(gender)

        if (debug) {
            log(`Called moe.add_gender(${gender})`)
        }
    },

    addBirthday: (date) => {
        if (!verifyInit()) {
            return
        }

        MoEngageObj.add_birthday(date)

        if (debug) {
            log(`Called moe.add_birthday(${date})`)
        }
    },

    addUniqueUserId: (uniqueUserId) => {
        if (!verifyInit()) {
            return
        }

        MoEngageObj.add_unique_user_id(uniqueUserId)

        if (debug) {
            log(`Called moe.add_unique_user_id(${uniqueUserId})`)
        }
    },

    updateUniqueUserId: () => {
        if (!verifyInit()) {
            return
        }

        MoEngageObj.update_unique_user_id(uniqueUserId)

        if (debug) {
            log(`Called moe.update_unique_user_id(${uniqueUserId})`)
        }
    },

    callWebPush: (options) => {
        if (!verifyInit()) {
            return
        }

        MoEngageObj.call_web_push(options)

        if (debug) {
            log(`Called moe.call_web_push()`)
            if (options) {
                log(`With options`, options)
            }
        }
    },

    destroySession: () => {
        if (!verifyInit()) {
            return
        }

        MoEngageObj.destroy_session()

        if (debug) {
            log(`Called moe.destory()`)
        }
    },
}
