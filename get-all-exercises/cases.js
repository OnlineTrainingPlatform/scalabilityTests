import { check } from "k6"
import http from "k6/http"
import { initCases } from "../index.js"

export function sucessful_get_all_exercises() {
    const url = `http://172.28.198.118/api/v1/exercises`
    const response = http.get(url)

    check(response, {
        "sucessful_status: Status code is 200": (res) =>
            res.status === 200
    })

    return response
}

export const weightedCases = initCases([
    { weight: 100, case: sucessful_get_all_exercises }
])