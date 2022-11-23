import { check } from "k6"
import http from "k6/http"
import { initCases } from "../index.js"
import { two_queries_passing } from "./solutions.js"

export function sucessful_verify_lightswitch_with_all_queries_passing() {
    const url = `http://172.28.198.118/api/v1/verifiers/verifyta`
    const body = {
        "solution": two_queries_passing,
        "queries": [
            {
              "query": "A[] Switch.x < 4"
            },
            {
              "query": "A[] Switch.x < 10"
            }
        ]
    }

    const response = http.post(url, JSON.stringify(body), {
        headers: {
            "content-type": "application/json",
        }
    })

    check(response, {
        "sucessful_status: Status code is 200": (res) =>
            res.status === 200
    })

    return response
}

export const weightedCases = initCases([
    { weight: 100, case: sucessful_verify_lightswitch_with_all_queries_passing }
])